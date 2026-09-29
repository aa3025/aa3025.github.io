window.QUIZ_BANK_WEEK4 = {
  "module": "4004ENG Engineering Mathematics",
  "week": 4,
  "title": "Week 4 Quiz Bank: Calculus II (Integration & Applications)",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W4-T1-Q01",
      "week": 4,
      "tier": "core",
      "topic": "Power Rule Integration",
      "type": "single_select",
      "question": "Evaluate the indefinite integral $\\int (7x^6 - 4x^3 + 2x - 9) d x$.",
      "options": [
        { "id": "W4-T1-Q01-opt0", "text": "$x^7 - x^4 + x^2 - 9x + c$" },
        { "id": "W4-T1-Q01-opt1", "text": "$42x^5 - 12x^2 + 2 + c$" },
        { "id": "W4-T1-Q01-opt2", "text": "$x^7 - x^4 + x^2 + c$" },
        { "id": "W4-T1-Q01-opt3", "text": "$7x^7 - 4x^4 + 2x^2 - 9x + c$" }
      ],
      "correct_indices": ["W4-T1-Q01-opt0"],
      "explanation": "Integrating term-by-term using the power rule $\\int x^n dx = \\frac{x^{n+1}}{n+1}$: \n$\\int 7x^6 dx = x^7$, $\\int -4x^3 dx = -x^4$, $\\int 2x dx = x^2$, and $\\int -9 dx = -9x$. Adding the integration constant yields $x^7 - x^4 + x^2 - 9x + c$.",
      "hint": "Apply the rule $\\int x^n dx = \\frac{x^{n+1}}{n+1}$ to each term individually."
    },
    {
      "id": "W4-T1-Q02",
      "week": 4,
      "tier": "core",
      "topic": "Exponential and Hyperbolic Integration",
      "type": "single_select",
      "question": "Evaluate the indefinite integral $\\int (3e^{5x} - 2\\cosh(4x)) d x$.",
      "options": [
        { "id": "W4-T1-Q02-opt0", "text": "$\\frac{3e^{5x}}{5} - \\frac{\\sinh(4x)}{2} + c$" },
        { "id": "W4-T1-Q02-opt1", "text": "$\\frac{3e^{5x}}{5} - 2\\sinh(4x) + c$" },
        { "id": "W4-T1-Q02-opt2", "text": "$15e^{5x} - 8\\sinh(4x) + c$" },
        { "id": "W4-T1-Q02-opt3", "text": "$\\frac{3e^{5x}}{5} + \\frac{\\sinh(4x)}{2} + c$" }
      ],
      "correct_indices": ["W4-T1-Q02-opt0"],
      "explanation": "Using standard integral forms:\n$\\int 3e^{5x} dx = \\frac{3}{5}e^{5x}$ and $\\int -2\\cosh(4x) dx = -\\frac{2}{4}\\sinh(4x) = -\\frac{1}{2}\\sinh(4x)$. Result: $\\frac{3}{5}e^{5x} - \\frac{1}{2}\\sinh(4x) + c$.",
      "hint": "Recall that $\\int e^{kx} dx = \\frac{e^{kx}}{k}$ and $\\int \\cosh(kx) dx = \\frac{\\sinh(kx)}{k}$."
    },
    {
      "id": "W4-T1-Q03",
      "week": 4,
      "tier": "core",
      "topic": "Fractional Exponents Integration",
      "type": "single_select",
      "question": "Evaluate the indefinite integral $\\int (4x^{-1/2} + 6x^{2/3}) d x$.",
      "options": [
        { "id": "W4-T1-Q03-opt0", "text": "$8\\sqrt{x} + \\frac{18x^{5/3}}{5} + c$" },
        { "id": "W4-T1-Q03-opt1", "text": "$2\\sqrt{x} + \\frac{18x^{5/3}}{5} + c$" },
        { "id": "W4-T1-Q03-opt2", "text": "$8\\sqrt{x} + 10x^{5/3} + c$" },
        { "id": "W4-T1-Q03-opt3", "text": "$-2x^{-3/2} + 4x^{-1/3} + c$" }
      ],
      "correct_indices": ["W4-T1-Q03-opt0"],
      "explanation": "Integrating term-by-term:\n$\\int 4x^{-1/2} dx = 4\\cdot\\frac{x^{1/2}}{1/2} = 8\\sqrt{x}$, and\n$\\int 6x^{2/3} dx = 6\\cdot\\frac{x^{5/3}}{5/3} = \\frac{18}{5}x^{5/3}$. Result: $8\\sqrt{x} + \\frac{18x^{5/3}}{5} + c$.",
      "hint": "Add 1 to the fractional exponents and divide by the new fraction."
    },
    {
      "id": "W4-T1-Q04",
      "week": 4,
      "tier": "core",
      "topic": "Standard Trigonometric Integration",
      "type": "single_select",
      "question": "Evaluate the indefinite integral $\\int \\sec^2(2x) d x$.",
      "options": [
        { "id": "W4-T1-Q04-opt0", "text": "$\\frac{\\tan(2x)}{2} + c$" },
        { "id": "W4-T1-Q04-opt1", "text": "$2\\tan(2x) + c$" },
        { "id": "W4-T1-Q04-opt2", "text": "$\\tan(2x) + c$" },
        { "id": "W4-T1-Q04-opt3", "text": "$-\\frac{\\tan(2x)}{2} + c$" }
      ],
      "correct_indices": ["W4-T1-Q04-opt0"],
      "explanation": "Since $\\frac{d}{dx}(\\tan(kx)) = k\\sec^2(kx)$, the integral is $\\int \\sec^2(kx) dx = \\frac{\\tan(kx)}{k}$. Here $k=2$, which gives $\\frac{1}{2}\\tan(2x) + c$.",
      "hint": "Which standard trigonometric function differentiates to $\\sec^2(x)$? Account for the chain multiplier 2."
    },
    {
      "id": "W4-T1-Q05",
      "week": 4,
      "tier": "core",
      "topic": "Integration of Inverse Functions",
      "type": "single_select",
      "question": "Evaluate the indefinite integral $\\int \\left( \\frac{1}{1+x^2} - \\frac{3}{\\sqrt{1-x^2}} \\right) d x$.",
      "options": [
        { "id": "W4-T1-Q05-opt0", "text": "$\\arctan(x) - 3\\arcsin(x) + c$" },
        { "id": "W4-T1-Q05-opt1", "text": "$\\arctan(x) - 3\\arccos(x) + c$" },
        { "id": "W4-T1-Q05-opt2", "text": "$\\ln(1+x^2) - 3\\arcsin(x) + c$" },
        { "id": "W4-T1-Q05-opt3", "text": "$\\text{arccot}(x) - 3\\arcsin(x) + c$" }
      ],
      "correct_indices": ["W4-T1-Q05-opt0"],
      "explanation": "Recall standard derivatives: $\\frac{d}{dx}(\\arctan(x)) = \\frac{1}{1+x^2}$ and $\\frac{d}{dx}(\\arcsin(x)) = \\frac{1}{\\sqrt{1-x^2}}$. Substituting gives $\\arctan(x) - 3\\arcsin(x) + c$.",
      "hint": "Identify the inverse trigonometric functions that have these standard expressions as derivatives."
    },
    {
      "id": "W4-T1-Q06",
      "week": 4,
      "tier": "core",
      "topic": "Algebraic Simplification Integration",
      "type": "single_select",
      "question": "Simplify and integrate $\\int \\frac{3x^4 - 2x^2 + 5}{x^2} d x$.",
      "options": [
        { "id": "W4-T1-Q06-opt0", "text": "$x^3 - 2x - \\frac{5}{x} + c$" },
        { "id": "W4-T1-Q06-opt1", "text": "$x^3 - 2x + \\frac{5}{x} + c$" },
        { "id": "W4-T1-Q06-opt2", "text": "$3x^3 - 2x - \\frac{5}{x} + c$" },
        { "id": "W4-T1-Q06-opt3", "text": "$\\frac{3x^5/5 - 2x^3/3 + 5x}{x^3/3} + c$" }
      ],
      "correct_indices": ["W4-T1-Q06-opt0"],
      "explanation": "Divide term-by-term first: $\\frac{3x^4-2x^2+5}{x^2} = 3x^2 - 2 + 5x^{-2}$. Integrating: $\\int (3x^2 - 2 + 5x^{-2}) dx = x^3 - 2x + 5\\frac{x^{-1}}{-1} = x^3 - 2x - \\frac{5}{x} + c$.",
      "hint": "Split the fraction into three individual terms before applying integration rules."
    },
    {
      "id": "W4-T1-Q07",
      "week": 4,
      "tier": "core",
      "topic": "Definite Integral Polynomial",
      "type": "single_select",
      "question": "Evaluate the definite integral $\\int_0^2 (3x^2 - 4x + 1) d x$.",
      "options": [
        { "id": "W4-T1-Q07-opt0", "text": "2" },
        { "id": "W4-T1-Q07-opt1", "text": "0" },
        { "id": "W4-T1-Q07-opt2", "text": "4" },
        { "id": "W4-T1-Q07-opt3", "text": "1" }
      ],
      "correct_indices": ["W4-T1-Q07-opt0"],
      "explanation": "The indefinite integral is $F(x) = x^3 - 2x^2 + x$. Evaluating from 0 to 2: $F(2) = 2^3 - 2(2^2) + 2 = 8 - 8 + 2 = 2$. $F(0) = 0$. The difference is $2 - 0 = 2$.",
      "hint": "Find the antiderivative, substitute the upper limit 2, and subtract the value at the lower limit 0."
    },
    {
      "id": "W4-T1-Q08",
      "week": 4,
      "tier": "core",
      "topic": "Definite Integral Logarithmic",
      "type": "single_select",
      "question": "Evaluate the definite integral $\\int_1^{e^2} \\frac{1}{x} d x$.",
      "options": [
        { "id": "W4-T1-Q08-opt0", "text": "2" },
        { "id": "W4-T1-Q08-opt1", "text": "$e^2$" },
        { "id": "W4-T1-Q08-opt2", "text": "1" },
        { "id": "W4-T1-Q08-opt3", "text": "0" }
      ],
      "correct_indices": ["W4-T1-Q08-opt0"],
      "explanation": "The antiderivative is $\\ln|x|$. Evaluating: $\\int_1^{e^2} \\frac{1}{x} dx = [\\ln(x)]_1^{e^2} = \\ln(e^2) - \\ln(1) = 2 - 0 = 2$.",
      "hint": "The integral of $\\frac{1}{x}$ is the natural logarithm function. Apply logarithmic properties."
    },
    {
      "id": "W4-T1-Q09",
      "week": 4,
      "tier": "core",
      "topic": "Definite Integral Exponential",
      "type": "single_select",
      "question": "Evaluate the definite integral $\\int_0^{\\ln 2} e^{2x} d x$.",
      "options": [
        { "id": "W4-T1-Q09-opt0", "text": "1.5" },
        { "id": "W4-T1-Q09-opt1", "text": "2" },
        { "id": "W4-T1-Q09-opt2", "text": "3" },
        { "id": "W4-T1-Q09-opt3", "text": "0.75" }
      ],
      "correct_indices": ["W4-T1-Q09-opt0"],
      "explanation": "Antiderivative is $\\frac{1}{2}e^{2x}$. Evaluating: $[\\frac{1}{2}e^{2x}]_0^{\\ln 2} = \\frac{1}{2}e^{2\\ln 2} - \\frac{1}{2}e^0 = \\frac{1}{2}e^{\\ln 4} - \\frac{1}{2} = \\frac{4}{2} - \\frac{1}{2} = 1.5$.",
      "hint": "Recall that $e^{2\\ln 2} = e^{\\ln(2^2)} = 4$."
    },
    {
      "id": "W4-T1-Q10",
      "week": 4,
      "tier": "core",
      "topic": "Fundamental Theorem of Calculus",
      "type": "single_select",
      "question": "The Fundamental Theorem of Calculus states that if $F(x) = \\int_a^x f(t) dt$, then what is $F'(x)$?",
      "options": [
        { "id": "W4-T1-Q10-opt0", "text": "$f(x)$" },
        { "id": "W4-T1-Q10-opt1", "text": "$f(x) - f(a)$" },
        { "id": "W4-T1-Q10-opt2", "text": "$f'(x)$" },
        { "id": "W4-T1-Q10-opt3", "text": "$0$" }
      ],
      "correct_indices": ["W4-T1-Q10-opt0"],
      "explanation": "The Fundamental Theorem of Calculus establishes that differentiation is the inverse operation of integration: $F'(x) = \\frac{d}{dx}\\int_a^x f(t) dt = f(x)$.",
      "hint": "Differentiating an integral function returns the original integrand evaluated at the upper bound."
    },
    {
      "id": "W4-T2-Q01",
      "week": 4,
      "tier": "should",
      "topic": "Integration by Substitution",
      "type": "single_select",
      "question": "Evaluate $\\int \\sqrt{5x+2} d x$ using substitution.",
      "options": [
        { "id": "W4-T2-Q01-opt0", "text": "$\\frac{2(5x+2)^{3/2}}{15} + c$" },
        { "id": "W4-T2-Q01-opt1", "text": "$\\frac{2(5x+2)^{3/2}}{3} + c$" },
        { "id": "W4-T2-Q01-opt2", "text": "$\\frac{(5x+2)^{3/2}}{15} + c$" },
        { "id": "W4-T2-Q01-opt3", "text": "$\\frac{2\\sqrt{5x+2}}{5} + c$" }
      ],
      "correct_indices": ["W4-T2-Q01-opt0"],
      "explanation": "Let $u = 5x+2 \\implies du = 5 dx \\implies dx = du/5$. The integral becomes $\\int u^{1/2} \\frac{du}{5} = \\frac{1}{5} \\cdot \\frac{u^{3/2}}{3/2} = \\frac{2}{15}u^{3/2} = \\frac{2(5x+2)^{3/2}}{15} + c$.",
      "hint": "Set $u = 5x+2$, calculate $du$ to find the scaling factor, and integrate the power function."
    },
    {
      "id": "W4-T2-Q02",
      "week": 4,
      "tier": "should",
      "topic": "Substitution Logarithmic Form",
      "type": "single_select",
      "question": "Use substitution to find the indefinite integral $\\int \\frac{4x^3}{x^4+3} d x$.",
      "options": [
        { "id": "W4-T2-Q02-opt0", "text": "$\\ln(x^4+3) + c$" },
        { "id": "W4-T2-Q02-opt1", "text": "$4\\ln(x^4+3) + c$" },
        { "id": "W4-T2-Q02-opt2", "text": "$\\frac{1}{(x^4+3)^2} + c$" },
        { "id": "W4-T2-Q02-opt3", "text": "$x^4 \\ln(x^4+3) + c$" }
      ],
      "correct_indices": ["W4-T2-Q02-opt0"],
      "explanation": "Let $u = x^4+3 \\implies du = 4x^3 dx$. Substituting: $\\int \\frac{4x^3}{x^4+3} dx = \\int \\frac{du}{u} = \\ln|u| = \\ln(x^4+3) + c$.",
      "hint": "Notice that the numerator is the exact derivative of the denominator."
    },
    {
      "id": "W4-T2-Q03",
      "week": 4,
      "tier": "should",
      "topic": "Integration by Parts Trig",
      "type": "single_select",
      "question": "Evaluate the indefinite integral $\\int 2x \\sin(x) d x$ using integration by parts.",
      "options": [
        { "id": "W4-T2-Q03-opt0", "text": "$-2x\\cos(x) + 2\\sin(x) + c$" },
        { "id": "W4-T2-Q03-opt1", "text": "$2x\\cos(x) - 2\\sin(x) + c$" },
        { "id": "W4-T2-Q03-opt2", "text": "$-2x\\cos(x) - 2\\sin(x) + c$" },
        { "id": "W4-T2-Q03-opt3", "text": "$-x^2\\cos(x) + c$" }
      ],
      "correct_indices": ["W4-T2-Q03-opt0"],
      "explanation": "Let $u = 2x \\implies du = 2 dx$, and $dv = \\sin(x) dx \\implies v = -\\cos(x)$. Applying $\\int u dv = uv - \\int v du$:\n$-2x\\cos(x) - \\int -2\\cos(x) dx = -2x\\cos(x) + 2\\sin(x) + c$.",
      "hint": "Use LIATE to select $u = 2x$, and set the trigonometric term as $dv$."
    },
    {
      "id": "W4-T2-Q04",
      "week": 4,
      "tier": "should",
      "topic": "Integration by Parts Log",
      "type": "single_select",
      "question": "Evaluate $\\int x^2 \\ln(x) d x$ using integration by parts.",
      "options": [
        { "id": "W4-T2-Q04-opt0", "text": "$\\frac{x^3\\ln(x)}{3} - \\frac{x^3}{9} + c$" },
        { "id": "W4-T2-Q04-opt1", "text": "$\\frac{x^3\\ln(x)}{3} - \\frac{x^3}{3} + c$" },
        { "id": "W4-T2-Q04-opt2", "text": "$x^3\\ln(x) - x^3 + c$" },
        { "id": "W4-T2-Q04-opt3", "text": "$\\frac{x^3\\ln(x)}{3} - \\frac{x^2}{6} + c$" }
      ],
      "correct_indices": ["W4-T2-Q04-opt0"],
      "explanation": "Let $u = \\ln(x) \\implies du = 1/x dx$, and $dv = x^2 dx \\implies v = x^3/3$. By parts:\n$\\int x^2 \\ln(x) dx = \\frac{x^3\\ln(x)}{3} - \\int \\frac{x^3}{3} \\cdot \\frac{1}{x} dx = \\frac{x^3\\ln(x)}{3} - \\frac{1}{3} \\int x^2 dx = \\frac{x^3\\ln(x)}{3} - \\frac{x^3}{9} + c$.",
      "hint": "By LIATE, the logarithm takes priority for $u$, so set $u = \\ln(x)$ and $dv = x^2 dx$."
    },
    {
      "id": "W4-T2-Q05",
      "week": 4,
      "tier": "should",
      "topic": "Partial Fractions Decomposition",
      "type": "single_select",
      "question": "Use partial fractions to evaluate the integral $\\int \\frac{7}{(x+2)(x-3)} d x$.",
      "options": [
        { "id": "W4-T2-Q05-opt0", "text": "$\\frac{7}{5}\\ln\\left|\\frac{x-3}{x+2}\\right| + c$" },
        { "id": "W4-T2-Q05-opt1", "text": "$\\frac{7}{5}\\ln\\left|\\frac{x+2}{x-3}\\right| + c$" },
        { "id": "W4-T2-Q05-opt2", "text": "$\\frac{7}{5}\\ln|x-3| + \\frac{7}{5}\\ln|x+2| + c$" },
        { "id": "W4-T2-Q05-opt3", "text": "$7\\ln\\left|\\frac{x-3}{x+2}\\right| + c$" }
      ],
      "correct_indices": ["W4-T2-Q05-opt0"],
      "explanation": "Decompose $\\frac{7}{(x+2)(x-3)} = \\frac{A}{x+2} + \\frac{B}{x-3} \\implies 7 = A(x-3) + B(x+2)$.\nLetting $x = -2 \\implies A = -7/5$. Letting $x = 3 \\implies B = 7/5$. The integral is $\\int \\left(-\\frac{7/5}{x+2} + \\frac{7/5}{x-3}\\right) dx = \\frac{7}{5}\\ln|x-3| - \\frac{7}{5}\\ln|x+2| = \\frac{7}{5}\\ln\\left|\\frac{x-3}{x+2}\\right| + c$.",
      "hint": "Set up partial fractions, solve for constants $A$ and $B$, integrate, and combine the logarithms."
    },
    {
      "id": "W4-T2-Q06",
      "week": 4,
      "tier": "should",
      "topic": "Partial Fractions Quadratic Factor",
      "type": "single_select",
      "question": "Use partial fractions to evaluate $\\int \\frac{4x+1}{x^2-x-6} d x$.",
      "options": [
        { "id": "W4-T2-Q06-opt0", "text": "$\\frac{13}{5}\\ln|x-3| + \\frac{7}{5}\\ln|x+2| + c$" },
        { "id": "W4-T2-Q06-opt1", "text": "$\\frac{13}{5}\\ln|x-3| - \\frac{7}{5}\\ln|x+2| + c$" },
        { "id": "W4-T2-Q06-opt2", "text": "$13\\ln|x-3| + 7\\ln|x+2| + c$" },
        { "id": "W4-T2-Q06-opt3", "text": "$\\frac{7}{5}\\ln|x-3| + \\frac{13}{5}\\ln|x+2| + c$" }
      ],
      "correct_indices": ["W4-T2-Q06-opt0"],
      "explanation": "Factor denominator: $x^2-x-6 = (x-3)(x+2)$. Decompose $\\frac{4x+1}{(x-3)(x+2)} = \\frac{A}{x-3} + \\frac{B}{x+2} \\implies 4x+1 = A(x+2) + B(x-3)$.\n$x=3 \\implies 13 = 5A \\implies A=13/5$. $x=-2 \\implies -7 = -5B \\implies B=7/5$. Result: $\\frac{13}{5}\\ln|x-3| + \\frac{7}{5}\\ln|x+2| + c$.",
      "hint": "Factor the quadratic denominator first, decompose the integrand, and integrate using logarithms."
    },
    {
      "id": "W4-T2-Q07",
      "week": 4,
      "tier": "should",
      "topic": "Substitution Quadratic Argument",
      "type": "single_select",
      "question": "Identify the correct integration technique and evaluate $\\int x\\sqrt{x^2-4} d x$.",
      "options": [
        { "id": "W4-T2-Q07-opt0", "text": "$\\frac{(x^2-4)^{3/2}}{3} + c$" },
        { "id": "W4-T2-Q07-opt1", "text": "$\\frac{2(x^2-4)^{3/2}}{3} + c$" },
        { "id": "W4-T2-Q07-opt2", "text": "$\\frac{(x^2-4)^{3/2}}{6} + c$" },
        { "id": "W4-T2-Q07-opt3", "text": "$x^2 \\sqrt{x^2-4} + c$" }
      ],
      "correct_indices": ["W4-T2-Q07-opt0"],
      "explanation": "Use Substitution. Let $u = x^2-4 \\implies du = 2x dx \\implies x dx = du/2$. The integral is $\\int u^{1/2} \\frac{du}{2} = \\frac{1}{2} \\cdot \\frac{2}{3}u^{3/2} = \\frac{1}{3}(x^2-4)^{3/2} + c$.",
      "hint": "Notice that $x$ outside the radical is a multiple of the derivative of the inner term $x^2-4$."
    },
    {
      "id": "W4-T2-Q08",
      "week": 4,
      "tier": "should",
      "topic": "Integration by Parts Linear",
      "type": "single_select",
      "question": "Use integration by parts to evaluate $\\int (3x-2)e^{2x} d x$.",
      "options": [
        { "id": "W4-T2-Q08-opt0", "text": "$\\frac{e^{2x}(6x-7)}{4} + c$" },
        { "id": "W4-T2-Q08-opt1", "text": "$\\frac{e^{2x}(6x-5)}{4} + c$" },
        { "id": "W4-T2-Q08-opt2", "text": "$(3x-2)e^{2x} - 3e^{2x} + c$" },
        { "id": "W4-T2-Q08-opt3", "text": "$\\frac{e^{2x}(3x-2)}{2} + c$" }
      ],
      "correct_indices": ["W4-T2-Q08-opt0"],
      "explanation": "Let $u = 3x-2 \\implies du = 3 dx$, and $dv = e^{2x} dx \\implies v = e^{2x}/2$. By parts:\n$\\frac{(3x-2)e^{2x}}{2} - \\int \\frac{3e^{2x}}{2} dx = \\frac{(3x-2)e^{2x}}{2} - \\frac{3e^{2x}}{4} + c = e^{2x}\\left( \\frac{6x-4-3}{4} \\right) + c = \\frac{e^{2x}(6x-7)}{4} + c$.",
      "hint": "Set $u = 3x-2$ and $dv = e^{2x} dx$. Work out the algebraic simplification carefully at the end."
    },
    {
      "id": "W4-T2-Q09",
      "week": 4,
      "tier": "should",
      "topic": "Parts with Log and Negative Power",
      "type": "single_select",
      "question": "Evaluate the integral $\\int \\frac{\\ln(x)}{x^2} d x$ using integration by parts.",
      "options": [
        { "id": "W4-T2-Q09-opt0", "text": "$-\\frac{1+\\ln(x)}{x} + c$" },
        { "id": "W4-T2-Q09-opt1", "text": "$-\\frac{\\ln(x)-1}{x} + c$" },
        { "id": "W4-T2-Q09-opt2", "text": "$\\frac{1-\\ln(x)}{x} + c$" },
        { "id": "W4-T2-Q09-opt3", "text": "$-\\frac{\\ln(x)}{x} + c$" }
      ],
      "correct_indices": ["W4-T2-Q09-opt0"],
      "explanation": "Let $u = \\ln(x) \\implies du = 1/x dx$, and $dv = x^{-2} dx \\implies v = -x^{-1}$. By parts:\n$-\\frac{\\ln(x)}{x} - \\int -\\frac{1}{x^2} dx = -\\frac{\\ln(x)}{x} - \\frac{1}{x} + c = -\\frac{1+\\ln(x)}{x} + c$.",
      "hint": "Write the integrand as $x^{-2}\\ln(x)$. Choose $u = \\ln(x)$ and $dv = x^{-2}dx$."
    },
    {
      "id": "W4-T2-Q10",
      "week": 4,
      "tier": "should",
      "topic": "Kinematics Position Integration",
      "type": "single_select",
      "question": "The acceleration of a body is $a(t) = 12t^2 - 6$. If its initial velocity is $v(0) = 4$ and initial position is $s(0) = -2$, determine its position equation $s(t)$.",
      "options": [
        { "id": "W4-T2-Q10-opt0", "text": "$s(t) = t^4 - 3t^2 + 4t - 2$" },
        { "id": "W4-T2-Q10-opt1", "text": "$s(t) = 4t^3 - 6t + 4$" },
        { "id": "W4-T2-Q10-opt2", "text": "$s(t) = t^4 - 3t^2 + 4t$" },
        { "id": "W4-T2-Q10-opt3", "text": "$s(t) = t^4 - 6t^2 + 4t - 2$" }
      ],
      "correct_indices": ["W4-T2-Q10-opt0"],
      "explanation": "Integrate acceleration to find velocity: $v(t) = 4t^3 - 6t + c_1$. Since $v(0)=4$, $c_1=4$. Integrate velocity to find displacement: $s(t) = t^4 - 3t^2 + 4t + c_2$. Since $s(0)=-2$, $c_2=-2$. Result: $s(t) = t^4 - 3t^2 + 4t - 2$.",
      "hint": "Integrate acceleration twice, using the initial conditions at each step to determine the constants of integration."
    },
    {
      "id": "W4-T3-Q01",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Area Under Curve with Roots",
      "type": "single_select",
      "question": "Find the total geometric area enclosed by the curve $y = x^3 - 4x$ and the $x$-axis on the interval $[-2, 2]$.",
      "options": [
        { "id": "W4-T3-Q01-opt0", "text": "8" },
        { "id": "W4-T3-Q01-opt1", "text": "0" },
        { "id": "W4-T3-Q01-opt2", "text": "4" },
        { "id": "W4-T3-Q01-opt3", "text": "16" }
      ],
      "correct_indices": ["W4-T3-Q01-opt0"],
      "explanation": "The curve crosses the $x$-axis at $x = -2, 0, 2$. Area on $[-2,0]$ is positive: $\\int_{-2}^0 (x^3-4x) dx = [\\frac{x^4}{4}-2x^2]_{-2}^0 = 0 - (4-8) = 4$. Area on $[0,2]$ is negative: $\\int_0^2 (x^3-4x) dx = [\\frac{x^4}{4}-2x^2]_0^2 = (4-8)-0 = -4$. Total area is $|-4| + 4 = 8$.",
      "hint": "Calculate the area by integrating over two separate intervals $[-2, 0]$ and $[0, 2]$ to avoid cancellation."
    },
    {
      "id": "W4-T3-Q02",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Area Enclosed by Trigonometric Function",
      "type": "single_select",
      "question": "Find the total geometric area bounded by $y = \\cos(x)$ and the $x$-axis from $x=0$ to $x = 3\\pi/2$.",
      "options": [
        { "id": "W4-T3-Q02-opt0", "text": "3" },
        { "id": "W4-T3-Q02-opt1", "text": "1" },
        { "id": "W4-T3-Q02-opt2", "text": "-1" },
        { "id": "W4-T3-Q02-opt3", "text": "2" }
      ],
      "correct_indices": ["W4-T3-Q02-opt0"],
      "explanation": "The function is positive on $[0, \\pi/2]$ and negative on $[\\pi/2, 3\\pi/2]$.\nArea 1: $\\int_0^{\\pi/2} \\cos(x) dx = [\\sin x]_0^{\\pi/2} = 1$.\nArea 2: $\\int_\\pi/2^{3\\pi/2} \\cos(x) dx = [\\sin x]_{\\pi/2}^{3\\pi/2} = -1 - 1 = -2$. \nTotal area is $1 + |-2| = 3$.",
      "hint": "Analyze where the cosine curve drops below the $x$-axis and split the integration accordingly."
    },
    {
      "id": "W4-T3-Q03",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Area Between Two Curves",
      "type": "single_select",
      "question": "Calculate the area of the region bounded by the curves $y = 4-x^2$ and $y = x+2$.",
      "options": [
        { "id": "W4-T3-Q03-opt0", "text": "4.5" },
        { "id": "W4-T3-Q03-opt1", "text": "9" },
        { "id": "W4-T3-Q03-opt2", "text": "3.5" },
        { "id": "W4-T3-Q03-opt3", "text": "5.5" }
      ],
      "correct_indices": ["W4-T3-Q03-opt0"],
      "explanation": "Intersection points: $4-x^2 = x+2 \\implies x^2+x-2=0 \\implies (x+2)(x-1)=0$, so $x=-2$ and $x=1$. On $[-2,1]$, $4-x^2 \\geq x+2$. Area is $\\int_{-2}^1 (2 - x - x^2) dx = [2x - \\frac{x^2}{2} - \\frac{x^3}{3}]_{-2}^1 = (2 - 1/2 - 1/3) - (-4 - 2 + 8/3) = \\frac{7}{6} - (-\\frac{10}{3}) = \\frac{27}{6} = 4.5$.",
      "hint": "Equate the equations to find the integration bounds, then integrate the difference of the curves."
    },
    {
      "id": "W4-T3-Q04",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Work Done by Spring Force",
      "type": "single_select",
      "question": "A spring has force law $F(x) = 500x$ N. Calculate the work done to compress the spring by $0.08$ m from its equilibrium position.",
      "options": [
        { "id": "W4-T3-Q04-opt0", "text": "1.6 J" },
        { "id": "W4-T3-Q04-opt1", "text": "3.2 J" },
        { "id": "W4-T3-Q04-opt2", "text": "1.8 J" },
        { "id": "W4-T3-Q04-opt3", "text": "2.0 J" }
      ],
      "correct_indices": ["W4-T3-Q04-opt0"],
      "explanation": "Work done is $\\int_0^{0.08} 500x dx = [250x^2]_0^{0.08} = 250(0.0064) = 1.6$ J.",
      "hint": "Integrate the spring force function over the interval $[0, 0.08]$."
    },
    {
      "id": "W4-T3-Q05",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Incremental Work Done",
      "type": "single_select",
      "question": "For a spring with force law $F(x) = 500x$ N, calculate the additional work required to compress it from $0.08$ m to $0.12$ m.",
      "options": [
        { "id": "W4-T3-Q05-opt0", "text": "2.0 J" },
        { "id": "W4-T3-Q05-opt1", "text": "3.6 J" },
        { "id": "W4-T3-Q05-opt2", "text": "1.6 J" },
        { "id": "W4-T3-Q05-opt3", "text": "1.0 J" }
      ],
      "correct_indices": ["W4-T3-Q05-opt0"],
      "explanation": "Incremental work is $\\int_{0.08}^{0.12} 500x dx = [250x^2]_{0.08}^{0.12} = 250(0.0144 - 0.0064) = 250(0.008) = 2.0$ J.",
      "hint": "Integrate the force function from the lower limit of $0.08$ to the upper limit of $0.12$."
    },
    {
      "id": "W4-T3-Q06",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Centre of Mass Area",
      "type": "single_select",
      "question": "Find the total area of the region bounded by $y = \\sqrt{x}$ and the $x$-axis from $x=0$ to $x=4$ (used for calculating the centroid).",
      "options": [
        { "id": "W4-T3-Q06-opt0", "text": "16/3" },
        { "id": "W4-T3-Q06-opt1", "text": "8/3" },
        { "id": "W4-T3-Q06-opt2", "text": "4" },
        { "id": "W4-T3-Q06-opt3", "text": "32/5" }
      ],
      "correct_indices": ["W4-T3-Q06-opt0"],
      "explanation": "Area is $\\int_0^4 x^{1/2} dx = [\\frac{2}{3}x^{3/2}]_0^4 = \\frac{2}{3}(8) - 0 = 16/3$.",
      "hint": "Integrate $x^{1/2}$ over the interval $[0, 4]$."
    },
    {
      "id": "W4-T3-Q07",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Centre of Mass X Coordinate",
      "type": "single_select",
      "question": "Calculate the $x$-coordinate $(\\bar{x})$ of the centroid of the region bounded by $y=\\sqrt{x}$ and the $x$-axis from $x=0$ to $x=4$.",
      "options": [
        { "id": "W4-T3-Q07-opt0", "text": "2.4" },
        { "id": "W4-T3-Q07-opt1", "text": "2.0" },
        { "id": "W4-T3-Q07-opt2", "text": "2.5" },
        { "id": "W4-T3-Q07-opt3", "text": "1.8" }
      ],
      "correct_indices": ["W4-T3-Q07-opt0"],
      "explanation": "Recall $\\bar{x} = \\frac{1}{A} \\int_0^4 x y dx$. Here, $\\int_0^4 x \\sqrt{x} dx = \\int_0^4 x^{3/2} dx = [\\frac{2}{5}x^{5/2}]_0^4 = \\frac{2}{5}(32) = 64/5$. With $A = 16/3$, $\\bar{x} = \\frac{64/5}{16/3} = 12/5 = 2.4$.",
      "hint": "Evaluate the integral of $x\\cdot y(x)$ from 0 to 4, and divide by the total area ($16/3$)."
    },
    {
      "id": "W4-T3-Q08",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Centre of Mass Y Coordinate",
      "type": "single_select",
      "question": "Calculate the $y$-coordinate $(\\bar{y})$ of the centroid of the region bounded by $y=\\sqrt{x}$ and the $x$-axis from $x=0$ to $x=4$.",
      "options": [
        { "id": "W4-T3-Q08-opt0", "text": "0.75" },
        { "id": "W4-T3-Q08-opt1", "text": "0.5" },
        { "id": "W4-T3-Q08-opt2", "text": "1.0" },
        { "id": "W4-T3-Q08-opt3", "text": "0.6" }
      ],
      "correct_indices": ["W4-T3-Q08-opt0"],
      "explanation": "Recall $\\bar{y} = \\frac{1}{A} \\int_0^4 \\frac{y^2}{2} dx$. Here, $\\int_0^4 \\frac{x}{2} dx = [\\frac{x^2}{4}]_0^4 = 4$. With $A = 16/3$, $\\bar{y} = \\frac{4}{16/3} = 3/4 = 0.75$.",
      "hint": "Evaluate the integral of $\\frac{1}{2}y(x)^2$ from 0 to 4, and divide by the total area ($16/3$)."
    },
    {
      "id": "W4-T3-Q09",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Definite Integral Substitution Bounds",
      "type": "single_select",
      "question": "Evaluate the definite integral $\\int_0^1 x e^{-x^2} d x$.",
      "options": [
        { "id": "W4-T3-Q09-opt0", "text": "$\\frac{1 - e^{-1}}{2}$" },
        { "id": "W4-T3-Q09-opt1", "text": "$1 - e^{-1}$" },
        { "id": "W4-T3-Q09-opt2", "text": "$\\frac{e - 1}{2}$" },
        { "id": "W4-T3-Q09-opt3", "text": "$-\\frac{e^{-1}}{2}$" }
      ],
      "correct_indices": ["W4-T3-Q09-opt0"],
      "explanation": "Let $u = -x^2 \\implies du = -2x dx \\implies x dx = -du/2$. Bounds: $x=0 \\implies u=0$, $x=1 \\implies u=-1$.\n$\\int_0^{-1} e^u \\left(-\\frac{du}{2}\\right) = \\frac{1}{2} \\int_{-1}^0 e^u du = \\frac{1}{2}[e^u]_{-1}^0 = \\frac{1}{2}(1 - e^{-1})$.",
      "hint": "Use $u = -x^2$ substitution, and remember to transform the upper and lower integration bounds."
    },
    {
      "id": "W4-T3-Q10",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Partial Fractions repeated linear factor",
      "type": "single_select",
      "question": "Identify the partial fraction decomposition template for the rational function $\\frac{5x^2+6x+2}{(x+1)^2(x-1)}$.",
      "options": [
        { "id": "W4-T3-Q10-opt0", "text": "$\\frac{A}{x+1} + \\frac{B}{(x+1)^2} + \\frac{C}{x-1}$" },
        { "id": "W4-T3-Q10-opt1", "text": "$\\frac{A}{x+1} + \\frac{B}{x-1}$" },
        { "id": "W4-T3-Q10-opt2", "text": "$\\frac{Ax+B}{(x+1)^2} + \\frac{C}{x-1}$" },
        { "id": "W4-T3-Q10-opt3", "text": "$\\frac{A}{x+1} + \\frac{B(2x)}{(x+1)^2} + \\frac{C}{x-1}$" }
      ],
      "correct_indices": ["W4-T3-Q10-opt0"],
      "explanation": "Since $(x+1)^2$ is a repeated linear factor, its decomposition requires terms for each power of the factor up to its multiplicity: $\\frac{A}{x+1}$ and $\\frac{B}{(x+1)^2}$. Adding the simple linear factor gives the correct template.",
      "hint": "A repeated linear factor of multiplicity 2 requires two separate fraction terms with linear numerators."
    },
    {
      "id": "W4-T4-Q01",
      "week": 4,
      "tier": "extra",
      "topic": "Oscillation Integration by Parts",
      "type": "single_select",
      "question": "Evaluate the definite integral $\\int_0^{\\pi/2} e^{2x} \\sin(x) d x$ using double integration by parts.",
      "options": [
        { "id": "W4-T4-Q01-opt0", "text": "$\\frac{2e^{\\pi} + 1}{5}$" },
        { "id": "W4-T4-Q01-opt1", "text": "$\\frac{2e^{\\pi} - 1}{5}$" },
        { "id": "W4-T4-Q01-opt2", "text": "$\\frac{e^{\\pi} + 2}{5}$" },
        { "id": "W4-T4-Q01-opt3", "text": "$e^{\\pi} - 1$" }
      ],
      "correct_indices": ["W4-T4-Q01-opt0"],
      "explanation": "Integrating by parts twice yields the equation $I = \\frac{e^{\\pi}}{2} + \\frac{1}{4} - \\frac{I}{4}$ where $I = \\int_0^{\\pi/2} e^{2x}\\sin(x) dx$.\nRearranging: $\\frac{5}{4}I = \\frac{2e^{\\pi} + 1}{4} \\implies I = \\frac{2e^{\\pi}+1}{5}$.",
      "hint": "Differentiate $\\sin(x)$ and integrate $e^{2x}$ twice to form a loop equation for the integral $I$."
    },
    {
      "id": "W4-T4-Q02",
      "week": 4,
      "tier": "extra",
      "topic": "Gas Expansion Work Done",
      "type": "single_select",
      "question": "A piston compresses gas with force law $F(x) = \\frac{P_0 V_0}{V_0 + Ax}$. Calculate the work done in compressing the gas from $x=0$ to $x=L$.",
      "options": [
        { "id": "W4-T4-Q02-opt0", "text": "$\\frac{P_0 V_0}{A} \\ln\\left( 1 + \\frac{AL}{V_0} \\right)$" },
        { "id": "W4-T4-Q02-opt1", "text": "$P_0 V_0 \\ln\\left( 1 + \\frac{AL}{V_0} \\right)$" },
        { "id": "W4-T4-Q02-opt2", "text": "$\\frac{P_0 V_0}{A} \\ln(V_0 + AL)$" },
        { "id": "W4-T4-Q02-opt3", "text": "$\\frac{P_0 V_0 L}{V_0 + AL}$" }
      ],
      "correct_indices": ["W4-T4-Q02-opt0"],
      "explanation": "Work is $\\int_0^L \\frac{P_0 V_0}{V_0 + Ax} dx$. Let $u = V_0 + Ax \\implies du = A dx$.\n$W = \\frac{P_0 V_0}{A} [\\ln(V_0 + Ax)]_0^L = \\frac{P_0 V_0}{A} (\\ln(V_0 + AL) - \\ln(V_0)) = \\frac{P_0 V_0}{A} \\ln\\left(\\frac{V_0+AL}{V_0}\\right) = \\frac{P_0 V_0}{A}\\ln\\left(1 + \\frac{AL}{V_0}\\right)$.",
      "hint": "Use $u = V_0 + Ax$ substitution to integrate this reciprocal function, and combine the resulting logarithm terms."
    },
    {
      "id": "W4-T4-Q03",
      "week": 4,
      "tier": "extra",
      "topic": "Partial Fractions Definite Integral",
      "type": "single_select",
      "question": "Evaluate the definite integral $\\int_0^3 \\frac{1}{x^2+3x+2} d x$ using partial fractions.",
      "options": [
        { "id": "W4-T4-Q03-opt0", "text": "$\\ln\\left(\\frac{8}{5}\\right)$" },
        { "id": "W4-T4-Q03-opt1", "text": "$\\ln\\left(\\frac{4}{5}\\right)$" },
        { "id": "W4-T4-Q03-opt2", "text": "$\\ln(2)$" },
        { "id": "W4-T4-Q03-opt3", "text": "$\\ln\\left(\\frac{5}{8}\\right)$" }
      ],
      "correct_indices": ["W4-T4-Q03-opt0"],
      "explanation": "Factor denominator: $x^2+3x+2 = (x+1)(x+2)$. Decompose: $\\frac{1}{(x+1)(x+2)} = \\frac{1}{x+1} - \\frac{1}{x+2}$.\nIntegral: $[\\ln\\left|\\frac{x+1}{x+2}\\right|]_0^3 = \\ln(4/5) - \\ln(1/2) = \\ln(4/5 \\cdot 2) = \\ln(8/5)$.",
      "hint": "Factor the quadratic term, decompose into simple partial fractions, integrate to logarithms, and apply upper and lower limits."
    },
    {
      "id": "W4-T4-Q04",
      "week": 4,
      "tier": "extra",
      "topic": "Partial Fractions Repeated Linear",
      "type": "single_select",
      "question": "Evaluate the indefinite integral $\\int \\frac{5x^2+6x+2}{(x+1)^2(x-1)} d x$.",
      "options": [
        { "id": "W4-T4-Q04-opt0", "text": "$\\frac{7}{4}\\ln|x+1| + \\frac{1}{2(x+1)} + \\frac{13}{4}\\ln|x-1| + c$" },
        { "id": "W4-T4-Q04-opt1", "text": "$\\frac{7}{4}\\ln|x+1| - \\frac{1}{2(x+1)} + \\frac{13}{4}\\ln|x-1| + c$" },
        { "id": "W4-T4-Q04-opt2", "text": "$\\frac{7}{4}\\ln|x+1| + \\frac{13}{4}\\ln|x-1| + c$" },
        { "id": "W4-T4-Q04-opt3", "text": "$-\\frac{1}{2(x+1)} + \\frac{13}{4}\\ln\\left|\\frac{x-1}{x+1}\\right| + c$" }
      ],
      "correct_indices": ["W4-T4-Q04-opt0"],
      "explanation": "Decompose $\\frac{A}{x+1} + \\frac{B}{(x+1)^2} + \\frac{C}{x-1} \\implies 5x^2+6x+2 = A(x+1)(x-1) + B(x-1) + C(x+1)^2$.\n$x=1 \\implies 13 = 4C \\implies C = 13/4$.\n$x=-1 \\implies 1 = -2B \\implies B = -1/2$.\n$x^2$ coeff: $5 = A+C \\implies A = 5 - 13/4 = 7/4$.\nIntegrating: $\\frac{7}{4}\\ln|x+1| - \\frac{1}{2}\\frac{(x+1)^{-1}}{-1} + \\frac{13}{4}\\ln|x-1| = \\frac{7}{4}\\ln|x+1| + \\frac{1}{2(x+1)} + \\frac{13}{4}\\ln|x-1| + c$.",
      "hint": "Identify the constants $A$, $B$, and $C$, then integrate $\\frac{1}{(x+1)^2}$ as a power function $(x+1)^{-2}$."
    },
    {
      "id": "W4-T4-Q05",
      "week": 4,
      "tier": "extra",
      "topic": "Parts loop calculation",
      "type": "single_select",
      "question": "What is the standard name of the technique where integration by parts is applied twice to return to a multiple of the original integral?",
      "options": [
        { "id": "W4-T4-Q05-opt0", "text": "Looping integration (solving for the integral)" },
        { "id": "W4-T4-Q05-opt1", "text": "Logarithmic reduction" },
        { "id": "W4-T4-Q05-opt2", "text": "Integration by algebraic recurrence" },
        { "id": "W4-T4-Q05-opt3", "text": "Improper convergence" }
      ],
      "correct_indices": ["W4-T4-Q05-opt0"],
      "explanation": "This is known as looping integration (or recursive/circular integration by parts), where you solve for the unknown integral algebraically.",
      "hint": "This technique is commonly used for integrals containing products of exponentials and sines/cosines."
    },
    {
      "id": "W4-T4-Q06",
      "week": 4,
      "tier": "extra",
      "topic": "Integration by Parts Double Application",
      "type": "single_select",
      "question": "Evaluate the indefinite integral $\\int x^2 e^{-x} d x$ using double integration by parts.",
      "options": [
        { "id": "W4-T4-Q06-opt0", "text": "$-e^{-x}(x^2 + 2x + 2) + c$" },
        { "id": "W4-T4-Q06-opt1", "text": "$-e^{-x}(x^2 - 2x + 2) + c$" },
        { "id": "W4-T4-Q06-opt2", "text": "$-x^2 e^{-x} + c$" },
        { "id": "W4-T4-Q06-opt3", "text": "$e^{-x}(x^2 + 2x) + c$" }
      ],
      "correct_indices": ["W4-T4-Q06-opt0"],
      "explanation": "First application: $u=x^2 \\implies du=2xdx$, $dv=e^{-x}dx \\implies v=-e^{-x}$. Gives $-x^2 e^{-x} + 2\\int x e^{-x} dx$.\nSecond application: $u=x \\implies du=dx$, $dv=e^{-x}dx \\implies v=-e^{-x}$. Gives $-xe^{-x} - e^{-x}$.\nCombining: $-x^2 e^{-x} + 2(-xe^{-x} - e^{-x}) = -e^{-x}(x^2 + 2x + 2) + c$.",
      "hint": "Apply LIATE twice to reduce the power of $x$ to a constant."
    },
    {
      "id": "W4-T4-Q07",
      "week": 4,
      "tier": "extra",
      "topic": "Integration of Odd Function",
      "type": "single_select",
      "question": "Evaluate the definite integral $\\int_{-\\pi}^{\\pi} x^2 \\sin(x) d x$ by analyzing properties.",
      "options": [
        { "id": "W4-T4-Q07-opt0", "text": "0" },
        { "id": "W4-T4-Q07-opt1", "text": "$2\\pi^2$" },
        { "id": "W4-T4-Q07-opt2", "text": "$-\\pi^2$" },
        { "id": "W4-T4-Q07-opt3", "text": "$1$" }
      ],
      "correct_indices": ["W4-T4-Q07-opt0"],
      "explanation": "The integrand $f(x) = x^2 \\sin(x)$ is an odd function because $f(-x) = (-x)^2 \\sin(-x) = -x^2 \\sin(x) = -f(x)$. The integral of any odd function over a symmetric interval $[-a, a]$ is exactly zero.",
      "hint": "Determine whether the integrand is an even or odd function, and check the limits of integration."
    },
    {
      "id": "W4-T4-Q08",
      "week": 4,
      "tier": "extra",
      "topic": "Definite Integral Trigonometric Identity",
      "type": "single_select",
      "question": "Evaluate the definite integral $\\int_0^{\\pi/2} \\cos(2x) d x$.",
      "options": [
        { "id": "W4-T4-Q08-opt0", "text": "0" },
        { "id": "W4-T4-Q08-opt1", "text": "1" },
        { "id": "W4-T4-Q08-opt2", "text": "0.5" },
        { "id": "W4-T4-Q08-opt3", "text": "-1" }
      ],
      "correct_indices": ["W4-T4-Q08-opt0"],
      "explanation": "Antiderivative is $\\frac{\\sin(2x)}{2}$. Evaluating: $[\\frac{\\sin(2x)}{2}]_0^{\\pi/2} = \\frac{\\sin(\\pi) - \\sin(0)}{2} = 0$.",
      "hint": "Find the antiderivative, and evaluate at $\\pi/2$ (giving $\\sin(\\pi)$) and $0$."
    },
    {
      "id": "W4-T4-Q09",
      "week": 4,
      "tier": "extra",
      "topic": "Average Value of Function",
      "type": "single_select",
      "question": "The average value of a function $f(x)$ on $[a, b]$ is defined as $f_{\\text{ave}} = \\frac{1}{b-a} \\int_a^b f(x) dx$. Find the average value of $f(x) = 3x^2$ on the interval $[1, 3]$.",
      "options": [
        { "id": "W4-T4-Q09-opt0", "text": "13" },
        { "id": "W4-T4-Q09-opt1", "text": "26" },
        { "id": "W4-T4-Q09-opt2", "text": "39" },
        { "id": "W4-T4-Q09-opt3", "text": "6.5" }
      ],
      "correct_indices": ["W4-T4-Q09-opt0"],
      "explanation": "The integral is $\\int_1^3 3x^2 dx = [x^3]_1^3 = 27 - 1 = 26$. The interval length is $3 - 1 = 2$. Thus, $f_{\\text{ave}} = 26 / 2 = 13$.",
      "hint": "Integrate the function over $[1, 3]$ and divide by the width of the interval."
    },
    {
      "id": "W4-T4-Q10",
      "week": 4,
      "tier": "extra",
      "topic": "Centroid of Semicircle",
      "type": "single_select",
      "question": "Find the area of the region bounded by a semicircle $y = \\sqrt{9-x^2}$ and the $x$-axis (from $x=-3$ to $x=3$).",
      "options": [
        { "id": "W4-T4-Q10-opt0", "text": "$4.5\\pi$" },
        { "id": "W4-T4-Q10-opt1", "text": "$9\\pi$" },
        { "id": "W4-T4-Q10-opt2", "text": "$3\\pi$" },
        { "id": "W4-T4-Q10-opt3", "text": "$18$" }
      ],
      "correct_indices": ["W4-T4-Q10-opt0"],
      "explanation": "The region is a semicircle of radius $r=3$. The area is $\\frac{1}{2} \\pi r^2 = \\frac{1}{2} \\pi (9) = 4.5\\pi$.",
      "hint": "Identify the shape geometrically; it is a half-circle of radius 3."
    }
  ]
};
