#!/usr/bin/env python3
"""
convert_week1_to_inspera_qti.py

Converts Week 1 Quiz Bank (Week1_Quiz_Bank.js) into a QTI 2.1 ZIP package
compatible with Inspera Assessment, with exact Inspera LaTeX math syntax.
"""

import os
import re
import json
import zipfile
import xml.etree.ElementTree as ET
from xml.dom import minidom

QUIZ_JS_PATH = "/Users/aa3025/GitLab/4014SCN-Calculus-and-Applications/4014SCN_Quizzes/Week1/Week1_Quiz_Bank.js"
OUTPUT_DIR = "/Users/aa3025/GitLab/4014SCN-Calculus-and-Applications/4014SCN_Quizzes/Week1"
OUTPUT_ZIP = os.path.join(OUTPUT_DIR, "Week1_Inspera_QTI21.zip")


def load_quiz_json(js_file_path):
    """Extract JSON object from window.QUIZ_BANK_WEEK1 = {...};"""
    with open(js_file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    json_str = re.sub(r'^\s*window\.QUIZ_BANK_WEEK\d+\s*=\s*', '', content).strip()
    if json_str.endswith(';'):
        json_str = json_str[:-1].strip()
        
    return json.loads(json_str)


def format_inspera_html(text):
    """
    Convert $...$ and $$...$$ LaTeX expressions to Inspera's <span class="math-tex">\(...\)</span>
    """
    if not text:
        return ""

    # Replace display math $$ ... $$ -> <span class="math-tex">\[ ... \]</span>
    def replace_display_math(match):
        math_content = match.group(1).strip()
        return f'<span class="math-tex">\\[{math_content}\\]</span>'

    # Replace inline math $ ... $ -> <span class="math-tex">\( ... \)</span>
    def replace_inline_math(match):
        math_content = match.group(1).strip()
        return f'<span class="math-tex">\\({math_content}\\)</span>'

    # First handle $$ ... $$
    processed = re.sub(r'\$\$(.*?)\$\$', replace_display_math, text, flags=re.DOTALL)
    # Next handle $ ... $
    processed = re.sub(r'\$(.*?)\$', replace_inline_math, processed, flags=re.DOTALL)

    return processed


def generate_qti_item_xml(q_data):
    """Generate Inspera-compatible QTI 2.1 XML for a single question item."""
    q_id = q_data["id"]
    week_num = q_data.get("week", 1)
    tier_label = q_data.get("tier", "core").upper().replace("_", " ")
    
    # Marks scheme based on difficulty tier
    tier_name = q_data.get("tier", "core").lower()
    tier_marks_map = {
        "core": 1.0,
        "should": 2.0,
        "nice_to_know": 3.0,
        "extra": 4.0
    }
    marks = tier_marks_map.get(tier_name, 1.0)
    marks_str = str(int(marks) if marks.is_integer() else marks)
    
    # Title format: 4014SCN_W1_W1-T1-Q01_[CORE] Topic Name
    title = f"4014SCN_W{week_num}_{q_id}_[{tier_label}]"
    if "topic" in q_data:
        title += f" {q_data['topic']}"
    q_type = q_data["type"]  # 'single_select' or 'multiple_select'
    
    cardinality = "single" if q_type == "single_select" else "multiple"
    
    # Root assessmentItem
    item = ET.Element("assessmentItem", {
        "xmlns": "http://www.imsglobal.org/xsd/imsqti_v2p1",
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xsi:schemaLocation": "http://www.imsglobal.org/xsd/imsqti_v2p1 http://www.imsglobal.org/xsd/imsqti_v2p1.xsd",
        "identifier": q_id,
        "title": title,
        "adaptive": "false",
        "timeDependent": "false"
    })
    
    # responseDeclaration
    resp_decl = ET.SubElement(item, "responseDeclaration", {
        "identifier": "RESPONSE",
        "cardinality": cardinality,
        "baseType": "identifier"
    })
    
    correct_resp = ET.SubElement(resp_decl, "correctResponse")
    for correct_id in q_data["correct_indices"]:
        val = ET.SubElement(correct_resp, "value")
        val.text = correct_id
        
    # mapping for scoring with tier mark value
    num_correct = len(q_data["correct_indices"])
    val_per_option = marks / num_correct if num_correct > 0 else marks
    val_per_option_str = str(int(val_per_option) if val_per_option.is_integer() else val_per_option)

    mapping = ET.SubElement(resp_decl, "mapping", {"defaultValue": "0"})
    for correct_id in q_data["correct_indices"]:
        ET.SubElement(mapping, "mapEntry", {"mapKey": correct_id, "mappedValue": val_per_option_str})
        
    # outcomeDeclaration for Score
    outcome_decl = ET.SubElement(item, "outcomeDeclaration", {
        "identifier": "SCORE",
        "cardinality": "single",
        "baseType": "float"
    })
    def_val = ET.SubElement(outcome_decl, "defaultValue")
    val_score = ET.SubElement(def_val, "value")
    val_score.text = "0"
    
    ET.SubElement(item, "outcomeDeclaration", {
        "identifier": "FEEDBACK",
        "cardinality": "single",
        "baseType": "identifier"
    })
    
    # Inspera templateDeclarations for scoring defaults
    tmpl_correct = ET.SubElement(item, "templateDeclaration", {
        "identifier": "SCORE_EACH_CORRECT",
        "cardinality": "single",
        "baseType": "float"
    })
    def_c = ET.SubElement(tmpl_correct, "defaultValue")
    v_c = ET.SubElement(def_c, "value")
    v_c.text = marks_str
    
    tmpl_wrong = ET.SubElement(item, "templateDeclaration", {
        "identifier": "SCORE_EACH_WRONG",
        "cardinality": "single",
        "baseType": "float"
    })
    def_w = ET.SubElement(tmpl_wrong, "defaultValue")
    v_w = ET.SubElement(def_w, "value")
    v_w.text = "0"
    
    # itemBody
    item_body = ET.SubElement(item, "itemBody")
    
    # Question text prompt inside <p>
    formatted_q_text = format_inspera_html(q_data["question"])
    # We parse HTML fragments safely
    p_prompt = ET.Element("p")
    # Using XML string fragment injection for html spans inside <p>
    p_prompt_xml_str = f"<p>{formatted_q_text}</p>"
    try:
        p_prompt_elem = ET.fromstring(p_prompt_xml_str)
        item_body.append(p_prompt_elem)
    except Exception:
        p_prompt.text = q_data["question"]
        item_body.append(p_prompt)
    
    # choiceInteraction
    choice_interaction = ET.SubElement(item_body, "choiceInteraction", {
        "responseIdentifier": "RESPONSE",
        "shuffle": "true",
        "maxChoices": "1" if cardinality == "single" else str(len(q_data["options"]))
    })
    
    for opt in q_data["options"]:
        simple_choice = ET.SubElement(choice_interaction, "simpleChoice", {
            "identifier": opt["id"]
        })
        span_wrap = ET.SubElement(simple_choice, "span")
        
        formatted_opt_text = format_inspera_html(opt["text"])
        opt_p_xml_str = f"<p>{formatted_opt_text}</p>"
        try:
            p_opt_elem = ET.fromstring(opt_p_xml_str)
            span_wrap.append(p_opt_elem)
        except Exception:
            p_opt = ET.SubElement(span_wrap, "p")
            p_opt.text = opt["text"]
        
    # responseProcessing
    resp_proc = ET.SubElement(item, "responseProcessing", {
        "template": "http://www.imsglobal.org/xsd/imsqti_v2p1/rptemplates/match_correct"
    })
    
    # Modal feedback / explanation if available
    if "explanation" in q_data and q_data["explanation"]:
        modal_fb = ET.SubElement(item, "modalFeedback", {
            "outcomeIdentifier": "FEEDBACK",
            "identifier": "feedback_correct",
            "showHide": "show"
        })
        formatted_fb = format_inspera_html(q_data["explanation"])
        fb_div_xml = f"<div>{formatted_fb}</div>"
        try:
            div_fb_elem = ET.fromstring(fb_div_xml)
            modal_fb.append(div_fb_elem)
        except Exception:
            div_fb = ET.SubElement(modal_fb, "div")
            div_fb.text = q_data["explanation"]
        
    rough_string = ET.tostring(item, 'utf-8')
    reparsed = minidom.parseString(rough_string)
    return reparsed.toprettyxml(indent="  ")


def generate_imsmanifest_xml(questions):
    """Generate manifest xml listing all question resources."""
    manifest = ET.Element("manifest", {
        "xmlns": "http://www.imsglobal.org/xsd/imscp_v1p1",
        "xmlns:imsmd": "http://www.imsglobal.org/xsd/imsmd_v1p2",
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "identifier": "MANIFEST",
        "version": "1.1"
    })
    
    resources = ET.SubElement(manifest, "resources")
    
    for q in questions:
        q_id = q["id"]
        res = ET.SubElement(resources, "resource", {
            "identifier": q_id,
            "type": "imsqti_item_xmlv2p1",
            "href": f"{q_id}-item.xml"
        })
        ET.SubElement(res, "file", {"href": f"{q_id}-item.xml"})
        
    rough_string = ET.tostring(manifest, 'utf-8')
    reparsed = minidom.parseString(rough_string)
    return reparsed.toprettyxml(indent="  ")


def main():
    print(f"Loading Week 1 Quiz Bank from: {QUIZ_JS_PATH}")
    quiz_data = load_quiz_json(QUIZ_JS_PATH)
    questions = quiz_data.get("questions", [])
    
    print(f"Total questions found: {len(questions)}")
    
    # Create QTI ZIP file
    with zipfile.ZipFile(OUTPUT_ZIP, 'w', zipfile.ZIP_DEFLATED) as zf:
        # 1. Add individual question XML files
        for q in questions:
            q_id = q["id"]
            xml_content = generate_qti_item_xml(q)
            zf.writestr(f"{q_id}-item.xml", xml_content)
            
        # 2. Add imsmanifest.xml
        manifest_content = generate_imsmanifest_xml(questions)
        zf.writestr("imsmanifest.xml", manifest_content)
        
    print(f"✅ Inspera-compatible QTI 2.1 Package created at:\n{OUTPUT_ZIP}")


if __name__ == "__main__":
    main()
