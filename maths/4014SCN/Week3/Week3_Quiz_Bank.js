window.QUIZ_BANK_WEEK3 = {
  "module": "4014SCN Calculus and Applications",
  "week": 3,
  "title": "Week 3 Quiz Bank: Differential Equations (ODEs) & Laplace Transforms",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W3-T1-Q01",
      "week": 3,
      "tier": "core",
      "topic": "Separable First-Order ODEs",
      "type": "single_select",
      "question": "Solve the separable differential equation $\\frac{dy}{dx} = 3x^2 y$ for $y > 0$.",
      "options": [
        {
          "id": "W3-T1-Q01-opt0",
          "text": "$y = C e^{x^3}$"
        },
        {
          "id": "W3-T1-Q01-opt1",
          "text": "$y = x^3 + C$"
        },
        {
          "id": "W3-T1-Q01-opt2",
          "text": "$y = C e^{3x^2}$"
        },
        {
          "id": "W3-T1-Q01-opt3",
          "text": "$y = e^{x^3 + C} + 3$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q01-opt0"
      ],
      "explanation": "Separating variables: $\\frac{1}{y} dy = 3x^2 dx \\implies \\int \\frac{1}{y} dy = \\int 3x^2 dx \\implies \\ln(y) = x^3 + K \\implies y = C e^{x^3}$.",
      "hint": "Separate variables: move all $y$-terms to the left and all $x$-terms to the right. Integrate both sides, then exponentiate to solve for $y$."
    },
    {
      "id": "W3-T1-Q02",
      "week": 3,
      "tier": "core",
      "topic": "Integrating Factor Method",
      "type": "single_select",
      "question": "For the linear first-order differential equation $\\frac{dy}{dx} + 2y = 4$, what is the integrating factor $I(x)$?",
      "options": [
        {
          "id": "W3-T1-Q02-opt0",
          "text": "$e^{2x}$"
        },
        {
          "id": "W3-T1-Q02-opt1",
          "text": "$e^{x^2}$"
        },
        {
          "id": "W3-T1-Q02-opt2",
          "text": "$2x$"
        },
        {
          "id": "W3-T1-Q02-opt3",
          "text": "$e^{-2x}$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q02-opt0"
      ],
      "explanation": "Here $P(x) = 2$. The integrating factor is $I(x) = e^{\\int P(x) dx} = e^{\\int 2 dx} = e^{2x}$.",
      "hint": "The integrating factor $I(x) = e^{\\int P(x)dx}$ where $P(x)$ is the coefficient of $y$ in the standard form $y' + P(x)y = Q(x)$. Here $P(x) = 2$."
    },
    {
      "id": "W3-T1-Q03",
      "week": 3,
      "tier": "core",
      "topic": "First-Order Initial Value Problem",
      "type": "single_select",
      "question": "Solve the IVP $\\frac{dy}{dx} = 2x$ with initial condition $y(0) = 5$.",
      "options": [
        {
          "id": "W3-T1-Q03-opt0",
          "text": "$y = x^2 + 5$"
        },
        {
          "id": "W3-T1-Q03-opt1",
          "text": "$y = 2x + 5$"
        },
        {
          "id": "W3-T1-Q03-opt2",
          "text": "$y = x^2 - 5$"
        },
        {
          "id": "W3-T1-Q03-opt3",
          "text": "$y = 5e^{2x}$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q03-opt0"
      ],
      "explanation": "Integrating $\\frac{dy}{dx} = 2x \\implies y = x^2 + C$. Applying $y(0) = 5 \\implies 5 = 0 + C \\implies C = 5$. Result: $y = x^2 + 5$.",
      "hint": "Integrate both sides with respect to $x$. The antiderivative of $2x$ is $x^2 + C$. Apply the initial condition $y(0) = 5$ to determine $C$."
    },
    {
      "id": "W3-T1-Q04",
      "week": 3,
      "tier": "core",
      "topic": "Standard Laplace Transform (Exponential)",
      "type": "single_select",
      "question": "What is the Laplace transform $\\mathcal{L}\\{e^{3t}\\}$ for $s > 3$?",
      "options": [
        {
          "id": "W3-T1-Q04-opt0",
          "text": "$\\frac{1}{s - 3}$"
        },
        {
          "id": "W3-T1-Q04-opt1",
          "text": "$\\frac{1}{s + 3}$"
        },
        {
          "id": "W3-T1-Q04-opt2",
          "text": "$\\frac{3}{s}$"
        },
        {
          "id": "W3-T1-Q04-opt3",
          "text": "$\\frac{1}{s^2 + 9}$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q04-opt0"
      ],
      "explanation": "Using standard transform formula $\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s - a}$ with $a = 3$ gives $\\frac{1}{s - 3}$.",
      "hint": "The standard Laplace transform formula is $\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}$ valid for $s > a$. Here $a = 3$."
    },
    {
      "id": "W3-T1-Q05",
      "week": 3,
      "tier": "core",
      "topic": "Standard Laplace Transform (Sine)",
      "type": "single_select",
      "question": "Find $\\mathcal{L}\\{\\sin(4t)\\}$.",
      "options": [
        {
          "id": "W3-T1-Q05-opt0",
          "text": "$\\frac{4}{s^2 + 16}$"
        },
        {
          "id": "W3-T1-Q05-opt1",
          "text": "$\\frac{s}{s^2 + 16}$"
        },
        {
          "id": "W3-T1-Q05-opt2",
          "text": "$\\frac{4}{s^2 - 16}$"
        },
        {
          "id": "W3-T1-Q05-opt3",
          "text": "$\\frac{16}{s^2 + 16}$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q05-opt0"
      ],
      "explanation": "Using formula $\\mathcal{L}\\{\\sin(\\omega t)\\} = \\frac{\\omega}{s^2 + \\omega^2}$ with $\\omega = 4$ yields $\\frac{4}{s^2 + 16}$.",
      "hint": "Use $\\mathcal{L}\\{\\sin(\\omega t)\\} = \\frac{\\omega}{s^2 + \\omega^2}$. Here $\\omega = 4$. Note: sine gives $\\omega$ in the numerator, while cosine gives $s$ in the numerator."
    },
    {
      "id": "W3-T1-Q06",
      "week": 3,
      "tier": "core",
      "topic": "Standard Laplace Transform (Cosine)",
      "type": "single_select",
      "question": "Find $\\mathcal{L}\\{\\cos(2t)\\}$.",
      "options": [
        {
          "id": "W3-T1-Q06-opt0",
          "text": "$\\frac{s}{s^2 + 4}$"
        },
        {
          "id": "W3-T1-Q06-opt1",
          "text": "$\\frac{2}{s^2 + 4}$"
        },
        {
          "id": "W3-T1-Q06-opt2",
          "text": "$\\frac{s}{s^2 - 4}$"
        },
        {
          "id": "W3-T1-Q06-opt3",
          "text": "$\\frac{1}{s - 2}$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q06-opt0"
      ],
      "explanation": "Using formula $\\mathcal{L}\\{\\cos(\\omega t)\\} = \\frac{s}{s^2 + \\omega^2}$ with $\\omega = 2$ gives $\\frac{s}{s^2 + 4}$.",
      "hint": "Use $\\mathcal{L}\\{\\cos(\\omega t)\\} = \\frac{s}{s^2 + \\omega^2}$. Here $\\omega = 2$. Note $s$ appears in the numerator (not $\\omega$)."
    },
    {
      "id": "W3-T1-Q07",
      "week": 3,
      "tier": "core",
      "topic": "Standard Inverse Laplace Transform",
      "type": "single_select",
      "question": "Evaluate the inverse Laplace transform $\\mathcal{L}^{-1}\\left\\{\\frac{6}{s^4}\\right\\}$.",
      "options": [
        {
          "id": "W3-T1-Q07-opt0",
          "text": "$t^3$"
        },
        {
          "id": "W3-T1-Q07-opt1",
          "text": "$6t^3$"
        },
        {
          "id": "W3-T1-Q07-opt2",
          "text": "$2t^3$"
        },
        {
          "id": "W3-T1-Q07-opt3",
          "text": "$t^4$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q07-opt0"
      ],
      "explanation": "Since $\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}$, for $n=3$: $\\mathcal{L}\\{t^3\\} = \\frac{3!}{s^4} = \\frac{6}{s^4}$. Thus $\\mathcal{L}^{-1}\\left\\{\\frac{6}{s^4}\\right\\} = t^3$.",
      "hint": "Use $\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}$. Here the numerator is 6, and $6 = 3! = 3!$. So what value of $n$ satisfies $n! = 6$?"
    },
    {
      "id": "W3-T1-Q08",
      "week": 3,
      "tier": "core",
      "topic": "Linear First-Order ODE Solution",
      "type": "single_select",
      "question": "Solve $\\frac{dy}{dx} + y = e^x$.",
      "options": [
        {
          "id": "W3-T1-Q08-opt0",
          "text": "$y = \\frac{1}{2}e^x + C e^{-x}$"
        },
        {
          "id": "W3-T1-Q08-opt1",
          "text": "$y = e^x + C e^{-x}$"
        },
        {
          "id": "W3-T1-Q08-opt2",
          "text": "$y = \\frac{1}{2}e^x + C e^x$"
        },
        {
          "id": "W3-T1-Q08-opt3",
          "text": "$y = 2e^x + C$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q08-opt0"
      ],
      "explanation": "Integrating factor $I(x) = e^x$. Multiply: $\\frac{d}{dx}[y e^x] = e^{2x} \\implies y e^x = \\frac{1}{2}e^{2x} + C \\implies y = \\frac{1}{2}e^x + C e^{-x}$.",
      "hint": "Find the integrating factor $I(x) = e^{\\int 1\\,dx} = e^x$. Multiply both sides by $e^x$, recognise the left side as $\\frac{d}{dx}[ye^x]$, integrate, then divide by $e^x$."
    },
    {
      "id": "W3-T1-Q09",
      "week": 3,
      "tier": "core",
      "topic": "Standard Laplace Table",
      "type": "multiple_select",
      "question": "Select ALL valid Laplace transform pairs below:",
      "options": [
        {
          "id": "W3-T1-Q09-opt0",
          "text": "$\\mathcal{L}\\{1\\} = \\frac{1}{s}$ for $s > 0$"
        },
        {
          "id": "W3-T1-Q09-opt1",
          "text": "$\\mathcal{L}\\{t\\} = \\frac{1}{s^2}$ for $s > 0$"
        },
        {
          "id": "W3-T1-Q09-opt2",
          "text": "$\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}$ for $s > a$"
        },
        {
          "id": "W3-T1-Q09-opt3",
          "text": "$\\mathcal{L}\\{\\sin(t)\\} = \\frac{s}{s^2+1}$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q09-opt0",
        "W3-T1-Q09-opt1",
        "W3-T1-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are correct elementary pairs. Option 4 is false (that is cosine; $\\mathcal{L}\\{\\sin t\\} = \\frac{1}{s^2+1}$).",
      "hint": "Option 4: compare $\\mathcal{L}\\{\\sin t\\}$ and $\\mathcal{L}\\{\\cos t\\}$. Sine has $\\omega$ in the numerator; cosine has $s$ in the numerator."
    },
    {
      "id": "W3-T1-Q10",
      "week": 3,
      "tier": "core",
      "topic": "ODE Classification",
      "type": "multiple_select",
      "question": "Which of the following differential equations are FIRST-ORDER LINEAR? (Select all that apply)",
      "options": [
        {
          "id": "W3-T1-Q10-opt0",
          "text": "$\\frac{dy}{dx} + 3x y = x^2$"
        },
        {
          "id": "W3-T1-Q10-opt1",
          "text": "$x \\frac{dy}{dx} - y = \\sin(x)$"
        },
        {
          "id": "W3-T1-Q10-opt2",
          "text": "$\\frac{dy}{dx} + y^2 = x$"
        },
        {
          "id": "W3-T1-Q10-opt3",
          "text": "$y' + 5y = 0$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q10-opt0",
        "W3-T1-Q10-opt1",
        "W3-T1-Q10-opt3"
      ],
      "explanation": "Options 1, 2, and 4 fit form $y' + P(x)y = Q(x)$. Option 3 is non-linear due to $y^2$.",
      "hint": "A first-order linear ODE has the form $y' + P(x)y = Q(x)$. It becomes non-linear when $y$ appears to a power other than 1, such as $y^2$ or $y^3$. Which option contains a non-linear term?"
    },
    {
      "id": "W3-T2-Q01",
      "week": 3,
      "tier": "should",
      "topic": "Homogeneous 2nd Order ODE (Real Distinct Roots)",
      "type": "single_select",
      "question": "Solve the 2nd-order ODE $y'' - 5y' + 6y = 0$.",
      "options": [
        {
          "id": "W3-T2-Q01-opt0",
          "text": "$y = C_1 e^{2x} + C_2 e^{3x}$"
        },
        {
          "id": "W3-T2-Q01-opt1",
          "text": "$y = C_1 e^{-2x} + C_2 e^{-3x}$"
        },
        {
          "id": "W3-T2-Q01-opt2",
          "text": "$y = (C_1 + C_2 x) e^{2.5x}$"
        },
        {
          "id": "W3-T2-Q01-opt3",
          "text": "$y = C_1 \\cos(2x) + C_2 \\sin(3x)$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q01-opt0"
      ],
      "explanation": "Characteristic equation $r^2 - 5r + 6 = 0 \\implies (r-2)(r-3) = 0 \\implies r_1 = 2, r_2 = 3$. Solution: $y = C_1 e^{2x} + C_2 e^{3x}$.",
      "hint": "The characteristic equation is $r^2 - 5r + 6 = 0$. Factorise it and find two distinct real roots $r_1, r_2$. The general solution is $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$."
    },
    {
      "id": "W3-T2-Q02",
      "week": 3,
      "tier": "should",
      "topic": "Homogeneous 2nd Order ODE (Repeated Roots)",
      "type": "single_select",
      "question": "Solve $y'' - 4y' + 4y = 0$.",
      "options": [
        {
          "id": "W3-T2-Q02-opt0",
          "text": "$y = (C_1 + C_2 x) e^{2x}$"
        },
        {
          "id": "W3-T2-Q02-opt1",
          "text": "$y = C_1 e^{2x} + C_2 e^{-2x}$"
        },
        {
          "id": "W3-T2-Q02-opt2",
          "text": "$y = C_1 e^{2x} + C_2 e^{2x}$"
        },
        {
          "id": "W3-T2-Q02-opt3",
          "text": "$y = C_1 \\cos(2x) + C_2 \\sin(2x)$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q02-opt0"
      ],
      "explanation": "Characteristic equation $r^2 - 4r + 4 = 0 \\implies (r-2)^2 = 0 \\implies r = 2$ (double root). General solution: $y = (C_1 + C_2 x) e^{2x}$.",
      "hint": "Characteristic equation $r^2 - 4r + 4 = (r-2)^2 = 0$ gives a repeated root $r = 2$. For a double root, the general solution uses both $e^{rx}$ and $xe^{rx}$."
    },
    {
      "id": "W3-T2-Q03",
      "week": 3,
      "tier": "should",
      "topic": "Homogeneous 2nd Order ODE (Complex Roots)",
      "type": "single_select",
      "question": "Solve $y'' + 4y' + 13y = 0$.",
      "options": [
        {
          "id": "W3-T2-Q03-opt0",
          "text": "$y = e^{-2x} (C_1 \\cos(3x) + C_2 \\sin(3x))$"
        },
        {
          "id": "W3-T2-Q03-opt1",
          "text": "$y = e^{2x} (C_1 \\cos(3x) + C_2 \\sin(3x))$"
        },
        {
          "id": "W3-T2-Q03-opt2",
          "text": "$y = C_1 e^{-2x} + C_2 e^{-3x}$"
        },
        {
          "id": "W3-T2-Q03-opt3",
          "text": "$y = e^{-3x} (C_1 \\cos(2x) + C_2 \\sin(2x))$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q03-opt0"
      ],
      "explanation": "Characteristic $r^2 + 4r + 13 = 0 \\implies r = \\frac{-4 \\pm \\sqrt{16-52}}{2} = -2 \\pm 3i$. Solution: $y = e^{-2x}(C_1\\cos 3x + C_2\\sin 3x)$.",
      "hint": "Characteristic equation $r^2 + 4r + 13 = 0$. Use the quadratic formula — the discriminant is negative (complex roots). Write roots as $\\alpha \\pm \\beta i$; the solution uses $e^{\\alpha x}(C_1\\cos(\\beta x) + C_2\\sin(\\beta x))$."
    },
    {
      "id": "W3-T2-Q04",
      "week": 3,
      "tier": "should",
      "topic": "Undetermined Coefficients Method",
      "type": "single_select",
      "question": "Find a particular solution $y_p$ to $y'' + y = 3e^{2x}$.",
      "options": [
        {
          "id": "W3-T2-Q04-opt0",
          "text": "$y_p = \\frac{3}{5}e^{2x}$"
        },
        {
          "id": "W3-T2-Q04-opt1",
          "text": "$y_p = 3e^{2x}$"
        },
        {
          "id": "W3-T2-Q04-opt2",
          "text": "$y_p = \\frac{3}{4}e^{2x}$"
        },
        {
          "id": "W3-T2-Q04-opt3",
          "text": "$y_p = e^{2x}$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q04-opt0"
      ],
      "explanation": "Try $y_p = A e^{2x} \\implies y_p'' = 4A e^{2x}$. Substitute: $4A e^{2x} + A e^{2x} = 3e^{2x} \\implies 5A = 3 \\implies A = \\frac{3}{5}$.",
      "hint": "Since $e^{2x}$ does not appear in the null space of the homogeneous solution, try $y_p = Ae^{2x}$. Substitute into the ODE and match coefficients."
    },
    {
      "id": "W3-T2-Q05",
      "week": 3,
      "tier": "should",
      "topic": "Laplace Transform of Derivatives",
      "type": "single_select",
      "question": "What is the Laplace transform formula for the second derivative $\\mathcal{L}\\{y''(t)\\}$ in terms of $Y(s) = \\mathcal{L}\\{y(t)\\}$?",
      "options": [
        {
          "id": "W3-T2-Q05-opt0",
          "text": "$s^2 Y(s) - s y(0) - y'(0)$"
        },
        {
          "id": "W3-T2-Q05-opt1",
          "text": "$s^2 Y(s) - y(0) - s y'(0)$"
        },
        {
          "id": "W3-T2-Q05-opt2",
          "text": "$s^2 Y(s) - s^2 y(0) - s y'(0)$"
        },
        {
          "id": "W3-T2-Q05-opt3",
          "text": "$s^2 Y(s) + s y(0) + y'(0)$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q05-opt0"
      ],
      "explanation": "Applying integration by parts twice yields $\\mathcal{L}\\{y''\\} = s^2 Y(s) - s y(0) - y'(0)$.",
      "hint": "Integrate $\\mathcal{L}\\{y'\\} = sY - y(0)$ by parts once more. For $y''$: apply the formula for $y'$ to $y'$ itself, giving $s(sY - y(0)) - y'(0)$."
    },
    {
      "id": "W3-T2-Q06",
      "week": 3,
      "tier": "should",
      "topic": "First Shifting Theorem (Frequency Shift)",
      "type": "single_select",
      "question": "By the First Shifting Theorem $\\mathcal{L}\\{e^{at}f(t)\\} = F(s-a)$, what is $\\mathcal{L}\\{e^{2t}\\cos(3t)\\}$?",
      "options": [
        {
          "id": "W3-T2-Q06-opt0",
          "text": "$\\frac{s - 2}{(s - 2)^2 + 9}$"
        },
        {
          "id": "W3-T2-Q06-opt1",
          "text": "$\\frac{s + 2}{(s + 2)^2 + 9}$"
        },
        {
          "id": "W3-T2-Q06-opt2",
          "text": "$\\frac{3}{(s - 2)^2 + 9}$"
        },
        {
          "id": "W3-T2-Q06-opt3",
          "text": "$\\frac{s}{(s - 2)^2 + 9}$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q06-opt0"
      ],
      "explanation": "Since $\\mathcal{L}\\{\\cos(3t)\\} = \\frac{s}{s^2+9}$, shifting $s \\to s-2$ yields $\\frac{s-2}{(s-2)^2 + 9}$.",
      "hint": "Since $\\mathcal{L}\\{\\cos(3t)\\} = \\frac{s}{s^2+9}$, the First Shifting Theorem says replace $s$ with $s - a$ where $a$ is the exponent of $e^{at}$. Here $a = 2$."
    },
    {
      "id": "W3-T2-Q07",
      "week": 3,
      "tier": "should",
      "topic": "Solving IVP via Laplace Transforms",
      "type": "single_select",
      "question": "Solve the 2nd-order IVP $y'' + 4y = 0$ with $y(0) = 2$ and $y'(0) = 0$ using Laplace transforms.",
      "options": [
        {
          "id": "W3-T2-Q07-opt0",
          "text": "$y(t) = 2\\cos(2t)$"
        },
        {
          "id": "W3-T2-Q07-opt1",
          "text": "$y(t) = 2\\sin(2t)$"
        },
        {
          "id": "W3-T2-Q07-opt2",
          "text": "$y(t) = 2e^{2t}$"
        },
        {
          "id": "W3-T2-Q07-opt3",
          "text": "$y(t) = \\cos(4t)$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q07-opt0"
      ],
      "explanation": "$s^2 Y - 2s + 4Y = 0 \\implies (s^2+4)Y = 2s \\implies Y(s) = \\frac{2s}{s^2+4} \\implies y(t) = 2\\cos(2t)$.",
      "hint": "Take Laplace of each term. $\\mathcal{L}\\{y''\\} = s^2 Y - sy(0) - y'(0)$, $\\mathcal{L}\\{4y\\} = 4Y$. Apply initial conditions and solve for $Y(s)$, then invert."
    },
    {
      "id": "W3-T2-Q08",
      "week": 3,
      "tier": "should",
      "topic": "Second-Order Particular Trial Forms",
      "type": "multiple_select",
      "question": "For non-homogeneous ODE $a y'' + b y' + c y = f(x)$, select ALL correct Particular Trial Forms $y_p(x)$:",
      "options": [
        {
          "id": "W3-T2-Q08-opt0",
          "text": "If $f(x) = 4x^2$, try $y_p = A x^2 + B x + C$"
        },
        {
          "id": "W3-T2-Q08-opt1",
          "text": "If $f(x) = 5\\sin(2x)$, try $y_p = A \\cos(2x) + B \\sin(2x)$"
        },
        {
          "id": "W3-T2-Q08-opt2",
          "text": "If $f(x) = e^{3x}$, try $y_p = A e^{3x}$"
        },
        {
          "id": "W3-T2-Q08-opt3",
          "text": "If $f(x) = 5\\sin(2x)$, try $y_p = A \\sin(2x)$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q08-opt0",
        "W3-T2-Q08-opt1",
        "W3-T2-Q08-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are standard trial forms. Option 4 is incomplete (sine forcing requires both sine and cosine terms).",
      "hint": "For $f(x) = \\sin(2x)$ forcing, you need both sine AND cosine terms in the particular solution — not just sine alone. This is the method of undetermined coefficients."
    },
    {
      "id": "W3-T2-Q09",
      "week": 3,
      "tier": "should",
      "topic": "Damped Harmonic Oscillator Regimes",
      "type": "single_select",
      "question": "In the spring-mass ODE $m x'' + c x' + k x = 0$, what condition defines the OVERDAMPED regime?",
      "options": [
        {
          "id": "W3-T2-Q09-opt0",
          "text": "$c^2 - 4mk > 0$"
        },
        {
          "id": "W3-T2-Q09-opt1",
          "text": "$c^2 - 4mk = 0$"
        },
        {
          "id": "W3-T2-Q09-opt2",
          "text": "$c^2 - 4mk < 0$"
        },
        {
          "id": "W3-T2-Q09-opt3",
          "text": "$c = 0$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q09-opt0"
      ],
      "explanation": "The characteristic discriminant $c^2 - 4mk > 0$ gives two distinct real negative roots, corresponding to an overdamped non-oscillatory decay.",
      "hint": "The discriminant is $c^2 - 4mk$. Compare: overdamped (two real roots) requires the discriminant to be positive, zero (critically damped), or negative (underdamped/oscillatory)."
    },
    {
      "id": "W3-T2-Q10",
      "week": 3,
      "tier": "should",
      "topic": "Inverse Laplace via Partial Fractions",
      "type": "single_select",
      "question": "Evaluate $\\mathcal{L}^{-1}\\left\\{\\frac{1}{(s-1)(s-2)}\\right\\}$.",
      "options": [
        {
          "id": "W3-T2-Q10-opt0",
          "text": "$e^{2t} - e^t$"
        },
        {
          "id": "W3-T2-Q10-opt1",
          "text": "$e^t - e^{2t}$"
        },
        {
          "id": "W3-T2-Q10-opt2",
          "text": "$e^{t} + e^{2t}$"
        },
        {
          "id": "W3-T2-Q10-opt3",
          "text": "$t e^t$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q10-opt0"
      ],
      "explanation": "Decompose $\\frac{1}{(s-1)(s-2)} = \\frac{-1}{s-1} + \\frac{1}{s-2}$. Inverting gives $-e^t + e^{2t} = e^{2t} - e^t$.",
      "hint": "Decompose $\\frac{1}{(s-1)(s-2)}$ using partial fractions: $\\frac{A}{s-1} + \\frac{B}{s-2}$. Find $A$ and $B$ by cover-up or equating numerators. Then look up each term in the Laplace table."
    },
    {
      "id": "W3-T3-Q01",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Wronskian Determinant",
      "type": "single_select",
      "question": "What is the Wronskian $W(y_1, y_2)$ of solutions $y_1 = e^x$ and $y_2 = e^{-x}$?",
      "options": [
        {
          "id": "W3-T3-Q01-opt0",
          "text": "$-2$"
        },
        {
          "id": "W3-T3-Q01-opt1",
          "text": "$0$"
        },
        {
          "id": "W3-T3-Q01-opt2",
          "text": "$2$"
        },
        {
          "id": "W3-T3-Q01-opt3",
          "text": "$2e^{2x}$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q01-opt0"
      ],
      "explanation": "$W(y_1, y_2) = y_1 y_2' - y_1' y_2 = (e^x)(-e^{-x}) - (e^x)(e^{-x}) = -1 - 1 = -2 \\neq 0$ (linearly independent).",
      "hint": "The Wronskian $W(y_1, y_2) = y_1 y_2' - y_2 y_1'$. Compute the derivatives of $e^x$ and $e^{-x}$, substitute, and evaluate."
    },
    {
      "id": "W3-T3-Q02",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Variation of Parameters Formula",
      "type": "single_select",
      "question": "In Variation of Parameters for $y'' + P(x)y' + Q(x)y = f(x)$, the formula for coefficient $u_1'(x)$ is:",
      "options": [
        {
          "id": "W3-T3-Q02-opt0",
          "text": "$u_1'(x) = -\\frac{y_2(x) f(x)}{W(y_1, y_2)}$"
        },
        {
          "id": "W3-T3-Q02-opt1",
          "text": "$u_1'(x) = \\frac{y_1(x) f(x)}{W(y_1, y_2)}$"
        },
        {
          "id": "W3-T3-Q02-opt2",
          "text": "$u_1'(x) = -\\frac{y_1(x) f(x)}{W(y_1, y_2)}$"
        },
        {
          "id": "W3-T3-Q02-opt3",
          "text": "$u_1'(x) = \\frac{W(y_1, y_2)}{f(x)}$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q02-opt0"
      ],
      "explanation": "By Cramer's rule on the variation system: $u_1'(x) = -\\frac{y_2 f}{W}$ and $u_2'(x) = \\frac{y_1 f}{W}$.",
      "hint": "In variation of parameters, the system of equations for $u_1'$ and $u_2'$ is solved using Cramer's rule with the Wronskian in the denominator. Which term involves $y_2$?"
    },
    {
      "id": "W3-T3-Q03",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Heaviside Step Function Shift (t-shift)",
      "type": "single_select",
      "question": "By the Second Shifting Theorem $\\mathcal{L}\\{f(t-a) u(t-a)\\} = e^{-as} F(s)$, find $\\mathcal{L}\\{(t-3)^2 u(t-3)\\}$.",
      "options": [
        {
          "id": "W3-T3-Q03-opt0",
          "text": "$\\frac{2 e^{-3s}}{s^3}$"
        },
        {
          "id": "W3-T3-Q03-opt1",
          "text": "$\\frac{e^{-3s}}{s^3}$"
        },
        {
          "id": "W3-T3-Q03-opt2",
          "text": "$\\frac{2 e^{3s}}{s^3}$"
        },
        {
          "id": "W3-T3-Q03-opt3",
          "text": "$\\frac{6 e^{-3s}}{s^4}$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q03-opt0"
      ],
      "explanation": "Here $f(t) = t^2 \\implies F(s) = \\frac{2}{s^3}$. Shifting by $a=3$ gives $e^{-3s} F(s) = \\frac{2 e^{-3s}}{s^3}$.",
      "hint": "Use $\\mathcal{L}\\{t^2\\} = \\frac{2}{s^3}$. Then apply the Second Shifting Theorem with $a = 3$: multiply by $e^{-3s}$ to shift in time."
    },
    {
      "id": "W3-T3-Q04",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Convolution Theorem",
      "type": "single_select",
      "question": "The Laplace transform of the convolution integral $(f * g)(t) = \\int_0^t f(\\tau) g(t-\\tau) d\\tau$ equals:",
      "options": [
        {
          "id": "W3-T3-Q04-opt0",
          "text": "$F(s) \\cdot G(s)$"
        },
        {
          "id": "W3-T3-Q04-opt1",
          "text": "$F(s) + G(s)$"
        },
        {
          "id": "W3-T3-Q04-opt2",
          "text": "$\\frac{F(s)}{G(s)}$"
        },
        {
          "id": "W3-T3-Q04-opt3",
          "text": "$\\int_0^s F(u) G(s-u) du$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q04-opt0"
      ],
      "explanation": "The Convolution Theorem states that convolution in time corresponds to algebraic multiplication in frequency domain: $\\mathcal{L}\\{f * g\\} = F(s) G(s)$.",
      "hint": "The Convolution Theorem says convolution in time $\\leftrightarrow$ multiplication in $s$-domain. So $\\mathcal{L}\\{f * g\\} = F(s) \\cdot G(s)$."
    },
    {
      "id": "W3-T3-Q05",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Dirac Delta Function Transform",
      "type": "single_select",
      "question": "What is the Laplace transform of the unit impulse function $\\delta(t - t_0)$ for $t_0 \\ge 0$?",
      "options": [
        {
          "id": "W3-T3-Q05-opt0",
          "text": "$e^{-s t_0}$"
        },
        {
          "id": "W3-T3-Q05-opt1",
          "text": "$\\frac{1}{s} e^{-s t_0}$"
        },
        {
          "id": "W3-T3-Q05-opt2",
          "text": "$1$"
        },
        {
          "id": "W3-T3-Q05-opt3",
          "text": "$s e^{-s t_0}$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q05-opt0"
      ],
      "explanation": "By the sifting property of Dirac Delta: $\\mathcal{L}\\{\\delta(t - t_0)\\} = \\int_0^\\infty e^{-st} \\delta(t - t_0) dt = e^{-s t_0}$.",
      "hint": "By the sifting property, $\\int_0^\\infty e^{-st} \\delta(t - t_0) dt = e^{-st_0}$. The delta function picks out the integrand's value at $t = t_0$."
    },
    {
      "id": "W3-T3-Q06",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Laplace Transform of $t f(t)$",
      "type": "single_select",
      "question": "If $\\mathcal{L}\\{f(t)\\} = F(s)$, what is $\\mathcal{L}\\{t f(t)\\}$?",
      "options": [
        {
          "id": "W3-T3-Q06-opt0",
          "text": "$-F'(s)$"
        },
        {
          "id": "W3-T3-Q06-opt1",
          "text": "$F'(s)$"
        },
        {
          "id": "W3-T3-Q06-opt2",
          "text": "$\\frac{F(s)}{s}$"
        },
        {
          "id": "W3-T3-Q06-opt3",
          "text": "$-s F(s)$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q06-opt0"
      ],
      "explanation": "Differentiating $F(s) = \\int_0^\\infty e^{-st} f(t) dt$ w.r.t $s$ yields $F'(s) = -\\int_0^\\infty t e^{-st} f(t) dt \\implies \\mathcal{L}\\{t f(t)\\} = -F'(s)$.",
      "hint": "Differentiate $F(s) = \\int_0^\\infty e^{-st} f(t)dt$ with respect to $s$ (bring the derivative inside the integral). What factor appears from differentiating $e^{-st}$ with respect to $s$?"
    },
    {
      "id": "W3-T3-Q07",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "System of 1st Order ODEs",
      "type": "single_select",
      "question": "The linear system $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ -2 & -3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$ has eigenvalues $\\lambda_1, \\lambda_2$ equal to:",
      "options": [
        {
          "id": "W3-T3-Q07-opt0",
          "text": "$\\lambda_1 = -1, \\lambda_2 = -2$"
        },
        {
          "id": "W3-T3-Q07-opt1",
          "text": "$\\lambda_1 = 1, \\lambda_2 = 2$"
        },
        {
          "id": "W3-T3-Q07-opt2",
          "text": "$\\lambda_1 = 0, \\lambda_2 = -3$"
        },
        {
          "id": "W3-T3-Q07-opt3",
          "text": "$\\lambda_1 = -1 \\pm i$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q07-opt0"
      ],
      "explanation": "Characteristic equation $\\det(A - \\lambda I) = \\lambda(\\lambda + 3) + 2 = \\lambda^2 + 3\\lambda + 2 = 0 \\implies (\\lambda + 1)(\\lambda + 2) = 0 \\implies \\lambda_1 = -1, \\lambda_2 = -2$.",
      "hint": "The characteristic equation is $\\det(A - \\lambda I) = 0$. Expand the $2\\times 2$ determinant $\\begin{vmatrix} -\\lambda & 1 \\\\ -2 & -3-\\lambda \\end{vmatrix} = 0$ and factor the resulting quadratic."
    },
    {
      "id": "W3-T3-Q08",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Resonance Phenomenon",
      "type": "single_select",
      "question": "Resonance occurs in undamped oscillator $x'' + \\omega_0^2 x = F_0 \\cos(\\omega t)$ when forcing frequency $\\omega$ equals natural frequency $\\omega_0$. What is the form of particular solution $x_p(t)$?",
      "options": [
        {
          "id": "W3-T3-Q08-opt0",
          "text": "$x_p(t) = A t \\sin(\\omega_0 t)$"
        },
        {
          "id": "W3-T3-Q08-opt1",
          "text": "$x_p(t) = A \\cos(\\omega_0 t)$"
        },
        {
          "id": "W3-T3-Q08-opt2",
          "text": "$x_p(t) = A e^{\\omega_0 t}$"
        },
        {
          "id": "W3-T3-Q08-opt3",
          "text": "$x_p(t) = A t^2 \\cos(\\omega_0 t)$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q08-opt0"
      ],
      "explanation": "When forcing term is in the null space of homogeneous solution, multiply trial form by $t \\implies x_p(t) = A t \\sin(\\omega_0 t)$ (unbounded growth).",
      "hint": "When forcing frequency equals natural frequency, the normal trial solution $A\\cos(\\omega_0 t)$ is already a homogeneous solution. The modification rule says multiply by $t$."
    },
    {
      "id": "W3-T3-Q09",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Inverse Laplace Shifting Rules",
      "type": "multiple_select",
      "question": "Which of the following inverse Laplace properties are CORRECT? (Select all that apply)",
      "options": [
        {
          "id": "W3-T3-Q09-opt0",
          "text": "$\\mathcal{L}^{-1}\\{F(s-a)\\} = e^{at} f(t)$"
        },
        {
          "id": "W3-T3-Q09-opt1",
          "text": "$\\mathcal{L}^{-1}\\{e^{-as} F(s)\\} = f(t-a) u(t-a)$"
        },
        {
          "id": "W3-T3-Q09-opt2",
          "text": "$\\mathcal{L}^{-1}\\{s F(s)\\} = f'(t)$ if $f(0)=0$"
        },
        {
          "id": "W3-T3-Q09-opt3",
          "text": "$\\mathcal{L}^{-1}\\{F(s) G(s)\\} = f(t) + g(t)$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q09-opt0",
        "W3-T3-Q09-opt1",
        "W3-T3-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are fundamental operational properties. Option 4 is false (product in $s$-domain corresponds to convolution in $t$-domain).",
      "hint": "Option 4: a product in the $s$-domain corresponds to convolution (not addition) in the time domain. $\\mathcal{L}^{-1}\\{F(s)G(s)\\} = (f*g)(t)$."
    },
    {
      "id": "W3-T3-Q10",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Abel's Identity for Wronskian",
      "type": "single_select",
      "question": "Abel's Identity states that the Wronskian $W(x)$ of two solutions to $y'' + P(x)y' + Q(x)y = 0$ satisfies:",
      "options": [
        {
          "id": "W3-T3-Q10-opt0",
          "text": "$W(x) = W(x_0) e^{-\\int_{x_0}^{x} P(t) \\, dt}$"
        },
        {
          "id": "W3-T3-Q10-opt1",
          "text": "$W(x) = W(x_0) e^{\\int_{x_0}^{x} Q(t) \\, dt}$"
        },
        {
          "id": "W3-T3-Q10-opt2",
          "text": "$W(x) = W(x_0) (x - x_0)$"
        },
        {
          "id": "W3-T3-Q10-opt3",
          "text": "$W(x) = 0$ for all $x$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q10-opt0"
      ],
      "explanation": "Abel's formula $W'(x) = -P(x)W(x) \\implies W(x) = W(x_0) e^{-\\int_{x_0}^x P(t) dt}$, proving $W(x)$ is either never zero or identically zero.",
      "hint": "Abel's identity states $W' = -P(x)W$, which is a separable ODE for $W$. Solve it to get the exponential formula."
    },
    {
      "id": "W3-T4-Q01",
      "week": 3,
      "tier": "extra",
      "topic": "Cauchy-Euler Equation",
      "type": "single_select",
      "question": "Solve the Cauchy-Euler equation $x^2 y'' - 2x y' + 2y = 0$ for $x > 0$.",
      "options": [
        {
          "id": "W3-T4-Q01-opt0",
          "text": "$y = C_1 x + C_2 x^2$"
        },
        {
          "id": "W3-T4-Q01-opt1",
          "text": "$y = C_1 e^x + C_2 e^{2x}$"
        },
        {
          "id": "W3-T4-Q01-opt2",
          "text": "$y = C_1 x^{-1} + C_2 x^{-2}$"
        },
        {
          "id": "W3-T4-Q01-opt3",
          "text": "$y = (C_1 + C_2 \\ln x) x$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q01-opt0"
      ],
      "explanation": "Substituting $y = x^m \\implies m(m-1) - 2m + 2 = m^2 - 3m + 2 = 0 \\implies (m-1)(m-2) = 0 \\implies m_1 = 1, m_2 = 2$. Solution: $y = C_1 x + C_2 x^2$.",
      "hint": "For a Cauchy-Euler equation, try $y = x^m$. This gives $m(m-1) + m \\cdot (-2) + 2 = 0$. Find the two values of $m$."
    },
    {
      "id": "W3-T4-Q02",
      "week": 3,
      "tier": "extra",
      "topic": "Laplace Transform of Periodic Functions",
      "type": "single_select",
      "question": "If $f(t)$ is periodic with period $T > 0$ such that $f(t+T) = f(t)$, what is its Laplace transform $\\mathcal{L}\\{f(t)\\}$?",
      "options": [
        {
          "id": "W3-T4-Q02-opt0",
          "text": "$\\frac{1}{1 - e^{-sT}} \\int_{0}^{T} e^{-st} f(t) \\, dt$"
        },
        {
          "id": "W3-T4-Q02-opt1",
          "text": "$\\frac{1}{1 + e^{-sT}} \\int_{0}^{T} e^{-st} f(t) \\, dt$"
        },
        {
          "id": "W3-T4-Q02-opt2",
          "text": "$\\int_{0}^{T} e^{-st} f(t) \\, dt$"
        },
        {
          "id": "W3-T4-Q02-opt3",
          "text": "$\\frac{e^{-sT}}{s} \\int_{0}^{T} f(t) \\, dt$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q02-opt0"
      ],
      "explanation": "Summing geometric series of shifted integrals over periods $[nT, (n+1)T]$ yields $\\frac{1}{1 - e^{-sT}} \\int_0^T e^{-st} f(t) dt$.",
      "hint": "Write the Laplace integral as a sum over $[0,T], [T,2T], [2T,3T], \\ldots$. On each interval $[nT,(n+1)T]$, substitute $t = \\tau + nT$. Sum the resulting geometric series in $e^{-snT}$."
    },
    {
      "id": "W3-T4-Q03",
      "week": 3,
      "tier": "extra",
      "topic": "Transfer Function & BIBO Stability",
      "type": "single_select",
      "question": "A linear time-invariant system has transfer function $H(s) = \\frac{1}{s^2 + 3s + 2}$. Under what condition is the system Bounded-Input Bounded-Output (BIBO) stable?",
      "options": [
        {
          "id": "W3-T4-Q03-opt0",
          "text": "All poles have strictly negative real parts (poles at $s = -1, -2$)"
        },
        {
          "id": "W3-T4-Q03-opt1",
          "text": "The system has a pole at origin $s = 0$"
        },
        {
          "id": "W3-T4-Q03-opt2",
          "text": "The transfer function has no zeros"
        },
        {
          "id": "W3-T4-Q03-opt3",
          "text": "Poles lie on imaginary axis"
        }
      ],
      "correct_indices": [
        "W3-T4-Q03-opt0"
      ],
      "explanation": "Poles are roots of denominator $s^2 + 3s + 2 = (s+1)(s+2) = 0 \\implies s = -1, -2$. Since both poles lie strictly in Left-Half Plane $\\text{Re}(s) < 0$, system is BIBO stable.",
      "hint": "The poles of $H(s) = \\frac{1}{s^2+3s+2}$ are where the denominator is zero. Factor $s^2+3s+2$ and check whether the real parts of the poles are negative."
    },
    {
      "id": "W3-T4-Q04",
      "week": 3,
      "tier": "extra",
      "topic": "Matrix Exponential State Space",
      "type": "single_select",
      "question": "For state-space system $\\mathbf{x}'(t) = \\mathbf{A} \\mathbf{x}(t)$, the matrix exponential state-transition matrix $e^{\\mathbf{A}t}$ can be computed via Laplace transforms as:",
      "options": [
        {
          "id": "W3-T4-Q04-opt0",
          "text": "$e^{\\mathbf{A}t} = \\mathcal{L}^{-1}\\left\\{(s\\mathbf{I} - \\mathbf{A})^{-1}\\right\\}$"
        },
        {
          "id": "W3-T4-Q04-opt1",
          "text": "$e^{\\mathbf{A}t} = (s\\mathbf{I} - \\mathbf{A})^{-1}$"
        },
        {
          "id": "W3-T4-Q04-opt2",
          "text": "$e^{\\mathbf{A}t} = \\mathcal{L}\\{e^{\\mathbf{A}}\\mid_{\\mathbf{I}}\\}$"
        },
        {
          "id": "W3-T4-Q04-opt3",
          "text": "$e^{\\mathbf{A}t} = \\det(s\\mathbf{I} - \\mathbf{A}) \\mathbf{I}$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q04-opt0"
      ],
      "explanation": "Taking Laplace transform: $s \\mathbf{X}(s) - \\mathbf{x}(0) = \\mathbf{A} \\mathbf{X}(s) \\implies (s\\mathbf{I} - \\mathbf{A})\\mathbf{X}(s) = \\mathbf{x}(0) \\implies \\mathbf{x}(t) = \\mathcal{L}^{-1}\\{(s\\mathbf{I}-\\mathbf{A})^{-1}\\} \\mathbf{x}(0)$.",
      "hint": "Taking Laplace of $\\mathbf{x}' = \\mathbf{A}\\mathbf{x}$ gives $s\\mathbf{X} - \\mathbf{x}_0 = \\mathbf{A}\\mathbf{X}$. Rearrange to $(s\\mathbf{I}-\\mathbf{A})\\mathbf{X} = \\mathbf{x}_0$ and solve for $\\mathbf{X}$."
    },
    {
      "id": "W3-T4-Q05",
      "week": 3,
      "tier": "extra",
      "topic": "Picard-Lindelöf Existence Theorem",
      "type": "single_select",
      "question": "The Picard-Lindelöf Theorem guarantees a UNIQUE solution to IVP $y' = f(x,y), y(x_0)=y_0$ in an interval around $x_0$ if $f(x,y)$ satisfies which property?",
      "options": [
        {
          "id": "W3-T4-Q05-opt0",
          "text": "Continuous in $x$ and Lipschitz continuous in $y$"
        },
        {
          "id": "W3-T4-Q05-opt1",
          "text": "Differentiable infinitely many times"
        },
        {
          "id": "W3-T4-Q05-opt2",
          "text": "$f(x,y)$ is bounded by 1"
        },
        {
          "id": "W3-T4-Q05-opt3",
          "text": "$f(x,y)$ is symmetric"
        }
      ],
      "correct_indices": [
        "W3-T4-Q05-opt0"
      ],
      "explanation": "Continuity of $f$ guarantees existence (Peano theorem); Lipschitz continuity with respect to $y$ ($|f(x,y_1)-f(x,y_2)| \\le K|y_1-y_2|$) guarantees uniqueness.",
      "hint": "Picard-Lindelöf requires two conditions: existence (continuity) and uniqueness (Lipschitz in $y$). The Lipschitz condition bounds how fast $f$ can vary with $y$."
    },
    {
      "id": "W3-T4-Q06",
      "week": 3,
      "tier": "extra",
      "topic": "Bessel's Differential Equation",
      "type": "single_select",
      "question": "Bessel's differential equation of order $n$ is $x^2 y'' + x y' + (x^2 - n^2) y = 0$. What is the nature of $x = 0$?",
      "options": [
        {
          "id": "W3-T4-Q06-opt0",
          "text": "Regular singular point"
        },
        {
          "id": "W3-T4-Q06-opt1",
          "text": "Ordinary point"
        },
        {
          "id": "W3-T4-Q06-opt2",
          "text": "Irregular singular point"
        },
        {
          "id": "W3-T4-Q06-opt3",
          "text": "Essential singularity"
        }
      ],
      "correct_indices": [
        "W3-T4-Q06-opt0"
      ],
      "explanation": "$P(x) = \\frac{1}{x} \\implies x P(x) = 1$ (analytic at 0) and $Q(x) = \\frac{x^2 - n^2}{x^2} \\implies x^2 Q(x) = x^2 - n^2$ (analytic at 0). Thus $x=0$ is a regular singular point.",
      "hint": "Divide all terms by $x^2$: $y'' + \\frac{1}{x}y' + \\frac{x^2-n^2}{x^2}y = 0$. Check whether $xP(x)$ and $x^2Q(x)$ are both analytic (finite power series) at $x=0$."
    },
    {
      "id": "W3-T4-Q07",
      "week": 3,
      "tier": "extra",
      "topic": "Laplace Integral Derivative Rule",
      "type": "single_select",
      "question": "What is the Laplace transform of the integral of a function $\\mathcal{L}\\left\\{\\int_0^t f(\\tau) d\\tau\\right\\}$?",
      "options": [
        {
          "id": "W3-T4-Q07-opt0",
          "text": "$\\frac{F(s)}{s}$"
        },
        {
          "id": "W3-T4-Q07-opt1",
          "text": "$s F(s)$"
        },
        {
          "id": "W3-T4-Q07-opt2",
          "text": "$F'(s)$"
        },
        {
          "id": "W3-T4-Q07-opt3",
          "text": "$\\frac{F(s)}{s^2}$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q07-opt0"
      ],
      "explanation": "By applying the Convolution Theorem with $g(t) = 1$ (whose transform is $1/s$), $\\mathcal{L}\\{f * 1\\} = F(s) \\cdot \\frac{1}{s} = \\frac{F(s)}{s}$.",
      "hint": "Let $g(t) = 1$. Then $f * g = \\int_0^t f(\\tau) \\cdot 1 \\, d\\tau$. By the Convolution Theorem, $\\mathcal{L}\\{f * g\\} = F(s) \\cdot \\mathcal{L}\\{1\\} = F(s)/s$."
    },
    {
      "id": "W3-T4-Q08",
      "week": 3,
      "tier": "extra",
      "topic": "Initial Value Theorem (Laplace)",
      "type": "single_select",
      "question": "The Initial Value Theorem for Laplace transforms calculates initial time behavior $\\lim_{t \\to 0^+} f(t)$ directly from frequency domain $F(s)$ using:",
      "options": [
        {
          "id": "W3-T4-Q08-opt0",
          "text": "$\\lim_{t \\to 0^+} f(t) = \\lim_{s \\to \\infty} s F(s)$"
        },
        {
          "id": "W3-T4-Q08-opt1",
          "text": "$\\lim_{t \\to 0^+} f(t) = \\lim_{s \\to 0} s F(s)$"
        },
        {
          "id": "W3-T4-Q08-opt2",
          "text": "$\\lim_{t \\to 0^+} f(t) = \\lim_{s \\to \\infty} F(s)$"
        },
        {
          "id": "W3-T4-Q08-opt3",
          "text": "$\\lim_{t \\to 0^+} f(t) = \\lim_{s \\to 0} F'(s)$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q08-opt0"
      ],
      "explanation": "Initial Value Theorem: $\\lim_{t \\to 0^+} f(t) = \\lim_{s \\to \\infty} s F(s)$ (assuming the limit exists).",
      "hint": "The Initial Value Theorem takes $s \\to \\infty$ (not $s \\to 0$). Compare with the Final Value Theorem which takes $s \\to 0$."
    },
    {
      "id": "W3-T4-Q09",
      "week": 3,
      "tier": "extra",
      "topic": "Final Value Theorem (Laplace)",
      "type": "single_select",
      "question": "The Final Value Theorem calculates steady-state behavior $\\lim_{t \\to \\infty} f(t)$ from $F(s)$ via $\\lim_{s \\to 0} s F(s)$. Under what condition is this theorem VALID?",
      "options": [
        {
          "id": "W3-T4-Q09-opt0",
          "text": "All poles of $s F(s)$ lie strictly in the left-half plane $\\text{Re}(s) < 0$"
        },
        {
          "id": "W3-T4-Q09-opt1",
          "text": "The system has a pole at $s = +2$"
        },
        {
          "id": "W3-T4-Q09-opt2",
          "text": "$F(s)$ is a polynomial in $s$"
        },
        {
          "id": "W3-T4-Q09-opt3",
          "text": "All zeros lie on imaginary axis"
        }
      ],
      "correct_indices": [
        "W3-T4-Q09-opt0"
      ],
      "explanation": "The Final Value Theorem is valid if and only if $f(t)$ approaches a finite limit as $t \\to \\infty$, which requires all poles of $s F(s)$ to be in the LHP $\\text{Re}(s) < 0$.",
      "hint": "The Final Value Theorem applies only when all poles of $sF(s)$ lie strictly in the Left-Half Plane. If any pole has $\\text{Re}(s) \\geq 0$, the theorem fails."
    },
    {
      "id": "W3-T4-Q10",
      "week": 3,
      "tier": "extra",
      "topic": "Legendre Differential Equation",
      "type": "multiple_select",
      "question": "Legendre's differential equation is $(1-x^2)y'' - 2xy' + n(n+1)y = 0$. Select ALL true statements:",
      "options": [
        {
          "id": "W3-T4-Q10-opt0",
          "text": "Singular points occur at $x = \\pm 1$"
        },
        {
          "id": "W3-T4-Q10-opt1",
          "text": "For non-negative integers $n$, polynomial solutions are Legendre polynomials $P_n(x)$"
        },
        {
          "id": "W3-T4-Q10-opt2",
          "text": "$P_0(x) = 1$ and $P_1(x) = x$"
        },
        {
          "id": "W3-T4-Q10-opt3",
          "text": "The general solution is bounded everywhere on $[-1, 1]$ for non-integer $n$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q10-opt0",
        "W3-T4-Q10-opt1",
        "W3-T4-Q10-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are fundamental properties. Option 4 is false (for non-integer $n$, solutions diverge logarithmically at $x = \\pm 1$).",
      "hint": "Option 4: for non-integer $n$, one of the two linearly independent solutions involves a second kind (which includes $\\ln$ terms) and diverges at $x = \\pm 1$."
    }
  ]
};
