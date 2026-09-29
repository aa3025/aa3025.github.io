window.QUIZ_BANK_WEEK5 = {
  "module": "4014SCN Calculus and Applications",
  "week": 5,
  "title": "Week 5 Quiz Bank: Multivariable Calculus: Partial Derivatives, Gradients & Double Integrals",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W5-T1-Q01",
      "week": 5,
      "tier": "core",
      "topic": "First-Order Partial Derivatives",
      "type": "single_select",
      "question": "For $f(x, y) = 3x^2 y^3 + 4x - 5y + 7$, find the partial derivative $\\frac{\\partial f}{\\partial x}$.",
      "options": [
        {
          "id": "W5-T1-Q01-opt0",
          "text": "$6x y^3 + 4$"
        },
        {
          "id": "W5-T1-Q01-opt1",
          "text": "$9x^2 y^2 - 5$"
        },
        {
          "id": "W5-T1-Q01-opt2",
          "text": "$6x y^3 - 5$"
        },
        {
          "id": "W5-T1-Q01-opt3",
          "text": "$3x^2 y^3 + 4$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q01-opt0"
      ],
      "explanation": "Treating $y$ as constant and differentiating w.r.t $x$: $\\frac{\\partial}{\\partial x}(3x^2 y^3) = 6xy^3$, $\\frac{\\partial}{\\partial x}(4x) = 4$, constant terms $-5y+7$ drop to 0. Result: $6xy^3 + 4$.",
      "hint": "When computing $\\partial f/\\partial x$, treat $y$ as a constant. Differentiate $3x^2 y^3$ with respect to $x$ only; the $y^3$ factor stays as-is."
    },
    {
      "id": "W5-T1-Q02",
      "week": 5,
      "tier": "core",
      "topic": "First-Order Partial Derivatives (y)",
      "type": "single_select",
      "question": "For $f(x, y) = x^4 \\sin(y) + e^{2x}$, find $\\frac{\\partial f}{\\partial y}$.",
      "options": [
        {
          "id": "W5-T1-Q02-opt0",
          "text": "$x^4 \\cos(y)$"
        },
        {
          "id": "W5-T1-Q02-opt1",
          "text": "$4x^3 \\sin(y) + 2e^{2x}$"
        },
        {
          "id": "W5-T1-Q02-opt2",
          "text": "$x^4 \\cos(y) + 2e^{2x}$"
        },
        {
          "id": "W5-T1-Q02-opt3",
          "text": "$-x^4 \\cos(y)$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q02-opt0"
      ],
      "explanation": "Treating $x$ as constant and differentiating w.r.t $y$: $\\frac{\\partial}{\\partial y}(x^4 \\sin y) = x^4 \\cos y$, while term $e^{2x}$ contains no $y$ so its derivative is $0$. Result: $x^4 \\cos y$.",
      "hint": "When computing $\\partial f/\\partial y$, treat $x$ as a constant. The term $e^{2x}$ contains no $y$, so its partial w.r.t $y$ is 0."
    },
    {
      "id": "W5-T1-Q03",
      "week": 5,
      "tier": "core",
      "topic": "Clairaut's Theorem (Mixed Partials)",
      "type": "single_select",
      "question": "Clairaut's Theorem states that if $f(x,y)$ and its partial derivatives are continuous on a region, then:",
      "options": [
        {
          "id": "W5-T1-Q03-opt0",
          "text": "$\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$ ($f_{xy} = f_{yx}$)"
        },
        {
          "id": "W5-T1-Q03-opt1",
          "text": "$f_{xx} = f_{yy}$"
        },
        {
          "id": "W5-T1-Q03-opt2",
          "text": "$f_x + f_y = 0$"
        },
        {
          "id": "W5-T1-Q03-opt3",
          "text": "$f_{xy} = -f_{yx}$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q03-opt0"
      ],
      "explanation": "Clairaut's Theorem establishes the equality of mixed second-order partial derivatives: $f_{xy} = f_{yx}$ for continuous partials.",
      "hint": "Clairaut's Theorem concerns the symmetry of mixed second-order partials. The key condition is that the partials must be continuous. Which formula states this equality?"
    },
    {
      "id": "W5-T1-Q04",
      "week": 5,
      "tier": "core",
      "topic": "Gradient Vector Definition",
      "type": "single_select",
      "question": "The gradient vector $\\nabla f(x, y)$ of a scalar function $f(x, y)$ is defined as:",
      "options": [
        {
          "id": "W5-T1-Q04-opt0",
          "text": "$\\nabla f = \\begin{pmatrix} \\frac{\\partial f}{\\partial x} \\\\[4pt] \\frac{\\partial f}{\\partial y} \\end{pmatrix}$"
        },
        {
          "id": "W5-T1-Q04-opt1",
          "text": "$\\nabla f = \\frac{\\partial f}{\\partial x} + \\frac{\\partial f}{\\partial y}$"
        },
        {
          "id": "W5-T1-Q04-opt2",
          "text": "$\\nabla f = \\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2}$"
        },
        {
          "id": "W5-T1-Q04-opt3",
          "text": "$\\nabla f = \\sqrt{f_x^2 + f_y^2}$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q04-opt0"
      ],
      "explanation": "The gradient $\\nabla f$ is the vector of first-order partial derivatives: $\\nabla f = \\langle f_x, f_y \\rangle$.",
      "hint": "The gradient is the vector whose components are the first-order partial derivatives: $\\nabla f = (f_x, f_y)$. It is a vector, not a scalar."
    },
    {
      "id": "W5-T1-Q05",
      "week": 5,
      "tier": "core",
      "topic": "Gradient Vector Calculation",
      "type": "single_select",
      "question": "Find the gradient vector $\\nabla f$ of $f(x, y) = 2x^3 - 5x y + y^2$ at the point $(1, 2)$.",
      "options": [
        {
          "id": "W5-T1-Q05-opt0",
          "text": "$\\begin{pmatrix} -4 \\\\ -1 \\end{pmatrix}$"
        },
        {
          "id": "W5-T1-Q05-opt1",
          "text": "$\\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix}$"
        },
        {
          "id": "W5-T1-Q05-opt2",
          "text": "$\\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}$"
        },
        {
          "id": "W5-T1-Q05-opt3",
          "text": "$\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q05-opt0"
      ],
      "explanation": "$f_x = 6x^2 - 5y \\implies f_x(1,2) = 6(1) - 10 = -4$. $f_y = -5x + 2y \\implies f_y(1,2) = -5(1) + 4 = -1$. Gradient is $\\begin{pmatrix}-4\\\\-1\\end{pmatrix}$.",
      "hint": "Compute $f_x = 6x^2 - 5y$ and evaluate at $(1,2)$. Then $f_y = -5x + 2y$ and evaluate at $(1,2)$."
    },
    {
      "id": "W5-T1-Q06",
      "week": 5,
      "tier": "core",
      "topic": "Directional Derivative Formula",
      "type": "single_select",
      "question": "The directional derivative $D_{\\mathbf{u}} f(x, y)$ of $f(x,y)$ in the direction of a UNIT vector $\\mathbf{u} = \\langle u_1, u_2 \\rangle$ is given by:",
      "options": [
        {
          "id": "W5-T1-Q06-opt0",
          "text": "$D_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u} = f_x u_1 + f_y u_2$"
        },
        {
          "id": "W5-T1-Q06-opt1",
          "text": "$D_{\\mathbf{u}} f = \\nabla f \\times \\mathbf{u}$"
        },
        {
          "id": "W5-T1-Q06-opt2",
          "text": "$D_{\\mathbf{u}} f = |\\nabla f| |\\mathbf{u}|$"
        },
        {
          "id": "W5-T1-Q06-opt3",
          "text": "$D_{\\mathbf{u}} f = f_x u_2 - f_y u_1$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q06-opt0"
      ],
      "explanation": "The directional derivative is the dot product of the gradient vector $\\nabla f$ with the unit direction vector $\\mathbf{u}$.",
      "hint": "The directional derivative is the dot product of the gradient with the direction unit vector: $D_\\mathbf{u}f = \\nabla f \\cdot \\mathbf{u}$. Make sure $\\mathbf{u}$ is a unit vector first."
    },
    {
      "id": "W5-T1-Q07",
      "week": 5,
      "tier": "core",
      "topic": "Double Integral Over Rectangle",
      "type": "single_select",
      "question": "Evaluate the double integral $\\int_{0}^{2} \\int_{0}^{3} 4xy \\, dy \\, dx$.",
      "options": [
        {
          "id": "W5-T1-Q07-opt0",
          "text": "$18$"
        },
        {
          "id": "W5-T1-Q07-opt1",
          "text": "$36$"
        },
        {
          "id": "W5-T1-Q07-opt2",
          "text": "$12$"
        },
        {
          "id": "W5-T1-Q07-opt3",
          "text": "$24$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q07-opt1"
      ],
      "explanation": "Inner integral w.r.t $y$: $\\int_0^3 4xy dy = \\left[ 2xy^2 \\right]_0^3 = 18x$. Outer integral w.r.t $x$: $\\int_0^2 18x dx = \\left[ 9x^2 \\right]_0^2 = 36$.",
      "hint": "Evaluate the inner integral first with respect to $y$ (treating $x$ as constant): $\\int_0^3 4xy\\,dy = 2xy^2 \\big|_0^3 = 18x$. Then integrate the result with respect to $x$."
    },
    {
      "id": "W5-T1-Q08",
      "week": 5,
      "tier": "core",
      "topic": "Fubini's Theorem",
      "type": "single_select",
      "question": "Fubini's Theorem states that for a continuous function $f(x, y)$ over a rectangle $R = [a,b] \\times [c,d]$, the double integral $\\iint_R f(x,y) dA$ can be calculated as:",
      "options": [
        {
          "id": "W5-T1-Q08-opt0",
          "text": "Iterated integrals in either order: $\\int_{a}^{b} \\int_{c}^{d} f(x,y) \\, dy \\, dx = \\int_{c}^{d} \\int_{a}^{b} f(x,y) \\, dx \\, dy$"
        },
        {
          "id": "W5-T1-Q08-opt1",
          "text": "The product of single integrals: $\\left(\\int_{a}^{b} f dx\\right) + \\left(\\int_{c}^{d} f dy\\right)$"
        },
        {
          "id": "W5-T1-Q08-opt2",
          "text": "Only by converting to polar coordinates"
        },
        {
          "id": "W5-T1-Q08-opt3",
          "text": "Setting $y = x$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q08-opt0"
      ],
      "explanation": "Fubini's Theorem allows switching the order of integration for continuous integrand functions over rectangular regions.",
      "hint": "Fubini's theorem allows switching the order of integration when the integrand is continuous over a rectangle. Both orderings give the same answer."
    },
    {
      "id": "W5-T1-Q09",
      "week": 5,
      "tier": "core",
      "topic": "Partial Derivative Properties",
      "type": "multiple_select",
      "question": "Which of the following partial derivative relations are CORRECT? (Select all that apply)",
      "options": [
        {
          "id": "W5-T1-Q09-opt0",
          "text": "$\\frac{\\partial}{\\partial x}(x y^2) = y^2$"
        },
        {
          "id": "W5-T1-Q09-opt1",
          "text": "$\\frac{\\partial}{\\partial y}(x y^2) = 2x y$"
        },
        {
          "id": "W5-T1-Q09-opt2",
          "text": "$\\frac{\\partial^2}{\\partial x^2}(x^3 y) = 6x y$"
        },
        {
          "id": "W5-T1-Q09-opt3",
          "text": "$\\frac{\\partial}{\\partial x}(e^y) = e^y$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q09-opt0",
        "W5-T1-Q09-opt1",
        "W5-T1-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are correct. Option 4 is false because $e^y$ is constant with respect to $x$, so its partial derivative w.r.t $x$ is $0$.",
      "hint": "Option 4: $e^y$ has no $x$-dependence. When $x$ does not appear in a term, its partial derivative w.r.t. $x$ is 0 (it acts as a constant)."
    },
    {
      "id": "W5-T1-Q10",
      "week": 5,
      "tier": "core",
      "topic": "Gradient Properties",
      "type": "multiple_select",
      "question": "Select ALL true geometric properties of the gradient vector $\\nabla f(x_0, y_0)$ at a non-critical point:",
      "options": [
        {
          "id": "W5-T1-Q10-opt0",
          "text": "$\\nabla f$ points in the direction of MAXIMUM rate of increase of $f$."
        },
        {
          "id": "W5-T1-Q10-opt1",
          "text": "The magnitude $|\\nabla f|$ gives the maximum rate of change of $f$."
        },
        {
          "id": "W5-T1-Q10-opt2",
          "text": "$\\nabla f$ is PERPENDICULAR (orthogonal) to the level curve $f(x, y) = k$."
        },
        {
          "id": "W5-T1-Q10-opt3",
          "text": "$\\nabla f$ points in the direction of maximum decrease of $f$."
        }
      ],
      "correct_indices": [
        "W5-T1-Q10-opt0",
        "W5-T1-Q10-opt1",
        "W5-T1-Q10-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are fundamental properties of gradients. Option 4 is false ($-\\nabla f$ points in maximum decrease direction).",
      "hint": "Option 4 says $\\nabla f$ points in the maximum decrease direction. Actually $\\nabla f$ gives maximum increase; $-\\nabla f$ gives maximum decrease."
    },
    {
      "id": "W5-T2-Q01",
      "week": 5,
      "tier": "should",
      "topic": "Multivariable Chain Rule",
      "type": "single_select",
      "question": "If $z = f(x, y)$ where $x = x(t)$ and $y = y(t)$, what is the total derivative $\\frac{dz}{dt}$?",
      "options": [
        {
          "id": "W5-T2-Q01-opt0",
          "text": "$\\frac{dz}{dt} = \\frac{\\partial z}{\\partial x} \\frac{dx}{dt} + \\frac{\\partial z}{\\partial y} \\frac{dy}{dt}$"
        },
        {
          "id": "W5-T2-Q01-opt1",
          "text": "$\\frac{dz}{dt} = \\frac{\\partial z}{\\partial x} + \\frac{\\partial z}{\\partial y}$"
        },
        {
          "id": "W5-T2-Q01-opt2",
          "text": "$\\frac{dz}{dt} = \\frac{\\partial z}{\\partial x} \\frac{dy}{dt} + \\frac{\\partial z}{\\partial y} \\frac{dx}{dt}$"
        },
        {
          "id": "W5-T2-Q01-opt3",
          "text": "$\\frac{dz}{dt} = \\frac{\\partial^2 z}{\\partial x \\partial y} \\frac{dx}{dt} \\frac{dy}{dt}$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q01-opt0"
      ],
      "explanation": "The multivariable chain rule sums partial derivatives multiplied by rates of parameter change: $\\frac{dz}{dt} = z_x \\dot{x} + z_y \\dot{y}$.",
      "hint": "The multivariable chain rule: each partial derivative of $z$ with respect to intermediate variables gets multiplied by that variable's derivative with respect to the final parameter $t$."
    },
    {
      "id": "W5-T2-Q02",
      "week": 5,
      "tier": "should",
      "topic": "Tangent Plane Equation",
      "type": "single_select",
      "question": "Find the equation of the tangent plane to the surface $z = x^2 + 3y^2$ at the point $(2, 1, 7)$.",
      "options": [
        {
          "id": "W5-T2-Q02-opt0",
          "text": "$z - 7 = 4(x - 2) + 6(y - 1)$"
        },
        {
          "id": "W5-T2-Q02-opt1",
          "text": "$z - 7 = 2(x - 2) + 3(y - 1)$"
        },
        {
          "id": "W5-T2-Q02-opt2",
          "text": "$z = 4x + 6y$"
        },
        {
          "id": "W5-T2-Q02-opt3",
          "text": "$z - 7 = 4(x - 2) - 6(y - 1)$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q02-opt0"
      ],
      "explanation": "$z_x = 2x \\implies z_x(2,1) = 4$. $z_y = 6y \\implies z_y(2,1) = 6$. Tangent plane formula $z - z_0 = z_x(x-x_0) + z_y(y-y_0) \\implies z - 7 = 4(x-2) + 6(y-1)$.",
      "hint": "Tangent plane formula: $z - z_0 = f_x(x_0,y_0)(x-x_0) + f_y(x_0,y_0)(y-y_0)$. Compute $f_x$ and $f_y$ and evaluate at $(2,1)$."
    },
    {
      "id": "W5-T2-Q03",
      "week": 5,
      "tier": "should",
      "topic": "Critical Points Identification",
      "type": "single_select",
      "question": "Find the critical point of $f(x, y) = x^2 + y^2 - 4x + 6y + 10$.",
      "options": [
        {
          "id": "W5-T2-Q03-opt0",
          "text": "$(2, -3)$"
        },
        {
          "id": "W5-T2-Q03-opt1",
          "text": "$(-2, 3)$"
        },
        {
          "id": "W5-T2-Q03-opt2",
          "text": "$(4, -6)$"
        },
        {
          "id": "W5-T2-Q03-opt3",
          "text": "$(0, 0)$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q03-opt0"
      ],
      "explanation": "Set partial derivatives to zero: $f_x = 2x - 4 = 0 \\implies x = 2$. $f_y = 2y + 6 = 0 \\implies y = -3$. Critical point is $(2, -3)$.",
      "hint": "Set $f_x = 0$ and $f_y = 0$ simultaneously. Solve each equation for $x$ and $y$ respectively."
    },
    {
      "id": "W5-T2-Q04",
      "week": 5,
      "tier": "should",
      "topic": "Second Derivative Test (Hessian Discriminant)",
      "type": "single_select",
      "question": "Let $(x_0, y_0)$ be a critical point of $f(x,y)$. Define discriminant $D = f_{xx} f_{yy} - (f_{xy})^2$. What does $D < 0$ indicate?",
      "options": [
        {
          "id": "W5-T2-Q04-opt0",
          "text": "$f$ has a SADDLE POINT at $(x_0, y_0)$"
        },
        {
          "id": "W5-T2-Q04-opt1",
          "text": "$f$ has a Local Minimum at $(x_0, y_0)$"
        },
        {
          "id": "W5-T2-Q04-opt2",
          "text": "$f$ has a Local Maximum at $(x_0, y_0)$"
        },
        {
          "id": "W5-T2-Q04-opt3",
          "text": "The test is Inconclusive"
        }
      ],
      "correct_indices": [
        "W5-T2-Q04-opt0"
      ],
      "explanation": "If $D = f_{xx}f_{yy} - (f_{xy})^2 < 0$, the curvature has opposite signs in orthogonal directions, establishing a Saddle Point.",
      "hint": "The discriminant $D = f_{xx}f_{yy} - f_{xy}^2$. When $D < 0$, the surface curves up in one direction and down in another — a saddle configuration."
    },
    {
      "id": "W5-T2-Q05",
      "week": 5,
      "tier": "should",
      "topic": "Second Derivative Test (Local Minimum)",
      "type": "single_select",
      "question": "At critical point $(x_0, y_0)$, if discriminant $D = f_{xx} f_{yy} - (f_{xy})^2 > 0$ and $f_{xx} > 0$, what is the nature of the critical point?",
      "options": [
        {
          "id": "W5-T2-Q05-opt0",
          "text": "Local Minimum"
        },
        {
          "id": "W5-T2-Q05-opt1",
          "text": "Local Maximum"
        },
        {
          "id": "W5-T2-Q05-opt2",
          "text": "Saddle Point"
        },
        {
          "id": "W5-T2-Q05-opt3",
          "text": "Inconclusive"
        }
      ],
      "correct_indices": [
        "W5-T2-Q05-opt0"
      ],
      "explanation": "When $D > 0$ and $f_{xx} > 0$ (concave up), the surface reaches a Local Minimum.",
      "hint": "When $D > 0$ and $f_{xx} > 0$, the surface is concave up in all directions at the critical point — this is a local minimum."
    },
    {
      "id": "W5-T2-Q06",
      "week": 5,
      "tier": "should",
      "topic": "Double Integral Over Type I Region",
      "type": "single_select",
      "question": "Evaluate $\\int_{0}^{1} \\int_{0}^{x} (x + y) \\, dy \\, dx$.",
      "options": [
        {
          "id": "W5-T2-Q06-opt0",
          "text": "$\\frac{1}{2}$"
        },
        {
          "id": "W5-T2-Q06-opt1",
          "text": "$\\frac{1}{3}$"
        },
        {
          "id": "W5-T2-Q06-opt2",
          "text": "$\\frac{2}{3}$"
        },
        {
          "id": "W5-T2-Q06-opt3",
          "text": "$\\frac{1}{4}$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q06-opt0"
      ],
      "explanation": "Inner integral w.r.t $y$: $\\int_0^x (x+y)dy = \\left[ xy + \\frac{y^2}{2} \\right]_0^x = x^2 + \\frac{x^2}{2} = \\frac{3x^2}{2}$. Outer integral w.r.t $x$: $\\int_0^1 \\frac{3x^2}{2} dx = \\left[ \\frac{x^3}{2} \\right]_0^1 = \\frac{1}{2}$.",
      "hint": "Evaluate the inner integral (with respect to $y$, from 0 to $x$) first, then integrate the result with respect to $x$ from 0 to 1."
    },
    {
      "id": "W5-T2-Q07",
      "week": 5,
      "tier": "should",
      "topic": "Polar Double Integrals (Area Element)",
      "type": "single_select",
      "question": "When converting a double integral $\\iint_R f(x,y) dx dy$ to polar coordinates $(r, \\theta)$, what is the area differential element $dA$?",
      "options": [
        {
          "id": "W5-T2-Q07-opt0",
          "text": "$r \\, dr \\, d\\theta$"
        },
        {
          "id": "W5-T2-Q07-opt1",
          "text": "$dr \\, d\\theta$"
        },
        {
          "id": "W5-T2-Q07-opt2",
          "text": "$r^2 \\, dr \\, d\\theta$"
        },
        {
          "id": "W5-T2-Q07-opt3",
          "text": "$\\frac{1}{r} \\, dr \\, d\\theta$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q07-opt0"
      ],
      "explanation": "The polar Jacobian transformation factor introduces an extra factor of $r$, making area element $dA = r dr d\\theta$.",
      "hint": "The polar transformation maps $(x,y) \\to (r\\cos\\theta, r\\sin\\theta)$. The Jacobian of this transformation introduces a factor — compute $|\\partial(x,y)/\\partial(r,\\theta)|$."
    },
    {
      "id": "W5-T2-Q08",
      "week": 5,
      "tier": "should",
      "topic": "Polar Integration Area Calculation",
      "type": "single_select",
      "question": "Evaluate $\\iint_D dx dy$ over the quarter circle $D: x^2 + y^2 \\le 4, x \\ge 0, y \\ge 0$ using polar coordinates.",
      "options": [
        {
          "id": "W5-T2-Q08-opt0",
          "text": "$\\pi$"
        },
        {
          "id": "W5-T2-Q08-opt1",
          "text": "$2\\pi$"
        },
        {
          "id": "W5-T2-Q08-opt2",
          "text": "$4\\pi$"
        },
        {
          "id": "W5-T2-Q08-opt3",
          "text": "$\\frac{\\pi}{2}$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q08-opt0"
      ],
      "explanation": "Quarter circle $r \\in [0, 2], \\theta \\in [0, \\pi/2]$. Area = $\\int_0^{\\pi/2} \\int_0^2 r dr d\\theta = \\left(\\frac{\\pi}{2}\\right) \\left[ \\frac{r^2}{2} \\right]_0^2 = \\left(\\frac{\\pi}{2}\\right)(2) = \\pi$.",
      "hint": "Convert to polar coordinates: $r$ ranges from 0 to 2, $\\theta$ from 0 to $\\pi/2$. Don't forget the Jacobian factor $r$ in $dA = r\\,dr\\,d\\theta$."
    },
    {
      "id": "W5-T2-Q09",
      "week": 5,
      "tier": "should",
      "topic": "Maximum Rate of Increase Calculation",
      "type": "single_select",
      "question": "What is the MAXIMUM rate of increase of $f(x, y) = x^2 y + 3y^2$ at the point $(2, 1)$?",
      "options": [
        {
          "id": "W5-T2-Q09-opt0",
          "text": "$\\sqrt{116} = 2\\sqrt{29}$"
        },
        {
          "id": "W5-T2-Q09-opt1",
          "text": "$10$"
        },
        {
          "id": "W5-T2-Q09-opt2",
          "text": "$\\sqrt{80}$"
        },
        {
          "id": "W5-T2-Q09-opt3",
          "text": "$12$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q09-opt0"
      ],
      "explanation": "$f_x = 2xy \\implies f_x(2,1) = 4$. $f_y = x^2 + 6y \\implies f_y(2,1) = 4 + 6 = 10$. Max rate of increase is $|\\nabla f| = \\sqrt{4^2 + 10^2} = \\sqrt{16 + 100} = \\sqrt{116} = 2\\sqrt{29}$.",
      "hint": "The maximum rate of increase equals the magnitude of the gradient $|\\nabla f|$. Compute $f_x$ and $f_y$ at $(2,1)$, then find $\\sqrt{f_x^2 + f_y^2}$."
    },
    {
      "id": "W5-T2-Q10",
      "week": 5,
      "tier": "should",
      "topic": "Chain Rule Partial Derivatives",
      "type": "single_select",
      "question": "If $z = f(x, y)$ with $x = u^2 + v^2$ and $y = u v$, what is $\\frac{\\partial z}{\\partial u}$ by the chain rule?",
      "options": [
        {
          "id": "W5-T2-Q10-opt0",
          "text": "$2u \\frac{\\partial z}{\\partial x} + v \\frac{\\partial z}{\\partial y}$"
        },
        {
          "id": "W5-T2-Q10-opt1",
          "text": "$2u \\frac{\\partial z}{\\partial x} + u \\frac{\\partial z}{\\partial y}$"
        },
        {
          "id": "W5-T2-Q10-opt2",
          "text": "$v \\frac{\\partial z}{\\partial x} + 2u \\frac{\\partial z}{\\partial y}$"
        },
        {
          "id": "W5-T2-Q10-opt3",
          "text": "$2u \\frac{\\partial z}{\\partial u} + v \\frac{\\partial z}{\\partial v}$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q10-opt0"
      ],
      "explanation": "Chain rule $\\frac{\\partial z}{\\partial u} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial u} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial u}$. Since $x_u = 2u$ and $y_u = v$, result is $2u z_x + v z_y$.",
      "hint": "Chain rule: $\\partial z/\\partial u = (\\partial z/\\partial x)(\\partial x/\\partial u) + (\\partial z/\\partial y)(\\partial y/\\partial u)$. Compute $x_u = 2u$ and $y_u = v$."
    },
    {
      "id": "W5-T3-Q01",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Lagrange Multipliers Method",
      "type": "single_select",
      "question": "To find extreme values of $f(x, y)$ subject to constraint $g(x, y) = k$, Lagrange's method solves which system of vector equations?",
      "options": [
        {
          "id": "W5-T3-Q01-opt0",
          "text": "$\\nabla f(x, y) = \\lambda \\nabla g(x, y) \\quad \\text{and} \\quad g(x, y) = k$"
        },
        {
          "id": "W5-T3-Q01-opt1",
          "text": "$\\nabla f(x, y) \\cdot \\nabla g(x, y) = 0$"
        },
        {
          "id": "W5-T3-Q01-opt2",
          "text": "$\\nabla f(x, y) + \\nabla g(x, y) = \\mathbf{0}$"
        },
        {
          "id": "W5-T3-Q01-opt3",
          "text": "$\\nabla f(x, y) = k$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q01-opt0"
      ],
      "explanation": "At constrained extrema, gradients of objective $f$ and constraint $g$ are parallel: $\\nabla f = \\lambda \\nabla g$ with constraint $g(x,y) = k$.",
      "hint": "At a constrained extremum, $\\nabla f$ and $\\nabla g$ must be parallel (one is a scalar multiple of the other). This scalar is the Lagrange multiplier $\\lambda$."
    },
    {
      "id": "W5-T3-Q02",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Lagrange Multipliers Optimization",
      "type": "single_select",
      "question": "Find the maximum value of $f(x, y) = xy$ subject to constraint $x + y = 10$ ($x, y > 0$).",
      "options": [
        {
          "id": "W5-T3-Q02-opt0",
          "text": "$25$"
        },
        {
          "id": "W5-T3-Q02-opt1",
          "text": "$20$"
        },
        {
          "id": "W5-T3-Q02-opt2",
          "text": "$16$"
        },
        {
          "id": "W5-T3-Q02-opt3",
          "text": "$30$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q02-opt0"
      ],
      "explanation": "$\\nabla f = \\langle y, x \\rangle = \\lambda \\langle 1, 1 \\rangle \\implies y = \\lambda, x = \\lambda \\implies x = y$. Constraint $x + x = 10 \\implies x = 5, y = 5$. Max value $f(5,5) = 25$.",
      "hint": "Set $\\nabla(xy) = \\lambda \\nabla(x+y)$. This gives $y = \\lambda$ and $x = \\lambda$, so $x = y$. Substitute into the constraint $x + y = 10$."
    },
    {
      "id": "W5-T3-Q03",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Hessian Matrix",
      "type": "single_select",
      "question": "The Hessian matrix $\\mathbf{H}(x, y)$ of a twice-differentiable function $f(x, y)$ is:",
      "options": [
        {
          "id": "W5-T3-Q03-opt0",
          "text": "$\\mathbf{H} = \\begin{pmatrix} f_{xx} & f_{xy} \\\\[4pt] f_{yx} & f_{yy} \\end{pmatrix}$"
        },
        {
          "id": "W5-T3-Q03-opt1",
          "text": "$\\mathbf{H} = \\begin{pmatrix} f_x & f_y \\end{pmatrix}$"
        },
        {
          "id": "W5-T3-Q03-opt2",
          "text": "$\\mathbf{H} = \\begin{pmatrix} f_{xx} & 0 \\\\[4pt] 0 & f_{yy} \\end{pmatrix}$"
        },
        {
          "id": "W5-T3-Q03-opt3",
          "text": "$\\mathbf{H} = f_{xx} f_{yy} - f_{xy}^2$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q03-opt0"
      ],
      "explanation": "The Hessian is the square matrix of second-order partial derivatives $\\mathbf{H} = \\begin{pmatrix} f_{xx} & f_{xy} \\\\ f_{yx} & f_{yy} \\end{pmatrix}$.",
      "hint": "The Hessian is a $2\\times 2$ matrix of all second-order partial derivatives. The off-diagonal terms are the mixed partials $f_{xy} = f_{yx}$."
    },
    {
      "id": "W5-T3-Q04",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Center of Mass of Planar Lamina",
      "type": "single_select",
      "question": "For a planar lamina occupying region $D$ with mass density $\\rho(x, y)$, the $x$-coordinate of center of mass $\\bar{x}$ is:",
      "options": [
        {
          "id": "W5-T3-Q04-opt0",
          "text": "$\\bar{x} = \\frac{1}{M} \\iint_D x \\rho(x, y) \\, dA$"
        },
        {
          "id": "W5-T3-Q04-opt1",
          "text": "$\\bar{x} = \\frac{1}{M} \\iint_D y \\rho(x, y) \\, dA$"
        },
        {
          "id": "W5-T3-Q04-opt2",
          "text": "$\\bar{x} = \\iint_D x \\, dA$"
        },
        {
          "id": "W5-T3-Q04-opt3",
          "text": "$\\bar{x} = \\frac{1}{2M} \\iint_D x^2 \\rho(x, y) \\, dA$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q04-opt0"
      ],
      "explanation": "Total mass $M = \\iint_D \\rho dA$. Moment about $y$-axis $M_y = \\iint_D x \\rho dA$. Center of mass $x$-coordinate $\\bar{x} = \\frac{M_y}{M} = \\frac{1}{M} \\iint_D x \\rho dA$.",
      "hint": "The centroid formula $\\bar x = M_y/M$ where $M_y = \\iint_D x\\rho(x,y)dA$ is the moment about the $y$-axis and $M = \\iint_D \\rho\\,dA$ is total mass."
    },
    {
      "id": "W5-T3-Q05",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Jacobian Determinant Definition",
      "type": "single_select",
      "question": "The Jacobian determinant $J(u, v) = \\frac{\\partial(x, y)}{\\partial(u, v)}$ for transformation $x = x(u,v), y = y(u,v)$ is:",
      "options": [
        {
          "id": "W5-T3-Q05-opt0",
          "text": "$\\begin{vmatrix} \\frac{\\partial x}{\\partial u} & \\frac{\\partial x}{\\partial v} \\\\[4pt] \\frac{\\partial y}{\\partial u} & \\frac{\\partial y}{\\partial v} \\end{vmatrix} = \\frac{\\partial x}{\\partial u}\\frac{\\partial y}{\\partial v} - \\frac{\\partial x}{\\partial v}\\frac{\\partial y}{\\partial u}$"
        },
        {
          "id": "W5-T3-Q05-opt1",
          "text": "$\\frac{\\partial x}{\\partial u} + \\frac{\\partial y}{\\partial v}$"
        },
        {
          "id": "W5-T3-Q05-opt2",
          "text": "$\\frac{\\partial x}{\\partial u} \\frac{\\partial x}{\\partial v} - \\frac{\\partial y}{\\partial u} \\frac{\\partial y}{\\partial v}$"
        },
        {
          "id": "W5-T3-Q05-opt3",
          "text": "$\\sqrt{x_u^2 + y_v^2}$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q05-opt0"
      ],
      "explanation": "The Jacobian determinant scales area elements under coordinate transformations: $dx dy = |J(u,v)| du dv$.",
      "hint": "The Jacobian is the determinant of the $2\\times2$ matrix of partial derivatives: $\\begin{vmatrix} x_u & x_v \\\\ y_u & y_v \\end{vmatrix}$."
    },
    {
      "id": "W5-T3-Q06",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Polar Transformation Jacobian",
      "type": "single_select",
      "question": "Calculate the Jacobian determinant $J(r, \\theta) = \\frac{\\partial(x, y)}{\\partial(r, \\theta)}$ for polar transformation $x = r\\cos\\theta, y = r\\sin\\theta$.",
      "options": [
        {
          "id": "W5-T3-Q06-opt0",
          "text": "$r$"
        },
        {
          "id": "W5-T3-Q06-opt1",
          "text": "$r^2$"
        },
        {
          "id": "W5-T3-Q06-opt2",
          "text": "$1$"
        },
        {
          "id": "W5-T3-Q06-opt3",
          "text": "$\\cos\\theta + \\sin\\theta$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q06-opt0"
      ],
      "explanation": "$J = \\begin{vmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{vmatrix} = r\\cos^2\\theta - (-r\\sin^2\\theta) = r(\\cos^2\\theta + \\sin^2\\theta) = r$.",
      "hint": "With $x = r\\cos\\theta, y = r\\sin\\theta$: compute $x_r, x_\\theta, y_r, y_\\theta$ and evaluate the $2\\times2$ determinant. Use $\\sin^2 + \\cos^2 = 1$."
    },
    {
      "id": "W5-T3-Q07",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Triple Integral Rectangular Box",
      "type": "single_select",
      "question": "Evaluate the triple integral $\\int_0^1 \\int_0^2 \\int_0^3 1 \\, dz \\, dy \\, dx$.",
      "options": [
        {
          "id": "W5-T3-Q07-opt0",
          "text": "$6$"
        },
        {
          "id": "W5-T3-Q07-opt1",
          "text": "$3$"
        },
        {
          "id": "W5-T3-Q07-opt2",
          "text": "$12$"
        },
        {
          "id": "W5-T3-Q07-opt3",
          "text": "$1$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q07-opt0"
      ],
      "explanation": "Integral of 1 over a rectangular box $[0,1] \\times [0,2] \\times [0,3]$ equals the box volume: $1 \\times 2 \\times 3 = 6$.",
      "hint": "A triple integral of 1 over a rectangular box gives the volume. The box has dimensions $1 \\times 2 \\times 3$."
    },
    {
      "id": "W5-T3-Q08",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Reversing Order of Integration",
      "type": "single_select",
      "question": "Reverse the integration order for $\\int_0^1 \\int_x^1 e^{y^2} dy dx$ to evaluate it.",
      "options": [
        {
          "id": "W5-T3-Q08-opt0",
          "text": "$\\frac{1}{2}(e - 1)$"
        },
        {
          "id": "W5-T3-Q08-opt1",
          "text": "$e - 1$"
        },
        {
          "id": "W5-T3-Q08-opt2",
          "text": "$\\frac{1}{2}e$"
        },
        {
          "id": "W5-T3-Q08-opt3",
          "text": "$2(e - 1)$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q08-opt0"
      ],
      "explanation": "Region $D: 0 \\le x \\le y \\le 1$. Reversing order: $\\int_0^1 \\int_0^y e^{y^2} dx dy = \\int_0^1 y e^{y^2} dy = \\left[ \\frac{1}{2}e^{y^2} \\right]_0^1 = \\frac{1}{2}(e - 1)$.",
      "hint": "The original region: $0 \\le x \\le 1$, $x \\le y \\le 1$. When reversing, fix $y$ first: $y$ ranges from 0 to 1, and for each $y$, $x$ ranges from 0 to $y$."
    },
    {
      "id": "W5-T3-Q09",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Lagrange Multiplier Interpretation",
      "type": "multiple_select",
      "question": "Which of the following statements regarding Lagrange multipliers $\\lambda$ are CORRECT? (Select all that apply)",
      "options": [
        {
          "id": "W5-T3-Q09-opt0",
          "text": "$\\lambda$ represents the shadow price or rate of change of optimal $f$ w.r.t constraint parameter $k$: $\\frac{df^*}{dk} = \\lambda$."
        },
        {
          "id": "W5-T3-Q09-opt1",
          "text": "At optimal point $(x^*, y^*)$, $\\nabla f$ and $\\nabla g$ are collinear."
        },
        {
          "id": "W5-T3-Q09-opt2",
          "text": "If $\\lambda = 0$, the constraint is inactive at the unconstrained extremum."
        },
        {
          "id": "W5-T3-Q09-opt3",
          "text": "$\\lambda$ must always be positive."
        }
      ],
      "correct_indices": [
        "W5-T3-Q09-opt0",
        "W5-T3-Q09-opt1"
      ],
      "explanation": "Options 1 and 2 are correct. Option 3 is false: for an equality constraint, $\\lambda = 0$ indicates a stationary objective (under the usual regularity condition), not an inactive constraint. Option 4 is also false because $\\lambda$ can be positive, negative, or zero.",
      "hint": "Option 4 claims $\\lambda > 0$ always. However, $\\lambda$ is a ratio of directional rates and can be any real number, including zero or negative."
    },
    {
      "id": "W5-T3-Q10",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Volume under Surface",
      "type": "single_select",
      "question": "Find the volume of the solid lying under paraboloid $z = 4 - x^2 - y^2$ and above the $xy$-plane ($z \\ge 0$).",
      "options": [
        {
          "id": "W5-T3-Q10-opt0",
          "text": "$8\\pi$"
        },
        {
          "id": "W5-T3-Q10-opt1",
          "text": "$4\\pi$"
        },
        {
          "id": "W5-T3-Q10-opt2",
          "text": "$16\\pi$"
        },
        {
          "id": "W5-T3-Q10-opt3",
          "text": "$2\\pi$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q10-opt0"
      ],
      "explanation": "Boundary $4 - r^2 = 0 \\implies r = 2$. Volume = $\\int_0^{2\\pi} \\int_0^2 (4 - r^2) r dr d\\theta = 2\\pi \\left[ 2r^2 - \\frac{r^4}{4} \\right]_0^2 = 2\\pi (8 - 4) = 8\\pi$.",
      "hint": "Convert to polar: $z \\geq 0$ when $r^2 \\leq 4$, so $r$ from 0 to 2. Volume $= \\int_0^{2\\pi}\\int_0^2 (4 - r^2) r\\,dr\\,d\\theta$."
    },
    {
      "id": "W5-T4-Q01",
      "week": 5,
      "tier": "extra",
      "topic": "Cylindrical Coordinates Transformation",
      "type": "single_select",
      "question": "In cylindrical coordinates $(r, \\theta, z)$, the volume element $dV$ is given by:",
      "options": [
        {
          "id": "W5-T4-Q01-opt0",
          "text": "$r \\, dr \\, d\\theta \\, dz$"
        },
        {
          "id": "W5-T4-Q01-opt1",
          "text": "$dr \\, d\\theta \\, dz$"
        },
        {
          "id": "W5-T4-Q01-opt2",
          "text": "$r^2 \\sin(\\theta) \\, dr \\, d\\theta \\, dz$"
        },
        {
          "id": "W5-T4-Q01-opt3",
          "text": "$r^2 \\, dr \\, d\\theta \\, dz$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q01-opt0"
      ],
      "explanation": "Cylindrical coordinates combine polar in $(x,y)$ plane with linear $z$: $dV = dx dy dz = r dr d\\theta dz$.",
      "hint": "Cylindrical coordinates extend polar coordinates in 2D by adding a $z$-axis. The Jacobian factor is $r$ (same as polar), so $dV = r\\,dr\\,d\\theta\\,dz$."
    },
    {
      "id": "W5-T4-Q02",
      "week": 5,
      "tier": "extra",
      "topic": "Spherical Coordinates Volume Element",
      "type": "single_select",
      "question": "In spherical coordinates $(\\rho, \\theta, \\phi)$ (where $\\phi$ is the polar angle from positive $z$-axis), what is the volume element $dV$?",
      "options": [
        {
          "id": "W5-T4-Q02-opt0",
          "text": "$\\rho^2 \\sin(\\phi) \\, d\\rho \\, d\\phi \\, d\\theta$"
        },
        {
          "id": "W5-T4-Q02-opt1",
          "text": "$\\rho \\sin(\\phi) \\, d\\rho \\, d\\phi \\, d\\theta$"
        },
        {
          "id": "W5-T4-Q02-opt2",
          "text": "$\\rho^2 \\cos(\\phi) \\, d\\rho \\, d\\phi \\, d\\theta$"
        },
        {
          "id": "W5-T4-Q02-opt3",
          "text": "$\\rho^2 \\, d\\rho \\, d\\phi \\, d\\theta$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q02-opt0"
      ],
      "explanation": "Spherical Jacobian determinant yields volume element $dV = \\rho^2 \\sin(\\phi) d\\rho d\\phi d\\theta$.",
      "hint": "For spherical coordinates, the Jacobian is $\\rho^2 \\sin\\phi$. Note $\\phi$ is the polar angle from the positive $z$-axis (colatitude)."
    },
    {
      "id": "W5-T4-Q03",
      "week": 5,
      "tier": "extra",
      "topic": "Divergence of Vector Field",
      "type": "single_select",
      "question": "Calculate the divergence $\\nabla \\cdot \\mathbf{F}$ of 3D vector field $\\mathbf{F}(x, y, z) = \\langle x^3, y^3, z^3 \\rangle$.",
      "options": [
        {
          "id": "W5-T4-Q03-opt0",
          "text": "$3(x^2 + y^2 + z^2)$"
        },
        {
          "id": "W5-T4-Q03-opt1",
          "text": "$3x^2 + 3y^2$"
        },
        {
          "id": "W5-T4-Q03-opt2",
          "text": "$\\langle 3x^2, 3y^2, 3z^2 \\rangle$"
        },
        {
          "id": "W5-T4-Q03-opt3",
          "text": "$6(x + y + z)$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q03-opt0"
      ],
      "explanation": "Divergence $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z} = 3x^2 + 3y^2 + 3z^2 = 3(x^2 + y^2 + z^2)$.",
      "hint": "Divergence: add the partial derivatives of each component with respect to its own variable: $\\nabla \\cdot \\mathbf{F} = \\partial P/\\partial x + \\partial Q/\\partial y + \\partial R/\\partial z$."
    },
    {
      "id": "W5-T4-Q04",
      "week": 5,
      "tier": "extra",
      "topic": "Curl of Vector Field",
      "type": "single_select",
      "question": "Calculate the curl $\\nabla \\times \\mathbf{F}$ of vector field $\\mathbf{F}(x, y, z) = \\langle -y, x, z \\rangle$.",
      "options": [
        {
          "id": "W5-T4-Q04-opt0",
          "text": "$\\begin{pmatrix} 0 \\\\ 0 \\\\ 2 \\end{pmatrix}$"
        },
        {
          "id": "W5-T4-Q04-opt1",
          "text": "$\\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$"
        },
        {
          "id": "W5-T4-Q04-opt2",
          "text": "$\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$"
        },
        {
          "id": "W5-T4-Q04-opt3",
          "text": "$\\begin{pmatrix} 0 \\\\ 0 \\\\ -2 \\end{pmatrix}$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q04-opt0"
      ],
      "explanation": "Curl $\\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ -y & x & z \\end{vmatrix} = \\langle 0-0, 0-0, 1 - (-1) \\rangle = \\langle 0, 0, 2 \\rangle$.",
      "hint": "Curl formula: $\\nabla \\times \\mathbf{F} = \\begin{vmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ F_1 & F_2 & F_3\\end{vmatrix}$. Compute the three component differences carefully."
    },
    {
      "id": "W5-T4-Q05",
      "week": 5,
      "tier": "extra",
      "topic": "Conservative Vector Field Condition",
      "type": "single_select",
      "question": "A vector field $\\mathbf{F}$ defined on a simply connected domain is CONSERVATIVE ($\\mathbf{F} = \\nabla f$) if and only if its curl satisfies:",
      "options": [
        {
          "id": "W5-T4-Q05-opt0",
          "text": "$\\nabla \\times \\mathbf{F} = \\mathbf{0}$"
        },
        {
          "id": "W5-T4-Q05-opt1",
          "text": "$\\nabla \\cdot \\mathbf{F} = 0$"
        },
        {
          "id": "W5-T4-Q05-opt2",
          "text": "$\\nabla \\cdot \\mathbf{F} = 1$"
        },
        {
          "id": "W5-T4-Q05-opt3",
          "text": "$\\nabla \\times \\mathbf{F} = \\mathbf{F}$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q05-opt0"
      ],
      "explanation": "Irrotational vector fields ($\\nabla \\times \\mathbf{F} = \\mathbf{0}$) on simply connected regions are conservative potential fields.",
      "hint": "A vector field is conservative if and only if it can be written as the gradient of a scalar potential. For a simply connected domain, this is equivalent to zero curl."
    },
    {
      "id": "W5-T4-Q06",
      "week": 5,
      "tier": "extra",
      "topic": "Fundamental Theorem of Line Integrals",
      "type": "single_select",
      "question": "If $\\mathbf{F} = \\nabla f$ is a conservative field, evaluate the line integral $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ along any smooth path $C$ from $A$ to $B$.",
      "options": [
        {
          "id": "W5-T4-Q06-opt0",
          "text": "$f(B) - f(A)$"
        },
        {
          "id": "W5-T4-Q06-opt1",
          "text": "$f(A) - f(B)$"
        },
        {
          "id": "W5-T4-Q06-opt2",
          "text": "$0$ regardless of $A$ and $B$"
        },
        {
          "id": "W5-T4-Q06-opt3",
          "text": "$\\nabla f(B) \\cdot \\nabla f(A)$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q06-opt0"
      ],
      "explanation": "By the Fundamental Theorem of Line Integrals: $\\int_C \\nabla f \\cdot d\\mathbf{r} = f(B) - f(A)$, demonstrating path independence.",
      "hint": "The Fundamental Theorem of Line Integrals: $\\int_C \\nabla f \\cdot d\\mathbf{r} = f(\\text{end}) - f(\\text{start})$. Only the endpoints matter; the path does not."
    },
    {
      "id": "W5-T4-Q07",
      "week": 5,
      "tier": "extra",
      "topic": "Green's Theorem in the Plane",
      "type": "single_select",
      "question": "Green's Theorem relates line integral around positively oriented simple closed curve $C$ to double integral over bounded region $D$ via:",
      "options": [
        {
          "id": "W5-T4-Q07-opt0",
          "text": "$\\oint_C (P \\, dx + Q \\, dy) = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA$"
        },
        {
          "id": "W5-T4-Q07-opt1",
          "text": "$\\oint_C (P \\, dx + Q \\, dy) = \\iint_D \\left(\\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y}\\right) dA$"
        },
        {
          "id": "W5-T4-Q07-opt2",
          "text": "$\\oint_C (P \\, dx + Q \\, dy) = \\iint_D (Q - P) dA$"
        },
        {
          "id": "W5-T4-Q07-opt3",
          "text": "$\\oint_C (P \\, dx + Q \\, dy) = 0$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q07-opt0"
      ],
      "explanation": "Green's Theorem connects circulation around boundary $C$ to 2D curl component $\\iint_D (Q_x - P_y) dA$ over region $D$.",
      "hint": "Green's Theorem connects a line integral around the boundary to a double integral of the 2D curl $Q_x - P_y$ over the enclosed region."
    },
    {
      "id": "W5-T4-Q08",
      "week": 5,
      "tier": "extra",
      "topic": "Spherical Integration (Solid Sphere)",
      "type": "single_select",
      "question": "Evaluate the volume of a solid sphere of radius $R$ using spherical coordinates $\\int_0^{2\\pi} \\int_0^{\\pi} \\int_0^R \\rho^2 \\sin(\\phi) \\, d\\rho \\, d\\phi \\, d\\theta$.",
      "options": [
        {
          "id": "W5-T4-Q08-opt0",
          "text": "$\\frac{4}{3}\\pi R^3$"
        },
        {
          "id": "W5-T4-Q08-opt1",
          "text": "$4\\pi R^3$"
        },
        {
          "id": "W5-T4-Q08-opt2",
          "text": "$\\frac{2}{3}\\pi R^3$"
        },
        {
          "id": "W5-T4-Q08-opt3",
          "text": "$\\pi R^3$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q08-opt0"
      ],
      "explanation": "$\\int_0^{2\\pi} d\\theta \\cdot \\int_0^\\pi \\sin\\phi d\\phi \\cdot \\int_0^R \\rho^2 d\\rho = (2\\pi)(2)\\left(\\frac{R^3}{3}\\right) = \\frac{4}{3}\\pi R^3$.",
      "hint": "$\\int_0^{2\\pi}d\\theta = 2\\pi$, $\\int_0^\\pi \\sin\\phi\\,d\\phi = [-\\cos\\phi]_0^\\pi = 2$, $\\int_0^R \\rho^2 d\\rho = R^3/3$. Multiply all three factors."
    },
    {
      "id": "W5-T4-Q09",
      "week": 5,
      "tier": "extra",
      "topic": "Vector Field Identities",
      "type": "multiple_select",
      "question": "Which of the following vector calculus identities are universally TRUE for smooth scalar fields $f$ and vector fields $\\mathbf{F}$? (Select all that apply)",
      "options": [
        {
          "id": "W5-T4-Q09-opt0",
          "text": "$\\nabla \\times (\\nabla f) = \\mathbf{0}$ (Curl of any gradient field is zero)"
        },
        {
          "id": "W5-T4-Q09-opt1",
          "text": "$\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$ (Divergence of any curl field is zero)"
        },
        {
          "id": "W5-T4-Q09-opt2",
          "text": "$\\nabla \\cdot (\\nabla f) = \\nabla^2 f$ (Laplacian operator)"
        },
        {
          "id": "W5-T4-Q09-opt3",
          "text": "$\\nabla \\times (\\nabla \\times \\mathbf{F}) = \\mathbf{0}$ for all $\\mathbf{F}$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q09-opt0",
        "W5-T4-Q09-opt1",
        "W5-T4-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are standard vector calculus identities. Option 4 is false (curl of curl is $\\nabla(\\nabla \\cdot \\mathbf{F}) - \\nabla^2 \\mathbf{F}$).",
      "hint": "Option 4: $\\nabla \\times (\\nabla \\times \\mathbf{F}) = \\nabla(\\nabla \\cdot \\mathbf{F}) - \\nabla^2 \\mathbf{F}$ (the vector Laplacian identity). This is not zero in general."
    },
    {
      "id": "W5-T4-Q10",
      "week": 5,
      "tier": "extra",
      "topic": "Green's Theorem Area Formula",
      "type": "single_select",
      "question": "Using Green's Theorem, the enclosed area $A$ of a plane region $D$ bounded by curve $C$ can be calculated using line integral:",
      "options": [
        {
          "id": "W5-T4-Q10-opt0",
          "text": "$A = \\frac{1}{2} \\oint_C (x \\, dy - y \\, dx)$"
        },
        {
          "id": "W5-T4-Q10-opt1",
          "text": "$A = \\oint_C (x \\, dx + y \\, dy)$"
        },
        {
          "id": "W5-T4-Q10-opt2",
          "text": "$A = \\oint_C x y \\, dx$"
        },
        {
          "id": "W5-T4-Q10-opt3",
          "text": "$A = \\frac{1}{2} \\oint_C (x \\, dx - y \\, dy)$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q10-opt0"
      ],
      "explanation": "Choosing $P = -y/2$ and $Q = x/2$ yields $Q_x - P_y = 1/2 - (-1/2) = 1$. By Green's Theorem: $\\iint_D 1 dA = A = \\frac{1}{2}\\oint_C (x dy - y dx)$.",
      "hint": "Take $P = -y/2$ and $Q = x/2$ in Green's Theorem. Then $Q_x - P_y = 1/2 - (-1/2) = 1$, so $\\iint_D 1\\,dA = A = \\frac{1}{2}\\oint_C(x\\,dy - y\\,dx)$."
    }
  ]
};
