// This file contains the complete question data structure (allQuizData)
// for the Proofs and Induction Multiple-Select Quiz.
const quizTitle = "4001CMD MCQ Quiz 3: Proofs and Induction";
const allQuizData = [
    {
        id: 1,
        question: 'Which of the following statements can be directly justified using the <strong>Additive Commutativity</strong> (Axiom 3) or <strong>Multiplicative Associativity</strong> (Axiom 6) axioms for natural numbers (\\(\\mathbb{N}\\))?',
        options: [
            'If \\(a(b+c) = 5\\), then \\(ab+ac = 5\\).',
            '\\(x + (y+z) = (x+y) + z\\).',
            '\\(p(qr) = q(pr)\\).',
            '\\(m+n = n+m\\).',
            'If \\(a=b\\), then \\(a+c=b+c\\).'
        ],
        correct: [2, 3],
        explanation: 'Rationale:\n- <b>A:</b> Uses <b>Left Distributivity</b> (Axiom 9).\n- <b>B:</b> Uses <b>Additive Associativity</b> (Axiom 4).\n- <b>C:</b> \\(p(qr) = q(pr)\\) involves both <b>Multiplicative Commutativity</b> and <b>Associativity</b> for the manipulation.\n- <b>D:</b> This is <b>Additive Commutativity</b> (Axiom 3).\n- <b>E:</b> This is a property of equality, not a direct axiom listed for Commutativity or Associativity.'
    },
    {
        id: 2,
        question: 'Suppose \\(a, b, c \\in \\mathbb{N}\\). If \\(a\\) is a multiple of \\(b\\), and \\(c\\) is any natural number, select all statements that must be true based on the <strong>definition of multiples</strong> and the <strong>closure axioms</strong> (Axiom 1 & 2).',
        options: [
            '\\(a=rb\\) for some \\(r \\in \\mathbb{N}\\).',
            '\\(a+c\\) is a multiple of \\(b\\).',
            '\\(ac\\) is a multiple of \\(b\\).',
            '\\(b\\) is a multiple of \\(a\\).',
            '\\(a/b \\in \\mathbb{N}\\).'
        ],
        correct: [0, 2],
        explanation: 'Rationale:\n- <b>A:</b> This is the direct <b>definition of multiples</b>.\n- <b>B:</b> Not necessarily true (e.g., \\(a=4, b=2, c=1\\), then \\(a+c=5\\), not a multiple of 2).\n- <b>C:</b> If \\(a=rb\\), then \\(ac = (rb)c = (rc)b\\). Since \\(r, c \\in \\mathbb{N}\\), \\(rc \\in \\mathbb{N}\\) by <b>Multiplicative Closure</b>, making \\(ac\\) a multiple of \\(b\\).\n- <b>D:</b> Not necessarily true (e.g., \\(a=4, b=2\\)).\n- <b>E:</b> True, but it is a consequence, not a required part of the definition or closure axioms itself.'
    },
    {
        id: 3,
        question: 'Consider the statement \\(P(n): \\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}\\). For a proof by induction, select the correct step(s) when moving from the assumption \\(P(k)\\) (the <strong>Induction Hypothesis</strong>) to proving \\(P(k+1)\\).',
        options: [
            'The left-hand side (LHS) for \\(P(k+1)\\) is \\(\\sum_{r=1}^{k} r + (k+1)\\).',
            'The <strong>Induction Hypothesis</strong> is \\(\\sum_{r=1}^{k} r = \\frac{k(k+1)}{2}\\).',
            'Substituting the <strong>Induction Hypothesis</strong> into the LHS for \\(P(k+1)\\) gives \\(\\frac{k(k+1)}{2} + (k+1)\\).',
            'The simplified form of \\(\\frac{k(k+1)}{2} + (k+1)\\) must be \\(\\frac{(k+1)(k+2)}{2}\\).',
            '\\(P(k+1)\\) is \\(\\sum_{r=1}^{k+1} r = \\frac{k(k+1)}{2} + (k+1)\\).'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'Rationale:\n- <b>A:</b> Correct. The sum up to \\(k+1\\) is the sum up to \\(k\\) plus the final term \\((k+1)\\).\n- <b>B:</b> Correct. This is the statement \\(P(n)\\) evaluated at \\(n=k\\).\n- <b>C:</b> Correct. This is the substitution of the <b>Induction Hypothesis</b> into the LHS of \\(P(k+1)\\).\n- <b>D:</b> Correct. Algebraic simplification of \\(\\frac{k(k+1)}{2} + (k+1)\\) leads to \\(\\frac{k(k+1)+2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}\\).\n- <b>E:</b> Incorrect. \\(P(k+1)\\) is the statement \\(\\sum_{r=1}^{k+1} r = \\frac{(k+1)((k+1)+1)}{2}\\). The option given is the substitution step, not the full statement \\(P(k+1)\\).'
    },
    {
        id: 4,
        question: 'To prove that <strong>\\(3^n - 1\\) is a multiple of 2</strong> for all \\(n \\in \\mathbb{N}\\) by induction, select the correct steps to show that \\(P(k) \\Rightarrow P(k+1)\\). (Assume \\(P(k): 3^k - 1 = 2m\\) for some \\(m \\in \\mathbb{N}\\).)',
        options: [
            'The base case, \\(P(1)\\), is \\(3^1 - 1 = 2\\), which is a multiple of 2.',
            'For \\(n=k+1\\), we consider \\(3^{k+1}-1\\).',
            '\\(3^{k+1}-1 = 3 \\cdot 3^k - 1\\).',
            'Using the Induction Hypothesis, \\(3^{k+1}-1 = 3(2m+1) - 1 = 2(3m+1)\\).',
            'Since \\(3m+1 \\in \\mathbb{N}\\) by the closure axioms, \\(3^{k+1}-1\\) is a multiple of 2.'
        ],
        correct: [0, 1, 2, 3, 4],
        explanation: 'Rationale: All steps are necessary and correct.\n- <b>A:</b> Correct base case.\n- <b>B & C:</b> Correct algebraic setup for the \\(P(k+1)\\) term.\n- <b>D:</b> Correct substitution (since \\(3^k = 2m+1\\)) and factorization: \\(3(2m+1) - 1 = 6m+3-1 = 6m+2 = 2(3m+1)\\).\n- <b>E:</b> Correct conclusion based on the definition of a multiple of 2.'
    },
    {
        id: 5,
        question: 'A sequence \\(u_n\\) is defined recursively by \\(u_1 = 2\\) and \\(u_{n+1} = 2u_n - 1\\) for \\(n \\ge 1\\). Select all the correct statements.',
        options: [
            'The first few terms are \\(u_1=2, u_2=3, u_3=5, u_4=9\\).',
            'The formula \\(u_n = 2^{n-1} + 1\\) is a possible explicit formula for \\(u_n\\).',
            'The formula \\(u_n = 2^{n} - n\\) is a possible explicit formula for \\(u_n\\).',
            'If \\(u_k = 2^{k-1} + 1\\), then \\(u_{k+1} = 2(2^{k-1} + 1) - 1 = 2^k + 1\\).',
            '\\(u_{k+1}\\) derived in the previous step matches the explicit formula for \\(n=k+1\\), which is \\(2^{(k+1)-1} + 1 = 2^k + 1\\).'
        ],
        correct: [0, 1, 3, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. \\(u_2=2(2)-1=3\\), \\(u_3=2(3)-1=5\\), \\(u_4=2(5)-1=9\\).\n- <b>B:</b> Correct. It holds for \\(n=1, 2, 3, 4\\). (e.g., \\(u_4=2^{3}+1=9\\)).\n- <b>C:</b> Incorrect. \\(u_4\\) according to this formula is \\(2^4-4=16-4=12\\), but the actual \\(u_4=9\\).\n- <b>D:</b> Correct. This correctly applies the recursive definition to the conjectured formula.\n- <b>E:</b> Correct. \\(2^k+1\\) matches the explicit formula for \\(n=k+1\\), confirming the induction step.'
    },
    {
        id: 6,
        question: 'Which of the following are categorized as <strong>Multiplicative Axioms</strong> for the natural numbers (\\(\\mathbb{N}\\))?',
        options: [
            'Additive Closure (Axiom 1)',
            'Additive Commutativity (Axiom 3)',
            'Multiplicative Associativity (Axiom 6)',
            'Multiplicative Identity (Axiom 7)',
            'Left Distributivity (Axiom 9)'
        ],
        correct: [2, 3], 
        explanation: 'Rationale:\n- <b>A/B:</b> are Additive.\n- <b>C:</b> Multiplicative Associativity is a Multiplicative Axiom.\n- <b>D:</b> Multiplicative Identity (\\(n \\cdot 1 = n\\)) is a Multiplicative Axiom.\n- <b>E:</b> Distributivity involves both addition and multiplication.'
    },
    {
        id: 7,
        question: 'For \\(m, n \\in \\mathbb{N}\\), the <strong>Definition of </strong> \\( \\lt \\) states that \\(m < n\\) if and only if there exists \\(x \\in \\mathbb{N}\\) such that \\(m + x = n\\). Which of the following statements are equivalent to this definition?',
        options: [
            '\\(m + x = n\\) where \\(x\\) is a positive integer.',
            '\\(m = n - x\\) where \\(x \\in \\mathbb{N}\\).',
            '\\(m\\) is the successor of \\(n\\).',
            '\\(\\text{min}(m, n) = m\\).',
            '\\(n\\) is the successor of \\(m + (x-1)\\) where \\(x \\in \\mathbb{N}\\).'
        ],
        correct: [0, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. \\(\\mathbb{N}\\) consists of positive integers, so \\(x \\in \\mathbb{N}\\) means \\(x\\) is positive.\n- <b>B:</b> Incorrect, subtraction is not always closed in \\(\\mathbb{N}\\).\n- <b>C:</b> Incorrect, \\(n\\) is only the successor of \\(m\\) if \\(x=1\\).\n- <b>D:</b> Incorrect, this is true by definition, but not equivalent to the *algebraic* definition of \\(<\\).\n- <b>E:</b> Correct. If \\(m+x=n\\), then \\(m + (x-1)\\) is the predecessor of \\(n\\). This is a restatement of the definition using the concept of successor.'
    },
    {
        id: 8,
        question: 'If \\(a, b, z \\in \\mathbb{N}\\) and \\(4az = 4bz\\), which axioms are necessary to rigorously show that \\(a=b\\)?',
        options: [
            'Additive Cancellation',
            'Multiplicative Cancellation (Axiom 8)',
            'Additive Associativity (Axiom 4)',
            'Multiplicative Identity (Axiom 7)'
        ],
        correct: [1],
        explanation: 'Rationale:\n- <b>B:</b> The statement \\(a=b\\) follows directly from the <b>Multiplicative Cancellation Axiom (Axiom 8)</b>: If \\(Az\' = Bz\'\\), then \\(A=B\\). Here, let \\(A=a\\) and \\(B=b\\), and \\(z\'=4z\\). Since \\(4z \\in \\mathbb{N}\\) by Multiplicative Closure, we can cancel \\(4z\\) from both sides.\n- The other axioms are not directly needed for the cancellation step.'
    },
    {
        id: 9,
        question: 'For the statement \\(P(n): n < 2^n\\) (for \\(n \\in \\mathbb{N}\\)), which option correctly states the <strong>Base Case</strong> \\(P(1)\\) and its verification?',
        options: [
            '\\(P(1)\\) states \\(1 < 2^1\\), which is \\(1 < 2\\). This is true.',
            '\\(P(1)\\) states \\(1 < 2\\), but this requires the ordering axiom to prove.',
            'The base case should start at \\(n=2\\), not \\(n=1\\).',
            '\\(P(1)\\) is \\(2^1 < 1\\), which is false.'
        ],
        correct: [0],
        explanation: 'Rationale:\n- <b>A:</b> Correct. The base case for natural numbers is \\(n=1\\), and \\(1 < 2^1\\) is \\(1 < 2\\), which is true.\n- <b>B:</b> While the ordering axiom is needed for the inequality, the statement \\(1 < 2^1\\) itself is the correct *setup* of \\(P(1)\\).\n- <b>C/D:</b> are incorrect about the starting point or the statement itself.'
    },
    {
        id: 10,
        question: 'When using induction to prove \\(P(n): \\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}\\), which algebraic expression is the target <strong>Right-Hand Side (RHS) of \\(P(k+1)\\)</strong>?',
        options: [
            '$$\\frac{(k+1)(k+2)(2k+3)}{6}$$',
            '$$\\frac{k(k+1)(2k+1)}{6} + (k+1)^2$$',
            '$$\\frac{(k+1)(k+1)(2(k+1)+1)}{6}$$',
            '$$\\frac{(k+1)(k+2)(2(k+1)+1)}{6}$$',
        ],
        correct: [0, 3],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This is the fully expanded and factored RHS for \\(n=(k+1)\\).\n- <b>B:</b> This is the correct LHS for \\(P(k+1)\\) after applying the Induction Hypothesis, not the final target RHS.\n- <b>C:</b> This is algebraically incorrect. \\(2(k+1)+1 = 2k+3\\).\n- <b>D:</b> Correct. This is the definition of \\(P(n)\\) evaluated at \\(n=k+1\\), before simplification, which is \\(\\frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}\\).'
    },
    {
        id: 11,
        question: 'Given \\(a, k \\in \\mathbb{N}\\). If \\(a=3k+1\\), which expressions for \\(a(k+1)\\) are correct applications of the <strong>Left Distributivity Axiom (Axiom 9)</strong>, potentially combined with Commutativity (Axiom 5)?',
        options: [
            '\\((3k+1)(k) + (3k+1)(1)\\)',
            '\\(3k(k+1) + 1(k+1)\\)',
            '\\(a k + a 1\\)',
            '\\(a k + a\\)'
        ],
        correct: [1, 2, 3],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect application. It distributes \\(a\\) over the sum \\(k+1\\), not the sum \\(3k+1\\) over \\(k+1\\).\n- <b>B:</b> Correct. This is the result of distributing \\((k+1)\\) over the sum \\((3k+1)\\), which requires Commutativity and Distributivity.\n- <b>C:</b> Correct. Direct application of Distributivity: \\(a(k+1) = a k + a 1\\).\n- <b>D:</b> Correct. Since \\(a 1 = a\\) by Multiplicative Identity (Axiom 7), \\(a k + a 1 = a k + a\\).'
    },
    {
        id: 12,
        question: 'Which of the following statements about \\(a, b \\in \\mathbb{N}\\) (Natural Numbers) are always true based on the axioms?',
        options: [
            '\\(a+b \\in \\mathbb{N}\\).',
            '\\(a-b \\in \\mathbb{N}\\).',
            '\\(a b \\in \\mathbb{N}\\).',
            'If \\(a \\lt b\\), then \\(b=a+1\\).',
        ],
        correct: [0, 2],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This is <b>Additive Closure (Axiom 1)</b>.\n- <b>B:</b> Incorrect. Subtraction is not closed in \\(\\mathbb{N}\\) (e.g., \\(1-5\\) is not in \\(\\mathbb{N}\\)). \n- <b>C:</b> Correct. This is <b>Multiplicative Closure (Axiom 2)</b>.\n- <b>D:</b> Incorrect. This is only true if \\(b\\) is the *immediate successor* of \\(a\\).'
    },
    {
        id: 13,
        question: 'To prove \\(P(n): n^3 + 2n\\) is a multiple of 3, select the correct formulation(s) of the <strong>Induction Hypothesis</strong> \\(P(k)\\) that can be used to prove \\(P(k+1)\\).',
        options: [
            '\\(k^3 + 2k = 3m\\) for some integer \\(m\\).',
            '\\(P(k)\\) is true, meaning \\(k^3 + 2k\\) is divisible by 3.',
            '\\(P(k+1): (k+1)^3 + 2(k+1) = 3m\'\\).',
            'The goal is to show \\(P(k+1) = P(k) + 3n\\) for some \\(n \\in \\mathbb{N}\\).'
        ],
        correct: [0, 1],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This is the formal definition of the hypothesis: \\(P(k)\\) is a multiple of 3.\n- <b>B:</b> Correct. This is the less formal, but equivalent, statement of the hypothesis.\n- <b>C:</b> Incorrect. This is the statement \\(P(k+1)\\), which is the conclusion to be proven, not the hypothesis.\n- <b>D:</b> Incorrect. This is the *method* of the proof, not the hypothesis statement itself.'
    },
    {
        id: 14,
        question: 'Which axioms are sufficient to prove that \\(a + (b + c) = c + (a + b)\\) for all \\(a, b, c \\in \\mathbb{N}\\)?',
        options: [
            'Additive Associativity (Axiom 4)',
            'Additive Commutativity (Axiom 3)',
            'Multiplicative Commutativity (Axiom 5)',
            'Multiplicative Cancellation (Axiom 8)'
        ],
        correct: [0, 1],
        explanation: 'Rationale: \n1. \\(a + (b + c) = (a + b) + c\\) (by <b>Associativity</b>)\n2. \\((a + b) + c = c + (a + b)\\) (by <b>Commutativity</b>)\nTherefore, both <b>Axiom 4</b> and <b>Axiom 3</b> are needed/used in the standard sequence of algebraic steps.'
    },
    {
        id: 15,
        question: 'The <strong>Principle of Strong Induction</strong> differs from the Principle of Weak Induction in its hypothesis step. Select the true statement(s) regarding Strong Induction.',
        options: [
            'The base case \\(P(1)\\) is always sufficient, regardless of the hypothesis used.',
            'The hypothesis assumes \\(P(k)\\) is true *only* for \\(n=k\\).',
            'The hypothesis assumes \\(P(j)\\) is true for *all* \\(j \\in \\mathbb{N}\\) such that \\(1 \\le j \\le k\\).',
            'It is equivalent to the Principle of Weak Induction, but often more convenient for recursive definitions.'
        ],
        correct: [2, 3],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. For some strong induction problems, you need to verify multiple base cases (e.g., \\(P(1)\\) and \\(P(2)\\)).\n- <b>B:</b> Incorrect. This describes the hypothesis of <b>Weak Induction</b>.\n- <b>C:</b> Correct. This is the definition of the <b>Strong Induction Hypothesis</b> (assuming the truth for *all* previous values up to \\(k\\)).\n- <b>D:</b> Correct. Strong Induction and Weak Induction are mathematically equivalent, but <b>Strong Induction</b> is often easier to apply when defining the next step \\(P(k+1)\\) depends on more than just \\(P(k)\\).'
    }
];
