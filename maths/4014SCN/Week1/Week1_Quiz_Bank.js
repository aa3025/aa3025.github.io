window.QUIZ_BANK_WEEK1 = {
  "module": "4014SCN Calculus and Applications",
  "week": 1,
  "title": "Week 1 Quiz Bank: Differentiation Core, Applications & Integration Bridge",
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
      "topic": "Power Rule",
      "type": "single_select",
      "question": "What is the derivative of $f(x) = 4x^5 - 3x^3 + 7x - 12$ with respect to $x$?",
      "options": [
        {
          "id": "W1-T1-Q01-opt0",
          "text": "$20x^4 - 9x^2 + 7$"
        },
        {
          "id": "W1-T1-Q01-opt1",
          "text": "$20x^4 - 9x^2 + 7x$"
        },
        {
          "id": "W1-T1-Q01-opt2",
          "text": "$4x^4 - 3x^2 + 7$"
        },
        {
          "id": "W1-T1-Q01-opt3",
          "text": "$20x^5 - 9x^3 + 7$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q01-opt0"
      ],
      "explanation": "Applying the power rule term-by-term: $\\frac{d}{dx}(4x^5) = 20x^4$, $\\frac{d}{dx}(-3x^3) = -9x^2$, $\\frac{d}{dx}(7x) = 7$, and constant $-12$ differentiates to $0$. Result: $20x^4 - 9x^2 + 7$.",
      "hint": "Apply the power rule $\\frac{d}{dx}(ax^n) = nax^{n-1}$ to each term individually. What does the constant $-12$ differentiate to?"
    },
    {
      "id": "W1-T1-Q02",
      "week": 1,
      "tier": "core",
      "topic": "Product Rule",
      "type": "single_select",
      "question": "Differentiate $y = x^3 \\sin(x)$ with respect to $x$.",
      "options": [
        {
          "id": "W1-T1-Q02-opt0",
          "text": "$3x^2 \\sin(x) + x^3 \\cos(x)$"
        },
        {
          "id": "W1-T1-Q02-opt1",
          "text": "$3x^2 \\cos(x)$"
        },
        {
          "id": "W1-T1-Q02-opt2",
          "text": "$3x^2 \\sin(x) - x^3 \\cos(x)$"
        },
        {
          "id": "W1-T1-Q02-opt3",
          "text": "$x^3 \\sin(x) + 3x^2 \\cos(x)$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q02-opt0"
      ],
      "explanation": "By the product rule $\\frac{d}{dx}(uv) = u'v + uv'$: with $u=x^3$ ($u'=3x^2$) and $v=\\sin(x)$ ($v'=\\cos(x)$), we get $\\frac{dy}{dx} = 3x^2 \\sin(x) + x^3 \\cos(x)$.",
      "hint": "Two functions are multiplied together — which differentiation rule applies? Identify $u$ and $v$, then compute $u'$ and $v'$ separately before combining."
    },
    {
      "id": "W1-T1-Q03",
      "week": 1,
      "tier": "core",
      "topic": "Quotient Rule",
      "type": "single_select",
      "question": "Evaluate the derivative of $f(x) = \\frac{e^x}{x^2 + 1}$.",
      "options": [
        {
          "id": "W1-T1-Q03-opt0",
          "text": "$\\frac{e^x(x^2 - 2x + 1)}{(x^2 + 1)^2}$"
        },
        {
          "id": "W1-T1-Q03-opt1",
          "text": "$\\frac{e^x(x^2 + 2x + 1)}{(x^2 + 1)^2}$"
        },
        {
          "id": "W1-T1-Q03-opt2",
          "text": "$\\frac{e^x}{2x}$"
        },
        {
          "id": "W1-T1-Q03-opt3",
          "text": "$\\frac{e^x(x^2 - 2x - 1)}{(x^2 + 1)^2}$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q03-opt0"
      ],
      "explanation": "Using the quotient rule $\\frac{u'v - uv'}{v^2}$ with $u=e^x, v=x^2+1$: $f'(x) = \\frac{e^x(x^2+1) - e^x(2x)}{(x^2+1)^2} = \\frac{e^x(x^2-2x+1)}{(x^2+1)^2}$.",
      "hint": "This is a fraction of two functions. Recall the quotient rule $\\frac{u'v - uv'}{v^2}$. Identify $u = e^x$ and $v = x^2 + 1$, then compute each derivative."
    },
    {
      "id": "W1-T1-Q04",
      "week": 1,
      "tier": "core",
      "topic": "Chain Rule",
      "type": "single_select",
      "question": "Find $\\frac{dy}{dx}$ if $y = (3x^2 - 5x + 2)^4$.",
      "options": [
        {
          "id": "W1-T1-Q04-opt0",
          "text": "$4(3x^2 - 5x + 2)^3 (6x - 5)$"
        },
        {
          "id": "W1-T1-Q04-opt1",
          "text": "$4(3x^2 - 5x + 2)^3$"
        },
        {
          "id": "W1-T1-Q04-opt2",
          "text": "$12x(3x^2 - 5x + 2)^3$"
        },
        {
          "id": "W1-T1-Q04-opt3",
          "text": "$4(6x - 5)^3$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q04-opt0"
      ],
      "explanation": "By the chain rule $\\frac{dy}{dx} = 4(3x^2 - 5x + 2)^3 \\cdot \\frac{d}{dx}(3x^2 - 5x + 2) = 4(3x^2 - 5x + 2)^3(6x - 5)$.",
      "hint": "You have a composition of functions (a function raised to a power). Apply the chain rule: differentiate the outer power, keep the inner expression, then multiply by the derivative of the inner expression."
    },
    {
      "id": "W1-T1-Q05",
      "week": 1,
      "tier": "core",
      "topic": "Implicit Differentiation",
      "type": "single_select",
      "question": "Find $\\frac{dy}{dx}$ for the circle equation $x^2 + y^2 = 25$.",
      "options": [
        {
          "id": "W1-T1-Q05-opt0",
          "text": "$-\\frac{x}{y}$"
        },
        {
          "id": "W1-T1-Q05-opt1",
          "text": "$\\frac{x}{y}$"
        },
        {
          "id": "W1-T1-Q05-opt2",
          "text": "$-\\frac{y}{x}$"
        },
        {
          "id": "W1-T1-Q05-opt3",
          "text": "$-\\frac{2x}{y}$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q05-opt0"
      ],
      "explanation": "Differentiating implicitly with respect to $x$: $2x + 2y \\frac{dy}{dx} = 0 \\implies 2y \\frac{dy}{dx} = -2x \\implies \\frac{dy}{dx} = -\\frac{x}{y}$.",
      "hint": "Differentiate every term with respect to $x$, treating $y$ as a function of $x$. Don't forget to apply the chain rule to $y^2$, giving a $\\frac{dy}{dx}$ term. Then solve for $\\frac{dy}{dx}$."
    },
    {
      "id": "W1-T1-Q06",
      "week": 1,
      "tier": "core",
      "topic": "Logarithmic Differentiation",
      "type": "single_select",
      "question": "Use logarithmic differentiation to find the derivative of $y = x^x$ (for $x > 0$).",
      "options": [
        {
          "id": "W1-T1-Q06-opt0",
          "text": "$x^x (1 + \\ln(x))$"
        },
        {
          "id": "W1-T1-Q06-opt1",
          "text": "$x \\cdot x^{x-1}$"
        },
        {
          "id": "W1-T1-Q06-opt2",
          "text": "$x^x \\ln(x)$"
        },
        {
          "id": "W1-T1-Q06-opt3",
          "text": "$1 + \\ln(x)$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q06-opt0"
      ],
      "explanation": "Take natural logs: $\\ln(y) = x \\ln(x)$. Differentiate implicitly: $\\frac{1}{y}\\frac{dy}{dx} = 1\\cdot\\ln(x) + x\\cdot\\frac{1}{x} = \\ln(x) + 1$. Thus $\\frac{dy}{dx} = y(1 + \\ln(x)) = x^x(1 + \\ln(x))$.",
      "hint": "Take $\\ln$ of both sides: $\\ln(y) = x \\ln(x)$. Then differentiate both sides with respect to $x$ (using the chain rule on the left and product rule on the right), and multiply through by $y$."
    },
    {
      "id": "W1-T1-Q07",
      "week": 1,
      "tier": "core",
      "topic": "Tangent Line Equation",
      "type": "single_select",
      "question": "What is the equation of the tangent line to $y = x^2 - 4x + 5$ at $x = 3$?",
      "options": [
        {
          "id": "W1-T1-Q07-opt0",
          "text": "$y = 2x - 4$"
        },
        {
          "id": "W1-T1-Q07-opt1",
          "text": "$y = 2x + 2$"
        },
        {
          "id": "W1-T1-Q07-opt2",
          "text": "$y = 2x - 3$"
        },
        {
          "id": "W1-T1-Q07-opt3",
          "text": "$y = x - 1$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q07-opt0"
      ],
      "explanation": "At $x=3$, $y = 3^2 - 4(3) + 5 = 2$. Derivative $y' = 2x - 4$, so slope $m = y'(3) = 2(3)-4 = 2$. Tangent line: $y - 2 = 2(x - 3) \\implies y = 2x - 4$.",
      "hint": "First evaluate the function at $x=3$ to find the $y$-coordinate. Then compute $y'$ to find the slope $m$ at $x=3$. Finally, apply the point-slope form $y - y_0 = m(x - x_0)$."
    },
    {
      "id": "W1-T1-Q08",
      "week": 1,
      "tier": "core",
      "topic": "Parametric Differentiation",
      "type": "single_select",
      "question": "If $x(t) = t^2$ and $y(t) = t^3 - 3t$, find $\\frac{dy}{dx}$ in terms of $t$.",
      "options": [
        {
          "id": "W1-T1-Q08-opt0",
          "text": "$\\frac{3(t^2 - 1)}{2t}$"
        },
        {
          "id": "W1-T1-Q08-opt1",
          "text": "$\\frac{2t}{3t^2 - 3}$"
        },
        {
          "id": "W1-T1-Q08-opt2",
          "text": "$\\frac{3t^2 - 3}{2}$"
        },
        {
          "id": "W1-T1-Q08-opt3",
          "text": "$\\frac{3t^2}{2t}$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q08-opt0"
      ],
      "explanation": "Using parametric differentiation $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$: $\\frac{dx}{dt} = 2t$ and $\\frac{dy}{dt} = 3t^2 - 3$. Therefore $\\frac{dy}{dx} = \\frac{3t^2 - 3}{2t} = \\frac{3(t^2 - 1)}{2t}$.",
      "hint": "Recall $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$. Compute $dx/dt$ and $dy/dt$ separately, then form the ratio and simplify."
    },
    {
      "id": "W1-T1-Q09",
      "week": 1,
      "tier": "core",
      "topic": "Core Differentiation Rules",
      "type": "multiple_select",
      "question": "Select ALL valid differentiation rules below (where $u,v$ are differentiable functions of $x$):",
      "options": [
        {
          "id": "W1-T1-Q09-opt0",
          "text": "$\\frac{d}{dx}[u(x) v(x)] = u'(x)v(x) + u(x)v'(x)$"
        },
        {
          "id": "W1-T1-Q09-opt1",
          "text": "$\\frac{d}{dx}\\left[\\frac{u(x)}{v(x)}\\right] = \\frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2}$"
        },
        {
          "id": "W1-T1-Q09-opt2",
          "text": "$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$"
        },
        {
          "id": "W1-T1-Q09-opt3",
          "text": "$\\frac{d}{dx}[u(x) + v(x)] = u'(x)v'(x)$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q09-opt0",
        "W1-T1-Q09-opt1",
        "W1-T1-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are the standard Product, Quotient, and Chain rules. Option 4 is incorrect because the sum rule is $\\frac{d}{dx}(u+v) = u' + v'$, not $u'v'$.",
      "hint": "Three of the options correctly state the Product, Quotient, and Chain rules. One option incorrectly claims the sum rule is $u'v'$ — what is the correct statement of the sum rule?"
    },
    {
      "id": "W1-T1-Q10",
      "week": 1,
      "tier": "core",
      "topic": "Standard Elementary Derivatives",
      "type": "multiple_select",
      "question": "Which of the following derivative statements are CORRECT? (Select all that apply)",
      "options": [
        {
          "id": "W1-T1-Q10-opt0",
          "text": "$\\frac{d}{dx}(\\ln(x)) = \\frac{1}{x}$ for $x > 0$"
        },
        {
          "id": "W1-T1-Q10-opt1",
          "text": "$\\frac{d}{dx}(e^{4x}) = 4e^{4x}$"
        },
        {
          "id": "W1-T1-Q10-opt2",
          "text": "$\\frac{d}{dx}(\\cos(x)) = \\sin(x)$"
        },
        {
          "id": "W1-T1-Q10-opt3",
          "text": "$\\frac{d}{dx}(\\tan(x)) = \\sec^2(x)$"
        }
      ],
      "correct_indices": [
        "W1-T1-Q10-opt0",
        "W1-T1-Q10-opt1",
        "W1-T1-Q10-opt3"
      ],
      "explanation": "Options 1, 2, and 4 are correct standard derivatives. Option 3 is incorrect because $\\frac{d}{dx}(\\cos(x)) = -\\sin(x)$ (negative sign required).",
      "hint": "Check the derivative of $\\cos(x)$ carefully — what is the sign? Three statements are correct standard derivatives. One has the wrong sign for the derivative of cosine."
    },
    {
      "id": "W1-T2-Q01",
      "week": 1,
      "tier": "should",
      "topic": "Inverse Trigonometric Derivatives",
      "type": "single_select",
      "question": "Find the derivative of $f(x) = \\arctan(3x)$.",
      "options": [
        {
          "id": "W1-T2-Q01-opt0",
          "text": "$\\frac{3}{1 + 9x^2}$"
        },
        {
          "id": "W1-T2-Q01-opt1",
          "text": "$\\frac{1}{1 + 9x^2}$"
        },
        {
          "id": "W1-T2-Q01-opt2",
          "text": "$\\frac{3}{\\sqrt{1 - 9x^2}}$"
        },
        {
          "id": "W1-T2-Q01-opt3",
          "text": "$\\frac{3}{1 + 3x^2}$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q01-opt0"
      ],
      "explanation": "Using $\\frac{d}{dx}(\\arctan(u)) = \\frac{u'}{1 + u^2}$ with $u=3x$ ($u'=3$): $f'(x) = \\frac{3}{1 + (3x)^2} = \\frac{3}{1 + 9x^2}$.",
      "hint": "The standard formula for differentiating $\\arctan(u)$ is $\\frac{u'}{1+u^2}$. Here $u = 3x$, so $u' = 3$. Substitute carefully."
    },
    {
      "id": "W1-T2-Q02",
      "week": 1,
      "tier": "should",
      "topic": "Higher-Order Derivatives",
      "type": "single_select",
      "question": "Calculate the second derivative $\\frac{d^2y}{dx^2}$ of $y = x^2 e^{2x}$.",
      "options": [
        {
          "id": "W1-T2-Q02-opt0",
          "text": "$2e^{2x} (2x^2 + 4x + 1)$"
        },
        {
          "id": "W1-T2-Q02-opt1",
          "text": "$4e^{2x} (x^2 + x)$"
        },
        {
          "id": "W1-T2-Q02-opt2",
          "text": "$2e^{2x} (x^2 + 2x + 1)$"
        },
        {
          "id": "W1-T2-Q02-opt3",
          "text": "$e^{2x} (4x^2 + 8x + 2)$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q02-opt0"
      ],
      "explanation": "First derivative $y' = 2x e^{2x} + 2x^2 e^{2x} = 2e^{2x}(x^2 + x)$. Second derivative $y'' = 4e^{2x}(x^2+x) + 2e^{2x}(2x+1) = 2e^{2x}(2x^2 + 4x + 1)$.",
      "hint": "Differentiate $y$ once using the product rule to get $y'$, then differentiate $y'$ again using both product and chain rules to get $y''$. Factor out $2e^{2x}$ at the end."
    },
    {
      "id": "W1-T2-Q03",
      "week": 1,
      "tier": "should",
      "topic": "Linear Approximation",
      "type": "single_select",
      "question": "Use the linear approximation $L(x)$ of $f(x) = \\sqrt{x}$ centered at $a = 4$ to estimate $\\sqrt{4.2}$.",
      "options": [
        {
          "id": "W1-T2-Q03-opt0",
          "text": "$2.05$"
        },
        {
          "id": "W1-T2-Q03-opt1",
          "text": "$2.04$"
        },
        {
          "id": "W1-T2-Q03-opt2",
          "text": "$2.10$"
        },
        {
          "id": "W1-T2-Q03-opt3",
          "text": "$2.025$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q03-opt0"
      ],
      "explanation": "$f(4) = 2$, $f'(x) = \\frac{1}{2\\sqrt{x}} \\implies f'(4) = \\frac{1}{4} = 0.25$. Linearization $L(x) = 2 + 0.25(x - 4)$. For $x = 4.2$: $L(4.2) = 2 + 0.25(0.2) = 2.05$.",
      "hint": "The linearisation formula is $L(x) = f(a) + f'(a)(x-a)$. Compute $f(4)$ and $f'(4)$ for $f(x) = \\sqrt{x}$, then substitute $x = 4.2$."
    },
    {
      "id": "W1-T2-Q04",
      "week": 1,
      "tier": "should",
      "topic": "Related Rates",
      "type": "single_select",
      "question": "A spherical balloon is being inflated such that its volume increases at a constant rate of $100\\pi\\text{ cm}^3/\\text{s}$. How fast is the radius increasing when the radius is $r = 5\\text{ cm}$?",
      "options": [
        {
          "id": "W1-T2-Q04-opt0",
          "text": "$1.0\\text{ cm/s}$"
        },
        {
          "id": "W1-T2-Q04-opt1",
          "text": "$2.0\\text{ cm/s}$"
        },
        {
          "id": "W1-T2-Q04-opt2",
          "text": "$0.5\\text{ cm/s}$"
        },
        {
          "id": "W1-T2-Q04-opt3",
          "text": "$\\pi\\text{ cm/s}$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q04-opt0"
      ],
      "explanation": "Volume $V = \\frac{4}{3}\\pi r^3 \\implies \\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$. Given $\\frac{dV}{dt} = 100\\pi$ and $r=5$: $100\\pi = 4\\pi (25) \\frac{dr}{dt} = 100\\pi \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 1.0\\text{ cm/s}$.",
      "hint": "Volume of a sphere is $V = \\frac{4}{3}\\pi r^3$. Differentiate with respect to $t$ to get $\\frac{dV}{dt}$ in terms of $r$ and $\\frac{dr}{dt}$. You know $\\frac{dV}{dt}$ and $r$ — solve for $\\frac{dr}{dt}$."
    },
    {
      "id": "W1-T2-Q05",
      "week": 1,
      "tier": "should",
      "topic": "Applied Optimization",
      "type": "single_select",
      "question": "A rectangle has a fixed perimeter of $40\\text{ m}$. What dimensions $(x, y)$ maximize its area?",
      "options": [
        {
          "id": "W1-T2-Q05-opt0",
          "text": "$x = 10\\text{ m}, y = 10\\text{ m}$"
        },
        {
          "id": "W1-T2-Q05-opt1",
          "text": "$x = 15\\text{ m}, y = 5\\text{ m}$"
        },
        {
          "id": "W1-T2-Q05-opt2",
          "text": "$x = 12\\text{ m}, y = 8\\text{ m}$"
        },
        {
          "id": "W1-T2-Q05-opt3",
          "text": "$x = 16\\text{ m}, y = 4\\text{ m}$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q05-opt0"
      ],
      "explanation": "Perimeter $2x + 2y = 40 \\implies y = 20 - x$. Area $A(x) = x(20 - x) = 20x - x^2$. Setting $A'(x) = 20 - 2x = 0 \\implies x = 10\\text{ m}$. Since $A''(x) = -2 < 0$, this is a maximum, yielding a square $10\\text{ m} \\times 10\\text{ m}$.",
      "hint": "Express the area $A$ as a function of one variable only, using the perimeter constraint $2x + 2y = 40$ to eliminate $y$. Then set $A'(x) = 0$ and check the second derivative."
    },
    {
      "id": "W1-T2-Q06",
      "week": 1,
      "tier": "should",
      "topic": "Polar Derivatives",
      "type": "single_select",
      "question": "For a polar curve $r = f(\\theta)$, what is the general formula for the Cartesian slope $\\frac{dy}{dx}$?",
      "options": [
        {
          "id": "W1-T2-Q06-opt0",
          "text": "$\\frac{r'(\\theta)\\sin\\theta + r(\\theta)\\cos\\theta}{r'(\\theta)\\cos\\theta - r(\\theta)\\sin\\theta}$"
        },
        {
          "id": "W1-T2-Q06-opt1",
          "text": "$\\frac{r'(\\theta)\\cos\\theta - r(\\theta)\\sin\\theta}{r'(\\theta)\\sin\\theta + r(\\theta)\\cos\\theta}$"
        },
        {
          "id": "W1-T2-Q06-opt2",
          "text": "$\\frac{r'(\\theta)}{\\cos\\theta}$"
        },
        {
          "id": "W1-T2-Q06-opt3",
          "text": "$\\tan(\\theta) + r'(\\theta)$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q06-opt0"
      ],
      "explanation": "Using $x = r(\\theta)\\cos\\theta$ and $y = r(\\theta)\\sin\\theta$: $\\frac{dx}{d\\theta} = r'\\cos\\theta - r\\sin\\theta$ and $\\frac{dy}{d\\theta} = r'\\sin\\theta + r\\cos\\theta$. Thus $\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$.",
      "hint": "Use $x = r\\cos\\theta$, $y = r\\sin\\theta$ and apply $\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta}$. Compute $dx/d\\theta$ and $dy/d\\theta$ using the product rule."
    },
    {
      "id": "W1-T2-Q07",
      "week": 1,
      "tier": "should",
      "topic": "Inverse Trigonometric Rules",
      "type": "multiple_select",
      "question": "Which of the following inverse trigonometric derivatives are CORRECT? (Select all that apply)",
      "options": [
        {
          "id": "W1-T2-Q07-opt0",
          "text": "$\\frac{d}{dx}(\\arcsin(x)) = \\frac{1}{\\sqrt{1 - x^2}}$"
        },
        {
          "id": "W1-T2-Q07-opt1",
          "text": "$\\frac{d}{dx}(\\arccos(x)) = -\\frac{1}{\\sqrt{1 - x^2}}$"
        },
        {
          "id": "W1-T2-Q07-opt2",
          "text": "$\\frac{d}{dx}(\\arctan(x)) = \\frac{1}{1 + x^2}$"
        },
        {
          "id": "W1-T2-Q07-opt3",
          "text": "$\\frac{d}{dx}(\\text{arcsec}(x)) = \\frac{1}{1 - x^2}$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q07-opt0",
        "W1-T2-Q07-opt1",
        "W1-T2-Q07-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are standard correct formulas. Option 4 is incorrect because $\\frac{d}{dx}(\\text{arcsec}(x)) = \\frac{1}{|x|\\sqrt{x^2-1}}$.",
      "hint": "Recall the three standard inverse trig derivatives: $\\arcsin$, $\\arccos$, $\\arctan$. Option 4 involves $\\text{arcsec}$ — its denominator contains $|x|\\sqrt{x^2-1}$, not $1-x^2$."
    },
    {
      "id": "W1-T2-Q08",
      "week": 1,
      "tier": "should",
      "topic": "Related Rates Analysis",
      "type": "multiple_select",
      "question": "A 5-meter ladder leans against a vertical wall. If the base slides away from the wall at $2\\text{ m/s}$ when it is $3\\text{ m}$ from the wall, select all TRUE statements:",
      "options": [
        {
          "id": "W1-T2-Q08-opt0",
          "text": "The height of the top of the ladder on the wall at this instant is $4\\text{ m}$."
        },
        {
          "id": "W1-T2-Q08-opt1",
          "text": "The rate at which the top of the ladder is sliding down the wall is $1.5\\text{ m/s}$."
        },
        {
          "id": "W1-T2-Q08-opt2",
          "text": "The area of the right triangle formed by the ladder changes at $1.75\\text{ m}^2/\\text{s}$."
        },
        {
          "id": "W1-T2-Q08-opt3",
          "text": "The length of the ladder changes at $2\\text{ m/s}$."
        }
      ],
      "correct_indices": [
        "W1-T2-Q08-opt0",
        "W1-T2-Q08-opt1",
        "W1-T2-Q08-opt2"
      ],
      "explanation": "Equation $x^2 + y^2 = 25$. For $x=3$, $y=4$. Differentiating: $2x\\dot{x} + 2y\\dot{y} = 0 \\implies 3(2) + 4\\dot{y} = 0 \\implies \\dot{y} = -1.5\\text{ m/s}$ (sliding down at $1.5\\text{ m/s}$). Area $A = \\frac{1}{2}xy \\implies \\dot{A} = \\frac{1}{2}(\\dot{x}y + x\\dot{y}) = \\frac{1}{2}(2(4) + 3(-1.5)) = 1.75\\text{ m}^2/\\text{s}$. The area is increasing. Ladder length is constant 5m, so its change rate is 0.",
      "hint": "Use $x^2 + y^2 = 25$ and differentiate implicitly with respect to $t$. Substitute the known values of $x$, $y$, and $\\dot{x}$ to find $\\dot{y}$. Then compute the area's rate of change. Is the ladder length fixed?"
    },
    {
      "id": "W1-T2-Q09",
      "week": 1,
      "tier": "should",
      "topic": "Linearization & Differentials",
      "type": "single_select",
      "question": "For $f(x) = x^3 - 3x + 1$, what is the differential $df$ when $x = 2$ and $dx = 0.01$?",
      "options": [
        {
          "id": "W1-T2-Q09-opt0",
          "text": "$0.09$"
        },
        {
          "id": "W1-T2-Q09-opt1",
          "text": "$0.12$"
        },
        {
          "id": "W1-T2-Q09-opt2",
          "text": "$0.06$"
        },
        {
          "id": "W1-T2-Q09-opt3",
          "text": "$0.03$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q09-opt0"
      ],
      "explanation": "$df = f'(x) dx = (3x^2 - 3) dx$. Evaluated at $x=2$ and $dx=0.01$: $df = (3(4) - 3)(0.01) = 9(0.01) = 0.09$.",
      "hint": "The differential is $df = f'(x)\\,dx$. First compute $f'(x) = 3x^2 - 3$, evaluate at $x=2$, then multiply by $dx = 0.01$."
    },
    {
      "id": "W1-T2-Q10",
      "week": 1,
      "tier": "should",
      "topic": "Parametric Slopes & Normal Lines",
      "type": "single_select",
      "question": "Find the slope of the normal line to the curve $x = 2\\cos(t), y = 2\\sin(t)$ at $t = \\pi/4$.",
      "options": [
        {
          "id": "W1-T2-Q10-opt0",
          "text": "$1$"
        },
        {
          "id": "W1-T2-Q10-opt1",
          "text": "$-1$"
        },
        {
          "id": "W1-T2-Q10-opt2",
          "text": "$\\sqrt{2}$"
        },
        {
          "id": "W1-T2-Q10-opt3",
          "text": "$0$"
        }
      ],
      "correct_indices": [
        "W1-T2-Q10-opt0"
      ],
      "explanation": "$\\frac{dx}{dt} = -2\\sin(t)$, $\\frac{dy}{dt} = 2\\cos(t)$. Tangent slope $m_{\\text{tan}} = \\frac{2\\cos(t)}{-2\\sin(t)} = -\\cot(t)$. At $t=\\pi/4$, $m_{\\text{tan}} = -1$. Normal slope $m_{\\text{norm}} = -\\frac{1}{m_{\\text{tan}}} = 1$.",
      "hint": "Find the tangent slope $m_{\\text{tan}}$ using parametric differentiation, then recall that the normal slope is the negative reciprocal: $m_{\\text{norm}} = -1/m_{\\text{tan}}$."
    },
    {
      "id": "W1-T3-Q01",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Hyperbolic Functions",
      "type": "single_select",
      "question": "What is the derivative of $f(x) = \\cosh(4x)$?",
      "options": [
        {
          "id": "W1-T3-Q01-opt0",
          "text": "$4\\sinh(4x)$"
        },
        {
          "id": "W1-T3-Q01-opt1",
          "text": "$-4\\sinh(4x)$"
        },
        {
          "id": "W1-T3-Q01-opt2",
          "text": "$4\\cosh(4x)$"
        },
        {
          "id": "W1-T3-Q01-opt3",
          "text": "$\\frac{1}{4}\\sinh(4x)$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q01-opt0"
      ],
      "explanation": "Unlike standard trig functions where $\\frac{d}{dx}(\\cos x) = -\\sin x$, for hyperbolic functions $\\frac{d}{dx}(\\cosh x) = +\\sinh x$. Using the chain rule: $f'(x) = 4\\sinh(4x)$.",
      "hint": "For hyperbolic functions, $\\frac{d}{dx}(\\cosh u) = \\sinh u$ (unlike standard trig, there is NO minus sign). Apply the chain rule for the factor of 4 inside."
    },
    {
      "id": "W1-T3-Q02",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Hyperbolic Identities & Derivatives",
      "type": "single_select",
      "question": "Which identity correctly relates $\\frac{d}{dx}(\\tanh(x))$ to hyperbolic functions?",
      "options": [
        {
          "id": "W1-T3-Q02-opt0",
          "text": "$\\frac{d}{dx}(\\tanh(x)) = \\text{sech}^2(x) = 1 - \\tanh^2(x)$"
        },
        {
          "id": "W1-T3-Q02-opt1",
          "text": "$\\frac{d}{dx}(\\tanh(x)) = -\\text{sech}^2(x)$"
        },
        {
          "id": "W1-T3-Q02-opt2",
          "text": "$\\frac{d}{dx}(\\tanh(x)) = \\coth^2(x)$"
        },
        {
          "id": "W1-T3-Q02-opt3",
          "text": "$\\frac{d}{dx}(\\tanh(x)) = 1 + \\tanh^2(x)$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q02-opt0"
      ],
      "explanation": "$\\frac{d}{dx}(\\tanh x) = \\text{sech}^2(x)$. Using the fundamental hyperbolic identity $\\cosh^2 x - \\sinh^2 x = 1 \\implies 1 - \\tanh^2 x = \\text{sech}^2 x$.",
      "hint": "Recall the fundamental hyperbolic identity $\\cosh^2(x) - \\sinh^2(x) = 1$. Dividing by $\\cosh^2(x)$ gives a useful identity linking $\\tanh$ and $\\text{sech}$."
    },
    {
      "id": "W1-T3-Q03",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Parametric Horizontal & Vertical Tangents",
      "type": "single_select",
      "question": "For the parametric curve $x = t^3 - 3t, y = t^2 - 1$, at what value(s) of $t$ does the curve have a vertical tangent line?",
      "options": [
        {
          "id": "W1-T3-Q03-opt0",
          "text": "$t = \\pm 1$"
        },
        {
          "id": "W1-T3-Q03-opt1",
          "text": "$t = 0$"
        },
        {
          "id": "W1-T3-Q03-opt2",
          "text": "$t = \\pm \\sqrt{3}$"
        },
        {
          "id": "W1-T3-Q03-opt3",
          "text": "$t = 2$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q03-opt0"
      ],
      "explanation": "A vertical tangent occurs when $\\frac{dx}{dt} = 0$ (and $\\frac{dy}{dt} \\neq 0$). $\\frac{dx}{dt} = 3t^2 - 3 = 0 \\implies t^2 = 1 \\implies t = \\pm 1$. (At $t=\\pm 1$, $\\frac{dy}{dt} = 2t = \\pm 2 \\neq 0$).",
      "hint": "A vertical tangent occurs where $dx/dt = 0$ (and $dy/dt \\neq 0$). Compute $dx/dt = 3t^2 - 3$ and solve for $t$."
    },
    {
      "id": "W1-T3-Q04",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Norman Window Optimization",
      "type": "single_select",
      "question": "A Norman window consists of a rectangle surmounted by a semicircle. If the total perimeter is fixed at $P$, what ratio of height $h$ to base width $x$ of the rectangular portion maximizes light admittance?",
      "options": [
        {
          "id": "W1-T3-Q04-opt0",
          "text": "$h = x/2$"
        },
        {
          "id": "W1-T3-Q04-opt1",
          "text": "$h = x$"
        },
        {
          "id": "W1-T3-Q04-opt2",
          "text": "$h = 2x$"
        },
        {
          "id": "W1-T3-Q04-opt3",
          "text": "$h = x/4$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q04-opt0"
      ],
      "explanation": "Setting up Area $A = x h + \\frac{\\pi}{8} x^2$ subject to Perimeter $P = x + 2h + \\frac{\\pi}{2}x$. Substituting $h = \\frac{P - x(1 + \\pi/2)}{2}$ into $A$ and differentiating $A'(x) = 0$ yields optimal width $x = \\frac{2P}{4+\\pi}$ and height $h = \\frac{P}{4+\\pi} = \\frac{x}{2}$.",
      "hint": "Set up Area $A$ in terms of $x$ and $h$, and use the perimeter constraint to write $h$ in terms of $x$ and $P$. Then maximise $A(x)$ by differentiating and setting $A' = 0$."
    },
    {
      "id": "W1-T3-Q05",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Searchlight Related Rates",
      "type": "single_select",
      "question": "A rotating beacon $3\\text{ km}$ offshore turns at a rate of $2\\pi\\text{ rad/min}$. How fast is the light beam moving along a straight shoreline at a point $3\\text{ km}$ from the nearest point on shore?",
      "options": [
        {
          "id": "W1-T3-Q05-opt0",
          "text": "$12\\pi\\text{ km/min}$"
        },
        {
          "id": "W1-T3-Q05-opt1",
          "text": "$6\\pi\\text{ km/min}$"
        },
        {
          "id": "W1-T3-Q05-opt2",
          "text": "$4\\pi\\text{ km/min}$"
        },
        {
          "id": "W1-T3-Q05-opt3",
          "text": "$8\\pi\\text{ km/min}$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q05-opt0"
      ],
      "explanation": "Distance along shore $x = 3 \\tan(\\theta)$. Differentiating: $\\frac{dx}{dt} = 3 \\sec^2(\\theta) \\frac{d\\theta}{dt}$. At the point $3\\text{ km}$ down, $\\tan(\\theta) = 3/3 = 1 \\implies \\theta = \\pi/4 \\implies \\sec^2(\\pi/4) = 2$. With $\\frac{d\\theta}{dt} = 2\\pi$: $\\frac{dx}{dt} = 3(2)(2\\pi) = 12\\pi\\text{ km/min}$.",
      "hint": "Let $x$ be the distance along shore. Write $x = 3\\tan(\\theta)$, differentiate with respect to $t$. Compute $\\sec^2(\\theta)$ at the point where $\\tan(\\theta) = 1$."
    },
    {
      "id": "W1-T3-Q06",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Hyperbolic Trigonometric Rules",
      "type": "multiple_select",
      "question": "Which of the following hyperbolic derivative properties are CORRECT? (Select all that apply)",
      "options": [
        {
          "id": "W1-T3-Q06-opt0",
          "text": "$\\frac{d}{dx}(\\sinh(x)) = \\cosh(x)$"
        },
        {
          "id": "W1-T3-Q06-opt1",
          "text": "$\\frac{d}{dx}(\\cosh(x)) = \\sinh(x)$"
        },
        {
          "id": "W1-T3-Q06-opt2",
          "text": "$\\frac{d}{dx}(\\text{sech}(x)) = -\\text{sech}(x)\\tanh(x)$"
        },
        {
          "id": "W1-T3-Q06-opt3",
          "text": "$\\cosh^2(x) + \\sinh^2(x) = 1$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q06-opt0",
        "W1-T3-Q06-opt1",
        "W1-T3-Q06-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are correct derivative formulas. Option 4 is false because the fundamental hyperbolic identity is $\\cosh^2(x) - \\sinh^2(x) = 1$ (minus sign, not plus).",
      "hint": "Option 4 involves the fundamental hyperbolic identity. Is it $\\cosh^2 + \\sinh^2 = 1$ or $\\cosh^2 - \\sinh^2 = 1$? Compare with the trigonometric analogue."
    },
    {
      "id": "W1-T3-Q07",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Polar Tangent Features",
      "type": "single_select",
      "question": "At the origin (pole $r=0$), the tangent lines to a polar curve $r = f(\\theta)$ are given by the solutions to which equation?",
      "options": [
        {
          "id": "W1-T3-Q07-opt0",
          "text": "$f(\\theta) = 0$"
        },
        {
          "id": "W1-T3-Q07-opt1",
          "text": "$f'(\\theta) = 0$"
        },
        {
          "id": "W1-T3-Q07-opt2",
          "text": "$\\tan(\\theta) = 0$"
        },
        {
          "id": "W1-T3-Q07-opt3",
          "text": "$f''(\\theta) = 0$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q07-opt0"
      ],
      "explanation": "When $r = f(\\theta) = 0$, the slope formula reduces to $\\frac{dy}{dx} = \\tan(\\theta)$, which means the tangent line at the pole is simply the line given by the angle $\\theta$ where $f(\\theta) = 0$.",
      "hint": "When $r = 0$, the slope formula $dy/dx$ simplifies considerably. What does $\\tan(\\theta)$ represent geometrically in this case?"
    },
    {
      "id": "W1-T3-Q08",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Extended Optimization Modeling",
      "type": "single_select",
      "question": "An open-topped cylindrical can must hold a volume $V_0$. Which radius $r$ minimizes the total surface area (base + side)?",
      "options": [
        {
          "id": "W1-T3-Q08-opt0",
          "text": "$\\left(\\frac{V_0}{\\pi}\\right)^{1/3}$"
        },
        {
          "id": "W1-T3-Q08-opt1",
          "text": "$\\left(\\frac{2V_0}{\\pi}\\right)^{1/3}$"
        },
        {
          "id": "W1-T3-Q08-opt2",
          "text": "$\\left(\\frac{V_0}{2\\pi}\\right)^{1/3}$"
        },
        {
          "id": "W1-T3-Q08-opt3",
          "text": "$\\frac{V_0}{\\pi}$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q08-opt0"
      ],
      "explanation": "Volume $V_0 = \\pi r^2 h \\implies h = \\frac{V_0}{\\pi r^2}$. Surface area $S(r) = \\pi r^2 + 2\\pi r h = \\pi r^2 + \\frac{2V_0}{r}$. Differentiating: $S'(r) = 2\\pi r - \\frac{2V_0}{r^2} = 0 \\implies 2\\pi r^3 = 2V_0 \\implies r = \\left(\\frac{V_0}{\\pi}\\right)^{1/3}$.",
      "hint": "Write $h$ in terms of $r$ using the volume constraint $V_0 = \\pi r^2 h$. Substitute into $S(r) = \\pi r^2 + 2\\pi r h$ and differentiate. Set $S'(r) = 0$ and solve for $r$."
    },
    {
      "id": "W1-T3-Q09",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Logarithmic Differentiation Properties",
      "type": "multiple_select",
      "question": "Logarithmic differentiation is particularly advantageous for which types of functions? (Select all that apply)",
      "options": [
        {
          "id": "W1-T3-Q09-opt0",
          "text": "Functions of the form $y = [f(x)]^{g(x)}$ where both base and exponent vary with $x$."
        },
        {
          "id": "W1-T3-Q09-opt1",
          "text": "Complicated products and quotients of multiple factors, e.g. $y = \\frac{x^3 \\sqrt{x+1}}{(2x+5)^4}$."
        },
        {
          "id": "W1-T3-Q09-opt2",
          "text": "Simple polynomials like $y = x^4 + 3x^2 + 1$."
        },
        {
          "id": "W1-T3-Q09-opt3",
          "text": "Functions with exponential terms where taking $\\ln$ converts products into sums."
        }
      ],
      "correct_indices": [
        "W1-T3-Q09-opt0",
        "W1-T3-Q09-opt1",
        "W1-T3-Q09-opt3"
      ],
      "explanation": "Logarithmic differentiation simplifies products/quotients into sums/differences via log rules and handles variable bases/exponents $[f(x)]^{g(x)}$. It offers no advantage for simple polynomials.",
      "hint": "Think about when taking $\\ln$ of both sides simplifies the differentiation. Which type of expression benefits most from converting products to sums? What about a simple polynomial — does $\\ln$ help?"
    },
    {
      "id": "W1-T3-Q10",
      "week": 1,
      "tier": "nice_to_know",
      "topic": "Implicit Curve Properties",
      "type": "single_select",
      "question": "For the folium of Descartes $x^3 + y^3 = 3axy$, at what non-zero point on the curve is the tangent line horizontal?",
      "options": [
        {
          "id": "W1-T3-Q10-opt0",
          "text": "$(a 2^{1/3}, a 2^{2/3})$"
        },
        {
          "id": "W1-T3-Q10-opt1",
          "text": "$(a 2^{2/3}, a 2^{1/3})$"
        },
        {
          "id": "W1-T3-Q10-opt2",
          "text": "$(a, a)$"
        },
        {
          "id": "W1-T3-Q10-opt3",
          "text": "$(2a, 2a)$"
        }
      ],
      "correct_indices": [
        "W1-T3-Q10-opt0"
      ],
      "explanation": "Differentiating implicitly: $3x^2 + 3y^2 y' = 3ay + 3ax y' \\implies y' = \\frac{ay - x^2}{y^2 - ax}$. Setting $y' = 0 \\implies ay = x^2 \\implies y = x^2/a$. Substituting into $x^3 + y^3 = 3axy$ gives $x^3 = 2a^3$, so $x = a 2^{1/3}$ and $y = a 2^{2/3}$.",
      "hint": "Differentiate $x^3 + y^3 = 3axy$ implicitly. Then set $y' = 0$ (numerator = 0) to get a relation between $x$ and $y$, substitute back into the original equation."
    },
    {
      "id": "W1-T4-Q01",
      "week": 1,
      "tier": "extra",
      "topic": "Chain Rule Limit Proof",
      "type": "single_select",
      "question": "In Carathéodory's formulation for proving the Chain Rule, a function $f(u)$ is differentiable at $u_0$ if and only if there exists a continuous function $\\phi(u)$ at $u_0$ such that:",
      "options": [
        {
          "id": "W1-T4-Q01-opt0",
          "text": "$f(u) - f(u_0) = \\phi(u)(u - u_0)$ with $\\phi(u_0) = f'(u_0)$"
        },
        {
          "id": "W1-T4-Q01-opt1",
          "text": "$f(u) - f(u_0) = f'(u_0)(u + u_0)$"
        },
        {
          "id": "W1-T4-Q01-opt2",
          "text": "$\\lim_{u\\to u_0} \\phi(u) = 0$"
        },
        {
          "id": "W1-T4-Q01-opt3",
          "text": "$f'(u) = \\phi'(u)(u - u_0)$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q01-opt0"
      ],
      "explanation": "Carathéodory's lemma defines differentiability via $f(u) - f(u_0) = \\phi(u)(u - u_0)$ where $\\phi$ is continuous at $u_0$ and $\\phi(u_0) = f'(u_0)$. This eliminates division-by-zero issues when proving $[f(g(x))]' = f'(g(x))g'(x)$ even if $g(x) = g(x_0)$.",
      "hint": "Carathéodory's approach avoids dividing by zero in the limit proof. Focus on what $\\phi(u)$ represents and what value it takes at $u = u_0$."
    },
    {
      "id": "W1-T4-Q02",
      "week": 1,
      "tier": "extra",
      "topic": "Trigonometric Limit Proofs",
      "type": "single_select",
      "question": "The geometric squeeze theorem proof that $\\lim_{\\theta \\to 0} \\frac{\\sin\\theta}{\\theta} = 1$ relies on which fundamental inequality for $0 < \\theta < \\pi/2$?",
      "options": [
        {
          "id": "W1-T4-Q02-opt0",
          "text": "$\\sin\\theta < \\theta < \\tan\\theta$"
        },
        {
          "id": "W1-T4-Q02-opt1",
          "text": "$\\tan\\theta < \\theta < \\sin\\theta$"
        },
        {
          "id": "W1-T4-Q02-opt2",
          "text": "$\\cos\\theta < \\sin\\theta < \\theta$"
        },
        {
          "id": "W1-T4-Q02-opt3",
          "text": "$\\sin\\theta < \\cos\\theta < \\theta$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q02-opt0"
      ],
      "explanation": "Comparing areas of sector and bounding triangles in a unit circle shows $\\frac{1}{2}\\sin\\theta < \\frac{1}{2}\\theta < \\frac{1}{2}\\tan\\theta \\implies \\sin\\theta < \\theta < \\tan\\theta$. Dividing by $\\sin\\theta$ gives $1 < \\frac{\\theta}{\\sin\\theta} < \\frac{1}{\\cos\\theta}$, squeezing the limit to $1$.",
      "hint": "Draw a unit circle sector of angle $\\theta$ and compare areas of inner triangle, sector, and outer triangle. Use that comparison to set up a double inequality, then divide by $\\sin\\theta$."
    },
    {
      "id": "W1-T4-Q03",
      "week": 1,
      "tier": "extra",
      "topic": "Exponential Limit Definition",
      "type": "single_select",
      "question": "The number $e$ can be defined as the unique base for which $\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$. What is the value of $\\lim_{h \\to 0} \\frac{a^h - 1}{h}$ for any arbitrary base $a > 0$?",
      "options": [
        {
          "id": "W1-T4-Q03-opt0",
          "text": "$\\ln(a)$"
        },
        {
          "id": "W1-T4-Q03-opt1",
          "text": "$\\log_{10}(a)$"
        },
        {
          "id": "W1-T4-Q03-opt2",
          "text": "$a \\ln(a)$"
        },
        {
          "id": "W1-T4-Q03-opt3",
          "text": "$1 / \\ln(a)$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q03-opt0"
      ],
      "explanation": "Using $a^h = e^{h \\ln(a)}$, we have $\\lim_{h\\to 0} \\frac{e^{h \\ln(a)} - 1}{h} = \\lim_{u\\to 0} \\frac{e^u - 1}{u/\\ln(a)} = \\ln(a) \\lim_{u\\to 0} \\frac{e^u - 1}{u} = \\ln(a)$.",
      "hint": "Rewrite $a^h = e^{h\\ln(a)}$. Let $u = h\\ln(a)$ and notice $u \\to 0$ as $h \\to 0$. Then rewrite the limit in terms of $u$ and $\\frac{e^u - 1}{u}$."
    },
    {
      "id": "W1-T4-Q04",
      "week": 1,
      "tier": "extra",
      "topic": "Second Derivative of Implicit Curves",
      "type": "single_select",
      "question": "For the ellipse $x^2 + 4y^2 = 4$, find the second derivative $\\frac{d^2y}{dx^2}$ expressed strictly as a function of $y$.",
      "options": [
        {
          "id": "W1-T4-Q04-opt0",
          "text": "$-\\frac{1}{4y^3}$"
        },
        {
          "id": "W1-T4-Q04-opt1",
          "text": "$-\\frac{1}{y^3}$"
        },
        {
          "id": "W1-T4-Q04-opt2",
          "text": "$-\\frac{x^2}{4y^3}$"
        },
        {
          "id": "W1-T4-Q04-opt3",
          "text": "$\\frac{1}{4y^2}$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q04-opt0"
      ],
      "explanation": "First derivative: $2x + 8y y' = 0 \\implies y' = -\\frac{x}{4y}$. Differentiating again: $y'' = -\\frac{1(4y) - x(4y')}{16y^2} = -\\frac{4y - 4x(-x/4y)}{16y^2} = -\\frac{4y + x^2/y}{16y^2} = -\\frac{x^2 + 4y^2}{16y^3}$. Substituting $x^2 + 4y^2 = 4$ yields $y'' = -\\frac{4}{16y^3} = -\\frac{1}{4y^3}$.",
      "hint": "Find $y'$ by implicit differentiation first. Then differentiate $y'$ again (quotient rule) and substitute $x^2 + 4y^2 = 4$ to simplify the final expression in terms of $y$ only."
    },
    {
      "id": "W1-T4-Q05",
      "week": 1,
      "tier": "extra",
      "topic": "Advanced Curve Sketching & Inflection Points",
      "type": "multiple_select",
      "question": "For the non-analytic smooth function $f(x) = e^{-1/x^2}$ for $x \\neq 0$ and $f(0) = 0$, select ALL true statements:",
      "options": [
        {
          "id": "W1-T4-Q05-opt0",
          "text": "All higher-order derivatives at the origin exist and equal zero: $f^{(n)}(0) = 0$ for all $n \\ge 1$."
        },
        {
          "id": "W1-T4-Q05-opt1",
          "text": "The function is infinitely differentiable ($C^\\infty$) on $\\mathbb{R}$."
        },
        {
          "id": "W1-T4-Q05-opt2",
          "text": "The Maclaurin series of $f(x)$ converges to $f(x)$ for all $x \\neq 0$."
        },
        {
          "id": "W1-T4-Q05-opt3",
          "text": "The function exhibits an inflection point where $f''(x) = 0$ at $x = \\pm \\sqrt{\\frac{2}{3}}$."
        }
      ],
      "correct_indices": [
        "W1-T4-Q05-opt0",
        "W1-T4-Q05-opt1",
        "W1-T4-Q05-opt3"
      ],
      "explanation": "Options 1, 2, and 4 are true. Option 3 is false because the Maclaurin series is identically zero everywhere ($0 + 0x + 0x^2 + \\dots = 0$), so it equals $0$ for all $x$, failing to converge to $f(x) > 0$ for $x \\neq 0$ (a classic counterexample to Taylor analyticity).",
      "hint": "This function is the classic counterexample to Taylor series convergence. All derivatives at $x=0$ are zero. Does the Maclaurin series (identically 0) equal $f(x)$ for $x \\neq 0$?"
    },
    {
      "id": "W1-T4-Q06",
      "week": 1,
      "tier": "extra",
      "topic": "Envelope Curves & Singular Solutions",
      "type": "single_select",
      "question": "The family of lines $y = cx - c^2$ (parameterized by $c$) forms a boundary curve (envelope). What is the equation of this envelope?",
      "options": [
        {
          "id": "W1-T4-Q06-opt0",
          "text": "$y = \\frac{x^2}{4}$"
        },
        {
          "id": "W1-T4-Q06-opt1",
          "text": "$y = x^2$"
        },
        {
          "id": "W1-T4-Q06-opt2",
          "text": "$y = \\frac{x^2}{2}$"
        },
        {
          "id": "W1-T4-Q06-opt3",
          "text": "$y = 4x^2$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q06-opt0"
      ],
      "explanation": "To find the envelope, differentiate $F(x, y, c) = cx - c^2 - y = 0$ with respect to $c$: $\\frac{\\partial F}{\\partial c} = x - 2c = 0 \\implies c = \\frac{x}{2}$. Substituting back: $y = \\left(\\frac{x}{2}\\right)x - \\left(\\frac{x}{2}\\right)^2 = \\frac{x^2}{2} - \\frac{x^2}{4} = \\frac{x^2}{4}$.",
      "hint": "Differentiate the family equation $F(x,y,c) = cx - c^2 - y = 0$ with respect to the parameter $c$, solve for $c$ in terms of $x$, then substitute back."
    },
    {
      "id": "W1-T4-Q07",
      "week": 1,
      "tier": "extra",
      "topic": "General Power Rule Proof",
      "type": "single_select",
      "question": "To prove $\\frac{d}{dx}(x^r) = r x^{r-1}$ for any arbitrary real number $r \\in \\mathbb{R}$ ($x > 0$), which identity combination is used?",
      "options": [
        {
          "id": "W1-T4-Q07-opt0",
          "text": "$x^r = e^{r \\ln(x)}$ combined with the Chain Rule and $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$"
        },
        {
          "id": "W1-T4-Q07-opt1",
          "text": "Binomial expansion for non-integers"
        },
        {
          "id": "W1-T4-Q07-opt2",
          "text": "Integration by parts"
        },
        {
          "id": "W1-T4-Q07-opt3",
          "text": "Implicit differentiation of $y^r = x$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q07-opt0"
      ],
      "explanation": "Writing $x^r = e^{r \\ln(x)}$ allows using the exponential derivative and chain rule: $\\frac{d}{dx}(e^{r \\ln(x)}) = e^{r \\ln(x)} \\cdot \\frac{r}{x} = x^r \\cdot \\frac{r}{x} = r x^{r-1}$, valid for all real $r$.",
      "hint": "The key identity is $x^r = e^{r\\ln(x)}$. Once written this way, use $\\frac{d}{dx}(e^u) = e^u \\cdot u'$ and $\\frac{d}{dx}(\\ln x) = 1/x$."
    },
    {
      "id": "W1-T4-Q08",
      "week": 1,
      "tier": "extra",
      "topic": "Parametric Curvature",
      "type": "single_select",
      "question": "The curvature $\\kappa$ of a plane parametric curve $(x(t), y(t))$ is given by:",
      "options": [
        {
          "id": "W1-T4-Q08-opt0",
          "text": "$\\kappa = \\frac{|\\dot{x}\\ddot{y} - \\dot{y}\\ddot{x}|}{(\\dot{x}^2 + \\dot{y}^2)^{3/2}}$"
        },
        {
          "id": "W1-T4-Q08-opt1",
          "text": "$\\kappa = \\frac{\\ddot{y}}{\\dot{x}^2}$"
        },
        {
          "id": "W1-T4-Q08-opt2",
          "text": "$\\kappa = \\frac{\\dot{x}\\ddot{y} + \\dot{y}\\ddot{x}}{\\dot{x}^2 + \\dot{y}^2}$"
        },
        {
          "id": "W1-T4-Q08-opt3",
          "text": "$\\kappa = \\frac{|\\dot{x}\\dot{y}|}{\\ddot{x}^2 + \\ddot{y}^2}$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q08-opt0"
      ],
      "explanation": "The standard differential geometry formula for the curvature of a 2D parametric curve is $\\kappa(t) = \\frac{|x'(t)y''(t) - y'(t)x''(t)|}{(x'(t)^2 + y'(t)^2)^{3/2}}$.",
      "hint": "The curvature formula involves the cross product of velocity and acceleration vectors. In 2D, this reduces to $|\\dot{x}\\ddot{y} - \\dot{y}\\ddot{x}|$ divided by the speed cubed."
    },
    {
      "id": "W1-T4-Q09",
      "week": 1,
      "tier": "extra",
      "topic": "Subtangent & Subnormal Properties",
      "type": "multiple_select",
      "question": "For a curve $y = f(x)$, select ALL correct definitions of geometric tangent projections:",
      "options": [
        {
          "id": "W1-T4-Q09-opt0",
          "text": "The length of the subtangent is $\\left|\\frac{y}{y'}\\right|$."
        },
        {
          "id": "W1-T4-Q09-opt1",
          "text": "The length of the subnormal is $|y \\cdot y'|$."
        },
        {
          "id": "W1-T4-Q09-opt2",
          "text": "The length of the tangent segment from point to x-axis is $|y| \\sqrt{1 + (y')^{-2}}$."
        },
        {
          "id": "W1-T4-Q09-opt3",
          "text": "The subtangent is always equal to the subnormal for any curve."
        }
      ],
      "correct_indices": [
        "W1-T4-Q09-opt0",
        "W1-T4-Q09-opt1",
        "W1-T4-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are standard differential calculus formulas for subtangent ($|y/y'|$), subnormal ($|y y'|$), and tangent length ($|y| \\sqrt{1 + (1/y')^2}$). Option 4 is false (they are only equal when $|y/y'| = |y y'| \\implies y' = \\pm 1$).",
      "hint": "Recall: subtangent is the horizontal distance from where tangent meets x-axis to the foot of the ordinate. Draw a diagram with the tangent line, point on curve, and x-axis projection."
    },
    {
      "id": "W1-T4-Q10",
      "week": 1,
      "tier": "extra",
      "topic": "High-Order Leibniz Rule",
      "type": "single_select",
      "question": "The General Leibniz Rule for the $n$-th derivative of a product $(uv)^{(n)}$ is:",
      "options": [
        {
          "id": "W1-T4-Q10-opt0",
          "text": "$(uv)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} u^{(n-k)} v^{(k)}$"
        },
        {
          "id": "W1-T4-Q10-opt1",
          "text": "$(uv)^{(n)} = u^{(n)} v^{(n)}$"
        },
        {
          "id": "W1-T4-Q10-opt2",
          "text": "$(uv)^{(n)} = \\sum_{k=0}^{n} u^{(k)} v^{(n-k)}$"
        },
        {
          "id": "W1-T4-Q10-opt3",
          "text": "$(uv)^{(n)} = n! \\, u^{(n)} v^{(n)}$"
        }
      ],
      "correct_indices": [
        "W1-T4-Q10-opt0"
      ],
      "explanation": "The General Leibniz Rule generalizes the product rule to $n$-th derivatives using binomial coefficients: $(uv)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} u^{(n-k)} v^{(k)}$.",
      "hint": "Compare with the binomial theorem $(a+b)^n = \\sum \\binom{n}{k} a^{n-k} b^k$. The Leibniz rule has the same binomial coefficients but applied to derivatives instead of powers."
    }
  ]
};
