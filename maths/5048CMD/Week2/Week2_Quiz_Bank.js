window.QUIZ_BANK_WEEK2 = {
  "module": "5048CMD Engineering Mathematics 2",
  "week": 2,
  "title": "Week 2: Second-Order Linear ODEs",
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
      "topic": "Auxiliary Equation - Real Distinct Roots",
      "type": "single_select",
      "question": "What is the general solution of the homogeneous ODE $y'' - 5y' + 6y = 0$?",
      "options": [
        {
          "id": "W2-T1-Q01-opt0",
          "text": "$y(x) = C_1 e^{2x} + C_2 e^{3x}$"
        },
        {
          "id": "W2-T1-Q01-opt1",
          "text": "$y(x) = C_1 e^{-2x} + C_2 e^{-3x}$"
        },
        {
          "id": "W2-T1-Q01-opt2",
          "text": "$y(x) = (C_1 + C_2 x)e^{2.5x}$"
        },
        {
          "id": "W2-T1-Q01-opt3",
          "text": "$y(x) = C_1 \\cos(2x) + C_2 \\sin(3x)$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q01-opt0"
      ],
      "explanation": "The auxiliary equation is $r^2 - 5r + 6 = 0 \\implies (r-2)(r-3) = 0 \\implies r_1 = 2, r_2 = 3$. Hence $y(x) = C_1 e^{2x} + C_2 e^{3x}$.",
      "hint": "Solve the characteristic quadratic equation $r^2 - 5r + 6 = 0$."
    },
    {
      "id": "W2-T1-Q02",
      "week": 2,
      "tier": "core",
      "topic": "Auxiliary Equation - Repeated Roots",
      "type": "single_select",
      "question": "What is the general solution of $y'' - 6y' + 9y = 0$?",
      "options": [
        {
          "id": "W2-T1-Q02-opt0",
          "text": "$y(x) = (C_1 + C_2 x)e^{3x}$"
        },
        {
          "id": "W2-T1-Q02-opt1",
          "text": "$y(x) = C_1 e^{3x} + C_2 e^{-3x}$"
        },
        {
          "id": "W2-T1-Q02-opt2",
          "text": "$y(x) = C_1 e^{3x}$"
        },
        {
          "id": "W2-T1-Q02-opt3",
          "text": "$y(x) = C_1 \\cos(3x) + C_2 \\sin(3x)$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q02-opt0"
      ],
      "explanation": "The auxiliary equation is $r^2 - 6r + 9 = (r-3)^2 = 0$. For a repeated root $r=3$, the general solution is $y(x) = (C_1 + C_2 x)e^{3x}$.",
      "hint": "When the discriminant is zero, multiply the second independent solution by $x$."
    },
    {
      "id": "W2-T1-Q03",
      "week": 2,
      "tier": "core",
      "topic": "Auxiliary Equation - Complex Roots",
      "type": "single_select",
      "question": "What is the general solution of $y'' + 4y' + 13y = 0$?",
      "options": [
        {
          "id": "W2-T1-Q03-opt0",
          "text": "$y(x) = e^{-2x}(C_1 \\cos 3x + C_2 \\sin 3x)$"
        },
        {
          "id": "W2-T1-Q03-opt1",
          "text": "$y(x) = e^{2x}(C_1 \\cos 3x + C_2 \\sin 3x)$"
        },
        {
          "id": "W2-T1-Q03-opt2",
          "text": "$y(x) = C_1 e^{-2x} + C_2 e^{3x}$"
        },
        {
          "id": "W2-T1-Q03-opt3",
          "text": "$y(x) = C_1 \\cos 2x + C_2 \\sin 3x$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q03-opt0"
      ],
      "explanation": "The auxiliary equation is $r^2 + 4r + 13 = 0 \\implies r = \\frac{-4 \\pm \\sqrt{16 - 52}}{2} = -2 \\pm 3i$. The solution is $y(x) = e^{-2x}(C_1 \\cos 3x + C_2 \\sin 3x)$.",
      "hint": "For complex roots $\\alpha \\pm i\\beta$, the solution takes the form $e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$."
    },
    {
      "id": "W2-T1-Q04",
      "week": 2,
      "tier": "core",
      "topic": "Principle of Superposition",
      "type": "single_select",
      "question": "If $y_1(x)$ and $y_2(x)$ are linearly independent solutions to a homogeneous linear ODE $a y'' + b y' + c y = 0$, what guarantees that $y = c_1 y_1 + c_2 y_2$ is also a solution?",
      "options": [
        {
          "id": "W2-T1-Q04-opt0",
          "text": "Linearity of the differential operator $L = a\\frac{d^2}{dx^2} + b\\frac{d}{dx} + c$"
        },
        {
          "id": "W2-T1-Q04-opt1",
          "text": "The fundamental theorem of calculus"
        },
        {
          "id": "W2-T1-Q04-opt2",
          "text": "Separation of variables"
        },
        {
          "id": "W2-T1-Q04-opt3",
          "text": "The existence of an integrating factor"
        }
      ],
      "correct_indices": [
        "W2-T1-Q04-opt0"
      ],
      "explanation": "The differential operator $L$ is linear: $L(c_1 y_1 + c_2 y_2) = c_1 L(y_1) + c_2 L(y_2) = c_1(0) + c_2(0) = 0$. This is the Principle of Superposition.",
      "hint": "Superposition holds because differentiation is a linear operation."
    },
    {
      "id": "W2-T1-Q05",
      "week": 2,
      "tier": "core",
      "topic": "Harmonic Oscillator General Solution",
      "type": "single_select",
      "question": "What is the general solution of the simple harmonic oscillator equation $y'' + 16y = 0$?",
      "options": [
        {
          "id": "W2-T1-Q05-opt0",
          "text": "$y(x) = C_1 \\cos(4x) + C_2 \\sin(4x)$"
        },
        {
          "id": "W2-T1-Q05-opt1",
          "text": "$y(x) = C_1 e^{4x} + C_2 e^{-4x}$"
        },
        {
          "id": "W2-T1-Q05-opt2",
          "text": "$y(x) = (C_1 + C_2 x)e^{4x}$"
        },
        {
          "id": "W2-T1-Q05-opt3",
          "text": "$y(x) = C_1 \\cos(16x) + C_2 \\sin(16x)$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q05-opt0"
      ],
      "explanation": "Auxiliary equation: $r^2 + 16 = 0 \\implies r = \\pm 4i$. The solution is $y(x) = C_1 \\cos(4x) + C_2 \\sin(4x)$.",
      "hint": "Roots are purely imaginary $\\pm i\\omega$ where $\\omega = \\sqrt{16} = 4$."
    },
    {
      "id": "W2-T1-Q06",
      "week": 2,
      "tier": "core",
      "topic": "Complementary Function Concept",
      "type": "single_select",
      "question": "The general solution of a non-homogeneous linear ODE $L[y] = f(x)$ is expressed as $y(x) = y_c(x) + y_p(x)$. What is $y_c(x)$?",
      "options": [
        {
          "id": "W2-T1-Q06-opt0",
          "text": "The general solution of the associated homogeneous equation $L[y] = 0$"
        },
        {
          "id": "W2-T1-Q06-opt1",
          "text": "Any particular solution satisfying $L[y] = f(x)$"
        },
        {
          "id": "W2-T1-Q06-opt2",
          "text": "The steady-state response only"
        },
        {
          "id": "W2-T1-Q06-opt3",
          "text": "The zero-input initial condition value"
        }
      ],
      "correct_indices": [
        "W2-T1-Q06-opt0"
      ],
      "explanation": "The complementary function $y_c(x)$ is the general solution to the homogeneous equation $L[y] = 0$, containing the arbitrary constants.",
      "hint": "$y_c$ solves the homogeneous equation with right-hand side zero."
    },
    {
      "id": "W2-T1-Q07",
      "week": 2,
      "tier": "core",
      "topic": "Trial Form for Polynomial RHS",
      "type": "single_select",
      "question": "For $y'' + 2y' + 5y = 3x^2 - 1$, what is the standard trial particular integral $y_p(x)$?",
      "options": [
        {
          "id": "W2-T1-Q07-opt0",
          "text": "$y_p(x) = A x^2 + B x + C$"
        },
        {
          "id": "W2-T1-Q07-opt1",
          "text": "$y_p(x) = A x^2 + B$"
        },
        {
          "id": "W2-T1-Q07-opt2",
          "text": "$y_p(x) = A x^3 + B x^2 + C x$"
        },
        {
          "id": "W2-T1-Q07-opt3",
          "text": "$y_p(x) = A x^2$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q07-opt0"
      ],
      "explanation": "For a polynomial right-hand side of degree 2 where the constant term in the ODE ($5y$) is non-zero, the trial form is a complete polynomial of degree 2: $A x^2 + B x + C$.",
      "hint": "Include all powers down to the constant term."
    },
    {
      "id": "W2-T1-Q08",
      "week": 2,
      "tier": "core",
      "topic": "Trial Form for Exponential RHS",
      "type": "single_select",
      "question": "For $y'' - 4y = 6e^{3x}$, what trial form should be chosen for $y_p(x)$?",
      "options": [
        {
          "id": "W2-T1-Q08-opt0",
          "text": "$y_p(x) = A e^{3x}$"
        },
        {
          "id": "W2-T1-Q08-opt1",
          "text": "$y_p(x) = A x e^{3x}$"
        },
        {
          "id": "W2-T1-Q08-opt2",
          "text": "$y_p(x) = (A x + B)e^{3x}$"
        },
        {
          "id": "W2-T1-Q08-opt3",
          "text": "$y_p(x) = A e^{-3x}$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q08-opt0"
      ],
      "explanation": "The homogeneous roots are $r = \\pm 2$. Since $r=3$ is not a root of the auxiliary equation, the trial form is simply $y_p = A e^{3x}$.",
      "hint": "The exponent $3$ does not duplicate any root of $r^2 - 4 = 0$."
    },
    {
      "id": "W2-T1-Q09",
      "week": 2,
      "tier": "core",
      "topic": "Trial Form for Sinusoidal RHS",
      "type": "single_select",
      "question": "For $y'' + 4y' + 3y = 2\\sin(5x)$, what is the trial form for $y_p(x)$?",
      "options": [
        {
          "id": "W2-T1-Q09-opt0",
          "text": "$y_p(x) = A\\cos(5x) + B\\sin(5x)$"
        },
        {
          "id": "W2-T1-Q09-opt1",
          "text": "$y_p(x) = A\\sin(5x)$"
        },
        {
          "id": "W2-T1-Q09-opt2",
          "text": "$y_p(x) = A\\cos(5x)$"
        },
        {
          "id": "W2-T1-Q09-opt3",
          "text": "$y_p(x) = x(A\\cos 5x + B\\sin 5x)$"
        }
      ],
      "correct_indices": [
        "W2-T1-Q09-opt0"
      ],
      "explanation": "Because differentiation converts sine to cosine, both $\\sin(5x)$ and $\\cos(5x)$ must be included: $y_p = A\\cos(5x) + B\\sin(5x)$.",
      "hint": "Always include both sine and cosine when forcing with a sinusoidal term."
    },
    {
      "id": "W2-T1-Q10",
      "week": 2,
      "tier": "core",
      "topic": "Discriminant and Stability",
      "type": "single_select",
      "question": "For $a y'' + b y' + c y = 0$ with $a, b, c > 0$, the roots of the auxiliary equation always have:",
      "options": [
        {
          "id": "W2-T1-Q10-opt0",
          "text": "Negative real parts"
        },
        {
          "id": "W2-T1-Q10-opt1",
          "text": "Positive real parts"
        },
        {
          "id": "W2-T1-Q10-opt2",
          "text": "Zero real parts"
        },
        {
          "id": "W2-T1-Q10-opt3",
          "text": "Purely imaginary parts"
        }
      ],
      "correct_indices": [
        "W2-T1-Q10-opt0"
      ],
      "explanation": "Roots are $\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Since $a, b, c > 0$, if the discriminant is negative the real part is $-b/(2a) < 0$. If non-negative, $\\sqrt{b^2 - 4ac} < b$, so both real roots are strictly negative.",
      "hint": "All positive coefficients ensure asymptotic stability."
    },
    {
      "id": "W2-T2-Q01",
      "week": 2,
      "tier": "should",
      "topic": "Method of Undetermined Coefficients",
      "type": "single_select",
      "question": "What is the particular integral $y_p(x)$ for the ODE $y'' - 3y' + 2y = 4e^{3x}$?",
      "options": [
        {
          "id": "W2-T2-Q01-opt0",
          "text": "$y_p(x) = 2e^{3x}$"
        },
        {
          "id": "W2-T2-Q01-opt1",
          "text": "$y_p(x) = e^{3x}$"
        },
        {
          "id": "W2-T2-Q01-opt2",
          "text": "$y_p(x) = 4e^{3x}$"
        },
        {
          "id": "W2-T2-Q01-opt3",
          "text": "$y_p(x) = 2x e^{3x}$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q01-opt0"
      ],
      "explanation": "Trial solution: $y_p = A e^{3x}$. Then $y_p' = 3A e^{3x}$, $y_p'' = 9A e^{3x}$. Substituting: $(9A - 9A + 2A)e^{3x} = 4e^{3x} \\implies 2A = 4 \\implies A = 2$. Thus $y_p = 2e^{3x}$.",
      "hint": "Substitute $y_p = A e^{3x}$ into the left-hand side and solve for $A$."
    },
    {
      "id": "W2-T2-Q02",
      "week": 2,
      "tier": "should",
      "topic": "Resonant Forcing",
      "type": "single_select",
      "question": "For the ODE $y'' + 9y = \\cos(3x)$, why must the trial particular integral be $y_p = x(A\\cos 3x + B\\sin 3x)$ rather than $A\\cos 3x + B\\sin 3x$?",
      "options": [
        {
          "id": "W2-T2-Q02-opt0",
          "text": "Because $\\cos(3x)$ is already a solution to the homogeneous equation"
        },
        {
          "id": "W2-T2-Q02-opt1",
          "text": "Because the forcing function has frequency 9"
        },
        {
          "id": "W2-T2-Q02-opt2",
          "text": "Because the ODE is second order"
        },
        {
          "id": "W2-T2-Q02-opt3",
          "text": "Because cosine is an even function"
        }
      ],
      "correct_indices": [
        "W2-T2-Q02-opt0"
      ],
      "explanation": "The homogeneous solution is $y_h = C_1 \\cos 3x + C_2 \\sin 3x$. Since the forcing term $\\cos 3x$ duplicates a term in $y_h$, resonance occurs, requiring multiplication by $x$.",
      "hint": "Compare the forcing frequency $\\omega$ with the natural frequency $\\omega_0 = \\sqrt{9} = 3$."
    },
    {
      "id": "W2-T2-Q03",
      "week": 2,
      "tier": "should",
      "topic": "Particular Integral with Resonant Exponent",
      "type": "single_select",
      "question": "Find a particular solution $y_p(x)$ for $y'' - 4y' + 4y = 6e^{2x}$.",
      "options": [
        {
          "id": "W2-T2-Q03-opt0",
          "text": "$y_p(x) = 3x^2 e^{2x}$"
        },
        {
          "id": "W2-T2-Q03-opt1",
          "text": "$y_p(x) = 3x e^{2x}$"
        },
        {
          "id": "W2-T2-Q03-opt2",
          "text": "$y_p(x) = 6x^2 e^{2x}$"
        },
        {
          "id": "W2-T2-Q03-opt3",
          "text": "$y_p(x) = \\frac{3}{2}x^2 e^{2x}$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q03-opt0"
      ],
      "explanation": "Auxiliary equation is $(r-2)^2 = 0$, so $e^{2x}$ and $x e^{2x}$ are both homogeneous solutions. Hence multiply by $x^2$: $y_p = A x^2 e^{2x}$. Substituting gives $2A e^{2x} = 6e^{2x} \\implies A = 3$. Thus $y_p = 3x^2 e^{2x}$.",
      "hint": "Because $r=2$ is a double root, multiply by $x^2$."
    },
    {
      "id": "W2-T2-Q04",
      "week": 2,
      "tier": "should",
      "topic": "Second-Order Initial Value Problem",
      "type": "single_select",
      "question": "Solve the IVP $y'' + y = 0$ with $y(0) = 2$ and $y'(0) = -5$.",
      "options": [
        {
          "id": "W2-T2-Q04-opt0",
          "text": "$y(x) = 2\\cos x - 5\\sin x$"
        },
        {
          "id": "W2-T2-Q04-opt1",
          "text": "$y(x) = 2\\cos x + 5\\sin x$"
        },
        {
          "id": "W2-T2-Q04-opt2",
          "text": "$y(x) = -5\\cos x + 2\\sin x$"
        },
        {
          "id": "W2-T2-Q04-opt3",
          "text": "$y(x) = 2e^x - 5e^{-x}$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q04-opt0"
      ],
      "explanation": "General solution is $y(x) = A\\cos x + B\\sin x$. Then $y'(x) = -A\\sin x + B\\cos x$. At $x=0$: $y(0) = A = 2$. $y'(0) = B = -5$. Thus $y(x) = 2\\cos x - 5\\sin x$.",
      "hint": "Use $y(0) = A$ and $y'(0) = B$ directly."
    },
    {
      "id": "W2-T2-Q05",
      "week": 2,
      "tier": "should",
      "topic": "Damped Oscillation Types",
      "type": "single_select",
      "question": "Classify the motion described by $y'' + 6y' + 25y = 0$.",
      "options": [
        {
          "id": "W2-T2-Q05-opt0",
          "text": "Underdamped (oscillatory with exponential decay)"
        },
        {
          "id": "W2-T2-Q05-opt1",
          "text": "Critically damped"
        },
        {
          "id": "W2-T2-Q05-opt2",
          "text": "Overdamped (pure exponential decay without oscillation)"
        },
        {
          "id": "W2-T2-Q05-opt3",
          "text": "Undamped simple harmonic motion"
        }
      ],
      "correct_indices": [
        "W2-T2-Q05-opt0"
      ],
      "explanation": "The auxiliary roots are $r = \\frac{-6 \\pm \\sqrt{36 - 100}}{2} = -3 \\pm 4i$. Complex roots with negative real part indicate underdamped oscillatory motion decaying as $e^{-3t}$.",
      "hint": "Compute the discriminant: $b^2 - 4ac = 36 - 100 = -64 < 0$."
    },
    {
      "id": "W2-T2-Q06",
      "week": 2,
      "tier": "should",
      "topic": "Overdamped System Roots",
      "type": "single_select",
      "question": "Classify the ODE $y'' + 5y' + 4y = 0$.",
      "options": [
        {
          "id": "W2-T2-Q06-opt0",
          "text": "Overdamped"
        },
        {
          "id": "W2-T2-Q06-opt1",
          "text": "Underdamped"
        },
        {
          "id": "W2-T2-Q06-opt2",
          "text": "Critically damped"
        },
        {
          "id": "W2-T2-Q06-opt3",
          "text": "Resonant"
        }
      ],
      "correct_indices": [
        "W2-T2-Q06-opt0"
      ],
      "explanation": "The auxiliary roots are $r^2 + 5r + 4 = (r+1)(r+4) = 0 \\implies r_1 = -1, r_2 = -4$. Two distinct negative real roots correspond to overdamped motion.",
      "hint": "Discriminant $b^2 - 4ac = 25 - 16 = 9 > 0$ with distinct real roots."
    },
    {
      "id": "W2-T2-Q07",
      "week": 2,
      "tier": "should",
      "topic": "Particular Integral of Constant Forcing",
      "type": "single_select",
      "question": "What is the particular integral of $y'' + 3y' + 2y = 10$?",
      "options": [
        {
          "id": "W2-T2-Q07-opt0",
          "text": "$y_p = 5$"
        },
        {
          "id": "W2-T2-Q07-opt1",
          "text": "$y_p = 10$"
        },
        {
          "id": "W2-T2-Q07-opt2",
          "text": "$y_p = 5x$"
        },
        {
          "id": "W2-T2-Q07-opt3",
          "text": "$y_p = 2$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q07-opt0"
      ],
      "explanation": "Trial solution: $y_p = A$ (constant). Then $y_p' = 0, y_p'' = 0$. Substituting gives $2A = 10 \\implies A = 5$.",
      "hint": "Divide the constant forcing term by the coefficient of $y$."
    },
    {
      "id": "W2-T2-Q08",
      "week": 2,
      "tier": "should",
      "topic": "Particular Integral for Sinusoidal Term",
      "type": "single_select",
      "question": "Find $y_p(x)$ for $y'' + 4y = 8\\cos(2x)$ by undetermined coefficients.",
      "options": [
        {
          "id": "W2-T2-Q08-opt0",
          "text": "$y_p(x) = 2x\\sin(2x)$"
        },
        {
          "id": "W2-T2-Q08-opt1",
          "text": "$y_p(x) = -2x\\sin(2x)$"
        },
        {
          "id": "W2-T2-Q08-opt2",
          "text": "$y_p(x) = 2x\\cos(2x)$"
        },
        {
          "id": "W2-T2-Q08-opt3",
          "text": "$y_p(x) = 4x\\sin(2x)$"
        }
      ],
      "correct_indices": [
        "W2-T2-Q08-opt0"
      ],
      "explanation": "Since $\\cos 2x$ is in $y_h$, trial form is $y_p = x(A\\cos 2x + B\\sin 2x)$. Substituting into $y'' + 4y$: $y_p'' + 4y_p = -4A\\sin 2x + 4B\\cos 2x = 8\\cos 2x$. Thus $4B = 8 \\implies B = 2$ and $A = 0$. Hence $y_p = 2x\\sin(2x)$.",
      "hint": "Differentiate $x(A\\cos 2x + B\\sin 2x)$ twice and equate coefficients of $\\cos 2x$ and $\\sin 2x$."
    },
    {
      "id": "W2-T2-Q09",
      "week": 2,
      "tier": "should",
      "topic": "Mechanical Spring-Mass Parameters",
      "type": "single_select",
      "question": "A $2\\text{ kg}$ mass on a spring with stiffness $k = 18\\text{ N/m}$ and damping $c = 12\\text{ N}\\cdot\\text{s/m}$ is governed by $2\\ddot{x} + 12\\dot{x} + 18x = 0$. What is the nature of the damping?",
      "options": [
        {
          "id": "W2-T2-Q09-opt0",
          "text": "Critically damped"
        },
        {
          "id": "W2-T2-Q09-opt1",
          "text": "Underdamped"
        },
        {
          "id": "W2-T2-Q09-opt2",
          "text": "Overdamped"
        },
        {
          "id": "W2-T2-Q09-opt3",
          "text": "Undamped"
        }
      ],
      "correct_indices": [
        "W2-T2-Q09-opt0"
      ],
      "explanation": "Divide by 2: $\\ddot{x} + 6\\dot{x} + 9x = 0$. Discriminant: $c^2 - 4mk = 12^2 - 4(2)(18) = 144 - 144 = 0$. Since the discriminant is zero, the system is critically damped.",
      "hint": "Calculate $c^2 - 4mk$."
    },
    {
      "id": "W2-T2-Q10",
      "week": 2,
      "tier": "should",
      "topic": "Superposition of Forcing Functions",
      "type": "single_select",
      "question": "To find a particular solution for $y'' + y = 4e^{2x} + 3x$, one can:",
      "options": [
        {
          "id": "W2-T2-Q10-opt0",
          "text": "Solve separately for $y_{p1}$ with RHS $4e^{2x}$ and $y_{p2}$ with RHS $3x$, then add them: $y_p = y_{p1} + y_{p2}$"
        },
        {
          "id": "W2-T2-Q10-opt1",
          "text": "Multiply the two particular solutions together"
        },
        {
          "id": "W2-T2-Q10-opt2",
          "text": "Solve only for the higher degree term"
        },
        {
          "id": "W2-T2-Q10-opt3",
          "text": "Take the average of the two solutions"
        }
      ],
      "correct_indices": [
        "W2-T2-Q10-opt0"
      ],
      "explanation": "By linearity of the differential operator $L[y_{p1} + y_{p2}] = L[y_{p1}] + L[y_{p2}] = 4e^{2x} + 3x$. This is the principle of superposition for non-homogeneous terms.",
      "hint": "Linearity allows solving each forcing term independently and summing the results."
    },
    {
      "id": "W2-T3-Q01",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Variation of Parameters",
      "type": "single_select",
      "question": "In the method of Variation of Parameters for $y'' + P(x)y' + Q(x)y = f(x)$, what is the Wronskian $W(y_1, y_2)$?",
      "options": [
        {
          "id": "W2-T3-Q01-opt0",
          "text": "$W = y_1 y_2' - y_1' y_2$"
        },
        {
          "id": "W2-T3-Q01-opt1",
          "text": "$W = y_1 y_2' + y_1' y_2$"
        },
        {
          "id": "W2-T3-Q01-opt2",
          "text": "$W = y_1' y_2' - y_1 y_2$"
        },
        {
          "id": "W2-T3-Q01-opt3",
          "text": "$W = \\frac{y_2'}{y_1'}$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q01-opt0"
      ],
      "explanation": "The Wronskian determinant is $W(y_1, y_2) = \\det \\begin{pmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{pmatrix} = y_1 y_2' - y_1' y_2$.",
      "hint": "Evaluate the $2 \\times 2$ determinant formed by the solutions and their first derivatives."
    },
    {
      "id": "W2-T3-Q02",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Damped Mechanical Oscillations",
      "type": "single_select",
      "question": "A mass-spring-damper system is governed by $m\\ddot{x} + c\\dot{x} + kx = 0$. What is the condition on damping $c$ for the system to be critically damped?",
      "options": [
        {
          "id": "W2-T3-Q02-opt0",
          "text": "$c = 2\\sqrt{mk}$"
        },
        {
          "id": "W2-T3-Q02-opt1",
          "text": "$c > 2\\sqrt{mk}$"
        },
        {
          "id": "W2-T3-Q02-opt2",
          "text": "$c < 2\\sqrt{mk}$"
        },
        {
          "id": "W2-T3-Q02-opt3",
          "text": "$c = \\sqrt{mk}$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q02-opt0"
      ],
      "explanation": "The characteristic equation is $m r^2 + c r + k = 0$. Critical damping occurs when the discriminant vanishes: $c^2 - 4mk = 0 \\implies c = 2\\sqrt{mk} = c_c$.",
      "hint": "Critical damping corresponds to the boundary between oscillatory motion and non-oscillatory return, where the discriminant is zero."
    },
    {
      "id": "W2-T3-Q03",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Variation of Parameters Integral Formula",
      "type": "single_select",
      "question": "In Variation of Parameters for $y'' + y = \\tan x$, what is the formula for the coefficient $u_1(x)$ in $y_p = u_1 y_1 + u_2 y_2$?",
      "options": [
        {
          "id": "W2-T3-Q03-opt0",
          "text": "$u_1(x) = -\\int \\frac{y_2 f(x)}{W}\\,dx$"
        },
        {
          "id": "W2-T3-Q03-opt1",
          "text": "$u_1(x) = \\int \\frac{y_2 f(x)}{W}\\,dx$"
        },
        {
          "id": "W2-T3-Q03-opt2",
          "text": "$u_1(x) = -\\int \\frac{y_1 f(x)}{W}\\,dx$"
        },
        {
          "id": "W2-T3-Q03-opt3",
          "text": "$u_1(x) = \\int \\frac{W}{y_2 f(x)}\\,dx$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q03-opt0"
      ],
      "explanation": "The standard Variation of Parameters formulas are $u_1 = -\\int \\frac{y_2 f(x)}{W}\\,dx$ and $u_2 = \\int \\frac{y_1 f(x)}{W}\\,dx$.",
      "hint": "Notice the negative sign in front of the $u_1$ formula with $y_2$ in the numerator."
    },
    {
      "id": "W2-T3-Q04",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Wronskian of Fundamental Set",
      "type": "single_select",
      "question": "Two solutions $y_1(x)$ and $y_2(x)$ to a second-order linear homogeneous ODE on interval $I$ form a fundamental set of solutions if and only if:",
      "options": [
        {
          "id": "W2-T3-Q04-opt0",
          "text": "$W(y_1, y_2)(x) \\neq 0$ for all $x \\in I$"
        },
        {
          "id": "W2-T3-Q04-opt1",
          "text": "$W(y_1, y_2)(x) = 0$ at some point"
        },
        {
          "id": "W2-T3-Q04-opt2",
          "text": "$y_1(x) = C y_2(x)$"
        },
        {
          "id": "W2-T3-Q04-opt3",
          "text": "$y_1'(x) + y_2'(x) = 0$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q04-opt0"
      ],
      "explanation": "A non-zero Wronskian everywhere on the interval guarantees linear independence, meaning $c_1 y_1 + c_2 y_2$ can satisfy any arbitrary initial conditions.",
      "hint": "Linear independence requires non-vanishing Wronskian."
    },
    {
      "id": "W2-T3-Q05",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Quality Factor Q",
      "type": "single_select",
      "question": "For an underdamped oscillator with natural frequency $\\omega_0$ and damping ratio $\\zeta$, the Quality Factor $Q$ is defined as:",
      "options": [
        {
          "id": "W2-T3-Q05-opt0",
          "text": "$Q = \\frac{1}{2\\zeta}$"
        },
        {
          "id": "W2-T3-Q05-opt1",
          "text": "$Q = 2\\zeta$"
        },
        {
          "id": "W2-T3-Q05-opt2",
          "text": "$Q = \\zeta^2$"
        },
        {
          "id": "W2-T3-Q05-opt3",
          "text": "$Q = \\frac{\\zeta}{\\omega_0}$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q05-opt0"
      ],
      "explanation": "The quality factor $Q$ measures the sharpness of resonance and energy retention: $Q = \\frac{\\omega_0}{2\\gamma} = \\frac{1}{2\\zeta}$.",
      "hint": "Higher $Q$ corresponds to lower damping $\\zeta$ and more sustained oscillations."
    },
    {
      "id": "W2-T3-Q06",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Amplitude of Forced Oscillation",
      "type": "single_select",
      "question": "For $\\ddot{x} + \\omega_0^2 x = F_0 \\cos(\\omega t)$ with $\\omega \\neq \\omega_0$, what is the steady-state amplitude?",
      "options": [
        {
          "id": "W2-T3-Q06-opt0",
          "text": "$A = \\frac{F_0}{|\\omega_0^2 - \\omega^2|}$"
        },
        {
          "id": "W2-T3-Q06-opt1",
          "text": "$A = \\frac{F_0}{\\omega_0 + \\omega}$"
        },
        {
          "id": "W2-T3-Q06-opt2",
          "text": "$A = \\frac{F_0}{\\omega_0 \\omega}$"
        },
        {
          "id": "W2-T3-Q06-opt3",
          "text": "$A = F_0(\\omega_0^2 - \\omega^2)$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q06-opt0"
      ],
      "explanation": "Trial solution $x_p = A\\cos(\\omega t)$ gives $(-\\omega^2 + \\omega_0^2)A = F_0 \\implies A = \\frac{F_0}{\\omega_0^2 - \\omega^2}$. As $\\omega \\to \\omega_0$, the amplitude grows without bound (resonance).",
      "hint": "Substitute $x = A\\cos\\omega t$ and solve for $A$."
    },
    {
      "id": "W2-T3-Q07",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Beats Phenomenon",
      "type": "single_select",
      "question": "When an undamped system is driven by a sinusoidal force with frequency $\\omega$ very close to its natural frequency $\\omega_0$, what phenomenon is observed?",
      "options": [
        {
          "id": "W2-T3-Q07-opt0",
          "text": "Beats (periodic amplitude modulation)"
        },
        {
          "id": "W2-T3-Q07-opt1",
          "text": "Chaos"
        },
        {
          "id": "W2-T3-Q07-opt2",
          "text": "Exponential blow-up without oscillation"
        },
        {
          "id": "W2-T3-Q07-opt3",
          "text": "Pure constant amplitude vibration"
        }
      ],
      "correct_indices": [
        "W2-T3-Q07-opt0"
      ],
      "explanation": "The superposition of two close frequencies $\\cos(\\omega_0 t) - \\cos(\\omega t) = 2\\sin\\left(\\frac{\\omega - \\omega_0}{2}t\\right)\\sin\\left(\\frac{\\omega + \\omega_0}{2}t\\right)$ produces a rapid oscillation modulated by a slow beat envelope.",
      "hint": "Think of the acoustic pulsing sound produced when two tuning forks of nearly identical pitch are struck."
    },
    {
      "id": "W2-T3-Q08",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Logarithmic Decrement",
      "type": "single_select",
      "question": "In an underdamped vibration with period $T_d$, the logarithmic decrement $\\delta = \\ln\\left(\\frac{x(t)}{x(t+T_d)}\\right)$ is equal to:",
      "options": [
        {
          "id": "W2-T3-Q08-opt0",
          "text": "$\\delta = \\frac{2\\pi \\zeta}{\\sqrt{1-\\zeta^2}}$"
        },
        {
          "id": "W2-T3-Q08-opt1",
          "text": "$\\delta = 2\\pi \\zeta$"
        },
        {
          "id": "W2-T3-Q08-opt2",
          "text": "$\\delta = \\zeta \\omega_n$"
        },
        {
          "id": "W2-T3-Q08-opt3",
          "text": "$\\delta = \\frac{\\pi}{\\zeta}$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q08-opt0"
      ],
      "explanation": "The ratio of successive peak amplitudes is $e^{\\zeta \\omega_n T_d}$. Since $T_d = \\frac{2\\pi}{\\omega_d} = \\frac{2\\pi}{\\omega_n \\sqrt{1-\\zeta^2}}$, taking the logarithm yields $\\delta = \\frac{2\\pi \\zeta}{\\sqrt{1-\\zeta^2}}$.",
      "hint": "Relate the decay per cycle to the damping ratio $\\zeta$."
    },
    {
      "id": "W2-T3-Q09",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Reduction of Order Technique",
      "type": "single_select",
      "question": "If one solution $y_1(x)$ to $y'' + P(x)y' + Q(x)y = 0$ is known, Reduction of Order sets $y_2(x) = v(x)y_1(x)$. What order ODE does $v'(x)$ satisfy?",
      "options": [
        {
          "id": "W2-T3-Q09-opt0",
          "text": "First-order linear ODE"
        },
        {
          "id": "W2-T3-Q09-opt1",
          "text": "Second-order ODE"
        },
        {
          "id": "W2-T3-Q09-opt2",
          "text": "Algebraic equation"
        },
        {
          "id": "W2-T3-Q09-opt3",
          "text": "Non-linear Riccati equation"
        }
      ],
      "correct_indices": [
        "W2-T3-Q09-opt0"
      ],
      "explanation": "Substituting $y_2 = v y_1$ cancels the $v$ term because $L[y_1] = 0$. Defining $w = v'$ results in a first-order separable linear ODE for $w(x)$.",
      "hint": "The substitution reduces a second-order ODE to a first-order equation for $w = v'$."
    },
    {
      "id": "W2-T3-Q10",
      "week": 2,
      "tier": "nice_to_know",
      "topic": "Wronskian of Sine and Cosine",
      "type": "single_select",
      "question": "What is the Wronskian $W(\\cos(\\omega x), \\sin(\\omega x))$?",
      "options": [
        {
          "id": "W2-T3-Q10-opt0",
          "text": "$\\omega$"
        },
        {
          "id": "W2-T3-Q10-opt1",
          "text": "$1$"
        },
        {
          "id": "W2-T3-Q10-opt2",
          "text": "$\\omega^2$"
        },
        {
          "id": "W2-T3-Q10-opt3",
          "text": "$\\cos^2(\\omega x) - \\sin^2(\\omega x)$"
        }
      ],
      "correct_indices": [
        "W2-T3-Q10-opt0"
      ],
      "explanation": "$W = \\cos(\\omega x)[\\omega\\cos(\\omega x)] - [-\\omega\\sin(\\omega x)]\\sin(\\omega x) = \\omega(\\cos^2\\omega x + \\sin^2\\omega x) = \\omega(1) = \\omega$.",
      "hint": "Use $\\cos^2\\theta + \\sin^2\\theta = 1$ after calculating the determinant."
    },
    {
      "id": "W2-T4-Q01",
      "week": 2,
      "tier": "extra",
      "topic": "Cauchy-Euler Equation",
      "type": "single_select",
      "question": "What is the general solution of the Cauchy-Euler ODE $x^2 y'' - 2x y' + 2y = 0$ for $x > 0$?",
      "options": [
        {
          "id": "W2-T4-Q01-opt0",
          "text": "$y(x) = C_1 x + C_2 x^2$"
        },
        {
          "id": "W2-T4-Q01-opt1",
          "text": "$y(x) = C_1 x^{-1} + C_2 x^2$"
        },
        {
          "id": "W2-T4-Q01-opt2",
          "text": "$y(x) = (C_1 + C_2 \\ln x)x$"
        },
        {
          "id": "W2-T4-Q01-opt3",
          "text": "$y(x) = C_1 \\cos(\\ln x) + C_2 \\sin(\\ln x)$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q01-opt0"
      ],
      "explanation": "Substitute $y = x^m \\implies y' = m x^{m-1}, y'' = m(m-1)x^{m-2}$. The indicial equation is $m(m-1) - 2m + 2 = m^2 - 3m + 2 = (m-1)(m-2) = 0$. The roots are $m_1 = 1, m_2 = 2$, so $y(x) = C_1 x + C_2 x^2$.",
      "hint": "Use the trial solution $y = x^m$ to find the indicial equation in $m$."
    },
    {
      "id": "W2-T4-Q02",
      "week": 2,
      "tier": "extra",
      "topic": "Abel's Theorem on the Wronskian",
      "type": "single_select",
      "question": "According to Abel's Theorem, for $y'' + P(x)y' + Q(x)y = 0$, how does the Wronskian $W(x)$ depend on $P(x)$?",
      "options": [
        {
          "id": "W2-T4-Q02-opt0",
          "text": "$W(x) = W(x_0) \\exp\\left(-\\int_{x_0}^x P(t)\\,dt\\right)$"
        },
        {
          "id": "W2-T4-Q02-opt1",
          "text": "$W(x) = W(x_0) \\exp\\left(\\int_{x_0}^x P(t)\\,dt\\right)$"
        },
        {
          "id": "W2-T4-Q02-opt2",
          "text": "$W(x) = W(x_0) - \\int_{x_0}^x P(t)\\,dt$"
        },
        {
          "id": "W2-T4-Q02-opt3",
          "text": "$W(x) = W(x_0) \\exp\\left(-\\int_{x_0}^x Q(t)\\,dt\\right)$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q02-opt0"
      ],
      "explanation": "Differentiating the Wronskian gives $W' = y_1 y_2'' - y_1'' y_2 = -P(x)(y_1 y_2' - y_1' y_2) = -P(x)W$. Integrating gives Abel's formula: $W(x) = C e^{-\\int P(x)\\,dx}$.",
      "hint": "Recall that $W' + P(x)W = 0$, which is a separable first-order differential equation in $W$."
    },
    {
      "id": "W2-T4-Q03",
      "week": 2,
      "tier": "extra",
      "topic": "Cauchy-Euler with Repeated Roots",
      "type": "single_select",
      "question": "What is the general solution of $x^2 y'' + 3x y' + y = 0$ for $x > 0$?",
      "options": [
        {
          "id": "W2-T4-Q03-opt0",
          "text": "$y(x) = (C_1 + C_2 \\ln x)x^{-1}$"
        },
        {
          "id": "W2-T4-Q03-opt1",
          "text": "$y(x) = C_1 x^{-1} + C_2 x$"
        },
        {
          "id": "W2-T4-Q03-opt2",
          "text": "$y(x) = (C_1 + C_2 x)x^{-1}$"
        },
        {
          "id": "W2-T4-Q03-opt3",
          "text": "$y(x) = C_1 \\cos(\\ln x) + C_2 \\sin(\\ln x)$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q03-opt0"
      ],
      "explanation": "Indicial equation: $m(m-1) + 3m + 1 = m^2 + 2m + 1 = (m+1)^2 = 0$. For a repeated root $m=-1$, the independent solutions are $x^{-1}$ and $x^{-1}\\ln x$. Thus $y = (C_1 + C_2 \\ln x)x^{-1}$.",
      "hint": "For Cauchy-Euler equations with repeated root $m$, multiply the second solution by $\\ln x$."
    },
    {
      "id": "W2-T4-Q04",
      "week": 2,
      "tier": "extra",
      "topic": "Cauchy-Euler with Complex Roots",
      "type": "single_select",
      "question": "What is the general solution of $x^2 y'' + x y' + 4y = 0$ for $x > 0$?",
      "options": [
        {
          "id": "W2-T4-Q04-opt0",
          "text": "$y(x) = C_1 \\cos(2\\ln x) + C_2 \\sin(2\\ln x)$"
        },
        {
          "id": "W2-T4-Q04-opt1",
          "text": "$y(x) = C_1 \\cos(2x) + C_2 \\sin(2x)$"
        },
        {
          "id": "W2-T4-Q04-opt2",
          "text": "$y(x) = x(C_1 \\cos 2x + C_2 \\sin 2x)$"
        },
        {
          "id": "W2-T4-Q04-opt3",
          "text": "$y(x) = C_1 x^2 + C_2 x^{-2}$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q04-opt0"
      ],
      "explanation": "Indicial equation: $m(m-1) + m + 4 = m^2 + 4 = 0 \\implies m = \\pm 2i$. Since $x^{2i} = e^{2i\\ln x} = \\cos(2\\ln x) + i\\sin(2\\ln x)$, the real general solution is $C_1 \\cos(2\\ln x) + C_2 \\sin(2\\ln x)$.",
      "hint": "Complex powers are expanded via $x^{i\\beta} = e^{i\\beta \\ln x}$."
    },
    {
      "id": "W2-T4-Q05",
      "week": 2,
      "tier": "extra",
      "topic": "Third-Order Constant Coefficient ODE",
      "type": "single_select",
      "question": "What is the general solution of $y''' - 3y'' + 3y' - y = 0$?",
      "options": [
        {
          "id": "W2-T4-Q05-opt0",
          "text": "$y(x) = (C_1 + C_2 x + C_3 x^2)e^x$"
        },
        {
          "id": "W2-T4-Q05-opt1",
          "text": "$y(x) = C_1 e^x + C_2 e^{-x} + C_3 e^{2x}$"
        },
        {
          "id": "W2-T4-Q05-opt2",
          "text": "$y(x) = (C_1 + C_2 x)e^x + C_3$"
        },
        {
          "id": "W2-T4-Q05-opt3",
          "text": "$y(x) = C_1 e^x + C_2 x e^x$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q05-opt0"
      ],
      "explanation": "The auxiliary equation is $r^3 - 3r^2 + 3r - 1 = (r-1)^3 = 0$. For a triple root $r=1$, the independent solutions are $e^x, x e^x, x^2 e^x$, so $y = (C_1 + C_2 x + C_3 x^2)e^x$.",
      "hint": "A root of multiplicity 3 generates solutions $e^{rx}, x e^{rx}, x^2 e^{rx}$."
    },
    {
      "id": "W2-T4-Q06",
      "week": 2,
      "tier": "extra",
      "topic": "Green's Function for 2nd-Order BVP",
      "type": "single_select",
      "question": "For $y'' = f(x)$ with boundary conditions $y(0) = 0, y(1) = 0$, what is the Green's function $G(x, s)$ for $x < s$?",
      "options": [
        {
          "id": "W2-T4-Q06-opt0",
          "text": "$G(x, s) = x(s - 1)$"
        },
        {
          "id": "W2-T4-Q06-opt1",
          "text": "$G(x, s) = s(x - 1)$"
        },
        {
          "id": "W2-T4-Q06-opt2",
          "text": "$G(x, s) = x - s$"
        },
        {
          "id": "W2-T4-Q06-opt3",
          "text": "$G(x, s) = x s$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q06-opt0"
      ],
      "explanation": "For $x < s$, $G(x,s) = x(s-1)$ and for $x > s$, $G(x,s) = s(x-1)$. This satisfies $G(0,s)=0, G(1,s)=0$, continuity at $x=s$, and jump condition $\\frac{\\partial G}{\\partial x}\\Big|_{s^+} - \\frac{\\partial G}{\\partial x}\\Big|_{s^-} = 1$.",
      "hint": "The Green's function is symmetric and vanishes at both boundary endpoints $x=0$ and $x=1$."
    },
    {
      "id": "W2-T4-Q07",
      "week": 2,
      "tier": "extra",
      "topic": "Sturm-Liouville Form",
      "type": "single_select",
      "question": "A self-adjoint regular Sturm-Liouville differential operator has the canonical form:",
      "options": [
        {
          "id": "W2-T4-Q07-opt0",
          "text": "$\\frac{d}{dx}\\left[p(x)\\frac{dy}{dx}\\right] + q(x)y + \\lambda w(x)y = 0$"
        },
        {
          "id": "W2-T4-Q07-opt1",
          "text": "$y'' + p(x)y' + q(x)y = \\lambda y$"
        },
        {
          "id": "W2-T4-Q07-opt2",
          "text": "$x^2 y'' + x y' + y = 0$"
        },
        {
          "id": "W2-T4-Q07-opt3",
          "text": "$\\frac{d^2}{dx^2}[p(x)y] = \\lambda y$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q07-opt0"
      ],
      "explanation": "The standard Sturm-Liouville form is $(p(x)y')' + q(x)y + \\lambda w(x)y = 0$, with weight function $w(x) > 0$. Eigenfunctions corresponding to distinct eigenvalues $\\lambda_n$ are orthogonal with respect to $w(x)$.",
      "hint": "Notice the derivative wrapping $p(x)y'$: $\\frac{d}{dx}[p(x)y']$."
    },
    {
      "id": "W2-T4-Q08",
      "week": 2,
      "tier": "extra",
      "topic": "Airy Differential Equation",
      "type": "single_select",
      "question": "The differential equation $y'' - xy = 0$ is known as:",
      "options": [
        {
          "id": "W2-T4-Q08-opt0",
          "text": "Airy's Equation"
        },
        {
          "id": "W2-T4-Q08-opt1",
          "text": "Bessel's Equation"
        },
        {
          "id": "W2-T4-Q08-opt2",
          "text": "Legendre's Equation"
        },
        {
          "id": "W2-T4-Q08-opt3",
          "text": "Hermite's Equation"
        }
      ],
      "correct_indices": [
        "W2-T4-Q08-opt0"
      ],
      "explanation": "The equation $y'' - xy = 0$ is Airy's equation, whose linearly independent solutions are the Airy functions $\\text{Ai}(x)$ and $\\text{Bi}(x)$, widely used in quantum mechanics and wave optics.",
      "hint": "Named after the British Astronomer Royal George Biddell Airy."
    },
    {
      "id": "W2-T4-Q09",
      "week": 2,
      "tier": "extra",
      "topic": "Variation of Parameters for General RHS",
      "type": "single_select",
      "question": "For $y'' + y = \\sec x$, find a particular solution using Variation of Parameters ($y_1 = \\cos x, y_2 = \\sin x, W = 1$).",
      "options": [
        {
          "id": "W2-T4-Q09-opt0",
          "text": "$y_p(x) = \\cos(x)\\ln|\\cos x| + x\\sin x$"
        },
        {
          "id": "W2-T4-Q09-opt1",
          "text": "$y_p(x) = \\sin(x)\\ln|\\cos x| - x\\cos x$"
        },
        {
          "id": "W2-T4-Q09-opt2",
          "text": "$y_p(x) = \\tan x$"
        },
        {
          "id": "W2-T4-Q09-opt3",
          "text": "$y_p(x) = x\\sec x$"
        }
      ],
      "correct_indices": [
        "W2-T4-Q09-opt0"
      ],
      "explanation": "$u_1 = -\\int \\sin x \\sec x\\,dx = -\\int \\tan x\\,dx = \\ln|\\cos x|$. $u_2 = \\int \\cos x \\sec x\\,dx = \\int 1\\,dx = x$. Thus $y_p = u_1 y_1 + u_2 y_2 = \\cos(x)\\ln|\\cos x| + x\\sin x$.",
      "hint": "Compute $u_1 = -\\int \\tan x\\,dx$ and $u_2 = \\int 1\\,dx$."
    },
    {
      "id": "W2-T4-Q10",
      "week": 2,
      "tier": "extra",
      "topic": "Nonlinear Pendulum Small-Angle Approximation",
      "type": "single_select",
      "question": "The exact pendulum equation is $\\ddot{\\theta} + \\frac{g}{L}\\sin\\theta = 0$. For small oscillations, $\\sin\\theta \\approx \\theta - \\frac{\\theta^3}{6}$. Keeping the cubic term produces which famous non-linear equation?",
      "options": [
        {
          "id": "W2-T4-Q10-opt0",
          "text": "The Duffing Equation"
        },
        {
          "id": "W2-T4-Q10-opt1",
          "text": "The Van der Pol Equation"
        },
        {
          "id": "W2-T4-Q10-opt2",
          "text": "The Mathieu Equation"
        },
        {
          "id": "W2-T4-Q10-opt3",
          "text": "The Korteweg-de Vries Equation"
        }
      ],
      "correct_indices": [
        "W2-T4-Q10-opt0"
      ],
      "explanation": "Approximating $\\sin\\theta \\approx \\theta - \\frac{1}{6}\\theta^3$ gives $\\ddot{\\theta} + \\omega_0^2 \\theta - \\beta \\theta^3 = 0$, which is the unforced Duffing equation modeling a non-linear softening spring.",
      "hint": "Duffing's equation introduces a cubic stiffness term $\\theta^3$."
    }
  ]
};
