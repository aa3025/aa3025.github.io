window.QUIZ_BANK_WEEK4 = {
  "module": "4014SCN Calculus and Applications",
  "week": 4,
  "title": "Week 4 Quiz Bank: Discontinuous Forcing, Taylor Series & Power Series Solutions",
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
      "topic": "Heaviside Step Function Definition",
      "type": "single_select",
      "question": "The Heaviside unit step function $u(t - a)$ is defined as:",
      "options": [
        {
          "id": "W4-T1-Q01-opt0",
          "text": "$u(t - a) = \\begin{cases} 0 & t < a \\\\ 1 & t \\ge a \\end{cases}$"
        },
        {
          "id": "W4-T1-Q01-opt1",
          "text": "$u(t - a) = \\begin{cases} 1 & t < a \\\\ 0 & t \\ge a \\end{cases}$"
        },
        {
          "id": "W4-T1-Q01-opt2",
          "text": "$u(t - a) = t - a$"
        },
        {
          "id": "W4-T1-Q01-opt3",
          "text": "$u(t - a) = \\begin{cases} -1 & t < a \\\\ 1 & t \\ge a \\end{cases}$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q01-opt0"
      ],
      "explanation": "The Heaviside function $u(t-a)$ switches from 0 to 1 at $t = a$.",
      "hint": "The Heaviside function is 0 before the switch time $a$ and 1 at and after. It 'turns on' at $t = a$. Which option reflects this?"
    },
    {
      "id": "W4-T1-Q02",
      "week": 4,
      "tier": "core",
      "topic": "Piecewise Function to Step Representation",
      "type": "single_select",
      "question": "Express the pulse function $f(t) = \\begin{cases} 5 & 2 \\le t < 6 \\\\ 0 & \\text{otherwise} \\end{cases}$ using Heaviside step functions.",
      "options": [
        {
          "id": "W4-T1-Q02-opt0",
          "text": "$f(t) = 5 [u(t - 2) - u(t - 6)]$"
        },
        {
          "id": "W4-T1-Q02-opt1",
          "text": "$f(t) = 5 [u(t - 6) - u(t - 2)]$"
        },
        {
          "id": "W4-T1-Q02-opt2",
          "text": "$f(t) = 5 u(t - 2) + 5 u(t - 6)$"
        },
        {
          "id": "W4-T1-Q02-opt3",
          "text": "$f(t) = 5 u(t - 4)$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q02-opt0"
      ],
      "explanation": "A rectangular pulse active on interval $[a, b]$ is given by $A [u(t-a) - u(t-b)] = 5 [u(t-2) - u(t-6)]$.",
      "hint": "A pulse active from $t=a$ to $t=b$ can be written as the difference of two step functions: 'turn on at $a$' minus 'turn off at $b$'. Scale by the pulse amplitude."
    },
    {
      "id": "W4-T1-Q03",
      "week": 4,
      "tier": "core",
      "topic": "Maclaurin Series Definition",
      "type": "single_select",
      "question": "What is the general formula for the Maclaurin series expansion of a smooth function $f(x)$?",
      "options": [
        {
          "id": "W4-T1-Q03-opt0",
          "text": "$\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n$"
        },
        {
          "id": "W4-T1-Q03-opt1",
          "text": "$\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(1)}{n!} x^n$"
        },
        {
          "id": "W4-T1-Q03-opt2",
          "text": "$\\sum_{n=0}^{\\infty} f^{(n)}(0) x^n$"
        },
        {
          "id": "W4-T1-Q03-opt3",
          "text": "$\\sum_{n=1}^{\\infty} \\frac{f'(0)}{n} x^n$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q03-opt0"
      ],
      "explanation": "The Maclaurin series is a Taylor series centered at $x=0$: $f(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\dots = \\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!} x^n$.",
      "hint": "The Maclaurin series is a Taylor series centred at $x = 0$: $f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!}x^n$. The key feature is that derivatives are evaluated at 0."
    },
    {
      "id": "W4-T1-Q04",
      "week": 4,
      "tier": "core",
      "topic": "Standard Maclaurin Series ($e^x$)",
      "type": "single_select",
      "question": "What is the Maclaurin series expansion for $e^x$?",
      "options": [
        {
          "id": "W4-T1-Q04-opt0",
          "text": "$1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$"
        },
        {
          "id": "W4-T1-Q04-opt1",
          "text": "$x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots$"
        },
        {
          "id": "W4-T1-Q04-opt2",
          "text": "$1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots$"
        },
        {
          "id": "W4-T1-Q04-opt3",
          "text": "$1 - x + x^2 - x^3 + \\dots$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q04-opt0"
      ],
      "explanation": "Since all derivatives of $e^x$ at $x=0$ equal 1, $\\mathcal{L}\\{e^x\\} = \\sum_{n=0}^\\infty \\frac{x^n}{n!}$ for all $x \\in \\mathbb{R}$.",
      "hint": "All derivatives of $e^x$ are $e^x$, so each $f^{(n)}(0) = 1$. This gives $\\sum_{n=0}^\\infty \\frac{x^n}{n!}$. Identify which option matches this form."
    },
    {
      "id": "W4-T1-Q05",
      "week": 4,
      "tier": "core",
      "topic": "Standard Maclaurin Series (Sine)",
      "type": "single_select",
      "question": "What is the Maclaurin series expansion for $\\sin(x)$?",
      "options": [
        {
          "id": "W4-T1-Q05-opt0",
          "text": "$x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\dots$"
        },
        {
          "id": "W4-T1-Q05-opt1",
          "text": "$1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\dots$"
        },
        {
          "id": "W4-T1-Q05-opt2",
          "text": "$x + \\frac{x^3}{3!} + \\frac{x^5}{5!} + \\dots$"
        },
        {
          "id": "W4-T1-Q05-opt3",
          "text": "$1 + x + x^2 + x^3 + \\dots$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q05-opt0"
      ],
      "explanation": "Sine is an odd function, so its Maclaurin series contains only odd power terms with alternating signs: $\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$.",
      "hint": "Sine is an odd function, so only odd powers appear in its Maclaurin series. The series alternates in sign: $+, -, +, \\ldots$ starting from $x$."
    },
    {
      "id": "W4-T1-Q06",
      "week": 4,
      "tier": "core",
      "topic": "Standard Maclaurin Series (Cosine)",
      "type": "single_select",
      "question": "What is the Maclaurin series expansion for $\\cos(x)$?",
      "options": [
        {
          "id": "W4-T1-Q06-opt0",
          "text": "$1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\dots$"
        },
        {
          "id": "W4-T1-Q06-opt1",
          "text": "$x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots$"
        },
        {
          "id": "W4-T1-Q06-opt2",
          "text": "$1 + \\frac{x^2}{2!} + \\frac{x^4}{4!} + \\dots$"
        },
        {
          "id": "W4-T1-Q06-opt3",
          "text": "$1 - x + \\frac{x^2}{2} - \\frac{x^3}{6} + \\dots$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q06-opt0"
      ],
      "explanation": "Cosine is an even function, so its Maclaurin series contains only even power terms with alternating signs: $\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{(2n)!}$.",
      "hint": "Cosine is an even function, so only even powers appear. The series starts at 1 (power 0 term) and alternates in sign."
    },
    {
      "id": "W4-T1-Q07",
      "week": 4,
      "tier": "core",
      "topic": "Taylor Polynomial (2nd Degree)",
      "type": "single_select",
      "question": "Find the 2nd-degree Taylor polynomial $P_2(x)$ for $f(x) = \\ln(x)$ centered at $a = 1$.",
      "options": [
        {
          "id": "W4-T1-Q07-opt0",
          "text": "$(x - 1) - \\frac{1}{2}(x - 1)^2$"
        },
        {
          "id": "W4-T1-Q07-opt1",
          "text": "$(x - 1) + \\frac{1}{2}(x - 1)^2$"
        },
        {
          "id": "W4-T1-Q07-opt2",
          "text": "$1 + (x - 1) - (x - 1)^2$"
        },
        {
          "id": "W4-T1-Q07-opt3",
          "text": "$x - \\frac{x^2}{2}$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q07-opt0"
      ],
      "explanation": "$f(1) = 0$, $f'(1) = 1$, $f''(1) = -1$. $P_2(x) = 0 + 1(x-1) + \\frac{-1}{2!}(x-1)^2 = (x-1) - \\frac{1}{2}(x-1)^2$.",
      "hint": "Compute $f(1) = 0$, $f'(x) = 1/x \\Rightarrow f'(1) = 1$, $f''(x) = -1/x^2 \\Rightarrow f''(1) = -1$. Then $P_2(x) = f(1) + f'(1)(x-1) + \\frac{f''(1)}{2}(x-1)^2$."
    },
    {
      "id": "W4-T1-Q08",
      "week": 4,
      "tier": "core",
      "topic": "Geometric Series Expansion",
      "type": "single_select",
      "question": "What is the power series expansion for $f(x) = \\frac{1}{1 - x}$ for $|x| < 1$?",
      "options": [
        {
          "id": "W4-T1-Q08-opt0",
          "text": "$1 + x + x^2 + x^3 + \\dots = \\sum_{n=0}^{\\infty} x^n$"
        },
        {
          "id": "W4-T1-Q08-opt1",
          "text": "$1 - x + x^2 - x^3 + \\dots$"
        },
        {
          "id": "W4-T1-Q08-opt2",
          "text": "$x + x^2 + x^3 + \\dots$"
        },
        {
          "id": "W4-T1-Q08-opt3",
          "text": "$1 + 2x + 3x^2 + 4x^3 + \\dots$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q08-opt0"
      ],
      "explanation": "The standard geometric series formula yields $\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n$ for $|x| < 1$.",
      "hint": "The geometric series formula: $\\frac{1}{1-r} = 1 + r + r^2 + \\ldots$ for $|r| < 1$. Here $r = x$."
    },
    {
      "id": "W4-T1-Q09",
      "week": 4,
      "tier": "core",
      "topic": "Maclaurin Series Identification",
      "type": "multiple_select",
      "question": "Select ALL valid standard Maclaurin series expansions below:",
      "options": [
        {
          "id": "W4-T1-Q09-opt0",
          "text": "$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ for all $x$"
        },
        {
          "id": "W4-T1-Q09-opt1",
          "text": "$\\sin(x) = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$ for all $x$"
        },
        {
          "id": "W4-T1-Q09-opt2",
          "text": "$\\cos(x) = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n}}{(2n)!}$ for all $x$"
        },
        {
          "id": "W4-T1-Q09-opt3",
          "text": "$\\ln(1+x) = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ for all $x$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q09-opt0",
        "W4-T1-Q09-opt1",
        "W4-T1-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are correct. Option 4 is false ($\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots$ for $-1 < x \\le 1$).",
      "hint": "Option 4 incorrectly equates $\\ln(1+x)$ with the exponential series. The correct series for $\\ln(1+x)$ starts $x - x^2/2 + x^3/3 - \\ldots$"
    },
    {
      "id": "W4-T1-Q10",
      "week": 4,
      "tier": "core",
      "topic": "Step Function Properties",
      "type": "multiple_select",
      "question": "Which of the following statements regarding the Heaviside step function $u(t)$ are CORRECT? (Select all that apply)",
      "options": [
        {
          "id": "W4-T1-Q10-opt0",
          "text": "$\\mathcal{L}\\{u(t - a)\\} = \\frac{e^{-as}}{s}$ for $a \\ge 0$"
        },
        {
          "id": "W4-T1-Q10-opt1",
          "text": "The derivative of $u(t - a)$ in the distributional sense is the Dirac delta $\\delta(t - a)$"
        },
        {
          "id": "W4-T1-Q10-opt2",
          "text": "$u(t - a) = 0$ for $t < a$"
        },
        {
          "id": "W4-T1-Q10-opt3",
          "text": "$\\mathcal{L}\\{u(t)\\} = \\frac{1}{s^2}$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q10-opt0",
        "W4-T1-Q10-opt1",
        "W4-T1-Q10-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are correct fundamental properties. Option 4 is false ($\\mathcal{L}\\{u(t)\\} = \\mathcal{L}\\{1\\} = \\frac{1}{s}$).",
      "hint": "Option 4: what is $\\mathcal{L}\\{u(t)\\}$? Since $u(t) = 1$ for $t \\geq 0$, its Laplace transform is $\\mathcal{L}\\{1\\} = 1/s$ (not $1/s^2$, which is $\\mathcal{L}\\{t\\}$)."
    },
    {
      "id": "W4-T2-Q01",
      "week": 4,
      "tier": "should",
      "topic": "Discontinuous Forcing ODE via Laplace",
      "type": "single_select",
      "question": "Solve the IVP $y' + 2y = u(t - 1)$ with $y(0) = 0$.",
      "options": [
        {
          "id": "W4-T2-Q01-opt0",
          "text": "$y(t) = \\frac{1}{2} \\left(1 - e^{-2(t-1)}\\right) u(t-1)$"
        },
        {
          "id": "W4-T2-Q01-opt1",
          "text": "$y(t) = \\frac{1}{2} \\left(1 - e^{-2t}\\right) u(t-1)$"
        },
        {
          "id": "W4-T2-Q01-opt2",
          "text": "$y(t) = (1 - e^{-t}) u(t-1)$"
        },
        {
          "id": "W4-T2-Q01-opt3",
          "text": "$y(t) = \\frac{1}{2} e^{-2(t-1)} u(t-1)$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q01-opt0"
      ],
      "explanation": "$(s+2)Y(s) = \\frac{e^{-s}}{s} \\implies Y(s) = e^{-s} \\frac{1}{s(s+2)} = e^{-s} \\left[ \\frac{1/2}{s} - \\frac{1/2}{s+2} \\right]$. Inverting: $y(t) = \\frac{1}{2}(1 - e^{-2(t-1)}) u(t-1)$.",
      "hint": "Take Laplace of both sides. $\\mathcal{L}\\{y'\\} + 2Y = \\mathcal{L}\\{u(t-1)\\} = e^{-s}/s$. Solve for $Y(s)$, then partial-fraction and apply Second Shifting Theorem."
    },
    {
      "id": "W4-T2-Q02",
      "week": 4,
      "tier": "should",
      "topic": "Second Shifting Theorem (Inverse)",
      "type": "single_select",
      "question": "Evaluate $\\mathcal{L}^{-1}\\left\\{\\frac{e^{-2s}}{s^2 + 1}\\right\\}$.",
      "options": [
        {
          "id": "W4-T2-Q02-opt0",
          "text": "$\\sin(t - 2) u(t - 2)$"
        },
        {
          "id": "W4-T2-Q02-opt1",
          "text": "$\\cos(t - 2) u(t - 2)$"
        },
        {
          "id": "W4-T2-Q02-opt2",
          "text": "$\\sin(t) u(t - 2)$"
        },
        {
          "id": "W4-T2-Q02-opt3",
          "text": "$e^{-2t} \\sin(t)$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q02-opt0"
      ],
      "explanation": "Since $\\mathcal{L}^{-1}\\left\\{\\frac{1}{s^2+1}\\right\\} = \\sin(t)$, applying $\\mathcal{L}^{-1}\\{e^{-as}F(s)\\} = f(t-a)u(t-a)$ with $a=2$ yields $\\sin(t-2)u(t-2)$.",
      "hint": "Since $\\frac{1}{s^2+1} = \\mathcal{L}\\{\\sin t\\}$ and the factor is $e^{-2s}$, apply $\\mathcal{L}^{-1}\\{e^{-as}F(s)\\} = f(t-a)u(t-a)$ with $a = 2$."
    },
    {
      "id": "W4-T2-Q03",
      "week": 4,
      "tier": "should",
      "topic": "Radius of Convergence (Ratio Test)",
      "type": "single_select",
      "question": "Find the radius of convergence $R$ of the power series $\\sum_{n=1}^{\\infty} \\frac{(3x)^n}{n^2}$.",
      "options": [
        {
          "id": "W4-T2-Q03-opt0",
          "text": "$R = \\frac{1}{3}$"
        },
        {
          "id": "W4-T2-Q03-opt1",
          "text": "$R = 3$"
        },
        {
          "id": "W4-T2-Q03-opt2",
          "text": "$R = 1$"
        },
        {
          "id": "W4-T2-Q03-opt3",
          "text": "$R = \\infty$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q03-opt0"
      ],
      "explanation": "Using ratio test: $L = \\lim_{n\\to\\infty} \\left|\\frac{3^{n+1} x^{n+1}}{(n+1)^2} \\cdot \\frac{n^2}{3^n x^n}\\right| = 3|x|$. Convergence requires $3|x| < 1 \\implies |x| < \\frac{1}{3}$. Radius $R = \\frac{1}{3}$.",
      "hint": "Apply the ratio test: compute $\\lim_{n\\to\\infty}|a_{n+1}/a_n|$. The series converges when this limit $< 1$, giving the interval $|x| < R$."
    },
    {
      "id": "W4-T2-Q04",
      "week": 4,
      "tier": "should",
      "topic": "Power Series Differentiation",
      "type": "single_select",
      "question": "Differentiating the series $\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n$ term-by-term yields the power series for $\\frac{1}{(1-x)^2}$. What is it?",
      "options": [
        {
          "id": "W4-T2-Q04-opt0",
          "text": "$\\sum_{n=1}^{\\infty} n x^{n-1} = 1 + 2x + 3x^2 + 4x^3 + \\dots$"
        },
        {
          "id": "W4-T2-Q04-opt1",
          "text": "$\\sum_{n=0}^{\\infty} \\frac{x^n}{n+1}$"
        },
        {
          "id": "W4-T2-Q04-opt2",
          "text": "$\\sum_{n=1}^{\\infty} n^2 x^n$"
        },
        {
          "id": "W4-T2-Q04-opt3",
          "text": "$\\sum_{n=0}^{\\infty} (n+1)^2 x^n$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q04-opt0"
      ],
      "explanation": "$\\frac{d}{dx}\\left(\\frac{1}{1-x}\\right) = \\frac{1}{(1-x)^2} = \\frac{d}{dx} \\sum_{n=0}^\\infty x^n = \\sum_{n=1}^\\infty n x^{n-1} = 1 + 2x + 3x^2 + \\dots$",
      "hint": "Differentiating a power series term-by-term: $\\frac{d}{dx}(x^n) = nx^{n-1}$. Apply this to each term of $\\sum x^n$. What is $\\frac{d}{dx}(\\frac{1}{1-x})$?"
    },
    {
      "id": "W4-T2-Q05",
      "week": 4,
      "tier": "should",
      "topic": "Power Series Solution of 1st Order ODE",
      "type": "single_select",
      "question": "For the ODE $y' - y = 0$ with $y(0) = 1$, substituting power series $y = \\sum_{n=0}^{\\infty} c_n x^n$ yields which recurrence relation?",
      "options": [
        {
          "id": "W4-T2-Q05-opt0",
          "text": "$c_{n+1} = \\frac{c_n}{n+1}$"
        },
        {
          "id": "W4-T2-Q05-opt1",
          "text": "$c_{n+1} = c_n$"
        },
        {
          "id": "W4-T2-Q05-opt2",
          "text": "$c_{n+1} = (n+1) c_n$"
        },
        {
          "id": "W4-T2-Q05-opt3",
          "text": "$c_{n+1} = \\frac{c_n}{n}$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q05-opt0"
      ],
      "explanation": "$y' = \\sum (n+1)c_{n+1} x^n$. $y' - y = 0 \\implies (n+1)c_{n+1} - c_n = 0 \\implies c_{n+1} = \\frac{c_n}{n+1}$. With $c_0=1$, $c_n = \\frac{1}{n!} \\implies y = e^x$.",
      "hint": "Substitute $y = \\sum c_n x^n$ and $y' = \\sum (n+1)c_{n+1}x^n$ into $y'-y=0$. Match coefficients of $x^n$ on both sides to get the recurrence."
    },
    {
      "id": "W4-T2-Q06",
      "week": 4,
      "tier": "should",
      "topic": "Taylor Remainder (Lagrange Form)",
      "type": "single_select",
      "question": "What is the Lagrange form of the remainder $R_n(x)$ in Taylor's Theorem centered at $x = a$?",
      "options": [
        {
          "id": "W4-T2-Q06-opt0",
          "text": "$R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!} (x - a)^{n+1}$ for some $c$ between $a$ and $x$"
        },
        {
          "id": "W4-T2-Q06-opt1",
          "text": "$R_n(x) = \\frac{f^{(n)}(c)}{n!} (x - a)^n$"
        },
        {
          "id": "W4-T2-Q06-opt2",
          "text": "$R_n(x) = f^{(n+1)}(a) (x - a)^{n+1}$"
        },
        {
          "id": "W4-T2-Q06-opt3",
          "text": "$R_n(x) = \\frac{(x - a)^{n+1}}{(n+1)!}$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q06-opt0"
      ],
      "explanation": "Lagrange remainder formula bound: $R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ where $c \\in (a,x)$.",
      "hint": "The Lagrange remainder involves the $(n+1)$-th derivative evaluated at some intermediate point $c$, divided by $(n+1)!$, times $(x-a)^{n+1}$. This bounds the error."
    },
    {
      "id": "W4-T2-Q07",
      "week": 4,
      "tier": "should",
      "topic": "Maclaurin Series Substitution",
      "type": "single_select",
      "question": "Find the first three non-zero terms of the Maclaurin series for $f(x) = e^{-x^2}$.",
      "options": [
        {
          "id": "W4-T2-Q07-opt0",
          "text": "$1 - x^2 + \\frac{x^4}{2}$"
        },
        {
          "id": "W4-T2-Q07-opt1",
          "text": "$1 - x + \\frac{x^2}{2}$"
        },
        {
          "id": "W4-T2-Q07-opt2",
          "text": "$1 - 2x^2 + 4x^4$"
        },
        {
          "id": "W4-T2-Q07-opt3",
          "text": "$x^2 - \\frac{x^4}{2} + \\frac{x^6}{6}$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q07-opt0"
      ],
      "explanation": "Substitute $u = -x^2$ into $e^u = 1 + u + \\frac{u^2}{2!} + \\dots \\implies e^{-x^2} = 1 - x^2 + \\frac{x^4}{2} - \\dots$",
      "hint": "Substitute $u = -x^2$ directly into the known series $e^u = 1 + u + u^2/2! + \\ldots$ and replace $u$ with $-x^2$ throughout."
    },
    {
      "id": "W4-T2-Q08",
      "week": 4,
      "tier": "should",
      "topic": "Power Series Integration",
      "type": "single_select",
      "question": "Integrating $\\frac{1}{1+x^2} = \\sum_{n=0}^{\\infty} (-1)^n x^{2n}$ term-by-term yields the Maclaurin series for $\\arctan(x)$. What is it?",
      "options": [
        {
          "id": "W4-T2-Q08-opt0",
          "text": "$\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{2n+1} = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\dots$"
        },
        {
          "id": "W4-T2-Q08-opt1",
          "text": "$\\sum_{n=0}^{\\infty} \\frac{x^{2n+1}}{2n+1}$"
        },
        {
          "id": "W4-T2-Q08-opt2",
          "text": "$\\sum_{n=1}^{\\infty} (-1)^n \\frac{x^{2n}}{2n}$"
        },
        {
          "id": "W4-T2-Q08-opt3",
          "text": "$\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^n}{n+1}$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q08-opt0"
      ],
      "explanation": "$\\arctan(x) = \\int_0^x \\frac{1}{1+t^2} dt = \\sum_{n=0}^\\infty (-1)^n \\int_0^x t^{2n} dt = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{2n+1}$.",
      "hint": "Integrate $\\frac{1}{1+x^2} = \\sum_{n=0}^\\infty (-x^2)^n = \\sum (-1)^n x^{2n}$ term-by-term from 0 to $x$. Note $\\int x^{2n}dx = \\frac{x^{2n+1}}{2n+1}$."
    },
    {
      "id": "W4-T2-Q09",
      "week": 4,
      "tier": "should",
      "topic": "Interval of Convergence Endpoints",
      "type": "multiple_select",
      "question": "For the power series $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\dots$, select ALL correct statements regarding its convergence interval:",
      "options": [
        {
          "id": "W4-T2-Q09-opt0",
          "text": "The radius of convergence is $R = 1$."
        },
        {
          "id": "W4-T2-Q09-opt1",
          "text": "The series converges at $x = 1$ (Alternating Harmonic Series)."
        },
        {
          "id": "W4-T2-Q09-opt2",
          "text": "The series diverges at $x = -1$ (Harmonic Series)."
        },
        {
          "id": "W4-T2-Q09-opt3",
          "text": "The interval of convergence is $(-1, 1]$."
        }
      ],
      "correct_indices": [
        "W4-T2-Q09-opt0",
        "W4-T2-Q09-opt1",
        "W4-T2-Q09-opt2",
        "W4-T2-Q09-opt3"
      ],
      "explanation": "All 4 options are correct! Radius $R=1$, at $x=1$ it converges to $\\ln(2)$, at $x=-1$ it diverges to $-\\infty$. Interval is $(-1, 1]$.",
      "hint": "Use the ratio test to find $R = 1$. At $x = 1$: the series becomes the alternating harmonic series (converges). At $x = -1$: the series becomes $-1 - 1/2 - 1/3 - \\ldots$ (diverges). So which endpoints are included?"
    },
    {
      "id": "W4-T2-Q10",
      "week": 4,
      "tier": "should",
      "topic": "Laplace of Piecewise Exponential",
      "type": "single_select",
      "question": "Find $\\mathcal{L}\\{e^{2t} u(t - 3)\\}$.",
      "options": [
        {
          "id": "W4-T2-Q10-opt0",
          "text": "$\\frac{e^{-3(s-2)}}{s-2}$"
        },
        {
          "id": "W4-T2-Q10-opt1",
          "text": "$\\frac{e^{-3s}}{s-2}$"
        },
        {
          "id": "W4-T2-Q10-opt2",
          "text": "$\\frac{e^{6-3s}}{s}$"
        },
        {
          "id": "W4-T2-Q10-opt3",
          "text": "$\\frac{e^{-3s}}{s+2}$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q10-opt0"
      ],
      "explanation": "Rewrite $e^{2t} = e^{2(t-3)+6} = e^6 e^{2(t-3)}$. By 2nd Shifting theorem: $\\mathcal{L}\\{e^6 e^{2(t-3)} u(t-3)\\} = e^6 e^{-3s} \\frac{1}{s-2} = \\frac{e^{-3(s-2)}}{s-2}$.",
      "hint": "Rewrite $e^{2t} = e^{2(t-3)+6} = e^6 \\cdot e^{2(t-3)}$. Now $e^{2(t-3)}u(t-3)$ matches the form for the Second Shifting Theorem with $f(t) = e^{2t}$."
    },
    {
      "id": "W4-T3-Q01",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Impulse Forcing ODE via Laplace",
      "type": "single_select",
      "question": "Solve the IVP $y'' + 9y = 6\\delta(t - \\pi)$ with $y(0) = 0, y'(0) = 0$.",
      "options": [
        {
          "id": "W4-T3-Q01-opt0",
          "text": "$y(t) = 2 \\sin(3(t - \\pi)) u(t - \\pi)$"
        },
        {
          "id": "W4-T3-Q01-opt1",
          "text": "$y(t) = 6 \\sin(3(t - \\pi)) u(t - \\pi)$"
        },
        {
          "id": "W4-T3-Q01-opt2",
          "text": "$y(t) = 2 \\cos(3(t - \\pi)) u(t - \\pi)$"
        },
        {
          "id": "W4-T3-Q01-opt3",
          "text": "$y(t) = 6 \\delta(t - \\pi)$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q01-opt0"
      ],
      "explanation": "$(s^2+9)Y(s) = 6e^{-\\pi s} \\implies Y(s) = 6e^{-\\pi s} \\frac{1}{s^2+9} = 2e^{-\\pi s} \\frac{3}{s^2+9}$. Inverting: $y(t) = 2\\sin(3(t-\\pi)) u(t-\\pi)$.",
      "hint": "Take Laplace: $(s^2+9)Y = 6e^{-\\pi s}$. Solve for $Y(s) = 6e^{-\\pi s}/(s^2+9)$. Rewrite to match $\\frac{\\omega}{s^2+\\omega^2}$ (with $\\omega = 3$), then apply 2nd Shifting Theorem."
    },
    {
      "id": "W4-T3-Q02",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Recurrence Relation (Harmonic Oscillator)",
      "type": "single_select",
      "question": "Substituting $y = \\sum_{n=0}^{\\infty} c_n x^n$ into $y'' + y = 0$ yields which 2-step recurrence relation?",
      "options": [
        {
          "id": "W4-T3-Q02-opt0",
          "text": "$c_{n+2} = -\\frac{c_n}{(n+2)(n+1)}$"
        },
        {
          "id": "W4-T3-Q02-opt1",
          "text": "$c_{n+2} = \\frac{c_n}{(n+2)(n+1)}$"
        },
        {
          "id": "W4-T3-Q02-opt2",
          "text": "$c_{n+2} = -\\frac{c_n}{n+2}$"
        },
        {
          "id": "W4-T3-Q02-opt3",
          "text": "$c_{n+1} = -c_n$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q02-opt0"
      ],
      "explanation": "$\\sum (n+2)(n+1)c_{n+2} x^n + \\sum c_n x^n = 0 \\implies c_{n+2} = -\\frac{c_n}{(n+2)(n+1)}$, generating sine and cosine series.",
      "hint": "Substitute $y = \\sum c_n x^n$ and $y'' = \\sum (n+2)(n+1)c_{n+2}x^n$ into $y'' + y = 0$. Set the coefficient of $x^n$ to zero."
    },
    {
      "id": "W4-T3-Q03",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Singular Points Classification",
      "type": "single_select",
      "question": "For the ODE $x^2(x-1) y'' + x y' + (x+1) y = 0$, classify the singular points $x = 0$ and $x = 1$.",
      "options": [
        {
          "id": "W4-T3-Q03-opt0",
          "text": "$x = 0$ is regular singular; $x = 1$ is regular singular"
        },
        {
          "id": "W4-T3-Q03-opt1",
          "text": "$x = 0$ is ordinary; $x = 1$ is irregular singular"
        },
        {
          "id": "W4-T3-Q03-opt2",
          "text": "$x = 0$ is irregular singular; $x = 1$ is regular singular"
        },
        {
          "id": "W4-T3-Q03-opt3",
          "text": "$x = 0$ and $x = 1$ are both ordinary points"
        }
      ],
      "correct_indices": [
        "W4-T3-Q03-opt0"
      ],
      "explanation": "$P(x) = \\frac{1}{x(x-1)}$ and $Q(x) = \\frac{x+1}{x^2(x-1)}$. Both $x P(x)$ and $x^2 Q(x)$ are analytic at $x=0$, and $(x-1)P(x)$ and $(x-1)^2 Q(x)$ are analytic at $x=1$. Both are regular singular.",
      "hint": "Standard form with $P(x) = \\frac{1}{x(x-1)}$ and $Q(x) = \\frac{x+1}{x^2(x-1)}$. Check if $xP$ and $x^2Q$ are analytic at $x=0$, and if $(x-1)P$ and $(x-1)^2Q$ are analytic at $x=1$."
    },
    {
      "id": "W4-T3-Q04",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Frobenius Method Series Form",
      "type": "single_select",
      "question": "In the Method of Frobenius around regular singular point $x = 0$, the solution is assumed in the form:",
      "options": [
        {
          "id": "W4-T3-Q04-opt0",
          "text": "$y(x) = x^r \\sum_{n=0}^{\\infty} c_n x^n = \\sum_{n=0}^{\\infty} c_n x^{n+r}$ with $c_0 \\neq 0$"
        },
        {
          "id": "W4-T3-Q04-opt1",
          "text": "$y(x) = \\sum_{n=0}^{\\infty} c_n x^n$"
        },
        {
          "id": "W4-T3-Q04-opt2",
          "text": "$y(x) = e^{r x} \\sum_{n=0}^{\\infty} c_n x^n$"
        },
        {
          "id": "W4-T3-Q04-opt3",
          "text": "$y(x) = \\sum_{n=0}^{\\infty} \\frac{c_n}{x^{n+r}}$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q04-opt0"
      ],
      "explanation": "Frobenius method assumes series $y = x^r \\sum_{n=0}^\\infty c_n x^n = \\sum_{n=0}^\\infty c_n x^{n+r}$ where $r$ is determined by the indicial equation.",
      "hint": "Frobenius form includes a power $x^r$ multiplying a standard power series. The exponent $r$ is not necessarily an integer and is determined by the indicial equation."
    },
    {
      "id": "W4-T3-Q05",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Limit Evaluation via Taylor Series",
      "type": "single_select",
      "question": "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(x) - x}{x^3}$ using Maclaurin series.",
      "options": [
        {
          "id": "W4-T3-Q05-opt0",
          "text": "$-\\frac{1}{6}$"
        },
        {
          "id": "W4-T3-Q05-opt1",
          "text": "$\\frac{1}{6}$"
        },
        {
          "id": "W4-T3-Q05-opt2",
          "text": "$0$"
        },
        {
          "id": "W4-T3-Q05-opt3",
          "text": "$-\\frac{1}{3}$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q05-opt0"
      ],
      "explanation": "Substitute $\\sin(x) = x - \\frac{x^3}{6} + O(x^5) \\implies \\sin(x) - x = -\\frac{x^3}{6} + O(x^5)$. Dividing by $x^3$ and taking limit $x\\to 0$ yields $-\\frac{1}{6}$.",
      "hint": "Write $\\sin(x) = x - x^3/6 + \\ldots$, so $\\sin(x) - x = -x^3/6 + O(x^5)$. Divide by $x^3$ and take the limit."
    },
    {
      "id": "W4-T3-Q06",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Power Series Solution around Ordinary Point",
      "type": "single_select",
      "question": "For the ODE $y'' - x y = 0$ (Airy's equation), what is the minimum radius of convergence $R$ for a power series solution centered at $x = 0$?",
      "options": [
        {
          "id": "W4-T3-Q06-opt0",
          "text": "$R = \\infty$"
        },
        {
          "id": "W4-T3-Q06-opt1",
          "text": "$R = 1$"
        },
        {
          "id": "W4-T3-Q06-opt2",
          "text": "$R = 0$"
        },
        {
          "id": "W4-T3-Q06-opt3",
          "text": "$R = \\pi$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q06-opt0"
      ],
      "explanation": "Since coefficient functions $P(x)=0$ and $Q(x)=-x$ are polynomials (analytic everywhere), $x=0$ is an ordinary point and $R = \\infty$.",
      "hint": "For $y'' - xy = 0$ (Airy's equation), the coefficient functions are polynomials. $x = 0$ is an ordinary point. The theorem guarantees $R = \\infty$ at ordinary points."
    },
    {
      "id": "W4-T3-Q07",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Indicial Equation Roots",
      "type": "single_select",
      "question": "For $2x^2 y'' + x y' - y = 0$, substituting $y = x^r$ yields the indicial equation. What are the roots $r_1, r_2$?",
      "options": [
        {
          "id": "W4-T3-Q07-opt0",
          "text": "$r_1 = 1, \\quad r_2 = -\\frac{1}{2}$"
        },
        {
          "id": "W4-T3-Q07-opt1",
          "text": "$r_1 = 2, \\quad r_2 = -1$"
        },
        {
          "id": "W4-T3-Q07-opt2",
          "text": "$r_1 = \\frac{1}{2}, \\quad r_2 = -1$"
        },
        {
          "id": "W4-T3-Q07-opt3",
          "text": "$r_1 = 1, \\quad r_2 = \\frac{1}{2}$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q07-opt0"
      ],
      "explanation": "$2 r(r-1) + r - 1 = 2r^2 - r - 1 = (2r+1)(r-1) = 0 \\implies r_1 = 1, r_2 = -1/2$.",
      "hint": "Substitute $y = x^r$ into $2x^2 y'' + xy' - y = 0$ and cancel $x^r$. This gives $2r(r-1) + r - 1 = 0$. Factorise the quadratic."
    },
    {
      "id": "W4-T3-Q08",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Maclaurin Series Composition",
      "type": "single_select",
      "question": "Find the first three non-zero terms of the Maclaurin series for $f(x) = \\tan(x)$.",
      "options": [
        {
          "id": "W4-T3-Q08-opt0",
          "text": "$x + \\frac{x^3}{3} + \\frac{2x^5}{15}$"
        },
        {
          "id": "W4-T3-Q08-opt1",
          "text": "$x - \\frac{x^3}{3} + \\frac{x^5}{5}$"
        },
        {
          "id": "W4-T3-Q08-opt2",
          "text": "$x + \\frac{x^3}{6} + \\frac{x^5}{120}$"
        },
        {
          "id": "W4-T3-Q08-opt3",
          "text": "$1 + x + x^2$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q08-opt0"
      ],
      "explanation": "Using long division of $\\sin(x) / \\cos(x)$ or derivative evaluation: $\\tan(x) = x + \\frac{x^3}{3} + \\frac{2x^5}{15} + \\dots$",
      "hint": "$\\tan x = \\sin x / \\cos x$. Divide the known series for $\\sin x$ by the known series for $\\cos x$ using long division up to $x^5$ terms."
    },
    {
      "id": "W4-T3-Q09",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Frobenius Cases Classification",
      "type": "multiple_select",
      "question": "In the Method of Frobenius with indicial roots $r_1, r_2$ (where $\\text{Re}(r_1) \\ge \\text{Re}(r_2)$), select ALL true statements:",
      "options": [
        {
          "id": "W4-T3-Q09-opt0",
          "text": "If $r_1 - r_2$ is NOT an integer, two linearly independent Frobenius series exist."
        },
        {
          "id": "W4-T3-Q09-opt1",
          "text": "If $r_1 = r_2$, the second solution contains a logarithmic term $\\ln(x) y_1(x)$."
        },
        {
          "id": "W4-T3-Q09-opt2",
          "text": "If $r_1 - r_2 = k$ (a positive integer), the second solution MAY contain a logarithmic term."
        },
        {
          "id": "W4-T3-Q09-opt3",
          "text": "The first solution $y_1(x)$ is always of the form $x^{r_1} \\sum_{n=0}^{\\infty} c_n x^n$."
        }
      ],
      "correct_indices": [
        "W4-T3-Q09-opt0",
        "W4-T3-Q09-opt1",
        "W4-T3-Q09-opt2",
        "W4-T3-Q09-opt3"
      ],
      "explanation": "All 4 statements are fundamental theorems of the Frobenius method!",
      "hint": "All four statements are true theorems of the Frobenius method. When roots differ by a non-integer, you get two independent Frobenius series. When equal, a $\\ln$ term appears."
    },
    {
      "id": "W4-T3-Q10",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Taylor Series Radius from Complex Poles",
      "type": "single_select",
      "question": "What is the radius of convergence $R$ of the Maclaurin series for $f(x) = \\frac{1}{x^2 + 9}$?",
      "options": [
        {
          "id": "W4-T3-Q10-opt0",
          "text": "$R = 3$"
        },
        {
          "id": "W4-T3-Q10-opt1",
          "text": "$R = 9$"
        },
        {
          "id": "W4-T3-Q10-opt2",
          "text": "$R = 1$"
        },
        {
          "id": "W4-T3-Q10-opt3",
          "text": "$R = \\infty$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q10-opt0"
      ],
      "explanation": "Poles occur in the complex plane at $x = \\pm 3i$. The distance from expansion center $x=0$ to nearest pole $\\pm 3i$ is $|0 - 3i| = 3$. Thus $R = 3$.",
      "hint": "The radius of convergence of a real power series equals the distance (in the complex plane) from the expansion centre to the nearest singularity. Here $f(x) = 1/(x^2+9)$ has singularities at $x = \\pm 3i$."
    },
    {
      "id": "W4-T4-Q01",
      "week": 4,
      "tier": "extra",
      "topic": "Rodrigues' Formula for Legendre Polynomials",
      "type": "single_select",
      "question": "Rodrigues' formula for the $n$-th Legendre polynomial $P_n(x)$ is given by:",
      "options": [
        {
          "id": "W4-T4-Q01-opt0",
          "text": "$P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n} \\left[(x^2 - 1)^n\\right]$"
        },
        {
          "id": "W4-T4-Q01-opt1",
          "text": "$P_n(x) = \\frac{1}{n!} \\frac{d^n}{dx^n} (x^2 + 1)^n$"
        },
        {
          "id": "W4-T4-Q01-opt2",
          "text": "$P_n(x) = 2^n n! \\frac{d^n}{dx^n} (x^2 - 1)^n$"
        },
        {
          "id": "W4-T4-Q01-opt3",
          "text": "$P_n(x) = \\frac{1}{2^n} (x^2 - 1)^n$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q01-opt0"
      ],
      "explanation": "Rodrigues' formula explicitly computes Legendre polynomials: $P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n} [(x^2-1)^n]$.",
      "hint": "Rodrigues' formula uses $n$-th derivatives of $(x^2-1)^n$. The pre-factor is $\\frac{1}{2^n n!}$ (not $2^n n!$)."
    },
    {
      "id": "W4-T4-Q02",
      "week": 4,
      "tier": "extra",
      "topic": "Airy Differential Equation Solutions",
      "type": "single_select",
      "question": "Airy's differential equation $y'' - x y = 0$ has power series solution $y = c_0 y_1(x) + c_1 y_2(x)$. What are the first non-zero terms of $y_1(x)$ ($y(0)=1, y'(0)=0$)?",
      "options": [
        {
          "id": "W4-T4-Q02-opt0",
          "text": "$y_1(x) = 1 + \\frac{x^3}{6} + \\frac{x^6}{180} + \\dots$"
        },
        {
          "id": "W4-T4-Q02-opt1",
          "text": "$y_1(x) = 1 + x + \\frac{x^2}{2} + \\dots$"
        },
        {
          "id": "W4-T4-Q02-opt2",
          "text": "$y_1(x) = 1 + \\frac{x^2}{2} + \\frac{x^4}{12} + \\dots$"
        },
        {
          "id": "W4-T4-Q02-opt3",
          "text": "$y_1(x) = 1 - \\frac{x^3}{6} + \\dots$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q02-opt0"
      ],
      "explanation": "Recurrence $(n+2)(n+1)c_{n+2} = c_{n-1}$. For $y_1$: $c_0=1, c_1=0, c_2=0 \\implies c_3 = \\frac{c_0}{3\\cdot 2} = \\frac{1}{6}$, $c_6 = \\frac{c_3}{6\\cdot 5} = \\frac{1}{180}$.",
      "hint": "The recurrence for Airy's equation: $(n+2)(n+1)c_{n+2} = c_{n-1}$. With $c_0 = 1$ and $c_1 = 0$, all even coefficients $c_2, c_5, \\ldots = 0$, and $c_3 = c_0/(3\\cdot 2)$."
    },
    {
      "id": "W4-T4-Q03",
      "week": 4,
      "tier": "extra",
      "topic": "Bessel Function Order Zero $J_0(x)$",
      "type": "single_select",
      "question": "The Bessel function of the first kind of order zero $J_0(x)$ is given by the Maclaurin series:",
      "options": [
        {
          "id": "W4-T4-Q03-opt0",
          "text": "$J_0(x) = \\sum_{k=0}^{\\infty} \\frac{(-1)^k}{(k!)^2} \\left(\\frac{x}{2}\\right)^{2k} = 1 - \\frac{x^2}{4} + \\frac{x^4}{64} - \\dots$"
        },
        {
          "id": "W4-T4-Q03-opt1",
          "text": "$J_0(x) = \\sum_{k=0}^{\\infty} \\frac{x^{2k}}{k!}$"
        },
        {
          "id": "W4-T4-Q03-opt2",
          "text": "$J_0(x) = \\sum_{k=0}^{\\infty} (-1)^k \\frac{x^k}{k!}$"
        },
        {
          "id": "W4-T4-Q03-opt3",
          "text": "$J_0(x) = \\cos(x) - \\sin(x)$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q03-opt0"
      ],
      "explanation": "Applying Frobenius method to Bessel ODE $x^2 y'' + x y' + x^2 y = 0$ yields $J_0(x) = \\sum_{k=0}^\\infty \\frac{(-1)^k}{(k!)^2}\\left(\\frac{x}{2}\\right)^{2k}$.",
      "hint": "Applying Frobenius with $r = 0$ to $x^2 y'' + xy' + x^2 y = 0$ gives a two-step recurrence. The result has $(k!)^2$ in the denominator and $(x/2)^{2k}$ pattern."
    },
    {
      "id": "W4-T4-Q04",
      "week": 4,
      "tier": "extra",
      "topic": "Asymptotic Expansion Big-O Notation",
      "type": "single_select",
      "question": "If $f(x) = \\sin(x) - x + \\frac{x^3}{6}$, what is the tightest Big-O order bound near $x = 0$?",
      "options": [
        {
          "id": "W4-T4-Q04-opt0",
          "text": "$O(x^5)$"
        },
        {
          "id": "W4-T4-Q04-opt1",
          "text": "$O(x^3)$"
        },
        {
          "id": "W4-T4-Q04-opt2",
          "text": "$O(x^4)$"
        },
        {
          "id": "W4-T4-Q04-opt3",
          "text": "$O(x^6)$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q04-opt0"
      ],
      "explanation": "Since $\\sin(x) = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\dots$, subtracting $x - \\frac{x^3}{6}$ leaves lead error term $\\frac{x^5}{120} = O(x^5)$.",
      "hint": "From the known Maclaurin series for $\\sin x$: after cancelling $x$ and $-x^3/6$, the leading remaining term is $+x^5/120 = O(x^5)$."
    },
    {
      "id": "W4-T4-Q05",
      "week": 4,
      "tier": "extra",
      "topic": "Legendre Polynomial Orthogonality",
      "type": "single_select",
      "question": "Legendre polynomials $P_n(x)$ satisfy the orthogonality relation $\\int_{-1}^{1} P_m(x) P_n(x) \\, dx = 0$ for $m \\neq n$. What is $\\int_{-1}^{1} [P_n(x)]^2 \\, dx$?",
      "options": [
        {
          "id": "W4-T4-Q05-opt0",
          "text": "$\\frac{2}{2n + 1}$"
        },
        {
          "id": "W4-T4-Q05-opt1",
          "text": "$\\frac{1}{2n + 1}$"
        },
        {
          "id": "W4-T4-Q05-opt2",
          "text": "$1$"
        },
        {
          "id": "W4-T4-Q05-opt3",
          "text": "$\\frac{2}{n + 1}$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q05-opt0"
      ],
      "explanation": "The normalization integral for Legendre polynomials is $\\int_{-1}^1 [P_n(x)]^2 dx = \\frac{2}{2n+1}$.",
      "hint": "The normalization integral for Legendre polynomials yields $\\frac{2}{2n+1}$. This can be derived from the Rodrigues formula via repeated integration by parts."
    },
    {
      "id": "W4-T4-Q06",
      "week": 4,
      "tier": "extra",
      "topic": "Frobenius Logarithmic Second Solution",
      "type": "single_select",
      "question": "When indicial roots are equal ($r_1 = r_2 = r$), the second linearly independent solution $y_2(x)$ in Frobenius method is constructed via:",
      "options": [
        {
          "id": "W4-T4-Q06-opt0",
          "text": "$y_2(x) = y_1(x) \\ln(x) + x^r \\sum_{n=1}^{\\infty} b_n x^n = \\left.\\frac{\\partial y(x,r)}{\\partial r}\\right|_{r=r_1}$"
        },
        {
          "id": "W4-T4-Q06-opt1",
          "text": "$y_2(x) = x^{-r} \\sum c_n x^n$"
        },
        {
          "id": "W4-T4-Q06-opt2",
          "text": "$y_2(x) = y_1(x) e^x$"
        },
        {
          "id": "W4-T4-Q06-opt3",
          "text": "$y_2(x) = \\frac{y_1(x)}{x}$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q06-opt0"
      ],
      "explanation": "Differentiating general Frobenius series $y(x,r)$ with respect to root parameter $r$ yields $y_2(x) = y_1(x)\\ln x + x^r \\sum_{n=1}^\\infty b_n x^n$.",
      "hint": "When indicial roots are equal, differentiating the parametric Frobenius solution $y(x,r)$ with respect to $r$ introduces $\\ln x$ from $\\frac{\\partial}{{\\partial r}} x^r = x^r \\ln x$."
    },
    {
      "id": "W4-T4-Q07",
      "week": 4,
      "tier": "extra",
      "topic": "Hypergeometric Differential Equation",
      "type": "single_select",
      "question": "Gauss' Hypergeometric differential equation $x(1-x) y'' + [c - (a+b+1)x] y' - a b y = 0$ has regular singular points at:",
      "options": [
        {
          "id": "W4-T4-Q07-opt0",
          "text": "$x = 0, \\quad x = 1, \\quad \\text{and } x = \\infty$"
        },
        {
          "id": "W4-T4-Q07-opt1",
          "text": "$x = 0 \\text{ only}$"
        },
        {
          "id": "W4-T4-Q07-opt2",
          "text": "$x = 1 \\text{ only}$"
        },
        {
          "id": "W4-T4-Q07-opt3",
          "text": "$x = a, \\quad x = b, \\quad x = c$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q07-opt0"
      ],
      "explanation": "The hypergeometric equation has exactly three regular singular points on the Riemann sphere: $x = 0, 1, \\text{and } \\infty$.",
      "hint": "The hypergeometric equation $x(1-x)y'' + [c-(a+b+1)x]y' - aby = 0$ has singularities wherever the leading coefficient $x(1-x)$ vanishes (and at $\\infty$)."
    },
    {
      "id": "W4-T4-Q08",
      "week": 4,
      "tier": "extra",
      "topic": "Taylor Series Analytic Continuation",
      "type": "multiple_select",
      "question": "Select ALL true statements regarding complex analytic functions and power series:",
      "options": [
        {
          "id": "W4-T4-Q08-opt0",
          "text": "A function is analytic at $x_0$ if it equals its Taylor series in a neighborhood of $x_0$."
        },
        {
          "id": "W4-T4-Q08-opt1",
          "text": "The radius of convergence $R$ equals the distance from $x_0$ to the nearest complex singularity."
        },
        {
          "id": "W4-T4-Q08-opt2",
          "text": "$f(x) = \\frac{1}{1+x^2}$ has $R = 1$ centered at $x=0$ due to poles at $x = \\pm i$."
        },
        {
          "id": "W4-T4-Q08-opt3",
          "text": "Real smooth functions ($C^\\infty$) are always equal to their Taylor series."
        }
      ],
      "correct_indices": [
        "W4-T4-Q08-opt0",
        "W4-T4-Q08-opt1",
        "W4-T4-Q08-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are fundamental theorems of complex analysis. Option 4 is false (Cauchy's non-analytic smooth function $e^{-1/x^2}$ is a counterexample).",
      "hint": "Option 4 claims all $C^\\infty$ functions equal their Taylor series. The function $e^{-1/x^2}$ (extended by 0 at $x=0$) is $C^\\infty$ but has zero Maclaurin series — a counterexample."
    },
    {
      "id": "W4-T4-Q09",
      "week": 4,
      "tier": "extra",
      "topic": "Hermite Differential Equation",
      "type": "single_select",
      "question": "Hermite's differential equation $y'' - 2x y' + 2n y = 0$ has polynomial solutions (Hermite polynomials $H_n(x)$) for integer $n \\ge 0$. What is $H_3(x)$?",
      "options": [
        {
          "id": "W4-T4-Q09-opt0",
          "text": "$8x^3 - 12x$"
        },
        {
          "id": "W4-T4-Q09-opt1",
          "text": "$4x^3 - 6x$"
        },
        {
          "id": "W4-T4-Q09-opt2",
          "text": "$x^3 - 3x$"
        },
        {
          "id": "W4-T4-Q09-opt3",
          "text": "$8x^3 + 12x$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q09-opt0"
      ],
      "explanation": "Standard Hermite polynomials: $H_0=1, H_1=2x, H_2=4x^2-2, H_3=8x^3-12x$ (used in quantum harmonic oscillator wavefunctions).",
      "hint": "Standard Hermite polynomials: $H_0=1, H_1=2x, H_2=4x^2-2$. Continue with $H_3$ using the recurrence $H_{n+1}(x) = 2x H_n(x) - 2n H_{n-1}(x)$."
    },
    {
      "id": "W4-T4-Q10",
      "week": 4,
      "tier": "extra",
      "topic": "Generating Function for Legendre Polynomials",
      "type": "single_select",
      "question": "The generating function for Legendre polynomials $P_n(x)$ is given by $\\frac{1}{\\sqrt{1 - 2xt + t^2}} = \\sum_{n=0}^{\\infty} P_n(x) t^n$. What is $P_2(x)$?",
      "options": [
        {
          "id": "W4-T4-Q10-opt0",
          "text": "$\\frac{1}{2}(3x^2 - 1)$"
        },
        {
          "id": "W4-T4-Q10-opt1",
          "text": "$\\frac{1}{2}(3x^2 + 1)$"
        },
        {
          "id": "W4-T4-Q10-opt2",
          "text": "$x^2 - 1$"
        },
        {
          "id": "W4-T4-Q10-opt3",
          "text": "$\\frac{1}{2}(x^2 - 3)$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q10-opt0"
      ],
      "explanation": "Expanding $\\frac{1}{\\sqrt{1 - (2xt - t^2)}}$ via binomial series yields $P_0(x)=1, P_1(x)=x, P_2(x)=\\frac{1}{2}(3x^2-1)$.",
      "hint": "Expand $\\frac{1}{\\sqrt{1-2xt+t^2}}$ in powers of $t$. The coefficient of $t^2$ gives $P_2(x)$. Alternatively recall $P_2(x) = \\frac{1}{2}(3x^2-1)$ directly."
    }
  ]
};
