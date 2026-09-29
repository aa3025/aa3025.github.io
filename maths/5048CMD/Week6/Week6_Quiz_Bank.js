window.QUIZ_BANK_WEEK6 = {
  "module": "5048CMD Engineering Mathematics 2",
  "week": 6,
  "title": "Week 6: Fourier Series II & III",
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
      "topic": "Even Function Fourier Series",
      "type": "single_select",
      "question": "If $f(x)$ is an even function ($f(-x) = f(x)$) of period $2L$, what can be said about its Fourier coefficients?",
      "options": [
        {
          "id": "W6-T1-Q01-opt0",
          "text": "$b_n = 0$ for all $n \\ge 1$, leaving only cosine terms and the constant $a_0$"
        },
        {
          "id": "W6-T1-Q01-opt1",
          "text": "$a_n = 0$ for all $n \\ge 0$, leaving only sine terms"
        },
        {
          "id": "W6-T1-Q01-opt2",
          "text": "$a_n = b_n$ for all $n$"
        },
        {
          "id": "W6-T1-Q01-opt3",
          "text": "All coefficients $a_n$ and $b_n$ are non-zero"
        }
      ],
      "correct_indices": [
        "W6-T1-Q01-opt0"
      ],
      "explanation": "An even function multiplied by an odd function $\\sin\\frac{n\\pi x}{L}$ is odd, and the integral of an odd function over symmetric bounds $[-L, L]$ is identically zero. Thus $b_n = 0$.",
      "hint": "Even functions have only cosine terms because $\\cos$ is an even function."
    },
    {
      "id": "W6-T1-Q02",
      "week": 6,
      "tier": "core",
      "topic": "Odd Function Fourier Series",
      "type": "single_select",
      "question": "If $f(x)$ is an odd function ($f(-x) = -f(x)$) of period $2L$, which coefficients are identically zero?",
      "options": [
        {
          "id": "W6-T1-Q02-opt0",
          "text": "$a_0 = 0$ and $a_n = 0$ for all $n \\ge 1$"
        },
        {
          "id": "W6-T1-Q02-opt1",
          "text": "$b_n = 0$ for all $n \\ge 1$"
        },
        {
          "id": "W6-T1-Q02-opt2",
          "text": "$a_0 = 0$ but $a_n \\neq 0$"
        },
        {
          "id": "W6-T1-Q02-opt3",
          "text": "None of the coefficients vanish"
        }
      ],
      "correct_indices": [
        "W6-T1-Q02-opt0"
      ],
      "explanation": "For an odd function, $f(x)$ and $f(x)\\cos\\frac{n\\pi x}{L}$ are odd functions, whose integrals over $[-L, L]$ vanish. Hence $a_0 = 0$ and $a_n = 0$ for all $n$.",
      "hint": "Odd functions are represented purely by sine waves."
    },
    {
      "id": "W6-T1-Q03",
      "week": 6,
      "tier": "core",
      "topic": "Half-Range Sine Expansion",
      "type": "single_select",
      "question": "To express a function $f(x)$ defined only on $[0, L]$ as a Fourier sine series, what extension is made to $[-L, 0]$?",
      "options": [
        {
          "id": "W6-T1-Q03-opt0",
          "text": "An odd periodic extension: $f(-x) = -f(x)$"
        },
        {
          "id": "W6-T1-Q03-opt1",
          "text": "An even periodic extension: $f(-x) = f(x)$"
        },
        {
          "id": "W6-T1-Q03-opt2",
          "text": "A zero extension: $f(x) = 0$ for $x < 0$"
        },
        {
          "id": "W6-T1-Q03-opt3",
          "text": "A shifted copy: $f(x - L)$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q03-opt0"
      ],
      "explanation": "A half-range sine series requires an odd periodic extension of period $2L$ so that all cosine terms $a_n$ vanish.",
      "hint": "Sine is an odd function, so we must reflect $f(x)$ oddly about the origin."
    },
    {
      "id": "W6-T1-Q04",
      "week": 6,
      "tier": "core",
      "topic": "Complex Exponential Fourier Form",
      "type": "single_select",
      "question": "In the complex exponential Fourier series $f(t) = \\sum_{n=-\\infty}^\\infty c_n e^{i n \\omega_0 t}$, what is the formula for $c_n$ over period $T$?",
      "options": [
        {
          "id": "W6-T1-Q04-opt0",
          "text": "$c_n = \\frac{1}{T} \\int_0^T f(t) e^{-i n \\omega_0 t}\\,dt$"
        },
        {
          "id": "W6-T1-Q04-opt1",
          "text": "$c_n = \\frac{1}{T} \\int_0^T f(t) e^{i n \\omega_0 t}\\,dt$"
        },
        {
          "id": "W6-T1-Q04-opt2",
          "text": "$c_n = \\frac{2}{T} \\int_0^T f(t) e^{-i n \\omega_0 t}\\,dt$"
        },
        {
          "id": "W6-T1-Q04-opt3",
          "text": "$c_n = \\int_0^T f(t) e^{-i n \\omega_0 t}\\,dt$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q04-opt0"
      ],
      "explanation": "Using orthogonality of complex exponentials $\\frac{1}{T}\\int_0^T e^{i(m-n)\\omega_0 t}\\,dt = \\delta_{mn}$, multiplying by $e^{-in\\omega_0 t}$ and integrating gives $c_n = \\frac{1}{T}\\int_0^T f(t)e^{-in\\omega_0 t}\\,dt$.",
      "hint": "Notice the negative sign in the exponent $e^{-in\\omega_0 t}$."
    },
    {
      "id": "W6-T1-Q05",
      "week": 6,
      "tier": "core",
      "topic": "Half-Range Cosine Formula",
      "type": "single_select",
      "question": "For a function $f(x)$ on $[0, L]$, what is the formula for $a_n$ in its half-range cosine series?",
      "options": [
        {
          "id": "W6-T1-Q05-opt0",
          "text": "$a_n = \\frac{2}{L}\\int_0^L f(x)\\cos\\left(\\frac{n\\pi x}{L}\\right)\\,dx$"
        },
        {
          "id": "W6-T1-Q05-opt1",
          "text": "$a_n = \\frac{1}{L}\\int_0^L f(x)\\cos\\left(\\frac{n\\pi x}{L}\\right)\\,dx$"
        },
        {
          "id": "W6-T1-Q05-opt2",
          "text": "$a_n = \\frac{2}{L}\\int_0^L f(x)\\,dx$"
        },
        {
          "id": "W6-T1-Q05-opt3",
          "text": "$a_n = \\frac{1}{2L}\\int_0^L f(x)\\cos\\left(\\frac{n\\pi x}{L}\\right)\\,dx$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q05-opt0"
      ],
      "explanation": "Because the even extension doubles the integral over $[0, L]$: $a_n = \\frac{1}{L}\\int_{-L}^L f_{\\text{even}}(x)\\cos(n\\pi x/L)\\,dx = \\frac{2}{L}\\int_0^L f(x)\\cos(n\\pi x/L)\\,dx$.",
      "hint": "The prefactor is $2/L$ when integrating over half the period $[0, L]$."
    },
    {
      "id": "W6-T1-Q06",
      "week": 6,
      "tier": "core",
      "topic": "Half-Range Sine Formula",
      "type": "single_select",
      "question": "What is the coefficient $b_n$ for the half-range sine series of $f(x)$ on $[0, L]$?",
      "options": [
        {
          "id": "W6-T1-Q06-opt0",
          "text": "$b_n = \\frac{2}{L}\\int_0^L f(x)\\sin\\left(\\frac{n\\pi x}{L}\\right)\\,dx$"
        },
        {
          "id": "W6-T1-Q06-opt1",
          "text": "$b_n = \\frac{1}{L}\\int_0^L f(x)\\sin\\left(\\frac{n\\pi x}{L}\\right)\\,dx$"
        },
        {
          "id": "W6-T1-Q06-opt2",
          "text": "$b_n = \\frac{2}{L}\\int_{-L}^L f(x)\\sin\\left(\\frac{n\\pi x}{L}\\right)\\,dx$"
        },
        {
          "id": "W6-T1-Q06-opt3",
          "text": "$b_n = \\frac{1}{2L}\\int_0^L f(x)\\,dx$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q06-opt0"
      ],
      "explanation": "For the odd extension, the product $f_{\\text{odd}}(x)\\sin(n\\pi x/L)$ is even, so $b_n = \\frac{2}{L}\\int_0^L f(x)\\sin(n\\pi x/L)\\,dx$.",
      "hint": "The prefactor is $2/L$ over $[0, L]$."
    },
    {
      "id": "W6-T1-Q07",
      "week": 6,
      "tier": "core",
      "topic": "c0 Coefficient in Complex Series",
      "type": "single_select",
      "question": "In the complex Fourier series $f(t) = \\sum_{n=-\\infty}^\\infty c_n e^{in\\omega_0 t}$, what does $c_0$ represent?",
      "options": [
        {
          "id": "W6-T1-Q07-opt0",
          "text": "The average (DC) value: $c_0 = \\frac{a_0}{2} = \\frac{1}{T}\\int_0^T f(t)\\,dt$"
        },
        {
          "id": "W6-T1-Q07-opt1",
          "text": "Zero always"
        },
        {
          "id": "W6-T1-Q07-opt2",
          "text": "The fundamental amplitude $a_1$"
        },
        {
          "id": "W6-T1-Q07-opt3",
          "text": "The RMS value"
        }
      ],
      "correct_indices": [
        "W6-T1-Q07-opt0"
      ],
      "explanation": "Setting $n=0$: $c_0 = \\frac{1}{T}\\int_0^T f(t)e^0\\,dt = \\frac{1}{T}\\int_0^T f(t)\\,dt$, which is identical to the DC average $\\frac{a_0}{2}$.",
      "hint": "For $n=0$, $e^0 = 1$, yielding the average over the period."
    },
    {
      "id": "W6-T1-Q08",
      "week": 6,
      "tier": "core",
      "topic": "Harmonic Frequencies",
      "type": "single_select",
      "question": "If the fundamental frequency of a periodic wave is $f_1 = 60\\text{ Hz}$, what is the frequency of the 3rd harmonic?",
      "options": [
        {
          "id": "W6-T1-Q08-opt0",
          "text": "$180\\text{ Hz}$"
        },
        {
          "id": "W6-T1-Q08-opt1",
          "text": "$120\\text{ Hz}$"
        },
        {
          "id": "W6-T1-Q08-opt2",
          "text": "$20\\text{ Hz}$"
        },
        {
          "id": "W6-T1-Q08-opt3",
          "text": "$360\\text{ Hz}$"
        }
      ],
      "correct_indices": [
        "W6-T1-Q08-opt0"
      ],
      "explanation": "Harmonics are integer multiples of the fundamental frequency: $f_n = n f_1$. For $n=3$, $f_3 = 3 \\times 60 = 180\\text{ Hz}$.",
      "hint": "Multiply the fundamental frequency by 3."
    },
    {
      "id": "W6-T1-Q09",
      "week": 6,
      "tier": "core",
      "topic": "Symmetry of Product of Functions",
      "type": "single_select",
      "question": "The product of two odd functions $f(x)$ and $g(x)$ is always:",
      "options": [
        {
          "id": "W6-T1-Q09-opt0",
          "text": "An even function"
        },
        {
          "id": "W6-T1-Q09-opt1",
          "text": "An odd function"
        },
        {
          "id": "W6-T1-Q09-opt2",
          "text": "Neither even nor odd"
        },
        {
          "id": "W6-T1-Q09-opt3",
          "text": "Zero everywhere"
        }
      ],
      "correct_indices": [
        "W6-T1-Q09-opt0"
      ],
      "explanation": "$(f \\cdot g)(-x) = f(-x)g(-x) = (-f(x))(-g(x)) = f(x)g(x)$. Thus the product is even (negative times negative is positive).",
      "hint": "$(-1) \\times (-1) = +1$."
    },
    {
      "id": "W6-T1-Q10",
      "week": 6,
      "tier": "core",
      "topic": "Parseval's Identity Concept",
      "type": "single_select",
      "question": "Parseval's identity expresses which physical conservation principle?",
      "options": [
        {
          "id": "W6-T1-Q10-opt0",
          "text": "Conservation of energy / power between time and frequency domains"
        },
        {
          "id": "W6-T1-Q10-opt1",
          "text": "Conservation of momentum"
        },
        {
          "id": "W6-T1-Q10-opt2",
          "text": "Conservation of mass"
        },
        {
          "id": "W6-T1-Q10-opt3",
          "text": "Conservation of charge"
        }
      ],
      "correct_indices": [
        "W6-T1-Q10-opt0"
      ],
      "explanation": "Parseval's theorem states that the total average power of a signal in the time domain equals the sum of the powers of all its harmonic frequency components.",
      "hint": "Energy in time domain equals energy in frequency domain."
    },
    {
      "id": "W6-T2-Q01",
      "week": 6,
      "tier": "should",
      "topic": "Parseval's Theorem Formula",
      "type": "single_select",
      "question": "For a $2L$-periodic function $f(x)$, what does Parseval's Identity state regarding the average power?",
      "options": [
        {
          "id": "W6-T2-Q01-opt0",
          "text": "$\\frac{1}{2L}\\int_{-L}^L |f(x)|^2\\,dx = \\frac{a_0^2}{4} + \\frac{1}{2}\\sum_{n=1}^\\infty (a_n^2 + b_n^2)$"
        },
        {
          "id": "W6-T2-Q01-opt1",
          "text": "$\\frac{1}{2L}\\int_{-L}^L |f(x)|^2\\,dx = a_0^2 + \\sum_{n=1}^\\infty (a_n^2 + b_n^2)$"
        },
        {
          "id": "W6-T2-Q01-opt2",
          "text": "$\\int_{-L}^L |f(x)|^2\\,dx = \\sum_{n=1}^\\infty (a_n + b_n)^2$"
        },
        {
          "id": "W6-T2-Q01-opt3",
          "text": "$\\frac{1}{2L}\\int_{-L}^L f(x)\\,dx = \\frac{a_0}{2}$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q01-opt0"
      ],
      "explanation": "Parseval's identity equates time-domain energy/power to frequency-domain harmonic powers: $\\frac{1}{2L}\\int_{-L}^L [f(x)]^2\\,dx = \\left(\\frac{a_0}{2}\\right)^2 + \\frac{1}{2}\\sum_{n=1}^\\infty (a_n^2 + b_n^2)$.",
      "hint": "Conservation of energy: the total signal energy equals the sum of harmonic energies."
    },
    {
      "id": "W6-T2-Q02",
      "week": 6,
      "tier": "should",
      "topic": "Relationship between Real and Complex Coefficients",
      "type": "single_select",
      "question": "How are the complex coefficients $c_n$ and $c_{-n}$ ($n \\ge 1$) related to real coefficients $a_n$ and $b_n$ for a real-valued signal?",
      "options": [
        {
          "id": "W6-T2-Q02-opt0",
          "text": "$c_n = \\frac{a_n - i b_n}{2}$ and $c_{-n} = \\frac{a_n + i b_n}{2} = c_n^*$"
        },
        {
          "id": "W6-T2-Q02-opt1",
          "text": "$c_n = a_n + i b_n$ and $c_{-n} = a_n - i b_n$"
        },
        {
          "id": "W6-T2-Q02-opt2",
          "text": "$c_n = \\frac{a_n + i b_n}{2}$ and $c_{-n} = -c_n$"
        },
        {
          "id": "W6-T2-Q02-opt3",
          "text": "$c_n = \\frac{a_n}{2}$ and $c_{-n} = \\frac{b_n}{2}$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q02-opt0"
      ],
      "explanation": "Using Euler's identity $\\cos\\theta = \\frac{e^{i\\theta}+e^{-i\\theta}}{2}, \\sin\\theta = \\frac{e^{i\\theta}-e^{-i\\theta}}{2i}$, matching terms gives $c_n = \\frac{a_n - ib_n}{2}$ and $c_{-n} = c_n^*$.",
      "hint": "Use Euler's formula to rewrite cosines and sines in terms of complex exponentials."
    },
    {
      "id": "W6-T2-Q03",
      "week": 6,
      "tier": "should",
      "topic": "Complex Parseval Relation",
      "type": "single_select",
      "question": "In terms of complex Fourier coefficients $c_n$, Parseval's identity is written simply as:",
      "options": [
        {
          "id": "W6-T2-Q03-opt0",
          "text": "$\\frac{1}{T}\\int_0^T |f(t)|^2\\,dt = \\sum_{n=-\\infty}^\\infty |c_n|^2$"
        },
        {
          "id": "W6-T2-Q03-opt1",
          "text": "$\\frac{1}{T}\\int_0^T |f(t)|^2\\,dt = \\sum_{n=0}^\\infty c_n^2$"
        },
        {
          "id": "W6-T2-Q03-opt2",
          "text": "$\\int_0^T f(t)\\,dt = \\sum_{n=-\\infty}^\\infty c_n$"
        },
        {
          "id": "W6-T2-Q03-opt3",
          "text": "$\\frac{1}{T}\\int_0^T |f(t)|^2\\,dt = |c_0|^2$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q03-opt0"
      ],
      "explanation": "In complex exponential form, the power is the sum of $|c_n|^2$ over all positive, negative, and zero frequencies: $\\frac{1}{T}\\int_0^T |f(t)|^2\\,dt = \\sum_{n=-\\infty}^\\infty |c_n|^2$.",
      "hint": "Sum of squared magnitudes of all complex coefficients from $-\\infty$ to $+\\infty$."
    },
    {
      "id": "W6-T2-Q04",
      "week": 6,
      "tier": "should",
      "topic": "Half-Range Sine Series of Constant",
      "type": "single_select",
      "question": "Find the half-range sine series of $f(x) = 1$ on $[0, \\pi]$.",
      "options": [
        {
          "id": "W6-T2-Q04-opt0",
          "text": "$\\frac{4}{\\pi}\\sum_{k=1}^\\infty \\frac{\\sin((2k-1)x)}{2k-1}$"
        },
        {
          "id": "W6-T2-Q04-opt1",
          "text": "$\\frac{2}{\\pi}\\sum_{n=1}^\\infty \\frac{\\sin(nx)}{n}$"
        },
        {
          "id": "W6-T2-Q04-opt2",
          "text": "$\\sum_{n=1}^\\infty \\sin(nx)$"
        },
        {
          "id": "W6-T2-Q04-opt3",
          "text": "$\\frac{4}{\\pi}\\sum_{n=1}^\\infty \\frac{\\sin(2nx)}{n}$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q04-opt0"
      ],
      "explanation": "$b_n = \\frac{2}{\\pi}\\int_0^\\pi (1)\\sin(nx)\\,dx = \\frac{2}{n\\pi}[-\\cos nx]_0^\\pi = \\frac{2(1 - (-1)^n)}{n\\pi}$. For even $n$, $b_n = 0$; for odd $n = 2k-1$, $b_n = \\frac{4}{(2k-1)\\pi}$.",
      "hint": "The odd periodic extension of a constant $1$ on $[0, \\pi]$ is the standard square wave."
    },
    {
      "id": "W6-T2-Q05",
      "week": 6,
      "tier": "should",
      "topic": "Parseval Calculation for Square Wave",
      "type": "single_select",
      "question": "The square wave $f(x) = \\pm 1$ has $|f(x)|^2 = 1$ and Fourier series $\\frac{4}{\\pi}\\sum_{k=1}^\\infty \\frac{\\sin((2k-1)x)}{2k-1}$. Applying Parseval yields which sum?",
      "options": [
        {
          "id": "W6-T2-Q05-opt0",
          "text": "$\\sum_{k=1}^\\infty \\frac{1}{(2k-1)^2} = \\frac{\\pi^2}{8}$"
        },
        {
          "id": "W6-T2-Q05-opt1",
          "text": "$\\sum_{k=1}^\\infty \\frac{1}{(2k-1)^2} = \\frac{\\pi^2}{6}$"
        },
        {
          "id": "W6-T2-Q05-opt2",
          "text": "$\\sum_{k=1}^\\infty \\frac{1}{k^2} = \\frac{\\pi^2}{6}$"
        },
        {
          "id": "W6-T2-Q05-opt3",
          "text": "$\\sum_{k=1}^\\infty \\frac{1}{(2k-1)^4} = \\frac{\\pi^4}{96}$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q05-opt0"
      ],
      "explanation": "Average power is $\\frac{1}{2\\pi}\\int_{-\\pi}^\\pi 1\\,dx = 1$. By Parseval: $\\frac{1}{2}\\sum_{k=1}^\\infty b_{2k-1}^2 = \\frac{1}{2}\\sum_{k=1}^\\infty \\frac{16}{\\pi^2(2k-1)^2} = \\frac{8}{\\pi^2}\\sum_{k=1}^\\infty \\frac{1}{(2k-1)^2} = 1 \\implies \\sum_{k=1}^\\infty \\frac{1}{(2k-1)^2} = \\frac{\\pi^2}{8}$.",
      "hint": "Equate total power 1 to the sum of harmonic powers."
    },
    {
      "id": "W6-T2-Q06",
      "week": 6,
      "tier": "should",
      "topic": "Amplitude and Phase Form",
      "type": "single_select",
      "question": "The harmonic combination $a_n\\cos(n\\omega_0 t) + b_n\\sin(n\\omega_0 t)$ can be written as $A_n \\cos(n\\omega_0 t - \\phi_n)$. How is the amplitude $A_n$ related to $a_n, b_n$?",
      "options": [
        {
          "id": "W6-T2-Q06-opt0",
          "text": "$A_n = \\sqrt{a_n^2 + b_n^2}$"
        },
        {
          "id": "W6-T2-Q06-opt1",
          "text": "$A_n = a_n + b_n$"
        },
        {
          "id": "W6-T2-Q06-opt2",
          "text": "$A_n = \\frac{a_n^2 + b_n^2}{2}$"
        },
        {
          "id": "W6-T2-Q06-opt3",
          "text": "$A_n = \\sqrt{a_n b_n}$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q06-opt0"
      ],
      "explanation": "Expanding $A_n\\cos(n\\omega_0 t - \\phi_n) = A_n\\cos\\phi_n\\cos(n\\omega_0 t) + A_n\\sin\\phi_n\\sin(n\\omega_0 t)$ yields $a_n = A_n\\cos\\phi_n$ and $b_n = A_n\\sin\\phi_n$. Squaring and adding gives $A_n = \\sqrt{a_n^2 + b_n^2}$.",
      "hint": "Pythagorean combination of cosine and sine amplitudes."
    },
    {
      "id": "W6-T2-Q07",
      "week": 6,
      "tier": "should",
      "topic": "Phase Angle Formula",
      "type": "single_select",
      "question": "In the amplitude-phase form $A_n \\cos(n\\omega_0 t - \\phi_n)$, what is the phase angle $\\phi_n$?",
      "options": [
        {
          "id": "W6-T2-Q07-opt0",
          "text": "$\\phi_n = \\text{atan2}(b_n, a_n)$"
        },
        {
          "id": "W6-T2-Q07-opt1",
          "text": "$\\phi_n = \\text{atan2}(a_n, b_n)$"
        },
        {
          "id": "W6-T2-Q07-opt2",
          "text": "$\\phi_n = \\frac{b_n}{a_n}$"
        },
        {
          "id": "W6-T2-Q07-opt3",
          "text": "$\\phi_n = \\arcsin(b_n)$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q07-opt0"
      ],
      "explanation": "Since $A_n\\sin\\phi_n = b_n$ and $A_n\\cos\\phi_n = a_n$, dividing yields $\\tan\\phi_n = \\frac{b_n}{a_n}$, with the quadrant determined by $\\text{atan2}(b_n, a_n)$.",
      "hint": "Ratio of sine coefficient to cosine coefficient gives the tangent of the phase."
    },
    {
      "id": "W6-T2-Q08",
      "week": 6,
      "tier": "should",
      "topic": "Magnitude Spectrum Symmetry",
      "type": "single_select",
      "question": "For a real-valued signal $f(t)$, how are the magnitudes of its complex Fourier coefficients $|c_n|$ and $|c_{-n}|$ related?",
      "options": [
        {
          "id": "W6-T2-Q08-opt0",
          "text": "$|c_{-n}| = |c_n|$ (the magnitude spectrum is an even function of $n$)"
        },
        {
          "id": "W6-T2-Q08-opt1",
          "text": "$|c_{-n}| = -|c_n|$"
        },
        {
          "id": "W6-T2-Q08-opt2",
          "text": "$|c_{-n}| = 0$ for $n > 0$"
        },
        {
          "id": "W6-T2-Q08-opt3",
          "text": "$|c_{-n}| = \\frac{1}{|c_n|}$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q08-opt0"
      ],
      "explanation": "For real signals, $c_{-n} = c_n^*$. Since complex conjugation preserves magnitude ($|z^*| = |z|$), we have $|c_{-n}| = |c_n|$, giving an even magnitude spectrum.",
      "hint": "Complex conjugates have identical absolute values."
    },
    {
      "id": "W6-T2-Q09",
      "week": 6,
      "tier": "should",
      "topic": "Phase Spectrum Symmetry",
      "type": "single_select",
      "question": "For a real-valued signal $f(t)$, what is the symmetry of the phase spectrum $\\theta_n = \\arg(c_n)$?",
      "options": [
        {
          "id": "W6-T2-Q09-opt0",
          "text": "Odd symmetry: $\\theta_{-n} = -\\theta_n$"
        },
        {
          "id": "W6-T2-Q09-opt1",
          "text": "Even symmetry: $\\theta_{-n} = \\theta_n$"
        },
        {
          "id": "W6-T2-Q09-opt2",
          "text": "Constant phase everywhere"
        },
        {
          "id": "W6-T2-Q09-opt3",
          "text": "Zero phase everywhere"
        }
      ],
      "correct_indices": [
        "W6-T2-Q09-opt0"
      ],
      "explanation": "Because $c_{-n} = c_n^*$, taking arguments yields $\\arg(c_{-n}) = \\arg(c_n^*) = -\\arg(c_n) = -\\theta_n$. Thus the phase spectrum is an odd function of $n$.",
      "hint": "The argument of a complex conjugate is the negative of the original argument."
    },
    {
      "id": "W6-T2-Q10",
      "week": 6,
      "tier": "should",
      "topic": "Complex Coefficients of Sinusoid",
      "type": "single_select",
      "question": "What are the complex Fourier coefficients $c_1$ and $c_{-1}$ for $f(t) = \\cos(\\omega_0 t)$?",
      "options": [
        {
          "id": "W6-T2-Q10-opt0",
          "text": "$c_1 = \\frac{1}{2}$ and $c_{-1} = \\frac{1}{2}$"
        },
        {
          "id": "W6-T2-Q10-opt1",
          "text": "$c_1 = 1$ and $c_{-1} = 0$"
        },
        {
          "id": "W6-T2-Q10-opt2",
          "text": "$c_1 = \\frac{1}{2i}$ and $c_{-1} = -\\frac{1}{2i}$"
        },
        {
          "id": "W6-T2-Q10-opt3",
          "text": "$c_1 = \\frac{1}{2}$ and $c_{-1} = -\\frac{1}{2}$"
        }
      ],
      "correct_indices": [
        "W6-T2-Q10-opt0"
      ],
      "explanation": "By Euler's formula, $\\cos(\\omega_0 t) = \\frac{1}{2}e^{i\\omega_0 t} + \\frac{1}{2}e^{-i\\omega_0 t}$. Matching with $\\sum c_n e^{in\\omega_0 t}$ gives $c_1 = 1/2$ and $c_{-1} = 1/2$.",
      "hint": "Expand cosine directly using Euler's formula: $\\cos\\theta = \\frac{e^{i\\theta}+e^{-i\\theta}}{2}$."
    },
    {
      "id": "W6-T3-Q01",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Half-Range Cosine Series of f(x) = x",
      "type": "single_select",
      "question": "For $f(x) = x$ on $[0, \\pi]$, what is the half-range Fourier cosine series?",
      "options": [
        {
          "id": "W6-T3-Q01-opt0",
          "text": "$\\frac{\\pi}{2} - \\frac{4}{\\pi}\\sum_{k=1}^\\infty \\frac{\\cos((2k-1)x)}{(2k-1)^2}$"
        },
        {
          "id": "W6-T3-Q01-opt1",
          "text": "$\\frac{\\pi}{2} + \\sum_{n=1}^\\infty \\frac{(-1)^n}{n}\\cos(nx)$"
        },
        {
          "id": "W6-T3-Q01-opt2",
          "text": "$2\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}\\sin(nx)$"
        },
        {
          "id": "W6-T3-Q01-opt3",
          "text": "$\\frac{\\pi^2}{6} - \\sum_{n=1}^\\infty \\frac{\\cos(nx)}{n^2}$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q01-opt0"
      ],
      "explanation": "Even extension creates a symmetric triangular wave. $a_0 = \\frac{2}{\\pi}\\int_0^\\pi x\\,dx = \\pi$. For $n \\ge 1$, integration by parts gives $a_n = \\frac{2}{\\pi}\\left[\\frac{x\\sin nx}{n} + \\frac{\\cos nx}{n^2}\\right]_0^\\pi = \\frac{2}{\\pi n^2}((-1)^n - 1)$. For even $n$, $a_n=0$; for odd $n=2k-1$, $a_n = -\\frac{4}{\\pi(2k-1)^2}$.",
      "hint": "Integrate $x \\cos(nx)$ by parts and evaluate at $0$ and $\\pi$."
    },
    {
      "id": "W6-T3-Q02",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Rate of Coefficient Decay",
      "type": "single_select",
      "question": "If a periodic function $f(x)$ is continuous everywhere but its first derivative $f'(x)$ has jump discontinuities, at what asymptotic rate do its Fourier coefficients $a_n, b_n$ decay as $n \\to \\infty$?",
      "options": [
        {
          "id": "W6-T3-Q02-opt0",
          "text": "$O\\left(\\frac{1}{n^2}\\right)$"
        },
        {
          "id": "W6-T3-Q02-opt1",
          "text": "$O\\left(\\frac{1}{n}\\right)$"
        },
        {
          "id": "W6-T3-Q02-opt2",
          "text": "$O\\left(\\frac{1}{n^3}\\right)$"
        },
        {
          "id": "W6-T3-Q02-opt3",
          "text": "$O(e^{-n})$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q02-opt0"
      ],
      "explanation": "If $f$ has a jump discontinuity, coefficients decay as $O(1/n)$. If $f$ is continuous but $f'$ has jumps, integration by parts once yields $O(1/n^2)$. In general, if $f^{(k-1)}$ is continuous and $f^{(k)}$ has jumps, coefficients decay as $O(1/n^{k+1})$.",
      "hint": "Each degree of smoothness (continuous derivative) adds an extra factor of $1/n$ from integration by parts."
    },
    {
      "id": "W6-T3-Q03",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Smooth Analytic Function Decay",
      "type": "single_select",
      "question": "If a periodic function $f(x)$ is infinitely differentiable and analytic everywhere, at what rate do its Fourier coefficients decay?",
      "options": [
        {
          "id": "W6-T3-Q03-opt0",
          "text": "Exponentially: $O(e^{-\\alpha n})$ for some $\\alpha > 0$"
        },
        {
          "id": "W6-T3-Q03-opt1",
          "text": "$O(1/n^2)$"
        },
        {
          "id": "W6-T3-Q03-opt2",
          "text": "$O(1/n^4)$"
        },
        {
          "id": "W6-T3-Q03-opt3",
          "text": "$O(1/\\ln n)$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q03-opt0"
      ],
      "explanation": "For functions that are analytic on the real line, the Fourier coefficients decay exponentially fast as $e^{-\\alpha n}$, where $\\alpha$ is the distance to the nearest singularity in the complex plane.",
      "hint": "Analytic functions with no singularities on the real axis have exponential spectral decay."
    },
    {
      "id": "W6-T3-Q04",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Integration of Fourier Series",
      "type": "single_select",
      "question": "Can any Fourier series with $a_0 = 0$ be integrated term-by-term?",
      "options": [
        {
          "id": "W6-T3-Q04-opt0",
          "text": "Yes, term-by-term integration is always valid and increases the rate of decay of the coefficients by $1/n$"
        },
        {
          "id": "W6-T3-Q04-opt1",
          "text": "No, only if the function is differentiable"
        },
        {
          "id": "W6-T3-Q04-opt2",
          "text": "Only if all $b_n = 0$"
        },
        {
          "id": "W6-T3-Q04-opt3",
          "text": "No, integration destroys convergence"
        }
      ],
      "correct_indices": [
        "W6-T3-Q04-opt0"
      ],
      "explanation": "Integration smooths functions: $\\int \\cos(nx)\\,dx = \\frac{\\sin nx}{n}$. The factor of $1/n$ enhances convergence, so integrating a Fourier series term-by-term is always valid whenever $a_0 = 0$.",
      "hint": "Integration adds a factor of $1/n$, improving convergence."
    },
    {
      "id": "W6-T3-Q05",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Fourier Series of Full-Wave Rectified Sine",
      "type": "single_select",
      "question": "A full-wave rectified sine wave $f(t) = |\\sin t|$ has period $\\pi$. What harmonics appear in its Fourier series?",
      "options": [
        {
          "id": "W6-T3-Q05-opt0",
          "text": "Only even cosine harmonics: $\\frac{2}{\\pi} - \\frac{4}{\\pi}\\sum_{n=1}^\\infty \\frac{\\cos(2nt)}{4n^2 - 1}$"
        },
        {
          "id": "W6-T3-Q05-opt1",
          "text": "Only odd sine harmonics"
        },
        {
          "id": "W6-T3-Q05-opt2",
          "text": "Both odd and even sines"
        },
        {
          "id": "W6-T3-Q05-opt3",
          "text": "A single fundamental frequency"
        }
      ],
      "correct_indices": [
        "W6-T3-Q05-opt0"
      ],
      "explanation": "$|\\sin t|$ is an even function with period $\\pi$ (fundamental frequency 2 rad/s). Thus it contains a DC offset and only even cosine harmonics $\\cos(2nt)$.",
      "hint": "Full-wave rectification doubles the frequency and creates an even function."
    },
    {
      "id": "W6-T3-Q06",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Total Harmonic Distortion Definition",
      "type": "single_select",
      "question": "The Total Harmonic Distortion (THD) of a signal with fundamental amplitude $A_1$ and harmonic amplitudes $A_2, A_3, \\dots$ is defined as:",
      "options": [
        {
          "id": "W6-T3-Q06-opt0",
          "text": "$\\text{THD} = \\frac{\\sqrt{\\sum_{n=2}^\\infty A_n^2}}{A_1}$"
        },
        {
          "id": "W6-T3-Q06-opt1",
          "text": "$\\text{THD} = \\frac{A_2 + A_3}{A_1}$"
        },
        {
          "id": "W6-T3-Q06-opt2",
          "text": "$\\text{THD} = \\frac{A_1}{\\sum_{n=2}^\\infty A_n}$"
        },
        {
          "id": "W6-T3-Q06-opt3",
          "text": "$\\text{THD} = \\frac{A_1^2}{\\sum_{n=1}^\\infty A_n^2}$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q06-opt0"
      ],
      "explanation": "THD quantifies harmonic distortion as the ratio of the RMS amplitude of all higher harmonics ($n \\ge 2$) to the amplitude of the fundamental ($n=1$).",
      "hint": "RMS of higher harmonics divided by the fundamental amplitude."
    },
    {
      "id": "W6-T3-Q07",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Parseval Power in Frequency Band",
      "type": "single_select",
      "question": "What percentage of total power in a square wave is contained in its fundamental harmonic $n=1$?",
      "options": [
        {
          "id": "W6-T3-Q07-opt0",
          "text": "$\\approx 81.1\\%$"
        },
        {
          "id": "W6-T3-Q07-opt1",
          "text": "$\\approx 50.0\\%$"
        },
        {
          "id": "W6-T3-Q07-opt2",
          "text": "$\\approx 95.0\\%$"
        },
        {
          "id": "W6-T3-Q07-opt3",
          "text": "$\\approx 68.3\\%$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q07-opt0"
      ],
      "explanation": "For a square wave, $b_1 = 4/\\pi$. The fundamental power is $\\frac{1}{2}(4/\\pi)^2 = \\frac{8}{\\pi^2} \\approx 0.8106 = 81.1\\%$ of the total power of 1.",
      "hint": "Calculate $\\frac{8}{\\pi^2} \\approx 0.8106$."
    },
    {
      "id": "W6-T3-Q08",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Complex Coefficients of Pure Sine",
      "type": "single_select",
      "question": "What are the complex Fourier coefficients for $f(t) = \\sin(\\omega_0 t)$?",
      "options": [
        {
          "id": "W6-T3-Q08-opt0",
          "text": "$c_1 = \\frac{1}{2i} = -\\frac{i}{2}$ and $c_{-1} = -\\frac{1}{2i} = \\frac{i}{2}$"
        },
        {
          "id": "W6-T3-Q08-opt1",
          "text": "$c_1 = \\frac{1}{2}$ and $c_{-1} = -\\frac{1}{2}$"
        },
        {
          "id": "W6-T3-Q08-opt2",
          "text": "$c_1 = i$ and $c_{-1} = -i$"
        },
        {
          "id": "W6-T3-Q08-opt3",
          "text": "$c_1 = 0$ and $c_{-1} = 0$"
        }
      ],
      "correct_indices": [
        "W6-T3-Q08-opt0"
      ],
      "explanation": "By Euler's formula: $\\sin(\\omega_0 t) = \\frac{e^{i\\omega_0 t} - e^{-i\\omega_0 t}}{2i} = -\\frac{i}{2}e^{i\\omega_0 t} + \\frac{i}{2}e^{-i\\omega_0 t}$. Thus $c_1 = -i/2$ and $c_{-1} = i/2$.",
      "hint": "Use $\\frac{1}{2i} = -\\frac{i}{2}$."
    },
    {
      "id": "W6-T3-Q09",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Riemann-Lebesgue Lemma",
      "type": "single_select",
      "question": "What does the Riemann-Lebesgue Lemma assert about the Fourier coefficients of any absolutely integrable function $f(x)$?",
      "options": [
        {
          "id": "W6-T3-Q09-opt0",
          "text": "$\\lim_{n \\to \\infty} a_n = 0$ and $\\lim_{n \\to \\infty} b_n = 0$"
        },
        {
          "id": "W6-T3-Q09-opt1",
          "text": "The coefficients must be monotonically decreasing"
        },
        {
          "id": "W6-T3-Q09-opt2",
          "text": "$a_n$ and $b_n$ are bounded by 1"
        },
        {
          "id": "W6-T3-Q09-opt3",
          "text": "The series must converge uniformly"
        }
      ],
      "correct_indices": [
        "W6-T3-Q09-opt0"
      ],
      "explanation": "The Riemann-Lebesgue Lemma states that high-frequency oscillations cancel out in integration: $\\lim_{n \\to \\infty} \\int_a^b f(x)\\cos(nx)\\,dx = 0$ and $\\lim_{n \\to \\infty} \\int_a^b f(x)\\sin(nx)\\,dx = 0$.",
      "hint": "Harmonic coefficients always tend to zero as frequency approaches infinity."
    },
    {
      "id": "W6-T3-Q10",
      "week": 6,
      "tier": "nice_to_know",
      "topic": "Half-Range Expansion Endpoint Behavior",
      "type": "single_select",
      "question": "Why does the half-range sine series of $f(x) = 1$ on $[0, \\pi]$ exhibit Gibbs overshoot at $x=0$ and $x=\\pi$?",
      "options": [
        {
          "id": "W6-T3-Q10-opt0",
          "text": "Because the odd periodic extension forces jump discontinuities from $+1$ to $-1$ at $x=0$ and $x=\\pi$"
        },
        {
          "id": "W6-T3-Q10-opt1",
          "text": "Because $\\sin(0) \\neq 0$"
        },
        {
          "id": "W6-T3-Q10-opt2",
          "text": "Because the coefficients diverge"
        },
        {
          "id": "W6-T3-Q10-opt3",
          "text": "Because the function is non-linear"
        }
      ],
      "correct_indices": [
        "W6-T3-Q10-opt0"
      ],
      "explanation": "Extending $f(x)=1$ oddly forces $f(0^-) = -1$ while $f(0^+) = +1$, introducing a jump discontinuity of height 2 at the origin and endpoints, where Gibbs phenomenon occurs.",
      "hint": "Odd reflection forces $f(x)$ to jump across zero at the boundaries."
    },
    {
      "id": "W6-T4-Q01",
      "week": 6,
      "tier": "extra",
      "topic": "Sum of 1/n^4 via Parseval",
      "type": "single_select",
      "question": "Applying Parseval's identity to $f(x) = x^2$ on $[-\\pi, \\pi]$ (where $a_0 = \\frac{2\\pi^2}{3}$ and $a_n = \\frac{4(-1)^n}{n^2}$), what is $\\sum_{n=1}^\\infty \\frac{1}{n^4}$?",
      "options": [
        {
          "id": "W6-T4-Q01-opt0",
          "text": "$\\frac{\\pi^4}{90}$"
        },
        {
          "id": "W6-T4-Q01-opt1",
          "text": "$\\frac{\\pi^4}{45}$"
        },
        {
          "id": "W6-T4-Q01-opt2",
          "text": "$\\frac{\\pi^4}{120}$"
        },
        {
          "id": "W6-T4-Q01-opt3",
          "text": "$\\frac{\\pi^4}{72}$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q01-opt0"
      ],
      "explanation": "$\\frac{1}{2\\pi}\\int_{-\\pi}^\\pi x^4\\,dx = \\frac{\\pi^4}{5}$. By Parseval: $\\frac{a_0^2}{4} + \\frac{1}{2}\\sum a_n^2 = \\frac{\\pi^4}{9} + \\frac{1}{2}\\sum \\frac{16}{n^4} = \\frac{\\pi^4}{9} + 8\\sum \\frac{1}{n^4}$. Setting $\\frac{\\pi^4}{5} - \\frac{\\pi^4}{9} = \\frac{4\\pi^4}{45} = 8\\sum \\frac{1}{n^4} \\implies \\sum_{n=1}^\\infty \\frac{1}{n^4} = \\frac{\\pi^4}{90}$.",
      "hint": "Evaluate $\\int_{-\\pi}^\\pi x^4\\,dx$ and equate to the Parseval sum."
    },
    {
      "id": "W6-T4-Q02",
      "week": 6,
      "tier": "extra",
      "topic": "Fourier Series Differentiation Validity",
      "type": "single_select",
      "question": "Under what condition can a Fourier series $f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty (a_n \\cos nx + b_n \\sin nx)$ be differentiated term-by-term to yield the Fourier series of $f'(x)$?",
      "options": [
        {
          "id": "W6-T4-Q02-opt0",
          "text": "$f(x)$ must be continuous everywhere on $[-\\pi, \\pi]$ and satisfy $f(-\\pi) = f(\\pi)$, with $f'(x)$ piecewise smooth"
        },
        {
          "id": "W6-T4-Q02-opt1",
          "text": "Only if $f(x)$ is a polynomial"
        },
        {
          "id": "W6-T4-Q02-opt2",
          "text": "Any convergent Fourier series can always be differentiated term-by-term"
        },
        {
          "id": "W6-T4-Q02-opt3",
          "text": "Only if all $b_n = 0$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q02-opt0"
      ],
      "explanation": "Term-by-term differentiation is valid if $f(x)$ is continuous everywhere on the closed interval including the boundary endpoints ($f(-\\pi) = f(\\pi)$). If $f$ has a jump at the boundary, differentiation produces Dirac delta impulses not captured by the naive differentiated series.",
      "hint": "Continuity across the periodic boundary $f(-\\pi) = f(\\pi)$ is critical."
    },
    {
      "id": "W6-T4-Q03",
      "week": 6,
      "tier": "extra",
      "topic": "Sum of 1/n^6 via Parseval",
      "type": "single_select",
      "question": "By applying Parseval's theorem to $f(x) = x(\\pi^2 - x^2)$ on $[-\\pi, \\pi]$, Euler determined the sum of reciprocal sixth powers. What is $\\sum_{n=1}^\\infty \\frac{1}{n^6}$?",
      "options": [
        {
          "id": "W6-T4-Q03-opt0",
          "text": "$\\frac{\\pi^6}{945}$"
        },
        {
          "id": "W6-T4-Q03-opt1",
          "text": "$\\frac{\\pi^6}{720}$"
        },
        {
          "id": "W6-T4-Q03-opt2",
          "text": "$\\frac{\\pi^6}{1260}$"
        },
        {
          "id": "W6-T4-Q03-opt3",
          "text": "$\\frac{\\pi^6}{480}$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q03-opt0"
      ],
      "explanation": "Using the Fourier series $x(\\pi^2 - x^2) = 12\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n^3}\\sin(nx)$ and Parseval's identity yields the exact sum $\\sum_{n=1}^\\infty \\frac{1}{n^6} = \\frac{\\pi^6}{945}$.",
      "hint": "Related to the Bernoulli number $B_6 = 1/42$."
    },
    {
      "id": "W6-T4-Q04",
      "week": 6,
      "tier": "extra",
      "topic": "Poisson Summation Formula",
      "type": "single_select",
      "question": "The Poisson Summation Formula connects samples of a function in time to samples of its Fourier transform in frequency as:",
      "options": [
        {
          "id": "W6-T4-Q04-opt0",
          "text": "$\\sum_{n=-\\infty}^\\infty f(n T) = \\frac{1}{T}\\sum_{k=-\\infty}^\\infty F\\left(\\frac{2\\pi k}{T}\\right)$"
        },
        {
          "id": "W6-T4-Q04-opt1",
          "text": "$\\sum f(n) = \\int f(x)\\,dx$"
        },
        {
          "id": "W6-T4-Q04-opt2",
          "text": "$\\sum f(n) = \\sum F(k)$"
        },
        {
          "id": "W6-T4-Q04-opt3",
          "text": "$\\sum f(nT) = T \\sum F(k)$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q04-opt0"
      ],
      "explanation": "Poisson's summation formula states that periodically sampling a function produces periodic spectral copies in the frequency domain: $\\sum_{n=-\\infty}^\\infty f(nT) = \\frac{1}{T}\\sum_{k=-\\infty}^\\infty \\hat{f}(2\\pi k/T)$.",
      "hint": "The foundation of the Nyquist-Shannon sampling theorem."
    },
    {
      "id": "W6-T4-Q05",
      "week": 6,
      "tier": "extra",
      "topic": "Generalized Fourier Series in Hilbert Space",
      "type": "single_select",
      "question": "In the Hilbert space $L^2[-L, L]$ with inner product $\\langle f, g \\rangle = \\int_{-L}^L f(x)g^*(x)\\,dx$, the Fourier basis functions $\\{e^{in\\pi x/L}\\}$ form:",
      "options": [
        {
          "id": "W6-T4-Q05-opt0",
          "text": "A complete orthonormal basis (after dividing by $\\sqrt{2L}$)"
        },
        {
          "id": "W6-T4-Q05-opt1",
          "text": "A linearly dependent set"
        },
        {
          "id": "W6-T4-Q05-opt2",
          "text": "A non-orthogonal basis"
        },
        {
          "id": "W6-T4-Q05-opt3",
          "text": "A finite-dimensional subspace"
        }
      ],
      "correct_indices": [
        "W6-T4-Q05-opt0"
      ],
      "explanation": "The functions $\\phi_n(x) = \\frac{1}{\\sqrt{2L}}e^{in\\pi x/L}$ satisfy $\\langle \\phi_m, \\phi_n \\rangle = \\delta_{mn}$ and their linear span is dense in $L^2[-L, L]$, forming a complete orthonormal Hilbert basis.",
      "hint": "Orthonormal functions with unit norm and mutual orthogonality."
    },
    {
      "id": "W6-T4-Q06",
      "week": 6,
      "tier": "extra",
      "topic": "Carleson's Theorem",
      "type": "single_select",
      "question": "Carleson's landmark 1966 theorem solved Luzin's conjecture by proving that for any function $f \\in L^2[-\\pi, \\pi]$:",
      "options": [
        {
          "id": "W6-T4-Q06-opt0",
          "text": "Its Fourier series converges pointwise almost everywhere"
        },
        {
          "id": "W6-T4-Q06-opt1",
          "text": "Its Fourier series converges uniformly everywhere"
        },
        {
          "id": "W6-T4-Q06-opt2",
          "text": "Its Fourier series diverges everywhere"
        },
        {
          "id": "W6-T4-Q06-opt3",
          "text": "Its coefficients are always rational"
        }
      ],
      "correct_indices": [
        "W6-T4-Q06-opt0"
      ],
      "explanation": "Carleson proved the deep and difficult result that the Fourier series of any $L^2$ function converges pointwise to $f(x)$ almost everywhere (except on a set of Lebesgue measure zero).",
      "hint": "Pointwise convergence almost everywhere for square-integrable functions."
    },
    {
      "id": "W6-T4-Q07",
      "week": 6,
      "tier": "extra",
      "topic": "Riesz-Fischer Theorem",
      "type": "single_select",
      "question": "What does the Riesz-Fischer Theorem state about square-summable sequences $\\{c_n\\} \\in \\ell^2$?",
      "options": [
        {
          "id": "W6-T4-Q07-opt0",
          "text": "For every sequence with $\\sum |c_n|^2 < \\infty$, there exists a unique function $f \\in L^2$ having those exact Fourier coefficients"
        },
        {
          "id": "W6-T4-Q07-opt1",
          "text": "Only continuous functions have $\\ell^2$ coefficients"
        },
        {
          "id": "W6-T4-Q07-opt2",
          "text": "Fourier coefficients must be bounded by 1"
        },
        {
          "id": "W6-T4-Q07-opt3",
          "text": "The series must converge absolutely"
        }
      ],
      "correct_indices": [
        "W6-T4-Q07-opt0"
      ],
      "explanation": "The Riesz-Fischer theorem proves that the space $L^2$ is complete (a Hilbert space) and isometrically isomorphic to the sequence space $\\ell^2$: every square-summable sequence corresponds to an $L^2$ function.",
      "hint": "Isomorphism between $L^2$ and $\\ell^2$."
    },
    {
      "id": "W6-T4-Q08",
      "week": 6,
      "tier": "extra",
      "topic": "Dini's Criterion for Convergence",
      "type": "single_select",
      "question": "Dini's Criterion guarantees that the Fourier series of $f(x)$ converges to $f(x_0)$ at point $x_0$ if:",
      "options": [
        {
          "id": "W6-T4-Q08-opt0",
          "text": "$\\int_0^\\delta \\frac{|f(x_0+t) + f(x_0-t) - 2f(x_0)|}{t}\\,dt < \\infty$ for some $\\delta > 0$"
        },
        {
          "id": "W6-T4-Q08-opt1",
          "text": "$f(x)$ is continuous at $x_0$"
        },
        {
          "id": "W6-T4-Q08-opt2",
          "text": "$f'(x_0) = 0$"
        },
        {
          "id": "W6-T4-Q08-opt3",
          "text": "$f''(x_0)$ exists"
        }
      ],
      "correct_indices": [
        "W6-T4-Q08-opt0"
      ],
      "explanation": "Dini's test is a sharp local condition: if the local symmetric difference divided by $t$ is integrable near $0$, the Fourier series converges to $f(x_0)$. (This is strictly weaker than differentiability).",
      "hint": "Local integrability of the difference quotient divided by $t$."
    },
    {
      "id": "W6-T4-Q09",
      "week": 6,
      "tier": "extra",
      "topic": "Gibbs Constant Exact Value",
      "type": "single_select",
      "question": "The exact percentage overshoot in the Gibbs phenomenon is given by the Wilbraham-Gibbs constant $\\frac{1}{\\pi}\\int_0^\\pi \\frac{\\sin t}{t}\\,dt - \\frac{1}{2}$. What is its numerical value?",
      "options": [
        {
          "id": "W6-T4-Q09-opt0",
          "text": "$\\approx 0.08949$ ($8.95\\%$)"
        },
        {
          "id": "W6-T4-Q09-opt1",
          "text": "$\\approx 0.05000$ ($5.00\\%$)"
        },
        {
          "id": "W6-T4-Q09-opt2",
          "text": "$\\approx 0.12500$ ($12.5\\%$)"
        },
        {
          "id": "W6-T4-Q09-opt3",
          "text": "$\\approx 0.15000$ ($15.0\\%$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q09-opt0"
      ],
      "explanation": "The sine integral $\\text{Si}(\\pi) = \\int_0^\\pi \\frac{\\sin t}{t}\\,dt \\approx 1.8519$. Dividing by $\\pi$ gives $1.8519/\\pi \\approx 0.58949$. Subtracting $0.5$ yields an overshoot of $0.08949 \\approx 8.95\\%$.",
      "hint": "Involves the sine integral $\\text{Si}(\\pi) / \\pi$."
    },
    {
      "id": "W6-T4-Q10",
      "week": 6,
      "tier": "extra",
      "topic": "Fourier Matrix and Discrete Fourier Transform",
      "type": "single_select",
      "question": "In the $N$-point Discrete Fourier Transform (DFT), the unitary Fourier matrix $\\mathbf{F}_N$ has entries:",
      "options": [
        {
          "id": "W6-T4-Q10-opt0",
          "text": "$F_{jk} = \\frac{1}{\\sqrt{N}} \\omega^{j k}$ where $\\omega = e^{-2\\pi i / N}$"
        },
        {
          "id": "W6-T4-Q10-opt1",
          "text": "$F_{jk} = \\omega^{j+k}$"
        },
        {
          "id": "W6-T4-Q10-opt2",
          "text": "$F_{jk} = \\frac{1}{N}\\cos\\left(\\frac{2\\pi j k}{N}\\right)$"
        },
        {
          "id": "W6-T4-Q10-opt3",
          "text": "$F_{jk} = e^{2\\pi i(j-k)}$"
        }
      ],
      "correct_indices": [
        "W6-T4-Q10-opt0"
      ],
      "explanation": "The normalized DFT matrix has entries $F_{jk} = \\frac{1}{\\sqrt{N}}e^{-2\\pi i j k/N}$, satisfying $\\mathbf{F}_N^H \\mathbf{F}_N = \\mathbf{I}$, forming the basis of the Fast Fourier Transform (FFT) algorithm.",
      "hint": "Roots of unity matrix scaled by $1/\\sqrt{N}$."
    }
  ]
};
