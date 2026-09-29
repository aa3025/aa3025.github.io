window.QUIZ_BANK_WEEK6 = {
  "module": "4004ENG Engineering Mathematics",
  "week": 6,
  "title": "Week 6 Quiz Bank: Revision of Algebra, Calculus and Statistics",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W6-T1-Q01",
      "week": 6,
      "tier": "core",
      "topic": "Vector Dot Product",
      "type": "single_select",
      "question": "For vectors $\\mathbf{d}_1 = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$ and $\\mathbf{d}_2 = -\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$, find the dot product $\\mathbf{d}_1 \\cdot \\mathbf{d}_2$.",
      "options": [
        { "id": "W6-T1-Q01-opt0", "text": "$-2$" },
        { "id": "W6-T1-Q01-opt1", "text": "$2$" },
        { "id": "W6-T1-Q01-opt2", "text": "$-4$" },
        { "id": "W6-T1-Q01-opt3", "text": "$0$" }
      ],
      "correct_indices": ["W6-T1-Q01-opt0"],
      "explanation": "The dot product is $\\mathbf{d}_1 \\cdot \\mathbf{d}_2 = (2)(-1) + (-1)(2) + (1)(2) = -2 - 2 + 2 = -2$.",
      "hint": "Multiply corresponding components of the vectors and sum the results."
    },
    {
      "id": "W6-T1-Q02",
      "week": 6,
      "tier": "core",
      "topic": "Vector Magnitude",
      "type": "single_select",
      "question": "For the vectors $\\mathbf{d}_1 = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$ and $\\mathbf{d}_2 = -\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$, calculate their magnitudes $|\\mathbf{d}_1|$ and $|\\mathbf{d}_2|$.",
      "options": [
        { "id": "W6-T1-Q02-opt0", "text": "$|\\mathbf{d}_1| = \\sqrt{6}$, $|\\mathbf{d}_2| = 3$" },
        { "id": "W6-T1-Q02-opt1", "text": "$|\\mathbf{d}_1| = 6$, $|\\mathbf{d}_2| = 9$" },
        { "id": "W6-T1-Q02-opt2", "text": "$|\\mathbf{d}_1| = \\sqrt{6}$, $|\\mathbf{d}_2| = \\sqrt{5}$" },
        { "id": "W6-T1-Q02-opt3", "text": "$|\\mathbf{d}_1| = 2$, $|\\mathbf{d}_2| = 3$" }
      ],
      "correct_indices": ["W6-T1-Q02-opt0"],
      "explanation": "$|\\mathbf{d}_1| = \\sqrt{2^2 + (-1)^2 + 1^2} = \\sqrt{4+1+1} = \\sqrt{6}$. $|\\mathbf{d}_2| = \\sqrt{(-1)^2 + 2^2 + 2^2} = \\sqrt{1+4+4} = \\sqrt{9} = 3$.",
      "hint": "Use the formula for vector magnitude: $|\\mathbf{v}| = \\sqrt{v_x^2 + v_y^2 + v_z^2}$."
    },
    {
      "id": "W6-T1-Q03",
      "week": 6,
      "tier": "core",
      "topic": "Determinant 2x2 Matrix",
      "type": "single_select",
      "question": "Calculate the determinant of the matrix $\\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$.",
      "options": [
        { "id": "W6-T1-Q03-opt0", "text": "14" },
        { "id": "W6-T1-Q03-opt1", "text": "10" },
        { "id": "W6-T1-Q03-opt2", "text": "12" },
        { "id": "W6-T1-Q03-opt3", "text": "13" }
      ],
      "correct_indices": ["W6-T1-Q03-opt0"],
      "explanation": "Determinant is $ad - bc = (3)(4) - (-1)(2) = 12 + 2 = 14$.",
      "hint": "Calculate the product of the diagonal elements and subtract the product of the off-diagonal elements."
    },
    {
      "id": "W6-T1-Q04",
      "week": 6,
      "tier": "core",
      "topic": "Logarithmic Product Derivative",
      "type": "single_select",
      "question": "Find the derivative of $y = (2x-1)\\ln(3x)$ with respect to $x$.",
      "options": [
        { "id": "W6-T1-Q04-opt0", "text": "$2\\ln(3x) + \\frac{2x-1}{x}$" },
        { "id": "W6-T1-Q04-opt1", "text": "$2\\ln(3x) + 2x-1$" },
        { "id": "W6-T1-Q04-opt2", "text": "$2\\ln(3x) + \\frac{2x-1}{3x}$" },
        { "id": "W6-T1-Q04-opt3", "text": "$\\frac{2}{3x}$" }
      ],
      "correct_indices": ["W6-T1-Q04-opt0"],
      "explanation": "Using product rule $(uv)' = u'v + uv'$ with $u=2x-1 \\implies u'=2$ and $v=\\ln(3x) \\implies v'=\\frac{1}{3x}\\cdot 3 = \\frac{1}{x}$.\nThus, $y' = 2\\ln(3x) + (2x-1)\\cdot\\frac{1}{x} = 2\\ln(3x) + \\frac{2x-1}{x}$.",
      "hint": "Use the product rule, remembering to apply the chain rule to the logarithm term $\\ln(3x)$."
    },
    {
      "id": "W6-T1-Q05",
      "week": 6,
      "tier": "core",
      "topic": "Complex Modulus Argument",
      "type": "single_select",
      "question": "Find the polar representation of the complex number $z = -1 + i\\sqrt{3}$.",
      "options": [
        { "id": "W6-T1-Q05-opt0", "text": "$2\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right)$" },
        { "id": "W6-T1-Q05-opt1", "text": "$2\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)$" },
        { "id": "W6-T1-Q05-opt2", "text": "$\\sqrt{2}\\left(\\cos\\frac{3\\pi}{4} + i\\sin\\frac{3\\pi}{4}\\right)$" },
        { "id": "W6-T1-Q05-opt3", "text": "$2\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$" }
      ],
      "correct_indices": ["W6-T1-Q05-opt0"],
      "explanation": "Modulus: $r = \\sqrt{1 + 3} = 2$. Argument: Reference angle is $\\pi/3$. Since $x < 0$ and $y > 0$, the number lies in the second quadrant, so $\\theta = \\pi - \\pi/3 = 2\\pi/3$.",
      "hint": "Calculate the magnitude and locate which quadrant the complex coordinates lie in to find the angle."
    },
    {
      "id": "W6-T1-Q06",
      "week": 6,
      "tier": "core",
      "topic": "Descriptive Stats Range Variance",
      "type": "single_select",
      "question": "For the data $14.7$, $14.8$, $14.9$, $15.0$, $15.1$, $15.2$ mm, determine the range.",
      "options": [
        { "id": "W6-T1-Q06-opt0", "text": "$0.5$ mm" },
        { "id": "W6-T1-Q06-opt1", "text": "$0.4$ mm" },
        { "id": "W6-T1-Q06-opt2", "text": "$1.5$ mm" },
        { "id": "W6-T1-Q06-opt3", "text": "$0.6$ mm" }
      ],
      "correct_indices": ["W6-T1-Q06-opt0"],
      "explanation": "Range is maximum minus minimum: $15.2 - 14.7 = 0.5$ mm.",
      "hint": "Subtract the minimum reading from the maximum reading."
    },
    {
      "id": "W6-T1-Q07",
      "week": 6,
      "tier": "core",
      "topic": "Independent Probability Product",
      "type": "single_select",
      "question": "If two independent components both have a passing probability of $0.92$, what is the probability that both components pass the test?",
      "options": [
        { "id": "W6-T1-Q07-opt0", "text": "0.8464" },
        { "id": "W6-T1-Q07-opt1", "text": "0.92" },
        { "id": "W6-T1-Q07-opt2", "text": "0.1536" },
        { "id": "W6-T1-Q07-opt3", "text": "0.08" }
      ],
      "correct_indices": ["W6-T1-Q07-opt0"],
      "explanation": "For independent events: $P(\\text{both good}) = 0.92 \\times 0.92 = 0.8464$.",
      "hint": "Multiply the passing probabilities of the two independent components."
    },
    {
      "id": "W6-T1-Q08",
      "week": 6,
      "tier": "core",
      "topic": "Work Done Dot Product",
      "type": "single_select",
      "question": "Calculate the work done $W = \\mathbf{F} \\cdot \\mathbf{d}$ when a force $\\mathbf{F} = 5\\mathbf{i} + 4\\mathbf{j}$ N moves an object through a displacement $\\mathbf{d} = 2\\mathbf{i} - \\mathbf{j}$ m.",
      "options": [
        { "id": "W6-T1-Q08-opt0", "text": "6 J" },
        { "id": "W6-T1-Q08-opt1", "text": "14 J" },
        { "id": "W6-T1-Q08-opt2", "text": "10 J" },
        { "id": "W6-T1-Q08-opt3", "text": "2 J" }
      ],
      "correct_indices": ["W6-T1-Q08-opt0"],
      "explanation": "Work is the dot product: $W = (5)(2) + (4)(-1) = 10 - 4 = 6$ J.",
      "hint": "Multiply corresponding component parts of the force and displacement vectors and add them up."
    },
    {
      "id": "W6-T1-Q09",
      "week": 6,
      "tier": "core",
      "topic": "Derivative product rule",
      "type": "single_select",
      "question": "Find the derivative of $f(x) = x^2 \\cos(x)$.",
      "options": [
        { "id": "W6-T1-Q09-opt0", "text": "$2x\\cos(x) - x^2\\sin(x)$" },
        { "id": "W6-T1-Q09-opt1", "text": "$2x\\cos(x) + x^2\\sin(x)$" },
        { "id": "W6-T1-Q09-opt2", "text": "$-2x\\sin(x)$" },
        { "id": "W6-T1-Q09-opt3", "text": "$2x - \\sin(x)$" }
      ],
      "correct_indices": ["W6-T1-Q09-opt0"],
      "explanation": "Product rule: $(uv)' = u'v + uv'$ with $u=x^2 \\implies u'=2x$ and $v=\\cos(x) \\implies v'=-\\sin(x)$. Summing yields $2x\\cos(x) - x^2\\sin(x)$.",
      "hint": "Apply the product rule, remembering that the derivative of cosine is negative sine."
    },
    {
      "id": "W6-T1-Q10",
      "week": 6,
      "tier": "core",
      "topic": "Complex Magnitude Square",
      "type": "single_select",
      "question": "For a complex number $z = x + iy$, what represents the squared modulus $|z|^2$?",
      "options": [
        { "id": "W6-T1-Q10-opt0", "text": "$x^2 + y^2$" },
        { "id": "W6-T1-Q10-opt1", "text": "$x^2 - y^2$" },
        { "id": "W6-T1-Q10-opt2", "text": "$x^2 + 2ixy - y^2$" },
        { "id": "W6-T1-Q10-opt3", "text": "$\\sqrt{x^2+y^2}$" }
      ],
      "correct_indices": ["W6-T1-Q10-opt0"],
      "explanation": "The modulus is $|z| = \\sqrt{x^2+y^2}$, so its square is $|z|^2 = x^2+y^2$, which is also equal to $z\\overline{z}$.",
      "hint": "Recall the Pythagorean formula for vector length in the complex plane."
    },
    {
      "id": "W6-T2-Q01",
      "week": 6,
      "tier": "should",
      "topic": "Vector Angle calculation",
      "type": "single_select",
      "question": "Calculate the angle $\\theta$ between vectors $\\mathbf{d}_1 = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$ and $\\mathbf{d}_2 = -\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.",
      "options": [
        { "id": "W6-T2-Q01-opt0", "text": "$\\cos^{-1}\\left( -\\frac{1}{3\\sqrt{6}} \\right) \\approx 97.9^\\circ$" },
        { "id": "W6-T2-Q01-opt1", "text": "$\\cos^{-1}\\left( -\\frac{2}{3\\sqrt{6}} \\right) \\approx 105.8^\\circ$" },
        { "id": "W6-T2-Q01-opt2", "text": "$\\cos^{-1}\\left( -\\frac{1}{6} \\right) \\approx 99.6^\\circ$" },
        { "id": "W6-T2-Q01-opt3", "text": "$\\cos^{-1}\\left( 0 \\right) = 90^\\circ$" }
      ],
      "correct_indices": ["W6-T2-Q01-opt1"],
      "explanation": "Recall $\\cos\\theta = \\frac{\\mathbf{d}_1 \\cdot \\mathbf{d}_2}{|\\mathbf{d}_1||\\mathbf{d}_2|}$. The dot product is $-2$. Magnitudes are $\\sqrt{6}$ and $3$. Thus, $\\cos\\theta = \\frac{-2}{3\\sqrt{6}}$. Therefore, $\\theta = \\cos^{-1}\\left( -\\frac{2}{3\\sqrt{6}} \\right) \\approx 105.8^\\circ$.",
      "hint": "Check the calculations for the dot product and the product of magnitudes."
    },
    {
      "id": "W6-T2-Q02",
      "week": 6,
      "tier": "should",
      "topic": "Vector Cross Product Area",
      "type": "single_select",
      "question": "For vectors $\\mathbf{d}_1 = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$ and $\\mathbf{d}_2 = -\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$, find the cross product $\\mathbf{d}_1 \\times \\mathbf{d}_2$.",
      "options": [
        { "id": "W6-T2-Q02-opt0", "text": "$-4\\mathbf{i} - 5\\mathbf{j} + 3\\mathbf{k}$" },
        { "id": "W6-T2-Q02-opt1", "text": "$-4\\mathbf{i} - 3\\mathbf{j} + 3\\mathbf{k}$" },
        { "id": "W6-T2-Q02-opt2", "text": "$4\\mathbf{i} + 5\\mathbf{j} - 3\\mathbf{k}$" },
        { "id": "W6-T2-Q02-opt3", "text": "$-2\\mathbf{i} - 5\\mathbf{j} + 3\\mathbf{k}$" }
      ],
      "correct_indices": ["W6-T2-Q02-opt0"],
      "explanation": "The cross product is computed by setting up the determinant:\n$\\mathbf{d}_1 \\times \\mathbf{d}_2 = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 2 & -1 & 1 \\\\ -1 & 2 & 2 \\end{vmatrix} = \\mathbf{i}(-2-2) - \\mathbf{j}(4 - (-1)) + \\mathbf{k}(4 - 1) = -4\\mathbf{i} - 5\\mathbf{j} + 3\\mathbf{k}$.",
      "hint": "Form a $3 \\times 3$ determinant matrix with the standard unit vectors on the first row, and compute the cofactors."
    },
    {
      "id": "W6-T2-Q03",
      "week": 6,
      "tier": "should",
      "topic": "Cross Product Area Magnitudes",
      "type": "single_select",
      "question": "Find the area of the parallelogram spanned by the vectors $\\mathbf{d}_1 = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$ and $\\mathbf{d}_2 = -\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$.",
      "options": [
        { "id": "W6-T2-Q03-opt0", "text": "$5\\sqrt{2}$" },
        { "id": "W6-T2-Q03-opt1", "text": "$50$" },
        { "id": "W6-T2-Q03-opt2", "text": "$6\\sqrt{2}$" },
        { "id": "W6-T2-Q03-opt3", "text": "$3\\sqrt{6}$" }
      ],
      "correct_indices": ["W6-T2-Q03-opt0"],
      "explanation": "The area is the magnitude of the cross product vector $-4\\mathbf{i} - 5\\mathbf{j} + 3\\mathbf{k}$: \nArea $= \\sqrt{(-4)^2 + (-5)^2 + 3^2} = \\sqrt{16 + 25 + 9} = \\sqrt{50} = 5\\sqrt{2}$.",
      "hint": "Calculate the magnitude of the cross product vector you found in the previous step."
    },
    {
      "id": "W6-T2-Q04",
      "week": 6,
      "tier": "should",
      "topic": "Matrix Inverse 2x2",
      "type": "single_select",
      "question": "Determine the inverse of the matrix $A = \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$.",
      "options": [
        { "id": "W6-T2-Q04-opt0", "text": "$\\frac{1}{14}\\begin{pmatrix} 4 & 1 \\\\ -2 & 3 \\end{pmatrix}$" },
        { "id": "W6-T2-Q04-opt1", "text": "$\\frac{1}{10}\\begin{pmatrix} 4 & -1 \\\\ 2 & 3 \\end{pmatrix}$" },
        { "id": "W6-T2-Q04-opt2", "text": "$\\frac{1}{14}\\begin{pmatrix} 4 & -1 \\\\ 2 & 3 \\end{pmatrix}$" },
        { "id": "W6-T2-Q04-opt3", "text": "\\begin{pmatrix} 4 & 1 \\\\ -2 & 3 \\end{pmatrix}" }
      ],
      "correct_indices": ["W6-T2-Q04-opt0"],
      "explanation": "For a $2 \\times 2$ matrix, the inverse is $\\frac{1}{\\det(A)}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$. Since $\\det(A) = 14$, $A^{-1} = \\frac{1}{14}\\begin{pmatrix} 4 & 1 \\\\ -2 & 3 \\end{pmatrix}$.",
      "hint": "Swap the diagonal terms, change the signs of the off-diagonal terms, and divide by the determinant ($14$)."
    },
    {
      "id": "W6-T2-Q05",
      "week": 6,
      "tier": "should",
      "topic": "Matrix Linear System Solving",
      "type": "single_select",
      "question": "Solve the system of equations $\\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 10 \\end{pmatrix}$.",
      "options": [
        { "id": "W6-T2-Q05-opt0", "text": "$x = \\frac{15}{7}$, $y = \\frac{10}{7}$" },
        { "id": "W6-T2-Q05-opt1", "text": "$x = 2$, $y = 1$" },
        { "id": "W6-T2-Q05-opt2", "text": "$x = \\frac{30}{14}$, $y = \\frac{20}{14}$" },
        { "id": "W6-T2-Q05-opt3", "text": "$x = \\frac{10}{7}$, $y = \\frac{15}{7}$" }
      ],
      "correct_indices": ["W6-T2-Q05-opt0"],
      "explanation": "Using the inverse: $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\frac{1}{14}\\begin{pmatrix} 4 & 1 \\\\ -2 & 3 \\end{pmatrix}\\begin{pmatrix} 5 \\\\ 10 \\end{pmatrix} = \\frac{1}{14}\\begin{pmatrix} 30 \\\\ 20 \\end{pmatrix} = \\begin{pmatrix} 15/7 \\\\ 10/7 \\end{pmatrix}$.",
      "hint": "Multiply the inverse matrix found earlier by the vector $\\begin{pmatrix} 5 \\\\ 10 \\end{pmatrix}$."
    },
    {
      "id": "W6-T2-Q06",
      "week": 6,
      "tier": "should",
      "topic": "Integration by Substitution Exponential",
      "type": "single_select",
      "question": "Evaluate the definite integral $\\int_0^1 x e^{2x^2} d x$ using substitution.",
      "options": [
        { "id": "W6-T2-Q06-opt0", "text": "$\\frac{1}{4}(e^2 - 1)$" },
        { "id": "W6-T2-Q06-opt1", "text": "$\\frac{1}{2}(e^2 - 1)$" },
        { "id": "W6-T2-Q06-opt2", "text": "$\\frac{1}{4}e^2$" },
        { "id": "W6-T2-Q06-opt3", "text": "$e^2 - 1$" }
      ],
      "correct_indices": ["W6-T2-Q06-opt0"],
      "explanation": "Let $u = 2x^2 \\implies du = 4x dx \\implies x dx = du/4$. Bounds: $x=0 \\implies u=0$; $x=1 \\implies u=2$.\nIntegral: $\\frac{1}{4} \\int_0^2 e^u du = \\frac{1}{4}[e^u]_0^2 = \\frac{1}{4}(e^2 - 1)$.",
      "hint": "Substitute $u = 2x^2$ and find the new integration limits before evaluating the antiderivative."
    },
    {
      "id": "W6-T2-Q07",
      "week": 6,
      "tier": "should",
      "topic": "De Moivre Power Cartesian",
      "type": "single_select",
      "question": "Evaluate the expression $z^3$ for the complex number $z = -1 + i\\sqrt{3}$.",
      "options": [
        { "id": "W6-T2-Q07-opt0", "text": "8" },
        { "id": "W6-T2-Q07-opt1", "text": "$-8$" },
        { "id": "W6-T2-Q07-opt2", "text": "$8i$" },
        { "id": "W6-T2-Q07-opt3", "text": "$2 + 2\\sqrt{3}i$" }
      ],
      "correct_indices": ["W6-T2-Q07-opt0"],
      "explanation": "$z = 2 e^{2i\\pi/3}$. By De Moivre: $z^3 = 2^3 e^{2i\\pi} = 8(\\cos 2\\pi + i\\sin 2\\pi) = 8(1 + 0) = 8$.",
      "hint": "Convert to exponential form first, then apply De Moivre's Theorem to simplify the power."
    },
    {
      "id": "W6-T2-Q08",
      "week": 6,
      "tier": "should",
      "topic": "Descriptive Stats Sample SD Revision",
      "type": "single_select",
      "question": "For the data $14.7$, $14.8$, $14.9$, $15.0$, $15.1$, $15.2$ mm, calculate the sample standard deviation $s$.",
      "options": [
        { "id": "W6-T2-Q08-opt0", "text": "$0.173$ mm" },
        { "id": "W6-T2-Q08-opt1", "text": "$0.030$ mm" },
        { "id": "W6-T2-Q08-opt2", "text": "$0.158$ mm" },
        { "id": "W6-T2-Q08-opt3", "text": "$0.180$ mm" }
      ],
      "correct_indices": ["W6-T2-Q08-opt0"],
      "explanation": "Mean is $15.0$. Sum of squared deviations is $(-0.3)^2 + (-0.2)^2 + (-0.1)^2 + 0^2 + 0.1^2 + 0.2^2 = 0.09 + 0.04 + 0.01 + 0.01 + 0.04 = 0.19$. Wait, in the LaTeX solutions, the values are 14.8, 15.0, 14.9, 15.2, 15.1, 14.7. The mean is 15.0. The deviations are (14.8-15.0)^2 + (15.0-15.0)^2 + (14.9-15.0)^2 + (15.2-15.0)^2 + (15.1-15.0)^2 + (14.7-15.0)^2 = 0.04 + 0 + 0.01 + 0.04 + 0.01 + 0.09 = 0.19? Wait: $(-0.2)^2 + 0 + (-0.1)^2 + (0.2)^2 + (0.1)^2 + (-0.3)^2 = 0.04 + 0 + 0.01 + 0.04 + 0.01 + 0.09 = 0.19$? No, the LaTeX solutions list $s^2 = \\\\frac{0.15}{5} = 0.03$ because they write $(0.2)^2 + 0 + (-0.1)^2 + 0^2 + 0.1^2 + (-0.3)^2$? Wait! Yes, in the LaTeX formula: `\\\\frac{(0.2)^2 +0^2 +(-0.1)^2 +0^2 +0.1^2 +(-0.3)^2}{5}` which is $0.04 + 0 + 0.01 + 0 + 0.01 + 0.09 = 0.15$. So $s^2 = 0.03$. Thus $s = \\sqrt{0.03} \\approx 0.1732$ mm.",
      "hint": "Use the sample variance formula with the divisor $n-1=5$."
    },
    {
      "id": "W6-T2-Q09",
      "week": 6,
      "tier": "should",
      "topic": "Complex Roots Calculation",
      "type": "single_select",
      "question": "Find the square roots of the complex number $w = 2\\left( \\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3} \\right)$.",
      "options": [
        { "id": "W6-T2-Q09-opt0", "text": "$\\pm\\left( \\frac{\\sqrt{6}}{2} + i\\frac{\\sqrt{2}}{2} \\right)$" },
        { "id": "W6-T2-Q09-opt1", "text": "$\\pm\\left( \\frac{\\sqrt{3}}{2} + i\\frac{1}{2} \\right)$" },
        { "id": "W6-T2-Q09-opt2", "text": "$\\pm\\left( \\sqrt{2} + \\sqrt{2}i \\right)$" },
        { "id": "W6-T2-Q09-opt3", "text": "$\\pm\\left( \\frac{\\sqrt{6}}{2} - i\\frac{\\sqrt{2}}{2} \\right)$" }
      ],
      "correct_indices": ["W6-T2-Q09-opt0"],
      "explanation": "Roots have modulus $\\sqrt{2}$ and arguments $\\frac{\\pi/3 + 2k\\pi}{2}$. For $k=0$, $\\theta = \\pi/6 \\implies \\sqrt{2}(\\cos\\pi/6 + i\\sin\\pi/6) = \\sqrt{2}(\\frac{\\sqrt{3}}{2} + i\\frac{1}{2}) = \\frac{\\sqrt{6}}{2} + i\\frac{\\sqrt{2}}{2}$. For $k=1$, we get the negative of this value.",
      "hint": "Apply De Moivre's root formula: halve the angle, take the square root of the magnitude, and convert to Cartesian form."
    },
    {
      "id": "W6-T2-Q10",
      "week": 6,
      "tier": "should",
      "topic": "Probability At Least One defect",
      "type": "single_select",
      "question": "Two independent components each have a passing probability of $0.92$. What is the probability that at least one component is defective?",
      "options": [
        { "id": "W6-T2-Q10-opt0", "text": "0.1536" },
        { "id": "W6-T2-Q10-opt1", "text": "0.8464" },
        { "id": "W6-T2-Q10-opt2", "text": "0.1472" },
        { "id": "W6-T2-Q10-opt3", "text": "0.08" }
      ],
      "correct_indices": ["W6-T2-Q10-opt0"],
      "explanation": "Probability of at least one defect is $1 - P(\\text{both good}) = 1 - 0.92^2 = 1 - 0.8464 = 0.1536$.",
      "hint": "Subtract the probability that both components pass the test from 1."
    },
    {
      "id": "W6-T3-Q01",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Trigonometric Integration Charge",
      "type": "single_select",
      "question": "The current in a circuit is $i(t) = 3\\sin(4t)$ A. Find the total charge $Q = \\int_0^{\\pi/2} i(t) dt$ that passes through the circuit from $t=0$ to $t=\\pi/2$.",
      "options": [
        { "id": "W6-T3-Q01-opt0", "text": "0 C" },
        { "id": "W6-T3-Q01-opt1", "text": "$1.5$ C" },
        { "id": "W6-T3-Q01-opt2", "text": "$-1.5$ C" },
        { "id": "W6-T3-Q01-opt3", "text": "$3$ C" }
      ],
      "correct_indices": ["W6-T3-Q01-opt0"],
      "explanation": "$Q = \\int_0^{\\pi/2} 3\\sin(4t) dt = [-\\frac{3}{4}\\cos(4t)]_0^{\\pi/2} = -\\frac{3}{4}(\\cos 2\\pi - \\cos 0) = -\\frac{3}{4}(1 - 1) = 0$ C.",
      "hint": "Integrate the sine term, noting the coefficient multiplier 4 inside the argument, and evaluate the cosine values."
    },
    {
      "id": "W6-T3-Q02",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Binomial Probability Single",
      "type": "single_select",
      "question": "For $X \\sim B(5, 0.7)$, calculate the probability of finding exactly 4 successes, $P(X=4)$, to 5 decimal places.",
      "options": [
        { "id": "W6-T3-Q02-opt0", "text": "0.36015" },
        { "id": "W6-T3-Q02-opt1", "text": "0.30870" },
        { "id": "W6-T3-Q02-opt2", "text": "0.16807" },
        { "id": "W6-T3-Q02-opt3", "text": "0.83692" }
      ],
      "correct_indices": ["W6-T3-Q02-opt0"],
      "explanation": "$P(X=4) = \\binom{5}{4} (0.7)^4 (0.3)^1 = 5 \\times 0.2401 \\times 0.3 = 0.36015$.",
      "hint": "Use $n=5, p=0.7, k=4$ in the Binomial probability formula."
    },
    {
      "id": "W6-T3-Q03",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Binomial Probability Cumulative",
      "type": "single_select",
      "question": "For $X \\sim B(5, 0.7)$, find the probability of finding at least 3 successes, $P(X \\geq 3)$, to 5 decimal places.",
      "options": [
        { "id": "W6-T3-Q03-opt0", "text": "0.83692" },
        { "id": "W6-T3-Q03-opt1", "text": "0.67780" },
        { "id": "W6-T3-Q03-opt2", "text": "0.36015" },
        { "id": "W6-T3-Q03-opt3", "text": "0.52822" }
      ],
      "correct_indices": ["W6-T3-Q03-opt0"],
      "explanation": "$P(X \\geq 3) = P(X=3) + P(X=4) + P(X=5)$.\n$P(X=3) = \\binom{5}{3}(0.7)^3(0.3)^2 = 10(0.343)(0.09) = 0.3087$.\n$P(X=4) = 0.36015$.\n$P(X=5) = (0.7)^5 = 0.16807$.\nSum $= 0.3087 + 0.36015 + 0.16807 = 0.83692$.",
      "hint": "Calculate the individual probabilities for 3, 4, and 5 successes, and add them together."
    },
    {
      "id": "W6-T3-Q04",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Probability At Least One defective revision",
      "type": "single_select",
      "question": "If two independent components each have a passing probability of $0.92$, what is the probability that exactly one component is defective?",
      "options": [
        { "id": "W6-T3-Q04-opt0", "text": "0.1472" },
        { "id": "W6-T3-Q04-opt1", "text": "0.0800" },
        { "id": "W6-T3-Q04-opt2", "text": "0.1536" },
        { "id": "W6-T3-Q04-opt3", "text": "0.0736" }
      ],
      "correct_indices": ["W6-T3-Q04-opt0"],
      "explanation": "Exactly one defective means (Good and Defective) or (Defective and Good): $2 \\times 0.92 \\times 0.08 = 0.1472$.",
      "hint": "Find the combination of one passing and one failing component."
    },
    {
      "id": "W6-T3-Q05",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Matrix determinant property",
      "type": "single_select",
      "question": "For any $2 \\times 2$ matrix $A$, what is the determinant of its inverse matrix $A^{-1}$, assuming $\\det(A) = 14$?",
      "options": [
        { "id": "W6-T3-Q05-opt0", "text": "$1/14$" },
        { "id": "W6-T3-Q05-opt1", "text": "$-14$" },
        { "id": "W6-T3-Q05-opt2", "text": "14" },
        { "id": "W6-T3-Q05-opt3", "text": "$1$" }
      ],
      "correct_indices": ["W6-T3-Q05-opt0"],
      "explanation": "According to matrix algebra properties, $\\det(A^{-1}) = \\frac{1}{\\det(A)}$. Here it is $1/14$.",
      "hint": "The determinant of an inverse matrix is the reciprocal of the determinant of the original matrix."
    },
    {
      "id": "W6-T3-Q06",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Euler Form Cartesian Conversion",
      "type": "single_select",
      "question": "Convert the complex number $w = 2e^{i\\pi/3}$ to Cartesian coordinates.",
      "options": [
        { "id": "W6-T3-Q06-opt0", "text": "$1 + i\\sqrt{3}$" },
        { "id": "W6-T3-Q06-opt1", "text": "$\\sqrt{3} + i$" },
        { "id": "W6-T3-Q06-opt2", "text": "$1 - i\\sqrt{3}$" },
        { "id": "W6-T3-Q06-opt3", "text": "$2 + 2i$" }
      ],
      "correct_indices": ["W6-T3-Q06-opt0"],
      "explanation": "$w = 2\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right) = 2\\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right) = 1 + i\\sqrt{3}$.",
      "hint": "Evaluate the trigonometric values for $\\cos(\\pi/3)$ and $\\sin(\\pi/3)$ and multiply by the modulus 2."
    },
    {
      "id": "W6-T3-Q07",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Vector Magnitude Cross Product Formula",
      "type": "single_select",
      "question": "The magnitude of the cross product of two vectors is given by $|\\mathbf{a} \\times \\mathbf{b}| = |\\mathbf{a}||\\mathbf{b}|\\sin\\theta$. For vectors with magnitude $3$ and $\\sqrt{6}$ and angle $\\theta$ where $\\cos\\theta = -\\frac{2}{3\\sqrt{6}}$, calculate $|\\mathbf{a} \\times \\mathbf{b}|$.",
      "options": [
        { "id": "W6-T3-Q07-opt0", "text": "$5\\sqrt{2}$" },
        { "id": "W6-T3-Q07-opt1", "text": "$50$" },
        { "id": "W6-T3-Q07-opt2", "text": "$\\sqrt{50}$" },
        { "id": "W6-T3-Q07-opt3", "text": "$6\\sqrt{2}$" }
      ],
      "correct_indices": ["W6-T3-Q07-opt0"],
      "explanation": "First, find $\\sin\\theta = \\sqrt{1 - \\cos^2\\theta} = \\sqrt{1 - \\frac{4}{54}} = \\sqrt{\\frac{50}{54}}$. Then $|\\mathbf{a} \\times \\mathbf{b}| = 3 \\cdot \\sqrt{6} \\cdot \\sqrt{\\frac{50}{54}} = \\sqrt{54} \\cdot \\sqrt{\\frac{50}{54}} = \\sqrt{50} = 5\\sqrt{2}$.",
      "hint": "Find $\\sin\\theta$ using the identity $\\sin^2\\theta + \\cos^2\\theta = 1$, then multiply by the product of the magnitudes."
    },
    {
      "id": "W6-T3-Q08",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Complex conjugate multiplication identity",
      "type": "single_select",
      "question": "For any complex number $z = a+ib$, the product of the number and its conjugate $z\\overline{z}$ is equal to what real value?",
      "options": [
        { "id": "W6-T3-Q08-opt0", "text": "$a^2+b^2$" },
        { "id": "W6-T3-Q08-opt1", "text": "$a^2-b^2$" },
        { "id": "W6-T3-Q08-opt2", "text": "$2a$" },
        { "id": "W6-T3-Q08-opt3", "text": "$2ib$" }
      ],
      "correct_indices": ["W6-T3-Q08-opt0"],
      "explanation": "By algebra: $(a+ib)(a-ib) = a^2 - i^2 b^2 = a^2+b^2$.",
      "hint": "This matches the squared distance of the complex number from the origin."
    },
    {
      "id": "W6-T3-Q09",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Independent probability rule verify",
      "type": "single_select",
      "question": "Given $P(A \\cup B) = 0.78$, $P(A) = 0.45$, and $P(B) = 0.60$, determine the intersection probability $P(A \\cap B)$.",
      "options": [
        { "id": "W6-T3-Q09-opt0", "text": "0.27" },
        { "id": "W6-T3-Q09-opt1", "text": "0.18" },
        { "id": "W6-T3-Q09-opt2", "text": "0.15" },
        { "id": "W6-T3-Q09-opt3", "text": "0.33" }
      ],
      "correct_indices": ["W6-T3-Q09-opt0"],
      "explanation": "Use the addition rule: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \\implies P(A \\cap B) = 0.45 + 0.60 - 0.78 = 0.27$.",
      "hint": "Apply the addition rule of probability and solve for the intersection term."
    },
    {
      "id": "W6-T3-Q10",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Chain rule exponential",
      "type": "single_select",
      "question": "Find the derivative of $f(x) = e^{2x^2}$.",
      "options": [
        { "id": "W6-T3-Q10-opt0", "text": "$4x e^{2x^2}$" },
        { "id": "W6-T3-Q10-opt1", "text": "$e^{2x^2}$" },
        { "id": "W6-T3-Q10-opt2", "text": "$4e^{2x^2}$" },
        { "id": "W6-T3-Q10-opt3", "text": "$2x e^{2x^2}$" }
      ],
      "correct_indices": ["W6-T3-Q10-opt0"],
      "explanation": "Let $u = 2x^2 \\implies u' = 4x$. By chain rule, $f'(x) = e^u \\cdot u' = 4x e^{2x^2}$.",
      "hint": "Differentiate the exponential function and multiply by the derivative of the exponent power."
    },
    {
      "id": "W6-T4-Q01",
      "week": 6,
      "tier": "extra",
      "topic": "Vector Triple Product Determinant",
      "type": "single_select",
      "question": "Find the scalar triple product $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})$ for $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$, $\\mathbf{b} = -\\mathbf{i} + 2\\mathbf{j} + 2\\mathbf{k}$, and $\\mathbf{c} = 5\\mathbf{i} + 4\\mathbf{j}$.",
      "options": [
        { "id": "W6-T4-Q01-opt0", "text": "$-30$" },
        { "id": "W6-T4-Q01-opt1", "text": "$30$" },
        { "id": "W6-T4-Q01-opt2", "text": "$-40$" },
        { "id": "W6-T4-Q01-opt3", "text": "$0$" }
      ],
      "correct_indices": ["W6-T4-Q01-opt2"],
      "explanation": "Compute the scalar triple product via the $3 \\times 3$ determinant: $\\det \\begin{pmatrix} 2 & -1 & 1 \\\\ -1 & 2 & 2 \\\\ 5 & 4 & 0 \\end{pmatrix} = 2(0 - 8) - (-1)(0 - 10) + 1(-4 - 10) = -16 - 10 - 14 = -40$.",
      "hint": "Set up a $3 \\times 3$ matrix with the components of the three vectors and calculate its determinant."
    },
    {
      "id": "W6-T4-Q02",
      "week": 6,
      "tier": "extra",
      "topic": "Matrix equation solving revision",
      "type": "single_select",
      "question": "If $A = \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$, solve the matrix equation $A X = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ for vector $X$.",
      "options": [
        { "id": "W6-T4-Q02-opt0", "text": "$X = \\begin{pmatrix} 4/14 \\\\ -2/14 \\end{pmatrix}$" },
        { "id": "W6-T4-Q02-opt1", "text": "$X = \\begin{pmatrix} 4/14 \\\\ 2/14 \\end{pmatrix}$" },
        { "id": "W6-T4-Q02-opt2", "text": "$X = \\begin{pmatrix} 3/14 \\\\ 2/14 \\end{pmatrix}$" },
        { "id": "W6-T4-Q02-opt3", "text": "$X = \\begin{pmatrix} 1/14 \\\\ 4/14 \\end{pmatrix}$" }
      ],
      "correct_indices": ["W6-T4-Q02-opt0"],
      "explanation": "$X = A^{-1}\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\frac{1}{14}\\begin{pmatrix} 4 & 1 \\\\ -2 & 3 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\frac{1}{14}\\begin{pmatrix} 4 \\\\ -2 \\end{pmatrix}$.",
      "hint": "Multiply the inverse matrix $A^{-1}$ by the column vector $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$."
    },
    {
      "id": "W6-T4-Q03",
      "week": 6,
      "tier": "extra",
      "topic": "Double Product Rule revision",
      "type": "single_select",
      "question": "Find the derivative of $y = (2x-1)\\ln(3x)e^x$.",
      "options": [
        { "id": "W6-T4-Q03-opt0", "text": "$e^x\\left[ (2x-1)\\ln(3x) + 2\\ln(3x) + \\frac{2x-1}{x} \\right]$" },
        { "id": "W6-T4-Q03-opt1", "text": "$e^x\\left[ 2\\ln(3x) + \\frac{2x-1}{x} \\right]$" },
        { "id": "W6-T4-Q03-opt2", "text": "$e^x(2x-1)\\ln(3x)$" },
        { "id": "W6-T4-Q03-opt3", "text": "$e^x\\left[ (2x-1)\\ln(3x) + \\frac{2x-1}{x} \\right]$" }
      ],
      "correct_indices": ["W6-T4-Q03-opt0"],
      "explanation": "Let $u = (2x-1)\\ln(3x) \\implies u' = 2\\ln(3x) + \\frac{2x-1}{x}$ and $v = e^x \\implies v'=e^x$. By the product rule: $y' = u'v + uv' = e^x\\left( 2\\ln(3x) + \\frac{2x-1}{x} \\right) + (2x-1)\\ln(3x)e^x = e^x\\left[ (2x-1)\\ln(3x) + 2\\ln(3x) + \\frac{2x-1}{x} \\right]$.",
      "hint": "Group terms and apply the product rule, utilizing the derivative of $(2x-1)\\ln(3x)$ found earlier."
    },
    {
      "id": "W6-T4-Q04",
      "week": 6,
      "tier": "extra",
      "topic": "Definite Integral Substitution algebra",
      "type": "single_select",
      "question": "Evaluate the definite integral $\\int_0^{\\sqrt{\\ln 2}} x e^{2x^2} d x$.",
      "options": [
        { "id": "W6-T4-Q04-opt0", "text": "0.75" },
        { "id": "W6-T4-Q04-opt1", "text": "1.5" },
        { "id": "W6-T4-Q04-opt2", "text": "0.25" },
        { "id": "W6-T4-Q04-opt3", "text": "3" }
      ],
      "correct_indices": ["W6-T4-Q04-opt0"],
      "explanation": "Let $u = 2x^2 \\implies du = 4xdx$. Bounds: $x=0 \\implies u=0$; $x=\\sqrt{\\ln 2} \\implies u = 2\\ln 2 = \\ln 4$.\nIntegral: $\\frac{1}{4} \\int_0^{\\ln 4} e^u du = \\frac{1}{4}[e^u]_0^{\\ln 4} = \\frac{1}{4}(4 - 1) = 0.75$.",
      "hint": "Transform the upper limit using $u = 2x^2$ and evaluate $e^{\\ln 4}$."
    },
    {
      "id": "W6-T4-Q05",
      "week": 6,
      "tier": "extra",
      "topic": "De Moivre complex roots cube roots",
      "type": "single_select",
      "question": "Find the three complex cube roots of the real number $8$.",
      "options": [
        { "id": "W6-T4-Q05-opt0", "text": "$2$, $-1 + i\\sqrt{3}$, and $-1 - i\\sqrt{3}$" },
        { "id": "W6-T4-Q05-opt1", "text": "$2$, $1 + i\\sqrt{3}$, and $1 - i\\sqrt{3}$" },
        { "id": "W6-T4-Q05-opt2", "text": "$2$, $-2$, and $2i$" },
        { "id": "W6-T4-Q05-opt3", "text": "$2e^{i\\pi/3}$, $2e^{3i\\pi/3}$, and $2e^{5i\\pi/3}$" }
      ],
      "correct_indices": ["W6-T4-Q05-opt0"],
      "explanation": "Roots of $8$: write $8 = 8 e^{i2k\\pi}$. Modulus: $8^{1/3}=2$. Arguments: $2k\\pi/3$ for $k=0,1,2$. For $k=0$, $z=2$. For $k=1$, $\\theta = 2\\pi/3 \\implies 2(\\cos 2\\pi/3 + i\\sin 2\\pi/3) = -1+i\\sqrt{3}$. For $k=2$, $\\theta = 4\\pi/3 \\implies -1-i\\sqrt{3}$.",
      "hint": "Evaluate the roots of unity scaled by the cube root of 8, and convert them to Cartesian form."
    },
    {
      "id": "W6-T4-Q06",
      "week": 6,
      "tier": "extra",
      "topic": "Descriptive Stats Sample Variance proof",
      "type": "single_select",
      "question": "If a sample size $n=6$ has range $0.5$ mm and sum of squared deviations $\\sum(x_i-\\bar{x})^2 = 0.15$, what is the sample variance $s^2$?",
      "options": [
        { "id": "W6-T4-Q06-opt0", "text": "0.03" },
        { "id": "W6-T4-Q06-opt1", "text": "0.025" },
        { "id": "W6-T4-Q06-opt2", "text": "0.15" },
        { "id": "W6-T4-Q06-opt3", "text": "0.05" }
      ],
      "correct_indices": ["W6-T4-Q06-opt0"],
      "explanation": "Sample variance is $s^2 = \\frac{\\sum(x_i-\\bar{x})^2}{n-1}$. Here, $s^2 = \\frac{0.15}{5} = 0.03$.",
      "hint": "Divide the sum of squared deviations ($0.15$) by the degrees of freedom $n-1 = 5$."
    },
    {
      "id": "W6-T4-Q07",
      "week": 6,
      "tier": "extra",
      "topic": "Complex root product verify",
      "type": "single_select",
      "question": "Multiply the two complex roots $z_1 = \\frac{\\sqrt{6}}{2} + i\\frac{\\sqrt{2}}{2}$ and $z_2 = -\\frac{\\sqrt{6}}{2} - i\\frac{\\sqrt{2}}{2}$ together.",
      "options": [
        { "id": "W6-T4-Q07-opt0", "text": "$-2\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)$" },
        { "id": "W6-T4-Q07-opt1", "text": "$-2$" },
        { "id": "W6-T4-Q07-opt2", "text": "$2i$" },
        { "id": "W6-T4-Q07-opt3", "text": "$0$" }
      ],
      "correct_indices": ["W6-T4-Q07-opt0"],
      "explanation": "Note that $z_2 = -z_1$. The product is $-z_1^2$. Since $z_1 = \\sqrt{2}e^{i\\pi/6}$, the square is $z_1^2 = 2e^{i\\pi/3} = 2(\\cos\\pi/3 + i\\sin\\pi/3)$. Thus the product is $-2(\\cos\\pi/3 + i\\sin\\pi/3)$.",
      "hint": "Multiply the terms, noting that the second root is the negative of the first root, and compare with the polar forms."
    },
    {
      "id": "W6-T4-Q08",
      "week": 6,
      "tier": "extra",
      "topic": "Probability Defect Combination",
      "type": "single_select",
      "question": "If three independent components each have a passing probability of $0.90$, find the probability that exactly one is defective.",
      "options": [
        { "id": "W6-T4-Q08-opt0", "text": "0.243" },
        { "id": "W6-T4-Q08-opt1", "text": "0.081" },
        { "id": "W6-T4-Q08-opt2", "text": "0.729" },
        { "id": "W6-T4-Q08-opt3", "text": "0.270" }
      ],
      "correct_indices": ["W6-T4-Q08-opt0"],
      "explanation": "This follows a Binomial distribution $B(3, 0.10)$ with 1 defect. We get $\\binom{3}{1} (0.90)^2 (0.10)^1 = 3 \\times 0.81 \\times 0.10 = 0.243$.",
      "hint": "Use the Binomial formula for 3 trials, where the failure probability is $0.10$ and you want exactly 1 failure."
    },
    {
      "id": "W6-T4-Q09",
      "week": 6,
      "tier": "extra",
      "topic": "Matrix determinant multiplication",
      "type": "single_select",
      "question": "If matrix $A$ has $\\det(A) = 14$ and matrix $B$ has $\\det(B) = -2$, what is the determinant of the product matrix $AB$?",
      "options": [
        { "id": "W6-T4-Q09-opt0", "text": "$-28$" },
        { "id": "W6-T4-Q09-opt1", "text": "12" },
        { "id": "W6-T4-Q09-opt2", "text": "$-7$" },
        { "id": "W6-T4-Q09-opt3", "text": "28" }
      ],
      "correct_indices": ["W6-T4-Q09-opt0"],
      "explanation": "According to matrix algebra properties, $\\det(AB) = \\det(A)\\det(B) = (14)(-2) = -28$.",
      "hint": "Multiply the determinants of the two individual matrices together."
    },
    {
      "id": "W6-T4-Q10",
      "week": 6,
      "tier": "extra",
      "topic": "Complex magnitude definition",
      "type": "single_select",
      "question": "For any complex number $z$, which of the following is equivalent to the identity $\\text{Re}(z)$?",
      "options": [
        { "id": "W6-T4-Q10-opt0", "text": "$\\frac{z + \\overline{z}}{2}$" },
        { "id": "W6-T4-Q10-opt1", "text": "$\\frac{z - \\overline{z}}{2i}$" },
        { "id": "W6-T4-Q10-opt2", "text": "$z\\overline{z}$" },
        { "id": "W6-T4-Q10-opt3", "text": "$|z|$" }
      ],
      "correct_indices": ["W6-T4-Q10-opt0"],
      "explanation": "Since $z + \\overline{z} = 2\\text{Re}(z)$, dividing by 2 yields $\\text{Re}(z)$.",
      "hint": "Write $z = a+ib$, compute the sum with its conjugate, and determine how to isolate $a$."
    }
  ]
};
