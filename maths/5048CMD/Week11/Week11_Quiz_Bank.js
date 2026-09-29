window.QUIZ_BANK_WEEK11 = {
  "module": "5048CMD Engineering Mathematics 2",
  "week": 11,
  "title": "Week 11: Comprehensive Revision & Exam Rehearsal",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W11-T1-Q01",
      "week": 11,
      "tier": "core",
      "topic": "Integrating Factor Identification",
      "type": "single_select",
      "question": "Which of the following is the integrating factor for the first-order linear ODE $\\frac{dy}{dx} + 3y = e^{2x}$?",
      "options": [
        {
          "id": "W11-T1-Q01-opt0",
          "text": "$\\mu(x) = e^{3x}$"
        },
        {
          "id": "W11-T1-Q01-opt1",
          "text": "$\\mu(x) = e^{-3x}$"
        },
        {
          "id": "W11-T1-Q01-opt2",
          "text": "$\\mu(x) = 3x$"
        },
        {
          "id": "W11-T1-Q01-opt3",
          "text": "$\\mu(x) = e^{2x}$"
        }
      ],
      "correct_indices": [
        "W11-T1-Q01-opt0"
      ],
      "explanation": "For $y' + P(x)y = Q(x)$ with $P(x) = 3$, the integrating factor is $\\mu(x) = \\exp(\\int 3\\,dx) = e^{3x}$.",
      "hint": "Evaluate $\\exp(\\int P(x)\\,dx)$."
    },
    {
      "id": "W11-T1-Q02",
      "week": 11,
      "tier": "core",
      "topic": "Homogeneous 2nd-Order ODE",
      "type": "single_select",
      "question": "What is the general solution to the second-order ODE $y'' - 9y = 0$?",
      "options": [
        {
          "id": "W11-T1-Q02-opt0",
          "text": "$y(x) = c_1 e^{3x} + c_2 e^{-3x}$"
        },
        {
          "id": "W11-T1-Q02-opt1",
          "text": "$y(x) = c_1 \\cos(3x) + c_2 \\sin(3x)$"
        },
        {
          "id": "W11-T1-Q02-opt2",
          "text": "$y(x) = (c_1 + c_2 x)e^{3x}$"
        },
        {
          "id": "W11-T1-Q02-opt3",
          "text": "$y(x) = c_1 e^{9x} + c_2 e^{-9x}$"
        }
      ],
      "correct_indices": [
        "W11-T1-Q02-opt0"
      ],
      "explanation": "The characteristic equation is $r^2 - 9 = 0 \\implies r = \\pm 3$. Distinct real roots give $y(x) = c_1 e^{3x} + c_2 e^{-3x}$.",
      "hint": "Find roots of the auxiliary equation $r^2 - 9 = 0$."
    },
    {
      "id": "W11-T1-Q03",
      "week": 11,
      "tier": "core",
      "topic": "Laplace Shift Property",
      "type": "single_select",
      "question": "What is the Laplace transform $\\mathcal{L}\\{e^{-4t} \\cos(2t)\\}$?",
      "options": [
        {
          "id": "W11-T1-Q03-opt0",
          "text": "$\\frac{s + 4}{(s + 4)^2 + 4}$"
        },
        {
          "id": "W11-T1-Q03-opt1",
          "text": "$\\frac{s}{(s + 4)^2 + 4}$"
        },
        {
          "id": "W11-T1-Q03-opt2",
          "text": "$\\frac{2}{(s + 4)^2 + 4}$"
        },
        {
          "id": "W11-T1-Q03-opt3",
          "text": "$\\frac{s - 4}{(s - 4)^2 + 4}$"
        }
      ],
      "correct_indices": [
        "W11-T1-Q03-opt0"
      ],
      "explanation": "By the first shift theorem, $\\mathcal{L}\\{e^{-at}f(t)\\} = F(s+a)$. Since $\\mathcal{L}\\{\\cos(2t)\\} = \\frac{s}{s^2 + 4}$, shifting $s \\to s + 4$ yields $\\frac{s+4}{(s+4)^2+4}$.",
      "hint": "Replace $s$ with $s - (-4) = s + 4$ in the transform of $\\cos(2t)$."
    },
    {
      "id": "W11-T1-Q04",
      "week": 11,
      "tier": "core",
      "topic": "Poisson Distribution Variance",
      "type": "single_select",
      "question": "For a Poisson random variable $X$ with parameter $\\lambda = 4$, what is the variance $\\text{Var}(X)$?",
      "options": [
        {
          "id": "W11-T1-Q04-opt0",
          "text": "$4$"
        },
        {
          "id": "W11-T1-Q04-opt1",
          "text": "$2$"
        },
        {
          "id": "W11-T1-Q04-opt2",
          "text": "$16$"
        },
        {
          "id": "W11-T1-Q04-opt3",
          "text": "$8$"
        }
      ],
      "correct_indices": [
        "W11-T1-Q04-opt0"
      ],
      "explanation": "For any Poisson distribution $X \\sim \\text{Poisson}(\\lambda)$, both the expectation and the variance equal the rate parameter: $\\text{E}[X] = \\text{Var}(X) = \\lambda = 4$.",
      "hint": "For Poisson distributions, mean equals variance."
    },
    {
      "id": "W11-T1-Q05",
      "week": 11,
      "tier": "core",
      "topic": "Odd Function Fourier Coefficients",
      "type": "single_select",
      "question": "If $f(x)$ is an odd periodic function on $[-\\pi, \\pi]$, which Fourier coefficients vanish identically?",
      "options": [
        {
          "id": "W11-T1-Q05-opt0",
          "text": "$a_0 = 0$ and $a_n = 0$ for all $n \\ge 1$"
        },
        {
          "id": "W11-T1-Q05-opt1",
          "text": "$b_n = 0$ for all $n \\ge 1$"
        },
        {
          "id": "W11-T1-Q05-opt2",
          "text": "Only $a_0 = 0$"
        },
        {
          "id": "W11-T1-Q05-opt3",
          "text": "None of the coefficients vanish"
        }
      ],
      "correct_indices": [
        "W11-T1-Q05-opt0"
      ],
      "explanation": "An odd function integrated symmetrically against even functions (constants and cosines) yields zero: $a_n = 0$ for all $n \\ge 0$. Only sine coefficients $b_n$ survive.",
      "hint": "Odd functions produce purely sine series."
    },
    {
      "id": "W11-T1-Q06",
      "week": 11,
      "tier": "core",
      "topic": "PDE Classification",
      "type": "single_select",
      "question": "The 1D heat equation $\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$ is classified as:",
      "options": [
        {
          "id": "W11-T1-Q06-opt0",
          "text": "Parabolic"
        },
        {
          "id": "W11-T1-Q06-opt1",
          "text": "Hyperbolic"
        },
        {
          "id": "W11-T1-Q06-opt2",
          "text": "Elliptic"
        },
        {
          "id": "W11-T1-Q06-opt3",
          "text": "Ordinary differential equation"
        }
      ],
      "correct_indices": [
        "W11-T1-Q06-opt0"
      ],
      "explanation": "The heat diffusion equation has discriminant $B^2 - 4AC = 0$, making it parabolic.",
      "hint": "Diffusion and heat flow are always parabolic."
    },
    {
      "id": "W11-T1-Q07",
      "week": 11,
      "tier": "core",
      "topic": "Diagonal Matrix Eigenvalues",
      "type": "single_select",
      "question": "What are the eigenvalues of the diagonal matrix $A = \\begin{pmatrix} 5 & 0 \\\\ 0 & -2 \\end{pmatrix}$?",
      "options": [
        {
          "id": "W11-T1-Q07-opt0",
          "text": "$\\lambda_1 = 5, \\lambda_2 = -2$"
        },
        {
          "id": "W11-T1-Q07-opt1",
          "text": "$\\lambda_1 = 5, \\lambda_2 = 2$"
        },
        {
          "id": "W11-T1-Q07-opt2",
          "text": "$\\lambda_1 = 3, \\lambda_2 = -10$"
        },
        {
          "id": "W11-T1-Q07-opt3",
          "text": "$\\lambda_1 = 1, \\lambda_2 = 1$"
        }
      ],
      "correct_indices": [
        "W11-T1-Q07-opt0"
      ],
      "explanation": "The eigenvalues of any diagonal matrix are simply its diagonal entries: $\\lambda_1 = 5$ and $\\lambda_2 = -2$.",
      "hint": "Read the eigenvalues directly from the main diagonal."
    },
    {
      "id": "W11-T1-Q08",
      "week": 11,
      "tier": "core",
      "topic": "Stationary Point of 2D Function",
      "type": "single_select",
      "question": "Find the stationary points of $f(x, y) = x^2 + y^2 - 4x + 6y + 13$.",
      "options": [
        {
          "id": "W11-T1-Q08-opt0",
          "text": "$(2, -3)$"
        },
        {
          "id": "W11-T1-Q08-opt1",
          "text": "$(-2, 3)$"
        },
        {
          "id": "W11-T1-Q08-opt2",
          "text": "$(4, -6)$"
        },
        {
          "id": "W11-T1-Q08-opt3",
          "text": "$(0, 0)$"
        }
      ],
      "correct_indices": [
        "W11-T1-Q08-opt0"
      ],
      "explanation": "Setting $\\nabla f = (2x - 4, 2y + 6) = (0, 0) \\implies x = 2, y = -3$.",
      "hint": "Set both partial derivatives $f_x = 0$ and $f_y = 0$."
    },
    {
      "id": "W11-T1-Q09",
      "week": 11,
      "tier": "core",
      "topic": "Divergence at Point",
      "type": "single_select",
      "question": "Evaluate the divergence $\\nabla \\cdot \\mathbf{F}$ of $\\mathbf{F} = (x^3, y^3, z^3)$ at the point $(1, 1, 1)$.",
      "options": [
        {
          "id": "W11-T1-Q09-opt0",
          "text": "$9$"
        },
        {
          "id": "W11-T1-Q09-opt1",
          "text": "$3$"
        },
        {
          "id": "W11-T1-Q09-opt2",
          "text": "$6$"
        },
        {
          "id": "W11-T1-Q09-opt3",
          "text": "$27$"
        }
      ],
      "correct_indices": [
        "W11-T1-Q09-opt0"
      ],
      "explanation": "$\\nabla \\cdot \\mathbf{F} = 3x^2 + 3y^2 + 3z^2$. Evaluating at $(1,1,1)$: $3(1) + 3(1) + 3(1) = 9$.",
      "hint": "Compute $3x^2 + 3y^2 + 3z^2$ and evaluate at $(1,1,1)$."
    },
    {
      "id": "W11-T1-Q10",
      "week": 11,
      "tier": "core",
      "topic": "Inverse Laplace of Monomial",
      "type": "single_select",
      "question": "What is the inverse Laplace transform $\\mathcal{L}^{-1}\\left\\{\\frac{6}{s^4}\\right\\}$?",
      "options": [
        {
          "id": "W11-T1-Q10-opt0",
          "text": "$t^3$"
        },
        {
          "id": "W11-T1-Q10-opt1",
          "text": "$6t^3$"
        },
        {
          "id": "W11-T1-Q10-opt2",
          "text": "$t^4$"
        },
        {
          "id": "W11-T1-Q10-opt3",
          "text": "$\\frac{t^3}{6}$"
        }
      ],
      "correct_indices": [
        "W11-T1-Q10-opt0"
      ],
      "explanation": "Since $\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}$, for $n=3$ we have $\\mathcal{L}\\{t^3\\} = \\frac{3!}{s^4} = \\frac{6}{s^4}$. Hence $\\mathcal{L}^{-1}\\{6/s^4\\} = t^3$.",
      "hint": "Recall that $3! = 6$."
    },
    {
      "id": "W11-T2-Q01",
      "week": 11,
      "tier": "should",
      "topic": "First-Order IVP",
      "type": "single_select",
      "question": "Solve the initial value problem $y' + 2y = 4$, with $y(0) = 5$.",
      "options": [
        {
          "id": "W11-T2-Q01-opt0",
          "text": "$y(t) = 2 + 3e^{-2t}$"
        },
        {
          "id": "W11-T2-Q01-opt1",
          "text": "$y(t) = 4 + e^{-2t}$"
        },
        {
          "id": "W11-T2-Q01-opt2",
          "text": "$y(t) = 2 + 5e^{-2t}$"
        },
        {
          "id": "W11-T2-Q01-opt3",
          "text": "$y(t) = 5e^{-2t}$"
        }
      ],
      "correct_indices": [
        "W11-T2-Q01-opt0"
      ],
      "explanation": "General solution: $y(t) = 2 + C e^{-2t}$. Initial condition $y(0) = 2 + C = 5 \\implies C = 3$. Hence $y(t) = 2 + 3e^{-2t}$.",
      "hint": "Find particular solution $y_p = 2$ and apply initial condition $y(0) = 5$."
    },
    {
      "id": "W11-T2-Q02",
      "week": 11,
      "tier": "should",
      "topic": "Undetermined Coefficients",
      "type": "single_select",
      "question": "Find the particular integral $y_p(x)$ for $y'' + 4y = 8e^{2x}$.",
      "options": [
        {
          "id": "W11-T2-Q02-opt0",
          "text": "$y_p(x) = e^{2x}$"
        },
        {
          "id": "W11-T2-Q02-opt1",
          "text": "$y_p(x) = 2e^{2x}$"
        },
        {
          "id": "W11-T2-Q02-opt2",
          "text": "$y_p(x) = 4e^{2x}$"
        },
        {
          "id": "W11-T2-Q02-opt3",
          "text": "$y_p(x) = 8e^{2x}$"
        }
      ],
      "correct_indices": [
        "W11-T2-Q02-opt0"
      ],
      "explanation": "Trial solution: $y_p = A e^{2x}$. Substitute: $4A e^{2x} + 4A e^{2x} = 8A e^{2x} = 8e^{2x} \\implies A = 1$.",
      "hint": "Try $y_p = A e^{2x}$ and solve for $A$."
    },
    {
      "id": "W11-T2-Q03",
      "week": 11,
      "tier": "should",
      "topic": "Delta Function Response",
      "type": "single_select",
      "question": "Using Laplace transforms, find the solution to $y' + 3y = \\delta(t - 2)$ with $y(0) = 0$.",
      "options": [
        {
          "id": "W11-T2-Q03-opt0",
          "text": "$y(t) = u(t - 2) e^{-3(t - 2)}$"
        },
        {
          "id": "W11-T2-Q03-opt1",
          "text": "$y(t) = e^{-3t} u(t - 2)$"
        },
        {
          "id": "W11-T2-Q03-opt2",
          "text": "$y(t) = e^{-3(t - 2)}$"
        },
        {
          "id": "W11-T2-Q03-opt3",
          "text": "$y(t) = \\delta(t - 2) e^{-3t}$"
        }
      ],
      "correct_indices": [
        "W11-T2-Q03-opt0"
      ],
      "explanation": "$(s + 3)Y(s) = e^{-2s} \\implies Y(s) = e^{-2s} \\frac{1}{s+3}$. Applying the second shift theorem gives $y(t) = u(t - 2) e^{-3(t - 2)}$.",
      "hint": "Transform $\\delta(t-2)$ into $e^{-2s}$ and invert using the step function $u(t-2)$."
    },
    {
      "id": "W11-T2-Q04",
      "week": 11,
      "tier": "should",
      "topic": "Sample Mean Distribution",
      "type": "single_select",
      "question": "If $X_1, X_2, \\dots, X_n$ are i.i.d. random variables with $X_i \\sim N(\\mu, \\sigma^2)$, what is the distribution of the sample mean $\\bar{X}$?",
      "options": [
        {
          "id": "W11-T2-Q04-opt0",
          "text": "$\\bar{X} \\sim N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$"
        },
        {
          "id": "W11-T2-Q04-opt1",
          "text": "$\\bar{X} \\sim N(\\mu, \\sigma^2)$"
        },
        {
          "id": "W11-T2-Q04-opt2",
          "text": "$\\bar{X} \\sim N\\left(\\frac{\\mu}{n}, \\frac{\\sigma^2}{n^2}\\right)$"
        },
        {
          "id": "W11-T2-Q04-opt3",
          "text": "$\\bar{X} \\sim N\\left(\\mu, \\frac{\\sigma}{\\sqrt{n}}\\right)$"
        }
      ],
      "correct_indices": [
        "W11-T2-Q04-opt0"
      ],
      "explanation": "By standard properties of normal distributions, $\\text{E}[\\bar{X}] = \\mu$ and $\\text{Var}(\\bar{X}) = \\frac{\\sigma^2}{n}$, so $\\bar{X} \\sim N(\\mu, \\sigma^2/n)$.",
      "hint": "Variance of the mean scales inversely with sample size $n$."
    },
    {
      "id": "W11-T2-Q05",
      "week": 11,
      "tier": "should",
      "topic": "d'Alembert's Formula",
      "type": "single_select",
      "question": "For the wave equation $u_{tt} = c^2 u_{xx}$, d'Alembert's formula gives the general solution as:",
      "options": [
        {
          "id": "W11-T2-Q05-opt0",
          "text": "$u(x, t) = \\phi(x - ct) + \\psi(x + ct)$"
        },
        {
          "id": "W11-T2-Q05-opt1",
          "text": "$u(x, t) = \\phi(x) e^{-ct} + \\psi(x) e^{ct}$"
        },
        {
          "id": "W11-T2-Q05-opt2",
          "text": "$u(x, t) = \\phi(x - ct) \\psi(x + ct)$"
        },
        {
          "id": "W11-T2-Q05-opt3",
          "text": "$u(x, t) = \\phi(x) \\cos(ct) + \\psi(x) \\sin(ct)$"
        }
      ],
      "correct_indices": [
        "W11-T2-Q05-opt0"
      ],
      "explanation": "d'Alembert's formula decomposes any solution of the 1D wave equation into a superposition of forward and backward traveling waves: $\\phi(x - ct) + \\psi(x + ct)$.",
      "hint": "Wave motion on an infinite line consists of right- and left-traveling waves."
    },
    {
      "id": "W11-T2-Q06",
      "week": 11,
      "tier": "should",
      "topic": "Linear System Phase Portrait",
      "type": "single_select",
      "question": "Classify the origin $(0,0)$ for the linear system $\\dot{\\mathbf{x}} = A\\mathbf{x}$ where matrix $A$ has eigenvalues $\\lambda_1 = -1$ and $\\lambda_2 = -4$.",
      "options": [
        {
          "id": "W11-T2-Q06-opt0",
          "text": "Stable node (sink)"
        },
        {
          "id": "W11-T2-Q06-opt1",
          "text": "Unstable node (source)"
        },
        {
          "id": "W11-T2-Q06-opt2",
          "text": "Saddle point"
        },
        {
          "id": "W11-T2-Q06-opt3",
          "text": "Stable focus (spiral sink)"
        }
      ],
      "correct_indices": [
        "W11-T2-Q06-opt0"
      ],
      "explanation": "Both eigenvalues are real, negative, and distinct ($-4 < -1 < 0$). All trajectories decay asymptotically to the origin along straight lines, forming a stable node.",
      "hint": "Real negative eigenvalues imply exponential decay without oscillation."
    },
    {
      "id": "W11-T2-Q07",
      "week": 11,
      "tier": "should",
      "topic": "Steepest Ascent Vector",
      "type": "single_select",
      "question": "Find the maximum rate of change of $f(x, y) = 3x^2 + 4y^2$ at $(1, 1)$ and the direction in which it occurs.",
      "options": [
        {
          "id": "W11-T2-Q07-opt0",
          "text": "Magnitude $10$, in the direction of $(6, 8)$"
        },
        {
          "id": "W11-T2-Q07-opt1",
          "text": "Magnitude $14$, in the direction of $(1, 1)$"
        },
        {
          "id": "W11-T2-Q07-opt2",
          "text": "Magnitude $7$, in the direction of $(3, 4)$"
        },
        {
          "id": "W11-T2-Q07-opt3",
          "text": "Magnitude $10$, in the direction of $(-6, -8)$"
        }
      ],
      "correct_indices": [
        "W11-T2-Q07-opt0"
      ],
      "explanation": "$\\nabla f = (6x, 8y) \\implies \\nabla f(1, 1) = (6, 8)$. The direction of maximum increase is $\\nabla f = (6, 8)$, and the rate of increase is $|\\nabla f| = \\sqrt{6^2 + 8^2} = 10$.",
      "hint": "Maximum directional derivative equals the gradient magnitude $|\\nabla f|$."
    },
    {
      "id": "W11-T2-Q08",
      "week": 11,
      "tier": "should",
      "topic": "Repeated 2D Integration",
      "type": "single_select",
      "question": "Evaluate the double integral $\\int_0^2 \\int_0^1 (x^2 y) \\, dy \\, dx$.",
      "options": [
        {
          "id": "W11-T2-Q08-opt0",
          "text": "$\\frac{4}{3}$"
        },
        {
          "id": "W11-T2-Q08-opt1",
          "text": "$\\frac{8}{3}$"
        },
        {
          "id": "W11-T2-Q08-opt2",
          "text": "$2$"
        },
        {
          "id": "W11-T2-Q08-opt3",
          "text": "$\\frac{2}{3}$"
        }
      ],
      "correct_indices": [
        "W11-T2-Q08-opt0"
      ],
      "explanation": "$\\left(\\int_0^2 x^2\\,dx\\right)\\left(\\int_0^1 y\\,dy\\right) = [x^3/3]_0^2 [y^2/2]_0^1 = \\frac{8}{3} \\times \\frac{1}{2} = \\frac{4}{3}$.",
      "hint": "Multiply the single integral in $x$ by the single integral in $y$."
    },
    {
      "id": "W11-T2-Q09",
      "week": 11,
      "tier": "should",
      "topic": "Diagonalisability Criterion",
      "type": "single_select",
      "question": "What is the necessary and sufficient condition for an $n \\times n$ matrix $A$ to be diagonalisable?",
      "options": [
        {
          "id": "W11-T2-Q09-opt0",
          "text": "$A$ has $n$ linearly independent eigenvectors"
        },
        {
          "id": "W11-T2-Q09-opt1",
          "text": "$A$ is symmetric"
        },
        {
          "id": "W11-T2-Q09-opt2",
          "text": "$\\det(A) \\ne 0$"
        },
        {
          "id": "W11-T2-Q09-opt3",
          "text": "$A$ has zero trace"
        }
      ],
      "correct_indices": [
        "W11-T2-Q09-opt0"
      ],
      "explanation": "A matrix is diagonalisable if and only if there exists a basis of eigenvectors spanning $\\mathbb{R}^n$ (i.e. geometric multiplicity equals algebraic multiplicity for all eigenvalues).",
      "hint": "Diagonalisation requires a full set of $n$ independent eigenvectors."
    },
    {
      "id": "W11-T2-Q10",
      "week": 11,
      "tier": "should",
      "topic": "Green's Theorem Area Formula",
      "type": "single_select",
      "question": "Using Green's Theorem, what is the area of a region $D$ enclosed by a simple closed curve $C$?",
      "options": [
        {
          "id": "W11-T2-Q10-opt0",
          "text": "$\\text{Area} = \\frac{1}{2}\\oint_C (x\\,dy - y\\,dx)$"
        },
        {
          "id": "W11-T2-Q10-opt1",
          "text": "$\\text{Area} = \\oint_C (x\\,dx + y\\,dy)$"
        },
        {
          "id": "W11-T2-Q10-opt2",
          "text": "$\\text{Area} = \\oint_C (x\\,dy + y\\,dx)$"
        },
        {
          "id": "W11-T2-Q10-opt3",
          "text": "$\\text{Area} = \\frac{1}{2}\\oint_C (x\\,dx - y\\,dy)$"
        }
      ],
      "correct_indices": [
        "W11-T2-Q10-opt0"
      ],
      "explanation": "By Green's theorem, $\\frac{1}{2}\\oint_C (x\\,dy - y\\,dx) = \\frac{1}{2}\\iint_D (1 - (-1))\\,dA = \\iint_D 1\\,dA = \\text{Area}(D)$.",
      "hint": "Green's area formula uses $P = -y/2$ and $Q = x/2$."
    },
    {
      "id": "W11-T3-Q01",
      "week": 11,
      "tier": "nice_to_know",
      "topic": "Bernoulli Equation Solution",
      "type": "single_select",
      "question": "Solve the Bernoulli ODE $y' + \\frac{1}{x}y = x y^2$.",
      "options": [
        {
          "id": "W11-T3-Q01-opt0",
          "text": "$y(x) = \\frac{1}{-x^2 + Cx}$"
        },
        {
          "id": "W11-T3-Q01-opt1",
          "text": "$y(x) = x^2 + C$"
        },
        {
          "id": "W11-T3-Q01-opt2",
          "text": "$y(x) = \\frac{1}{x + C}$"
        },
        {
          "id": "W11-T3-Q01-opt3",
          "text": "$y(x) = Ce^{-x^2}$"
        }
      ],
      "correct_indices": [
        "W11-T3-Q01-opt0"
      ],
      "explanation": "Substitute $v = y^{1-2} = y^{-1}$. Then $v' - \\frac{1}{x}v = -x$. Integrating factor $\\mu = 1/x \\implies (v/x)' = -1 \\implies v/x = -x + C \\implies v = -x^2 + Cx \\implies y = \\frac{1}{-x^2 + Cx}$.",
      "hint": "Use substitution $v = y^{-1}$ to linearise the equation."
    },
    {
      "id": "W11-T3-Q02",
      "week": 11,
      "tier": "nice_to_know",
      "topic": "Radial Laplace Solution",
      "type": "single_select",
      "question": "Determine the steady-state temperature profile $u(r)$ in an annular pipe $r_1 \\le r \\le r_2$ governed by $\\frac{1}{r}\\frac{d}{dr}\\left(r \\frac{du}{dr}\\right) = 0$.",
      "options": [
        {
          "id": "W11-T3-Q02-opt0",
          "text": "$u(r) = C_1 \\ln r + C_2$"
        },
        {
          "id": "W11-T3-Q02-opt1",
          "text": "$u(r) = C_1 r^2 + C_2$"
        },
        {
          "id": "W11-T3-Q02-opt2",
          "text": "$u(r) = C_1 e^r + C_2$"
        },
        {
          "id": "W11-T3-Q02-opt3",
          "text": "$u(r) = \\frac{C_1}{r} + C_2$"
        }
      ],
      "correct_indices": [
        "W11-T3-Q02-opt0"
      ],
      "explanation": "Integrating once: $r\\frac{du}{dr} = C_1 \\implies \\frac{du}{dr} = \\frac{C_1}{r}$. Integrating again yields $u(r) = C_1 \\ln r + C_2$.",
      "hint": "Integrate twice with respect to $r$."
    },
    {
      "id": "W11-T3-Q03",
      "week": 11,
      "tier": "nice_to_know",
      "topic": "Nilpotent Matrix Exponential",
      "type": "single_select",
      "question": "Compute the matrix exponential $e^{At}$ for $A = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$.",
      "options": [
        {
          "id": "W11-T3-Q03-opt0",
          "text": "$\\begin{pmatrix} 1 & t \\\\ 0 & 1 \\end{pmatrix}$"
        },
        {
          "id": "W11-T3-Q03-opt1",
          "text": "$\\begin{pmatrix} e^t & t \\\\ 0 & e^t \\end{pmatrix}$"
        },
        {
          "id": "W11-T3-Q03-opt2",
          "text": "$\\begin{pmatrix} 1 & e^t \\\\ 0 & 1 \\end{pmatrix}$"
        },
        {
          "id": "W11-T3-Q03-opt3",
          "text": "$\\begin{pmatrix} 0 & t \\\\ 0 & 0 \\end{pmatrix}$"
        }
      ],
      "correct_indices": [
        "W11-T3-Q03-opt0"
      ],
      "explanation": "Since $A^2 = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$, the Taylor series terminates after two terms: $e^{At} = I + At = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 0 & t \\\\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 1 & t \\\\ 0 & 1 \\end{pmatrix}$.",
      "hint": "Matrix $A$ is nilpotent of degree 2 ($A^2 = 0$)."
    },
    {
      "id": "W11-T3-Q04",
      "week": 11,
      "tier": "nice_to_know",
      "topic": "Dirichlet Sinc Integral",
      "type": "single_select",
      "question": "What is the value of $\\int_0^\\infty \\frac{\\sin t}{t} \\, dt$ using Laplace transform properties?",
      "options": [
        {
          "id": "W11-T3-Q04-opt0",
          "text": "$\\frac{\\pi}{2}$"
        },
        {
          "id": "W11-T3-Q04-opt1",
          "text": "$\\pi$"
        },
        {
          "id": "W11-T3-Q04-opt2",
          "text": "$1$"
        },
        {
          "id": "W11-T3-Q04-opt3",
          "text": "$\\frac{\\pi}{4}$"
        }
      ],
      "correct_indices": [
        "W11-T3-Q04-opt0"
      ],
      "explanation": "Using $\\int_0^\\infty \\frac{f(t)}{t}dt = \\int_0^\\infty F(s)ds$ with $F(s) = \\frac{1}{s^2+1}$: $\\int_0^\\infty \\frac{1}{s^2+1}ds = [\\arctan s]_0^\\infty = \\frac{\\pi}{2}$.",
      "hint": "Use the transform property $\\int_0^\\infty \\frac{f(t)}{t}\\,dt = \\int_0^\\infty F(s)\\,ds$."
    },
    {
      "id": "W11-T3-Q05",
      "week": 11,
      "tier": "nice_to_know",
      "topic": "Parseval's Identity",
      "type": "single_select",
      "question": "Under Parseval's identity for a $2\\pi$-periodic function $f(x)$, the average power $\\frac{1}{2\\pi}\\int_{-\\pi}^\\pi |f(x)|^2 dx$ equals:",
      "options": [
        {
          "id": "W11-T3-Q05-opt0",
          "text": "$a_0^2 + \\frac{1}{2}\\sum_{n=1}^\\infty (a_n^2 + b_n^2)$"
        },
        {
          "id": "W11-T3-Q05-opt1",
          "text": "$\\sum_{n=1}^\\infty (a_n + b_n)$"
        },
        {
          "id": "W11-T3-Q05-opt2",
          "text": "$a_0 + \\sum_{n=1}^\\infty (a_n^2 + b_n^2)$"
        },
        {
          "id": "W11-T3-Q05-opt3",
          "text": "$\\frac{1}{2}\\sum_{n=1}^\\infty (a_n^2 - b_n^2)$"
        }
      ],
      "correct_indices": [
        "W11-T3-Q05-opt0"
      ],
      "explanation": "Parseval's identity equates time-domain signal power with the sum of squared harmonic Fourier coefficients: $\\frac{1}{2\\pi}\\int_{-\\pi}^\\pi f(x)^2 dx = a_0^2 + \\frac{1}{2}\\sum_{n=1}^\\infty (a_n^2 + b_n^2)$.",
      "hint": "Energy in space/time equals energy across frequency components."
    },
    {
      "id": "W11-T3-Q06",
      "week": 11,
      "tier": "nice_to_know",
      "topic": "Regression Hypothesis Testing",
      "type": "single_select",
      "question": "A linear regression model $Y = \\beta_0 + \\beta_1 X + \\epsilon$ has estimated slope $\\hat{\\beta}_1 = 2.5$ with standard error $\\text{SE}(\\hat{\\beta}_1) = 0.5$. What is the $t$-statistic for testing $H_0: \\beta_1 = 0$?",
      "options": [
        {
          "id": "W11-T3-Q06-opt0",
          "text": "$t = 5.0$"
        },
        {
          "id": "W11-T3-Q06-opt1",
          "text": "$t = 1.25$"
        },
        {
          "id": "W11-T3-Q06-opt2",
          "text": "$t = 2.0$"
        },
        {
          "id": "W11-T3-Q06-opt3",
          "text": "$t = 0.2$"
        }
      ],
      "correct_indices": [
        "W11-T3-Q06-opt0"
      ],
      "explanation": "The $t$-statistic is $t = \\frac{\\hat{\\beta}_1 - 0}{\\text{SE}(\\hat{\\beta}_1)} = \\frac{2.5}{0.5} = 5.0$.",
      "hint": "Divide the coefficient estimate by its standard error."
    },
    {
      "id": "W11-T3-Q07",
      "week": 11,
      "tier": "nice_to_know",
      "topic": "Zero Net Flux Field",
      "type": "single_select",
      "question": "Evaluate the surface integral $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$ for $\\mathbf{F} = (2x, 3y, -5z)$ across any closed smooth surface enclosing volume $V$.",
      "options": [
        {
          "id": "W11-T3-Q07-opt0",
          "text": "$0$"
        },
        {
          "id": "W11-T3-Q07-opt1",
          "text": "$10V$"
        },
        {
          "id": "W11-T3-Q07-opt2",
          "text": "$5V$"
        },
        {
          "id": "W11-T3-Q07-opt3",
          "text": "$-5V$"
        }
      ],
      "correct_indices": [
        "W11-T3-Q07-opt0"
      ],
      "explanation": "By the Divergence Theorem: $\\iint_S \\mathbf{F}\\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F})\\,dV$. Since $\\nabla \\cdot \\mathbf{F} = 2 + 3 - 5 = 0$, the total outward flux is identically zero.",
      "hint": "Calculate the divergence: $\\nabla \\cdot \\mathbf{F} = 2 + 3 - 5 = 0$."
    },
    {
      "id": "W11-T3-Q08",
      "week": 11,
      "tier": "nice_to_know",
      "topic": "Second Derivative Test for Extrema",
      "type": "single_select",
      "question": "If $f(x, y)$ has continuous partial derivatives and Hessian determinant $D = f_{xx} f_{yy} - (f_{xy})^2 > 0$ with $f_{xx} < 0$ at a critical point $(x_0, y_0)$, then $(x_0, y_0)$ is a:",
      "options": [
        {
          "id": "W11-T3-Q08-opt0",
          "text": "Local maximum"
        },
        {
          "id": "W11-T3-Q08-opt1",
          "text": "Local minimum"
        },
        {
          "id": "W11-T3-Q08-opt2",
          "text": "Saddle point"
        },
        {
          "id": "W11-T3-Q08-opt3",
          "text": "Inconclusive test"
        }
      ],
      "correct_indices": [
        "W11-T3-Q08-opt0"
      ],
      "explanation": "By the second partial derivative test: $D > 0$ with $f_{xx} < 0$ means the surface curves downwards in every direction, establishing a local maximum.",
      "hint": "$D > 0$ guarantees an extremum, and $f_{xx} < 0$ indicates downward concavity."
    },
    {
      "id": "W11-T3-Q09",
      "week": 11,
      "tier": "nice_to_know",
      "topic": "Periodic Square Wave Transform",
      "type": "single_select",
      "question": "What is the Laplace transform of a square wave of period $T = 2$ defined on $[0, 2)$ by $f(t) = 1$ for $0 \\le t < 1$ and $f(t) = 0$ for $1 \\le t < 2$?",
      "options": [
        {
          "id": "W11-T3-Q09-opt0",
          "text": "$\\frac{1}{s(1 + e^{-s})}$"
        },
        {
          "id": "W11-T3-Q09-opt1",
          "text": "$\\frac{1}{s(1 - e^{-2s})}$"
        },
        {
          "id": "W11-T3-Q09-opt2",
          "text": "$\\frac{1 - e^{-2s}}{s}$"
        },
        {
          "id": "W11-T3-Q09-opt3",
          "text": "$\\frac{e^{-s}}{s(1 + e^{-s})}$"
        }
      ],
      "correct_indices": [
        "W11-T3-Q09-opt0"
      ],
      "explanation": "$\\mathcal{L}\\{f\\} = \\frac{\\int_0^1 e^{-st}dt}{1 - e^{-2s}} = \\frac{(1 - e^{-s})/s}{1 - e^{-2s}} = \\frac{1 - e^{-s}}{s(1 - e^{-s})(1 + e^{-s})} = \\frac{1}{s(1 + e^{-s})}$.",
      "hint": "Use the formula $\\frac{\\int_0^T f(t)e^{-st}dt}{1 - e^{-sT}}$ and factor $(1 - e^{-2s}) = (1 - e^{-s})(1 + e^{-s})$."
    },
    {
      "id": "W11-T3-Q10",
      "week": 11,
      "tier": "nice_to_know",
      "topic": "Cauchy-Euler Equation",
      "type": "single_select",
      "question": "Solve the Cauchy-Euler differential equation $x^2 y'' - 4x y' + 6y = 0$ for $x > 0$.",
      "options": [
        {
          "id": "W11-T3-Q10-opt0",
          "text": "$y(x) = c_1 x^2 + c_2 x^3$"
        },
        {
          "id": "W11-T3-Q10-opt1",
          "text": "$y(x) = c_1 x^2 + c_2 x^{-3}$"
        },
        {
          "id": "W11-T3-Q10-opt2",
          "text": "$y(x) = c_1 e^{2x} + c_2 e^{3x}$"
        },
        {
          "id": "W11-T3-Q10-opt3",
          "text": "$y(x) = c_1 x + c_2 x^6$"
        }
      ],
      "correct_indices": [
        "W11-T3-Q10-opt0"
      ],
      "explanation": "Substitute $y = x^m \\implies m(m-1) - 4m + 6 = 0 \\implies m^2 - 5m + 6 = 0 \\implies (m-2)(m-3) = 0 \\implies m = 2, 3$. The general solution is $y(x) = c_1 x^2 + c_2 x^3$.",
      "hint": "Try $y = x^m$ to find the indicial roots of $m(m-1) - 4m + 6 = 0$."
    },
    {
      "id": "W11-T4-Q01",
      "week": 11,
      "tier": "extra",
      "topic": "Mixed Boundary BVP Eigenvalues",
      "type": "single_select",
      "question": "For the boundary value problem $y'' + \\lambda y = 0$ with $y(0) = 0$ and $y'(L) = 0$, what are the eigenvalues $\\lambda_n$?",
      "options": [
        {
          "id": "W11-T4-Q01-opt0",
          "text": "$\\lambda_n = \\left(\\frac{(2n - 1)\\pi}{2L}\\right)^2$ for $n = 1, 2, \\dots$"
        },
        {
          "id": "W11-T4-Q01-opt1",
          "text": "$\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2$ for $n = 1, 2, \\dots$"
        },
        {
          "id": "W11-T4-Q01-opt2",
          "text": "$\\lambda_n = \\left(\\frac{(2n)\\pi}{L}\\right)^2$ for $n = 1, 2, \\dots$"
        },
        {
          "id": "W11-T4-Q01-opt3",
          "text": "$\\lambda_n = \\frac{n\\pi}{2L}$"
        }
      ],
      "correct_indices": [
        "W11-T4-Q01-opt0"
      ],
      "explanation": "$y(0) = 0 \\implies y(x) = C \\sin(\\sqrt{\\lambda} x)$. The derivative condition $y'(L) = C\\sqrt{\\lambda}\\cos(\\sqrt{\\lambda}L) = 0 \\implies \\sqrt{\\lambda}L = \\frac{(2n-1)\\pi}{2} \\implies \\lambda_n = \\left(\\frac{(2n-1)\\pi}{2L}\\right)^2$.",
      "hint": "The derivative vanishing at $x=L$ selects cosine zeros at odd multiples of $\\pi/2$."
    },
    {
      "id": "W11-T4-Q02",
      "week": 11,
      "tier": "extra",
      "topic": "Clockwise Line Integral",
      "type": "single_select",
      "question": "Compute the line integral $\\oint_C (y^3 \\, dx - x^3 \\, dy)$ around the circle $x^2 + y^2 = R^2$ oriented clockwise.",
      "options": [
        {
          "id": "W11-T4-Q02-opt0",
          "text": "$\\frac{3\\pi}{2} R^4$"
        },
        {
          "id": "W11-T4-Q02-opt1",
          "text": "$-\\frac{3\\pi}{2} R^4$"
        },
        {
          "id": "W11-T4-Q02-opt2",
          "text": "$3\\pi R^4$"
        },
        {
          "id": "W11-T4-Q02-opt3",
          "text": "$0$"
        }
      ],
      "correct_indices": [
        "W11-T4-Q02-opt0"
      ],
      "explanation": "For standard counterclockwise orientation, Green's Theorem gives $\\iint_D (-3x^2 - 3y^2)\\,dA = -3(2\\pi)(R^4/4) = -\\frac{3\\pi}{2}R^4$. Reversing to clockwise flips the sign to $+\\frac{3\\pi}{2} R^4$.",
      "hint": "Green's Theorem applies with a minus sign for clockwise orientation."
    },
    {
      "id": "W11-T4-Q03",
      "week": 11,
      "tier": "extra",
      "topic": "Method of Characteristics",
      "type": "single_select",
      "question": "Solve the first-order PDE $2 \\frac{\\partial u}{\\partial x} + 3 \\frac{\\partial u}{\\partial y} = 0$ with initial condition $u(x, 0) = \\sin(x)$.",
      "options": [
        {
          "id": "W11-T4-Q03-opt0",
          "text": "$u(x, y) = \\sin\\left(x - \\frac{2}{3}y\\right)$"
        },
        {
          "id": "W11-T4-Q03-opt1",
          "text": "$u(x, y) = \\sin\\left(x + \\frac{2}{3}y\\right)$"
        },
        {
          "id": "W11-T4-Q03-opt2",
          "text": "$u(x, y) = \\sin\\left(x - \\frac{3}{2}y\\right)$"
        },
        {
          "id": "W11-T4-Q03-opt3",
          "text": "$u(x, y) = e^{-3y/2} \\sin(x)$"
        }
      ],
      "correct_indices": [
        "W11-T4-Q03-opt0"
      ],
      "explanation": "Characteristic curves satisfy $\\frac{dx}{2} = \\frac{dy}{3} \\implies 3x - 2y = C \\implies x - \\frac{2}{3}y = C_1$. General solution is $u(x,y) = f(x - \\frac{2}{3}y)$. With $u(x,0) = f(x) = \\sin(x)$, $u(x,y) = \\sin(x - \\frac{2}{3}y)$.",
      "hint": "Find the characteristic lines where $3x - 2y = \\text{constant}$."
    },
    {
      "id": "W11-T4-Q04",
      "week": 11,
      "tier": "extra",
      "topic": "Logarithmic Transform Inversion",
      "type": "single_select",
      "question": "Find the inverse Laplace transform of $F(s) = \\ln\\left(\\frac{s + 2}{s + 1}\\right)$.",
      "options": [
        {
          "id": "W11-T4-Q04-opt0",
          "text": "$f(t) = \\frac{e^{-t} - e^{-2t}}{t}$"
        },
        {
          "id": "W11-T4-Q04-opt1",
          "text": "$f(t) = \\frac{e^{-2t} - e^{-t}}{t}$"
        },
        {
          "id": "W11-T4-Q04-opt2",
          "text": "$f(t) = e^{-t} - e^{-2t}$"
        },
        {
          "id": "W11-T4-Q04-opt3",
          "text": "$f(t) = \\frac{\\ln(t)}{t}$"
        }
      ],
      "correct_indices": [
        "W11-T4-Q04-opt0"
      ],
      "explanation": "Using $\\mathcal{L}\\{t f(t)\\} = -F'(s)$: $F'(s) = \\frac{1}{s+2} - \\frac{1}{s+1}$. Then $-F'(s) = \\frac{1}{s+1} - \\frac{1}{s+2}$, which inverts to $e^{-t} - e^{-2t}$. Dividing by $t$ gives $f(t) = \\frac{e^{-t} - e^{-2t}}{t}$.",
      "hint": "Differentiate $F(s)$ with respect to $s$ and apply the $t$-multiplication rule."
    },
    {
      "id": "W11-T4-Q05",
      "week": 11,
      "tier": "extra",
      "topic": "Mean Value Property of Harmonics",
      "type": "single_select",
      "question": "What is the value of a harmonic function $u(r, \\theta)$ on the unit disk evaluated at the center $r = 0$ via the Poisson integral formula?",
      "options": [
        {
          "id": "W11-T4-Q05-opt0",
          "text": "$u(0) = \\frac{1}{2\\pi}\\int_0^{2\\pi} u(1, \\theta) \\, d\\theta$ (Mean Value Property)"
        },
        {
          "id": "W11-T4-Q05-opt1",
          "text": "$u(0) = 0$"
        },
        {
          "id": "W11-T4-Q05-opt2",
          "text": "$u(0) = \\max_{\\theta} u(1, \\theta)$"
        },
        {
          "id": "W11-T4-Q05-opt3",
          "text": "$u(0) = \\int_0^{2\\pi} u(1, \\theta)^2 \\, d\\theta$"
        }
      ],
      "correct_indices": [
        "W11-T4-Q05-opt0"
      ],
      "explanation": "The Mean Value Property of harmonic functions states that the value at the center of any circle equals the arithmetic average of its values along the boundary circumference.",
      "hint": "Harmonic functions satisfy the Mean Value Property."
    },
    {
      "id": "W11-T4-Q06",
      "week": 11,
      "tier": "extra",
      "topic": "Spectral Theorem for Symmetric Matrices",
      "type": "single_select",
      "question": "Let $A$ be a $3 \\times 3$ real symmetric matrix with eigenvalues $\\lambda = 1, 2, 5$. Which statement is guaranteed regarding its eigenvectors?",
      "options": [
        {
          "id": "W11-T4-Q06-opt0",
          "text": "Eigenvectors corresponding to distinct eigenvalues are mutually orthogonal"
        },
        {
          "id": "W11-T4-Q06-opt1",
          "text": "All eigenvectors have determinant zero"
        },
        {
          "id": "W11-T4-Q06-opt2",
          "text": "Eigenvectors form complex conjugate pairs"
        },
        {
          "id": "W11-T4-Q06-opt3",
          "text": "The eigenvectors are collinear"
        }
      ],
      "correct_indices": [
        "W11-T4-Q06-opt0"
      ],
      "explanation": "By the Spectral Theorem for real symmetric matrices, eigenvectors corresponding to distinct eigenvalues are automatically mutually orthogonal.",
      "hint": "Real symmetric matrices have an orthonormal eigenbasis."
    },
    {
      "id": "W11-T4-Q07",
      "week": 11,
      "tier": "extra",
      "topic": "Derivative Sifting Property",
      "type": "single_select",
      "question": "Evaluate $\\int_{-\\infty}^\\infty \\delta'(t - 3) e^{-2t} \\, dt$.",
      "options": [
        {
          "id": "W11-T4-Q07-opt0",
          "text": "$2e^{-6}$"
        },
        {
          "id": "W11-T4-Q07-opt1",
          "text": "$-2e^{-6}$"
        },
        {
          "id": "W11-T4-Q07-opt2",
          "text": "$e^{-6}$"
        },
        {
          "id": "W11-T4-Q07-opt3",
          "text": "$0$"
        }
      ],
      "correct_indices": [
        "W11-T4-Q07-opt0"
      ],
      "explanation": "By the distributional derivative property of the Dirac delta: $\\int_{-\\infty}^\\infty \\delta'(t - a) f(t)\\,dt = -f'(a)$. Here $f(t) = e^{-2t} \\implies f'(t) = -2e^{-2t}$, so $-f'(3) = -(-2e^{-6}) = 2e^{-6}$.",
      "hint": "Remember the negative sign in the derivative sifting property: $-f'(a)$."
    },
    {
      "id": "W11-T4-Q08",
      "week": 11,
      "tier": "extra",
      "topic": "Center Equilibrium Condition",
      "type": "single_select",
      "question": "Find the condition for the 2D linear differential system $\\dot{\\mathbf{x}} = A\\mathbf{x}$ to possess a center (purely periodic orbits).",
      "options": [
        {
          "id": "W11-T4-Q08-opt0",
          "text": "$\\text{Tr}(A) = 0$ and $\\det(A) > 0$"
        },
        {
          "id": "W11-T4-Q08-opt1",
          "text": "$\\text{Tr}(A) < 0$ and $\\det(A) > 0$"
        },
        {
          "id": "W11-T4-Q08-opt2",
          "text": "$\\det(A) < 0$"
        },
        {
          "id": "W11-T4-Q08-opt3",
          "text": "$\\text{Tr}(A)^2 - 4\\det(A) = 0$"
        }
      ],
      "correct_indices": [
        "W11-T4-Q08-opt0"
      ],
      "explanation": "The characteristic equation is $\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0$. For purely imaginary roots $\\pm i\\omega$, we need zero linear term ($\\text{Tr}(A) = 0$) and positive constant term ($\\det(A) > 0$).",
      "hint": "Purely imaginary eigenvalues require zero trace and positive determinant."
    },
    {
      "id": "W11-T4-Q09",
      "week": 11,
      "tier": "extra",
      "topic": "Independent Normal Sums",
      "type": "single_select",
      "question": "For independent random variables $X \\sim N(10, 4)$ and $Y \\sim N(5, 9)$, what is $P(X - Y > 5)$?",
      "options": [
        {
          "id": "W11-T4-Q09-opt0",
          "text": "$0.5$"
        },
        {
          "id": "W11-T4-Q09-opt1",
          "text": "$0.8413$"
        },
        {
          "id": "W11-T4-Q09-opt2",
          "text": "$0.1587$"
        },
        {
          "id": "W11-T4-Q09-opt3",
          "text": "$0.9772$"
        }
      ],
      "correct_indices": [
        "W11-T4-Q09-opt0"
      ],
      "explanation": "Let $W = X - Y$. Then $W \\sim N(10 - 5, 4 + 9) = N(5, 13)$. Since the mean of $W$ is $5$, the probability of exceeding its mean is exactly $0.5$ by symmetry.",
      "hint": "Notice that the test value 5 is the exact mean of $X - Y$."
    },
    {
      "id": "W11-T4-Q10",
      "week": 11,
      "tier": "extra",
      "topic": "Flux through Unit Cube",
      "type": "single_select",
      "question": "Compute the outward flux of $\\mathbf{F} = (x + y, y + z, z + x)$ through the boundary of the unit cube $[0, 1] \\times [0, 1] \\times [0, 1]$.",
      "options": [
        {
          "id": "W11-T4-Q10-opt0",
          "text": "$3$"
        },
        {
          "id": "W11-T4-Q10-opt1",
          "text": "$1$"
        },
        {
          "id": "W11-T4-Q10-opt2",
          "text": "$6$"
        },
        {
          "id": "W11-T4-Q10-opt3",
          "text": "$0$"
        }
      ],
      "correct_indices": [
        "W11-T4-Q10-opt0"
      ],
      "explanation": "$\\nabla \\cdot \\mathbf{F} = 1 + 1 + 1 = 3$. By the Divergence Theorem, $\\text{Flux} = \\iiint_V 3\\,dV = 3 \\times \\text{Vol}(\\text{cube}) = 3(1) = 3$.",
      "hint": "The divergence is constant ($1 + 1 + 1 = 3$), multiply by volume of the cube."
    }
  ]
};
