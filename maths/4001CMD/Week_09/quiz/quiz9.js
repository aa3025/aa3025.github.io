// This file contains the complete question data structure (allQuizData)
// for a Multiple-Select Quiz on Lecture 9: Graph Traversal Algorithms.
const quizTitle = 'Lecture 9 Quiz: Graph Traversal Algorithms, Minimum Spanning trees (MST)';
const allQuizData = [
    {
        id: 1,
        question: 'Which statements correctly differentiate <strong>Breadth-First Search (BFS)</strong> and <strong>Depth-First Search (DFS)</strong>?<sup>1</sup>',
        options: [
            'BFS explores the graph \'wide\' by visiting all adjacent nodes level by level.',
            'DFS explores the graph \'deep\' by following a single path as far as possible before backtracking.',
            'BFS is typically implemented using a Stack.',
            'DFS is typically implemented using a Stack.',
            'Solving a maze is a classic example of BFS.',
            'BFS is typically implemented using a Queue.'
        ],
        correct: [0, 1, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. BFS is described as traveling \'widely,\' casting a \'wide net\' and searching layer by layer. </li><li><b>B:</b> Correct. DFS is described as traveling \'down a single path... as far as you can go\' before backtracking. </li><li><b>C:</b> Incorrect. BFS uses a Queue (First-In, First-Out). </li><li><b>D:</b> Correct. DFS uses a Stack (Last-In, First-Out) to handle its \'deep\' traversal and backtracking. </li><li><b>E:</b> Incorrect. The lecture explicitly states that solving a maze is a depth-first strategy. </li><li><b>F:</b> Correct. BFS uses a Queue (First-In, First-Out) to manage visiting nodes level by level. </li></ul>'
    },
    {
        id: 2,
        question: 'Which of the following statements accurately describe <strong>Dijkstra\'s Algorithm</strong> based on the lecture?<sup>2</sup>',
        options: [
            'It is a greedy algorithm, making the locally optimal choice at each step.',
            'It is guaranteed to find the shortest path even if some edge weights are negative.',
            'Its purpose is to find the shortest path between two nodes in a weighted graph.',
            'It is an example of a depth-first strategy.',
            'It is used to find a Minimal Spanning Tree.',
            'It is a breadth-first search strategy.'
        ],
        correct: [0, 2, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. The lecture identifies Dijkstra\'s as a greedy algorithm. </li><li><b>B:</b> Incorrect. The lecture explicitly states that Dijkstra\'s algorithm does <i>not</i> account for negative weights. </li><li><b>C:</b> Correct. This is the fundamental goal of the algorithm as introduced in the lecture. </li><li><b>D:</b> Incorrect. The lecture states that Dijkstra\'s algorithm is breadth-first. </li><li><b>E:</b> Incorrect. Kruskal\'s and Prim\'s algorithms find MSTs; Dijkstra\'s finds the shortest path.</li><li><b>F:</b> Correct. The lecture identifies it as a breadth-first strategy. </li></ul>'
    },
    {
        id: 3,
        question: 'Which statements correctly compare or contrast <strong>Kruskal\'s Algorithm</strong> and the <strong>Prim-Jarník Algorithm</strong>?<sup>3</sup>',
        options: [
            'Kruskal\'s algorithm builds a \'forest\' of disconnected trees that eventually merge.',
            'Prim\'s algorithm builds a \'single tree\' from the start and grows it.',
            'Kruskal\'s algorithm is generally preferred for dense graphs (many edges).',
            'Prim\'s algorithm must actively check for cycles, while Kruskal\'s naturally avoids them.',
            'Kruskal\'s complexity is \\(O(n \\log n)\\) (based on sorting), while Prim\'s is \\(O(n^2)\\).',
            'Prim\'s algorithm is generally preferred for dense graphs (many edges).'
        ],
        correct: [0, 1, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. The lecture states Kruskal\'s \'builds a forest\'. </li><li><b>B:</b> Correct. The lecture states Prim\'s \'builds a single tree from the start\'. </li><li><b>C:</b> Incorrect. Kruskal\'s is better for <i>sparse</i> graphs (few edges); Prim\'s is better for dense graphs. </li><li><b>D:</b> Incorrect. This is reversed. Prim\'s naturally avoids cycles, while Kruskal\'s *must check* for them. </li><li><b>E:</b> Correct. The lecture gives Kruskal\'s as \\(O(n \\log n)\\) (n=edges) and Prim\'s as \\(O(n^2)\\). </li><li><b>F:</b> Correct. Prim\'s is preferred when the number of vertices is small compared to edges (dense). </li></ul>'
    },
    {
        id: 4,
        question: 'Which of these steps or variables are part of the initialization or iteration of <strong>Dijkstra\'s algorithm</strong>?<sup>4</sup>',
        options: [
            'Initialize \\(L(a) = 0\\) for the start vertex \\(a\\).',
            'Initialize \\(L(u) = \\infty\\) for all other vertices \\(u \\ne a\\).',
            'In each iteration, choose the vertex \\(v\\) from the unexplored set \\(T\\) that <i>maximizes</i> \\(L(v)\\).',
            'Adjacent vertices \\(u\\) are updated using the formula \\(L(u) = \\min\\{L(u), L(v) + d(u,v)\\}\\).',
            'The set \\(T\\) represents all vertices <i>already visited</i>.',
            'In each iteration, choose the vertex \\(v\\) from the unexplored set \\(T\\) that <i>minimizes</i> \\(L(v)\\).'
        ],
        correct: [0, 1, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. The distance from the start vertex to itself is set to 0. </li><li><b>B:</b> Correct. All other distances are unknown and set to infinity. </li><li><b>C:</b> Incorrect. The algorithm is greedy for the *shortest* path, so it <i>minimizes</i> \\(L(v)\\). </li><li><b>D:</b> Correct. This is the core update rule: check if the path via \\(v\\) is shorter than the current known distance to \\(u\\). </li><li><b>E:</b> Incorrect. \\(T\\) is defined as the set of <i>unexplored</i> vertices. </li><li><b>F:</b> Correct. This is the \'greedy\' step of the algorithm. </li></ul>'
    },
    {
        id: 5,
        question: 'What are the key characteristics and limitations of <strong>greedy algorithms</strong> as described in the lecture?<sup>5</sup>',
        options: [
            'They make the \'most optimal choice at each step\' based on immediately available information.',
            'They are guaranteed to find the globally optimal solution for all problems.',
            'They are often \'easy to write, and easy to execute\' with \'no forward-thinking decisions\'.',
            'They always find the largest sum path in a tree.',
            'Kruskal\'s, Prim\'s, and Dijkstra\'s algorithms are all examples of greedy algorithms.',
            'They require complex forward-thinking to make the best decision.'
        ],
        correct: [0, 2, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This is the definition of a greedy algorithm. </li><li><b>B:</b> Incorrect. The lecture gives a counterexample (largest sum path in a tree) showing the local best does not always lead to the global best. </li><li><b>C:</b> Correct. The lecture notes they are \'easy to write, and easy to execute\' with \'no forward-thinking decisions\'. </li><li><b>D:</b> Incorrect. This is the specific <i>counterexample</i> used in the lecture to show the *limitation* of greedy algorithms. </li><li><b>E:</b> Correct. The lecture identifies Kruskal\'s and Dijkstra\'s as greedy, and Prim\'s is also described as a greedy algorithm. </li><li><b>F:</b> Incorrect. The lecture states they require \'no forward-thinking decisions\'. </li></ul>'
    },
    {
        id: 6,
        question: 'Which steps are essential to <strong>Kruskal\'s Algorithm</strong> for finding an MST?<sup>6</sup>',
        options: [
            'Sort all edges in the graph in increasing order of weight.',
            'Start by selecting an arbitrary vertex.',
            'Add edges to the tree iteratively from the sorted list.',
            'Skip any edge that, if added, would create a cycle.',
            'Always add the lightest edge <i>connected to the tree</i> you\'ve built so far.',
            'Stop when \\(n-1\\) edges have been added (for \\(n\\) nodes).'
        ],
        correct: [0, 2, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This is the first and most critical step of the algorithm. </li><li><b>B:</b> Incorrect. This is the starting step for Prim\'s Algorithm. </li><li><b>C:</b> Correct. The algorithm iterates through the sorted list of edges. </li><li><b>D:</b> Correct. This is the core rule for deciding whether to add an edge from the sorted list. </li><li><b>E:</b> Incorrect. This describes Prim\'s algorithm. Kruskal\'s considers all edges, even those not yet connected to the main tree.</li><li><b>F:</b> Correct. The algorithm terminates when a spanning tree is formed, which has \\(n-1\\) edges. </li></ul>'
    },
    {
        id: 7,
        question: 'Which steps are essential to the <strong>Prim-Jarník Algorithm</strong> for finding an MST?<sup>7</sup>',
        options: [
            'Select an initial (starting) vertex.',
            'Sort all edges in the graph by weight before starting.',
            'Add the lightest edge that is adjacent to the <i>existing tree</i> vertices.',
            'Ensure the added edge connects to a vertex <i>not</i> already in the tree.',
            'The algorithm builds a \'forest\' of several trees that eventually connect.',
            'The algorithm builds a \'single tree\' from the start and grows it.'
        ],
        correct: [0, 2, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. Unlike Kruskal\'s, Prim\'s algorithm must start at a single vertex. </li><li><b>B:</b> Incorrect. This is the first step of Kruskal\'s Algorithm. </li><li><b>C:</b> Correct. This is the \'greedy\' choice in Prim\'s: find the cheapest edge \'growing\' from the current tree. </li><li><b>D:</b> Correct. The algorithm specifies adding an edge that connects to a vertex <i>not</i> in the tree, which is how it avoids cycles. </li><li><b>E:</b> Incorrect. The lecture states this is a property of Kruskal\'s. </li><li><b>F:</b> Correct. The lecture states Prim\'s \'builds a single tree from the start, and grows it\'. </li></ul>'
    },
    {
        id: 8,
        question: 'According to the lecture, what are some <strong>limitations of Dijkstra\'s algorithm</strong>?<sup>8</sup>',
        options: [
            'It does not account for negative edge weights.',
            'It does not account for weights that vary in time (e.g., traffic).',
            'It does not handle multi-dimensional weights (e.g., both cost and speed).',
            'It is slower than the Bellman-Ford algorithm.',
            'It cannot be used on directed graphs.',
            'The Bellman-Ford algorithm is more versatile and can handle negative weights.'
        ],
        correct: [0, 1, 2, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. The lecture explicitly states this limitation. </li><li><b>B:</b> Correct. The lecture lists this as a limitation. </li><li><b>C:</b> Correct. The lecture mentions this limitation (e.g., \'cost and speed are two different weights\'). </li><li><b>D:</b> Incorrect. The lecture states Bellman-Ford is \'Slower than Dijkstra\'s algorithm\'. </li><li><b>E:</b> Incorrect. The lecture introduces it for a \'possibly weighted, possibly directed\' graph. </li><li><b>F:</b> Correct. The lecture states Bellman-Ford is more \'versatile\' and \'can handle negative weights\'. </li></ul>'
    },
    {
        id: 9,
        question: 'Which <strong>Depth-First Search (DFS) traversal orders</strong> for trees are correctly matched with their strategy?<sup>9</sup>',
        options: [
            '<strong>Preorder (DLR):</strong> Read Data, then visit Left subtree, then Right subtree.',
            '<strong>Inorder (LDR):</strong> Visit Left subtree, then read Data, then visit Right subtree.',
            '<strong>Postorder (LRD):</strong> Visit Left subtree, then visit Right subtree, then read Data.',
            '<strong>Preorder (LDR):</strong> Visit Left subtree, then read Data, then visit Right subtree.',
            '<strong>Inorder (LRD):</strong> Visit Left subtree, then visit Right subtree, then read Data.',
            '<strong>Postorder (DLR):</strong> Read Data, then visit Left subtree, then Right subtree.'
        ],
        correct: [0, 1, 2],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. Preorder (Data, Left, Right) reads the root/data first. </li><li><b>B:</b> Correct. Inorder (Left, Data, Right) reads the root/data <i>in between</i> the subtrees. </li><li><b>C:</b> Correct. Postorder (Left, Right, Data) reads the root/data last. </li><li><b>D:</b> Incorrect. LDR is the definition of Inorder, not Preorder. </li><li><b>E:</b> Incorrect. LRD is the definition of Postorder, not Inorder. </li><li><b>F:</b> Incorrect. DLR is the definition of Preorder, not Postorder. </li></ul>'
    },
    {
        id: 10,
        question: 'Which statements correctly define a <strong>spanning tree</strong> or a <strong>minimal spanning tree (MST)</strong>?<sup>10</sup>',
        options: [
            'A spanning tree is a connected subgraph with the same vertices as the original graph, but contains no cycles.',
            'A spanning tree must include all the <i>edges</i> of the original graph.',
            'For a weighted graph, a minimal spanning tree is a spanning tree with the minimum possible total edge weight.',
            'A minimal spanning tree provides the <i>most robust</i> way to connect data points.',
            'A graph can only have one unique minimal spanning tree.',
            'Choosing different vertex sequences in the \'marking\' algorithm can create different spanning trees.'
        ],
        correct: [0, 2, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This is the definition of a spanning tree provided in the lecture. </li><li><b>B:</b> Incorrect. A spanning tree includes all *vertices*, but only a subset of edges if the original graph has cycles. </li><li><b>C:</b> Correct. This is the question posed and answered by the lecture: how to find the \'minimal weight spanning tree\'. </li><li><b>D:</b> Incorrect. The lecture states it gives the \'most economical\' way, but \'at the expense of robustness\'. </li><li><b>E:</b> Incorrect. While the *weight* of the MST is unique, the tree itself may not be if two edges have the same weight (as seen in the Prim\'s example, where (2,4) or (3,4) could be chosen).</li><li><b>F:</b> Correct. The lecture explicitly demonstrates this, creating three different spanning trees with different weights. </li></ul>'
    },
    {
        id: 11,
        question: 'How do <strong>Queues</strong> and <strong>Stacks</strong> function as data structures for graph traversal?<sup>11</sup>',
        options: [
            'In a <strong>Queue</strong>, data is read from the *beginning* (First-In, First-Out).',
            'In a <strong>Stack</strong>, data is read from the *end* (Last-In, First-Out).',
            'Breadth-First Search (BFS) is implemented using a <strong>Queue</strong>.',
            'Breadth-First Search (BFS) is implemented using a <strong>Stack</strong>.',
            'Depth-First Search (DFS) is implemented using a <strong>Stack</strong>.',
            'Depth-First Search (DFS) is implemented using a <strong>Queue</strong>.'
        ],
        correct: [0, 1, 2, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This FIFO behavior is what makes Queues suitable for level-by-level (BFS) traversal. </li><li><b>B:</b> Correct. This LIFO behavior is what makes Stacks suitable for \'deep\' (DFS) traversal. </li><li><b>C:</b> Correct. The lecture demonstrates BFS using a queue. </li><li><b>D:</b> Incorrect. BFS uses a Queue. DFS uses a Stack.</li><li><b>E:</b> Correct. The lecture demonstrates DFS using a stack. </li><li><b>F:</b> Incorrect. DFS uses a Stack. BFS uses a Queue.</li></ul>'
    },
    {
        id: 12,
        question: 'Which definitions related to <strong>rooted trees</strong> from the lecture are correct?<sup>12</sup>',
        options: [
            'A <strong>root</strong> is a node without parents.',
            'A <strong>leaf</strong> is a node without children.',
            'A <strong>parent</strong> node is a neighbor one level *down*.',
            'A <strong>binary tree</strong> is a tree where every parent has at most two children.',
            'The <strong>height</strong> of a tree is the depth of the *root* node.',
            'The <strong>height</strong> of a tree is the depth of the deepest node.'
        ],
        correct: [0, 1, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This is the definition provided on the terminology slide. </li><li><b>B:</b> Correct. This is the definition provided on the terminology slide. </li><li><b>C:</b> Incorrect. A parent is \'one level up\'; a child is \'one level down\'. </li><li><b>D:</b> Correct. This is the definition provided on the terminology slide. </li><li><b>E:</b> Incorrect. The height is the \'depth of the deepest node\'. The root has a depth of 0. </li><li><b>F:</b> Correct. This is the definition of height. </li></ul>'
    },
    {
        id: 13,
        question: 'Which steps correctly describe the <strong>Breadth-First Search (BFS)</strong> algorithm?<sup>13</sup>',
        options: [
            'Initialize by adding the root node to the queue.',
            'Visit the vertex at the <i>beginning</i> of the queue (FIFO).',
            'Add all <i>unvisited</i> adjacent vertices (or children) to the <i>end</i> of the queue.',
            'Visit the vertex at the <i>top</i> of the stack (LIFO).',
            'Add only <i>one</i> unvisited adjacent vertex to the queue.',
            'The algorithm searches \'deep\' before \'wide\'.'
        ],
        correct: [0, 1, 2],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. The algorithm starts with the root node as the only item in the queue. </li><li><b>B:</b> Correct. BFS uses a FIFO (First-In, First-Out) queue, so the vertex at the beginning is visited. </li><li><b>C:</b> Correct. Adding children/neighbors to the end of the queue ensures they are visited *after* all other nodes at the current level. </li><li><b>D:</b> Incorrect. This describes a Stack (LIFO), which is used for DFS. </li><li><b>E:</b> Incorrect. BFS adds *all* unvisited adjacent vertices to the queue. </li><li><b>F:</b> Incorrect. BFS searches \'wide\' before \'deep\', exploring level by level. </li></ul>'
    },
    {
        id: 14,
        question: 'Which steps correctly describe the stack-based <strong>Depth-First Search (DFS)</strong> algorithm?<sup>14</sup>',
        options: [
            'Initialize by adding the root vertex to the stack.',
            'Visit the vertex at the <i>top</i> of the stack (LIFO).',
            'Add <i>an</i> adjacent unvisited vertex to the <i>top</i> of the stack and repeat.',
            'If a vertex has no unvisited neighbors, remove it from the stack to backtrack.',
            'Add <i>all</i> adjacent unvisited vertices to the stack before proceeding.',
            'It is implemented using a Queue (FIFO).'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. The traversal starts at the root, which is placed on the stack. </li><li><b>B:</b> Correct. DFS uses a LIFO (Last-In, First-Out) stack, so the vertex at the top is visited. </li><li><b>C:</b> Correct. This is the \'deep\' part of the search: immediately moving to the next unvisited neighbor. </li><li><b>D:</b> Correct. This \'popping\' action is the backtracking step, returning to a previous node to explore other paths. </li><li><b>E:</b> Incorrect. This describes BFS\'s \'wide\' strategy. DFS only adds one neighbor to go deeper. </li><li><b>F:</b> Incorrect. DFS is implemented using a Stack. </li></ul>'
    },
    {
        id: 15,
        question: 'What are some <strong>applications of minimum spanning trees</strong> mentioned in the lecture?<sup>15</sup>',
        options: [
            'Designing efficient electrical coverage (as done in Moravia).',
            'As a subroutine for approximating the solution to the Traveling Salesman Problem (TSP).',
            'Designing efficient computer networks for information broadcasting.',
            'Examining major correlations in financial markets (stocks).',
            'Finding the shortest path between two specific nodes in a graph.',
            'Solving the Traveling Salesman Problem (TSP) exactly and in polynomial time.'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This was its original application mentioned in the lecture. </li><li><b>B:</b> Correct. It is used in the Christofides algorithm to *approximate* the TSP. </li><li><b>C:</b> Correct. This is listed as an application. </li><li><b>D:</b> Correct. This is listed as an application. </li><li><b>E:</b> Incorrect. This is the goal of Dijkstra\'s algorithm. </li><li><b>F:</b> Incorrect. The lecture states the TSP is \'EXTREMELY hard to solve\', implying no known efficient (polynomial time) solution exists. </li></ul>'
    },
    {
        id: 16,
        question: 'According to the lecture, what is the <strong>speed (complexity) of Dijkstra\'s algorithm</strong>?<sup>16</sup>',
        options: [
            'Visiting each vertex is \\(O(\\#V)\\) and working through edges is \\(O(\\#E)\\).',
            'The overall complexity using heaps is \\(O((\\#E + \\#V) \\log(\\#V))\\).',
            'The complexity simplifies to \\(O(\\#E \\log(\\#V))\\) because \\(O(\\#E \\log(\\#V))\\) dominates \\(O(\\#V \\log(\\#V))\\).',
            'The complexity is \\(O(n^2)\\).',
            'The complexity is \\(O(n^4)\\).',
            'The complexity is \\(O(n)\\).'
        ],
        correct: [0, 1, 2],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. The lecture states this is the base speed, not accounting for updates. </li><li><b>B:</b> Correct. This is the full complexity given, including heap updates. </li><li><b>C:</b> Correct. The lecture explicitly makes this simplification. </li><li><b>D:</b> Incorrect. \\(O(n^2)\\) is the complexity given for Prim\'s algorithm. </li><li><b>E:</b> Incorrect. \\(O(n^4)\\) was the slow connectivity algorithm from the recap. </li><li><b>F:</b> Incorrect. \\(O(n)\\) was the fast (marking) connectivity algorithm from the recap. </li></ul>'
    },
    {
        id: 17,
        question: 'Which of these search strategies are correctly identified in the lecture?<sup>17</sup>',
        options: [
            '<strong>Breadth-first:</strong> Explore adjacent nodes \'level by level\', casting a \'wide net\'.',
            '<strong>Depth-first:</strong> Travel \'down a single path\' as far as possible, then \'backtrack\'.',
            'Dijkstra\'s algorithm is an example of a <strong>breadth-first</strong> strategy.',
            'Solving a maze is an example of a <strong>depth-first</strong> strategy.',
            'Dijkstra\'s algorithm is an example of a <strong>depth-first</strong> strategy.',
            'DFS is described as \'Dig wide, not deep\'.'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This is the definition given for breadth-first. </li><li><b>B:</b> Correct. This is the definition given for depth-first. </li><li><b>C:</b> Correct. The lecture explicitly states this. </li><li><b>D:</b> Correct. The lecture explicitly states this. </li><li><b>E:</b> Incorrect. The lecture states it is breadth-first. </li><li><b>F:</b> Incorrect. The lecture summary for DFS says \'Dig deep, not wide\'. </li></ul>'
    },
    {
        id: 18,
        question: 'According to the <strong>Recap</strong> slide (Page 3), which statements about graph algorithms from the previous lecture are correct?<sup>18</sup>',
        options: [
            '\\(A^k\\) gives the number of paths of length \\(k\\) between different vertices.',
            'A graph is connected if \\(A + A^2 + \\dots + A^{n-1}\\) has no zero entries.',
            'The connectivity algorithm using matrix powers is \\(O(n^4)\\) and \'Very slow\'.',
            'The \'marking\' connectivity algorithm is \\(O(n)\\) and \'Much faster\'.',
            'The number of triangles is \\(\\frac{1}{6}tr(A^2)\\).',
            'The global clustering coefficient is \\(C=\\frac{tr(A^2)}{\\sum_{i \\ne j}(A^3)_{ij}}\\).'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This is the first point in the recap. </li><li><b>B:</b> Correct. This is the second point in the recap. </li><li><b>C:</b> Correct. This is the third point. </li><li><b>D:</b> Correct. This is the fifth point. </li><li><b>E:</b> Incorrect. The formula is \\(\\frac{1}{6}tr(A^3)\\), not \\(A^2\\). </li><li><b>F:</b> Incorrect. The formula has \\(A^3\\) in the numerator and \\(A^2\\) in the denominator, not the other way around. </li></ul>'
    },
    {
        id: 19,
        question: 'The lecture shows that the $O(n)$ \'marking\' connectivity algorithm can be extended. What does this extension demonstrate?<sup>19</sup>',
        options: [
            'By tracking the adjacencies (\'red edges\') used, the algorithm creates a subgraph.',
            'The resulting subgraph is a tree because the process of adding edges to new nodes will not create a cycle.',
            'The resulting subgraph is a spanning tree because it hits every node (if the graph is connected).',
            'This process always generates the <i>minimal</i> spanning tree.',
            'If the graph is not connected, this process creates a spanning tree for the component of the initial vertex.',
            'This process only works for unweighted graphs.'
        ],
        correct: [0, 1, 2, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. The lecture demonstrates this by highlighting edges in red. </li><li><b>B:</b> Correct. This is stated as a property of the process. </li><li><b>C:</b> Correct. It is a tree and it spans all nodes, making it a spanning tree. </li><li><b>D:</b> Incorrect. The lecture shows this process generates three <i>different</i> spanning trees with different weights, none of which were the MST. </li><li><b>E:</b> Correct. This is an inherent property of the algorithm; it finds the connected component of the start node. </li><li><b>F:</b> Incorrect. The algorithm as described for connectivity is unweighted, but the *concept* of finding a spanning tree is what leads to MST algorithms for weighted graphs. The statement "only works" is too strong, though the simple version shown is unweighted.</li></ul>'
    },
    {
        id: 20,
        question: 'Which statements correctly describe a <strong>Topological Sort</strong>?<sup>20</sup>',
        options: [
            'It produces a linear ordering of vertices in a graph.',
            'It is primarily used on graphs with cycles.',
            'It is only used for Directed Acyclic Graphs (DAGs).',
            'A topological sort can be implemented using a depth-first search (DFS).',
            'The ordering represents the shortest path between all nodes.',
            'It is an algorithm for finding a Minimum Spanning Tree.'
        ],
        correct: [0, 2, 3],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. A topological sort provides a linear ordering where for every directed edge from vertex <i>u</i> to <i>v</i>, <i>u</i> comes before <i>v</i>.</li><li><b>B:</b> Incorrect. A topological sort is not possible on a graph with a cycle.</li><li><b>C:</b> Correct. The algorithm is defined for Directed Acyclic Graphs (DAGs).</li><li><b>D:</b> Correct. One common implementation of topological sort is based on DFS (specifically, ordering nodes by their decreasing finish times).</li><li><b>E:</b> Incorrect. This describes algorithms like Floyd-Warshall, not a topological sort.</li><li><b>F:</b> Incorrect. This describes Kruskal\'s or Prim\'s algorithm.</li></ul>'
    }
];