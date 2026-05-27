/**
 * Data structure for Week 7 Lecture Notes - Part 2.
 * Advanced Modular Arithmetic Concepts and Algebraic Structures.
 *
 * IMPORTANT FORMATTING FIXES:
 * 1. All inline MathJax uses \\(...\\) (Correctly escaped for JS strings).
 * 2. All display MathJax uses \\[...\\] (Correctly escaped for JS strings).
 * 3. Bold text uses <b>...</b> HTML tags.
 * 4. All internal headings (###) have been replaced with <h4> tags.
 */
const lectureData = {
    courseName: "4001CMD - Mathematics for Computing Professionals",
    lectureTitle: "Week 7.2: Advanced Modular Arithmetic and Algebraic Structures",
    
    sections: [
        {
            title: "2. Recap: Modular Arithmetic",
            id: "recap-modular-arithmetic",
            audioFile: "audio/slide_15.wav",
            content: [
                {
                    type: "paragraph",
                    text: "Integers \\( a, b \\in \\mathbb{Z} \\) are equivalent modulo \\( m \\), written \\( a \\equiv b \\pmod{m} \\), if:"
                },
                {
                    type: "key-concept",
                    text: "<h3>Equivalent Definitions</h3>\n<ul>\n<li>\\( a - b \\) is a multiple of \\( m \\); or, equivalently,</li>\n<li>\\( a \\) and \\( b \\) have the same remainder when divided modulo \\( m \\)</li>\n<li>\\( a = qm + b \\) for some \\( q \\in \\mathbb{Z} \\)</li>\n</ul>"
                },
                {
                    type: "math-example",
                    text: "<h3>Example: What is \\( 17 \\pmod{7} \\)?</h3>\nAnswer: \\( 17 \\equiv 3 \\pmod{7} \\), or \\( 3 \\equiv 17 \\pmod{7} \\), because \\( 17 = 2(7) + 3 \\)"
                },
                {
                    type: "key-concept",
                    text: "<h3>Method of Squaring for Large Powers</h3>\nTo calculate \\( a^b \\pmod{m} \\) for large \\( a,b,m \\), use method of squaring:\n\\[a^2 \\equiv r_1 \\pmod{m}, \\quad a^4 \\equiv r_1^2 \\equiv r_2 \\pmod{m}\\]\n\\[a^8 \\equiv r_2^2 \\equiv r_3 \\pmod{m}, \\quad a^{16} \\equiv r_3^2 \\equiv r_4 \\pmod{m}\\]\nand so on, putting together \\( a^b \\pmod{m} \\) gradually"
                }
            ]
        },
        {
            title: "3. Modular Equivalence Classes",
            id: "modular-equivalence-classes",
            audioFile: "audio/slide_16.wav",
            content: [
                {
                    type: "paragraph",
                    text: "Sometimes it is useful to do modular arithmetic more 'abstractly' using equivalence classes."
                },
                {
                    type: "math-example",
                    text: "<h3>Example: Equivalence Class \\( [5]_3 \\)</h3>\nConsider 5 modulo 3. We know that \\( 5 \\equiv 2 \\pmod{3} \\). What else is 5 equivalent to modulo 3?\n\n5 is equivalent to 8, 11, 14, 17... and also \\( -1, -4, -7, \\ldots \\)\n\nWe call \\( [5]_3 \\) the set (or equivalence class) of all numbers equivalent to 5 modulo 3:\n\\[ [5]_3 = \\{\\ldots, -4, -1, 2, 5, 8, 11, \\ldots\\} \\]"
                },
                {
                    type: "math-example",
                    text: "<h3>Example: Equivalence Class \\( [6]_7 \\)</h3>\nThe equivalence class \\( [6]_7 \\) is the set of integers that are equivalent to 6 modulo 7:\n\\[ [6]_7 = \\{\\ldots, -8, -1, 6, 13, 20, \\ldots\\} \\]"
                }
            ]
        },
        {
            title: "4. The Set of Modular Integers \\( \\mathbb{Z}_m \\)",
            id: "set-modular-integers",
            audioFile: "audio/slide_17.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Important Observations</h3>\n<ul>\n<li>\\( [5]_3 = [2]_3 \\); this is basically shifting everything down by 3</li>\n<li>\\( [-4]_3 = [5]_3 \\) is the same as saying \\( -4 \\equiv 5 \\pmod{3} \\) (since \\( 5 + 4 = 9 \\))</li>\n</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Question: How many equivalence classes modulo 3?</h3>\nAnswer: There are 3 of them: \\( [0]_3 \\), \\( [1]_3 \\), and \\( [2]_3 \\). If \\( n \\) is any integer, then \\( [n]_3 \\) is the same as one of those three."
                },
                {
                    type: "math-example",
                    text: "<h3>Definition: \\( \\mathbb{Z}_m \\)</h3>\nWe call \\( \\mathbb{Z}_3 \\) the set of integers modulo 3:\n\\[ \\mathbb{Z}_3 = \\left\\{ [0]_3, [1]_3, [2]_3 \\right\\} \\]\n\nMore generally, if \\( m \\) is any integer, then \\( \\mathbb{Z}_m \\) is the set of integers modulo \\( m \\):\n\\[ \\mathbb{Z}_m = \\left\\{[0]_m, [1]_m, \\ldots, [m-1]_m\\right\\} \\]"
                }
            ]
        },
        {
            title: "5. Arithmetic in \\( \\mathbb{Z}_m \\)",
            id: "arithmetic-z-m",
            audioFile: "audio/slide_18.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Modular Arithmetic Operations</h3>\nEven though the elements of \\( \\mathbb{Z}_3 \\) are technically subsets, we often think of them as integers with algebraic structure:\n\\[ [a]_m + [b]_m = [a+b]_m \\]\n\\[ [a]_m \\times [b]_m = [ab]_m \\]"
                },
                {
                    type: "math-example",
                    text: "<h3>Consistency Check</h3>\nWe saw that \\( [2]_3 = [5]_3 \\). Is it true that \\( [1]_3 + [2]_3 = [1]_3 + [5]_3 \\)?\n\nYes: \\( [1]_3 + [2]_3 = [3]_3 = [0]_3 \\), and \\( [1]_3 + [5]_3 = [6]_3 = [0]_3 \\)"
                },
                {
                    type: "key-concept",
                    text: "<h3>Well-Defined Operations</h3>\nMore generally, if \\( [a]_m = [b]_m \\), and \\( [c]_m = [d]_m \\), then:\n\\[ [a]_m + [b]_m = [a+b]_m = [c+d]_m = [c]_m + [d]_m \\]\n\\[ [a]_m \\times [b]_m = [ab]_m = [cd]_m = [c]_m \\times [d]_m \\]\nModular arithmetic operations are well-defined."
                }
            ]
        },
        {
            title: "6. Algebraic Properties of \\( \\mathbb{Z}_m \\)",
            id: "algebraic-properties-z-m",
            audioFile: "audio/slide_19.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Theorem: Algebraic Structure of \\( \\mathbb{Z}_m \\)</h3>\nIf \\( m \\geq 2 \\), then for any \\( a,b,c \\in \\mathbb{Z} \\), we get:\n<ol>\n<li>\\( [a]_m + [b]_m = [b]_m + [a]_m \\) and \\( [a]_m[b]_m = [b]_m [a]_m \\) (commutativity)</li>\n<li>\\( \\left( [a]_m + [b]_m\\right) + [c]_m = [a]_m + \\left([b]_m + [c]_m\\right) \\) and \\( \\left([a]_m[b]_m\\right)[c]_m = [a]_m \\left([b]_m[c]_m\\right) \\) (associativity)</li>\n<li>\\( [a]_m + [0]_m = [a]_m \\) and \\( [a]_m[1]_m = [a]_m \\) (identity elements)</li>\n<li>\\( [a]_m\\left([b]_m + [c]_m\\right) = [a]_m[b]_m + [a]_m[c]_m \\) (distributivity)</li>\n<li>\\( [a]_m + [-a]_m = [0]_m \\) (additive inverses)</li>\n</ol>"
                },
                {
                    type: "paragraph",
                    text: "So most of the main properties of algebra that we're used to from \\( \\mathbb{Z} \\) carry over to \\( \\mathbb{Z}_m \\)."
                },
                {
                    type: "math-example",
                    text: "<h3>Simplified Notation</h3>\nOften, we'll drop the notation \\( [a]_m \\) and just say \\( a \\in \\mathbb{Z}_m \\). Whether we're talking about standard algebra in \\( \\mathbb{Z} \\) or modular algebra in \\( \\mathbb{Z}_m \\) will need to be determined from context.\n\nSo, for example, if we understand \\( 4, 6 \\in \\mathbb{Z}_7 \\), then \\( 4+6 = 10 = 3 \\) (in \\( \\mathbb{Z}_7 \\))."
                }
            ]
        },
        {
            title: "7. Cancellation in \\( \\mathbb{Z}_m \\)",
            id: "cancellation-z-m",
            audioFile: "audio/slide_20.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>A Property That May Not Carry Over</h3>\nTrue or false: If \\( a,b,c \\in \\mathbb{Z} \\), and if \\( ab = ac \\), then either \\( b=c \\) or \\( a=0 \\)?\n\nAnswer: <b>True</b>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Modular Case</h3>\nTrue or false: If \\( a,b,c \\in \\mathbb{Z}_m \\), and if \\( ab = ac \\), then either \\( b=c \\) or \\( a=0 \\)?\n\nThis one is <b>false in general!</b>"
                },
                {
                    type: "math-example",
                    text: "<h3>Counterexample in \\( \\mathbb{Z}_6 \\)</h3>\nIn \\( \\mathbb{Z}_6 \\), we have:\n\\[ 3 \\times 1 \\equiv 3 \\quad \\textrm{and} \\quad 3 \\times 5 \\equiv 15 \\equiv 3 \\pmod{6} \\]\nSo \\( 3 \\times 1 \\equiv 3 \\times 5 \\pmod{6} \\). But if we tried cancelling 3, we'd get \\( 1 \\equiv 5 \\pmod{6} \\), which is false! Cancellation is not guaranteed."
                },
                {
                    type: "math-example",
                    text: "<h3>Example Where Cancellation Works</h3>\nIn \\( \\mathbb{Z}_5 \\), however, we have:\n\\( 3 \\times 0 \\equiv 0 \\), \\( 3 \\times 1 \\equiv 3 \\), \\( 3 \\times 2 \\equiv 1 \\), \\( 3 \\times 3 \\equiv 4 \\), \\( 3 \\times 4 = 2 \\)\n\nSo, if \\( 3 \\times b \\equiv 3 \\times c \\pmod{5} \\), then since all of the mod-5 multiplication with 3 is unique, \\( b=c \\). Here, cancellation is allowed."
                }
            ]
        },
        {
            title: "8. Division and Invertible Elements",
            id: "division-invertible-elements",
            audioFile: "audio/slide_21.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Key Difference: Prime vs Composite Modulus</h3>\nYou can cancel elements in \\( \\mathbb{Z}_5 \\) but not in \\( \\mathbb{Z}_6 \\). What's different?\n\nAnswer: 5 is a prime number. 6 is not."
                },
                {
                    type: "key-concept",
                    text: "<h3>Zero Divisors</h3>\nIf \\( ab = ac \\), then \\( ab - ac = a(b-c) = 0 \\). In \\( \\mathbb{Z} \\), this means that either \\( a=0 \\) or \\( b-c=0 \\).\n\nRephrasing, if \\( r,s \\in \\mathbb{Z} \\) and \\( rs = 0 \\), then either \\( r=0 \\) or \\( s=0 \\).\n\nThis is false in \\( \\mathbb{Z}_6 \\), but it's true in \\( \\mathbb{Z}_5 \\). In \\( \\mathbb{Z}_6 \\), we have <b>zero divisors</b>: nonzero elements \\( r,s \\in \\mathbb{Z}_m \\) that multiply to give us \\( rs = 0 \\)."
                },
                {
                    type: "key-concept",
                    text: "<h3>Invertible Elements</h3>\nIf \\( r \\) is not a zero divisor, and is not 0, then \\( r \\) is <b>invertible</b>. That means there is a modular integer \\( s \\in \\mathbb{Z}_m \\) for which \\( rs = 1 \\) (in \\( \\mathbb{Z}_m \\)). We write \\( s = r^{-1} \\) in this case.\n\nNote that \\( r \\) is not a fraction! Writing \\( r^{-1} \\) is just there to remind us that \\( r^{-1} \\times r \\equiv 1 \\pmod{m} \\)."
                },
                {
                    type: "math-example",
                    text: "<h3>Example: Inverse in \\( \\mathbb{Z}_5 \\)</h3>\nWe saw that \\( 3 \\times 2 \\equiv 1 \\pmod{5} \\). So \\( 3^{-1} = 2 \\) in \\( \\mathbb{Z}_5 \\)."
                }
            ]
        },
        {
            title: "9. Zero Divisors and Invertible Elements Examples",
            id: "zero-divisors-invertible-examples",
            audioFile: "audio/slide_22.wav",
            content: [
                {
                    type: "math-example",
                    text: "<h3>Example: \\( \\mathbb{Z}_6 \\)</h3>\nWhat are the zero divisors of \\( \\mathbb{Z}_6 \\)? What are the invertible elements? What are their inverses?\n\nSolution: The question is really asking, 'what elements of \\( \\{1, 2,3,4,5\\} \\) multiply to give us a multiple of 6?'\n\nThere are three:\n<ul>\n<li>\\( 2 \\times 3 \\equiv 0 \\pmod{6} \\)</li>\n<li>\\( 3 \\times 2 \\equiv 0 \\pmod{6} \\)</li>\n<li>\\( 4 \\times 3 \\equiv 0 \\pmod{6} \\)</li>\n</ul>\nSo \\( 2, 3 \\) and \\( 4 \\) are zero divisors.\n\nWhat about the invertible elements? The only nonzero elements that are left are 1 and 5:\n<ul>\n<li>\\( 1 \\times 1 \\equiv 1 \\pmod{6} \\), so \\( 1^{-1} = 1 \\)</li>\n<li>\\( 5 \\times 5 \\equiv 1 \\pmod{6} \\), so \\( 5^{-1} = 5 \\) in \\( \\mathbb{Z}_6 \\)</li>\n</ul>"
                },
                {
                    type: "math-example",
                    text: "<h3>Example: \\( \\mathbb{Z}_7 \\)</h3>\nIn \\( \\mathbb{Z}_7 \\), we have:\n<ul>\n<li>\\( 1 \\times 1 \\equiv 1 \\pmod{7} \\)</li>\n<li>\\( 2 \\times 4 \\equiv 8 \\equiv 1 \\pmod{7} \\)</li>\n<li>\\( 3 \\times 5 \\equiv 15 \\equiv 1 \\pmod{7} \\)</li>\n<li>\\( 4 \\times 2 \\equiv 1 \\pmod{7} \\)</li>\n<li>\\( 5 \\times 3 \\equiv 1 \\pmod{7} \\)</li>\n<li>\\( 6 \\times 6 \\equiv 36 \\equiv 1 \\pmod{7} \\)</li>\n</ul>\nSo the invertible elements are \\( 1,2,3,4,5,6 \\)\n\nThis means that there are no zero divisors."
                }
            ]
        },
        {
            title: "10. Pattern: GCD and Invertibility",
            id: "gcd-invertibility-pattern",
            audioFile: "audio/slide_23.wav",
            content: [
                {
                    type: "math-example",
                    text: "<h3>Example: \\( \\mathbb{Z}_{10} \\)</h3>\nFor \\( \\mathbb{Z}_{10} \\), we find:\n<ul>\n<li>\\( 1 \\times 1 \\equiv 1 \\pmod{10} \\)</li>\n<li>\\( 2 \\times 5 \\equiv 0 \\pmod{10} \\)</li>\n<li>\\( 3 \\times 7 \\equiv 1 \\pmod{10} \\)</li>\n<li>\\( 4 \\times 5 \\equiv 0 \\pmod{10} \\)</li>\n<li>\\( 5 \\times 2 \\equiv 0 \\pmod{10} \\)</li>\n<li>\\( 6 \\times 5 \\equiv 0 \\pmod{10} \\)</li>\n<li>\\( 7 \\times 3 \\equiv 1 \\pmod{10} \\)</li>\n<li>\\( 8 \\times 5 \\equiv 0 \\pmod{10} \\)</li>\n<li>\\( 9 \\times 9 \\equiv 1 \\pmod{10} \\)</li>\n</ul>\nSo the invertible elements are \\( 1, 3, 7 \\) and 9, and the zero divisors are 2, 4, 5, 6, and 8."
                },
                {
                    type: "key-concept",
                    text: "<h3>Pattern Recognition</h3>\nWhat do we notice about the zero divisors?\n<ul>\n<li>For \\( \\mathbb{Z}_6 \\), the zero divisors are 2, 3, and 4</li>\n<li>For \\( \\mathbb{Z}_7 \\), there are no zero divisors</li>\n<li>For \\( \\mathbb{Z}_{10} \\), the zero divisors are 2, 4, 5, 6, and 8</li>\n</ul>\nSo, it appears that if \\( b \\in \\mathbb{Z}_m \\) is nonzero and \\( \\gcd(m,b) \\neq 1 \\), then \\( b \\) is a zero divisor."
                }
            ]
        },
        {
            title: "11. Theorem: Zero Divisors and GCD",
            id: "theorem-zero-divisors-gcd",
            audioFile: "audio/slide_24.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Theorem: Characterization of Zero Divisors</h3>\nIf \\( r \\in \\mathbb{Z}_m \\) and \\( \\gcd(r,m) > 1 \\), then \\( r \\) is a zero divisor.\n\nIn particular, when \\( p \\) is prime, there are no zero divisors of \\( \\mathbb{Z}_p \\), and every nonzero element of \\( \\mathbb{Z}_p \\) is invertible."
                },
                {
                    type: "math-example",
                    text: "<h3>Example: \\( \\mathbb{Z}_{126} \\)</h3>\nIn \\( \\mathbb{Z}_{126} \\), note \\( 126 = 2 \\times 3^2 \\times 7 \\)\n\nConsider \\( r = 70 = 2 \\times 5 \\times 7 \\). Then \\( \\gcd(126, 70) = 14 = 2 \\times 7 \\)\n\nSo, \\( 70 \\times 3^2 = 630 = 5 \\times 126 \\equiv 0 \\pmod{126} \\). 70 is a zero divisor.\n\nWe use \\( 3^2 \\) because \\( 126 = 2 \\times 3^2 \\times 7 \\) and \\( 70 = 2 \\times 5 \\times 7 \\), so \\( s=3^2 \\) was needed to make \\( 70s \\) a multiple of 126."
                },
                {
                    type: "key-concept",
                    text: "<h3>Theorem: Characterization of Invertible Elements</h3>\nIf \\( \\gcd(r,m) = 1 \\), then there are integers \\( x,y \\in \\mathbb{Z} \\) for which \\( rx + my = 1 \\).\n\nCorollary: If \\( r \\in \\mathbb{Z}_m \\) and \\( \\gcd(r,m) = 1 \\), then \\( r \\) is invertible.\n\nProof: By above Theorem, \\( rx = -my + 1 \\) for some \\( x,y \\in \\mathbb{Z} \\)\n\nReducing \\( x \\pmod{m} \\), \\( rx \\equiv 1 \\pmod{m} \\). QED"
                }
            ]
        },
{
    title: "12. Euler's Totient Function",
    id: "euler-totient-function",
    audioFile: "audio/slide_25.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>Euler's Totient Function \\( \\phi(n) \\)</h3>\nFor any positive integer \\( n \\), \\( \\phi(n) \\) counts how many positive integers less than or equal to \\( n \\) are relatively prime to \\( n \\).\n\nTwo numbers are relatively prime if their greatest common divisor is one."
        },
        {
            type: "math-example",
            text: "<h3>Special Case: Prime Numbers</h3>\nIf \\( p \\) is prime, \\( \\phi(p) = p-1 \\)\n\nExample: \\( \\phi(7) = 6 \\), since numbers 1, 2, 3, 4, 5, 6 are all relatively prime to 7."
        },
        {
            type: "math-example",
            text: "<h3>Composite Number Example</h3>\nFor a composite number like \\( 15 = 3 \\times 5 \\):\n\n\\( \\phi(3) = 2 \\) and \\( \\phi(5) = 4 \\)\n\nSince 3 and 5 are relatively prime: \\( \\phi(15) = \\phi(3) \\times \\phi(5) = 2 \\times 4 = 8 \\)\n\nVerification: Numbers relatively prime to 15 are: 1, 2, 4, 7, 8, 11, 13, 14"
        },
        {
            type: "math-example",
            text: "<h3>Prime Power Formula</h3>\nIf \\( n = p^k \\) where \\( p \\) is prime:\n\\[ \\phi(p^k) = p^k - p^{k-1} \\]\n\nExample: \\( 8 = 2^3 \\)\n\\[ \\phi(8) = 2^3 - 2^2 = 8 - 4 = 4 \\]\nThe numbers relatively prime to 8 are: 1, 3, 5, 7\n\nFor general \\( n \\) with multiple prime factors, the formula follows a consistent pattern based on the prime factorization."
        },
        {
            type: "key-concept",
            text: "<h3>Connection to Invertible Elements</h3>\nThe set \\( U_m \\) contains all invertible elements in \\( \\mathbb{Z}_m \\).\n\nAn element is in \\( U_m \\) if its greatest common divisor with \\( m \\) is one.\n\nTherefore, the number of elements in \\( U_m \\) is exactly \\( \\phi(m) \\).\n\nExample: In \\( \\mathbb{Z}_9 \\), the invertible elements are 1, 2, 4, 5, 7, 8. There are 6 of them, and indeed \\( \\phi(9) = 6 \\)."
        }
    ]
},
{
    title: "13. The Set \\( U_m \\) of Invertible Elements",
    id: "set-u-m-invertible",
    audioFile: "audio/slide_26.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>Definition: \\( U_m \\)</h3>\nLet \\( U_m \\subseteq \\mathbb{Z}_m \\) be the set of invertible elements.\n\nExample: \\( U_9 = \\{1, 2, 4, 5, 7, 8\\} \\)"
        },
        {
            type: "math-example",
            text: "<h3>Multiplication Property (When y is invertible)</h3>\nGiven \\( y \\in U_m \\), let \\( yU_m \\) be the set obtained by multiplying each element of \\( U_m \\) by \\( y \\) in \\( \\mathbb{Z}_m \\).\n\nExample with \\( y = 5 \\in U_9 \\):\n\\[ 5U_9 = \\{5\\cdot1, 5\\cdot2, 5\\cdot4, 5\\cdot5, 5\\cdot7, 5\\cdot8\\} \\]\n\\[ = \\{5, 10, 20, 25, 35, 40\\} = \\{5, 1, 2, 7, 8, 4\\} = U_9 \\quad (\\textrm{in } \\mathbb{Z}_9) \\]"
        },
        {
            type: "math-example",
            text: "<h3>What if y is NOT invertible?</h3>\nIf \\( y \\notin U_m \\) (i.e., y is a zero divisor), then \\( yU_m \\neq U_m \\).\n\nExample with \\( y = 3 \\notin U_9 \\):\n\\[ 3U_9 = \\{3\\cdot1, 3\\cdot2, 3\\cdot4, 3\\cdot5, 3\\cdot7, 3\\cdot8\\} \\]\n\\[ = \\{3, 6, 12, 15, 21, 24\\} = \\{3, 6, 3, 6, 3, 6\\} = \\{3, 6\\} \\quad (\\textrm{in } \\mathbb{Z}_9) \\]\nThis is much smaller than \\(U_9\\) and contains zero divisors!"
        },
        {
            type: "key-concept",
            text: "<h3>Important Fact</h3>\nIf \\( y \\in U_m \\), then \\( yU_m = U_m \\)\n\nThis is because multiplying all invertible elements by another invertible element simply rearranges them—it's a permutation.\n\nIf \\( y \\notin U_m \\), then \\( yU_m \\) is a proper subset of \\( \\mathbb{Z}_m \\) and may contain zero divisors."
        }
    ]
},
        {
            title: "14. Euler's Theorem",
            id: "euler-theorem",
            audioFile: "audio/slide_27.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Euler's Theorem</h3>\nIf \\( \\gcd(y,m) = 1 \\), then \\( y^{\\phi(m)} \\equiv 1 \\pmod{m} \\)"
                },
                {
                    type: "paragraph",
                    text: "<h4>Proof Sketch</h4>\nSay \\( \\phi(m) = k \\), and write out \\( U_m = \\{x_1, x_2, \\ldots, x_k\\} \\) (recall \\( U_m \\) is the set of invertible elements of \\( \\mathbb{Z}_m \\))\n\nLet \\( u \\) be the product of the invertible elements: \\( u = x_1 x_2 \\cdots x_k \\). Note that \\( u \\) itself is invertible.\n\nSince multiplying everything in \\( U_m \\) by \\( y \\) simply rearranges \\( U_m \\), we get:\n\\[ u \\equiv (yx_1)(yx_2) \\cdots (yx_k) \\equiv y^k x_1 x_2 \\cdots x_k \\equiv y^k u \\pmod{m} \\]\n\nBut multiplying both sides of this by \\( u^{-1} \\), we get:\n\\[ y^k \\equiv 1 \\pmod{m} \\quad \\textrm{or} \\quad y^{\\phi(m)} \\equiv 1 \\pmod{m} \\]\nQED"
                },
                {
                    type: "key-concept",
                    text: "<h3>Importance in RSA</h3>\nEuler's Theorem is very important in making RSA encryption work, as it provides the mathematical foundation for why decryption recovers the original message."
                }
            ]
        },
        {
            title: "15. Fermat's Little Theorem Revisited",
            id: "fermat-little-theorem-revisited",
            audioFile: "audio/slide_28.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Fermat's Little Theorem (Special Case of Euler's Theorem)</h3>\nIf \\( p \\) is prime and \\( p \\) does not divide \\( y \\), then \\( y^{p-1} \\equiv 1 \\pmod{p} \\)\n\nThis follows immediately from Euler's Theorem since \\( \\phi(p) = p-1 \\)."
                },
                {
                    type: "key-concept",
                    text: "<h3>Related Theorem</h3>\nFor any positive integer \\( n \\) and prime \\( p \\),\n\\[ n^p \\equiv n \\pmod{p} \\]"
                },
                {
                    type: "paragraph",
                    text: "<h4>Proof</h4>\nFirst, if \\( p \\) divides \\( n \\), then \\( n \\equiv 0 \\pmod{p} \\), so \\( n^p \\equiv 0 \\equiv n \\pmod{p} \\), and we're done.\n\nSuppose that \\( p \\) does not divide \\( n \\). By Fermat's Little Theorem, \\( n^{p-1} \\equiv 1 \\pmod{p} \\), so \\( n^p \\equiv n \\pmod{p} \\). QED"
                },
                {
                    type: "math-example",
                    text: "<h3>Example</h3>\n31 is prime, and 31 does not divide 100. So, \\( 100^{30} \\equiv 1 \\pmod{31} \\). Also, \\( 100^{31} \\equiv 100 \\equiv 7 \\pmod{31} \\)"
                }
            ]
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}