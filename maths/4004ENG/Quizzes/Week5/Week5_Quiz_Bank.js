window.QUIZ_BANK_WEEK5 = {
  "module": "4004ENG Engineering Mathematics",
  "week": 5,
  "title": "Week 5 Quiz Bank: Complex Numbers, Statistics & Probability",
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
      "topic": "Complex Addition Subtraction",
      "type": "single_select",
      "question": "Given complex numbers $z = 5-2i$ and $w = -3+4i$, find $z+w$ and $z-w$.",
      "options": [
        { "id": "W5-T1-Q01-opt0", "text": "$z+w = 2+2i$, $z-w = 8-6i$" },
        { "id": "W5-T1-Q01-opt1", "text": "$z+w = 8+2i$, $z-w = 2-6i$" },
        { "id": "W5-T1-Q01-opt2", "text": "$z+w = 2+2i$, $z-w = 8+2i$" },
        { "id": "W5-T1-Q01-opt3", "text": "$z+w = -2-2i$, $z-w = -8+6i$" }
      ],
      "correct_indices": ["W5-T1-Q01-opt0"],
      "explanation": "Sum: $(5 - 3) + (-2 + 4)i = 2 + 2i$. Difference: $(5 - (-3)) + (-2 - 4)i = 8 - 6i$.",
      "hint": "Add and subtract the real parts and imaginary parts separately."
    },
    {
      "id": "W5-T1-Q02",
      "week": 5,
      "tier": "core",
      "topic": "Complex Conjugate",
      "type": "single_select",
      "question": "For the complex number $z = 5-2i$, what is its conjugate $\\overline{z}$ and product $z\\overline{z}$?",
      "options": [
        { "id": "W5-T1-Q02-opt0", "text": "$\\overline{z} = 5+2i$, $z\\overline{z} = 29$" },
        { "id": "W5-T1-Q02-opt1", "text": "$\\overline{z} = 5+2i$, $z\\overline{z} = 21$" },
        { "id": "W5-T1-Q02-opt2", "text": "$\\overline{z} = -5-2i$, $z\\overline{z} = 29$" },
        { "id": "W5-T1-Q02-opt3", "text": "$\\overline{z} = 5-2i$, $z\\overline{z} = 25$" }
      ],
      "correct_indices": ["W5-T1-Q02-opt0"],
      "explanation": "Conjugate negates the imaginary part: $\\overline{z} = 5+2i$. The product is $z\\overline{z} = a^2 + b^2 = 5^2 + (-2)^2 = 25 + 4 = 29$.",
      "hint": "Conjugate reverses the sign of the $i$ term. The product is always a real number equal to $a^2+b^2$."
    },
    {
      "id": "W5-T1-Q03",
      "week": 5,
      "tier": "core",
      "topic": "Quadratic Complex Roots",
      "type": "single_select",
      "question": "Solve the quadratic equation $x^2 + 6x + 13 = 0$.",
      "options": [
        { "id": "W5-T1-Q03-opt0", "text": "$-3 \\pm 2i$" },
        { "id": "W5-T1-Q03-opt1", "text": "$3 \\pm 2i$" },
        { "id": "W5-T1-Q03-opt2", "text": "$-3 \\pm 4i$" },
        { "id": "W5-T1-Q03-opt3", "text": "$-6 \\pm 4i$" }
      ],
      "correct_indices": ["W5-T1-Q03-opt0"],
      "explanation": "Use quadratic formula: $x = \\frac{-6 \\pm \\sqrt{36 - 52}}{2} = \\frac{-6 \\pm \\sqrt{-16}}{2} = \\frac{-6 \\pm 4i}{2} = -3 \\pm 2i$.",
      "hint": "Apply the quadratic formula: $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$."
    },
    {
      "id": "W5-T1-Q04",
      "week": 5,
      "tier": "core",
      "topic": "Descriptive Stats Mean Median",
      "type": "single_select",
      "question": "For the measurements $14.7$, $14.9$, $15.0$, $15.1$, $15.1$, $15.2$ mm, calculate the mean and median.",
      "options": [
        { "id": "W5-T1-Q04-opt0", "text": "Mean $= 15.0$ mm, Median $= 15.05$ mm" },
        { "id": "W5-T1-Q04-opt1", "text": "Mean $= 15.0$ mm, Median $= 15.0$ mm" },
        { "id": "W5-T1-Q04-opt2", "text": "Mean $= 15.1$ mm, Median $= 15.05$ mm" },
        { "id": "W5-T1-Q04-opt3", "text": "Mean $= 15.0$ mm, Median $= 15.1$ mm" }
      ],
      "correct_indices": ["W5-T1-Q04-opt0"],
      "explanation": "Mean is sum divided by 6: $90.0 / 6 = 15.0$. Median is average of the two middle values after sorting: $(15.0+15.1)/2 = 15.05$.",
      "hint": "Mean is the average. Median is the middle value of the sorted dataset."
    },
    {
      "id": "W5-T1-Q05",
      "week": 5,
      "tier": "core",
      "topic": "Descriptive Stats Mode Range",
      "type": "single_select",
      "question": "For the measurements $14.7$, $14.9$, $15.0$, $15.1$, $15.1$, $15.2$ mm, determine the mode and range.",
      "options": [
        { "id": "W5-T1-Q05-opt0", "text": "Mode $= 15.1$ mm, Range $= 0.5$ mm" },
        { "id": "W5-T1-Q05-opt1", "text": "Mode $= 15.0$ mm, Range $= 0.5$ mm" },
        { "id": "W5-T1-Q05-opt2", "text": "Mode $= 15.1$ mm, Range $= 0.4$ mm" },
        { "id": "W5-T1-Q05-opt3", "text": "Mode $= 15.2$ mm, Range $= 0.5$ mm" }
      ],
      "correct_indices": ["W5-T1-Q05-opt0"],
      "explanation": "Mode is most frequent value: $15.1$. Range is maximum minus minimum: $15.2 - 14.7 = 0.5$.",
      "hint": "Mode is the most common number. Range is the span from min to max."
    },
    {
      "id": "W5-T1-Q06",
      "week": 5,
      "tier": "core",
      "topic": "Basic Probability Complement",
      "type": "single_select",
      "question": "If the probability of a system component passing a quality test is $0.88$, what is the probability of the component failing the test?",
      "options": [
        { "id": "W5-T1-Q06-opt0", "text": "0.12" },
        { "id": "W5-T1-Q06-opt1", "text": "0.22" },
        { "id": "W5-T1-Q06-opt2", "text": "0.88" },
        { "id": "W5-T1-Q06-opt3", "text": "0.02" }
      ],
      "correct_indices": ["W5-T1-Q06-opt0"],
      "explanation": "The sum of the probabilities of all outcomes must be 1. Thus, $P(\\text{fail}) = 1 - P(\\text{pass}) = 1 - 0.88 = 0.12$.",
      "hint": "Subtract the probability of passing from 1."
    },
    {
      "id": "W5-T1-Q07",
      "week": 5,
      "tier": "core",
      "topic": "Independent Probability Product",
      "type": "single_select",
      "question": "If two independent components both have a passing probability of $0.88$, what is the probability that both components pass the quality test?",
      "options": [
        { "id": "W5-T1-Q07-opt0", "text": "0.7744" },
        { "id": "W5-T1-Q07-opt1", "text": "0.88" },
        { "id": "W5-T1-Q07-opt2", "text": "0.9856" },
        { "id": "W5-T1-Q07-opt3", "text": "0.2256" }
      ],
      "correct_indices": ["W5-T1-Q07-opt0"],
      "explanation": "For independent events $A$ and $B$, $P(A \\cap B) = P(A) \\cdot P(B)$. Here, $0.88 \\times 0.88 = 0.7744$.",
      "hint": "Multiply the two individual passing probabilities."
    },
    {
      "id": "W5-T1-Q08",
      "week": 5,
      "tier": "core",
      "topic": "Euler's Formula Concept",
      "type": "single_select",
      "question": "According to Euler's formula, what is the exponential representation of a complex number $e^{i\\theta}$?",
      "options": [
        { "id": "W5-T1-Q08-opt0", "text": "$\\cos(\\theta) + i\\sin(\\theta)$" },
        { "id": "W5-T1-Q08-opt1", "text": "$\\cos(\\theta) - i\\sin(\\theta)$" },
        { "id": "W5-T1-Q08-opt2", "text": "$\\sin(\\theta) + i\\cos(\\theta)$" },
        { "id": "W5-T1-Q08-opt3", "text": "$\\cosh(\\theta) + i\\sinh(\\theta)$" }
      ],
      "correct_indices": ["W5-T1-Q08-opt0"],
      "explanation": "Euler's formula states that $e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$.",
      "hint": "The real part is cosine and the imaginary part is sine."
    },
    {
      "id": "W5-T1-Q09",
      "week": 5,
      "tier": "core",
      "topic": "Argand Diagram Concept",
      "type": "single_select",
      "question": "On an Argand diagram, what do the horizontal and vertical axes represent respectively?",
      "options": [
        { "id": "W5-T1-Q09-opt0", "text": "Real part and Imaginary part" },
        { "id": "W5-T1-Q09-opt1", "text": "Imaginary part and Real part" },
        { "id": "W5-T1-Q09-opt2", "text": "Modulus and Argument" },
        { "id": "W5-T1-Q09-opt3", "text": "$x$ and $z$ coordinates" }
      ],
      "correct_indices": ["W5-T1-Q09-opt0"],
      "explanation": "An Argand diagram represents complex numbers geometrically, where the horizontal axis corresponds to the real component and the vertical axis to the imaginary component.",
      "hint": "Think of a complex number written as $x + iy$."
    },
    {
      "id": "W5-T1-Q10",
      "week": 5,
      "tier": "core",
      "topic": "Sample Variance Formula",
      "type": "single_select",
      "question": "Which of the following is the divisor used when calculating the <strong>sample variance</strong> $s^2$ of a dataset of size $n$?",
      "options": [
        { "id": "W5-T1-Q10-opt0", "text": "$n-1$" },
        { "id": "W5-T1-Q10-opt1", "text": "$n$" },
        { "id": "W5-T1-Q10-opt2", "text": "$n+1$" },
        { "id": "W5-T1-Q10-opt3", "text": "$\\sqrt{n}$" }
      ],
      "correct_indices": ["W5-T1-Q10-opt0"],
      "explanation": "Bessel's correction requires dividing by $n-1$ for the sample variance to ensure it is an unbiased estimator of the population variance.",
      "hint": "Sample calculations use degrees of freedom $n-1$ instead of the total sample count."
    },
    {
      "id": "W5-T2-Q01",
      "week": 5,
      "tier": "should",
      "topic": "Complex Multiplication",
      "type": "single_select",
      "question": "For complex numbers $z = 5-2i$ and $w = -3+4i$, calculate the product $zw$.",
      "options": [
        { "id": "W5-T2-Q01-opt0", "text": "$-7 + 26i$" },
        { "id": "W5-T2-Q01-opt1", "text": "$-15 - 8i$" },
        { "id": "W5-T2-Q01-opt2", "text": "$-23 + 26i$" },
        { "id": "W5-T2-Q01-opt3", "text": "$-7 + 14i$" }
      ],
      "correct_indices": ["W5-T2-Q01-opt0"],
      "explanation": "Multiply terms: $(5-2i)(-3+4i) = 5(-3) + 5(4i) + (-2i)(-3) + (-2i)(4i) = -15 + 20i + 6i - 8i^2 = -15 + 26i + 8 = -7 + 26i$.",
      "hint": "FOIL the expression, and remember that $i^2 = -1$."
    },
    {
      "id": "W5-T2-Q02",
      "week": 5,
      "tier": "should",
      "topic": "Complex Division",
      "type": "single_select",
      "question": "Evaluate the quotient $\\frac{3+i}{1-2i}$ and express the result in Cartesian form.",
      "options": [
        { "id": "W5-T2-Q02-opt0", "text": "$\\frac{1}{5} + \\frac{7}{5}i$" },
        { "id": "W5-T2-Q02-opt1", "text": "$\\frac{1}{5} - \\frac{7}{5}i$" },
        { "id": "W5-T2-Q02-opt2", "text": "$1 + 7i$" },
        { "id": "W5-T2-Q02-opt3", "text": "$\\frac{3}{5} + \\frac{1}{5}i$" }
      ],
      "correct_indices": ["W5-T2-Q02-opt0"],
      "explanation": "Multiply numerator and denominator by the conjugate of the denominator: $\\frac{(3+i)(1+2i)}{(1-2i)(1+2i)} = \\frac{3 + 6i + i + 2i^2}{1 + 4} = \\frac{1 + 7i}{5} = \\frac{1}{5} + \\frac{7}{5}i$.",
      "hint": "Conjugate of the denominator is $1+2i$. Multiply both parts of the fraction by this conjugate."
    },
    {
      "id": "W5-T2-Q03",
      "week": 5,
      "tier": "should",
      "topic": "Descriptive Stats Standard Deviation",
      "type": "single_select",
      "question": "For the measurements $14.7$, $14.9$, $15.0$, $15.1$, $15.1$, $15.2$ mm, calculate the sample standard deviation $s$.",
      "options": [
        { "id": "W5-T2-Q03-opt0", "text": "$0.179$ mm" },
        { "id": "W5-T2-Q03-opt1", "text": "$0.032$ mm" },
        { "id": "W5-T2-Q03-opt2", "text": "$0.163$ mm" },
        { "id": "W5-T2-Q03-opt3", "text": "$0.201$ mm" }
      ],
      "correct_indices": ["W5-T2-Q03-opt0"],
      "explanation": "Mean is $15.0$. Sum of squared differences is $(14.7-15)^2 + ... = 0.09 + 0.01 + 0 + 0.01 + 0.01 + 0.04 = 0.16$. Sample variance is $s^2 = 0.16 / 5 = 0.032$. Standard deviation is $s = \\sqrt{0.032} \\approx 0.179$ mm.",
      "hint": "Find the sample variance first by dividing the sum of squared differences by $n-1 = 5$, and then take the square root."
    },
    {
      "id": "W5-T2-Q04",
      "week": 5,
      "tier": "should",
      "topic": "Conditional Probability Calculation",
      "type": "single_select",
      "question": "Given probabilities $P(A) = 0.40$, $P(B) = 0.55$, and $P(A \\cap B) = 0.22$, calculate the conditional probability $P(A \\mid B)$.",
      "options": [
        { "id": "W5-T2-Q04-opt0", "text": "0.40" },
        { "id": "W5-T2-Q04-opt1", "text": "0.55" },
        { "id": "W5-T2-Q04-opt2", "text": "0.73" },
        { "id": "W5-T2-Q04-opt3", "text": "0.50" }
      ],
      "correct_indices": ["W5-T2-Q04-opt0"],
      "explanation": "By definition: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.22}{0.55} = 0.40$.",
      "hint": "Divide the intersection probability by the probability of the conditioning event $B$."
    },
    {
      "id": "W5-T2-Q05",
      "week": 5,
      "tier": "should",
      "topic": "Argand Modulus Argument",
      "type": "single_select",
      "question": "Convert the Cartesian complex number $z = 2+2i$ into polar coordinates $(r, \\theta)$.",
      "options": [
        { "id": "W5-T2-Q05-opt0", "text": "$r = 2\\sqrt{2}$, $\\theta = \\frac{\\pi}{4}$" },
        { "id": "W5-T2-Q05-opt1", "text": "$r = 2$, $\\theta = \\frac{\\pi}{4}$" },
        { "id": "W5-T2-Q05-opt2", "text": "$r = 2\\sqrt{2}$, $\\theta = \\frac{\\pi}{2}$" },
        { "id": "W5-T2-Q05-opt3", "text": "$r = 4$, $\\theta = \\frac{\\pi}{4}$" }
      ],
      "correct_indices": ["W5-T2-Q05-opt0"],
      "explanation": "Modulus: $r = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$. Argument: $\\theta = \\arctan(2/2) = \\arctan(1) = \\pi/4$. Since $x>0, y>0$, it is in the first quadrant.",
      "hint": "Use $r = \\sqrt{x^2+y^2}$ and $\\theta = \\arctan(y/x)$."
    },
    {
      "id": "W5-T2-Q06",
      "week": 5,
      "tier": "should",
      "topic": "Complex exponential form",
      "type": "single_select",
      "question": "Convert $z = 3+3\\sqrt{3}i$ into exponential form $r e^{i\\theta}$.",
      "options": [
        { "id": "W5-T2-Q06-opt0", "text": "$6 e^{i\\pi/3}$" },
        { "id": "W5-T2-Q06-opt1", "text": "$6 e^{i\\pi/6}$" },
        { "id": "W5-T2-Q06-opt2", "text": "$3\\sqrt{2} e^{i\\pi/3}$" },
        { "id": "W5-T2-Q06-opt3", "text": "$6 e^{i\\pi/4}$" }
      ],
      "correct_indices": ["W5-T2-Q06-opt0"],
      "explanation": "Modulus: $r = \\sqrt{9 + 27} = \\sqrt{36} = 6$. Argument: $\\theta = \\arctan(3\\sqrt{3}/3) = \\arctan(\\sqrt{3}) = \\pi/3$. Exponential form: $6e^{i\\pi/3}$.",
      "hint": "Calculate the modulus and the tangent angle, noting that $\\tan(\\pi/3) = \\sqrt{3}$."
    },
    {
      "id": "W5-T2-Q07",
      "week": 5,
      "tier": "should",
      "topic": "Polar multiplication",
      "type": "single_select",
      "question": "Given complex numbers $z_1 = 2\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)$ and $z_2 = 4\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right)$, find their product $z_1 z_2$ in Cartesian form.",
      "options": [
        { "id": "W5-T2-Q07-opt0", "text": "$-4\\sqrt{3} + 4i$" },
        { "id": "W5-T2-Q07-opt1", "text": "$-4\\sqrt{3} - 4i$" },
        { "id": "W5-T2-Q07-opt2", "text": "$4\\sqrt{3} + 4i$" },
        { "id": "W5-T2-Q07-opt3", "text": "$-4 + 4\\sqrt{3}i$" }
      ],
      "correct_indices": ["W5-T2-Q07-opt0"],
      "explanation": "Product in polar form multiplies moduli and adds arguments: $z_1z_2 = (2\\cdot 4) \\left[ \\cos(\\pi/6 + 2\\pi/3) + i\\sin(\\pi/6 + 2\\pi/3) \\right] = 8\\left( \\cos(5\\pi/6) + i\\sin(5\\pi/6) \\right) = 8\\left(-\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i\\right) = -4\\sqrt{3} + 4i$.",
      "hint": "Multiply the magnitudes and add the angles inside the cosines and sines."
    },
    {
      "id": "W5-T2-Q08",
      "week": 5,
      "tier": "should",
      "topic": "Polar Division",
      "type": "single_select",
      "question": "Given $z_1 = 2\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)$ and $z_2 = 4\\left(\\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3}\\right)$, find the quotient $\\frac{z_2}{z_1}$ in Cartesian form.",
      "options": [
        { "id": "W5-T2-Q08-opt0", "text": "$2i$" },
        { "id": "W5-T2-Q08-opt1", "text": "$-2i$" },
        { "id": "W5-T2-Q08-opt2", "text": "$2$" },
        { "id": "W5-T2-Q08-opt3", "text": "$\\sqrt{3} + i$" }
      ],
      "correct_indices": ["W5-T2-Q08-opt0"],
      "explanation": "Quotient divides moduli and subtracts arguments: $\\frac{z_2}{z_1} = \\frac{4}{2} \\left[ \\cos(2\\pi/3 - \\pi/6) + i\\sin(2\\pi/3 - \\pi/6) \\right] = 2\\left( \\cos(\\pi/2) + i\\sin(\\pi/2) \\right) = 2(0 + i) = 2i$.",
      "hint": "Divide the moduli and subtract the denominator angle from the numerator angle."
    },
    {
      "id": "W5-T2-Q09",
      "week": 5,
      "tier": "should",
      "topic": "De Moivre Theorem Application",
      "type": "single_select",
      "question": "Use De Moivre's Theorem to calculate $(\\sqrt{3}+i)^4$ and express it in Cartesian form.",
      "options": [
        { "id": "W5-T2-Q09-opt0", "text": "$-8 + 8\\sqrt{3}i$" },
        { "id": "W5-T2-Q09-opt1", "text": "$-8 - 8\\sqrt{3}i$" },
        { "id": "W5-T2-Q09-opt2", "text": "$16e^{2i\\pi/3}$" },
        { "id": "W5-T2-Q09-opt3", "text": "$-16 + 16\\sqrt{3}i$" }
      ],
      "correct_indices": ["W5-T2-Q09-opt0"],
      "explanation": "Polar form: $\\sqrt{3}+i = 2 e^{i\\pi/6}$. Applying power 4: $(2e^{i\\pi/6})^4 = 16 e^{2i\\pi/3} = 16(\\cos(2\\pi/3) + i\\sin(2\\pi/3)) = 16(-1/2 + i\\sqrt{3}/2) = -8 + 8\\sqrt{3}i$.",
      "hint": "Convert to polar form first, apply the power of 4 to the modulus and multiply the argument by 4, then convert back."
    },
    {
      "id": "W5-T2-Q10",
      "week": 5,
      "tier": "should",
      "topic": "Probability Union Formula",
      "type": "single_select",
      "question": "For events $A$ and $B$, if $P(A) = 0.40$, $P(B) = 0.55$, and $P(A \\cap B) = 0.22$, calculate $P(A \\cup B)$.",
      "options": [
        { "id": "W5-T2-Q10-opt0", "text": "0.73" },
        { "id": "W5-T2-Q10-opt1", "text": "0.95" },
        { "id": "W5-T2-Q10-opt2", "text": "0.68" },
        { "id": "W5-T2-Q10-opt3", "text": "0.18" }
      ],
      "correct_indices": ["W5-T2-Q10-opt0"],
      "explanation": "Using probability addition rule: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.40 + 0.55 - 0.22 = 0.73$.",
      "hint": "Add the two individual probabilities, and subtract the intersection probability to avoid double-counting."
    },
    {
      "id": "W5-T3-Q01",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Complex Division Current",
      "type": "single_select",
      "question": "In an electrical circuit, the complex voltage is $V = 10+5i$ V, and the impedance is $Z = 2+i$ $\\Omega$. Find the complex current $I = V/Z$.",
      "options": [
        { "id": "W5-T3-Q01-opt0", "text": "5 A" },
        { "id": "W5-T3-Q01-opt1", "text": "$5+2i$ A" },
        { "id": "W5-T3-Q01-opt2", "text": "$-5$ A" },
        { "id": "W5-T3-Q01-opt3", "text": "$2.5$ A" }
      ],
      "correct_indices": ["W5-T3-Q01-opt0"],
      "explanation": "$I = \\frac{10+5i}{2+i} = \\frac{5(2+i)}{2+i} = 5$ A. Alternatively, multiplying by the conjugate yields $\\frac{(10+5i)(2-i)}{4+1} = \\frac{20 - 10i + 10i - 5i^2}{5} = \\frac{25}{5} = 5$ A.",
      "hint": "Factor out 5 from the numerator and observe if it simplifies directly."
    },
    {
      "id": "W5-T3-Q02",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Argand Modulus Argument Negative",
      "type": "single_select",
      "question": "Convert the Cartesian complex number $z = -1+\\sqrt{3}i$ into polar coordinates.",
      "options": [
        { "id": "W5-T3-Q02-opt0", "text": "$r = 2$, $\\theta = \\frac{2\\pi}{3}$" },
        { "id": "W5-T3-Q02-opt1", "text": "$r = 2$, $\\theta = -\\frac{\\pi}{3}$" },
        { "id": "W5-T3-Q02-opt2", "text": "$r = 4$, $\\theta = \\frac{2\\pi}{3}$" },
        { "id": "W5-T3-Q02-opt3", "text": "$r = 2$, $\\theta = \\frac{\\pi}{3}$" }
      ],
      "correct_indices": ["W5-T3-Q02-opt0"],
      "explanation": "Modulus: $r = \\sqrt{1 + 3} = 2$. Argument: Reference angle is $\\arctan(\\sqrt{3}/1) = \\pi/3$. Since $x < 0$ and $y > 0$, the number lies in the second quadrant, so $\\theta = \\pi - \\pi/3 = 2\\pi/3$.",
      "hint": "Make sure to adjust the angle since the real part is negative, placing it in the second quadrant."
    },
    {
      "id": "W5-T3-Q03",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Argand Modulus Argument Both Negative",
      "type": "single_select",
      "question": "Convert $z = -4-4i$ into polar coordinates.",
      "options": [
        { "id": "W5-T3-Q03-opt0", "text": "$r = 4\\sqrt{2}$, $\\theta = -\\frac{3\\pi}{4}$" },
        { "id": "W5-T3-Q03-opt1", "text": "$r = 4\\sqrt{2}$, $\\theta = \\frac{5\\pi}{4}$" },
        { "id": "W5-T3-Q03-opt2", "text": "$r = 4\\sqrt{2}$, $\\theta = \\frac{3\\pi}{4}$" },
        { "id": "W5-T3-Q03-opt3", "text": "$r = 8$, $\\theta = -\\frac{3\\pi}{4}$" }
      ],
      "correct_indices": ["W5-T3-Q03-opt0"],
      "explanation": "Modulus: $r = \\sqrt{16+16} = 4\\sqrt{2}$. Argument: Lies in the third quadrant. $\\theta = -\\pi + \\pi/4 = -3\\pi/4$ (principal value) or $5\\pi/4$. QTI standards prefer the principal argument value in $(-\\pi, \\pi]$, which is $-3\\pi/4$.",
      "hint": "Both components are negative, placing the vector in the third quadrant. Use the principal argument range."
    },
    {
      "id": "W5-T3-Q04",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Complex Square Roots",
      "type": "single_select",
      "question": "Find the two square roots of the complex number $4i$.",
      "options": [
        { "id": "W5-T3-Q04-opt0", "text": "$\\sqrt{2} + \\sqrt{2}i$ and $-\\sqrt{2} - \\sqrt{2}i$" },
        { "id": "W5-T3-Q04-opt1", "text": "$2+2i$ and $-2-2i$" },
        { "id": "W5-T3-Q04-opt2", "text": "$\\sqrt{2} - \\sqrt{2}i$ and $-\\sqrt{2} + \\sqrt{2}i$" },
        { "id": "W5-T3-Q04-opt3", "text": "$2i$ and $-2i$" }
      ],
      "correct_indices": ["W5-T3-Q04-opt0"],
      "explanation": "Write $4i = 4 e^{i\\pi/2}$. The roots have modulus $\\sqrt{4}=2$ and arguments $\\frac{\\pi/2 + 2k\\pi}{2}$. For $k=0$, $\\theta = \\pi/4 \\implies 2(\\cos\\pi/4+i\\sin\\pi/4) = \\sqrt{2}+\\sqrt{2}i$. For $k=1$, $\\theta = 5\\pi/4 \\implies -\\sqrt{2}-\\sqrt{2}i$.",
      "hint": "Write the complex number in polar form first, then halve the argument and take the square root of the magnitude."
    },
    {
      "id": "W5-T3-Q05",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Independent Events Verification",
      "type": "single_select",
      "question": "For events $A$ and $B$, $P(A) = 0.40$, $P(B) = 0.55$, and $P(A \\cap B) = 0.22$. Are $A$ and $B$ independent events?",
      "options": [
        { "id": "W5-T3-Q05-opt0", "text": "Yes, they are independent." },
        { "id": "W5-T3-Q05-opt1", "text": "No, they are dependent." }
      ],
      "correct_indices": ["W5-T3-Q05-opt0"],
      "explanation": "Events are independent if $P(A \\cap B) = P(A)P(B)$. Here, $P(A)P(B) = 0.40 \\times 0.55 = 0.22$. Since this matches $P(A \\cap B)$, the events are independent.",
      "hint": "Check if the product of the individual probabilities matches their intersection probability."
    },
    {
      "id": "W5-T3-Q06",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Binomial Distribution Parameter",
      "type": "single_select",
      "question": "A production line produces components where $4\\%$ are defective. If a random sample of 12 components is selected, identify the correct probability distribution model.",
      "options": [
        { "id": "W5-T3-Q06-opt0", "text": "$X \\sim B(12, 0.04)$" },
        { "id": "W5-T3-Q06-opt1", "text": "$X \\sim B(12, 0.4)$" },
        { "id": "W5-T3-Q06-opt2", "text": "$X \\sim B(0.04, 12)$" },
        { "id": "W5-T3-Q06-opt3", "text": "Normal distribution" }
      ],
      "correct_indices": ["W5-T3-Q06-opt0"],
      "explanation": "The trials are independent, have a binary outcome (defective/non-defective), and a constant probability. Thus, it follows a Binomial distribution $B(n, p)$ with $n=12$ and $p=0.04$.",
      "hint": "Find the number of trials $n$ and the probability of success $p$ in decimal form."
    },
    {
      "id": "W5-T3-Q07",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Binomial Probability Zero",
      "type": "single_select",
      "question": "For $X \\sim B(12, 0.04)$, find the probability of finding exactly zero defective components, $P(X=0)$, to 4 decimal places.",
      "options": [
        { "id": "W5-T3-Q07-opt0", "text": "0.6127" },
        { "id": "W5-T3-Q07-opt1", "text": "0.3873" },
        { "id": "W5-T3-Q07-opt2", "text": "0.6000" },
        { "id": "W5-T3-Q07-opt3", "text": "0.4800" }
      ],
      "correct_indices": ["W5-T3-Q07-opt0"],
      "explanation": "$P(X=0) = \\binom{12}{0} (0.04)^0 (0.96)^{12} = (0.96)^{12} \\approx 0.6127$.",
      "hint": "Compute $(1-p)^n$ directly for the zero success probability."
    },
    {
      "id": "W5-T3-Q08",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Binomial Probability One",
      "type": "single_select",
      "question": "For $X \\sim B(12, 0.04)$, calculate the probability of finding exactly one defective component, $P(X=1)$, to 4 decimal places.",
      "options": [
        { "id": "W5-T3-Q08-opt0", "text": "0.3064" },
        { "id": "W5-T3-Q08-opt1", "text": "0.2875" },
        { "id": "W5-T3-Q08-opt2", "text": "0.3540" },
        { "id": "W5-T3-Q08-opt3", "text": "0.4800" }
      ],
      "correct_indices": ["W5-T3-Q08-opt0"],
      "explanation": "$P(X=1) = \\binom{12}{1} (0.04)^1 (0.96)^{11} = 12 \\times 0.04 \\times 0.6382 \\approx 0.3064$.",
      "hint": "Apply the Binomial formula: $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$ with $k=1$."
    },
    {
      "id": "W5-T3-Q09",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Binomial Probability At Least One",
      "type": "single_select",
      "question": "For $X \\sim B(12, 0.04)$, find the probability of finding at least one defective component, $P(X \\geq 1)$, to 4 decimal places.",
      "options": [
        { "id": "W5-T3-Q09-opt0", "text": "0.3873" },
        { "id": "W5-T3-Q09-opt1", "text": "0.6127" },
        { "id": "W5-T3-Q09-opt2", "text": "0.9191" },
        { "id": "W5-T3-Q09-opt3", "text": "0.0809" }
      ],
      "correct_indices": ["W5-T3-Q09-opt0"],
      "explanation": "Use the complement rule: $P(X \\geq 1) = 1 - P(X=0) = 1 - 0.6127 = 0.3873$.",
      "hint": "Subtract the probability of finding zero defective components from 1."
    },
    {
      "id": "W5-T3-Q10",
      "week": 5,
      "tier": "nice_to_know",
      "topic": "Binomial Probability Cumulative",
      "type": "single_select",
      "question": "For $X \\sim B(12, 0.04)$, find the probability of finding at most one defective component, $P(X \\leq 1)$, to 4 decimal places.",
      "options": [
        { "id": "W5-T3-Q10-opt0", "text": "0.9191" },
        { "id": "W5-T3-Q10-opt1", "text": "0.0809" },
        { "id": "W5-T3-Q10-opt2", "text": "0.9127" },
        { "id": "W5-T3-Q10-opt3", "text": "0.3064" }
      ],
      "correct_indices": ["W5-T3-Q10-opt0"],
      "explanation": "$P(X \\leq 1) = P(X=0) + P(X=1) = 0.6127 + 0.3064 = 0.9191$.",
      "hint": "Add the probabilities of finding exactly 0 and exactly 1 defective components."
    },
    {
      "id": "W5-T4-Q01",
      "week": 5,
      "tier": "extra",
      "topic": "De Moivre fourth roots",
      "type": "single_select",
      "question": "Find the four fourth roots of the complex number $z = -1 + i\\sqrt{3}$ in exponential form.",
      "options": [
        { "id": "W5-T4-Q01-opt0", "text": "$2^{1/4}e^{i\\pi/6}$, $2^{1/4}e^{2i\\pi/3}$, $2^{1/4}e^{7i\\pi/6}$, $2^{1/4}e^{5i\\pi/3}$" },
        { "id": "W5-T4-Q01-opt1", "text": "$2e^{i\\pi/6}$, $2e^{2i\\pi/3}$, $2e^{7i\\pi/6}$, $2e^{5i\\pi/3}$" },
        { "id": "W5-T4-Q01-opt2", "text": "$2^{1/4}e^{i\\pi/12}$, $2^{1/4}e^{7i\\pi/12}$, $2^{1/4}e^{13i\\pi/12}$, $2^{1/4}e^{19i\\pi/12}$" },
        { "id": "W5-T4-Q01-opt3", "text": "$e^{i\\pi/6}$, $e^{2i\\pi/3}$, $e^{7i\\pi/6}$, $e^{5i\\pi/3}$" }
      ],
      "correct_indices": ["W5-T4-Q01-opt0"],
      "explanation": "$z = -1+i\\sqrt{3} = 2 e^{2i\\pi/3}$. By De Moivre's, the fourth roots have modulus $2^{1/4}$ and arguments $\\frac{2\\pi/3 + 2k\\pi}{4} = \\frac{\\pi}{6} + \\frac{k\\pi}{2}$ for $k=0,1,2,3$. This yields arguments $\\pi/6$, $2\\pi/3$, $7\\pi/6$, and $5\\pi/3$.",
      "hint": "Convert the complex number to polar form, then apply De Moivre's root formula for $k=0,1,2,3$."
    },
    {
      "id": "W5-T4-Q02",
      "week": 5,
      "tier": "extra",
      "topic": "Binomial Stats Defective Sample",
      "type": "single_select",
      "question": "A shipment has a defective rate of $6\\%$. For a sample of 20 components, find the probability that exactly 2 are defective, to 4 decimal places.",
      "options": [
        { "id": "W5-T4-Q02-opt0", "text": "0.2246" },
        { "id": "W5-T4-Q02-opt1", "text": "0.1880" },
        { "id": "W5-T4-Q02-opt2", "text": "0.2901" },
        { "id": "W5-T4-Q02-opt3", "text": "0.0600" }
      ],
      "correct_indices": ["W5-T4-Q02-opt0"],
      "explanation": "Here $Y \\sim B(20, 0.06)$. We calculate $P(Y=2) = \\binom{20}{2} (0.06)^2 (0.94)^{18} = 190 \\times 0.0036 \\times 0.3283 \\approx 0.2246$.",
      "hint": "Use $n=20$, $p=0.06$, and $k=2$ in the Binomial probability mass function."
    },
    {
      "id": "W5-T4-Q03",
      "week": 5,
      "tier": "extra",
      "topic": "Binomial Stats Cumulative Defective",
      "type": "single_select",
      "question": "For a sample of 20 components with defective rate $6\\%$, find the probability that at most 2 are defective, to 4 decimal places.",
      "options": [
        { "id": "W5-T4-Q03-opt0", "text": "0.8850" },
        { "id": "W5-T4-Q03-opt1", "text": "0.7099" },
        { "id": "W5-T4-Q03-opt2", "text": "0.9400" },
        { "id": "W5-T4-Q03-opt3", "text": "0.9821" }
      ],
      "correct_indices": ["W5-T4-Q03-opt0"],
      "explanation": "Sum the probabilities: $P(Y \\leq 2) = P(Y=0) + P(Y=1) + P(Y=2)$.\n$P(Y=0) = (0.94)^{20} \\approx 0.2901$.\n$P(Y=1) = 20(0.06)(0.94)^{19} \\approx 0.3703$.\n$P(Y=2) = 0.2246$.\nSum $= 0.2901 + 0.3703 + 0.2246 = 0.8850$.",
      "hint": "Calculate the individual probabilities for 0, 1, and 2 successes, and sum them up."
    },
    {
      "id": "W5-T4-Q04",
      "week": 5,
      "tier": "extra",
      "topic": "Euler form division",
      "type": "single_select",
      "question": "Simplify the expression $\\frac{4 e^{i\\pi/3}}{2 e^{-i\\pi/6}}$ and express the result in Cartesian form.",
      "options": [
        { "id": "W5-T4-Q04-opt0", "text": "$2i$" },
        { "id": "W5-T4-Q04-opt1", "text": "$2$" },
        { "id": "W5-T4-Q04-opt2", "text": "$-2i$" },
        { "id": "W5-T4-Q04-opt3", "text": "$\\sqrt{3} + i$" }
      ],
      "correct_indices": ["W5-T4-Q04-opt0"],
      "explanation": "Division in exponential form: divide moduli and subtract arguments: $\\frac{4}{2} e^{i(\\pi/3 - (-\\pi/6))} = 2 e^{i(\\pi/2)} = 2\\left(\\cos(\\pi/2) + i\\sin(\\pi/2)\\right) = 2i$.",
      "hint": "Subtract $-\\pi/6$ from $\\pi/3$ to get the resulting argument."
    },
    {
      "id": "W5-T4-Q05",
      "week": 5,
      "tier": "extra",
      "topic": "Complex Roots Modulus Sum",
      "type": "single_select",
      "question": "What is the sum of the roots of the equation $x^2 + 6x + 13 = 0$?",
      "options": [
        { "id": "W5-T4-Q05-opt0", "text": "-6" },
        { "id": "W5-T4-Q05-opt1", "text": "6" },
        { "id": "W5-T4-Q05-opt2", "text": "13" },
        { "id": "W5-T4-Q05-opt3", "text": "$0$" }
      ],
      "correct_indices": ["W5-T4-Q05-opt0"],
      "explanation": "By Vieta's formulas, the sum of the roots of a quadratic equation $ax^2+bx+c=0$ is $-b/a$. For $x^2+6x+13=0$, the sum of roots is $-6/1 = -6$. (Verification: $(-3+2i) + (-3-2i) = -6$)",
      "hint": "Think about Vieta's formulas or add the two complex roots together."
    },
    {
      "id": "W5-T4-Q06",
      "week": 5,
      "tier": "extra",
      "topic": "Complex Roots Product",
      "type": "single_select",
      "question": "What is the product of the roots of the equation $x^2 + 6x + 13 = 0$?",
      "options": [
        { "id": "W5-T4-Q06-opt0", "text": "13" },
        { "id": "W5-T4-Q06-opt1", "text": "-13" },
        { "id": "W5-T4-Q06-opt2", "text": "29" },
        { "id": "W5-T4-Q06-opt3", "text": "6" }
      ],
      "correct_indices": ["W5-T4-Q06-opt0"],
      "explanation": "By Vieta's formulas, the product of the roots of a quadratic equation is $c/a$. Here, the product is $13/1 = 13$. (Verification: $(-3+2i)(-3-2i) = 9 + 4 = 13$)",
      "hint": "Think about Vieta's formulas or multiply the two complex roots together."
    },
    {
      "id": "W5-T4-Q07",
      "week": 5,
      "tier": "extra",
      "topic": "Euler Form Multiplication",
      "type": "single_select",
      "question": "Simplify the product $3e^{i\\pi/4} \\cdot 2e^{-5i\\pi/4}$ and express the result in Cartesian form.",
      "options": [
        { "id": "W5-T4-Q07-opt0", "text": "-6" },
        { "id": "W5-T4-Q07-opt1", "text": "6" },
        { "id": "W5-T4-Q07-opt2", "text": "$-6i$" },
        { "id": "W5-T4-Q07-opt3", "text": "$6i$" }
      ],
      "correct_indices": ["W5-T4-Q07-opt0"],
      "explanation": "Multiply moduli and add arguments: $3\\cdot 2 e^{i(\\pi/4 - 5\\pi/4)} = 6 e^{-i\\pi} = 6(\\cos(-\\pi) + i\\sin(-\\pi)) = 6(-1 + 0) = -6$.",
      "hint": "Multiply the coefficients and add the exponents, then evaluate the resulting trigonometric expression."
    },
    {
      "id": "W5-T4-Q08",
      "week": 5,
      "tier": "extra",
      "topic": "Bayes Theorem Concept",
      "type": "single_select",
      "question": "Which of the following formulas correctly expresses Bayes' Theorem?",
      "options": [
        { "id": "W5-T4-Q08-opt0", "text": "$P(A \\mid B) = \\frac{P(B \\mid A)P(A)}{P(B)}$" },
        { "id": "W5-T4-Q08-opt1", "text": "$P(A \\mid B) = \\frac{P(A \\mid B)P(B)}{P(A)}$" },
        { "id": "W5-T4-Q08-opt2", "text": "$P(A \\mid B) = P(A)P(B)$" },
        { "id": "W5-T4-Q08-opt3", "text": "$P(A \\mid B) = P(A) + P(B)$" }
      ],
      "correct_indices": ["W5-T4-Q08-opt0"],
      "explanation": "Bayes' Theorem relates conditional and marginal probabilities: $P(A \\mid B) = \\frac{P(B \\mid A)P(A)}{P(B)}$.",
      "hint": "Bayes' theorem is derived directly from the definition of conditional probability."
    },
    {
      "id": "W5-T4-Q09",
      "week": 5,
      "tier": "extra",
      "topic": "Sample Variance Defect Case",
      "type": "single_select",
      "question": "If a sample has variance $s^2 = 0.032$, what is the exact sum of squared deviations from the mean, $\\sum(x_i - \\bar{x})^2$, given the sample size is $n=6$?",
      "options": [
        { "id": "W5-T4-Q09-opt0", "text": "0.16" },
        { "id": "W5-T4-Q09-opt1", "text": "0.192" },
        { "id": "W5-T4-Q09-opt2", "text": "0.032" },
        { "id": "W5-T4-Q09-opt3", "text": "0.80" }
      ],
      "correct_indices": ["W5-T4-Q09-opt0"],
      "explanation": "Sample variance is $s^2 = \\frac{\\sum(x_i-\\bar{x})^2}{n-1}$. Here, $0.032 = \\frac{\\sum(x_i-\\bar{x})^2}{5} \\implies \\sum(x_i-\\bar{x})^2 = 0.032 \\times 5 = 0.16$.",
      "hint": "Rearrange the sample variance formula to solve for the numerator sum, using $n-1 = 5$."
    },
    {
      "id": "W5-T4-Q10",
      "week": 5,
      "tier": "extra",
      "topic": "Complex conjugate sum",
      "type": "single_select",
      "question": "For any complex number $z = a+ib$, evaluate $z + \\overline{z}$.",
      "options": [
        { "id": "W5-T4-Q10-opt0", "text": "$2a$" },
        { "id": "W5-T4-Q10-opt1", "text": "$2ib$" },
        { "id": "W5-T4-Q10-opt2", "text": "$a^2+b^2$" },
        { "id": "W5-T4-Q10-opt3", "text": "$0$" }
      ],
      "correct_indices": ["W5-T4-Q10-opt0"],
      "explanation": "$z + \\overline{z} = (a+ib) + (a-ib) = 2a$ (twice the real part).",
      "hint": "Add $a+ib$ and $a-ib$ together and see which terms cancel out."
    }
  ]
};
