window.QUIZ_BANK_WEEK3 = {
  "module": "4004ENG Engineering Mathematics",
  "week": 3,
  "title": "Week 3 Quiz Bank: Calculus I (Differentiation & Applications)",
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
      "topic": "Power Rule Differentiation",
      "type": "single_select",
      "question": "Find the derivative of $y = 6x^4 - 2x^3 + \\frac{5}{x^2} - 10$ with respect to $x$.",
      "options": [
        { "id": "W3-T1-Q01-opt0", "text": "$24x^3 - 6x^2 - \\frac{10}{x^3}$" },
        { "id": "W3-T1-Q01-opt1", "text": "$24x^3 - 6x^2 + \\frac{10}{x^3}$" },
        { "id": "W3-T1-Q01-opt2", "text": "$24x^3 - 6x^2 - \\frac{5}{x^3}$" },
        { "id": "W3-T1-Q01-opt3", "text": "$6x^3 - 2x^2 - \\frac{10}{x}$" }
      ],
      "correct_indices": ["W3-T1-Q01-opt0"],
      "explanation": "Rewrite $y = 6x^4 - 2x^3 + 5x^{-2} - 10$. Differentiating term-by-term using the power rule yields $y' = 6(4x^3) - 2(3x^2) + 5(-2x^{-3}) = 24x^3 - 6x^2 - 10x^{-3} = 24x^3 - 6x^2 - \\frac{10}{x^3}$.",
      "hint": "Write the term $\\frac{5}{x^2}$ as $5x^{-2}$ before applying the power rule."
    },
    {
      "id": "W3-T1-Q02",
      "week": 3,
      "tier": "core",
      "topic": "Exponential and Logarithmic Derivatives",
      "type": "single_select",
      "question": "Find the derivative of $y = 4e^{3x} - 2\\ln(x) + 5\\cos(4x)$ for $x > 0$.",
      "options": [
        { "id": "W3-T1-Q02-opt0", "text": "$12e^{3x} - \\frac{2}{x} - 20\\sin(4x)$" },
        { "id": "W3-T1-Q02-opt1", "text": "$12e^{3x} - \\frac{2}{x} + 20\\sin(4x)$" },
        { "id": "W3-T1-Q02-opt2", "text": "$4e^{3x} - \\frac{2}{x} - 5\\sin(4x)$" },
        { "id": "W3-T1-Q02-opt3", "text": "$12e^{3x} - 2x - 20\\sin(4x)$" }
      ],
      "correct_indices": ["W3-T1-Q02-opt0"],
      "explanation": "Differentiate term-by-term using standard derivatives:\n$\\frac{d}{dx}(4e^{3x}) = 12e^{3x}$, $\\frac{d}{dx}(-2\\ln(x)) = -\\frac{2}{x}$, and $\\frac{d}{dx}(5\\cos(4x)) = -20\\sin(4x)$. Summing gives $12e^{3x} - \\frac{2}{x} - 20\\sin(4x)$.",
      "hint": "Recall that $\\frac{d}{dx} e^{kx} = k e^{kx}$ and $\\frac{d}{dx} \\cos(kx) = -k\\sin(kx)$."
    },
    {
      "id": "W3-T1-Q03",
      "week": 3,
      "tier": "core",
      "topic": "Hyperbolic Derivatives",
      "type": "single_select",
      "question": "Find the derivative of $y = 3\\sinh(2x) - 4\\tanh(x) + e^{-x}$.",
      "options": [
        { "id": "W3-T1-Q03-opt0", "text": "$6\\cosh(2x) - 4\\mathrm{sech}^2(x) - e^{-x}$" },
        { "id": "W3-T1-Q03-opt1", "text": "$6\\cosh(2x) + 4\\mathrm{sech}^2(x) - e^{-x}$" },
        { "id": "W3-T1-Q03-opt2", "text": "$3\\cosh(2x) - 4\\mathrm{sech}^2(x) + e^{-x}$" },
        { "id": "W3-T1-Q03-opt3", "text": "$6\\cosh(2x) - 4\\mathrm{csch}^2(x) - e^{-x}$" }
      ],
      "correct_indices": ["W3-T1-Q03-opt0"],
      "explanation": "Applying standard hyperbolic derivatives and chain rule: $\\frac{d}{dx}(3\\sinh(2x)) = 6\\cosh(2x)$, $\\frac{d}{dx}(-4\\tanh(x)) = -4\\mathrm{sech}^2(x)$, and $\\frac{d}{dx}(e^{-x}) = -e^{-x}$. Result: $6\\cosh(2x) - 4\\mathrm{sech}^2(x) - e^{-x}$.",
      "hint": "Recall that the derivative of $\\sinh(x)$ is $\\cosh(x)$ and the derivative of $\\tanh(x)$ is $\\mathrm{sech}^2(x)$."
    },
    {
      "id": "W3-T1-Q04",
      "week": 3,
      "tier": "core",
      "topic": "Derivative of Sine",
      "type": "single_select",
      "question": "What is the standard derivative of $f(x) = \\sin(x)$ with respect to $x$?",
      "options": [
        { "id": "W3-T1-Q04-opt0", "text": "$\\cos(x)$" },
        { "id": "W3-T1-Q04-opt1", "text": "$-\\cos(x)$" },
        { "id": "W3-T1-Q04-opt2", "text": "$\\sin(x)$" },
        { "id": "W3-T1-Q04-opt3", "text": "$\\sec^2(x)$" }
      ],
      "correct_indices": ["W3-T1-Q04-opt0"],
      "explanation": "By definition and standard derivative limits, $\\frac{d}{dx}(\\sin(x)) = \\cos(x)$.",
      "hint": "The rate of change of sine starts positive at $x=0$, matching cosine."
    },
    {
      "id": "W3-T1-Q05",
      "week": 3,
      "tier": "core",
      "topic": "Linearity Rule",
      "type": "single_select",
      "question": "According to the linearity rule of differentiation, what is the derivative of $a\\cdot u(x) + b\\cdot v(x)$, where $a$ and $b$ are constants?",
      "options": [
        { "id": "W3-T1-Q05-opt0", "text": "$a\\cdot u'(x) + b\\cdot v'(x)$" },
        { "id": "W3-T1-Q05-opt1", "text": "$a\\cdot u'(x) \\cdot b\\cdot v'(x)$" },
        { "id": "W3-T1-Q05-opt2", "text": "$u'(x) + v'(x)$" },
        { "id": "W3-T1-Q05-opt3", "text": "$a\\cdot b \\cdot (u'(x) + v'(x))$" }
      ],
      "correct_indices": ["W3-T1-Q05-opt0"],
      "explanation": "Differentiation is a linear operator, meaning constants can be factored out, and the derivative of a sum is the sum of the derivatives.",
      "hint": "Differentiation preserves constant factors and distributes over addition."
    },
    {
      "id": "W3-T1-Q06",
      "week": 3,
      "tier": "core",
      "topic": "Logarithmic Derivative Form",
      "type": "single_select",
      "question": "What is the derivative of $f(x) = \\ln(x)$ with respect to $x$ for $x > 0$?",
      "options": [
        { "id": "W3-T1-Q06-opt0", "text": "$\\frac{1}{x}$" },
        { "id": "W3-T1-Q06-opt1", "text": "$-\\frac{1}{x^2}$" },
        { "id": "W3-T1-Q06-opt2", "text": "$e^x$" },
        { "id": "W3-T1-Q06-opt3", "text": "$\\frac{1}{x\\ln(x)}$" }
      ],
      "correct_indices": ["W3-T1-Q06-opt0"],
      "explanation": "The standard derivative of the natural logarithm function is $\\frac{d}{dx}(\\ln(x)) = \\frac{1}{x}$.",
      "hint": "This is a fundamental standard derivative formula."
    },
    {
      "id": "W3-T1-Q07",
      "week": 3,
      "tier": "core",
      "topic": "Derivative of tangent",
      "type": "single_select",
      "question": "What is the standard derivative of $f(x) = \\tan(x)$?",
      "options": [
        { "id": "W3-T1-Q07-opt0", "text": "$\\sec^2(x)$" },
        { "id": "W3-T1-Q07-opt1", "text": "$-\\sec^2(x)$" },
        { "id": "W3-T1-Q07-opt2", "text": "$\\sec(x)\\tan(x)$" },
        { "id": "W3-T1-Q07-opt3", "text": "$\\mathrm{sech}^2(x)$" }
      ],
      "correct_indices": ["W3-T1-Q07-opt0"],
      "explanation": "The derivative of the tangent function is $\\sec^2(x)$. This can also be derived by applying the quotient rule to $\\frac{\\sin(x)}{\\cos(x)}$.",
      "hint": "This derivative is always positive because the tangent function is strictly increasing."
    },
    {
      "id": "W3-T1-Q08",
      "week": 3,
      "tier": "core",
      "topic": "Stationary Point Condition",
      "type": "single_select",
      "question": "What is the mathematical condition for a function $y = f(x)$ to have a stationary point at $x = c$?",
      "options": [
        { "id": "W3-T1-Q08-opt0", "text": "$f'(c) = 0$" },
        { "id": "W3-T1-Q08-opt1", "text": "$f''(c) = 0$" },
        { "id": "W3-T1-Q08-opt2", "text": "$f(c) = 0$" },
        { "id": "W3-T1-Q08-opt3", "text": "$f'(c) > 0$" }
      ],
      "correct_indices": ["W3-T1-Q08-opt0"],
      "explanation": "A stationary point occurs where the gradient of the tangent line is horizontal, which mathematically translates to $f'(x) = 0$.",
      "hint": "At a peak, trough, or inflection point, the tangent line is completely flat."
    },
    {
      "id": "W3-T1-Q09",
      "week": 3,
      "tier": "core",
      "topic": "Second Derivative Test",
      "type": "single_select",
      "question": "If $f'(c) = 0$ and $f''(c) < 0$, what does the second derivative test conclude about the point $x=c$?",
      "options": [
        { "id": "W3-T1-Q09-opt0", "text": "It is a local maximum." },
        { "id": "W3-T1-Q09-opt1", "text": "It is a local minimum." },
        { "id": "W3-T1-Q09-opt2", "text": "It is a point of inflection." },
        { "id": "W3-T1-Q09-opt3", "text": "The test is inconclusive." }
      ],
      "correct_indices": ["W3-T1-Q09-opt0"],
      "explanation": "A negative second derivative ($f''(c) < 0$) indicates that the curve is concave down (like a frown), meaning the stationary point is a local maximum.",
      "hint": "Think of a curve curving downwards. The peak of this curve is a maximum."
    },
    {
      "id": "W3-T1-Q10",
      "week": 3,
      "tier": "core",
      "topic": "Kinematics Definition",
      "type": "single_select",
      "question": "If $s(t)$ represents the displacement of a particle at time $t$, how is its velocity $v(t)$ defined?",
      "options": [
        { "id": "W3-T1-Q10-opt0", "text": "$v(t) = \\frac{ds}{dt}$" },
        { "id": "W3-T1-Q10-opt1", "text": "$v(t) = \\frac{d^2s}{dt^2}$" },
        { "id": "W3-T1-Q10-opt2", "text": "$v(t) = \\int s dt$" },
        { "id": "W3-T1-Q10-opt3", "text": "$v(t) = s(t) \\cdot t$" }
      ],
      "correct_indices": ["W3-T1-Q10-opt0"],
      "explanation": "Velocity is the instantaneous rate of change of displacement with respect to time, which corresponds to the first derivative $\\frac{ds}{dt}$.",
      "hint": "Velocity is the change of position over time."
    },
    {
      "id": "W3-T2-Q01",
      "week": 3,
      "tier": "should",
      "topic": "Product Rule",
      "type": "single_select",
      "question": "Find the derivative of $y = x^3 e^{-2x}$ using the product rule.",
      "options": [
        { "id": "W3-T2-Q01-opt0", "text": "$x^2 e^{-2x}(3 - 2x)$" },
        { "id": "W3-T2-Q01-opt1", "text": "$3x^2 e^{-2x}$" },
        { "id": "W3-T2-Q01-opt2", "text": "$x^2 e^{-2x}(3 + 2x)$" },
        { "id": "W3-T2-Q01-opt3", "text": "$-2x^3 e^{-2x}$" }
      ],
      "correct_indices": ["W3-T2-Q01-opt0"],
      "explanation": "Using product rule $(uv)' = u'v + uv'$ where $u = x^3 \\implies u' = 3x^2$ and $v = e^{-2x} \\implies v' = -2e^{-2x}$.\n$y' = 3x^2 e^{-2x} + x^3(-2e^{-2x}) = x^2 e^{-2x}(3 - 2x)$.",
      "hint": "Set up the product rule parts: $u=x^3$ and $v=e^{-2x}$, differentiate both, and assemble."
    },
    {
      "id": "W3-T2-Q02",
      "week": 3,
      "tier": "should",
      "topic": "Product Rule Logarithmic",
      "type": "single_select",
      "question": "Differentiate $y = (3x^2 - 1) \\ln(x)$ with respect to $x$.",
      "options": [
        { "id": "W3-T2-Q02-opt0", "text": "$6x\\ln(x) + 3x - \\frac{1}{x}$" },
        { "id": "W3-T2-Q02-opt1", "text": "$6x\\ln(x) + 3x + \\frac{1}{x}$" },
        { "id": "W3-T2-Q02-opt2", "text": "$6x\\ln(x)$" },
        { "id": "W3-T2-Q02-opt3", "text": "$6x\\ln(x) - 3x + \\frac{1}{x}$" }
      ],
      "correct_indices": ["W3-T2-Q02-opt0"],
      "explanation": "Product rule: $(uv)' = u'v + uv'$ with $u = 3x^2 - 1 \\implies u'=6x$ and $v=\\ln(x) \\implies v'=1/x$.\n$y' = (6x)\\ln(x) + (3x^2-1)(1/x) = 6x\\ln(x) + 3x - \\frac{1}{x}$.",
      "hint": "Differentiate the polynomial part and the logarithmic part separately before applying the formula."
    },
    {
      "id": "W3-T2-Q03",
      "week": 3,
      "tier": "should",
      "topic": "Quotient Rule Exponential",
      "type": "single_select",
      "question": "Use the quotient rule to differentiate $y = \\frac{e^x}{\\cos(2x)}$.",
      "options": [
        { "id": "W3-T2-Q03-opt0", "text": "$\\frac{e^x(\\cos(2x) + 2\\sin(2x))}{\\cos^2(2x)}$" },
        { "id": "W3-T2-Q03-opt1", "text": "$\\frac{e^x(\\cos(2x) - 2\\sin(2x))}{\\cos^2(2x)}$" },
        { "id": "W3-T2-Q03-opt2", "text": "$\\frac{e^x}{\\sin(2x)}$" },
        { "id": "W3-T2-Q03-opt3", "text": "$\\frac{e^x(2\\sin(2x) - \\cos(2x))}{\\cos^2(2x)}$" }
      ],
      "correct_indices": ["W3-T2-Q03-opt0"],
      "explanation": "Quotient rule $\\frac{u'v - uv'}{v^2}$ with $u=e^x \\implies u'=e^x$ and $v=\\cos(2x) \\implies v'=-2\\sin(2x)$.\n$y' = \\frac{e^x\\cos(2x) - e^x(-2\\sin(2x))}{\\cos^2(2x)} = \\frac{e^x(\\cos(2x) + 2\\sin(2x))}{\\cos^2(2x)}$.",
      "hint": "Note that the derivative of the denominator involves a chain rule on the argument $2x$."
    },
    {
      "id": "W3-T2-Q04",
      "week": 3,
      "tier": "should",
      "topic": "Quotient Rule Polynomial",
      "type": "single_select",
      "question": "Differentiate the function $y = \\frac{x^2 - 1}{x^2 + 1}$ with respect to $x$.",
      "options": [
        { "id": "W3-T2-Q04-opt0", "text": "$\\frac{4x}{(x^2 + 1)^2}$" },
        { "id": "W3-T2-Q04-opt1", "text": "$\\frac{4x^3}{(x^2 + 1)^2}$" },
        { "id": "W3-T2-Q04-opt2", "text": "$-\\frac{4x}{(x^2 + 1)^2}$" },
        { "id": "W3-T2-Q04-opt3", "text": "$\\frac{2x(x^2 - 1)}{(x^2 + 1)^2}$" }
      ],
      "correct_indices": ["W3-T2-Q04-opt0"],
      "explanation": "Quotient rule with $u=x^2-1 \\implies u'=2x$ and $v=x^2+1 \\implies v'=2x$.\n$y' = \\frac{2x(x^2+1) - (x^2-1)(2x)}{(x^2+1)^2} = \\frac{2x^3+2x - (2x^3-2x)}{(x^2+1)^2} = \\frac{4x}{(x^2+1)^2}$.",
      "hint": "Apply the quotient rule, then carefully simplify the numerator by expanding the brackets."
    },
    {
      "id": "W3-T2-Q05",
      "week": 3,
      "tier": "should",
      "topic": "Chain Rule Power",
      "type": "single_select",
      "question": "Differentiate $y = (5x^3 - 2x^2 + 4)^{10}$ using the chain rule.",
      "options": [
        { "id": "W3-T2-Q05-opt0", "text": "$10(15x^2 - 4x)(5x^3 - 2x^2 + 4)^9$" },
        { "id": "W3-T2-Q05-opt1", "text": "$10(5x^3 - 2x^2 + 4)^9$" },
        { "id": "W3-T2-Q05-opt2", "text": "$15x^2 - 4x$" },
        { "id": "W3-T2-Q05-opt3", "text": "$30x(5x^3 - 2x^2 + 4)^9$" }
      ],
      "correct_indices": ["W3-T2-Q05-opt0"],
      "explanation": "Let $u = 5x^3 - 2x^2 + 4 \\implies du/dx = 15x^2 - 4x$. Then $y = u^{10} \\implies dy/du = 10u^9$. By chain rule, $dy/dx = (10u^9)\\cdot(15x^2 - 4x) = 10(15x^2 - 4x)(5x^3 - 2x^2 + 4)^9$.",
      "hint": "Differentiate the outer power function first, then multiply by the derivative of the inner polynomial."
    },
    {
      "id": "W3-T2-Q06",
      "week": 3,
      "tier": "should",
      "topic": "Chain Rule Trigonometric",
      "type": "single_select",
      "question": "Differentiate $y = \\sin(x^2 + 3x)$ with respect to $x$.",
      "options": [
        { "id": "W3-T2-Q06-opt0", "text": "$(2x + 3)\\cos(x^2 + 3x)$" },
        { "id": "W3-T2-Q06-opt1", "text": "$\\cos(x^2 + 3x)$" },
        { "id": "W3-T2-Q06-opt2", "text": "$(2x + 3)\\sin(x^2 + 3x)$" },
        { "id": "W3-T2-Q06-opt3", "text": "$-\\cos(x^2 + 3x)$" }
      ],
      "correct_indices": ["W3-T2-Q06-opt0"],
      "explanation": "Let $u = x^2+3x \\implies du/dx = 2x+3$. By the chain rule, $y' = \\cos(u)\\cdot(du/dx) = (2x+3)\\cos(x^2+3x)$.",
      "hint": "The derivative of $\\sin(u)$ is $\\cos(u) \\frac{du}{dx}$."
    },
    {
      "id": "W3-T2-Q07",
      "week": 3,
      "tier": "should",
      "topic": "Chain Rule Exponential",
      "type": "single_select",
      "question": "Differentiate $y = e^{\\tan(2x)}$ using the chain rule.",
      "options": [
        { "id": "W3-T2-Q07-opt0", "text": "$2\\sec^2(2x)e^{\\tan(2x)}$" },
        { "id": "W3-T2-Q07-opt1", "text": "$\\sec^2(2x)e^{\\tan(2x)}$" },
        { "id": "W3-T2-Q07-opt2", "text": "$2e^{\\tan(2x)}$" },
        { "id": "W3-T2-Q07-opt3", "text": "$2\\sec^2(x)e^{\\tan(2x)}$" }
      ],
      "correct_indices": ["W3-T2-Q07-opt0"],
      "explanation": "Let $u = \\tan(2x) \\implies du/dx = 2\\sec^2(2x)$ by the chain rule. Then $y = e^u \\implies y' = e^u\\cdot(du/dx) = 2\\sec^2(2x)e^{\\tan(2x)}$.",
      "hint": "Find the derivative of the exponent $\\tan(2x)$ and multiply it by the original exponential term."
    },
    {
      "id": "W3-T2-Q08",
      "week": 3,
      "tier": "should",
      "topic": "Implicit Differentiation",
      "type": "single_select",
      "question": "Use implicit differentiation to find $\\frac{dy}{dx}$ for the curve $x^2 + y^2 - 4x + 6y = 12$.",
      "options": [
        { "id": "W3-T2-Q08-opt0", "text": "$\\frac{2 - x}{y + 3}$" },
        { "id": "W3-T2-Q08-opt1", "text": "$\\frac{x - 2}{y + 3}$" },
        { "id": "W3-T2-Q08-opt2", "text": "$\\frac{2 - x}{y - 3}$" },
        { "id": "W3-T2-Q08-opt3", "text": "$\\frac{4 - 2x}{2y}$" }
      ],
      "correct_indices": ["W3-T2-Q08-opt0"],
      "explanation": "Differentiate implicitly with respect to $x$:\n$2x + 2y y' - 4 + 6y' = 0 \\implies y'(2y+6) = 4-2x \\implies y' = \\frac{4-2x}{2y+6} = \\frac{2-x}{y+3}$.",
      "hint": "Differentiate each term, remembering to multiply by $\\frac{dy}{dx}$ when differentiating terms containing $y$."
    },
    {
      "id": "W3-T2-Q09",
      "week": 3,
      "tier": "should",
      "topic": "Logarithmic Differentiation",
      "type": "single_select",
      "question": "Use logarithmic differentiation to find the derivative of $y = x^x$.",
      "options": [
        { "id": "W3-T2-Q09-opt0", "text": "$x^x(\\ln(x) + 1)$" },
        { "id": "W3-T2-Q09-opt1", "text": "$x^x$" },
        { "id": "W3-T2-Q09-opt2", "text": "$x\\cdot x^{x-1}$" },
        { "id": "W3-T2-Q09-opt3", "text": "$x^x \\ln(x)$" }
      ],
      "correct_indices": ["W3-T2-Q09-opt0"],
      "explanation": "Take natural logarithm: $\\ln(y) = x\\ln(x)$. Differentiating implicitly: $\\frac{1}{y}y' = \\ln(x) + x\\cdot\\frac{1}{x} = \\ln(x) + 1$. Thus, $y' = y(\\ln(x) + 1) = x^x(\\ln(x) + 1)$.",
      "hint": "Take the log of both sides to bring down the exponent, then apply the product rule on the right-hand side."
    },
    {
      "id": "W3-T2-Q10",
      "week": 3,
      "tier": "should",
      "topic": "Tangent Line Equation",
      "type": "single_select",
      "question": "Find the equation of the tangent line to the curve $y = 3x^2 - 5x + 2$ at the point $(2, 4)$.",
      "options": [
        { "id": "W3-T2-Q10-opt0", "text": "$y = 7x - 10$" },
        { "id": "W3-T2-Q10-opt1", "text": "$y = 7x - 14$" },
        { "id": "W3-T2-Q10-opt2", "text": "$y = 6x - 8$" },
        { "id": "W3-T2-Q10-opt3", "text": "$x + 7y = 30$" }
      ],
      "correct_indices": ["W3-T2-Q10-opt0"],
      "explanation": "Derivative is $y' = 6x-5$. Gradient of tangent at $x=2$ is $m_t = 6(2)-5 = 7$. Using point-slope form: $y - 4 = 7(x - 2) \\implies y = 7x - 10$.",
      "hint": "Calculate the gradient by finding the derivative at $x=2$, then use the line equation formula."
    },
    {
      "id": "W3-T3-Q01",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Logarithmic Chain Rule",
      "type": "single_select",
      "question": "Find the derivative of $y = \\ln(\\cosh(3x))$ using the chain rule.",
      "options": [
        { "id": "W3-T3-Q01-opt0", "text": "$3\\tanh(3x)$" },
        { "id": "W3-T3-Q01-opt1", "text": "$3\\coth(3x)$" },
        { "id": "W3-T3-Q01-opt2", "text": "$\\tanh(3x)$" },
        { "id": "W3-T3-Q01-opt3", "text": "$\\frac{3}{\\cosh(3x)}$" }
      ],
      "correct_indices": ["W3-T3-Q01-opt0"],
      "explanation": "Let $u = \\cosh(3x) \\implies du/dx = 3\\sinh(3x)$. Differentiating $y = \\ln(u)$ gives $y' = \\frac{1}{u}\\cdot\\frac{du}{dx} = \\frac{3\\sinh(3x)}{\\cosh(3x)} = 3\\tanh(3x)$.",
      "hint": "Use $y' = \\frac{u'}{u}$. Remember the derivative of $\\cosh(kx)$ is $k\\sinh(kx)$."
    },
    {
      "id": "W3-T3-Q02",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Implicit Product Rule",
      "type": "single_select",
      "question": "Use implicit differentiation to find $\\frac{dy}{dx}$ for the curve $x^2 e^y - x + y^3 - 1 = 0$.",
      "options": [
        { "id": "W3-T3-Q02-opt0", "text": "$\\frac{1 - 2x e^y}{x^2 e^y + 3y^2}$" },
        { "id": "W3-T3-Q02-opt1", "text": "$\\frac{2x e^y - 1}{x^2 e^y + 3y^2}$" },
        { "id": "W3-T3-Q02-opt2", "text": "$\\frac{1 - 2x e^y}{x^2 + 3y^2}$" },
        { "id": "W3-T3-Q02-opt3", "text": "$\\frac{1}{x^2 e^y + 3y^2}$" }
      ],
      "correct_indices": ["W3-T3-Q02-opt0"],
      "explanation": "Differentiating implicitly: $\\left(2x e^y + x^2 e^y y'\\right) - 1 + 3y^2 y' = 0 \\implies y'(x^2 e^y + 3y^2) = 1 - 2x e^y \\implies y' = \\frac{1-2x e^y}{x^2 e^y + 3y^2}$.",
      "hint": "Apply the product rule to the term $x^2 e^y$, treating $y$ as a function of $x$."
    },
    {
      "id": "W3-T3-Q03",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Parametric First Derivative",
      "type": "single_select",
      "question": "Find $\\frac{dy}{dx}$ in terms of $t$ for the parametric curve $x = t^3$, $y = t^2 - 5t$.",
      "options": [
        { "id": "W3-T3-Q03-opt0", "text": "$\\frac{2t - 5}{3t^2}$" },
        { "id": "W3-T3-Q03-opt1", "text": "$\\frac{3t^2}{2t - 5}$" },
        { "id": "W3-T3-Q03-opt2", "text": "$\\frac{2}{3t}$" },
        { "id": "W3-T3-Q03-opt3", "text": "$\\frac{2t - 5}{3t}$" }
      ],
      "correct_indices": ["W3-T3-Q03-opt0"],
      "explanation": "Find derivatives with respect to $t$: $\\frac{dx}{dt} = 3t^2$ and $\\frac{dy}{dt} = 2t - 5$. By the parametric derivative formula: $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{2t - 5}{3t^2}$.",
      "hint": "Calculate $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$ first, then divide them."
    },
    {
      "id": "W3-T3-Q04",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Parametric Second Derivative",
      "type": "single_select",
      "question": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = t^3$, $y = t^2 - 5t$.",
      "options": [
        { "id": "W3-T3-Q04-opt0", "text": "$\\frac{10 - 2t}{9t^5}$" },
        { "id": "W3-T3-Q04-opt1", "text": "$\\frac{2 - 10t}{9t^5}$" },
        { "id": "W3-T3-Q04-opt2", "text": "$-\\frac{10}{9t^4}$" },
        { "id": "W3-T3-Q04-opt3", "text": "$\\frac{10 - 2t}{3t^2}$" }
      ],
      "correct_indices": ["W3-T3-Q04-opt0"],
      "explanation": "First derivative is $y' = \\frac{2t - 5}{3t^2} = \\frac{2}{3}t^{-1} - \\frac{5}{3}t^{-2}$. Differentiating with respect to $t$ gives $\\frac{d}{dt}(y') = -\\frac{2}{3}t^{-2} + \\frac{10}{3}t^{-3} = \\frac{10 - 2t}{3t^3}$. Divide by $\\frac{dx}{dt} = 3t^2$ to get $\\frac{d^2y}{dx^2} = \\frac{10 - 2t}{9t^5}$.",
      "hint": "Apply the formula $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(dy/dx)}{dx/dt}$."
    },
    {
      "id": "W3-T3-Q05",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Normal Line Equation",
      "type": "single_select",
      "question": "Find the equation of the normal line to the curve $y = 3x^2 - 5x + 2$ at the point $(2, 4)$.",
      "options": [
        { "id": "W3-T3-Q05-opt0", "text": "$x + 7y = 30$" },
        { "id": "W3-T3-Q05-opt1", "text": "$y = -\\frac{1}{7}x + 4$" },
        { "id": "W3-T3-Q05-opt2", "text": "$x - 7y = -26$" },
        { "id": "W3-T3-Q05-opt3", "text": "$7x + y = 18$" }
      ],
      "correct_indices": ["W3-T3-Q05-opt0"],
      "explanation": "Gradient of tangent is $m_t = 7$. The gradient of the normal is the negative reciprocal: $m_n = -1/7$. Using point-slope form: $y - 4 = -\\frac{1}{7}(x - 2) \\implies 7y - 28 = -x + 2 \\implies x + 7y = 30$.",
      "hint": "Find the tangent gradient, take its negative reciprocal to get the normal gradient, and write the line equation."
    },
    {
      "id": "W3-T3-Q06",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Logarithmic Derivative Complex",
      "type": "single_select",
      "question": "Find the derivative of $y = (\\sin(x))^x$ using logarithmic differentiation.",
      "options": [
        { "id": "W3-T3-Q06-opt0", "text": "$(\\sin(x))^x \\left( \\ln(\\sin(x)) + x \\cot(x) \\right)$" },
        { "id": "W3-T3-Q06-opt1", "text": "$(\\sin(x))^x \\left( \\ln(\\sin(x)) + x \\tan(x) \\right)$" },
        { "id": "W3-T3-Q06-opt2", "text": "$x(\\sin(x))^{x-1}$" },
        { "id": "W3-T3-Q06-opt3", "text": "$x\\cos(x)(\\sin(x))^{x-1}$" }
      ],
      "correct_indices": ["W3-T3-Q06-opt0"],
      "explanation": "Take log: $\\ln(y) = x\\ln(\\sin(x))$. Differentiating: $\\frac{1}{y}y' = \\ln(\\sin(x)) + x\\left(\\frac{\\cos(x)}{\\sin(x)}\\right) = \\ln(\\sin(x)) + x\\cot(x)$. Multiply by $y$ to get $y'$.",
      "hint": "Apply natural log to simplify, then use product and chain rules to differentiate."
    },
    {
      "id": "W3-T3-Q07",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Optimization Modeling",
      "type": "single_select",
      "question": "A cylindrical container must have a volume of $V = 1000$ $\\mathrm{cm}^3$. Express its total surface area $S$ as a function of the radius $r$.",
      "options": [
        { "id": "W3-T3-Q07-opt0", "text": "$S(r) = \\frac{2000}{r} + 2\\pi r^2$" },
        { "id": "W3-T3-Q07-opt1", "text": "$S(r) = \\frac{1000}{r} + 2\\pi r^2$" },
        { "id": "W3-T3-Q07-opt2", "text": "$S(r) = 2\\pi r^2 + 2000$" },
        { "id": "W3-T3-Q07-opt3", "text": "$S(r) = \\frac{2000}{r^2} + \\pi r^2$" }
      ],
      "correct_indices": ["W3-T3-Q07-opt0"],
      "explanation": "Volume is $V = \\pi r^2 h = 1000 \\implies h = \\frac{1000}{\\pi r^2}$. Substitute this into surface area $S = 2\\pi r h + 2\\pi r^2$: $S = 2\\pi r\\left(\\frac{1000}{\\pi r^2}\\right) + 2\\pi r^2 = \\frac{2000}{r} + 2\\pi r^2$.",
      "hint": "Express height $h$ in terms of radius $r$ using the volume formula, and substitute it into the surface area equation."
    },
    {
      "id": "W3-T3-Q08",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Minimizing surface area",
      "type": "single_select",
      "question": "For a cylindrical container of volume $V = 1000$ $\\mathrm{cm}^3$, find the radius $r$ that minimizes the surface area.",
      "options": [
        { "id": "W3-T3-Q08-opt0", "text": "$\\left( \\frac{500}{\\pi} \\right)^{1/3} \\approx 5.42$ cm" },
        { "id": "W3-T3-Q08-opt1", "text": "$\\left( \\frac{1000}{\\pi} \\right)^{1/3} \\approx 6.83$ cm" },
        { "id": "W3-T3-Q08-opt2", "text": "$5.00$ cm" },
        { "id": "W3-T3-Q08-opt3", "text": "$10.84$ cm" }
      ],
      "correct_indices": ["W3-T3-Q08-opt0"],
      "explanation": "Differentiate $S(r) = 2000r^{-1} + 2\\pi r^2$: $S' = -\\frac{2000}{r^2} + 4\\pi r$. Set to zero: $4\\pi r^3 = 2000 \\implies r^3 = 500/\\pi \\implies r = (500/\\pi)^{1/3}$.",
      "hint": "Find the derivative of the surface area equation with respect to $r$, set it to zero, and solve for $r$."
    },
    {
      "id": "W3-T3-Q09",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Oscillation Displacement",
      "type": "single_select",
      "question": "Find the velocity equation $v(t)$ of an oscillating mass whose displacement is $s(t) = 0.05 \\cos(4t) e^{-t}$.",
      "options": [
        { "id": "W3-T3-Q09-opt0", "text": "$-e^{-t} \\left( 0.2\\sin(4t) + 0.05\\cos(4t) \\right)$" },
        { "id": "W3-T3-Q09-opt1", "text": "$-0.2e^{-t}\\sin(4t)$" },
        { "id": "W3-T3-Q09-opt2", "text": "$-e^{-t} \\left( 0.2\\sin(4t) - 0.05\\cos(4t) \\right)$" },
        { "id": "W3-T3-Q09-opt3", "text": "$-0.2\\sin(4t)e^{-t} - 0.05\\cos(4t)$" }
      ],
      "correct_indices": ["W3-T3-Q09-opt0"],
      "explanation": "Apply product rule on $s(t) = 0.05\\cos(4t)\\cdot e^{-t}$: $v(t) = 0.05(-4\\sin(4t))e^{-t} + 0.05\\cos(4t)(-e^{-t}) = -e^{-t}(0.2\\sin(4t) + 0.05\\cos(4t))$.",
      "hint": "Apply the product rule to differentiate the displacement function with respect to $t$."
    },
    {
      "id": "W3-T3-Q10",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Implicit Differentiation Trigonometric",
      "type": "single_select",
      "question": "Use implicit differentiation to find $\\frac{dy}{dx}$ for the curve $x \\cos(y) + y \\sin(x) = 0$.",
      "options": [
        { "id": "W3-T3-Q10-opt0", "text": "$\\frac{\\cos(y) + y\\cos(x)}{x\\sin(y) - \\sin(x)}$" },
        { "id": "W3-T3-Q10-opt1", "text": "$\\frac{\\cos(y) - y\\cos(x)}{x\\sin(y) + \\sin(x)}$" },
        { "id": "W3-T3-Q10-opt2", "text": "$\\frac{\\cos(y) + y\\cos(x)}{\\sin(x) - x\\sin(y)}$" },
        { "id": "W3-T3-Q10-opt3", "text": "$\\frac{y\\cos(x) - \\cos(y)}{x\\sin(y) - \\sin(x)}$" }
      ],
      "correct_indices": ["W3-T3-Q10-opt0"],
      "explanation": "Differentiate implicitly: $\\cos(y) - x\\sin(y)y' + y'\\sin(x) + y\\cos(x) = 0 \\implies y'(\\sin(x) - x\\sin(y)) = -\\cos(y) - y\\cos(x) \\implies y' = \\frac{\\cos(y) + y\\cos(x)}{x\\sin(y) - \\sin(x)}$.",
      "hint": "Apply the product rule to both terms individually, treating $y$ as an implicit function of $x$."
    },
    {
      "id": "W3-T4-Q01",
      "week": 3,
      "tier": "extra",
      "topic": "Parametric Acceleration Proof",
      "type": "single_select",
      "question": "For a projectile trajectory defined parametrically by $x(t) = V_0 \\cos(\\theta) t$, and $y(t) = V_0 \\sin(\\theta) t - \\frac{1}{2}gt^2$. Show that the second derivative $\\frac{d^2y}{dx^2}$ is constant. Find its value.",
      "options": [
        { "id": "W3-T4-Q01-opt0", "text": "$-\\frac{g}{V_0^2 \\cos^2(\\theta)}$" },
        { "id": "W3-T4-Q01-opt1", "text": "$-\\frac{g}{V_0 \\cos(\\theta)}$" },
        { "id": "W3-T4-Q01-opt2", "text": "$-g$" },
        { "id": "W3-T4-Q01-opt3", "text": "$-\\frac{g}{2 V_0^2 \\cos^2(\\theta)}$" }
      ],
      "correct_indices": ["W3-T4-Q01-opt0"],
      "explanation": "First derivative is $y' = \\frac{V_0\\sin(\\theta) - gt}{V_0\\cos(\\theta)} = \\tan(\\theta) - \\frac{g}{V_0\\cos(\\theta)}t$. Differentiating with respect to $t$ gives $-\\frac{g}{V_0\\cos(\\theta)}$. Dividing by $dx/dt = V_0\\cos(\\theta)$ gives $\\frac{d^2y}{dx^2} = -\\frac{g}{V_0^2 \\cos^2(\\theta)}$, which is a constant.",
      "hint": "Calculate the first parametric derivative, differentiate it with respect to $t$, and divide by $\\frac{dx}{dt}$."
    },
    {
      "id": "W3-T4-Q02",
      "week": 3,
      "tier": "extra",
      "topic": "Optimal Cylinder Height Ratio",
      "type": "single_select",
      "question": "Prove that for a cylinder of fixed volume $V$, the surface area is minimized when the height $h$ is related to the radius $r$ by what ratio?",
      "options": [
        { "id": "W3-T4-Q02-opt0", "text": "$h = 2r$" },
        { "id": "W3-T4-Q02-opt1", "text": "$h = r$" },
        { "id": "W3-T4-Q02-opt2", "text": "$h = 4r$" },
        { "id": "W3-T4-Q02-opt3", "text": "$h = \\pi r$" }
      ],
      "correct_indices": ["W3-T4-Q02-opt0"],
      "explanation": "The optimal radius satisfies $r^3 = \\frac{V}{2\\pi}$. Substituting this into optimal height $h = \\frac{V}{\\pi r^2}$ gives $h = \\frac{2\\pi r^3}{\\pi r^2} = 2r$. Thus, the height must equal the diameter.",
      "hint": "Calculate optimal height using $h = \\frac{V}{\\pi r^2}$ with the optimal radius condition $r = \\left(\\frac{V}{2\\pi}\\right)^{1/3}$."
    },
    {
      "id": "W3-T4-Q03",
      "week": 3,
      "tier": "extra",
      "topic": "Logarithmic Differentiation Inverse",
      "type": "single_select",
      "question": "Use logarithmic differentiation to find the derivative of $y = (3x^2 + 5)^{1/x}$.",
      "options": [
        { "id": "W3-T4-Q03-opt0", "text": "$(3x^2 + 5)^{1/x} \\left[ \\frac{6}{3x^2 + 5} - \\frac{\\ln(3x^2 + 5)}{x^2} \\right]$" },
        { "id": "W3-T4-Q03-opt1", "text": "$(3x^2 + 5)^{1/x} \\left[ \\frac{6x}{3x^2 + 5} - \\frac{\\ln(3x^2 + 5)}{x} \\right]$" },
        { "id": "W3-T4-Q03-opt2", "text": "$\\frac{1}{x}(3x^2 + 5)^{1/x - 1}$" },
        { "id": "W3-T4-Q03-opt3", "text": "$(3x^2 + 5)^{1/x} \\left[ \\frac{6}{3x^2 + 5} + \\frac{\\ln(3x^2 + 5)}{x^2} \\right]$" }
      ],
      "correct_indices": ["W3-T4-Q03-opt0"],
      "explanation": "Take log: $\\ln(y) = \\frac{\\ln(3x^2+5)}{x}$. Differentiate using the quotient rule: $\\frac{1}{y}y' = \\frac{\\frac{6x}{3x^2+5}x - \\ln(3x^2+5)}{x^2} = \\frac{6}{3x^2+5} - \\frac{\\ln(3x^2+5)}{x^2}$. Multiply by $y$ to get the final derivative.",
      "hint": "Take natural logarithm of both sides, then differentiate using the quotient rule on the right-hand side."
    },
    {
      "id": "W3-T4-Q04",
      "week": 3,
      "tier": "extra",
      "topic": "Oscillation Acceleration",
      "type": "single_select",
      "question": "Find the acceleration equation $a(t)$ of an oscillating mass whose displacement is $s(t) = 0.05 \\cos(4t) e^{-t}$.",
      "options": [
        { "id": "W3-T4-Q04-opt0", "text": "$e^{-t} \\left( 0.4\\sin(4t) - 0.75\\cos(4t) \\right)$" },
        { "id": "W3-T4-Q04-opt1", "text": "$e^{-t} \\left( 0.4\\sin(4t) + 0.75\\cos(4t) \\right)$" },
        { "id": "W3-T4-Q04-opt2", "text": "$-0.8e^{-t}\\cos(4t)$" },
        { "id": "W3-T4-Q04-opt3", "text": "$e^{-t} \\left( -0.4\\sin(4t) - 0.75\\cos(4t) \\right)$" }
      ],
      "correct_indices": ["W3-T4-Q04-opt0"],
      "explanation": "Velocity is $v(t) = -e^{-t}(0.2\\sin(4t) + 0.05\\cos(4t))$. Differentiating again with the product rule yields $a(t) = e^{-t}(0.2\\sin(4t) + 0.05\\cos(4t)) - e^{-t}(0.8\\cos(4t) - 0.2\\sin(4t)) = e^{-t}(0.4\\sin(4t) - 0.75\\cos(4t))$.",
      "hint": "Apply the product rule to differentiate the velocity equation with respect to $t$."
    },
    {
      "id": "W3-T4-Q05",
      "week": 3,
      "tier": "extra",
      "topic": "Normal Line Implicit Curve",
      "type": "single_select",
      "question": "Find the equation of the normal line to the ellipse $\\frac{x^2}{9} + \\frac{y^2}{16} = 2$ at the point $(3, 4)$.",
      "options": [
        { "id": "W3-T4-Q05-opt0", "text": "$3x - 4y + 7 = 0$" },
        { "id": "W3-T4-Q05-opt1", "text": "$4x + 3y - 24 = 0$" },
        { "id": "W3-T4-Q05-opt2", "text": "$3x + 4y - 25 = 0$" },
        { "id": "W3-T4-Q05-opt3", "text": "$4x - 3y = 0$" }
      ],
      "correct_indices": ["W3-T4-Q05-opt0"],
      "explanation": "Differentiate implicitly: $\\frac{2x}{9} + \\frac{2y y'}{16} = 0 \\implies y' = -\\frac{16x}{9y}$. At $(3,4)$, the tangent gradient is $m_t = -4/3$. The normal gradient is $m_n = 3/4$. Normal equation: $y - 4 = \\frac{3}{4}(x - 3) \\implies 4y - 16 = 3x - 9 \\implies 3x - 4y + 7 = 0$.",
      "hint": "Differentiate the ellipse equation implicitly, find the tangent gradient at $(3,4)$, invert and negate it, and solve for the line."
    },
    {
      "id": "W3-T4-Q06",
      "week": 3,
      "tier": "extra",
      "topic": "Second Derivative Parametric Hyperbolic",
      "type": "single_select",
      "question": "Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$ for the parametric curve $x = \\sinh(t)$, $y = \\cosh(t)$.",
      "options": [
        { "id": "W3-T4-Q06-opt0", "text": "$\\mathrm{sech}^3(t)$" },
        { "id": "W3-T4-Q06-opt1", "text": "$\\mathrm{sech}^2(t)$" },
        { "id": "W3-T4-Q06-opt2", "text": "$\\tanh(t)$" },
        { "id": "W3-T4-Q06-opt3", "text": "$\\cosh(t)$" }
      ],
      "correct_indices": ["W3-T4-Q06-opt0"],
      "explanation": "$\\frac{dx}{dt} = \\cosh(t)$, $\\frac{dy}{dt} = \\sinh(t) \\implies \\frac{dy}{dx} = \\tanh(t)$. Then $\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) = \\mathrm{sech}^2(t)$. Dividing by $\\frac{dx}{dt}$ gives $\\frac{d^2y}{dx^2} = \\frac{\\mathrm{sech}^2(t)}{\\cosh(t)} = \\mathrm{sech}^3(t)$.",
      "hint": "Find the first derivative $\\frac{dy}{dx} = \\tanh(t)$, differentiate with respect to $t$, and divide by $\\cosh(t)$."
    },
    {
      "id": "W3-T4-Q07",
      "week": 3,
      "tier": "extra",
      "topic": "Stationary Point Proof",
      "type": "single_select",
      "question": "If a function is defined by $f(x) = x^3 - 3x^2 + 3x - 1$, find the number of local extrema (local maxima or minima) of this function.",
      "options": [
        { "id": "W3-T4-Q07-opt0", "text": "0" },
        { "id": "W3-T4-Q07-opt1", "text": "1" },
        { "id": "W3-T4-Q07-opt2", "text": "2" },
        { "id": "W3-T4-Q07-opt3", "text": "3" }
      ],
      "correct_indices": ["W3-T4-Q07-opt0"],
      "explanation": "Derivative is $f'(x) = 3x^2 - 6x + 3 = 3(x-1)^2$. Setting $f'(x) = 0$ gives $x=1$ as a stationary point. Since $f''(x) = 6x-6$ is zero at $x=1$, and $f'''(1) = 6 \\neq 0$, this is a point of inflection, not a local extremum. So there are 0 local extrema.",
      "hint": "Find the roots of the derivative and analyze their nature using the first or second derivative tests."
    },
    {
      "id": "W3-T4-Q08",
      "week": 3,
      "tier": "extra",
      "topic": "Logarithmic Differentiation Inverse Product",
      "type": "single_select",
      "question": "Find the derivative of $y = (x+1)(x+2)(x+3)(x+4)$ at $x=0$ using logarithmic differentiation.",
      "options": [
        { "id": "W3-T4-Q08-opt0", "text": "50" },
        { "id": "W3-T4-Q08-opt1", "text": "24" },
        { "id": "W3-T4-Q08-opt2", "text": "48" },
        { "id": "W3-T4-Q08-opt3", "text": "100" }
      ],
      "correct_indices": ["W3-T4-Q08-opt0"],
      "explanation": "Take log: $\\ln(y) = \\ln(x+1) + \\ln(x+2) + \\ln(x+3) + \\ln(x+4)$. Differentiating: $\\frac{y'}{y} = \\frac{1}{x+1} + \\frac{1}{x+2} + \\frac{1}{x+3} + \\frac{1}{x+4}$. At $x=0$, $y(0) = (1)(2)(3)(4) = 24$. Then $y'(0) = 24\\left(1 + 1/2 + 1/3 + 1/4\\right) = 24\\left(25/12\\right) = 50$.",
      "hint": "Apply natural log to convert the product into a sum of logarithms, differentiate, and substitute $x=0$."
    },
    {
      "id": "W3-T4-Q09",
      "week": 3,
      "tier": "extra",
      "topic": "Double Product Rule",
      "type": "single_select",
      "question": "Differentiate $y = x \\sin(x) \\cos(x)$ with respect to $x$.",
      "options": [
        { "id": "W3-T4-Q09-opt0", "text": "$\\frac{1}{2}\\sin(2x) + x\\cos(2x)$" },
        { "id": "W3-T4-Q09-opt1", "text": "$\\sin(2x) + x\\cos(2x)$" },
        { "id": "W3-T4-Q09-opt2", "text": "$\\frac{1}{2}\\sin(2x) - x\\cos(2x)$" },
        { "id": "W3-T4-Q09-opt3", "text": "$\\cos(2x)$" }
      ],
      "correct_indices": ["W3-T4-Q09-opt0"],
      "explanation": "Simplify first using the double-angle identity: $y = \\frac{1}{2}x\\sin(2x)$. Differentiating with the product rule: $y' = \\frac{1}{2}\\sin(2x) + \\frac{1}{2}x(2\\cos(2x)) = \\frac{1}{2}\\sin(2x) + x\\cos(2x)$.",
      "hint": "Simplify the trigonometric part using the double-angle identity $2\\sin(x)\\cos(x) = \\sin(2x)$ before differentiating."
    },
    {
      "id": "W3-T4-Q10",
      "week": 3,
      "tier": "extra",
      "topic": "Implicit Second Derivative",
      "type": "single_select",
      "question": "For the circle $x^2 + y^2 = 25$, find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $y$.",
      "options": [
        { "id": "W3-T4-Q10-opt0", "text": "$-\\frac{25}{y^3}$" },
        { "id": "W3-T4-Q10-opt1", "text": "$-\\frac{1}{y^3}$" },
        { "id": "W3-T4-Q10-opt2", "text": "$-\\frac{25}{y^2}$" },
        { "id": "W3-T4-Q10-opt3", "text": "$\\frac{25}{y^3}$" }
      ],
      "correct_indices": ["W3-T4-Q10-opt0"],
      "explanation": "First derivative is $y' = -x/y$. Differentiating again: $y'' = -\\frac{(1)(y) - (x)(y')}{y^2} = -\\frac{y - x(-x/y)}{y^2} = -\\frac{y^2 + x^2}{y^3}$. Since $x^2 + y^2 = 25$ on the circle, we substitute to get $y'' = -\\frac{25}{y^3}$.",
      "hint": "Differentiate $y' = -x/y$ using the quotient rule, and substitute $x^2 + y^2 = 25$ to simplify."
    }
  ]
};
