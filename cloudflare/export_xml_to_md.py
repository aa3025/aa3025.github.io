import xml.etree.ElementTree as ET
import re
from pathlib import Path

xml_path = Path('/Volumes/Elements-aa3025/GitLab/aa3025.github.io/cloudflare/britishfederationofmathematicalgames.WordPress.2026-07-29.xml')
content_dir = Path('/Volumes/Elements-aa3025/GitLab/aa3025.github.io/cloudflare/content')
pages_dir = content_dir / 'pages'
posts_dir = content_dir / 'posts'

pages_dir.mkdir(parents=True, exist_ok=True)
posts_dir.mkdir(parents=True, exist_ok=True)

tree = ET.parse(xml_path)
root = tree.getroot()
channel = root.find('channel')

ns = {
    'wp': 'http://wordpress.org/export/1.2/',
    'content': 'http://purl.org/rss/1.0/modules/content/'
}

def slugify(title):
    s = title.lower()
    s = re.sub(r'[^a-z0-9\s-]', '', s)
    s = re.sub(r'[\s-]+', '-', s).strip('-')
    return s or 'item'

for item in channel.findall('item'):
    post_type_el = item.find('wp:post_type', ns)
    if post_type_el is None:
        continue
    post_type = post_type_el.text
    
    status_el = item.find('wp:status', ns)
    if status_el is not None and status_el.text != 'publish':
        continue
        
    if post_type not in ['page', 'post']:
        continue
        
    title = item.find('title').text or 'Untitled'
    post_name_el = item.find('wp:post_name', ns)
    slug = post_name_el.text if (post_name_el is not None and post_name_el.text) else slugify(title)
    
    date_el = item.find('wp:post_date', ns)
    date_str = date_el.text if date_el is not None else ''
    
    content_el = item.find('content:encoded', ns)
    content = content_el.text if content_el is not None and content_el.text else ''
    
    # Format frontmatter
    md_str = f"""---
title: "{title}"
date: "{date_str}"
slug: "{slug}"
type: "{post_type}"
---

{content}
"""
    target_dir = pages_dir if post_type == 'page' else posts_dir
    file_name = f"{slug}.md"
    out_file = target_dir / file_name
    
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(md_str)

print("Exported XML pages & posts into cloudflare/content/ successfully!")
