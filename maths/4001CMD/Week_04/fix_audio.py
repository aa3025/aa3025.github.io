import os
import json
import re

base_dir = "/Users/aa3025/Documents_local/Domains/4001CMD"
week4_dir = os.path.join(base_dir, "week_04")
week4_new_dir = os.path.join(base_dir, "week_04_new")

with open(os.path.join(week4_dir, "index.html"), "r") as f:
    html_content = f.read()

try:
    course_name = re.search(r'<h1.*?>(.*?)</h1>', html_content, re.DOTALL).group(1).strip()
    lecture_title = re.search(r'<h2.*?>(.*?)</h2>', html_content, re.DOTALL).group(1).strip()
except Exception:
    course_name = "4001CMD"
    lecture_title = "Lecture 4"

sections_data = []

sections_raw = re.findall(r'<section(.*?)>(.*?)</section>', html_content, re.DOTALL)

for sec_attr, sec_body in sections_raw:
    if "lecture-section" not in sec_attr:
        continue
    
    sec_id_match = re.search(r'id=["\'](.*?)["\']', sec_attr)
    sec_id = sec_id_match.group(1) if sec_id_match else f"section-{len(sections_data)}"
    
    title_match = re.search(r'(<h3[^>]*>)(.*?)(</h3>)', sec_body, re.DOTALL)
    title = title_match.group(2).strip() if title_match else f"Section {len(sections_data)}"
    
    # Extract audio MORE ROBUSTLY
    audio_file = ""
    # Search for slideX.mp3 directly in the whole section body
    audio_match = re.search(r'(slide\d+\.mp3)', sec_body)
    if audio_match:
        audio_file = "audio/" + audio_match.group(1)
        
    content = sec_body
    if title_match:
        content = content.replace(title_match.group(0), "", 1)
    
    content = re.sub(r'<button[^>]*class=["\'][^"\']*audio-btn.*?</button>', '', content, flags=re.DOTALL)
    content = content.strip()
    
    content_blocks = [{"type": "html", "text": content}]
        
    sections_data.append({
        "title": title,
        "id": sec_id,
        "audioFile": audio_file,
        "content": content_blocks
    })

lecture_data = {
    "courseName": course_name,
    "lectureTitle": lecture_title,
    "sections": sections_data
}

js_content = "const lectureData = " + json.dumps(lecture_data, indent=4) + ";\n"

with open(os.path.join(week4_new_dir, "lecture_04.js"), "w") as f:
    f.write(js_content)

print(f"Extraction complete! Wrote {len(sections_data)} sections.")
