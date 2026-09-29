window.QUIZ_BANK_WEEK2 = {
  "module": "4014SCN Calculus and Applications",
  "week": 2,
  "title": "Week 2 Quiz Bank: Integration Toolbox & Numerical Integration",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W2-T1-Q01",
      "week": 2,
      "tier": "core",
      "topic": "Fundamental Antiderivatives",
      "type": "single_select",
      "question": "What is the indefinite integral $\\int (6x^2 - 4x + 5) \\, dx$?",
      "options": [
        {
          "id": "W2-T1-Q01-opt0",
          "text": "$2x^3 - 2x^2 + 5x + C$"
        },
        {
          "id": "W2-T1-Q01-opt1",
          "text": "$12x - 4 + C$"
        },
        {
          "id": "W2-T1-Q01-opt2",
          "text": "$3x^3 - 4x^2 + 5x + C$"
        },
        {
          "id": "W2-T1-Q01-opt3",
          "text": "$2x^3 - 4x^2 + 5x + C$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q01-opt0"
      ],
      "explanation": "Integrating term-by-term: $\\int 6x^2 dx = 2x^3$, $\\int -4x dx = -2x^2$, $\\int 5 dx = 5x$. Adding constant $C$ yields $2x^3 - 2x^2 + 5x + C$.",
      "hint": "Integrate term-by-term using $\\int ax^n dx = \\frac{ax^{n+1}}{n+1}$. Don't forget the constant of integration $C$. Watch the coefficients: $\\int 6x^2 dx = \\frac{6x^3}{3} = 2x^3$."
    },
    {
      "id": "W2-T1-Q02",
      "week": 2,
      "tier": "core",
      "topic": "Fundamental Theorem of Calculus",
      "type": "single_select",
      "question": "Evaluate the definite integral $\\int_{1}^{3} (3x^2 - 2) \\, dx$.",
      "options": [
        {
          "id": "W2-T1-Q02-opt0",
          "text": "$22$"
        },
        {
          "id": "W2-T1-Q02-opt1",
          "text": "$24$"
        },
        {
          "id": "W2-T1-Q02-opt2",
          "text": "$26$"
        },
        {
          "id": "W2-T1-Q02-opt3",
          "text": "$20$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q02-opt0"
      ],
      "explanation": "Antiderivative $F(x) = x^3 - 2x$. By FTC: $F(3) - F(1) = (3^3 - 2(3)) - (1^3 - 2(1)) = (27 - 6) - (1 - 2) = 21 - (-1) = 22$.",
      "hint": "Find the antiderivative $F(x)$ first, then apply the FTC: answer $= F(3) - F(1)$. The antiderivative of $3x^2$ is $x^3$ and the antiderivative of $-2$ is $-2x$."
    },
    {
      "id": "W2-T1-Q03",
      "week": 2,
      "tier": "core",
      "topic": "Integration by Substitution",
      "type": "single_select",
      "question": "Find $\\int 2x e^{x^2} \\, dx$.",
      "options": [
        {
          "id": "W2-T1-Q03-opt0",
          "text": "$e^{x^2} + C$"
        },
        {
          "id": "W2-T1-Q03-opt1",
          "text": "$2e^{x^2} + C$"
        },
        {
          "id": "W2-T1-Q03-opt2",
          "text": "$\\frac{1}{2}e^{x^2} + C$"
        },
        {
          "id": "W2-T1-Q03-opt3",
          "text": "$x^2 e^{x^2} + C$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q03-opt0"
      ],
      "explanation": "Let $u = x^2 \\implies du = 2x dx$. Substituting gives $\\int e^u du = e^u + C = e^{x^2} + C$.",
      "hint": "Look for a function and its derivative inside the integrand. Here $2x$ is the derivative of $x^2$. Let $u = x^2$ and rewrite $du = 2x\\,dx$."
    },
    {
      "id": "W2-T1-Q04",
      "week": 2,
      "tier": "core",
      "topic": "Integration by Parts",
      "type": "single_select",
      "question": "Evaluate $\\int x \\cos(x) \\, dx$.",
      "options": [
        {
          "id": "W2-T1-Q04-opt0",
          "text": "$x \\sin(x) + \\cos(x) + C$"
        },
        {
          "id": "W2-T1-Q04-opt1",
          "text": "$x \\sin(x) - \\cos(x) + C$"
        },
        {
          "id": "W2-T1-Q04-opt2",
          "text": "$-x \\sin(x) + \\cos(x) + C$"
        },
        {
          "id": "W2-T1-Q04-opt3",
          "text": "$\\sin(x) + x \\cos(x) + C$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q04-opt0"
      ],
      "explanation": "Let $u = x \\implies du = dx$ and $dv = \\cos(x)dx \\implies v = \\sin(x)$. Formula $\\int u dv = uv - \\int v du = x\\sin(x) - \\int \\sin(x)dx = x\\sin(x) + \\cos(x) + C$.",
      "hint": "Use integration by parts $\\int u\\,dv = uv - \\int v\\,du$ with $u = x$ (simplifies on differentiation) and $dv = \\cos(x)dx$ (integratable). Then handle $\\int v\\,du$."
    },
    {
      "id": "W2-T1-Q05",
      "week": 2,
      "tier": "core",
      "topic": "Area Between Curves",
      "type": "single_select",
      "question": "What is the area bounded between $y = x^2$ and $y = x$ from $x = 0$ to $x = 1$?",
      "options": [
        {
          "id": "W2-T1-Q05-opt0",
          "text": "$\\frac{1}{6}$"
        },
        {
          "id": "W2-T1-Q05-opt1",
          "text": "$\\frac{1}{3}$"
        },
        {
          "id": "W2-T1-Q05-opt2",
          "text": "$\\frac{1}{2}$"
        },
        {
          "id": "W2-T1-Q05-opt3",
          "text": "$\\frac{1}{4}$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q05-opt0"
      ],
      "explanation": "On $[0,1]$, $x \\ge x^2$. Area = $\\int_0^1 (x - x^2) dx = \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.",
      "hint": "On $[0,1]$, which function is on top: $y = x$ or $y = x^2$? The area is the integral of (top − bottom). Find $\\int_0^1 (x - x^2)dx$."
    },
    {
      "id": "W2-T1-Q06",
      "week": 2,
      "tier": "core",
      "topic": "Trapezoidal Rule Formula",
      "type": "single_select",
      "question": "For interval $[a,b]$ divided into $n$ subintervals of step size $h = \\frac{b-a}{n}$, what is the Trapezoidal Rule approximation formula $T_n$?",
      "options": [
        {
          "id": "W2-T1-Q06-opt0",
          "text": "$\\frac{h}{2} \\left[ f(x_0) + 2f(x_1) + 2f(x_2) + \\dots + 2f(x_{n-1}) + f(x_n) \\right]$"
        },
        {
          "id": "W2-T1-Q06-opt1",
          "text": "$h \\left[ f(x_0) + f(x_1) + \\dots + f(x_n) \\right]$"
        },
        {
          "id": "W2-T1-Q06-opt2",
          "text": "$\\frac{h}{3} \\left[ f(x_0) + 4f(x_1) + 2f(x_2) + \\dots + f(x_n) \\right]$"
        },
        {
          "id": "W2-T1-Q06-opt3",
          "text": "$\\frac{h}{2} \\left[ f(x_0) + f(x_n) \\right]$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q06-opt0"
      ],
      "explanation": "The Trapezoidal Rule weights the endpoints by $1$ and all interior ordinates by $2$, multiplied by $\\frac{h}{2}$.",
      "hint": "The Trapezoidal Rule assigns weight $1$ to the first and last function values, and weight $2$ to all intermediate values, before multiplying by $h/2$. Which option matches this pattern?"
    },
    {
      "id": "W2-T1-Q07",
      "week": 2,
      "tier": "core",
      "topic": "Type 1 Improper Integrals",
      "type": "single_select",
      "question": "Evaluate the improper integral $\\int_{1}^{\\infty} \\frac{1}{x^2} \\, dx$.",
      "options": [
        {
          "id": "W2-T1-Q07-opt0",
          "text": "$1$"
        },
        {
          "id": "W2-T1-Q07-opt1",
          "text": "$\\infty$ (Divergent)"
        },
        {
          "id": "W2-T1-Q07-opt2",
          "text": "$0$"
        },
        {
          "id": "W2-T1-Q07-opt3",
          "text": "$2$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q07-opt0"
      ],
      "explanation": "$\\lim_{t \\to \\infty} \\int_1^t x^{-2} dx = \\lim_{t \\to \\infty} \\left[ -\\frac{1}{x} \\right]_1^t = \\lim_{t \\to \\infty} \\left( -\\frac{1}{t} + 1 \\right) = 0 + 1 = 1$ (Converges).",
      "hint": "Replace the infinite upper limit with $t$ and take the limit as $t \\to \\infty$. The antiderivative of $x^{-2}$ is $-x^{-1}$. Does the limit converge?"
    },
    {
      "id": "W2-T1-Q08",
      "week": 2,
      "tier": "core",
      "topic": "Logarithmic Integration Rule",
      "type": "single_select",
      "question": "Evaluate $\\int \\frac{3x^2}{x^3 + 4} \\, dx$.",
      "options": [
        {
          "id": "W2-T1-Q08-opt0",
          "text": "$\\ln|x^3 + 4| + C$"
        },
        {
          "id": "W2-T1-Q08-opt1",
          "text": "$\\frac{1}{x^3 + 4} + C$"
        },
        {
          "id": "W2-T1-Q08-opt2",
          "text": "$3\\ln|x^3 + 4| + C$"
        },
        {
          "id": "W2-T1-Q08-opt3",
          "text": "$\\ln|3x^2| + C$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q08-opt0"
      ],
      "explanation": "Using $\\int \\frac{g'(x)}{g(x)} dx = \\ln|g(x)| + C$: numerator $3x^2$ is the exact derivative of denominator $x^3+4$. Result: $\\ln|x^3+4|+C$.",
      "hint": "Notice that the numerator $3x^2$ is exactly the derivative of the denominator $x^3 + 4$. Apply the log integral rule $\\int \\frac{g'(x)}{g(x)}dx = \\ln|g(x)| + C$."
    },
    {
      "id": "W2-T1-Q09",
      "week": 2,
      "tier": "core",
      "topic": "Elementary Integration Rules",
      "type": "multiple_select",
      "question": "Select ALL valid standard integration formulas below:",
      "options": [
        {
          "id": "W2-T1-Q09-opt0",
          "text": "$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ for $n \\neq -1$"
        },
        {
          "id": "W2-T1-Q09-opt1",
          "text": "$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$"
        },
        {
          "id": "W2-T1-Q09-opt2",
          "text": "$\\int e^{kx} \\, dx = \\frac{1}{k}e^{kx} + C$ ($k \\neq 0$)"
        },
        {
          "id": "W2-T1-Q09-opt3",
          "text": "$\\int \\sin(x) \\, dx = \\cos(x) + C$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q09-opt0",
        "W2-T1-Q09-opt1",
        "W2-T1-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are correct elementary integrals. Option 4 is incorrect because $\\int \\sin(x) dx = -\\cos(x) + C$.",
      "hint": "What is the correct antiderivative of $\\sin(x)$? Compare with the derivative $\\frac{d}{dx}(-\\cos x) = \\sin x$. One option has the wrong sign."
    },
    {
      "id": "W2-T1-Q10",
      "week": 2,
      "tier": "core",
      "topic": "Definite Integral Properties",
      "type": "multiple_select",
      "question": "Which of the following definite integral properties are CORRECT? (Select all that apply)",
      "options": [
        {
          "id": "W2-T1-Q10-opt0",
          "text": "$\\int_{a}^{b} f(x) \\, dx = -\\int_{b}^{a} f(x) \\, dx$"
        },
        {
          "id": "W2-T1-Q10-opt1",
          "text": "$\\int_{a}^{a} f(x) \\, dx = 0$"
        },
        {
          "id": "W2-T1-Q10-opt2",
          "text": "$\\int_{a}^{b} [f(x) + g(x)] \\, dx = \\int_{a}^{b} f(x) \\, dx + \\int_{a}^{b} g(x) \\, dx$"
        },
        {
          "id": "W2-T1-Q10-opt3",
          "text": "$\\int_{a}^{b} f(x) g(x) \\, dx = \\left(\\int_{a}^{b} f(x) dx\\right) \\left(\\int_{a}^{b} g(x) dx\\right)$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q10-opt0",
        "W2-T1-Q10-opt1",
        "W2-T1-Q10-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are fundamental linearity and limit properties. Option 4 is false (integral of product is NOT product of integrals).",
      "hint": "Option 4 claims the integral of a product equals the product of integrals. Can you think of a simple counterexample to test this?"
    },
    {
      "id": "W2-T2-Q01",
      "week": 2,
      "tier": "should",
      "topic": "Repeated Integration by Parts",
      "type": "single_select",
      "question": "Evaluate $\\int x^2 e^x \\, dx$.",
      "options": [
        {
          "id": "W2-T2-Q01-opt0",
          "text": "$e^x(x^2 - 2x + 2) + C$"
        },
        {
          "id": "W2-T2-Q01-opt1",
          "text": "$e^x(x^2 + 2x + 2) + C$"
        },
        {
          "id": "W2-T2-Q01-opt2",
          "text": "$x^2 e^x - 2x e^x + C$"
        },
        {
          "id": "W2-T2-Q01-opt3",
          "text": "$e^x(x^2 - 2) + C$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q01-opt0"
      ],
      "explanation": "Applying IBP twice: $\\int x^2 e^x dx = x^2 e^x - 2 \\int x e^x dx = x^2 e^x - 2(x e^x - e^x) + C = e^x(x^2 - 2x + 2) + C$.",
      "hint": "Apply integration by parts twice. First with $u = x^2$, then with $u = x$ on the remaining integral. Collect all terms at the end."
    },
    {
      "id": "W2-T2-Q02",
      "week": 2,
      "tier": "should",
      "topic": "Partial Fractions (Distinct Linear)",
      "type": "single_select",
      "question": "Evaluate $\\int \\frac{1}{x^2 - 1} \\, dx$.",
      "options": [
        {
          "id": "W2-T2-Q02-opt0",
          "text": "$\\frac{1}{2} \\ln\\left|\\frac{x-1}{x+1}\\right| + C$"
        },
        {
          "id": "W2-T2-Q02-opt1",
          "text": "$\\frac{1}{2} \\ln\\left|\\frac{x+1}{x-1}\\right| + C$"
        },
        {
          "id": "W2-T2-Q02-opt2",
          "text": "$\\ln|x^2 - 1| + C$"
        },
        {
          "id": "W2-T2-Q02-opt3",
          "text": "$\\arctan(x) + C$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q02-opt0"
      ],
      "explanation": "Decompose $\\frac{1}{(x-1)(x+1)} = \\frac{1/2}{x-1} - \\frac{1/2}{x+1}$. Integrating gives $\\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C = \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right|+C$.",
      "hint": "Factor the denominator: $x^2 - 1 = (x-1)(x+1)$. Decompose as $\\frac{A}{x-1} + \\frac{B}{x+1}$, find $A$ and $B$ by multiplying through and equating coefficients."
    },
    {
      "id": "W2-T2-Q03",
      "week": 2,
      "tier": "should",
      "topic": "Trigonometric Integrals",
      "type": "single_select",
      "question": "Evaluate $\\int \\sin^3(x) \\, dx$.",
      "options": [
        {
          "id": "W2-T2-Q03-opt0",
          "text": "$-\\cos(x) + \\frac{\\cos^3(x)}{3} + C$"
        },
        {
          "id": "W2-T2-Q03-opt1",
          "text": "$\\cos(x) - \\frac{\\cos^3(x)}{3} + C$"
        },
        {
          "id": "W2-T2-Q03-opt2",
          "text": "$-\\frac{\\sin^4(x)}{4} + C$"
        },
        {
          "id": "W2-T2-Q03-opt3",
          "text": "$-\\cos(x) - \\frac{\\cos^3(x)}{3} + C$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q03-opt0"
      ],
      "explanation": "Rewrite $\\int (1-\\cos^2 x)\\sin x dx$. Let $u=\\cos x, du=-\\sin x dx \\implies -\\int (1-u^2)du = -u + \\frac{u^3}{3} + C = -\\cos(x) + \\frac{\\cos^3(x)}{3} + C$.",
      "hint": "Write $\\sin^3 x = \\sin x \\cdot \\sin^2 x = \\sin x(1 - \\cos^2 x)$. Then let $u = \\cos x$, $du = -\\sin x\\,dx$."
    },
    {
      "id": "W2-T2-Q04",
      "week": 2,
      "tier": "should",
      "topic": "Trigonometric Substitution",
      "type": "single_select",
      "question": "To evaluate $\\int \\sqrt{9 - x^2} \\, dx$, which substitution is recommended?",
      "options": [
        {
          "id": "W2-T2-Q04-opt0",
          "text": "$x = 3\\sin(\\theta)$"
        },
        {
          "id": "W2-T2-Q04-opt1",
          "text": "$x = 3\\tan(\\theta)$"
        },
        {
          "id": "W2-T2-Q04-opt2",
          "text": "$x = 3\\sec(\\theta)$"
        },
        {
          "id": "W2-T2-Q04-opt3",
          "text": "$u = 9 - x^2$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q04-opt0"
      ],
      "explanation": "For integrals containing $\\sqrt{a^2 - x^2}$, use $x = a\\sin(\\theta)$. Here $a=3$, so $x = 3\\sin(\\theta)$ simplifies $\\sqrt{9 - 9\\sin^2\\theta} = 3\\cos(\\theta)$.",
      "hint": "Identify the pattern: the integrand contains $\\sqrt{a^2 - x^2}$. For this pattern, the substitution $x = a\\sin\\theta$ simplifies the square root using $\\sin^2\\theta + \\cos^2\\theta = 1$."
    },
    {
      "id": "W2-T2-Q05",
      "week": 2,
      "tier": "should",
      "topic": "Simpson's 1/3 Rule Formula",
      "type": "single_select",
      "question": "What is Simpson's 1/3 Rule formula $S_n$ for an even number of subintervals $n$?",
      "options": [
        {
          "id": "W2-T2-Q05-opt0",
          "text": "$\\frac{h}{3} \\left[ f_0 + 4f_1 + 2f_2 + 4f_3 + \\dots + 4f_{n-1} + f_n \\right]$"
        },
        {
          "id": "W2-T2-Q05-opt1",
          "text": "$\\frac{h}{2} \\left[ f_0 + 2f_1 + 2f_2 + \\dots + f_n \\right]$"
        },
        {
          "id": "W2-T2-Q05-opt2",
          "text": "$\\frac{3h}{8} \\left[ f_0 + 3f_1 + 3f_2 + 2f_3 + \\dots + f_n \\right]$"
        },
        {
          "id": "W2-T2-Q05-opt3",
          "text": "$\\frac{h}{3} \\left[ f_0 + 2f_1 + 4f_2 + \\dots + f_n \\right]$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q05-opt0"
      ],
      "explanation": "Simpson's 1/3 Rule uses coefficient sequence $1, 4, 2, 4, 2, \\dots, 4, 1$ multiplied by $\\frac{h}{3}$ for even $n$.",
      "hint": "Simpson's 1/3 Rule weights are in the repeating pattern $1, 4, 2, 4, 2, \\ldots, 4, 1$. The pre-factor is $h/3$ (not $h/2$). Which option matches?"
    },
    {
      "id": "W2-T2-Q06",
      "week": 2,
      "tier": "should",
      "topic": "Numerical Error Bounds",
      "type": "single_select",
      "question": "What is the theoretical error bound $|E_S|$ for Simpson's Rule approximation of $\\int_a^b f(x)dx$ where $M = \\max|f^{(4)}(x)|$?",
      "options": [
        {
          "id": "W2-T2-Q06-opt0",
          "text": "$|E_S| \\le \\frac{M(b-a)^5}{180 n^4}$"
        },
        {
          "id": "W2-T2-Q06-opt1",
          "text": "$|E_S| \\le \\frac{M(b-a)^3}{12 n^2}$"
        },
        {
          "id": "W2-T2-Q06-opt2",
          "text": "$|E_S| \\le \\frac{M(b-a)^4}{180 n^3}$"
        },
        {
          "id": "W2-T2-Q06-opt3",
          "text": "$|E_S| \\le \\frac{M(b-a)^2}{24 n^2}$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q06-opt0"
      ],
      "explanation": "The fourth-derivative error bound for Simpson's 1/3 rule is $|E_S| \\le \\frac{M(b-a)^5}{180n^4}$, demonstrating $O(h^4)$ fourth-order accuracy.",
      "hint": "The error bound for Simpson's 1/3 rule involves the 4th derivative and scales as $(b-a)^5 / n^4$ (fifth power of interval, fourth power of $n$). Which formula shows this?"
    },
    {
      "id": "W2-T2-Q07",
      "week": 2,
      "tier": "should",
      "topic": "Arc Length of Curves",
      "type": "single_select",
      "question": "What is the formula for the arc length $L$ of a smooth curve $y = f(x)$ from $x = a$ to $x = b$?",
      "options": [
        {
          "id": "W2-T2-Q07-opt0",
          "text": "$L = \\int_{a}^{b} \\sqrt{1 + \\left(f'(x)\\right)^2} \\, dx$"
        },
        {
          "id": "W2-T2-Q07-opt1",
          "text": "$L = \\int_{a}^{b} \\sqrt{1 + f'(x)} \\, dx$"
        },
        {
          "id": "W2-T2-Q07-opt2",
          "text": "$L = \\int_{a}^{b} \\left(1 + f'(x)\\right) \\, dx$"
        },
        {
          "id": "W2-T2-Q07-opt3",
          "text": "$L = 2\\pi \\int_{a}^{b} f(x) \\sqrt{1 + (f'(x))^2} \\, dx$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q07-opt0"
      ],
      "explanation": "From the Pythagorean element $ds = \\sqrt{dx^2 + dy^2} = \\sqrt{1 + (dy/dx)^2} dx$, integrating yields $L = \\int_a^b \\sqrt{1 + (f'(x))^2} dx$.",
      "hint": "Arc length comes from the line element $ds = \\sqrt{dx^2 + dy^2}$. Factor out $dx$ to get $ds = \\sqrt{1 + (dy/dx)^2}\\,dx$ and integrate."
    },
    {
      "id": "W2-T2-Q08",
      "week": 2,
      "tier": "should",
      "topic": "Surface Area of Revolution",
      "type": "single_select",
      "question": "Find the surface area generated by rotating $y = x$ from $x = 0$ to $x = 1$ around the $x$-axis.",
      "options": [
        {
          "id": "W2-T2-Q08-opt0",
          "text": "$\\sqrt{2}\\pi$"
        },
        {
          "id": "W2-T2-Q08-opt1",
          "text": "$2\\sqrt{2}\\pi$"
        },
        {
          "id": "W2-T2-Q08-opt2",
          "text": "$\\frac{\\sqrt{2}\\pi}{2}$"
        },
        {
          "id": "W2-T2-Q08-opt3",
          "text": "$\\pi$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q08-opt0"
      ],
      "explanation": "Formula $S = 2\\pi \\int_0^1 y \\sqrt{1 + (y')^2} dx$. Here $y=x \\implies y'=1 \\implies \\sqrt{1+1} = \\sqrt{2}$. $S = 2\\pi \\int_0^1 x \\sqrt{2} dx = 2\\sqrt{2}\\pi \\left[\\frac{x^2}{2}\\right]_0^1 = \\sqrt{2}\\pi$.",
      "hint": "The surface of revolution formula is $S = 2\\pi \\int_a^b y\\sqrt{1 + (y')^2}\\,dx$. Here $y = x$ and $y' = 1$, so $\\sqrt{1 + 1} = \\sqrt{2}$."
    },
    {
      "id": "W2-T2-Q09",
      "week": 2,
      "tier": "should",
      "topic": "Partial Fractions Methods",
      "type": "multiple_select",
      "question": "Which of the following partial fraction decompositions are CORRECT in form? (Select all that apply)",
      "options": [
        {
          "id": "W2-T2-Q09-opt0",
          "text": "$\\frac{x+2}{(x-1)(x+3)} = \\frac{A}{x-1} + \\frac{B}{x+3}$"
        },
        {
          "id": "W2-T2-Q09-opt1",
          "text": "$\\frac{5}{(x-2)^2 (x+1)} = \\frac{A}{x-2} + \\frac{B}{(x-2)^2} + \\frac{C}{x+1}$"
        },
        {
          "id": "W2-T2-Q09-opt2",
          "text": "$\\frac{1}{x(x^2 + 4)} = \\frac{A}{x} + \\frac{Bx + C}{x^2 + 4}$"
        },
        {
          "id": "W2-T2-Q09-opt3",
          "text": "$\\frac{1}{(x-1)(x+2)} = \\frac{A}{x-1} \\cdot \\frac{B}{x+2}$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q09-opt0",
        "W2-T2-Q09-opt1",
        "W2-T2-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are correct standard algebraic decompositions. Option 4 is false (decomposition uses sums, not products).",
      "hint": "Option 4 uses a product between partial fractions. Partial fraction decomposition always uses sums (or differences), not products."
    },
    {
      "id": "W2-T2-Q10",
      "week": 2,
      "tier": "should",
      "topic": "Trapezoidal Error Scaling",
      "type": "single_select",
      "question": "If the number of subintervals $n$ is doubled in the Trapezoidal Rule, by what factor is the maximum error bound reduced?",
      "options": [
        {
          "id": "W2-T2-Q10-opt0",
          "text": "Factor of $4$ ($1/4$ of previous error)"
        },
        {
          "id": "W2-T2-Q10-opt1",
          "text": "Factor of $2$ ($1/2$ of previous error)"
        },
        {
          "id": "W2-T2-Q10-opt2",
          "text": "Factor of $8$ ($1/8$ of previous error)"
        },
        {
          "id": "W2-T2-Q10-opt3",
          "text": "Factor of $16$ ($1/16$ of previous error)"
        }
      ],
      "correct_indices": [
        "W2-T2-Q10-opt0"
      ],
      "explanation": "The error bound for Trapezoidal rule scales as $O(1/n^2)$. Doubling $n \\to 2n$ reduces error bound by $1/(2n)^2 = 1/(4n^2)$, i.e. a factor of 4.",
      "hint": "The Trapezoidal error bound scales as $O(h^2) \\propto 1/n^2$. If $n$ doubles to $2n$, what happens to $1/n^2$? Compute the ratio."
    },
    {
      "id": "W2-T3-Q01",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Partial Fractions (Irreducible Quadratics)",
      "type": "single_select",
      "question": "Evaluate $\\int \\frac{1}{x(x^2 + 1)} \\, dx$.",
      "options": [
        {
          "id": "W2-T3-Q01-opt0",
          "text": "$\\ln|x| - \\frac{1}{2}\\ln(x^2 + 1) + C$"
        },
        {
          "id": "W2-T3-Q01-opt1",
          "text": "$\\ln|x| + \\arctan(x) + C$"
        },
        {
          "id": "W2-T3-Q01-opt2",
          "text": "$\\frac{1}{2}\\ln|x| - \\ln(x^2 + 1) + C$"
        },
        {
          "id": "W2-T3-Q01-opt3",
          "text": "$\\ln|x(x^2 + 1)| + C$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q01-opt0"
      ],
      "explanation": "Decompose $\\frac{1}{x(x^2+1)} = \\frac{1}{x} - \\frac{x}{x^2+1}$. Integrating: $\\int \\frac{1}{x}dx - \\frac{1}{2}\\int \\frac{2x}{x^2+1}dx = \\ln|x| - \\frac{1}{2}\\ln(x^2+1) + C$.",
      "hint": "Decompose $\\frac{1}{x(x^2+1)} = \\frac{A}{x} + \\frac{Bx+C}{x^2+1}$. Multiply out, match coefficients, then integrate each piece."
    },
    {
      "id": "W2-T3-Q02",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Weierstrass Substitution (Half-Angle)",
      "type": "single_select",
      "question": "Using the Weierstrass substitution $t = \\tan(x/2)$, what are the algebraic expressions for $\\sin(x)$ and $dx$?",
      "options": [
        {
          "id": "W2-T3-Q02-opt0",
          "text": "$\\sin(x) = \\frac{2t}{1 + t^2}, \\quad dx = \\frac{2}{1 + t^2} dt$"
        },
        {
          "id": "W2-T3-Q02-opt1",
          "text": "$\\sin(x) = \\frac{1 - t^2}{1 + t^2}, \\quad dx = \\frac{1}{1 + t^2} dt$"
        },
        {
          "id": "W2-T3-Q02-opt2",
          "text": "$\\sin(x) = \\frac{t}{1 + t^2}, \\quad dx = \\frac{2t}{1 + t^2} dt$"
        },
        {
          "id": "W2-T3-Q02-opt3",
          "text": "$\\sin(x) = \\frac{2t}{1 - t^2}, \\quad dx = \\frac{2}{1 - t^2} dt$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q02-opt0"
      ],
      "explanation": "Under $t = \\tan(x/2)$: $\\sin(x) = \\frac{2t}{1+t^2}$, $\\cos(x) = \\frac{1-t^2}{1+t^2}$, and $dx = \\frac{2}{1+t^2}dt$.",
      "hint": "The Weierstrass substitution $t = \\tan(x/2)$ converts trigonometric rational integrals to algebraic ones. Recall $\\sin x = \\frac{2t}{1+t^2}$ and $\\cos x = \\frac{1-t^2}{1+t^2}$."
    },
    {
      "id": "W2-T3-Q03",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Reduction Formulas",
      "type": "single_select",
      "question": "Which reduction formula correctly expresses $I_n = \\int \\sin^n(x) \\, dx$ for $n \\ge 2$?",
      "options": [
        {
          "id": "W2-T3-Q03-opt0",
          "text": "$I_n = -\\frac{\\sin^{n-1}(x)\\cos(x)}{n} + \\frac{n-1}{n} I_{n-2}$"
        },
        {
          "id": "W2-T3-Q03-opt1",
          "text": "$I_n = \\frac{\\sin^{n-1}(x)\\cos(x)}{n} - \\frac{n-1}{n} I_{n-2}$"
        },
        {
          "id": "W2-T3-Q03-opt2",
          "text": "$I_n = -\\frac{\\sin^n(x)\\cos(x)}{n} + I_{n-1}$"
        },
        {
          "id": "W2-T3-Q03-opt3",
          "text": "$I_n = \\frac{\\cos^n(x)}{n} + \\frac{1}{n} I_{n-2}$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q03-opt0"
      ],
      "explanation": "Integrating by parts $\\int \\sin^{n-1}(x) \\sin(x) dx$ yields $I_n = -\\frac{\\sin^{n-1}(x)\\cos(x)}{n} + \\frac{n-1}{n} I_{n-2}$.",
      "hint": "The reduction formula is derived by applying integration by parts to $\\int \\sin^{n-1}(x) \\cdot \\sin(x)\\,dx$. The result connects $I_n$ to $I_{n-2}$, lowering the power by 2 each time."
    },
    {
      "id": "W2-T3-Q04",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Simpson's 3/8 Rule Formula",
      "type": "single_select",
      "question": "What is the pre-factor in Simpson's 3/8 Rule approximation for $n$ subintervals (where $n$ is a multiple of 3)?",
      "options": [
        {
          "id": "W2-T3-Q04-opt0",
          "text": "$\\frac{3h}{8}$"
        },
        {
          "id": "W2-T3-Q04-opt1",
          "text": "$\\frac{h}{3}$"
        },
        {
          "id": "W2-T3-Q04-opt2",
          "text": "$\\frac{h}{8}$"
        },
        {
          "id": "W2-T3-Q04-opt3",
          "text": "$\\frac{3h}{4}$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q04-opt0"
      ],
      "explanation": "Simpson's 3/8 rule formula is $\\frac{3h}{8} [f_0 + 3f_1 + 3f_2 + 2f_3 + 3f_4 + 3f_5 + 2f_6 + \\dots + f_n]$.",
      "hint": "Simpson's 3/8 rule uses three sub-intervals (instead of two) and has a different pre-factor than the 1/3 rule. Its coefficient pattern is $1, 3, 3, 2, 3, 3, 2, \\ldots, 1$."
    },
    {
      "id": "W2-T3-Q05",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Romberg Integration",
      "type": "single_select",
      "question": "Romberg integration combines Trapezoidal estimates $R_{k,1}$ across decreasing step sizes using which extrapolation formula to eliminate $O(h^2)$ error terms?",
      "options": [
        {
          "id": "W2-T3-Q05-opt0",
          "text": "$R_{k,2} = \\frac{4 R_{k,1} - R_{k-1,1}}{3}$"
        },
        {
          "id": "W2-T3-Q05-opt1",
          "text": "$R_{k,2} = \\frac{2 R_{k,1} - R_{k-1,1}}{2}$"
        },
        {
          "id": "W2-T3-Q05-opt2",
          "text": "$R_{k,2} = \\frac{R_{k,1} + R_{k-1,1}}{2}$"
        },
        {
          "id": "W2-T3-Q05-opt3",
          "text": "$R_{k,2} = \\frac{8 R_{k,1} - R_{k-1,1}}{7}$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q05-opt0"
      ],
      "explanation": "Richardson extrapolation for Trapezoidal rule gives $R_{k,2} = \\frac{4 R_{k,1} - R_{k-1,1}}{3}$, raising accuracy from $O(h^2)$ to $O(h^4)$ (Simpson equivalent).",
      "hint": "Romberg integration uses Richardson extrapolation: it combines two Trapezoidal estimates at different step sizes to cancel the leading $O(h^2)$ error. The formula is $\\frac{4R_{k,1} - R_{k-1,1}}{3}$."
    },
    {
      "id": "W2-T3-Q06",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Type 2 Improper Integrals",
      "type": "single_select",
      "question": "Evaluate $\\int_{0}^{1} \\frac{1}{\\sqrt{x}} \\, dx$ (vertical asymptote at $x = 0$).",
      "options": [
        {
          "id": "W2-T3-Q06-opt0",
          "text": "$2$"
        },
        {
          "id": "W2-T3-Q06-opt1",
          "text": "$1$"
        },
        {
          "id": "W2-T3-Q06-opt2",
          "text": "$\\infty$ (Divergent)"
        },
        {
          "id": "W2-T3-Q06-opt3",
          "text": "$\\frac{1}{2}$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q06-opt0"
      ],
      "explanation": "$\\lim_{a \\to 0^+} \\int_a^1 x^{-1/2} dx = \\lim_{a \\to 0^+} \\left[ 2\\sqrt{x} \\right]_a^1 = \\lim_{a \\to 0^+} (2 - 2\\sqrt{a}) = 2$ (Convergent).",
      "hint": "Replace the lower limit by $a \\to 0^+$ and integrate $x^{-1/2}$. The antiderivative of $x^{-1/2}$ is $2x^{1/2}$. Does the limit as $a \\to 0^+$ converge?"
    },
    {
      "id": "W2-T3-Q07",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Advanced Trigonometric Integrals",
      "type": "multiple_select",
      "question": "Which of the following integration identities are CORRECT? (Select all that apply)",
      "options": [
        {
          "id": "W2-T3-Q07-opt0",
          "text": "$\\int \\tan(x) \\, dx = \\ln|\\sec(x)| + C$"
        },
        {
          "id": "W2-T3-Q07-opt1",
          "text": "$\\int \\sec(x) \\, dx = \\ln|\\sec(x) + \\tan(x)| + C$"
        },
        {
          "id": "W2-T3-Q07-opt2",
          "text": "$\\int \\cot(x) \\, dx = \\ln|\\sin(x)| + C$"
        },
        {
          "id": "W2-T3-Q07-opt3",
          "text": "$\\int \\csc(x) \\, dx = \\ln|\\csc(x) + \\cot(x)| + C$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q07-opt0",
        "W2-T3-Q07-opt1",
        "W2-T3-Q07-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are correct standard formulas. Option 4 is false because $\\int \\csc(x)dx = -\\ln|\\csc x + \\cot x| + C = \\ln|\\csc x - \\cot x| + C$.",
      "hint": "The standard form for $\\int \\csc(x)dx$ involves a negative sign: $-\\ln|\\csc x + \\cot x|$ (equivalently $\\ln|\\csc x - \\cot x|$). One option has the wrong sign — can you spot it?"
    },
    {
      "id": "W2-T3-Q08",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Center of Mass Integrals",
      "type": "single_select",
      "question": "The $x$-coordinate of the centroid (center of mass) $\\bar{x}$ of a region bounded by $y = f(x) \\ge 0$ above $[a,b]$ with area $A$ is:",
      "options": [
        {
          "id": "W2-T3-Q08-opt0",
          "text": "$\\bar{x} = \\frac{1}{A} \\int_{a}^{b} x f(x) \\, dx$"
        },
        {
          "id": "W2-T3-Q08-opt1",
          "text": "$\\bar{x} = \\frac{1}{A} \\int_{a}^{b} [f(x)]^2 \\, dx$"
        },
        {
          "id": "W2-T3-Q08-opt2",
          "text": "$\\bar{x} = \\int_{a}^{b} x \\, dx$"
        },
        {
          "id": "W2-T3-Q08-opt3",
          "text": "$\\bar{x} = \\frac{1}{2A} \\int_{a}^{b} x f(x) \\, dx$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q08-opt0"
      ],
      "explanation": "The moment $M_y = \\int_a^b x f(x) dx$. Dividing by total area $A$ yields centroid coordinate $\\bar{x} = \\frac{1}{A} \\int_a^b x f(x) dx$.",
      "hint": "The centroid $x$-coordinate is a weighted average of $x$ over the region, weighted by the function. Divide the moment $\\iint x f(x) dA$ by the total area $A$."
    },
    {
      "id": "W2-T3-Q09",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Weierstrass Identity Completeness",
      "type": "multiple_select",
      "question": "In the Weierstrass substitution $t = \\tan(x/2)$, select ALL true conversion relations:",
      "options": [
        {
          "id": "W2-T3-Q09-opt0",
          "text": "$\\cos(x) = \\frac{1 - t^2}{1 + t^2}$"
        },
        {
          "id": "W2-T3-Q09-opt1",
          "text": "$\\tan(x) = \\frac{2t}{1 - t^2}$"
        },
        {
          "id": "W2-T3-Q09-opt2",
          "text": "$dx = \\frac{2}{1 + t^2} dt$"
        },
        {
          "id": "W2-T3-Q09-opt3",
          "text": "$\\sin(x) = \\frac{1 + t^2}{2t}$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q09-opt0",
        "W2-T3-Q09-opt1",
        "W2-T3-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are correct. Option 4 is false (it is the reciprocal; $\\sin x = \\frac{2t}{1+t^2}$).",
      "hint": "Option 4 gives the reciprocal of the correct $\\sin x$ formula. Compare with the known identity $\\sin x = \\frac{2t}{1+t^2}$ (not $\\frac{1+t^2}{2t}$)."
    },
    {
      "id": "W2-T3-Q10",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Numerical Integration Comparison",
      "type": "single_select",
      "question": "Which numerical integration method yields the EXACT correct answer for any polynomial of degree $\\le 3$?",
      "options": [
        {
          "id": "W2-T3-Q10-opt0",
          "text": "Simpson's 1/3 Rule"
        },
        {
          "id": "W2-T3-Q10-opt1",
          "text": "Trapezoidal Rule"
        },
        {
          "id": "W2-T3-Q10-opt2",
          "text": "Midpoint Rule"
        },
        {
          "id": "W2-T3-Q10-opt3",
          "text": "Left Riemann Sum"
        }
      ],
      "correct_indices": [
        "W2-T3-Q10-opt0"
      ],
      "explanation": "Because Simpson's 1/3 Rule error bound relies on the 4th derivative $f^{(4)}(x)$, its error is identically zero for cubic polynomials ($f(x) = c_3 x^3 + c_2 x^2 + c_1 x + c_0$).",
      "hint": "Consider what 'exact for cubics' means: it requires the error term (involving a derivative of the integrand) to be identically zero. Which rule's error involves $f^{(4)}$?"
    },
    {
      "id": "W2-T4-Q01",
      "week": 2,
      "tier": "extra",
      "topic": "Gaussian Quadrature (2-Point)",
      "type": "single_select",
      "question": "Gauss-Legendre 2-point quadrature evaluates $\\int_{-1}^{1} f(x) \\, dx \\approx w_1 f(x_1) + w_2 f(x_2)$. What are the nodes $x_{1,2}$ and weights $w_{1,2}$?",
      "options": [
        {
          "id": "W2-T4-Q01-opt0",
          "text": "$x_{1,2} = \\pm \\frac{1}{\\sqrt{3}}, \\quad w_1 = w_2 = 1$"
        },
        {
          "id": "W2-T4-Q01-opt1",
          "text": "$x_{1,2} = \\pm \\frac{1}{2}, \\quad w_1 = w_2 = 1$"
        },
        {
          "id": "W2-T4-Q01-opt2",
          "text": "$x_{1,2} = \\pm \\sqrt{\\frac{3}{5}}, \\quad w_1 = w_2 = \\frac{8}{9}$"
        },
        {
          "id": "W2-T4-Q01-opt3",
          "text": "$x_{1,2} = \\pm \\frac{1}{\\sqrt{2}}, \\quad w_1 = w_2 = \\frac{1}{2}$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q01-opt0"
      ],
      "explanation": "The roots of the 2nd Legendre polynomial $P_2(x) = \\frac{1}{2}(3x^2-1)$ are $x = \\pm \\frac{1}{\\sqrt{3}}$, both with weight $w = 1$. This exact-integrates polynomials up to degree $2(2)-1 = 3$.",
      "hint": "Gauss-Legendre 2-point nodes are the roots of $P_2(x)$, the 2nd Legendre polynomial. Both weights equal 1. The nodes are symmetric about 0."
    },
    {
      "id": "W2-T4-Q02",
      "week": 2,
      "tier": "extra",
      "topic": "Gamma Function Definition",
      "type": "single_select",
      "question": "The Gamma function is defined as $\\Gamma(z) = \\int_{0}^{\\infty} x^{z-1} e^{-x} \\, dx$ for $\\text{Re}(z) > 0$. What is $\\Gamma(5)$?",
      "options": [
        {
          "id": "W2-T4-Q02-opt0",
          "text": "$24$"
        },
        {
          "id": "W2-T4-Q02-opt1",
          "text": "$120$"
        },
        {
          "id": "W2-T4-Q02-opt2",
          "text": "$6$"
        },
        {
          "id": "W2-T4-Q02-opt3",
          "text": "$5$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q02-opt0"
      ],
      "explanation": "For positive integers $n$, $\\Gamma(n) = (n-1)!$. Therefore $\\Gamma(5) = (5-1)! = 4! = 4 \\times 3 \\times 2 \\times 1 = 24$.",
      "hint": "For positive integers, $\\Gamma(n) = (n-1)!$. So $\\Gamma(5) = 4!$. Compute $4! = 4 \\times 3 \\times 2 \\times 1$."
    },
    {
      "id": "W2-T4-Q03",
      "week": 2,
      "tier": "extra",
      "topic": "Leibniz Integral Rule (Feynman's Trick)",
      "type": "single_select",
      "question": "Using differentiation under the integral sign on $I(a) = \\int_{0}^{\\infty} \\frac{e^{-x} \\sin(ax)}{x} \\, dx$, what is $\\frac{dI}{da}$?",
      "options": [
        {
          "id": "W2-T4-Q03-opt0",
          "text": "$\\frac{1}{1 + a^2}$"
        },
        {
          "id": "W2-T4-Q03-opt1",
          "text": "$\\frac{a}{1 + a^2}$"
        },
        {
          "id": "W2-T4-Q03-opt2",
          "text": "$\\arctan(a)$"
        },
        {
          "id": "W2-T4-Q03-opt3",
          "text": "$\\frac{1}{a^2 - 1}$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q03-opt0"
      ],
      "explanation": "Differentiating under integral: $\\frac{dI}{da} = \\int_0^\\infty \\frac{e^{-x} x \\cos(ax)}{x} dx = \\int_0^\\infty e^{-x} \\cos(ax) dx = \\frac{1}{1 + a^2}$. Integrating w.r.t $a$ gives $I(a) = \\arctan(a)$.",
      "hint": "Differentiate under the integral sign: $\\frac{dI}{da} = \\int_0^\\infty e^{-x}\\cos(ax)dx$. This is a standard Laplace transform of $\\cos(at)$ at $s=1$."
    },
    {
      "id": "W2-T4-Q04",
      "week": 2,
      "tier": "extra",
      "topic": "Gaussian Quadrature Precision",
      "type": "single_select",
      "question": "An $n$-point Gauss-Legendre quadrature rule integrates polynomials of maximum degree $d$ EXACTLY. What is $d$ in terms of $n$?",
      "options": [
        {
          "id": "W2-T4-Q04-opt0",
          "text": "$d = 2n - 1$"
        },
        {
          "id": "W2-T4-Q04-opt1",
          "text": "$d = 2n$"
        },
        {
          "id": "W2-T4-Q04-opt2",
          "text": "$d = n + 1$"
        },
        {
          "id": "W2-T4-Q04-opt3",
          "text": "$d = 2n + 1$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q04-opt0"
      ],
      "explanation": "An $n$-point Gaussian quadrature rule has $2n$ free parameters ($n$ nodes + $n$ weights), allowing exact integration of polynomials up to degree $2n - 1$.",
      "hint": "An $n$-point quadrature rule has $n$ nodes and $n$ weights, giving $2n$ free parameters. The maximum polynomial degree exactly integrated is therefore $d = 2n - 1$."
    },
    {
      "id": "W2-T4-Q05",
      "week": 2,
      "tier": "extra",
      "topic": "Gamma Function Properties",
      "type": "multiple_select",
      "question": "Select ALL true mathematical properties of the Gamma function $\\Gamma(z)$:",
      "options": [
        {
          "id": "W2-T4-Q05-opt0",
          "text": "$\\Gamma(z+1) = z \\Gamma(z)$ for all $z$"
        },
        {
          "id": "W2-T4-Q05-opt1",
          "text": "$\\Gamma(1/2) = \\sqrt{\\pi}$"
        },
        {
          "id": "W2-T4-Q05-opt2",
          "text": "$\\Gamma(n) = n!$ for integers $n \\ge 1$"
        },
        {
          "id": "W2-T4-Q05-opt3",
          "text": "$\\int_{0}^{\\infty} e^{-x^2} \\, dx = \\frac{\\sqrt{\\pi}}{2}$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q05-opt0",
        "W2-T4-Q05-opt1",
        "W2-T4-Q05-opt3"
      ],
      "explanation": "Options 1, 2, and 4 are true fundamental properties ($\\Gamma(1/2) = \\sqrt{\\pi}$, Gaussian integral $= \\sqrt{\\pi}/2$). Option 3 is false because $\\Gamma(n) = (n-1)!$, not $n!$.",
      "hint": "Option 3 states $\\Gamma(n) = n!$, but the correct relation is $\\Gamma(n) = (n-1)!$ (shifted by 1). Check: $\\Gamma(1) = 0! = 1$ and $\\Gamma(2) = 1! = 1$, $\\Gamma(3) = 2! = 2$."
    },
    {
      "id": "W2-T4-Q06",
      "week": 2,
      "tier": "extra",
      "topic": "Simpson's 1/3 Derivation",
      "type": "single_select",
      "question": "Simpson's 1/3 Rule on $[-h, h]$ is derived by fitting a unique quadratic polynomial $P(x) = A x^2 + B x + C$ through three points $(-h, y_0), (0, y_1), (h, y_2)$. What is the exact integral $\\int_{-h}^{h} P(x) \\, dx$?",
      "options": [
        {
          "id": "W2-T4-Q06-opt0",
          "text": "$\\frac{h}{3}(y_0 + 4y_1 + y_2)$"
        },
        {
          "id": "W2-T4-Q06-opt1",
          "text": "$\\frac{h}{2}(y_0 + 2y_1 + y_2)$"
        },
        {
          "id": "W2-T4-Q06-opt2",
          "text": "$\\frac{h}{3}(2y_0 + 2y_1 + 2y_2)$"
        },
        {
          "id": "W2-T4-Q06-opt3",
          "text": "$\\frac{h}{6}(y_0 + 4y_1 + y_2)$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q06-opt0"
      ],
      "explanation": "$\\int_{-h}^h (Ax^2 + Bx + C)dx = \\left[ \\frac{Ax^3}{3} + \\frac{Bx^2}{2} + Cx \\right]_{-h}^h = \\frac{2Ah^3}{3} + 2Ch$. Since $y_0 = Ah^2 - Bh + C$, $y_1 = C$, $y_2 = Ah^2 + Bh + C \\implies y_0 + 4y_1 + y_2 = 2Ah^2 + 6C$. Multiplying by $h/3$ yields $\\frac{h}{3}(y_0 + 4y_1 + y_2)$.",
      "hint": "After matching $y_0, y_1, y_2$ to the coefficients $A, B, C$ of $P(x) = Ax^2+Bx+C$, compute $\\int_{-h}^h (Ax^2+Bx+C)dx$. Only even terms survive by symmetry."
    },
    {
      "id": "W2-T4-Q07",
      "week": 2,
      "tier": "extra",
      "topic": "Fresnel Integrals & Asymptotics",
      "type": "single_select",
      "question": "The Fresnel integral $S(x) = \\int_0^x \\sin(t^2) dt$ converges as $x \\to \\infty$ to which exact value?",
      "options": [
        {
          "id": "W2-T4-Q07-opt0",
          "text": "$\\frac{1}{2}\\sqrt{\\frac{\\pi}{2}}$"
        },
        {
          "id": "W2-T4-Q07-opt1",
          "text": "$\\sqrt{\\pi}$"
        },
        {
          "id": "W2-T4-Q07-opt2",
          "text": "$\\frac{\\pi}{4}$"
        },
        {
          "id": "W2-T4-Q07-opt3",
          "text": "$\\frac{1}{\\sqrt{2\\pi}}$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q07-opt0"
      ],
      "explanation": "Using contour integration or Gamma function transformation: $\\int_0^\\infty \\sin(t^2) dt = \\int_0^\\infty \\cos(t^2) dt = \\frac{1}{2}\\sqrt{\\frac{\\pi}{2}}$.",
      "hint": "Fresnel integrals are related to the Gaussian integral via a substitution $t^2 = u$ and contour integration. Both $S(\\infty)$ and $C(\\infty)$ converge to $\\frac{1}{2}\\sqrt{\\pi/2}$."
    },
    {
      "id": "W2-T4-Q08",
      "week": 2,
      "tier": "extra",
      "topic": "Wallis Product Formula",
      "type": "single_select",
      "question": "Wallis' product formula for $\\pi$ is derived from which sequence of definite integrals $I_n = \\int_{0}^{\\pi/2} \\sin^n(x) \\, dx$?",
      "options": [
        {
          "id": "W2-T4-Q08-opt0",
          "text": "$\\frac{\\pi}{2} = \\prod_{n=1}^{\\infty} \\frac{4n^2}{4n^2 - 1} = \\frac{2}{1} \\cdot \\frac{2}{3} \\cdot \\frac{4}{3} \\cdot \\frac{4}{5} \\cdots$"
        },
        {
          "id": "W2-T4-Q08-opt1",
          "text": "$\\pi = \\sum_{n=1}^{\\infty} \\frac{1}{n^2}$"
        },
        {
          "id": "W2-T4-Q08-opt2",
          "text": "$\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\dots$"
        },
        {
          "id": "W2-T4-Q08-opt3",
          "text": "$\\pi = \\prod_{n=1}^{\\infty} \\left(1 + \\frac{1}{n}\\right)$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q08-opt0"
      ],
      "explanation": "Evaluating $I_n = \\int_0^{\\pi/2} \\sin^n(x) dx$ for even and odd $n$ and using the squeeze theorem on $I_{2n+1} < I_{2n} < I_{2n-1}$ yields Wallis' product $\\frac{\\pi}{2} = \\prod_{n=1}^{\\infty} \\frac{4n^2}{4n^2-1}$.",
      "hint": "The Wallis product arises from the ratio $I_{2n}/I_{2n-1}$ as $n \\to \\infty$, where $I_n = \\int_0^{\\pi/2}\\sin^n x\\,dx$. The squeeze theorem applied to $I_{2n+1} < I_{2n} < I_{2n-1}$ yields the product formula."
    },
    {
      "id": "W2-T4-Q09",
      "week": 2,
      "tier": "extra",
      "topic": "Leibniz Rule General Formulation",
      "type": "multiple_select",
      "question": "The full Leibniz Integral Rule for differentiating an integral with variable limits $\\frac{d}{dx} \\int_{a(x)}^{b(x)} f(t,x) \\, dt$ is given by which terms?",
      "options": [
        {
          "id": "W2-T4-Q09-opt0",
          "text": "$f(b(x),x) \\cdot b'(x)$"
        },
        {
          "id": "W2-T4-Q09-opt1",
          "text": "$-f(a(x),x) \\cdot a'(x)$"
        },
        {
          "id": "W2-T4-Q09-opt2",
          "text": "$\\int_{a(x)}^{b(x)} \\frac{\\partial f}{\\partial x}(t,x) \\, dt$"
        },
        {
          "id": "W2-T4-Q09-opt3",
          "text": "$\\frac{f(b(x),x) - f(a(x),x)}{b(x) - a(x)}$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q09-opt0",
        "W2-T4-Q09-opt1",
        "W2-T4-Q09-opt2"
      ],
      "explanation": "The full Leibniz rule sums terms 1, 2, and 3: $\\frac{d}{dx} \\int_{a(x)}^{b(x)} f(t,x) dt = f(b(x),x)b'(x) - f(a(x),x)a'(x) + \\int_{a(x)}^{b(x)} \\frac{\\partial f}{\\partial x}(t,x) dt$.",
      "hint": "The full Leibniz rule has three terms: the upper-limit term, the lower-limit term, and the partial derivative integral. Which options correspond to each?"
    },
    {
      "id": "W2-T4-Q10",
      "week": 2,
      "tier": "extra",
      "topic": "Euler-Maclaurin Summation",
      "type": "single_select",
      "question": "The Euler-Maclaurin summation formula links discrete sums $\\sum_{k=a}^{b} f(k)$ to definite integrals $\\int_{a}^{b} f(x)dx$ using which special family of polynomials/numbers?",
      "options": [
        {
          "id": "W2-T4-Q10-opt0",
          "text": "Bernoulli numbers $B_k$ and Bernoulli polynomials $B_k(x)$"
        },
        {
          "id": "W2-T4-Q10-opt1",
          "text": "Legendre polynomials $P_k(x)$"
        },
        {
          "id": "W2-T4-Q10-opt2",
          "text": "Chebyshev polynomials $T_k(x)$"
        },
        {
          "id": "W2-T4-Q10-opt3",
          "text": "Hermite polynomials $H_k(x)$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q10-opt0"
      ],
      "explanation": "The Euler-Maclaurin formula uses Bernoulli numbers $B_k$ to express the difference between an integral and a sum, forming the foundation of high-precision numerical quadrature.",
      "hint": "The Euler-Maclaurin formula links sums to integrals with correction terms. The correction terms involve $f'(a), f'(b), f'''(a), f'''(b), \\ldots$ multiplied by Bernoulli numbers."
    }
  ]
};
