window.QUIZ_BANK_WEEK3 = {
  "module": "5048CMD Engineering Mathematics 2",
  "week": 3,
  "title": "Week 3: Laplace Transforms I & II",
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
      "topic": "Laplace Transform of Monomials",
      "type": "single_select",
      "question": "What is the Laplace transform $\\mathcal{L}\\{t^3\\}$ for $s > 0$?",
      "options": [
        {
          "id": "W3-T1-Q01-opt0",
          "text": "$\\frac{6}{s^4}$"
        },
        {
          "id": "W3-T1-Q01-opt1",
          "text": "$\\frac{3}{s^4}$"
        },
        {
          "id": "W3-T1-Q01-opt2",
          "text": "$\\frac{6}{s^3}$"
        },
        {
          "id": "W3-T1-Q01-opt3",
          "text": "$\\frac{1}{s^4}$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q01-opt0"
      ],
      "explanation": "By standard formula, $\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}$. For $n=3$, $3! = 6$, so $\\mathcal{L}\\{t^3\\} = \\frac{6}{s^4}$.",
      "hint": "Use the standard transform pair $\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}$."
    },
    {
      "id": "W3-T1-Q02",
      "week": 3,
      "tier": "core",
      "topic": "Laplace Transform of Exponential",
      "type": "single_select",
      "question": "What is $\\mathcal{L}\\{e^{-4t}\\}$ for $s > -4$?",
      "options": [
        {
          "id": "W3-T1-Q02-opt0",
          "text": "$\\frac{1}{s+4}$"
        },
        {
          "id": "W3-T1-Q02-opt1",
          "text": "$\\frac{1}{s-4}$"
        },
        {
          "id": "W3-T1-Q02-opt2",
          "text": "$\\frac{4}{s+4}$"
        },
        {
          "id": "W3-T1-Q02-opt3",
          "text": "$\\frac{1}{s^2 + 16}$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q02-opt0"
      ],
      "explanation": "$\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}$. With $a = -4$, this gives $\\frac{1}{s - (-4)} = \\frac{1}{s+4}$.",
      "hint": "Substitute $a=-4$ into $\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}$."
    },
    {
      "id": "W3-T1-Q03",
      "week": 3,
      "tier": "core",
      "topic": "Laplace Transform of Sine and Cosine",
      "type": "single_select",
      "question": "What is the Laplace transform $\\mathcal{L}\\{\\sin(5t)\\}$?",
      "options": [
        {
          "id": "W3-T1-Q03-opt0",
          "text": "$\\frac{5}{s^2 + 25}$"
        },
        {
          "id": "W3-T1-Q03-opt1",
          "text": "$\\frac{s}{s^2 + 25}$"
        },
        {
          "id": "W3-T1-Q03-opt2",
          "text": "$\\frac{5}{s^2 - 25}$"
        },
        {
          "id": "W3-T1-Q03-opt3",
          "text": "$\\frac{25}{s^2 + 25}$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q03-opt0"
      ],
      "explanation": "Standard transform: $\\mathcal{L}\\{\\sin(\\omega t)\\} = \\frac{\\omega}{s^2 + \\omega^2}$. For $\\omega = 5$, this is $\\frac{5}{s^2 + 25}$.",
      "hint": "Recall that sine has the frequency $\\omega$ in the numerator, whereas cosine has $s$."
    },
    {
      "id": "W3-T1-Q04",
      "week": 3,
      "tier": "core",
      "topic": "First Shifting Theorem",
      "type": "single_select",
      "question": "According to the First Shifting Theorem (Frequency Shift), if $\\mathcal{L}\\{f(t)\\} = F(s)$, what is $\\mathcal{L}\\{e^{at}f(t)\\}$?",
      "options": [
        {
          "id": "W3-T1-Q04-opt0",
          "text": "$F(s-a)$"
        },
        {
          "id": "W3-T1-Q04-opt1",
          "text": "$F(s+a)$"
        },
        {
          "id": "W3-T1-Q04-opt2",
          "text": "$e^{-as}F(s)$"
        },
        {
          "id": "W3-T1-Q04-opt3",
          "text": "$\\frac{1}{s-a}F(s)$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q04-opt0"
      ],
      "explanation": "By definition, $\\mathcal{L}\\{e^{at}f(t)\\} = \\int_0^\\infty e^{-st} e^{at}f(t)\\,dt = \\int_0^\\infty e^{-(s-a)t}f(t)\\,dt = F(s-a)$.",
      "hint": "Multiplying by $e^{at}$ in the time domain shifts $s \\to s-a$ in the complex frequency domain."
    },
    {
      "id": "W3-T1-Q05",
      "week": 3,
      "tier": "core",
      "topic": "Laplace Transform of Constant",
      "type": "single_select",
      "question": "What is $\\mathcal{L}\\{1\\}$ for $s > 0$?",
      "options": [
        {
          "id": "W3-T1-Q05-opt0",
          "text": "$\\frac{1}{s}$"
        },
        {
          "id": "W3-T1-Q05-opt1",
          "text": "$1$"
        },
        {
          "id": "W3-T1-Q05-opt2",
          "text": "$\\frac{1}{s^2}$"
        },
        {
          "id": "W3-T1-Q05-opt3",
          "text": "$s$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q05-opt0"
      ],
      "explanation": "$\\mathcal{L}\\{1\\} = \\int_0^\\infty e^{-st}\\,dt = \\left[-\\frac{e^{-st}}{s}\\right]_0^\\infty = \\frac{1}{s}$.",
      "hint": "Compute $\\int_0^\\infty e^{-st}\\,dt$ directly."
    },
    {
      "id": "W3-T1-Q06",
      "week": 3,
      "tier": "core",
      "topic": "Laplace Transform of Cosine",
      "type": "single_select",
      "question": "What is $\\mathcal{L}\\{\\cos(3t)\\}$?",
      "options": [
        {
          "id": "W3-T1-Q06-opt0",
          "text": "$\\frac{s}{s^2 + 9}$"
        },
        {
          "id": "W3-T1-Q06-opt1",
          "text": "$\\frac{3}{s^2 + 9}$"
        },
        {
          "id": "W3-T1-Q06-opt2",
          "text": "$\\frac{s}{s^2 - 9}$"
        },
        {
          "id": "W3-T1-Q06-opt3",
          "text": "$\\frac{9}{s^2 + 9}$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q06-opt0"
      ],
      "explanation": "$\\mathcal{L}\\{\\cos(\\omega t)\\} = \\frac{s}{s^2 + \\omega^2}$. For $\\omega=3$, this is $\\frac{s}{s^2 + 9}$.",
      "hint": "Cosine always has $s$ in the numerator."
    },
    {
      "id": "W3-T1-Q07",
      "week": 3,
      "tier": "core",
      "topic": "Linearity of Laplace Transform",
      "type": "single_select",
      "question": "Find $\\mathcal{L}\\{3 + 2e^{4t}\\}$.",
      "options": [
        {
          "id": "W3-T1-Q07-opt0",
          "text": "$\\frac{3}{s} + \\frac{2}{s-4}$"
        },
        {
          "id": "W3-T1-Q07-opt1",
          "text": "$\\frac{5}{s-4}$"
        },
        {
          "id": "W3-T1-Q07-opt2",
          "text": "$\\frac{3}{s^2} + \\frac{2}{s-4}$"
        },
        {
          "id": "W3-T1-Q07-opt3",
          "text": "$\\frac{6}{s(s-4)}$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q07-opt0"
      ],
      "explanation": "By linearity: $\\mathcal{L}\\{3 + 2e^{4t}\\} = 3\\mathcal{L}\\{1\\} + 2\\mathcal{L}\\{e^{4t}\\} = \\frac{3}{s} + \\frac{2}{s-4}$.",
      "hint": "Apply linearity term-by-term: $\\mathcal{L}\\{a f + b g\\} = a F + b G$."
    },
    {
      "id": "W3-T1-Q08",
      "week": 3,
      "tier": "core",
      "topic": "Inverse Laplace of Simple Fraction",
      "type": "single_select",
      "question": "What is $\\mathcal{L}^{-1}\\left\\{\\frac{1}{s-7}\\right\\}$?",
      "options": [
        {
          "id": "W3-T1-Q08-opt0",
          "text": "$e^{7t}$"
        },
        {
          "id": "W3-T1-Q08-opt1",
          "text": "$e^{-7t}$"
        },
        {
          "id": "W3-T1-Q08-opt2",
          "text": "$7t$"
        },
        {
          "id": "W3-T1-Q08-opt3",
          "text": "$7e^t$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q08-opt0"
      ],
      "explanation": "Matching the standard form $\\frac{1}{s-a} \\leftrightarrow e^{at}$, with $a=7$ gives $e^{7t}$.",
      "hint": "Recall that $\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}$."
    },
    {
      "id": "W3-T1-Q09",
      "week": 3,
      "tier": "core",
      "topic": "Hyperbolic Sine Transform",
      "type": "single_select",
      "question": "What is the Laplace transform $\\mathcal{L}\\{\\sinh(at)\\}$?",
      "options": [
        {
          "id": "W3-T1-Q09-opt0",
          "text": "$\\frac{a}{s^2 - a^2}$"
        },
        {
          "id": "W3-T1-Q09-opt1",
          "text": "$\\frac{a}{s^2 + a^2}$"
        },
        {
          "id": "W3-T1-Q09-opt2",
          "text": "$\\frac{s}{s^2 - a^2}$"
        },
        {
          "id": "W3-T1-Q09-opt3",
          "text": "$\\frac{s}{s^2 + a^2}$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q09-opt0"
      ],
      "explanation": "Since $\\sinh(at) = \\frac{e^{at} - e^{-at}}{2}$, its transform is $\\frac{1}{2}\\left(\\frac{1}{s-a} - \\frac{1}{s+a}\\right) = \\frac{a}{s^2 - a^2}$ for $s > |a|$.",
      "hint": "Hyperbolic functions have a minus sign in the denominator: $s^2 - a^2$."
    },
    {
      "id": "W3-T1-Q10",
      "week": 3,
      "tier": "core",
      "topic": "Hyperbolic Cosine Transform",
      "type": "single_select",
      "question": "What is $\\mathcal{L}\\{\\cosh(at)\\}$ for $s > |a|$?",
      "options": [
        {
          "id": "W3-T1-Q10-opt0",
          "text": "$\\frac{s}{s^2 - a^2}$"
        },
        {
          "id": "W3-T1-Q10-opt1",
          "text": "$\\frac{a}{s^2 - a^2}$"
        },
        {
          "id": "W3-T1-Q10-opt2",
          "text": "$\\frac{s}{s^2 + a^2}$"
        },
        {
          "id": "W3-T1-Q10-opt3",
          "text": "$\\frac{s^2}{s^2 - a^2}$"
        }
      ],
      "correct_indices": [
        "W3-T1-Q10-opt0"
      ],
      "explanation": "$\\cosh(at) = \\frac{e^{at}+e^{-at}}{2} \\implies \\mathcal{L}\\{\\cosh(at)\\} = \\frac{1}{2}\\left(\\frac{1}{s-a}+\\frac{1}{s+a}\\right) = \\frac{s}{s^2 - a^2}$.",
      "hint": "Like cosine, $\\cosh$ has $s$ in the numerator, but with a minus sign in the denominator."
    },
    {
      "id": "W3-T2-Q01",
      "week": 3,
      "tier": "should",
      "topic": "First Shift with Trigonometric Functions",
      "type": "single_select",
      "question": "Find the Laplace transform of $f(t) = e^{2t}\\cos(3t)$.",
      "options": [
        {
          "id": "W3-T2-Q01-opt0",
          "text": "$\\frac{s-2}{(s-2)^2 + 9}$"
        },
        {
          "id": "W3-T2-Q01-opt1",
          "text": "$\\frac{3}{(s-2)^2 + 9}$"
        },
        {
          "id": "W3-T2-Q01-opt2",
          "text": "$\\frac{s+2}{(s+2)^2 + 9}$"
        },
        {
          "id": "W3-T2-Q01-opt3",
          "text": "$\\frac{s-2}{s^2 + 9}$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q01-opt0"
      ],
      "explanation": "Since $\\mathcal{L}\\{\\cos(3t)\\} = \\frac{s}{s^2 + 9}$, applying the shift $s \\to s-2$ gives $\\frac{s-2}{(s-2)^2 + 9}$.",
      "hint": "Find $\\mathcal{L}\\{\\cos 3t\\}$ first, then replace every $s$ with $s-2$."
    },
    {
      "id": "W3-T2-Q02",
      "week": 3,
      "tier": "should",
      "topic": "Inverse Laplace via Partial Fractions",
      "type": "single_select",
      "question": "Find $\\mathcal{L}^{-1}\\left\\{\\frac{5s - 4}{s^2 - s - 2}\\right\\}$.",
      "options": [
        {
          "id": "W3-T2-Q02-opt0",
          "text": "$2e^{2t} + 3e^{-t}$"
        },
        {
          "id": "W3-T2-Q02-opt1",
          "text": "$3e^{2t} + 2e^{-t}$"
        },
        {
          "id": "W3-T2-Q02-opt2",
          "text": "$2e^{-2t} + 3e^t$"
        },
        {
          "id": "W3-T2-Q02-opt3",
          "text": "$5e^{2t} - 4e^{-t}$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q02-opt0"
      ],
      "explanation": "Factor the denominator: $s^2 - s - 2 = (s-2)(s+1)$. Partial fractions: $\\frac{5s-4}{(s-2)(s+1)} = \\frac{A}{s-2} + \\frac{B}{s+1}$. For $s=2$: $A = \\frac{10-4}{3} = 2$. For $s=-1$: $B = \\frac{-5-4}{-3} = 3$. Hence $\\mathcal{L}^{-1}\\{\\frac{2}{s-2} + \\frac{3}{s+1}\\} = 2e^{2t} + 3e^{-t}$.",
      "hint": "Factor the denominator into $(s-2)(s+1)$ and use partial fractions."
    },
    {
      "id": "W3-T2-Q03",
      "week": 3,
      "tier": "should",
      "topic": "First Shift with Monomial",
      "type": "single_select",
      "question": "What is $\\mathcal{L}\\{t^2 e^{-3t}\\}$?",
      "options": [
        {
          "id": "W3-T2-Q03-opt0",
          "text": "$\\frac{2}{(s+3)^3}$"
        },
        {
          "id": "W3-T2-Q03-opt1",
          "text": "$\\frac{2}{(s-3)^3}$"
        },
        {
          "id": "W3-T2-Q03-opt2",
          "text": "$\\frac{1}{(s+3)^3}$"
        },
        {
          "id": "W3-T2-Q03-opt3",
          "text": "$\\frac{6}{(s+3)^3}$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q03-opt0"
      ],
      "explanation": "$\\mathcal{L}\\{t^2\\} = \\frac{2!}{s^3} = \\frac{2}{s^3}$. By the first shifting theorem with $a=-3$, shift $s \\to s+3$: $\\frac{2}{(s+3)^3}$.",
      "hint": "Transform $t^2$ first, then shift $s \\to s+3$."
    },
    {
      "id": "W3-T2-Q04",
      "week": 3,
      "tier": "should",
      "topic": "Inverse Laplace of Completing the Square",
      "type": "single_select",
      "question": "Find $\\mathcal{L}^{-1}\\left\\{\\frac{4}{s^2 + 4s + 13}\\right\\}$.",
      "options": [
        {
          "id": "W3-T2-Q04-opt0",
          "text": "$\\frac{4}{3}e^{-2t}\\sin(3t)$"
        },
        {
          "id": "W3-T2-Q04-opt1",
          "text": "$4e^{-2t}\\cos(3t)$"
        },
        {
          "id": "W3-T2-Q04-opt2",
          "text": "$\\frac{4}{3}e^{2t}\\sin(3t)$"
        },
        {
          "id": "W3-T2-Q04-opt3",
          "text": "$2e^{-2t}\\sin(3t)$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q04-opt0"
      ],
      "explanation": "Complete the square: $s^2 + 4s + 13 = (s+2)^2 + 9$. Then $\\frac{4}{(s+2)^2 + 9} = \\frac{4}{3}\\frac{3}{(s+2)^2 + 3^2}$. Inverting gives $\\frac{4}{3}e^{-2t}\\sin(3t)$.",
      "hint": "Complete the square in the denominator: $(s+2)^2 + 3^2$."
    },
    {
      "id": "W3-T2-Q05",
      "week": 3,
      "tier": "should",
      "topic": "Solving 1st-Order IVP via Laplace",
      "type": "single_select",
      "question": "Solve $y' + 4y = 8$ with $y(0) = 5$ using Laplace transforms.",
      "options": [
        {
          "id": "W3-T2-Q05-opt0",
          "text": "$y(t) = 2 + 3e^{-4t}$"
        },
        {
          "id": "W3-T2-Q05-opt1",
          "text": "$y(t) = 2 + 5e^{-4t}$"
        },
        {
          "id": "W3-T2-Q05-opt2",
          "text": "$y(t) = 8 - 3e^{-4t}$"
        },
        {
          "id": "W3-T2-Q05-opt3",
          "text": "$y(t) = 2 - 3e^{-4t}$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q05-opt0"
      ],
      "explanation": "Transform: $(s Y - 5) + 4Y = \\frac{8}{s} \\implies (s+4)Y = 5 + \\frac{8}{s} = \\frac{5s+8}{s}$. Then $Y(s) = \\frac{5s+8}{s(s+4)} = \\frac{2}{s} + \\frac{3}{s+4}$. Inverting yields $y(t) = 2 + 3e^{-4t}$.",
      "hint": "Use partial fractions on $\\frac{5s+8}{s(s+4)}$."
    },
    {
      "id": "W3-T2-Q06",
      "week": 3,
      "tier": "should",
      "topic": "Transform of Derivative IVP Terms",
      "type": "single_select",
      "question": "If $y(0) = 3$, what is $\\mathcal{L}\\{y'(t)\\}$?",
      "options": [
        {
          "id": "W3-T2-Q06-opt0",
          "text": "$s Y(s) - 3$"
        },
        {
          "id": "W3-T2-Q06-opt1",
          "text": "$s Y(s) + 3$"
        },
        {
          "id": "W3-T2-Q06-opt2",
          "text": "$Y(s) - 3$"
        },
        {
          "id": "W3-T2-Q06-opt3",
          "text": "$s^2 Y(s) - 3$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q06-opt0"
      ],
      "explanation": "By the derivative property, $\\mathcal{L}\\{y'(t)\\} = s Y(s) - y(0) = s Y(s) - 3$.",
      "hint": "Apply $\\mathcal{L}\\{y'\\} = s Y(s) - y(0)$."
    },
    {
      "id": "W3-T2-Q07",
      "week": 3,
      "tier": "should",
      "topic": "Inverse Laplace of Repeated Linear Factor",
      "type": "single_select",
      "question": "Find $\\mathcal{L}^{-1}\\left\\{\\frac{3s + 1}{(s-1)^2}\\right\\}$.",
      "options": [
        {
          "id": "W3-T2-Q07-opt0",
          "text": "$(3 + 4t)e^t$"
        },
        {
          "id": "W3-T2-Q07-opt1",
          "text": "$(3 + t)e^t$"
        },
        {
          "id": "W3-T2-Q07-opt2",
          "text": "$3e^t + 4t$"
        },
        {
          "id": "W3-T2-Q07-opt3",
          "text": "$(1 + 3t)e^t$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q07-opt0"
      ],
      "explanation": "Write numerator in powers of $(s-1)$: $3s + 1 = 3(s-1) + 4$. Then $\\frac{3(s-1)+4}{(s-1)^2} = \\frac{3}{s-1} + \\frac{4}{(s-1)^2}$. Inverting yields $3e^t + 4t e^t = (3 + 4t)e^t$.",
      "hint": "Rewrite $3s+1$ as $3(s-1) + 4$ to split the fraction."
    },
    {
      "id": "W3-T2-Q08",
      "week": 3,
      "tier": "should",
      "topic": "First Shift with Sine",
      "type": "single_select",
      "question": "What is $\\mathcal{L}\\{e^{-t}\\sin(4t)\\}$?",
      "options": [
        {
          "id": "W3-T2-Q08-opt0",
          "text": "$\\frac{4}{(s+1)^2 + 16}$"
        },
        {
          "id": "W3-T2-Q08-opt1",
          "text": "$\\frac{s+1}{(s+1)^2 + 16}$"
        },
        {
          "id": "W3-T2-Q08-opt2",
          "text": "$\\frac{4}{(s-1)^2 + 16}$"
        },
        {
          "id": "W3-T2-Q08-opt3",
          "text": "$\\frac{4}{s^2 + 16}$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q08-opt0"
      ],
      "explanation": "$\\mathcal{L}\\{\\sin 4t\\} = \\frac{4}{s^2 + 16}$. Applying the shift $s \\to s+1$ yields $\\frac{4}{(s+1)^2 + 16}$.",
      "hint": "Replace $s$ with $s+1$ in $\\frac{4}{s^2+16}$."
    },
    {
      "id": "W3-T2-Q09",
      "week": 3,
      "tier": "should",
      "topic": "Transform of Integral",
      "type": "single_select",
      "question": "If $\\mathcal{L}\\{f(t)\\} = F(s)$, what is $\\mathcal{L}\\left\\{\\int_0^t f(\\tau)\\,d\\tau\\right\\}$?",
      "options": [
        {
          "id": "W3-T2-Q09-opt0",
          "text": "$\\frac{F(s)}{s}$"
        },
        {
          "id": "W3-T2-Q09-opt1",
          "text": "$s F(s)$"
        },
        {
          "id": "W3-T2-Q09-opt2",
          "text": "$F(s) - f(0)$"
        },
        {
          "id": "W3-T2-Q09-opt3",
          "text": "$\\frac{F(s)}{s^2}$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q09-opt0"
      ],
      "explanation": "Integration in the time domain corresponds to division by $s$ in the frequency domain: $\\mathcal{L}\\left\\{\\int_0^t f(\\tau)\\,d\\tau\\right\\} = \\frac{F(s)}{s}$.",
      "hint": "Integration in time equals division by $s$ in Laplace domain."
    },
    {
      "id": "W3-T2-Q10",
      "week": 3,
      "tier": "should",
      "topic": "Inverse Laplace of Quadratic Denominator",
      "type": "single_select",
      "question": "Find $\\mathcal{L}^{-1}\\left\\{\\frac{s+2}{s^2 + 4}\\right\\}$.",
      "options": [
        {
          "id": "W3-T2-Q10-opt0",
          "text": "$\\cos(2t) + \\sin(2t)$"
        },
        {
          "id": "W3-T2-Q10-opt1",
          "text": "$\\cos(2t) + 2\\sin(2t)$"
        },
        {
          "id": "W3-T2-Q10-opt2",
          "text": "$e^{-2t}\\cos(2t)$"
        },
        {
          "id": "W3-T2-Q10-opt3",
          "text": "$2\\cos(2t) + \\sin(2t)$"
        }
      ],
      "correct_indices": [
        "W3-T2-Q10-opt0"
      ],
      "explanation": "Split the fraction: $\\frac{s}{s^2 + 4} + \\frac{2}{s^2 + 4} = \\cos(2t) + \\sin(2t)$.",
      "hint": "Split into $\\frac{s}{s^2+4}$ and $\\frac{2}{s^2+4}$."
    },
    {
      "id": "W3-T3-Q01",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Transform of Second Derivative",
      "type": "single_select",
      "question": "If $\\mathcal{L}\\{y(t)\\} = Y(s)$, what is $\\mathcal{L}\\{y''(t)\\}$ in terms of initial conditions?",
      "options": [
        {
          "id": "W3-T3-Q01-opt0",
          "text": "$s^2 Y(s) - s y(0) - y'(0)$"
        },
        {
          "id": "W3-T3-Q01-opt1",
          "text": "$s^2 Y(s) - y(0) - s y'(0)$"
        },
        {
          "id": "W3-T3-Q01-opt2",
          "text": "$s^2 Y(s) + s y(0) + y'(0)$"
        },
        {
          "id": "W3-T3-Q01-opt3",
          "text": "$s^2 Y(s) - s^2 y(0) - s y'(0)$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q01-opt0"
      ],
      "explanation": "Applying integration by parts twice yields $\\mathcal{L}\\{y''\\} = s^2 Y(s) - s y(0) - y'(0)$.",
      "hint": "The power of $s$ multiplying the initial values decreases with each term: $s^2 Y - s^1 y(0) - s^0 y'(0)$."
    },
    {
      "id": "W3-T3-Q02",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Solving 2nd-Order IVP via Laplace",
      "type": "single_select",
      "question": "Solve $y'' + 4y = 0$ with $y(0) = 0$ and $y'(0) = 6$ using Laplace transforms.",
      "options": [
        {
          "id": "W3-T3-Q02-opt0",
          "text": "$y(t) = 3\\sin(2t)$"
        },
        {
          "id": "W3-T3-Q02-opt1",
          "text": "$y(t) = 6\\sin(2t)$"
        },
        {
          "id": "W3-T3-Q02-opt2",
          "text": "$y(t) = 3\\cos(2t)$"
        },
        {
          "id": "W3-T3-Q02-opt3",
          "text": "$y(t) = 6\\cos(2t)$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q02-opt0"
      ],
      "explanation": "Transform: $(s^2 Y - s(0) - 6) + 4Y = 0 \\implies (s^2 + 4)Y = 6 \\implies Y(s) = \\frac{6}{s^2 + 4} = 3\\left(\\frac{2}{s^2 + 4}\\right)$. Inverting yields $y(t) = 3\\sin(2t)$.",
      "hint": "Remember that $\\mathcal{L}\\{\\sin 2t\\} = \\frac{2}{s^2+4}$."
    },
    {
      "id": "W3-T3-Q03",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Partial Fractions with Irreducible Quadratic",
      "type": "single_select",
      "question": "Find $\\mathcal{L}^{-1}\\left\\{\\frac{s}{(s+1)(s^2 + 1)}\\right\\}$.",
      "options": [
        {
          "id": "W3-T3-Q03-opt0",
          "text": "$-\\frac{1}{2}e^{-t} + \\frac{1}{2}\\cos t + \\frac{1}{2}\\sin t$"
        },
        {
          "id": "W3-T3-Q03-opt1",
          "text": "$\\frac{1}{2}e^{-t} - \\frac{1}{2}\\cos t$"
        },
        {
          "id": "W3-T3-Q03-opt2",
          "text": "$e^{-t} + \\cos t + \\sin t$"
        },
        {
          "id": "W3-T3-Q03-opt3",
          "text": "$-\\frac{1}{2}e^{-t} + \\cos t$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q03-opt0"
      ],
      "explanation": "Partial fractions: $\\frac{s}{(s+1)(s^2+1)} = \\frac{A}{s+1} + \\frac{Bs+C}{s^2+1}$. Multiply by $(s+1)(s^2+1)$: $s = A(s^2+1) + (Bs+C)(s+1)$. At $s=-1$: $-1 = 2A \\implies A = -1/2$. Comparing $s^2$: $A+B=0 \\implies B=1/2$. Constant term: $A+C=0 \\implies C=1/2$. Inverting yields $-\\frac{1}{2}e^{-t} + \\frac{1}{2}\\cos t + \\frac{1}{2}\\sin t$.",
      "hint": "Decompose into $\\frac{A}{s+1} + \\frac{Bs+C}{s^2+1}$."
    },
    {
      "id": "W3-T3-Q04",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Initial Value Theorem",
      "type": "single_select",
      "question": "What does the Initial Value Theorem state for $f(0^+) = \\lim_{t \\to 0^+} f(t)$?",
      "options": [
        {
          "id": "W3-T3-Q04-opt0",
          "text": "$f(0^+) = \\lim_{s \\to \\infty} s F(s)$"
        },
        {
          "id": "W3-T3-Q04-opt1",
          "text": "$f(0^+) = \\lim_{s \\to 0} s F(s)$"
        },
        {
          "id": "W3-T3-Q04-opt2",
          "text": "$f(0^+) = \\lim_{s \\to \\infty} F(s)$"
        },
        {
          "id": "W3-T3-Q04-opt3",
          "text": "$f(0^+) = \\lim_{s \\to 0} F(s)$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q04-opt0"
      ],
      "explanation": "The Initial Value Theorem states that $\\lim_{t \\to 0^+} f(t) = \\lim_{s \\to \\infty} s F(s)$, provided the limit exists.",
      "hint": "$t \\to 0$ corresponds to $s \\to \\infty$ in $s F(s)$."
    },
    {
      "id": "W3-T3-Q05",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Final Value Theorem",
      "type": "single_select",
      "question": "If all poles of $s F(s)$ lie strictly in the open left half-plane (stable system), what does the Final Value Theorem state for $\\lim_{t \\to \\infty} f(t)$?",
      "options": [
        {
          "id": "W3-T3-Q05-opt0",
          "text": "$\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} s F(s)$"
        },
        {
          "id": "W3-T3-Q05-opt1",
          "text": "$\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to \\infty} s F(s)$"
        },
        {
          "id": "W3-T3-Q05-opt2",
          "text": "$\\lim_{t \\to \\infty} f(t) = 0$"
        },
        {
          "id": "W3-T3-Q05-opt3",
          "text": "$\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} F(s)$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q05-opt0"
      ],
      "explanation": "The Final Value Theorem states that $\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} s F(s)$, valid when all poles of $s F(s)$ have negative real parts.",
      "hint": "$t \\to \\infty$ corresponds to $s \\to 0$ in $s F(s)$."
    },
    {
      "id": "W3-T3-Q06",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Transfer Function Definition",
      "type": "single_select",
      "question": "For a linear time-invariant system with input $x(t)$ and output $y(t)$ under zero initial conditions, what is the transfer function $H(s)$?",
      "options": [
        {
          "id": "W3-T3-Q06-opt0",
          "text": "$H(s) = \\frac{Y(s)}{X(s)}$"
        },
        {
          "id": "W3-T3-Q06-opt1",
          "text": "$H(s) = Y(s) X(s)$"
        },
        {
          "id": "W3-T3-Q06-opt2",
          "text": "$H(s) = \\frac{X(s)}{Y(s)}$"
        },
        {
          "id": "W3-T3-Q06-opt3",
          "text": "$H(s) = Y(s) - X(s)$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q06-opt0"
      ],
      "explanation": "The transfer function $H(s) = \\frac{Y(s)}{X(s)}$ is the ratio of the Laplace transform of output to input with all initial conditions set to zero.",
      "hint": "Transfer function is Output / Input in the $s$-domain."
    },
    {
      "id": "W3-T3-Q07",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Pole Locations and System Stability",
      "type": "single_select",
      "question": "For a causal continuous-time LTI system with a proper rational transfer function, the system is Bounded-Input Bounded-Output (BIBO) stable if and only if:",
      "options": [
        {
          "id": "W3-T3-Q07-opt0",
          "text": "All poles of its transfer function $H(s)$ have strictly negative real parts (lie in the open left-half $s$-plane)"
        },
        {
          "id": "W3-T3-Q07-opt1",
          "text": "All poles lie on the imaginary axis"
        },
        {
          "id": "W3-T3-Q07-opt2",
          "text": "All poles have positive real parts"
        },
        {
          "id": "W3-T3-Q07-opt3",
          "text": "The transfer function has no zeros"
        }
      ],
      "correct_indices": [
        "W3-T3-Q07-opt0"
      ],
      "explanation": "For a causal LTI system with a rational transfer function, poles in the open left-half plane ($\\text{Re}(s) < 0$) correspond to exponentially decaying impulse response terms $e^{\\sigma t}$ (with $\\sigma < 0$), guaranteeing absolute integrability $\\int_0^\\infty |h(t)|\\,dt < \\infty$ and BIBO stability.",
      "hint": "Poles in the open left-half $s$-plane give exponentially decaying modes."
    },
    {
      "id": "W3-T3-Q08",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Laplace Transform of t cos(wt)",
      "type": "single_select",
      "question": "Using frequency differentiation $\\mathcal{L}\\{t f(t)\\} = -F'(s)$, what is $\\mathcal{L}\\{t\\cos(\\omega t)\\}$?",
      "options": [
        {
          "id": "W3-T3-Q08-opt0",
          "text": "$\\frac{s^2 - \\omega^2}{(s^2 + \\omega^2)^2}$"
        },
        {
          "id": "W3-T3-Q08-opt1",
          "text": "$\\frac{2s\\omega}{(s^2 + \\omega^2)^2}$"
        },
        {
          "id": "W3-T3-Q08-opt2",
          "text": "$\\frac{s^2 + \\omega^2}{(s^2 - \\omega^2)^2}$"
        },
        {
          "id": "W3-T3-Q08-opt3",
          "text": "$\\frac{s}{(s^2 + \\omega^2)^2}$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q08-opt0"
      ],
      "explanation": "$F(s) = \\frac{s}{s^2+\\omega^2}$. Differentiating: $F'(s) = \\frac{(s^2+\\omega^2)(1) - s(2s)}{(s^2+\\omega^2)^2} = \\frac{\\omega^2 - s^2}{(s^2+\\omega^2)^2}$. Negating: $-F'(s) = \\frac{s^2 - \\omega^2}{(s^2+\\omega^2)^2}$.",
      "hint": "Differentiate $\\frac{s}{s^2+\\omega^2}$ using the quotient rule and negate."
    },
    {
      "id": "W3-T3-Q09",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Inverse Laplace via Derivative Form",
      "type": "single_select",
      "question": "Find $\\mathcal{L}^{-1}\\left\\{\\frac{1}{(s+2)^4}\\right\\}$.",
      "options": [
        {
          "id": "W3-T3-Q09-opt0",
          "text": "$\\frac{1}{6}t^3 e^{-2t}$"
        },
        {
          "id": "W3-T3-Q09-opt1",
          "text": "$t^3 e^{-2t}$"
        },
        {
          "id": "W3-T3-Q09-opt2",
          "text": "$\\frac{1}{24}t^3 e^{-2t}$"
        },
        {
          "id": "W3-T3-Q09-opt3",
          "text": "$\\frac{1}{6}t^4 e^{-2t}$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q09-opt0"
      ],
      "explanation": "$\\mathcal{L}\\{t^3\\} = \\frac{6}{s^4}$. Shifting $s \\to s+2$ gives $\\mathcal{L}\\{t^3 e^{-2t}\\} = \\frac{6}{(s+2)^4}$. Dividing by 6 yields $\\frac{1}{6}t^3 e^{-2t}$.",
      "hint": "Recall that $3! = 6$."
    },
    {
      "id": "W3-T3-Q10",
      "week": 3,
      "tier": "nice_to_know",
      "topic": "Time Scaling Property",
      "type": "single_select",
      "question": "If $\\mathcal{L}\\{f(t)\\} = F(s)$, what is $\\mathcal{L}\\{f(at)\\}$ for constant $a > 0$?",
      "options": [
        {
          "id": "W3-T3-Q10-opt0",
          "text": "$\\frac{1}{a}F\\left(\\frac{s}{a}\\right)$"
        },
        {
          "id": "W3-T3-Q10-opt1",
          "text": "$a F(a s)$"
        },
        {
          "id": "W3-T3-Q10-opt2",
          "text": "$\\frac{1}{a}F(a s)$"
        },
        {
          "id": "W3-T3-Q10-opt3",
          "text": "$F\\left(\\frac{s}{a}\\right)$"
        }
      ],
      "correct_indices": [
        "W3-T3-Q10-opt0"
      ],
      "explanation": "Let $\\tau = at, dt = d\\tau/a$. Then $\\int_0^\\infty e^{-st}f(at)\\,dt = \\int_0^\\infty e^{-s\\tau/a}f(\\tau)\\frac{d\\tau}{a} = \\frac{1}{a}F\\left(\\frac{s}{a}\\right)$.",
      "hint": "Substitute $\\tau = at$ into the Laplace integral definition."
    },
    {
      "id": "W3-T4-Q01",
      "week": 3,
      "tier": "extra",
      "topic": "Frequency Differentiation Property",
      "type": "single_select",
      "question": "What is the Laplace transform $\\mathcal{L}\\{t \\sin(2t)\\}$?",
      "options": [
        {
          "id": "W3-T4-Q01-opt0",
          "text": "$\\frac{4s}{(s^2 + 4)^2}$"
        },
        {
          "id": "W3-T4-Q01-opt1",
          "text": "$\\frac{2(s^2 - 4)}{(s^2 + 4)^2}$"
        },
        {
          "id": "W3-T4-Q01-opt2",
          "text": "$\\frac{4}{(s^2 + 4)^2}$"
        },
        {
          "id": "W3-T4-Q01-opt3",
          "text": "$\\frac{s^2 - 4}{(s^2 + 4)^2}$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q01-opt0"
      ],
      "explanation": "Using $\\mathcal{L}\\{t f(t)\\} = -\\frac{d}{ds}F(s)$: since $\\mathcal{L}\\{\\sin 2t\\} = \\frac{2}{s^2 + 4}$, we have $-\\frac{d}{ds}\\left[\\frac{2}{s^2 + 4}\\right] = -\\left(\\frac{-2(2s)}{(s^2 + 4)^2}\\right) = \\frac{4s}{(s^2 + 4)^2}$.",
      "hint": "Differentiate $F(s)$ with respect to $s$ and negate: $\\mathcal{L}\\{t f(t)\\} = -F'(s)$."
    },
    {
      "id": "W3-T4-Q02",
      "week": 3,
      "tier": "extra",
      "topic": "Convolution Theorem",
      "type": "single_select",
      "question": "According to the Convolution Theorem, $\\mathcal{L}^{-1}\\{F(s)G(s)\\} = (f * g)(t)$. How is the convolution defined?",
      "options": [
        {
          "id": "W3-T4-Q02-opt0",
          "text": "$(f * g)(t) = \\int_0^t f(\\tau)g(t - \\tau)\\,d\\tau$"
        },
        {
          "id": "W3-T4-Q02-opt1",
          "text": "$(f * g)(t) = f(t)g(t)$"
        },
        {
          "id": "W3-T4-Q02-opt2",
          "text": "$(f * g)(t) = \\int_0^\\infty f(\\tau)g(t - \\tau)\\,d\\tau$"
        },
        {
          "id": "W3-T4-Q02-opt3",
          "text": "$(f * g)(t) = \\int_0^t f(\\tau)g(\\tau)\\,d\\tau$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q02-opt0"
      ],
      "explanation": "The Laplace convolution is defined by the integral $(f * g)(t) = \\int_0^t f(\\tau)g(t - \\tau)\\,d\\tau$, representing the response of a causal linear time-invariant system.",
      "hint": "The integral runs from $0$ to $t$, with arguments $\\tau$ and $t-\\tau$."
    },
    {
      "id": "W3-T4-Q03",
      "week": 3,
      "tier": "extra",
      "topic": "Frequency Integration Property",
      "type": "single_select",
      "question": "If $\\lim_{t \\to 0} \\frac{f(t)}{t}$ exists, what is $\\mathcal{L}\\left\\{\\frac{f(t)}{t}\\right\\}$?",
      "options": [
        {
          "id": "W3-T4-Q03-opt0",
          "text": "$\\int_s^\\infty F(\\sigma)\\,d\\sigma$"
        },
        {
          "id": "W3-T4-Q03-opt1",
          "text": "$\\int_0^s F(\\sigma)\\,d\\sigma$"
        },
        {
          "id": "W3-T4-Q03-opt2",
          "text": "$s F(s)$"
        },
        {
          "id": "W3-T4-Q03-opt3",
          "text": "$-\\frac{d}{ds}F(s)$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q03-opt0"
      ],
      "explanation": "Dividing by $t$ in time corresponds to integrating $F(s)$ from $s$ to $\\infty$ in the frequency domain: $\\mathcal{L}\\{f(t)/t\\} = \\int_s^\\infty F(\\sigma)\\,d\\sigma$.",
      "hint": "Division by $t$ is dual to differentiation in frequency."
    },
    {
      "id": "W3-T4-Q04",
      "week": 3,
      "tier": "extra",
      "topic": "Transform of sin(t)/t",
      "type": "single_select",
      "question": "Evaluate the Laplace transform $\\mathcal{L}\\left\\{\\frac{\\sin t}{t}\\right\\}$.",
      "options": [
        {
          "id": "W3-T4-Q04-opt0",
          "text": "$\\arctan\\left(\\frac{1}{s}\\right) = \\frac{\\pi}{2} - \\arctan(s)$"
        },
        {
          "id": "W3-T4-Q04-opt1",
          "text": "$\\arctan(s)$"
        },
        {
          "id": "W3-T4-Q04-opt2",
          "text": "$\\frac{1}{s^2 + 1}$"
        },
        {
          "id": "W3-T4-Q04-opt3",
          "text": "$\\ln(s^2 + 1)$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q04-opt0"
      ],
      "explanation": "$\\mathcal{L}\\{\\sin t\\} = \\frac{1}{s^2+1}$. By frequency integration: $\\int_s^\\infty \\frac{1}{\\sigma^2+1}\\,d\\sigma = [\\arctan\\sigma]_s^\\infty = \\frac{\\pi}{2} - \\arctan s = \\arctan(1/s)$.",
      "hint": "Integrate $\\frac{1}{\\sigma^2+1}$ from $s$ to $\\infty$."
    },
    {
      "id": "W3-T4-Q05",
      "week": 3,
      "tier": "extra",
      "topic": "Dirichlet Integral Evaluation via Laplace",
      "type": "single_select",
      "question": "Using $\\mathcal{L}\\{\\frac{\\sin t}{t}\\} = \\frac{\\pi}{2} - \\arctan(s)$, what is the value of $\\int_0^\\infty \\frac{\\sin t}{t}\\,dt$?",
      "options": [
        {
          "id": "W3-T4-Q05-opt0",
          "text": "$\\frac{\\pi}{2}$"
        },
        {
          "id": "W3-T4-Q05-opt1",
          "text": "$\\pi$"
        },
        {
          "id": "W3-T4-Q05-opt2",
          "text": "$1$"
        },
        {
          "id": "W3-T4-Q05-opt3",
          "text": "$\\frac{\\pi}{4}$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q05-opt0"
      ],
      "explanation": "By definition of the Laplace transform, $\\int_0^\\infty e^{-st}\\frac{\\sin t}{t}\\,dt = F(s)$. Setting $s=0$ yields $\\int_0^\\infty \\frac{\\sin t}{t}\\,dt = \\frac{\\pi}{2} - \\arctan(0) = \\frac{\\pi}{2}$.",
      "hint": "Set $s=0$ in the Laplace transform of $\\sin(t)/t$."
    },
    {
      "id": "W3-T4-Q06",
      "week": 3,
      "tier": "extra",
      "topic": "Volterra Integral Equation",
      "type": "single_select",
      "question": "Solve the Volterra equation $y(t) = t + \\int_0^t (t - \\tau)y(\\tau)\\,d\\tau$ using Laplace transforms.",
      "options": [
        {
          "id": "W3-T4-Q06-opt0",
          "text": "$y(t) = \\sinh(t)$"
        },
        {
          "id": "W3-T4-Q06-opt1",
          "text": "$y(t) = \\cosh(t)$"
        },
        {
          "id": "W3-T4-Q06-opt2",
          "text": "$y(t) = \\sin(t)$"
        },
        {
          "id": "W3-T4-Q06-opt3",
          "text": "$y(t) = e^t$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q06-opt0"
      ],
      "explanation": "The integral is a convolution: $t * y$. Taking Laplace transform: $Y(s) = \\frac{1}{s^2} + \\frac{1}{s^2}Y(s) \\implies Y(s)\\left(1 - \\frac{1}{s^2}\\right) = \\frac{1}{s^2} \\implies Y(s)\\left(\\frac{s^2-1}{s^2}\\right) = \\frac{1}{s^2} \\implies Y(s) = \\frac{1}{s^2 - 1}$. Inverting yields $y(t) = \\sinh(t)$.",
      "hint": "Recognize the integral as the convolution of $t$ with $y(t)$."
    },
    {
      "id": "W3-T4-Q07",
      "week": 3,
      "tier": "extra",
      "topic": "Bessel Function J0(t) Transform",
      "type": "single_select",
      "question": "What is the Laplace transform of the zeroth-order Bessel function $J_0(t)$?",
      "options": [
        {
          "id": "W3-T4-Q07-opt0",
          "text": "$\\frac{1}{\\sqrt{s^2 + 1}}$"
        },
        {
          "id": "W3-T4-Q07-opt1",
          "text": "$\\frac{s}{\\sqrt{s^2 + 1}}$"
        },
        {
          "id": "W3-T4-Q07-opt2",
          "text": "$\\frac{1}{s^2 + 1}$"
        },
        {
          "id": "W3-T4-Q07-opt3",
          "text": "$\\frac{1}{\\sqrt{s - 1}}$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q07-opt0"
      ],
      "explanation": "Expanding $J_0(t) = \\sum_{k=0}^\\infty \\frac{(-1)^k (t/2)^{2k}}{(k!)^2}$ and transforming term-by-term yields the binomial series for $(s^2 + 1)^{-1/2} = \\frac{1}{\\sqrt{s^2+1}}$.",
      "hint": "Recall that $\\mathcal{L}\\{J_0(t)\\} = \\frac{1}{\\sqrt{s^2+1}}$."
    },
    {
      "id": "W3-T4-Q08",
      "week": 3,
      "tier": "extra",
      "topic": "Abel's Integral Equation and Half-Derivative",
      "type": "single_select",
      "question": "What is the Laplace transform of the fractional power $t^{-1/2}$?",
      "options": [
        {
          "id": "W3-T4-Q08-opt0",
          "text": "$\\sqrt{\\frac{\\pi}{s}}$"
        },
        {
          "id": "W3-T4-Q08-opt1",
          "text": "$\\frac{\\pi}{\\sqrt{s}}$"
        },
        {
          "id": "W3-T4-Q08-opt2",
          "text": "$\\frac{1}{\\sqrt{s}}$"
        },
        {
          "id": "W3-T4-Q08-opt3",
          "text": "$\\frac{\\sqrt{\\pi}}{s}$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q08-opt0"
      ],
      "explanation": "Using $\\mathcal{L}\\{t^p\\} = \\frac{\\Gamma(p+1)}{s^{p+1}}$ for $p = -1/2$: $\\Gamma(1/2) = \\sqrt{\\pi}$, so $\\mathcal{L}\\{t^{-1/2}\\} = \\frac{\\Gamma(1/2)}{s^{1/2}} = \\sqrt{\\frac{\\pi}{s}}$.",
      "hint": "Use the Gamma function identity $\\Gamma(1/2) = \\sqrt{\\pi}$."
    },
    {
      "id": "W3-T4-Q09",
      "week": 3,
      "tier": "extra",
      "topic": "Matrix Exponential via Laplace Transform",
      "type": "single_select",
      "question": "For a constant square matrix $\\mathbf{A}$, how can the matrix exponential $e^{\\mathbf{A}t}$ be computed via Laplace transforms?",
      "options": [
        {
          "id": "W3-T4-Q09-opt0",
          "text": "$e^{\\mathbf{A}t} = \\mathcal{L}^{-1}\\left\\{(s\\mathbf{I} - \\mathbf{A})^{-1}\\right\\}$"
        },
        {
          "id": "W3-T4-Q09-opt1",
          "text": "$e^{\\mathbf{A}t} = \\mathcal{L}^{-1}\\left\\{s\\mathbf{I} - \\mathbf{A}\\right\\}$"
        },
        {
          "id": "W3-T4-Q09-opt2",
          "text": "$e^{\\mathbf{A}t} = (s\\mathbf{I} - \\mathbf{A})^{-1}$"
        },
        {
          "id": "W3-T4-Q09-opt3",
          "text": "$e^{\\mathbf{A}t} = \\mathcal{L}\\left\\{(s\\mathbf{I} - \\mathbf{A})^{-1}\\right\\}$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q09-opt0"
      ],
      "explanation": "Transforming the matrix equation $\\mathbf{x}' = \\mathbf{A}\\mathbf{x}$ gives $(s\\mathbf{I} - \\mathbf{A})\\mathbf{X}(s) = \\mathbf{x}(0) \\implies \\mathbf{x}(t) = \\mathcal{L}^{-1}\\{(s\\mathbf{I}-\\mathbf{A})^{-1}\\}\\mathbf{x}(0)$. By definition $\\mathbf{x}(t) = e^{\\mathbf{A}t}\\mathbf{x}(0)$, so $e^{\\mathbf{A}t} = \\mathcal{L}^{-1}\\{(s\\mathbf{I}-\\mathbf{A})^{-1}\\}$.",
      "hint": "Invert the matrix resolvent $(s\\mathbf{I} - \\mathbf{A})^{-1}$ back to the time domain."
    },
    {
      "id": "W3-T4-Q10",
      "week": 3,
      "tier": "extra",
      "topic": "Integro-Differential Equation",
      "type": "single_select",
      "question": "Solve $y'(t) + 2y(t) + \\int_0^t y(\\tau)\\,d\\tau = 0$ with $y(0) = 1$.",
      "options": [
        {
          "id": "W3-T4-Q10-opt0",
          "text": "$y(t) = (1 - t)e^{-t}$"
        },
        {
          "id": "W3-T4-Q10-opt1",
          "text": "$y(t) = e^{-t} + t$"
        },
        {
          "id": "W3-T4-Q10-opt2",
          "text": "$y(t) = e^{-2t}$"
        },
        {
          "id": "W3-T4-Q10-opt3",
          "text": "$y(t) = (1 + t)e^{-t}$"
        }
      ],
      "correct_indices": [
        "W3-T4-Q10-opt0"
      ],
      "explanation": "Transform: $(s Y - 1) + 2Y + \\frac{1}{s}Y = 0 \\implies Y\\left(s + 2 + \\frac{1}{s}\\right) = 1 \\implies Y\\left(\\frac{s^2 + 2s + 1}{s}\\right) = 1 \\implies Y(s) = \\frac{s}{(s+1)^2} = \\frac{(s+1) - 1}{(s+1)^2} = \\frac{1}{s+1} - \\frac{1}{(s+1)^2}$. Inverting yields $e^{-t} - t e^{-t} = (1-t)e^{-t}$.",
      "hint": "Multiply through by $s$ to get $\\frac{s}{(s+1)^2}$ and split as $\\frac{1}{s+1} - \\frac{1}{(s+1)^2}$."
    }
  ]
};
