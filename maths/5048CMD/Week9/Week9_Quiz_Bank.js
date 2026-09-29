window.QUIZ_BANK_WEEK9 = {
  "module": "5048CMD Engineering Mathematics 2",
  "week": 9,
  "title": "Week 9: Systems of ODEs & Multivariable Optimisation",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W9-T1-Q01",
      "week": 9,
      "tier": "core",
      "topic": "Systems of ODEs in Matrix Form",
      "type": "single_select",
      "question": "Write the system of ODEs $\\frac{dx}{dt} = 3x - 2y$, $\\frac{dy}{dt} = 4x + y$ in matrix form $\\mathbf{x}' = \\mathbf{A}\\mathbf{x}$. What is matrix $\\mathbf{A}$?",
      "options": [
        {
          "id": "W9-T1-Q01-opt0",
          "text": "$\\begin{pmatrix} 3 & -2 \\\\ 4 & 1 \\end{pmatrix}$"
        },
        {
          "id": "W9-T1-Q01-opt1",
          "text": "$\\begin{pmatrix} 3 & 4 \\\\ -2 & 1 \\end{pmatrix}$"
        },
        {
          "id": "W9-T1-Q01-opt2",
          "text": "$\\begin{pmatrix} -2 & 3 \\\\ 1 & 4 \\end{pmatrix}$"
        },
        {
          "id": "W9-T1-Q01-opt3",
          "text": "$\\begin{pmatrix} 1 & 4 \\\\ -2 & 3 \\end{pmatrix}$"
        }
      ],
      "correct_indices": [
        "W9-T1-Q01-opt0"
      ],
      "explanation": "The coefficients of $x$ and $y$ form the rows of matrix $\\mathbf{A}$: row 1 has $[3, -2]$ and row 2 has $[4, 1]$, giving $\\begin{pmatrix} 3 & -2 \\\\ 4 & 1 \\end{pmatrix}$.",
      "hint": "The coefficients in the first differential equation form the first row of $\\mathbf{A}$."
    },
    {
      "id": "W9-T1-Q02",
      "week": 9,
      "tier": "core",
      "topic": "Gradient Vector Definition",
      "type": "single_select",
      "question": "For a scalar multivariable function $f(x, y)$, what is the gradient vector $\\nabla f$?",
      "options": [
        {
          "id": "W9-T1-Q02-opt0",
          "text": "$\\nabla f = \\begin{pmatrix} \\frac{\\partial f}{\\partial x} \\\\ \\frac{\\partial f}{\\partial y} \\end{pmatrix}$"
        },
        {
          "id": "W9-T1-Q02-opt1",
          "text": "$\\nabla f = \\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2}$"
        },
        {
          "id": "W9-T1-Q02-opt2",
          "text": "$\\nabla f = \\frac{\\partial f}{\\partial x} \\frac{\\partial f}{\\partial y}$"
        },
        {
          "id": "W9-T1-Q02-opt3",
          "text": "$\\nabla f = \\frac{\\partial f}{\\partial y} \\mathbf{i} - \\frac{\\partial f}{\\partial x} \\mathbf{j}$"
        }
      ],
      "correct_indices": [
        "W9-T1-Q02-opt0"
      ],
      "explanation": "The gradient $\\nabla f$ is the vector of first-order partial derivatives pointing in the direction of maximum rate of increase.",
      "hint": "The components of the gradient are the partial derivatives with respect to each variable."
    },
    {
      "id": "W9-T1-Q03",
      "week": 9,
      "tier": "core",
      "topic": "Stationary Points Condition",
      "type": "single_select",
      "question": "What is the condition for $(x_0, y_0)$ to be a critical (stationary) point of a differentiable function $f(x, y)$?",
      "options": [
        {
          "id": "W9-T1-Q03-opt0",
          "text": "$\\nabla f(x_0, y_0) = \\mathbf{0} \\iff f_x = 0 \\text{ and } f_y = 0$"
        },
        {
          "id": "W9-T1-Q03-opt1",
          "text": "$f_{xx} + f_{yy} = 0$"
        },
        {
          "id": "W9-T1-Q03-opt2",
          "text": "$f(x_0, y_0) = 0$"
        },
        {
          "id": "W9-T1-Q03-opt3",
          "text": "$\\frac{\\partial f}{\\partial x} = \\frac{\\partial f}{\\partial y} = 1$"
        }
      ],
      "correct_indices": [
        "W9-T1-Q03-opt0"
      ],
      "explanation": "A critical point occurs where the gradient vector vanishes, meaning all first-order partial derivatives are simultaneously zero: $f_x = 0$ and $f_y = 0$.",
      "hint": "Set all first partial derivatives equal to zero."
    },
    {
      "id": "W9-T1-Q04",
      "week": 9,
      "tier": "core",
      "topic": "Hessian Matrix Definition",
      "type": "single_select",
      "question": "What is the Hessian matrix $\\mathbf{H}$ of a twice-differentiable function $f(x, y)$?",
      "options": [
        {
          "id": "W9-T1-Q04-opt0",
          "text": "$\\mathbf{H} = \\begin{pmatrix} f_{xx} & f_{xy} \\\\ f_{yx} & f_{yy} \\end{pmatrix}$"
        },
        {
          "id": "W9-T1-Q04-opt1",
          "text": "$\\mathbf{H} = \\begin{pmatrix} f_x & f_y \\\\ f_y & f_x \\end{pmatrix}$"
        },
        {
          "id": "W9-T1-Q04-opt2",
          "text": "$\\mathbf{H} = \\begin{pmatrix} f_{xx} & 0 \\\\ 0 & f_{yy} \\end{pmatrix}$"
        },
        {
          "id": "W9-T1-Q04-opt3",
          "text": "$\\mathbf{H} = f_{xx} f_{yy} - f_{xy}^2$"
        }
      ],
      "correct_indices": [
        "W9-T1-Q04-opt0"
      ],
      "explanation": "The Hessian is the $2 \\times 2$ matrix of second-order partial derivatives: $\\begin{pmatrix} f_{xx} & f_{xy} \\\\ f_{yx} & f_{yy} \\end{pmatrix}$. By Clairaut's theorem, $f_{xy} = f_{yx}$ for smooth functions.",
      "hint": "The Hessian contains all combinations of second partial derivatives."
    },
    {
      "id": "W9-T1-Q05",
      "week": 9,
      "tier": "core",
      "topic": "Equilibrium Point of ODE System",
      "type": "single_select",
      "question": "An equilibrium (critical) point of the autonomous system $\\mathbf{x}' = \\mathbf{f}(\\mathbf{x})$ satisfies:",
      "options": [
        {
          "id": "W9-T1-Q05-opt0",
          "text": "$\\mathbf{f}(\\mathbf{x}_e) = \\mathbf{0}$"
        },
        {
          "id": "W9-T1-Q05-opt1",
          "text": "$\\mathbf{x}_e = \\mathbf{0}$ always"
        },
        {
          "id": "W9-T1-Q05-opt2",
          "text": "$\\mathbf{f}'(\\mathbf{x}_e) = \\mathbf{I}$"
        },
        {
          "id": "W9-T1-Q05-opt3",
          "text": "$\\mathbf{x}_e(t) \\to \\infty$"
        }
      ],
      "correct_indices": [
        "W9-T1-Q05-opt0"
      ],
      "explanation": "An equilibrium point is a state where the velocity vector is zero, so the system remains stationary: $\\mathbf{x}' = \\mathbf{f}(\\mathbf{x}_e) = \\mathbf{0}$.",
      "hint": "The derivative $\\mathbf{x}'$ must equal zero."
    },
    {
      "id": "W9-T1-Q06",
      "week": 9,
      "tier": "core",
      "topic": "Gradient Vector Direction",
      "type": "single_select",
      "question": "In which direction does the gradient vector $\\nabla f(x_0, y_0)$ point?",
      "options": [
        {
          "id": "W9-T1-Q06-opt0",
          "text": "The direction of maximum rate of increase of $f$"
        },
        {
          "id": "W9-T1-Q06-opt1",
          "text": "The direction along the contour line"
        },
        {
          "id": "W9-T1-Q06-opt2",
          "text": "The direction of minimum value"
        },
        {
          "id": "W9-T1-Q06-opt3",
          "text": "Always toward the origin"
        }
      ],
      "correct_indices": [
        "W9-T1-Q06-opt0"
      ],
      "explanation": "The gradient $\\nabla f$ points in the direction of steepest ascent (maximum rate of increase), with magnitude equal to that maximum directional derivative.",
      "hint": "Gradient points uphill in the direction of steepest ascent."
    },
    {
      "id": "W9-T1-Q07",
      "week": 9,
      "tier": "core",
      "topic": "Contour Lines and Gradient",
      "type": "single_select",
      "question": "What is the geometric angle between the gradient vector $\\nabla f$ and the level curve (contour line) $f(x,y) = c$?",
      "options": [
        {
          "id": "W9-T1-Q07-opt0",
          "text": "$90^\\circ$ (perpendicular / orthogonal)"
        },
        {
          "id": "W9-T1-Q07-opt1",
          "text": "$0^\\circ$ (parallel)"
        },
        {
          "id": "W9-T1-Q07-opt2",
          "text": "$45^\\circ$"
        },
        {
          "id": "W9-T1-Q07-opt3",
          "text": "$180^\\circ$"
        }
      ],
      "correct_indices": [
        "W9-T1-Q07-opt0"
      ],
      "explanation": "Along a level curve, $df = \\nabla f \\cdot d\\mathbf{r} = 0$. Because the dot product with the tangent vector $d\\mathbf{r}$ is zero, $\\nabla f$ is orthogonal ($90^\\circ$) to the level curve.",
      "hint": "The gradient is always normal to level curves."
    },
    {
      "id": "W9-T1-Q08",
      "week": 9,
      "tier": "core",
      "topic": "Directional Derivative Formula",
      "type": "single_select",
      "question": "The directional derivative of $f(x, y)$ in the direction of a unit vector $\\mathbf{u}$ is:",
      "options": [
        {
          "id": "W9-T1-Q08-opt0",
          "text": "$D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u}$"
        },
        {
          "id": "W9-T1-Q08-opt1",
          "text": "$D_{\\mathbf{u}}f = \\nabla f \\times \\mathbf{u}$"
        },
        {
          "id": "W9-T1-Q08-opt2",
          "text": "$D_{\\mathbf{u}}f = |\\nabla f| |\\mathbf{u}|$"
        },
        {
          "id": "W9-T1-Q08-opt3",
          "text": "$D_{\\mathbf{u}}f = \\frac{\\nabla f}{\\mathbf{u}}$"
        }
      ],
      "correct_indices": [
        "W9-T1-Q08-opt0"
      ],
      "explanation": "By the multivariable chain rule, the rate of change of $f$ along direction $\\mathbf{u}$ is the dot product of the gradient with the unit direction vector: $D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u}$.",
      "hint": "Take the dot product of $\\nabla f$ with unit vector $\\mathbf{u}$."
    },
    {
      "id": "W9-T1-Q09",
      "week": 9,
      "tier": "core",
      "topic": "Clairaut's Theorem on Mixed Partials",
      "type": "single_select",
      "question": "Clairaut's Theorem (Schwarz's Theorem) states that for any function with continuous second partial derivatives:",
      "options": [
        {
          "id": "W9-T1-Q09-opt0",
          "text": "$f_{xy} = f_{yx}$"
        },
        {
          "id": "W9-T1-Q09-opt1",
          "text": "$f_{xx} = f_{yy}$"
        },
        {
          "id": "W9-T1-Q09-opt2",
          "text": "$f_{xy} = -f_{yx}$"
        },
        {
          "id": "W9-T1-Q09-opt3",
          "text": "$f_{xy} = 0$"
        }
      ],
      "correct_indices": [
        "W9-T1-Q09-opt0"
      ],
      "explanation": "Clairaut's theorem guarantees that the mixed second-order partial derivatives are symmetric: $\\frac{\\partial^2 f}{\\partial x\\partial y} = \\frac{\\partial^2 f}{\\partial y\\partial x}$.",
      "hint": "The order of mixed differentiation does not matter for smooth functions."
    },
    {
      "id": "W9-T1-Q10",
      "week": 9,
      "tier": "core",
      "topic": "Lagrange Multiplier Single Constraint Equation",
      "type": "single_select",
      "question": "To find the extrema of $f(x, y)$ subject to $g(x, y) = 0$, the method of Lagrange multipliers solves:",
      "options": [
        {
          "id": "W9-T1-Q10-opt0",
          "text": "$\\nabla f = \\lambda \\nabla g$ and $g(x, y) = 0$"
        },
        {
          "id": "W9-T1-Q10-opt1",
          "text": "$\\nabla f + \\nabla g = \\mathbf{0}$"
        },
        {
          "id": "W9-T1-Q10-opt2",
          "text": "$\\nabla(f g) = 0$"
        },
        {
          "id": "W9-T1-Q10-opt3",
          "text": "$f(x,y) = g(x,y)$"
        }
      ],
      "correct_indices": [
        "W9-T1-Q10-opt0"
      ],
      "explanation": "At constrained extrema, level curves are tangent, so gradients are parallel: $\\nabla f = \\lambda \\nabla g$, together with the constraint equation $g(x,y) = 0$.",
      "hint": "Gradients must be collinear: $\\nabla f = \\lambda \\nabla g$."
    },
    {
      "id": "W9-T2-Q01",
      "week": 9,
      "tier": "should",
      "topic": "Second Derivative Test for Local Extrema",
      "type": "single_select",
      "question": "At a critical point $(x_0, y_0)$ with Hessian determinant $D = f_{xx}f_{yy} - f_{xy}^2$, what is the classification if $D > 0$ and $f_{xx} > 0$?",
      "options": [
        {
          "id": "W9-T2-Q01-opt0",
          "text": "Local Minimum"
        },
        {
          "id": "W9-T2-Q01-opt1",
          "text": "Local Maximum"
        },
        {
          "id": "W9-T2-Q01-opt2",
          "text": "Saddle Point"
        },
        {
          "id": "W9-T2-Q01-opt3",
          "text": "Inconclusive"
        }
      ],
      "correct_indices": [
        "W9-T2-Q01-opt0"
      ],
      "explanation": "When $D > 0$, the Hessian matrix is definite: if $f_{xx} > 0$, it is positive-definite, indicating that the surface curves upward in all directions (Local Minimum).",
      "hint": "Positive discriminant $D>0$ and positive second derivative $f_{xx}>0$ means upward curvature (minimum)."
    },
    {
      "id": "W9-T2-Q02",
      "week": 9,
      "tier": "should",
      "topic": "Saddle Point Classification",
      "type": "single_select",
      "question": "At a critical point $(x_0, y_0)$, if the Hessian discriminant $D = f_{xx}f_{yy} - f_{xy}^2 < 0$, what is the nature of the point?",
      "options": [
        {
          "id": "W9-T2-Q02-opt0",
          "text": "Saddle Point"
        },
        {
          "id": "W9-T2-Q02-opt1",
          "text": "Local Minimum"
        },
        {
          "id": "W9-T2-Q02-opt2",
          "text": "Local Maximum"
        },
        {
          "id": "W9-T2-Q02-opt3",
          "text": "Global Maximum"
        }
      ],
      "correct_indices": [
        "W9-T2-Q02-opt0"
      ],
      "explanation": "When $D < 0$, the eigenvalues of the Hessian have opposite signs, meaning the surface curves upward in one direction and downward in another, creating a Saddle Point.",
      "hint": "A negative Hessian determinant $D < 0$ always indicates a saddle point."
    },
    {
      "id": "W9-T2-Q03",
      "week": 9,
      "tier": "should",
      "topic": "Critical Point of Quadratic Surface",
      "type": "single_select",
      "question": "Find the critical point of $f(x, y) = x^2 + y^2 - 4x + 6y + 10$.",
      "options": [
        {
          "id": "W9-T2-Q03-opt0",
          "text": "$(2, -3)$"
        },
        {
          "id": "W9-T2-Q03-opt1",
          "text": "$(-2, 3)$"
        },
        {
          "id": "W9-T2-Q03-opt2",
          "text": "$(4, -6)$"
        },
        {
          "id": "W9-T2-Q03-opt3",
          "text": "$(0, 0)$"
        }
      ],
      "correct_indices": [
        "W9-T2-Q03-opt0"
      ],
      "explanation": "Compute first partials: $f_x = 2x - 4 = 0 \\implies x = 2$. $f_y = 2y + 6 = 0 \\implies y = -3$. Thus the critical point is $(2, -3)$.",
      "hint": "Set $f_x = 0$ and $f_y = 0$."
    },
    {
      "id": "W9-T2-Q04",
      "week": 9,
      "tier": "should",
      "topic": "Classification of Critical Point",
      "type": "single_select",
      "question": "For $f(x, y) = x^2 + y^2 - 4x + 6y + 10$, classify the critical point $(2, -3)$.",
      "options": [
        {
          "id": "W9-T2-Q04-opt0",
          "text": "Local Minimum"
        },
        {
          "id": "W9-T2-Q04-opt1",
          "text": "Local Maximum"
        },
        {
          "id": "W9-T2-Q04-opt2",
          "text": "Saddle Point"
        },
        {
          "id": "W9-T2-Q04-opt3",
          "text": "Inconclusive"
        }
      ],
      "correct_indices": [
        "W9-T2-Q04-opt0"
      ],
      "explanation": "$f_{xx} = 2, f_{yy} = 2, f_{xy} = 0$. Discriminant $D = (2)(2) - 0 = 4 > 0$. Since $D > 0$ and $f_{xx} = 2 > 0$, $(2, -3)$ is a Local Minimum.",
      "hint": "Check $D = f_{xx}f_{yy} - f_{xy}^2$ and the sign of $f_{xx}$."
    },
    {
      "id": "W9-T2-Q05",
      "week": 9,
      "tier": "should",
      "topic": "Saddle Point Example",
      "type": "single_select",
      "question": "Classify the origin $(0, 0)$ for the hyperbolic paraboloid $f(x, y) = x^2 - y^2$.",
      "options": [
        {
          "id": "W9-T2-Q05-opt0",
          "text": "Saddle Point"
        },
        {
          "id": "W9-T2-Q05-opt1",
          "text": "Local Minimum"
        },
        {
          "id": "W9-T2-Q05-opt2",
          "text": "Local Maximum"
        },
        {
          "id": "W9-T2-Q05-opt3",
          "text": "Inconclusive"
        }
      ],
      "correct_indices": [
        "W9-T2-Q05-opt0"
      ],
      "explanation": "$f_{xx} = 2, f_{yy} = -2, f_{xy} = 0$. $D = f_{xx}f_{yy} - f_{xy}^2 = 2(-2) - 0 = -4 < 0$. Since $D < 0$, the origin is a Saddle Point.",
      "hint": "$D = -4 < 0$ indicates a saddle point."
    },
    {
      "id": "W9-T2-Q06",
      "week": 9,
      "tier": "should",
      "topic": "Solving 2x2 Linear System of ODEs",
      "type": "single_select",
      "question": "The system $\\mathbf{x}' = \\begin{pmatrix} 1 & 0 \\\\ 0 & -2 \\end{pmatrix}\\mathbf{x}$ with $\\mathbf{x}(0) = \\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$ has solution:",
      "options": [
        {
          "id": "W9-T2-Q06-opt0",
          "text": "$x(t) = 3e^t, y(t) = 5e^{-2t}$"
        },
        {
          "id": "W9-T2-Q06-opt1",
          "text": "$x(t) = 3e^{-t}, y(t) = 5e^{2t}$"
        },
        {
          "id": "W9-T2-Q06-opt2",
          "text": "$x(t) = 5e^t, y(t) = 3e^{-2t}$"
        },
        {
          "id": "W9-T2-Q06-opt3",
          "text": "$x(t) = 3\\cos t, y(t) = 5\\sin(2t)$"
        }
      ],
      "correct_indices": [
        "W9-T2-Q06-opt0"
      ],
      "explanation": "The system is decoupled: $x' = x \\implies x(t) = 3e^t$ and $y' = -2y \\implies y(t) = 5e^{-2t}$.",
      "hint": "Solve each decoupled equation $x' = x$ and $y' = -2y$ independently."
    },
    {
      "id": "W9-T2-Q07",
      "week": 9,
      "tier": "should",
      "topic": "Stable Node Eigenvalues",
      "type": "single_select",
      "question": "If the matrix $\\mathbf{A}$ in $\\mathbf{x}' = \\mathbf{A}\\mathbf{x}$ has eigenvalues $\\lambda_1 = -2$ and $\\lambda_2 = -5$ (both real, distinct, negative), the origin is classified as:",
      "options": [
        {
          "id": "W9-T2-Q07-opt0",
          "text": "Stable Node (Sink)"
        },
        {
          "id": "W9-T2-Q07-opt1",
          "text": "Unstable Node (Source)"
        },
        {
          "id": "W9-T2-Q07-opt2",
          "text": "Saddle Point"
        },
        {
          "id": "W9-T2-Q07-opt3",
          "text": "Stable Spiral"
        }
      ],
      "correct_indices": [
        "W9-T2-Q07-opt0"
      ],
      "explanation": "Real distinct eigenvalues of the same negative sign produce trajectories that converge directly to the origin without spiraling: a Stable Node (Sink).",
      "hint": "Both negative real eigenvalues mean all trajectories decay directly to the origin."
    },
    {
      "id": "W9-T2-Q08",
      "week": 9,
      "tier": "should",
      "topic": "Unstable Node Eigenvalues",
      "type": "single_select",
      "question": "If $\\lambda_1 = +3$ and $\\lambda_2 = +7$ (both real, distinct, positive), the origin is a:",
      "options": [
        {
          "id": "W9-T2-Q08-opt0",
          "text": "Unstable Node (Source)"
        },
        {
          "id": "W9-T2-Q08-opt1",
          "text": "Stable Node (Sink)"
        },
        {
          "id": "W9-T2-Q08-opt2",
          "text": "Saddle Point"
        },
        {
          "id": "W9-T2-Q08-opt3",
          "text": "Center"
        }
      ],
      "correct_indices": [
        "W9-T2-Q08-opt0"
      ],
      "explanation": "Real distinct positive eigenvalues cause all non-zero trajectories to diverge exponentially away from the origin: an Unstable Node (Source).",
      "hint": "Positive eigenvalues mean exponential growth away from the origin."
    },
    {
      "id": "W9-T2-Q09",
      "week": 9,
      "tier": "should",
      "topic": "Center Equilibrium Condition",
      "type": "single_select",
      "question": "A $2 \\times 2$ linear system $\\mathbf{x}' = \\mathbf{A}\\mathbf{x}$ has a Center (neutrally stable concentric elliptical orbits) if its eigenvalues are:",
      "options": [
        {
          "id": "W9-T2-Q09-opt0",
          "text": "Purely imaginary: $\\lambda = \\pm i\\beta$ with $\\beta \\neq 0$ (Trace $= 0$, Det $> 0$)"
        },
        {
          "id": "W9-T2-Q09-opt1",
          "text": "Real and opposite signs"
        },
        {
          "id": "W9-T2-Q09-opt2",
          "text": "Complex with negative real part"
        },
        {
          "id": "W9-T2-Q09-opt3",
          "text": "Repeated real numbers"
        }
      ],
      "correct_indices": [
        "W9-T2-Q09-opt0"
      ],
      "explanation": "Pure imaginary eigenvalues $\\pm i\\beta$ produce harmonic oscillations without decay or growth, creating closed concentric elliptical orbits: a Center.",
      "hint": "Zero real part means no decay and no growth, giving closed loops."
    },
    {
      "id": "W9-T2-Q10",
      "week": 9,
      "tier": "should",
      "topic": "Directional Derivative Calculation",
      "type": "single_select",
      "question": "Find the directional derivative of $f(x, y) = x^2 y$ at $(1, 2)$ in the direction of $\\mathbf{v} = 3\\mathbf{i} + 4\\mathbf{j}$.",
      "options": [
        {
          "id": "W9-T2-Q10-opt0",
          "text": "$\\frac{16}{5}$"
        },
        {
          "id": "W9-T2-Q10-opt1",
          "text": "$16$"
        },
        {
          "id": "W9-T2-Q10-opt2",
          "text": "$\\frac{8}{5}$"
        },
        {
          "id": "W9-T2-Q10-opt3",
          "text": "$4$"
        }
      ],
      "correct_indices": [
        "W9-T2-Q10-opt0"
      ],
      "explanation": "$\\nabla f = \\begin{pmatrix} 2xy \\\\ x^2 \\end{pmatrix}$. At $(1,2)$, $\\nabla f = \\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$. Unit vector $\\mathbf{u} = \\frac{3\\mathbf{i}+4\\mathbf{j}}{\\sqrt{3^2+4^2}} = \\begin{pmatrix} 3/5 \\\\ 4/5 \\end{pmatrix}$. Then $D_{\\mathbf{u}}f = 4(3/5) + 1(4/5) = \\frac{12+4}{5} = \\frac{16}{5}$.",
      "hint": "Remember to normalize $\\mathbf{v}$ to a unit vector by dividing by its magnitude $|\\mathbf{v}| = 5$."
    },
    {
      "id": "W9-T3-Q01",
      "week": 9,
      "tier": "nice_to_know",
      "topic": "Method of Lagrange Multipliers",
      "type": "single_select",
      "question": "To optimize $f(x, y)$ subject to the equality constraint $g(x, y) = c$, what vector condition must hold at the optimum?",
      "options": [
        {
          "id": "W9-T3-Q01-opt0",
          "text": "$\\nabla f = \\lambda \\nabla g$ for some scalar $\\lambda$"
        },
        {
          "id": "W9-T3-Q01-opt1",
          "text": "$\\nabla f \\cdot \\nabla g = 0$"
        },
        {
          "id": "W9-T3-Q01-opt2",
          "text": "$\\nabla f + \\nabla g = \\mathbf{0}$"
        },
        {
          "id": "W9-T3-Q01-opt3",
          "text": "$\\det(\\nabla f, \\nabla g) = 1$"
        }
      ],
      "correct_indices": [
        "W9-T3-Q01-opt0"
      ],
      "explanation": "At a constrained optimum, the level curve of $f$ is tangent to the constraint curve $g=c$, meaning their normal vectors (gradients) must be parallel: $\\nabla f = \\lambda \\nabla g$.",
      "hint": "The gradients of the objective function and constraint must be parallel at the extremum."
    },
    {
      "id": "W9-T3-Q02",
      "week": 9,
      "tier": "nice_to_know",
      "topic": "Phase Portrait Stability - Trace and Determinant",
      "type": "single_select",
      "question": "For a $2 \\times 2$ linear system $\\mathbf{x}' = \\mathbf{A}\\mathbf{x}$ with trace $T = \\text{tr}(\\mathbf{A})$ and determinant $\\Delta = \\det(\\mathbf{A})$, under what condition is the origin an asymptotically stable equilibrium?",
      "options": [
        {
          "id": "W9-T3-Q02-opt0",
          "text": "$T < 0$ and $\\Delta > 0$"
        },
        {
          "id": "W9-T3-Q02-opt1",
          "text": "$T > 0$ and $\\Delta > 0$"
        },
        {
          "id": "W9-T3-Q02-opt2",
          "text": "$\\Delta < 0$"
        },
        {
          "id": "W9-T3-Q02-opt3",
          "text": "$T = 0$ and $\\Delta > 0$"
        }
      ],
      "correct_indices": [
        "W9-T3-Q02-opt0"
      ],
      "explanation": "The characteristic equation is $\\lambda^2 - T\\lambda + \\Delta = 0$. By Routh-Hurwitz / quadratic roots analysis, both eigenvalues have negative real parts if and only if $T = \\lambda_1 + \\lambda_2 < 0$ and $\\Delta = \\lambda_1 \\lambda_2 > 0$.",
      "hint": "Negative trace ensures eigenvalues have negative real parts, and positive determinant ensures they have the same sign."
    },
    {
      "id": "W9-T3-Q03",
      "week": 9,
      "tier": "nice_to_know",
      "topic": "Spiral Equilibrium Condition",
      "type": "single_select",
      "question": "A $2 \\times 2$ system has eigenvalues $\\lambda = -2 \\pm 3i$. What is the classification of the origin?",
      "options": [
        {
          "id": "W9-T3-Q03-opt0",
          "text": "Stable Spiral (Focus)"
        },
        {
          "id": "W9-T3-Q03-opt1",
          "text": "Unstable Spiral"
        },
        {
          "id": "W9-T3-Q03-opt2",
          "text": "Center"
        },
        {
          "id": "W9-T3-Q03-opt3",
          "text": "Saddle Point"
        }
      ],
      "correct_indices": [
        "W9-T3-Q03-opt0"
      ],
      "explanation": "The real part is negative ($\\text{Re}(\\lambda) = -2 < 0$), ensuring decay toward the origin. The non-zero imaginary part ($\\pm 3i$) produces rotational oscillation. Together they form a Stable Spiral (Sink).",
      "hint": "Negative real part means stability (inward spiral); imaginary part means rotation."
    },
    {
      "id": "W9-T3-Q04",
      "week": 9,
      "tier": "nice_to_know",
      "topic": "Trace-Determinant Parabola Boundary",
      "type": "single_select",
      "question": "In the trace-determinant plane $(\\tau, \\Delta)$, what does the parabola $\\Delta = \\frac{\\tau^2}{4}$ separate?",
      "options": [
        {
          "id": "W9-T3-Q04-opt0",
          "text": "Nodes (real roots, $\\Delta \\le \\tau^2/4$) from Spirals/Centers (complex roots, $\\Delta > \\tau^2/4$)"
        },
        {
          "id": "W9-T3-Q04-opt1",
          "text": "Stable from unstable regions"
        },
        {
          "id": "W9-T3-Q04-opt2",
          "text": "Saddle points from nodes"
        },
        {
          "id": "W9-T3-Q04-opt3",
          "text": "Elliptic from hyperbolic systems"
        }
      ],
      "correct_indices": [
        "W9-T3-Q04-opt0"
      ],
      "explanation": "The discriminant of $\\lambda^2 - \\tau\\lambda + \\Delta = 0$ is $\\tau^2 - 4\\Delta$. When $\\Delta > \\tau^2/4$, the discriminant is negative (complex eigenvalues, spirals). When $\\Delta < \\tau^2/4$, it is positive (real eigenvalues, nodes).",
      "hint": "The boundary $\\tau^2 - 4\\Delta = 0$ separates real roots from complex conjugate roots."
    },
    {
      "id": "W9-T3-Q05",
      "week": 9,
      "tier": "nice_to_know",
      "topic": "Tangent Plane to a Surface",
      "type": "single_select",
      "question": "What is the equation of the tangent plane to the surface $z = f(x, y)$ at the point $(x_0, y_0, z_0)$?",
      "options": [
        {
          "id": "W9-T3-Q05-opt0",
          "text": "$z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)$"
        },
        {
          "id": "W9-T3-Q05-opt1",
          "text": "$z - z_0 = f_x(x - x_0) - f_y(y - y_0)$"
        },
        {
          "id": "W9-T3-Q05-opt2",
          "text": "$z = f_x x + f_y y$"
        },
        {
          "id": "W9-T3-Q05-opt3",
          "text": "$z - z_0 = \\frac{x - x_0}{f_x} + \\frac{y - y_0}{f_y}$"
        }
      ],
      "correct_indices": [
        "W9-T3-Q05-opt0"
      ],
      "explanation": "Linear approximation of $z = f(x,y)$ near $(x_0, y_0)$ yields $z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)$.",
      "hint": "Analogous to the tangent line $y - y_0 = m(x - x_0)$ in 1D calculus."
    },
    {
      "id": "W9-T3-Q06",
      "week": 9,
      "tier": "nice_to_know",
      "topic": "Normal Vector to Level Surface",
      "type": "single_select",
      "question": "What vector is always normal (perpendicular) to the level surface $F(x, y, z) = C$ at point $(x_0, y_0, z_0)$?",
      "options": [
        {
          "id": "W9-T3-Q06-opt0",
          "text": "$\\mathbf{n} = \\nabla F(x_0, y_0, z_0) = \\begin{pmatrix} F_x \\\\ F_y \\\\ F_z \\end{pmatrix}$"
        },
        {
          "id": "W9-T3-Q06-opt1",
          "text": "$\\mathbf{n} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$"
        },
        {
          "id": "W9-T3-Q06-opt2",
          "text": "$\\mathbf{n} = \\nabla \\times \\mathbf{F}$"
        },
        {
          "id": "W9-T3-Q06-opt3",
          "text": "$\\mathbf{n} = \\begin{pmatrix} F_{xx} \\\\ F_{yy} \\\\ F_{zz} \\end{pmatrix}$"
        }
      ],
      "correct_indices": [
        "W9-T3-Q06-opt0"
      ],
      "explanation": "The gradient vector $\\nabla F$ of a function $F(x,y,z)$ is always perpendicular to its level surfaces $F = C$.",
      "hint": "The gradient vector provides the surface normal."
    },
    {
      "id": "W9-T3-Q07",
      "week": 9,
      "tier": "nice_to_know",
      "topic": "Critical Point Inconclusive Test",
      "type": "single_select",
      "question": "If the Hessian discriminant $D = f_{xx}f_{yy} - f_{xy}^2 = 0$ at a critical point, what does the second derivative test conclude?",
      "options": [
        {
          "id": "W9-T3-Q07-opt0",
          "text": "The test is inconclusive (higher-order derivatives or direct analysis are required)"
        },
        {
          "id": "W9-T3-Q07-opt1",
          "text": "It is definitely a saddle point"
        },
        {
          "id": "W9-T3-Q07-opt2",
          "text": "It is definitely a minimum"
        },
        {
          "id": "W9-T3-Q07-opt3",
          "text": "It is a global maximum"
        }
      ],
      "correct_indices": [
        "W9-T3-Q07-opt0"
      ],
      "explanation": "When $D = 0$, at least one eigenvalue of the Hessian matrix is zero, so the second-order terms do not provide enough curvature information. The test is inconclusive.",
      "hint": "A zero discriminant gives no definitive conclusion."
    },
    {
      "id": "W9-T3-Q08",
      "week": 9,
      "tier": "nice_to_know",
      "topic": "Lagrange Multiplier Physical Interpretation",
      "type": "single_select",
      "question": "In economic and engineering optimization, what is the physical interpretation of the Lagrange multiplier $\\lambda$?",
      "options": [
        {
          "id": "W9-T3-Q08-opt0",
          "text": "The shadow price / sensitivity: $\\lambda = \\frac{df^*}{dc}$, the rate of change of the optimal value with respect to the constraint bound $c$"
        },
        {
          "id": "W9-T3-Q08-opt1",
          "text": "The curvature of the constraint"
        },
        {
          "id": "W9-T3-Q08-opt2",
          "text": "The distance to the origin"
        },
        {
          "id": "W9-T3-Q08-opt3",
          "text": "The cost of computation"
        }
      ],
      "correct_indices": [
        "W9-T3-Q08-opt0"
      ],
      "explanation": "$\\frac{df^*}{dc} = \\lambda$. The multiplier measures how much the optimal objective value improves if the constraint $g(x,y) = c$ is relaxed by one unit.",
      "hint": "Shadow price measures the sensitivity of the optimum to the constraint value."
    },
    {
      "id": "W9-T3-Q09",
      "week": 9,
      "tier": "nice_to_know",
      "topic": "Linearization of Non-Linear Systems",
      "type": "single_select",
      "question": "Near an equilibrium point $\\mathbf{x}_e$, the non-linear system $\\mathbf{x}' = \\mathbf{f}(\\mathbf{x})$ is approximated by the linear system $\\mathbf{u}' = \\mathbf{J}\\mathbf{u}$, where $\\mathbf{J}$ is:",
      "options": [
        {
          "id": "W9-T3-Q09-opt0",
          "text": "The Jacobian matrix $J_{ij} = \\frac{\\partial f_i}{\\partial x_j}$ evaluated at $\\mathbf{x}_e$"
        },
        {
          "id": "W9-T3-Q09-opt1",
          "text": "The Hessian matrix"
        },
        {
          "id": "W9-T3-Q09-opt2",
          "text": "The covariance matrix"
        },
        {
          "id": "W9-T3-Q09-opt3",
          "text": "The identity matrix"
        }
      ],
      "correct_indices": [
        "W9-T3-Q09-opt0"
      ],
      "explanation": "Taylor expansion of $\\mathbf{f}(\\mathbf{x})$ about $\\mathbf{x}_e$ gives $\\mathbf{f}(\\mathbf{x}_e + \\mathbf{u}) \\approx \\mathbf{f}(\\mathbf{x}_e) + \\mathbf{J}(\\mathbf{x}_e)\\mathbf{u} = \\mathbf{J}\\mathbf{u}$ since $\\mathbf{f}(\\mathbf{x}_e) = \\mathbf{0}$.",
      "hint": "The Jacobian matrix of first partial derivatives linearizes non-linear ODEs."
    },
    {
      "id": "W9-T3-Q10",
      "week": 9,
      "tier": "nice_to_know",
      "topic": "Hartman-Grobman Theorem",
      "type": "single_select",
      "question": "What does the Hartman-Grobman Theorem guarantee for a hyperbolic equilibrium point (where no eigenvalue of $\\mathbf{J}$ has zero real part)?",
      "options": [
        {
          "id": "W9-T3-Q10-opt0",
          "text": "The local phase portrait of the non-linear system is topologically equivalent to that of its linearized system"
        },
        {
          "id": "W9-T3-Q10-opt1",
          "text": "All trajectories are periodic"
        },
        {
          "id": "W9-T3-Q10-opt2",
          "text": "The system has no chaos"
        },
        {
          "id": "W9-T3-Q10-opt3",
          "text": "The solution can be integrated analytically"
        }
      ],
      "correct_indices": [
        "W9-T3-Q10-opt0"
      ],
      "explanation": "The Hartman-Grobman theorem ensures that near any hyperbolic equilibrium point, the qualitative behavior (stability, node/saddle/spiral structure) of the full non-linear system matches that of its linearization.",
      "hint": "Linearization correctly predicts local stability for hyperbolic fixed points."
    },
    {
      "id": "W9-T4-Q01",
      "week": 9,
      "tier": "extra",
      "topic": "Phase Portrait Classification of Saddle Point",
      "type": "single_select",
      "question": "For the linear system $\\mathbf{x}' = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}\\mathbf{x}$, how is the equilibrium point at the origin classified?",
      "options": [
        {
          "id": "W9-T4-Q01-opt0",
          "text": "Unstable Saddle Point"
        },
        {
          "id": "W9-T4-Q01-opt1",
          "text": "Stable Node"
        },
        {
          "id": "W9-T4-Q01-opt2",
          "text": "Stable Spiral"
        },
        {
          "id": "W9-T4-Q01-opt3",
          "text": "Center"
        }
      ],
      "correct_indices": [
        "W9-T4-Q01-opt0"
      ],
      "explanation": "The eigenvalues are given by $\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = (1-\\lambda)^2 - 4 = \\lambda^2 - 2\\lambda - 3 = (\\lambda-3)(\\lambda+1) = 0$. Since the eigenvalues have opposite signs ($\\lambda_1 = 3 > 0$ and $\\lambda_2 = -1 < 0$), the origin is a Saddle Point, which is inherently unstable.",
      "hint": "Find the eigenvalues: opposite signs indicate a saddle point."
    },
    {
      "id": "W9-T4-Q02",
      "week": 9,
      "tier": "extra",
      "topic": "Constrained Optimization with Lagrange Multipliers",
      "type": "single_select",
      "question": "Find the maximum value of $f(x, y) = xy$ subject to the constraint $x + y = 10$ ($x, y > 0$).",
      "options": [
        {
          "id": "W9-T4-Q02-opt0",
          "text": "$25$"
        },
        {
          "id": "W9-T4-Q02-opt1",
          "text": "$20$"
        },
        {
          "id": "W9-T4-Q02-opt2",
          "text": "$50$"
        },
        {
          "id": "W9-T4-Q02-opt3",
          "text": "$100$"
        }
      ],
      "correct_indices": [
        "W9-T4-Q02-opt0"
      ],
      "explanation": "Setting $\\nabla f = \\lambda \\nabla g \\implies \\begin{pmatrix} y \\\\ x \\end{pmatrix} = \\lambda \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} \\implies y = \\lambda, x = \\lambda \\implies x = y$. Substituting into $x+y=10 \\implies 2x = 10 \\implies x=5, y=5$. Thus $f_{\\max} = 5 \\times 5 = 25$.",
      "hint": "Equate partial derivatives: $y = \\lambda$ and $x = \\lambda$, giving $x = y$."
    },
    {
      "id": "W9-T4-Q03",
      "week": 9,
      "tier": "extra",
      "topic": "Two Constraints with Lagrange Multipliers",
      "type": "single_select",
      "question": "To optimize $f(x, y, z)$ subject to two constraints $g_1(x, y, z) = 0$ and $g_2(x, y, z) = 0$, the vector condition is:",
      "options": [
        {
          "id": "W9-T4-Q03-opt0",
          "text": "$\\nabla f = \\lambda_1 \\nabla g_1 + \\lambda_2 \\nabla g_2$"
        },
        {
          "id": "W9-T4-Q03-opt1",
          "text": "$\\nabla f \\cdot (\\nabla g_1 \\times \\nabla g_2) = 1$"
        },
        {
          "id": "W9-T4-Q03-opt2",
          "text": "$\\nabla f = \\lambda_1 \\lambda_2 (\\nabla g_1 + \\nabla g_2)$"
        },
        {
          "id": "W9-T4-Q03-opt3",
          "text": "$\\nabla f + \\nabla g_1 + \\nabla g_2 = \\mathbf{0}$"
        }
      ],
      "correct_indices": [
        "W9-T4-Q03-opt0"
      ],
      "explanation": "The gradient $\\nabla f$ must lie in the plane spanned by the constraint normals $\\nabla g_1$ and $\\nabla g_2$, giving $\\nabla f = \\lambda_1 \\nabla g_1 + \\lambda_2 \\nabla g_2$.",
      "hint": "Linear combination of the two constraint gradient vectors."
    },
    {
      "id": "W9-T4-Q04",
      "week": 9,
      "tier": "extra",
      "topic": "Limit Cycle and Poincar\u00e9-Bendixson Theorem",
      "type": "single_select",
      "question": "What does the Poincar\u00e9-Bendixson Theorem guarantee for a trajectory in a bounded 2D phase plane containing no equilibrium points?",
      "options": [
        {
          "id": "W9-T4-Q04-opt0",
          "text": "The trajectory must approach a periodic orbit (limit cycle)"
        },
        {
          "id": "W9-T4-Q04-opt1",
          "text": "The trajectory must escape to infinity"
        },
        {
          "id": "W9-T4-Q04-opt2",
          "text": "The trajectory must become chaotic"
        },
        {
          "id": "W9-T4-Q04-opt3",
          "text": "The trajectory must come to rest"
        }
      ],
      "correct_indices": [
        "W9-T4-Q04-opt0"
      ],
      "explanation": "In a compact 2D planar domain with no fixed points, a trapped trajectory cannot cross itself (uniqueness) and cannot stop, so it must asymptotically approach a closed periodic orbit (limit cycle). Chaos is impossible in 2D continuous autonomous systems.",
      "hint": "Trajectories trapped in a bounded 2D region without fixed points must settle into closed limit cycles."
    },
    {
      "id": "W9-T4-Q05",
      "week": 9,
      "tier": "extra",
      "topic": "Liapunov Direct Method for Stability",
      "type": "single_select",
      "question": "According to Liapunov's Direct Method, if a positive definite function $V(\\mathbf{x}) > 0$ has negative semi-definite derivative $\\dot{V}(\\mathbf{x}) \\le 0$, then the origin is:",
      "options": [
        {
          "id": "W9-T4-Q05-opt0",
          "text": "Stable (in the sense of Liapunov)"
        },
        {
          "id": "W9-T4-Q05-opt1",
          "text": "Asymptotically stable"
        },
        {
          "id": "W9-T4-Q05-opt2",
          "text": "Unstable"
        },
        {
          "id": "W9-T4-Q05-opt3",
          "text": "A saddle point"
        }
      ],
      "correct_indices": [
        "W9-T4-Q05-opt0"
      ],
      "explanation": "If $V(\\mathbf{x})$ acts as an energy function that never increases ($\\dot{V} \\le 0$), state trajectories are confined to level surfaces of $V$, guaranteeing stability. If $\\dot{V} < 0$ strictly, it is asymptotically stable.",
      "hint": "Non-increasing energy ensures trajectories remain bounded."
    },
    {
      "id": "W9-T4-Q06",
      "week": 9,
      "tier": "extra",
      "topic": "Hopf Bifurcation",
      "type": "single_select",
      "question": "A Hopf bifurcation occurs in a dynamic system when a pair of complex conjugate eigenvalues crosses the imaginary axis: $\\text{Re}(\\lambda)$ changes from negative to positive. This typically causes:",
      "options": [
        {
          "id": "W9-T4-Q06-opt0",
          "text": "The birth of a limit cycle (periodic oscillation)"
        },
        {
          "id": "W9-T4-Q06-opt1",
          "text": "The destruction of all fixed points"
        },
        {
          "id": "W9-T4-Q06-opt2",
          "text": "The system to instantly explode"
        },
        {
          "id": "W9-T4-Q06-opt3",
          "text": "A saddle connection"
        }
      ],
      "correct_indices": [
        "W9-T4-Q06-opt0"
      ],
      "explanation": "As the real part of complex eigenvalues crosses zero, a stable focus loses stability and sheds a stable periodic limit cycle: a classic mechanism for self-excited oscillations.",
      "hint": "Complex eigenvalues crossing the imaginary axis trigger self-sustained periodic oscillations."
    },
    {
      "id": "W9-T4-Q07",
      "week": 9,
      "tier": "extra",
      "topic": "Bordered Hessian Matrix",
      "type": "single_select",
      "question": "To verify whether a critical point of $f(x, y)$ subject to $g(x, y) = 0$ is a local maximum, one evaluates the determinant of the Bordered Hessian matrix:",
      "options": [
        {
          "id": "W9-T4-Q07-opt0",
          "text": "$|\\bar{\\mathbf{H}}| = \\det \\begin{pmatrix} 0 & g_x & g_y \\\\ g_x & L_{xx} & L_{xy} \\\\ g_y & L_{yx} & L_{yy} \\end{pmatrix}$ where $|\\bar{\\mathbf{H}}| > 0$ indicates a local maximum"
        },
        {
          "id": "W9-T4-Q07-opt1",
          "text": "$|\\bar{\\mathbf{H}}| < 0$ indicates a local maximum"
        },
        {
          "id": "W9-T4-Q07-opt2",
          "text": "$|\\bar{\\mathbf{H}}| = 0$"
        },
        {
          "id": "W9-T4-Q07-opt3",
          "text": "Only the unconstrained Hessian determinant"
        }
      ],
      "correct_indices": [
        "W9-T4-Q07-opt0"
      ],
      "explanation": "For a 2-variable problem with 1 constraint, the Bordered Hessian determinant $|\\bar{\\mathbf{H}}| > 0$ guarantees that the constrained Lagrangian has negative curvature along the tangent space, indicating a local maximum.",
      "hint": "Bordered Hessian determinant $> 0$ indicates a constrained maximum."
    },
    {
      "id": "W9-T4-Q08",
      "week": 9,
      "tier": "extra",
      "topic": "Lotka-Volterra Predator-Prey System",
      "type": "single_select",
      "question": "In the classic Lotka-Volterra model $\\dot{x} = x(\\alpha - \\beta y), \\dot{y} = -y(\\gamma - \\delta x)$, the non-trivial equilibrium point $(x^*, y^*) = (\\gamma/\\delta, \\alpha/\\beta)$ is:",
      "options": [
        {
          "id": "W9-T4-Q08-opt0",
          "text": "A neutrally stable Center surrounded by closed periodic trajectories"
        },
        {
          "id": "W9-T4-Q08-opt1",
          "text": "A stable sink"
        },
        {
          "id": "W9-T4-Q08-opt2",
          "text": "An unstable saddle point"
        },
        {
          "id": "W9-T4-Q08-opt3",
          "text": "A node"
        }
      ],
      "correct_indices": [
        "W9-T4-Q08-opt0"
      ],
      "explanation": "Linearizing about $(\\gamma/\\delta, \\alpha/\\beta)$ yields a Jacobian with zero trace ($T = 0$) and positive determinant ($\\Delta = \\alpha \\gamma > 0$), which has purely imaginary eigenvalues $\\pm i\\sqrt{\\alpha \\gamma}$, forming a Center.",
      "hint": "The system possesses a conserved quantity $V(x,y)$, locking orbits into closed loops."
    },
    {
      "id": "W9-T4-Q09",
      "week": 9,
      "tier": "extra",
      "topic": "Gradient System Conservation",
      "type": "single_select",
      "question": "A dynamical system $\\mathbf{x}' = -\\nabla V(\\mathbf{x})$ is a gradient system. What is the derivative of $V$ along trajectories?",
      "options": [
        {
          "id": "W9-T4-Q09-opt0",
          "text": "$\\frac{dV}{dt} = -|\\nabla V|^2 \\le 0$"
        },
        {
          "id": "W9-T4-Q09-opt1",
          "text": "$\\frac{dV}{dt} = 0$"
        },
        {
          "id": "W9-T4-Q09-opt2",
          "text": "$\\frac{dV}{dt} = |\\nabla V|^2 \\ge 0$"
        },
        {
          "id": "W9-T4-Q09-opt3",
          "text": "$\\frac{dV}{dt} = \\nabla^2 V$"
        }
      ],
      "correct_indices": [
        "W9-T4-Q09-opt0"
      ],
      "explanation": "By the chain rule, $\\frac{dV}{dt} = \\nabla V \\cdot \\mathbf{x}' = \\nabla V \\cdot (-\\nabla V) = -|\\nabla V|^2 \\le 0$. Trajectories always flow downhill and can never oscillate periodically.",
      "hint": "Gradient systems strictly minimize potential $V$ and cannot have periodic orbits."
    },
    {
      "id": "W9-T4-Q10",
      "week": 9,
      "tier": "extra",
      "topic": "KKT Conditions for Inequality Constraints",
      "type": "single_select",
      "question": "For optimization with inequality constraints $g_i(\\mathbf{x}) \\le 0$, the Karush-Kuhn-Tucker (KKT) conditions include complementary slackness:",
      "options": [
        {
          "id": "W9-T4-Q10-opt0",
          "text": "$\\lambda_i g_i(\\mathbf{x}) = 0$ with $\\lambda_i \\ge 0$"
        },
        {
          "id": "W9-T4-Q10-opt1",
          "text": "$\\lambda_i + g_i(\\mathbf{x}) = 0$"
        },
        {
          "id": "W9-T4-Q10-opt2",
          "text": "$\\lambda_i g_i(\\mathbf{x}) > 0$"
        },
        {
          "id": "W9-T4-Q10-opt3",
          "text": "$\\lambda_i = 1$ always"
        }
      ],
      "correct_indices": [
        "W9-T4-Q10-opt0"
      ],
      "explanation": "Complementary slackness requires that either the constraint is active ($g_i = 0$) and $\\lambda_i \\ge 0$, or the constraint is inactive ($g_i < 0$) and $\\lambda_i = 0$, so their product is always zero: $\\lambda_i g_i = 0$.",
      "hint": "Either the multiplier is zero or the constraint boundary is reached."
    }
  ]
};
