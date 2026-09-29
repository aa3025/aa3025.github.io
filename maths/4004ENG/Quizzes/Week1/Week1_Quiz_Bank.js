window.QUIZ_BANK_WEEK1 = {
  "module": "4004ENG Engineering Mathematics",
  "week": 1,
  "title": "Week 1 Quiz Bank: Linear Algebra I (Vectors & Geometric Applications)",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W1-T1-Q01",
      "week": 1,
      "tier": "core",
      "topic": "Vector Magnitude",
      "type": "single_select",
      "question": "Given the vector $\\boldsymbol{a} = 3\\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}} + 12\\hat{\\mathbf{k}}$, find its magnitude $|\\boldsymbol{a}|$.",
      "options": [
        { "id": "W1-T1-Q01-opt0", "text": "13" },
        { "id": "W1-T1-Q01-opt1", "text": "19" },
        { "id": "W1-T1-Q01-opt2", "text": "$\\sqrt{153}$" },
        { "id": "W1-T1-Q01-opt3", "text": "5" }
      ],
      "correct_indices": ["W1-T1-Q01-opt0"],
      "explanation": "The magnitude of a 3D vector $\\boldsymbol{a} = x\\hat{\\mathbf{i}} + y\\hat{\\mathbf{j}} + z\\hat{\\mathbf{k}}$ is given by $|\\boldsymbol{a}| = \\sqrt{x^2 + y^2 + z^2}$. Here, $|\\boldsymbol{a}| = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.",
      "hint": "Apply the 3D magnitude formula: $|\\boldsymbol{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$."
    },
    {
      "id": "W1-T1-Q02",
      "week": 1,
      "tier": "core",
      "topic": "Unit Vector",
      "type": "single_select",
      "question": "Find the unit vector $\\hat{\\boldsymbol{b}}$ in the direction of $\\boldsymbol{b} = 2\\hat{\\mathbf{i}} - \\hat{\\mathbf{j}} + 2\\hat{\\mathbf{k}}$.",
      "options": [
        { "id": "W1-T1-Q02-opt0", "text": "$\\frac{2}{3}\\hat{\\mathbf{i}} - \\frac{1}{3}\\hat{\\mathbf{j}} + \\frac{2}{3}\\hat{\\mathbf{k}}$" },
        { "id": "W1-T1-Q02-opt1", "text": "$\\frac{2}{\\sqrt{5}}\\hat{\\mathbf{i}} - \\frac{1}{\\sqrt{5}}\\hat{\\mathbf{j}} + \\frac{2}{\\sqrt{5}}\\hat{\\mathbf{k}}$" },
        { "id": "W1-T1-Q02-opt2", "text": "$2\\hat{\\mathbf{i}} - \\hat{\\mathbf{j}} + 2\\hat{\\mathbf{k}}$" },
        { "id": "W1-T1-Q02-opt3", "text": "$\\frac{2}{9}\\hat{\\mathbf{i}} - \\frac{1}{9}\\hat{\\mathbf{j}} + \\frac{2}{9}\\hat{\\mathbf{k}}$" }
      ],
      "correct_indices": ["W1-T1-Q02-opt0"],
      "explanation": "First, calculate the magnitude: $|\\boldsymbol{b}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{9} = 3$. Then, divide the vector by its magnitude: $\\hat{\\boldsymbol{b}} = \\frac{\\boldsymbol{b}}{|\\boldsymbol{b}|} = \\frac{2}{3}\\hat{\\mathbf{i}} - \\frac{1}{3}\\hat{\\mathbf{j}} + \\frac{2}{3}\\hat{\\mathbf{k}}$.",
      "hint": "First find the magnitude $|\\boldsymbol{b}|$, then divide the components by this value."
    },
    {
      "id": "W1-T1-Q03",
      "week": 1,
      "tier": "core",
      "topic": "Vector Arithmetic",
      "type": "single_select",
      "question": "Given $\\boldsymbol{a} = 3\\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}} + 12\\hat{\\mathbf{k}}$ and $\\boldsymbol{b} = 2\\hat{\\mathbf{i}} - \\hat{\\mathbf{j}} + 2\\hat{\\mathbf{k}}$, find the vector $\\boldsymbol{a} - \\boldsymbol{b}$.",
      "options": [
        { "id": "W1-T1-Q03-opt0", "text": "$\\hat{\\mathbf{i}} + 5\\hat{\\mathbf{j}} + 10\\hat{\\mathbf{k}}$" },
        { "id": "W1-T1-Q03-opt1", "text": "$\\hat{\\mathbf{i}} + 3\\hat{\\mathbf{j}} + 10\\hat{\\mathbf{k}}$" },
        { "id": "W1-T1-Q03-opt2", "text": "$5\\hat{\\mathbf{i}} + 3\\hat{\\mathbf{j}} + 14\\hat{\\mathbf{k}}$" },
        { "id": "W1-T1-Q03-opt3", "text": "$5\\hat{\\mathbf{i}} + 5\\hat{\\mathbf{j}} + 10\\hat{\\mathbf{k}}$" }
      ],
      "correct_indices": ["W1-T1-Q03-opt0"],
      "explanation": "Perform subtraction component-wise: $\\boldsymbol{a} - \\boldsymbol{b} = (3-2)\\hat{\\mathbf{i}} + (4 - (-1))\\hat{\\mathbf{j}} + (12-2)\\hat{\\mathbf{k}} = \\hat{\\mathbf{i}} + 5\\hat{\\mathbf{j}} + 10\\hat{\\mathbf{k}}$.",
      "hint": "Subtract corresponding components. Be careful with double negatives."
    },
    {
      "id": "W1-T1-Q04",
      "week": 1,
      "tier": "core",
      "topic": "Vector Dot Product",
      "type": "single_select",
      "question": "Calculate the dot product $\\boldsymbol{a} \\cdot \\boldsymbol{c}$ of $\\boldsymbol{a} = 3\\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}} + 12\\hat{\\mathbf{k}}$ and $\\boldsymbol{c} = -2\\hat{\\mathbf{i}} + \\hat{\\mathbf{j}} - 2\\hat{\\mathbf{k}}$.",
      "options": [
        { "id": "W1-T1-Q04-opt0", "text": "-26" },
        { "id": "W1-T1-Q04-opt1", "text": "-28" },
        { "id": "W1-T1-Q04-opt2", "text": "26" },
        { "id": "W1-T1-Q04-opt3", "text": "$-2\\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}} - 24\\hat{\\mathbf{k}}$" }
      ],
      "correct_indices": ["W1-T1-Q04-opt0"],
      "explanation": "The dot product in component form is $a_1c_1 + a_2c_2 + a_3c_3$. Here, $\\boldsymbol{a} \\cdot \\boldsymbol{c} = (3)(-2) + (4)(1) + (12)(-2) = -6 + 4 - 24 = -26$.",
      "hint": "Multiply the $x$-components, $y$-components, and $z$-components together, and sum them up."
    },
    {
      "id": "W1-T1-Q05",
      "week": 1,
      "tier": "core",
      "topic": "Orthogonality Concept",
      "type": "single_select",
      "question": "If the dot product of two non-zero vectors is zero ($\\boldsymbol{u} \\cdot \\boldsymbol{v} = 0$), what is the geometric relationship between them?",
      "options": [
        { "id": "W1-T1-Q05-opt0", "text": "They are perpendicular (orthogonal)." },
        { "id": "W1-T1-Q05-opt1", "text": "They are parallel." },
        { "id": "W1-T1-Q05-opt2", "text": "They point in opposite directions." },
        { "id": "W1-T1-Q05-opt3", "text": "They are equal in magnitude." }
      ],
      "correct_indices": ["W1-T1-Q05-opt0"],
      "explanation": "Since $\\boldsymbol{u} \\cdot \\boldsymbol{v} = |\\boldsymbol{u}||\\boldsymbol{v}|\\cos\\theta = 0$, and the magnitudes are non-zero, $\\cos\\theta$ must be $0$, which means the angle $\\theta$ between them is $90^\\circ$ (orthogonal).",
      "hint": "Think about the formula $\\boldsymbol{u} \\cdot \\boldsymbol{v} = |\\boldsymbol{u}||\\boldsymbol{v}|\\cos\\theta$. What angle has a cosine of zero?"
    },
    {
      "id": "W1-T1-Q06",
      "week": 1,
      "tier": "core",
      "topic": "Vector Quantities",
      "type": "multiple_select",
      "question": "Select ALL of the following quantities that are <strong>vectors</strong>:",
      "options": [
        { "id": "W1-T1-Q06-opt0", "text": "Velocity" },
        { "id": "W1-T1-Q06-opt1", "text": "Acceleration" },
        { "id": "W1-T1-Q06-opt2", "text": "Mass" },
        { "id": "W1-T1-Q06-opt3", "text": "Force" }
      ],
      "correct_indices": ["W1-T1-Q06-opt0", "W1-T1-Q06-opt1", "W1-T1-Q06-opt3"],
      "explanation": "Velocity, acceleration, and force require both magnitude and direction, and are therefore vectors. Mass is described fully by a single numerical value (magnitude) and is a scalar.",
      "hint": "Which of these quantities require a direction to be fully defined?"
    },
    {
      "id": "W1-T1-Q07",
      "week": 1,
      "tier": "core",
      "topic": "Scalar Quantities",
      "type": "multiple_select",
      "question": "Which of the following expressions represent a <strong>scalar</strong> quantity? (Select all that apply, where $\\boldsymbol{a}$ and $\\boldsymbol{b}$ are vectors, and $c$ is a scalar)",
      "options": [
        { "id": "W1-T1-Q07-opt0", "text": "$|\\boldsymbol{a}|$" },
        { "id": "W1-T1-Q07-opt1", "text": "$\\boldsymbol{a} \\cdot \\boldsymbol{b}$" },
        { "id": "W1-T1-Q07-opt2", "text": "$\\boldsymbol{a} \\times \\boldsymbol{b}$" },
        { "id": "W1-T1-Q07-opt3", "text": "$(\\boldsymbol{a} \\times \\boldsymbol{b}) \\cdot \\hat{\\boldsymbol{a}}$" }
      ],
      "correct_indices": ["W1-T1-Q07-opt0", "W1-T1-Q07-opt1", "W1-T1-Q07-opt3"],
      "explanation": "Magnitude $|\\boldsymbol{a}|$ is a length (scalar). Dot product $\\boldsymbol{a} \\cdot \\boldsymbol{b}$ is a scalar. The triple product $(\\boldsymbol{a} \\times \\boldsymbol{b}) \\cdot \\hat{\\boldsymbol{a}}$ is a dot product, which results in a scalar (specifically $0$). Cross product $\\boldsymbol{a} \\times \\boldsymbol{b}$ yields a vector.",
      "hint": "A dot product yields a scalar, whereas a cross product yields a vector."
    },
    {
      "id": "W1-T1-Q08",
      "week": 1,
      "tier": "core",
      "topic": "Position Vector",
      "type": "single_select",
      "question": "If points $A$ and $B$ have coordinates $(1,3,5)$ and $(7,1,2)$, find the displacement vector $\\overrightarrow{AB}$.",
      "options": [
        { "id": "W1-T1-Q08-opt0", "text": "$6\\hat{\\mathbf{i}} - 2\\hat{\\mathbf{j}} - 3\\hat{\\mathbf{k}}$" },
        { "id": "W1-T1-Q08-opt1", "text": "$8\\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}} + 7\\hat{\\mathbf{k}}$" },
        { "id": "W1-T1-Q08-opt2", "text": "$-6\\hat{\\mathbf{i}} + 2\\hat{\\mathbf{j}} + 3\\hat{\\mathbf{k}}$" },
        { "id": "W1-T1-Q08-opt3", "text": "$6\\hat{\\mathbf{i}} - 2\\hat{\\mathbf{j}} + 3\\hat{\\mathbf{k}}$" }
      ],
      "correct_indices": ["W1-T1-Q08-opt0"],
      "explanation": "Displacement is calculated as tip minus tail: $\\overrightarrow{AB} = \\boldsymbol{r}_B - \\boldsymbol{r}_A = (7-1)\\hat{\\mathbf{i}} + (1-3)\\hat{\\mathbf{j}} + (2-5)\\hat{\\mathbf{k}} = 6\\hat{\\mathbf{i}} - 2\\hat{\\mathbf{j}} - 3\\hat{\\mathbf{k}}$.",
      "hint": "Subtract the coordinates of the starting point $A$ from the coordinates of the ending point $B$."
    },
    {
      "id": "W1-T1-Q09",
      "week": 1,
      "tier": "core",
      "topic": "Vector Equivalence",
      "type": "single_select",
      "question": "Under what condition are two vectors $\\boldsymbol{u}$ and $\\boldsymbol{v}$ equal?",
      "options": [
        { "id": "W1-T1-Q09-opt0", "text": "They have the same magnitude and the same direction." },
        { "id": "W1-T1-Q09-opt1", "text": "They have the same magnitude." },
        { "id": "W1-T1-Q09-opt2", "text": "They are parallel." },
        { "id": "W1-T1-Q09-opt3", "text": "They originate from the same coordinate point." }
      ],
      "correct_indices": ["W1-T1-Q09-opt0"],
      "explanation": "A vector is defined entirely by its magnitude and direction. Position is irrelevant; if they share the same magnitude and direction, they are equivalent.",
      "hint": "Recall the definition of a vector. What properties must be identical?"
    },
    {
      "id": "W1-T1-Q10",
      "week": 1,
      "tier": "core",
      "topic": "2D Direction Angle",
      "type": "single_select",
      "question": "Calculate the direction angle $\\theta$ of $\\boldsymbol{v} = 3\\hat{\\mathbf{i}} + 3\\hat{\\mathbf{j}}$ relative to the positive $x$-axis.",
      "options": [
        { "id": "W1-T1-Q10-opt0", "text": "$45^\\circ$" },
        { "id": "W1-T1-Q10-opt1", "text": "$90^\\circ$" },
        { "id": "W1-T1-Q10-opt2", "text": "$30^\\circ$" },
        { "id": "W1-T1-Q10-opt3", "text": "$60^\\circ$" }
      ],
      "correct_indices": ["W1-T1-Q10-opt0"],
      "explanation": "For a 2D vector $\\boldsymbol{v} = a\\hat{\\mathbf{i}} + b\\hat{\\mathbf{j}}$, the angle satisfies $\\theta = \\arctan(b/a)$. Here, $\\theta = \\arctan(3/3) = \\arctan(1) = 45^\\circ$. Since both components are positive, it is in the first quadrant.",
      "hint": "Use $\\theta = \\arctan(y/x)$ and verify the quadrant."
    },
    {
      "id": "W1-T2-Q01",
      "week": 1,
      "tier": "should",
      "topic": "Vector Cross Product",
      "type": "single_select",
      "question": "Determine the cross product $\\boldsymbol{a} \\times \\boldsymbol{b}$ of $\\boldsymbol{a} = 3\\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}} + 12\\hat{\\mathbf{k}}$ and $\\boldsymbol{b} = 2\\hat{\\mathbf{i}} - \\hat{\\mathbf{j}} + 2\\hat{\\mathbf{k}}$.",
      "options": [
        { "id": "W1-T2-Q01-opt0", "text": "$20\\hat{\\mathbf{i}} + 18\\hat{\\mathbf{j}} - 11\\hat{\\mathbf{k}}$" },
        { "id": "W1-T2-Q01-opt1", "text": "$20\\hat{\\mathbf{i}} - 18\\hat{\\mathbf{j}} - 11\\hat{\\mathbf{k}}$" },
        { "id": "W1-T2-Q01-opt2", "text": "$20\\hat{\\mathbf{i}} + 18\\hat{\\mathbf{j}} + 11\\hat{\\mathbf{k}}$" },
        { "id": "W1-T2-Q01-opt3", "text": "$20\\hat{\\mathbf{i}} + 30\\hat{\\mathbf{j}} - 11\\hat{\\mathbf{k}}$" }
      ],
      "correct_indices": ["W1-T2-Q01-opt0"],
      "explanation": "Using the determinant form:\n$\\boldsymbol{a} \\times \\boldsymbol{b} = \\begin{vmatrix} \\hat{\\mathbf{i}} & \\hat{\\mathbf{j}} & \\hat{\\mathbf{k}} \\\\ 3 & 4 & 12 \\\\ 2 & -1 & 2 \\end{vmatrix} = \\hat{\\mathbf{i}}(4\\cdot2 - 12(-1)) - \\hat{\\mathbf{j}}(3\\cdot2 - 12\\cdot2) + \\hat{\\mathbf{k}}(3(-1) - 4\\cdot2) = 20\\hat{\\mathbf{i}} + 18\\hat{\\mathbf{j}} - 11\\hat{\\mathbf{k}}$.",
      "hint": "Set up a $3 \\times 3$ determinant with basis vectors on the first row, and expand along the first row."
    },
    {
      "id": "W1-T2-Q02",
      "week": 1,
      "tier": "should",
      "topic": "Orthogonal Vector Calculation",
      "type": "single_select",
      "question": "Find a unit vector $\\hat{\\boldsymbol{u}}$ perpendicular to both $\\boldsymbol{a} = 6\\hat{\\mathbf{i}} + 2\\hat{\\mathbf{j}}$ and $\\boldsymbol{b} = 6\\hat{\\mathbf{i}} + 3\\hat{\\mathbf{j}} - 2\\hat{\\mathbf{k}}$.",
      "options": [
        { "id": "W1-T2-Q02-opt0", "text": "$\\frac{1}{7}(-2\\hat{\\mathbf{i}} + 6\\hat{\\mathbf{j}} + 3\\hat{\\mathbf{k}})$ or $-\\frac{1}{7}(-2\\hat{\\mathbf{i}} + 6\\hat{\\mathbf{j}} + 3\\hat{\\mathbf{k}})$" },
        { "id": "W1-T2-Q02-opt1", "text": "$\\frac{1}{14}(-4\\hat{\\mathbf{i}} + 12\\hat{\\mathbf{j}} + 6\\hat{\\mathbf{k}})$" },
        { "id": "W1-T2-Q02-opt2", "text": "$-2\\hat{\\mathbf{i}} + 6\\hat{\\mathbf{j}} + 3\\hat{\\mathbf{k}}$" },
        { "id": "W1-T2-Q02-opt3", "text": "$\\frac{1}{\\sqrt{14}}(-2\\hat{\\mathbf{i}} + 3\\hat{\\mathbf{j}} + \\hat{\\mathbf{k}})$" }
      ],
      "correct_indices": ["W1-T2-Q02-opt0"],
      "explanation": "First, find the cross product $\\boldsymbol{v} = \\boldsymbol{a} \\times \\boldsymbol{b} = \\begin{vmatrix} \\hat{\\mathbf{i}} & \\hat{\\mathbf{j}} & \\hat{\\mathbf{k}} \\\\ 6 & 2 & 0 \\\\ 6 & 3 & -2 \\end{vmatrix} = -4\\hat{\\mathbf{i}} + 12\\hat{\\mathbf{j}} + 6\\hat{\\mathbf{k}}$. The magnitude is $|\\boldsymbol{v}| = \\sqrt{16+144+36} = \\sqrt{196} = 14$. The unit vector is $\\pm\\frac{\\boldsymbol{v}}{|\\boldsymbol{v}|} = \\pm\\frac{1}{7}(-2\\hat{\\mathbf{i}} + 6\\hat{\\mathbf{j}} + 3\\hat{\\mathbf{k}})$.",
      "hint": "Calculate the cross product $\\boldsymbol{a} \\times \\boldsymbol{b}$ to find a perpendicular vector, then normalize it to unit length."
    },
    {
      "id": "W1-T2-Q03",
      "week": 1,
      "tier": "should",
      "topic": "Work Done",
      "type": "single_select",
      "question": "A force $\\boldsymbol{F} = 2\\hat{\\mathbf{i}} - 7\\hat{\\mathbf{j}} + 12\\hat{\\mathbf{k}}$ N acts on a particle displaced from $A=(2,3,7)$ m to $B=(7,-11,37)$ m. Find the work done.",
      "options": [
        { "id": "W1-T2-Q03-opt0", "text": "468 J" },
        { "id": "W1-T2-Q03-opt1", "text": "472 J" },
        { "id": "W1-T2-Q03-opt2", "text": "360 J" },
        { "id": "W1-T2-Q03-opt3", "text": "458 J" }
      ],
      "correct_indices": ["W1-T2-Q03-opt0"],
      "explanation": "Find displacement vector $\\boldsymbol{d} = \\overrightarrow{AB} = (7-2)\\hat{\\mathbf{i}} + (-11-3)\\hat{\\mathbf{j}} + (37-7)\\hat{\\mathbf{k}} = 5\\hat{\\mathbf{i}} - 14\\hat{\\mathbf{j}} + 30\\hat{\\mathbf{k}}$ m. Work is the dot product $W = \\boldsymbol{F} \\cdot \\boldsymbol{d} = (2)(5) + (-7)(-14) + (12)(30) = 10 + 98 + 360 = 468$ J.",
      "hint": "Use $W = \\boldsymbol{F} \\cdot \\overrightarrow{AB}$. Remember to compute $\\overrightarrow{AB} = B - A$ first."
    },
    {
      "id": "W1-T2-Q04",
      "week": 1,
      "tier": "should",
      "topic": "Moment of a Force",
      "type": "single_select",
      "question": "A force $\\boldsymbol{F} = 3\\hat{\\mathbf{i}} + \\hat{\\mathbf{j}} - 2\\hat{\\mathbf{k}}$ N acts at the point $P=(2,-1,0)$ m. Find the moment $\\boldsymbol{M}$ about the origin.",
      "options": [
        { "id": "W1-T2-Q04-opt0", "text": "$2\\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}} + 5\\hat{\\mathbf{k}}$ N$\\cdot$m" },
        { "id": "W1-T2-Q04-opt1", "text": "$2\\hat{\\mathbf{i}} - 4\\hat{\\mathbf{j}} + 5\\hat{\\mathbf{k}}$ N$\\cdot$m" },
        { "id": "W1-T2-Q04-opt2", "text": "$2\\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}} - 5\\hat{\\mathbf{k}}$ N$\\cdot$m" },
        { "id": "W1-T2-Q04-opt3", "text": "$-2\\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}} + 5\\hat{\\mathbf{k}}$ N$\\cdot$m" }
      ],
      "correct_indices": ["W1-T2-Q04-opt0"],
      "explanation": "The moment is $\\boldsymbol{M} = \\boldsymbol{r} \\times \\boldsymbol{F}$. Here $\\boldsymbol{r} = 2\\hat{\\mathbf{i}} - \\hat{\\mathbf{j}}$.\n$\\boldsymbol{M} = \\begin{vmatrix} \\hat{\\mathbf{i}} & \\hat{\\mathbf{j}} & \\hat{\\mathbf{k}} \\\\ 2 & -1 & 0 \\\\ 3 & 1 & -2 \\end{vmatrix} = \\hat{\\mathbf{i}}(2 - 0) - \\hat{\\mathbf{j}}(-4 - 0) + \\hat{\\mathbf{k}}(2 - (-3)) = 2\\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}} + 5\\hat{\\mathbf{k}}$ N$\\cdot$m.",
      "hint": "Set up the cross product $\\boldsymbol{M} = \\boldsymbol{r} \\times \\boldsymbol{F}$, where $\\boldsymbol{r}$ is the coordinates of the point of application."
    },
    {
      "id": "W1-T2-Q05",
      "week": 1,
      "tier": "should",
      "topic": "Vector Projections",
      "type": "single_select",
      "question": "Calculate the scalar projection of $\\boldsymbol{a} = 3\\hat{\\mathbf{i}} + 3\\hat{\\mathbf{j}}$ onto the direction of $\\boldsymbol{b} = 4\\hat{\\mathbf{i}}$.",
      "options": [
        { "id": "W1-T2-Q05-opt0", "text": "3" },
        { "id": "W1-T2-Q05-opt1", "text": "12" },
        { "id": "W1-T2-Q05-opt2", "text": "$3\\sqrt{2}$" },
        { "id": "W1-T2-Q05-opt3", "text": "4" }
      ],
      "correct_indices": ["W1-T2-Q05-opt0"],
      "explanation": "The scalar projection is $d = \\boldsymbol{a} \\cdot \\hat{\\boldsymbol{b}} = \\frac{\\boldsymbol{a} \\cdot \\boldsymbol{b}}{|\\boldsymbol{b}|}$. Here, $\\boldsymbol{a} \\cdot \\boldsymbol{b} = (3)(4) + (3)(0) = 12$, and $|\\boldsymbol{b}| = 4$. Thus, $d = 12/4 = 3$.",
      "hint": "Use $d = \\boldsymbol{a} \\cdot \\hat{\\boldsymbol{b}}$, where $\\hat{\\boldsymbol{b}}$ is the unit vector of $\\boldsymbol{b}$."
    },
    {
      "id": "W1-T2-Q06",
      "week": 1,
      "tier": "should",
      "topic": "Moment Magnitude",
      "type": "single_select",
      "question": "A force $\\boldsymbol{F} = 5\\hat{\\mathbf{i}} - \\hat{\\mathbf{j}} - \\hat{\\mathbf{k}}$ N acts at point $A$ with position vector $\\boldsymbol{a} = 3\\hat{\\mathbf{i}} + \\hat{\\mathbf{j}} + 8\\hat{\\mathbf{k}}$ m. Find the magnitude of the moment of $\\boldsymbol{F}$ about point $B$ with position vector $\\boldsymbol{b} = 2\\hat{\\mathbf{i}} - 3\\hat{\\mathbf{j}} + 7\\hat{\\mathbf{k}}$ m.",
      "options": [
        { "id": "W1-T2-Q06-opt0", "text": "$22.05$ N$\\cdot$m" },
        { "id": "W1-T2-Q06-opt1", "text": "$486$ N$\\cdot$m" },
        { "id": "W1-T2-Q06-opt2", "text": "$21.50$ N$\\cdot$m" },
        { "id": "W1-T2-Q06-opt3", "text": "$24.12$ N$\\cdot$m" }
      ],
      "correct_indices": ["W1-T2-Q06-opt0"],
      "explanation": "First, find vector $\\boldsymbol{r} = \\boldsymbol{a} - \\boldsymbol{b} = \\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}} + \\hat{\\mathbf{k}}$. Then, find the moment vector: $\\boldsymbol{M} = \\boldsymbol{r} \\times \\boldsymbol{F} = \\begin{vmatrix} \\hat{\\mathbf{i}} & \\hat{\\mathbf{j}} & \\hat{\\mathbf{k}} \\\\ 1 & 4 & 1 \\\\ 5 & -1 & -1 \\end{vmatrix} = -3\\hat{\\mathbf{i}} + 6\\hat{\\mathbf{j}} - 21\\hat{\\mathbf{k}}$. The magnitude is $|\\boldsymbol{M}| = \\sqrt{9+36+441} = \\sqrt{486} \\approx 22.05$ N$\\cdot$m.",
      "hint": "Position vector is $\\boldsymbol{r} = \\boldsymbol{a} - \\boldsymbol{b}$. Solve the cross product $\\boldsymbol{r} \\times \\boldsymbol{F}$ and calculate its Euclidean norm."
    },
    {
      "id": "W1-T2-Q07",
      "week": 1,
      "tier": "should",
      "topic": "Vector Magnitude 3D",
      "type": "single_select",
      "question": "A force of magnitude $36$ kN is applied in the direction of the vector $\\overrightarrow{AB}$, where point $A$ has coordinates $(7,5,14)$ and point $B$ has coordinates $(-1,1,15)$. Find the force vector $\\boldsymbol{F}$.",
      "options": [
        { "id": "W1-T2-Q07-opt0", "text": "$-32\\hat{\\mathbf{i}} - 16\\hat{\\mathbf{j}} + 4\\hat{\\mathbf{k}}$" },
        { "id": "W1-T2-Q07-opt1", "text": "$-8\\hat{\\mathbf{i}} - 4\\hat{\\mathbf{j}} + \\hat{\\mathbf{k}}$" },
        { "id": "W1-T2-Q07-opt2", "text": "$-32\\hat{\\mathbf{i}} - 16\\hat{\\mathbf{j}} - 4\\hat{\\mathbf{k}}$" },
        { "id": "W1-T2-Q07-opt3", "text": "$-16\\hat{\\mathbf{i}} - 8\\hat{\\mathbf{j}} + 2\\hat{\\mathbf{k}}$" }
      ],
      "correct_indices": ["W1-T2-Q07-opt0"],
      "explanation": "Displacement is $\\overrightarrow{AB} = [-8, -4, 1]$. Magnitude $|\\overrightarrow{AB}| = \\sqrt{64+16+1} = \\sqrt{81} = 9$. Unit vector is $\\hat{\\boldsymbol{u}} = \\frac{1}{9}[-8, -4, 1]$. Force vector is $\\boldsymbol{F} = 36\\hat{\\boldsymbol{u}} = 4[-8, -4, 1] = -32\\hat{\\mathbf{i}} - 16\\hat{\\mathbf{j}} + 4\\hat{\\mathbf{k}}$ kN.",
      "hint": "Form the displacement vector $\\overrightarrow{AB}$, normalize it to a unit vector, and multiply by the magnitude $36$."
    },
    {
      "id": "W1-T2-Q08",
      "week": 1,
      "tier": "should",
      "topic": "Force Resolution",
      "type": "single_select",
      "question": "Two forces $\\boldsymbol{F}_1$ (horizontal, magnitude $8$ N) and $\\boldsymbol{F}_2$ (inclined at $30^\\circ$ to the positive $x$-axis, magnitude $10$ N) act on a particle. Find the resultant force magnitude $|\\boldsymbol{R}|$.",
      "options": [
        { "id": "W1-T2-Q08-opt0", "text": "$17.39$ N" },
        { "id": "W1-T2-Q08-opt1", "text": "$18.00$ N" },
        { "id": "W1-T2-Q08-opt2", "text": "$15.56$ N" },
        { "id": "W1-T2-Q08-opt3", "text": "$16.66$ N" }
      ],
      "correct_indices": ["W1-T2-Q08-opt0"],
      "explanation": "Resolve components: $\\boldsymbol{F}_1 = [8, 0]$. $\\boldsymbol{F}_2 = [10\\cos 30^\\circ, 10\\sin 30^\\circ] = [5\\sqrt{3}, 5]$. Resultant is $\\boldsymbol{R} = [8+5\\sqrt{3}, 5] \\approx [16.66, 5]$. Magnitude is $|\\boldsymbol{R}| = \\sqrt{(16.66)^2 + 5^2} \\approx 17.39$ N.",
      "hint": "Sum the horizontal and vertical components of the two forces, and calculate the overall hypotenuse."
    },
    {
      "id": "W1-T2-Q09",
      "week": 1,
      "tier": "should",
      "topic": "Vector Projections",
      "type": "single_select",
      "question": "Given $\\boldsymbol{a} = \\hat{\\mathbf{i}} + 2\\hat{\\mathbf{j}} + 2\\hat{\\mathbf{k}}$ and $\\boldsymbol{b} = 3\\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}}$, find the scalar projection of $\\boldsymbol{a}$ onto $\\boldsymbol{b}$.",
      "options": [
        { "id": "W1-T2-Q09-opt0", "text": "2.2" },
        { "id": "W1-T2-Q09-opt1", "text": "11" },
        { "id": "W1-T2-Q09-opt2", "text": "3.5" },
        { "id": "W1-T2-Q09-opt3", "text": "1.8" }
      ],
      "correct_indices": ["W1-T2-Q09-opt0"],
      "explanation": "The dot product is $\\boldsymbol{a} \\cdot \\boldsymbol{b} = (1)(3) + (2)(4) + (2)(0) = 11$. The magnitude of the target vector is $|\\boldsymbol{b}| = \\sqrt{9+16} = 5$. The projection is $11/5 = 2.2$.",
      "hint": "Compute the dot product and divide by the length of the base vector."
    },
    {
      "id": "W1-T2-Q10",
      "week": 1,
      "tier": "should",
      "topic": "Angle Between Vectors",
      "type": "single_select",
      "question": "Find the angle between the vectors $\\boldsymbol{u} = 4\\hat{\\mathbf{i}} + \\hat{\\mathbf{j}}$ and $\\boldsymbol{v} = -2\\hat{\\mathbf{i}} + 3\\hat{\\mathbf{j}}$.",
      "options": [
        { "id": "W1-T2-Q10-opt0", "text": "$109.7^\\circ$" },
        { "id": "W1-T2-Q10-opt1", "text": "$70.3^\\circ$" },
        { "id": "W1-T2-Q10-opt2", "text": "$115.2^\\circ$" },
        { "id": "W1-T2-Q10-opt3", "text": "$95.5^\\circ$" }
      ],
      "correct_indices": ["W1-T2-Q10-opt0"],
      "explanation": "Dot product $\\boldsymbol{u} \\cdot \\boldsymbol{v} = (4)(-2) + (1)(3) = -5$. Magnitudes are $|\\boldsymbol{u}| = \\sqrt{17}$, $|\\boldsymbol{v}| = \\sqrt{13}$. Angle is $\\theta = \\arccos(-5 / \\sqrt{221}) \\approx 109.7^\\circ$.",
      "hint": "Apply the angle formula: $\\theta = \\arccos\\left(\\frac{\\boldsymbol{u} \\cdot \\boldsymbol{v}}{|\\boldsymbol{u}||\\boldsymbol{v}|}\\right)$."
    },
    {
      "id": "W1-T3-Q01",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Rotational Equilibrium",
      "type": "single_select",
      "question": "Three forces act on a body at position vectors $\\boldsymbol{r}_1 = \\hat{\\mathbf{i}} + x\\hat{\\mathbf{j}} + \\hat{\\mathbf{k}}$, $\\boldsymbol{r}_2 = \\hat{\\mathbf{i}} - \\hat{\\mathbf{j}} + 2\\hat{\\mathbf{k}}$, and $\\boldsymbol{r}_3 = \\hat{\\mathbf{i}} + y\\hat{\\mathbf{j}} + 2\\hat{\\mathbf{k}}$. The forces are $\\boldsymbol{F}_1 = 2\\hat{\\mathbf{i}} + \\hat{\\mathbf{j}} - 3\\hat{\\mathbf{k}}$, $\\boldsymbol{F}_2 = 3\\hat{\\mathbf{i}} - 4\\hat{\\mathbf{j}} + 6\\hat{\\mathbf{k}}$, and $\\boldsymbol{F}_3 = \\hat{\\mathbf{i}} + 10\\hat{\\mathbf{j}} + 7\\hat{\\mathbf{k}}$. For rotational equilibrium about the origin ($\\sum \\boldsymbol{r}_i \\times \\boldsymbol{F}_i = \\boldsymbol{0}$), determine the values of $x$ and $y$.",
      "options": [
        { "id": "W1-T3-Q01-opt0", "text": "$x=3$, $y=4$" },
        { "id": "W1-T3-Q01-opt1", "text": "$x=2$, $y=5$" },
        { "id": "W1-T3-Q01-opt2", "text": "$x=3$, $y=3$" },
        { "id": "W1-T3-Q01-opt3", "text": "$x=4$, $y=2$" }
      ],
      "correct_indices": ["W1-T3-Q01-opt0"],
      "explanation": "Taking cross products:\n$\\boldsymbol{M}_1 = [-3x-1, 5, 1-2x]$, $\\boldsymbol{M}_2 = [2, 0, -1]$, $\\boldsymbol{M}_3 = [7y-20, -5, 10-y]$.\nSetting sum of $x$-components to 0: $-3x + 7y = 19$.\nSetting sum of $z$-components to 0: $2x + y = 10 \\implies y = 10 - 2x$.\nSubstitute: $-3x + 7(10-2x) = 19 \\implies -17x = -51 \\implies x=3$, which gives $y = 10-6 = 4$.",
      "hint": "Express the sum of the moments in terms of $x$ and $y$. Set the $x$ and $z$ components of the total moment to zero to obtain a system of two linear equations."
    },
    {
      "id": "W1-T3-Q02",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Vector Geometry Ratio",
      "type": "single_select",
      "question": "If $\\overrightarrow{OA} = 4\\boldsymbol{a}$ and $\\overrightarrow{OB} = 4\\boldsymbol{b}$. Point $D$ is defined by $\\overrightarrow{AD} = 2\\overrightarrow{OA}$, and point $C$ divides $BD$ in the ratio $BC:CD = 1:3$. Find vector $\\overrightarrow{AC}$ in terms of $\\boldsymbol{a}$ and $\\boldsymbol{b}$.",
      "options": [
        { "id": "W1-T3-Q02-opt0", "text": "$3\\boldsymbol{b} - \\boldsymbol{a}$" },
        { "id": "W1-T3-Q02-opt1", "text": "$3\\boldsymbol{a} - \\boldsymbol{b}$" },
        { "id": "W1-T3-Q02-opt2", "text": "$4\\boldsymbol{b} - 2\\boldsymbol{a}$" },
        { "id": "W1-T3-Q02-opt3", "text": "$\\boldsymbol{b} - 3\\boldsymbol{a}$" }
      ],
      "correct_indices": ["W1-T3-Q02-opt0"],
      "explanation": "$\\overrightarrow{OD} = 12\\boldsymbol{a}$. Displacement $\\overrightarrow{BD} = 12\\boldsymbol{a} - 4\\boldsymbol{b}$. Since $C$ divides $BD$ in ratio $1:3$, $\\overrightarrow{BC} = \\frac{1}{4}\\overrightarrow{BD} = 3\\boldsymbol{a} - \\boldsymbol{b}$. Thus, $\\overrightarrow{AC} = \\overrightarrow{AO} + \\overrightarrow{OB} + \\overrightarrow{BC} = -4\\boldsymbol{a} + 4\\boldsymbol{b} + (3\\boldsymbol{a} - \\boldsymbol{b}) = 3\\boldsymbol{b} - \\boldsymbol{a}$.",
      "hint": "Express $\\overrightarrow{OD}$ first, then write the path from $A$ to $C$ using standard vector addition."
    },
    {
      "id": "W1-T3-Q03",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Angle of Resultant Force",
      "type": "single_select",
      "question": "A force $\\boldsymbol{F}_1 = 8\\hat{\\mathbf{i}}$ N and a force $\\boldsymbol{F}_2$ (magnitude $10$ N, inclined at $30^{\\circ}$ in the first quadrant) act on a particle. Find the angle of inclination of the resultant force $\\boldsymbol{R} = \\boldsymbol{F}_1 + \\boldsymbol{F}_2$ with respect to the horizontal.",
      "options": [
        { "id": "W1-T3-Q03-opt0", "text": "$16.71^\\circ$" },
        { "id": "W1-T3-Q03-opt1", "text": "$13.29^\\circ$" },
        { "id": "W1-T3-Q03-opt2", "text": "$22.45^\\circ$" },
        { "id": "W1-T3-Q03-opt3", "text": "$15.00^\\circ$" }
      ],
      "correct_indices": ["W1-T3-Q03-opt0"],
      "explanation": "Resultant components are $R_x = 8 + 10\\cos 30^\\circ = 8 + 5\\sqrt{3} \\approx 16.66$ N, and $R_y = 10\\sin 30^\\circ = 5$ N. The angle of inclination is $\\theta = \\arctan(R_y / R_x) = \\arctan(5 / 16.66) \\approx 16.71^\\circ$.",
      "hint": "Use $\\theta = \\arctan(R_y/R_x)$ once you have summed the Cartesian components."
    },
    {
      "id": "W1-T3-Q04",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Reversal Force Inclination",
      "type": "single_select",
      "question": "If the setup of the forces is altered such that $\\boldsymbol{F}_2$ (magnitude $10$ N) acts horizontally along the $x$-axis and $\\boldsymbol{F}_1$ (magnitude $8$ N) is inclined at $30^\\circ$ to it in the first quadrant, determine the new angle of inclination of the resultant force.",
      "options": [
        { "id": "W1-T3-Q04-opt0", "text": "$13.29^\\circ$" },
        { "id": "W1-T3-Q04-opt1", "text": "$16.71^\\circ$" },
        { "id": "W1-T3-Q04-opt2", "text": "$10.50^\\circ$" },
        { "id": "W1-T3-Q04-opt3", "text": "$15.00^\\circ$" }
      ],
      "correct_indices": ["W1-T3-Q04-opt0"],
      "explanation": "The new components are $R_x' = 10 + 8\\cos 30^\\circ = 10 + 4\\sqrt{3} \\approx 16.93$ N, and $R_y' = 8\\sin 30^\\circ = 4$ N. The new angle is $\\theta' = \\arctan(4 / 16.93) \\approx 13.29^\\circ$.",
      "hint": "Re-resolve the forces placing the $10$ N force along the $x$-axis and the $8$ N force at $30^\\circ$."
    },
    {
      "id": "W1-T3-Q05",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Angle Between Vectors 3D",
      "type": "single_select",
      "question": "Find the angle between the vectors $\\boldsymbol{a} = 2\\hat{\\mathbf{i}} + 2\\hat{\\mathbf{j}} - \\hat{\\mathbf{k}}$ and $\\boldsymbol{b} = \\hat{\\mathbf{i}} - 2\\hat{\\mathbf{j}} + 2\\hat{\\mathbf{k}}$.",
      "options": [
        { "id": "W1-T3-Q05-opt0", "text": "$116.4^\\circ$" },
        { "id": "W1-T3-Q05-opt1", "text": "$63.6^\\circ$" },
        { "id": "W1-T3-Q05-opt2", "text": "$90.0^\\circ$" },
        { "id": "W1-T3-Q05-opt3", "text": "$125.1^\\circ$" }
      ],
      "correct_indices": ["W1-T3-Q05-opt0"],
      "explanation": "Dot product $\\boldsymbol{a} \\cdot \\boldsymbol{b} = (2)(1) + (2)(-2) + (-1)(2) = 2 - 4 - 2 = -4$. Both magnitudes are $3$ ($|\\boldsymbol{a}| = \\sqrt{4+4+1} = 3$). The angle is $\\theta = \\arccos(-4 / 9) \\approx 116.4^\\circ$.",
      "hint": "First calculate the dot product and the two magnitudes, then find the inverse cosine of their ratio."
    },
    {
      "id": "W1-T3-Q06",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Vector Perpendicularity Proof",
      "type": "single_select",
      "question": "For what value of $k$ are the vectors $\\boldsymbol{u} = k\\hat{\\mathbf{i}} - 2\\hat{\\mathbf{j}} + \\hat{\\mathbf{k}}$ and $\\boldsymbol{v} = 2k\\hat{\\mathbf{i}} + k\\hat{\\mathbf{j}} - 4\\hat{\\mathbf{k}}$ perpendicular?",
      "options": [
        { "id": "W1-T3-Q06-opt0", "text": "$2$ or $-1$" },
        { "id": "W1-T3-Q06-opt1", "text": "$1$ or $-2$" },
        { "id": "W1-T3-Q06-opt2", "text": "$0$" },
        { "id": "W1-T3-Q06-opt3", "text": "$3$ or $-1.5$" }
      ],
      "correct_indices": ["W1-T3-Q06-opt0"],
      "explanation": "Perpendicular vectors have a dot product of zero: $\\boldsymbol{u} \\cdot \\boldsymbol{v} = (k)(2k) + (-2)(k) + (1)(-4) = 2k^2 - 2k - 4 = 0 \\implies k^2 - k - 2 = 0$. Factoring gives $(k-2)(k+1) = 0$, so $k=2$ or $k=-1$.",
      "hint": "Set the algebraic expression for the dot product equal to zero and solve the resulting quadratic equation."
    },
    {
      "id": "W1-T3-Q07",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Orthogonal Vector Verification",
      "type": "multiple_select",
      "question": "Select ALL vectors below that are perpendicular to the vector $\\boldsymbol{p} = 2\\hat{\\mathbf{i}} - \\hat{\\mathbf{j}} + 2\\hat{\\mathbf{k}}$:",
      "options": [
        { "id": "W1-T3-Q07-opt0", "text": "$2\\hat{\\mathbf{i}} + 2\\hat{\\mathbf{j}} - \\hat{\\mathbf{k}}$" },
        { "id": "W1-T3-Q07-opt1", "text": "$\\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}} + \\hat{\\mathbf{k}}$" },
        { "id": "W1-T3-Q07-opt2", "text": "$3\\hat{\\mathbf{i}} + 6\\hat{\\mathbf{j}}$" },
        { "id": "W1-T3-Q07-opt3", "text": "$-\\hat{\\mathbf{i}} - 2\\hat{\\mathbf{j}} + \\hat{\\mathbf{k}}$" }
      ],
      "correct_indices": ["W1-T3-Q07-opt0", "W1-T3-Q07-opt1", "W1-T3-Q07-opt2"],
      "explanation": "Test the dot products:\n- Option 1: $(2)(2) + (-1)(2) + (2)(-1) = 4 - 2 - 2 = 0$ (perpendicular).\n- Option 2: $(2)(1) + (-1)(4) + (2)(1) = 2 - 4 + 2 = 0$ (perpendicular).\n- Option 3: $(2)(3) + (-1)(6) + (2)(0) = 6 - 6 = 0$ (perpendicular).\n- Option 4: $(2)(-1) + (-1)(-2) + (2)(1) = -2 + 2 + 2 = 2 \\neq 0$.",
      "hint": "A vector is perpendicular if its dot product with $\\boldsymbol{p}$ is exactly zero."
    },
    {
      "id": "W1-T3-Q08",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Area of a Parallelogram",
      "type": "single_select",
      "question": "Find the area of the parallelogram spanned by vectors $\\boldsymbol{a} = 3\\hat{\\mathbf{i}} + 2\\hat{\\mathbf{j}} - 2\\hat{\\mathbf{k}}$ and $\\boldsymbol{b} = 2\\hat{\\mathbf{i}} + 4\\hat{\\mathbf{j}} - \\hat{\\mathbf{k}}$.",
      "options": [
        { "id": "W1-T3-Q08-opt0", "text": "$\\sqrt{101}$" },
        { "id": "W1-T3-Q08-opt1", "text": "101" },
        { "id": "W1-T3-Q08-opt2", "text": "$9$" },
        { "id": "W1-T3-Q08-opt3", "text": "$\\sqrt{97}$" }
      ],
      "correct_indices": ["W1-T3-Q08-opt0"],
      "explanation": "The area is the magnitude of the cross product: $\\boldsymbol{a} \\times \\boldsymbol{b} = 6\\hat{\\mathbf{i}} - \\hat{\\mathbf{j}} + 8\\hat{\\mathbf{k}}$. The area is $|\\boldsymbol{a} \\times \\boldsymbol{b}| = \\sqrt{36 + 1 + 64} = \\sqrt{101}$.",
      "hint": "Find the cross product of the two vectors, then compute its magnitude."
    },
    {
      "id": "W1-T3-Q09",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Vector Projections 3D",
      "type": "single_select",
      "question": "Determine the scalar projection of vector $\\boldsymbol{u} = \\hat{\\mathbf{i}} - \\hat{\\mathbf{j}} + 4\\hat{\\mathbf{k}}$ onto the vector $\\boldsymbol{v} = 2\\hat{\\mathbf{i}} + 2\\hat{\\mathbf{j}} - \\hat{\\mathbf{k}}$.",
      "options": [
        { "id": "W1-T3-Q09-opt0", "text": "-4/3" },
        { "id": "W1-T3-Q09-opt1", "text": "-4" },
        { "id": "W1-T3-Q09-opt2", "text": "0" },
        { "id": "W1-T3-Q09-opt3", "text": "-2/3" }
      ],
      "correct_indices": ["W1-T3-Q09-opt0"],
      "explanation": "$\\boldsymbol{u} \\cdot \\boldsymbol{v} = (1)(2) + (-1)(2) + (4)(-1) = -4$. Magnitude of target is $|\\boldsymbol{v}| = \\sqrt{4+4+1} = 3$. The scalar projection is $-4/3$.",
      "hint": "Multiply components and divide by the length of the vector you are projecting onto."
    },
    {
      "id": "W1-T3-Q10",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Triple Product Property",
      "type": "single_select",
      "question": "For any vectors $\\boldsymbol{a}$ and $\\boldsymbol{b}$, evaluate the scalar triple product $(\\boldsymbol{a} \\times \\boldsymbol{b}) \\cdot \\boldsymbol{a}$.",
      "options": [
        { "id": "W1-T3-Q10-opt0", "text": "0" },
        { "id": "W1-T3-Q10-opt1", "text": "$|\\boldsymbol{a}|^2 |\\boldsymbol{b}|$" },
        { "id": "W1-T3-Q10-opt2", "text": "$|\\boldsymbol{a} \\times \\boldsymbol{b}|$" },
        { "id": "W1-T3-Q10-opt3", "text": "1" }
      ],
      "correct_indices": ["W1-T3-Q10-opt0"],
      "explanation": "By definition, the cross product $\\boldsymbol{a} \\times \\boldsymbol{b}$ is perpendicular to both vector $\\boldsymbol{a}$ and vector $\\boldsymbol{b}$. Therefore, the dot product of $\\boldsymbol{a} \\times \\boldsymbol{b}$ with $\\boldsymbol{a}$ must be exactly zero.",
      "hint": "What is the direction of the vector $\\boldsymbol{a} \\times \\boldsymbol{b}$ relative to the vectors $\\boldsymbol{a}$ and $\\boldsymbol{b}$?"
    },
    {
      "id": "W1-T4-Q01",
      "week": 1,
      "tier": "extra",
      "topic": "Lagrange's Identity Proof",
      "type": "single_select",
      "question": "Prove Lagrange's Identity: $|\\boldsymbol{a} \\cdot \\boldsymbol{b}|^2 + |\\boldsymbol{a} \\times \\boldsymbol{b}|^2 = |\\boldsymbol{a}|^2 |\\boldsymbol{b}|^2$. If $|\\boldsymbol{a}| = 5$, $|\\boldsymbol{b}| = 4$, and the dot product $\\boldsymbol{a} \\cdot \\boldsymbol{b} = 12$, calculate the magnitude of the cross product $|\\boldsymbol{a} \\times \\boldsymbol{b}|$.",
      "options": [
        { "id": "W1-T4-Q01-opt0", "text": "16" },
        { "id": "W1-T4-Q01-opt1", "text": "256" },
        { "id": "W1-T4-Q01-opt2", "text": "12" },
        { "id": "W1-T4-Q01-opt3", "text": "20" }
      ],
      "correct_indices": ["W1-T4-Q01-opt0"],
      "explanation": "According to the identity: $|\\boldsymbol{a} \\times \\boldsymbol{b}|^2 = |\\boldsymbol{a}|^2 |\\boldsymbol{b}|^2 - |\\boldsymbol{a} \\cdot \\boldsymbol{b}|^2 = (5^2)(4^2) - 12^2 = 400 - 144 = 256$. Hence, $|\\boldsymbol{a} \\times \\boldsymbol{b}| = \\sqrt{256} = 16$.",
      "hint": "Apply the identity $|\\boldsymbol{a} \\cdot \\boldsymbol{b}|^2 + |\\boldsymbol{a} \\times \\boldsymbol{b}|^2 = |\\boldsymbol{a}|^2 |\\boldsymbol{b}|^2$ directly by substituting the given values."
    },
    {
      "id": "W1-T4-Q02",
      "week": 1,
      "tier": "extra",
      "topic": "Vector Triple Product Proof",
      "type": "single_select",
      "question": "Verify the vector triple product identity $\\boldsymbol{a} \\times (\\boldsymbol{b} \\times \\boldsymbol{c}) = (\\boldsymbol{a} \\cdot \\boldsymbol{c})\\boldsymbol{b} - (\\boldsymbol{a} \\cdot \\boldsymbol{b})\\boldsymbol{c}$ for the specific vectors $\\boldsymbol{a} = \\hat{\\mathbf{i}} + \\hat{\\mathbf{j}}$, $\\boldsymbol{b} = 2\\hat{\\mathbf{i}} - \\hat{\\mathbf{k}}$, and $\\boldsymbol{c} = \\hat{\\mathbf{j}} + 3\\hat{\\mathbf{k}}$. Find the resulting vector.",
      "options": [
        { "id": "W1-T4-Q02-opt0", "text": "$2\\hat{\\mathbf{i}} - 2\\hat{\\mathbf{j}} - 7\\hat{\\mathbf{k}}$" },
        { "id": "W1-T4-Q02-opt1", "text": "$2\\hat{\\mathbf{i}} + 2\\hat{\\mathbf{j}} - 7\\hat{\\mathbf{k}}$" },
        { "id": "W1-T4-Q02-opt2", "text": "$2\\hat{\\mathbf{i}} - 2\\hat{\\mathbf{j}} + 7\\hat{\\mathbf{k}}$" },
        { "id": "W1-T4-Q02-opt3", "text": "$-2\\hat{\\mathbf{i}} + 2\\hat{\\mathbf{j}} - 7\\hat{\\mathbf{k}}$" }
      ],
      "correct_indices": ["W1-T4-Q02-opt0"],
      "explanation": "RHS:\n$\\boldsymbol{a} \\cdot \\boldsymbol{c} = (1)(0) + (1)(1) + (0)(3) = 1$.\n$\\boldsymbol{a} \\cdot \\boldsymbol{b} = (1)(2) + (1)(0) + (0)(-1) = 2$.\nExpression: $1(2\\hat{\\mathbf{i}} - \\hat{\\mathbf{k}}) - 2(\\hat{\\mathbf{j}} + 3\\hat{\\mathbf{k}}) = 2\\hat{\\mathbf{i}} - 2\\hat{\\mathbf{j}} - 7\\hat{\\mathbf{k}}$. LHS calculation yields the same vector.",
      "hint": "Evaluate the scalar products $(\\boldsymbol{a} \\cdot \\boldsymbol{c})$ and $(\\boldsymbol{a} \\cdot \\boldsymbol{b})$ first, and then evaluate the linear combination."
    },
    {
      "id": "W1-T4-Q03",
      "week": 1,
      "tier": "extra",
      "topic": "Coplanar Vectors Proof",
      "type": "single_select",
      "question": "Three vectors $\\boldsymbol{u}$, $\\boldsymbol{v}$, and $\\boldsymbol{w}$ are coplanar (lie in the same plane) if and only if their scalar triple product is zero: $\\boldsymbol{u} \\cdot (\\boldsymbol{v} \\times \\boldsymbol{w}) = 0$. Determine the value of $m$ for which vectors $\\boldsymbol{u} = \\hat{\\mathbf{i}} + 3\\hat{\\mathbf{j}} - 2\\hat{\\mathbf{k}}$, $\\boldsymbol{v} = 3\\hat{\\mathbf{i}} - \\hat{\\mathbf{j}} + \\hat{\\mathbf{k}}$, and $\\boldsymbol{w} = m\\hat{\\mathbf{i}} + 2\\hat{\\mathbf{j}} - \\hat{\\mathbf{k}}$ are coplanar.",
      "options": [
        { "id": "W1-T4-Q03-opt0", "text": "4" },
        { "id": "W1-T4-Q03-opt1", "text": "-1" },
        { "id": "W1-T4-Q03-opt2", "text": "2" },
        { "id": "W1-T4-Q03-opt3", "text": "0" }
      ],
      "correct_indices": ["W1-T4-Q03-opt0"],
      "explanation": "Set the determinant to zero:\n$\\begin{vmatrix} 1 & 3 & -2 \\\\ 3 & -1 & 1 \\\\ m & 2 & -1 \\end{vmatrix} = 1((-1)(-1)-(1)(2)) - 3((3)(-1)-(1)(m)) - 2((3)(2)-(-1)(m)) = -1 + 9 + 3m - 12 - 2m = m - 4 = 0 \\implies m = 4$.",
      "hint": "Set up the $3 \\times 3$ matrix with components of $\\boldsymbol{u}$, $\\boldsymbol{v}$, and $\\boldsymbol{w}$ as rows. Set its determinant to zero."
    },
    {
      "id": "W1-T4-Q04",
      "week": 1,
      "tier": "extra",
      "topic": "Vector Calculus Proof",
      "type": "single_select",
      "question": "Prove that the vector $(\\boldsymbol{a} - \\boldsymbol{b}) \\times (\\boldsymbol{a} + \\boldsymbol{b})$ simplifies to which of the following expressions?",
      "options": [
        { "id": "W1-T4-Q04-opt0", "text": "$2(\\boldsymbol{a} \\times \\boldsymbol{b})$" },
        { "id": "W1-T4-Q04-opt1", "text": "$\\boldsymbol{0}$" },
        { "id": "W1-T4-Q04-opt2", "text": "$2(\\boldsymbol{b} \\times \\boldsymbol{a})$" },
        { "id": "W1-T4-Q04-opt3", "text": "$|\\boldsymbol{a}|^2 - |\\boldsymbol{b}|^2$" }
      ],
      "correct_indices": ["W1-T4-Q04-opt0"],
      "explanation": "Expanding the cross product using distributivity:\n$(\\boldsymbol{a} - \\boldsymbol{b}) \\times (\\boldsymbol{a} + \\boldsymbol{b}) = \\boldsymbol{a} \\times \\boldsymbol{a} + \\boldsymbol{a} \\times \\boldsymbol{b} - \\boldsymbol{b} \\times \\boldsymbol{a} - \\boldsymbol{b} \\times \\boldsymbol{b}$.\nSince $\\boldsymbol{u} \\times \\boldsymbol{u} = \\boldsymbol{0}$ and $\\boldsymbol{b} \\times \\boldsymbol{a} = -\\boldsymbol{a} \\times \\boldsymbol{b}$, this simplifies to:\n$\\boldsymbol{0} + \\boldsymbol{a} \\times \\boldsymbol{b} - (-\\boldsymbol{a} \\times \\boldsymbol{b}) - \\boldsymbol{0} = 2(\\boldsymbol{a} \\times \\boldsymbol{b})$.",
      "hint": "Distribute the cross product like polynomial multiplication, remembering that $\\boldsymbol{x} \\times \\boldsymbol{x} = \\boldsymbol{0}$ and $\\boldsymbol{y} \\times \\boldsymbol{x} = -(\\boldsymbol{x} \\times \\boldsymbol{y})$."
    },
    {
      "id": "W1-T4-Q05",
      "week": 1,
      "tier": "extra",
      "topic": "Angle Bisector Vector",
      "type": "single_select",
      "question": "Given two non-zero vectors $\\boldsymbol{u}$ and $\\boldsymbol{v}$, which of the following vectors bisects the angle between them?",
      "options": [
        { "id": "W1-T4-Q05-opt0", "text": "$\\hat{\\boldsymbol{u}} + \\hat{\\boldsymbol{v}}$" },
        { "id": "W1-T4-Q05-opt1", "text": "$\\boldsymbol{u} + \\boldsymbol{v}$" },
        { "id": "W1-T4-Q05-opt2", "text": "$\\boldsymbol{u} \\times \\boldsymbol{v}$" },
        { "id": "W1-T4-Q05-opt3", "text": "$\\hat{\\boldsymbol{u}} - \\hat{\\boldsymbol{v}}$" }
      ],
      "correct_indices": ["W1-T4-Q05-opt0"],
      "explanation": "If we normalize both vectors to unit length $\\hat{\\boldsymbol{u}}$ and $\\hat{\\boldsymbol{v}}$, they form a rhombus. The diagonal of a rhombus bisects the interior angles. Hence, the sum of the unit vectors $\\hat{\\boldsymbol{u}} + \\hat{\\boldsymbol{v}}$ bisects the angle.",
      "hint": "Normalize both vectors first so they form a rhombus, then use the parallelogram rule."
    },
    {
      "id": "W1-T4-Q06",
      "week": 1,
      "tier": "extra",
      "topic": "Orthogonal Projections",
      "type": "single_select",
      "question": "If $\\boldsymbol{u}_v$ is the vector projection of $\\boldsymbol{u}$ onto $\\boldsymbol{v}$, find the vector component of $\\boldsymbol{u}$ that is perpendicular (orthogonal) to $\\boldsymbol{v}$.",
      "options": [
        { "id": "W1-T4-Q06-opt0", "text": "$\\boldsymbol{u} - \\frac{\\boldsymbol{u} \\cdot \\boldsymbol{v}}{|\\boldsymbol{v}|^2}\\boldsymbol{v}$" },
        { "id": "W1-T4-Q06-opt1", "text": "$\\boldsymbol{u} - \\frac{\\boldsymbol{u} \\cdot \\boldsymbol{v}}{|\\boldsymbol{v}|}\\boldsymbol{v}$" },
        { "id": "W1-T4-Q06-opt2", "text": "$\\frac{\\boldsymbol{u} \\cdot \\boldsymbol{v}}{|\\boldsymbol{v}|^2}\\boldsymbol{v}$" },
        { "id": "W1-T4-Q06-opt3", "text": "$\\boldsymbol{u} \\times \\boldsymbol{v}$" }
      ],
      "correct_indices": ["W1-T4-Q06-opt0"],
      "explanation": "Any vector can be decomposed into parallel and perpendicular components: $\\boldsymbol{u} = \\boldsymbol{u}_{\\parallel} + \\boldsymbol{u}_{\\perp}$. Since $\\boldsymbol{u}_{\\parallel} = \\frac{\\boldsymbol{u} \\cdot \\boldsymbol{v}}{|\\boldsymbol{v}|^2}\\boldsymbol{v}$, the perpendicular component is $\\boldsymbol{u}_{\\perp} = \\boldsymbol{u} - \\frac{\\boldsymbol{u} \\cdot \\boldsymbol{v}}{|\\boldsymbol{v}|^2}\\boldsymbol{v}$.",
      "hint": "Subtract the vector projection of $\\boldsymbol{u}$ onto $\\boldsymbol{v}$ from the original vector $\\boldsymbol{u}$."
    },
    {
      "id": "W1-T4-Q07",
      "week": 1,
      "tier": "extra",
      "topic": "Work Done Resultant",
      "type": "single_select",
      "question": "Two forces $\\boldsymbol{F}_1 = 2\\hat{\\mathbf{i}} + 3\\hat{\\mathbf{j}} - \\hat{\\mathbf{k}}$ N and $\\boldsymbol{F}_2 = \\hat{\\mathbf{i}} - \\hat{\\mathbf{j}} + 4\\hat{\\mathbf{k}}$ N act simultaneously on a particle. Find the total work done by the resultant force in moving the particle from $A(1,1,1)$ m to $B(2,3,4)$ m.",
      "options": [
        { "id": "W1-T4-Q07-opt0", "text": "16 J" },
        { "id": "W1-T4-Q07-opt1", "text": "20 J" },
        { "id": "W1-T4-Q07-opt2", "text": "12 J" },
        { "id": "W1-T4-Q07-opt3", "text": "24 J" }
      ],
      "correct_indices": ["W1-T4-Q07-opt0"],
      "explanation": "The resultant force is $\\boldsymbol{F} = \\boldsymbol{F}_1 + \\boldsymbol{F}_2 = 3\\hat{\\mathbf{i}} + 2\\hat{\\mathbf{j}} + 3\\hat{\\mathbf{k}}$ N. The displacement is $\\boldsymbol{d} = B - A = [1, 2, 3]$ m. The total work done is $W = \\boldsymbol{F} \\cdot \\boldsymbol{d} = (3)(1) + (2)(2) + (3)(3) = 3 + 4 + 9 = 16$ J.",
      "hint": "Calculate the resultant force $\\boldsymbol{F}_1 + \\boldsymbol{F}_2$, find the displacement $\\overrightarrow{AB}$, and take their dot product."
    },
    {
      "id": "W1-T4-Q08",
      "week": 1,
      "tier": "extra",
      "topic": "Volume of Parallelopiped",
      "type": "single_select",
      "question": "The volume of a parallelepiped spanned by vectors $\\boldsymbol{u}$, $\\boldsymbol{v}$, and $\\boldsymbol{w}$ is given by the absolute value of their scalar triple product: $V = |\\boldsymbol{u} \\cdot (\\boldsymbol{v} \\times \\boldsymbol{w})|$. Find the volume if $\\boldsymbol{u} = \\hat{\\mathbf{i}} + \\hat{\\mathbf{j}}$, $\\boldsymbol{v} = 2\\hat{\\mathbf{i}} - \\hat{\\mathbf{k}}$, and $\\boldsymbol{w} = \\hat{\\mathbf{j}} + 3\\hat{\\mathbf{k}}$.",
      "options": [
        { "id": "W1-T4-Q08-opt0", "text": "5" },
        { "id": "W1-T4-Q08-opt1", "text": "7" },
        { "id": "W1-T4-Q08-opt2", "text": "6" },
        { "id": "W1-T4-Q08-opt3", "text": "8" }
      ],
      "correct_indices": ["W1-T4-Q08-opt0"],
      "explanation": "Compute the determinant:\n$V = \\begin{vmatrix} 1 & 1 & 0 \\\\ 2 & 0 & -1 \\\\ 0 & 1 & 3 \\end{vmatrix} = 1(0 - (-1)) - 1(6 - 0) + 0 = 1 - 6 = -5$. Taking the absolute value gives $V = 5$.",
      "hint": "Evaluate the determinant of the matrix formed by the three vectors as rows, and take the absolute value."
    },
    {
      "id": "W1-T4-Q09",
      "week": 1,
      "tier": "extra",
      "topic": "Collinear Points Proof",
      "type": "single_select",
      "question": "Three points $A$, $B$, and $C$ are collinear if the vectors $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$ are parallel (meaning $\\overrightarrow{AB} \\times \\overrightarrow{AC} = \\boldsymbol{0}$). Determine if points $A(1,2,3)$, $B(3,4,4)$, and $C(7,8,6)$ are collinear.",
      "options": [
        { "id": "W1-T4-Q09-opt0", "text": "Yes, they are collinear." },
        { "id": "W1-T4-Q09-opt1", "text": "No, they are not collinear." }
      ],
      "correct_indices": ["W1-T4-Q09-opt0"],
      "explanation": "Calculate the vectors: $\\overrightarrow{AB} = [2, 2, 1]$ and $\\overrightarrow{AC} = [6, 6, 3]$. Notice that $\\overrightarrow{AC} = 3\\overrightarrow{AB}$. Since one is a scalar multiple of the other, they are parallel, so the points are collinear.",
      "hint": "Check if displacement vector $\\overrightarrow{AC}$ is a scalar multiple of $\\overrightarrow{AB}$."
    },
    {
      "id": "W1-T4-Q10",
      "week": 1,
      "tier": "extra",
      "topic": "Force Vector Direction",
      "type": "single_select",
      "question": "Find the coordinate direction angles $(\\alpha, \\beta, \\gamma)$ that the vector $\\boldsymbol{a} = \\hat{\\mathbf{i}} + \\hat{\\mathbf{j}} + \\sqrt{2}\\hat{\\mathbf{k}}$ makes with the positive coordinate axes.",
      "options": [
        { "id": "W1-T4-Q10-opt0", "text": "$\\alpha=60^\\circ$, $\\beta=60^\\circ$, $\\gamma=45^\\circ$" },
        { "id": "W1-T4-Q10-opt1", "text": "$\\alpha=45^\\circ$, $\\beta=45^\\circ$, $\\gamma=60^\\circ$" },
        { "id": "W1-T4-Q10-opt2", "text": "$\\alpha=30^\\circ$, $\\beta=30^\\circ$, $\\gamma=45^\\circ$" },
        { "id": "W1-T4-Q10-opt3", "text": "$\\alpha=60^\\circ$, $\\beta=60^\\circ$, $\\gamma=30^\\circ$" }
      ],
      "correct_indices": ["W1-T4-Q10-opt0"],
      "explanation": "First, find the magnitude: $|\\boldsymbol{a}| = \\sqrt{1 + 1 + 2} = \\sqrt{4} = 2$. The cosines are:\n$\\cos\\alpha = 1/2 \\implies \\alpha=60^\\circ$.\n$\\cos\\beta = 1/2 \\implies \\beta=60^\\circ$.\n$\\cos\\gamma = \\sqrt{2}/2 \\implies \\gamma=45^\\circ$.",
      "hint": "Find the unit vector components: $\\cos\\alpha = a_1/|\\boldsymbol{a}|$, $\\cos\\beta = a_2/|\\boldsymbol{a}|$, $\\cos\\gamma = a_3/|\\boldsymbol{a}|$."
    }
  ]
};
