import json
from bs4 import BeautifulSoup

def validate_seo():
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")

    # 1. H1 Check
    h1s = soup.find_all("h1")
    print(f"H1 Count: {len(h1s)}")
    assert len(h1s) == 1, f"Expected 1 H1, got {len(h1s)}"
    print(f"H1 Text: {h1s[0].get_text(' ', strip=True)}")

    # 2. Title & Meta Check
    title = soup.find("title").get_text(strip=True)
    meta_desc = soup.find("meta", attrs={"name": "description"})["content"]
    print(f"Title ({len(title)} chars): {title}")
    print(f"Meta Description ({len(meta_desc)} chars): {meta_desc}")
    assert 40 <= len(title) <= 65, f"Title length warning: {len(title)}"
    assert 120 <= len(meta_desc) <= 170, f"Meta description length warning: {len(meta_desc)}"

    # 3. Canonical Check
    canonical = soup.find("link", attrs={"rel": "canonical"})["href"]
    print(f"Canonical: {canonical}")
    assert canonical == "https://fahadsaleembwp.vercel.app/"

    # 4. JSON-LD Check
    script = soup.find("script", attrs={"type": "application/ld+json"})
    assert script is not None, "JSON-LD script missing!"
    data = json.loads(script.string)
    print(f"JSON-LD @graph nodes count: {len(data['@graph'])}")

    # Check FAQ parity
    faq_node = next((node for node in data["@graph"] if node.get("@type") == "FAQPage"), None)
    assert faq_node is not None, "FAQPage node missing in JSON-LD!"
    json_faqs = faq_node["mainEntity"]
    print(f"JSON-LD FAQs: {len(json_faqs)}")

    html_faqs = soup.find_all("details", class_="faq-item")
    print(f"HTML FAQs: {len(html_faqs)}")
    assert len(json_faqs) == len(html_faqs), f"FAQ count mismatch: JSON-LD {len(json_faqs)} vs HTML {len(html_faqs)}"

    for i, (j_faq, h_faq) in enumerate(zip(json_faqs, html_faqs)):
        q_json = j_faq["name"].strip()
        q_html = h_faq.find("summary").find("span").get_text(strip=True)
        assert q_json == q_html, f"Q{i} mismatch:\nJSON: {q_json}\nHTML: {q_html}"
        print(f"[OK] FAQ {i+1} Question: {q_json[:45]}...")

    print("\nALL SEO VALIDATIONS PASSED PERFECTLY!")

if __name__ == "__main__":
    validate_seo()
