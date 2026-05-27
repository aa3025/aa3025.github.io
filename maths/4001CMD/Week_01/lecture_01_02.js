/**
 * Data structure for Week 1.2 Lecture Notes - Logic I: Propositions and Proofs
 * Content based on the provided LaTeX source for Week 1.2
 */
const lectureData = {
    courseName: "4001CMD - Mathematical Skills for Computing Professionals",
    lectureTitle: "Week 1.2: Logic I: Propositions and Proofs",

    sections: [
        {
            title: "1. Thinking with Numbers",
            id: "thinking-with-numbers",
            audioFile: "audio_2/slide_01.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Mathematical Statements</h3>\nA mathematical statement like \"15 is a multiple of 3\" can be expressed symbolically as:\n\\[ \\exists k \\in \\mathbb{N} : 15 = 3k \\]"
                },
                {
                    type: "paragraph",
                    text: "Let's unpack this notation:\n<ul>\n<li><b>\\( \\exists \\)</b> — \"there exists\" (existential quantifier)</li>\n<li><b>\\( k \\in \\mathbb{N} \\)</b> — \"k is in the set of Natural numbers\"</li>\n<li><b>\\( : \\)</b> — \"such that\"</li>\n</ul>"
                },
                {
                    type: "math-example",
                    text: "<h3>Example: True Statement</h3>\nStatement: 15 is a multiple of 3, i.e., \\( \\exists k \\in \\mathbb{N} : 15 = 3k \\)\n\n<p><b>Proof:</b> This is true because \\( k = 5 \\) works: \\( 3 \\times 5 = 15 \\).</p>"
                },
                {
                    type: "math-example",
                    text: "<h3>Example: False Statement</h3>\nStatement: 20 is a multiple of 3, i.e., \\( \\exists k \\in \\mathbb{N} : 20 = 3k \\)\n\n<p><b>Proof:</b> If \\( 20 = 3k \\) for some positive integer \\( k \\), then since \\( 18 = 3(6) \\) and \\( 21 = 3(7) \\), the integer \\( k \\) would need to lie between 6 and 7. There are no such integers. Hence, this proposition is <b>false</b>.</p>"
                }
            ]
        },
        {
            title: "2. Propositions and Proofs: Terminology",
            id: "propositions-proofs-terminology",
            audioFile: "audio_2/slide_02.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Key Definitions</h3>\n<ul>\n<li><b>Proposition:</b> A statement that is either true or false.</li>\n<li><b>Axiom / Postulate / Assumption:</b> A statement taken to be true as a starting point for reasoning.</li>\n<li><b>Theorem:</b> A true statement.</li>\n<li><b>Nontheorem:</b> A false statement (its negation is a theorem).</li>\n<li><b>Proof:</b> A mathematically and logically valid explanation for why a theorem is true.</li>\n</ul>"
                },
                {
                    "type": "html-content",
                    "text": "<div class='image-container' style='text-align: center;'><center><img src='figures/proof.png' alt='Proof concept' style='width: 40%;'></center><p class='image-caption'>The concept of proof in mathematics</p></div>"
                },
                {
                    "type": "definition",
                    "text": "<h3>Formal Definition of Proof</h3>\nA <b>proof</b> is a finite sequence of statements, each of which is either an <b>axiom</b>, an <b>assumption</b>, or follows from the preceding statements by a rule of <b>inference</b>, concluding with the statement that is being proven."
                }
            ]
        },
        {
            title: "3. Compound Statements: AND, OR, NOT",
            id: "compound-statements-and-or",
            audioFile: "audio_2/slide_03.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Logical Connectives</h3>\nIn English, we can modify, combine, and relate propositions with words such as:\n<ul>\n<li><b>NOT</b> (\\( \\neg \\) or \\( \\bar{P} \\)) — Negation</li>\n<li><b>AND</b> (\\( \\land \\)) — Conjunction</li>\n<li><b>OR</b> (\\( \\lor \\)) — Disjunction</li>\n<li><b>IMPLIES</b> (\\( \\implies \\)) — Conditional</li>\n<li><b>IF AND ONLY IF</b> (\\( \\iff \\)) — Biconditional</li>\n</ul>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Truth Tables</h3>\n<p><b>Negation (NOT):</b></p>\n<table border='1' style='border-collapse: collapse; margin: 10px 0;'>\n<th style='padding: 8px;'>\\( P \\)</th><th style='padding: 8px;'>\\( \\neg P \\)</th>\n<tr><td style='padding: 8px;'>T</td><td style='padding: 8px;'>F</td></tr>\n<tr><td style='padding: 8px;'>F</td><td style='padding: 8px;'>T</td></tr>\n</table>\n\n<p><b>AND and OR:</b></p>\n<table border='1' style='border-collapse: collapse; margin: 10px 0;'>\n<th style='padding: 8px;'>\\( P \\)</th><th style='padding: 8px;'>\\( Q \\)</th><th style='padding: 8px;'>\\( P \\land Q \\)</th><th style='padding: 8px;'>\\( P \\lor Q \\)</th>\n<tr><td style='padding: 8px;'>T</td><td style='padding: 8px;'>F</td><td style='padding: 8px;'>F</td><td style='padding: 8px;'>T</td></tr>\n<tr><td style='padding: 8px;'>F</td><td style='padding: 8px;'>T</td><td style='padding: 8px;'>F</td><td style='padding: 8px;'>T</td></tr>\n<tr><td style='padding: 8px;'>T</td><td style='padding: 8px;'>T</td><td style='padding: 8px;'>T</td><td style='padding: 8px;'>T</td></tr>\n<tr><td style='padding: 8px;'>F</td><td style='padding: 8px;'>F</td><td style='padding: 8px;'>F</td><td style='padding: 8px;'>F</td></tr>\n</table>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Examples</h3>\n<ul>\n<li>200 is a multiple of 2 <b>and</b> 5 — <b>True</b> (200 = 2×100 = 5×40)</li>\n<li>81 is a multiple of 3 <b>and</b> 5 — <b>False</b> (81 is not a multiple of 5)</li>\n<li>81 is a multiple of 3 <b>or</b> 5 — <b>True</b> (81 = 3×27)</li>\n<li>60 is a multiple of 6 <b>or</b> 10 — <b>True</b> (60 = 6×10)</li>\n</ul>"
                }
            ]
        },
        {
            title: "4. Implication (IF...THEN)",
            id: "implication-if-then",
            audioFile: "audio_2/slide_04.mp3",
            content: [
                {
                    type: "definition",
                    text: "<h3>Implication \\( P \\implies Q \\)</h3>\nAn implication is true exactly when the if-part is false or the then-part is true."
                },
                {
                    type: "math-example",
                    text: "<h3>Truth Table for \\( P \\implies Q \\)</h3>\n<table border='1' style='border-collapse: collapse; margin: 10px 0;'>\n<th style='padding: 8px;'>\\( P \\)</th><th style='padding: 8px;'>\\( Q \\)</th><th style='padding: 8px;'>\\( P \\implies Q \\)</th>\n<tr><td style='padding: 8px;'>T</td><td style='padding: 8px;'>T</td><td style='padding: 8px;'>T</td></tr>\n<tr><td style='padding: 8px;'>T</td><td style='padding: 8px;'>F</td><td style='padding: 8px;'>F</td></tr>\n<tr><td style='padding: 8px;'>F</td><td style='padding: 8px;'>T</td><td style='padding: 8px;'>T</td></tr>\n<tr><td style='padding: 8px;'>F</td><td style='padding: 8px;'>F</td><td style='padding: 8px;'>T</td></tr>\n</table>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Examples</h3>\n<ul>\n<li><b>If</b> I am a vegetarian, <b>then</b> I won't have chicken tonight for dinner — <b>True</b> (logically follows)</li>\n<li><b>If</b> 30,000,000 is a multiple of 375, <b>then</b> so is 60,000,000 — <b>True</b> (if 30,000,000 = 375k, then 60,000,000 = 375(2k))</li>\n<li><b>If</b> the Riemann Hypothesis is true, <b>then</b> \\( x^2 \\ge 0 \\) for every real number x — <b>True</b> (the then-part is always true)</li>\n</ul>"
                }
            ]
        },
        {
            title: "5. IFF (If and Only If)",
            id: "iff-if-and-only-if",
            audioFile: "audio_2/slide_05.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Biconditional \\( P \\iff Q \\)</h3>\nThe proposition <b>\\( P \\) if and only if \\( Q \\)</b> asserts that \\( P \\) and \\( Q \\) are logically equivalent; that is, either both are true or both are false.\n\n<p>In other words: \\( (P \\implies Q) \\land (Q \\implies P) \\) is equivalent to \\( P \\iff Q \\).</p>"
                },
                {
                    type: "math-example",
                    text: "<h3>Truth Table for \\( P \\iff Q \\)</h3>\n<table border='1' style='border-collapse: collapse; margin: 10px 0;'>\n<th style='padding: 8px;'>\\( P \\)</th><th style='padding: 8px;'>\\( Q \\)</th><th style='padding: 8px;'>\\( P \\iff Q \\)</th>\n<tr><td style='padding: 8px;'>T</td><td style='padding: 8px;'>T</td><td style='padding: 8px;'>T</td></tr>\n<tr><td style='padding: 8px;'>T</td><td style='padding: 8px;'>F</td><td style='padding: 8px;'>F</td></tr>\n<tr><td style='padding: 8px;'>F</td><td style='padding: 8px;'>T</td><td style='padding: 8px;'>F</td></tr>\n<tr><td style='padding: 8px;'>F</td><td style='padding: 8px;'>F</td><td style='padding: 8px;'>T</td></tr>\n</table>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Example</h3>\n\\[ x^2 - 4 \\ge 0 \\iff |x| \\ge 2 \\]\n\n<p>For some values of \\( x \\), both inequalities are true. For other values of \\( x \\), neither inequality is true. In every case, however, the proposition as a whole is true.</p>"
                }
            ]
        },
        {
            title: "6. Summary of Logical Connectives",
            id: "summary-logical-connectives",
            audioFile: "audio_2/slide_06.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Notation Summary</h3>\n<table border='1' style='border-collapse: collapse; width: 100%;'>\n<th style='padding: 8px; text-align: left;'>English</th><th style='padding: 8px; text-align: left;'>Symbolic</th>\n<tr><td style='padding: 8px;'>NOT(P)</td><td style='padding: 8px;'>\\( \\neg P \\) or \\( \\bar{P} \\)</td></tr>\n<tr><td style='padding: 8px;'>P AND Q</td><td style='padding: 8px;'>\\( P \\land Q \\)</td></tr>\n<tr><td style='padding: 8px;'>P OR Q</td><td style='padding: 8px;'>\\( P \\lor Q \\)</td></tr>\n<tr><td style='padding: 8px;'>P IMPLIES Q</td><td style='padding: 8px;'>\\( P \\implies Q \\)</td></tr>\n<tr><td style='padding: 8px;'>if P then Q</td><td style='padding: 8px;'>\\( P \\implies Q \\)</td></tr>\n<tr><td style='padding: 8px;'>P IFF Q</td><td style='padding: 8px;'>\\( P \\iff Q \\)</td></tr>\n</table>\n\n<h3>Quantifiers</h3>\n<table border='1' style='border-collapse: collapse; width: 100%;'>\n<th style='padding: 8px; text-align: left;'>Symbol</th><th style='padding: 8px; text-align: left;'>Meaning</th>\n<tr><td style='padding: 8px;'>\\( \\exists \\)</td><td style='padding: 8px;'>There exists — Existential quantifier</td></tr>\n<tr><td style='padding: 8px;'>\\( \\forall \\)</td><td style='padding: 8px;'>For all — Universal quantifier</td></tr>\n</table>"
                },
                {
                    "type": "paragraph",
                    "text": "<b>Note:</b> \\( P \\implies Q \\) is logically equivalent to \\( \\neg P \\implies \\neg Q \\) (contrapositive)."
                }
            ]
        },
        {
            title: "7. Existential Statements",
            id: "existential-statements",
            audioFile: "audio_2/slide_07.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Existential Statements</h3>\nAn <b>existential statement</b> asserts the existence of an object with a particular property.\n\n<p>Notation: \\( \\exists x \\in S : P(x) \\) means \"there exists an x in set S such that property P(x) holds.\"</p>"
                },
                {
                    type: "math-example",
                    text: "<h3>Examples</h3>\n<ul>\n<li><b>\\( \\exists n \\in \\mathbb{N} : n^2 = 169 \\)</b> — <b>True</b> (n = 13 works)</li>\n<li><b>There exist numbers a, b, c for which \\( a^2 + b^2 = c^2 \\)</b> — <b>True</b> (3, 4, 5 works)</li>\n</ul>"
                },
                {
                    type: "paragraph",
                    text: "Existential statements do not necessarily assert uniqueness — there may be more than one object satisfying the property."
                }
            ]
        },
        {
            title: "8. Proving and Disproving Existential Statements",
            id: "proving-existential-statements",
            audioFile: "audio_2/slide_08.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Proving Existential Statements</h3>\nTo prove an existential statement is true, <b>produce (at least) one example</b>."
                },
                {
                    type: "math-example",
                    text: "<h3>Example: Euler's Conjecture</h3>\nEuler conjectured that \\( a^4 + b^4 + c^4 = d^4 \\) has no solution for positive integers. It took 218 years to find a counterexample:\n\\[ 95800^4 + 217519^4 + 414560^4 = 422481^4 \\]\nThus, the existential statement \"there exist a, b, c, d satisfying the equation\" is <b>true</b>."
                },
                {
                    type: "key-concept",
                    text: "<h3>Disproving Existential Statements</h3>\nTo disprove an existential statement, you must prove its negation — a <b>universal statement</b>."
                },
                {
                    type: "math-example",
                    text: "<h3>Example: Fermat's Last Theorem</h3>\nStatement: There exist numbers a, b, c such that \\( a^3 + b^3 = c^3 \\).\n\n<p>This is <b>false</b>. The true statement (Fermat's Last Theorem for n=3) is:</p>\n<p><b>For all numbers a, b, c:</b> \\( a^3 + b^3 \\neq c^3 \\)</p>"
                }
            ]
        },
        {
            title: "9. Universal Statements",
            id: "universal-statements",
            audioFile: "audio_2/slide_09.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Universal Statements</h3>\nA <b>universal statement</b> claims that a certain property holds for <b>all</b> elements in a set.\n\n<p>Notation: \\( \\forall x \\in S : P(x) \\) means \"for all x in set S, property P(x) holds.\"</p>"
                },
                {
                    type: "math-example",
                    text: "<h3>Example: Proving a Universal Statement</h3>\n<b>Theorem:</b> For all whole numbers \\( n \\), the number \\( n^2 + n \\) is even.\n\n<p><b>Proof:</b> We need to show there exists integer \\( k \\) such that \\( n^2 + n = 2k \\).</p>\n<ul>\n<li><b>Case 1:</b> \\( n \\) is even, say \\( n = 2r \\):<br>\n\\( n^2 + n = 4r^2 + 2r = 2(2r^2 + r) \\), which is even.</li>\n<li><b>Case 2:</b> \\( n \\) is odd, say \\( n = 2r + 1 \\):<br>\n\\( n^2 = (2r+1)^2 = 4r^2 + 4r + 1 \\)<br>\n\\( n^2 + n = (4r^2 + 4r + 1) + (2r + 1) = 4r^2 + 6r + 2 = 2(2r^2 + 3r + 1) \\), which is even.</li>\n</ul>\nThus, \\( n^2 + n \\) is even for all \\( n \\). \\( \\square \\)"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Disproving a Universal Statement</h3>\n<b>Statement:</b> For all whole numbers \\( n \\), \\( 4n - 1 \\) is prime.\n\n<p>This is <b>false</b>. Counterexample: When \\( n = 4 \\), \\( 4(4) - 1 = 15 = 3 \\times 5 \\), which is not prime.</p>"
                }
            ]
        },
        {
            title: "10. Proof by Contradiction",
            id: "proof-by-contradiction",
            audioFile: "audio_2/slide_10.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Proof by Contradiction (Reductio ad Absurdum)</h3>\n<ol>\n<li>Assume the <b>negation</b> of the statement you want to prove is true.</li>\n<li>Use logical reasoning to follow from this assumption.</li>\n<li>Arrive at a <b>contradiction</b> (a statement that is logically impossible).</li>\n<li>Since a false premise must have led to this contradiction, the initial assumption must be false.</li>\n<li>Therefore, the original statement must be true.</li>\n</ol>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Example: Proving \\( \\sqrt{2} \\) is Irrational</h3>\n<p><b>Statement:</b> \\( \\sqrt{2} \\) is irrational.</p>\n\n<p><b>Proof by contradiction:</b></p>\n<ol>\n<li>Assume the opposite: \\( \\sqrt{2} \\) is rational.</li>\n<li>Then \\( \\sqrt{2} = \\frac{p}{q} \\) where \\( p, q \\) are integers, \\( q \\neq 0 \\), and the fraction is in simplest form.</li>\n<li>Squaring both sides: \\( 2 = \\frac{p^2}{q^2} \\implies 2q^2 = p^2 \\). This means \\( p^2 \\) is even, so \\( p \\) must be even.</li>\n<li>Let \\( p = 2k \\). Substituting: \\( 2q^2 = (2k)^2 = 4k^2 \\implies q^2 = 2k^2 \\). This means \\( q^2 \\) is even, so \\( q \\) must also be even.</li>\n<li><b>Contradiction!</b> Both \\( p \\) and \\( q \\) are even, which contradicts the assumption that \\( \\frac{p}{q} \\) was in simplest form.</li>\n<li>Therefore, \\( \\sqrt{2} \\) is irrational. \\( \\square \\)</li>\n</ol>"
                }
            ]
        },
        {
            title: "11. Summary: Techniques of Proof",
            id: "summary-proof-techniques",
            audioFile: "audio_2/slide_11.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Proof Techniques Summary</h3>\n<ul>\n<li><b>Prove existential statement true:</b> Produce an example</li>\n<li><b>Disprove universal statement (prove existential false):</b> Produce a counterexample</li>\n<li><b>Prove universal statement:</b> Show it works for all cases (often using cases)</li>\n<li><b>Proof by contradiction:</b> Assume the opposite and derive a contradiction</li>\n</ul>"
                },
                {
                    type: "paragraph",
                    text: "These are not exhaustive! There are many other types of proofs. Some are easier or harder than others. But there is no strategy that works for proving every true statement."
                }
            ]
        },
        {
            title: "12. Next Class Preview",
            id: "next-week-preview",
            audioFile: "audio_2/slide_12.mp3",
            content: [
                {
                    type: "paragraph",
                    text: "<ul>\n<li>We will continue with logic, rules of inference, and proofs next week.</li>\n<li>Finish Quiz 1! (Quiz 2 on Logic will be given next Tuesday)</li>\n<li>Prepare Tutorial questions for your first Tutorial Session — Tutorial Sheets can be found on Aula in Week 1 section.</li>\n<li>One of the Tutorial groups will have their first Tutorial on Monday!</li>\n</ul>"
                }
            ]
        }
    ]
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}