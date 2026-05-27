// This file contains the complete question data structure (allQuizData)
// for a Multiple-Select Quiz on Lecture 7: Modular Arithmetic and RSA.
const quizTitle = "Lecture 7 Quiz: Modular Arithmetic and RSA";
const allQuizData = [
    {
        id: 1,
        question: 'Which statements correctly define <strong>modular equivalence</strong> \\(a \\equiv b \\pmod{m}\\)?<sup>1</sup>',
        options: [
            '\\(a\\) and \\(b\\) have the same remainder when divided by \\(m\\)',
            '\\(a - b\\) is divisible by \\(m\\)',
            '\\(a = qm + r\\) and \\(b = pm + s\\) where \\(r = s\\)',
            '\\(a/m\\) and \\(b/m\\) have the same decimal part',
            '\\(a = b\\) or \\(a-b = m\\)'
        ],
        correct: [0, 1],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This is the primary definition using the Division Algorithm.\n- <b>B:</b> Correct. This is an equivalent and often more useful definition (e.g., \\(17-3 = 14\\), which is divisible by 7, so \\(17 \\equiv 3 \\pmod{7}\\)).\n- <b>C:</b> Incorrect. While related, this is just a restatement of A, not a separate definition.\n- <b>D:</b> Incorrect. This is not a general property; consider \\(5 \\equiv 2 \\pmod{3}\\). \\(5/3 = 1.66...\\) and \\(2/3 = 0.66...\\).\n- <b>E:</b> Incorrect. This is too restrictive. \\(17 \\equiv 3 \\pmod{7}\\) but neither \\(17=3\\) nor \\(17-3=7\\) is true.'
    },
    {
        id: 2,
        question: 'Which properties of <strong>modular arithmetic</strong> are true in \\(\\mathbb{Z}_m\\)?<sup>2</sup>',
        options: [
            'If \\(x_1 \\equiv r_1\\) and \\(x_2 \\equiv r_2\\), then \\(x_1x_2 \\equiv r_1r_2 \\pmod{m}\\)',
            'If \\(x_1 \\equiv r_1\\) and \\(x_2 \\equiv r_2\\), then \\(x_1 + x_2 \\equiv r_1 + r_2 \\pmod{m}\\)',
            'If \\(ax \\equiv ay \\pmod{m}\\) and \\(a \\not\\equiv 0\\), then \\(x \\equiv y \\pmod{m}\\)',
            '\\([a]_m + [b]_m = [a+b]_m\\)',
            'Every non-zero element \\([a]_m\\) has a multiplicative inverse \\([a]_m^{-1}\\)'
        ],
        correct: [0, 1, 3],
        explanation: 'Rationale:\n- <b>A:</b> Correct. Modular arithmetic preserves multiplication.\n- <b>B:</b> Correct. Modular arithmetic preserves addition.\n- <b>C:</b> Incorrect. This is the cancellation property, which fails if \\(m\\) is composite and \\(a\\) is a zero divisor. (e.g., \\(3 \\times 1 \\equiv 3 \\times 5 \\pmod{6}\\) but \\(1 \\not\\equiv 5\\)).\n- <b>D:</b> Correct. This is the formal definition of addition in \\(\\mathbb{Z}_m\\).\n- <b>E:</b> Incorrect. This is only true if \\(m\\) is prime. In \\(\\mathbb{Z}_6\\), [2], [3], and [4] have no inverse.'
    },
    {
        id: 3,
        question: 'Which statements are true regarding the <strong>Extended Euclidean Algorithm (EEA)</strong>?<sup>3</sup>',
        options: [
            'It is used to find the prime factors of a large number',
            'It works by substituting remainders backwards through the Euclidean Algorithm steps',
            'It is used in RSA to help calculate the private key \\(d\\) from the public key \\(e\\)',
            'It finds integers \\(x\\) and \\(y\\) such that \\(ax + by = \\gcd(a, b)\\)',
            'It can only be used if \\(a\\) and \\(b\\) are coprime'
        ],
        correct: [1, 2, 3],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. It has nothing to do with factoring. Factoring is the "hard" problem; EEA is "easy" (efficient).\n- <b>B:</b> Correct. This is the exact method of backward substitution.\n- <b>C:</b> Correct. It finds the modular inverse of \\(e\\) mod \\(z\\), which is \\(d\\).\n- <b>D:</b> Correct. This is the fundamental property (Bézout\'s identity) that the algorithm computes.\n- <b>E:</b> Incorrect. It works for any two integers \\(a, b\\) and will find their \\(\\gcd(a, b)\\). If they are coprime, the result will be 1.'
    },
    {
        id: 4,
        question: 'What is the purpose of the <strong>method of squaring</strong> (modular exponentiation)?<sup>4</sup>',
        options: [
            'To efficiently compute very large powers \\(a^b \\pmod{m}\\)',
            'To find the square root of a number modulo \\(m\\)',
            'To calculate \\(a \\times b \\pmod{m}\\)',
            'To avoid computing the massive intermediate number \\(a^b\\) before reducing',
            'It is required for both encryption and decryption in RSA'
        ],
        correct: [0, 3, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This is its primary purpose.\n- <b>B:</b> Incorrect. This is a different, much harder problem (quadratic residues).\n- <b>C:</b> Incorrect. This is just standard modular multiplication.\n- <b>D:</b> Correct. Computing \\(a^b\\) directly is impossible for numbers used in RSA, so we reduce at each step.\n- <b>E:</b> Correct. RSA encryption (\\(m^e\\)) and decryption (\\(c^d\\)) are both large modular exponentiations.'
    },
    {
        id: 5,
        question: 'Which of the following are correct applications of <strong>Fermat\'s Little Theorem</strong>?<sup>5</sup>',
        options: [
            '\\(100^{30} \\equiv 1 \\pmod{31}\\) (since 31 is prime)',
            'It is a special case of Euler\'s Theorem',
            '\\(a^p \\equiv 1 \\pmod{p}\\) for any integer \\(a\\) and prime \\(p\\)',
            'It is the main reason RSA security is hard to break',
            '\\(a^{p-1} \\equiv 1 \\pmod{p}\\) if \\(p\\) is prime and \\(p\\) does not divide \\(a\\)'
        ],
        correct: [0, 1, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. Since 31 is prime and doesn\'t divide 100, \\(100^{31-1} \\equiv 1 \\pmod{31}\\).\n- <b>B:</b> Correct. Euler\'s Theorem is \\(a^{\\phi(m)} \\equiv 1 \\pmod{m}\\). For a prime \\(p\\), \\(\\phi(p) = p-1\\), giving FLT.\n- <b>C:</b> Incorrect. The theorem is \\(a^{p-1} \\equiv 1 \\pmod{p}\\). The related theorem is \\(a^p \\equiv a \\pmod{p}\\).\n- <b>D:</b> Incorrect. The *difficulty of factoring* is why RSA is hard to break. FLT is why RSA *works* (correctness).\n- <b>E:</b> Correct. This is the precise statement of the theorem.'
    },
    {
        id: 6,
        question: 'In <strong>RSA Key Generation</strong>, what are the roles of \\(p\\), \\(q\\), \\(n\\), and \\(z\\)?<sup>6</sup>',
        options: [
            '\\(p\\) and \\(q\\) are large, secret prime numbers',
            '\\(n = p + q\\) is the public modulus',
            '\\(z = (p-1)(q-1)\\) is the secret totient, \\(z = \\phi(n)\\)',
            '\\(n = pq\\) is the public modulus',
            '\\(p\\), \\(q\\), and \\(z\\) must all be kept secret'
        ],
        correct: [0, 2, 3],
        explanation: 'Rationale:\n- <b>A:</b> Correct. These are the secret foundation of the keypair.\n- <b>B:</b> Incorrect. The modulus \\(n\\) is computed by multiplication, \\(n = pq\\).\n- <b>C:</b> Correct. \\(z\\) is \\(n\\)\'s totient, \\(\\phi(n)\\), and is crucial for finding \\(d\\). It must be kept secret.\n- <b>D:</b> Correct. \\(n\\) is part of the public key.\n- <b>E:</b> Incorrect. While true that they must be kept secret, this is a statement of fact, not their *role* in the algorithm (as C is).'
    },
    {
        id: 7,
        question: 'In <strong>RSA Key Generation</strong>, what are the properties of the exponents \\(e\\) and \\(d\\)?<sup>7</sup>',
        options: [
            '\\(e\\) (public) and \\(d\\) (private) are modular inverses of each other in \\(\\pmod{n}\\)',
            '\\(e\\) is chosen to be coprime to \\(n\\) (\\(\\gcd(e, n) = 1\\))',
            '\\(d\\) is found by solving \\(de \\equiv 1 \\pmod{z}\\)',
            '\\(e\\) is the public exponent, and \\(d\\) is the private exponent',
            'A common choice for \\(e\\) is 65537 because it is prime'
        ],
        correct: [2, 3],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. They are modular inverses, but *modulo \\(z\\)* (or \\(\\phi(n)\\)), not modulo \\(n\\).\n- <b>B:</b> Incorrect. \\(e\\) must be coprime to \\(z\\) (\\(\\gcd(e, z) = 1\\)), not \\(n\\).\n- <b>C:</b> Correct. This is the defining relationship used to find \\(d\\) with the EEA.\n- <b>D:</b> Correct. While true, this is the definition.\n- <b>E:</b> Incorrect. 65537 is popular, but it\'s popular because it\'s a Fermat prime (\\(2^{16}+1\\)) which makes exponentiation efficient, not just because it\'s prime.'
    },
    {
        id: 8,
        question: 'Which of the following statements about the <strong>RSA process</strong> are correct?<sup>8</sup>',
        options: [
            'Alice encrypts a message \\(m\\) for Bob using Bob\'s private key',
            'Alice encrypts a message \\(m\\) for Bob by computing \\(c \\equiv m^e \\pmod{n}\\) using Bob\'s public key \\((n, e)\\)',
            'Bob decrypts the ciphertext \\(c\\) by computing \\(m \\equiv c^d \\pmod{n}\\) using his private key \\(d\\)',
            'The message \\(m\\) must be broken into blocks, where each block is a number \\(> n\\)',
            'RSA security relies on the fact that \\(c^d \\equiv (m^e)^d \\equiv m^{ed} \\equiv m \\pmod{n}\\)'
        ],
        correct: [1, 2, 4],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. Encryption uses the recipient\'s *public* key.\n- <b>B:</b> Correct. This is the exact encryption formula.\n- <b>C:</b> Correct. This is the exact decryption formula.\n- <b>D:</b> Incorrect. The blocks must be *less than* \\(n\\).\n- <b>E:</b> Correct. This mathematical identity, underpinned by Euler\'s Theorem, is why decryption works.'
    },
    {
        id: 9,
        question: 'What are the main <strong>security aspects of RSA</strong>?<sup>9</sup>',
        options: [
            'Its security relies on the computational difficulty of the factoring problem',
            'If an attacker (Eve) can factor \\(n\\) into \\(p\\) and \\(q\\), she can compute \\(z\\) and then \\(d\\)',
            'RSA is considered "post-quantum" and is secure against quantum computers',
            'RSA\'s security is proven to be equivalent to the factoring problem',
            'Using a small public exponent \\(e\\) like 3 is always insecure'
        ],
        correct: [0, 1],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This is the fundamental security assumption.\n- <b>B:</b> Correct. Factoring \\(n\\) is the most well-known attack, as it allows \\(z\\) and \\(d\\) to be derived.\n- <b>C:</b> Incorrect. RSA is famously *not* secure against quantum computers, which can use Shor\'s algorithm to factor \\(n\\) efficiently.\n- <b>D:</b> Incorrect. This has not been proven. It\'s *suspected* to be, but it\'s possible there\'s a way to break RSA *without* factoring \\(n\\).\n- <b>E:</b> Incorrect. It *can* be insecure if padding is not used correctly, but it is not *always* insecure and is used in practice for efficiency.'
    },
    {
        id: 10,
        question: 'Why does <strong>RSA decryption work</strong> mathematically? (\\(m^{de} \\equiv m \\pmod{n}\\))<sup>10</sup>',
        options: [
            'Because \\(de \\equiv 1 \\pmod{z}\\), we can write \\(de = 1 + k z\\) for some integer \\(k\\)',
            'The proof relies on Fermat\'s Little Theorem (or Euler\'s Theorem)',
            'The proof must show that \\(m^{de} \\equiv m\\) holds modulo \\(p\\) and modulo \\(q\\) separately',
            'It only works if \\(\\gcd(m, n) = 1\\)',
            'It works because \\(d\\) and \\(e\\) are inverses modulo \\(n\\)'
        ],
        correct: [0, 1, 2],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This is the first step of the proof, expanding \\(m^{de}\\) to \\(m^{1+kz}\\).\n- <b>B:</b> Correct. The proof uses \\(m^{k(p-1)(q-1)} \\equiv 1 \\pmod{p}\\) and \\(\\pmod{q}\\), which is a direct application of FLT/Euler\'s Theorem.\n- <b>C:</b> Correct. By showing it holds for \\(p\\) and \\(q\\), a property of modular arithmetic (related to Chinese Remainder Theorem) implies it must hold for \\(n = pq\\).\n- <b>D:</b> Incorrect. The proof is shown to work *even if* \\(m\\) is a multiple of \\(p\\) or \\(q\\) (the case where \\(m \\equiv 0\\)).\n- <b>E:</b> Incorrect. They are inverses modulo \\(z\\), not \\(n\\). This is a common and critical point of confusion.'
    },
    {
        id: 11,
        question: 'Which of the following are true about the set of modular integers \\(\\mathbb{Z}_m\\)?<sup>11</sup>',
        options: [
            '\\(\\mathbb{Z}_m\\) is the set of integers \\(\\{0, 1, \\dots, m-1\\}\\)',
            '\\(\\mathbb{Z}_m\\) is the set of equivalence classes \\(\\{[0]_m, [1]_m, \\dots, [m-1]_m\\}\\)',
            'In \\(\\mathbb{Z}_7\\), \\(4+6 = 3\\)',
            'In \\(\\mathbb{Z}_7\\), \\([4]_7 = \\{\\dots, -3, 4, 11, \\dots\\}\\)',
            'Operations in \\(\\mathbb{Z}_m\\) are "well-defined", meaning the result is independent of which class representative is chosen'
        ],
        correct: [1, 2, 3, 4],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. This is a common simplification, but \\(\\mathbb{Z}_m\\) is technically a set of *sets* (equivalence classes), not just a set of numbers. \\(\\mathbb{Z}_3\\) is not \\(\\{0, 1, 2\\}\\).\n- <b>B:</b> Correct. This is the formal definition. \\(\\mathbb{Z}_3 = \\{ [0]_3, [1]_3, [2]_3 \\}\\), where each element is an infinite set (e.g., \\([1]_3 = \\{\\dots, -2, 1, 4, \\dots\\}\\)).\n- <b>C:</b> Correct. \\(4+6 = 10\\), and \\(10 \\equiv 3 \\pmod{7}\\).\n- <b>D:</b> Correct. This is the equivalence class for 4 modulo 7.\n- <b>E:</b> Correct. This is a crucial property. (e.g., in \\(\\mathbb{Z}_7\\), \\([2]+[5] = [7]=[0]\\) is the same as \\([9]+[12] = [21]=[0]\\)).'
    },
    {
        id: 12,
        question: 'Which <strong>algebraic properties</strong> hold for all elements \\(a, b, c \\in \\mathbb{Z}_m\\)?<sup>12</sup>',
        options: [
            'Associativity of addition: \\((a+b)+c = a+(b+c)\\)',
            'Commutativity of multiplication: \\(ab = ba\\)',
            'Existence of additive inverses: For every \\(a\\), there is a \\(-a\\) such that \\(a+(-a) = 0\\)',
            'Distributive property: \\(a(b+c) = ab + ac\\)',
            'Multiplicative cancellation: If \\(ab = ac\\) and \\(a \\neq 0\\), then \\(b = c\\)'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This property holds.\n- <b>B:</b> Correct. This property holds.\n- <b>C:</b> Correct. e.g., in \\(\\mathbb{Z}_7\\), the additive inverse of 3 is 4, since \\(3+4=7 \\equiv 0\\).\n- <b>D:</b> Correct. This property holds.\n- <b>E:</b> Incorrect. This is the one major property from \\(\\mathbb{Z}\\) that *fails* in \\(\\mathbb{Z}_m\\) when \\(m\\) is composite, due to zero divisors.'
    },
    {
        id: 13,
        question: 'Why does <strong>cancellation fail</strong> in \\(\\mathbb{Z}_m\\) for composite \\(m\\)? (e.g., \\(\\mathbb{Z}_6\\))<sup>13</sup>',
        options: [
            'Because \\(\\mathbb{Z}_6\\) contains zero divisors',
            'Because 6 is not a prime number',
            'In \\(\\mathbb{Z}_6\\), \\(3 \\times 2 \\equiv 3 \\times 4 \\pmod{6}\\) (both are 0), but \\(2 \\not\\equiv 4\\)',
            'Because elements like 2, 3, and 4 do not have multiplicative inverses in \\(\\mathbb{Z}_6\\)',
            'Because multiplication is not associative'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'Rationale:\n- <b>A:</b> Correct. The existence of zero divisors is the reason. \\(a(b-c) = 0\\) does not imply \\(a=0\\) or \\(b-c=0\\).\n- <b>B:</b> Correct. This is the ultimate reason. If \\(m\\) is prime, it has no zero divisors and cancellation works.\n- <b>C:</b> Correct. This is a perfect example. \\(3 \\times 2 = 6 \\equiv 0\\) and \\(3 \\times 4 = 12 \\equiv 0\\). So \\(3 \\times 2 \\equiv 3 \\times 4\\) is true, but \\(2 \\not\\equiv 4\\) is also true, so cancellation fails.\n- <b>D:</b> Correct. Cancellation \\(ab=ac \\Rightarrow b=c\\) is equivalent to multiplying by \\(a^{-1}\\). If \\(a\\) has no inverse (which zero divisors don\'t), you can\'t "divide" by it.\n- <b>E:</b> Incorrect. Multiplication *is* associative in \\(\\mathbb{Z}_m\\).'
    },
    {
        id: 14,
        question: 'What are the properties of <strong>zero divisors</strong> in \\(\\mathbb{Z}_m\\)?<sup>14</sup>',
        options: [
            'A non-zero element \\(r\\) is a zero divisor if there exists a non-zero \\(s\\) such that \\(rs \\equiv 0 \\pmod{m}\\)',
            'An element \\(r \\in \\mathbb{Z}_m\\) is a zero divisor if and only if \\(\\gcd(r, m) > 1\\)',
            '\\(\\mathbb{Z}_p\\) (where \\(p\\) is prime) has no zero divisors',
            '0 is considered the main zero divisor',
            'In \\(\\mathbb{Z}_{10}\\), the zero divisors are 2, 4, 5, 6, and 8'
        ],
        correct: [0, 1, 2, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This is the definition of a zero divisor.\n- <b>B:</b> Correct. This is the key theorem characterizing them.\n- <b>C:</b> Correct. Since \\(\\gcd(r, p) = 1\\) for all \\(r \\in \\{1, ..., p-1\\}\\), there are no zero divisors.\n- <b>D:</b> Incorrect. The definition specifies two *non-zero* elements.\n- <b>E:</b> Correct. All these elements have a \\(\\gcd > 1\\) with 10. (e.g., \\(2 \\times 5 = 10 \\equiv 0\\), \\(4 \\times 5 = 20 \\equiv 0\\), etc.)'
    },
    {
        id: 15,
        question: 'Which statements are true about <strong>invertible elements</strong> in \\(\\mathbb{Z}_m\\)?<sup>15</sup>',
        options: [
            'An element \\(r\\) is invertible if there exists an \\(s\\) such that \\(rs \\equiv 1 \\pmod{m}\\)',
            'An element \\(r \\in \\mathbb{Z}_m\\) is invertible if and only if \\(\\gcd(r, m) = 1\\)',
            'An element \\(r\\) can be both a zero divisor and invertible',
            'Every non-zero element in \\(\\mathbb{Z}_7\\) is invertible',
            'In \\(\\mathbb{Z}_9\\), the invertible elements are 1, 2, 4, 5, 7, 8'
        ],
        correct: [0, 1, 3, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This is the definition of an invertible element (or "unit").\n- <b>B:</b> Correct. This is the fundamental theorem linking invertibility to the GCD.\n- <b>C:</b> Incorrect. An element is one or the other (or 0). The \\(\\gcd(r, m)\\) must be either 1 or > 1.\n- <b>D:</b> Correct. 7 is prime, so all non-zero elements are coprime to 7 and thus invertible.\n- <b>E:</b> Correct. These are all the numbers \\(< 9\\) where \\(\\gcd(r, 9) = 1\\) (i.e., not 3 or 6).'
    },
    {
        id: 16,
        question: 'What is the relationship between <strong>GCD, Invertibility, and Zero Divisors</strong> in \\(\\mathbb{Z}_m\\)?<sup>16</sup>',
        options: [
            'If \\(\\gcd(r, m) = 1\\), then \\(r\\) is a zero divisor',
            'If \\(\\gcd(r, m) > 1\\) (and \\(r \\neq 0\\)), then \\(r\\) is a zero divisor',
            'If \\(\\gcd(r, m) = 1\\), then \\(r\\) is invertible',
            'If \\(m\\) is prime, every non-zero element is invertible',
            'We find the inverse of \\(r\\) using the Extended Euclidean Algorithm to solve \\(rx + my = 1\\)'
        ],
        correct: [1, 2, 3, 4],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. It\'s the opposite. \\(\\gcd(r,m)=1\\) implies invertibility.\n- <b>B:</b> Correct. This is the main theorem.\n- <b>C:</b> Correct. This is the other half of the main theorem.\n- <b>D:</b> Correct. This is a direct consequence, as \\(\\gcd(r, p) = 1\\) for all \\(r \\neq 0\\).\n- <b>E:</b> Correct. The equation \\(rx+my=1\\) reduced modulo \\(m\\) becomes \\(rx \\equiv 1 \\pmod{m}\\), so \\(x\\) is the inverse.'
    },
    {
        id: 17,
        question: 'What is <strong>Euler\'s Totient Function \\(\\phi(n)\\)</strong>?<sup>17</sup>',
        options: [
            'It counts how many positive integers \\(\\le n\\) are relatively prime to \\(n\\)',
            'It is the size of the set \\(U_m\\) (the set of invertible elements)',
            '\\(\\phi(p) = p\\) when \\(p\\) is prime',
            '\\(\\phi(n) = z\\) is the crucial secret number in RSA (where \\(n=pq\\))',
            '\\(\\phi(15) = 8\\)'
        ],
        correct: [0, 1, 3, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This is the definition of the function.\n- <b>B:</b> Correct. An element is invertible iff it is coprime to \\(n\\), so \\(\\phi(n) = |U_n|\\) by definition.\n- <b>C:</b> Incorrect. \\(\\phi(p) = p-1\\), since all \\(p-1\\) numbers \\(\\{1, ..., p-1\\}\\) are coprime to \\(p\\).\n- <b>D:</b> Correct. In RSA, \\(z = (p-1)(q-1) = \\phi(p)\\phi(q) = \\phi(pq) = \\phi(n)\\). This is the modulus for the exponents.\n- <b>E:</b> Correct. The numbers coprime to 15 are \\(\\{1, 2, 4, 7, 8, 11, 13, 14\\}\\). There are 8 of them.'
    },
    {
        id: 18,
        question: 'How is <strong>\\(\\phi(n)\\) calculated</strong>?<sup>18</sup>',
        options: [
            'If \\(p\\) is prime, \\(\\phi(p) = p-1\\)',
            'If \\(n = p^k\\) (prime power), \\(\\phi(n) = p^k - p^{k-1}\\)',
            'If \\(\\gcd(a, b) = 1\\), then \\(\\phi(ab) = \\phi(a) + \\phi(b)\\)',
            'If \\(n = pq\\) (distinct primes), \\(\\phi(n) = (p-1)(q-1)\\)',
            '\\(\\phi(8) = 4\\)'
        ],
        correct: [0, 1, 3, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This is the base case.\n- <b>B:</b> Correct. This is the formula for prime powers.\n- <b>C:</b> Incorrect. The totient function is *multiplicative*, not additive. \\(\\phi(ab) = \\phi(a) \\times \\phi(b)\\).\n- <b>D:</b> Correct. This is a direct result of \\(\\phi(n) = \\phi(p)\\phi(q) = (p-1)(q-1)\\) and is vital for RSA.\n- <b>E:</b> Correct. Using the formula from B: \\(\\phi(8) = \\phi(2^3) = 2^3 - 2^2 = 8 - 4 = 4\\). (The numbers are 1, 3, 5, 7).'
    },
    {
        id: 19,
        question: 'What are the properties of the set \\(U_m\\), the set of <strong>invertible elements</strong> in \\(\\mathbb{Z}_m\\)?<sup>19</sup>',
        options: [
            '\\(|U_m| = \\phi(m)\\)',
            '\\(U_m\\) is "closed" under multiplication (if \\(a, b \\in U_m\\), then \\(ab \\in U_m\\))',
            'If \\(y \\in U_m\\), then multiplying all elements of \\(U_m\\) by \\(y\\) just shuffles (permutes) the set \\(U_m\\)',
            'If \\(y\\) is a zero divisor, then \\(yU_m = U_m\\)',
            'In \\(\\mathbb{Z}_9\\), \\(U_9 = \\{1, 2, 4, 5, 7, 8\\}\\)'
        ],
        correct: [0, 1, 2, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This is the definition.\n- <b>B:</b> Correct. The product of two invertible elements is also invertible.\n- <b>C:</b> Correct. This is a key property used to prove Euler\'s Theorem.\n- <b>D:</b> Incorrect. If \\(y\\) is a zero divisor, \\(yU_m\\) will be a smaller set containing zero divisors. (e.g., \\(3 \\times U_9 = \\{3, 6\\}\\)).\n- <b>E:</b> Correct. These are the 6 (\\(\\phi(9)=6\\)) numbers coprime to 9.'
    },
    {
        id: 20,
        question: 'Which statements correctly describe <strong>Euler\'s Theorem</strong>?<sup>20</sup>',
        options: [
            'If \\(\\gcd(y, m) = 1\\), then \\(y^{\\phi(m)} \\equiv 1 \\pmod{m}\\)',
            'It is the core mathematical principle that makes RSA decryption work',
            'Fermat\'s Little Theorem is a generalization of Euler\'s Theorem',
            'If \\(\\gcd(y, m) > 1\\), then \\(y^{\\phi(m)} \\equiv 0 \\pmod{m}\\)',
            'It is proven by multiplying all elements in \\(U_m\\) together'
        ],
        correct: [0, 1, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. This is the statement of the theorem.\n- <b>B:</b> Correct. It guarantees that \\(m^{k \\phi(n)} \\equiv 1 \\pmod{n}\\), which makes \\(m^{1 + k\\phi(n)} \\equiv m \\pmod{n}\\). This is the RSA identity.\n- <b>C:</b> Incorrect. It\'s the other way around: Euler\'s Theorem is the generalization, and FLT is the special case where \\(m=p\\) (a prime).\n- <b>D:</b> Incorrect. The theorem makes no guarantee if the gcd is not 1. (e.g., in \\(\\mathbb{Z}_{10}\\), \\(\\phi(10)=4\\), but \\(2^4 = 16 \\equiv 6 \\pmod{10}\\), not 0).\n- <b>E:</b> Correct. The proof sketch involves \\(u = y^{\\phi(m)} u \\pmod{m}\\), where \\(u\\) is the product of all elements in \\(U_m\\).'
    }
];

