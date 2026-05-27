import os
import pypdf

pdf_dir = "/Users/aa3025/Documents_local/Domains/4001CMD/week_01"
output_dir = "/Users/aa3025/.gemini/antigravity/brain/42e26d3a-d718-49d3-a279-f2a64d396f37/scratch"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for pdf_file in ["Slides_1.1.pdf", "Slides_1.2.pdf", "4001cmd_tutorial_01.pdf"]:
    path = os.path.join(pdf_dir, pdf_file)
    if os.path.exists(path):
        reader = pypdf.PdfReader(path)
        text = ""
        for i, page in enumerate(reader.pages):
            text += f"--- Page {i+1} ---\n"
            text += page.extract_text() + "\n\n"
        
        out_path = os.path.join(output_dir, pdf_file.replace(".pdf", ".txt"))
        with open(out_path, "w") as f:
            f.write(text)
        print(f"Extracted {pdf_file} to {out_path}")
    else:
        print(f"File not found: {path}")

