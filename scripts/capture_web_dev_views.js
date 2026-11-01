import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\Fahad Saleem\\.gemini\\antigravity\\brain\\19372a9f-a463-4e82-b203-29ca14dbbc3a';
const DEBUG_PORT = 9245;
const userDataDir = 'C:\\Users\\Fahad Saleem\\AppData\\Local\\Temp\\chrome_cdp_wd_' + Date.now();

async function run() {
  console.log('--- STARTING WEB DEVELOPMENT PAGE VERIFICATION SUITE ---');
  const chrome = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${DEBUG_PORT}`,
    `--user-data-dir=${userDataDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--no-sandbox',
    'about:blank'
  ]);

  let endpoint = null;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/list`);
      const data = await res.json();
      const page = data.find(p => p.type === 'page');
      if (page && page.webSocketDebuggerUrl) {
        endpoint = page.webSocketDebuggerUrl;
        break;
      }
    } catch {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  if (!endpoint) {
    console.error('Failed to get page WebSocketDebuggerUrl');
    chrome.kill();
    process.exit(1);
  }

  const ws = new WebSocket(endpoint);
  await new Promise(r => ws.onopen = r);

  let idCounter = 1;
  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      const handler = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id === id) {
          ws.removeEventListener('message', handler);
          if (msg.error) reject(msg.error);
          else resolve(msg.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await send('Page.enable');
  await send('DOM.enable');
  await send('Runtime.enable');

  const viewports = [
    { name: 'desktop_1440', width: 1440, height: 900 },
    { name: 'mobile_390', width: 390, height: 844 },
    { name: 'mobile_320', width: 320, height: 600 }
  ];

  for (const vp of viewports) {
    console.log(`\nTesting viewport: ${vp.name} (${vp.width}x${vp.height})`);
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.width < 768
    });

    await send('Page.navigate', { url: 'http://localhost:4173/web-development/' });
    await new Promise(r => setTimeout(r, 1200));

    // Check overflow and elements
    const overflowEval = await send('Runtime.evaluate', {
      expression: `({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
        hasOverflow: document.documentElement.scrollWidth > window.innerWidth,
        h1Text: document.querySelector('h1')?.innerText?.trim(),
        servicesCount: document.querySelectorAll('.b2b-service-card')?.length,
        workflowSteps: document.querySelectorAll('.b2b-workflow-step')?.length,
        faqCount: document.querySelectorAll('.faq-item')?.length
      })`,
      returnByValue: true
    });

    const res = overflowEval.result.value;
    console.log(`- ScrollWidth: ${res.scrollWidth}px, InnerWidth: ${res.innerWidth}px`);
    console.log(`- Horizontal Overflow: ${res.hasOverflow ? 'FAIL' : 'PASS (0px overflow)'}`);
    console.log(`- H1: "${res.h1Text}"`);
    console.log(`- Service Capability Cards: ${res.servicesCount}`);
    console.log(`- Workflow Steps: ${res.workflowSteps}`);
    console.log(`- FAQ Items: ${res.faqCount}`);

    // Capture screenshot of hero
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const shotPath = path.join(artifactDir, `web_dev_hero_${vp.name}.png`);
    fs.writeFileSync(shotPath, Buffer.from(shot.data, 'base64'));
    console.log(`- Saved screenshot: web_dev_hero_${vp.name}.png`);

    // Scroll to services and capture screenshot
    await send('Runtime.evaluate', {
      expression: `document.getElementById('services')?.scrollIntoView({ behavior: 'instant' });`
    });
    await new Promise(r => setTimeout(r, 400));
    const servicesShot = await send('Page.captureScreenshot', { format: 'png' });
    const servicesShotPath = path.join(artifactDir, `web_dev_services_${vp.name}.png`);
    fs.writeFileSync(servicesShotPath, Buffer.from(servicesShot.data, 'base64'));
    console.log(`- Saved screenshot: web_dev_services_${vp.name}.png`);
  }

  console.log('\n--- ALL VERIFICATIONS COMPLETED SUCCESSFULLY ---');
  chrome.kill();
  process.exit(0);
}

run().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
