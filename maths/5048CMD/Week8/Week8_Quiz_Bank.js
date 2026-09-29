window.QUIZ_BANK_WEEK8 = {
  "module": "5048CMD Engineering Mathematics 2",
  "week": 8,
  "title": "Week 8: PDEs III & Linear Algebra",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W8-T1-Q01",
      "week": 8,
      "tier": "core",
      "topic": "Laplace Equation Form",
      "type": "single_select",
      "question": "What is the 2D Laplace Equation in Cartesian coordinates for potential $u(x,y)$?",
      "options": [
        {
          "id": "W8-T1-Q01-opt0",
          "text": "$\\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$"
        },
        {
          "id": "W8-T1-Q01-opt1",
          "text": "$\\frac{\\partial^2 u}{\\partial x^2} - \\frac{\\partial^2 u}{\\partial y^2} = 0$"
        },
        {
          "id": "W8-T1-Q01-opt2",
          "text": "$\\frac{\\partial u}{\\partial x} + \\frac{\\partial u}{\\partial y} = 0$"
        },
        {
          "id": "W8-T1-Q01-opt3",
          "text": "$\\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = f(x,y)$"
        }
      ],
      "correct_indices": [
        "W8-T1-Q01-opt0"
      ],
      "explanation": "The Laplace equation $\\nabla^2 u = 0$ in 2D Cartesian coordinates is $\\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$. (When the right hand side is non-zero, it is Poisson's equation).",
      "hint": "The sum of the second unmixed partial derivatives equals zero."
    },
    {
      "id": "W8-T1-Q02",
      "week": 8,
      "tier": "core",
      "topic": "Harmonic Functions",
      "type": "single_select",
      "question": "Functions that satisfy Laplace's equation $\\nabla^2 u = 0$ are called:",
      "options": [
        {
          "id": "W8-T1-Q02-opt0",
          "text": "Harmonic functions"
        },
        {
          "id": "W8-T1-Q02-opt1",
          "text": "Analytic functions"
        },
        {
          "id": "W8-T1-Q02-opt2",
          "text": "Hyperbolic functions"
        },
        {
          "id": "W8-T1-Q02-opt3",
          "text": "Wave packets"
        }
      ],
      "correct_indices": [
        "W8-T1-Q02-opt0"
      ],
      "explanation": "Solutions to Laplace's equation are called harmonic functions. They possess key properties such as the mean value property and smoothness.",
      "hint": "Recall the term for solutions of $\\nabla^2 u = 0$."
    },
    {
      "id": "W8-T1-Q03",
      "week": 8,
      "tier": "core",
      "topic": "Characteristic Equation of a Matrix",
      "type": "single_select",
      "question": "How are the eigenvalues $\\lambda$ of a square matrix $\\mathbf{A}$ determined?",
      "options": [
        {
          "id": "W8-T1-Q03-opt0",
          "text": "By solving the characteristic equation $\\det(\\mathbf{A} - \\lambda \\mathbf{I}) = 0$"
        },
        {
          "id": "W8-T1-Q03-opt1",
          "text": "By computing the trace $\\text{tr}(\\mathbf{A}) = 0$"
        },
        {
          "id": "W8-T1-Q03-opt2",
          "text": "By solving $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$"
        },
        {
          "id": "W8-T1-Q03-opt3",
          "text": "By finding the inverse $\\mathbf{A}^{-1}$"
        }
      ],
      "correct_indices": [
        "W8-T1-Q03-opt0"
      ],
      "explanation": "The eigenvalue problem $\\mathbf{A}\\mathbf{v} = \\lambda\\mathbf{v}$ can be rewritten as $(\\mathbf{A} - \\lambda\\mathbf{I})\\mathbf{v} = \\mathbf{0}$. For non-trivial eigenvectors $\\mathbf{v} \\neq \\mathbf{0}$, the matrix $\\mathbf{A} - \\lambda\\mathbf{I}$ must be singular, giving $\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = 0$.",
      "hint": "Set the determinant of $\\mathbf{A} - \\lambda\\mathbf{I}$ to zero."
    },
    {
      "id": "W8-T1-Q04",
      "week": 8,
      "tier": "core",
      "topic": "Eigenvalues of 2x2 Matrix",
      "type": "single_select",
      "question": "What are the eigenvalues of the matrix $\\mathbf{A} = \\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$?",
      "options": [
        {
          "id": "W8-T1-Q04-opt0",
          "text": "$\\lambda_1 = 5, \\lambda_2 = 2$"
        },
        {
          "id": "W8-T1-Q04-opt1",
          "text": "$\\lambda_1 = 4, \\lambda_2 = 3$"
        },
        {
          "id": "W8-T1-Q04-opt2",
          "text": "$\\lambda_1 = 6, \\lambda_2 = 1$"
        },
        {
          "id": "W8-T1-Q04-opt3",
          "text": "$\\lambda_1 = 7, \\lambda_2 = 0$"
        }
      ],
      "correct_indices": [
        "W8-T1-Q04-opt0"
      ],
      "explanation": "$\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = (4-\\lambda)(3-\\lambda) - 2 = \\lambda^2 - 7\\lambda + 12 - 2 = \\lambda^2 - 7\\lambda + 10 = (\\lambda-5)(\\lambda-2) = 0$. Thus $\\lambda = 5$ and $\\lambda = 2$.",
      "hint": "Trace is $4+3=7$ and determinant is $4(3)-2(1)=10$. Solve $\\lambda^2 - 7\\lambda + 10 = 0$."
    },
    {
      "id": "W8-T1-Q05",
      "week": 8,
      "tier": "core",
      "topic": "Trace and Determinant Relation",
      "type": "single_select",
      "question": "For any $n \\times n$ matrix with eigenvalues $\\lambda_1, \\dots, \\lambda_n$, the sum of the eigenvalues equals:",
      "options": [
        {
          "id": "W8-T1-Q05-opt0",
          "text": "The trace of the matrix $\\text{tr}(\\mathbf{A})$"
        },
        {
          "id": "W8-T1-Q05-opt1",
          "text": "The determinant $\\det(\\mathbf{A})$"
        },
        {
          "id": "W8-T1-Q05-opt2",
          "text": "The rank of $\\mathbf{A}$"
        },
        {
          "id": "W8-T1-Q05-opt3",
          "text": "Zero"
        }
      ],
      "correct_indices": [
        "W8-T1-Q05-opt0"
      ],
      "explanation": "The sum of the eigenvalues equals the trace (sum of main diagonal elements): $\\sum_{i=1}^n \\lambda_i = \\text{tr}(\\mathbf{A})$. The product equals the determinant: $\\prod_{i=1}^n \\lambda_i = \\det(\\mathbf{A})$.",
      "hint": "Sum equals trace; product equals determinant."
    },
    {
      "id": "W8-T1-Q06",
      "week": 8,
      "tier": "core",
      "topic": "Determinant in Terms of Eigenvalues",
      "type": "single_select",
      "question": "If a $3 \\times 3$ matrix has eigenvalues $\\lambda_1 = 2, \\lambda_2 = -3, \\lambda_3 = 4$, what is $\\det(\\mathbf{A})$?",
      "options": [
        {
          "id": "W8-T1-Q06-opt0",
          "text": "$-24$"
        },
        {
          "id": "W8-T1-Q06-opt1",
          "text": "$3$"
        },
        {
          "id": "W8-T1-Q06-opt2",
          "text": "$24$"
        },
        {
          "id": "W8-T1-Q06-opt3",
          "text": "$-12$"
        }
      ],
      "correct_indices": [
        "W8-T1-Q06-opt0"
      ],
      "explanation": "The determinant is the product of all eigenvalues: $\\det(\\mathbf{A}) = (2)(-3)(4) = -24$.",
      "hint": "Multiply all eigenvalues together."
    },
    {
      "id": "W8-T1-Q07",
      "week": 8,
      "tier": "core",
      "topic": "Elliptic PDE Classification",
      "type": "single_select",
      "question": "The 2D Laplace equation $u_{xx} + u_{yy} = 0$ is classified as:",
      "options": [
        {
          "id": "W8-T1-Q07-opt0",
          "text": "Elliptic"
        },
        {
          "id": "W8-T1-Q07-opt1",
          "text": "Parabolic"
        },
        {
          "id": "W8-T1-Q07-opt2",
          "text": "Hyperbolic"
        },
        {
          "id": "W8-T1-Q07-opt3",
          "text": "Non-linear"
        }
      ],
      "correct_indices": [
        "W8-T1-Q07-opt0"
      ],
      "explanation": "Here $A = 1, B = 0, C = 1$. The discriminant is $B^2 - 4AC = 0 - 4(1)(1) = -4 < 0$, classifying it as elliptic.",
      "hint": "Negative discriminant $B^2 - 4AC < 0$ corresponds to elliptic equations."
    },
    {
      "id": "W8-T1-Q08",
      "week": 8,
      "tier": "core",
      "topic": "Poisson Equation Definition",
      "type": "single_select",
      "question": "What is the Poisson equation for source distribution $\\rho(x,y)$?",
      "options": [
        {
          "id": "W8-T1-Q08-opt0",
          "text": "$\\nabla^2 u = f(x, y)$"
        },
        {
          "id": "W8-T1-Q08-opt1",
          "text": "$\\nabla^2 u = 0$"
        },
        {
          "id": "W8-T1-Q08-opt2",
          "text": "$\\frac{\\partial u}{\\partial t} = f(x, y)$"
        },
        {
          "id": "W8-T1-Q08-opt3",
          "text": "$\\nabla u = f(x, y)$"
        }
      ],
      "correct_indices": [
        "W8-T1-Q08-opt0"
      ],
      "explanation": "The Poisson equation is the inhomogeneous version of Laplace's equation: $\\nabla^2 u = f(x, y)$ (e.g. $\\nabla^2 V = -\\rho/\\epsilon_0$ in electrostatics).",
      "hint": "Laplace equation with a non-zero source term on the right hand side."
    },
    {
      "id": "W8-T1-Q09",
      "week": 8,
      "tier": "core",
      "topic": "Identity Matrix Eigenvalues",
      "type": "single_select",
      "question": "What are the eigenvalues of the $n \\times n$ identity matrix $\\mathbf{I}_n$?",
      "options": [
        {
          "id": "W8-T1-Q09-opt0",
          "text": "$\\lambda = 1$ with multiplicity $n$"
        },
        {
          "id": "W8-T1-Q09-opt1",
          "text": "$\\lambda = 0$"
        },
        {
          "id": "W8-T1-Q09-opt2",
          "text": "$\\lambda = n$"
        },
        {
          "id": "W8-T1-Q09-opt3",
          "text": "$\\lambda = \\pm 1$"
        }
      ],
      "correct_indices": [
        "W8-T1-Q09-opt0"
      ],
      "explanation": "Since $\\mathbf{I}\\mathbf{v} = 1\\mathbf{v}$ for every non-zero vector $\\mathbf{v}$, the only eigenvalue is $\\lambda = 1$, repeated $n$ times.",
      "hint": "Every vector is an eigenvector of $\\mathbf{I}$ with eigenvalue 1."
    },
    {
      "id": "W8-T1-Q10",
      "week": 8,
      "tier": "core",
      "topic": "Laplace in Polar Coordinates Constant Mode",
      "type": "single_select",
      "question": "What radially symmetric functions $u(r)$ satisfy $\\nabla^2 u = \\frac{1}{r}\\frac{d}{dr}\\left(r\\frac{du}{dr}\\right) = 0$ in 2D?",
      "options": [
        {
          "id": "W8-T1-Q10-opt0",
          "text": "$u(r) = C_1 \\ln r + C_2$"
        },
        {
          "id": "W8-T1-Q10-opt1",
          "text": "$u(r) = C_1 r + C_2$"
        },
        {
          "id": "W8-T1-Q10-opt2",
          "text": "$u(r) = C_1 r^2 + C_2$"
        },
        {
          "id": "W8-T1-Q10-opt3",
          "text": "$u(r) = C_1 e^r + C_2$"
        }
      ],
      "correct_indices": [
        "W8-T1-Q10-opt0"
      ],
      "explanation": "$r\\frac{du}{dr} = C_1 \\implies \\frac{du}{dr} = \\frac{C_1}{r} \\implies u(r) = C_1 \\ln r + C_2$.",
      "hint": "Integrate $r u' = C_1$ to get the logarithmic potential."
    },
    {
      "id": "W8-T2-Q01",
      "week": 8,
      "tier": "should",
      "topic": "Eigenvectors Computation",
      "type": "single_select",
      "question": "For the matrix $\\mathbf{A} = \\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$, what is an eigenvector corresponding to $\\lambda = 5$?",
      "options": [
        {
          "id": "W8-T2-Q01-opt0",
          "text": "$\\mathbf{v} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$"
        },
        {
          "id": "W8-T2-Q01-opt1",
          "text": "$\\mathbf{v} = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$"
        },
        {
          "id": "W8-T2-Q01-opt2",
          "text": "$\\mathbf{v} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$"
        },
        {
          "id": "W8-T2-Q01-opt3",
          "text": "$\\mathbf{v} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$"
        }
      ],
      "correct_indices": [
        "W8-T2-Q01-opt0"
      ],
      "explanation": "Solve $(\\mathbf{A} - 5\\mathbf{I})\\mathbf{v} = \\mathbf{0} \\implies \\begin{pmatrix} -1 & 2 \\\\ 1 & -2 \\end{pmatrix} \\begin{pmatrix} v_1 \\\\ v_2 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} \\implies -v_1 + 2v_2 = 0 \\implies v_1 = 2v_2$. Choosing $v_2 = 1$ yields $\\mathbf{v} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$.",
      "hint": "Substitute $\\lambda = 5$ into $(\\mathbf{A} - \\lambda\\mathbf{I})\\mathbf{v} = \\mathbf{0}$ and solve the resulting row equations."
    },
    {
      "id": "W8-T2-Q02",
      "week": 8,
      "tier": "should",
      "topic": "Laplace Equation in Polar Coordinates",
      "type": "single_select",
      "question": "What is the Laplacian $\\nabla^2 u$ in 2D polar coordinates $(r, \\theta)$?",
      "options": [
        {
          "id": "W8-T2-Q02-opt0",
          "text": "$\\frac{\\partial^2 u}{\\partial r^2} + \\frac{1}{r}\\frac{\\partial u}{\\partial r} + \\frac{1}{r^2}\\frac{\\partial^2 u}{\\partial \\theta^2}$"
        },
        {
          "id": "W8-T2-Q02-opt1",
          "text": "$\\frac{\\partial^2 u}{\\partial r^2} + \\frac{\\partial^2 u}{\\partial \\theta^2}$"
        },
        {
          "id": "W8-T2-Q02-opt2",
          "text": "$\\frac{\\partial^2 u}{\\partial r^2} + \\frac{1}{r^2}\\frac{\\partial^2 u}{\\partial \\theta^2}$"
        },
        {
          "id": "W8-T2-Q02-opt3",
          "text": "$\\frac{1}{r}\\frac{\\partial}{\\partial r}\\left(\\frac{\\partial u}{\\partial r}\\right) + \\frac{\\partial^2 u}{\\partial \\theta^2}$"
        }
      ],
      "correct_indices": [
        "W8-T2-Q02-opt0"
      ],
      "explanation": "In polar coordinates, $\\nabla^2 u = \\frac{1}{r}\\frac{\\partial}{\\partial r}\\left(r\\frac{\\partial u}{\\partial r}\\right) + \\frac{1}{r^2}\\frac{\\partial^2 u}{\\partial \\theta^2} = u_{rr} + \\frac{1}{r}u_r + \\frac{1}{r^2}u_{\\theta\\theta}$.",
      "hint": "Remember the radial scaling term $\\frac{1}{r}u_r$ and angular factor $\\frac{1}{r^2}$."
    },
    {
      "id": "W8-T2-Q03",
      "week": 8,
      "tier": "should",
      "topic": "Eigenvectors for Second Eigenvalue",
      "type": "single_select",
      "question": "For $\\mathbf{A} = \\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$, find an eigenvector for $\\lambda = 2$.",
      "options": [
        {
          "id": "W8-T2-Q03-opt0",
          "text": "$\\mathbf{v} = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$"
        },
        {
          "id": "W8-T2-Q03-opt1",
          "text": "$\\mathbf{v} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$"
        },
        {
          "id": "W8-T2-Q03-opt2",
          "text": "$\\mathbf{v} = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$"
        },
        {
          "id": "W8-T2-Q03-opt3",
          "text": "$\\mathbf{v} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$"
        }
      ],
      "correct_indices": [
        "W8-T2-Q03-opt0"
      ],
      "explanation": "Solve $(\\mathbf{A} - 2\\mathbf{I})\\mathbf{v} = \\mathbf{0} \\implies \\begin{pmatrix} 2 & 2 \\\\ 1 & 1 \\end{pmatrix}\\begin{pmatrix} v_1 \\\\ v_2 \\end{pmatrix} = \\mathbf{0} \\implies v_1 + v_2 = 0 \\implies v_1 = -v_2$. Choosing $v_2 = -1$ gives $\\mathbf{v} = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$.",
      "hint": "Substitute $\\lambda = 2$ into $(\\mathbf{A}-2\\mathbf{I})\\mathbf{v} = \\mathbf{0}$."
    },
    {
      "id": "W8-T2-Q04",
      "week": 8,
      "tier": "should",
      "topic": "Separation in Cartesian Laplace Equation",
      "type": "single_select",
      "question": "In separating $u_{xx} + u_{yy} = 0$ with $u(x,y) = X(x)Y(y)$, if $X''(x) = -\\lambda X(x)$ with $\\lambda > 0$, what ODE does $Y(y)$ satisfy?",
      "options": [
        {
          "id": "W8-T2-Q04-opt0",
          "text": "$Y''(y) - \\lambda Y(y) = 0$ (hyperbolic/exponential solutions)"
        },
        {
          "id": "W8-T2-Q04-opt1",
          "text": "$Y''(y) + \\lambda Y(y) = 0$ (trigonometric)"
        },
        {
          "id": "W8-T2-Q04-opt2",
          "text": "$Y'(y) + \\lambda Y(y) = 0$"
        },
        {
          "id": "W8-T2-Q04-opt3",
          "text": "$Y''(y) = 0$"
        }
      ],
      "correct_indices": [
        "W8-T2-Q04-opt0"
      ],
      "explanation": "$\\frac{X''}{X} + \\frac{Y''}{Y} = 0 \\implies -\\lambda + \\frac{Y''}{Y} = 0 \\implies Y'' - \\lambda Y = 0$. Thus while one spatial direction is oscillatory (trigonometric), the other direction is exponential/hyperbolic.",
      "hint": "The sum must equal zero, so if $X''/X = -\\lambda$, then $Y''/Y = +\\lambda$."
    },
    {
      "id": "W8-T2-Q05",
      "week": 8,
      "tier": "should",
      "topic": "Diagonal Matrix Construction",
      "type": "single_select",
      "question": "For a matrix with eigenvalues $\\lambda_1 = 5, \\lambda_2 = 2$ and eigenvector matrix $\\mathbf{P} = \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix}$, what is $\\mathbf{D} = \\mathbf{P}^{-1}\\mathbf{A}\\mathbf{P}$?",
      "options": [
        {
          "id": "W8-T2-Q05-opt0",
          "text": "$\\begin{pmatrix} 5 & 0 \\\\ 0 & 2 \\end{pmatrix}$"
        },
        {
          "id": "W8-T2-Q05-opt1",
          "text": "$\\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}$"
        },
        {
          "id": "W8-T2-Q05-opt2",
          "text": "$\\begin{pmatrix} 10 & 0 \\\\ 0 & 7 \\end{pmatrix}$"
        },
        {
          "id": "W8-T2-Q05-opt3",
          "text": "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
        }
      ],
      "correct_indices": [
        "W8-T2-Q05-opt0"
      ],
      "explanation": "The diagonal matrix $\\mathbf{D}$ contains the eigenvalues corresponding to the column order of $\\mathbf{P}$: column 1 has $\\lambda=5$ and column 2 has $\\lambda=2$, so $\\mathbf{D} = \\begin{pmatrix} 5 & 0 \\\\ 0 & 2 \\end{pmatrix}$.",
      "hint": "The diagonal elements are the eigenvalues matching the eigenvector columns."
    },
    {
      "id": "W8-T2-Q06",
      "week": 8,
      "tier": "should",
      "topic": "Laplace Equation in a Semi-Infinite Strip",
      "type": "single_select",
      "question": "For $u_{xx} + u_{yy} = 0$ on $0 < x < L, y > 0$ with $u(0,y)=0, u(L,y)=0$ and $\\lim_{y \\to \\infty} u(x,y) = 0$, what form do the $Y_n(y)$ modes take?",
      "options": [
        {
          "id": "W8-T2-Q06-opt0",
          "text": "$Y_n(y) = e^{-n\\pi y / L}$"
        },
        {
          "id": "W8-T2-Q06-opt1",
          "text": "$Y_n(y) = e^{+n\\pi y / L}$"
        },
        {
          "id": "W8-T2-Q06-opt2",
          "text": "$Y_n(y) = \\cos(n\\pi y/L)$"
        },
        {
          "id": "W8-T2-Q06-opt3",
          "text": "$Y_n(y) = \\frac{1}{y}$"
        }
      ],
      "correct_indices": [
        "W8-T2-Q06-opt0"
      ],
      "explanation": "The general solution is $Y(y) = A e^{-n\\pi y/L} + B e^{+n\\pi y/L}$. To remain bounded as $y \\to \\infty$, the growing exponential must vanish ($B=0$), leaving decaying exponentials $e^{-n\\pi y/L}$.",
      "hint": "Boundary condition at infinity eliminates the growing exponential $e^{+n\\pi y/L}$."
    },
    {
      "id": "W8-T2-Q07",
      "week": 8,
      "tier": "should",
      "topic": "Matrix Powers via Diagonalisation",
      "type": "single_select",
      "question": "If $\\mathbf{A} = \\mathbf{P}\\mathbf{D}\\mathbf{P}^{-1}$, how is the $k$-th power $\\mathbf{A}^k$ evaluated efficiently?",
      "options": [
        {
          "id": "W8-T2-Q07-opt0",
          "text": "$\\mathbf{A}^k = \\mathbf{P}\\mathbf{D}^k \\mathbf{P}^{-1}$"
        },
        {
          "id": "W8-T2-Q07-opt1",
          "text": "$\\mathbf{A}^k = \\mathbf{P}^k \\mathbf{D}^k$"
        },
        {
          "id": "W8-T2-Q07-opt2",
          "text": "$\\mathbf{A}^k = k \\mathbf{P}\\mathbf{D}\\mathbf{P}^{-1}$"
        },
        {
          "id": "W8-T2-Q07-opt3",
          "text": "$\\mathbf{A}^k = \\mathbf{P}\\mathbf{D}\\mathbf{P}^{-k}$"
        }
      ],
      "correct_indices": [
        "W8-T2-Q07-opt0"
      ],
      "explanation": "$\\mathbf{A}^k = (\\mathbf{P}\\mathbf{D}\\mathbf{P}^{-1})(\\mathbf{P}\\mathbf{D}\\mathbf{P}^{-1})\\dots = \\mathbf{P}\\mathbf{D}^k \\mathbf{P}^{-1}$. Since $\\mathbf{D}$ is diagonal, $\\mathbf{D}^k = \\text{diag}(\\lambda_1^k, \\dots, \\lambda_n^k)$, making computation trivial.",
      "hint": "Interior $\\mathbf{P}^{-1}\\mathbf{P}$ cancel out."
    },
    {
      "id": "W8-T2-Q08",
      "week": 8,
      "tier": "should",
      "topic": "Invertibility Condition via Eigenvalues",
      "type": "single_select",
      "question": "A square matrix $\\mathbf{A}$ is invertible if and only if:",
      "options": [
        {
          "id": "W8-T2-Q08-opt0",
          "text": "None of its eigenvalues are zero ($\\lambda_i \\neq 0$ for all $i$)"
        },
        {
          "id": "W8-T2-Q08-opt1",
          "text": "All its eigenvalues are positive"
        },
        {
          "id": "W8-T2-Q08-opt2",
          "text": "The sum of its eigenvalues is non-zero"
        },
        {
          "id": "W8-T2-Q08-opt3",
          "text": "It is symmetric"
        }
      ],
      "correct_indices": [
        "W8-T2-Q08-opt0"
      ],
      "explanation": "Since $\\det(\\mathbf{A}) = \\prod_{i=1}^n \\lambda_i$, the determinant is non-zero if and only if no eigenvalue is zero. Invertibility requires $\\det(\\mathbf{A}) \\neq 0$.",
      "hint": "A zero eigenvalue implies a non-trivial null space ($A\\mathbf{v} = 0\\mathbf{v} = \\mathbf{0}$), making $A$ singular."
    },
    {
      "id": "W8-T2-Q09",
      "week": 8,
      "tier": "should",
      "topic": "Radial Solutions in a Circular Disc",
      "type": "single_select",
      "question": "In solving $\\nabla^2 u = 0$ inside a disc of radius $R$ ($0 \\le r \\le R$), why must the radial solutions $R_n(r) = A r^n + B r^{-n}$ have $B = 0$?",
      "options": [
        {
          "id": "W8-T2-Q09-opt0",
          "text": "Because $r^{-n} = 1/r^n$ blows up to $\\infty$ at the origin $r=0$"
        },
        {
          "id": "W8-T2-Q09-opt1",
          "text": "Because $r=0$ is outside the disc"
        },
        {
          "id": "W8-T2-Q09-opt2",
          "text": "Because $\\ln r$ is negative"
        },
        {
          "id": "W8-T2-Q09-opt3",
          "text": "Because $A$ must be zero"
        }
      ],
      "correct_indices": [
        "W8-T2-Q09-opt0"
      ],
      "explanation": "The physical domain includes the center of the disc $r=0$. Since $r^{-n} \\to \\infty$ as $r \\to 0$, boundedness requires $B = 0$, retaining only $R_n(r) = A r^n$.",
      "hint": "Singular terms must vanish at the origin to keep potential bounded."
    },
    {
      "id": "W8-T2-Q10",
      "week": 8,
      "tier": "should",
      "topic": "Symmetric Matrix Eigenvalues Reality",
      "type": "single_select",
      "question": "For any real symmetric matrix $\\mathbf{A} = \\mathbf{A}^T$, what can be said about its eigenvalues?",
      "options": [
        {
          "id": "W8-T2-Q10-opt0",
          "text": "They are guaranteed to be strictly real"
        },
        {
          "id": "W8-T2-Q10-opt1",
          "text": "They must be purely imaginary"
        },
        {
          "id": "W8-T2-Q10-opt2",
          "text": "They can be any complex numbers"
        },
        {
          "id": "W8-T2-Q10-opt3",
          "text": "They must be integers"
        }
      ],
      "correct_indices": [
        "W8-T2-Q10-opt0"
      ],
      "explanation": "Let $\\mathbf{A}\\mathbf{v} = \\lambda\\mathbf{v}$. Taking inner product with $\\mathbf{v}^*$: $\\mathbf{v}^*\\mathbf{A}\\mathbf{v} = \\lambda |\\mathbf{v}|^2$. Since $\\mathbf{A}$ is real symmetric, $\\mathbf{v}^*\\mathbf{A}\\mathbf{v}$ is real, proving $\\lambda = \\lambda^*$ is real.",
      "hint": "Real symmetric matrices always have real spectra."
    },
    {
      "id": "W8-T3-Q01",
      "week": 8,
      "tier": "nice_to_know",
      "topic": "Matrix Diagonalisation Criterion",
      "type": "single_select",
      "question": "If an $n \\times n$ matrix $\\mathbf{A}$ has $n$ linearly independent eigenvectors forming the columns of matrix $\\mathbf{P}$, then $\\mathbf{P}^{-1}\\mathbf{A}\\mathbf{P} =$",
      "options": [
        {
          "id": "W8-T3-Q01-opt0",
          "text": "$\\mathbf{D}$, a diagonal matrix of the eigenvalues"
        },
        {
          "id": "W8-T3-Q01-opt1",
          "text": "$\\mathbf{I}$, the identity matrix"
        },
        {
          "id": "W8-T3-Q01-opt2",
          "text": "$\\mathbf{A}^T$, the transpose of $\\mathbf{A}$"
        },
        {
          "id": "W8-T3-Q01-opt3",
          "text": "$\\mathbf{0}$, the zero matrix"
        }
      ],
      "correct_indices": [
        "W8-T3-Q01-opt0"
      ],
      "explanation": "Since $\\mathbf{A}\\mathbf{P} = \\mathbf{P}\\mathbf{D}$ where $\\mathbf{D} = \\text{diag}(\\lambda_1, \\dots, \\lambda_n)$, multiplying on the left by $\\mathbf{P}^{-1}$ yields $\\mathbf{P}^{-1}\\mathbf{A}\\mathbf{P} = \\mathbf{D}$.",
      "hint": "Diagonalisation decouples the matrix into its eigenvalues along the main diagonal."
    },
    {
      "id": "W8-T3-Q02",
      "week": 8,
      "tier": "nice_to_know",
      "topic": "Mean Value Property of Harmonic Functions",
      "type": "single_select",
      "question": "What does the Mean Value Property state for a harmonic function $u(x,y)$ inside a disc of radius $R$ centered at $(x_0, y_0)$?",
      "options": [
        {
          "id": "W8-T3-Q02-opt0",
          "text": "The value at the center $u(x_0, y_0)$ equals the average of $u$ over the boundary circle"
        },
        {
          "id": "W8-T3-Q02-opt1",
          "text": "The integral of $u$ over the disk is zero"
        },
        {
          "id": "W8-T3-Q02-opt2",
          "text": "$u(x_0, y_0) = 0$"
        },
        {
          "id": "W8-T3-Q02-opt3",
          "text": "The maximum value always occurs at the center"
        }
      ],
      "correct_indices": [
        "W8-T3-Q02-opt0"
      ],
      "explanation": "The Mean Value Property states that $u(x_0, y_0) = \\frac{1}{2\\pi}\\int_0^{2\\pi} u(x_0 + R\\cos\\theta, y_0 + R\\sin\\theta)\\,d\\theta$.",
      "hint": "The temperature at the center of a circular ring in steady state is the average temperature around the ring."
    },
    {
      "id": "W8-T3-Q03",
      "week": 8,
      "tier": "nice_to_know",
      "topic": "Maximum Principle for Laplace Equation",
      "type": "single_select",
      "question": "What does the Maximum Principle assert for a harmonic function $u(x,y)$ on a bounded closed domain $D$?",
      "options": [
        {
          "id": "W8-T3-Q03-opt0",
          "text": "The maximum and minimum values of $u$ must occur on the boundary $\\partial D$, never in the interior (unless $u$ is constant)"
        },
        {
          "id": "W8-T3-Q03-opt1",
          "text": "The maximum value is always 0"
        },
        {
          "id": "W8-T3-Q03-opt2",
          "text": "The maximum value occurs at the centroid"
        },
        {
          "id": "W8-T3-Q03-opt3",
          "text": "The function is unbounded"
        }
      ],
      "correct_indices": [
        "W8-T3-Q03-opt0"
      ],
      "explanation": "Because $\\nabla^2 u = u_{xx} + u_{yy} = 0$, $u_{xx}$ and $u_{yy}$ cannot be simultaneously negative (which would be required for a local maximum). Thus local extrema cannot occur in the interior.",
      "hint": "No interior peaks: extrema must be on the boundary."
    },
    {
      "id": "W8-T3-Q04",
      "week": 8,
      "tier": "nice_to_know",
      "topic": "Uniqueness of Dirichlet Problem for Laplace",
      "type": "single_select",
      "question": "If two harmonic functions $u_1$ and $u_2$ on domain $D$ satisfy the same boundary conditions $u_1 = u_2$ on $\\partial D$, then:",
      "options": [
        {
          "id": "W8-T3-Q04-opt0",
          "text": "$u_1 \\equiv u_2$ everywhere in $D$ (the solution is unique)"
        },
        {
          "id": "W8-T3-Q04-opt1",
          "text": "$u_1$ and $u_2$ differ by a constant"
        },
        {
          "id": "W8-T3-Q04-opt2",
          "text": "$u_1 = -u_2$"
        },
        {
          "id": "W8-T3-Q04-opt3",
          "text": "The problem is ill-posed"
        }
      ],
      "correct_indices": [
        "W8-T3-Q04-opt0"
      ],
      "explanation": "Let $w = u_1 - u_2$. Then $\\nabla^2 w = 0$ in $D$ and $w = 0$ on $\\partial D$. By the Maximum/Minimum Principle, the maximum and minimum of $w$ are both 0, so $w \\equiv 0$ everywhere.",
      "hint": "The difference $w$ vanishes on the boundary, so it must vanish everywhere inside."
    },
    {
      "id": "W8-T3-Q05",
      "week": 8,
      "tier": "nice_to_know",
      "topic": "Poisson Integral Formula for Disc",
      "type": "single_select",
      "question": "The Poisson Integral Formula expresses the potential $u(r, \\theta)$ inside a disc of radius $R$ from its boundary values $f(\\phi) = u(R, \\phi)$ as:",
      "options": [
        {
          "id": "W8-T3-Q05-opt0",
          "text": "$u(r, \\theta) = \\frac{1}{2\\pi}\\int_0^{2\\pi} \\frac{R^2 - r^2}{R^2 - 2Rr\\cos(\\theta - \\phi) + r^2} f(\\phi)\\,d\\phi$"
        },
        {
          "id": "W8-T3-Q05-opt1",
          "text": "$u(r, \\theta) = \\frac{1}{R}\\int_0^{2\\pi} f(\\phi)\\,d\\phi$"
        },
        {
          "id": "W8-T3-Q05-opt2",
          "text": "$u(r, \\theta) = \\frac{r}{R}f(\\theta)$"
        },
        {
          "id": "W8-T3-Q05-opt3",
          "text": "$u(r, \\theta) = \\int_0^R f(r)\\,dr$"
        }
      ],
      "correct_indices": [
        "W8-T3-Q05-opt0"
      ],
      "explanation": "Summing the separated Fourier series inside the disc yields the Poisson kernel $P(r, \\theta; R, \\phi) = \\frac{R^2 - r^2}{R^2 - 2Rr\\cos(\\theta-\\phi) + r^2}$.",
      "hint": "Notice the factor $R^2 - r^2$ in the numerator of the Poisson kernel."
    },
    {
      "id": "W8-T3-Q06",
      "week": 8,
      "tier": "nice_to_know",
      "topic": "Algebraic vs Geometric Multiplicity",
      "type": "single_select",
      "question": "A matrix is defective (non-diagonalisable) if and only if for at least one eigenvalue $\\lambda$:",
      "options": [
        {
          "id": "W8-T3-Q06-opt0",
          "text": "Its geometric multiplicity (number of linearly independent eigenvectors) is strictly less than its algebraic multiplicity"
        },
        {
          "id": "W8-T3-Q06-opt1",
          "text": "The eigenvalue is zero"
        },
        {
          "id": "W8-T3-Q06-opt2",
          "text": "The eigenvalue is complex"
        },
        {
          "id": "W8-T3-Q06-opt3",
          "text": "The trace is zero"
        }
      ],
      "correct_indices": [
        "W8-T3-Q06-opt0"
      ],
      "explanation": "An eigenvalue has algebraic multiplicity $m$ from $(r-\\lambda)^m = 0$. If the dimension of the eigenspace $\\ker(\\mathbf{A} - \\lambda\\mathbf{I})$ is less than $m$, there are not enough eigenvectors to form a basis, so $\\mathbf{A}$ cannot be diagonalised.",
      "hint": "Not enough eigenvectors to match the multiplicity of the root in the characteristic polynomial."
    },
    {
      "id": "W8-T3-Q07",
      "week": 8,
      "tier": "nice_to_know",
      "topic": "Orthogonal Matrix Definition",
      "type": "single_select",
      "question": "A square real matrix $\\mathbf{Q}$ is orthogonal if:",
      "options": [
        {
          "id": "W8-T3-Q07-opt0",
          "text": "$\\mathbf{Q}^T \\mathbf{Q} = \\mathbf{I} \\iff \\mathbf{Q}^{-1} = \\mathbf{Q}^T$"
        },
        {
          "id": "W8-T3-Q07-opt1",
          "text": "$\\mathbf{Q}^T = -\\mathbf{Q}$"
        },
        {
          "id": "W8-T3-Q07-opt2",
          "text": "$\\det(\\mathbf{Q}) = 0$"
        },
        {
          "id": "W8-T3-Q07-opt3",
          "text": "$\\mathbf{Q}^2 = \\mathbf{I}$"
        }
      ],
      "correct_indices": [
        "W8-T3-Q07-opt0"
      ],
      "explanation": "An orthogonal matrix has mutually orthonormal columns, meaning its transpose is its inverse: $\\mathbf{Q}^T \\mathbf{Q} = \\mathbf{I}$.",
      "hint": "The transpose is identical to the inverse."
    },
    {
      "id": "W8-T3-Q08",
      "week": 8,
      "tier": "nice_to_know",
      "topic": "Orthogonal Eigenvectors for Symmetric Matrices",
      "type": "single_select",
      "question": "If $\\mathbf{A}$ is real symmetric, eigenvectors $\\mathbf{v}_1$ and $\\mathbf{v}_2$ corresponding to distinct eigenvalues $\\lambda_1 \\neq \\lambda_2$ are:",
      "options": [
        {
          "id": "W8-T3-Q08-opt0",
          "text": "Mutually orthogonal: $\\mathbf{v}_1 \\cdot \\mathbf{v}_2 = 0$"
        },
        {
          "id": "W8-T3-Q08-opt1",
          "text": "Collinear"
        },
        {
          "id": "W8-T3-Q08-opt2",
          "text": "Linearly dependent"
        },
        {
          "id": "W8-T3-Q08-opt3",
          "text": "Unit vectors"
        }
      ],
      "correct_indices": [
        "W8-T3-Q08-opt0"
      ],
      "explanation": "$\\lambda_1(\\mathbf{v}_1 \\cdot \\mathbf{v}_2) = (\\mathbf{A}\\mathbf{v}_1)\\cdot \\mathbf{v}_2 = \\mathbf{v}_1 \\cdot (\\mathbf{A}^T \\mathbf{v}_2) = \\mathbf{v}_1 \\cdot (\\mathbf{A}\\mathbf{v}_2) = \\lambda_2(\\mathbf{v}_1 \\cdot \\mathbf{v}_2)$. Since $\\lambda_1 \\neq \\lambda_2$, we must have $\\mathbf{v}_1 \\cdot \\mathbf{v}_2 = 0$.",
      "hint": "Eigenvectors belonging to different eigenvalues of a symmetric matrix are perpendicular."
    },
    {
      "id": "W8-T3-Q09",
      "week": 8,
      "tier": "nice_to_know",
      "topic": "Dirichlet Principle and Energy Minimization",
      "type": "single_select",
      "question": "Dirichlet's Principle states that the harmonic function solving $\\nabla^2 u = 0$ with $u = g$ on $\\partial D$ minimizes which energy functional?",
      "options": [
        {
          "id": "W8-T3-Q09-opt0",
          "text": "The Dirichlet energy $E[u] = \\frac{1}{2}\\iint_D |\\nabla u|^2\\,dA$"
        },
        {
          "id": "W8-T3-Q09-opt1",
          "text": "$E[u] = \\iint_D u^2\\,dA$"
        },
        {
          "id": "W8-T3-Q09-opt2",
          "text": "$E[u] = \\oint_{\\partial D} g^2\\,ds$"
        },
        {
          "id": "W8-T3-Q09-opt3",
          "text": "$E[u] = \\iint_D u\\,dA$"
        }
      ],
      "correct_indices": [
        "W8-T3-Q09-opt0"
      ],
      "explanation": "The calculus of variations Euler-Lagrange equation for $E[u] = \\frac{1}{2}\\iint |\\nabla u|^2\\,dA$ is precisely the Laplace equation $\\nabla^2 u = 0$. Harmonic functions minimize the total gradient energy.",
      "hint": "Minimizes the integral of $|\nabla u|^2$."
    },
    {
      "id": "W8-T3-Q10",
      "week": 8,
      "tier": "nice_to_know",
      "topic": "Laplace Solution in an Annulus",
      "type": "single_select",
      "question": "For Laplace's equation in an annulus $r_1 \\le r \\le r_2$ with symmetric boundary conditions $u(r_1) = T_1$ and $u(r_2) = T_2$, the temperature is:",
      "options": [
        {
          "id": "W8-T3-Q10-opt0",
          "text": "$u(r) = T_1 + (T_2 - T_1)\\frac{\\ln(r/r_1)}{\\ln(r_2/r_1)}$"
        },
        {
          "id": "W8-T3-Q10-opt1",
          "text": "$u(r) = T_1 + (T_2 - T_1)\\frac{r - r_1}{r_2 - r_1}$"
        },
        {
          "id": "W8-T3-Q10-opt2",
          "text": "$u(r) = \\frac{T_1 r_1 + T_2 r_2}{r}$"
        },
        {
          "id": "W8-T3-Q10-opt3",
          "text": "$u(r) = T_1\\left(\\frac{r_1}{r}\\right)^2$"
        }
      ],
      "correct_indices": [
        "W8-T3-Q10-opt0"
      ],
      "explanation": "Using $u(r) = C_1 \\ln r + C_2$: $u(r_1) = C_1\\ln r_1 + C_2 = T_1$, $u(r_2) = C_1\\ln r_2 + C_2 = T_2$. Subtracting yields $C_1 = \\frac{T_2 - T_1}{\\ln(r_2/r_1)}$, resulting in the logarithmic profile.",
      "hint": "Radial heat conduction in a hollow cylinder has a logarithmic temperature gradient."
    },
    {
      "id": "W8-T4-Q01",
      "week": 8,
      "tier": "extra",
      "topic": "Cayley-Hamilton Theorem",
      "type": "single_select",
      "question": "What does the Cayley-Hamilton Theorem state regarding any square matrix $\\mathbf{A}$ with characteristic polynomial $p(\\lambda) = \\det(\\mathbf{A} - \\lambda\\mathbf{I})$?",
      "options": [
        {
          "id": "W8-T4-Q01-opt0",
          "text": "Every square matrix satisfies its own characteristic equation: $p(\\mathbf{A}) = \\mathbf{0}$"
        },
        {
          "id": "W8-T4-Q01-opt1",
          "text": "$\\det(\\mathbf{A}) = \\text{tr}(\\mathbf{A})$"
        },
        {
          "id": "W8-T4-Q01-opt2",
          "text": "$\\mathbf{A}$ is always symmetric"
        },
        {
          "id": "W8-T4-Q01-opt3",
          "text": "$\\mathbf{A}^n = \\mathbf{I}$ for all $n$"
        }
      ],
      "correct_indices": [
        "W8-T4-Q01-opt0"
      ],
      "explanation": "The Cayley-Hamilton Theorem asserts that substituting the matrix $\\mathbf{A}$ into its characteristic polynomial yields the zero matrix: $p(\\mathbf{A}) = \\mathbf{0}$. This provides a direct method for computing matrix powers and inverses.",
      "hint": "A matrix 'satisfies its own characteristic polynomial'."
    },
    {
      "id": "W8-T4-Q02",
      "week": 8,
      "tier": "extra",
      "topic": "Spectral Theorem for Symmetric Matrices",
      "type": "single_select",
      "question": "Which property is guaranteed for any real symmetric matrix $\\mathbf{A} = \\mathbf{A}^T$?",
      "options": [
        {
          "id": "W8-T4-Q02-opt0",
          "text": "All its eigenvalues are real and it can be orthogonally diagonalised: $\\mathbf{A} = \\mathbf{Q}\\mathbf{D}\\mathbf{Q}^T$"
        },
        {
          "id": "W8-T4-Q02-opt1",
          "text": "All its eigenvalues are purely imaginary"
        },
        {
          "id": "W8-T4-Q02-opt2",
          "text": "Its determinant is always positive"
        },
        {
          "id": "W8-T4-Q02-opt3",
          "text": "Its eigenvectors are always linearly dependent"
        }
      ],
      "correct_indices": [
        "W8-T4-Q02-opt0"
      ],
      "explanation": "The Spectral Theorem guarantees that real symmetric matrices have strictly real eigenvalues and an orthonormal basis of eigenvectors, allowing orthogonal diagonalisation $\\mathbf{Q}^T \\mathbf{A} \\mathbf{Q} = \\mathbf{D}$.",
      "hint": "Symmetry in real matrices guarantees real eigenvalues and orthogonal eigenvectors."
    },
    {
      "id": "W8-T4-Q03",
      "week": 8,
      "tier": "extra",
      "topic": "Matrix Inverse via Cayley-Hamilton",
      "type": "single_select",
      "question": "If $\\mathbf{A}^2 - 5\\mathbf{A} + 6\\mathbf{I} = \\mathbf{0}$, how is the inverse $\\mathbf{A}^{-1}$ expressed in terms of $\\mathbf{A}$ and $\\mathbf{I}$?",
      "options": [
        {
          "id": "W8-T4-Q03-opt0",
          "text": "$\\mathbf{A}^{-1} = \\frac{5}{6}\\mathbf{I} - \\frac{1}{6}\\mathbf{A}$"
        },
        {
          "id": "W8-T4-Q03-opt1",
          "text": "$\\mathbf{A}^{-1} = 5\\mathbf{I} - \\mathbf{A}$"
        },
        {
          "id": "W8-T4-Q03-opt2",
          "text": "$\\mathbf{A}^{-1} = \\frac{1}{6}\\mathbf{A} - \\frac{5}{6}\\mathbf{I}$"
        },
        {
          "id": "W8-T4-Q03-opt3",
          "text": "$\\mathbf{A}^{-1} = 6\\mathbf{I} - 5\\mathbf{A}$"
        }
      ],
      "correct_indices": [
        "W8-T4-Q03-opt0"
      ],
      "explanation": "Multiply by $\\mathbf{A}^{-1}$: $\\mathbf{A} - 5\\mathbf{I} + 6\\mathbf{A}^{-1} = \\mathbf{0} \\implies 6\\mathbf{A}^{-1} = 5\\mathbf{I} - \\mathbf{A} \\implies \\mathbf{A}^{-1} = \\frac{5}{6}\\mathbf{I} - \\frac{1}{6}\\mathbf{A}$.",
      "hint": "Rearrange the polynomial equation to isolate $\\mathbf{A}^{-1}$."
    },
    {
      "id": "W8-T4-Q04",
      "week": 8,
      "tier": "extra",
      "topic": "Harnack's Inequality for Harmonic Functions",
      "type": "single_select",
      "question": "Harnack's inequality for a non-negative harmonic function $u(x) \\ge 0$ in a domain $D$ bounds the ratio of values at two interior points $x_1, x_2$ as:",
      "options": [
        {
          "id": "W8-T4-Q04-opt0",
          "text": "$C^{-1} u(x_2) \\le u(x_1) \\le C u(x_2)$ where $C$ depends only on the geometry"
        },
        {
          "id": "W8-T4-Q04-opt1",
          "text": "$u(x_1) = u(x_2)$"
        },
        {
          "id": "W8-T4-Q04-opt2",
          "text": "$u(x_1) + u(x_2) = 0$"
        },
        {
          "id": "W8-T4-Q04-opt3",
          "text": "$u(x_1) \\le \\sqrt{u(x_2)}$"
        }
      ],
      "correct_indices": [
        "W8-T4-Q04-opt0"
      ],
      "explanation": "Harnack's inequality states that non-negative harmonic functions cannot change wildly: values at nearby points are comparable by a universal geometric constant $C$, preventing sharp localized spikes.",
      "hint": "Binds the ratio of temperatures at nearby points in steady state."
    },
    {
      "id": "W8-T4-Q05",
      "week": 8,
      "tier": "extra",
      "topic": "Positive Definite Matrix Eigenvalues",
      "type": "single_select",
      "question": "A real symmetric matrix $\\mathbf{A}$ is positive definite ($\\mathbf{x}^T \\mathbf{A}\\mathbf{x} > 0$ for all $\\mathbf{x} \\neq \\mathbf{0}$) if and only if:",
      "options": [
        {
          "id": "W8-T4-Q05-opt0",
          "text": "All its eigenvalues are strictly positive ($\\lambda_i > 0$ for all $i$)"
        },
        {
          "id": "W8-T4-Q05-opt1",
          "text": "All its eigenvalues are non-zero"
        },
        {
          "id": "W8-T4-Q05-opt2",
          "text": "Its trace is positive"
        },
        {
          "id": "W8-T4-Q05-opt3",
          "text": "Its determinant is positive"
        }
      ],
      "correct_indices": [
        "W8-T4-Q05-opt0"
      ],
      "explanation": "By orthogonal diagonalisation $\\mathbf{x}^T \\mathbf{A}\\mathbf{x} = \\mathbf{y}^T \\mathbf{D}\\mathbf{y} = \\sum \\lambda_i y_i^2$. This quadratic form is strictly positive for all non-zero $\\mathbf{y}$ if and only if every $\\lambda_i > 0$.",
      "hint": "All eigenvalues must be strictly greater than zero."
    },
    {
      "id": "W8-T4-Q06",
      "week": 8,
      "tier": "extra",
      "topic": "Singular Value Decomposition (SVD)",
      "type": "single_select",
      "question": "For any real $m \\times n$ matrix $\\mathbf{A}$, the singular values $\\sigma_i$ are defined as:",
      "options": [
        {
          "id": "W8-T4-Q06-opt0",
          "text": "The square roots of the eigenvalues of $\\mathbf{A}^T \\mathbf{A}$: $\\sigma_i = \\sqrt{\\lambda_i(\\mathbf{A}^T \\mathbf{A})}$"
        },
        {
          "id": "W8-T4-Q06-opt1",
          "text": "The eigenvalues of $\\mathbf{A}$ directly"
        },
        {
          "id": "W8-T4-Q06-opt2",
          "text": "The diagonal elements of $\\mathbf{A}$"
        },
        {
          "id": "W8-T4-Q06-opt3",
          "text": "The row sums of $\\mathbf{A}$"
        }
      ],
      "correct_indices": [
        "W8-T4-Q06-opt0"
      ],
      "explanation": "$\\mathbf{A}^T \\mathbf{A}$ is symmetric and positive semi-definite with non-negative eigenvalues $\\lambda_i \\ge 0$. The singular values are $\\sigma_i = \\sqrt{\\lambda_i(\\mathbf{A}^T \\mathbf{A})}$.",
      "hint": "Singular values are the square roots of the eigenvalues of $\\mathbf{A}^T\\mathbf{A}$."
    },
    {
      "id": "W8-T4-Q07",
      "week": 8,
      "tier": "extra",
      "topic": "Quadratic Form Matrix Representation",
      "type": "single_select",
      "question": "The quadratic form $Q(x, y) = 3x^2 + 4xy + 5y^2$ is represented by the symmetric matrix:",
      "options": [
        {
          "id": "W8-T4-Q07-opt0",
          "text": "$\\begin{pmatrix} 3 & 2 \\\\ 2 & 5 \\end{pmatrix}$"
        },
        {
          "id": "W8-T4-Q07-opt1",
          "text": "$\\begin{pmatrix} 3 & 4 \\\\ 0 & 5 \\end{pmatrix}$"
        },
        {
          "id": "W8-T4-Q07-opt2",
          "text": "$\\begin{pmatrix} 3 & 4 \\\\ 4 & 5 \\end{pmatrix}$"
        },
        {
          "id": "W8-T4-Q07-opt3",
          "text": "$\\begin{pmatrix} 6 & 2 \\\\ 2 & 10 \\end{pmatrix}$"
        }
      ],
      "correct_indices": [
        "W8-T4-Q07-opt0"
      ],
      "explanation": "The off-diagonal terms split the cross-product coefficient in half: $a_{12} = a_{21} = 4/2 = 2$. The diagonal entries are the coefficients of $x^2$ and $y^2$, giving $\\begin{pmatrix} 3 & 2 \\\\ 2 & 5 \\end{pmatrix}$.",
      "hint": "Split the cross-term coefficient $4xy$ equally into two $2$'s."
    },
    {
      "id": "W8-T4-Q08",
      "week": 8,
      "tier": "extra",
      "topic": "Conformal Mapping and Laplace Invariance",
      "type": "single_select",
      "question": "If $f(z) = u(x,y) + i v(x,y)$ is an analytic complex function, then the coordinate transformation $(x, y) \\to (u, v)$ is conformal and preserves:",
      "options": [
        {
          "id": "W8-T4-Q08-opt0",
          "text": "Laplace's equation: $\\nabla_{x,y}^2 \\Phi = 0 \\iff \\nabla_{u,v}^2 \\Phi = 0$"
        },
        {
          "id": "W8-T4-Q08-opt1",
          "text": "The wave equation speed"
        },
        {
          "id": "W8-T4-Q08-opt2",
          "text": "Only horizontal lines"
        },
        {
          "id": "W8-T4-Q08-opt3",
          "text": "The direction of gravity"
        }
      ],
      "correct_indices": [
        "W8-T4-Q08-opt0"
      ],
      "explanation": "Conformal maps preserve angles and harmonicity: if $\\Phi$ satisfies Laplace's equation in the physical domain, it also satisfies Laplace's equation in the mapped domain, enabling solutions in complicated geometries.",
      "hint": "Laplace's equation is invariant under conformal transformations."
    },
    {
      "id": "W8-T4-Q09",
      "week": 8,
      "tier": "extra",
      "topic": "Rayleigh Quotient",
      "type": "single_select",
      "question": "For a real symmetric matrix $\\mathbf{A}$, the Rayleigh quotient $R(\\mathbf{x}) = \\frac{\\mathbf{x}^T \\mathbf{A}\\mathbf{x}}{\\mathbf{x}^T \\mathbf{x}}$ has maximum and minimum values equal to:",
      "options": [
        {
          "id": "W8-T4-Q09-opt0",
          "text": "$\\lambda_{\\max}$ and $\\lambda_{\\min}$, the largest and smallest eigenvalues of $\\mathbf{A}$"
        },
        {
          "id": "W8-T4-Q09-opt1",
          "text": "$\\det(\\mathbf{A})$ and $\\text{tr}(\\mathbf{A})$"
        },
        {
          "id": "W8-T4-Q09-opt2",
          "text": "$1$ and $-1$"
        },
        {
          "id": "W8-T4-Q09-opt3",
          "text": "$\\infty$ and $-\\infty$"
        }
      ],
      "correct_indices": [
        "W8-T4-Q09-opt0"
      ],
      "explanation": "By the Courant-Fischer min-max theorem, the Rayleigh quotient ranges between the minimum and maximum eigenvalues: $\\lambda_{\\min} \\le R(\\mathbf{x}) \\le \\lambda_{\\max}$.",
      "hint": "The extreme values of $R(\\mathbf{x})$ are the extreme eigenvalues of $\\mathbf{A}$."
    },
    {
      "id": "W8-T4-Q10",
      "week": 8,
      "tier": "extra",
      "topic": "Jordan Canonical Form",
      "type": "single_select",
      "question": "If a complex $n \\times n$ matrix $\\mathbf{A}$ cannot be diagonalised due to repeated eigenvalues with deficient eigenvectors, it can always be brought to:",
      "options": [
        {
          "id": "W8-T4-Q10-opt0",
          "text": "Jordan Canonical Form $\\mathbf{J} = \\mathbf{P}^{-1}\\mathbf{A}\\mathbf{P}$ containing Jordan blocks"
        },
        {
          "id": "W8-T4-Q10-opt1",
          "text": "Companion matrix form"
        },
        {
          "id": "W8-T4-Q10-opt2",
          "text": "A zero matrix"
        },
        {
          "id": "W8-T4-Q10-opt3",
          "text": "A symmetric matrix"
        }
      ],
      "correct_indices": [
        "W8-T4-Q10-opt0"
      ],
      "explanation": "Over the complex field $\\mathbb{C}$, every square matrix is similar to a Jordan canonical form composed of Jordan blocks $J_k(\\lambda)$ with eigenvalues on the diagonal and ones on the superdiagonal, representing generalized eigenvectors.",
      "hint": "Jordan blocks have the eigenvalue on the diagonal and 1s immediately above."
    }
  ]
};
