// This file contains the complete question data structure (allQuizData)
// for a Multiple-Select Quiz on Lecture 6: Number Theory.
const quizTitle = "Lecture 6 Quiz: Number Theory and Cryptography";
const allQuizData = [
    {
        id: 1,
        question: 'Which of the following are <strong>core concepts in cryptography</strong>?<sup>1</sup>',
        options: [
            'Quantum entanglement - used for quantum key distribution',
            'Plaintext - the original readable message before encryption',
            'Frequency analysis - a technique to break substitution ciphers',
            'Key distribution - the main problem in symmetric cryptography',
            'Ciphertext - the encrypted unreadable message after encryption'
        ],
        correct: [0, 2, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. Quantum entanglement is used in advanced cryptography.\n- <b>B:</b> Incorrect. Plaintext is basic but not a core advanced concept.\n- <b>C:</b> Correct. Frequency analysis is fundamental to cryptanalysis.\n- <b>D:</b> Incorrect. Key distribution is important but not the only core concept.\n- <b>E:</b> Correct. Ciphertext is essential to encryption processes.'
    },
    {
        id: 2,
        question: 'What are the <strong>key characteristics of the Caesar cipher</strong>?<sup>2</sup>',
        options: [
            'It uses a different random key for each character',
            'It is vulnerable to brute force attacks',
            'Each letter is shifted by a fixed number of positions',
            'It provides perfect security when implemented correctly',
            'It has only 25 possible keys (excluding shift of 0)'
        ],
        correct: [1, 3],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. The shift is fixed, not random per character.\n- <b>B:</b> Correct. Easy to break by trying all 25 possibilities.\n- <b>C:</b> Incorrect. While true, this is the definition, not a key characteristic.\n- <b>D:</b> Correct. It provides no real security.\n- <b>E:</b> Incorrect. This is a limitation, not a characteristic.'
    },
    {
        id: 3,
        question: 'Which statements about the <strong>permutation cipher</strong> are true?<sup>3</sup>',
        options: [
            'It is vulnerable to frequency analysis attacks',
            'The key space is too small for practical security',
            'There are 26! possible keys (about 4.03 × 10²⁶)',
            'It is more secure than the one-time pad',
            'It uses a random permutation of the entire alphabet as the key'
        ],
        correct: [0, 2, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. Common letter frequencies can reveal patterns.\n- <b>B:</b> Incorrect. The key space is enormous.\n- <b>C:</b> Correct. 26! is an astronomically large number.\n- <b>D:</b> Incorrect. One-time pad is theoretically unbreakable.\n- <b>E:</b> Correct. This defines the permutation cipher.'
    },
    {
        id: 4,
        question: 'What are the <strong>requirements for a one-time pad</strong> to be theoretically unbreakable?<sup>4</sup>',
        options: [
            'The key must be as long as the message',
            'The key must use only uppercase letters',
            'The key must be shared via secure email',
            'The key must be truly random',
            'The key must never be reused'
        ],
        correct: [0, 3],
        explanation: 'Rationale:\n- <b>A:</b> Correct. Key length must match message length.\n- <b>B:</b> Incorrect. The key can use any representation.\n- <b>C:</b> Incorrect. Secure physical distribution is needed, not email.\n- <b>D:</b> Correct. Randomness is essential for security.\n- <b>E:</b> Incorrect. While important, reusability affects practical security, not theoretical unbreakability.'
    },
    {
        id: 5,
        question: 'Which statements about <strong>public key cryptography (RSA)</strong> are correct?<sup>5</sup>',
        options: [
            'It is less secure than permutation ciphers',
            'The public key can be safely shared with anyone',
            'It requires both parties to meet in person first',
            'It uses different keys for encryption and decryption',
            'Security relies on the difficulty of factoring large numbers'
        ],
        correct: [1, 4],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. RSA is much more secure.\n- <b>B:</b> Correct. Public key is meant to be public.\n- <b>C:</b> Incorrect. No prior meeting required.\n- <b>D:</b> Incorrect. While true, this is the definition.\n- <b>E:</b> Correct. Factoring large primes is computationally hard.'
    },
    {
        id: 6,
        question: 'Which of the following are <strong>true about divisibility</strong> in number theory?<sup>6</sup>',
        options: [
            'If a|b, then a must be smaller than b',
            'Every integer divides 0',
            '0 divides every integer',
            'If a|b and a|c, then a|(b + c)',
            'If a|b and b|c, then a|c (transitivity)'
        ],
        correct: [1, 3, 4],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. Counterexample: 5|(-10) but 5 > -10.\n- <b>B:</b> Correct. 0 = n × 0 for any integer n.\n- <b>C:</b> Incorrect. 0 does not divide nonzero integers.\n- <b>D:</b> Correct. Divisibility is preserved under addition.\n- <b>E:</b> Correct. This is the transitive property.'
    },
    {
        id: 7,
        question: 'What are the <strong>key properties of the division algorithm</strong>?<sup>7</sup>',
        options: [
            'The quotient q is always positive',
            'For integers a and b (b > 0), there exist unique q and r such that a = bq + r',
            'The algorithm works for any real numbers a and b',
            'The remainder r satisfies 0 ≤ r < b',
            'If r = 0, then b divides a'
        ],
        correct: [1, 3],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. Quotient can be negative if dividend is negative.\n- <b>B:</b> Correct. This is the division algorithm statement.\n- <b>C:</b> Incorrect. It applies to integers only.\n- <b>D:</b> Correct. Remainder is always non-negative and less than divisor.\n- <b>E:</b> Incorrect. While true, this is a consequence, not a key property.'
    },
    {
        id: 8,
        question: 'Which statements about <strong>number bases</strong> are correct?<sup>8</sup>',
        options: [
            'Octal is the most common base in modern computing',
            'The decimal number 13 equals 1101 in binary',
            'Base 10 is used because computers have 10 fingers',
            'Binary (base 2) uses only digits 0 and 1',
            'Hexadecimal (base 16) uses digits 0-9 and A-F'
        ],
        correct: [1, 2, 4],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. Binary and hexadecimal are more common in computing.\n- <b>B:</b> Correct. 1101₂ = 8 + 4 + 0 + 1 = 13.\n- <b>C:</b> Correct. This is the historical reason for base 10.\n- <b>D:</b> Incorrect. While true, this is basic knowledge.\n- <b>E:</b> Correct. Hex uses 16 symbols including A-F.'
    },
    {
        id: 9,
        question: 'What are the <strong>key steps in the Euclidean Algorithm</strong> for finding GCD?<sup>9</sup>',
        options: [
            'Start with two numbers a and b (a > b)',
            'It requires prime factorization of the numbers',
            'The last non-zero remainder is the GCD',
            'Replace a with b and b with the remainder r',
            'Repeat until the remainder is 0'
        ],
        correct: [0, 3, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. Standard initialization.\n- <b>B:</b> Incorrect. Euclidean algorithm doesn\'t need factorization.\n- <b>C:</b> Incorrect. While true, this is the result.\n- <b>D:</b> Correct. This is the iterative step.\n- <b>E:</b> Correct. Termination condition.'
    },
    {
        id: 10,
        question: 'Which statements about <strong>coprime integers</strong> are true?<sup>10</sup>',
        options: [
            'All prime numbers are coprime with each other',
            'Any two consecutive integers are coprime',
            'Coprime integers must have different parity',
            'If GCD(a,b) = 1, then there exist integers m,n such that 1 = am + bn',
            'Two integers are coprime if their GCD is 1'
        ],
        correct: [1, 3],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. 2 and 2 are both prime but not coprime.\n- <b>B:</b> Correct. Consecutive integers share no common factors.\n- <b>C:</b> Incorrect. Counterexample: 15 and 16 are coprime but both odd/even.\n- <b>D:</b> Correct. Bézout\'s identity.\n- <b>E:</b> Incorrect. While true, this is the definition.'
    },
    {
        id: 11,
        question: 'What are the <strong>properties of prime numbers</strong>?<sup>11</sup>',
        options: [
            '2 is the only even prime number',
            'All odd numbers greater than 1 are prime',
            'There are infinitely many prime numbers',
            'A prime number has exactly two distinct positive divisors',
            'Every integer greater than 1 can be factored uniquely into primes'
        ],
        correct: [0, 2, 3],
        explanation: 'Rationale:\n- <b>A:</b> Correct. All other even numbers are divisible by 2.\n- <b>B:</b> Incorrect. Counterexample: 9 is odd but not prime.\n- <b>C:</b> Correct. Euclid\'s theorem.\n- <b>D:</b> Correct. Definition of prime numbers.\n- <b>E:</b> Incorrect. While true, this is about factorization, not prime properties.'
    },
    {
        id: 12,
        question: 'Which statements about <strong>rational numbers</strong> are correct?<sup>12</sup>',
        options: [
            'All rational numbers have finite decimal expansions',
            'A rational number can be expressed as p/q where p,q are integers, q ≠ 0',
            'Rational numbers are uncountable',
            'The decimal expansion of a rational number either terminates or repeats',
            'Between any two rational numbers, there is another rational number'
        ],
        correct: [1, 3, 4],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. Example: 1/3 = 0.333...\n- <b>B:</b> Correct. Definition of rational numbers.\n- <b>C:</b> Incorrect. Rationals are countable.\n- <b>D:</b> Correct. Characteristic property.\n- <b>E:</b> Correct. Density of rationals.'
    },
    {
        id: 13,
        question: 'What are the <strong>characteristics of irrational numbers</strong>?<sup>13</sup>',
        options: [
            '√2 is proven to be irrational',
            'All square roots are irrational',
            'They cannot be expressed as ratios of integers',
            'Irrational numbers are less common than rational numbers',
            'Their decimal expansions are infinite and non-repeating'
        ],
        correct: [0, 2, 4],
        explanation: 'Rationale:\n- <b>A:</b> Correct. Classical proof by contradiction.\n- <b>B:</b> Incorrect. √4 = 2 is rational.\n- <b>C:</b> Correct. Definition of irrationals.\n- <b>D:</b> Incorrect. Both sets are infinite.\n- <b>E:</b> Correct. Key distinguishing feature.'
    },
    {
        id: 14,
        question: 'Which statements about the <strong>Extended Euclidean Algorithm</strong> are true?<sup>14</sup>',
        options: [
            'It can solve any linear Diophantine equation',
            'It works backwards through the steps of the Euclidean Algorithm',
            'It only works when both numbers are prime',
            'It finds integers x and y such that GCD(a,b) = ax + by',
            'It is used to compute modular inverses'
        ],
        correct: [1, 3, 4],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. Only equations of form ax + by = GCD(a,b).\n- <b>B:</b> Correct. Backward substitution process.\n- <b>C:</b> Incorrect. Works for any integers.\n- <b>D:</b> Correct. Bézout coefficients.\n- <b>E:</b> Correct. Essential application.'
    },
    {
        id: 15,
        question: 'What are the <strong>key relationships between GCD and LCM</strong>?<sup>15</sup>',
        options: [
            'LCM is always greater than GCD',
            'GCD and LCM are the same for all numbers',
            'GCD(a,b) × LCM(a,b) = a × b',
            'If GCD(a,b) = 1, then LCM(a,b) = a × b',
            'For prime factorizations, GCD takes minimum exponents and LCM takes maximum exponents'
        ],
        correct: [2, 3, 4],
        explanation: 'Rationale:\n- <b>A:</b> Incorrect. Not always true for negative numbers.\n- <b>B:</b> Incorrect. They are different operations.\n- <b>C:</b> Correct. Fundamental relationship.\n- <b>D:</b> Correct. Special case for coprime numbers.\n- <b>E:</b> Correct. Prime factorization method.'
    }
];