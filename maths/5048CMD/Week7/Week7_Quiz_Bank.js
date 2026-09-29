window.QUIZ_BANK_WEEK7 = {
  "module": "5048CMD Engineering Mathematics 2",
  "week": 7,
  "title": "Week 7: PDEs I & II (Wave & Heat Equations)",
  "total_questions": 40,
  "tier_counts": {
    "core": 10,
    "should": 10,
    "nice_to_know": 10,
    "extra": 10
  },
  "questions": [
    {
      "id": "W7-T1-Q01",
      "week": 7,
      "tier": "core",
      "topic": "Classification of 2nd-Order PDEs",
      "type": "single_select",
      "question": "For the linear PDE $A u_{xx} + B u_{xy} + C u_{yy} + D u_x + E u_y + F u = G$, what condition classifies the equation as hyperbolic (like the Wave Equation)?",
      "options": [
        {
          "id": "W7-T1-Q01-opt0",
          "text": "$B^2 - 4AC > 0$"
        },
        {
          "id": "W7-T1-Q01-opt1",
          "text": "$B^2 - 4AC = 0$"
        },
        {
          "id": "W7-T1-Q01-opt2",
          "text": "$B^2 - 4AC < 0$"
        },
        {
          "id": "W7-T1-Q01-opt3",
          "text": "$A + C = 0$"
        }
      ],
      "correct_indices": [
        "W7-T1-Q01-opt0"
      ],
      "explanation": "By analogy with conic sections, the PDE discriminant $\\Delta = B^2 - 4AC$ determines the type: $\\Delta > 0$ is hyperbolic (Wave), $\\Delta = 0$ is parabolic (Heat), and $\\Delta < 0$ is elliptic (Laplace).",
      "hint": "Recall the discriminant formula $B^2 - 4AC$ from quadratic forms."
    },
    {
      "id": "W7-T1-Q02",
      "week": 7,
      "tier": "core",
      "topic": "1D Wave Equation Form",
      "type": "single_select",
      "question": "What is the standard 1D Wave Equation for a vibrating string with wave speed $c$?",
      "options": [
        {
          "id": "W7-T1-Q02-opt0",
          "text": "$\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$"
        },
        {
          "id": "W7-T1-Q02-opt1",
          "text": "$\\frac{\\partial u}{\\partial t} = c \\frac{\\partial^2 u}{\\partial x^2}$"
        },
        {
          "id": "W7-T1-Q02-opt2",
          "text": "$\\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$"
        },
        {
          "id": "W7-T1-Q02-opt3",
          "text": "$\\frac{\\partial u}{\\partial t} + c \\frac{\\partial u}{\\partial x} = 0$"
        }
      ],
      "correct_indices": [
        "W7-T1-Q02-opt0"
      ],
      "explanation": "The 1D Wave equation is second-order in both time and space: $u_{tt} = c^2 u_{xx}$, where $c = \\sqrt{T/\\rho}$ is the propagation speed.",
      "hint": "Notice that the wave equation has second derivatives with respect to BOTH time and space."
    },
    {
      "id": "W7-T1-Q03",
      "week": 7,
      "tier": "core",
      "topic": "1D Heat Equation Form",
      "type": "single_select",
      "question": "What is the 1D Heat (Diffusion) Equation for thermal diffusivity $\\alpha$?",
      "options": [
        {
          "id": "W7-T1-Q03-opt0",
          "text": "$\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$"
        },
        {
          "id": "W7-T1-Q03-opt1",
          "text": "$\\frac{\\partial^2 u}{\\partial t^2} = \\alpha^2 \\frac{\\partial^2 u}{\\partial x^2}$"
        },
        {
          "id": "W7-T1-Q03-opt2",
          "text": "$\\frac{\\partial u}{\\partial t} + \\alpha u = 0$"
        },
        {
          "id": "W7-T1-Q03-opt3",
          "text": "$\\frac{\\partial^2 u}{\\partial x^2} = \\alpha u$"
        }
      ],
      "correct_indices": [
        "W7-T1-Q03-opt0"
      ],
      "explanation": "Fourier's law of heat conduction yields the parabolic equation $u_t = \\alpha u_{xx}$, which is first-order in time and second-order in space.",
      "hint": "Heat diffusion is first-order in time (dissipative, irreversible)."
    },
    {
      "id": "W7-T1-Q04",
      "week": 7,
      "tier": "core",
      "topic": "Separation of Variables Ansatz",
      "type": "single_select",
      "question": "When applying the method of separation of variables to $u(x, t)$, what trial form is assumed?",
      "options": [
        {
          "id": "W7-T1-Q04-opt0",
          "text": "$u(x, t) = X(x) T(t)$"
        },
        {
          "id": "W7-T1-Q04-opt1",
          "text": "$u(x, t) = X(x) + T(t)$"
        },
        {
          "id": "W7-T1-Q04-opt2",
          "text": "$u(x, t) = f(x - ct) + g(x + ct)$"
        },
        {
          "id": "W7-T1-Q04-opt3",
          "text": "$u(x, t) = X(x) / T(t)$"
        }
      ],
      "correct_indices": [
        "W7-T1-Q04-opt0"
      ],
      "explanation": "Separation of variables assumes the solution can be written as a product of single-variable functions: $u(x, t) = X(x) T(t)$.",
      "hint": "Assume a product of a spatial function $X(x)$ and a temporal function $T(t)$."
    },
    {
      "id": "W7-T1-Q05",
      "week": 7,
      "tier": "core",
      "topic": "Parabolic PDE Classification",
      "type": "single_select",
      "question": "The 1D Heat equation $u_t = \\alpha u_{xx}$ is classified as:",
      "options": [
        {
          "id": "W7-T1-Q05-opt0",
          "text": "Parabolic"
        },
        {
          "id": "W7-T1-Q05-opt1",
          "text": "Hyperbolic"
        },
        {
          "id": "W7-T1-Q05-opt2",
          "text": "Elliptic"
        },
        {
          "id": "W7-T1-Q05-opt3",
          "text": "Ultra-hyperbolic"
        }
      ],
      "correct_indices": [
        "W7-T1-Q05-opt0"
      ],
      "explanation": "With $A = \\alpha, B = 0, C = 0$, the discriminant is $B^2 - 4AC = 0 - 0 = 0$, which defines a parabolic PDE.",
      "hint": "Discriminant $B^2 - 4AC = 0$ corresponds to parabolic equations."
    },
    {
      "id": "W7-T1-Q06",
      "week": 7,
      "tier": "core",
      "topic": "Dirichlet Boundary Condition",
      "type": "single_select",
      "question": "A boundary condition specifying the value of the unknown function $u(0, t) = 0$ is called a:",
      "options": [
        {
          "id": "W7-T1-Q06-opt0",
          "text": "Dirichlet boundary condition"
        },
        {
          "id": "W7-T1-Q06-opt1",
          "text": "Neumann boundary condition"
        },
        {
          "id": "W7-T1-Q06-opt2",
          "text": "Robin boundary condition"
        },
        {
          "id": "W7-T1-Q06-opt3",
          "text": "Cauchy condition"
        }
      ],
      "correct_indices": [
        "W7-T1-Q06-opt0"
      ],
      "explanation": "A Dirichlet condition specifies the value of the dependent variable $u$ directly on the boundary.",
      "hint": "Specifying the function value directly is Dirichlet."
    },
    {
      "id": "W7-T1-Q07",
      "week": 7,
      "tier": "core",
      "topic": "Neumann Boundary Condition",
      "type": "single_select",
      "question": "A boundary condition specifying the normal derivative $\\frac{\\partial u}{\\partial x}(0, t) = 0$ is called a:",
      "options": [
        {
          "id": "W7-T1-Q07-opt0",
          "text": "Neumann boundary condition"
        },
        {
          "id": "W7-T1-Q07-opt1",
          "text": "Dirichlet boundary condition"
        },
        {
          "id": "W7-T1-Q07-opt2",
          "text": "Mixed boundary condition"
        },
        {
          "id": "W7-T1-Q07-opt3",
          "text": "Periodic boundary condition"
        }
      ],
      "correct_indices": [
        "W7-T1-Q07-opt0"
      ],
      "explanation": "A Neumann condition specifies the derivative of $u$ normal to the boundary (physically representing heat flux or boundary slope).",
      "hint": "Specifying the derivative is Neumann."
    },
    {
      "id": "W7-T1-Q08",
      "week": 7,
      "tier": "core",
      "topic": "Wave Speed from Tension and Density",
      "type": "single_select",
      "question": "For a taut vibrating string with tension $T$ and linear mass density $\\rho$, what is the wave propagation speed $c$?",
      "options": [
        {
          "id": "W7-T1-Q08-opt0",
          "text": "$c = \\sqrt{\\frac{T}{\\rho}}$"
        },
        {
          "id": "W7-T1-Q08-opt1",
          "text": "$c = \\frac{T}{\\rho}$"
        },
        {
          "id": "W7-T1-Q08-opt2",
          "text": "$c = \\sqrt{\\frac{\\rho}{T}}$"
        },
        {
          "id": "W7-T1-Q08-opt3",
          "text": "$c = T \\rho$"
        }
      ],
      "correct_indices": [
        "W7-T1-Q08-opt0"
      ],
      "explanation": "From Newton's second law applied to an infinitesimal string element, the wave speed is $c = \\sqrt{T/\\rho}$.",
      "hint": "Dimensional analysis: $[T] = \\text{N} = \\text{kg}\\cdot\\text{m/s}^2$ and $[\\rho] = \\text{kg/m}$, giving $\\sqrt{\\text{m}^2/\\text{s}^2} = \\text{m/s}$."
    },
    {
      "id": "W7-T1-Q09",
      "week": 7,
      "tier": "core",
      "topic": "Separation Constant Sign",
      "type": "single_select",
      "question": "When separating $X''(x) + \\lambda X(x) = 0$ for a string fixed at $x=0$ and $x=L$, why must the separation constant $\\lambda$ be strictly positive?",
      "options": [
        {
          "id": "W7-T1-Q09-opt0",
          "text": "Because non-trivial oscillatory solutions satisfying $X(0)=0$ and $X(L)=0$ require trigonometric functions $\\sin(\\sqrt{\\lambda}x)$"
        },
        {
          "id": "W7-T1-Q09-opt1",
          "text": "Because negative values violate conservation of mass"
        },
        {
          "id": "W7-T1-Q09-opt2",
          "text": "Because $X(x)$ must be a polynomial"
        },
        {
          "id": "W7-T1-Q09-opt3",
          "text": "Because time cannot run backwards"
        }
      ],
      "correct_indices": [
        "W7-T1-Q09-opt0"
      ],
      "explanation": "For $\\lambda \\le 0$, the solutions are linear or hyperbolic functions, which can only satisfy $X(0)=0$ and $X(L)=0$ if $X(x) \\equiv 0$ (the trivial solution). Non-trivial solutions require $\\lambda > 0$.",
      "hint": "Trigonometric sine functions require $\\lambda > 0$."
    },
    {
      "id": "W7-T1-Q10",
      "week": 7,
      "tier": "core",
      "topic": "Thermal Diffusivity Units",
      "type": "single_select",
      "question": "What are the SI units of thermal diffusivity $\\alpha = \\frac{k}{\\rho c_p}$ in the heat equation $u_t = \\alpha u_{xx}$?",
      "options": [
        {
          "id": "W7-T1-Q10-opt0",
          "text": "$\\text{m}^2/\\text{s}$"
        },
        {
          "id": "W7-T1-Q10-opt1",
          "text": "$\\text{m}/\\text{s}$"
        },
        {
          "id": "W7-T1-Q10-opt2",
          "text": "$\\text{J}/\\text{s}$"
        },
        {
          "id": "W7-T1-Q10-opt3",
          "text": "$\\text{W}/(\\text{m}\\cdot\\text{K})$"
        }
      ],
      "correct_indices": [
        "W7-T1-Q10-opt0"
      ],
      "explanation": "In $u_t = \\alpha u_{xx}$, the LHS has units $\\text{K/s}$ and $u_{xx}$ has units $\\text{K/m}^2$. Thus $[\\alpha] = \\frac{\\text{K/s}}{\\text{K/m}^2} = \\text{m}^2/\\text{s}$.",
      "hint": "Equate dimensions of $\\partial u/\\partial t$ and $\\alpha \\partial^2 u/\\partial x^2$."
    },
    {
      "id": "W7-T2-Q01",
      "week": 7,
      "tier": "should",
      "topic": "D'Alembert's Formula for Wave Equation",
      "type": "single_select",
      "question": "What is D'Alembert's general solution to the infinite-string wave equation $u_{tt} = c^2 u_{xx}$ with initial position $u(x,0) = f(x)$ and initial velocity $u_t(x,0) = 0$?",
      "options": [
        {
          "id": "W7-T2-Q01-opt0",
          "text": "$u(x,t) = \\frac{1}{2}[f(x - ct) + f(x + ct)]$"
        },
        {
          "id": "W7-T2-Q01-opt1",
          "text": "$u(x,t) = f(x - ct) + f(x + ct)$"
        },
        {
          "id": "W7-T2-Q01-opt2",
          "text": "$u(x,t) = \\frac{1}{2}[f(x - ct) - f(x + ct)]$"
        },
        {
          "id": "W7-T2-Q01-opt3",
          "text": "$u(x,t) = f(x) \\cos(ct)$"
        }
      ],
      "correct_indices": [
        "W7-T2-Q01-opt0"
      ],
      "explanation": "For zero initial velocity, D'Alembert's formula simplifies to the superposition of two traveling waves of half amplitude moving in opposite directions: $u(x,t) = \\frac{1}{2}[f(x - ct) + f(x + ct)]$.",
      "hint": "The initial shape splits into two identical half-amplitude waves traveling left and right."
    },
    {
      "id": "W7-T2-Q02",
      "week": 7,
      "tier": "should",
      "topic": "Spatial Eigenvalues for Fixed Ends",
      "type": "single_select",
      "question": "For a string of length $L$ fixed at both ends ($X(0) = 0, X(L) = 0$), what are the eigenvalues $\\lambda_n$ and eigenfunctions $X_n(x)$ of $X'' + \\lambda X = 0$?",
      "options": [
        {
          "id": "W7-T2-Q02-opt0",
          "text": "$\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2$ and $X_n(x) = \\sin\\left(\\frac{n\\pi x}{L}\\right)$ for $n=1,2,3,\\dots$"
        },
        {
          "id": "W7-T2-Q02-opt1",
          "text": "$\\lambda_n = \\frac{n\\pi}{L}$ and $X_n(x) = \\cos\\left(\\frac{n\\pi x}{L}\\right)$"
        },
        {
          "id": "W7-T2-Q02-opt2",
          "text": "$\\lambda_n = n^2$ and $X_n(x) = \\sin(nx)$"
        },
        {
          "id": "W7-T2-Q02-opt3",
          "text": "$\\lambda_n = \\left(\\frac{(2n-1)\\pi}{2L}\\right)^2$ and $X_n(x) = \\sin\\left(\\frac{n\\pi x}{L}\\right)$"
        }
      ],
      "correct_indices": [
        "W7-T2-Q02-opt0"
      ],
      "explanation": "The general solution is $X(x) = A\\cos(\\sqrt{\\lambda}x) + B\\sin(\\sqrt{\\lambda}x)$. Boundary condition $X(0)=0 \\implies A=0$. Then $X(L) = B\\sin(\\sqrt{\\lambda}L) = 0 \\implies \\sqrt{\\lambda}L = n\\pi \\implies \\lambda_n = (n\\pi/L)^2$ and $X_n(x) = \\sin(n\\pi x/L)$.",
      "hint": "Apply boundary conditions $X(0)=0$ and $X(L)=0$ to find non-trivial solutions."
    },
    {
      "id": "W7-T2-Q03",
      "week": 7,
      "tier": "should",
      "topic": "Standing Wave Frequencies",
      "type": "single_select",
      "question": "What are the modal natural frequencies $\\omega_n$ (in rad/s) of a fixed string of length $L$ and wave speed $c$?",
      "options": [
        {
          "id": "W7-T2-Q03-opt0",
          "text": "$\\omega_n = \\frac{n\\pi c}{L}$ for $n=1,2,3,\\dots$"
        },
        {
          "id": "W7-T2-Q03-opt1",
          "text": "$\\omega_n = \\frac{2n\\pi c}{L}$"
        },
        {
          "id": "W7-T2-Q03-opt2",
          "text": "$\\omega_n = \\frac{n c}{L}$"
        },
        {
          "id": "W7-T2-Q03-opt3",
          "text": "$\\omega_n = \\frac{\\pi c}{n L}$"
        }
      ],
      "correct_indices": [
        "W7-T2-Q03-opt0"
      ],
      "explanation": "The time equation is $T''(t) + c^2 \\lambda_n T(t) = 0 \\implies T''(t) + \\omega_n^2 T(t) = 0$. Since $\\lambda_n = (n\\pi/L)^2$, the angular frequency is $\\omega_n = c\\sqrt{\\lambda_n} = \\frac{n\\pi c}{L}$.",
      "hint": "Multiply wave speed $c$ by $\\sqrt{\\lambda_n} = n\\pi/L$."
    },
    {
      "id": "W7-T2-Q04",
      "week": 7,
      "tier": "should",
      "topic": "Heat Equation Separation ODE for Time",
      "type": "single_select",
      "question": "In separating $u_t = \\alpha u_{xx}$ with $u = X(x)T(t)$ and $X'' + \\lambda X = 0$, what ODE governs $T(t)$?",
      "options": [
        {
          "id": "W7-T2-Q04-opt0",
          "text": "$T'(t) + \\alpha \\lambda T(t) = 0$"
        },
        {
          "id": "W7-T2-Q04-opt1",
          "text": "$T''(t) + \\alpha \\lambda T(t) = 0$"
        },
        {
          "id": "W7-T2-Q04-opt2",
          "text": "$T'(t) - \\alpha \\lambda T(t) = 0$"
        },
        {
          "id": "W7-T2-Q04-opt3",
          "text": "$T'(t) + \\alpha^2 \\lambda^2 T(t) = 0$"
        }
      ],
      "correct_indices": [
        "W7-T2-Q04-opt0"
      ],
      "explanation": "$\\frac{T'}{\\alpha T} = \\frac{X''}{X} = -\\lambda \\implies T' = -\\alpha \\lambda T \\implies T'(t) + \\alpha \\lambda T(t) = 0$.",
      "hint": "Heat diffusion has a first-order time derivative."
    },
    {
      "id": "W7-T2-Q05",
      "week": 7,
      "tier": "should",
      "topic": "Steady-State Heat Distribution",
      "type": "single_select",
      "question": "For a 1D rod on $[0, L]$ with $u(0, t) = T_1$ and $u(L, t) = T_2$ in steady state ($u_t = 0$), what is the temperature profile $u_{ss}(x)$?",
      "options": [
        {
          "id": "W7-T2-Q05-opt0",
          "text": "$u_{ss}(x) = T_1 + \\frac{T_2 - T_1}{L}x$ (linear profile)"
        },
        {
          "id": "W7-T2-Q05-opt1",
          "text": "$u_{ss}(x) = \\frac{T_1 + T_2}{2}$"
        },
        {
          "id": "W7-T2-Q05-opt2",
          "text": "$u_{ss}(x) = T_1 e^{-x/L} + T_2$"
        },
        {
          "id": "W7-T2-Q05-opt3",
          "text": "$u_{ss}(x) = T_1 + (T_2 - T_1)\\frac{x^2}{L^2}$"
        }
      ],
      "correct_indices": [
        "W7-T2-Q05-opt0"
      ],
      "explanation": "In steady state, $\\alpha u_{xx} = 0 \\implies u(x) = C_1 x + C_2$. Applying $u(0)=T_1 \\implies C_2 = T_1$. $u(L)=T_2 \\implies C_1 L + T_1 = T_2 \\implies C_1 = \\frac{T_2 - T_1}{L}$. This is a straight line.",
      "hint": "Integrate $u'' = 0$ twice to get a linear function."
    },
    {
      "id": "W7-T2-Q06",
      "week": 7,
      "tier": "should",
      "topic": "Single Mode Initial Condition for Wave",
      "type": "single_select",
      "question": "A string fixed at $x=0$ and $x=L$ is released from rest with initial shape $u(x, 0) = 5\\sin\\left(\\frac{3\\pi x}{L}\\right)$. What is $u(x, t)$?",
      "options": [
        {
          "id": "W7-T2-Q06-opt0",
          "text": "$u(x, t) = 5\\sin\\left(\\frac{3\\pi x}{L}\\right)\\cos\\left(\\frac{3\\pi c t}{L}\\right)$"
        },
        {
          "id": "W7-T2-Q06-opt1",
          "text": "$u(x, t) = 5\\sin\\left(\\frac{3\\pi x}{L}\\right)\\sin\\left(\\frac{3\\pi c t}{L}\\right)$"
        },
        {
          "id": "W7-T2-Q06-opt2",
          "text": "$u(x, t) = 5\\sin\\left(\\frac{3\\pi(x - ct)}{L}\\right)$"
        },
        {
          "id": "W7-T2-Q06-opt3",
          "text": "$u(x, t) = 5\\cos\\left(\\frac{3\\pi c t}{L}\\right)$"
        }
      ],
      "correct_indices": [
        "W7-T2-Q06-opt0"
      ],
      "explanation": "Since the initial position matches purely the $n=3$ mode and velocity is zero, only the $n=3$ standing wave is excited: $u(x,t) = 5\\sin(3\\pi x/L)\\cos(3\\pi ct/L)$.",
      "hint": "A pure eigenfunction initial condition excites only that single harmonic mode."
    },
    {
      "id": "W7-T2-Q07",
      "week": 7,
      "tier": "should",
      "topic": "Single Mode Initial Condition for Heat",
      "type": "single_select",
      "question": "A rod of length $L$ with ends held at $0^\\circ\\text{C}$ has initial temperature $u(x, 0) = 8\\sin\\left(\\frac{\\pi x}{L}\\right)$. What is $u(x, t)$?",
      "options": [
        {
          "id": "W7-T2-Q07-opt0",
          "text": "$u(x, t) = 8\\sin\\left(\\frac{\\pi x}{L}\\right)e^{-\\alpha(\\pi/L)^2 t}$"
        },
        {
          "id": "W7-T2-Q07-opt1",
          "text": "$u(x, t) = 8\\sin\\left(\\frac{\\pi x}{L}\\right)e^{-\\alpha t}$"
        },
        {
          "id": "W7-T2-Q07-opt2",
          "text": "$u(x, t) = 8\\cos\\left(\\frac{\\pi x}{L}\\right)e^{-\\alpha(\\pi/L)^2 t}$"
        },
        {
          "id": "W7-T2-Q07-opt3",
          "text": "$u(x, t) = 8e^{-\\alpha(\\pi/L)^2 t}$"
        }
      ],
      "correct_indices": [
        "W7-T2-Q07-opt0"
      ],
      "explanation": "The initial distribution is already the fundamental eigenmode $n=1$. The temporal factor decays as $e^{-\\alpha(n\\pi/L)^2 t} = e^{-\\alpha(\\pi/L)^2 t}$. Thus $u(x,t) = 8\\sin(\\pi x/L)e^{-\\alpha(\\pi/L)^2 t}$.",
      "hint": "Multiply the spatial mode by its exponential decay factor."
    },
    {
      "id": "W7-T2-Q08",
      "week": 7,
      "tier": "should",
      "topic": "Wave Characteristics Lines",
      "type": "single_select",
      "question": "The characteristics of the wave equation $u_{tt} - c^2 u_{xx} = 0$ in the $(x, t)$ plane are the lines:",
      "options": [
        {
          "id": "W7-T2-Q08-opt0",
          "text": "$x - ct = C_1$ and $x + ct = C_2$"
        },
        {
          "id": "W7-T2-Q08-opt1",
          "text": "$x - c^2 t = C_1$"
        },
        {
          "id": "W7-T2-Q08-opt2",
          "text": "$x^2 + c^2 t^2 = C$"
        },
        {
          "id": "W7-T2-Q08-opt3",
          "text": "$t = C x$"
        }
      ],
      "correct_indices": [
        "W7-T2-Q08-opt0"
      ],
      "explanation": "Factoring the operator $(\\partial_t - c\\partial_x)(\\partial_t + c\\partial_x)u = 0$ reveals characteristics along curves where $dx/dt = \\pm c$, which are straight lines $x \\mp ct = \\text{const}$.",
      "hint": "Characteristics have slope $dt/dx = \\pm 1/c$."
    },
    {
      "id": "W7-T2-Q09",
      "week": 7,
      "tier": "should",
      "topic": "Domain of Dependence",
      "type": "single_select",
      "question": "For the wave equation, the solution at point $(x_0, t_0)$ depends only on the initial data within the interval:",
      "options": [
        {
          "id": "W7-T2-Q09-opt0",
          "text": "$[x_0 - c t_0, x_0 + c t_0]$"
        },
        {
          "id": "W7-T2-Q09-opt1",
          "text": "$[0, x_0]$"
        },
        {
          "id": "W7-T2-Q09-opt2",
          "text": "$[-\\infty, \\infty]$"
        },
        {
          "id": "W7-T2-Q09-opt3",
          "text": "$[x_0 - c, x_0 + c]$"
        }
      ],
      "correct_indices": [
        "W7-T2-Q09-opt0"
      ],
      "explanation": "By D'Alembert's formula, characteristics tracing back from $(x_0, t_0)$ hit the $t=0$ axis at $x_0 - ct_0$ and $x_0 + ct_0$, defining the domain of dependence $[x_0 - ct_0, x_0 + ct_0]$.",
      "hint": "Signals travel at speed $c$, so in time $t_0$ they can travel a distance of $c t_0$ left or right."
    },
    {
      "id": "W7-T2-Q10",
      "week": 7,
      "tier": "should",
      "topic": "Insulated Heat Boundary Eigenmodes",
      "type": "single_select",
      "question": "For a rod with both ends insulated ($u_x(0, t) = 0, u_x(L, t) = 0$), what are the spatial eigenfunctions $X_n(x)$?",
      "options": [
        {
          "id": "W7-T2-Q10-opt0",
          "text": "$X_n(x) = \\cos\\left(\\frac{n\\pi x}{L}\\right)$ for $n=0,1,2,\\dots$"
        },
        {
          "id": "W7-T2-Q10-opt1",
          "text": "$X_n(x) = \\sin\\left(\\frac{n\\pi x}{L}\\right)$"
        },
        {
          "id": "W7-T2-Q10-opt2",
          "text": "$X_n(x) = \\cos\\left(\\frac{(2n-1)\\pi x}{2L}\\right)$"
        },
        {
          "id": "W7-T2-Q10-opt3",
          "text": "$X_n(x) = e^{-n x/L}$"
        }
      ],
      "correct_indices": [
        "W7-T2-Q10-opt0"
      ],
      "explanation": "$X'(0) = 0 \\implies B = 0$ in $X(x) = A\\cos(\\sqrt{\\lambda}x) + B\\sin(\\sqrt{\\lambda}x)$. Then $X'(L) = -A\\sqrt{\\lambda}\\sin(\\sqrt{\\lambda}L) = 0 \\implies \\sqrt{\\lambda}L = n\\pi$, giving cosine modes $\\cos(n\\pi x/L)$ including $n=0$ (constant mode).",
      "hint": "Zero derivative at $x=0$ selects the cosine function."
    },
    {
      "id": "W7-T3-Q01",
      "week": 7,
      "tier": "nice_to_know",
      "topic": "Time Decay in the Heat Equation",
      "type": "single_select",
      "question": "In the heat equation solution $u(x,t) = \\sum_{n=1}^\\infty B_n \\sin\\left(\\frac{n\\pi x}{L}\\right) e^{-k_n t}$, how does the temporal decay rate $k_n$ depend on $n$?",
      "options": [
        {
          "id": "W7-T3-Q01-opt0",
          "text": "$k_n = \\alpha \\left(\\frac{n\\pi}{L}\\right)^2$"
        },
        {
          "id": "W7-T3-Q01-opt1",
          "text": "$k_n = \\alpha \\frac{n\\pi}{L}$"
        },
        {
          "id": "W7-T3-Q01-opt2",
          "text": "$k_n = \\alpha^2 \\frac{n\\pi}{L}$"
        },
        {
          "id": "W7-T3-Q01-opt3",
          "text": "$k_n = \\frac{\\alpha L}{n\\pi}$"
        }
      ],
      "correct_indices": [
        "W7-T3-Q01-opt0"
      ],
      "explanation": "Substituting $u = X(x)T(t)$ into $u_t = \\alpha u_{xx}$ gives $\\frac{T'}{\\alpha T} = \\frac{X''}{X} = -\\lambda_n = -(n\\pi/L)^2$. Thus $T' = -\\alpha(n\\pi/L)^2 T \\implies T_n(t) = e^{-k_n t}$ where $k_n = \\alpha(n\\pi/L)^2$. High harmonics decay much faster.",
      "hint": "Notice that the decay rate is proportional to $n^2$."
    },
    {
      "id": "W7-T3-Q02",
      "week": 7,
      "tier": "nice_to_know",
      "topic": "Insulated Boundary Conditions",
      "type": "single_select",
      "question": "What mathematical boundary conditions represent perfectly insulated ends at $x=0$ and $x=L$ for a 1D heat conducting rod?",
      "options": [
        {
          "id": "W7-T3-Q02-opt0",
          "text": "$\\frac{\\partial u}{\\partial x}(0, t) = 0$ and $\\frac{\\partial u}{\\partial x}(L, t) = 0$ (Neumann conditions)"
        },
        {
          "id": "W7-T3-Q02-opt1",
          "text": "$u(0, t) = 0$ and $u(L, t) = 0$ (Dirichlet conditions)"
        },
        {
          "id": "W7-T3-Q02-opt2",
          "text": "$\\frac{\\partial u}{\\partial t}(0, t) = 0$ and $\\frac{\\partial u}{\\partial t}(L, t) = 0$"
        },
        {
          "id": "W7-T3-Q02-opt3",
          "text": "$u(0, t) = 100$ and $u(L, t) = 0$"
        }
      ],
      "correct_indices": [
        "W7-T3-Q02-opt0"
      ],
      "explanation": "By Fourier's law, heat flux is $q = -K \\frac{\\partial u}{\\partial x}$. Insulation means zero heat flux across the boundaries, so the spatial gradient $\\frac{\\partial u}{\\partial x}$ must vanish at the ends.",
      "hint": "Zero heat flux means zero spatial temperature gradient at the boundaries."
    },
    {
      "id": "W7-T3-Q03",
      "week": 7,
      "tier": "nice_to_know",
      "topic": "Conservation of Total Thermal Energy",
      "type": "single_select",
      "question": "For a rod with both ends insulated ($u_x(0,t)=0, u_x(L,t)=0$), what happens to the total thermal energy $E(t) = \\int_0^L u(x,t)\\,dx$ over time?",
      "options": [
        {
          "id": "W7-T3-Q03-opt0",
          "text": "$E(t)$ is strictly constant: $\\frac{dE}{dt} = 0$"
        },
        {
          "id": "W7-T3-Q03-opt1",
          "text": "$E(t)$ decays exponentially to zero"
        },
        {
          "id": "W7-T3-Q03-opt2",
          "text": "$E(t)$ grows linearly"
        },
        {
          "id": "W7-T3-Q03-opt3",
          "text": "$E(t)$ oscillates indefinitely"
        }
      ],
      "correct_indices": [
        "W7-T3-Q03-opt0"
      ],
      "explanation": "$\\frac{d}{dt}\\int_0^L u\\,dx = \\int_0^L u_t\\,dx = \\alpha \\int_0^L u_{xx}\\,dx = \\alpha [u_x(L,t) - u_x(0,t)] = \\alpha(0 - 0) = 0$. Thus total heat is perfectly conserved.",
      "hint": "No heat can enter or leave an insulated system."
    },
    {
      "id": "W7-T3-Q04",
      "week": 7,
      "tier": "nice_to_know",
      "topic": "Equilibrium Temperature of Insulated Rod",
      "type": "single_select",
      "question": "For a rod of length $L$ with insulated ends and initial temperature $f(x)$, what is the final equilibrium temperature $u(x, \\infty)$ as $t \\to \\infty$?",
      "options": [
        {
          "id": "W7-T3-Q04-opt0",
          "text": "The average initial temperature: $u_\\infty = \\frac{1}{L}\\int_0^L f(x)\\,dx$"
        },
        {
          "id": "W7-T3-Q04-opt1",
          "text": "$0^\\circ\\text{C}$"
        },
        {
          "id": "W7-T3-Q04-opt2",
          "text": "The maximum initial temperature"
        },
        {
          "id": "W7-T3-Q04-opt3",
          "text": "The temperature at $x=L/2$"
        }
      ],
      "correct_indices": [
        "W7-T3-Q04-opt0"
      ],
      "explanation": "All higher spatial harmonics $n \\ge 1$ decay exponentially as $e^{-\\alpha(n\\pi/L)^2 t} \\to 0$. The only surviving mode is the constant $n=0$ mode, which equals the spatial average $\\frac{1}{L}\\int_0^L f(x)\\,dx$.",
      "hint": "Heat diffuses until temperature becomes completely uniform across the rod."
    },
    {
      "id": "W7-T3-Q05",
      "week": 7,
      "tier": "nice_to_know",
      "topic": "Inhomogeneous Boundary Condition Handling",
      "type": "single_select",
      "question": "To solve $u_t = \\alpha u_{xx}$ with non-zero Dirichlet boundary conditions $u(0, t) = T_1, u(L, t) = T_2$, what substitution is standard?",
      "options": [
        {
          "id": "W7-T3-Q05-opt0",
          "text": "$u(x, t) = v(x, t) + u_{ss}(x)$, where $u_{ss}(x)$ is the steady-state solution"
        },
        {
          "id": "W7-T3-Q05-opt1",
          "text": "$u(x, t) = v(x, t) \\cdot u_{ss}(x)$"
        },
        {
          "id": "W7-T3-Q05-opt2",
          "text": "$u(x, t) = v(x, t) - T_1$"
        },
        {
          "id": "W7-T3-Q05-opt3",
          "text": "$u(x, t) = v(x, t) + (T_1 + T_2)t$"
        }
      ],
      "correct_indices": [
        "W7-T3-Q05-opt0"
      ],
      "explanation": "Setting $u(x,t) = v(x,t) + u_{ss}(x)$ produces homogeneous boundary conditions for the transient function $v(x,t)$ ($v(0,t)=0, v(L,t)=0$), which can then be solved via standard separation of variables.",
      "hint": "Subtract the linear steady-state profile to make the boundary conditions zero."
    },
    {
      "id": "W7-T3-Q06",
      "week": 7,
      "tier": "nice_to_know",
      "topic": "Energy Conservation in the Wave Equation",
      "type": "single_select",
      "question": "The total mechanical energy of a vibrating string of length $L$ with fixed ends is $E = \\frac{1}{2}\\int_0^L [\\rho u_t^2 + T u_x^2]\\,dx$. How does $E$ evolve in time?",
      "options": [
        {
          "id": "W7-T3-Q06-opt0",
          "text": "$\\frac{dE}{dt} = 0$ (total energy is strictly conserved)"
        },
        {
          "id": "W7-T3-Q06-opt1",
          "text": "$E(t)$ decays exponentially"
        },
        {
          "id": "W7-T3-Q06-opt2",
          "text": "$E(t)$ increases linearly with time"
        },
        {
          "id": "W7-T3-Q06-opt3",
          "text": "$E(t)$ oscillates at frequency $2c$"
        }
      ],
      "correct_indices": [
        "W7-T3-Q06-opt0"
      ],
      "explanation": "Differentiating under the integral and using $u_{tt} = c^2 u_{xx}$ with integration by parts and fixed boundary conditions ($u_t=0$ at ends) shows $\\frac{dE}{dt} = 0$. Total kinetic plus potential energy is conserved.",
      "hint": "Without damping, wave motion conserves mechanical energy."
    },
    {
      "id": "W7-T3-Q07",
      "week": 7,
      "tier": "nice_to_know",
      "topic": "Half-Open Organ Pipe Boundary Conditions",
      "type": "single_select",
      "question": "For an organ pipe of length $L$ closed at $x=0$ ($u(0,t)=0$) and open at $x=L$ ($u_x(L,t)=0$), what are the natural frequencies?",
      "options": [
        {
          "id": "W7-T3-Q07-opt0",
          "text": "$\\omega_n = \\frac{(2n-1)\\pi c}{2L}$ for $n=1,2,3,\\dots$"
        },
        {
          "id": "W7-T3-Q07-opt1",
          "text": "$\\omega_n = \\frac{n\\pi c}{L}$"
        },
        {
          "id": "W7-T3-Q07-opt2",
          "text": "$\\omega_n = \\frac{n\\pi c}{2L}$"
        },
        {
          "id": "W7-T3-Q07-opt3",
          "text": "$\\omega_n = \\frac{(2n-1)\\pi c}{L}$"
        }
      ],
      "correct_indices": [
        "W7-T3-Q07-opt0"
      ],
      "explanation": "$X(0)=0 \\implies X(x) = B\\sin(\\sqrt{\\lambda}x)$. Then $X'(L) = B\\sqrt{\\lambda}\\cos(\\sqrt{\\lambda}L) = 0 \\implies \\sqrt{\\lambda}L = \\frac{(2n-1)\\pi}{2}$. Thus $\\omega_n = c\\sqrt{\\lambda_n} = \\frac{(2n-1)\\pi c}{2L}$ (quarter-wavelength harmonics).",
      "hint": "The open end forces an acoustic pressure node (zero derivative)."
    },
    {
      "id": "W7-T3-Q08",
      "week": 7,
      "tier": "nice_to_know",
      "topic": "Fundamental Frequency Tuning",
      "type": "single_select",
      "question": "How does doubling the tension $T$ of a guitar string affect its fundamental pitch frequency $f_1$?",
      "options": [
        {
          "id": "W7-T3-Q08-opt0",
          "text": "It increases by a factor of $\\sqrt{2} \\approx 1.414$"
        },
        {
          "id": "W7-T3-Q08-opt1",
          "text": "It doubles ($2\\times$)"
        },
        {
          "id": "W7-T3-Q08-opt2",
          "text": "It quadruples ($4\\times$)"
        },
        {
          "id": "W7-T3-Q08-opt3",
          "text": "It decreases by half"
        }
      ],
      "correct_indices": [
        "W7-T3-Q08-opt0"
      ],
      "explanation": "Since $c = \\sqrt{T/\\rho}$ and $f_1 = \\frac{c}{2L} = \\frac{1}{2L}\\sqrt{\\frac{T}{\\rho}}$, doubling tension multiplies $f_1$ by $\\sqrt{2}$.",
      "hint": "Frequency is proportional to the square root of tension."
    },
    {
      "id": "W7-T3-Q09",
      "week": 7,
      "tier": "nice_to_know",
      "topic": "Diffusion Length Scale",
      "type": "single_select",
      "question": "In a diffusion process governed by $u_t = \\alpha u_{xx}$, the characteristic distance $L_d$ that heat penetrates in time $t$ scales as:",
      "options": [
        {
          "id": "W7-T3-Q09-opt0",
          "text": "$L_d \\sim \\sqrt{\\alpha t}$"
        },
        {
          "id": "W7-T3-Q09-opt1",
          "text": "$L_d \\sim \\alpha t$"
        },
        {
          "id": "W7-T3-Q09-opt2",
          "text": "$L_d \\sim \\alpha t^2$"
        },
        {
          "id": "W7-T3-Q09-opt3",
          "text": "$L_d \\sim \\frac{\\alpha}{t}$"
        }
      ],
      "correct_indices": [
        "W7-T3-Q09-opt0"
      ],
      "explanation": "Dimensional scaling: $[\\alpha] = \\text{m}^2/\\text{s}$, so $[\\alpha t] = \\text{m}^2$. The characteristic diffusion length is therefore proportional to $\\sqrt{\\alpha t}$, illustrating why diffusion is slow over large distances.",
      "hint": "Diffusion distance scales with the square root of time."
    },
    {
      "id": "W7-T3-Q10",
      "week": 7,
      "tier": "nice_to_know",
      "topic": "D'Alembert Wave Reflection at Fixed Boundary",
      "type": "single_select",
      "question": "When a traveling wave pulse $f(x - ct)$ hits a fixed boundary at $x=0$ ($u(0, t) = 0$), how is it reflected?",
      "options": [
        {
          "id": "W7-T3-Q10-opt0",
          "text": "As an inverted wave $-f(-x - ct)$ of opposite sign"
        },
        {
          "id": "W7-T3-Q10-opt1",
          "text": "As an upright wave of identical sign"
        },
        {
          "id": "W7-T3-Q10-opt2",
          "text": "It is completely absorbed with zero reflection"
        },
        {
          "id": "W7-T3-Q10-opt3",
          "text": "As a stationary square wave"
        }
      ],
      "correct_indices": [
        "W7-T3-Q10-opt0"
      ],
      "explanation": "To satisfy $u(0, t) = f(-ct) + g(ct) = 0$, we must have $g(ct) = -f(-ct)$. The reflected wave is inverted (phase flip of $180^\\circ$).",
      "hint": "Fixed ends invert the reflected pulse."
    },
    {
      "id": "W7-T4-Q01",
      "week": 7,
      "tier": "extra",
      "topic": "Maximum Principle for Heat Equation",
      "type": "single_select",
      "question": "What does the Maximum Principle assert for the heat equation $u_t = \\alpha u_{xx}$ in a space-time domain $[0, L] \\times [0, T]$?",
      "options": [
        {
          "id": "W7-T4-Q01-opt0",
          "text": "The maximum temperature must occur either initially ($t=0$) or on the spatial boundaries ($x=0, x=L$)"
        },
        {
          "id": "W7-T4-Q01-opt1",
          "text": "The temperature increases monotonically with time"
        },
        {
          "id": "W7-T4-Q01-opt2",
          "text": "The maximum temperature occurs at the center $x = L/2$ at $t = T$"
        },
        {
          "id": "W7-T4-Q01-opt3",
          "text": "The average temperature is always zero"
        }
      ],
      "correct_indices": [
        "W7-T4-Q01-opt0"
      ],
      "explanation": "The Maximum Principle guarantees that a solution cannot attain a strict local maximum in the interior of the space-time domain; heat always diffuses away from hot spots. Thus the maximum must lie on the parabolic boundary ($t=0$ or $x=0, L$).",
      "hint": "Internal points cannot spontaneously become hotter than their surroundings."
    },
    {
      "id": "W7-T4-Q02",
      "week": 7,
      "tier": "extra",
      "topic": "D'Alembert Formula with Initial Velocity",
      "type": "single_select",
      "question": "For $u_{tt} = c^2 u_{xx}$ on $-\\infty < x < \\infty$ with $u(x,0) = 0$ and initial velocity $u_t(x,0) = g(x)$, what is $u(x,t)$?",
      "options": [
        {
          "id": "W7-T4-Q02-opt0",
          "text": "$u(x,t) = \\frac{1}{2c} \\int_{x - ct}^{x + ct} g(s)\\,ds$"
        },
        {
          "id": "W7-T4-Q02-opt1",
          "text": "$u(x,t) = \\frac{1}{2} \\int_{x - ct}^{x + ct} g(s)\\,ds$"
        },
        {
          "id": "W7-T4-Q02-opt2",
          "text": "$u(x,t) = \\frac{1}{c}[g(x+ct) - g(x-ct)]$"
        },
        {
          "id": "W7-T4-Q02-opt3",
          "text": "$u(x,t) = \\frac{1}{2c}[g(x+ct) + g(x-ct)]$"
        }
      ],
      "correct_indices": [
        "W7-T4-Q02-opt0"
      ],
      "explanation": "The full D'Alembert formula is $u(x,t) = \\frac{1}{2}[f(x-ct)+f(x+ct)] + \\frac{1}{2c}\\int_{x-ct}^{x+ct}g(s)\\,ds$. When $f(x)=0$, this leaves the integral term over the domain of dependence.",
      "hint": "Notice the factor of $\\frac{1}{2c}$ in front of the integral of initial velocity."
    },
    {
      "id": "W7-T4-Q03",
      "week": 7,
      "tier": "extra",
      "topic": "Fundamental Solution of the Heat Equation",
      "type": "single_select",
      "question": "The Green's function (fundamental solution / heat kernel) for $u_t = \\alpha u_{xx}$ on $-\\infty < x < \\infty$ is:",
      "options": [
        {
          "id": "W7-T4-Q03-opt0",
          "text": "$\\Phi(x, t) = \\frac{1}{\\sqrt{4\\pi \\alpha t}} \\exp\\left(-\\frac{x^2}{4\\alpha t}\\right)$"
        },
        {
          "id": "W7-T4-Q03-opt1",
          "text": "$\\Phi(x, t) = \\frac{1}{2\\alpha t} \\exp\\left(-\\frac{x^2}{\\alpha t}\\right)$"
        },
        {
          "id": "W7-T4-Q03-opt2",
          "text": "$\\Phi(x, t) = \\frac{1}{\\sqrt{2\\pi \\alpha}} \\exp(-x^2)$"
        },
        {
          "id": "W7-T4-Q03-opt3",
          "text": "$\\Phi(x, t) = \\frac{1}{4\\pi \\alpha t^2} \\exp\\left(-\\frac{x^2}{2\\alpha t}\\right)$"
        }
      ],
      "correct_indices": [
        "W7-T4-Q03-opt0"
      ],
      "explanation": "The heat kernel is a spreading Gaussian of total area 1 representing the temperature response to a point heat source $\\delta(x)$ at $t=0$: $\\Phi(x,t) = \\frac{1}{\\sqrt{4\\pi \\alpha t}}e^{-x^2/(4\\alpha t)}$.",
      "hint": "A Gaussian with variance $\\sigma^2 = 2\\alpha t$."
    },
    {
      "id": "W7-T4-Q04",
      "week": 7,
      "tier": "extra",
      "topic": "Infinite Speed of Propagation in Diffusion",
      "type": "single_select",
      "question": "A fundamental paradox of the classical heat equation $u_t = \\alpha u_{xx}$ is:",
      "options": [
        {
          "id": "W7-T4-Q04-opt0",
          "text": "Infinite speed of propagation: a localized heat perturbation at $t=0$ immediately produces $u(x, t) > 0$ for all $x \\in \\mathbb{R}$ at any $t > 0$"
        },
        {
          "id": "W7-T4-Q04-opt1",
          "text": "Thermal energy is created out of nothing"
        },
        {
          "id": "W7-T4-Q04-opt2",
          "text": "Temperatures become negative"
        },
        {
          "id": "W7-T4-Q04-opt3",
          "text": "Solutions are never differentiable"
        }
      ],
      "correct_indices": [
        "W7-T4-Q04-opt0"
      ],
      "explanation": "Because the Gaussian kernel $e^{-x^2/(4\\alpha t)} > 0$ everywhere on the real line for any $t > 0$, heat spreads with infinite speed in classical parabolic diffusion.",
      "hint": "The exponential tail of the Gaussian is strictly positive everywhere for $t>0$."
    },
    {
      "id": "W7-T4-Q05",
      "week": 7,
      "tier": "extra",
      "topic": "Telegraph Equation Hyperbolic Damping",
      "type": "single_select",
      "question": "To resolve the infinite speed paradox and incorporate thermal relaxation, the hyperbolic Telegraph Equation adds which term to $u_t = \\alpha u_{xx}$?",
      "options": [
        {
          "id": "W7-T4-Q05-opt0",
          "text": "$\\tau \\frac{\\partial^2 u}{\\partial t^2}$"
        },
        {
          "id": "W7-T4-Q05-opt1",
          "text": "$\\tau \\frac{\\partial^3 u}{\\partial x^3}$"
        },
        {
          "id": "W7-T4-Q05-opt2",
          "text": "$\\tau u^2$"
        },
        {
          "id": "W7-T4-Q05-opt3",
          "text": "$\\tau \\frac{\\partial u}{\\partial x}$"
        }
      ],
      "correct_indices": [
        "W7-T4-Q05-opt0"
      ],
      "explanation": "Cattaneo's modification to Fourier's law introduces a thermal relaxation time $\\tau$, producing $\\tau u_{tt} + u_t = \\alpha u_{xx}$, which has a finite maximum propagation speed $c = \\sqrt{\\alpha/\\tau}$.",
      "hint": "Adding a second time derivative makes the equation hyperbolic with finite speed."
    },
    {
      "id": "W7-T4-Q06",
      "week": 7,
      "tier": "extra",
      "topic": "Duhamel's Principle for Inhomogeneous Heat Equation",
      "type": "single_select",
      "question": "Duhamel's principle solves the forced heat equation $u_t - \\alpha u_{xx} = f(x, t)$ with $u(x, 0) = 0$ by:",
      "options": [
        {
          "id": "W7-T4-Q06-opt0",
          "text": "Integrating the solutions $w(x, t; s)$ of the homogeneous problem with initial condition $w(x, s; s) = f(x, s)$: $u(x,t) = \\int_0^t w(x, t; s)\\,ds$"
        },
        {
          "id": "W7-T4-Q06-opt1",
          "text": "Multiplying $f(x, t)$ by the steady state solution"
        },
        {
          "id": "W7-T4-Q06-opt2",
          "text": "Setting $u(x, t) = f(x, t) / \\alpha$"
        },
        {
          "id": "W7-T4-Q06-opt3",
          "text": "Taking the spatial derivative of $f(x, t)$"
        }
      ],
      "correct_indices": [
        "W7-T4-Q06-opt0"
      ],
      "explanation": "Duhamel's principle treats continuous distributed forcing $f(x,s)$ as a continuous sequence of initial heat impulses, integrating the homogeneous responses: $u(x,t) = \\int_0^t w(x, t; s)\\,ds$.",
      "hint": "Integrate initial impulse responses over time."
    },
    {
      "id": "W7-T4-Q07",
      "week": 7,
      "tier": "extra",
      "topic": "Similarity Variable for Semi-Infinite Heat Conduction",
      "type": "single_select",
      "question": "For heat diffusion into a semi-infinite solid $x \\ge 0$ with $u(0, t) = T_0$ and $u(x, 0) = 0$, what similarity variable $\\eta$ reduces the PDE to an ODE?",
      "options": [
        {
          "id": "W7-T4-Q07-opt0",
          "text": "$\\eta = \\frac{x}{\\sqrt{4\\alpha t}}$"
        },
        {
          "id": "W7-T4-Q07-opt1",
          "text": "$\\eta = \\frac{x}{\\alpha t}$"
        },
        {
          "id": "W7-T4-Q07-opt2",
          "text": "$\\eta = x - \\alpha t$"
        },
        {
          "id": "W7-T4-Q07-opt3",
          "text": "$\\eta = \\frac{x^2}{\\alpha t}$"
        }
      ],
      "correct_indices": [
        "W7-T4-Q07-opt0"
      ],
      "explanation": "Dimensional analysis dictates that $\\eta = \\frac{x}{\\sqrt{4\\alpha t}}$ is dimensionless. The solution is then expressed via the complementary error function: $u(x,t) = T_0 \\text{erfc}(\\eta) = T_0\\left(1 - \\text{erf}\\left(\\frac{x}{2\\sqrt{\\alpha t}}\\right)\\right)$.",
      "hint": "The similarity variable balances $x$ with $\\sqrt{\\alpha t}$."
    },
    {
      "id": "W7-T4-Q08",
      "week": 7,
      "tier": "extra",
      "topic": "Error Function Definition",
      "type": "single_select",
      "question": "The Gaussian error function $\\text{erf}(z)$ appearing in diffusion problems is defined as:",
      "options": [
        {
          "id": "W7-T4-Q08-opt0",
          "text": "$\\text{erf}(z) = \\frac{2}{\\sqrt{\\pi}} \\int_0^z e^{-u^2}\\,du$"
        },
        {
          "id": "W7-T4-Q08-opt1",
          "text": "$\\text{erf}(z) = \\int_0^z e^{-u}\\,du$"
        },
        {
          "id": "W7-T4-Q08-opt2",
          "text": "$\\text{erf}(z) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^z e^{-u^2/2}\\,du$"
        },
        {
          "id": "W7-T4-Q08-opt3",
          "text": "$\\text{erf}(z) = \\frac{1}{\\pi} \\int_0^z \\frac{1}{1+u^2}\\,du$"
        }
      ],
      "correct_indices": [
        "W7-T4-Q08-opt0"
      ],
      "explanation": "By definition, $\\text{erf}(z) = \\frac{2}{\\sqrt{\\pi}}\\int_0^z e^{-u^2}\\,du$, normalized so that $\\text{erf}(0) = 0$ and $\\lim_{z \\to \\infty}\\text{erf}(z) = 1$.",
      "hint": "Pre-factor is $2/\\sqrt{\\pi}$ to normalize the integral of $e^{-u^2}$."
    },
    {
      "id": "W7-T4-Q09",
      "week": 7,
      "tier": "extra",
      "topic": "Uniqueness of Wave Equation via Energy Method",
      "type": "single_select",
      "question": "How is uniqueness of solutions to the wave equation $u_{tt} = c^2 u_{xx}$ proved using the energy method?",
      "options": [
        {
          "id": "W7-T4-Q09-opt0",
          "text": "Show that the difference between two solutions satisfies zero initial data and zero energy, so $E(t) = 0$ for all $t$, implying the difference is identically zero"
        },
        {
          "id": "W7-T4-Q09-opt1",
          "text": "By finding the Green's function"
        },
        {
          "id": "W7-T4-Q09-opt2",
          "text": "By Laplace transformation"
        },
        {
          "id": "W7-T4-Q09-opt3",
          "text": "By Picard iteration"
        }
      ],
      "correct_indices": [
        "W7-T4-Q09-opt0"
      ],
      "explanation": "Let $w = u_1 - u_2$. Then $w$ satisfies $w_{tt} = c^2 w_{xx}$ with zero initial and boundary conditions. Its total energy is $E(0) = 0$. Since $\\frac{dE}{dt} = 0$, $E(t) = 0$ for all $t$. Because the energy integrand is a sum of squares, $w_t = 0$ and $w_x = 0$, implying $w(x,t) = 0$ everywhere.",
      "hint": "A positive definite conserved quantity starting at zero must remain zero."
    },
    {
      "id": "W7-T4-Q10",
      "week": 7,
      "tier": "extra",
      "topic": "Smoothing Property of the Heat Equation",
      "type": "single_select",
      "question": "What dramatic difference in smoothness exists between the wave equation and the heat equation?",
      "options": [
        {
          "id": "W7-T4-Q10-opt0",
          "text": "The heat equation instantly smooths any discontinuous initial data into an infinitely differentiable function for $t > 0$, whereas the wave equation propagates discontinuities without smoothing"
        },
        {
          "id": "W7-T4-Q10-opt1",
          "text": "The wave equation smooths data but the heat equation does not"
        },
        {
          "id": "W7-T4-Q10-opt2",
          "text": "Both smooth data at the same rate"
        },
        {
          "id": "W7-T4-Q10-opt3",
          "text": "Neither smooths initial data"
        }
      ],
      "correct_indices": [
        "W7-T4-Q10-opt0"
      ],
      "explanation": "Due to the Gaussian kernel and exponential decay of high spatial frequencies, the heat equation solution $u(x,t) \\in C^\\infty$ for all $t > 0$ even if $u(x,0)$ is discontinuous. In contrast, the wave equation preserves and propagates sharp wavefronts and singularities along characteristics.",
      "hint": "Parabolic diffusion smooths instantly; hyperbolic wave propagation transports singularities."
    }
  ]
};
