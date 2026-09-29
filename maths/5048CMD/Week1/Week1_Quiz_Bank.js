window.QUIZ_BANK_WEEK1 = {
  "module": "5048CMD Engineering Mathematics 2",
  "week": 1,
  "title": "Week 1: First-Order ODEs",
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
      "topic": "Linear First-Order ODEs",
      "type": "single_select",
      "question": "Which of the following differential equations is linear in $y$?",
      "options": [
        {
          "id": "W1-T1-Q01-opt0",
          "text": "$\\frac{dy}{dx} + \\frac{2}{x}y = 4x$"
        },
        {
          "id": "W1-T1-Q01-opt1",
          "text": "$\\frac{dy}{dx} + \\frac{2}{x}y^2 = 4x$"
        },
        {
          "id": "W1-T1-Q01-opt2",
          "text": "$y\\frac{dy}{dx} + 3y = x^2$"
        },
        {
          "id": "W1-T1-Q01-opt3",
          "text": "$\\frac{dy}{dx} + \\sin(y) = 4x$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q01-opt0"
      ],
      "explanation": "A linear first-order ODE has standard form $\\frac{dy}{dx} + P(x)y = Q(x)$, where $y$ and its derivative appear only to the first degree and are not multiplied together.",
      "hint": "Check that $y$ and $y'$ appear linearly without powers or nonlinear compositions like $y^2$ or $\\sin(y)$."
    },
    {
      "id": "W1-T1-Q02",
      "week": 1,
      "tier": "core",
      "topic": "Integrating Factor",
      "type": "single_select",
      "question": "For the linear equation $x\\frac{dy}{dx} + 3y = x^2$ ($x>0$), what is the integrating factor $\\nu(x)$?",
      "options": [
        {
          "id": "W1-T1-Q02-opt0",
          "text": "$x^3$"
        },
        {
          "id": "W1-T1-Q02-opt1",
          "text": "$x^2$"
        },
        {
          "id": "W1-T1-Q02-opt2",
          "text": "$x$"
        },
        {
          "id": "W1-T1-Q02-opt3",
          "text": "$e^{3x}$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q02-opt0"
      ],
      "explanation": "Divide by $x$ to get $\\frac{dy}{dx} + \\frac{3}{x}y = x$. Then $P(x) = \\frac{3}{x}$, giving $\\nu(x) = e^{\\int \\frac{3}{x}\\,dx} = e^{3\\ln x} = x^3$.",
      "hint": "First divide by the leading coefficient $x$ to obtain standard form before integrating $P(x)$."
    },
    {
      "id": "W1-T1-Q03",
      "week": 1,
      "tier": "core",
      "topic": "Exactness Criterion",
      "type": "single_select",
      "question": "Is the differential equation $(2xy + \\cos x)\\,dx + (x^2 - 2y)\\,dy = 0$ exact?",
      "options": [
        {
          "id": "W1-T1-Q03-opt0",
          "text": "Yes, because $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} = 2x$"
        },
        {
          "id": "W1-T1-Q03-opt1",
          "text": "No, because $\\frac{\\partial M}{\\partial y} = 2y$ and $\\frac{\\partial N}{\\partial x} = 2x$"
        },
        {
          "id": "W1-T1-Q03-opt2",
          "text": "No, because $\\frac{\\partial M}{\\partial x} \\neq \\frac{\\partial N}{\\partial y}$"
        },
        {
          "id": "W1-T1-Q03-opt3",
          "text": "It is only exact when $y=0$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q03-opt0"
      ],
      "explanation": "With $M = 2xy + \\cos x$ and $N = x^2 - 2y$, we have $\\frac{\\partial M}{\\partial y} = 2x$ and $\\frac{\\partial N}{\\partial x} = 2x$. Since they are equal everywhere, the equation is exact.",
      "hint": "Compute $\\partial M/\\partial y$ and $\\partial N/\\partial x$ and compare."
    },
    {
      "id": "W1-T1-Q04",
      "week": 1,
      "tier": "core",
      "topic": "Separable ODEs",
      "type": "single_select",
      "question": "What is the general solution of the separable ODE $\\frac{dy}{dx} = 3x^2 y$ ($y > 0$)?",
      "options": [
        {
          "id": "W1-T1-Q04-opt0",
          "text": "$y = C e^{x^3}$"
        },
        {
          "id": "W1-T1-Q04-opt1",
          "text": "$y = x^3 + C$"
        },
        {
          "id": "W1-T1-Q04-opt2",
          "text": "$y = C e^{3x^3}$"
        },
        {
          "id": "W1-T1-Q04-opt3",
          "text": "$\\ln y = x^2 + C$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q04-opt0"
      ],
      "explanation": "Separating variables: $\\frac{1}{y}\\,dy = 3x^2\\,dx$. Integrating yields $\\ln y = x^3 + c_1 \\implies y = C e^{x^3}$ where $C = e^{c_1}$.",
      "hint": "Divide by $y$ and multiply by $dx$, then integrate both sides."
    },
    {
      "id": "W1-T1-Q05",
      "week": 1,
      "tier": "core",
      "topic": "Order and Degree",
      "type": "single_select",
      "question": "What are the order and degree of the differential equation $\\left(\\frac{d^2y}{dx^2}\\right)^3 + x\\left(\\frac{dy}{dx}\\right)^4 + y = 0$?",
      "options": [
        {
          "id": "W1-T1-Q05-opt0",
          "text": "Order 2, degree 3"
        },
        {
          "id": "W1-T1-Q05-opt1",
          "text": "Order 3, degree 2"
        },
        {
          "id": "W1-T1-Q05-opt2",
          "text": "Order 2, degree 4"
        },
        {
          "id": "W1-T1-Q05-opt3",
          "text": "Order 4, degree 3"
        }
      ],
      "correct_indices": [
        "W1-T1-Q05-opt0"
      ],
      "explanation": "The order is determined by the highest derivative present ($d^2y/dx^2$, so order 2). The degree is the power to which this highest derivative is raised (power 3).",
      "hint": "The order is the highest derivative; the degree is its exponent."
    },
    {
      "id": "W1-T1-Q06",
      "week": 1,
      "tier": "core",
      "topic": "Separable Form Identification",
      "type": "single_select",
      "question": "Which of the following equations can be written in the separable form $g(y)\\,dy = f(x)\\,dx$?",
      "options": [
        {
          "id": "W1-T1-Q06-opt0",
          "text": "$\\frac{dy}{dx} = e^{3x+2y}$"
        },
        {
          "id": "W1-T1-Q06-opt1",
          "text": "$\\frac{dy}{dx} = x^2 + y^2$"
        },
        {
          "id": "W1-T1-Q06-opt2",
          "text": "$\\frac{dy}{dx} = x + y$"
        },
        {
          "id": "W1-T1-Q06-opt3",
          "text": "$\\frac{dy}{dx} = \\sin(x + y)$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q06-opt0"
      ],
      "explanation": "Since $e^{3x+2y} = e^{3x}e^{2y}$, we can separate variables as $e^{-2y}\\,dy = e^{3x}\\,dx$. The other options cannot be factored into $f(x)g(y)$.",
      "hint": "Use exponent rules: $e^{A+B} = e^A e^B$."
    },
    {
      "id": "W1-T1-Q07",
      "week": 1,
      "tier": "core",
      "topic": "Standard Linear Form",
      "type": "single_select",
      "question": "Write the ODE $(1+x^2)\\frac{dy}{dx} + 2xy = 4x$ in standard linear form $\\frac{dy}{dx} + P(x)y = Q(x)$. What is $P(x)$?",
      "options": [
        {
          "id": "W1-T1-Q07-opt0",
          "text": "$P(x) = \\frac{2x}{1+x^2}$"
        },
        {
          "id": "W1-T1-Q07-opt1",
          "text": "$P(x) = 2x$"
        },
        {
          "id": "W1-T1-Q07-opt2",
          "text": "$P(x) = \\frac{4x}{1+x^2}$"
        },
        {
          "id": "W1-T1-Q07-opt3",
          "text": "$P(x) = 1+x^2$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q07-opt0"
      ],
      "explanation": "Dividing the entire equation by $(1+x^2)$ gives $\\frac{dy}{dx} + \\frac{2x}{1+x^2}y = \\frac{4x}{1+x^2}$. Thus $P(x) = \\frac{2x}{1+x^2}$.",
      "hint": "Divide every term by the leading coefficient $1+x^2$."
    },
    {
      "id": "W1-T1-Q08",
      "week": 1,
      "tier": "core",
      "topic": "Exponential Decay ODE",
      "type": "single_select",
      "question": "What is the general solution of the decay equation $\\frac{dy}{dt} = -ky$ ($k > 0$)?",
      "options": [
        {
          "id": "W1-T1-Q08-opt0",
          "text": "$y(t) = C e^{-kt}$"
        },
        {
          "id": "W1-T1-Q08-opt1",
          "text": "$y(t) = C e^{kt}$"
        },
        {
          "id": "W1-T1-Q08-opt2",
          "text": "$y(t) = -\\frac{k}{2}t^2 + C$"
        },
        {
          "id": "W1-T1-Q08-opt3",
          "text": "$y(t) = \\frac{C}{kt}$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q08-opt0"
      ],
      "explanation": "Separating variables: $\\frac{1}{y}\\,dy = -k\\,dt \\implies \\ln|y| = -kt + c_1 \\implies y(t) = C e^{-kt}$.",
      "hint": "Recall the standard solution for exponential decay models."
    },
    {
      "id": "W1-T1-Q09",
      "week": 1,
      "tier": "core",
      "topic": "Initial Condition Concept",
      "type": "single_select",
      "question": "If the general solution to an ODE is $y(x) = C e^{2x} + 3$, what is the unique particular solution satisfying $y(0) = 7$?",
      "options": [
        {
          "id": "W1-T1-Q09-opt0",
          "text": "$y(x) = 4e^{2x} + 3$"
        },
        {
          "id": "W1-T1-Q09-opt1",
          "text": "$y(x) = 7e^{2x} + 3$"
        },
        {
          "id": "W1-T1-Q09-opt2",
          "text": "$y(x) = 10e^{2x} + 3$"
        },
        {
          "id": "W1-T1-Q09-opt3",
          "text": "$y(x) = 4e^{2x}$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q09-opt0"
      ],
      "explanation": "Substitute $x=0$: $y(0) = C e^0 + 3 = C + 3 = 7 \\implies C = 4$. Thus $y(x) = 4e^{2x} + 3$.",
      "hint": "Set $x=0$ and solve for the integration constant $C$."
    },
    {
      "id": "W1-T1-Q10",
      "week": 1,
      "tier": "core",
      "topic": "Integrating Factor of Constant Coefficient",
      "type": "single_select",
      "question": "What is the integrating factor for $\\frac{dy}{dx} + 5y = 10$?",
      "options": [
        {
          "id": "W1-T1-Q10-opt0",
          "text": "$e^{5x}$"
        },
        {
          "id": "W1-T1-Q10-opt1",
          "text": "$e^{-5x}$"
        },
        {
          "id": "W1-T1-Q10-opt2",
          "text": "$5x$"
        },
        {
          "id": "W1-T1-Q10-opt3",
          "text": "$e^{10x}$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q10-opt0"
      ],
      "explanation": "Here $P(x) = 5$. The integrating factor is $\\nu(x) = e^{\\int 5\\,dx} = e^{5x}$.",
      "hint": "Integrate $P(x) = 5$ to form $e^{\\int P(x)\\,dx}$."
    },
    {
      "id": "W1-T2-Q01",
      "week": 1,
      "tier": "should",
      "topic": "Separable Initial Value Problem",
      "type": "single_select",
      "question": "Solve the IVP $\\frac{dy}{dx} = \\frac{2x(y^2+1)}{y}$ with $y(0) = 1$. What is the particular solution?",
      "options": [
        {
          "id": "W1-T2-Q01-opt0",
          "text": "$y(x) = \\sqrt{2e^{2x^2} - 1}$"
        },
        {
          "id": "W1-T2-Q01-opt1",
          "text": "$y(x) = \\sqrt{2e^{x^2} - 1}$"
        },
        {
          "id": "W1-T2-Q01-opt2",
          "text": "$y(x) = \\sqrt{e^{2x^2} + 1}$"
        },
        {
          "id": "W1-T2-Q01-opt3",
          "text": "$y(x) = 2e^{x^2} - 1$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q01-opt0"
      ],
      "explanation": "Separating: $\\frac{y}{y^2+1}\\,dy = 2x\\,dx$. Integrating gives $\\frac{1}{2}\\ln(y^2+1) = x^2 + c \\implies y^2+1 = A e^{2x^2}$. Using $y(0)=1 \\implies 1+1 = A \\implies A=2$. Thus $y = \\sqrt{2e^{2x^2}-1}$.",
      "hint": "Integrate $\\frac{y}{y^2+1}\\,dy$ via substitution $u=y^2+1$."
    },
    {
      "id": "W1-T2-Q02",
      "week": 1,
      "tier": "should",
      "topic": "Exact Differential Equations",
      "type": "single_select",
      "question": "For the exact equation $(2xy + 3)\\,dx + (x^2 - 4y)\\,dy = 0$, what is the potential function $\\psi(x,y) = C$?",
      "options": [
        {
          "id": "W1-T2-Q02-opt0",
          "text": "$x^2 y + 3x - 2y^2 = C$"
        },
        {
          "id": "W1-T2-Q02-opt1",
          "text": "$x^2 y^2 + 3x - 4y = C$"
        },
        {
          "id": "W1-T2-Q02-opt2",
          "text": "$2x^2 y + 3x - 2y^2 = C$"
        },
        {
          "id": "W1-T2-Q02-opt3",
          "text": "$x y^2 + 3x - 2y = C$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q02-opt0"
      ],
      "explanation": "Integrate $M$ with respect to $x$: $\\psi(x,y) = \\int (2xy+3)\\,dx = x^2 y + 3x + g(y)$. Differentiate with respect to $y$: $\\frac{\\partial \\psi}{\\partial y} = x^2 + g'(y) = N = x^2 - 4y \\implies g'(y) = -4y \\implies g(y) = -2y^2$. Thus $\\psi(x,y) = x^2 y + 3x - 2y^2 = C$.",
      "hint": "Integrate $M(x,y)$ with respect to $x$, then differentiate with respect to $y$ and equate to $N(x,y)$ to find the arbitrary function $g(y)$."
    },
    {
      "id": "W1-T2-Q03",
      "week": 1,
      "tier": "should",
      "topic": "Linear ODE Solution",
      "type": "single_select",
      "question": "Find the general solution to $\\frac{dy}{dx} + 2y = 4e^{-2x}$.",
      "options": [
        {
          "id": "W1-T2-Q03-opt0",
          "text": "$y(x) = (4x + C)e^{-2x}$"
        },
        {
          "id": "W1-T2-Q03-opt1",
          "text": "$y(x) = 4x e^{-2x} + C$"
        },
        {
          "id": "W1-T2-Q03-opt2",
          "text": "$y(x) = 2e^{-2x} + C$"
        },
        {
          "id": "W1-T2-Q03-opt3",
          "text": "$y(x) = (2x^2 + C)e^{-2x}$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q03-opt0"
      ],
      "explanation": "Integrating factor is $\\nu(x) = e^{\\int 2\\,dx} = e^{2x}$. Multiplying through: $\\frac{d}{dx}[y e^{2x}] = 4e^{-2x}e^{2x} = 4$. Integrating: $y e^{2x} = 4x + C \\implies y(x) = (4x + C)e^{-2x}$.",
      "hint": "Multiply by the integrating factor $e^{2x}$, then integrate the constant $4$."
    },
    {
      "id": "W1-T2-Q04",
      "week": 1,
      "tier": "should",
      "topic": "Separable with Logarithm",
      "type": "single_select",
      "question": "Solve $\\frac{dy}{dx} = \\frac{x^2}{y(1+x^3)}$ for $y > 0, x > -1$.",
      "options": [
        {
          "id": "W1-T2-Q04-opt0",
          "text": "$y^2 = \\frac{2}{3}\\ln(1+x^3) + C$"
        },
        {
          "id": "W1-T2-Q04-opt1",
          "text": "$y^2 = \\ln(1+x^3) + C$"
        },
        {
          "id": "W1-T2-Q04-opt2",
          "text": "$y = \\frac{1}{3}\\ln(1+x^3) + C$"
        },
        {
          "id": "W1-T2-Q04-opt3",
          "text": "$y^2 = \\frac{1}{3(1+x^3)^2} + C$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q04-opt0"
      ],
      "explanation": "Separate: $y\\,dy = \\frac{x^2}{1+x^3}\\,dx$. Integrate: $\\frac{1}{2}y^2 = \\frac{1}{3}\\ln(1+x^3) + c_1 \\implies y^2 = \\frac{2}{3}\\ln(1+x^3) + C$.",
      "hint": "Note that $\\int \\frac{x^2}{1+x^3}\\,dx = \\frac{1}{3}\\ln(1+x^3)$."
    },
    {
      "id": "W1-T2-Q05",
      "week": 1,
      "tier": "should",
      "topic": "Linear IVP with Trigonometric Term",
      "type": "single_select",
      "question": "Solve the IVP $\\frac{dy}{dx} + (\\tan x)y = \\cos^2 x$ with $y(0) = 3$ on $(-\\pi/2, \\pi/2)$.",
      "options": [
        {
          "id": "W1-T2-Q05-opt0",
          "text": "$y(x) = (\\sin x + 3)\\cos x$"
        },
        {
          "id": "W1-T2-Q05-opt1",
          "text": "$y(x) = (\\cos x + 3)\\sin x$"
        },
        {
          "id": "W1-T2-Q05-opt2",
          "text": "$y(x) = 3\\cos x$"
        },
        {
          "id": "W1-T2-Q05-opt3",
          "text": "$y(x) = \\sin x \\cos x + 3$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q05-opt0"
      ],
      "explanation": "Integrating factor: $\\nu(x) = e^{\\int \\tan x\\,dx} = e^{\\ln|\\sec x|} = \\sec x$. Then $\\frac{d}{dx}[y \\sec x] = \\cos^2 x \\sec x = \\cos x$. Integrating: $y \\sec x = \\sin x + C \\implies y(x) = (\\sin x + C)\\cos x$. With $y(0) = 3 \\implies C = 3$. Hence $y = (\\sin x + 3)\\cos x$.",
      "hint": "Recall that $\\int \\tan x\\,dx = \\ln|\\sec x|$ and $\\sec x = 1/\\cos x$."
    },
    {
      "id": "W1-T2-Q06",
      "week": 1,
      "tier": "should",
      "topic": "Exact Equation with Exponential Terms",
      "type": "single_select",
      "question": "Find the potential function for $(y e^{xy} + 2x)\\,dx + (x e^{xy} - 3y^2)\\,dy = 0$.",
      "options": [
        {
          "id": "W1-T2-Q06-opt0",
          "text": "$\\psi(x,y) = e^{xy} + x^2 - y^3 = C$"
        },
        {
          "id": "W1-T2-Q06-opt1",
          "text": "$\\psi(x,y) = e^{xy} + 2x^2 - 3y^3 = C$"
        },
        {
          "id": "W1-T2-Q06-opt2",
          "text": "$\\psi(x,y) = x y e^{xy} + x^2 - y^3 = C$"
        },
        {
          "id": "W1-T2-Q06-opt3",
          "text": "$\\psi(x,y) = e^{xy} + x - y = C$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q06-opt0"
      ],
      "explanation": "Integrate $M = y e^{xy} + 2x$ with respect to $x$: $\\psi(x,y) = e^{xy} + x^2 + h(y)$. Differentiate with respect to $y$: $\\psi_y = x e^{xy} + h'(y) = N = x e^{xy} - 3y^2 \\implies h'(y) = -3y^2 \\implies h(y) = -y^3$. Thus $\\psi(x,y) = e^{xy} + x^2 - y^3 = C$.",
      "hint": "Note that $\\int y e^{xy}\\,dx = e^{xy}$ since $y$ is treated as a constant during $x$-integration."
    },
    {
      "id": "W1-T2-Q07",
      "week": 1,
      "tier": "should",
      "topic": "RL Circuit Governing Equation",
      "type": "single_select",
      "question": "An $RL$ circuit with $L=2\\text{ H}$ and $R=10\\ \\Omega$ has constant voltage $E=50\\text{ V}$. What is the steady-state current $i_{ss}$ as $t \\to \\infty$?",
      "options": [
        {
          "id": "W1-T2-Q07-opt0",
          "text": "$5\\text{ A}$"
        },
        {
          "id": "W1-T2-Q07-opt1",
          "text": "$25\\text{ A}$"
        },
        {
          "id": "W1-T2-Q07-opt2",
          "text": "$10\\text{ A}$"
        },
        {
          "id": "W1-T2-Q07-opt3",
          "text": "$0\\text{ A}$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q07-opt0"
      ],
      "explanation": "The circuit ODE is $L\\frac{di}{dt} + R i = E$. In steady state, $\\frac{di}{dt} = 0$, giving $R i_{ss} = E \\implies i_{ss} = \\frac{E}{R} = \\frac{50}{10} = 5\\text{ A}$.",
      "hint": "In steady state for DC input, the inductor behaves as a short circuit ($di/dt = 0$)."
    },
    {
      "id": "W1-T2-Q08",
      "week": 1,
      "tier": "should",
      "topic": "Salt Concentration Rate Equation",
      "type": "single_select",
      "question": "A tank has $100\\text{ L}$ of water with rate in and out $r = 4\\text{ L/min}$. Pure water enters ($c_{in}=0$). If initial salt is $Q(0) = 20\\text{ kg}$, what is $Q(t)$?",
      "options": [
        {
          "id": "W1-T2-Q08-opt0",
          "text": "$Q(t) = 20 e^{-0.04t}$"
        },
        {
          "id": "W1-T2-Q08-opt1",
          "text": "$Q(t) = 20 - 4t$"
        },
        {
          "id": "W1-T2-Q08-opt2",
          "text": "$Q(t) = 20 e^{-4t}$"
        },
        {
          "id": "W1-T2-Q08-opt3",
          "text": "$Q(t) = 20 e^{-0.4t}$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q08-opt0"
      ],
      "explanation": "$\\frac{dQ}{dt} = -\\frac{r}{V}Q = -\\frac{4}{100}Q = -0.04Q$. The solution is $Q(t) = Q(0)e^{-0.04t} = 20e^{-0.04t}$.",
      "hint": "Use $\\frac{dQ}{dt} = -\\frac{\\text{rate}}{\\text{volume}} Q$."
    },
    {
      "id": "W1-T2-Q09",
      "week": 1,
      "tier": "should",
      "topic": "Linear ODE with Discontinuous Factor",
      "type": "single_select",
      "question": "For $x\\frac{dy}{dx} - y = x^3 \\cos x$ ($x>0$), what is the integrating factor?",
      "options": [
        {
          "id": "W1-T2-Q09-opt0",
          "text": "$\\frac{1}{x}$"
        },
        {
          "id": "W1-T2-Q09-opt1",
          "text": "$x$"
        },
        {
          "id": "W1-T2-Q09-opt2",
          "text": "$-\\frac{1}{x}$"
        },
        {
          "id": "W1-T2-Q09-opt3",
          "text": "$\\ln x$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q09-opt0"
      ],
      "explanation": "Divide by $x$: $\\frac{dy}{dx} - \\frac{1}{x}y = x^2 \\cos x$. Then $P(x) = -\\frac{1}{x}$, so $\\nu(x) = e^{\\int -\\frac{1}{x}\\,dx} = e^{-\\ln x} = x^{-1} = \\frac{1}{x}$.",
      "hint": "Notice the negative sign: $e^{-\\ln x} = \\frac{1}{x}$."
    },
    {
      "id": "W1-T2-Q10",
      "week": 1,
      "tier": "should",
      "topic": "Separable Equation with Arctan",
      "type": "single_select",
      "question": "What is the general solution of $(1+x^2)\\frac{dy}{dx} + y^2 = 0$?",
      "options": [
        {
          "id": "W1-T2-Q10-opt0",
          "text": "$\\frac{1}{y} = \\arctan x + C$"
        },
        {
          "id": "W1-T2-Q10-opt1",
          "text": "$y = \\tan(x + C)$"
        },
        {
          "id": "W1-T2-Q10-opt2",
          "text": "$y = \\arctan x + C$"
        },
        {
          "id": "W1-T2-Q10-opt3",
          "text": "$\\frac{1}{y^2} = \\arctan x + C$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q10-opt0"
      ],
      "explanation": "Separating: $-\\frac{1}{y^2}\\,dy = \\frac{1}{1+x^2}\\,dx$. Integrating gives $\\frac{1}{y} = \\arctan x + C$.",
      "hint": "Recall that $\\int -y^{-2}\\,dy = y^{-1}$ and $\\int \\frac{1}{1+x^2}\\,dx = \\arctan x$."
    },
    {
      "id": "W1-T3-Q01",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Integrating Factor for Non-Exact ODEs",
      "type": "single_select",
      "question": "For the non-exact equation $y\\,dx - x\\,dy = 0$, which integrating factor depending only on $x$ makes it exact?",
      "options": [
        {
          "id": "W1-T3-Q01-opt0",
          "text": "$\\mu(x) = \\frac{1}{x^2}$"
        },
        {
          "id": "W1-T3-Q01-opt1",
          "text": "$\\mu(x) = x^2$"
        },
        {
          "id": "W1-T3-Q01-opt2",
          "text": "$\\mu(x) = e^x$"
        },
        {
          "id": "W1-T3-Q01-opt3",
          "text": "$\\mu(x) = \\frac{1}{x}$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q01-opt0"
      ],
      "explanation": "Here $M=y, N=-x$. We evaluate $\\frac{M_y - N_x}{N} = \\frac{1 - (-1)}{-x} = -\\frac{2}{x}$. The integrating factor is $\\mu(x) = \\exp\\left(\\int -\\frac{2}{x}\\,dx\\right) = e^{-2\\ln x} = x^{-2} = \\frac{1}{x^2}$. Indeed, $d(y/x) = \\frac{x dy - y dx}{x^2} = 0$.",
      "hint": "Use the formula $\\mu(x) = \\exp\\left(\\int \\frac{M_y - N_x}{N}\\,dx\\right)$."
    },
    {
      "id": "W1-T3-Q02",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Newton's Law of Cooling",
      "type": "single_select",
      "question": "A metal rod cools in ambient air at $T_a = 20^\\circ\\text{C}$ according to $\\frac{dT}{dt} = -k(T - 20)$. If $T(0) = 100^\\circ\\text{C}$ and $T(10) = 60^\\circ\\text{C}$, what is $T(20)$?",
      "options": [
        {
          "id": "W1-T3-Q02-opt0",
          "text": "$40^\\circ\\text{C}$"
        },
        {
          "id": "W1-T3-Q02-opt1",
          "text": "$30^\\circ\\text{C}$"
        },
        {
          "id": "W1-T3-Q02-opt2",
          "text": "$45^\\circ\\text{C}$"
        },
        {
          "id": "W1-T3-Q02-opt3",
          "text": "$50^\\circ\\text{C}$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q02-opt0"
      ],
      "explanation": "The temperature excess is $\\theta(t) = T(t) - 20 = 80 e^{-kt}$. At $t=10$, $\\theta(10) = 40 = 80 e^{-10k} \\implies e^{-10k} = \\frac{1}{2}$. At $t=20$, $\\theta(20) = 80 (e^{-10k})^2 = 80 \\times \\frac{1}{4} = 20^\\circ\\text{C}$. Thus $T(20) = 20 + 20 = 40^\\circ\\text{C}$.",
      "hint": "Work with the temperature difference $\\theta(t) = T(t) - T_a$, which decays exponentially."
    },
    {
      "id": "W1-T3-Q03",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Integrating Factor depending on y",
      "type": "single_select",
      "question": "If $\\frac{N_x - M_y}{M} = g(y)$ is a function of $y$ alone, what is the integrating factor $\\mu(y)$ for $M\\,dx + N\\,dy = 0$?",
      "options": [
        {
          "id": "W1-T3-Q03-opt0",
          "text": "$\\mu(y) = e^{\\int g(y)\\,dy}$"
        },
        {
          "id": "W1-T3-Q03-opt1",
          "text": "$\\mu(y) = e^{-\\int g(y)\\,dy}$"
        },
        {
          "id": "W1-T3-Q03-opt2",
          "text": "$\\mu(y) = g(y)$"
        },
        {
          "id": "W1-T3-Q03-opt3",
          "text": "$\\mu(y) = \\frac{1}{g(y)}$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q03-opt0"
      ],
      "explanation": "The exactness condition on $\\mu(y)M\\,dx + \\mu(y)N\\,dy = 0$ requires $\\frac{\\partial}{\\partial y}(\\mu M) = \\frac{\\partial}{\\partial x}(\\mu N) \\implies \\mu' M + \\mu M_y = \\mu N_x \\implies \\frac{\\mu'}{\\mu} = \\frac{N_x - M_y}{M} = g(y)$, giving $\\mu(y) = e^{\\int g(y)\\,dy}$.",
      "hint": "Notice the sign order in the numerator: $N_x - M_y$ for $y$-dependent factors."
    },
    {
      "id": "W1-T3-Q04",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Non-Exact to Exact Conversion",
      "type": "single_select",
      "question": "For $(3xy + y^2)\\,dx + (x^2 + xy)\\,dy = 0$, what integrating factor $\\mu(x)$ makes the equation exact?",
      "options": [
        {
          "id": "W1-T3-Q04-opt0",
          "text": "$\\mu(x) = x$"
        },
        {
          "id": "W1-T3-Q04-opt1",
          "text": "$\\mu(x) = x^2$"
        },
        {
          "id": "W1-T3-Q04-opt2",
          "text": "$\\mu(x) = \\frac{1}{x}$"
        },
        {
          "id": "W1-T3-Q04-opt3",
          "text": "$\\mu(x) = e^x$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q04-opt0"
      ],
      "explanation": "$M_y = 3x + 2y$, $N_x = 2x + y$. Then $\\frac{M_y - N_x}{N} = \\frac{(3x+2y) - (2x+y)}{x^2 + xy} = \\frac{x+y}{x(x+y)} = \\frac{1}{x}$. Thus $\\mu(x) = e^{\\int \\frac{1}{x}\\,dx} = x$.",
      "hint": "Factor $x^2+xy = x(x+y)$ in the denominator."
    },
    {
      "id": "W1-T3-Q05",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Transient vs Steady State in Circuits",
      "type": "single_select",
      "question": "In the RL circuit solution $i(t) = \\frac{E}{R}(1 - e^{-Rt/L})$, which component represents the transient response?",
      "options": [
        {
          "id": "W1-T3-Q05-opt0",
          "text": "$-\\frac{E}{R}e^{-Rt/L}$"
        },
        {
          "id": "W1-T3-Q05-opt1",
          "text": "$\\frac{E}{R}$"
        },
        {
          "id": "W1-T3-Q05-opt2",
          "text": "$1$"
        },
        {
          "id": "W1-T3-Q05-opt3",
          "text": "$e^{-Rt/L}$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q05-opt0"
      ],
      "explanation": "The transient response is the portion that decays to zero as $t \\to \\infty$, which is $-\\frac{E}{R}e^{-Rt/L}$. The remaining constant $\\frac{E}{R}$ is the steady-state response.",
      "hint": "Transient terms vanish as $t \\to \\infty$."
    },
    {
      "id": "W1-T3-Q06",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Time Constant of First-Order System",
      "type": "single_select",
      "question": "For the decay equation $\\frac{dy}{dt} + \\frac{1}{\\tau}y = 0$, what is the physical meaning of the time constant $\\tau$?",
      "options": [
        {
          "id": "W1-T3-Q06-opt0",
          "text": "The time required for $y(t)$ to decay to $1/e \\approx 36.8\\%$ of its initial value"
        },
        {
          "id": "W1-T3-Q06-opt1",
          "text": "The half-life where $y(t)$ reaches $50\\%$"
        },
        {
          "id": "W1-T3-Q06-opt2",
          "text": "The time to reach exactly zero"
        },
        {
          "id": "W1-T3-Q06-opt3",
          "text": "The frequency of oscillation"
        }
      ],
      "correct_indices": [
        "W1-T3-Q06-opt0"
      ],
      "explanation": "At $t = \\tau$, $y(\\tau) = y(0)e^{-\\tau/\\tau} = y(0)e^{-1} \\approx 0.368 y(0)$, meaning the system has decayed by $63.2\\%$ and retained $36.8\\%$.",
      "hint": "Evaluate $e^{-t/\\tau}$ at $t=\\tau$."
    },
    {
      "id": "W1-T3-Q07",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Non-linear ODE with Square Root",
      "type": "single_select",
      "question": "Solve $\\frac{dy}{dx} = \\frac{x}{\\sqrt{1-x^2}}$ with $y(0) = 5$.",
      "options": [
        {
          "id": "W1-T3-Q07-opt0",
          "text": "$y(x) = 6 - \\sqrt{1-x^2}$"
        },
        {
          "id": "W1-T3-Q07-opt1",
          "text": "$y(x) = \\sqrt{1-x^2} + 4$"
        },
        {
          "id": "W1-T3-Q07-opt2",
          "text": "$y(x) = 5 - \\sqrt{1-x^2}$"
        },
        {
          "id": "W1-T3-Q07-opt3",
          "text": "$y(x) = \\arcsin x + 5$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q07-opt0"
      ],
      "explanation": "Integrate directly: $y = \\int \\frac{x}{\\sqrt{1-x^2}}\\,dx = -\\sqrt{1-x^2} + C$. With $y(0) = -1 + C = 5 \\implies C = 6$. Thus $y(x) = 6 - \\sqrt{1-x^2}$.",
      "hint": "Use $u = 1-x^2$ so that $du = -2x\\,dx$."
    },
    {
      "id": "W1-T3-Q08",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Orthogonal Trajectories Concept",
      "type": "single_select",
      "question": "If a family of curves satisfies $\\frac{dy}{dx} = f(x,y)$, what differential equation governs the orthogonal trajectories?",
      "options": [
        {
          "id": "W1-T3-Q08-opt0",
          "text": "$\\frac{dy}{dx} = -\\frac{1}{f(x,y)}$"
        },
        {
          "id": "W1-T3-Q08-opt1",
          "text": "$\\frac{dy}{dx} = \\frac{1}{f(x,y)}$"
        },
        {
          "id": "W1-T3-Q08-opt2",
          "text": "$\\frac{dy}{dx} = -f(x,y)$"
        },
        {
          "id": "W1-T3-Q08-opt3",
          "text": "$\\frac{d^2y}{dx^2} = f(x,y)$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q08-opt0"
      ],
      "explanation": "Orthogonal curves have negative reciprocal slopes at every point of intersection: $m_{\\perp} = -1/m$, so the ODE is $\\frac{dy}{dx} = -\\frac{1}{f(x,y)}$.",
      "hint": "Perpendicular lines satisfy $m_1 m_2 = -1$."
    },
    {
      "id": "W1-T3-Q09",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Limiting Concentration in Mixing Tank",
      "type": "single_select",
      "question": "A tank with inflow concentration $c_{in} = 0.5\\text{ kg/L}$ and equal inflow/outflow rates will have what limiting salt concentration as $t \\to \\infty$?",
      "options": [
        {
          "id": "W1-T3-Q09-opt0",
          "text": "$0.5\\text{ kg/L}$"
        },
        {
          "id": "W1-T3-Q09-opt1",
          "text": "$0\\text{ kg/L}$"
        },
        {
          "id": "W1-T3-Q09-opt2",
          "text": "$1.0\\text{ kg/L}$"
        },
        {
          "id": "W1-T3-Q09-opt3",
          "text": "Dependent on the tank volume"
        }
      ],
      "correct_indices": [
        "W1-T3-Q09-opt0"
      ],
      "explanation": "As $t \\to \\infty$, the initial contents are completely flushed out and the tank concentration approaches the incoming concentration: $c(t) \\to c_{in} = 0.5\\text{ kg/L}$.",
      "hint": "The long-term concentration always equals the incoming inflow concentration."
    },
    {
      "id": "W1-T3-Q10",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Logistic Equation Growth",
      "type": "single_select",
      "question": "The logistic differential equation $\\frac{dP}{dt} = r P\\left(1 - \\frac{P}{K}\\right)$ has carrying capacity $K$. What happens if $P(0) > K$?",
      "options": [
        {
          "id": "W1-T3-Q10-opt0",
          "text": "$P(t)$ decreases asymptotically towards $K$"
        },
        {
          "id": "W1-T3-Q10-opt1",
          "text": "$P(t)$ grows unboundedly to $\\infty$"
        },
        {
          "id": "W1-T3-Q10-opt2",
          "text": "$P(t)$ oscillates around $K$"
        },
        {
          "id": "W1-T3-Q10-opt3",
          "text": "$P(t)$ drops immediately to 0"
        }
      ],
      "correct_indices": [
        "W1-T3-Q10-opt0"
      ],
      "explanation": "If $P > K$, the factor $(1 - P/K)$ is negative, so $\\frac{dP}{dt} < 0$, causing the population to decline monotonically toward the carrying capacity $K$.",
      "hint": "Check the sign of $dP/dt$ when $P > K$."
    },
    {
      "id": "W1-T4-Q01",
      "week": 1,
      "tier": "extra",
      "topic": "Bernoulli Equation Substitution",
      "type": "single_select",
      "question": "For the Bernoulli equation $y' + y = y^2$, which substitution reduces it to a linear first-order ODE in $v(x)$?",
      "options": [
        {
          "id": "W1-T4-Q01-opt0",
          "text": "$v = y^{-1}$ yielding $-v' + v = 1$"
        },
        {
          "id": "W1-T4-Q01-opt1",
          "text": "$v = y^2$ yielding $v' + 2v = 1$"
        },
        {
          "id": "W1-T4-Q01-opt2",
          "text": "$v = y^{-2}$ yielding $-2v' + v = 1$"
        },
        {
          "id": "W1-T4-Q01-opt3",
          "text": "$v = \\ln y$ yielding $v' + 1 = e^v$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q01-opt0"
      ],
      "explanation": "For $y' + P(x)y = Q(x)y^n$, substitute $v = y^{1-n}$. Here $n=2$, so $v = y^{-1}$. Differentiating: $v' = -y^{-2}y' \\implies y' = -y^2 v'$. Substituting into the ODE: $-y^2 v' + y = y^2 \\implies -v' + v = 1$, which is linear.",
      "hint": "For Bernoulli equations $y' + P(x)y = Q(x)y^n$, the canonical transformation is $v = y^{1-n}$."
    },
    {
      "id": "W1-T4-Q02",
      "week": 1,
      "tier": "extra",
      "topic": "Homogeneous First-Order ODEs",
      "type": "single_select",
      "question": "The homogeneous ODE $\\frac{dy}{dx} = \\frac{x^2 + y^2}{2xy}$ is transformed by $y = vx$. What is the resulting separable equation in $v$ and $x$?",
      "options": [
        {
          "id": "W1-T4-Q02-opt0",
          "text": "$x\\frac{dv}{dx} = \\frac{1 - v^2}{2v}$"
        },
        {
          "id": "W1-T4-Q02-opt1",
          "text": "$x\\frac{dv}{dx} = \\frac{1 + v^2}{2v}$"
        },
        {
          "id": "W1-T4-Q02-opt2",
          "text": "$\\frac{dv}{dx} = \\frac{1 - v^2}{2x}$"
        },
        {
          "id": "W1-T4-Q02-opt3",
          "text": "$x\\frac{dv}{dx} = \\frac{v^2 - 1}{v}$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q02-opt0"
      ],
      "explanation": "Substituting $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$. The right side is $\\frac{x^2 + v^2 x^2}{2x(vx)} = \\frac{1+v^2}{2v}$. Setting equal: $v + x\\frac{dv}{dx} = \\frac{1+v^2}{2v} \\implies x\\frac{dv}{dx} = \\frac{1+v^2 - 2v^2}{2v} = \\frac{1-v^2}{2v}$.",
      "hint": "Substitute $y = vx$ and $y' = v + xv'$, then simplify the right hand side and subtract $v$."
    },
    {
      "id": "W1-T4-Q03",
      "week": 1,
      "tier": "extra",
      "topic": "Bernoulli Equation General Solution",
      "type": "single_select",
      "question": "Solve the Bernoulli equation $\\frac{dy}{dx} + \\frac{1}{x}y = x y^2$ ($x > 0$).",
      "options": [
        {
          "id": "W1-T4-Q03-opt0",
          "text": "$y(x) = \\frac{1}{C x - x^2}$"
        },
        {
          "id": "W1-T4-Q03-opt1",
          "text": "$y(x) = \\frac{1}{x^2 + C}$"
        },
        {
          "id": "W1-T4-Q03-opt2",
          "text": "$y(x) = C x - x^2$"
        },
        {
          "id": "W1-T4-Q03-opt3",
          "text": "$y(x) = \\frac{x}{C - x^2}$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q03-opt0"
      ],
      "explanation": "Divide by $y^2$: $y^{-2}y' + \\frac{1}{x}y^{-1} = x$. Let $v = y^{-1} \\implies v' = -y^{-2}y'$. The equation becomes $-v' + \\frac{1}{x}v = x \\implies v' - \\frac{1}{x}v = -x$. Integrating factor is $\\frac{1}{x}$: $\\frac{d}{dx}[v/x] = -1 \\implies v/x = -x + C \\implies v = C x - x^2$. Hence $y = \\frac{1}{C x - x^2}$.",
      "hint": "Divide by $y^2$ and make the linearizing substitution $v = y^{-1}$."
    },
    {
      "id": "W1-T4-Q04",
      "week": 1,
      "tier": "extra",
      "topic": "Exact Differential Form with Three Variables",
      "type": "single_select",
      "question": "Under what condition is the 1-form $P\\,dx + Q\\,dy + R\\,dz$ exact (conservative)?",
      "options": [
        {
          "id": "W1-T4-Q04-opt0",
          "text": "$\\text{curl}\\begin{pmatrix} P \\\\ Q \\\\ R \\end{pmatrix} = \\mathbf{0}$"
        },
        {
          "id": "W1-T4-Q04-opt1",
          "text": "$\\text{div}\\begin{pmatrix} P \\\\ Q \\\\ R \\end{pmatrix} = 0$"
        },
        {
          "id": "W1-T4-Q04-opt2",
          "text": "$P_x + Q_y + R_z = 0$"
        },
        {
          "id": "W1-T4-Q04-opt3",
          "text": "$P^2 + Q^2 + R^2 = 1$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q04-opt0"
      ],
      "explanation": "A 1-form is exact if it is the gradient of a scalar function $\\nabla \\psi$. In a simply connected domain, this is equivalent to zero curl: $\\frac{\\partial R}{\\partial y} = \\frac{\\partial Q}{\\partial z}, \\frac{\\partial P}{\\partial z} = \\frac{\\partial R}{\\partial x}, \\frac{\\partial Q}{\\partial x} = \\frac{\\partial P}{\\partial y}$.",
      "hint": "Recall that conservative fields have zero curl."
    },
    {
      "id": "W1-T4-Q05",
      "week": 1,
      "tier": "extra",
      "topic": "Picard-Lindel\u00f6f Existence Theorem",
      "type": "single_select",
      "question": "What condition does the Picard-Lindel\u00f6f Theorem require on $f(x, y)$ to guarantee a unique local solution to $y' = f(x, y), y(x_0) = y_0$?",
      "options": [
        {
          "id": "W1-T4-Q05-opt0",
          "text": "$f(x, y)$ must be continuous and Lipschitz continuous with respect to $y$"
        },
        {
          "id": "W1-T4-Q05-opt1",
          "text": "$f(x, y)$ must be analytic everywhere"
        },
        {
          "id": "W1-T4-Q05-opt2",
          "text": "$f(x, y)$ must be linear in $x$"
        },
        {
          "id": "W1-T4-Q05-opt3",
          "text": "$f(x, y)$ must be bounded by 1"
        }
      ],
      "correct_indices": [
        "W1-T4-Q05-opt0"
      ],
      "explanation": "The Picard-Lindel\u00f6f theorem guarantees existence and uniqueness if $f(x,y)$ is continuous in $x$ and satisfies a Lipschitz condition $|f(x, y_1) - f(x, y_2)| \\le L |y_1 - y_2|$ in $y$.",
      "hint": "Lipschitz continuity in $y$ prevents multiple integral curves from branching at the same initial point."
    },
    {
      "id": "W1-T4-Q06",
      "week": 1,
      "tier": "extra",
      "topic": "Homogeneous Equation Integration",
      "type": "single_select",
      "question": "Solve $(x^2 + y^2)\\,dx - 2xy\\,dy = 0$ using $y = vx$.",
      "options": [
        {
          "id": "W1-T4-Q06-opt0",
          "text": "$x^2 - y^2 = C x$"
        },
        {
          "id": "W1-T4-Q06-opt1",
          "text": "$x^2 + y^2 = C x$"
        },
        {
          "id": "W1-T4-Q06-opt2",
          "text": "$y^2 - x^2 = C$"
        },
        {
          "id": "W1-T4-Q06-opt3",
          "text": "$x^2 y^2 = C$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q06-opt0"
      ],
      "explanation": "Divide by $x^2$: $(1 + v^2)\\,dx - 2v(v\\,dx + x\\,dv) = 0 \\implies (1 - v^2)\\,dx - 2vx\\,dv = 0 \\implies \\frac{1}{x}\\,dx = \\frac{2v}{1-v^2}\\,dv$. Integrating: $\\ln|x| = -\\ln|1-v^2| + c_1 \\implies x(1-v^2) = C \\implies x(1 - y^2/x^2) = C \\implies x^2 - y^2 = C x$.",
      "hint": "Rewrite in terms of $v = y/x$ and integrate by separation."
    },
    {
      "id": "W1-T4-Q07",
      "week": 1,
      "tier": "extra",
      "topic": "Riccati Equation Reduction",
      "type": "single_select",
      "question": "A Riccati equation has the form $y' = q_0(x) + q_1(x)y + q_2(x)y^2$. If a particular solution $y_1(x)$ is known, what substitution reduces it to a linear ODE?",
      "options": [
        {
          "id": "W1-T4-Q07-opt0",
          "text": "$y = y_1(x) + \\frac{1}{u(x)}$"
        },
        {
          "id": "W1-T4-Q07-opt1",
          "text": "$y = y_1(x) u(x)$"
        },
        {
          "id": "W1-T4-Q07-opt2",
          "text": "$y = y_1(x) + u(x)^2$"
        },
        {
          "id": "W1-T4-Q07-opt3",
          "text": "$y = \\ln(y_1(x) + u(x))$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q07-opt0"
      ],
      "explanation": "Substituting $y = y_1 + 1/u$ transforms the quadratic term $y^2 = y_1^2 + 2y_1/u + 1/u^2$ such that the $1/u^2$ cancels with $y' = y_1' - u'/u^2$, leaving a linear ODE in $u(x)$.",
      "hint": "The substitution is $y = y_1 + \\frac{1}{u}$."
    },
    {
      "id": "W1-T4-Q08",
      "week": 1,
      "tier": "extra",
      "topic": "Orthogonal Trajectories of Parabolas",
      "type": "single_select",
      "question": "Find the orthogonal trajectories of the family of parabolas $y = c x^2$.",
      "options": [
        {
          "id": "W1-T4-Q08-opt0",
          "text": "$\\frac{x^2}{2} + y^2 = C$ (ellipses)"
        },
        {
          "id": "W1-T4-Q08-opt1",
          "text": "$x^2 - y^2 = C$ (hyperbolas)"
        },
        {
          "id": "W1-T4-Q08-opt2",
          "text": "$y = C x$ (straight lines)"
        },
        {
          "id": "W1-T4-Q08-opt3",
          "text": "$x^3 + y^3 = C$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q08-opt0"
      ],
      "explanation": "Differentiate $y = c x^2 \\implies y' = 2cx$. Eliminate $c = y/x^2 \\implies y' = 2(y/x^2)x = \\frac{2y}{x}$. The orthogonal trajectories satisfy $\\frac{dy}{dx} = -\\frac{x}{2y} \\implies 2y\\,dy = -x\\,dx$. Integrating: $y^2 = -\\frac{x^2}{2} + C \\implies \\frac{x^2}{2} + y^2 = C$ (a family of ellipses).",
      "hint": "Eliminate the parameter $c$ first to find $y'$, then take the negative reciprocal $-1/y'$."
    },
    {
      "id": "W1-T4-Q09",
      "week": 1,
      "tier": "extra",
      "topic": "Clairaut Equation",
      "type": "single_select",
      "question": "For Clairaut's equation $y = x y' + f(y')$, what is the nature of the general solution family?",
      "options": [
        {
          "id": "W1-T4-Q09-opt0",
          "text": "A family of straight lines $y = C x + f(C)$ together with a singular envelope solution"
        },
        {
          "id": "W1-T4-Q09-opt1",
          "text": "A family of concentric circles"
        },
        {
          "id": "W1-T4-Q09-opt2",
          "text": "A family of logarithmic spirals"
        },
        {
          "id": "W1-T4-Q09-opt3",
          "text": "A family of exponential curves"
        }
      ],
      "correct_indices": [
        "W1-T4-Q09-opt0"
      ],
      "explanation": "Differentiating $y = x p + f(p)$ with $p = y'$ yields $p = p + x p' + f'(p)p' \\implies p'[x + f'(p)] = 0$. Setting $p' = 0 \\implies p = C$, yielding the family of straight lines $y = C x + f(C)$. The factor $x + f'(p) = 0$ yields the singular envelope solution.",
      "hint": "Differentiate with respect to $x$ and set $p' = 0$."
    },
    {
      "id": "W1-T4-Q10",
      "week": 1,
      "tier": "extra",
      "topic": "Integrating Factor Formula via PDE",
      "type": "single_select",
      "question": "The general condition for $\\mu(x,y)$ to be an integrating factor for $M\\,dx + N\\,dy = 0$ is the PDE:",
      "options": [
        {
          "id": "W1-T4-Q10-opt0",
          "text": "$N\\frac{\\partial \\mu}{\\partial x} - M\\frac{\\partial \\mu}{\\partial y} = \\mu\\left(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}\\right)$"
        },
        {
          "id": "W1-T4-Q10-opt1",
          "text": "$M\\frac{\\partial \\mu}{\\partial x} + N\\frac{\\partial \\mu}{\\partial y} = 0$"
        },
        {
          "id": "W1-T4-Q10-opt2",
          "text": "$\\frac{\\partial^2 \\mu}{\\partial x^2} + \\frac{\\partial^2 \\mu}{\\partial y^2} = 0$"
        },
        {
          "id": "W1-T4-Q10-opt3",
          "text": "$\\mu(M_x + N_y) = 0$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q10-opt0"
      ],
      "explanation": "Exactness of $(\\mu M)\\,dx + (\\mu N)\\,dy = 0$ requires $\\frac{\\partial}{\\partial y}(\\mu M) = \\frac{\\partial}{\\partial x}(\\mu N) \\implies \\mu_y M + \\mu M_y = \\mu_x N + \\mu N_x \\implies N\\mu_x - M\\mu_y = \\mu(M_y - N_x)$.",
      "hint": "Expand $\\partial(\\mu M)/\\partial y = \\partial(\\mu N)/\\partial x$ via product rule."
    }
  ]
};
