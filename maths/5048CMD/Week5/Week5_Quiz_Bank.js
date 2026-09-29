window.QUIZ_BANK_WEEK5 = {
  "module": "5048CMD Engineering Mathematics 2",
  "week": 5,
  "title": "Week 5: Probability II & Fourier Series I",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W5-T1-Q01",
      "week": 5,
      "tier": "core",
      "topic": "Standard Normal Z-Score",
      "type": "single_select",
      "question": "If $X \\sim N(\\mu = 50, \\sigma^2 = 25)$, what is the standard normal variable $Z$ corresponding to $X = 60$?",
      "options": [
        {
          "id": "W5-T1-Q01-opt0",
          "text": "$Z = 2.0$"
        },
        {
          "id": "W5-T1-Q01-opt1",
          "text": "$Z = 0.4$"
        },
        {
          "id": "W5-T1-Q01-opt2",
          "text": "$Z = 1.0$"
        },
        {
          "id": "W5-T1-Q01-opt3",
          "text": "$Z = 2.5$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q01-opt0"
      ],
      "explanation": "The standard deviation is $\\sigma = \\sqrt{25} = 5$. Thus $Z = \\frac{X - \\mu}{\\sigma} = \\frac{60 - 50}{5} = 2.0$.",
      "hint": "Use $Z = \\frac{X - \\mu}{\\sigma}$ where $\\sigma = \\sqrt{\\sigma^2}$."
    },
    {
      "id": "W5-T1-Q02",
      "week": 5,
      "tier": "core",
      "topic": "68-95-99.7 Empirical Rule",
      "type": "single_select",
      "question": "For any normal distribution $N(\\mu, \\sigma^2)$, approximately what percentage of observations lie within 2 standard deviations $(\\mu \\pm 2\\sigma)$ of the mean?",
      "options": [
        {
          "id": "W5-T1-Q02-opt0",
          "text": "$95.4\\%$"
        },
        {
          "id": "W5-T1-Q02-opt1",
          "text": "$68.3\\%$"
        },
        {
          "id": "W5-T1-Q02-opt2",
          "text": "$99.7\\%$"
        },
        {
          "id": "W5-T1-Q02-opt3",
          "text": "$50.0\\%$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q02-opt0"
      ],
      "explanation": "By the empirical rule for Gaussian distributions, approximately $68.3\\%$ lie in $\\mu \\pm \\sigma$, $95.4\\%$ in $\\mu \\pm 2\\sigma$, and $99.7\\%$ in $\\mu \\pm 3\\sigma$.",
      "hint": "Recall the standard three-sigma rule of thumb for the normal distribution."
    },
    {
      "id": "W5-T1-Q03",
      "week": 5,
      "tier": "core",
      "topic": "Dirichlet Conditions",
      "type": "single_select",
      "question": "Which of the following is NOT one of the Dirichlet conditions for the convergence of a Fourier series of $f(x)$ over $[-L, L]$?",
      "options": [
        {
          "id": "W5-T1-Q03-opt0",
          "text": "$f(x)$ must be infinitely differentiable everywhere"
        },
        {
          "id": "W5-T1-Q03-opt1",
          "text": "$f(x)$ is periodic and single-valued"
        },
        {
          "id": "W5-T1-Q03-opt2",
          "text": "$f(x)$ has at most a finite number of finite discontinuities in any period"
        },
        {
          "id": "W5-T1-Q03-opt3",
          "text": "$f(x)$ has at most a finite number of local extrema in any period"
        }
      ],
      "correct_indices": [
        "W5-T1-Q03-opt0"
      ],
      "explanation": "Dirichlet conditions require piecewise continuity, a finite number of extrema, and a finite number of finite discontinuities. Infinite differentiability is NOT required.",
      "hint": "Fourier series can represent piecewise discontinuous functions (like square waves) that are not differentiable everywhere."
    },
    {
      "id": "W5-T1-Q04",
      "week": 5,
      "tier": "core",
      "topic": "Euler-Fourier Formula for a0",
      "type": "single_select",
      "question": "For a function $f(x)$ of period $2L$, what is the formula for the constant Fourier coefficient $a_0$ in the series $f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty \\left(a_n \\cos\\frac{n\\pi x}{L} + b_n \\sin\\frac{n\\pi x}{L}\\right)$?",
      "options": [
        {
          "id": "W5-T1-Q04-opt0",
          "text": "$a_0 = \\frac{1}{L} \\int_{-L}^L f(x)\\,dx$"
        },
        {
          "id": "W5-T1-Q04-opt1",
          "text": "$a_0 = \\frac{1}{2L} \\int_{-L}^L f(x)\\,dx$"
        },
        {
          "id": "W5-T1-Q04-opt2",
          "text": "$a_0 = \\frac{2}{L} \\int_{-L}^L f(x)\\,dx$"
        },
        {
          "id": "W5-T1-Q04-opt3",
          "text": "$a_0 = \\int_{-L}^L f(x)\\,dx$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q04-opt0"
      ],
      "explanation": "Integrating both sides from $-L$ to $L$: $\\int_{-L}^L f(x)\\,dx = \\frac{a_0}{2}(2L) + 0 = a_0 L \\implies a_0 = \\frac{1}{L}\\int_{-L}^L f(x)\\,dx$. (The average value is $\\frac{a_0}{2}$).",
      "hint": "Integrate the Fourier series term by term over one period $[-L, L]$."
    },
    {
      "id": "W5-T1-Q05",
      "week": 5,
      "tier": "core",
      "topic": "Euler-Fourier Formula for an",
      "type": "single_select",
      "question": "What is the Euler-Fourier formula for $a_n$ ($n \\ge 1$) for a function of period $2L$?",
      "options": [
        {
          "id": "W5-T1-Q05-opt0",
          "text": "$a_n = \\frac{1}{L} \\int_{-L}^L f(x)\\cos\\left(\\frac{n\\pi x}{L}\\right)\\,dx$"
        },
        {
          "id": "W5-T1-Q05-opt1",
          "text": "$a_n = \\frac{1}{2L} \\int_{-L}^L f(x)\\cos\\left(\\frac{n\\pi x}{L}\\right)\\,dx$"
        },
        {
          "id": "W5-T1-Q05-opt2",
          "text": "$a_n = \\frac{1}{L} \\int_{-L}^L f(x)\\sin\\left(\\frac{n\\pi x}{L}\\right)\\,dx$"
        },
        {
          "id": "W5-T1-Q05-opt3",
          "text": "$a_n = \\frac{2}{L} \\int_0^L f(x)\\,dx$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q05-opt0"
      ],
      "explanation": "Orthogonality of cosines over $[-L, L]$ yields $\\int_{-L}^L \\cos^2(n\\pi x/L)\\,dx = L$, so multiplying $f(x)$ by $\\cos(n\\pi x/L)$ and integrating gives $a_n = \\frac{1}{L}\\int_{-L}^L f(x)\\cos(n\\pi x/L)\\,dx$.",
      "hint": "Multiply by the matching cosine harmonic and divide by $L$."
    },
    {
      "id": "W5-T1-Q06",
      "week": 5,
      "tier": "core",
      "topic": "Euler-Fourier Formula for bn",
      "type": "single_select",
      "question": "What is the Euler-Fourier formula for $b_n$ ($n \\ge 1$) for a function of period $2L$?",
      "options": [
        {
          "id": "W5-T1-Q06-opt0",
          "text": "$b_n = \\frac{1}{L} \\int_{-L}^L f(x)\\sin\\left(\\frac{n\\pi x}{L}\\right)\\,dx$"
        },
        {
          "id": "W5-T1-Q06-opt1",
          "text": "$b_n = \\frac{1}{L} \\int_{-L}^L f(x)\\cos\\left(\\frac{n\\pi x}{L}\\right)\\,dx$"
        },
        {
          "id": "W5-T1-Q06-opt2",
          "text": "$b_n = \\frac{1}{2L} \\int_{-L}^L f(x)\\,dx$"
        },
        {
          "id": "W5-T1-Q06-opt3",
          "text": "$b_n = \\frac{2}{L} \\int_{-L}^L f(x)\\,dx$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q06-opt0"
      ],
      "explanation": "Orthogonality of sines over $[-L, L]$ yields $b_n = \\frac{1}{L}\\int_{-L}^L f(x)\\sin\\left(\\frac{n\\pi x}{L}\\right)\\,dx$.",
      "hint": "The sine coefficients $b_n$ integrate $f(x)$ against $\\sin(n\\pi x/L)$."
    },
    {
      "id": "W5-T1-Q07",
      "week": 5,
      "tier": "core",
      "topic": "Standard Normal Mean and Variance",
      "type": "single_select",
      "question": "The standard normal random variable $Z$ has:",
      "options": [
        {
          "id": "W5-T1-Q07-opt0",
          "text": "Mean $\\mu = 0$ and variance $\\sigma^2 = 1$"
        },
        {
          "id": "W5-T1-Q07-opt1",
          "text": "Mean $\\mu = 1$ and variance $\\sigma^2 = 1$"
        },
        {
          "id": "W5-T1-Q07-opt2",
          "text": "Mean $\\mu = 0$ and variance $\\sigma^2 = 0$"
        },
        {
          "id": "W5-T1-Q07-opt3",
          "text": "Mean $\\mu = 0.5$ and variance $\\sigma^2 = 0.5$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q07-opt0"
      ],
      "explanation": "By definition, the standard normal distribution is the Gaussian distribution centered at zero ($\\mu = 0$) with unit variance ($\\sigma^2 = 1$).",
      "hint": "Standard normal distribution is denoted $N(0, 1)$."
    },
    {
      "id": "W5-T1-Q08",
      "week": 5,
      "tier": "core",
      "topic": "Periodicity Concept",
      "type": "single_select",
      "question": "A function $f(x)$ is periodic with period $T$ if for all $x$ in its domain:",
      "options": [
        {
          "id": "W5-T1-Q08-opt0",
          "text": "$f(x + T) = f(x)$"
        },
        {
          "id": "W5-T1-Q08-opt1",
          "text": "$f(x + T) = -f(x)$"
        },
        {
          "id": "W5-T1-Q08-opt2",
          "text": "$f(x T) = f(x)$"
        },
        {
          "id": "W5-T1-Q08-opt3",
          "text": "$f(x + T) = f(T)$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q08-opt0"
      ],
      "explanation": "A function repeats its profile after every interval of length $T$: $f(x + T) = f(x)$ for all $x$.",
      "hint": "Adding $T$ to the input variable reproduces the original output."
    },
    {
      "id": "W5-T1-Q09",
      "week": 5,
      "tier": "core",
      "topic": "Average Value of Periodic Signal",
      "type": "single_select",
      "question": "In the Fourier series $f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty (a_n \\cos nx + b_n \\sin nx)$, what does $\\frac{a_0}{2}$ represent physically?",
      "options": [
        {
          "id": "W5-T1-Q09-opt0",
          "text": "The average (DC offset) value of the signal over one period"
        },
        {
          "id": "W5-T1-Q09-opt1",
          "text": "The amplitude of the fundamental harmonic"
        },
        {
          "id": "W5-T1-Q09-opt2",
          "text": "The total power of the signal"
        },
        {
          "id": "W5-T1-Q09-opt3",
          "text": "The root-mean-square value"
        }
      ],
      "correct_indices": [
        "W5-T1-Q09-opt0"
      ],
      "explanation": "Because all harmonic sines and cosines have zero mean over a complete period, $\\frac{a_0}{2} = \\frac{1}{2L}\\int_{-L}^L f(x)\\,dx$ is the average or DC component.",
      "hint": "The DC offset is the average height of the wave."
    },
    {
      "id": "W5-T1-Q10",
      "week": 5,
      "tier": "core",
      "topic": "Orthogonality of Sine and Cosine",
      "type": "single_select",
      "question": "For integers $m, n > 0$, what is the value of $\\int_{-\\pi}^\\pi \\sin(mx)\\cos(nx)\\,dx$?",
      "options": [
        {
          "id": "W5-T1-Q10-opt0",
          "text": "$0$"
        },
        {
          "id": "W5-T1-Q10-opt1",
          "text": "$\\pi$"
        },
        {
          "id": "W5-T1-Q10-opt2",
          "text": "$2\\pi$"
        },
        {
          "id": "W5-T1-Q10-opt3",
          "text": "$\\frac{\\pi}{2}$"
        }
      ],
      "correct_indices": [
        "W5-T1-Q10-opt0"
      ],
      "explanation": "The integrand $\\sin(mx)\\cos(nx)$ is the product of an odd function and an even function, which is an odd function. Integrating an odd function over symmetric bounds $[-\\pi, \\pi]$ always yields exactly $0$.",
      "hint": "The product of an odd and even function is odd, so its symmetric integral is 0."
    },
    {
      "id": "W5-T2-Q01",
      "week": 5,
      "tier": "should",
      "topic": "Central Limit Theorem",
      "type": "single_select",
      "question": "Let $\\bar{X}_n$ be the sample mean of $n$ independent and identically distributed random variables with mean $\\mu$ and variance $\\sigma^2$. As $n \\to \\infty$, what is the asymptotic distribution of $\\bar{X}_n$?",
      "options": [
        {
          "id": "W5-T2-Q01-opt0",
          "text": "$N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$"
        },
        {
          "id": "W5-T2-Q01-opt1",
          "text": "$N(\\mu, \\sigma^2)$"
        },
        {
          "id": "W5-T2-Q01-opt2",
          "text": "$N(n\\mu, n\\sigma^2)$"
        },
        {
          "id": "W5-T2-Q01-opt3",
          "text": "$N\\left(0, \\frac{\\sigma^2}{n^2}\\right)$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q01-opt0"
      ],
      "explanation": "The Central Limit Theorem guarantees that the sample mean $\\bar{X}_n$ approaches a normal distribution with mean $\\mu$ and standard error $\\frac{\\sigma}{\\sqrt{n}}$ (variance $\\frac{\\sigma^2}{n}$).",
      "hint": "The mean stays the same, but the spread shrinks by a factor of $\\sqrt{n}$."
    },
    {
      "id": "W5-T2-Q02",
      "week": 5,
      "tier": "should",
      "topic": "Fourier Coefficients of Square Wave",
      "type": "single_select",
      "question": "Consider the odd square wave $f(x) = \\begin{cases} -1, & -\\pi < x < 0 \\\\ 1, & 0 < x < \\pi \\end{cases}$ with period $2\\pi$. What are the coefficients $a_n$ and $b_n$?",
      "options": [
        {
          "id": "W5-T2-Q02-opt0",
          "text": "$a_n = 0$, $b_n = \\frac{4}{n\\pi}$ for odd $n$ (and $0$ for even $n$)"
        },
        {
          "id": "W5-T2-Q02-opt1",
          "text": "$a_n = \\frac{4}{n\\pi}$, $b_n = 0$"
        },
        {
          "id": "W5-T2-Q02-opt2",
          "text": "$a_n = 0$, $b_n = \\frac{2}{n\\pi}$ for all $n$"
        },
        {
          "id": "W5-T2-Q02-opt3",
          "text": "$a_n = 0$, $b_n = \\frac{4}{n^2\\pi}$ for odd $n$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q02-opt0"
      ],
      "explanation": "Since $f(x)$ is odd, $a_n = 0$. For $b_n$: $b_n = \\frac{2}{\\pi}\\int_0^\\pi (1)\\sin(nx)\\,dx = \\frac{2}{n\\pi}[-\\cos(nx)]_0^\\pi = \\frac{2(1 - (-1)^n)}{n\\pi}$. For odd $n$, this is $\\frac{4}{n\\pi}$; for even $n$, it is $0$.",
      "hint": "Recognize that $f(x)$ is an odd function, so all cosine coefficients $a_n$ vanish."
    },
    {
      "id": "W5-T2-Q03",
      "week": 5,
      "tier": "should",
      "topic": "Sample Mean Probability via CLT",
      "type": "single_select",
      "question": "A population has mean $\\mu = 100$ and $\\sigma = 15$. For a sample of size $n = 25$, what is the standard error $\\sigma_{\\bar{X}}$?",
      "options": [
        {
          "id": "W5-T2-Q03-opt0",
          "text": "$\\sigma_{\\bar{X}} = 3$"
        },
        {
          "id": "W5-T2-Q03-opt1",
          "text": "$\\sigma_{\\bar{X}} = 15$"
        },
        {
          "id": "W5-T2-Q03-opt2",
          "text": "$\\sigma_{\\bar{X}} = 0.6$"
        },
        {
          "id": "W5-T2-Q03-opt3",
          "text": "$\\sigma_{\\bar{X}} = 5$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q03-opt0"
      ],
      "explanation": "The standard error of the sample mean is $\\sigma_{\\bar{X}} = \\frac{\\sigma}{\\sqrt{n}} = \\frac{15}{\\sqrt{25}} = \\frac{15}{5} = 3$.",
      "hint": "Divide $\\sigma$ by $\\sqrt{n}$."
    },
    {
      "id": "W5-T2-Q04",
      "week": 5,
      "tier": "should",
      "topic": "Sawtooth Wave Fourier Coefficients",
      "type": "single_select",
      "question": "For the sawtooth wave $f(x) = x$ on $(-\\pi, \\pi)$ with period $2\\pi$, what is $b_n$?",
      "options": [
        {
          "id": "W5-T2-Q04-opt0",
          "text": "$b_n = \\frac{2(-1)^{n+1}}{n}$"
        },
        {
          "id": "W5-T2-Q04-opt1",
          "text": "$b_n = \\frac{2}{n}$"
        },
        {
          "id": "W5-T2-Q04-opt2",
          "text": "$b_n = \\frac{(-1)^n}{n^2}$"
        },
        {
          "id": "W5-T2-Q04-opt3",
          "text": "$b_n = 0$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q04-opt0"
      ],
      "explanation": "Because $x$ is odd, $a_n = 0$. Integration by parts: $b_n = \\frac{2}{\\pi}\\int_0^\\pi x\\sin(nx)\\,dx = \\frac{2}{\\pi}\\left[-\\frac{x\\cos nx}{n} + \\frac{\\sin nx}{n^2}\\right]_0^\\pi = \\frac{2}{\\pi}\\left(-\\frac{\\pi(-1)^n}{n}\\right) = \\frac{2(-1)^{n+1}}{n}$.",
      "hint": "Integrate $x\\sin(nx)$ by parts."
    },
    {
      "id": "W5-T2-Q05",
      "week": 5,
      "tier": "should",
      "topic": "Normal Distribution Two-Tailed Probability",
      "type": "single_select",
      "question": "For $Z \\sim N(0, 1)$, if $P(Z \\le 1.645) = 0.95$, what is $P(-1.645 \\le Z \\le 1.645)$?",
      "options": [
        {
          "id": "W5-T2-Q05-opt0",
          "text": "$0.90$"
        },
        {
          "id": "W5-T2-Q05-opt1",
          "text": "$0.95$"
        },
        {
          "id": "W5-T2-Q05-opt2",
          "text": "$0.99$"
        },
        {
          "id": "W5-T2-Q05-opt3",
          "text": "$0.85$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q05-opt0"
      ],
      "explanation": "By symmetry, the upper tail has area $1 - 0.95 = 0.05$ and the lower tail has area $0.05$. The central area is $1 - 2(0.05) = 0.90$.",
      "hint": "Subtract the two $5\\%$ tails from $100\\%$."
    },
    {
      "id": "W5-T2-Q06",
      "week": 5,
      "tier": "should",
      "topic": "Constant Term of Rectified Wave",
      "type": "single_select",
      "question": "For the half-wave rectified cosine $f(t) = \\begin{cases} \\cos t, & -\\pi/2 < t < \\pi/2 \\\\ 0, & \\text{otherwise in } [-\\pi, \\pi] \\end{cases}$, what is $a_0$?",
      "options": [
        {
          "id": "W5-T2-Q06-opt0",
          "text": "$a_0 = \\frac{2}{\\pi}$"
        },
        {
          "id": "W5-T2-Q06-opt1",
          "text": "$a_0 = \\frac{1}{\\pi}$"
        },
        {
          "id": "W5-T2-Q06-opt2",
          "text": "$a_0 = \\frac{4}{\\pi}$"
        },
        {
          "id": "W5-T2-Q06-opt3",
          "text": "$a_0 = 1$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q06-opt0"
      ],
      "explanation": "$a_0 = \\frac{1}{\\pi}\\int_{-\\pi/2}^{\\pi/2} \\cos t\\,dt = \\frac{1}{\\pi}[\\sin t]_{-\\pi/2}^{\\pi/2} = \\frac{1}{\\pi}(1 - (-1)) = \\frac{2}{\\pi}$. (DC offset is $a_0/2 = 1/\\pi$).",
      "hint": "Integrate $\\cos t$ from $-\\pi/2$ to $\\pi/2$ and divide by $\\pi$."
    },
    {
      "id": "W5-T2-Q07",
      "week": 5,
      "tier": "should",
      "topic": "Normal Distribution Percentile",
      "type": "single_select",
      "question": "The scores on an exam follow $N(70, 100)$. What score corresponds to the 84th percentile (given $P(Z \\le 1) \\approx 0.8413$)?",
      "options": [
        {
          "id": "W5-T2-Q07-opt0",
          "text": "$80$"
        },
        {
          "id": "W5-T2-Q07-opt1",
          "text": "$75$"
        },
        {
          "id": "W5-T2-Q07-opt2",
          "text": "$84$"
        },
        {
          "id": "W5-T2-Q07-opt3",
          "text": "$90$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q07-opt0"
      ],
      "explanation": "$\\sigma = \\sqrt{100} = 10$. The 84th percentile corresponds to $Z = +1.0$. Thus $X = \\mu + Z\\sigma = 70 + 1(10) = 80$.",
      "hint": "Use $X = \\mu + Z\\sigma$ with $Z = 1$."
    },
    {
      "id": "W5-T2-Q08",
      "week": 5,
      "tier": "should",
      "topic": "Fundamental Frequency in Hz",
      "type": "single_select",
      "question": "A periodic function has period $T = 0.02\\text{ s}$. What is its fundamental frequency $f_0$ in Hertz and fundamental angular frequency $\\omega_0$ in rad/s?",
      "options": [
        {
          "id": "W5-T2-Q08-opt0",
          "text": "$f_0 = 50\\text{ Hz}$, $\\omega_0 = 100\\pi\\text{ rad/s}$"
        },
        {
          "id": "W5-T2-Q08-opt1",
          "text": "$f_0 = 20\\text{ Hz}$, $\\omega_0 = 40\\pi\\text{ rad/s}$"
        },
        {
          "id": "W5-T2-Q08-opt2",
          "text": "$f_0 = 100\\text{ Hz}$, $\\omega_0 = 200\\pi\\text{ rad/s}$"
        },
        {
          "id": "W5-T2-Q08-opt3",
          "text": "$f_0 = 50\\text{ Hz}$, $\\omega_0 = 50\\text{ rad/s}$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q08-opt0"
      ],
      "explanation": "$f_0 = 1/T = 1/0.02 = 50\\text{ Hz}$. The angular frequency is $\\omega_0 = 2\\pi f_0 = 2\\pi(50) = 100\\pi\\text{ rad/s} \\approx 314.16\\text{ rad/s}$.",
      "hint": "$f_0 = 1/T$ and $\\omega_0 = 2\\pi/T$."
    },
    {
      "id": "W5-T2-Q09",
      "week": 5,
      "tier": "should",
      "topic": "Sum of Harmonic Integrals",
      "type": "single_select",
      "question": "What is the value of $\\int_{-L}^L \\cos^2\\left(\\frac{n\\pi x}{L}\\right)\\,dx$ for integer $n \\ge 1$?",
      "options": [
        {
          "id": "W5-T2-Q09-opt0",
          "text": "$L$"
        },
        {
          "id": "W5-T2-Q09-opt1",
          "text": "$2L$"
        },
        {
          "id": "W5-T2-Q09-opt2",
          "text": "$\\frac{L}{2}$"
        },
        {
          "id": "W5-T2-Q09-opt3",
          "text": "$0$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q09-opt0"
      ],
      "explanation": "Using $\\cos^2\\theta = \\frac{1 + \\cos(2\\theta)}{2}$: $\\int_{-L}^L \\frac{1 + \\cos(2n\\pi x/L)}{2}\\,dx = \\frac{1}{2}(2L) + 0 = L$.",
      "hint": "Use the half-angle identity $\\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}$."
    },
    {
      "id": "W5-T2-Q10",
      "week": 5,
      "tier": "should",
      "topic": "Confidence Interval Margin of Error",
      "type": "single_select",
      "question": "In a sample of size $n=100$ from a population with known $\\sigma = 20$, what is the margin of error for a $95\\%$ confidence interval ($Z_{0.025} = 1.96$)?",
      "options": [
        {
          "id": "W5-T2-Q10-opt0",
          "text": "$3.92$"
        },
        {
          "id": "W5-T2-Q10-opt1",
          "text": "$1.96$"
        },
        {
          "id": "W5-T2-Q10-opt2",
          "text": "$2.00$"
        },
        {
          "id": "W5-T2-Q10-opt3",
          "text": "$0.392$"
        }
      ],
      "correct_indices": [
        "W5-T2-Q10-opt0"
      ],
      "explanation": "The margin of error is $E = Z \\frac{\\sigma}{\\sqrt{n}} = 1.96 \\times \\frac{20}{\\sqrt{100}} = 1.96 \\times 2 = 3.92$.",
      "hint": "Calculate $Z \\times \\frac{\\sigma}{\\sqrt{n}}$."
    },
    {
      "id": "W5-T3-Q01",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Fourier Series at Discontinuities",
      "type": "single_select",
      "question": "According to Dirichlet's theorem, if $f(x)$ has a jump discontinuity at $x = x_0$, to what value does its Fourier series converge?",
      "options": [
        {
          "id": "W5-T3-Q01-opt0",
          "text": "$\\frac{f(x_0^+) + f(x_0^-)}{2}$"
        },
        {
          "id": "W5-T3-Q01-opt1",
          "text": "$f(x_0^+)$"
        },
        {
          "id": "W5-T3-Q01-opt2",
          "text": "$f(x_0^-)$"
        },
        {
          "id": "W5-T3-Q01-opt3",
          "text": "$0$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q01-opt0"
      ],
      "explanation": "At a point of discontinuity, the Fourier series converges to the arithmetic midpoint of the left and right hand limits: $\\frac{f(x_0^+) + f(x_0^-)}{2}$.",
      "hint": "The Fourier series splits the difference across the jump discontinuity."
    },
    {
      "id": "W5-T3-Q02",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Normal Distribution Symmetry",
      "type": "single_select",
      "question": "If $\\Phi(z) = P(Z \\le z)$ denotes the CDF of the standard normal distribution $Z \\sim N(0, 1)$, what is $P(Z > 1.96)$ expressed in terms of $\\Phi$?",
      "options": [
        {
          "id": "W5-T3-Q02-opt0",
          "text": "$1 - \\Phi(1.96)$"
        },
        {
          "id": "W5-T3-Q02-opt1",
          "text": "$\\Phi(-1.96) - 1$"
        },
        {
          "id": "W5-T3-Q02-opt2",
          "text": "$\\Phi(1.96)$"
        },
        {
          "id": "W5-T3-Q02-opt3",
          "text": "$2\\Phi(1.96) - 1$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q02-opt0"
      ],
      "explanation": "By complement rule, $P(Z > 1.96) = 1 - P(Z \\le 1.96) = 1 - \\Phi(1.96)$. By symmetry, this also equals $\\Phi(-1.96)$.",
      "hint": "The upper tail probability is $1$ minus the cumulative area up to that point."
    },
    {
      "id": "W5-T3-Q03",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Triangular Wave Fourier Series",
      "type": "single_select",
      "question": "For an even triangular wave with $f(x) = |x|$ on $[-\\pi, \\pi]$, at what rate do the Fourier coefficients decay?",
      "options": [
        {
          "id": "W5-T3-Q03-opt0",
          "text": "$O\\left(\\frac{1}{n^2}\\right)$"
        },
        {
          "id": "W5-T3-Q03-opt1",
          "text": "$O\\left(\\frac{1}{n}\\right)$"
        },
        {
          "id": "W5-T3-Q03-opt2",
          "text": "$O\\left(\\frac{1}{n^3}\\right)$"
        },
        {
          "id": "W5-T3-Q03-opt3",
          "text": "$O\\left(\\frac{1}{n^4}\\right)$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q03-opt0"
      ],
      "explanation": "Because $f(x) = |x|$ is continuous everywhere and its derivative has jump discontinuities, integration by parts once produces an extra factor of $1/n$, so the coefficients decay as $O(1/n^2)$.",
      "hint": "Continuous waveforms with sharp corners have coefficients decaying as $1/n^2$."
    },
    {
      "id": "W5-T3-Q04",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Half-Wave Symmetry",
      "type": "single_select",
      "question": "A waveform has half-wave symmetry if $f(t - T/2) = -f(t)$. What does this imply about its Fourier harmonics?",
      "options": [
        {
          "id": "W5-T3-Q04-opt0",
          "text": "It contains only odd harmonics ($n = 1, 3, 5, \\dots$)"
        },
        {
          "id": "W5-T3-Q04-opt1",
          "text": "It contains only even harmonics"
        },
        {
          "id": "W5-T3-Q04-opt2",
          "text": "All sine terms vanish"
        },
        {
          "id": "W5-T3-Q04-opt3",
          "text": "All cosine terms vanish"
        }
      ],
      "correct_indices": [
        "W5-T3-Q04-opt0"
      ],
      "explanation": "Half-wave symmetry causes all even harmonics to cancel identically over the period, leaving only odd harmonics ($n = 1, 3, 5, \\dots$).",
      "hint": "Flipping and shifting by half a period cancels all even multiples."
    },
    {
      "id": "W5-T3-Q05",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Normal Distribution Inflection Points",
      "type": "single_select",
      "question": "At what points does the standard normal density curve $\\phi(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}$ have inflection points?",
      "options": [
        {
          "id": "W5-T3-Q05-opt0",
          "text": "$z = \\pm 1$"
        },
        {
          "id": "W5-T3-Q05-opt1",
          "text": "$z = \\pm 2$"
        },
        {
          "id": "W5-T3-Q05-opt2",
          "text": "$z = 0$"
        },
        {
          "id": "W5-T3-Q05-opt3",
          "text": "$z = \\pm \\frac{1}{2}$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q05-opt0"
      ],
      "explanation": "$\\phi''(z) = (z^2 - 1)\\phi(z)$. Setting $\\phi''(z) = 0$ gives $z^2 - 1 = 0 \\implies z = \\pm 1$. Thus inflection points occur exactly at one standard deviation from the mean: $\\mu \\pm \\sigma$.",
      "hint": "Differentiate the Gaussian PDF twice and set to zero."
    },
    {
      "id": "W5-T3-Q06",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Leibniz Formula for Pi via Fourier",
      "type": "single_select",
      "question": "Evaluating the square wave Fourier series $\\frac{4}{\\pi}\\sum_{k=1}^\\infty \\frac{\\sin((2k-1)x)}{2k-1}$ at $x = \\pi/2$ yields which famous series?",
      "options": [
        {
          "id": "W5-T3-Q06-opt0",
          "text": "$1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\dots = \\frac{\\pi}{4}$"
        },
        {
          "id": "W5-T3-Q06-opt1",
          "text": "$\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$"
        },
        {
          "id": "W5-T3-Q06-opt2",
          "text": "$\\sum_{n=1}^\\infty \\frac{1}{n} = \\infty$"
        },
        {
          "id": "W5-T3-Q06-opt3",
          "text": "$1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} = \\ln 2$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q06-opt0"
      ],
      "explanation": "At $x=\\pi/2$, $f(\\pi/2) = 1$. The series gives $1 = \\frac{4}{\\pi}\\left(1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\dots\\right) \\implies \\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\dots$, which is Leibniz's formula for $\\pi$.",
      "hint": "Evaluate $\\sin((2k-1)\\pi/2) = (-1)^{k-1}$."
    },
    {
      "id": "W5-T3-Q07",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Standard Error of Sample Mean Definition",
      "type": "single_select",
      "question": "Why does taking larger samples reduce the uncertainty in estimating the population mean $\\mu$?",
      "options": [
        {
          "id": "W5-T3-Q07-opt0",
          "text": "Because the standard error $\\frac{\\sigma}{\\sqrt{n}}$ decreases inversely with $\\sqrt{n}$"
        },
        {
          "id": "W5-T3-Q07-opt1",
          "text": "Because the population variance decreases"
        },
        {
          "id": "W5-T3-Q07-opt2",
          "text": "Because the population mean changes"
        },
        {
          "id": "W5-T3-Q07-opt3",
          "text": "Because the distribution becomes skewed"
        }
      ],
      "correct_indices": [
        "W5-T3-Q07-opt0"
      ],
      "explanation": "The variance of the sample mean is $\\text{Var}(\\bar{X}) = \\frac{\\sigma^2}{n}$. Thus the standard error $\\sigma/\\sqrt{n}$ decreases as $n$ grows, concentrating the sample mean around the true $\\mu$.",
      "hint": "Notice the factor of $\\sqrt{n}$ in the denominator."
    },
    {
      "id": "W5-T3-Q08",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Quarter-Wave Symmetry",
      "type": "single_select",
      "question": "A waveform possessing both half-wave symmetry ($f(t+T/2) = -f(t)$) and even symmetry ($f(-t) = f(t)$) contains:",
      "options": [
        {
          "id": "W5-T3-Q08-opt0",
          "text": "Only odd cosine harmonics"
        },
        {
          "id": "W5-T3-Q08-opt1",
          "text": "Only odd sine harmonics"
        },
        {
          "id": "W5-T3-Q08-opt2",
          "text": "Both even and odd cosines"
        },
        {
          "id": "W5-T3-Q08-opt3",
          "text": "Only even harmonics"
        }
      ],
      "correct_indices": [
        "W5-T3-Q08-opt0"
      ],
      "explanation": "Even symmetry eliminates all sine terms ($b_n = 0$), and half-wave symmetry eliminates all even harmonics ($a_{2k} = 0$). Together, they leave only odd cosine harmonics ($a_1, a_3, a_5, \\dots$).",
      "hint": "Even symmetry keeps cosines; half-wave symmetry keeps odd harmonics."
    },
    {
      "id": "W5-T3-Q09",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Normal Approximation to Binomial",
      "type": "single_select",
      "question": "A Binomial distribution $B(n, p)$ can be well approximated by a Normal distribution $N(\\mu = np, \\sigma^2 = np(1-p))$ when:",
      "options": [
        {
          "id": "W5-T3-Q09-opt0",
          "text": "$np \\ge 5$ and $n(1-p) \\ge 5$"
        },
        {
          "id": "W5-T3-Q09-opt1",
          "text": "$n \\le 10$"
        },
        {
          "id": "W5-T3-Q09-opt2",
          "text": "$p = 0.5$ only"
        },
        {
          "id": "W5-T3-Q09-opt3",
          "text": "$n p = 1$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q09-opt0"
      ],
      "explanation": "The standard rule of thumb for the normal approximation to the binomial requires both expected successes $np$ and expected failures $n(1-p)$ to be at least 5 (or 10 in conservative guidelines).",
      "hint": "Both $np$ and $n(1-p)$ must be reasonably large to avoid skewness."
    },
    {
      "id": "W5-T3-Q10",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Continuity Correction in Normal Approximation",
      "type": "single_select",
      "question": "When approximating a discrete integer binomial variable $X$ by a continuous normal variable $Y$, the probability $P(X \\ge 15)$ is evaluated as:",
      "options": [
        {
          "id": "W5-T3-Q10-opt0",
          "text": "$P(Y \\ge 14.5)$"
        },
        {
          "id": "W5-T3-Q10-opt1",
          "text": "$P(Y \\ge 15)$"
        },
        {
          "id": "W5-T3-Q10-opt2",
          "text": "$P(Y \\ge 15.5)$"
        },
        {
          "id": "W5-T3-Q10-opt3",
          "text": "$P(Y > 15)$"
        }
      ],
      "correct_indices": [
        "W5-T3-Q10-opt0"
      ],
      "explanation": "To capture the entire discrete probability bar centered at 15 (which spans from 14.5 to 15.5), we apply the continuity correction: $P(X \\ge 15) \\approx P(Y \\ge 14.5)$.",
      "hint": "Shift by $0.5$ outward to include the start of the bar at 14.5."
    },
    {
      "id": "W5-T4-Q01",
      "week": 5,
      "tier": "extra",
      "topic": "Basel Problem via Fourier Series",
      "type": "single_select",
      "question": "The Fourier series of $f(x) = x^2$ on $[-\\pi, \\pi]$ is $\\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}\\cos(nx)$. By evaluating at $x = \\pi$, what is the sum $\\sum_{n=1}^\\infty \\frac{1}{n^2}$?",
      "options": [
        {
          "id": "W5-T4-Q01-opt0",
          "text": "$\\frac{\\pi^2}{6}$"
        },
        {
          "id": "W5-T4-Q01-opt1",
          "text": "$\\frac{\\pi^2}{12}$"
        },
        {
          "id": "W5-T4-Q01-opt2",
          "text": "$\\frac{\\pi^2}{8}$"
        },
        {
          "id": "W5-T4-Q01-opt3",
          "text": "$\\frac{\\pi^4}{90}$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q01-opt0"
      ],
      "explanation": "At $x=\\pi$: $f(\\pi) = \\pi^2 = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{(-1)^n (-1)^n}{n^2} = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{1}{n^2}$. Thus $\\frac{2\\pi^2}{3} = 4\\sum_{n=1}^\\infty \\frac{1}{n^2} \\implies \\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$.",
      "hint": "Substitute $x=\\pi$ and note that $\\cos(n\\pi) = (-1)^n$, so $(-1)^n \\times (-1)^n = 1$."
    },
    {
      "id": "W5-T4-Q02",
      "week": 5,
      "tier": "extra",
      "topic": "Gibbs Phenomenon",
      "type": "single_select",
      "question": "What is the Gibbs phenomenon associated with the Fourier series of a discontinuous function?",
      "options": [
        {
          "id": "W5-T4-Q02-opt0",
          "text": "An overshoot of approximately $9\\%$ near the jump discontinuity that does not vanish as $N \\to \\infty$"
        },
        {
          "id": "W5-T4-Q02-opt1",
          "text": "A decay of high-frequency harmonics proportional to $1/n^3$"
        },
        {
          "id": "W5-T4-Q02-opt2",
          "text": "Aliasing distortion when sampling at twice the Nyquist rate"
        },
        {
          "id": "W5-T4-Q02-opt3",
          "text": "The divergence of the Fourier series at continuous points"
        }
      ],
      "correct_indices": [
        "W5-T4-Q02-opt0"
      ],
      "explanation": "Near a jump discontinuity, partial sums of a Fourier series overshoot the function values by approximately $8.95\\% \\approx 9\\%$ of the jump height, and this overshoot persists in the limit $N \\to \\infty$.",
      "hint": "Think of the characteristic ringing ears/overshoot spikes that appear at sharp steps."
    },
    {
      "id": "W5-T4-Q03",
      "week": 5,
      "tier": "extra",
      "topic": "Alternating Sum of 1/n^2",
      "type": "single_select",
      "question": "Using the Fourier series of $x^2$ evaluated at $x = 0$, what is the alternating sum $1 - \\frac{1}{4} + \\frac{1}{9} - \\frac{1}{16} + \\dots$?",
      "options": [
        {
          "id": "W5-T4-Q03-opt0",
          "text": "$\\frac{\\pi^2}{12}$"
        },
        {
          "id": "W5-T4-Q03-opt1",
          "text": "$\\frac{\\pi^2}{6}$"
        },
        {
          "id": "W5-T4-Q03-opt2",
          "text": "$\\frac{\\pi^2}{8}$"
        },
        {
          "id": "W5-T4-Q03-opt3",
          "text": "$\\frac{\\pi^2}{24}$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q03-opt0"
      ],
      "explanation": "At $x=0$: $0 = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2} = \\frac{\\pi^2}{3} - 4\\left(1 - \\frac{1}{4} + \\frac{1}{9} - \\dots\\right)$. Solving gives $\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n^2} = \\frac{\\pi^2}{12}$.",
      "hint": "Evaluate the Fourier series of $x^2$ at $x=0$."
    },
    {
      "id": "W5-T4-Q04",
      "week": 5,
      "tier": "extra",
      "topic": "Sum of Odd Reciprocal Squares",
      "type": "single_select",
      "question": "Using $\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$, what is the sum of odd reciprocal squares $1 + \\frac{1}{9} + \\frac{1}{25} + \\frac{1}{49} + \\dots$?",
      "options": [
        {
          "id": "W5-T4-Q04-opt0",
          "text": "$\\frac{\\pi^2}{8}$"
        },
        {
          "id": "W5-T4-Q04-opt1",
          "text": "$\\frac{\\pi^2}{12}$"
        },
        {
          "id": "W5-T4-Q04-opt2",
          "text": "$\\frac{\\pi^2}{16}$"
        },
        {
          "id": "W5-T4-Q04-opt3",
          "text": "$\\frac{\\pi^2}{4}$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q04-opt0"
      ],
      "explanation": "Split into even and odd parts: $S = S_{\\text{odd}} + S_{\\text{even}} = S_{\\text{odd}} + \\frac{1}{4}S \\implies S_{\\text{odd}} = \\frac{3}{4}S = \\frac{3}{4}\\left(\\frac{\\pi^2}{6}\\right) = \\frac{\\pi^2}{8}$.",
      "hint": "The even terms sum to $\\frac{1}{4}$ of the total sum."
    },
    {
      "id": "W5-T4-Q05",
      "week": 5,
      "tier": "extra",
      "topic": "Fourier Series of Exponential Function",
      "type": "single_select",
      "question": "For $f(x) = e^x$ on $(-\\pi, \\pi)$ with period $2\\pi$, what is the complex Fourier coefficient $c_n$?",
      "options": [
        {
          "id": "W5-T4-Q05-opt0",
          "text": "$c_n = \\frac{\\sinh\\pi}{\\pi}\\frac{1 + in}{1 + n^2}(-1)^n$"
        },
        {
          "id": "W5-T4-Q05-opt1",
          "text": "$c_n = \\frac{\\cosh\\pi}{\\pi(1+n^2)}$"
        },
        {
          "id": "W5-T4-Q05-opt2",
          "text": "$c_n = \\frac{\\sinh\\pi}{\\pi(1-in)}$"
        },
        {
          "id": "W5-T4-Q05-opt3",
          "text": "$c_n = \\frac{e^\\pi - e^{-\\pi}}{2\\pi n}$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q05-opt0"
      ],
      "explanation": "$c_n = \\frac{1}{2\\pi}\\int_{-\\pi}^\\pi e^x e^{-inx}\\,dx = \\frac{1}{2\\pi}\\left[\\frac{e^{(1-in)x}}{1-in}\\right]_{-\\pi}^\\pi = \\frac{e^{(1-in)\\pi} - e^{-(1-in)\\pi}}{2\\pi(1-in)} = \\frac{(-1)^n(e^\\pi - e^{-\\pi})}{2\\pi(1-in)} = \\frac{\\sinh\\pi}{\\pi}\\frac{1+in}{1+n^2}(-1)^n$.",
      "hint": "Integrate $e^{(1-in)x}$ and use $e^{-in\\pi} = (-1)^n$."
    },
    {
      "id": "W5-T4-Q06",
      "week": 5,
      "tier": "extra",
      "topic": "Lindeberg-Levy Central Limit Theorem Proof Tool",
      "type": "single_select",
      "question": "The standard proof of the Central Limit Theorem uses which transform technique?",
      "options": [
        {
          "id": "W5-T4-Q06-opt0",
          "text": "Characteristic functions (Taylor expansion of $\\varphi_X(t)$)"
        },
        {
          "id": "W5-T4-Q06-opt1",
          "text": "Laplace transforms of step functions"
        },
        {
          "id": "W5-T4-Q06-opt2",
          "text": "Z-transforms"
        },
        {
          "id": "W5-T4-Q06-opt3",
          "text": "Green's functions"
        }
      ],
      "correct_indices": [
        "W5-T4-Q06-opt0"
      ],
      "explanation": "The characteristic function of the normalized sum $\\varphi_{Z_n}(t) = \\left[1 - \\frac{t^2}{2n} + o\\left(\\frac{t^2}{n}\\right)\\right]^n \\to e^{-t^2/2}$, which is the characteristic function of $N(0, 1)$.",
      "hint": "Characteristic functions always exist for any probability distribution."
    },
    {
      "id": "W5-T4-Q07",
      "week": 5,
      "tier": "extra",
      "topic": "Fej\u00e9r's Theorem and Ces\u00e0ro Summability",
      "type": "single_select",
      "question": "Fej\u00e9r's Theorem proves that if $f(x)$ is continuous and periodic, its Fourier series is:",
      "options": [
        {
          "id": "W5-T4-Q07-opt0",
          "text": "Uniformly Ces\u00e0ro summable (the arithmetic mean of partial sums converges to $f(x)$ uniformly)"
        },
        {
          "id": "W5-T4-Q07-opt1",
          "text": "Always term-by-term differentiable"
        },
        {
          "id": "W5-T4-Q07-opt2",
          "text": "Divergent on a dense set"
        },
        {
          "id": "W5-T4-Q07-opt3",
          "text": "Equal to its Taylor series"
        }
      ],
      "correct_indices": [
        "W5-T4-Q07-opt0"
      ],
      "explanation": "Fej\u00e9r proved that although Fourier partial sums may not converge uniformly for all continuous functions, the Ces\u00e0ro means $\\sigma_N(x) = \\frac{1}{N}\\sum_{k=0}^{N-1} S_k(x)$ always converge uniformly to $f(x)$.",
      "hint": "Averages of partial sums smooth out ringing and guarantee uniform convergence."
    },
    {
      "id": "W5-T4-Q08",
      "week": 5,
      "tier": "extra",
      "topic": "Wiener-Khinchin Theorem",
      "type": "single_select",
      "question": "The Wiener-Khinchin Theorem states that for a wide-sense stationary random process, the power spectral density is the Fourier transform of its:",
      "options": [
        {
          "id": "W5-T4-Q08-opt0",
          "text": "Autocorrelation function"
        },
        {
          "id": "W5-T4-Q08-opt1",
          "text": "Probability density function"
        },
        {
          "id": "W5-T4-Q08-opt2",
          "text": "Cumulative distribution function"
        },
        {
          "id": "W5-T4-Q08-opt3",
          "text": "Variance"
        }
      ],
      "correct_indices": [
        "W5-T4-Q08-opt0"
      ],
      "explanation": "The Wiener-Khinchin theorem is fundamental to signal processing: $S_{XX}(\\omega) = \\mathcal{F}\\{R_{XX}(\\tau)\\}$, linking time-domain correlation to frequency-domain power spectrum.",
      "hint": "Autocorrelation in time Fourier transforms to power spectral density in frequency."
    },
    {
      "id": "W5-T4-Q09",
      "week": 5,
      "tier": "extra",
      "topic": "Bessel's Inequality for Fourier Series",
      "type": "single_select",
      "question": "For any square-integrable function $f(x)$, Bessel's Inequality states that:",
      "options": [
        {
          "id": "W5-T4-Q09-opt0",
          "text": "$\\frac{a_0^2}{2} + \\sum_{n=1}^\\infty (a_n^2 + b_n^2) \\le \\frac{1}{\\pi}\\int_{-\\pi}^\\pi [f(x)]^2\\,dx$"
        },
        {
          "id": "W5-T4-Q09-opt1",
          "text": "$\\sum_{n=1}^\\infty (a_n + b_n) \\le \\int_{-\\pi}^\\pi f(x)\\,dx$"
        },
        {
          "id": "W5-T4-Q09-opt2",
          "text": "$\\frac{a_0^2}{4} = \\sum_{n=1}^\\infty a_n^2$"
        },
        {
          "id": "W5-T4-Q09-opt3",
          "text": "$\\int_{-\\pi}^\\pi [f(x)]^2\\,dx = 0$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q09-opt0"
      ],
      "explanation": "Bessel's inequality states that the sum of the squared projections onto any orthogonal set cannot exceed the norm squared of the function: $\\frac{a_0^2}{2} + \\sum_{n=1}^\\infty (a_n^2 + b_n^2) \\le \\frac{1}{\\pi}\\int_{-\\pi}^\\pi [f(x)]^2\\,dx$. (Equality holds if the basis is complete: Parseval's identity).",
      "hint": "The energy in any finite sum of orthogonal harmonics is less than or equal to total signal energy."
    },
    {
      "id": "W5-T4-Q10",
      "week": 5,
      "tier": "extra",
      "topic": "Law of the Unconscious Statistician",
      "type": "single_select",
      "question": "The Law of the Unconscious Statistician (LOTUS) allows computing $E[g(X)]$ directly as:",
      "options": [
        {
          "id": "W5-T4-Q10-opt0",
          "text": "$E[g(X)] = \\int_{-\\infty}^\\infty g(x)f_X(x)\\,dx$"
        },
        {
          "id": "W5-T4-Q10-opt1",
          "text": "$E[g(X)] = g(E[X])$"
        },
        {
          "id": "W5-T4-Q10-opt2",
          "text": "$E[g(X)] = \\int_{-\\infty}^\\infty g'(x)f_X(x)\\,dx$"
        },
        {
          "id": "W5-T4-Q10-opt3",
          "text": "$E[g(X)] = g(\\mu) + g'(\\mu)\\sigma^2$"
        }
      ],
      "correct_indices": [
        "W5-T4-Q10-opt0"
      ],
      "explanation": "LOTUS states that to compute the expected value of a function $g(X)$, one does not need to first find the PDF of the derived variable $Y = g(X)$; one simply integrates $g(x)f_X(x)dx$.",
      "hint": "Integrate $g(x)$ against the original density $f_X(x)$."
    }
  ]
};
