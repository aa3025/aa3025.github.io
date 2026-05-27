/**
 * Data structure for Week 3 Lecture Notes - Axioms of Number Theory and Induction
 * Content based on the provided LaTeX source for Week 3
 */
const lectureData = {
    courseName: "4001CMD - Mathematical Skills for Computing Professionals",
    lectureTitle: "Week 3: Axioms of Number Theory and Induction",

    sections: [
        {
            title: "1. Proofs: The Challenge",
            id: "proofs-challenge",
            audioFile: "audio/slide_01.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>The Sum-to-N Problem</h3>\nCome up with an algorithm called <code>sumto</code> for a computer to calculate the sum of the first \\( N \\) integers:\n<ul>\n<li><code>sumto[5]</code> returns 15 because \\( 15 = 1 + 2 + 3 + 4 + 5 \\)</li>\n<li><code>sumto[100]</code> returns 5050</li>\n</ul>"
                },
                {
                    type: "paragraph",
                    text: "<b>Computer capabilities:</b>\n<ul>\n<li>Add, subtract, and multiply a defined finite sequence of numbers</li>\n<li>Divide any pair of integers <b>if</b> their quotient is an integer</li>\n<li>Assign a value to a variable, and modify that value</li>\n<li>Determine the truth value of a statement, and make a decision based on that truth value</li>\n</ul>"
                },
                {
                    type: "code",
                    text: "<h3>Strategy 1: Loop Algorithm</h3>\n<pre><code>let sumto[N]:\n{\n    s == 0;\n    i == 0;\n    while[i <= N]:\n    {\n        i == i + 1;\n        s == s + i;\n    }\n    return s;\n}</code></pre>\n<p>Problem: The bigger N is, the longer this will take.</p>"
                },
                {
                    type: "code",
                    text: "<h3>Strategy 2: Direct Formula</h3>\n<pre><code>let sumto[N]:\n{\n    p = N*(N+1);\n    s = p/2;\n    return s;\n}</code></pre>\n<p><b>Claim:</b> \\( 1 + 2 + 3 + \\cdots + N = \\frac{N(N+1)}{2} \\)</p>\n<p>Can we prove this claim?</p>"
                }
            ]
        },
        {
            title: "2. Why Study Proofs?",
            id: "why-study-proofs",
            audioFile: "audio/slide_02.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Importance of Proofs</h3>\n<ul>\n<li>Proofs can show that <b>two programs do the same thing</b> (especially important if one is much faster)</li>\n<li>Proofs exercise <b>logical reasoning</b> — essential for computer science</li>\n<li>To make computers better at decision-making, we need <b>logical deduction</b></li>\n<li>To prove anything, we need to agree on certain premises — <b>axioms</b></li>\n</ul>"
                },
                {
                    "type": "definition",
                    "text": "<h3>Axiom</h3>\nAn <b>axiom</b> in mathematics is a statement that is considered to be true without a formal proof."
                }
            ]
        },
        {
            title: "3. Axioms of Algebra (First Nine)",
            id: "axioms-of-algebra",
            audioFile: "audio/slide_03.wav",
            content: [
                {
                    "type": "key-concept",
                    "text": "<h3>The Axioms of Number Theory</h3>\nFor this module, we assume <b>eleven axioms of number theory</b>. First nine:\n\n<table border='1' style='border-collapse: collapse; width: 100%; margin: 10px 0;'>\n<th style='padding: 8px; text-align: left;'>Axiom</th><th style='padding: 8px; text-align: left;'>Statement</th>\n<tr><td style='padding: 8px;'><b>1. Additive closure</b></td><td style='padding: 8px;'>\\( \\forall a,b \\in \\mathbb{N}, a+b \\in \\mathbb{N} \\)</td></tr>\n<tr><td style='padding: 8px;'><b>2. Multiplicative closure</b></td><td style='padding: 8px;'>\\( \\forall a,b \\in \\mathbb{N}, ab \\in \\mathbb{N} \\)</td></tr>\n<tr><td style='padding: 8px;'><b>3. Additive commutativity</b></td><td style='padding: 8px;'>\\( \\forall a,b \\in \\mathbb{N}, a+b = b+a \\)</td></tr>\n<tr><td style='padding: 8px;'><b>4. Additive associativity</b></td><td style='padding: 8px;'>\\( \\forall a,b,c \\in \\mathbb{N}, a+(b+c) = (a+b)+c \\)</td></tr>\n<tr><td style='padding: 8px;'><b>5. Multiplicative commutativity</b></td><td style='padding: 8px;'>\\( \\forall a,b \\in \\mathbb{N}, ab = ba \\)</td></tr>\n<tr><td style='padding: 8px;'><b>6. Multiplicative associativity</b></td><td style='padding: 8px;'>\\( \\forall a,b,c \\in \\mathbb{N}, a(bc) = (ab)c \\)</td></tr>\n<tr><td style='padding: 8px;'><b>7. Multiplicative identity</b></td><td style='padding: 8px;'>\\( \\forall a \\in \\mathbb{N}, 1a = a \\)</td></tr>\n<tr><td style='padding: 8px;'><b>8. Multiplicative cancellation</b></td><td style='padding: 8px;'>If \\( \\exists z \\in \\mathbb{N} \\) s.t. \\( az = bz \\), then \\( a=b \\)</td></tr>\n<tr><td style='padding: 8px;'><b>9. Left Distributivity</b></td><td style='padding: 8px;'>\\( \\forall a,b,c \\in \\mathbb{N}, a(b+c) = ab + ac \\)</td></tr>\n</table>"
                }
            ]
        },
        {
            title: "4. Definitions",
            id: "definitions",
            audioFile: "audio/slide_04.wav",
            content: [
                {
                    type: "definition",
                    text: "<h3>Definition: Multiple</h3>\nLet \\( m, n \\in \\mathbb{N} \\). We say that \\( m \\) is a <b>multiple</b> of \\( n \\) if there exists a natural number \\( r \\) such that \\( m = rn \\).\n\n\\[ m \\text{ is a multiple of } n \\quad \\Leftrightarrow \\quad \\exists r \\in \\mathbb{N} \\text{ such that } m = rn \\]"
                },
                {
                    type: "paragraph",
                    text: "Unlike theorems, a definition can always be declared, even if it's silly."
                }
            ]
        },
        {
            title: "5. Proving Theorems",
            id: "proving-theorems",
            audioFile: "audio/slide_05.wav",
            content: [
                {
                    type: "math-example",
                    text: "<h3>Theorem</h3>\nIf \\( a, b \\in \\mathbb{N} \\) are multiples of \\( n \\), then for all \\( x, y \\in \\mathbb{N} \\), \\( xa + yb \\) is a multiple of \\( n \\).\n\n<p><b>Proof:</b> By definition, \\( \\exists r, s \\in \\mathbb{N} \\) such that \\( a = rn \\) and \\( b = sn \\).</p>\n\n\\[\n\\begin{aligned}\nxa + yb &= x(rn) + y(sn) \\\\\n&= (xr)n + (ys)n \\quad &\\text{(Axiom 6)}\\\\\n&= n(xr) + n(ys) \\quad &\\text{(Axiom 5)}\\\\\n&= n(xr + ys) \\quad &\\text{(Axiom 9)}\\\\\n&= (xr + ys)n \\quad &\\text{(Axiom 5)}\n\\end{aligned}\n\\]\n\nBy axioms 1 and 2, \\( xr + ys \\in \\mathbb{N} \\). Therefore \\( xa + yb \\) is a multiple of \\( n \\). \\( \\square \\)"
                }
            ]
        },
        {
            title: "6. The Relation <",
            id: "relation-less-than",
            audioFile: "audio/slide_06.wav",
            content: [
                {
                    type: "definition",
                    text: "<h3>Definition of <</h3>\nFor any \\( m, n \\in \\mathbb{N} \\), the statement \\( m < n \\) means that there exists an \\( x \\in \\mathbb{N} \\) such that \\( m + x = n \\):\n\n\\[ m < n \\quad \\Leftrightarrow \\quad \\exists x \\in \\mathbb{N} \\text{ s.t. } m + x = n \\]"
                },
                {
                    type: "math-example",
                    text: "<h3>Theorem: Transitivity of <</h3>\nIf \\( a < b \\) and \\( b < c \\), then \\( a < c \\).\n\n<p><b>Proof:</b> There exist \\( x, y \\in \\mathbb{N} \\) such that \\( a + x = b \\) and \\( b + y = c \\). Then:</p>\n\n\\[ a + (x + y) = (a + x) + y = b + y = c \\]\n\nSince \\( x + y \\in \\mathbb{N} \\) by Axiom 1, \\( a < c \\) by definition. \\( \\square \\)"
                },
                {
                    "type": "key-concept",
                    "text": "<h3>Axiom 10: Trichotomy</h3>\nFor all \\( m, n \\in \\mathbb{N} \\), exactly one of the following three statements is true: \\( m = n \\), \\( m < n \\), or \\( n < m \\).\n\n<p>Going forward, we let \\( > \\), \\( \\leq \\), and \\( \\geq \\) mean the usual things.</p>"
                }
            ]
        },
        {
            title: "7. Proving Universal Statements",
            id: "proving-universal-statements",
            audioFile: "audio/slide_07.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Axiom 11: Principle of Mathematical Induction</h3>\nSuppose that \\( P(n) \\) is a statement about \\( n \\) with the following properties:\n<ol>\n<li><b>Base case:</b> \\( P(1) \\) is true.</li>\n<li><b>Inductive step:</b> For all \\( k \\): If \\( P(k) \\) is true, then \\( P(k+1) \\) is true.</li>\n</ol>\nThen \\( P(n) \\) is true for all \\( n \\in \\mathbb{N} \\)."
                },
                {
                    "type": "paragraph",
                    "text": "Think of it like a line of dominoes:\n<ul>\n<li>If the \\( k \\)th domino falls, then the \\( (k+1) \\)th domino will fall.</li>\n<li>Knock down the 1st domino → all dominoes fall.</li>\n</ul>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Example: Induction Proof</h3>\n<b>Problem:</b> Prove that for all \\( n \\in \\mathbb{N} \\), \\( n^3 + 5n \\) is a multiple of 6.\n\n<p><b>Proof by induction:</b></p>\n\n<p><b>Base case (n=1):</b> \\( 1^3 + 5(1) = 1 + 5 = 6 \\), which is a multiple of 6.</p>\n\n<p><b>Inductive hypothesis:</b> Assume \\( k^3 + 5k = 6m \\) for some \\( m \\in \\mathbb{N} \\).</p>\n\n<p><b>Inductive step:</b> For \\( n = k+1 \\):</p>\n\n\\[\n\\begin{aligned}\n(k+1)^3 + 5(k+1) &= k^3 + 3k^2 + 3k + 1 + 5k + 5 \\\\\n&= (k^3 + 5k) + (3k^2 + 3k + 6) \\\\\n&= 6m + 3(k^2 + k + 2)\n\\end{aligned}\n\\]\n\n<p>If \\( k \\) is even, \\( k^2 + k \\) is even, so \\( k^2 + k + 2 \\) is even → \\( 3(\\text{even}) \\) is a multiple of 6.<br>\nIf \\( k \\) is odd, \\( k^2 + k \\) is even → same conclusion.</p>\n\n<p>Thus \\( 3(k^2 + k + 2) = 6r \\), so \\( (k+1)^3 + 5(k+1) = 6(m+r) \\).</p>\n\n<p>Therefore, by induction, \\( n^3 + 5n \\) is a multiple of 6 for all \\( n \\in \\mathbb{N} \\). \\( \\square \\)</p>"
                }
            ]
        },
        {
            title: "8. Gauss's Formula (Sum of First N Integers)",
            id: "gauss-formula",
            audioFile: "audio/slide_08.wav",
            content: [
                {
                    "type": "html-content",
                    "text": "<div class='image-container' style='text-align: center;'><center><img src='figures/gauss.jpg' alt='Carl Friedrich Gauss' style='width: 30%;'></center><p class='image-caption'>Carl Friedrich Gauss (1777-1855)</p></div>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>The Formula</h3>\n\\[ 1 + 2 + 3 + \\cdots + N = \\frac{N(N+1)}{2} \\]\n\n<p>This formula was discovered by Gauss as a child. Asked to sum numbers from 1 to 100, he noticed:</p>\n\n\\[\n\\begin{array}{ccccccccccc}\n1 & + & 2 & + & 3 & + & \\cdots & + & 99 & + & 100 & = & S \\\\\n100 & + & 99 & + & 98 & + & \\cdots & + & 2 & + & 1 & = & S \\\\\n\\hline\n101 & + & 101 & + & 101 & + & \\cdots & + & 101 & + & 101 & = & 2S\n\\end{array}\n\\]\n\n<p>There are 100 pairs, so \\( 2S = 100 \\times 101 \\), thus \\( S = \\frac{100 \\times 101}{2} \\).</p>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Induction Proof of Gauss's Formula</h3>\n<b>Theorem:</b> \\( \\displaystyle \\sum_{r=1}^N r = \\frac{N(N+1)}{2} \\)\n\n<p><b>Proof by induction:</b></p>\n\n<p><b>Base case (N=1):</b> \\( 1 = \\frac{1(1+1)}{2} = 1 \\) ✓</p>\n\n<p><b>Inductive hypothesis:</b> Assume true for \\( N = k \\): \\( 1 + 2 + \\cdots + k = \\frac{k(k+1)}{2} \\)</p>\n\n<p><b>Inductive step:</b> For \\( N = k+1 \\):</p>\n\n\\[\n\\begin{aligned}\n1 + 2 + \\cdots + k + (k+1) &= \\frac{k(k+1)}{2} + (k+1) \\\\\n&= \\frac{k^2 + k + 2(k+1)}{2} \\\\\n&= \\frac{k^2 + 3k + 2}{2} \\\\\n&= \\frac{(k+1)(k+2)}{2}\n\\end{aligned}\n\\]\n\n<p>This is the formula for \\( N = k+1 \\). By induction, the formula holds for all \\( N \\). \\( \\square \\)</p>"
                }
            ]
        },
        {
            title: "9. Summation Notation",
            id: "summation-notation",
            audioFile: "audio/slide_09.wav",
            content: [
                {
                    "type": "key-concept",
                    "text": "<h3>Sigma Notation</h3>\n\\[ \\sum_{r=1}^N r = 1 + 2 + 3 + \\cdots + N \\]\n\n<p>The symbol \\( \\sum \\) (Greek sigma) means \"sum\". The expression \\( \\sum_{r=1}^N a_r \\) means sum \\( a_r \\) from \\( r=1 \\) to \\( r=N \\).</p>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Example</h3>\n\\[\n\\begin{aligned}\n\\sum_{r=1}^5 (4r+3) &= (4(1)+3) + (4(2)+3) + (4(3)+3) + (4(4)+3) + (4(5)+3) \\\\\n&= 7 + 11 + 15 + 19 + 23 = 75\n\\end{aligned}\n\\]"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Proving a Summation Formula</h3>\n<b>Theorem:</b> \\( \\displaystyle \\sum_{r=1}^n (4r+3) = 2n^2 + 5n \\)\n\n<p><b>Proof by induction:</b></p>\n\n<p><b>Base case (n=1):</b> \\( \\sum_{r=1}^1 (4r+3) = 7 \\) and \\( 2(1)^2 + 5(1) = 7 \\) ✓</p>\n\n<p><b>Inductive hypothesis:</b> Assume \\( \\sum_{r=1}^k (4r+3) = 2k^2 + 5k \\)</p>\n\n<p><b>Inductive step:</b></p>\n\n\\[\n\\begin{aligned}\n\\sum_{r=1}^{k+1} (4r+3) &= \\sum_{r=1}^k (4r+3) + (4(k+1)+3) \\\\\n&= (2k^2 + 5k) + (4k + 7) \\\\\n&= 2k^2 + 9k + 7 \\\\\n&= 2(k^2 + 2k + 1) + 5(k+1) \\\\\n&= 2(k+1)^2 + 5(k+1)\n\\end{aligned}\n\\]\n\n<p>Thus the formula holds for all \\( n \\). \\( \\square \\)</p>"
                }
            ]
        },
        {
            title: "10. Sum of Cubes",
            id: "sum-of-cubes",
            audioFile: "audio/slide_10.wav",
            content: [
                {
                    "type": "math-example",
                    "text": "<h3>Discovering a Formula</h3>\n\\[\n\\sum_{r=1}^n r^3 = 1^3 + 2^3 + \\cdots + n^3\n\\]\n\n<p>First few sums:</p>\n\\[\n\\begin{aligned}\nS_1 &= 1 = 1^2 \\\\\nS_2 &= 9 = 3^2 = (1+2)^2 \\\\\nS_3 &= 36 = 6^2 = (1+2+3)^2 \\\\\nS_4 &= 100 = 10^2 = (1+2+3+4)^2 \\\\\nS_5 &= 225 = 15^2 = (1+2+3+4+5)^2\n\\end{aligned}\n\\]\n\n<p>Conjecture: \\( \\displaystyle \\sum_{r=1}^n r^3 = \\left(\\frac{n(n+1)}{2}\\right)^2 \\)</p>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Proof by Induction</h3>\n<p><b>Base case (n=1):</b> \\( 1^3 = 1 = \\left(\\frac{1(2)}{2}\\right)^2 \\) ✓</p>\n\n<p><b>Inductive hypothesis:</b> Assume \\( \\sum_{r=1}^k r^3 = \\frac{k^2(k+1)^2}{4} \\)</p>\n\n<p><b>Inductive step:</b></p>\n\n\\[\n\\begin{aligned}\n\\sum_{r=1}^{k+1} r^3 &= \\sum_{r=1}^k r^3 + (k+1)^3 \\\\\n&= \\frac{k^2(k+1)^2}{4} + (k+1)^3 \\\\\n&= (k+1)^2 \\left( \\frac{k^2}{4} + (k+1) \\right) \\\\\n&= (k+1)^2 \\frac{(k+2)^2}{4} \\\\\n&= \\left( \\frac{(k+1)(k+2)}{2} \\right)^2\n\\end{aligned}\n\\]\n\n<p>Thus the formula holds for all \\( n \\). \\( \\square \\)</p>"
                }
            ]
        },
        {
            title: "11. Recursion",
            id: "recursion",
            audioFile: "audio/slide_11.wav",
            content: [
                {
                    "type": "key-concept",
                    "text": "<h3>Recursive Sequences</h3>\nA <b>recursive sequence</b> is a sequence where terms are defined in terms of previous terms."
                },
                {
                    "type": "math-example",
                    "text": "<h3>Example: Factorial</h3>\n\\[ a_0 = 1, \\qquad a_n = n \\cdot a_{n-1} \\quad \\forall n \\geq 1 \\]\n\n<p>Then \\( a_6 = 6! = 720 \\).</p>"
                },
                {
                    "type": "code",
                    "text": "<h3>Factorial: Loop vs Recursion</h3>\n<p><b>Loop version:</b></p>\n<pre><code>let factorial[N]:\n{\n    p == 1;\n    i == 1;\n    while[i <= N]:\n    {\n        p == p * i;\n        i == i + 1;\n    }\n    return p;\n}</code></pre>\n\n<p><b>Recursive version:</b></p>\n<pre><code>let factorial[N]:\n{\n    if[N == 0]:\n    {\n        return 1;\n    }\n    else:\n    {\n        return N * factorial[N-1];\n    }\n}</code></pre>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Example: Exponential Growth</h3>\n\\[ P_0 = 1000, \\qquad P_n = 2P_{n-1} \\]\n\n<p>Closed form: \\( P_n = 1000 \\times 2^n \\)</p>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Example: Fibonacci Sequence</h3>\n\\[ f_1 = 1, \\quad f_2 = 1, \\quad f_n = f_{n-1} + f_{n-2} \\quad \\forall n \\geq 3 \\]\n\n\\[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \\ldots \\]\n\n<p>Closed form (Binet's formula):</p>\n\\[ f_n = \\frac{\\Phi^n - (-\\Phi)^{-n}}{\\sqrt{5}}, \\quad \\Phi = \\frac{1+\\sqrt{5}}{2} \\approx 1.618 \\text{ (golden ratio)} \\]\n\n<p>Example: \\( f_{100} = 354,224,848,179,261,915,075 \\)</p>"
                }
            ]
        },
        {
            title: "12. Induction with a New Starting Point",
            id: "induction-new-start",
            audioFile: "audio/slide_12.wav",
            content: [
                {
                    "type": "math-example",
                    "text": "<h3>Theorem</h3>\nFor all \\( n \\geq 8 \\), \\( n^2 > 7n + 1 \\).\n\n<p><b>Proof:</b></p>\n\n<p><b>Base case (n=8):</b> \\( 8^2 = 64 > 7(8)+1 = 57 \\) ✓</p>\n\n<p><b>Inductive hypothesis:</b> Assume \\( k^2 > 7k + 1 \\) for some \\( k \\geq 8 \\).</p>\n\n<p><b>Inductive step:</b> For \\( n = k+1 \\):</p>\n\n\\[\n\\begin{aligned}\n(k+1)^2 &= k^2 + 2k + 1 \\\\\n&> (7k+1) + 2k + 1 \\quad \\text{(by hypothesis)} \\\\\n&= 7(k+1) + (2k - 5) \\\\\n&> 7(k+1) + 1 \\quad \\text{(since } k \\geq 8 \\Rightarrow 2k-5 \\geq 11 > 1\\text{)}\n\\end{aligned}\n\\]\n\n<p>Thus the statement holds for all \\( n \\geq 8 \\). \\( \\square \\)</p>"
                }
            ]
        },
        {
            title: "13. Strong Induction",
            id: "strong-induction",
            audioFile: "audio/slide_13.wav",
            content: [
                {
                    "type": "key-concept",
                    "text": "<h3>Strong Induction</h3>\nIf \\( P(1) \\) is true, and if for every \\( k \\in \\mathbb{N} \\), \\( P(k+1) \\) holds whenever \\( P(\\ell) \\) holds for all \\( \\ell = 1, \\ldots, k \\), then \\( P(n) \\) is true for all \\( n \\in \\mathbb{N} \\).\n\n<p>In symbolic logic:</p>\n\\[ \\big( P(1) \\wedge \\forall k \\in \\mathbb{N}: [ (\\forall \\ell \\leq k: P(\\ell)) \\Rightarrow P(k+1) ] \\big) \\Rightarrow \\forall n \\in \\mathbb{N}: P(n) \\]"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Example: Recursive Sequence Proof</h3>\n<b>Problem:</b> Define \\( u_1 = 1, u_2 = 5, u_{n+1} = 5u_n - 6u_{n-1} \\) for \\( n \\geq 2 \\). Prove \\( u_n = 3^n - 2^n \\).\n\n<p><b>Proof by strong induction:</b></p>\n\n<p><b>Base cases:</b><br>\n\\( u_1 = 1 = 3^1 - 2^1 \\) ✓<br>\n\\( u_2 = 5 = 3^2 - 2^2 = 9 - 4 = 5 \\) ✓</p>\n\n<p><b>Inductive step:</b> Assume true for \\( n = k \\) and \\( n = k-1 \\). Then:</p>\n\n\\[\n\\begin{aligned}\nu_{k+1} &= 5u_k - 6u_{k-1} \\\\\n&= 5(3^k - 2^k) - 6(3^{k-1} - 2^{k-1}) \\\\\n&= 3^{k-1}(5 \\cdot 3 - 6) - 2^{k-1}(5 \\cdot 2 - 6) \\\\\n&= 3^{k-1}(15 - 6) - 2^{k-1}(10 - 6) \\\\\n&= 9 \\cdot 3^{k-1} - 4 \\cdot 2^{k-1} \\\\\n&= 3^{k+1} - 2^{k+1}\n\\end{aligned}\n\\]\n\n<p>Thus \\( u_n = 3^n - 2^n \\) for all \\( n \\). \\( \\square \\)</p>"
                }
            ]
        },
        {
            title: "14. The Well-Ordering Principle",
            id: "well-ordering-principle",
            audioFile: "audio/slide_14.wav",
            content: [
                {
                    "type": "definition",
                    "text": "<h3>Greatest and Least Members</h3>\nFor \\( X \\subseteq \\mathbb{N} \\):\n<ul>\n<li><b>Greatest member (maximum):</b> \\( g \\in X \\) such that \\( \\forall n \\in X, n \\leq g \\)</li>\n<li><b>Least member (minimum):</b> \\( \\ell \\in X \\) such that \\( \\forall n \\in X, n \\geq \\ell \\)</li>\n</ul>"
                },
                {
                    "type": "key-concept",
                    "text": "<h3>The Well-Ordering Principle</h3>\nEvery non-empty subset \\( X \\subseteq \\mathbb{N} \\) has a least element.\n\n<p>This can be proved using strong induction.</p>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Example</h3>\nFind the least and greatest members of \\( X = \\{ n \\in \\mathbb{N} : n^2 + 2n < 60 \\} \\).\n\n<p><b>Solution:</b> Checking values:\n<ul>\n<li>\\( n=1: 1+2=3 < 60 \\) ✓</li>\n<li>\\( n=2: 4+4=8 < 60 \\) ✓</li>\n<li>\\( n=3: 9+6=15 < 60 \\) ✓</li>\n<li>\\( n=4: 16+8=24 < 60 \\) ✓</li>\n<li>\\( n=5: 25+10=35 < 60 \\) ✓</li>\n<li>\\( n=6: 36+12=48 < 60 \\) ✓</li>\n<li>\\( n=7: 49+14=63 < 60 \\) ✗</li>\n</ul>\nThus \\( X = \\{1,2,3,4,5,6\\} \\).<br>\nLeast member: 1, Greatest member: 6.</p>"
                }
            ]
        },
        {
            title: "15. Summary",
            id: "summary-week3",
            audioFile: "audio/slide_15.wav",
            content: [
                {
                    "type": "key-concept",
                    "text": "<h3>Key Takeaways</h3>\n<ul>\n<li>Proofs about \\( \\mathbb{N} \\) are derived from the <b>eleven axioms of arithmetic</b></li>\n<li>The eleventh axiom is the <b>Principle of Mathematical Induction</b></li>\n<li><b>Summation notation \\( \\sum \\)</b> is like a mathematical \"for-loop\"</li>\n<li><b>Recursive sequences</b> are defined in terms of previous terms</li>\n<li>Discovering formulas is hard; <b>proving them with induction</b> is often straightforward</li>\n<li>Induction can start at any integer (not just 1) — just prove the base case at the starting point</li>\n<li><b>Strong induction</b> allows assuming the statement holds for all smaller values</li>\n<li>The <b>Well-Ordering Principle</b> states every non-empty subset of \\( \\mathbb{N} \\) has a least element</li>\n</ul>"
                }
            ]
        }
    ]
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}