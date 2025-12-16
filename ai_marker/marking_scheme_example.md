

MARKING INSTRUCTIONS:
1. Review the Student Submission PDF thoroughly (text, formulas, diagrams, tables).
2. Make sure that the work submitted corresponds to the assignment brief, if not (i.e. wrong script submitted, obvious plagiarism, traces of AI being used unethically), give zero mark straight away.
3. Do not assume that you need to invent anything on behalf of the student, i.e. do not fill in the gaps in their submission.
3. Apply the Marking Scheme criteria listed below in the tables for each section or question.
4. Reference specific evidence from the student's submitted PDF (page/paragraph).
5. Calculate marks precisely based on the marking scheme criteria. Identify gaps in student's work and apply critique approach thoroughly. Each mark must be backed up by the exact compliance to this marking scheme!
6. Total mark above 70 must be rarely given, only for outstanding work! Avoid using words like "outstanding", exceptional", "highly professional" etc in your feedback if full marks (or very high marks) are not given for the full assignment.
7. If marks are deduced for any section, the feedback must be given why the mark is deduced for that section/question.
8. All feedback has to be given using UK British English spelling.

IMPORTANT: In the overall_feedback field, you MUST start with exactly: "This assignment has been marked by [Marker Name] with the assistance of computer intelligence."

MARKING SCHEME CONTENT:
# Assessment Marking Scheme: ABC Air Information Security Audit

**Module:** Secure Design and Development (Audit Assignment)
**Total Marks:** 100
**Pass Mark:** 40

## Overview of Criteria
This marking scheme enforces adherence to the case study. Generic definitions of security concepts without direct application to the provided **ABC Air Flask Application documentation** will result in a capped grade (typically Third or Fail).

| Component | Weight | Key Requirement for High Marks |
| :--- | :---: | :--- |
| **1. Approach & Frameworks** | **20%** | Justification of Risk-based vs. Control-based approach specifically for a small aircraft service company. |
| **2. The Security Audit** | **50%** | Concrete findings based on the provided technical report (e.g., PythonAnywhere limitations, Flask specific vulnerabilities, specific logic flaws). |
| **3. Critical Evaluation** | **30%** | Critical debate on why specific frameworks (COBIT/ISO) help or hinder this specific type of SME. |

---

## Detailed Rubric

### Section 1: Identification & Adoption of Standards (20%)
*Focus: Selection of Audit Approach (Risk vs. Control) and Alignment with International Standards (ISO 27001, COBIT, ITIL).*

| Grade | Criteria Description |
| :--- | :--- |
| **First (70-100%)** | **Definitive & Strategic:**<br>- Clearly distinguishes between Risk-based and Control-based approaches and provides a compelling justification for the chosen method regarding ABC Air's size and sector.<br>- Selects specific, relevant controls from frameworks (e.g., ISO 27001 Annex A or COBIT APO/DSS domains) rather than listing the whole framework.<br>- Demonstrates deep insight into how these standards apply to a Python/Flask web application context. |
| **Upper Second (60-69%)** | **Applied & Specific:**<br>- Good attempt to justify the audit approach.<br>- Frameworks are correctly identified and linked to the scenario.<br>- Discussion goes beyond definitions, showing how standards would specifically govern the aircraft maintenance data.<br>- Minor gaps in linking the specific "Amber" AI usage or ethical constraints to the standards. |
| **Lower Second (50-59%)** | **Competent but Generic:**<br>- A suitable approach is selected but the justification is standard/generic.<br>- Frameworks (ISO/COBIT) are described accurately but applied loosely to the scenario.<br>- The link between the standard and the specific "ABC Air" context is present but superficial. |
| **Third (40-49%)** | **Descriptive:**<br>- Lists frameworks (e.g., "ISO 27001 is a standard for...") without real application.<br>- Fails to justify why one approach was chosen over another.<br>- Standards are treated as a "shopping list" rather than a tool for the audit. |
| **Fail (<40%)** | **Inadequate:**<br>- Fails to identify recognized frameworks or misidentifies them.<br>- No justification for the audit approach.<br>- Content is irrelevant to Information Security Auditing standards. |

---

### Section 2: Information Security Audit & Assurance (50%)
*Focus: Risk Assessment, Fault Event Analysis, Cyber-attack scenarios, and Auditing the provided documentation.*

**Marking Note:** This section must audit the **specific system** described in the brief (Flask app, PythonAnywhere, SQLite, etc.).

| Grade | Criteria Description |
| :--- | :--- |
| **First (70-100%)** | **Professional Grade Audit:**<br>- **Specific Findings:** Identifies subtle technical risks in the provided report (e.g., the contradiction between "Input validation" strengths and "No input sanitation" limitations, the reliance on a hardcoded "admin code" for registration).<br>- **Analysis:** Excellent use of Integrated Fault Event Analysis linking specific cyber threats (SQLi, XSS, Insider Threat) to business impact.<br>- **Mitigation:** Proposes concrete technical solutions (e.g., implementing CSRF protection, upgrading Flask-Login handling, specific 2FA libraries). |
| **Upper Second (60-69%)** | **Comprehensive Audit:**<br>- **Specific Findings:** Identifies major risks mentioned in the brief (Lack of 2FA, weak password enforcement, single-session limitations).<br>- **Analysis:** Good risk assessment covering Confidentiality, Integrity, and Availability.<br>- **Mitigation:** Recommendations are relevant and technically sound, though may lack implementation detail.<br>- Covers the GDPR compliance test results provided in the brief. |
| **Lower Second (50-59%)** | **General Audit:**<br>- **Findings:** Rephrases the "Limitations" table provided in the brief without adding new value or investigative insight.<br>- **Analysis:** Risk assessment is generic (e.g., "Hackers might steal data") rather than specific (e.g., "Engineers might manipulate maintenance logs").<br>- Misses technical details regarding the deployment environment (PythonAnywhere). |
| **Third (40-49%)** | **Basic Reporting:**<br>- **Findings:** Audit is superficial; essentially summarizes the assignment brief.<br>- **Analysis:** Limited understanding of risk assessment methodologies.<br>- Focuses on "what" the system does rather than "security risks" within the system.<br>- Misses key vulnerabilities explicitly stated in the provided text. |
| **Fail (<40%)** | **Non-Compliant:**<br>- Fails to perform an audit.<br>- Discusses a different system or generic aircraft security without referencing the provided IT documentation.<br>- No risk assessment or fault analysis present. |

---

### Section 3: Critical Evaluation of Frameworks (30%)
*Focus: Critical analysis of benefits/limitations of assurance models and reference models.*

| Grade | Criteria Description |
| :--- | :--- |
| **First (70-100%)** | **Insightful Critique:**<br>- **Critique:** Argues the *limitations* of heavy frameworks (like COBIT) for a small Flask-based app, perhaps suggesting tailored subsets.<br>- **Evidence:** Supported by high-quality academic/industry sources beyond the module reading list.<br>- **Synthesis:** Weaves the evaluation into the audit narrative, showing how framework limitations impacted the audit result. |
| **Upper Second (60-69%)** | **Balanced Argument:**<br>- **Critique:** Discusses both pros and cons of the chosen frameworks.<br>- **Evidence:** Good range of sources used to support arguments.<br>- Acknowledges that standards are not "silver bullets" and require adaptation for ABC Air. |
| **Lower Second (50-59%)** | **One-Sided Evaluation:**<br>- **Critique:** Mostly lists benefits of standards ("ISO is good because..."). Limitations are mentioned but not explored.<br>- **Evidence:** Reliance on standard textbooks or low-quality web sources.<br>- Discussion is somewhat detached from the practical audit work. |
| **Third (40-49%)** | **Factual Recall:**<br>- **Critique:** Very limited. Mostly describes the frameworks without evaluating them.<br>- **Evidence:** Poor referencing or limited sources.<br>- Structure is disjointed; the evaluation feels tacked on at the end. |
| **Fail (<40%)** | **No Evaluation:**<br>- No discussion of framework benefits or limitations.<br>- Personal opinion stated as fact without evidence.<br>- Plagiarism or lack of academic integrity. |

---

## Deduction & Penalty Guide

To ensure strict consistency, apply the following deductions:

1.  **Vague "Cookie-Cutter" Answers:** If the name "ABC Air" is swapped for another company and the report still makes sense, the maximum grade is **45%**.
2.  **Ignoring Provided Evidence:** If the audit ignores the specific technical details provided in pages 5-21 of the brief (e.g., Petri Nets, specific Python libraries used), cap Section 2 at **50%**.
3.  **Formatting/Professionalism:**
    * Missing Table of Contents/Structure: **-5 marks**.
    * Poor Citation (Not APA style): **-5 to -10 marks**.
    * Word Count Deviation (>10%): **-5 to -10 marks**.




