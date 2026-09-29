window.QUIZ_BANK_WEEK10 = {
  "module": "5048CMD Engineering Mathematics 2",
  "week": 10,
  "title": "Week 10: Vector Calculus & Multiple Integrals",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W10-T1-Q01",
      "week": 10,
      "tier": "core",
      "topic": "Gradient Vector Field",
      "type": "single_select",
      "question": "Which of the following defines the gradient $\\nabla f$ of a scalar field $f(x, y, z)$ in Cartesian coordinates?",
      "options": [
        {
          "id": "W10-T1-Q01-opt0",
          "text": "$\\nabla f = \\left( \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z} \\right)$"
        },
        {
          "id": "W10-T1-Q01-opt1",
          "text": "$\\nabla f = \\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2} + \\frac{\\partial^2 f}{\\partial z^2}$"
        },
        {
          "id": "W10-T1-Q01-opt2",
          "text": "$\\nabla f = \\left( \\frac{\\partial f}{\\partial y} - \\frac{\\partial f}{\\partial z}, \\frac{\\partial f}{\\partial z} - \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial x} - \\frac{\\partial f}{\\partial y} \\right)$"
        },
        {
          "id": "W10-T1-Q01-opt3",
          "text": "$\\nabla f = \\frac{\\partial f}{\\partial x} + \\frac{\\partial f}{\\partial y} + \\frac{\\partial f}{\\partial z}$"
        }
      ],
      "correct_indices": [
        "W10-T1-Q01-opt0"
      ],
      "explanation": "The gradient of a scalar field $f$ is the vector field of its first-order partial derivatives: $\\nabla f = \\frac{\\partial f}{\\partial x}\\mathbf{i} + \\frac{\\partial f}{\\partial y}\\mathbf{j} + \\frac{\\partial f}{\\partial z}\\mathbf{k}$.",
      "hint": "The gradient turns a scalar field into a vector field of partial derivatives."
    },
    {
      "id": "W10-T1-Q02",
      "week": 10,
      "tier": "core",
      "topic": "Divergence Computation",
      "type": "single_select",
      "question": "Compute the divergence $\\nabla \\cdot \\mathbf{F}$ of the vector field $\\mathbf{F}(x,y,z) = (x^2, 3yz, -2xz)$.",
      "options": [
        {
          "id": "W10-T1-Q02-opt0",
          "text": "$3z$"
        },
        {
          "id": "W10-T1-Q02-opt1",
          "text": "$2x + 3y - 2z$"
        },
        {
          "id": "W10-T1-Q02-opt2",
          "text": "$(2x, 3z, -2x)$"
        },
        {
          "id": "W10-T1-Q02-opt3",
          "text": "$x^2 + 3yz - 2xz$"
        }
      ],
      "correct_indices": [
        "W10-T1-Q02-opt0"
      ],
      "explanation": "The divergence is $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial}{\\partial x}(x^2) + \\frac{\\partial}{\\partial y}(3yz) + \\frac{\\partial}{\\partial z}(-2xz) = 2x + 3z - 2x = 3z$.",
      "hint": "Sum the partial derivatives: $\\partial F_1/\\partial x + \\partial F_2/\\partial y + \\partial F_3/\\partial z$."
    },
    {
      "id": "W10-T1-Q03",
      "week": 10,
      "tier": "core",
      "topic": "Double Integral over Rectangle",
      "type": "single_select",
      "question": "Evaluate the double integral $\\iint_R xy \\, dA$ over the rectangular region $R = [0, 2] \\times [0, 3]$.",
      "options": [
        {
          "id": "W10-T1-Q03-opt0",
          "text": "$9$"
        },
        {
          "id": "W10-T1-Q03-opt1",
          "text": "$6$"
        },
        {
          "id": "W10-T1-Q03-opt2",
          "text": "$12$"
        },
        {
          "id": "W10-T1-Q03-opt3",
          "text": "$18$"
        }
      ],
      "correct_indices": [
        "W10-T1-Q03-opt0"
      ],
      "explanation": "For a rectangular region: $\\iint_R xy \\, dA = \\left(\\int_0^2 x\\,dx\\right)\\left(\\int_0^3 y\\,dy\\right) = \\left[\\frac{x^2}{2}\\right]_0^2 \\left[\\frac{y^2}{2}\\right]_0^3 = 2 \\times \\frac{9}{2} = 9$.",
      "hint": "Factor the integral into independent $x$ and $y$ 1D integrals."
    },
    {
      "id": "W10-T1-Q04",
      "week": 10,
      "tier": "core",
      "topic": "Curl of Gradient Field",
      "type": "single_select",
      "question": "What is the curl $\\nabla \\times \\mathbf{F}$ of any conservative vector field $\\mathbf{F} = \\nabla \\phi$?",
      "options": [
        {
          "id": "W10-T1-Q04-opt0",
          "text": "$\\mathbf{0}$ (the zero vector)"
        },
        {
          "id": "W10-T1-Q04-opt1",
          "text": "$\\nabla^2 \\phi$"
        },
        {
          "id": "W10-T1-Q04-opt2",
          "text": "$1$"
        },
        {
          "id": "W10-T1-Q04-opt3",
          "text": "Undefined"
        }
      ],
      "correct_indices": [
        "W10-T1-Q04-opt0"
      ],
      "explanation": "A fundamental identity of vector calculus states that the curl of any gradient field is identically zero: $\\nabla \\times (\\nabla \\phi) = \\mathbf{0}$.",
      "hint": "Gradient fields have zero circulation, so their curl is zero."
    },
    {
      "id": "W10-T1-Q05",
      "week": 10,
      "tier": "core",
      "topic": "Polar Coordinates Jacobian",
      "type": "single_select",
      "question": "What is the Jacobian determinant $J = \\left|\\frac{\\partial(x,y)}{\\partial(r,\\theta)}\\right|$ when transforming from Cartesian $(x,y)$ to polar coordinates $(r,\\theta)$?",
      "options": [
        {
          "id": "W10-T1-Q05-opt0",
          "text": "$r$"
        },
        {
          "id": "W10-T1-Q05-opt1",
          "text": "$r^2$"
        },
        {
          "id": "W10-T1-Q05-opt2",
          "text": "$1$"
        },
        {
          "id": "W10-T1-Q05-opt3",
          "text": "$r \\sin\\theta$"
        }
      ],
      "correct_indices": [
        "W10-T1-Q05-opt0"
      ],
      "explanation": "With $x = r\\cos\\theta$ and $y = r\\sin\\theta$, the Jacobian is $J = \\cos\\theta(r\\cos\\theta) - (-r\\sin\\theta)\\sin\\theta = r(\\cos^2\\theta + \\sin^2\\theta) = r$.",
      "hint": "Recall that $dx\\,dy$ becomes $r\\,dr\\,d\\theta$."
    },
    {
      "id": "W10-T1-Q06",
      "week": 10,
      "tier": "core",
      "topic": "Iterated Integral",
      "type": "single_select",
      "question": "Evaluate $\\int_0^1 \\int_0^2 (2x + y) \\, dy \\, dx$.",
      "options": [
        {
          "id": "W10-T1-Q06-opt0",
          "text": "$4$"
        },
        {
          "id": "W10-T1-Q06-opt1",
          "text": "$2$"
        },
        {
          "id": "W10-T1-Q06-opt2",
          "text": "$3$"
        },
        {
          "id": "W10-T1-Q06-opt3",
          "text": "$6$"
        }
      ],
      "correct_indices": [
        "W10-T1-Q06-opt0"
      ],
      "explanation": "Inner integral: $\\int_0^2 (2x + y)\\,dy = [2xy + y^2/2]_0^2 = 4x + 2$. Outer integral: $\\int_0^1 (4x + 2)\\,dx = [2x^2 + 2x]_0^1 = 2 + 2 = 4$.",
      "hint": "Integrate with respect to $y$ first treating $x$ as constant, then integrate with respect to $x$."
    },
    {
      "id": "W10-T1-Q07",
      "week": 10,
      "tier": "core",
      "topic": "Solenoidal Vector Field",
      "type": "single_select",
      "question": "A vector field $\\mathbf{F}$ is called incompressible (solenoidal) if:",
      "options": [
        {
          "id": "W10-T1-Q07-opt0",
          "text": "$\\nabla \\cdot \\mathbf{F} = 0$"
        },
        {
          "id": "W10-T1-Q07-opt1",
          "text": "$\\nabla \\times \\mathbf{F} = \\mathbf{0}$"
        },
        {
          "id": "W10-T1-Q07-opt2",
          "text": "$\\nabla f = \\mathbf{F}$"
        },
        {
          "id": "W10-T1-Q07-opt3",
          "text": "$\\mathbf{F} \\cdot \\mathbf{r} = 0$"
        }
      ],
      "correct_indices": [
        "W10-T1-Q07-opt0"
      ],
      "explanation": "A vector field is solenoidal (incompressible) if its divergence everywhere vanishes: $\\nabla \\cdot \\mathbf{F} = 0$.",
      "hint": "Incompressibility means no net fluid flux outward from any volume element, so divergence is zero."
    },
    {
      "id": "W10-T1-Q08",
      "week": 10,
      "tier": "core",
      "topic": "Directional Derivative",
      "type": "single_select",
      "question": "Compute the directional derivative of $f(x, y) = 3x^2 - 2y^2$ at the point $(1, 1)$ in the direction of the unit vector $\\mathbf{u} = \\left(\\frac{3}{5}, \\frac{4}{5}\\right)$.",
      "options": [
        {
          "id": "W10-T1-Q08-opt0",
          "text": "$\\frac{2}{5}$"
        },
        {
          "id": "W10-T1-Q08-opt1",
          "text": "$\\frac{18}{5}$"
        },
        {
          "id": "W10-T1-Q08-opt2",
          "text": "$2$"
        },
        {
          "id": "W10-T1-Q08-opt3",
          "text": "$-\\frac{2}{5}$"
        }
      ],
      "correct_indices": [
        "W10-T1-Q08-opt0"
      ],
      "explanation": "$\\nabla f = (6x, -4y) \\implies \\nabla f(1, 1) = (6, -4)$. Then $D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u} = 6(3/5) + (-4)(4/5) = \\frac{18 - 16}{5} = \\frac{2}{5}$.",
      "hint": "Compute the dot product $\\nabla f(1,1) \\cdot \\mathbf{u}$."
    },
    {
      "id": "W10-T1-Q09",
      "week": 10,
      "tier": "core",
      "topic": "Green's Theorem Statement",
      "type": "single_select",
      "question": "Green's Theorem relates a line integral around a simple closed curve $C$ to a double integral over the enclosed region $D$ by:",
      "options": [
        {
          "id": "W10-T1-Q09-opt0",
          "text": "$\\oint_C (P\\,dx + Q\\,dy) = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dA$"
        },
        {
          "id": "W10-T1-Q09-opt1",
          "text": "$\\oint_C (P\\,dx + Q\\,dy) = \\iint_D \\left( \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} \\right) dA$"
        },
        {
          "id": "W10-T1-Q09-opt2",
          "text": "$\\oint_C (P\\,dx + Q\\,dy) = \\iint_D \\left( \\frac{\\partial P}{\\partial y} - \\frac{\\partial Q}{\\partial x} \\right) dA$"
        },
        {
          "id": "W10-T1-Q09-opt3",
          "text": "$\\oint_C (P\\,dx + Q\\,dy) = \\iint_D (P \\cdot Q) \\, dA$"
        }
      ],
      "correct_indices": [
        "W10-T1-Q09-opt0"
      ],
      "explanation": "Green's Theorem in the plane states $\\oint_C (P\\,dx + Q\\,dy) = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA$ where $C = \\partial D$ is positively oriented.",
      "hint": "Remember the curl component $\\partial Q/\\partial x - \\partial P/\\partial y$."
    },
    {
      "id": "W10-T1-Q10",
      "week": 10,
      "tier": "core",
      "topic": "Area via Double Integral",
      "type": "single_select",
      "question": "Evaluate the integral $\\iint_D 1 \\, dA$ where $D$ is the unit disk $x^2 + y^2 \\le 1$.",
      "options": [
        {
          "id": "W10-T1-Q10-opt0",
          "text": "$\\pi$"
        },
        {
          "id": "W10-T1-Q10-opt1",
          "text": "$2\\pi$"
        },
        {
          "id": "W10-T1-Q10-opt2",
          "text": "$\\frac{\\pi}{2}$"
        },
        {
          "id": "W10-T1-Q10-opt3",
          "text": "$1$"
        }
      ],
      "correct_indices": [
        "W10-T1-Q10-opt0"
      ],
      "explanation": "$\\iint_D 1\\,dA$ represents the geometric area of the domain $D$. For a disk of radius $1$, $\\text{Area} = \\pi(1)^2 = \\pi$.",
      "hint": "Integrating $1\\,dA$ computes the geometric area of the region."
    },
    {
      "id": "W10-T2-Q01",
      "week": 10,
      "tier": "should",
      "topic": "Curl Calculation",
      "type": "single_select",
      "question": "Compute the curl $\\nabla \\times \\mathbf{F}$ of $\\mathbf{F} = (yz, xz, xy)$.",
      "options": [
        {
          "id": "W10-T2-Q01-opt0",
          "text": "$\\mathbf{0}$"
        },
        {
          "id": "W10-T2-Q01-opt1",
          "text": "$(x, y, z)$"
        },
        {
          "id": "W10-T2-Q01-opt2",
          "text": "$(z-y, x-z, y-x)$"
        },
        {
          "id": "W10-T2-Q01-opt3",
          "text": "$3xyz$"
        }
      ],
      "correct_indices": [
        "W10-T2-Q01-opt0"
      ],
      "explanation": "$\\nabla \\times \\mathbf{F} = \\mathbf{i}(x - x) - \\mathbf{j}(y - y) + \\mathbf{k}(z - z) = \\mathbf{0}$. Hence $\\mathbf{F}$ is irrotational (in fact $\\mathbf{F} = \\nabla(xyz)$).",
      "hint": "Expand the $3 \\times 3$ determinant definition of curl."
    },
    {
      "id": "W10-T2-Q02",
      "week": 10,
      "tier": "should",
      "topic": "Polar Integral Evaluation",
      "type": "single_select",
      "question": "Evaluate $\\int_0^{\\pi/2} \\int_0^1 r^3 \\cos\\theta \\, dr \\, d\\theta$.",
      "options": [
        {
          "id": "W10-T2-Q02-opt0",
          "text": "$\\frac{1}{4}$"
        },
        {
          "id": "W10-T2-Q02-opt1",
          "text": "$\\frac{1}{2}$"
        },
        {
          "id": "W10-T2-Q02-opt2",
          "text": "$1$"
        },
        {
          "id": "W10-T2-Q02-opt3",
          "text": "$\\frac{\\pi}{4}$"
        }
      ],
      "correct_indices": [
        "W10-T2-Q02-opt0"
      ],
      "explanation": "Separating: $\\left(\\int_0^1 r^3\\,dr\\right)\\left(\\int_0^{\\pi/2}\\cos\\theta\\,d\\theta\\right) = \\left[\\frac{r^4}{4}\\right]_0^1 [\\sin\\theta]_0^{\\pi/2} = \\frac{1}{4} \\times 1 = \\frac{1}{4}$.",
      "hint": "Compute $[r^4/4]_0^1$ and multiply by $[\\sin\\theta]_0^{\\pi/2}$."
    },
    {
      "id": "W10-T2-Q03",
      "week": 10,
      "tier": "should",
      "topic": "Potential Function Recovery",
      "type": "single_select",
      "question": "Find a potential function $\\phi(x,y)$ such that $\\nabla \\phi = (2xy + 3, x^2 - 4y)$.",
      "options": [
        {
          "id": "W10-T2-Q03-opt0",
          "text": "$\\phi(x,y) = x^2 y + 3x - 2y^2 + C$"
        },
        {
          "id": "W10-T2-Q03-opt1",
          "text": "$\\phi(x,y) = 2x^2 y + 3x - 4y^2 + C$"
        },
        {
          "id": "W10-T2-Q03-opt2",
          "text": "$\\phi(x,y) = x^2 y^2 + 3x - 2y + C$"
        },
        {
          "id": "W10-T2-Q03-opt3",
          "text": "$\\phi(x,y) = x^2 + y^2 + 3x - 4y + C$"
        }
      ],
      "correct_indices": [
        "W10-T2-Q03-opt0"
      ],
      "explanation": "Integrating $\\frac{\\partial \\phi}{\\partial x} = 2xy + 3 \\implies \\phi = x^2 y + 3x + g(y)$. Differentiating w.r.t $y$: $x^2 + g'(y) = x^2 - 4y \\implies g'(y) = -4y \\implies g(y) = -2y^2 + C$.",
      "hint": "Integrate the first component with respect to $x$, then match the $y$-derivative with the second component."
    },
    {
      "id": "W10-T2-Q04",
      "week": 10,
      "tier": "should",
      "topic": "Work Done by Conservative Field",
      "type": "single_select",
      "question": "Evaluate the line integral $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ along any path from $(0,0)$ to $(1,2)$ for the conservative field $\\mathbf{F} = \\nabla(x^2 y + 3x - 2y^2)$.",
      "options": [
        {
          "id": "W10-T2-Q04-opt0",
          "text": "$-3$"
        },
        {
          "id": "W10-T2-Q04-opt1",
          "text": "$5$"
        },
        {
          "id": "W10-T2-Q04-opt2",
          "text": "$-7$"
        },
        {
          "id": "W10-T2-Q04-opt3",
          "text": "$0$"
        }
      ],
      "correct_indices": [
        "W10-T2-Q04-opt0"
      ],
      "explanation": "By the Fundamental Theorem for Line Integrals: $\\int_C \\nabla \\phi \\cdot d\\mathbf{r} = \\phi(1, 2) - \\phi(0, 0) = (1^2(2) + 3(1) - 2(2^2)) - 0 = 2 + 3 - 8 = -3$.",
      "hint": "The line integral of a conservative field depends only on the endpoints: $\\phi(B) - \\phi(A)$."
    },
    {
      "id": "W10-T2-Q05",
      "week": 10,
      "tier": "should",
      "topic": "Change of Integration Order",
      "type": "single_select",
      "question": "Change the order of integration for $\\int_0^1 \\int_x^1 f(x, y) \\, dy \\, dx$.",
      "options": [
        {
          "id": "W10-T2-Q05-opt0",
          "text": "$\\int_0^1 \\int_0^y f(x, y) \\, dx \\, dy$"
        },
        {
          "id": "W10-T2-Q05-opt1",
          "text": "$\\int_0^1 \\int_y^1 f(x, y) \\, dx \\, dy$"
        },
        {
          "id": "W10-T2-Q05-opt2",
          "text": "$\\int_x^1 \\int_0^1 f(x, y) \\, dx \\, dy$"
        },
        {
          "id": "W10-T2-Q05-opt3",
          "text": "$\\int_0^y \\int_0^1 f(x, y) \\, dx \\, dy$"
        }
      ],
      "correct_indices": [
        "W10-T2-Q05-opt0"
      ],
      "explanation": "The region is bounded by $0 \\le x \\le 1$ and $x \\le y \\le 1$. In terms of $y$: $0 \\le y \\le 1$, and for each fixed $y$, $x$ varies from $0$ up to $y$, giving $\\int_0^1 \\int_0^y f(x, y) \\, dx \\, dy$.",
      "hint": "Sketch the triangular domain in the $xy$-plane with $y$ as the outer variable."
    },
    {
      "id": "W10-T2-Q06",
      "week": 10,
      "tier": "should",
      "topic": "Green's Theorem Application",
      "type": "single_select",
      "question": "Using Green's Theorem, evaluate $\\oint_C (x^2 y \\, dx + 2xy^2 \\, dy)$ where $C$ is the positively oriented boundary of the unit square $[0,1] \\times [0,1]$.",
      "options": [
        {
          "id": "W10-T2-Q06-opt0",
          "text": "$\\frac{1}{3}$"
        },
        {
          "id": "W10-T2-Q06-opt1",
          "text": "$\\frac{1}{2}$"
        },
        {
          "id": "W10-T2-Q06-opt2",
          "text": "$1$"
        },
        {
          "id": "W10-T2-Q06-opt3",
          "text": "$0$"
        }
      ],
      "correct_indices": [
        "W10-T2-Q06-opt0"
      ],
      "explanation": "Here $P = x^2 y$ and $Q = 2xy^2$. Then $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 2y^2 - x^2$. Integrating over $[0,1]^2$: $\\int_0^1 \\int_0^1 (2y^2 - x^2)\\,dx\\,dy = \\int_0^1 (2y^2 - 1/3)\\,dy = [2/3 - 1/3] = \\frac{1}{3}$.",
      "hint": "Compute $\\iint_D (\\partial Q/\\partial x - \\partial P/\\partial y)\\,dA$ over the unit square."
    },
    {
      "id": "W10-T2-Q07",
      "week": 10,
      "tier": "should",
      "topic": "Polar Conversion of Integrals",
      "type": "single_select",
      "question": "Convert the integral $\\int_{-a}^a \\int_0^{\\sqrt{a^2 - x^2}} (x^2 + y^2) \\, dy \\, dx$ to polar coordinates.",
      "options": [
        {
          "id": "W10-T2-Q07-opt0",
          "text": "$\\int_0^{\\pi} \\int_0^a r^3 \\, dr \\, d\\theta$"
        },
        {
          "id": "W10-T2-Q07-opt1",
          "text": "$\\int_0^{2\\pi} \\int_0^a r^2 \\, dr \\, d\\theta$"
        },
        {
          "id": "W10-T2-Q07-opt2",
          "text": "$\\int_0^{\\pi/2} \\int_0^a r^3 \\, dr \\, d\\theta$"
        },
        {
          "id": "W10-T2-Q07-opt3",
          "text": "$\\int_0^{\\pi} \\int_0^a r^2 \\, dr \\, d\\theta$"
        }
      ],
      "correct_indices": [
        "W10-T2-Q07-opt0"
      ],
      "explanation": "The region is the upper half-disk of radius $a$, so $0 \\le \\theta \\le \\pi$ and $0 \\le r \\le a$. With $x^2 + y^2 = r^2$ and $dy\\,dx = r\\,dr\\,d\\theta$, the integrand becomes $r^2 \\cdot r = r^3$.",
      "hint": "The upper semicircle corresponds to angle $\\theta \\in [0, \\pi]$."
    },
    {
      "id": "W10-T2-Q08",
      "week": 10,
      "tier": "should",
      "topic": "Gauss's Law for Magnetism",
      "type": "single_select",
      "question": "Calculate the divergence of the magnetic field $\\mathbf{B}$ according to Gauss's law for magnetism:",
      "options": [
        {
          "id": "W10-T2-Q08-opt0",
          "text": "$\\nabla \\cdot \\mathbf{B} = 0$"
        },
        {
          "id": "W10-T2-Q08-opt1",
          "text": "$\\nabla \\cdot \\mathbf{B} = \\rho / \\epsilon_0$"
        },
        {
          "id": "W10-T2-Q08-opt2",
          "text": "$\\nabla \\cdot \\mathbf{B} = -\\frac{\\partial \\mathbf{E}}{\\partial t}$"
        },
        {
          "id": "W10-T2-Q08-opt3",
          "text": "$\\nabla \\cdot \\mathbf{B} = \\mu_0 \\mathbf{J}$"
        }
      ],
      "correct_indices": [
        "W10-T2-Q08-opt0"
      ],
      "explanation": "Gauss's law for magnetism states that magnetic monopoles do not exist, so magnetic flux through any closed surface is zero: $\\nabla \\cdot \\mathbf{B} = 0$.",
      "hint": "Magnetic fields have no sources or sinks, so their divergence is zero."
    },
    {
      "id": "W10-T2-Q09",
      "week": 10,
      "tier": "should",
      "topic": "Unit Normal Vector",
      "type": "single_select",
      "question": "Find the outward unit normal vector $\\mathbf{n}$ to the sphere $x^2 + y^2 + z^2 = 3$ at the point $(1, 1, 1)$.",
      "options": [
        {
          "id": "W10-T2-Q09-opt0",
          "text": "$\\left( \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}} \\right)$"
        },
        {
          "id": "W10-T2-Q09-opt1",
          "text": "$(1, 1, 1)$"
        },
        {
          "id": "W10-T2-Q09-opt2",
          "text": "$\\left( \\frac{1}{3}, \\frac{1}{3}, \\frac{1}{3} \\right)$"
        },
        {
          "id": "W10-T2-Q09-opt3",
          "text": "$(2, 2, 2)$"
        }
      ],
      "correct_indices": [
        "W10-T2-Q09-opt0"
      ],
      "explanation": "$\\nabla F = (2x, 2y, 2z) \\implies \\nabla F(1, 1, 1) = (2, 2, 2)$. Normalising: $\\mathbf{n} = \\frac{(2, 2, 2)}{\\sqrt{4 + 4 + 4}} = \\left( \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}} \\right)$.",
      "hint": "The normal vector is parallel to $\\nabla F$, then divide by its Euclidean norm."
    },
    {
      "id": "W10-T2-Q10",
      "week": 10,
      "tier": "should",
      "topic": "Gaussian Double Integral",
      "type": "single_select",
      "question": "What is the value of $\\int_0^{\\infty} \\int_0^{\\infty} e^{-(x^2 + y^2)} \\, dx \\, dy$ using polar coordinates?",
      "options": [
        {
          "id": "W10-T2-Q10-opt0",
          "text": "$\\frac{\\pi}{4}$"
        },
        {
          "id": "W10-T2-Q10-opt1",
          "text": "$\\frac{\\pi}{2}$"
        },
        {
          "id": "W10-T2-Q10-opt2",
          "text": "$\\pi$"
        },
        {
          "id": "W10-T2-Q10-opt3",
          "text": "$1$"
        }
      ],
      "correct_indices": [
        "W10-T2-Q10-opt0"
      ],
      "explanation": "In the first quadrant ($0 \\le \\theta \\le \\pi/2$, $0 \\le r < \\infty$): $\\int_0^{\\pi/2} d\\theta \\int_0^\\infty e^{-r^2} r\\,dr = \\frac{\\pi}{2} \\left[ -\\frac{1}{2} e^{-r^2} \\right]_0^\\infty = \\frac{\\pi}{4}$.",
      "hint": "Convert to polar coordinates: $dx\\,dy \\to r\\,dr\\,d\\theta$."
    },
    {
      "id": "W10-T3-Q01",
      "week": 10,
      "tier": "nice_to_know",
      "topic": "Stokes' Theorem on Closed Surfaces",
      "type": "single_select",
      "question": "Stokes' Theorem states $\\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S} = \\oint_{\\partial S} \\mathbf{F} \\cdot d\\mathbf{r}$. What is the value of this integral if $S$ is a closed surface with no boundary ($\\partial S = \\emptyset$)?",
      "options": [
        {
          "id": "W10-T3-Q01-opt0",
          "text": "$0$"
        },
        {
          "id": "W10-T3-Q01-opt1",
          "text": "$\\text{Volume}(V)$"
        },
        {
          "id": "W10-T3-Q01-opt2",
          "text": "$4\\pi$"
        },
        {
          "id": "W10-T3-Q01-opt3",
          "text": "Undefined"
        }
      ],
      "correct_indices": [
        "W10-T3-Q01-opt0"
      ],
      "explanation": "A closed surface has no boundary curve ($\\oint_\\emptyset = 0$). By the Divergence Theorem, $\\iint_S (\\nabla \\times \\mathbf{F})\\cdot d\\mathbf{S} = \\iiint_V \\nabla \\cdot (\\nabla \\times \\mathbf{F})\\,dV = 0$ since $\\text{div}\\,\\text{curl} = 0$.",
      "hint": "A closed surface has empty boundary, so the boundary line integral is 0."
    },
    {
      "id": "W10-T3-Q02",
      "week": 10,
      "tier": "nice_to_know",
      "topic": "Divergence Theorem Flux",
      "type": "single_select",
      "question": "Using the Divergence Theorem, compute the outward flux of $\\mathbf{F} = (x, y, z)$ through the surface of the sphere $x^2 + y^2 + z^2 = R^2$.",
      "options": [
        {
          "id": "W10-T3-Q02-opt0",
          "text": "$4\\pi R^3$"
        },
        {
          "id": "W10-T3-Q02-opt1",
          "text": "$\\frac{4}{3}\\pi R^3$"
        },
        {
          "id": "W10-T3-Q02-opt2",
          "text": "$3\\pi R^2$"
        },
        {
          "id": "W10-T3-Q02-opt3",
          "text": "$2\\pi R^3$"
        }
      ],
      "correct_indices": [
        "W10-T3-Q02-opt0"
      ],
      "explanation": "$\\nabla \\cdot \\mathbf{F} = 1 + 1 + 1 = 3$. By the Divergence Theorem, $\\text{Flux} = \\iiint_V 3\\,dV = 3 \\times \\text{Vol}(V) = 3 \\left(\\frac{4}{3}\\pi R^3\\right) = 4\\pi R^3$.",
      "hint": "Compute the divergence first (constant 3) and multiply by the volume of the sphere."
    },
    {
      "id": "W10-T3-Q03",
      "week": 10,
      "tier": "nice_to_know",
      "topic": "Reversing Integral Limits",
      "type": "single_select",
      "question": "Evaluate $\\int_0^1 \\int_y^1 \\sin(x^2) \\, dx \\, dy$ by reversing the order of integration.",
      "options": [
        {
          "id": "W10-T3-Q03-opt0",
          "text": "$\\frac{1 - \\cos(1)}{2}$"
        },
        {
          "id": "W10-T3-Q03-opt1",
          "text": "$\\sin(1)$"
        },
        {
          "id": "W10-T3-Q03-opt2",
          "text": "$\\frac{\\cos(1)}{2}$"
        },
        {
          "id": "W10-T3-Q03-opt3",
          "text": "$1 - \\cos(1)$"
        }
      ],
      "correct_indices": [
        "W10-T3-Q03-opt0"
      ],
      "explanation": "The region is $0 \\le y \\le x \\le 1$. Reversing order: $\\int_0^1 \\int_0^x \\sin(x^2)\\,dy\\,dx = \\int_0^1 x\\sin(x^2)\\,dx = \\left[-\\frac{\\cos(x^2)}{2}\\right]_0^1 = \\frac{1 - \\cos(1)}{2}$.",
      "hint": "Switching order brings a factor of $x$ into the integrand, allowing substitution $u = x^2$."
    },
    {
      "id": "W10-T3-Q04",
      "week": 10,
      "tier": "nice_to_know",
      "topic": "Laplacian of Scalar Field",
      "type": "single_select",
      "question": "What is the Laplacian $\\nabla^2 f$ of the scalar field $f(x,y,z) = x^3 + y^3 + z^3 - 3xyz$?",
      "options": [
        {
          "id": "W10-T3-Q04-opt0",
          "text": "$6(x + y + z)$"
        },
        {
          "id": "W10-T3-Q04-opt1",
          "text": "$3(x^2 + y^2 + z^2)$"
        },
        {
          "id": "W10-T3-Q04-opt2",
          "text": "$6(x^2 + y^2 + z^2)$"
        },
        {
          "id": "W10-T3-Q04-opt3",
          "text": "$0$"
        }
      ],
      "correct_indices": [
        "W10-T3-Q04-opt0"
      ],
      "explanation": "$\\frac{\\partial^2 f}{\\partial x^2} = 6x$, $\\frac{\\partial^2 f}{\\partial y^2} = 6y$, $\\frac{\\partial^2 f}{\\partial z^2} = 6z$. Therefore $\\nabla^2 f = 6x + 6y + 6z = 6(x + y + z)$.",
      "hint": "Take the sum of the second pure partial derivatives: $f_{xx} + f_{yy} + f_{zz}$."
    },
    {
      "id": "W10-T3-Q05",
      "week": 10,
      "tier": "nice_to_know",
      "topic": "Vector Potential Existence",
      "type": "single_select",
      "question": "A vector potential $\\mathbf{A}$ for a magnetic field $\\mathbf{B}$ satisfies $\\mathbf{B} = \\nabla \\times \\mathbf{A}$. Under what condition on $\\mathbf{B}$ is the existence of $\\mathbf{A}$ guaranteed on $\\mathbb{R}^3$?",
      "options": [
        {
          "id": "W10-T3-Q05-opt0",
          "text": "$\\nabla \\cdot \\mathbf{B} = 0$"
        },
        {
          "id": "W10-T3-Q05-opt1",
          "text": "$\\nabla \\times \\mathbf{B} = \\mathbf{0}$"
        },
        {
          "id": "W10-T3-Q05-opt2",
          "text": "$\\nabla^2 \\mathbf{B} = \\mathbf{0}$"
        },
        {
          "id": "W10-T3-Q05-opt3",
          "text": "$\\mathbf{B} \\cdot \\mathbf{E} = 0$"
        }
      ],
      "correct_indices": [
        "W10-T3-Q05-opt0"
      ],
      "explanation": "By Poincar\u00e9's lemma and the Helmholtz decomposition theorem, a smooth vector field on $\\mathbb{R}^3$ has a vector potential if and only if it is divergence-free (solenoidal): $\\nabla \\cdot \\mathbf{B} = 0$.",
      "hint": "Since divergence of curl is identically zero, $\\mathbf{B}$ must have zero divergence."
    },
    {
      "id": "W10-T3-Q06",
      "week": 10,
      "tier": "nice_to_know",
      "topic": "Circulation around Circle",
      "type": "single_select",
      "question": "Evaluate the line integral $\\oint_C (-y\\,dx + x\\,dy)$ around the circle of radius $a$ centered at the origin, oriented counterclockwise.",
      "options": [
        {
          "id": "W10-T3-Q06-opt0",
          "text": "$2\\pi a^2$"
        },
        {
          "id": "W10-T3-Q06-opt1",
          "text": "$\\pi a^2$"
        },
        {
          "id": "W10-T3-Q06-opt2",
          "text": "$0$"
        },
        {
          "id": "W10-T3-Q06-opt3",
          "text": "$4\\pi a^2$"
        }
      ],
      "correct_indices": [
        "W10-T3-Q06-opt0"
      ],
      "explanation": "By Green's theorem: $\\oint_C (-y\\,dx + x\\,dy) = \\iint_D (1 - (-1))\\,dA = 2 \\iint_D dA = 2(\\pi a^2) = 2\\pi a^2$.",
      "hint": "Use Green's Theorem where $\\partial Q/\\partial x - \\partial P/\\partial y = 1 - (-1) = 2$."
    },
    {
      "id": "W10-T3-Q07",
      "week": 10,
      "tier": "nice_to_know",
      "topic": "Cylindrical Volume Element",
      "type": "single_select",
      "question": "In cylindrical coordinates $(r, \\theta, z)$, what is the differential volume element $dV$?",
      "options": [
        {
          "id": "W10-T3-Q07-opt0",
          "text": "$r \\, dr \\, d\\theta \\, dz$"
        },
        {
          "id": "W10-T3-Q07-opt1",
          "text": "$dr \\, d\\theta \\, dz$"
        },
        {
          "id": "W10-T3-Q07-opt2",
          "text": "$r^2 \\, dr \\, d\\theta \\, dz$"
        },
        {
          "id": "W10-T3-Q07-opt3",
          "text": "$r^2 \\sin\\theta \\, dr \\, d\\theta \\, dz$"
        }
      ],
      "correct_indices": [
        "W10-T3-Q07-opt0"
      ],
      "explanation": "The Jacobian of the transformation $(x,y,z) = (r\\cos\\theta, r\\sin\\theta, z)$ is $r$, so the differential volume element is $dV = r\\,dr\\,d\\theta\\,dz$.",
      "hint": "It is the 2D polar area element $r\\,dr\\,d\\theta$ multiplied by $dz$."
    },
    {
      "id": "W10-T3-Q08",
      "week": 10,
      "tier": "nice_to_know",
      "topic": "Spherical Volume Element",
      "type": "single_select",
      "question": "In spherical coordinates $(\\rho, \\phi, \\theta)$, where $\\phi$ is the colatitude angle ($0 \\le \\phi \\le \\pi$), what is the volume element $dV$?",
      "options": [
        {
          "id": "W10-T3-Q08-opt0",
          "text": "$\\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$"
        },
        {
          "id": "W10-T3-Q08-opt1",
          "text": "$\\rho \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$"
        },
        {
          "id": "W10-T3-Q08-opt2",
          "text": "$\\rho^2 \\cos\\phi \\, d\\rho \\, d\\phi \\, d\\theta$"
        },
        {
          "id": "W10-T3-Q08-opt3",
          "text": "$\\rho^2 \\, d\\rho \\, d\\phi \\, d\\theta$"
        }
      ],
      "correct_indices": [
        "W10-T3-Q08-opt0"
      ],
      "explanation": "The spherical coordinate Jacobian determinant is $|J| = \\rho^2 \\sin\\phi$, giving $dV = \\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$.",
      "hint": "The scaling factors are $h_\\rho = 1, h_\\phi = \\rho, h_\\theta = \\rho\\sin\\phi$."
    },
    {
      "id": "W10-T3-Q09",
      "week": 10,
      "tier": "nice_to_know",
      "topic": "Curl of Curl Identity",
      "type": "single_select",
      "question": "What is the vector identity for the curl of the curl of a vector field $\\mathbf{A}$?",
      "options": [
        {
          "id": "W10-T3-Q09-opt0",
          "text": "$\\nabla(\\nabla \\cdot \\mathbf{A}) - \\nabla^2 \\mathbf{A}$"
        },
        {
          "id": "W10-T3-Q09-opt1",
          "text": "$\\mathbf{0}$"
        },
        {
          "id": "W10-T3-Q09-opt2",
          "text": "$\\nabla^2 \\mathbf{A} - \\nabla(\\nabla \\cdot \\mathbf{A})$"
        },
        {
          "id": "W10-T3-Q09-opt3",
          "text": "$(\\nabla \\cdot \\mathbf{A})\\nabla - \\mathbf{A}\\nabla^2$"
        }
      ],
      "correct_indices": [
        "W10-T3-Q09-opt0"
      ],
      "explanation": "The standard vector calculus identity is $\\nabla \\times (\\nabla \\times \\mathbf{A}) = \\nabla(\\nabla \\cdot \\mathbf{A}) - \\nabla^2 \\mathbf{A}$ (often written as 'grad div minus laplacian').",
      "hint": "Think of the vector BAC-CAB rule: $\\nabla(\\nabla \\cdot \\mathbf{A}) - \\nabla^2 \\mathbf{A}$."
    },
    {
      "id": "W10-T3-Q10",
      "week": 10,
      "tier": "nice_to_know",
      "topic": "Spherical Surface Area",
      "type": "single_select",
      "question": "Evaluate the surface area of a sphere of radius $R$ by integrating $dA = R^2 \\sin\\phi \\, d\\phi \\, d\\theta$ over $0 \\le \\phi \\le \\pi, 0 \\le \\theta \\le 2\\pi$.",
      "options": [
        {
          "id": "W10-T3-Q10-opt0",
          "text": "$4\\pi R^2$"
        },
        {
          "id": "W10-T3-Q10-opt1",
          "text": "$2\\pi R^2$"
        },
        {
          "id": "W10-T3-Q10-opt2",
          "text": "$\\frac{4}{3}\\pi R^2$"
        },
        {
          "id": "W10-T3-Q10-opt3",
          "text": "$\\pi R^2$"
        }
      ],
      "correct_indices": [
        "W10-T3-Q10-opt0"
      ],
      "explanation": "$\\int_0^{2\\pi} d\\theta \\int_0^\\pi R^2 \\sin\\phi\\,d\\phi = 2\\pi R^2 [-\\cos\\phi]_0^\\pi = 2\\pi R^2 (1 - (-1)) = 4\\pi R^2$.",
      "hint": "The integral over $\\phi$ evaluates to $[-\\cos\\phi]_0^\\pi = 2$."
    },
    {
      "id": "W10-T4-Q01",
      "week": 10,
      "tier": "extra",
      "topic": "Green's Theorem on Ellipse",
      "type": "single_select",
      "question": "Compute the line integral of $\\mathbf{F} = (2x - y)\\mathbf{i} + (x + 3y)\\mathbf{j}$ along the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ traversed counterclockwise.",
      "options": [
        {
          "id": "W10-T4-Q01-opt0",
          "text": "$2\\pi ab$"
        },
        {
          "id": "W10-T4-Q01-opt1",
          "text": "$\\pi ab$"
        },
        {
          "id": "W10-T4-Q01-opt2",
          "text": "$0$"
        },
        {
          "id": "W10-T4-Q01-opt3",
          "text": "$4\\pi ab$"
        }
      ],
      "correct_indices": [
        "W10-T4-Q01-opt0"
      ],
      "explanation": "By Green's Theorem: $\\oint_C (P\\,dx + Q\\,dy) = \\iint_D (\\partial Q/\\partial x - \\partial P/\\partial y)\\,dA = \\iint_D (1 - (-1))\\,dA = 2 \\text{Area}(D) = 2(\\pi ab) = 2\\pi ab$.",
      "hint": "The curl expression simplifies to $1 - (-1) = 2$, and the area of the ellipse is $\\pi ab$."
    },
    {
      "id": "W10-T4-Q02",
      "week": 10,
      "tier": "extra",
      "topic": "Lamina Mass Double Integral",
      "type": "single_select",
      "question": "Find the mass of a triangular lamina with vertices $(0,0)$, $(1,0)$, and $(0,1)$ if the mass density is $\\rho(x,y) = x + y$.",
      "options": [
        {
          "id": "W10-T4-Q02-opt0",
          "text": "$\\frac{1}{3}$"
        },
        {
          "id": "W10-T4-Q02-opt1",
          "text": "$\\frac{1}{6}$"
        },
        {
          "id": "W10-T4-Q02-opt2",
          "text": "$\\frac{1}{2}$"
        },
        {
          "id": "W10-T4-Q02-opt3",
          "text": "$\\frac{2}{3}$"
        }
      ],
      "correct_indices": [
        "W10-T4-Q02-opt0"
      ],
      "explanation": "$M = \\int_0^1 \\int_0^{1-x} (x+y)\\,dy\\,dx = \\int_0^1 [xy + y^2/2]_0^{1-x} dx = \\int_0^1 \\frac{1 - x^2}{2} dx = \\frac{1}{2}(1 - 1/3) = \\frac{1}{3}$.",
      "hint": "Set up double integral over $0 \\le x \\le 1, 0 \\le y \\le 1-x$."
    },
    {
      "id": "W10-T4-Q03",
      "week": 10,
      "tier": "extra",
      "topic": "Flux across Unit Sphere",
      "type": "single_select",
      "question": "Evaluate the outward flux of $\\mathbf{F} = (x^3, y^3, z^3)$ across the surface of the unit sphere $x^2 + y^2 + z^2 = 1$.",
      "options": [
        {
          "id": "W10-T4-Q03-opt0",
          "text": "$\\frac{12\\pi}{5}$"
        },
        {
          "id": "W10-T4-Q03-opt1",
          "text": "$\\frac{4\\pi}{5}$"
        },
        {
          "id": "W10-T4-Q03-opt2",
          "text": "$4\\pi$"
        },
        {
          "id": "W10-T4-Q03-opt3",
          "text": "$\\frac{8\\pi}{3}$"
        }
      ],
      "correct_indices": [
        "W10-T4-Q03-opt0"
      ],
      "explanation": "$\\nabla \\cdot \\mathbf{F} = 3(x^2 + y^2 + z^2) = 3\\rho^2$. By the Divergence Theorem, $\\text{Flux} = \\int_0^{2\\pi}\\int_0^\\pi\\int_0^1 3\\rho^2 (\\rho^2\\sin\\phi)\\,d\\rho\\,d\\phi\\,d\\theta = 3(2\\pi)(2)[\\rho^5/5]_0^1 = \\frac{12\\pi}{5}$.",
      "hint": "Apply the Divergence Theorem and switch to spherical coordinates where $\\nabla \\cdot \\mathbf{F} = 3\\rho^2$."
    },
    {
      "id": "W10-T4-Q04",
      "week": 10,
      "tier": "extra",
      "topic": "Planar Centroid Calculation",
      "type": "single_select",
      "question": "Compute the centroid coordinate $\\bar{x}$ of the planar region bounded by $y = \\sqrt{x}$, $y = 0$, and $x = 4$.",
      "options": [
        {
          "id": "W10-T4-Q04-opt0",
          "text": "$\\frac{12}{5}$"
        },
        {
          "id": "W10-T4-Q04-opt1",
          "text": "$2$"
        },
        {
          "id": "W10-T4-Q04-opt2",
          "text": "$\\frac{8}{3}$"
        },
        {
          "id": "W10-T4-Q04-opt3",
          "text": "$\\frac{16}{5}$"
        }
      ],
      "correct_indices": [
        "W10-T4-Q04-opt0"
      ],
      "explanation": "Area $A = \\int_0^4 \\sqrt{x}\\,dx = [\\frac{2}{3}x^{3/2}]_0^4 = \\frac{16}{3}$. Moment $M_y = \\int_0^4 x\\sqrt{x}\\,dx = [\\frac{2}{5}x^{5/2}]_0^4 = \\frac{64}{5}$. Thus $\\bar{x} = \\frac{M_y}{A} = \\frac{64/5}{16/3} = \\frac{12}{5}$.",
      "hint": "Compute $\\bar{x} = M_y / A$ where $M_y = \\int_0^4 x\\sqrt{x}\\,dx$."
    },
    {
      "id": "W10-T4-Q05",
      "week": 10,
      "tier": "extra",
      "topic": "Fluid Flow Circulation",
      "type": "single_select",
      "question": "A fluid flow has velocity field $\\mathbf{v} = (y, -x, 2z)$. What is the circulation $\\Gamma = \\oint_C \\mathbf{v} \\cdot d\\mathbf{r}$ around the unit circle in the $xy$-plane oriented counterclockwise?",
      "options": [
        {
          "id": "W10-T4-Q05-opt0",
          "text": "$-2\\pi$"
        },
        {
          "id": "W10-T4-Q05-opt1",
          "text": "$2\\pi$"
        },
        {
          "id": "W10-T4-Q05-opt2",
          "text": "$0$"
        },
        {
          "id": "W10-T4-Q05-opt3",
          "text": "$-4\\pi$"
        }
      ],
      "correct_indices": [
        "W10-T4-Q05-opt0"
      ],
      "explanation": "Parameterise $C$: $\\mathbf{r}(t) = (\\cos t, \\sin t, 0)$, $d\\mathbf{r} = (-\\sin t, \\cos t, 0)dt$. Then $\\mathbf{v} = (\\sin t, -\\cos t, 0)$, so $\\mathbf{v} \\cdot d\\mathbf{r} = (-\\sin^2 t - \\cos^2 t)dt = -dt$. Integrating from $0$ to $2\\pi$ yields $-2\\pi$.",
      "hint": "Notice that $\\nabla \\times \\mathbf{v} = (0, 0, -2)$, so by Stokes' theorem $\\iint (-2)\\,dA = -2\\pi$."
    },
    {
      "id": "W10-T4-Q06",
      "week": 10,
      "tier": "extra",
      "topic": "Affine Change of Variables",
      "type": "single_select",
      "question": "What is the value of $\\iint_D (x + y)^4 \\, dx \\, dy$ where $D$ is the region bounded by $x + y = 1$, $x + y = 2$, $x - y = -1$, and $x - y = 1$ using $u = x + y, v = x - y$?",
      "options": [
        {
          "id": "W10-T4-Q06-opt0",
          "text": "$\\frac{31}{5}$"
        },
        {
          "id": "W10-T4-Q06-opt1",
          "text": "$\\frac{62}{5}$"
        },
        {
          "id": "W10-T4-Q06-opt2",
          "text": "$\\frac{31}{10}$"
        },
        {
          "id": "W10-T4-Q06-opt3",
          "text": "$15$"
        }
      ],
      "correct_indices": [
        "W10-T4-Q06-opt0"
      ],
      "explanation": "The Jacobian determinant is $|J| = \\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right| = 1/2$. The transformed region is $u \\in [1, 2], v \\in [-1, 1]$. $\\int_1^2 \\int_{-1}^1 u^4 (1/2)\\,dv\\,du = \\frac{1}{2}(2)[u^5/5]_1^2 = \\frac{32 - 1}{5} = \\frac{31}{5}$.",
      "hint": "The Jacobian of $u = x+y, v = x-y$ is $|\\partial(x,y)/\\partial(u,v)| = 1/2$."
    },
    {
      "id": "W10-T4-Q07",
      "week": 10,
      "tier": "extra",
      "topic": "Gaussian Integral Derivation",
      "type": "single_select",
      "question": "Evaluate $\\int_{-\\infty}^\\infty e^{-x^2/2} \\, dx$ using the standard Gaussian double-integral technique.",
      "options": [
        {
          "id": "W10-T4-Q07-opt0",
          "text": "$\\sqrt{2\\pi}$"
        },
        {
          "id": "W10-T4-Q07-opt1",
          "text": "$\\sqrt{\\pi}$"
        },
        {
          "id": "W10-T4-Q07-opt2",
          "text": "$2\\sqrt{\\pi}$"
        },
        {
          "id": "W10-T4-Q07-opt3",
          "text": "$\\pi$"
        }
      ],
      "correct_indices": [
        "W10-T4-Q07-opt0"
      ],
      "explanation": "Let $I = \\int_{-\\infty}^\\infty e^{-x^2/2}dx$. Then $I^2 = \\iint_{\\mathbb{R}^2} e^{-(x^2+y^2)/2}dx\\,dy = \\int_0^{2\\pi}d\\theta \\int_0^\\infty e^{-r^2/2} r\\,dr = 2\\pi [-e^{-r^2/2}]_0^\\infty = 2\\pi$. Hence $I = \\sqrt{2\\pi}$.",
      "hint": "Square the integral, convert to polar coordinates, and take the square root."
    },
    {
      "id": "W10-T4-Q08",
      "week": 10,
      "tier": "extra",
      "topic": "Product Rule for Divergence",
      "type": "single_select",
      "question": "For a scalar field $f$ and vector field $\\mathbf{A}$, what is the correct expansion of $\\nabla \\cdot (f \\mathbf{A})$?",
      "options": [
        {
          "id": "W10-T4-Q08-opt0",
          "text": "$\\nabla f \\cdot \\mathbf{A} + f (\\nabla \\cdot \\mathbf{A})$"
        },
        {
          "id": "W10-T4-Q08-opt1",
          "text": "$f (\\nabla \\cdot \\mathbf{A})$"
        },
        {
          "id": "W10-T4-Q08-opt2",
          "text": "$(\\nabla f) \\times \\mathbf{A} + f (\\nabla \\cdot \\mathbf{A})$"
        },
        {
          "id": "W10-T4-Q08-opt3",
          "text": "$\\nabla f (\\nabla \\cdot \\mathbf{A})$"
        }
      ],
      "correct_indices": [
        "W10-T4-Q08-opt0"
      ],
      "explanation": "By the product rule for divergence: $\\nabla \\cdot (f\\mathbf{A}) = \\nabla f \\cdot \\mathbf{A} + f(\\nabla \\cdot \\mathbf{A})$.",
      "hint": "Apply the standard product rule to each component $\\partial(f A_i)/\\partial x_i$."
    },
    {
      "id": "W10-T4-Q09",
      "week": 10,
      "tier": "extra",
      "topic": "Surface Integral over Hemisphere",
      "type": "single_select",
      "question": "Evaluate the surface integral $\\iint_S z \\, dS$ where $S$ is the upper hemisphere $x^2 + y^2 + z^2 = R^2, z \\ge 0$.",
      "options": [
        {
          "id": "W10-T4-Q09-opt0",
          "text": "$\\pi R^3$"
        },
        {
          "id": "W10-T4-Q09-opt1",
          "text": "$\\frac{2\\pi}{3} R^3$"
        },
        {
          "id": "W10-T4-Q09-opt2",
          "text": "$2\\pi R^3$"
        },
        {
          "id": "W10-T4-Q09-opt3",
          "text": "$\\frac{4\\pi}{3} R^3$"
        }
      ],
      "correct_indices": [
        "W10-T4-Q09-opt0"
      ],
      "explanation": "In spherical coordinates on $S$: $\\rho = R, z = R\\cos\\phi, dS = R^2 \\sin\\phi \\, d\\phi \\, d\\theta$. Then $\\int_0^{2\\pi} d\\theta \\int_0^{\\pi/2} (R\\cos\\phi)(R^2\\sin\\phi)\\,d\\phi = 2\\pi R^3 [\\sin^2\\phi / 2]_0^{\\pi/2} = \\pi R^3$.",
      "hint": "Use spherical coordinates where $z = R\\cos\\phi$ and $dS = R^2 \\sin\\phi\\,d\\phi\\,d\\theta$."
    },
    {
      "id": "W10-T4-Q10",
      "week": 10,
      "tier": "extra",
      "topic": "Laplacian of Inverse Radius",
      "type": "single_select",
      "question": "If $\\mathbf{r} = (x, y, z)$ and $r = |\\mathbf{r}|$, what is the Laplacian $\\nabla^2 \\left(\\frac{1}{r}\\right)$ for $r \\ne 0$?",
      "options": [
        {
          "id": "W10-T4-Q10-opt0",
          "text": "$0$"
        },
        {
          "id": "W10-T4-Q10-opt1",
          "text": "$-\\frac{1}{r^2}$"
        },
        {
          "id": "W10-T4-Q10-opt2",
          "text": "$\\frac{1}{r^3}$"
        },
        {
          "id": "W10-T4-Q10-opt3",
          "text": "$-4\\pi \\delta(\\mathbf{r})$"
        }
      ],
      "correct_indices": [
        "W10-T4-Q10-opt0"
      ],
      "explanation": "For all $r \\ne 0$, $\\frac{1}{r}$ is a harmonic function satisfying $\\nabla^2 (1/r) = 0$. (At the origin $r=0$ it has a distributional delta source $-4\\pi\\delta(\\mathbf{r})$).",
      "hint": "In 3D spherical coordinates, $\\nabla^2 f(r) = \\frac{1}{r^2}\\frac{d}{dr}(r^2 f'(r))$. Test $f(r) = 1/r$."
    }
  ]
};
