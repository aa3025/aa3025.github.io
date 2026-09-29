window.QUIZ_BANK_WEEK4 = {
  "module": "5048CMD Engineering Mathematics 2",
  "week": 4,
  "title": "Week 4: Laplace Transforms III & Probability I",
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
      "topic": "Heaviside Step Function",
      "type": "single_select",
      "question": "What is the Laplace transform of the delayed unit step function $u(t - c)$ for $c > 0$?",
      "options": [
        {
          "id": "W4-T1-Q01-opt0",
          "text": "$\\frac{e^{-cs}}{s}$"
        },
        {
          "id": "W4-T1-Q01-opt1",
          "text": "$\\frac{e^{cs}}{s}$"
        },
        {
          "id": "W4-T1-Q01-opt2",
          "text": "$\\frac{1}{s - c}$"
        },
        {
          "id": "W4-T1-Q01-opt3",
          "text": "$e^{-cs}$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q01-opt0"
      ],
      "explanation": "$\\mathcal{L}\\{u(t-c)\\} = \\int_c^\\infty e^{-st}\\,dt = \\left[-\\frac{e^{-st}}{s}\\right]_c^\\infty = \\frac{e^{-cs}}{s}$.",
      "hint": "Compute $\\int_c^\\infty e^{-st}\\,dt$ directly."
    },
    {
      "id": "W4-T1-Q02",
      "week": 4,
      "tier": "core",
      "topic": "Second Shifting Theorem",
      "type": "single_select",
      "question": "The Second Shifting Theorem states that $\\mathcal{L}\\{f(t - c)u(t - c)\\} =$",
      "options": [
        {
          "id": "W4-T1-Q02-opt0",
          "text": "$e^{-cs}F(s)$"
        },
        {
          "id": "W4-T1-Q02-opt1",
          "text": "$e^{cs}F(s)$"
        },
        {
          "id": "W4-T1-Q02-opt2",
          "text": "$F(s - c)$"
        },
        {
          "id": "W4-T1-Q02-opt3",
          "text": "$\\frac{1}{s}F(s - c)$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q02-opt0"
      ],
      "explanation": "A time delay of $c$ units masked by the unit step produces multiplication by $e^{-cs}$ in the $s$-domain: $\\mathcal{L}\\{f(t-c)u(t-c)\\} = e^{-cs}F(s)$.",
      "hint": "Time translation by $c$ corresponds to multiplying $F(s)$ by $e^{-cs}$."
    },
    {
      "id": "W4-T1-Q03",
      "week": 4,
      "tier": "core",
      "topic": "Probability Density Function Axiom",
      "type": "single_select",
      "question": "For a continuous random variable $X$ with PDF $f(x)$ defined over $[a, b]$, which condition must hold?",
      "options": [
        {
          "id": "W4-T1-Q03-opt0",
          "text": "$f(x) \\ge 0$ everywhere and $\\int_a^b f(x)\\,dx = 1$"
        },
        {
          "id": "W4-T1-Q03-opt1",
          "text": "$\\int_a^b f(x)\\,dx = 0$"
        },
        {
          "id": "W4-T1-Q03-opt2",
          "text": "$f(x) \\le 1$ everywhere"
        },
        {
          "id": "W4-T1-Q03-opt3",
          "text": "$f'(x) > 0$ on $[a, b]$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q03-opt0"
      ],
      "explanation": "A valid probability density function must be non-negative ($f(x) \\ge 0$) and the total area under the curve must equal 1.",
      "hint": "Total probability over all possible outcomes must equal 100%."
    },
    {
      "id": "W4-T1-Q04",
      "week": 4,
      "tier": "core",
      "topic": "Expected Value Definition",
      "type": "single_select",
      "question": "For a continuous random variable $X$ with PDF $f(x)$, what is the expected value $E[X]$?",
      "options": [
        {
          "id": "W4-T1-Q04-opt0",
          "text": "$E[X] = \\int_{-\\infty}^\\infty x f(x)\\,dx$"
        },
        {
          "id": "W4-T1-Q04-opt1",
          "text": "$E[X] = \\int_{-\\infty}^\\infty f(x)\\,dx$"
        },
        {
          "id": "W4-T1-Q04-opt2",
          "text": "$E[X] = \\int_{-\\infty}^\\infty x^2 f(x)\\,dx$"
        },
        {
          "id": "W4-T1-Q04-opt3",
          "text": "$E[X] = \\frac{1}{2}\\int_{-\\infty}^\\infty f(x)\\,dx$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q04-opt0"
      ],
      "explanation": "The expected value (mean) is the probability-weighted average: $E[X] = \\int_{-\\infty}^\\infty x f(x)\\,dx$.",
      "hint": "Integrate the variable $x$ multiplied by its density function $f(x)$."
    },
    {
      "id": "W4-T1-Q05",
      "week": 4,
      "tier": "core",
      "topic": "Dirac Delta at Origin",
      "type": "single_select",
      "question": "What is the Laplace transform of the unit impulse function $\\delta(t)$?",
      "options": [
        {
          "id": "W4-T1-Q05-opt0",
          "text": "$1$"
        },
        {
          "id": "W4-T1-Q05-opt1",
          "text": "$\\frac{1}{s}$"
        },
        {
          "id": "W4-T1-Q05-opt2",
          "text": "$0$"
        },
        {
          "id": "W4-T1-Q05-opt3",
          "text": "$s$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q05-opt0"
      ],
      "explanation": "$\\mathcal{L}\\{\\delta(t)\\} = \\int_0^\\infty e^{-st}\\delta(t)\\,dt = e^0 = 1$.",
      "hint": "The delta function at $t=0$ transforms to a flat spectrum of amplitude 1."
    },
    {
      "id": "W4-T1-Q06",
      "week": 4,
      "tier": "core",
      "topic": "Variance in Terms of Moments",
      "type": "single_select",
      "question": "How is the variance $\\text{Var}(X)$ related to the first two moments $E[X]$ and $E[X^2]$?",
      "options": [
        {
          "id": "W4-T1-Q06-opt0",
          "text": "$\\text{Var}(X) = E[X^2] - (E[X])^2$"
        },
        {
          "id": "W4-T1-Q06-opt1",
          "text": "$\\text{Var}(X) = E[X^2] + (E[X])^2$"
        },
        {
          "id": "W4-T1-Q06-opt2",
          "text": "$\\text{Var}(X) = (E[X])^2 - E[X^2]$"
        },
        {
          "id": "W4-T1-Q06-opt3",
          "text": "$\\text{Var}(X) = \\sqrt{E[X^2] - (E[X])^2}$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q06-opt0"
      ],
      "explanation": "By expanding $E[(X - \\mu)^2] = E[X^2 - 2\\mu X + \\mu^2] = E[X^2] - \\mu^2$, we obtain $\\text{Var}(X) = E[X^2] - (E[X])^2$.",
      "hint": "Mean of the square minus square of the mean."
    },
    {
      "id": "W4-T1-Q07",
      "week": 4,
      "tier": "core",
      "topic": "Cumulative Distribution Function Definition",
      "type": "single_select",
      "question": "For a continuous random variable $X$ with PDF $f(x)$, how is the Cumulative Distribution Function $F(x)$ defined?",
      "options": [
        {
          "id": "W4-T1-Q07-opt0",
          "text": "$F(x) = P(X \\le x) = \\int_{-\\infty}^x f(u)\\,du$"
        },
        {
          "id": "W4-T1-Q07-opt1",
          "text": "$F(x) = P(X = x)$"
        },
        {
          "id": "W4-T1-Q07-opt2",
          "text": "$F(x) = f'(x)$"
        },
        {
          "id": "W4-T1-Q07-opt3",
          "text": "$F(x) = \\int_x^\\infty f(u)\\,du$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q07-opt0"
      ],
      "explanation": "The CDF accumulates probability up to value $x$: $F(x) = P(X \\le x) = \\int_{-\\infty}^x f(u)\\,du$.",
      "hint": "CDF represents cumulative probability up to $x$."
    },
    {
      "id": "W4-T1-Q08",
      "week": 4,
      "tier": "core",
      "topic": "Standard Deviation Relation to Variance",
      "type": "single_select",
      "question": "If the variance of a random variable $X$ is $\\text{Var}(X) = 16$, what is its standard deviation $\\sigma_X$?",
      "options": [
        {
          "id": "W4-T1-Q08-opt0",
          "text": "$\\sigma_X = 4$"
        },
        {
          "id": "W4-T1-Q08-opt1",
          "text": "$\\sigma_X = 256$"
        },
        {
          "id": "W4-T1-Q08-opt2",
          "text": "$\\sigma_X = 8$"
        },
        {
          "id": "W4-T1-Q08-opt3",
          "text": "$\\sigma_X = 2$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q08-opt0"
      ],
      "explanation": "The standard deviation is the positive square root of the variance: $\\sigma_X = \\sqrt{\\text{Var}(X)} = \\sqrt{16} = 4$.",
      "hint": "Take the square root of the variance."
    },
    {
      "id": "W4-T1-Q09",
      "week": 4,
      "tier": "core",
      "topic": "Unit Step Function Value",
      "type": "single_select",
      "question": "By definition, the Heaviside step function $u(t - c)$ equals:",
      "options": [
        {
          "id": "W4-T1-Q09-opt0",
          "text": "$0$ for $t < c$ and $1$ for $t \\ge c$"
        },
        {
          "id": "W4-T1-Q09-opt1",
          "text": "$1$ for $t < c$ and $0$ for $t \\ge c$"
        },
        {
          "id": "W4-T1-Q09-opt2",
          "text": "$t - c$ for $t \\ge c$"
        },
        {
          "id": "W4-T1-Q09-opt3",
          "text": "$e^{t-c}$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q09-opt0"
      ],
      "explanation": "The Heaviside step function is zero before the trigger time $c$ and switches to 1 for all $t \\ge c$.",
      "hint": "Switches from 0 to 1 at $t=c$."
    },
    {
      "id": "W4-T1-Q10",
      "week": 4,
      "tier": "core",
      "topic": "Uniform Distribution PDF",
      "type": "single_select",
      "question": "What is the PDF of a continuous random variable $X$ distributed uniformly on the interval $[a, b]$?",
      "options": [
        {
          "id": "W4-T1-Q10-opt0",
          "text": "$f(x) = \\frac{1}{b-a}$ for $a \\le x \\le b$ (and $0$ otherwise)"
        },
        {
          "id": "W4-T1-Q10-opt1",
          "text": "$f(x) = \\frac{x}{b-a}$"
        },
        {
          "id": "W4-T1-Q10-opt2",
          "text": "$f(x) = \\frac{1}{(b-a)^2}$"
        },
        {
          "id": "W4-T1-Q10-opt3",
          "text": "$f(x) = b - a$"
        }
      ],
      "correct_indices": [
        "W4-T1-Q10-opt0"
      ],
      "explanation": "Since the probability density is constant across $[a, b]$ and total area must equal 1, height $\\times$ width $= C(b-a) = 1 \\implies C = \\frac{1}{b-a}$.",
      "hint": "The area of the rectangle must equal 1."
    },
    {
      "id": "W4-T2-Q01",
      "week": 4,
      "tier": "should",
      "topic": "Dirac Delta Impulse",
      "type": "single_select",
      "question": "What is the Laplace transform of the Dirac delta function $\\delta(t - a)$ for $a \\ge 0$?",
      "options": [
        {
          "id": "W4-T2-Q01-opt0",
          "text": "$e^{-as}$"
        },
        {
          "id": "W4-T2-Q01-opt1",
          "text": "$\\frac{e^{-as}}{s}$"
        },
        {
          "id": "W4-T2-Q01-opt2",
          "text": "$\\frac{1}{s - a}$"
        },
        {
          "id": "W4-T2-Q01-opt3",
          "text": "$1$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q01-opt0"
      ],
      "explanation": "By the sifting property of the Dirac delta, $\\mathcal{L}\\{\\delta(t-a)\\} = \\int_0^\\infty e^{-st}\\delta(t-a)\\,dt = e^{-as}$.",
      "hint": "The delta function 'picks out' the integrand at $t=a$."
    },
    {
      "id": "W4-T2-Q02",
      "week": 4,
      "tier": "should",
      "topic": "Variance and Standard Deviation",
      "type": "single_select",
      "question": "A continuous random variable $X$ has PDF $f(x) = 2x$ for $0 \\le x \\le 1$. What is its variance $\\text{Var}(X)$?",
      "options": [
        {
          "id": "W4-T2-Q02-opt0",
          "text": "$\\frac{1}{18}$"
        },
        {
          "id": "W4-T2-Q02-opt1",
          "text": "$\\frac{1}{12}$"
        },
        {
          "id": "W4-T2-Q02-opt2",
          "text": "$\\frac{2}{3}$"
        },
        {
          "id": "W4-T2-Q02-opt3",
          "text": "$\\frac{1}{2}$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q02-opt0"
      ],
      "explanation": "$E[X] = \\int_0^1 2x^2\\,dx = \\frac{2}{3}$. $E[X^2] = \\int_0^1 2x^3\\,dx = \\frac{2}{4} = \\frac{1}{2}$. Then $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\frac{1}{2} - \\frac{4}{9} = \\frac{9 - 8}{18} = \\frac{1}{18}$.",
      "hint": "Use the formula $\\text{Var}(X) = E[X^2] - (E[X])^2$."
    },
    {
      "id": "W4-T2-Q03",
      "week": 4,
      "tier": "should",
      "topic": "Inverse Laplace of Delayed Step",
      "type": "single_select",
      "question": "Find $\\mathcal{L}^{-1}\\left\\{\\frac{e^{-3s}}{s+2}\\right\\}$.",
      "options": [
        {
          "id": "W4-T2-Q03-opt0",
          "text": "$e^{-2(t-3)}u(t-3)$"
        },
        {
          "id": "W4-T2-Q03-opt1",
          "text": "$e^{-3(t-2)}u(t-2)$"
        },
        {
          "id": "W4-T2-Q03-opt2",
          "text": "$e^{-2t}u(t-3)$"
        },
        {
          "id": "W4-T2-Q03-opt3",
          "text": "$\\frac{1}{2}e^{-3t}u(t-2)$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q03-opt0"
      ],
      "explanation": "Since $\\mathcal{L}^{-1}\\{\\frac{1}{s+2}\\} = e^{-2t}$, by the second shifting theorem multiplication by $e^{-3s}$ gives $e^{-2(t-3)}u(t-3)$.",
      "hint": "Shift the original function $e^{-2t}$ to $t-3$ and multiply by $u(t-3)$."
    },
    {
      "id": "W4-T2-Q04",
      "week": 4,
      "tier": "should",
      "topic": "Uniform Distribution Variance",
      "type": "single_select",
      "question": "For $X \\sim \\text{Uniform}(0, 6)$, what is $\\text{Var}(X)$?",
      "options": [
        {
          "id": "W4-T2-Q04-opt0",
          "text": "$3$"
        },
        {
          "id": "W4-T2-Q04-opt1",
          "text": "$1$"
        },
        {
          "id": "W4-T2-Q04-opt2",
          "text": "$9$"
        },
        {
          "id": "W4-T2-Q04-opt3",
          "text": "$12$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q04-opt0"
      ],
      "explanation": "For $U(a, b)$, the variance is $\\text{Var}(X) = \\frac{(b-a)^2}{12}$. For $a=0, b=6$: $\\text{Var}(X) = \\frac{6^2}{12} = \\frac{36}{12} = 3$.",
      "hint": "Recall the formula $\\text{Var}(X) = \\frac{(b-a)^2}{12}$ for a uniform distribution."
    },
    {
      "id": "W4-T2-Q05",
      "week": 4,
      "tier": "should",
      "topic": "Exponential Distribution Parameter",
      "type": "single_select",
      "question": "An exponential random variable $X$ has PDF $f(x) = \\lambda e^{-\\lambda x}$ for $x \\ge 0$. What is its mean $E[X]$?",
      "options": [
        {
          "id": "W4-T2-Q05-opt0",
          "text": "$\\frac{1}{\\lambda}$"
        },
        {
          "id": "W4-T2-Q05-opt1",
          "text": "$\\lambda$"
        },
        {
          "id": "W4-T2-Q05-opt2",
          "text": "$\\frac{1}{\\lambda^2}$"
        },
        {
          "id": "W4-T2-Q05-opt3",
          "text": "$\\lambda^2$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q05-opt0"
      ],
      "explanation": "$E[X] = \\int_0^\\infty x \\lambda e^{-\\lambda x}\\,dx = \\frac{1}{\\lambda}$. (Its variance is $\\frac{1}{\\lambda^2}$).",
      "hint": "Integrate $x \\lambda e^{-\\lambda x}$ by parts."
    },
    {
      "id": "W4-T2-Q06",
      "week": 4,
      "tier": "should",
      "topic": "Laplace Transform of Ramp Function",
      "type": "single_select",
      "question": "What is the Laplace transform of the delayed ramp $f(t) = (t - 4)u(t - 4)$?",
      "options": [
        {
          "id": "W4-T2-Q06-opt0",
          "text": "$\\frac{e^{-4s}}{s^2}$"
        },
        {
          "id": "W4-T2-Q06-opt1",
          "text": "$\\frac{e^{-4s}}{s}$"
        },
        {
          "id": "W4-T2-Q06-opt2",
          "text": "$\\frac{4e^{-4s}}{s^2}$"
        },
        {
          "id": "W4-T2-Q06-opt3",
          "text": "$\\frac{1}{s^2 - 16}$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q06-opt0"
      ],
      "explanation": "Since $f(t) = g(t-4)u(t-4)$ with $g(t) = t$, and $\\mathcal{L}\\{t\\} = \\frac{1}{s^2}$, the second shifting theorem yields $\\frac{e^{-4s}}{s^2}$.",
      "hint": "Apply $\\mathcal{L}\\{g(t-c)u(t-c)\\} = e^{-cs}G(s)$ with $g(t) = t$."
    },
    {
      "id": "W4-T2-Q07",
      "week": 4,
      "tier": "should",
      "topic": "Probability from PDF",
      "type": "single_select",
      "question": "If $f(x) = 3x^2$ for $0 \\le x \\le 1$, what is $P(0.5 \\le X \\le 1)$?",
      "options": [
        {
          "id": "W4-T2-Q07-opt0",
          "text": "$0.875$"
        },
        {
          "id": "W4-T2-Q07-opt1",
          "text": "$0.500$"
        },
        {
          "id": "W4-T2-Q07-opt2",
          "text": "$0.750$"
        },
        {
          "id": "W4-T2-Q07-opt3",
          "text": "$0.125$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q07-opt0"
      ],
      "explanation": "$P(0.5 \\le X \\le 1) = \\int_{0.5}^1 3x^2\\,dx = [x^3]_{0.5}^1 = 1^3 - (0.5)^3 = 1 - 0.125 = 0.875$.",
      "hint": "Integrate $3x^2$ from $0.5$ to $1$."
    },
    {
      "id": "W4-T2-Q08",
      "week": 4,
      "tier": "should",
      "topic": "Second Shift with Sine",
      "type": "single_select",
      "question": "What is $\\mathcal{L}\\{\\sin(2(t - \\pi))u(t - \\pi)\\}$?",
      "options": [
        {
          "id": "W4-T2-Q08-opt0",
          "text": "$\\frac{2e^{-\\pi s}}{s^2 + 4}$"
        },
        {
          "id": "W4-T2-Q08-opt1",
          "text": "$\\frac{s e^{-\\pi s}}{s^2 + 4}$"
        },
        {
          "id": "W4-T2-Q08-opt2",
          "text": "$\\frac{2e^{\\pi s}}{s^2 + 4}$"
        },
        {
          "id": "W4-T2-Q08-opt3",
          "text": "$\\frac{e^{-\\pi s}}{s^2 + 4}$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q08-opt0"
      ],
      "explanation": "Here $f(t) = \\sin(2t) \\implies F(s) = \\frac{2}{s^2 + 4}$. Applying the delay of $\\pi$ units gives $e^{-\\pi s}F(s) = \\frac{2e^{-\\pi s}}{s^2 + 4}$.",
      "hint": "The shift is exact: $\\sin(2(t-\\pi))$, so multiply $\\mathcal{L}\\{\\sin 2t\\}$ by $e^{-\\pi s}$."
    },
    {
      "id": "W4-T2-Q09",
      "week": 4,
      "tier": "should",
      "topic": "Expected Value of Linear Transformation",
      "type": "single_select",
      "question": "If $E[X] = 10$ and $\\text{Var}(X) = 4$, what are $E[3X + 5]$ and $\\text{Var}(3X + 5)$?",
      "options": [
        {
          "id": "W4-T2-Q09-opt0",
          "text": "$E[3X+5] = 35$ and $\\text{Var}(3X+5) = 36$"
        },
        {
          "id": "W4-T2-Q09-opt1",
          "text": "$E[3X+5] = 35$ and $\\text{Var}(3X+5) = 12$"
        },
        {
          "id": "W4-T2-Q09-opt2",
          "text": "$E[3X+5] = 30$ and $\\text{Var}(3X+5) = 36$"
        },
        {
          "id": "W4-T2-Q09-opt3",
          "text": "$E[3X+5] = 35$ and $\\text{Var}(3X+5) = 17$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q09-opt0"
      ],
      "explanation": "By linearity of expectation: $E[aX+b] = aE[X] + b = 3(10) + 5 = 35$. For variance: $\\text{Var}(aX+b) = a^2\\text{Var}(X) = 3^2(4) = 9 \\times 4 = 36$.",
      "hint": "Remember that constants shift the mean directly, but variance scales by $a^2$ with no effect from additive constants."
    },
    {
      "id": "W4-T2-Q10",
      "week": 4,
      "tier": "should",
      "topic": "Inverse Laplace of e^-s / s^3",
      "type": "single_select",
      "question": "Find $\\mathcal{L}^{-1}\\left\\{\\frac{e^{-2s}}{s^3}\\right\\}$.",
      "options": [
        {
          "id": "W4-T2-Q10-opt0",
          "text": "$\\frac{1}{2}(t - 2)^2 u(t - 2)$"
        },
        {
          "id": "W4-T2-Q10-opt1",
          "text": "$(t - 2)^2 u(t - 2)$"
        },
        {
          "id": "W4-T2-Q10-opt2",
          "text": "$\\frac{1}{6}(t - 2)^3 u(t - 2)$"
        },
        {
          "id": "W4-T2-Q10-opt3",
          "text": "$\\frac{1}{2}t^2 u(t - 2)$"
        }
      ],
      "correct_indices": [
        "W4-T2-Q10-opt0"
      ],
      "explanation": "Since $\\mathcal{L}^{-1}\\{\\frac{1}{s^3}\\} = \\frac{t^2}{2!} = \\frac{t^2}{2}$, shifting by 2 units yields $\\frac{1}{2}(t-2)^2 u(t-2)$.",
      "hint": "$\\mathcal{L}^{-1}\\{1/s^3\\} = t^2/2$. Then apply the time-shift theorem."
    },
    {
      "id": "W4-T3-Q01",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Piecewise Function as Heaviside",
      "type": "single_select",
      "question": "Express the pulse $f(t) = \\begin{cases} 5, & 2 \\le t < 6 \\\\ 0, & \\text{otherwise} \\end{cases}$ in terms of unit step functions.",
      "options": [
        {
          "id": "W4-T3-Q01-opt0",
          "text": "$f(t) = 5[u(t-2) - u(t-6)]$"
        },
        {
          "id": "W4-T3-Q01-opt1",
          "text": "$f(t) = 5[u(t-6) - u(t-2)]$"
        },
        {
          "id": "W4-T3-Q01-opt2",
          "text": "$f(t) = 5u(t-2) + 5u(t-6)$"
        },
        {
          "id": "W4-T3-Q01-opt3",
          "text": "$f(t) = 5u(t-4)$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q01-opt0"
      ],
      "explanation": "A rectangular pulse starting at $t=2$ and turning off at $t=6$ is represented as $5[u(t-2) - u(t-6)]$.",
      "hint": "Turn on at $t=2$ with $+u(t-2)$ and turn off at $t=6$ with $-u(t-6)$."
    },
    {
      "id": "W4-T3-Q02",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Cumulative Distribution Function",
      "type": "single_select",
      "question": "If the CDF of $X$ is $F(x) = 1 - e^{-2x}$ for $x \\ge 0$, what is $P(1 \\le X \\le 2)$?",
      "options": [
        {
          "id": "W4-T3-Q02-opt0",
          "text": "$e^{-2} - e^{-4}$"
        },
        {
          "id": "W4-T3-Q02-opt1",
          "text": "$e^{-4} - e^{-2}$"
        },
        {
          "id": "W4-T3-Q02-opt2",
          "text": "$1 - e^{-2}$"
        },
        {
          "id": "W4-T3-Q02-opt3",
          "text": "$e^{-2} + e^{-4}$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q02-opt0"
      ],
      "explanation": "$P(1 \\le X \\le 2) = F(2) - F(1) = (1 - e^{-4}) - (1 - e^{-2}) = e^{-2} - e^{-4}$.",
      "hint": "Recall that $P(a \\le X \\le b) = F(b) - F(a)$."
    },
    {
      "id": "W4-T3-Q03",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Sifting Property of Dirac Delta",
      "type": "single_select",
      "question": "Evaluate the integral $\\int_{-\\infty}^\\infty (3t^2 + 2t - 5)\\delta(t - 3)\\,dt$.",
      "options": [
        {
          "id": "W4-T3-Q03-opt0",
          "text": "$28$"
        },
        {
          "id": "W4-T3-Q03-opt1",
          "text": "$32$"
        },
        {
          "id": "W4-T3-Q03-opt2",
          "text": "$0$"
        },
        {
          "id": "W4-T3-Q03-opt3",
          "text": "$5$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q03-opt0"
      ],
      "explanation": "By the sifting property $\\int_{-\\infty}^\\infty g(t)\\delta(t-t_0)\\,dt = g(t_0)$. Here $g(3) = 3(3^2) + 2(3) - 5 = 27 + 6 - 5 = 28$.",
      "hint": "Substitute $t=3$ into the polynomial."
    },
    {
      "id": "W4-T3-Q04",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Median of Continuous Distribution",
      "type": "single_select",
      "question": "For an exponential distribution with CDF $F(x) = 1 - e^{-\\lambda x}$ ($x \\ge 0$), what is the median $m$?",
      "options": [
        {
          "id": "W4-T3-Q04-opt0",
          "text": "$m = \\frac{\\ln 2}{\\lambda}$"
        },
        {
          "id": "W4-T3-Q04-opt1",
          "text": "$m = \\frac{1}{2\\lambda}$"
        },
        {
          "id": "W4-T3-Q04-opt2",
          "text": "$m = \\frac{1}{\\lambda}$"
        },
        {
          "id": "W4-T3-Q04-opt3",
          "text": "$m = \\frac{\\lambda}{\\ln 2}$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q04-opt0"
      ],
      "explanation": "The median satisfies $F(m) = 0.5 \\implies 1 - e^{-\\lambda m} = 0.5 \\implies e^{-\\lambda m} = 0.5 \\implies -\\lambda m = -\\ln 2 \\implies m = \\frac{\\ln 2}{\\lambda}$.",
      "hint": "Set $F(m) = 0.5$ and solve for $m$."
    },
    {
      "id": "W4-T3-Q05",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Non-Aligned Heaviside Transform",
      "type": "single_select",
      "question": "Find the Laplace transform of $f(t) = t u(t - 2)$.",
      "options": [
        {
          "id": "W4-T3-Q05-opt0",
          "text": "$e^{-2s}\\left(\\frac{1}{s^2} + \\frac{2}{s}\\right)$"
        },
        {
          "id": "W4-T3-Q05-opt1",
          "text": "$\\frac{e^{-2s}}{s^2}$"
        },
        {
          "id": "W4-T3-Q05-opt2",
          "text": "$\\frac{2e^{-2s}}{s^2}$"
        },
        {
          "id": "W4-T3-Q05-opt3",
          "text": "$e^{-2s}\\left(\\frac{1}{s^2} - \\frac{2}{s}\\right)$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q05-opt0"
      ],
      "explanation": "Rewrite in terms of $(t-2)$: $t = (t-2) + 2$. Then $f(t) = (t-2)u(t-2) + 2u(t-2)$. Applying the second shift: $e^{-2s}\\mathcal{L}\\{t\\} + 2e^{-2s}\\mathcal{L}\\{1\\} = e^{-2s}\\left(\\frac{1}{s^2} + \\frac{2}{s}\\right)$.",
      "hint": "Express $t$ as $(t-2) + 2$ before transforming."
    },
    {
      "id": "W4-T3-Q06",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Memoryless Property of Exponential RV",
      "type": "single_select",
      "question": "The memoryless property $P(X > s + t \\mid X > s) = P(X > t)$ uniquely characterizes which continuous distribution?",
      "options": [
        {
          "id": "W4-T3-Q06-opt0",
          "text": "The Exponential Distribution"
        },
        {
          "id": "W4-T3-Q06-opt1",
          "text": "The Normal Distribution"
        },
        {
          "id": "W4-T3-Q06-opt2",
          "text": "The Uniform Distribution"
        },
        {
          "id": "W4-T3-Q06-opt3",
          "text": "The Cauchy Distribution"
        }
      ],
      "correct_indices": [
        "W4-T3-Q06-opt0"
      ],
      "explanation": "The exponential distribution is the unique continuous distribution possessing the memoryless property, making it ideal for modeling component lifetimes with constant failure rates.",
      "hint": "The probability that an item lasts an additional $t$ hours does not depend on how long ($s$) it has already operated."
    },
    {
      "id": "W4-T3-Q07",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Impulse Response and Transfer Function",
      "type": "single_select",
      "question": "The impulse response $h(t)$ of an LTI system is related to its transfer function $H(s)$ by:",
      "options": [
        {
          "id": "W4-T3-Q07-opt0",
          "text": "$h(t) = \\mathcal{L}^{-1}\\{H(s)\\}$"
        },
        {
          "id": "W4-T3-Q07-opt1",
          "text": "$h(t) = H(t)$"
        },
        {
          "id": "W4-T3-Q07-opt2",
          "text": "$h(t) = \\int_0^t H(s)\\,ds$"
        },
        {
          "id": "W4-T3-Q07-opt3",
          "text": "$h(t) = \\mathcal{L}\\{H(s)\\}$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q07-opt0"
      ],
      "explanation": "Because the Laplace transform of the input $\\delta(t)$ is $1$, the output transform is $Y(s) = H(s)X(s) = H(s)(1) = H(s)$. Inverting gives $h(t) = \\mathcal{L}^{-1}\\{H(s)\\}$.",
      "hint": "The output for a unit impulse input $\\delta(t)$ is the inverse transform of $H(s)$."
    },
    {
      "id": "W4-T3-Q08",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Laplace Transform of Staircase Function",
      "type": "single_select",
      "question": "What is the Laplace transform of the infinite staircase function $f(t) = n$ for $n-1 \\le t < n$?",
      "options": [
        {
          "id": "W4-T3-Q08-opt0",
          "text": "$\\frac{1}{s(1 - e^{-s})}$"
        },
        {
          "id": "W4-T3-Q08-opt1",
          "text": "$\\frac{e^{-s}}{s(1 - e^{-s})}$"
        },
        {
          "id": "W4-T3-Q08-opt2",
          "text": "$\\frac{1}{s^2}$"
        },
        {
          "id": "W4-T3-Q08-opt3",
          "text": "$\\frac{1}{1 - e^{-s}}$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q08-opt0"
      ],
      "explanation": "$f(t) = \\sum_{n=1}^\\infty u(t - (n-1))$. Transforming: $\\sum_{n=1}^\\infty \\frac{e^{-(n-1)s}}{s} = \\frac{1}{s}\\sum_{k=0}^\\infty (e^{-s})^k = \\frac{1}{s(1 - e^{-s})}$.",
      "hint": "Sum the geometric series of step functions $\\frac{1}{s}\\sum (e^{-s})^k$."
    },
    {
      "id": "W4-T3-Q09",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Mode of a Continuous Distribution",
      "type": "single_select",
      "question": "The mode of a continuous random variable with PDF $f(x)$ is defined as:",
      "options": [
        {
          "id": "W4-T3-Q09-opt0",
          "text": "The value of $x$ where $f(x)$ attains its global maximum"
        },
        {
          "id": "W4-T3-Q09-opt1",
          "text": "The value where $F(x) = 0.5$"
        },
        {
          "id": "W4-T3-Q09-opt2",
          "text": "The expected value $E[X]$"
        },
        {
          "id": "W4-T3-Q09-opt3",
          "text": "The midpoint between minimum and maximum values"
        }
      ],
      "correct_indices": [
        "W4-T3-Q09-opt0"
      ],
      "explanation": "The mode represents the most probable outcome or peak of the probability density function, found where $f'(x) = 0$ and $f''(x) < 0$.",
      "hint": "The mode is the location of the highest peak of the PDF."
    },
    {
      "id": "W4-T3-Q10",
      "week": 4,
      "tier": "nice_to_know",
      "topic": "Derivative of Heaviside is Delta",
      "type": "single_select",
      "question": "In distributional calculus, the generalized derivative of the Heaviside step function $\\frac{d}{dt}u(t - c)$ is:",
      "options": [
        {
          "id": "W4-T3-Q10-opt0",
          "text": "$\\delta(t - c)$"
        },
        {
          "id": "W4-T3-Q10-opt1",
          "text": "$0$"
        },
        {
          "id": "W4-T3-Q10-opt2",
          "text": "$1$"
        },
        {
          "id": "W4-T3-Q10-opt3",
          "text": "$u'(t)$"
        }
      ],
      "correct_indices": [
        "W4-T3-Q10-opt0"
      ],
      "explanation": "The slope of a unit step is 0 everywhere except at $t=c$, where it is infinite with unit area under the derivative curve: $\\frac{d}{dt}u(t-c) = \\delta(t-c)$.",
      "hint": "The derivative of a step function is the unit impulse (Dirac delta)."
    },
    {
      "id": "W4-T4-Q01",
      "week": 4,
      "tier": "extra",
      "topic": "Impulse Response of an Oscillator",
      "type": "single_select",
      "question": "Solve the IVP $y'' + 4y = 3\\delta(t - \\pi)$ with $y(0) = 0, y'(0) = 0$.",
      "options": [
        {
          "id": "W4-T4-Q01-opt0",
          "text": "$y(t) = \\frac{3}{2}\\sin(2(t-\\pi)) u(t - \\pi)$"
        },
        {
          "id": "W4-T4-Q01-opt1",
          "text": "$y(t) = 3\\cos(2(t-\\pi)) u(t - \\pi)$"
        },
        {
          "id": "W4-T4-Q01-opt2",
          "text": "$y(t) = \\frac{3}{2}\\sin(2t) u(t - \\pi)$"
        },
        {
          "id": "W4-T4-Q01-opt3",
          "text": "$y(t) = 3\\sin(2t)$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q01-opt0"
      ],
      "explanation": "Transform: $(s^2 + 4)Y = 3e^{-\\pi s} \\implies Y(s) = 3e^{-\\pi s} \\frac{1}{s^2 + 4} = \\frac{3}{2} e^{-\\pi s} \\frac{2}{s^2 + 4}$. Inverting via the second shifting theorem gives $y(t) = \\frac{3}{2}\\sin(2(t-\\pi))u(t-\\pi)$.",
      "hint": "Transform the delta function to $3e^{-\\pi s}$ and apply the Second Shifting Theorem on inversion."
    },
    {
      "id": "W4-T4-Q02",
      "week": 4,
      "tier": "extra",
      "topic": "Laplace Transform of Periodic Functions",
      "type": "single_select",
      "question": "If $f(t)$ is periodic with period $T$, what is its Laplace transform?",
      "options": [
        {
          "id": "W4-T4-Q02-opt0",
          "text": "$\\frac{1}{1 - e^{-sT}} \\int_0^T e^{-st}f(t)\\,dt$"
        },
        {
          "id": "W4-T4-Q02-opt1",
          "text": "$\\frac{1}{1 + e^{-sT}} \\int_0^T e^{-st}f(t)\\,dt$"
        },
        {
          "id": "W4-T4-Q02-opt2",
          "text": "$\\int_0^T e^{-st}f(t)\\,dt$"
        },
        {
          "id": "W4-T4-Q02-opt3",
          "text": "$\\frac{e^{-sT}}{s} \\int_0^T f(t)\\,dt$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q02-opt0"
      ],
      "explanation": "Partitioning the integral into intervals of length $T$ yields a geometric series in $e^{-sT}$, summing to $\\frac{1}{1 - e^{-sT}}\\int_0^T e^{-st}f(t)\\,dt$.",
      "hint": "Sum the geometric series of shifted copies $\\sum_{n=0}^\\infty (e^{-sT})^n$ arising from periodicity."
    },
    {
      "id": "W4-T4-Q03",
      "week": 4,
      "tier": "extra",
      "topic": "Laplace Transform of Square Wave",
      "type": "single_select",
      "question": "A square wave $f(t)$ of period $2a$ is $+1$ on $[0, a)$ and $-1$ on $[a, 2a)$. What is its Laplace transform?",
      "options": [
        {
          "id": "W4-T4-Q03-opt0",
          "text": "$\\frac{1}{s}\\tanh\\left(\\frac{as}{2}\\right)$"
        },
        {
          "id": "W4-T4-Q03-opt1",
          "text": "$\\frac{1}{s}\\coth\\left(\\frac{as}{2}\\right)$"
        },
        {
          "id": "W4-T4-Q03-opt2",
          "text": "$\\frac{1}{s(1 - e^{-2as})}$"
        },
        {
          "id": "W4-T4-Q03-opt3",
          "text": "$\\frac{1}{s^2}\\tanh(as)$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q03-opt0"
      ],
      "explanation": "$\\int_0^{2a} e^{-st}f(t)\\,dt = \\int_0^a e^{-st}\\,dt - \\int_a^{2a} e^{-st}\\,dt = \\frac{1 - 2e^{-as} + e^{-2as}}{s} = \\frac{(1 - e^{-as})^2}{s}$. Dividing by $1 - e^{-2as} = (1 - e^{-as})(1 + e^{-as})$ yields $\\frac{1 - e^{-as}}{s(1 + e^{-as})} = \\frac{1}{s}\\tanh(as/2)$.",
      "hint": "Use the periodic transform formula and express $(1-e^{-as})/(1+e^{-as})$ as $\\tanh(as/2)$."
    },
    {
      "id": "W4-T4-Q04",
      "week": 4,
      "tier": "extra",
      "topic": "Rectified Sine Wave Transform",
      "type": "single_select",
      "question": "The half-wave rectified sine $f(t) = \\begin{cases} \\sin(\\omega t), & 0 \\le t < \\pi/\\omega \\\\ 0, & \\pi/\\omega \\le t < 2\\pi/\\omega \\end{cases}$ has transform:",
      "options": [
        {
          "id": "W4-T4-Q04-opt0",
          "text": "$\\frac{\\omega}{(s^2 + \\omega^2)(1 - e^{-\\pi s / \\omega})}$"
        },
        {
          "id": "W4-T4-Q04-opt1",
          "text": "$\\frac{\\omega}{(s^2 + \\omega^2)(1 + e^{-\\pi s / \\omega})}$"
        },
        {
          "id": "W4-T4-Q04-opt2",
          "text": "$\\frac{\\omega}{s^2 + \\omega^2}$"
        },
        {
          "id": "W4-T4-Q04-opt3",
          "text": "$\\frac{s}{(s^2 + \\omega^2)(1 - e^{-2\\pi s / \\omega})}$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q04-opt0"
      ],
      "explanation": "Integrating $\\int_0^{\\pi/\\omega} e^{-st}\\sin(\\omega t)\\,dt = \\frac{\\omega(1 + e^{-\\pi s/\\omega})}{s^2 + \\omega^2}$. Dividing by $1 - e^{-2\\pi s/\\omega} = (1 - e^{-\\pi s/\\omega})(1 + e^{-\\pi s/\\omega})$ cancels the numerator factor, leaving $\\frac{\\omega}{(s^2 + \\omega^2)(1 - e^{-\\pi s/\\omega})}$.",
      "hint": "Factor $1 - e^{-2\\pi s/\\omega} = (1 - e^{-\\pi s/\\omega})(1 + e^{-\\pi s/\\omega})$."
    },
    {
      "id": "W4-T4-Q05",
      "week": 4,
      "tier": "extra",
      "topic": "Characteristic Function of a Distribution",
      "type": "single_select",
      "question": "The characteristic function of a random variable $X$ is defined as $\\varphi_X(t) = E[e^{itX}]$. What is $\\varphi_X(0)$?",
      "options": [
        {
          "id": "W4-T4-Q05-opt0",
          "text": "$1$"
        },
        {
          "id": "W4-T4-Q05-opt1",
          "text": "$0$"
        },
        {
          "id": "W4-T4-Q05-opt2",
          "text": "$E[X]$"
        },
        {
          "id": "W4-T4-Q05-opt3",
          "text": "$\\infty$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q05-opt0"
      ],
      "explanation": "$\\varphi_X(0) = E[e^{i(0)X}] = E[1] = 1$. The characteristic function evaluated at $0$ always equals 1 for any valid probability distribution.",
      "hint": "Substitute $t=0$ into $E[e^{itX}]$."
    },
    {
      "id": "W4-T4-Q06",
      "week": 4,
      "tier": "extra",
      "topic": "Moment Generating Function",
      "type": "single_select",
      "question": "If the Moment Generating Function $M_X(t) = E[e^{tX}]$ exists in a neighborhood of $0$, how is the $n$-th moment $E[X^n]$ obtained?",
      "options": [
        {
          "id": "W4-T4-Q06-opt0",
          "text": "$E[X^n] = M_X^{(n)}(0) = \\left.\\frac{d^n M_X}{dt^n}\\right|_{t=0}$"
        },
        {
          "id": "W4-T4-Q06-opt1",
          "text": "$E[X^n] = M_X(n)$"
        },
        {
          "id": "W4-T4-Q06-opt2",
          "text": "$E[X^n] = \\int_0^n M_X(t)\\,dt$"
        },
        {
          "id": "W4-T4-Q06-opt3",
          "text": "$E[X^n] = n! M_X(0)$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q06-opt0"
      ],
      "explanation": "Expanding $e^{tX} = \\sum_{n=0}^\\infty \\frac{t^n X^n}{n!}$ yields $M_X(t) = \\sum_{n=0}^\\infty \\frac{t^n}{n!}E[X^n]$. Differentiating $n$ times and evaluating at $t=0$ isolates $E[X^n]$.",
      "hint": "Differentiate $M_X(t)$ $n$ times and set $t=0$."
    },
    {
      "id": "W4-T4-Q07",
      "week": 4,
      "tier": "extra",
      "topic": "Cauchy Distribution Undefined Mean",
      "type": "single_select",
      "question": "The standard Cauchy distribution has PDF $f(x) = \\frac{1}{\\pi(1 + x^2)}$ for $-\\infty < x < \\infty$. Why does its expected value $E[X]$ not exist?",
      "options": [
        {
          "id": "W4-T4-Q07-opt0",
          "text": "The integral $\\int_{-\\infty}^\\infty \\frac{|x|}{\\pi(1+x^2)}\\,dx$ diverges logarithmically, so the expectation is undefined"
        },
        {
          "id": "W4-T4-Q07-opt1",
          "text": "Because $f(x)$ is not symmetric"
        },
        {
          "id": "W4-T4-Q07-opt2",
          "text": "Because $\\int_{-\\infty}^\\infty f(x)\\,dx \\neq 1$"
        },
        {
          "id": "W4-T4-Q07-opt3",
          "text": "Because the variance is zero"
        }
      ],
      "correct_indices": [
        "W4-T4-Q07-opt0"
      ],
      "explanation": "For an expectation to exist, the integral must converge absolutely: $\\int |x|f(x)\\,dx < \\infty$. For the Cauchy distribution, $\\int \\frac{x}{1+x^2}\\,dx \\approx \\frac{1}{2}\\ln(1+x^2) \\to \\infty$, so $E[X]$ is mathematically undefined.",
      "hint": "Absolute convergence of the expectation integral fails due to heavy tails decaying as $1/x^2$."
    },
    {
      "id": "W4-T4-Q08",
      "week": 4,
      "tier": "extra",
      "topic": "Discontinuous Forcing of RLC Circuit",
      "type": "single_select",
      "question": "An $RLC$ circuit with $L=1\\text{ H}, R=2\\ \\Omega, C=1\\text{ F}$ has voltage $E(t) = u(t - 1) - u(t - 3)$. What is the transform of the source $E(t)$?",
      "options": [
        {
          "id": "W4-T4-Q08-opt0",
          "text": "$\\frac{e^{-s} - e^{-3s}}{s}$"
        },
        {
          "id": "W4-T4-Q08-opt1",
          "text": "$\\frac{e^{-s} + e^{-3s}}{s}$"
        },
        {
          "id": "W4-T4-Q08-opt2",
          "text": "$e^{-s} - e^{-3s}$"
        },
        {
          "id": "W4-T4-Q08-opt3",
          "text": "$\\frac{e^{-2s}}{s}$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q08-opt0"
      ],
      "explanation": "Applying linearity and the shift theorem to each step function: $\\mathcal{L}\\{u(t-1)\\} = \\frac{e^{-s}}{s}$ and $\\mathcal{L}\\{u(t-3)\\} = \\frac{e^{-3s}}{s}$, giving $\\frac{e^{-s} - e^{-3s}}{s}$.",
      "hint": "Transform each Heaviside step individually."
    },
    {
      "id": "W4-T4-Q09",
      "week": 4,
      "tier": "extra",
      "topic": "Duhamel's Integral Formula",
      "type": "single_select",
      "question": "Duhamel's integral expresses the response $y(t)$ to an arbitrary input $x(t)$ with zero initial conditions in terms of the step response $A(t)$ as:",
      "options": [
        {
          "id": "W4-T4-Q09-opt0",
          "text": "$y(t) = x(0)A(t) + \\int_0^t x'(\\tau)A(t - \\tau)\\,d\\tau$"
        },
        {
          "id": "W4-T4-Q09-opt1",
          "text": "$y(t) = \\int_0^t x(\\tau)A(\\tau)\\,d\\tau$"
        },
        {
          "id": "W4-T4-Q09-opt2",
          "text": "$y(t) = x(t) A(t)$"
        },
        {
          "id": "W4-T4-Q09-opt3",
          "text": "$y(t) = x'(t) A'(t)$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q09-opt0"
      ],
      "explanation": "Duhamel's formula decomposes an arbitrary input $x(t)$ into a step at $t=0$ of height $x(0)$ plus an infinite sequence of incremental steps $x'(\\tau)d\\tau$, yielding $y(t) = x(0)A(t) + \\int_0^t x'(\\tau)A(t-\\tau)\\,d\\tau$.",
      "hint": "Decomposes the input into a sum of infinitesimal step responses."
    },
    {
      "id": "W4-T4-Q10",
      "week": 4,
      "tier": "extra",
      "topic": "Derivative of Dirac Delta Function",
      "type": "single_select",
      "question": "What is the action of the distributional derivative $\\delta'(t - a)$ on a smooth test function $\\phi(t)$?",
      "options": [
        {
          "id": "W4-T4-Q10-opt0",
          "text": "$\\int_{-\\infty}^\\infty \\phi(t)\\delta'(t - a)\\,dt = -\\phi'(a)$"
        },
        {
          "id": "W4-T4-Q10-opt1",
          "text": "$\\int_{-\\infty}^\\infty \\phi(t)\\delta'(t - a)\\,dt = \\phi'(a)$"
        },
        {
          "id": "W4-T4-Q10-opt2",
          "text": "$\\int_{-\\infty}^\\infty \\phi(t)\\delta'(t - a)\\,dt = 0$"
        },
        {
          "id": "W4-T4-Q10-opt3",
          "text": "$\\int_{-\\infty}^\\infty \\phi(t)\\delta'(t - a)\\,dt = -\\phi(a)$"
        }
      ],
      "correct_indices": [
        "W4-T4-Q10-opt0"
      ],
      "explanation": "By integration by parts: $\\int \\phi(t)\\delta'(t-a)\\,dt = [\\phi(t)\\delta(t-a)]_{-\\infty}^\\infty - \\int \\phi'(t)\\delta(t-a)\\,dt = 0 - \\phi'(a) = -\\phi'(a)$.",
      "hint": "Integration by parts transfers the derivative to $\\phi$ with a minus sign."
    }
  ]
};
