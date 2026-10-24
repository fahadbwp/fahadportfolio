// Optional test tooling: install Playwright or point PLAYWRIGHT_MODULE at its entry file.
import { pathToFileURL } from 'node:url';
import os from 'node:os';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const mode = process.argv[2] || 'after';
const out = path.resolve('artifacts/b2b-ux');
fs.mkdirSync(out,{recursive:true});
const server = createServer((req,res)=>{
 const name=decodeURIComponent(req.url.split('?')[0]);
 const file=path.join(process.cwd(),'dist',name.endsWith('/')?name+'index.html':name);
 if(!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}
 res.setHeader('Content-Type',({'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.woff2':'font/woff2','.webp':'image/webp'})[path.extname(file)]||'application/octet-stream');
 res.end(fs.readFileSync(file));
}).listen(4174,'127.0.0.1');
const chrome=spawn(process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--remote-debugging-port=9236',`--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'b2b-ux-chrome-'))}`,'--no-first-run','about:blank'],{stdio:'ignore',windowsHide:true});
let browser;
try {
 for(let i=0;i<50;i++){try{browser=await chromium.connectOverCDP('http://127.0.0.1:9236');break;}catch{await new Promise(r=>setTimeout(r,200));}}
 const page=await browser.newPage();
 const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 const results=[];
 for(const width of [320,375,390,430,768,1366,1440]){
  await page.setViewportSize({width,height:900});
  await page.goto(mode==='before'?'https://fahadsaleembwp.vercel.app/b2b-lead-generation/':'http://127.0.0.1:4174/b2b-lead-generation/');
  await page.evaluate(()=>document.fonts.ready);
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.screenshot({path:`${out}/${mode}-hero-${width}.png`});
  const row=await page.evaluate(()=>{
   const rect=s=>{const r=document.querySelector(s).getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,bottom:r.bottom};};
   const faq=document.querySelector('#faq');const item=faq.querySelector('details');
   return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,hero:rect('.hero-section'),breadcrumb:rect('.b2b-breadcrumb'),header:rect('.site-header'),actions:rect('.hero-actions'),faqBackground:getComputedStyle(faq).background,faqItemBackground:getComputedStyle(item).backgroundColor,faqColor:getComputedStyle(item.querySelector('summary')).color,home:[...document.querySelectorAll('a[href="/"]')].map(a=>({text:a.textContent.trim(),width:a.getBoundingClientRect().width,scrollWidth:a.scrollWidth,clientWidth:a.clientWidth}))};
  });
  await page.locator('.portfolio-btn').scrollIntoViewIfNeeded();
  await page.screenshot({path:`${out}/${mode}-home-${width}.png`});
  await page.locator('#faq').evaluate(e=>{e.querySelectorAll('details').forEach(d=>d.open=false);e.scrollIntoView();});
  await page.screenshot({path:`${out}/${mode}-faq-collapsed-${width}.png`});
  const faqs=page.locator('#faq details');
  for(let i=0;i<6;i++) {await faqs.nth(i).locator('summary').click();if(!await faqs.nth(i).getAttribute('open').then(x=>x!==null))throw Error('FAQ failed');await faqs.nth(i).locator('summary').click();}
  await faqs.first().locator('summary').click();
  await page.locator('#faq').scrollIntoViewIfNeeded();
  await page.screenshot({path:`${out}/${mode}-faq-expanded-${width}.png`});
  await page.locator('#menu-toggle').click();
  row.drawer=await page.locator('#mobile-drawer').evaluate(e=>({active:e.classList.contains('is-active'),width:e.clientWidth,scrollWidth:e.scrollWidth,height:e.clientHeight,scrollHeight:e.scrollHeight}));
  await page.screenshot({path:`${out}/${mode}-drawer-${width}.png`});
  await page.keyboard.press('Escape');
  row.focusRestored=await page.locator('#menu-toggle').evaluate(e=>document.activeElement===e);
  if(mode==='after') {
   row.checks=await page.evaluate(()=>{
    const norm=s=>s.replace(/\s+/g,' ').trim();
    const graph=JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)['@graph'];
    const schema=graph.find(x=>x['@type']==='FAQPage').mainEntity;
    const faq=[...document.querySelectorAll('#faq details')];
    const badLinks=[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash);
    const clipped=[...document.querySelectorAll('main a, footer a')].filter(a=>{const r=a.getBoundingClientRect();return r.width && (r.left<0||r.right>document.documentElement.clientWidth+1||a.scrollWidth>a.clientWidth+1);}).map(a=>norm(a.textContent));
    return {schemaMatches:schema.length===6&&faq.every((d,i)=>norm(d.querySelector('summary span').textContent)===norm(schema[i].name)&&norm(d.querySelector('.faq-content').textContent)===norm(schema[i].acceptedAnswer.text)),badLinks,clipped,reducedMotion:getComputedStyle(document.documentElement).scrollBehavior,homeHref:document.querySelector('.portfolio-btn').getAttribute('href')};
   });
   await page.locator('#menu-toggle').click();
   await page.keyboard.press('Shift+Tab');
   row.reverseTrap=await page.locator('.mobile-drawer-footer a').last().evaluate(e=>document.activeElement===e);
   await page.keyboard.press('Tab');
   row.forwardTrap=await page.locator('#drawer-close').evaluate(e=>document.activeElement===e);
   await page.keyboard.press('Escape');
   await page.locator('.portfolio-btn').focus();
   row.focusOutline=await page.locator('.portfolio-btn').evaluate(e=>({style:getComputedStyle(e).outlineStyle,width:getComputedStyle(e).outlineWidth}));
   row.samples=[];
   for(let i=0;i<4;i++){
    await page.locator('[data-modal-target]').nth(i).click();
    row.samples.push(await page.locator('.case-modal.is-open img').evaluate(e=>e.complete&&e.naturalWidth>0));
    await page.keyboard.press('Escape');
   }
   await page.locator('.hero-actions a').first().click();
   row.anchorClearance=await page.locator('#contact').evaluate(e=>e.getBoundingClientRect().top);
   await page.locator('.portfolio-btn').click();
   row.homeNavigation=new URL(page.url()).pathname==='/' && (await page.locator('h1').count())>0;
   row.homeTargets=await page.evaluate(()=>['projects','leadgen','services','feedback','faq'].every(id=>document.getElementById(id)));
   if(row.scrollWidth>width||row.breadcrumb.y<row.header.bottom||!row.drawer.active||row.drawer.scrollWidth>width||!row.focusRestored||!row.reverseTrap||!row.forwardTrap||!row.checks.schemaMatches||row.checks.badLinks.length||row.checks.clipped.length||row.checks.reducedMotion!=='auto'||row.focusOutline.style!=='solid'||row.anchorClearance<row.header.bottom||!row.homeNavigation||!row.homeTargets||row.samples.some(x=>!x)) throw Error(JSON.stringify(row));
  }
  results.push(row);
 }
 if(mode==='after') {
  await page.setViewportSize({width:320,height:568});
  await page.goto('http://127.0.0.1:4174/b2b-lead-generation/');
  await page.locator('#menu-toggle').click();
  await page.locator('.mobile-drawer-footer a').last().scrollIntoViewIfNeeded();
  const shortDrawer=await page.locator('.mobile-drawer-footer a').last().evaluate(e=>{const r=e.getBoundingClientRect();return {visible:r.top>=0&&r.bottom<=innerHeight,width:innerWidth,scrollWidth:document.querySelector('.mobile-drawer').scrollWidth};});
  await page.screenshot({path:`${out}/after-short-drawer-320.png`});
  await page.keyboard.press('Escape');
  const external=[];
  for(const url of ['https://www.upwork.com/freelancers/~01402e2d3e4f4322b7','https://github.com/fahadbwp']){
   try {const response=await page.goto(url,{timeout:20000,waitUntil:'domcontentloaded'});external.push({url,status:response.status(),title:await page.title()});}catch(e){external.push({url,error:e.message});}
  }
  fs.writeFileSync(`${out}/additional-checks.json`,JSON.stringify({shortDrawer,external,errors},null,2));
  if(!shortDrawer.visible||shortDrawer.scrollWidth>320||errors.length) throw Error('Short drawer or console regression');
 }
 fs.writeFileSync(`${out}/${mode}-results.json`,JSON.stringify(results,null,2));
 console.log(`Passed ${mode} checks at ${results.map(r=>r.width).join(', ')}px. Evidence: ${out}`);
} finally {await browser?.close();chrome.kill();server.close();}

