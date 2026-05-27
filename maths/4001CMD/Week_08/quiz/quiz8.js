// This file contains the complete question data structure (allQuizData)
// for a Multiple-Select Quiz on Lecture 8: Algorithms and Graph Theory.
const quizTitle = "Lecture 8 Quiz: Algorithms and Graph Theory";
const allQuizData = [
    {
        id: 1,
        question: 'Which statements correctly characterize what makes something an <strong>algorithm</strong>?<sup>1</sup>',
        options: [
            'It has well-defined input and output',
            'The steps are precisely and unambiguously stated',
            'It is guaranteed to eventually terminate',
            'It must be the fastest possible solution to the problem',
            'It allows for creative interpretation at certain steps'
        ],
        correct: [0, 1, 2],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. Algorithms must have clear inputs and outputs.</li><li><b>B:</b> Correct. Steps must be unambiguous for computer execution.</li><li><b>C:</b> Correct. Algorithms cannot run indefinitely.</li><li><b>D:</b> Incorrect. Algorithms must be correct but not necessarily optimal.</li><li><b>E:</b> Incorrect. Algorithms do not allow for creative interpretation; steps must be deterministic.</li></ul>'
    },
    {
        id: 2,
        question: 'Which statements about <strong>asymptotic complexity (Big O notation)</strong> are correct?<sup>2</sup>',
        options: [
            '\\(f(n) = O(g(n))\\) means \\(f(n) \\leq K \\cdot g(n)\\) for all \\(n \\geq N\\) and some \\(K > 0\\)',
            '\\(O(n^2)\\) is considered exponential time',
            'When analyzing sums, only the fastest-growing term matters asymptotically',
            '\\(O(2^n)\\) grows faster than \\(O(n!)\\) for large \\(n\\)',
            'Multiplicative constants are ignored in Big O notation'
        ],
        correct: [0, 2, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This is the formal definition of Big O notation.</li><li><b>B:</b> Incorrect. \\(O(n^2)\\) is polynomial time, not exponential.</li><li><b>C:</b> Correct. In sums like \\(f(n) = 10n^2 + n^3 + 4\\), only \\(O(n^3)\\) matters.</li><li><b>D:</b> Incorrect. Actually \\(O(n!)\\) grows faster than \\(O(2^n)\\) for large \\(n\\).</li><li><b>E:</b> Correct. Constants like \\(10n^2 = O(n^2)\\) are ignored.</li></ul>'
    },
    {
        id: 3,
        question: 'Which statements correctly describe <strong>graph theory concepts</strong>?<sup>3</sup>',
        options: [
            'A tree is a connected graph without cycles',
            'A graph is Eulerian if and only if all vertices have even degree',
            'The complete graph \\(K_n\\) has \\(n(n-1)\\) edges',
            'A bipartite graph can be colored with 2 colors',
            'The handshake lemma states \\(\\sum \\deg(v) = |E|\\)'
        ],
        correct: [0, 3],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This is the definition of a tree.</li><li><b>B:</b> Incorrect. A graph is Eulerian if connected AND all vertices have even degree.</li><li><b>C:</b> Incorrect. \\(K_n\\) has \\(\\frac{n(n-1)}{2}\\) edges, not \\(n(n-1)\\).</li><li><b>D:</b> Correct. Bipartite graphs are 2-colorable by definition.</li><li><b>E:</b> Incorrect. Handshake lemma states \\(\\sum \\deg(v) = 2|E|\\).</li></ul>'
    },
    {
        id: 4,
        question: 'Which statements about <strong>adjacency matrices</strong> are true?<sup>4</sup>',
        options: [
            'The \\((i,j)\\)-entry of \\(A^n\\) gives the number of paths of length \\(n\\) from \\(i\\) to \\(j\\)',
            'For undirected graphs, the adjacency matrix is always asymmetric',
            'The sum \\(A + A^2 + \\cdots + A^{n-1}\\) can determine if a graph is connected',
            'The trace of \\(A^3\\) divided by 3 gives the number of triangles in the graph',
            'The connectivity algorithm using matrix powers is \\(O(n^2)\\)'
        ],
        correct: [0, 2],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This is a fundamental property of adjacency matrices.</li><li><b>B:</b> Incorrect. Undirected graphs have symmetric adjacency matrices.</li><li><b>C:</b> Correct. If this sum has no zero entries, the graph is connected.</li><li><b>D:</b> Incorrect. The trace of \\(A^3\\) divided by 6 gives the number of triangles.</li><li><b>E:</b> Incorrect. This algorithm is \\(O(n^4)\\), not \\(O(n^2)\\).</li></ul>'
    },
    {
        id: 5,
        question: 'Which statements about the <strong>connectivity algorithm</strong> (using matrix marking) are correct?<sup>5</sup>',
        options: [
            'It is less efficient than using matrix powers',
            'It works by marking rows and crossing out columns iteratively',
            'If all entries become crossed out, the graph is disconnected',
            'It only works for undirected graphs',
            'The algorithm terminates when no uncrossed nonzero entries remain in marked rows'
        ],
        correct: [1, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. It is MORE efficient (\\(O(n)\\) vs \\(O(n^4)\\)).</li><li><b>B:</b> Correct. This describes the iterative process.</li><li><b>C:</b> Incorrect. All crossed out means the graph IS connected.</li><li><b>D:</b> Incorrect. The algorithm works for both directed and undirected graphs.</li><li><b>E:</b> Correct. This indicates disconnected components remain.</li></ul>'
    },
    {
        id: 6,
        question: 'Which statements about <strong>graph connectivity and robustness</strong> are true?<sup>6</sup>',
        options: [
            'A tree is 2-edge connected',
            'The size of the smallest cutset measures vertex connectivity',
            'A graph is \\(n\\)-edge connected if its smallest cutset has \\(n\\) edges',
            'Complete graphs are minimally robust',
            'Removing any single edge from a tree disconnects it'
        ],
        correct: [2, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Trees are 1-edge connected, not 2-edge connected.</li><li><b>B:</b> Incorrect. Cutset size measures EDGE connectivity, not vertex connectivity.</li><li><b>C:</b> Correct. This is the definition of \\(n\\)-edge connectivity.</li><li><b>D:</b> Incorrect. Complete graphs are HIGHLY robust.</li><li><b>E:</b> Correct. Trees are minimally connected by definition.</li></ul>'
    },
    {
        id: 7,
        question: 'Which statements about <strong>clustering coefficients</strong> are correct?<sup>7</sup>',
        options: [
            'Global clustering coefficient \\(C = \\frac{\\text{tr}(A^3)}{\\sum_{i \\neq j} (A^2)_{ij}}\\)',
            'Local clustering measures the degree of each vertex',
            'The average local clustering coefficient is \\(\\frac{1}{n} \\sum C_i\\)',
            '\\(C_i = 1\\) if vertex \\(i\\) has degree 0',
            'Low clustering indicates tightly interconnected communities'
        ],
        correct: [0, 2],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This is the formula for global clustering.</li><li><b>B:</b> Incorrect. Local clustering measures "friends of friends" connections, not just degree.</li><li><b>C:</b> Correct. This defines the average local clustering.</li><li><b>D:</b> Incorrect. \\(C_i = 0\\) if vertex \\(i\\) has degree 0 or 1.</li><li><b>E:</b> Incorrect. HIGH clustering indicates tight interconnection.</li></ul>'
    },
    {
        id: 8,
        question: 'Which statements about <strong>graph types and properties</strong> are true?<sup>8</sup>',
        options: [
            'A planar graph cannot contain \\(K_5\\) or \\(K_{3,3}\\) as subgraphs',
            'The Four Color Theorem states 3 colors suffice for any planar map',
            'A Hamiltonian graph has a cycle visiting every edge once',
            'The traveling salesman problem seeks the shortest path visiting all vertices',
            'Determining if a graph is Eulerian can be done in polynomial time'
        ],
        correct: [0, 3, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. Kuratowski\'s theorem characterizes planar graphs.</li><li><b>B:</b> Incorrect. Four Color Theorem states 4 colors are needed/sufficient.</li><li><b>C:</b> Incorrect. Hamiltonian visits every VERTEX once; Eulerian visits every EDGE once.</li><li><b>D:</b> Correct. TSP is a famous optimization problem.</li><li><b>E:</b> Correct. Check if connected and all vertices have even degree.</li></ul>'
    },
    {
        id: 9,
        question: 'Which <strong>algorithm analysis examples</strong> are correctly matched with their complexities?<sup>9</sup>',
        options: [
            '\\((6n+1)(4+\\log n) = O(n)\\)',
            '\\(\\frac{(n+1)(n+3)}{n+2} = O(n^2)\\)',
            'Three nested loops from 1 to \\(n\\): \\(O(n^3)\\)',
            '\\(\\text{while}(i \\leq n) \\{i = i^2\\}\\): \\(O(\\log n)\\)',
            'Sum of first \\(N\\) integers algorithm: \\(O(1)\\)'
        ],
        correct: [2],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. \\((6n+1)(4+\\log n) = O(n \\log n)\\), not \\(O(n)\\).</li><li><b>B:</b> Incorrect. \\(\\frac{(n+1)(n+3)}{n+2} = O(n)\\), not \\(O(n^2)\\).</li><li><b>C:</b> Correct. Three nested loops give cubic complexity.</li><li><b>D:</b> Incorrect. \\(\\text{while}(i \\leq n) \\{i = i^2\\}\\) is \\(O(\\log \\log n)\\), not \\(O(\\log n)\\).</li><li><b>E:</b> Incorrect. Sum of first \\(N\\) integers algorithm is \\(O(N)\\), not \\(O(1)\\).</li></ul>'
    },
    {
        id: 10,
        question: 'Which statements about <strong>matrix operations in graph theory</strong> are correct?<sup>10</sup>',
        options: [
            'Matrix multiplication: \\((AB)_{ij} = \\sum_k A_{ik}B_{kj}\\)',
            'For symmetric matrices, \\(A^T \\neq A\\)',
            'The transpose operation swaps rows and columns',
            '\\(A^2\\) reveals paths of length 1 between vertices',
            'The efficient connectivity algorithm is \\(O(n^4)\\)'
        ],
        correct: [0, 2],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This is the definition of matrix multiplication.</li><li><b>B:</b> Incorrect. For symmetric matrices, \\(A^T = A\\) by definition.</li><li><b>C:</b> Correct. Transpose exchanges rows and columns.</li><li><b>D:</b> Incorrect. \\(A^2\\) reveals paths of length 2; \\(A\\) reveals paths of length 1.</li><li><b>E:</b> Incorrect. The efficient connectivity algorithm is \\(O(n)\\), not \\(O(n^4)\\).</li></ul>'
    },
    {
        id: 11,
        question: 'Which statements about <strong>time complexity hierarchies</strong> are correct?<sup>11</sup>',
        options: [
            '\\(O(1) < O(\\log n) < O(n) < O(n \\log n)\\)',
            '\\(O(n^3) < O(2^n) < O(n!)\\)',
            '\\(O(n \\log n)\\) grows faster than \\(O(n^2)\\)',
            '\\(O(\\log \\log n)\\) grows faster than \\(O(\\log n)\\)',
            '\\(O(2^n)\\) and \\(O(3^n)\\) have the same asymptotic complexity'
        ],
        correct: [0, 1],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This is the standard complexity hierarchy.</li><li><b>B:</b> Correct. Polynomial < Exponential < Factorial.</li><li><b>C:</b> Incorrect. \\(O(n^2)\\) grows faster than \\(O(n \\log n)\\).</li><li><b>D:</b> Incorrect. \\(O(\\log n)\\) grows faster than \\(O(\\log \\log n)\\).</li><li><b>E:</b> Incorrect. \\(O(2^n)\\) and \\(O(3^n)\\) are different exponential complexities.</li></ul>'
    },
    {
        id: 12,
        question: 'Which statements about <strong>graph algorithms and their complexities</strong> are true?<sup>12</sup>',
        options: [
            'The matrix marking connectivity algorithm is \\(O(n)\\)',
            'Finding all triangles using \\(A^3\\) is \\(O(n^3)\\)',
            'Checking if a graph is Eulerian is \\(O(n^2)\\)',
            'The traveling salesman problem has a known polynomial-time solution',
            'Determining if a graph is bipartite can be done in linear time'
        ],
        correct: [0, 1, 2, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. Matrix marking algorithm is linear in vertices.</li><li><b>B:</b> Correct. Matrix multiplication is \\(O(n^3)\\) for naive implementation.</li><li><b>C:</b> Correct. Check degrees and connectivity in \\(O(n^2)\\).</li><li><b>D:</b> Incorrect. TSP is NP-hard, no known polynomial solution.</li><li><b>E:</b> Correct. Bipartiteness can be checked with BFS/DFS in \\(O(V+E)\\).</li></ul>'
    },
    {
        id: 13,
        question: 'Which statements about <strong>graph representations and properties</strong> are correct?<sup>13</sup>',
        options: [
            'Adjacency matrices use \\(O(V^2)\\) space',
            'Adjacency lists use \\(O(V+E)\\) space',
            'For sparse graphs, adjacency lists are more space-efficient',
            'The degree sequence uniquely determines a graph',
            'Isomorphic graphs have identical adjacency matrices'
        ],
        correct: [0, 1, 2],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. Adjacency matrices require \\(V \\times V\\) entries.</li><li><b>B:</b> Correct. Adjacency lists store vertices and edges separately.</li><li><b>C:</b> Correct. Lists avoid storing many zeros for sparse graphs.</li><li><b>D:</b> Incorrect. Different graphs can have the same degree sequence.</li><li><b>E:</b> Incorrect. Isomorphic graphs may have different but permutation-similar matrices.</li></ul>'
    },
    {
        id: 14,
        question: 'Which statements about <strong>special graph types</strong> are true?<sup>14</sup>',
        options: [
            'A wheel graph \\(W_n\\) has \\(n+1\\) vertices',
            'A cycle graph \\(C_n\\) is 2-regular',
            'A complete bipartite graph \\(K_{m,n}\\) has \\(m \\times n\\) edges',
            'All trees are bipartite graphs',
            'Every connected graph has a spanning tree'
        ],
        correct: [0, 1, 2, 3, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. \\(W_n\\) adds one central vertex to \\(C_n\\).</li><li><b>B:</b> Correct. Cycle graphs have degree 2 for all vertices.</li><li><b>C:</b> Correct. Each of \\(m\\) vertices connects to all \\(n\\) vertices.</li><li><b>D:</b> Correct. Trees have no odd cycles, making them bipartite.</li><li><b>E:</b> Correct. Spanning trees exist for all connected graphs.</li></ul>'
    },
    {
        id: 15,
        question: 'Which statements about <strong>practical algorithm considerations</strong> are correct?<sup>15</sup>',
        options: [
            'An \\(O(n^4)\\) algorithm becomes impractical for large \\(n\\)',
            'Asymptotic analysis always determines real-world performance',
            'An \\(O(n \\log n)\\) sorting algorithm exists (e.g., merge sort)',
            'Constants matter for small input sizes despite Big O notation',
            'Exponential time algorithms are only theoretical and never used'
        ],
        correct: [0, 2, 3],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. \\(O(n^4)\\) grows too fast for large datasets.</li><li><b>B:</b> Incorrect. Constants and implementation details affect real performance.</li><li><b>C:</b> Correct. Merge sort and others achieve \\(O(n \\log n)\\).</li><li><b>D:</b> Correct. For small \\(n\\), constants can make "worse" algorithms faster.</li><li><b>E:</b> Incorrect. Exponential algorithms are used for small problems or when no better alternative exists.</li></ul>'
    }
];