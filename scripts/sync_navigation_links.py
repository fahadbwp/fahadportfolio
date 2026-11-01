import re

def update_index_nav():
    with open("index.html", "r", encoding="utf-8") as f:
        content = f.read()

    # Drawer
    old_drawer = '''      <li><a href="#hero">Home</a></li>
      <li><a href="/b2b-lead-generation/">B2B Lead Generation <span class="count-pill">PAGE</span></a></li>'''
    new_drawer = '''      <li><a href="#hero">Home</a></li>
      <li><a href="/web-development/">Web Development <span class="count-pill">PAGE</span></a></li>
      <li><a href="/b2b-lead-generation/">B2B Lead Generation <span class="count-pill">PAGE</span></a></li>'''
    content = content.replace(old_drawer, new_drawer, 1)

    # Footer nav
    old_footer = '''              <li><a href="#hero" class="footer-nav-v2-link">Home</a></li>
              <li><a href="/b2b-lead-generation/" class="footer-nav-v2-link">B2B Lead Generation <span class="count-pill">PAGE</span></a></li>'''
    new_footer = '''              <li><a href="#hero" class="footer-nav-v2-link">Home</a></li>
              <li><a href="/web-development/" class="footer-nav-v2-link">Web Development <span class="count-pill">PAGE</span></a></li>
              <li><a href="/b2b-lead-generation/" class="footer-nav-v2-link">B2B Lead Generation <span class="count-pill">PAGE</span></a></li>'''
    content = content.replace(old_footer, new_footer, 1)

    # Capabilities Row 1 action
    old_cap_btn = '''          <div class="editorial-action" style="display: flex; flex-direction: column; gap: 8px;">
            <a href="#projects" class="editorial-btn">Explore Live Apps ↗</a>
            <a href="#contact" class="editorial-btn secondary" style="font-size: 11px;">Start a Project ↓</a>
          </div>'''
    new_cap_btn = '''          <div class="editorial-action" style="display: flex; flex-direction: column; gap: 8px;">
            <a href="/web-development/" class="editorial-btn">Dedicated Service Page ↗</a>
            <a href="#projects" class="editorial-btn secondary" style="font-size: 11px;">Explore Live Apps ↓</a>
          </div>'''
    content = content.replace(old_cap_btn, new_cap_btn, 1)

    with open("index.html", "w", encoding="utf-8") as f:
        f.write(content)
    print("index.html navigation updated!")

def update_b2b_nav():
    with open("b2b-lead-generation/index.html", "r", encoding="utf-8") as f:
        content = f.read()

    # Drawer
    if '<li><a href="/web-development/">Web Development ↗</a></li>' not in content:
        content = content.replace(
            '<li><a href="/" style="color: var(--mint); font-weight: 700;">← Back to Main Portfolio</a></li>',
            '<li><a href="/" style="color: var(--mint); font-weight: 700;">← Back to Main Portfolio</a></li>\n        <li><a href="/web-development/">Web Development ↗</a></li>',
            1
        )
    # Footer
    if '<li><a href="/web-development/" class="footer-nav-v2-link">Web Development <span class="count-pill">PAGE</span></a></li>' not in content:
        content = content.replace(
            '<li><a href="/" class="footer-nav-v2-link">← Main Portfolio</a></li>',
            '<li><a href="/" class="footer-nav-v2-link">← Main Portfolio</a></li>\n                <li><a href="/web-development/" class="footer-nav-v2-link">Web Development <span class="count-pill">PAGE</span></a></li>',
            1
        )

    with open("b2b-lead-generation/index.html", "w", encoding="utf-8") as f:
        f.write(content)
    print("b2b-lead-generation/index.html navigation updated!")

def update_data_research_nav():
    with open("data-research/index.html", "r", encoding="utf-8") as f:
        content = f.read()

    # Drawer
    if '<li><a href="/web-development/">Web Development ↗</a></li>' not in content:
        content = content.replace(
            '<li><a href="/" style="color: var(--mint); font-weight: 700;">← Back to Main Portfolio</a></li>',
            '<li><a href="/" style="color: var(--mint); font-weight: 700;">← Back to Main Portfolio</a></li>\n        <li><a href="/web-development/">Web Development ↗</a></li>',
            1
        )
    # Footer
    if '<li><a href="/web-development/" class="footer-nav-v2-link">Web Development <span class="count-pill">PAGE</span></a></li>' not in content:
        content = content.replace(
            '<li><a href="/" class="footer-nav-v2-link">← Main Portfolio</a></li>',
            '<li><a href="/" class="footer-nav-v2-link">← Main Portfolio</a></li>\n                <li><a href="/web-development/" class="footer-nav-v2-link">Web Development <span class="count-pill">PAGE</span></a></li>',
            1
        )

    with open("data-research/index.html", "w", encoding="utf-8") as f:
        f.write(content)
    print("data-research/index.html navigation updated!")

if __name__ == "__main__":
    update_index_nav()
    update_b2b_nav()
    update_data_research_nav()
