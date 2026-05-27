// This file contains the complete question data structure (allQuizData)
// for a Multiple-Select Quiz on Functions and Cardinality.
// Note: Mathematical expressions use MathJax syntax delimited by \( and \).
// Formatting uses only standard HTML tags (like <br> and <b>) within the string content.

const quizTitle = "4001CMD Quiz Week 4: Functions and Cardinality";

const allQuizData = [
    {
        id: 1,
        question: 'Let f: A \\(\\rightarrow\\) B be a function. Which statements regarding the definition and properties of f are true?',
        options: [
            'The set B is formally defined as the <b>codomain</b> of f.',
            'The <b>range</b> of f is always equal to the <b>codomain</b> B.',
            'For every element a \\(\\in\\) A, there must be a <b>unique</b> element  \\( b \\in B : f(a) = b\\).',
            'The <b>domain</b> A must be a subset of the <b>codomain</b> B.'
        ],
        correct: [0, 2],
        explanation: 'Rationale: <br><b>A:</b> Correct. B is the codomain.<br><b>B:</b> Incorrect. The range (or image) of f is the subset of B containing only the elements actually mapped to. The range equals the codomain only if f is surjective.<br><b>C:</b> Correct. This is the definition of a function: every input maps to exactly one output.<br><b>D:</b> Incorrect. The domain and codomain are just sets; they do not need to be subsets of each other. For example, f: \\(\\mathbb{R}\\) \\(\\rightarrow\\) \\(\\mathbb{Z}\\).'
    },
    {
        id: 2,
        question: 'Let f: \\(\\mathbb{Z}\\) \\(\\rightarrow\\) \\(\\mathbb{Z}\\) be defined by the rule \\(f(x) = 2x\\). Which statements about this function \\(f\\) are true?',
        options: [
            'The function \\(f\\) is <b>injective</b> (one-to-one).',
            'The function \\(f\\) is <b>surjective</b> (onto).',
            'The <b>range</b> of \\(f\\) is the set of all even integers, \\(\\{..., -4, -2, 0, 2, 4, ...\\}\\).',
            'The function \\(f\\) is <b>bijective</b> (a one-to-one correspondence).'
        ],
        correct: [0, 2],
        explanation: 'Rationale: <br><b>A:</b> Correct. If f(x_1) = f(x_2), then 2x_1 = 2x_2, which implies x_1 = x_2.<br><b>B:</b> Incorrect. The odd integers in the codomain \\(\\mathbb{Z}\\) are never reached (e.g., there is no x \\(\\in\\) \\(\\mathbb{Z}\\) such that 2x = 3).<br><b>C:</b> Correct. Since x is an integer, 2x must be an even integer.<br><b>D:</b> Incorrect. A function must be both injective and surjective to be bijective, and \\(f\\) is not surjective.'
    },
    {
        id: 3,
        question: 'Let f: \\(\\mathbb{R}\\) \\(\\rightarrow\\) \\(\\mathbb{R}\\) be \\(f(x) = x+1\\) and g: \\(\\mathbb{R}\\) \\(\\rightarrow\\) \\(\\mathbb{R}\\) be \\(g(x) = x^2\\). Which statements about the function compositions are correct?',
        options: [
            'The composition \\((f \\circ g)(x)\\) is equal to \\(x^2 + 1\\).',
            'The composition \\((g \\circ f)(x)\\) is equal to \\(x^2 + 1\\).',
            'The value \\((f \\circ g)(3)\\) is equal to 10.',
            'The value \\((g \\circ f)(3)\\) is equal to 16.'
        ],
        correct: [0, 2, 3],
        explanation: 'Rationale:<br><b>A:</b> Correct. \\((f \\circ g)(x) = f(g(x)) = f(x^2) = x^2 + 1\\).<br><b>B:</b> Incorrect. \\((g \\circ f)(x) = g(f(x)) = g(x+1) = (x+1)^2 = x^2 + 2x + 1\\).<br><b>C:</b> Correct. \\((f \\circ g)(3) = 3^2 + 1 = 9 + 1 = 10\\).<br><b>D:</b> Correct. \\((g \\circ f)(3) = (3+1)^2 = 4^2 = 16\\).'
    },
    {
        id: 4,
        question: 'Which of the following sets are considered <b>countably infinite</b>? (i.e., they can be put into a bijective correspondence with the set of natural numbers, \\(\\mathbb{N}\\)).',
        options: [
            'The set of integers, \\(\\mathbb{Z}\\).',
            'The set of all irrational numbers, \\(\\mathbb{R}\\) \\(\\setminus\\) \\(\\mathbb{Q}\\).',
            'The set of natural numbers, \\(\\mathbb{N}\\).',
            'The closed interval of real numbers \\([0, 1]\\).',
            'The set of rational numbers, \\(\\mathbb{Q}\\).'
        ],
        correct: [0, 2, 4],
        explanation: 'Rationale: Countably infinite sets are those whose elements can be "listed" in an infinite sequence.<br><b>A, C, E:</b> Correct. \\(\\mathbb{Z}\\), \\(\\mathbb{N}\\), and \\(\\mathbb{Q}\\) are all countably infinite (demonstrated by Cantor pairing or similar methods).<br><b>B, D:</b> Incorrect. The set of real numbers \\(\\mathbb{R}\\), and any non-trivial interval of real numbers like \\([0, 1]\\), are <b>uncountable</b>, as shown by Cantor’s diagonal argument.'
    },
    {
        id: 5,
        question: 'Regarding the <b>Pigeonhole Principle</b>, if you have \\(N\\) pigeons and \\(M\\) pigeonholes, and \\(N > M\\), which statements are true?',
        options: [
            'The principle guarantees that at least one pigeonhole must contain more than one pigeon.',
            'The principle guarantees that every pigeonhole must contain at least one pigeon.',
            'If \\(N = 10\\) pigeons are put into \\(M = 3\\) pigeonholes, the principle guarantees that at least one hole contains 4 or more pigeons.',
            'The principle is a statement about functions f: A \\(\\rightarrow\\) B where \\(|A| > |B|\\), implying f cannot be injective.'
        ],
        correct: [0, 2, 3],
        explanation: 'Rationale:<br><b>A:</b> Correct. This is the direct statement of the principle: if you have more items than containers, at least one container must have more than one item.<br><b>B:</b> Incorrect. It is possible for some holes to be empty (e.g., 4 pigeons, 3 holes; holes could contain 4, 0, 0).<br><b>C:</b> Correct. This is the strong form (Generalized PHP): \\(\\lceil N/M \\rceil = \\lceil 10/3 \\rceil = \\lceil 3.33... \\rceil = 4\\).<br><b>D:</b> Correct. The principle can be formulated as: if a function maps a larger set A to a smaller set B, it cannot be one-to-one (injective).'
    },
    {
        id: 6,
        question: 'Applying the <b>Pigeonhole Principle</b>: A drawer contains a large number of loose red socks and blue socks. What is the minimum number of socks you must pull out (in the dark) to guarantee that you have a matching pair of the same color?',
        options: [
            '2 socks, since you could get one red and one blue.',
            '3 socks, since you only have two possible colors (pigeonholes).',
            '4 socks, to cover two pairs.',
            'You cannot guarantee a pair unless you pull out all the socks in the drawer.'
        ],
        correct: [1],
        explanation: 'Rationale: This is a classic application of the Pigeonhole Principle.<br><b>Pigeons (N):</b> The socks drawn.<br><b>Pigeonholes (M):</b> The possible colors (Red, Blue) = 2.<br>To guarantee a match, you need \\(N > M\\). If you pull out 2 socks, you could get one of each color (Red, Blue). If you pull out \\(N=3\\) socks, since there are only \\(M=2\\) colors, at least one color must have \\(\\lceil 3/2 \\rceil = 2\\) socks. This guarantees a matching pair.'
    },
    {
        id: 7,
        question: 'Let f: A \\(\\rightarrow\\) B be a function. Which statements are true regarding injectivity and surjectivity, assuming A and B are finite sets?',
        options: [
            'If f is injective, then \\(|A| \\leq |B|\\).',
            'If f is surjective, then \\(|A| \\leq |B|\\).',
            'f is surjective if and only if its range is equal to its codomain B.',
            'If f is injective and \\(|A| = |B|\\), then f must be a bijection.'
        ],
        correct: [0, 2, 3],
        explanation: 'Rationale: <br><b>A:</b> Correct. If every element in A maps to a unique element in B, B must be at least as large as A.<br><b>B:</b> Incorrect. If f is surjective, then \\(|A| \\geq |B|\\) for finite sets, as every element in B must be mapped from at least one element in A.<br><b>C:</b> Correct. This is the definition of surjection.<br><b>D:</b> Correct. For finite sets of equal size, an injection is automatically a surjection, making it a bijection.'
    },
    {
        id: 8,
        question: 'Given a function \\(f: A \\rightarrow B\\), which conditions are necessary for the <b>inverse function</b> \\(f^{-1}\\) to exist?',
        options: [
            'f must be <b>bijective</b> (both injective and surjective).',
            'The domain A must be an infinite set.',
            'The function f must be invertible, and \\(f^{-1}: B \\rightarrow A\\).',
            'The composition \\(f^{-1} \\circ f\\) must equal the identity function on B, \\(i_B\\).'
        ],
        correct: [0, 2],
        explanation: 'Rationale: <br><b>A:</b> Correct. Only bijective functions are invertible.<br><b>B:</b> Incorrect. Finite bijections (e.g., permutations) are also invertible.<br><b>C:</b> Correct. The domain and codomain are swapped for the inverse function.<br><b>D:</b> Incorrect. \\(f^{-1} \\circ f = i_A\\) (Identity on the domain A); \\(f \\circ f^{-1} = i_B\\) (Identity on the codomain B).'
    },
    {
        id: 9,
        question: 'A function \\(s: \\mathbb{N}\\) \\(\\rightarrow\\) \\(\\mathbb{N}\\) is defined recursively by \\(s(1)=1\\), \\(s(2)=2\\), and \\(s(n+1)=2s(n)-s(n-1)\\) for \\(n \\geq 2\\). Which statements are true about \\(s(n)\\)?',
        options: [
            'The value of \\(s(3)\\) is 3.',
            'The explicit, non-recursive formula for this function is \\(s(n)=2n-1\\).',
            'The conjecture (proved by induction in the tutorial) is that \\(s(n)=n\\).',
            'The function \\(s\\) is the same as the <b>Identity Function</b> \\(i_{\\mathbb{N}}\\).'
        ],
        correct: [0, 2, 3],
        explanation: 'Rationale: This refers to Problem 1 in Tutorial 3.<br><b>A:</b> Correct. \\(s(3) = 2s(2) - s(1) = 2(2) - 1 = 3\\).<br><b>B:</b> Incorrect. The explicit formula is \\(s(n)=n\\).<br><b>C:</b> Correct. The solution proves \\(s(n)=n\\).<br><b>D:</b> Correct. Since \\(s(n)=n\\) and the domain/codomain are \\(\\mathbb{N}\\), \\(s\\) is the identity function.'
    },
    {
        id: 10,
        question: 'The paradox of <b>Hilbert’s Hotel</b> (with a countably infinite number of rooms, \\(\\aleph_0\\)) illustrates which concepts?',
        options: [
            'The set of even natural numbers has the same cardinality as the set of all natural numbers, \\(\\mathbb{N}\\).',
            'The hotel can always accommodate one new guest, even when "full," by moving the guest in room \\(n\\) to room \\(n+1\\).',
            'The hotel <b>cannot</b> accommodate a bus with a countably infinite number of new guests.',
            'It demonstrates that infinite sets can be put into a bijective correspondence with one of their proper subsets.'
        ],
        correct: [0, 1, 3],
        explanation: 'Rationale: <br><b>A:</b> Correct. A bijection exists: \\(f(n) = 2n\\).<br><b>B:</b> Correct. This is the classic solution for one new guest.<br><b>C:</b> Incorrect. It <b>can</b> accommodate the infinite bus by moving the guest in room \\(n\\) to room \\(2n\\) and putting the new guests in the odd-numbered rooms.<br><b>D:</b> Correct. It demonstrates that infinite sets can be put into a bijective correspondence with one of their proper subsets.'
    },
    {
        id: 11,
        question: 'Let \\(f\\), \\(g\\), and \\(h\\) be functions such that the required compositions are defined. Which properties of function composition are generally true?',
        options: [
            'Function composition is <b>associative</b>: \\(f \\circ (g \\circ h) = (f \\circ g) \\circ h\\).',
            'Function composition is <b>commutative</b>: \\(f \\circ g = g \\circ f\\).',
            'If \\(f\\) and \\(g\\) are both bijections, then \\(f \\circ g\\) is also a bijection.',
            'The inverse of the composition is \\((f \\circ g)^{-1} = g^{-1} \\circ f^{-1}\\).'
        ],
        correct: [0, 2, 3],
        explanation: 'Rationale: <br><b>A:</b> Correct. Composition is always associative.<br><b>B:</b> Incorrect. Composition is generally not commutative (the order matters).<br><b>C:</b> Correct. The composition of two bijections results in a bijection.<br><b>D:</b> Correct. This is the "socks and shoes" rule for inverses of compositions.'
    },
    {
        id: 12,
        question: 'A function \\(f: A \\rightarrow B\\) is a <b>bijection</b> (a one-to-one correspondence) if and only if which of the following are true?',
        options: [
            'f is both an <b>injection</b> and a <b>surjection</b>.',
            'Every element in B is the image of <b>exactly one</b> element in A.',
            'The inverse function \\(f^{-1}\\) exists.',
            'The domain and codomain are the same set, \\(A=B\\).'
        ],
        correct: [0, 1, 2],
        explanation: 'Rationale: <br><b>A:</b> Correct. This is the definition of a bijection.<br><b>B:</b> Correct. This statement combines the definitions of injection (at most one element maps to a single output) and surjection (at least one element maps to a single output).<br><b>C:</b> Correct. A function is invertible if and only if it is a bijection.<br><b>D:</b> Incorrect. A bijection can exist between two different sets, e.g., \\(f: \\mathbb{N}\\) \\(\\rightarrow\\) \\(\\mathbb{Z}\\).'
    },
    {
        id: 13,
        question: 'Which of the following statements about set cardinality are true, based on the concepts of countable and uncountable infinity?',
        options: [
            'The set of all functions from \\(\\mathbb{N}\\) to \\(\\{0, 1\\}\\) (binary sequences) is uncountable.',
            'The set of all polynomials with integer coefficients is countable.',
            'The set of real numbers \\(\\mathbb{R}\\) is uncountable, while the set of rational numbers \\(\\mathbb{Q}\\) is countable.',
            'The set of all finite subsets of \\(\\mathbb{N}\\) is uncountable.'
        ],
        correct: [0, 1, 2],
        explanation: 'Rationale: <br><b>A:</b> Correct. This set is proved to be unlistable (uncountable) by Cantor\'s diagonal argument.<br><b>B:</b> Correct. The set of coefficients can be listed using a pairing function.<br><b>C:</b> Correct. This is a key result from the lecture.<br><b>D:</b> Incorrect. The set of all finite subsets of a countable set \\(\\mathbb{N}\\) is also countable.'
    },
    {
        id: 14,
        question: 'Consider the <b>Identity Function</b> \\(i_A: A \\rightarrow A\\) and the <b>Inclusion Function</b> \\(j_A: A \\rightarrow B\\) (where \\(A \\subseteq B\\)). Which properties are always true?',
        options: [
            '\\(i_A\\) is always a bijection.',
            '\\(i_A\\) is defined by \\(i_A(a) = a\\) for all \\(a \\in A\\).',
            '\\(j_A\\) is always a surjection.',
            '\\(j_A\\) is always an injection.'
        ],
        correct: [0, 1, 3],
        explanation: 'Rationale: <br><b>A:</b> Correct. The identity function is always both injective and surjective.<br><b>B:</b> Correct. This is the definition of the identity function.<br><b>C:</b> Incorrect. The inclusion function is only surjective if \\(A = B\\).<br><b>D:</b> Correct. Since \\(j_A(a_1) = a_1\\) and \\(j_A(a_2) = a_2\\), if \\(j_A(a_1) = j_A(a_2)\\), then \\(a_1 = a_2\\).'
    },
    {
        id: 15,
        question: 'Use the <b>Generalized Pigeonhole Principle</b>. If 50 objects (pigeons) are placed into 7 containers (pigeonholes), which statements are true?',
        options: [
            'The principle guarantees that at least one container must contain \\(\\lfloor 50/7 \\rfloor = 7\\) objects.',
            'The smallest integer \\(k\\) such that at least one container must contain \\(k\\) or more objects is 8.',
            'It is impossible for any container to hold 9 objects.',
            'The distribution could be 7 containers, 6 of which have 7 objects and 1 of which has 8 objects.'
        ],
        correct: [1, 3],
        explanation: 'Rationale: The Generalized PHP guarantees that at least one hole contains \\(\\lceil N/M \\rceil\\) objects.<br><b>A:</b> Incorrect. \\(\\lfloor 50/7 \\rfloor = 7\\) is the floor, not the guarantee. The guarantee is the ceiling.<br><b>B:</b> Correct. \\(\\lceil 50/7 \\rceil = \\lceil 7.14... \\rceil = 8\\).<br><b>C:</b> Incorrect. The distribution could be 42 objects into 6 containers (7 each), and the remaining 8 into the 7th container (making 15), which violates the condition but shows 9 is possible.<br><b>D:</b> Correct. \\(6 \\times 7 + 1 \\times 8 = 50\\). This is a valid distribution where the most populated container has 8.'
    }
];
