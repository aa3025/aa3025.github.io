window.QUIZ_BANK_WEEK6 = {
  "module": "4014SCN Calculus and Applications",
  "week": 6,
  "title": "Week 6 Quiz Bank: Comprehensive Revision & Exam Rehearsal",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W6-T1-Q01",
      "week": 6,
      "tier": "core",
      "topic": "Differentiation Rules (Week 1)",
      "type": "single_select",
      "question": "Evaluate the derivative of $f(x) = x^4 e^{3x}$.",
      "options": [
        {
          "id": "W6-T1-Q01-opt0",
          "text": "$x^3 e^{3x} (4 + 3x)$"
        },
        {
          "id": "W6-T1-Q01-opt1",
          "text": "$12x^3 e^{3x}$"
        },
        {
          "id": "W6-T1-Q01-opt2",
          "text": "$x^3 e^{3x} (4 - 3x)$"
        },
        {
          "id": "W6-T1-Q01-opt3",
          "text": "$4x^3 e^{3x} + 3e^{3x}$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q01-opt0"
      ],
      "explanation": "Product rule $f'(x) = 4x^3 e^{3x} + x^4 (3e^{3x}) = x^3 e^{3x}(4 + 3x)$.",
      "hint": "This is a product of two functions: $x^4$ and $e^{3x}$. Apply the product rule and then factor out common terms from the result."
    },
    {
      "id": "W6-T1-Q02",
      "week": 6,
      "tier": "core",
      "topic": "Fundamental Theorem of Calculus (Week 2)",
      "type": "single_select",
      "question": "Evaluate $\\int_0^2 (6x^2 - 2x + 1) \\, dx$.",
      "options": [
        {
          "id": "W6-T1-Q02-opt0",
          "text": "$14$"
        },
        {
          "id": "W6-T1-Q02-opt1",
          "text": "$12$"
        },
        {
          "id": "W6-T1-Q02-opt2",
          "text": "$16$"
        },
        {
          "id": "W6-T1-Q02-opt3",
          "text": "$10$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q02-opt0"
      ],
      "explanation": "Antiderivative $F(x) = 2x^3 - x^2 + x$. $F(2) - F(0) = (2(8) - 4 + 2) - 0 = 16 - 4 + 2 = 14$.",
      "hint": "Find the antiderivative $F(x) = 2x^3 - x^2 + x$, then apply FTC: $F(2) - F(0)$."
    },
    {
      "id": "W6-T1-Q03",
      "week": 6,
      "tier": "core",
      "topic": "Separable ODEs (Week 3)",
      "type": "single_select",
      "question": "Solve $\\frac{dy}{dx} = 4x y$ for $y > 0$.",
      "options": [
        {
          "id": "W6-T1-Q03-opt0",
          "text": "$y = C e^{2x^2}$"
        },
        {
          "id": "W6-T1-Q03-opt1",
          "text": "$y = 2x^2 + C$"
        },
        {
          "id": "W6-T1-Q03-opt2",
          "text": "$y = C e^{4x}$"
        },
        {
          "id": "W6-T1-Q03-opt3",
          "text": "$y = e^{2x^2 + C} + 4$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q03-opt0"
      ],
      "explanation": "$\\int \\frac{dy}{y} = \\int 4x dx \\implies \\ln(y) = 2x^2 + K \\implies y = C e^{2x^2}$.",
      "hint": "Separate variables: $\\frac{dy}{y} = 4x\\,dx$. Integrate both sides, then exponentiate."
    },
    {
      "id": "W6-T1-Q04",
      "week": 6,
      "tier": "core",
      "topic": "Maclaurin Series (Week 4)",
      "type": "single_select",
      "question": "What are the first three non-zero terms of the Maclaurin series for $\\cos(2x)$?",
      "options": [
        {
          "id": "W6-T1-Q04-opt0",
          "text": "$1 - 2x^2 + \\frac{2x^4}{3}$"
        },
        {
          "id": "W6-T1-Q04-opt1",
          "text": "$1 - 4x^2 + 16x^4$"
        },
        {
          "id": "W6-T1-Q04-opt2",
          "text": "$1 - x^2 + x^4$"
        },
        {
          "id": "W6-T1-Q04-opt3",
          "text": "$2x - \\frac{8x^3}{6} + \\frac{32x^5}{120}$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q04-opt0"
      ],
      "explanation": "Substitute $u=2x$ into $\\cos u = 1 - \\frac{u^2}{2} + \\frac{u^4}{24} \\implies 1 - \\frac{4x^2}{2} + \\frac{16x^4}{24} = 1 - 2x^2 + \\frac{2x^4}{3}$.",
      "hint": "Substitute $u = 2x$ into the Maclaurin series $\\cos u = 1 - u^2/2! + u^4/4! - \\ldots$ and simplify each coefficient."
    },
    {
      "id": "W6-T1-Q05",
      "week": 6,
      "tier": "core",
      "topic": "Partial Derivatives (Week 5)",
      "type": "single_select",
      "question": "For $f(x, y) = x^3 y^2 - 4x + 2y$, find $\\frac{\\partial^2 f}{\\partial x \\partial y}$.",
      "options": [
        {
          "id": "W6-T1-Q05-opt0",
          "text": "$6x^2 y$"
        },
        {
          "id": "W6-T1-Q05-opt1",
          "text": "$3x^2 y^2$"
        },
        {
          "id": "W6-T1-Q05-opt2",
          "text": "$6x y^2$"
        },
        {
          "id": "W6-T1-Q05-opt3",
          "text": "$6x^2$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q05-opt0"
      ],
      "explanation": "$f_x = 3x^2 y^2 - 4 \\implies \\frac{\\partial}{\\partial y}(3x^2 y^2 - 4) = 6x^2 y$.",
      "hint": "Find $f_x = 3x^2 y^2 - 4$ first, then differentiate that with respect to $y$ to get the mixed partial."
    },
    {
      "id": "W6-T1-Q06",
      "week": 6,
      "tier": "core",
      "topic": "Laplace Transform of Exponentials (Week 3)",
      "type": "single_select",
      "question": "Find $\\mathcal{L}\\{e^{-5t}\\}$.",
      "options": [
        {
          "id": "W6-T1-Q06-opt0",
          "text": "$\\frac{1}{s + 5}$"
        },
        {
          "id": "W6-T1-Q06-opt1",
          "text": "$\\frac{1}{s - 5}$"
        },
        {
          "id": "W6-T1-Q06-opt2",
          "text": "$\\frac{5}{s}$"
        },
        {
          "id": "W6-T1-Q06-opt3",
          "text": "$\\frac{1}{s^2 + 25}$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q06-opt0"
      ],
      "explanation": "$\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}$. For $a=-5$: $\\frac{1}{s - (-5)} = \\frac{1}{s + 5}$.",
      "hint": "Recall $\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}$. Here $a = -5$, so replace $s-a$ with $s-(-5) = s+5$."
    },
    {
      "id": "W6-T1-Q07",
      "week": 6,
      "tier": "core",
      "topic": "Gradient Vector (Week 5)",
      "type": "single_select",
      "question": "Find $\\nabla f(1, 3)$ for $f(x, y) = x^2 y + 2y$.",
      "options": [
        {
          "id": "W6-T1-Q07-opt0",
          "text": "$\\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix}$"
        },
        {
          "id": "W6-T1-Q07-opt1",
          "text": "$\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$"
        },
        {
          "id": "W6-T1-Q07-opt2",
          "text": "$\\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}$"
        },
        {
          "id": "W6-T1-Q07-opt3",
          "text": "$\\begin{pmatrix} 6 \\\\ 1 \\end{pmatrix}$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q07-opt0"
      ],
      "explanation": "$f_x = 2xy \\implies f_x(1,3) = 6$. $f_y = x^2 + 2 \\implies f_y(1,3) = 3$. $\\nabla f = \\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix}$.",
      "hint": "Compute $f_x = 2xy$ and $f_y = x^2 + 2$, then evaluate each at $(1,3)$."
    },
    {
      "id": "W6-T1-Q08",
      "week": 6,
      "tier": "core",
      "topic": "Double Integrals (Week 5)",
      "type": "single_select",
      "question": "Evaluate $\\int_0^1 \\int_0^2 3x^2 y \\, dy \\, dx$.",
      "options": [
        {
          "id": "W6-T1-Q08-opt0",
          "text": "$2$"
        },
        {
          "id": "W6-T1-Q08-opt1",
          "text": "$4$"
        },
        {
          "id": "W6-T1-Q08-opt2",
          "text": "$6$"
        },
        {
          "id": "W6-T1-Q08-opt3",
          "text": "$1$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q08-opt0"
      ],
      "explanation": "Inner integral $\\int_0^2 3x^2 y dy = \\left[ \\frac{3}{2}x^2 y^2 \\right]_0^2 = 6x^2$. Outer integral $\\int_0^1 6x^2 dx = \\left[ 2x^3 \\right]_0^1 = 2$.",
      "hint": "Inner integral first: $\\int_0^2 3x^2 y\\,dy = 3x^2 [y^2/2]_0^2 = 6x^2$. Then integrate $\\int_0^1 6x^2\\,dx$."
    },
    {
      "id": "W6-T1-Q09",
      "week": 6,
      "tier": "core",
      "topic": "Core Differentiation & Integration Identities",
      "type": "multiple_select",
      "question": "Select ALL valid calculus identities below:",
      "options": [
        {
          "id": "W6-T1-Q09-opt0",
          "text": "$\\frac{d}{dx}(\\tan x) = \\sec^2 x$"
        },
        {
          "id": "W6-T1-Q09-opt1",
          "text": "$\\int \\frac{1}{x} dx = \\ln|x| + C$"
        },
        {
          "id": "W6-T1-Q09-opt2",
          "text": "$\\mathcal{L}\\{1\\} = \\frac{1}{s}$"
        },
        {
          "id": "W6-T1-Q09-opt3",
          "text": "$\\frac{d}{dx}(\\cos x) = \\sin x$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q09-opt0",
        "W6-T1-Q09-opt1",
        "W6-T1-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are correct standard identities. Option 4 is false ($\\frac{d}{dx}(\\cos x) = -\\sin x$).",
      "hint": "Option 4: recall the sign — $\\frac{d}{dx}(\\cos x)$ has a negative sign. Compare with the derivative of $\\sin x$."
    },
    {
      "id": "W6-T1-Q10",
      "week": 6,
      "tier": "core",
      "topic": "Core Multivariable & Series Statements",
      "type": "multiple_select",
      "question": "Which of the following multivariable and series statements are CORRECT? (Select all that apply)",
      "options": [
        {
          "id": "W6-T1-Q10-opt0",
          "text": "Gradient $\\nabla f$ points in the direction of steepest ascent."
        },
        {
          "id": "W6-T1-Q10-opt1",
          "text": "Heaviside function $u(t-a) = 0$ for $t < a$."
        },
        {
          "id": "W6-T1-Q10-opt2",
          "text": "Fubini's theorem allows swapping integration order for continuous functions over rectangles."
        },
        {
          "id": "W6-T1-Q10-opt3",
          "text": "$\\sum_{n=0}^{\\infty} x^n = \\frac{1}{1+x}$ for $|x| < 1$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q10-opt0",
        "W6-T1-Q10-opt1",
        "W6-T1-Q10-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are true. Option 4 is false ($\\sum x^n = \\frac{1}{1-x}$).",
      "hint": "Option 4 writes the geometric series sum as $\\frac{1}{1+x}$, but the correct sum is $\\frac{1}{1-x}$."
    },
    {
      "id": "W6-T2-Q01",
      "week": 6,
      "tier": "should",
      "topic": "Integration by Parts (Week 2)",
      "type": "single_select",
      "question": "Evaluate $\\int x^2 \\sin(x) \\, dx$.",
      "options": [
        {
          "id": "W6-T2-Q01-opt0",
          "text": "$-x^2 \\cos(x) + 2x \\sin(x) + 2\\cos(x) + C$"
        },
        {
          "id": "W6-T2-Q01-opt1",
          "text": "$-x^2 \\cos(x) - 2x \\sin(x) + C$"
        },
        {
          "id": "W6-T2-Q01-opt2",
          "text": "$x^2 \\cos(x) - 2x \\sin(x) + C$"
        },
        {
          "id": "W6-T2-Q01-opt3",
          "text": "$-x^2 \\cos(x) + 2\\sin(x) + C$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q01-opt0"
      ],
      "explanation": "Applying IBP twice: $\\int x^2 \\sin x dx = -x^2 \\cos x + 2 \\int x \\cos x dx = -x^2 \\cos x + 2(x \\sin x + \\cos x) + C$.",
      "hint": "Apply integration by parts twice with $u = x^2$ (reduce polynomial degree each time). First get $\\int x\\cos x\\,dx$, then handle that integral too."
    },
    {
      "id": "W6-T2-Q02",
      "week": 6,
      "tier": "should",
      "topic": "2nd Order Homogeneous ODE (Week 3)",
      "type": "single_select",
      "question": "Solve $y'' - 6y' + 9y = 0$.",
      "options": [
        {
          "id": "W6-T2-Q02-opt0",
          "text": "$y = (C_1 + C_2 x) e^{3x}$"
        },
        {
          "id": "W6-T2-Q02-opt1",
          "text": "$y = C_1 e^{3x} + C_2 e^{-3x}$"
        },
        {
          "id": "W6-T2-Q02-opt2",
          "text": "$y = C_1 e^{3x} + C_2 e^{3x}$"
        },
        {
          "id": "W6-T2-Q02-opt3",
          "text": "$y = e^{3x} (C_1 \\cos(3x) + C_2 \\sin(3x))$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q02-opt0"
      ],
      "explanation": "Characteristic $(r-3)^2 = 0 \\implies r=3$ (repeated root). Solution: $y = (C_1 + C_2 x) e^{3x}$.",
      "hint": "Write the characteristic equation $r^2 - 6r + 9 = 0$. Factor it as a perfect square. When a root is repeated, the second solution uses an extra factor of $x$."
    },
    {
      "id": "W6-T2-Q03",
      "week": 6,
      "tier": "should",
      "topic": "2nd Shifting Theorem Inverse (Week 4)",
      "type": "single_select",
      "question": "Evaluate $\\mathcal{L}^{-1}\\left\\{\\frac{e^{-4s}}{s - 2}\\right\\}$.",
      "options": [
        {
          "id": "W6-T2-Q03-opt0",
          "text": "$e^{2(t-4)} u(t-4)$"
        },
        {
          "id": "W6-T2-Q03-opt1",
          "text": "$e^{-4(t-2)} u(t-2)$"
        },
        {
          "id": "W6-T2-Q03-opt2",
          "text": "$e^{2t} u(t-4)$"
        },
        {
          "id": "W6-T2-Q03-opt3",
          "text": "$e^{-2(t-4)} u(t-4)$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q03-opt0"
      ],
      "explanation": "$\\mathcal{L}^{-1}\\{\\frac{1}{s-2}\\} = e^{2t}$. By 2nd Shifting theorem: $\\mathcal{L}^{-1}\\{e^{-4s} F(s)\\} = e^{2(t-4)} u(t-4)$.",
      "hint": "Identify $F(s) = \\frac{1}{s-2}$, so $f(t) = e^{2t}$. The factor $e^{-4s}$ shifts the time by $a = 4$: result is $f(t-4)u(t-4)$."
    },
    {
      "id": "W6-T2-Q04",
      "week": 6,
      "tier": "should",
      "topic": "Second Derivative Test Optimization (Week 5)",
      "type": "single_select",
      "question": "For $f(x, y) = x^3 + y^3 - 3xy$, classify the critical point at $(1, 1)$.",
      "options": [
        {
          "id": "W6-T2-Q04-opt0",
          "text": "Local Minimum"
        },
        {
          "id": "W6-T2-Q04-opt1",
          "text": "Local Maximum"
        },
        {
          "id": "W6-T2-Q04-opt2",
          "text": "Saddle Point"
        },
        {
          "id": "W6-T2-Q04-opt3",
          "text": "Inconclusive"
        }
      ],
      "correct_indices": [
        "W6-T2-Q04-opt0"
      ],
      "explanation": "$f_{xx} = 6x, f_{yy} = 6y, f_{xy} = -3$. At $(1,1)$: $f_{xx}=6, f_{yy}=6, f_{xy}=-3 \\implies D = 36 - 9 = 27 > 0$. Since $f_{xx} = 6 > 0$, it is a Local Minimum.",
      "hint": "Compute $f_{xx} = 6x$, $f_{yy} = 6y$, $f_{xy} = -3$ at $(1,1)$. Then $D = f_{xx}f_{yy} - f_{xy}^2$. If $D > 0$ and $f_{xx} > 0$, it is a local minimum."
    },
    {
      "id": "W6-T2-Q05",
      "week": 6,
      "tier": "should",
      "topic": "Radius of Convergence (Week 4)",
      "type": "single_select",
      "question": "Find the radius of convergence $R$ for $\\sum_{n=0}^{\\infty} \\frac{(2x)^n}{n!}$.",
      "options": [
        {
          "id": "W6-T2-Q05-opt0",
          "text": "$R = \\infty$"
        },
        {
          "id": "W6-T2-Q05-opt1",
          "text": "$R = \\frac{1}{2}$"
        },
        {
          "id": "W6-T2-Q05-opt2",
          "text": "$R = 2$"
        },
        {
          "id": "W6-T2-Q05-opt3",
          "text": "$R = 1$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q05-opt0"
      ],
      "explanation": "Ratio test: $L = \\lim \\left| \\frac{2^{n+1} x^{n+1}}{(n+1)!} \\cdot \\frac{n!}{2^n x^n} \\right| = \\lim \\frac{2|x|}{n+1} = 0 < 1$ for all $x$. Thus $R = \\infty$.",
      "hint": "Apply the ratio test: $L = \\lim_{n\\to\\infty}|a_{n+1}/a_n|$. The $(n+1)!$ in the denominator grows much faster than the numerator. Does $L$ converge to 0?"
    },
    {
      "id": "W6-T2-Q06",
      "week": 6,
      "tier": "should",
      "topic": "Simpson's 1/3 Rule Accuracy (Week 2)",
      "type": "single_select",
      "question": "What is the order of error accuracy for Simpson's 1/3 Rule with step size $h = \\frac{b-a}{n}$?",
      "options": [
        {
          "id": "W6-T2-Q06-opt0",
          "text": "$O(h^4)$"
        },
        {
          "id": "W6-T2-Q06-opt1",
          "text": "$O(h^2)$"
        },
        {
          "id": "W6-T2-Q06-opt2",
          "text": "$O(h^3)$"
        },
        {
          "id": "W6-T2-Q06-opt3",
          "text": "$O(h)$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q06-opt0"
      ],
      "explanation": "Simpson's 1/3 Rule has local error $O(h^5)$ and global error $O(h^4)$ (fourth-order accuracy).",
      "hint": "Simpson's 1/3 Rule has fourth-order accuracy: its error scales as $h^4$ (where $h = (b-a)/n$). Compare with Trapezoidal ($h^2$) and Midpoint ($h^2$)."
    },
    {
      "id": "W6-T2-Q07",
      "week": 6,
      "tier": "should",
      "topic": "Polar Double Integrals (Week 5)",
      "type": "single_select",
      "question": "Evaluate $\\iint_R (x^2 + y^2) \\, dA$ over region $R: x^2 + y^2 \\le 9$.",
      "options": [
        {
          "id": "W6-T2-Q07-opt0",
          "text": "$\\frac{81\\pi}{2}$"
        },
        {
          "id": "W6-T2-Q07-opt1",
          "text": "$81\\pi$"
        },
        {
          "id": "W6-T2-Q07-opt2",
          "text": "$\\frac{27\\pi}{2}$"
        },
        {
          "id": "W6-T2-Q07-opt3",
          "text": "$18\\pi$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q07-opt0"
      ],
      "explanation": "In polar coordinates: $\\int_0^{2\\pi} \\int_0^3 r^2 (r dr d\\theta) = 2\\pi \\int_0^3 r^3 dr = 2\\pi \\left[ \\frac{r^4}{4} \\right]_0^3 = 2\\pi \\left(\\frac{81}{4}\\right) = \\frac{81\\pi}{2}$.",
      "hint": "In polar coordinates, $x^2 + y^2 = r^2$. The disk $r \\leq 3$ means $r \\in [0,3]$ and $\\theta \\in [0, 2\\pi]$. Use $dA = r\\,dr\\,d\\theta$."
    },
    {
      "id": "W6-T2-Q08",
      "week": 6,
      "tier": "should",
      "topic": "Laplace of 2nd Derivative IVP (Week 3)",
      "type": "single_select",
      "question": "Solve $y'' + y = 0$ with $y(0) = 3, y'(0) = 4$ using Laplace transforms.",
      "options": [
        {
          "id": "W6-T2-Q08-opt0",
          "text": "$y(t) = 3\\cos(t) + 4\\sin(t)$"
        },
        {
          "id": "W6-T2-Q08-opt1",
          "text": "$y(t) = 4\\cos(t) + 3\\sin(t)$"
        },
        {
          "id": "W6-T2-Q08-opt2",
          "text": "$y(t) = 3e^t + 4e^{-t}$"
        },
        {
          "id": "W6-T2-Q08-opt3",
          "text": "$y(t) = 7\\cos(t)$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q08-opt0"
      ],
      "explanation": "$s^2 Y - 3s - 4 + Y = 0 \\implies (s^2+1)Y = 3s + 4 \\implies Y(s) = \\frac{3s}{s^2+1} + \\frac{4}{s^2+1} \\implies y(t) = 3\\cos(t) + 4\\sin(t)$.",
      "hint": "Apply Laplace: $s^2Y - sy(0) - y'(0) + Y = 0$. Substitute $y(0) = 3, y'(0) = 4$, solve for $Y(s)$, split into terms matching cosine and sine."
    },
    {
      "id": "W6-T2-Q09",
      "week": 6,
      "tier": "should",
      "topic": "Multivariable Optimization & Integration",
      "type": "multiple_select",
      "question": "Which of the following multivariable statements are CORRECT? (Select all that apply)",
      "options": [
        {
          "id": "W6-T2-Q09-opt0",
          "text": "Tangent plane to $z = f(x,y)$ at $(x_0,y_0,z_0)$ is $z - z_0 = f_x(x_0,y_0)(x-x_0) + f_y(x_0,y_0)(y-y_0)$."
        },
        {
          "id": "W6-T2-Q09-opt1",
          "text": "A critical point is where $f_x = 0$ AND $f_y = 0$ simultaneously."
        },
        {
          "id": "W6-T2-Q09-opt2",
          "text": "Area of 2D region $D$ can be calculated via $\\iint_D 1 \\, dA$."
        },
        {
          "id": "W6-T2-Q09-opt3",
          "text": "Polar Jacobian determinant factor is $r^2$."
        }
      ],
      "correct_indices": [
        "W6-T2-Q09-opt0",
        "W6-T2-Q09-opt1",
        "W6-T2-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are correct. Option 4 is false (polar Jacobian factor is $r$, not $r^2$).",
      "hint": "Option 4: the polar Jacobian factor is $r$ (not $r^2$). Recall that $dA = r\\,dr\\,d\\theta$ in polar coordinates."
    },
    {
      "id": "W6-T2-Q10",
      "week": 6,
      "tier": "should",
      "topic": "Power Series Recurrence (Week 4)",
      "type": "single_select",
      "question": "Substituting $y = \\sum c_n x^n$ into $y' - 3y = 0$ with $c_0 = 2$ yields which solution?",
      "options": [
        {
          "id": "W6-T2-Q10-opt0",
          "text": "$y = 2 e^{3x}$"
        },
        {
          "id": "W6-T2-Q10-opt1",
          "text": "$y = e^{3x} + 2$"
        },
        {
          "id": "W6-T2-Q10-opt2",
          "text": "$y = 2 e^{-3x}$"
        },
        {
          "id": "W6-T2-Q10-opt3",
          "text": "$y = 3 e^{2x}$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q10-opt0"
      ],
      "explanation": "$c_{n+1} = \\frac{3c_n}{n+1} \\implies c_n = \\frac{3^n c_0}{n!} = \\frac{2 \\cdot 3^n}{n!} \\implies y = 2 \\sum \\frac{(3x)^n}{n!} = 2 e^{3x}$.",
      "hint": "The recurrence gives $c_{n+1} = \\frac{3c_n}{n+1}$. With $c_0 = 2$, derive a pattern for $c_n$ and recognise the resulting power series as $2e^{3x}$."
    },
    {
      "id": "W6-T3-Q01",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Weierstrass Substitution (Week 2)",
      "type": "single_select",
      "question": "Under Weierstrass substitution $t = \\tan(x/2)$, what is $\\cos(x)$?",
      "options": [
        {
          "id": "W6-T3-Q01-opt0",
          "text": "$\\frac{1 - t^2}{1 + t^2}$"
        },
        {
          "id": "W6-T3-Q01-opt1",
          "text": "$\\frac{2t}{1 + t^2}$"
        },
        {
          "id": "W6-T3-Q01-opt2",
          "text": "$\\frac{1 + t^2}{1 - t^2}$"
        },
        {
          "id": "W6-T3-Q01-opt3",
          "text": "$\\frac{2t}{1 - t^2}$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q01-opt0"
      ],
      "explanation": "Using double-angle identity: $\\cos(x) = \\frac{1 - \\tan^2(x/2)}{1 + \\tan^2(x/2)} = \\frac{1 - t^2}{1 + t^2}$.",
      "hint": "Recall the double-angle identity: $\\cos x = \\cos^2(x/2) - \\sin^2(x/2)$. Divide numerator and denominator by $\\cos^2(x/2)$ and express in terms of $t = \\tan(x/2)$."
    },
    {
      "id": "W6-T3-Q02",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Variation of Parameters (Week 3)",
      "type": "single_select",
      "question": "In Variation of Parameters for $y'' + y = f(x)$ with complementary solutions $y_1 = \\cos x, y_2 = \\sin x$, what is the Wronskian $W(y_1, y_2)$?",
      "options": [
        {
          "id": "W6-T3-Q02-opt0",
          "text": "$1$"
        },
        {
          "id": "W6-T3-Q02-opt1",
          "text": "$0$"
        },
        {
          "id": "W6-T3-Q02-opt2",
          "text": "$\\cos^2 x - \\sin^2 x$"
        },
        {
          "id": "W6-T3-Q02-opt3",
          "text": "$-1$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q02-opt0"
      ],
      "explanation": "$W = y_1 y_2' - y_1' y_2 = (\\cos x)(\\cos x) - (-\\sin x)(\\sin x) = \\cos^2 x + \\sin^2 x = 1$.",
      "hint": "The Wronskian is $W = y_1 y_2' - y_1' y_2$. For $y_1 = \\cos x$ and $y_2 = \\sin x$, compute each derivative and substitute."
    },
    {
      "id": "W6-T3-Q03",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Convolution Theorem (Week 3)",
      "type": "single_select",
      "question": "Evaluate $\\mathcal{L}^{-1}\\left\\{\\frac{1}{s(s^2+1)}\\right\\}$ using the Convolution Theorem.",
      "options": [
        {
          "id": "W6-T3-Q03-opt0",
          "text": "$1 - \\cos(t)$"
        },
        {
          "id": "W6-T3-Q03-opt1",
          "text": "$\\sin(t)$"
        },
        {
          "id": "W6-T3-Q03-opt2",
          "text": "$1 - \\sin(t)$"
        },
        {
          "id": "W6-T3-Q03-opt3",
          "text": "$t - \\cos(t)$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q03-opt0"
      ],
      "explanation": "Convolution of $1$ and $\\sin(t)$: $\\int_0^t \\sin(\\tau) d\\tau = [-\\cos(\\tau)]_0^t = 1 - \\cos(t)$.",
      "hint": "$\\frac{1}{s(s^2+1)} = \\mathcal{L}\\{1\\} \\cdot \\mathcal{L}\\{\\sin t\\}$. By Convolution Theorem, the inverse Laplace is $(1 * \\sin)(t) = \\int_0^t \\sin\\tau\\,d\\tau$."
    },
    {
      "id": "W6-T3-Q04",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Limit via Taylor Series (Week 4)",
      "type": "single_select",
      "question": "Evaluate $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$.",
      "options": [
        {
          "id": "W6-T3-Q04-opt0",
          "text": "$\\frac{1}{2}$"
        },
        {
          "id": "W6-T3-Q04-opt1",
          "text": "$1$"
        },
        {
          "id": "W6-T3-Q04-opt2",
          "text": "$0$"
        },
        {
          "id": "W6-T3-Q04-opt3",
          "text": "$\\frac{1}{6}$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q04-opt0"
      ],
      "explanation": "Substitute $e^x = 1 + x + \\frac{x^2}{2} + O(x^3) \\implies e^x - 1 - x = \\frac{x^2}{2} + O(x^3)$. Dividing by $x^2$ gives $\\frac{1}{2}$.",
      "hint": "Write $e^x = 1 + x + x^2/2 + x^3/6 + \\ldots$, subtract $(1 + x)$, leaving $x^2/2 + O(x^3)$. Divide by $x^2$ and take the limit."
    },
    {
      "id": "W6-T3-Q05",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Lagrange Multipliers (Week 5)",
      "type": "single_select",
      "question": "Find the maximum of $f(x,y) = x + 2y$ subject to $x^2 + y^2 = 5$.",
      "options": [
        {
          "id": "W6-T3-Q05-opt0",
          "text": "$5$"
        },
        {
          "id": "W6-T3-Q05-opt1",
          "text": "$\\sqrt{5}$"
        },
        {
          "id": "W6-T3-Q05-opt2",
          "text": "$10$"
        },
        {
          "id": "W6-T3-Q05-opt3",
          "text": "$25$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q05-opt0"
      ],
      "explanation": "$\\nabla f = \\langle 1, 2 \\rangle = \\lambda \\langle 2x, 2y \\rangle \\implies x = \\frac{1}{2\\lambda}, y = \\frac{1}{\\lambda} = 2x$. Constraint $x^2 + (2x)^2 = 5x^2 = 5 \\implies x = 1, y = 2$. Max value $f(1,2) = 1 + 4 = 5$.",
      "hint": "Set $\\nabla f = \\lambda \\nabla g$: $(1, 2) = \\lambda(2x, 2y)$. This gives $x = 1/(2\\lambda)$ and $y = 1/\\lambda$, so $y = 2x$. Substitute into $x^2 + y^2 = 5$."
    },
    {
      "id": "W6-T3-Q06",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Jacobian Determinant (Week 5)",
      "type": "single_select",
      "question": "For transformation $x = u + v, y = u - v$, what is the absolute value of the Jacobian determinant $|J(u,v)|$?",
      "options": [
        {
          "id": "W6-T3-Q06-opt0",
          "text": "$2$"
        },
        {
          "id": "W6-T3-Q06-opt1",
          "text": "$1$"
        },
        {
          "id": "W6-T3-Q06-opt2",
          "text": "$0$"
        },
        {
          "id": "W6-T3-Q06-opt3",
          "text": "$4$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q06-opt0"
      ],
      "explanation": "$J = \\begin{vmatrix} 1 & 1 \\\\ 1 & -1 \\end{vmatrix} = -1 - 1 = -2 \\implies |J| = 2$.",
      "hint": "Compute the $2\\times 2$ Jacobian determinant: $\\begin{vmatrix} x_u & x_v \\\\ y_u & y_v\\end{vmatrix} = (1)(-1) - (1)(1) = -2$. The absolute value is $|J| = 2$."
    },
    {
      "id": "W6-T3-Q07",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Method of Frobenius (Week 4)",
      "type": "single_select",
      "question": "For $x^2 y'' + 3x y' + y = 0$, what are the roots $r_1, r_2$ of the indicial equation?",
      "options": [
        {
          "id": "W6-T3-Q07-opt0",
          "text": "$r_1 = r_2 = -1$ (Repeated root)"
        },
        {
          "id": "W6-T3-Q07-opt1",
          "text": "$r_1 = 1, r_2 = -1$"
        },
        {
          "id": "W6-T3-Q07-opt2",
          "text": "$r_1 = 0, r_2 = -2$"
        },
        {
          "id": "W6-T3-Q07-opt3",
          "text": "$r_1 = -1, r_2 = -3$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q07-opt0"
      ],
      "explanation": "Indicial equation $r(r-1) + 3r + 1 = r^2 + 2r + 1 = (r+1)^2 = 0 \\implies r_1 = r_2 = -1$.",
      "hint": "Divide by $x^2$ to get standard form, then substitute $y = x^r$. The indicial equation comes from setting the coefficient of $x^r$ to zero. Factor the resulting quadratic."
    },
    {
      "id": "W6-T3-Q08",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Center of Mass Calculation (Week 5)",
      "type": "single_select",
      "question": "Find the mass $M$ of a square lamina $[0,1] \\times [0,1]$ with density $\\rho(x,y) = x + y$.",
      "options": [
        {
          "id": "W6-T3-Q08-opt0",
          "text": "$1$"
        },
        {
          "id": "W6-T3-Q08-opt1",
          "text": "$\\frac{1}{2}$"
        },
        {
          "id": "W6-T3-Q08-opt2",
          "text": "$2$"
        },
        {
          "id": "W6-T3-Q08-opt3",
          "text": "$\\frac{3}{2}$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q08-opt0"
      ],
      "explanation": "$M = \\int_0^1 \\int_0^1 (x+y) dx dy = \\int_0^1 \\left[ \\frac{x^2}{2} + xy \\right]_0^1 dy = \\int_0^1 (\\frac{1}{2} + y) dy = \\left[ \\frac{y}{2} + \\frac{y^2}{2} \\right]_0^1 = 1$.",
      "hint": "Integrate $\\rho(x,y) = x+y$ over the unit square. Inner integral w.r.t. $x$: $\\int_0^1(x+y)dx = 1/2 + y$. Then integrate w.r.t. $y$."
    },
    {
      "id": "W6-T3-Q09",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Advanced Calculus Properties",
      "type": "multiple_select",
      "question": "Select ALL true advanced calculus properties below:",
      "options": [
        {
          "id": "W6-T3-Q09-opt0",
          "text": "Dirac delta impulse transform is $\\mathcal{L}\\{\\delta(t-a)\\} = e^{-as}$."
        },
        {
          "id": "W6-T3-Q09-opt1",
          "text": "If indicial roots equal $r_1 = r_2$, the 2nd Frobenius solution contains a $\\ln(x) y_1(x)$ term."
        },
        {
          "id": "W6-T3-Q09-opt2",
          "text": "$\\int_0^{\\infty} \\frac{1}{x^2+1} dx = \\frac{\\pi}{2}$."
        },
        {
          "id": "W6-T3-Q09-opt3",
          "text": "Gradient vector is parallel to level curves."
        }
      ],
      "correct_indices": [
        "W6-T3-Q09-opt0",
        "W6-T3-Q09-opt1",
        "W6-T3-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are true. Option 4 is false (gradient is orthogonal/perpendicular to level curves).",
      "hint": "Option 4 says the gradient is parallel to level curves. Actually, $\\nabla f$ is perpendicular to level curves — it points in the direction of steepest ascent."
    },
    {
      "id": "W6-T3-Q10",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Romberg Integration Extrapolation (Week 2)",
      "type": "single_select",
      "question": "Romberg integration combines Trapezoidal estimates $R_{k,1}$ to eliminate $O(h^2)$ error via formula:",
      "options": [
        {
          "id": "W6-T3-Q10-opt0",
          "text": "$R_{k,2} = \\frac{4 R_{k,1} - R_{k-1,1}}{3}$"
        },
        {
          "id": "W6-T3-Q10-opt1",
          "text": "$R_{k,2} = \\frac{2 R_{k,1} - R_{k-1,1}}{2}$"
        },
        {
          "id": "W6-T3-Q10-opt2",
          "text": "$R_{k,2} = \\frac{R_{k,1} + R_{k-1,1}}{2}$"
        },
        {
          "id": "W6-T3-Q10-opt3",
          "text": "$R_{k,2} = \\frac{8 R_{k,1} - R_{k-1,1}}{7}$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q10-opt0"
      ],
      "explanation": "Richardson extrapolation for Trapezoidal rule yields $R_{k,2} = \\frac{4 R_{k,1} - R_{k-1,1}}{3}$.",
      "hint": "The Romberg formula for the second column is Richardson extrapolation: $R_{k,2} = \\frac{4 R_{k,1} - R_{k-1,1}}{3}$. This cancels the $O(h^2)$ leading error term."
    },
    {
      "id": "W6-T4-Q01",
      "week": 6,
      "tier": "extra",
      "topic": "Gauss 2-Point Quadrature (Week 2)",
      "type": "single_select",
      "question": "Gauss-Legendre 2-point quadrature evaluates $\\int_{-1}^1 f(x) dx \\approx f(-1/\\sqrt{3}) + f(1/\\sqrt{3})$. What is the maximum degree polynomial integrated EXACTLY?",
      "options": [
        {
          "id": "W6-T4-Q01-opt0",
          "text": "$3$"
        },
        {
          "id": "W6-T4-Q01-opt1",
          "text": "$2$"
        },
        {
          "id": "W6-T4-Q01-opt2",
          "text": "$4$"
        },
        {
          "id": "W6-T4-Q01-opt3",
          "text": "$5$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q01-opt0"
      ],
      "explanation": "An $n$-point Gaussian quadrature rule exact-integrates polynomials of degree up to $2n - 1$. For $n=2$, degree is $2(2)-1 = 3$.",
      "hint": "For $n$-point Gauss-Legendre, the degree of exactness is $2n-1$. With $n = 2$ points, what is $2(2)-1$?"
    },
    {
      "id": "W6-T4-Q02",
      "week": 6,
      "tier": "extra",
      "topic": "Gamma Function (Week 2)",
      "type": "single_select",
      "question": "What is the value of $\\Gamma(1/2)$?",
      "options": [
        {
          "id": "W6-T4-Q02-opt0",
          "text": "$\\sqrt{\\pi}$"
        },
        {
          "id": "W6-T4-Q02-opt1",
          "text": "$\\frac{\\sqrt{\\pi}}{2}$"
        },
        {
          "id": "W6-T4-Q02-opt2",
          "text": "$\\pi$"
        },
        {
          "id": "W6-T4-Q02-opt3",
          "text": "$1$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q02-opt0"
      ],
      "explanation": "Using Gaussian integral substitution: $\\Gamma(1/2) = \\int_0^\\infty x^{-1/2} e^{-x} dx = 2\\int_0^\\infty e^{-u^2} du = \\sqrt{\\pi}$.",
      "hint": "Use the substitution $x = u^2$ in the definition $\\Gamma(1/2) = \\int_0^\\infty x^{-1/2}e^{-x}dx$ to relate it to the Gaussian integral $\\int_{-\\infty}^\\infty e^{-u^2}du = \\sqrt{\\pi}$."
    },
    {
      "id": "W6-T4-Q03",
      "week": 6,
      "tier": "extra",
      "topic": "Green's Theorem in the Plane (Week 5)",
      "type": "single_select",
      "question": "Evaluate $\\oint_C (x^2 y \\, dx + x y^2 \\, dy)$ counterclockwise around unit circle $C: x^2 + y^2 = 1$ using Green's Theorem.",
      "options": [
        {
          "id": "W6-T4-Q03-opt0",
          "text": "$0$"
        },
        {
          "id": "W6-T4-Q03-opt1",
          "text": "$\\pi$"
        },
        {
          "id": "W6-T4-Q03-opt2",
          "text": "$\\frac{\\pi}{2}$"
        },
        {
          "id": "W6-T4-Q03-opt3",
          "text": "$2\\pi$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q03-opt0"
      ],
      "explanation": "$Q_x - P_y = y^2 - x^2$. In polar: $\\int_0^{2\\pi} \\int_0^1 (r^2\\sin^2\\theta - r^2\\cos^2\\theta) r dr d\\theta = \\left(\\int_0^1 r^3 dr\\right) \\int_0^{2\\pi} -\\cos(2\\theta) d\\theta = (1/4)(0) = 0$.",
      "hint": "Apply Green's Theorem: compute $Q_x - P_y$ where $P = x^2 y$ and $Q = xy^2$. Then integrate in polar over the unit disk."
    },
    {
      "id": "W6-T4-Q04",
      "week": 6,
      "tier": "extra",
      "topic": "Spherical Coordinates Volume (Week 5)",
      "type": "single_select",
      "question": "What is the volume element $dV$ in spherical coordinates $(\\rho, \\theta, \\phi)$?",
      "options": [
        {
          "id": "W6-T4-Q04-opt0",
          "text": "$\\rho^2 \\sin(\\phi) \\, d\\rho \\, d\\phi \\, d\\theta$"
        },
        {
          "id": "W6-T4-Q04-opt1",
          "text": "$\\rho \\sin(\\phi) \\, d\\rho \\, d\\phi \\, d\\theta$"
        },
        {
          "id": "W6-T4-Q04-opt2",
          "text": "$\\rho^2 \\cos(\\phi) \\, d\\rho \\, d\\phi \\, d\\theta$"
        },
        {
          "id": "W6-T4-Q04-opt3",
          "text": "$\\rho^2 \\, d\\rho \\, d\\phi \\, d\\theta$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q04-opt0"
      ],
      "explanation": "Spherical Jacobian determinant transformation yields $dV = \\rho^2 \\sin(\\phi) d\\rho d\\phi d\\theta$.",
      "hint": "The spherical Jacobian $\\rho^2 \\sin\\phi$ arises from computing $\\det(\\partial(x,y,z)/\\partial(\\rho,\\phi,\\theta))$. It involves $\\sin\\phi$, not $\\cos\\phi$."
    },
    {
      "id": "W6-T4-Q05",
      "week": 6,
      "tier": "extra",
      "topic": "Rodrigues' Formula (Week 4)",
      "type": "single_select",
      "question": "Rodrigues' formula for $n$-th Legendre polynomial $P_n(x)$ is:",
      "options": [
        {
          "id": "W6-T4-Q05-opt0",
          "text": "$P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n} \\left[(x^2 - 1)^n\\right]$"
        },
        {
          "id": "W6-T4-Q05-opt1",
          "text": "$P_n(x) = \\frac{1}{n!} \\frac{d^n}{dx^n} (x^2 + 1)^n$"
        },
        {
          "id": "W6-T4-Q05-opt2",
          "text": "$P_n(x) = 2^n n! \\frac{d^n}{dx^n} (x^2 - 1)^n$"
        },
        {
          "id": "W6-T4-Q05-opt3",
          "text": "$P_n(x) = \\frac{1}{2^n} (x^2 - 1)^n$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q05-opt0"
      ],
      "explanation": "Rodrigues' formula: $P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n}[(x^2-1)^n]$.",
      "hint": "Rodrigues' formula has the factor $\\frac{1}{2^n n!}$ (note: small number in front). Don't confuse with $2^n n!$ in the denominator or other variants."
    },
    {
      "id": "W6-T4-Q06",
      "week": 6,
      "tier": "extra",
      "topic": "Divergence & Curl Identites (Week 5)",
      "type": "single_select",
      "question": "For any smooth vector field $\\mathbf{F}(x,y,z)$, what is the divergence of its curl $\\nabla \\cdot (\\nabla \\times \\mathbf{F})$?",
      "options": [
        {
          "id": "W6-T4-Q06-opt0",
          "text": "$0$"
        },
        {
          "id": "W6-T4-Q06-opt1",
          "text": "$1$"
        },
        {
          "id": "W6-T4-Q06-opt2",
          "text": "$\\nabla^2 \\mathbf{F}$"
        },
        {
          "id": "W6-T4-Q06-opt3",
          "text": "\\mathbf{0}"
        }
      ],
      "correct_indices": [
        "W6-T4-Q06-opt0"
      ],
      "explanation": "By equality of mixed partials, the divergence of any curl field is identically zero: $\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$.",
      "hint": "By the vector calculus identity, $\\nabla \\cdot (\\nabla \\times \\mathbf{F})$ involves mixed partial derivatives that cancel pairwise by Clairaut's Theorem."
    },
    {
      "id": "W6-T4-Q07",
      "week": 6,
      "tier": "extra",
      "topic": "Matrix Exponential (Week 3)",
      "type": "single_select",
      "question": "The matrix exponential state transition matrix $e^{\\mathbf{A}t}$ for state space system $\\mathbf{x}' = \\mathbf{A}\\mathbf{x}$ can be computed via Laplace as:",
      "options": [
        {
          "id": "W6-T4-Q07-opt0",
          "text": "$e^{\\mathbf{A}t} = \\mathcal{L}^{-1}\\left\\{(s\\mathbf{I} - \\mathbf{A})^{-1}\\right\\}$"
        },
        {
          "id": "W6-T4-Q07-opt1",
          "text": "$e^{\\mathbf{A}t} = (s\\mathbf{I} - \\mathbf{A})^{-1}$"
        },
        {
          "id": "W6-T4-Q07-opt2",
          "text": "$e^{\\mathbf{A}t} = \\mathcal{L}\\{e^{\\mathbf{A}}\\mid_{\\mathbf{I}}\\}$"
        },
        {
          "id": "W6-T4-Q07-opt3",
          "text": "$e^{\\mathbf{A}t} = \\det(s\\mathbf{I} - \\mathbf{A}) \\mathbf{I}$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q07-opt0"
      ],
      "explanation": "Laplace transform of state space ODE yields $\\mathbf{X}(s) = (s\\mathbf{I}-\\mathbf{A})^{-1} \\mathbf{x}(0) \\implies e^{\\mathbf{A}t} = \\mathcal{L}^{-1}\\{(s\\mathbf{I}-\\mathbf{A})^{-1}\\}$.",
      "hint": "Taking Laplace of $\\mathbf{x}' = \\mathbf{A}\\mathbf{x}$ gives $(s\\mathbf{I} - \\mathbf{A})\\mathbf{X}(s) = \\mathbf{x}(0)$. Solve for $\\mathbf{X}(s)$ and invert."
    },
    {
      "id": "W6-T4-Q08",
      "week": 6,
      "tier": "extra",
      "topic": "Airy Differential Equation (Week 4)",
      "type": "single_select",
      "question": "Airy's equation $y'' - x y = 0$ has solution $y_1(x)$ ($y(0)=1, y'(0)=0$). What is the coefficient of $x^3$?",
      "options": [
        {
          "id": "W6-T4-Q08-opt0",
          "text": "$\\frac{1}{6}$"
        },
        {
          "id": "W6-T4-Q08-opt1",
          "text": "$\\frac{1}{3}$"
        },
        {
          "id": "W6-T4-Q08-opt2",
          "text": "$\\frac{1}{12}$"
        },
        {
          "id": "W6-T4-Q08-opt3",
          "text": "$0$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q08-opt0"
      ],
      "explanation": "Recurrence $(n+2)(n+1)c_{n+2} = c_{n-1} \\implies 3\\cdot 2 c_3 = c_0 = 1 \\implies c_3 = \\frac{1}{6}$.",
      "hint": "Use the Airy recurrence: $c_{n+2} = c_{n-1}/[(n+2)(n+1)]$. With $c_0 = 1, c_1 = 0$: compute $c_3 = c_0/(3 \\cdot 2)$."
    },
    {
      "id": "W6-T4-Q09",
      "week": 6,
      "tier": "extra",
      "topic": "Stretch Theorems & Vector Calculus",
      "type": "multiple_select",
      "question": "Select ALL true advanced theoretical statements below:",
      "options": [
        {
          "id": "W6-T4-Q09-opt0",
          "text": "Conservative vector fields $\\mathbf{F} = \\nabla f$ satisfy $\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = f(B) - f(A)$."
        },
        {
          "id": "W6-T4-Q09-opt1",
          "text": "Picard-Lindelöf theorem guarantees unique IVP solution if $f(x,y)$ is Lipschitz continuous in $y$."
        },
        {
          "id": "W6-T4-Q09-opt2",
          "text": "Hermite polynomials $H_n(x)$ satisfy $y'' - 2xy' + 2ny = 0$."
        },
        {
          "id": "W6-T4-Q09-opt3",
          "text": "Gauss 2-point quadrature is only accurate for linear polynomials."
        }
      ],
      "correct_indices": [
        "W6-T4-Q09-opt0",
        "W6-T4-Q09-opt1",
        "W6-T4-Q09-opt2"
      ],
      "explanation": "Options 1, 2, and 3 are fundamental theorems. Option 4 is false (2-point Gauss quadrature is exact for cubic polynomials).",
      "hint": "Option 4 says 2-point Gauss quadrature is 'only accurate for linear polynomials'. Actually, 2-point Gauss is exact for degree $\\leq 3$ polynomials."
    },
    {
      "id": "W6-T4-Q10",
      "week": 6,
      "tier": "extra",
      "topic": "General Leibniz Rule for Derivatives (Week 1 & 4)",
      "type": "single_select",
      "question": "The General Leibniz Rule for the $n$-th derivative of a product $(uv)^{(n)}$ is:",
      "options": [
        {
          "id": "W6-T4-Q10-opt0",
          "text": "$(uv)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} u^{(n-k)} v^{(k)}$"
        },
        {
          "id": "W6-T4-Q10-opt1",
          "text": "$(uv)^{(n)} = u^{(n)} v^{(n)}$"
        },
        {
          "id": "W6-T4-Q10-opt2",
          "text": "$(uv)^{(n)} = \\sum_{k=0}^{n} u^{(k)} v^{(n-k)}$"
        },
        {
          "id": "W6-T4-Q10-opt3",
          "text": "$(uv)^{(n)} = n! \\, u^{(n)} v^{(n)}$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q10-opt0"
      ],
      "explanation": "General Leibniz Rule formula $\\sum_{k=0}^{n} \\binom{n}{k} u^{(n-k)} v^{(k)}$.",
      "hint": "Compare with the binomial theorem expansion. The Leibniz rule has binomial coefficients $\\binom{n}{k}$, but the $(n-k)$-th derivative of $u$ is paired with the $k$-th derivative of $v$."
    }
  ]
};
