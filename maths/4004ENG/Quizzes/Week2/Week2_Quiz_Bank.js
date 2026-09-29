window.QUIZ_BANK_WEEK2 = {
  "module": "4004ENG Engineering Mathematics",
  "week": 2,
  "title": "Week 2 Quiz Bank: Linear Algebra II (Matrices & Systems of Equations)",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W2-T1-Q01",
      "week": 2,
      "tier": "core",
      "topic": "Matrix Addition Feasibility",
      "type": "single_select",
      "question": "If $\\boldsymbol{A}$ is a $2 \\times 3$ matrix and $\\boldsymbol{B}$ is a $3 \\times 2$ matrix, which of the following operations is <strong>impossible</strong> to compute?",
      "options": [
        { "id": "W2-T1-Q01-opt0", "text": "$\\boldsymbol{A} + \\boldsymbol{B}$" },
        { "id": "W2-T1-Q01-opt1", "text": "$\\boldsymbol{A} \\boldsymbol{B}$" },
        { "id": "W2-T1-Q01-opt2", "text": "$\\boldsymbol{A} + \\boldsymbol{B}^T$" },
        { "id": "W2-T1-Q01-opt3", "text": "$\\boldsymbol{A}^T \\boldsymbol{B}^T$" }
      ],
      "correct_indices": ["W2-T1-Q01-opt0"],
      "explanation": "Matrix addition requires both matrices to have the exact same dimensions. Here, $\\boldsymbol{A}$ is $2 \\times 3$ and $\\boldsymbol{B}$ is $3 \\times 2$, so they cannot be added. However, transposing $\\boldsymbol{B}$ yields $\\boldsymbol{B}^T$ which is $2 \\times 3$, making $\\boldsymbol{A} + \\boldsymbol{B}^T$ possible.",
      "hint": "Check the dimensions required for matrix addition compared to matrix multiplication."
    },
    {
      "id": "W2-T1-Q02",
      "week": 2,
      "tier": "core",
      "topic": "Matrix Scalar Multiplication",
      "type": "single_select",
      "question": "Given $\\boldsymbol{A} = \\begin{bmatrix} 3 & 1 \\\\ 5 & 2 \\end{bmatrix}$, find $5\\boldsymbol{A}$.",
      "options": [
        { "id": "W2-T1-Q02-opt0", "text": "$\\begin{bmatrix} 15 & 5 \\\\ 25 & 10 \\end{bmatrix}$" },
        { "id": "W2-T1-Q02-opt1", "text": "$\\begin{bmatrix} 15 & 1 \\\\ 5 & 10 \\end{bmatrix}$" },
        { "id": "W2-T1-Q02-opt2", "text": "$\\begin{bmatrix} 8 & 6 \\\\ 10 & 7 \\end{bmatrix}$" },
        { "id": "W2-T1-Q02-opt3", "text": "$\\begin{bmatrix} 15 & 5 \\\\ 5 & 2 \\end{bmatrix}$" }
      ],
      "correct_indices": ["W2-T1-Q02-opt0"],
      "explanation": "Scalar multiplication is performed by multiplying every entry in the matrix by the scalar: $5\\begin{bmatrix} 3 & 1 \\\\ 5 & 2 \\end{bmatrix} = \\begin{bmatrix} 15 & 5 \\\\ 25 & 10 \\end{bmatrix}$.",
      "hint": "Multiply each individual cell in the matrix by 5."
    },
    {
      "id": "W2-T1-Q03",
      "week": 2,
      "tier": "core",
      "topic": "Matrix Transposition",
      "type": "single_select",
      "question": "If $\\boldsymbol{B} = \\begin{bmatrix} 0 & 7 & 9 \\\\ 5 & 2 & 1 \\end{bmatrix}$, find the transpose matrix $\\boldsymbol{B}^T$.",
      "options": [
        { "id": "W2-T1-Q03-opt0", "text": "$\\begin{bmatrix} 0 & 5 \\\\ 7 & 2 \\\\ 9 & 1 \\end{bmatrix}$" },
        { "id": "W2-T1-Q03-opt1", "text": "$\\begin{bmatrix} 5 & 2 & 1 \\\\ 0 & 7 & 9 \\end{bmatrix}$" },
        { "id": "W2-T1-Q03-opt2", "text": "$\\begin{bmatrix} 0 & 7 \\\\ 5 & 2 \\\\ 9 & 1 \\end{bmatrix}$" },
        { "id": "W2-T1-Q03-opt3", "text": "$\\begin{bmatrix} 9 & 1 \\\\ 7 & 2 \\\\ 0 & 5 \\end{bmatrix}$" }
      ],
      "correct_indices": ["W2-T1-Q03-opt0"],
      "explanation": "The transpose of a matrix is formed by swapping its rows and columns. Thus, the $2 \\times 3$ matrix $\\boldsymbol{B}$ becomes a $3 \\times 2$ matrix.",
      "hint": "Turn the rows of the original matrix into columns."
    },
    {
      "id": "W2-T1-Q04",
      "week": 2,
      "tier": "core",
      "topic": "Determinant of 2x2 Matrix",
      "type": "single_select",
      "question": "Calculate the determinant of the matrix $\\boldsymbol{A} = \\begin{bmatrix} 3 & 1 \\\\ 5 & 2 \\end{bmatrix}$.",
      "options": [
        { "id": "W2-T1-Q04-opt0", "text": "1" },
        { "id": "W2-T1-Q04-opt1", "text": "-1" },
        { "id": "W2-T1-Q04-opt2", "text": "11" },
        { "id": "W2-T1-Q04-opt3", "text": "0" }
      ],
      "correct_indices": ["W2-T1-Q04-opt0"],
      "explanation": "The determinant of a $2 \\times 2$ matrix $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ is given by $ad - bc$. For $\\boldsymbol{A}$, $\\det(\\boldsymbol{A}) = (3)(2) - (1)(5) = 6 - 5 = 1$.",
      "hint": "Subtract the product of the off-diagonal entries from the product of the main diagonal entries."
    },
    {
      "id": "W2-T1-Q05",
      "topic": "Properties of Determinants",
      "week": 2,
      "tier": "core",
      "type": "single_select",
      "question": "How does swapping any two rows or columns of a matrix affect its determinant?",
      "options": [
        { "id": "W2-T1-Q05-opt0", "text": "It negates the determinant." },
        { "id": "W2-T1-Q05-opt1", "text": "It leaves the determinant unchanged." },
        { "id": "W2-T1-Q05-opt2", "text": "It changes the determinant to zero." },
        { "id": "W2-T1-Q05-opt3", "text": "It doubles the determinant value." }
      ],
      "correct_indices": ["W2-T1-Q05-opt0"],
      "explanation": "A fundamental property of determinants is that swapping any two rows or columns changes the sign of the determinant (i.e. multiplies it by $-1$).",
      "hint": "Consider the determinant of $\\begin{bmatrix} 3 & 1 \\\\ 5 & 2 \\end{bmatrix}$ ($1$) versus $\\begin{bmatrix} 1 & 3 \\\\ 2 & 5 \\end{bmatrix}$ ($-1$)."
    },
    {
      "id": "W2-T1-Q06",
      "week": 2,
      "tier": "core",
      "topic": "Determinant and Transpose",
      "type": "single_select",
      "question": "If $\\boldsymbol{A}$ is a square matrix, what is the relationship between $\\det(\\boldsymbol{A})$ and the determinant of its transpose, $\\det(\\boldsymbol{A}^T)$?",
      "options": [
        { "id": "W2-T1-Q06-opt0", "text": "$\\det(\\boldsymbol{A}) = \\det(\\boldsymbol{A}^T)$" },
        { "id": "W2-T1-Q06-opt1", "text": "$\\det(\\boldsymbol{A}) = -\\det(\\boldsymbol{A}^T)$" },
        { "id": "W2-T1-Q06-opt2", "text": "$\\det(\\boldsymbol{A}) = \\frac{1}{\\det(\\boldsymbol{A}^T)}$" },
        { "id": "W2-T1-Q06-opt3", "text": "There is no general relation." }
      ],
      "correct_indices": ["W2-T1-Q06-opt0"],
      "explanation": "Transposition does not change the determinant of a matrix: $\\det(\\boldsymbol{A}) = \\det(\\boldsymbol{A}^T)$. This is because rows and columns play symmetric roles in the cofactor expansion.",
      "hint": "Think about cofactor expansion. Does expanding along the first row of a matrix differ from expanding along the first column of its transpose?"
    },
    {
      "id": "W2-T1-Q07",
      "week": 2,
      "tier": "core",
      "topic": "Matrix Multiplication Order",
      "type": "single_select",
      "question": "If $\\boldsymbol{A}$ is $2 \\times 3$ and $\\boldsymbol{B}$ is $3 \\times 4$, what is the size of the product matrix $\\boldsymbol{A} \\boldsymbol{B}$?",
      "options": [
        { "id": "W2-T1-Q07-opt0", "text": "$2 \\times 4$" },
        { "id": "W2-T1-Q07-opt1", "text": "$3 \\times 3$" },
        { "id": "W2-T1-Q07-opt2", "text": "$4 \\times 2$" },
        { "id": "W2-T1-Q07-opt3", "text": "Multiplication is impossible." }
      ],
      "correct_indices": ["W2-T1-Q07-opt0"],
      "explanation": "For matrix multiplication $\\boldsymbol{A}_{m \\times n} \\boldsymbol{B}_{n \\times p}$, the inner dimensions $n$ must match, and the resulting product matrix has size $m \\times p$. Here, $(2 \\times 3) \\times (3 \\times 4)$ yields a $2 \\times 4$ matrix.",
      "hint": "The outer dimensions of the multiplied matrices determine the size of the product."
    },
    {
      "id": "W2-T1-Q08",
      "week": 2,
      "tier": "core",
      "topic": "Symmetric Matrix Definition",
      "type": "single_select",
      "question": "A square matrix $\\boldsymbol{A}$ is defined as symmetric if which of the following holds?",
      "options": [
        { "id": "W2-T1-Q08-opt0", "text": "$\\boldsymbol{A} = \\boldsymbol{A}^T$" },
        { "id": "W2-T1-Q08-opt1", "text": "$\\boldsymbol{A} = -\\boldsymbol{A}^T$" },
        { "id": "W2-T1-Q08-opt2", "text": "$\\det(\\boldsymbol{A}) = 0$" },
        { "id": "W2-T1-Q08-opt3", "text": "$\\boldsymbol{A} \\boldsymbol{A}^T = \\boldsymbol{I}$" }
      ],
      "correct_indices": ["W2-T1-Q08-opt0"],
      "explanation": "A matrix is symmetric if it is equal to its transpose ($\\boldsymbol{A} = \\boldsymbol{A}^T$), meaning the entry in the $i$-th row and $j$-th column is equal to the entry in the $j$-th row and $i$-th column.",
      "hint": "A symmetric matrix is equal to its reflection across the main diagonal."
    },
    {
      "id": "W2-T1-Q09",
      "week": 2,
      "tier": "core",
      "topic": "Singular Matrix Definition",
      "type": "single_select",
      "question": "Under what condition does a square matrix $\\boldsymbol{A}$ have <strong>no</strong> inverse?",
      "options": [
        { "id": "W2-T1-Q09-opt0", "text": "$\\det(\\boldsymbol{A}) = 0$" },
        { "id": "W2-T1-Q09-opt1", "text": "$\\det(\\boldsymbol{A}) \\neq 0$" },
        { "id": "W2-T1-Q09-opt2", "text": "$\\boldsymbol{A} = \\boldsymbol{A}^T$" },
        { "id": "W2-T1-Q09-opt3", "text": "$\\boldsymbol{A}$ has positive eigenvalues." }
      ],
      "correct_indices": ["W2-T1-Q09-opt0"],
      "explanation": "A matrix is singular (has no inverse) if and only if its determinant is zero ($\\det(\\boldsymbol{A}) = 0$), because calculating the inverse requires dividing by the determinant.",
      "hint": "Think about the scalar analogy: you cannot divide by zero."
    },
    {
      "id": "W2-T1-Q10",
      "week": 2,
      "tier": "core",
      "topic": "Identity Matrix Property",
      "type": "single_select",
      "question": "For any $2 \\times 2$ matrix $\\boldsymbol{A}$, what is the product $\\boldsymbol{A} \\boldsymbol{I}$, where $\\boldsymbol{I}$ is the identity matrix?",
      "options": [
        { "id": "W2-T1-Q10-opt0", "text": "$\\boldsymbol{A}$" },
        { "id": "W2-T1-Q10-opt1", "text": "$\\boldsymbol{I}$" },
        { "id": "W2-T1-Q10-opt2", "text": "$\\boldsymbol{0}$" },
        { "id": "W2-T1-Q10-opt3", "text": "$\\boldsymbol{A}^T$" }
      ],
      "correct_indices": ["W2-T1-Q10-opt0"],
      "explanation": "The identity matrix $\\boldsymbol{I}$ acts as the multiplicative identity in matrix algebra, meaning multiplying any matrix by $\\boldsymbol{I}$ leaves the matrix unchanged: $\\boldsymbol{A} \\boldsymbol{I} = \\boldsymbol{I} \\boldsymbol{A} = \\boldsymbol{A}$.",
      "hint": "The identity matrix is the matrix equivalent of the number 1."
    },
    {
      "id": "W2-T2-Q01",
      "week": 2,
      "tier": "should",
      "topic": "Matrix Multiplication 2D",
      "type": "single_select",
      "question": "Given $\\boldsymbol{B} = \\begin{bmatrix} 0 & 7 & 9 \\\\ 5 & 2 & 1 \\end{bmatrix}$ and $\\boldsymbol{C} = \\begin{bmatrix} 4 & 2 \\\\ 10 & 2 \\\\ 8 & 16 \\end{bmatrix}$, calculate the product $\\boldsymbol{B} \\boldsymbol{C}$.",
      "options": [
        { "id": "W2-T2-Q01-opt0", "text": "$\\begin{bmatrix} 142 & 158 \\\\ 48 & 30 \\end{bmatrix}$" },
        { "id": "W2-T2-Q01-opt1", "text": "$\\begin{bmatrix} 102 & 158 \\\\ 48 & 20 \\end{bmatrix}$" },
        { "id": "W2-T2-Q01-opt2", "text": "$\\begin{bmatrix} 142 & 132 \\\\ 38 & 30 \\end{bmatrix}$" },
        { "id": "W2-T2-Q01-opt3", "text": "$\\begin{bmatrix} 10 & 32 & 38 \\\\ 10 & 74 & 92 \\\\ 80 & 88 & 88 \\end{bmatrix}$" }
      ],
      "correct_indices": ["W2-T2-Q01-opt0"],
      "explanation": "Multiply row by column:\nRow 1 of B times Col 1 of C: $(0)(4) + (7)(10) + (9)(8) = 142$.\nRow 1 of B times Col 2 of C: $(0)(2) + (7)(2) + (9)(16) = 158$.\nRow 2 of B times Col 1 of C: $(5)(4) + (2)(10) + (1)(8) = 48$.\nRow 2 of B times Col 2 of C: $(5)(2) + (2)(2) + (1)(16) = 30$.",
      "hint": "Recall the row-column multiplication rule: multiply corresponding entries and add them."
    },
    {
      "id": "W2-T2-Q02",
      "week": 2,
      "tier": "should",
      "topic": "Matrix Algebra Equation",
      "type": "single_select",
      "question": "Find values of $a$, $b$, and $c$ such that $\\begin{bmatrix} 15 & a \\\\ b & 30 \\end{bmatrix} \\begin{bmatrix} 3 & 9 \\\\ 5 & c \\end{bmatrix} = \\boldsymbol{0}$.",
      "options": [
        { "id": "W2-T2-Q02-opt0", "text": "$a=-9, b=-50, c=15$" },
        { "id": "W2-T2-Q02-opt1", "text": "$a=-9, b=-30, c=10$" },
        { "id": "W2-T2-Q02-opt2", "text": "$a=9, b=-50, c=-15$" },
        { "id": "W2-T2-Q02-opt3", "text": "$a=-15, b=-50, c=25$" }
      ],
      "correct_indices": ["W2-T2-Q02-opt0"],
      "explanation": "Multiply out to get 4 equations: \n1) $45 + 5a = 0 \\implies a = -9$.\n2) $3b + 150 = 0 \\implies b = -50$.\n3) $135 + ac = 0 \\implies 135 - 9c = 0 \\implies c = 15$.\n4) $9b + 30c = 9(-50) + 30(15) = -450 + 450 = 0$, which is consistent.",
      "hint": "Multiply the matrices to get equations for the individual components, and solve them one by one."
    },
    {
      "id": "W2-T2-Q03",
      "week": 2,
      "tier": "should",
      "topic": "Inversion of 2x2 Matrix",
      "type": "single_select",
      "question": "Determine the inverse of the matrix $\\boldsymbol{A} = \\begin{bmatrix} 3 & 1 \\\\ 5 & 2 \\end{bmatrix}$.",
      "options": [
        { "id": "W2-T2-Q03-opt0", "text": "$\\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}$" },
        { "id": "W2-T2-Q03-opt1", "text": "$\\begin{bmatrix} 2 & 1 \\\\ 5 & 3 \\end{bmatrix}$" },
        { "id": "W2-T2-Q03-opt2", "text": "$\\begin{bmatrix} -2 & 1 \\\\ 5 & -3 \\end{bmatrix}$" },
        { "id": "W2-T2-Q03-opt3", "text": "$\\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$" }
      ],
      "correct_indices": ["W2-T2-Q03-opt0"],
      "explanation": "For a $2 \\times 2$ matrix, the inverse is $\\frac{1}{ad-bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$. Since $\\det(\\boldsymbol{A}) = 1$, the inverse is $\\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}$.",
      "hint": "Swap the diagonal entries, negate the off-diagonal entries, and divide by the determinant."
    },
    {
      "id": "W2-T2-Q04",
      "week": 2,
      "tier": "should",
      "topic": "Solving 2D Linear System",
      "type": "single_select",
      "question": "Solve the linear electrical circuit system for currents $i_1$ and $i_2$: \n$2i_1 + 3i_2 = 5$\n$6i_1 + 7i_2 = 10$",
      "options": [
        { "id": "W2-T2-Q04-opt0", "text": "$i_1 = -1.25$ A, $i_2 = 2.5$ A" },
        { "id": "W2-T2-Q04-opt1", "text": "$i_1 = 1.25$ A, $i_2 = -2.5$ A" },
        { "id": "W2-T2-Q04-opt2", "text": "$i_1 = -1.5$ A, $i_2 = 2.0$ A" },
        { "id": "W2-T2-Q04-opt3", "text": "$i_1 = 2.0$ A, $i_2 = 1.0$ A" }
      ],
      "correct_indices": ["W2-T2-Q04-opt0"],
      "explanation": "In matrix form: $\\begin{bmatrix} 2 & 3 \\\\ 6 & 7 \\end{bmatrix} \\begin{bmatrix} i_1 \\\\ i_2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 10 \\end{bmatrix}$. The inverse coefficient matrix is $-\\frac{1}{4} \\begin{bmatrix} 7 & -3 \\\\ -6 & 2 \\end{bmatrix}$. Multiplying gives $\\begin{bmatrix} i_1 \\\\ i_2 \\end{bmatrix} = \\begin{bmatrix} -1.25 \\\\ 2.5 \\end{bmatrix}$.",
      "hint": "Solve by writing as $\\boldsymbol{A}\\boldsymbol{x}=\\boldsymbol{b}$ and computing $\\boldsymbol{x} = \\boldsymbol{A}^{-1}\\boldsymbol{b}$."
    },
    {
      "id": "W2-T2-Q05",
      "week": 2,
      "tier": "should",
      "topic": "Determinant of 3x3 Matrix",
      "type": "single_select",
      "question": "Calculate the determinant of the matrix $\\boldsymbol{C} = \\begin{bmatrix} 1 & 3 & -1 \\\\ 2 & 0 & 6 \\\\ 1 & 2 & 1 \\end{bmatrix}$.",
      "options": [
        { "id": "W2-T2-Q05-opt0", "text": "-4" },
        { "id": "W2-T2-Q05-opt1", "text": "4" },
        { "id": "W2-T2-Q05-opt2", "text": "-10" },
        { "id": "W2-T2-Q05-opt3", "text": "12" }
      ],
      "correct_indices": ["W2-T2-Q05-opt0"],
      "explanation": "Expanding along the second row: \n$\\det(\\boldsymbol{C}) = -2 \\begin{vmatrix} 3 & -1 \\\\ 2 & 1 \\end{vmatrix} + 0 - 6 \\begin{vmatrix} 1 & 3 \\\\ 1 & 2 \\end{vmatrix} = -2(3 - (-2)) - 6(2 - 3) = -2(5) - 6(-1) = -10 + 6 = -4$.",
      "hint": "Expand the determinant along the second row because it contains a zero."
    },
    {
      "id": "W2-T2-Q06",
      "week": 2,
      "tier": "should",
      "topic": "Scaling Transformation Matrix",
      "type": "single_select",
      "question": "If $\\boldsymbol{S} = \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix}$ represents a transformation matrix, what geometric transformation does it apply to a 2D vector?",
      "options": [
        { "id": "W2-T2-Q06-opt0", "text": "Uniform scaling by a factor of 2" },
        { "id": "W2-T2-Q06-opt1", "text": "Rotation by $90^\\circ$ counter-clockwise" },
        { "id": "W2-T2-Q06-opt2", "text": "Reflection across the $y$-axis" },
        { "id": "W2-T2-Q06-opt3", "text": "Shear along the $x$-axis by 2" }
      ],
      "correct_indices": ["W2-T2-Q06-opt0"],
      "explanation": "Multiplying any vector $\\begin{bmatrix} x \\\\ y \\end{bmatrix}$ by $\\boldsymbol{S}$ yields $\\begin{bmatrix} 2x \\\\ 2y \\end{bmatrix}$, which corresponds to a scaling transformation of scale factor 2.",
      "hint": "Multiply a test vector $\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$ by the matrix and observe the result."
    },
    {
      "id": "W2-T2-Q07",
      "week": 2,
      "tier": "should",
      "topic": "Rotation Transformation Matrix",
      "type": "single_select",
      "question": "Determine the transformation matrix $\\boldsymbol{R}$ representing a counter-clockwise rotation of $90^\\circ$ about the origin in 2D space.",
      "options": [
        { "id": "W2-T2-Q07-opt0", "text": "$\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$" },
        { "id": "W2-T2-Q07-opt1", "text": "$\\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}$" },
        { "id": "W2-T2-Q07-opt2", "text": "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$" },
        { "id": "W2-T2-Q07-opt3", "text": "$\\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$" }
      ],
      "correct_indices": ["W2-T2-Q07-opt0"],
      "explanation": "The general rotation matrix is $\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$. Setting $\\theta = 90^\\circ$ yields $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$.",
      "hint": "Substitute $90^\\circ$ into the general rotation matrix formula."
    },
    {
      "id": "W2-T2-Q08",
      "week": 2,
      "tier": "should",
      "topic": "Cramer's Rule 2D",
      "type": "single_select",
      "question": "Solve the system using Cramer's Rule:\n$2x - 3y = -1$\n$3x + 4y = 24$",
      "options": [
        { "id": "W2-T2-Q08-opt0", "text": "$x = 4, y = 3$" },
        { "id": "W2-T2-Q08-opt1", "text": "$x = 3, y = 4$" },
        { "id": "W2-T2-Q08-opt2", "text": "$x = 2, y = 5$" },
        { "id": "W2-T2-Q08-opt3", "text": "$x = 5, y = 2$" }
      ],
      "correct_indices": ["W2-T2-Q08-opt0"],
      "explanation": "Coefficient determinant is $D = 8 - (-9) = 17$. $D_x = \\begin{vmatrix} -1 & -3 \\\\ 24 & 4 \\end{vmatrix} = -4 - (-72) = 68$. $D_y = \\begin{vmatrix} 2 & -1 \\\\ 3 & 24 \\end{vmatrix} = 48 - (-3) = 51$. Thus, $x = 68/17 = 4$, $y = 51/17 = 3$.",
      "hint": "Compute the main determinant $D$, and the column-replaced determinants $D_x$ and $D_y$."
    },
    {
      "id": "W2-T2-Q09",
      "week": 2,
      "tier": "should",
      "topic": "Determinant Product Rule",
      "type": "single_select",
      "question": "For any square matrices $\\boldsymbol{A}$ and $\\boldsymbol{B}$ of the same size, what is the value of $\\det(\\boldsymbol{A} \\boldsymbol{B})$?",
      "options": [
        { "id": "W2-T2-Q09-opt0", "text": "$\\det(\\boldsymbol{A}) \\det(\\boldsymbol{B})$" },
        { "id": "W2-T2-Q09-opt1", "text": "$\\det(\\boldsymbol{A}) + \\det(\\boldsymbol{B})$" },
        { "id": "W2-T2-Q09-opt2", "text": "$\\det(\\boldsymbol{A}^T) \\det(\\boldsymbol{B}^T)$" },
        { "id": "W2-T2-Q09-opt3", "text": "There is no general relation." }
      ],
      "correct_indices": ["W2-T2-Q09-opt0"],
      "explanation": "The determinant of a product of matrices is equal to the product of their individual determinants: $\\det(\\boldsymbol{A} \\boldsymbol{B}) = \\det(\\boldsymbol{A}) \\det(\\boldsymbol{B})$.",
      "hint": "Determinants are multiplicative."
    },
    {
      "id": "W2-T2-Q10",
      "week": 2,
      "tier": "should",
      "topic": "Transpose of a Product",
      "type": "single_select",
      "question": "Which of the following is equivalent to the transpose of a product of two matrices, $(\\boldsymbol{A} \\boldsymbol{B})^T$?",
      "options": [
        { "id": "W2-T2-Q10-opt0", "text": "$\\boldsymbol{B}^T \\boldsymbol{A}^T$" },
        { "id": "W2-T2-Q10-opt1", "text": "$\\boldsymbol{A}^T \\boldsymbol{B}^T$" },
        { "id": "W2-T2-Q10-opt2", "text": "$\\boldsymbol{A} \\boldsymbol{B}$" },
        { "id": "W2-T2-Q10-opt3", "text": "$(\\boldsymbol{B} \\boldsymbol{A})^T$" }
      ],
      "correct_indices": ["W2-T2-Q10-opt0"],
      "explanation": "The transpose of a product of matrices reverses the order of multiplication: $(\\boldsymbol{A} \\boldsymbol{B})^T = \\boldsymbol{B}^T \\boldsymbol{A}^T$.",
      "hint": "Think about compatibility. If $\\boldsymbol{A}$ is $2 \\times 3$ and $\\boldsymbol{B}$ is $3 \\times 4$, what order of transposes can be multiplied?"
    },
    {
      "id": "W2-T3-Q01",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "3x3 Cramer's Rule",
      "type": "single_select",
      "question": "Solve the 3D system using Cramer's Rule:\n$x + 2y + 3z = 6$\n$2x - y + z = 2$\n$3x + y - 2z = 2$",
      "options": [
        { "id": "W2-T3-Q01-opt0", "text": "$x = 1, y = 1, z = 1$" },
        { "id": "W2-T3-Q01-opt1", "text": "$x = 2, y = 1, z = 1$" },
        { "id": "W2-T3-Q01-opt2", "text": "$x = 1, y = 2, z = 0$" },
        { "id": "W2-T3-Q01-opt3", "text": "$x = 0, y = 3, z = 0$" }
      ],
      "correct_indices": ["W2-T3-Q01-opt0"],
      "explanation": "The determinant of the coefficient matrix is $D = 30$. Substituting the constants vector $\\begin{bmatrix} 6 \\\\ 2 \\\\ 2 \\end{bmatrix}$ into columns 1, 2, and 3 yields $D_x = 30$, $D_y = 30$, and $D_z = 30$. Thus, $x = 30/30 = 1$, $y = 30/30 = 1$, $z = 30/30 = 1$.",
      "hint": "First calculate the determinant of the coefficient matrix, which is 30. Then substitute the RHS constants into each column to compute $D_x$, $D_y$, and $D_z$."
    },
    {
      "id": "W2-T3-Q02",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Gauss-Jordan Elimination",
      "type": "single_select",
      "question": "Apply Gauss-Jordan elimination to solve the system:\n$2x + y + 2z = 10$\n$x + 4y - 3z = 11$\n$3x + 6y - z = 12$",
      "options": [
        { "id": "W2-T3-Q02-opt0", "text": "$x = 18.875, y = -9, z = -9.375$" },
        { "id": "W2-T3-Q02-opt1", "text": "$x = 19.5, y = -8, z = -9.0$" },
        { "id": "W2-T3-Q02-opt2", "text": "$x = 18.0, y = -9, z = -8.5$" },
        { "id": "W2-T3-Q02-opt3", "text": "$x = 15.0, y = -10, z = -12.0$" }
      ],
      "correct_indices": ["W2-T3-Q02-opt0"],
      "explanation": "Write as augmented matrix and perform row reductions: swap R1 and R2, eliminate first column entries, subtract row 3 from row 2, and reduce row 3. The unique values solved are $x = 151/8 = 18.875$, $y = -9$, $z = -75/8 = -9.375$.",
      "hint": "Set up the augmented matrix. Swap the first and second rows to establish a leading 1 in the upper left, and proceed with row operations."
    },
    {
      "id": "W2-T3-Q03",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "3x3 Matrix Inverse",
      "type": "single_select",
      "question": "Find the inverse of the matrix $\\boldsymbol{C} = \\begin{bmatrix} 1 & 3 & -1 \\\\ 2 & 0 & 6 \\\\ 1 & 2 & 1 \\end{bmatrix}$.",
      "options": [
        { "id": "W2-T3-Q03-opt0", "text": "$\\begin{bmatrix} 3 & 1.25 & -4.5 \\\\ -1 & -0.5 & 2 \\\\ -1 & -0.25 & 1.5 \\end{bmatrix}$" },
        { "id": "W2-T3-Q03-opt1", "text": "$\\begin{bmatrix} 3 & 1 & -4 \\\\ -1 & 0 & 2 \\\\ -1 & 0 & 1 \\end{bmatrix}$" },
        { "id": "W2-T3-Q03-opt2", "text": "$\\begin{bmatrix} -12 & -5 & 18 \\\\ 4 & 2 & -8 \\\\ 4 & 1 & -6 \\end{bmatrix}$" },
        { "id": "W2-T3-Q03-opt3", "text": "$\\begin{bmatrix} -3 & -1.25 & 4.5 \\\\ 1 & 0.5 & -2 \\\\ 1 & 0.25 & -1.5 \\end{bmatrix}$" }
      ],
      "correct_indices": ["W2-T3-Q03-opt0"],
      "explanation": "The determinant of $\\boldsymbol{C}$ is $-4$. The cofactor matrix is $\\begin{bmatrix} -12 & 4 & 4 \\\\ -5 & 2 & 1 \\\\ 18 & -8 & -6 \\end{bmatrix}$. Transposing gives adjugate: $\\begin{bmatrix} -12 & -5 & 18 \\\\ 4 & 2 & -8 \\\\ 4 & 1 & -6 \\end{bmatrix}$. Dividing by $-4$ yields the inverse.",
      "hint": "First compute the determinant ($-4$). Then find the adjugate matrix by transposing the cofactor matrix, and divide it by the determinant."
    },
    {
      "id": "W2-T3-Q04",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Pulley Equations of Motion",
      "type": "single_select",
      "question": "Solve the pulley system of equations for accelerations $a_1$, $a_2$ and Tension $T$ in terms of gravity constant $g$:\n$a_1 + a_2 = 0$\n$-3a_1 + T = 3g$\n$-2a_2 + T = 2g$",
      "options": [
        { "id": "W2-T3-Q04-opt0", "text": "$a_1 = -0.2g, a_2 = 0.2g, T = 2.4g$" },
        { "id": "W2-T3-Q04-opt1", "text": "$a_1 = -0.5g, a_2 = 0.5g, T = 2.0g$" },
        { "id": "W2-T3-Q04-opt2", "text": "$a_1 = -0.2g, a_2 = 0.2g, T = 1.8g$" },
        { "id": "W2-T3-Q04-opt3", "text": "$a_1 = -0.4g, a_2 = 0.4g, T = 2.4g$" }
      ],
      "correct_indices": ["W2-T3-Q04-opt0"],
      "explanation": "Substitute $a_2 = -a_1$ into the third equation: $2a_1 + T = 2g$. Subtracting this from the second equation: $-5a_1 = g \\implies a_1 = -0.2g$. Then $a_2 = 0.2g$ and $T = 2g - 2a_1 = 2.4g$.",
      "hint": "Write the first equation as $a_2 = -a_1$, substitute it into the third equation, and solve the remaining $2 \\times 2$ system."
    },
    {
      "id": "W2-T3-Q05",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Transformation Matrix Composition",
      "type": "single_select",
      "question": "Determine the composite transformation matrix $\\boldsymbol{T}$ for scaling by a factor of 2 ($\\boldsymbol{S}$), then reflecting across the $x$-axis ($\\boldsymbol{M}$), then rotating counter-clockwise by $90^\\circ$ ($\\boldsymbol{R}$).",
      "options": [
        { "id": "W2-T3-Q05-opt0", "text": "$\\begin{bmatrix} 0 & 2 \\\\ 2 & 0 \\end{bmatrix}$" },
        { "id": "W2-T3-Q05-opt1", "text": "$\\begin{bmatrix} 0 & -2 \\\\ 2 & 0 \\end{bmatrix}$" },
        { "id": "W2-T3-Q05-opt2", "text": "$\\begin{bmatrix} 2 & 0 \\\\ 0 & -2 \\end{bmatrix}$" },
        { "id": "W2-T3-Q05-opt3", "text": "$\\begin{bmatrix} 0 & 2 \\\\ -2 & 0 \\end{bmatrix}$" }
      ],
      "correct_indices": ["W2-T3-Q05-opt0"],
      "explanation": "Multiplication order is $\\boldsymbol{T} = \\boldsymbol{R}\\boldsymbol{M}\\boldsymbol{S}$ because transformations are applied right-to-left. \n$\\boldsymbol{T} = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix} \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix} = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix} \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix} = \\begin{bmatrix} 0 & 2 \\\\ 2 & 0 \\end{bmatrix}$.",
      "hint": "Multiply the transformation matrices in the reverse order of their application: $\\boldsymbol{T} = \\boldsymbol{R} \\boldsymbol{M} \\boldsymbol{S}$."
    },
    {
      "id": "W2-T3-Q06",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Transformation Final Coordinate",
      "type": "single_select",
      "question": "Apply the composite transformation scaling by 2, then reflecting across the $x$-axis, then rotating $90^\\circ$ to the point $(1,1)$. Find its final coordinates.",
      "options": [
        { "id": "W2-T3-Q06-opt0", "text": "$(2,2)$" },
        { "id": "W2-T3-Q06-opt1", "text": "$(2,-2)$" },
        { "id": "W2-T3-Q06-opt2", "text": "$(-2,2)$" },
        { "id": "W2-T3-Q06-opt3", "text": "$(-2,-2)$" }
      ],
      "correct_indices": ["W2-T3-Q06-opt0"],
      "explanation": "The composite matrix $\\boldsymbol{T}$ is $\\begin{bmatrix} 0 & 2 \\\\ 2 & 0 \\end{bmatrix}$. Applying to $\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$ yields $\\begin{bmatrix} 2 \\\\ 2 \\end{bmatrix}$.",
      "hint": "Multiply the vector $\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$ by the composite matrix $\\begin{bmatrix} 0 & 2 \\\\ 2 & 0 \\end{bmatrix}$."
    },
    {
      "id": "W2-T3-Q07",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Identity Matrix Trace",
      "type": "single_select",
      "question": "What is the trace (sum of main diagonal entries) of a $3 \\times 3$ identity matrix $\\boldsymbol{I}$?",
      "options": [
        { "id": "W2-T3-Q07-opt0", "text": "3" },
        { "id": "W2-T3-Q07-opt1", "text": "1" },
        { "id": "W2-T3-Q07-opt2", "text": "0" },
        { "id": "W2-T3-Q07-opt3", "text": "9" }
      ],
      "correct_indices": ["W2-T3-Q07-opt0"],
      "explanation": "A $3 \\times 3$ identity matrix is $\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$. The trace is the sum of its main diagonal: $1 + 1 + 1 = 3$.",
      "hint": "Write down the $3 \\times 3$ identity matrix and add up the values on the main diagonal."
    },
    {
      "id": "W2-T3-Q08",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Matrix Inverse Proof",
      "type": "single_select",
      "question": "For any invertible square matrices $\\boldsymbol{A}$ and $\\boldsymbol{B}$ of the same size, what is the inverse of their product, $(\\boldsymbol{A} \\boldsymbol{B})^{-1}$?",
      "options": [
        { "id": "W2-T3-Q08-opt0", "text": "$\\boldsymbol{B}^{-1} \\boldsymbol{A}^{-1}$" },
        { "id": "W2-T3-Q08-opt1", "text": "$\\boldsymbol{A}^{-1} \\boldsymbol{B}^{-1}$" },
        { "id": "W2-T3-Q08-opt2", "text": "$(\\boldsymbol{B} \\boldsymbol{A})^{-1}$" },
        { "id": "W2-T3-Q08-opt3", "text": "$\\boldsymbol{A} \\boldsymbol{B}$" }
      ],
      "correct_indices": ["W2-T3-Q08-opt0"],
      "explanation": "The inverse of a product of matrices is the product of their inverses in reverse order: $(\\boldsymbol{A} \\boldsymbol{B})^{-1} = \\boldsymbol{B}^{-1} \\boldsymbol{A}^{-1}$. This is verified because $(\\boldsymbol{A}\\boldsymbol{B})(\\boldsymbol{B}^{-1}\\boldsymbol{A}^{-1}) = \\boldsymbol{A}(\\boldsymbol{B}\\boldsymbol{B}^{-1})\\boldsymbol{A}^{-1} = \\boldsymbol{A}\\boldsymbol{I}\\boldsymbol{A}^{-1} = \\boldsymbol{I}$.",
      "hint": "Applying socks and shoes: when undoing a product, the last operation applied must be undone first."
    },
    {
      "id": "W2-T3-Q09",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Singular 3x3 Matrix",
      "type": "single_select",
      "question": "Determine if the matrix $\\boldsymbol{B} = \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 4 & 5 & 6 \\end{bmatrix}$ has an inverse.",
      "options": [
        { "id": "W2-T3-Q09-opt0", "text": "No, it is singular because a row consists entirely of zeros." },
        { "id": "W2-T3-Q09-opt1", "text": "Yes, it is invertible." }
      ],
      "correct_indices": ["W2-T3-Q09-opt0"],
      "explanation": "Since row 2 is all zeros, expanding the determinant along row 2 gives $\\det(\\boldsymbol{B}) = 0$. Since the determinant is zero, the matrix has no inverse (it is singular).",
      "hint": "Check the determinant. What is the determinant of a matrix with an all-zero row?"
    },
    {
      "id": "W2-T3-Q10",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Transformation Inverse Matrix",
      "type": "single_select",
      "question": "What is the inverse transformation matrix of a counter-clockwise rotation of $90^\\circ$?",
      "options": [
        { "id": "W2-T3-Q10-opt0", "text": "$\\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}$" },
        { "id": "W2-T3-Q10-opt1", "text": "$\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$" },
        { "id": "W2-T3-Q10-opt2", "text": "$\\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$" },
        { "id": "W2-T3-Q10-opt3", "text": "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$" }
      ],
      "correct_indices": ["W2-T3-Q10-opt0"],
      "explanation": "The inverse of a $90^\\circ$ counter-clockwise rotation is a $90^\\circ$ clockwise rotation (which is equivalent to a rotation of $-90^\\circ$ or $270^\\circ$). Setting $\\theta = -90^\\circ$ yields $\\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}$. Alternatively, compute the inverse of the matrix $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$.",
      "hint": "The inverse of a counter-clockwise rotation is a clockwise rotation by the same angle."
    },
    {
      "id": "W2-T4-Q01",
      "week": 2,
      "tier": "extra",
      "topic": "Inconsistent System Proof",
      "type": "single_select",
      "question": "Determine the solvability of the 4D linear system:\n$3w + 2x + y + 2z = 10$\n$2w - 3x + y - z = 5$\n$w - x + 4y - 3z = 11$\n$-6w - 4x - 2y - 4z = 12$",
      "options": [
        { "id": "W2-T4-Q01-opt0", "text": "No solutions (inconsistent)" },
        { "id": "W2-T4-Q01-opt1", "text": "Infinitely many solutions" },
        { "id": "W2-T4-Q01-opt2", "text": "Unique solution: $w=1, x=2, y=3, z=4$" },
        { "id": "W2-T4-Q01-opt3", "text": "Unique solution: $w=2, x=-1, y=3, z=-2$" }
      ],
      "correct_indices": ["W2-T4-Q01-opt0"],
      "explanation": "Multiply the first equation by $-2$: $-6w - 4x - 2y - 4z = -20$. Comparing this to the fourth equation: $-6w - 4x - 2y - 4z = 12$. This is a direct contradiction ($-20 \\neq 12$), so the system is inconsistent and has no solutions.",
      "hint": "Compare the first and fourth equations. How are the coefficients on the left-hand side related?"
    },
    {
      "id": "W2-T4-Q02",
      "week": 2,
      "tier": "extra",
      "topic": "Infinite Solutions Parameterization",
      "type": "single_select",
      "question": "Show that the system has infinitely many solutions and find the general solution in terms of a free parameter $z$:\n$2x + y + 2z = 10$\n$x + 4y - 3z = 11$\n$4x + 2y + 4z = 20$",
      "options": [
        { "id": "W2-T4-Q02-opt0", "text": "$x = -\\frac{11}{7}z + \\frac{29}{7}$, $y = \\frac{8}{7}z + \\frac{12}{7}$" },
        { "id": "W2-T4-Q02-opt1", "text": "$x = -\\frac{8}{7}z + 3$, $y = \\frac{11}{7}z - 2$" },
        { "id": "W2-T4-Q02-opt2", "text": "$x = 2z + 10$, $y = 3z - 5$" },
        { "id": "W2-T4-Q02-opt3", "text": "$x = -\\frac{11}{7}z + 4$, $y = \\frac{8}{7}z + 2$" }
      ],
      "correct_indices": ["W2-T4-Q02-opt0"],
      "explanation": "Equation 3 is exactly $2$ times Equation 1, making it redundant. Letting $z$ be a free parameter, Row 2 gives $x = 11 - 4y + 3z$. Substituting this into Row 1 gives $2(11-4y+3z) + y + 2z = 10 \\implies 22 - 7y + 8z = 10 \\implies y = \\frac{8}{7}z + \\frac{12}{7}$. Substituting back gives $x = -\\frac{11}{7}z + \\frac{29}{7}$.",
      "hint": "Observe that Equation 3 is a scalar multiple of Equation 1. Eliminate it, treat $z$ as a parameter, and solve for $x$ and $y$."
    },
    {
      "id": "W2-T4-Q03",
      "week": 2,
      "tier": "extra",
      "topic": "Rouche-Capelli Theorem",
      "type": "single_select",
      "question": "According to the Rouché-Capelli theorem, a system of linear equations $\\boldsymbol{A}\\boldsymbol{x} = \\boldsymbol{b}$ is consistent if and only if which of the following is true?",
      "options": [
        { "id": "W2-T4-Q03-opt0", "text": "$\\text{rank}(\\boldsymbol{A}) = \\text{rank}([\\boldsymbol{A} \\mid \\boldsymbol{b}])$" },
        { "id": "W2-T4-Q03-opt1", "text": "$\\text{rank}(\\boldsymbol{A}) < \\text{rank}([\\boldsymbol{A} \\mid \\boldsymbol{b}])$" },
        { "id": "W2-T4-Q03-opt2", "text": "$\\text{rank}(\\boldsymbol{A}) = n$ (number of variables)" },
        { "id": "W2-T4-Q03-opt3", "text": "$\\det(\\boldsymbol{A}) \\neq 0$" }
      ],
      "correct_indices": ["W2-T4-Q03-opt0"],
      "explanation": "The theorem states that a system of linear equations is consistent if and only if the rank of the coefficient matrix $\\boldsymbol{A}$ is equal to the rank of the augmented matrix $[\\boldsymbol{A} \\mid \\boldsymbol{b}]$.",
      "hint": "Consistency depends on whether adding the constants column increases the rank of the matrix."
    },
    {
      "id": "W2-T4-Q04",
      "week": 2,
      "tier": "extra",
      "topic": "Orthogonal Matrix Property",
      "type": "single_select",
      "question": "A square matrix $\\boldsymbol{Q}$ is defined as an <strong>orthogonal matrix</strong> if which of the following properties holds?",
      "options": [
        { "id": "W2-T4-Q04-opt0", "text": "$\\boldsymbol{Q}^T \\boldsymbol{Q} = \\boldsymbol{I}$" },
        { "id": "W2-T4-Q04-opt1", "text": "$\\boldsymbol{Q}^T = -\\boldsymbol{Q}$" },
        { "id": "W2-T4-Q04-opt2", "text": "$\\det(\\boldsymbol{Q}) = 0$" },
        { "id": "W2-T4-Q04-opt3", "text": "$\\boldsymbol{Q}^2 = \\boldsymbol{Q}$" }
      ],
      "correct_indices": ["W2-T4-Q04-opt0"],
      "explanation": "An orthogonal matrix is a square matrix whose transpose is equal to its inverse, meaning $\\boldsymbol{Q}^T \\boldsymbol{Q} = \\boldsymbol{Q} \\boldsymbol{Q}^T = \\boldsymbol{I}$. Its columns form an orthonormal basis.",
      "hint": "The inverse of an orthogonal matrix is simply its transpose."
    },
    {
      "id": "W2-T4-Q05",
      "week": 2,
      "tier": "extra",
      "topic": "Orthogonal Matrix Determinant",
      "type": "single_select",
      "question": "If $\\boldsymbol{Q}$ is an orthogonal matrix ($\\boldsymbol{Q}^T \\boldsymbol{Q} = \\boldsymbol{I}$), what are the only possible values for the determinant of $\\boldsymbol{Q}$?",
      "options": [
        { "id": "W2-T4-Q05-opt0", "text": "$\\pm 1$" },
        { "id": "W2-T4-Q05-opt1", "text": "$0$ or $1$" },
        { "id": "W2-T4-Q05-opt2", "text": "Any real number" },
        { "id": "W2-T4-Q05-opt3", "text": "$1$" }
      ],
      "correct_indices": ["W2-T4-Q05-opt0"],
      "explanation": "Since $\\boldsymbol{Q}^T \\boldsymbol{Q} = \\boldsymbol{I}$, we have $\\det(\\boldsymbol{Q}^T \\boldsymbol{Q}) = \\det(\\boldsymbol{I}) \\implies \\det(\\boldsymbol{Q}^T) \\det(\\boldsymbol{Q}) = 1$. Since $\\det(\\boldsymbol{Q}^T) = \\det(\\boldsymbol{Q})$, we get $(\\det(\\boldsymbol{Q}))^2 = 1 \\implies \\det(\\boldsymbol{Q}) = \\pm 1$.",
      "hint": "Apply the determinant product rule to the defining equation $\\boldsymbol{Q}^T \\boldsymbol{Q} = \\boldsymbol{I}$."
    },
    {
      "id": "W2-T4-Q06",
      "week": 2,
      "tier": "extra",
      "topic": "Inconsistent System Geometry",
      "type": "single_select",
      "question": "Geometrically, what does an inconsistent system of 3 equations in 3 variables represent in 3D space?",
      "options": [
        { "id": "W2-T4-Q06-opt0", "text": "The planes do not share a common intersection point." },
        { "id": "W2-T4-Q06-opt1", "text": "The planes intersect along a single line." },
        { "id": "W2-T4-Q06-opt2", "text": "All three planes are identical." },
        { "id": "W2-T4-Q06-opt3", "text": "The planes intersect at exactly one point." }
      ],
      "correct_indices": ["W2-T4-Q06-opt0"],
      "explanation": "An inconsistent system means there is no solution, which geometrically translates to the three planes having no common intersection point (e.g. they are parallel, or they form a triangular prism).",
      "hint": "No solution means there is no coordinate $(x,y,z)$ that lies on all three planes."
    },
    {
      "id": "W2-T4-Q07",
      "week": 2,
      "tier": "extra",
      "topic": "Transformation Inverse scaling",
      "type": "single_select",
      "question": "What is the inverse matrix of a uniform scaling transformation of factor $k$ ($k \\neq 0$)?",
      "options": [
        { "id": "W2-T4-Q07-opt0", "text": "$\\begin{bmatrix} 1/k & 0 \\\\ 0 & 1/k \\end{bmatrix}$" },
        { "id": "W2-T4-Q07-opt1", "text": "$\\begin{bmatrix} -k & 0 \\\\ 0 & -k \\end{bmatrix}$" },
        { "id": "W2-T4-Q07-opt2", "text": "$\\begin{bmatrix} k & 0 \\\\ 0 & k \\end{bmatrix}$" },
        { "id": "W2-T4-Q07-opt3", "text": "$\\begin{bmatrix} 0 & k \\\\ k & 0 \\end{bmatrix}$" }
      ],
      "correct_indices": ["W2-T4-Q07-opt0"],
      "explanation": "A scaling of factor $k$ is represented by $\\begin{bmatrix} k & 0 \\\\ 0 & k \\end{bmatrix}$. Its inverse matrix is $\\frac{1}{k^2} \\begin{bmatrix} k & 0 \\\\ 0 & k \\end{bmatrix} = \\begin{bmatrix} 1/k & 0 \\\\ 0 & 1/k \\end{bmatrix}$, which corresponds to scaling by $1/k$.",
      "hint": "To undo scaling a shape by $k$, you must scale it by its reciprocal."
    },
    {
      "id": "W2-T4-Q08",
      "week": 2,
      "tier": "extra",
      "topic": "Trace Product Rule",
      "type": "single_select",
      "question": "For any square matrices $\\boldsymbol{A}$ and $\\boldsymbol{B}$ of the same size, which of the following trace properties holds?",
      "options": [
        { "id": "W2-T4-Q08-opt0", "text": "$\\text{tr}(\\boldsymbol{A}\\boldsymbol{B}) = \\text{tr}(\\boldsymbol{B}\\boldsymbol{A})$" },
        { "id": "W2-T4-Q08-opt1", "text": "$\\text{tr}(\\boldsymbol{A}\\boldsymbol{B}) = \\text{tr}(\\boldsymbol{A}) \\text{tr}(\\boldsymbol{B})$" },
        { "id": "W2-T4-Q08-opt2", "text": "$\\text{tr}(\\boldsymbol{A}\\boldsymbol{B}) = \\text{tr}(\\boldsymbol{A}) + \\text{tr}(\\boldsymbol{B})$" },
        { "id": "W2-T4-Q08-opt3", "text": "$\\text{tr}(\\boldsymbol{A}\\boldsymbol{B}) = \\text{tr}(\\boldsymbol{B}^T\\boldsymbol{A}^T)$" }
      ],
      "correct_indices": ["W2-T4-Q08-opt0"],
      "explanation": "The trace of a product of two matrices is commutative: $\\text{tr}(\\boldsymbol{A}\\boldsymbol{B}) = \\text{tr}(\\boldsymbol{B}\\boldsymbol{A})$, which is a crucial identity in linear algebra.",
      "hint": "Think about the summation formulas for the diagonal entries of $\\boldsymbol{A}\\boldsymbol{B}$ and $\\boldsymbol{B}\\boldsymbol{A}$."
    },
    {
      "id": "W2-T4-Q09",
      "week": 2,
      "tier": "extra",
      "topic": "Matrix Power of Diagonals",
      "type": "single_select",
      "question": "If $\\boldsymbol{D} = \\begin{bmatrix} a & 0 \\\\ 0 & b \\end{bmatrix}$ is a diagonal matrix, what is $\\boldsymbol{D}^n$ for any positive integer $n$?",
      "options": [
        { "id": "W2-T4-Q09-opt0", "text": "$\\begin{bmatrix} a^n & 0 \\\\ 0 & b^n \\end{bmatrix}$" },
        { "id": "W2-T4-Q09-opt1", "text": "$\\begin{bmatrix} a^n & 0 \\\\ 0 & b \\end{bmatrix}$" },
        { "id": "W2-T4-Q09-opt2", "text": "$n \\begin{bmatrix} a & 0 \\\\ 0 & b \\end{bmatrix}$" },
        { "id": "W2-T4-Q09-opt3", "text": "$\\begin{bmatrix} a^n & 0 \\\\ 0 & b^n \\end{bmatrix}^T$" }
      ],
      "correct_indices": ["W2-T4-Q09-opt0"],
      "explanation": "Diagonal matrices multiply entry-wise on the diagonal. Inductively, raising a diagonal matrix to a power $n$ raises each of its diagonal elements to the power $n$.",
      "hint": "Multiply $\\begin{bmatrix} a & 0 \\\\ 0 & b \\end{bmatrix}$ by itself to see how the powers accumulate."
    },
    {
      "id": "W2-T4-Q10",
      "week": 2,
      "tier": "extra",
      "topic": "Matrix Commutativity Counterexample",
      "type": "single_select",
      "question": "In general, for two square matrices $\\boldsymbol{A}$ and $\\boldsymbol{B}$, does $\\boldsymbol{A}\\boldsymbol{B} = \\boldsymbol{B}\\boldsymbol{A}$?",
      "options": [
        { "id": "W2-T4-Q10-opt0", "text": "No, matrix multiplication is non-commutative." },
        { "id": "W2-T4-Q10-opt1", "text": "Yes, matrix multiplication is always commutative." }
      ],
      "correct_indices": ["W2-T4-Q10-opt0"],
      "explanation": "Matrix multiplication is non-commutative in general: $\\boldsymbol{A}\\boldsymbol{B} \\neq \\boldsymbol{B}\\boldsymbol{A}$. The order of transformations or operations matters.",
      "hint": "Consider if rotating by $90^\\circ$ then reflecting yields the same result as reflecting first then rotating."
    }
  ]
};
