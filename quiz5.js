// This file contains the complete question data structure (allQuizData)
// for a Multiple-Select Quiz on Basic Combinatorics.
// Note: Mathematical expressions use MathJax syntax delimited by \( and \).
// Formatting uses only standard HTML tags (like <br> and <b>) within the string content.

const quizTitle = "4001CMD Quiz Week 5: Basic Combinatorics";

const allQuizData = [
    {
        id: 1,
        question: 'Which scenarios are best modeled using the <b>Product Rule (Multiplication Principle)</b> for counting?<sup>1</sup>',
        options: [
            'Determining the number of ways to select a shirt OR a pair of pants from 10 shirts and 5 pairs of pants.',
            'Determining the number of 4-digit PINs where each digit can be any number from 0 to 9.',
            'Counting the number of different outcomes when flipping a coin followed by rolling a six-sided die.',
            'Calculating the total number of students in a class that are either enrolled in Mathematics (M) or Computer Science (C), where \\(|M \\cap C| \\neq 0|\\).'
        ],
        correct: [1, 2],
        explanation: 'Rationale: The Product Rule applies when counting the number of ways to perform a sequence of independent tasks.<br><b>A:</b> Incorrect. This is the Sum Rule (mutually exclusive choices).<br><b>B:</b> Correct. This is 10 choices (Task 1) AND 10 choices (Task 2) AND 10 choices (Task 3) AND 10 choices (Task 4): \\(10^4\\).<br><b>C:</b> Correct. This is 2 choices (Task 1) AND 6 choices (Task 2): \\(2 \\times 6\\).<br><b>D:</b> Incorrect. This requires the Inclusion-Exclusion Principle.'
    },
    {
        id: 2,
        question: 'A traveler can choose to fly via one of 3 airlines (A, B, C) or take a bus from one of 5 coach companies (P, Q, R, S, T). Which statements apply the <b>Sum Rule (Addition Principle)</b> correctly?<sup>2</sup>',
        options: [
            'The total number of travel options is \\(3 \\times 5 = 15\\).',
            'The total number of travel options is \\(3 + 5 = 8\\).',
            'The Sum Rule is applicable because choosing an airline and choosing a bus are mutually exclusive events.',
            'The Principle of Inclusion-Exclusion must be used because both sets of options are available to the traveler.'
        ],
        correct: [1, 2],
        explanation: 'Rationale: The Sum Rule applies when the tasks are mutually exclusive. The traveler chooses one OR the other.<br><b>A:</b> Incorrect. This would be the Product Rule, used if the traveler had to fly AND take a bus.<br><b>B:</b> Correct. Total options are \\(3 + 5 = 8\\).<br><b>C:</b> Correct. Since a traveler cannot simultaneously fly and take a bus for the same trip, the sets of options are disjoint.<br><b>D:</b> Incorrect. Since the sets are mutually exclusive, the size of the union is simply the sum of the sizes of the sets.'
    },
    {
        id: 3,
        question: 'Let \\(A\\) be the set of positive integers less than or equal to 100 that are divisible by 2, and \\(B\\) be the set of positive integers less than or equal to 100 that are divisible by 5. Which statements correctly apply the <b>Principle of Inclusion-Exclusion (PIE) (Sieve Principle)</b>?<sup>3</sup>',
        options: [
            '\\(|A| = 50\\) and \\(|B| = 20\\).',
            'The numbers divisible by both 2 and 5 are divisible by 10, so \\(|A \\cap B| = 5\\).',
            'The total number of integers in the union \\(A \\cup B\\) is \\(50 + 20 - 10 = 60\\).',
            'PIE is only necessary for problems with three or more sets.'
        ],
        correct: [0, 2],
        explanation: 'Rationale: PIE for two sets is \\(|A \\cup B| = |A| + |B| - |A \\cap B|\\).<br><b>A:</b> Correct. \\(|A| = \\lfloor 100/2 \\rfloor = 50\\); \\(|B| = \\lfloor 100/5 \\rfloor = 20\\).<br><b>B:</b> Incorrect. Numbers divisible by 10 are \\(\\lfloor 100/10 \\rfloor = 10\\). So \\(|A \\cap B| = 10\\).<br><b>C:</b> Correct. \\(50 + 20 - 10 = 10 = 60\\).<br><b>D:</b> Incorrect. PIE is required whenever the sets are not mutually exclusive, even for two sets.'
    },
    {
        id: 4,
        question: 'Which of the following scenarios are classified as <b>Permutations</b>?<sup>4</sup>',
        options: [
            'Selecting a starting lineup of 5 players from a team of 12, where position (e.g., Forward, Guard) matters.',
            'Counting the number of unique 5-letter codes that can be formed from the letters A, B, C, D, E without repetition.',
            'Choosing 3 flavors of ice cream from a list of 10 available flavors for a triple-scoop cone where the order of the scoops does not matter.',
            'Determining the number of ways to arrange the letters in the word "BOOKKEEPER".'
        ],
        correct: [0, 1],
        explanation: 'Rationale: Permutations are about arrangements (order matters).<br><b>A:</b> Correct. Selecting and assigning positions means order matters (P1 at Guard is different from P1 at Forward). This is \\(P(12, 5)\\).<br><b>B:</b> Correct. Since the resulting code (arrangement) is different if the order changes (ABCDE is different from EABCD), order matters. This is \\(P(5, 5) = 5!\\).<br><b>C:</b> Incorrect. Choosing a subset where order does not matter is a Combination.<br><b>D:</b> Incorrect. This is a Permutation with Repetition, a specialized formula for arrangements of non-distinct items.'
    },
    {
        id: 5,
        question: 'A lock combination uses 4 distinct digits (0-9). How is the number of possible combinations calculated, and what does it represent?<sup>5</sup>',
        options: [
            'The problem is a Combination problem, since the term "combination" is used by the lock manufacturer.',
            'The calculation is a Permutation, given by \\(P(10, 4) = 10! / (10-4)!\\).',
            'The number represents the count of ordered arrangements of 4 distinct items chosen from 10.',
            'The calculation is a Combination, given by \\(\\binom{10}{4} = 10! / (4! (10-4)!)\\).'
        ],
        correct: [1, 2],
        explanation: 'Rationale: Despite the misleading common term "lock combination," locks requires an ordered sequence (e.g., 1-2-3-4 is different from 4-3-2-1), making it a Permutation.<br><b>A:</b> Incorrect. The mathematical term "combination" means order does not matter.<br><b>B:</b> Correct. It is a permutation of 4 items chosen from 10: \\(P(10, 4)\\).<br><b>C:</b> Correct. A permutation is an ordered arrangement.<br><b>D:</b> Incorrect. This formula is for an unordered selection (combination).'
    },
    {
        id: 6,
        question: 'Which of the following expressions correctly represent the number of ways to form a 3-letter sequence using the English alphabet (26 letters) <b>with repetition allowed</b>?<sup>6</sup>',
        options: [
            '\\(P(26, 3)\\)',
            '\\(26 \\times 25 \\times 24\\)',
            '\\(26^3\\)',
            'The product of the number of choices for each of the three positions.'
        ],
        correct: [2, 3],
        explanation: 'Rationale: When repetition is allowed, the number of choices for each position is independent and constant, making this a simple application of the Product Rule.<br><b>A:</b> Incorrect. \\(P(26, 3)\\) is for *without* repetition.<br><b>B:</b> Incorrect. This is the expanded form of \\(P(26, 3)\\), which is for *without* repetition.<br><b>C:</b> Correct. 26 choices for the 1st letter, 26 for the 2nd, and 26 for the 3rd.<br><b>D:</b> Correct. The Product Rule states that if there are \\(n_1\\) ways to do the first task and \\(n_2\\) ways to do the second, there are \\(n_1 n_2\\) ways to do both (which equals \\(26 \\times 26 \\times 26\\)).'
    },
    {
        id: 7,
        question: 'You need to select a committee of 5 people from a group of 15 eligible candidates. Which formulas represent the number of ways to do this?<sup>7</sup>',
        options: [
            '\\(\\binom{15}{5}\\)',
            '\\(P(15, 5)\\)',
            '\\(\\frac{15!}{5! \\times 10!}\\)',
            '\\(15 \\times 14 \\times 13 \\times 12 \\times 11\\)'
        ],
        correct: [0, 2],
        explanation: 'Rationale: Selecting a committee means the order of selection does not matter; hence, it is a Combination problem.\\(C(n, k) = \\binom{n}{k} = \\frac{n!}{k! (n-k)!}\\).<br><b>A:</b> Correct. Standard Binomial Coefficient notation for combinations.<br><b>B:</b> Incorrect. This is the formula for Permutations (order matters).<br><b>C:</b> Correct. This is the expanded definition of \\(\\binom{15}{5}\\), where \\(n=15\\) and \\(k=5\\).<br><b>D:</b> Incorrect. This is the expanded form of \\(P(15, 5)\\).'
    },
    {
        id: 8,
        question: 'The number of distinct arrangements (permutations) of the letters in the word <b>"MISSISSIPPI"</b> is calculated using which method and notation?<sup>8</sup>',
        options: [
            'Simple Permutation, \\(P(11, 11) = 11!\\), because there are 11 letters in total.',
            'Permutation with Repetition, due to repeated letters (M, I, S, P).',
            'The formula \\(\\frac{11!}{1! 4! 4! 2!}\\), where 11 is the total length.',
            'Combination, because the letters are grouped together in the final word.'
        ],
        correct: [1, 2],
        explanation: 'Rationale: This is an arrangement of a set of objects where some are indistinguishable, requiring the specific Permutation with Repetition formula: \\(\\frac{n!}{n_1! n_2! ... n_k!}\\).<br>Word breakdown: M (1), I (4), S (4), P (2). Total \\(n=11\\).<br><b>A:</b> Incorrect. This assumes all letters are distinct.<br><b>B:</b> Correct. The letters I, S, and P are repeated.<br><b>C:</b> Correct. \\(\\frac{11!}{1! \\times 4! \\times 4! \\times 2!}\\) is the correct application of the formula.'
    },
    {
        id: 9,
        question: 'Which scenarios are examples of <b>Combinations with Repetition</b> (using the Stars and Bars technique)?<br><i>(Stars and Bars counts the number of ways to distribute \\(n\\) identical items into \\(k\\) distinct bins, or non-negative integer solutions to the equation: \\(x_1 + \\cdots + x_k = n\\).)</i><sup>9</sup>',
        options: [
            'Selecting 4 items from 7 available items where the order of selection is irrelevant.',
            'Determining the number of ways to distribute 10 identical cookies among 3 distinct children.',
            'Choosing a selection of 5 doughnuts from a shop that offers 12 different types, where the order you pick them up does not matter.',
            'Counting the number of non-negative integer solutions to the equation \\(x_1 + x_2 + x_3 = 8\\).'
        ],
        correct: [1, 3],
        explanation: 'Rationale: Combinations with Repetition (Stars and Bars) involves choosing items from a set where repetition is allowed AND order does not matter. This is equivalent to distributing identical objects (stars) into distinct bins (variables/children/flavors). The formula is \\(\\binom{n+k-1}{k}\\) or \\(\\binom{n+k-1}{n-1}\\).<br><b>A:</b> Incorrect. This is a simple Combination without repetition, \\(\\binom{7}{4}\\).<br><b>B:</b> Correct. Identical cookies (stars) into distinct children (bins/variables). \\(n=10, k=3\\).<br><b>C:</b> Incorrect. While repetition is allowed and order doesn\'t matter, this is a direct application of \\(\\binom{n+k-1}{k}\\) with \\(n=12\\) flavors and \\(k=5\\) selections. However, the cookie distribution is the standard textbook example of this principle.<br><b>D:</b> Correct. This is the direct definition of Stars and Bars: finding non-negative integer solutions, where 8 is the number of stars (cookies) and 3 is the number of variables (children/bins).'
    },
    {
        id: 10,
        question: 'Given an integer \\(n \\geq 1\\), which statements about the factorial notation \\(n!\\) are true?<sup>10</sup>',
        options: [
            '\\(n!\\) represents the number of ways to arrange \\(n\\) distinct objects in a line.',
            '\\(0! = 0\\), by definition.',
            '\\(n! = n \\cdot (n-1)!\\) for \\(n \\geq 1\\).',
            '\\(n!\\) grows faster than any exponential function \\(a^n\\).'
        ],
        correct: [0, 2],
        explanation: 'Rationale: Factorial is the product of all positive integers less than or equal to \\(n\\).<br><b>A:</b> Correct. This is the combinatorial definition of the factorial.<br><b>B:</b> Incorrect. By definition, \\(0! = 1\\).<br><b>C:</b> Correct. This is the recursive definition of the factorial.<br><b>D:</b> Incorrect. The growth rate of \\(n!\\) is not a standard part of basic combinatorics but it is true that \\(n!\\) grows faster than any polynomial function, but *not* necessarily faster than all exponential functions (Stirling\'s approximation shows its growth is close to \\(\\left(\\frac{n}{e}\\right)^n \\sqrt{2\\pi n}\\)). The standard facts relate to definitions and arrangements.'
    },
    {
        id: 11,
        question: 'Which of the following must be true concerning the <b>Pigeonhole Principle (PHP)</b>?<sup>11</sup>',
        options: [
            'If \\(N\\) objects (pigeons) are placed into \\(M\\) containers (pigeonholes) and \\(N > M\\), then at least two objects must share a container.',
            'The PHP only works if the objects are indistinguishable (e.g., identical balls).',
            'If 13 people are in a room, the PHP guarantees that at least two people share the same birth month.',
            'If \\(N\\) objects are placed into \\(M\\) containers, and \\(N < M\\), then no container can be empty.'
        ],
        correct: [0, 2],
        explanation: 'Rationale: The PHP is a guarantee on the distribution of objects when the number of objects exceeds the number of places to put them.<br><b>A:</b> Correct. This is the formal statement of the basic PHP.<br><b>B:</b> Incorrect. The principle works regardless of whether the objects are distinguishable or not; it only concerns the count of objects.<br><b>C:</b> Correct. The objects (pigeons) are the 13 people, and the containers (pigeonholes) are the 12 months. Since \\(13 > 12\\), at least one month must contain two or more people.<br><b>D:</b> Incorrect. If \\(N < M\\), it is possible for many containers to be empty.'
    },
    {
        id: 12,
        question: 'Use the <b>Generalized Pigeonhole Principle (GPHP)</b>.<br><small>The GPHP states that if \\(N\\) objects are distributed into \\(M\\) containers, at least one container must contain \\(\\lceil N/M \\rceil\\) or more objects.</small><br>If 25 letters are distributed into 6 mailboxes, which statements are guaranteed to be true?<sup>12</sup>',
        options: [
            'At least one mailbox must contain \\(\\lfloor 25/6 \\rfloor = 4\\) letters.',
            'The number of mailboxes with exactly 3 letters is 5, and the 6th mailbox has 10 letters.',
            'At least one mailbox must contain \\(\\lceil 25/6 \\rceil = 5\\) or more letters.',
            'The distribution of letters could be 4, 4, 4, 4, 4, 5.'
        ],
        correct: [2, 3],
        explanation: 'Rationale: The GPHP guarantees that at least one hole contains \\(\\lceil N/M \\rceil\\) objects. Here, \\(N=25\\) (pigeons) and \\(M=6\\) (pigeonholes).<br><b>A:</b> Incorrect. \\(4\\) is the floor, which is a possible minimum, but not the guarantee.<br><b>B:</b> Incorrect. This specific distribution is possible, but the GPHP is a minimum guarantee, not a statement on all possible distributions.<br><b>C:</b> Correct. \\(\\lceil 25/6 \\rceil = \\lceil 4.16... \\rceil = 5\\). This is the minimum guaranteed count.<br><b>D:</b> Correct. This is a possible distribution that meets the GPHP guarantee (since the last box has 5 letters).'
    },
    {
        id: 13,
        question: 'In a problem that requires selecting a subset of items, how can one determine whether to use Permutations (order matters) or Combinations (order does not matter)?<sup>13</sup>',
        options: [
            'If the items are being placed into distinct positions (e.g., President, Vice President), use Permutations.',
            'If the question asks for a "selection," "group," or "subset," use Combinations.',
            'If the question involves a "lineup," "arrangement," or "sequence," use Combinations.',
            'If the items being selected are identical, the process is always a Permutation with Repetition.'
        ],
        correct: [0, 1],
        explanation: 'Rationale: The key is whether the identity of the final arrangement changes when two selected items swap places.<br><b>A:</b> Correct. Assigning roles means order/position is important (Person A as President is different from Person B as President).<br><b>B:</b> Correct. These terms imply that the resulting group is the focus, not the sequence of choosing them.<br><b>C:</b> Incorrect. "Lineup," "arrangement," and "sequence" are keywords for Permutations.<br><b>D:</b> Incorrect. If the items are identical, there is only one arrangement, but the problem could be a Combination with Repetition (Stars and Bars) if items are distributed to distinct bins.'
    },
    {
        id: 14,
        question: 'What is the correct value of the binomial coefficient \\(\\binom{5}{2}\\) and what does it represent?<sup>14</sup>',
        options: [
            'The value is 10.',
            'The value is 20, which is \\(5 \\times 4\\).',
            'It represents the number of different ways to choose 2 unordered items from a set of 5 distinct items.',
            'It represents the number of ordered arrangements of 2 items chosen from 5.'
        ],
        correct: [0, 2],
        explanation: 'Rationale: The binomial coefficient \\(\\binom{n}{k}\\) is the formula for combinations, \\(\\frac{n!}{k! (n-k)!}\\).<br><b>A:</b> Correct. \\(\\binom{5}{2} = \\frac{5!}{2! 3!} = \\frac{5 \\times 4}{2 \\times 1} = 10\\).<br><b>B:</b> Incorrect. 20 is the value of the permutation \\(P(5, 2)\\).<br><b>C:</b> Correct. This is the definition of a combination.<br><b>D:</b> Incorrect. This is the definition of a permutation.'
    },
    {
        id: 15,
        question: 'A coin is flipped 8 times, resulting in a sequence of Heads (H) and Tails (T). Which methods correctly calculate the number of sequences that contain exactly 3 Heads?<sup>15</sup>',
        options: [
            'Using the Product Rule as \\(2^8\\).',
            'Calculating the number of ways to choose 3 positions for the Heads from the 8 total positions.',
            'The combination formula \\(\\binom{8}{3}\\).',
            'The permutation formula \\(P(8, 3)\\).'
        ],
        correct: [1, 2],
        explanation: 'Rationale: Once the positions for the 3 Heads are chosen, the remaining 5 positions must be Tails. The problem simplifies to choosing 3 slots out of 8, where the order of selection does not matter.<br><b>A:</b> Incorrect. \\(2^8\\) is the total number of all possible sequences, regardless of the number of Heads.<br><b>B:</b> Correct. This is the combinatorial logic: select a subset of 3 spots for the H\'s.<br><b>C:</b> Correct. The calculation is exactly \\(\\binom{8}{3}\\).<br><b>D:</b> Incorrect. Permutation would imply that the order in which the Heads are placed matters, but it does not (Position 1, 2, 3 for H is the same as Position 3, 2, 1 for H).'
    }
];
