/**
 * Data structure for Week 7 Lecture Notes.
 * CONTENT IS A DIRECT COPY of the mathematical and textual content from the
 * uploaded LaTeX Beamer presentation (Modular Arithmetic and RSA Cryptography).
 *
 * IMPORTANT FORMATTING FIXES:
 * 1. All inline MathJax uses \\(...\\) (Correctly escaped for JS strings).
 * 2. All display MathJax uses \\[...\\] (Correctly escaped for JS strings).
 * 3. Bold text uses <b>...</b> HTML tags.
 * 4. All internal headings (###) have been replaced with <h4> tags.
 */
const lectureData = {
    courseName: "4001CMD - Mathematics for Computing Professionals",
    lectureTitle: "Week 7.1: Modular Arithmetic and RSA Cryptography",
    
    sections: [
        {
            title: "1. Recap: Number Theory Basics",
            id: "modular-equivalence-recap",
            audioFile: "audio/slide_01.wav",
            content: [
                {
                    type: "paragraph",
                    text: "We begin with a quick recap of the foundational concepts from number theory that lead into modular arithmetic."
                },
                {
                    type: "math-example",
                    text: "<h3>Fundamental Theorem of Arithmetic (FTA)</h3>\nEvery integer \\(n \\in \\mathbb{N}\\) can be uniquely factored into a product of prime numbers: \\[n = p_1^{e_1}p_2^{e_2}\\cdots p_k^{e_k}\\] Example: The decomposition of 756 is: \\[756 = 2^2 \\times 3^3 \\times 7\\]"
                },
                {
                    type: "math-example",
                    text: "<h3>Greatest Common Divisor (GCD)</h3>\nThe GCD of two numbers \\(a\\) and \\(b\\) is the largest number \\(d\\) that divides both of them. Example: \\(\\gcd(36, 24) = 12\\). The <b>Extended Euclidean Algorithm</b> is used to find \\(x\\) and \\(y\\) such that \\(ax + by = \\gcd(a, b)\\)."
                },
                {
                    type: "key-concept",
                    text: "<h3>Modular Equivalence</h3>\n\\(a\\) is modularly equivalent to \\(b\\) modulo \\(m\\), written \\(a \\equiv b \\pmod{m}\\), if \\(a\\) and \\(b\\) have the same remainder when divided by \\(m\\). Equivalently, \\(m\\) divides \\(a-b\\). The set of all possible remainders \\(\\{0, 1, \\dots, m-1\\}\\) is the <b>set of modular integers</b>, \\(\\mathbb{Z}_m\\). \n<p><b>Division Algorithm:</b> For any integers \\(a\\) and \\(m\\) (with \\(m > 0\\)), there exist unique integers \\(q\\) (quotient) and \\(r\\) (remainder) such that \\(a = qm + r\\), where \\(0 \\le r < m-1\\).</p>"
                },
                {
                    type: "math-example",
                    text: "<h3>GCD Example: Factoring vs Euclidean Algorithm</h3>\nFind \\(\\gcd(1032,756)\\):\n<ul>\n<li><b>Factoring method:</b> \\(1032 = 2^3 \\times 3 \\times 43\\) and \\(756 = 2^2 \\times 3^3 \\times 7\\), so \\(\\gcd(1032,756) = 2^2 \\times 3 = 12\\)</li>\n<li><b>Euclidean algorithm:</b>\n\\begin{align*}\n1032 &= 756(1) + 276 \\\\\n756 &= 276(2) + 204 \\\\\n276 &= 204(1) + 72 \\\\\n204 &= 72(2) + 60 \\\\\n72 &= 60(1) + 12 \\\\\n60 &= 12(5) + 0\n\\end{align*}\nLargest nonzero remainder is 12, so \\(\\gcd(1032, 756) = 12\\).</li>\n</ul>"
                },
                {
                    type: "math-example",
                    text: "<h3>Extended Euclidean Algorithm Example</h3>\nUsing the same numbers, let's find integers \\(x\\) and \\(y\\) such that \\(1032x + 756y = 12\\):\n\n<b>Step 1: Work backwards through the Euclidean algorithm steps</b>\n\nFrom the last step with remainder 12:\n\\[12 = 72 - 60(1)\\]\n\n<b>Step 2: Substitute previous remainders</b>\nFrom \\(204 = 72(2) + 60\\), we have \\(60 = 204 - 72(2)\\)\nSubstitute:\n\\[12 = 72 - (204 - 72(2)) = 72 - 204 + 72(2) = 72(3) - 204\\]\n\n<b>Step 3: Continue substituting</b>\nFrom \\(276 = 204(1) + 72\\), we have \\(72 = 276 - 204\\)\nSubstitute:\n\\[12 = (276 - 204)(3) - 204 = 276(3) - 204(3) - 204 = 276(3) - 204(4)\\]\n\n<b>Step 4: Final substitution</b>\nFrom \\(756 = 276(2) + 204\\), we have \\(204 = 756 - 276(2)\\)\nSubstitute:\n\\begin{align*}\n12 &= 276(3) - (756 - 276(2))(4) \\\\\n&= 276(3) - 756(4) + 276(8) \\\\\n&= 276(11) - 756(4)\n\\end{align*}\n\nFrom \\(1032 = 756(1) + 276\\), we have \\(276 = 1032 - 756\\)\nSubstitute:\n\\begin{align*}\n12 &= (1032 - 756)(11) - 756(4) \\\\\n&= 1032(11) - 756(11) - 756(4) \\\\\n&= 1032(11) - 756(15)\n\\end{align*}\n\n<b>Step 5: Final result</b>\n\\[1032(11) + 756(-15) = 12\\]\nSo \\(x = 11\\), \\(y = -15\\), and indeed:\n\\[1032 \\times 11 + 756 \\times (-15) = 11352 - 11340 = 12\\]\n\nThis demonstrates that we can express the GCD as a linear combination of the original numbers."
                },
                {
                    type: "key-concept",
                    text: "<h3>Why Extended Euclidean Algorithm Matters</h3>\nThe Extended Euclidean Algorithm is crucial for:\n<ul>\n<li><b>Finding modular inverses:</b> If \\(\\gcd(a, m) = 1\\), we can find \\(x\\) such that \\(ax \\equiv 1 \\pmod{m}\\)</li>\n<li><b>RSA cryptography:</b> Used to compute the private key \\(d\\) from the public key \\(e\\)</li>\n<li><b>Solving linear Diophantine equations:</b> Equations of the form \\(ax + by = c\\)</li>\n<li><b><a href='./crt.html' target='_blank'><u>Chinese Remainder Theorem</u> </a>:</b> Solving systems of congruences</li>\n</ul>"
                }
            ]
        },
        {
            title: "2. Modular Arithmetic Fundamentals",
            id: "modular-arithmetic-fundamentals",
            audioFile: "audio/slide_02.wav",
            content: [
                {
                    type: "paragraph",
                    text: "Modular arithmetic is the mathematical foundation of cryptography, particularly RSA encryption."
                },
                {
                    type: "key-concept",
                    text: "<h3>Familiar Examples</h3>\n<ul>\n<li><b>Timekeeping:</b> 9:00 AM + 5 hours = 2:00 PM, so \\(9 + 5 \\equiv 2 \\pmod{12}\\)</li>\n<li><b>Even/Odd numbers:</b> \\(a \\equiv b \\pmod{2}\\) means both are even or both are odd</li>\n<li><b>Mod 3 arithmetic:</b> Numbers fall into three equivalence classes: \\(\\{0, 3, 6, 9, \\ldots\\}\\), \\(\\{1, 4, 7, 10, \\ldots\\}\\), \\(\\{2, 5, 8, 11, \\ldots\\}\\)</li>\n</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Formal Definition</h3>\nFor \\(m \\in \\mathbb{N}\\), \\(a, b \\in \\mathbb{Z}\\) are <b>equivalent modulo \\(m\\)</b> if:\n<ul>\n<li>\\(a\\) and \\(b\\) have the same remainder when divided by \\(m\\); or</li>\n<li>\\(a-b\\) is divisible by \\(m\\); or</li>\n<li>\\(a = qm + b\\) for some \\(q \\in \\mathbb{Z}\\)</li>\n</ul>"
                },
                {
                    type: "math-example",
                    text: "<h3>Mod 2 Arithmetic</h3>\n\\(\\mathbb{Z}_2 = \\{0, 1\\}\\) - fundamental in computing:\n<ul>\n<li>\\(a \\equiv 0 \\pmod{2}, b \\equiv 0 \\pmod{2} \\Rightarrow a+b \\equiv 0 \\pmod{2}\\)</li>\n<li>\\(a \\equiv 0 \\pmod{2}, b \\equiv 1 \\pmod{2} \\Rightarrow a+b \\equiv 1 \\pmod{2}\\)</li>\n<li>\\(a \\equiv 1 \\pmod{2}, b \\equiv 1 \\pmod{2} \\Rightarrow a+b \\equiv 0 \\pmod{2}\\) (since \\(1+1=2 \\equiv 0 \\pmod{2}\\))</li>\n</ul>\nAddition is <b>XOR</b>, multiplication is <b>AND</b>."
                }
            ]
        },
        {
            title: "3. Arithmetic and Powers in \\(\\mathbb{Z}_m\\)",
            id: "z-m-arithmetic-powers",
            audioFile: "audio/slide_03.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Modular Arithmetic Theorem</h3>\nLet \\(m \\in \\mathbb{N}\\). Suppose \\(x_1, x_2, r_1, r_2 \\in \\mathbb{Z}\\) with:\n\\[x_1 \\equiv r_1 \\pmod{m} \\quad \\text{and} \\quad x_2 \\equiv r_2 \\pmod{m}\\]\nThen:\n\\[x_1 + x_2 \\equiv r_1 + r_2 \\pmod{m} \\quad \\text{and} \\quad x_1x_2 \\equiv r_1r_2 \\pmod{m}\\]"
                },
                {
                    type: "math-example",
                    text: "<h3>Example: Modular Operations</h3>\nIn \\(\\mathbb{Z}_6\\):\n\\[5 + 4 \\equiv 9 \\equiv 3 \\pmod{6}\\]\n\\[5 \\times 4 \\equiv 20 \\equiv 2 \\pmod{6}\\]"
                },
                {
                    type: "math-example",
                    text: "<h3>Real-world Applications</h3>\n<ul>\n<li><b>Timekeeping:</b> 9:00 AM + 30 hours = 3:00 PM since \\(9 + 30 \\equiv 39 \\equiv 3 \\pmod{12}\\)</li>\n<li><b>Day of week:</b> 365 days from now: \\(365 = 52 \\times 7 + 1\\), so \\(365 \\equiv 1 \\pmod{7}\\) - one day later</li>\n</ul>"
                },
                {
                    type: "paragraph",
                    text: "<h4>Proof of Modular Arithmetic</h4>\nIf \\(x_1 = mq_1 + r_1\\) and \\(x_2 = mq_2 + r_2\\), then:\n\\[x_1 + x_2 = m(q_1 + q_2) + (r_1 + r_2)\\]\n\\[x_1x_2 = m(mq_1q_2 + q_1r_2 + q_2r_1) + r_1r_2\\]\nThus both \\((x_1 + x_2) - (r_1 + r_2)\\) and \\(x_1x_2 - r_1r_2\\) are divisible by \\(m\\)."
                }
            ]
        },
        {
            title: "4. Powers and Efficient Computation",
            id: "powers-efficient-computation",
            audioFile: "audio/slide_04.wav",
            content: [
                {
                    type: "paragraph",
                    text: "In RSA cryptography, we need to compute large powers modulo \\(n\\). Direct computation is impossible for large numbers, so we use the <b>method of squaring</b>."
                },
                {
                    type: "math-example",
                    text: "<h3>Example: Compute \\(572^{29} \\pmod{713}\\)</h3>\nUsing method of squaring:\n\\begin{align*}\n572^2 &\\equiv 327184 \\equiv 630 \\pmod{713} \\\\\n572^4 &\\equiv (572^2)^2 \\equiv 630^2 \\equiv 396900 \\equiv 472 \\pmod{713} \\\\\n572^8 &\\equiv (572^4)^2 \\equiv 472^2 \\equiv 222784 \\equiv 328 \\pmod{713} \\\\\n572^{16} &\\equiv (572^8)^2 \\equiv 328^2 \\equiv 107584 \\equiv 634 \\pmod{713} \\\\\n572^{29} &\\equiv 572^{16} \\times 572^8 \\times 572^4 \\times 572^1 \\\\\n&\\equiv 634 \\times 328 \\times 472 \\times 572 \\pmod{713}\n\\end{align*}"
                },
                {
                    type: "math-example",
                    text: "<h3>Final Computation</h3>\n\\begin{align*}\n572^{24} &\\equiv 572^{16} \\times 572^8 \\equiv 634 \\times 328 \\equiv 469 \\pmod{713} \\\\\n572^5 &\\equiv 572^4 \\times 572 \\equiv 472 \\times 572 \\equiv 470 \\pmod{713} \\\\\n572^{29} &\\equiv 572^{24} \\times 572^5 \\equiv 469 \\times 470 \\\\\n&\\equiv 220430 \\equiv 113 \\pmod{713}\n\\end{align*}\nThus \\(572^{29} \\equiv 113 \\pmod{713}\\)."
                }
            ]
        },
        {
            title: "5. Fermat's Little Theorem",
            id: "fermats-little-theorem",
            audioFile: "audio/slide_05.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Fermat's Little Theorem</h3>\nIf \\(p\\) is prime and \\(p\\) does not divide \\(a\\), then:\n\\[a^{p-1} \\equiv 1 \\pmod{p}\\]"
                },
                {
                    type: "key-concept",
                    text: "<h3>Related Theorem</h3>\nIf \\(p\\) is prime and \\(a\\) is any positive integer:\n\\[a^p \\equiv a \\pmod{p}\\]"
                },
                {
                    type: "math-example",
                    text: "<h3>Examples</h3>\n<ul>\n<li>7 does not divide 9, and \\(9^6 \\equiv 1 \\pmod{7}\\)</li>\n<li>\\(9^6 = 531,441 = 75,920 \\times 7 + 1\\)</li>\n<li>\\(365 = 5 \\times 73\\), so \\(365^6 \\equiv 1 \\pmod{7}\\)</li>\n</ul>"
                }
            ]
        },
        {
            title: "6. RSA Cryptography: Key Generation",
            id: "rsa-key-generation",
            audioFile: "audio/slide_06.wav",
            content: [
                {
                    type: "paragraph",
                    text: "RSA Encryption (Rivest, Shamir, Adleman, 1977) - equivalent system developed by Clifford Cocks at GCHQ in 1973."
                },
                {
                    type: "key-concept",
                    text: "<h3>Key Generation Process (Bob's Steps)</h3>"
                },
                {
                    type: "paragraph",
                    text: "1. <b>Choose Primes:</b> Bob chooses two large prime numbers \\(p\\) and \\(q\\) (industry standard: hundreds of digits)<br>Example: \\(p = 23\\), \\(q = 31\\)"
                },
                {
                    type: "paragraph",
                    text: "2. <b>Compute \\(n\\) and \\(z\\):</b> \\(n = pq\\), \\(z = (p-1)(q-1)\\)<br>Example: \\(n = 23 \\times 31 = 713\\), \\(z = 22 \\times 30 = 660\\)"
                },
                {
                    type: "paragraph",
                    text: "3. <b>Choose Public Exponent \\(e\\):</b> \\(1 < e < z\\) with \\(\\gcd(z, e) = 1\\)<br>Example: \\(e = 29\\) (since \\(660 = 2^2 \\times 3 \\times 5 \\times 11\\), no common factors)"
                },
                {
                    type: "paragraph",
                    text: "4. <b>Calculate Private Exponent \\(d\\):</b> Find \\(d\\) such that \\(de \\equiv 1 \\pmod{z}\\)<br>Example: \\(d = 569\\) (since \\(29 \\times 569 = 16501 \\equiv 1 \\pmod{660}\\))"
                },
                {
                    type: "key-concept",
                    text: "<h3>Keys</h3>\n<ul>\n<li><b>Public Key:</b> \\((n, e) = (713, 29)\\) - shared with everyone</li>\n<li><b>Private Key:</b> \\((d, n) = (569, 713)\\) - kept secret by Bob</li>\n</ul>"
                }
            ]
        },
        {
            title: "7. Choosing the Public Exponent \\(e\\) in RSA",
            id: "choosing-public-exponent",
            audioFile: "audio/slide_07.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Criteria for Choosing Public Exponent \\(e\\)</h3>\nThe public exponent \\(e\\) must satisfy:\n<ol>\n<li>\\(1 < e < z\\) where \\(z = (p-1)(q-1)\\)</li>\n<li>\\(\\gcd(e, z) = 1\\) (they must be coprime)</li>\n<li>Preferably small for efficient encryption</li>\n<li>Should not introduce security vulnerabilities</li>\n</ol>"
                },
                {
                    type: "math-example",
                    text: "<h3>Step-by-Step Process for Choosing \\(e\\)</h3>\nGiven \\(z = (p-1)(q-1)\\):\n<ol>\n<li><b>Factor \\(z\\)</b> to understand its prime composition<br>Example: For \\(p=23\\), \\(q=31\\), \\(z = 660 = 2^2 \\times 3 \\times 5 \\times 11\\)</li>\n<li><b>Choose candidate \\(e\\)</b> that avoids these prime factors<br>Good choices: small primes like 3, 17, 65537<br>Avoid: even numbers, multiples of 3, 5, or 11</li>\n<li><b>Verify \\(\\gcd(e, z) = 1\\)</b> using Euclidean algorithm</li>\n<li><b>Common choices in practice:</b>\n<ul>\n<li>\\(e = 3\\) - very efficient but potential security issues</li>\n<li>\\(e = 65537\\) (2¹⁶ + 1) - most common in practice</li>\n<li>\\(e = 17\\) - good balance of efficiency and security</li>\n</ul>\n</li>\n</ol>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Why \\(e = 65537\\) is Popular</h3>\n<ul>\n<li>It's a <b>Fermat prime</b>: \\(65537 = 2^{16} + 1\\)</li>\n<li>Binary representation has only two 1's: efficient for modular exponentiation</li>\n<li>Large enough to avoid common attacks that work against very small \\(e\\)</li>\n<li>Still small enough for efficient encryption</li>\n<li>Extensively studied and considered secure</li>\n</ul>"
                }
            ]
        },
        {
            title: "8. RSA: Finding the Private Key",
            id: "rsa-finding-private-key",
            audioFile: "audio/slide_08.wav",
            content: [
                {
                    type: "paragraph",
                    text: "To find \\(d\\) such that \\(de \\equiv 1 \\pmod{z}\\), we use the Extended Euclidean Algorithm."
                },
                {
                    type: "math-example",
                    text: "<h3>Example: Find \\(d\\) for \\(z = 660\\), \\(e = 29\\)</h3>\nEuclidean Algorithm:\n\\begin{align*}\n660 &= 29(22) + 22 \\\\\n29 &= 22(1) + 7 \\\\\n22 &= 7(3) + 1 \\\\\n7 &= 1(7) + 0\n\\end{align*}"
                },
                {
                    type: "math-example",
                    text: "<h3>Working Backwards</h3>\n\\begin{align*}\n1 &= 22 - 3(7) \\\\\n&= 22 - 3(29 - 22) \\\\\n&= 4(22) - 3(29) \\\\\n&= 4(660 - 29(22)) - 3(29) \\\\\n&= -91(29) + 4(660)\n\\end{align*}\nSo \\(1 = -91 \\times 29 + 4 \\times 660\\)"
                },
                {
                    type: "math-example",
                    text: "<h3>Making \\(d\\) Positive</h3>\nAdd \\(660 \\times 29\\) (equivalent to adding 0 modulo 660):\n\\begin{align*}\n1 + 660(29) &= 660(29) - 91(29) + 4(660) \\\\\n&= 569(29) + 4(660)\n\\end{align*}\nThus \\(1 = 569(29) - 25(660)\\), so \\(569 \\times 29 \\equiv 1 \\pmod{660}\\)<br>Private key: \\(d = 569\\)"
                },
                {
                    type: "math-example",
                    text: "Checking: \\(de \\equiv 1 \\pmod{z}\\) ? OK, let's compute   \\( 569 \\times 29 = 16501\\), reduciing it in \\(\\pmod{660}\\):"
                },
                 {
                    type: "math-example",
                    text: "\\( [16501]_{660} = 16501 - 25 \\times 660 = 1 \\) -- It worked !"
                }
            ]
        },
        {
            title: "9. RSA: Encryption and Decryption",
            id: "rsa-encryption-decryption",
            audioFile: "audio/slide_09.wav",
            content: [
                {
                    type: "paragraph",
                    text: "<h4>Encryption (Alice to Bob)</h4>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Step 1: Convert Message to Numbers</h3>\nUsing the agreed-upon encoding scheme:\n<ul>\n<li>Space = 01</li>\n<li>A = 02, B = 03, C = 04, ..., Z = 27</li>\n</ul>"
                },
                {
                    type: "math-example",
                    text: "<h3>Message Conversion: SEND MONEY</h3>\n\\begin{align*}\n\\text{S} &= 20 \\\\\n\\text{E} &= 06 \\\\\n\\text{N} &= 15 \\\\\n\\text{D} &= 05 \\\\\n\\text{Space} &= 01 \\\\\n\\text{M} &= 14 \\\\\n\\text{O} &= 16 \\\\\n\\text{N} &= 15 \\\\\n\\text{E} &= 06 \\\\\n\\text{Y} &= 26\n\\end{align*}\n\nConcatenating all 2-digit codes:\n\\[20|06|15|05|01|14|16|15|06|26\\]\n\nThis gives us the numerical representation: <b>20061505011416150626</b>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Step 2: Split into Blocks Smaller Than n</h3>\nSince our modulus \\(n = 713\\), we need blocks less than 713. We split into 3-digit blocks:\n\n\\[20061505011416150626 \\rightarrow 200.615.050.114.161.506.260\\]\n\nEach block is less than 713:\n<ul>\n<li>200 < 713</li>\n<li>615 < 713</li>\n<li>050 < 713</li>\n<li>114 < 713</li>\n<li>161 < 713</li>\n<li>506 < 713</li>\n<li>260 < 713</li>\n</ul>"
                },
                {
                    type: "paragraph",
                    text: "<h4>Step 3: Encrypt Each Block</h4>\nFor each number \\(m\\) (each block), compute \\(c \\equiv m^e \\pmod{n}\\) using Bob's public key \\((n, e) = (713, 29)\\)"
                },
                {
                    type: "math-example",
                    text: "<h3>Complete Encryption Process</h3>\n\\begin{align*}\n200^{29} &\\equiv 547 \\pmod{713} \\\\\n615^{29} &\\equiv 595 \\pmod{713} \\\\\n050^{29} &\\equiv 514 \\pmod{713} \\\\\n114^{29} &\\equiv 344 \\pmod{713} \\\\\n161^{29} &\\equiv 460 \\pmod{713} \\\\\n506^{29} &\\equiv 276 \\pmod{713} \\\\\n260^{29} &\\equiv 695 \\pmod{713}\n\\end{align*}\n\nSo our encrypted message becomes:\n\\[200.615.050.114.161.506.260 \\xmapsto{m^e} 547.595.514.344.460.276.695\\]"
                },
                {
                    type: "paragraph",
                    text: "<h4>Decryption (Bob)</h4>\nFor each encrypted number \\(c\\), compute \\(m \\equiv c^d \\pmod{n}\\) using Bob's private key \\((d, n) = (569, 713)\\)"
                },
                {
                    type: "math-example",
                    text: "<h3>Complete Decryption Process</h3>\n\\begin{align*}\n547^{569} &\\equiv 200 \\pmod{713} \\\\\n595^{569} &\\equiv 615 \\pmod{713} \\\\\n514^{569} &\\equiv 050 \\pmod{713} \\\\\n344^{569} &\\equiv 114 \\pmod{713} \\\\\n460^{569} &\\equiv 161 \\pmod{713} \\\\\n276^{569} &\\equiv 506 \\pmod{713} \\\\\n695^{569} &\\equiv 260 \\pmod{713}\n\\end{align*}\n\nSo Bob decrypts:\n\\[547.595.514.344.460.276.695 \\xmapsto{c^d} 200.615.050.114.161.506.260\\]\n\nBob then converts these numbers back to text using the encoding scheme:\n\\[20|06|15|05|01|14|16|15|06|26 \\rightarrow \\text{SEND MONEY}\\]"
                },
                {
                    type: "key-concept",
                    text: "<h3>Important Notes</h3>\n<ul>\n<li><b>Encoding scheme:</b> A=02, B=03, ..., Z=27, Space=01</li>\n<li><b>S=20, E=06, etc.</b> - Note this specific mapping used in the example</li>\n<li><b>Block size:</b> All blocks must be less than modulus \\(n = 713\\)</li>\n<li><b>Consistency:</b> Both parties must use the same encoding scheme</li>\n<li><b>Real-world:</b> Modern RSA uses more secure padding schemes like PKCS#1</li>\n</ul>"
                }
            ]
        },
        {
            title: "10. Why RSA Works: Mathematical Foundation",
            id: "rsa-mathematical-foundation",
            audioFile: "audio/slide_10.wav",
            content: [
                {
                    type: "paragraph",
                    text: "To prove RSA works, we need to show that \\(m^{de} \\equiv m \\pmod{n}\\)."
                },
                {
                    type: "key-concept",
                    text: "<h3>Key Mathematical Facts</h3>\n<ol>\n<li>If \\(p\\) is prime and divides \\(ab\\), then \\(p\\) divides \\(a\\) or \\(p\\) divides \\(b\\)</li>\n<li>If \\(a \\equiv t \\pmod{p}\\) and \\(a \\equiv t \\pmod{q}\\) for distinct primes \\(p,q\\), then \\(a \\equiv t \\pmod{pq}\\)</li>\n<li>Fermat's Little Theorem: If \\(p\\) is prime and doesn't divide \\(a\\), then \\(a^{p-1} \\equiv 1 \\pmod{p}\\)</li>\n</ol>"
                },
                {
                    type: "paragraph",
                    text: "<h4>Proof Strategy</h4>\nSince \\(n = pq\\), it suffices to show:\n\\[m^{de} \\equiv m \\pmod{p} \\quad \\text{and} \\quad m^{de} \\equiv m \\pmod{q}\\]\nThen by Fact 2, \\(m^{de} \\equiv m \\pmod{pq} = \\pmod{n}\\)."
                },
                {
                    type: "math-example",
                    text: "<h3>Proof Details</h3>\nSince \\(de \\equiv 1 \\pmod{z}\\) where \\(z = (p-1)(q-1)\\), we have:\n\\[de = 1 + k(p-1)(q-1) \\quad \\text{for some } k \\in \\mathbb{Z}\\]\n\n<b>Case 1:</b> \\(p\\) divides \\(m\\)\nThen \\(m \\equiv 0 \\pmod{p}\\), so \\(m^{de} \\equiv 0 \\equiv m \\pmod{p}\\)\n\n<b>Case 2:</b> \\(p\\) doesn't divide \\(m\\)\nBy Fermat's Little Theorem: \\(m^{p-1} \\equiv 1 \\pmod{p}\\)\n\\begin{align*}\nm^{de} &= m^{1 + k(p-1)(q-1)} \\\\\n&= m \\cdot (m^{p-1})^{k(q-1)} \\\\\n&\\equiv m \\cdot 1^{k(q-1)} \\pmod{p} \\\\\n&\\equiv m \\pmod{p}\n\\end{align*}\nSimilarly for \\(q\\), so by Fact 2, \\(m^{de} \\equiv m \\pmod{n}\\)."
                }
            ]
        },
        {
            title: "11. RSA Security and Quantum Computing",
            id: "rsa-security-quantum",
            audioFile: "audio/slide_11.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Why is RSA Secure?</h3>\nRSA security relies entirely on the <b>factoring problem</b> - the computational difficulty of factoring \\(n = pq\\) back into its prime factors."
                },
                {
                    type: "paragraph",
                    text: "<ul>\n<li>To break RSA, Eve needs to find \\(d\\) from public key \\((n, e)\\)</li>\n<li>To find \\(d\\), Eve needs \\(z = (p-1)(q-1)\\)</li>\n<li>To find \\(z\\), Eve needs to factor \\(n = pq\\)</li>\n<li>For classical computers, factoring large numbers (hundreds/thousands of digits) takes centuries/millennia</li>\n</ul>"
                },
                {
                    type: "math-example",
                    text: "<h3>Historical Challenge</h3>\n1977: Martin Gardner published RSA challenge in Scientific American with:\n<ul>\n<li>64 and 65 digit primes</li>\n<li>\\(e = 9007\\)</li>\n<li>\\$100 prize for breaking the code</li>\n</ul>\n1994: Broken by 4 mathematicians with 600 volunteers from 25 countries using 1600 computers."
                },
                {
                    type: "key-concept",
                    text: "<h3>Quantum Computing Threat</h3>\n<ul>\n<li><b>Classical computers:</b> Bits are 0 or 1, can only do one operation at a time</li>\n<li><b>Quantum computers:</b> Qubits can be in superposition of states, allowing parallel computation</li>\n<li>Quantum algorithms like <b>Shor's algorithm</b> can factor large numbers efficiently</li>\n<li><b>Post-quantum cryptography:</b> Active research area developing encryption resistant to quantum attacks</li>\n</ul>"
                },
                {
                    type: "paragraph",
                    text: "In the future, this cryptographic landscape may look very different as quantum computing advances."
                }
            ]
        },
        {
            title: "12. Practical RSA Exercise",
            id: "practical-rsa-exercise",
            audioFile: "audio/slide_12.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Practice RSA at Home</h3>\nTry this step-by-step exercise with smaller numbers:"
                },
                {
                    type: "paragraph",
                    text: "<b>Step 1:</b> Choose primes \\(p = 53\\), \\(q = 17\\)"
                },
                {
                    type: "paragraph",
                    text: "<b>Step 2:</b> Compute \\(n = pq = 53 \\times 17 = 901\\), \\(z = (p-1)(q-1) = 52 \\times 16 = 832\\)"
                },
                {
                    type: "paragraph",
                    text: "<b>Step 3:</b> Factor \\(z = 832 = 2^6 \\times 13\\), choose \\(e = 15\\) (since \\(\\gcd(15, 832) = 1\\))"
                },
                {
                    type: "paragraph",
                    text: "<b>Step 4:</b> Use Extended Euclidean Algorithm to find \\(d\\) such that \\(15d \\equiv 1 \\pmod{832}\\)"
                },
                {
                    type: "paragraph",
                    text: "<b>Step 5:</b> Choose message \\(m < n\\), compute \\(c \\equiv m^{15} \\pmod{901}\\)"
                },
                {
                    type: "paragraph",
                    text: "<b>Step 6:</b> Decrypt \\(m \\equiv c^d \\pmod{901}\\) to verify it works"
                },
                {
                    type: "key-concept",
                    text: "<h3>Key Points to Remember</h3>\n<ul>\n<li>Always choose \\(e\\) coprime to \\(z = (p-1)(q-1)\\)</li>\n<li>Common good choices: 3, 17, 65537</li>\n<li>Use method of squaring for large exponentiations</li>\n<li>The security depends entirely on the difficulty of factoring \\(n\\)</li>\n<li>Keep \\(p\\), \\(q\\), and \\(d\\) secret!</li>\n</ul>"
                }
            ]
        },
        {
            title: "13. Lecture Summary",
            id: "lecture-summary",
            audioFile: "audio/slide_13.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Core Concepts Recap</h3>\n<ul>\n<li><b>Modular Arithmetic:</b> The mathematics of remainders, forming the basis for cyclic systems like clocks and modern cryptography.</li>\n<li><b>GCD & Extended Euclidean Algorithm:</b> Essential tools for finding the greatest common divisor and, crucially, for computing modular inverses in RSA.</li>\n<li><b>Fermat's Little Theorem:</b> A key property of prime numbers that underpins the mathematical correctness of the RSA algorithm.</li>\n<li><b>Method of Successive Squaring:</b> The efficient algorithm that makes computing massive powers in modular arithmetic feasible.</li>\n</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>The RSA Cryptosystem: A Complete Picture</h3>\n<ol>\n<li><b>Key Generation:</b> Bob chooses primes <i>p</i> and <i>q</i>, computes <i>n = p*q</i> and <i>z = (p-1)(q-1)</i>. He chooses a public exponent <i>e</i> coprime to <i>z</i>, and calculates the private exponent <i>d</i> as the inverse of <i>e</i> modulo <i>z</i>.</li>\n<li><b>Encryption:</b> Anyone can use Bob's public key <i>(n, e)</i> to encrypt a message <i>m</i> by computing <i>c ≡ m<sup>e</sup> (mod n)</i>.</li>\n<li><b>Decryption:</b> Only Bob, with his private key <i>d</i>, can decrypt the ciphertext <i>c</i> by computing <i>m ≡ c<sup>d</sup> (mod n)</i>, recovering the original message.</li>\n</ol>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Security and The Road Ahead</h3>\n<ul>\n<li><b>The Foundation of Security:</b> RSA's security rests entirely on the <b>factoring problem</b>—the practical impossibility of factoring a very large <i>n</i> back into its prime factors <i>p</i> and <i>q</i> using classical computers.</li>\n<li><b>The Quantum Threat:</b> The advent of quantum computers, running algorithms like Shor's algorithm, poses a future risk to RSA by solving the factoring problem efficiently.</li>\n<li><b>Looking Forward:</b> This threat drives the vital field of <b>post-quantum cryptography</b>, ensuring our digital world remains secure in the quantum era.</li>\n</ul>"
                },
                {
                    type: "paragraph",
                    text: "You have now built a foundational understanding of the number theory that secures a vast portion of our digital communications. From the basic concept of clock arithmetic to the intricate dance of public and private keys, these principles are at the heart of modern digital trust and security."
                }
            ]
        }
    ]
};