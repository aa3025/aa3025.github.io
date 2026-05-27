/**
 * Data structure for Week 8 Lecture Notes - Algorithms and Graph Theory
 * Content based on the uploaded PDF slides for Week 8
 */
const lectureData = {
    courseName: "4001CMD - Mathematics for Computing Professionals",
    lectureTitle: "Week 8: Algorithms and Graph Theory",
    
    sections: [
        {
            title: "1. Algorithms: Definition and Characteristics",
            id: "algorithms-definition",
            audioFile: "audio/week8_slide_01.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>What is an Algorithm?</h3>\nAn <b>algorithm</b> is a set of instructions needed to solve a problem. Other terms include <i>procedure</i>, <i>method</i>, or <i>technique</i>."
                },
                {
                    type: "paragraph",
                    text: "Named for Persian mathematician and astronomer <b>Muhammad ibn Musa al-Khwarizmi</b>, most well-known for <i>al-Kitāb al-Mukhtasar fi Hisāb al-Jabr wal-Muqābalah</i> (whence we get the word <i>algebra</i>!)."
                },
                {
                    type: "math-example",
                    text: "<h3>Classic Algorithm Examples</h3>\n<ul>\n<li><b>Quadratic equation:</b> If \\( ax^2 + bx + c = 0 \\), then \\[ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\]</li>\n<li><b>Euclidean algorithm:</b> Given \\( a, b \\in \\mathbb{N} \\), finds \\( \\gcd(a, b) = d \\) and numbers \\( x, y \\in \\mathbb{Z} \\) for which \\( ax + by = d \\)</li>\n<li><b>Arithmetic operations:</b> Sums, long multiplication, long division</li>\n</ul>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><center><img src='handshake-problem.png' alt='Handshake problem graph' style='width: 50%;'><p class='image-caption'>Graph representation of the handshake problem</p></center></div>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Algorithm Characteristics</h3>\nAn algorithm must have:\n<ul>\n<li><b>Well-defined input and output</b></li>\n<li><b>Precisely and unambiguously stated steps</b></li>\n<li><b>Self-contained</b> intermediate results</li>\n<li><b>Guaranteed termination</b></li>\n<li><b>Correctness</b> in solving the problem</li>\n<li><b>Applicability</b> to variety of inputs</li>\n</ul>"
                }
            ]
        },
        {
    title: "2. Algorithmic Time Complexity",
    id: "algorithmic-time-complexity",
    audioFile: "audio/week8_slide_02.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>Analyzing Algorithm Performance</h3>\nWe analyze algorithms in terms of:\n<ul>\n<li><b>Best-case</b> time complexity</li>\n<li><b>Worst-case</b> time complexity</li>\n<li><b>Average-case</b> time complexity</li>\n</ul>"
        },
        {
            type: "math-example",
            text: "<h3>Summation Algorithm Example</h3>\n<pre><code>let sumto[N]: {\n    s = 0;\n    i = 1;\n    while[i <= N]: {\n        s = s + i;\n        i = i + 1;\n    }\n    return s;\n}</code></pre>\nThis algorithm takes \\( 2N + 3 \\) steps: three outside the loop, and two inside the loop running \\( N \\) times."
        },
        {
            type: "math-example",
            text: "<h3>Sorting Algorithm Analysis</h3>\nFor a list of size \\( n \\):\n<ul>\n<li><b>Best case:</b> \\( n \\) steps</li>\n<li><b>Worst case:</b> \\( 1 + 2 + \\cdots + (n-1) = \\frac{n(n-1)}{2} \\) steps</li>\n</ul>\n </br> The sorting process step-by-step:\n<pre>\n  {12,5,7,2,5,3,15,9,1}\n↦ {5,12,7,2,5,3,15,9,1}\n↦ {5,7,12,2,5,3,15,9,1}\n↦ {5,7,2,12,5,3,15,9,1}\n↦ {5,2,7,12,5,3,15,9,1}\n↦ {2,5,7,12,5,3,15,9,1}\n</pre>"
        }
    ]
},
        {
            title: "3. Asymptotic Behavior and Big O Notation",
            id: "asymptotic-big-o",
            audioFile: "audio/week8_slide_03.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Big O Notation Definition</h3>\nSuppose \\( f: \\mathbb{N} \\to \\mathbb{N} \\) and \\( g: \\mathbb{N} \\to \\mathbb{N} \\). If there exists \\( K > 0 \\) and \\( N \\in \\mathbb{N} \\) such that:\n\\[ f(n) \\leq Kg(n) \\quad \\forall n \\geq N \\]\nThen we say \\( f(n) = O(g(n)) \\) (\"f is big-O of g\")."
                },
                {
                    type: "math-example",
                    text: "<h3>Example: Sorting Algorithm</h3>\nOur sorting algorithm takes at worst:\n\\[ f(n) = \\frac{n(n-1)}{2} = 0.5n^2 - 0.5n \\]\nThis function is \\( O(n^2) \\) since:\n\\[ \\frac{n(n-1)}{2} \\leq n(n-1) = n^2 - n < n^2 \\]"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='factorial-complexity.png' alt='Factorial complexity comparison' style='width: 65%;'><p class='image-caption'>Comparison showing factorial complexity dominates other functions</p></div>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Hierarchy of Asymptotic Complexities</h3>\n<ul>\n<li>\\( O(1) \\): Constant time - very fast</li>\n<li>\\( O(\\log n) \\): Logarithmic time - pretty fast</li>\n<li>\\( O(n) \\): Linear time - medium-fast</li>\n<li>\\( O(n^k) \\): Polynomial time - slow</li>\n<li>\\( O(k^n) \\): Exponential time - very slow</li>\n<li>\\( O(n!) \\): Factorial time - incredibly slow</li>\n</ul>"
                }
            ]
        },
        {
            title: "4. Practical Runtime Examples",
            id: "practical-runtime-examples",
            audioFile: "audio/week8_slide_04.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Runtime Comparison (assuming 1 step = 10⁻⁶ seconds)</h3>"
                },
                {
                    type: "math-example",
                    text: "<h3>Efficient Algorithms</h3>\n<table border='1' style='width:100%'>\n<tr><th>Time Complexity</th><th>n=50</th><th>n=100</th><th>n=1000</th><th>n=10⁵</th></tr>\n<tr><td>\\( O(1) \\)</td><td>1 μs</td><td>1 μs</td><td>1 μs</td><td>1 μs</td></tr>\n<tr><td>\\( O(\\log n) \\)</td><td>6 μs</td><td>7 μs</td><td>10 μs</td><td>20 μs</td></tr>\n<tr><td>\\( O(n) \\)</td><td>50 μs</td><td>100 μs</td><td>1 ms</td><td>0.1 s</td></tr>\n<tr><td>\\( O(n \\log n) \\)</td><td>300 μs</td><td>700 μs</td><td>10 ms</td><td>2 s</td></tr>\n</table>"
                },
                {
                    type: "math-example",
                    text: "<h3>Inefficient Algorithms</h3>\n<table border='1' style='width:100%'>\n<tr><th>Time Complexity</th><th>n=50</th><th>n=100</th><th>n=1000</th></tr>\n<tr><td>\\( O(n^2) \\)</td><td>3 ms</td><td>10 ms</td><td>1 s</td></tr>\n<tr><td>\\( O(n^3) \\)</td><td>0.13 s</td><td>1 s</td><td>17 min</td></tr>\n<tr><td>\\( O(2^n) \\)</td><td>36 years</td><td>4×10¹⁶ years</td><td>3×10²⁸⁷ years</td></tr>\n</table>"
                }
            ]
        },
        {
            title: "5. Introduction to Graph Theory",
            id: "introduction-graph-theory",
            audioFile: "audio/week8_slide_05.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>What is a Graph?</h3>\nA <b>graph</b> is a set of objects (vertices/nodes) with connections (edges) between them."
                },
                {
                    type: "paragraph",
                    text: "Graphs are incredibly useful in computer science for structuring and organizing data in networks."
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='Konigsberg_bridges.png' alt='Seven Bridges of Königsberg' style='width: 50%;'><p class='image-caption'>The Seven Bridges of Königsberg problem</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='konigsberg-graph.png' alt='Königsberg graph representation' style='width: 60%;'><p class='image-caption'>Graph representation of the Königsberg bridges problem</p></div>"
                },
                {
                    type: "math-example",
                    text: "<h3>Real-world Applications</h3>\n<ul>\n<li><b>Computer networks:</b> Routing data efficiently</li>\n<li><b>Social networks:</b> Modeling relationships</li>\n<li><b>Transportation:</b> Google Maps route planning</li>\n<li><b>Biology:</b> Genomic analysis, neural connections</li>\n<li><b>Epidemiology:</b> Disease spread modeling</li>\n<li><b>Chemistry:</b> Molecular structures</li>\n</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Classical Problem: Seven Bridges of Königsberg</h3>\nLeonhard Euler (1736) proved it's impossible to tour the city crossing every bridge exactly once and return to start. This gave birth to graph theory."
                }
            ]
        },
        {
            title: "6. Types of Graphs",
            id: "types-of-graphs",
            audioFile: "audio/week8_slide_06.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Graph Classification</h3>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='undirected-graph.png' alt='Undirected graph example' style='width: 40%;'><p class='image-caption'>Example of an undirected graph</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='directed-graph.png' alt='Directed graph example' style='width: 40%;'><p class='image-caption'>Example of a directed graph</p></div>"
                },
                {
                    type: "math-example",
                    text: "<h3>Directed vs Undirected Graphs</h3>\n<ul>\n<li><b>Undirected:</b> Edges have no direction (e.g., handshake example)</li>\n<li><b>Directed:</b> Edges have direction (e.g., route planning)</li>\n</ul>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='cycle.png' alt='Cycle graph' style='width: 40%;'><p class='image-caption'>Example of a cycle in a graph</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='trees.png' alt='Tree graphs' style='width: 40%;'><p class='image-caption'>Examples of tree graphs (acyclic)</p></div>"
                },
                {
                    type: "math-example",
                    text: "<h3>Cyclic Graphs and Trees</h3>\n<ul>\n<li><b>Path:</b> Sequence of connected edges</li>\n<li><b>Cycle:</b> Path that starts/ends at same vertex without repeating edges</li>\n<li><b>Tree:</b> Connected graph without cycles (acyclic)</li>\n</ul>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='markov.png' alt='Markov graph' style='width: 40%;'><p class='image-caption'>Weighted Markov graph for epidemiological modeling</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='lan.png' alt='LAN network graph' style='width: 40%;'><p class='image-caption'>Weighted graph representing a local area network</p></div>"
                },
                {
                    type: "math-example",
                    text: "<h3>Weighted Graphs</h3>\nEdges have numerical values (weights):\n<ul>\n<li><b>Markov graphs:</b> Probabilities for state transitions</li>\n<li><b>Network graphs:</b> Data transfer speeds, distances</li>\n</ul>"
                }
            ]
        },
        {
            title: "7. Graph Properties and Terminology",
            id: "graph-properties-terminology",
            audioFile: "audio/week8_slide_07.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Basic Graph Properties</h3>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='disconnected.png' alt='Disconnected graph' style='width: 40%;'><p class='image-caption'>Example of a disconnected graph</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='not-simple.png' alt='Not simple graph' style='width: 27%;'><p class='image-caption'>Graph that is not simple (contains self-loops)</p></div>"
                },
                {
                    type: "math-example",
                    text: "<h3>Connectivity and Simplicity</h3>\n<ul>\n<li><b>Connected graph:</b> Every pair of vertices connected by a path</li>\n<li><b>Simple graph:</b> No vertex connected to itself (no self-loops)</li>\n<li><b>Degree:</b> Number of edges connected to a vertex (self-loops counted twice)</li>\n</ul>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='complete.png' alt='Complete graphs' style='width: 50%;'><p class='image-caption'>Complete graphs K3, K4, K5</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='cycle-graphs.png' alt='Cycle graphs' style='width: 40%;'><p class='image-caption'>Cycle graphs C3, C4, C5</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='wheels.png' alt='Wheel graphs' style='width: 40%;'><p class='image-caption'>Wheel graphs W3, W4, W5</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='bipartites.png' alt='Bipartite graphs' style='width: 50%;'><p class='image-caption'>Bipartite graphs and complete bipartite graphs</p></div>"
                },
                {
                    type: "math-example",
                    text: "<h3>Special Graph Types</h3>\n<ul>\n<li><b>Complete graph \\( K_n \\):</b> All vertices connected to all others</li>\n<li><b>Cycle \\( C_n \\):</b> Vertices connected in a single cycle</li>\n<li><b>Wheel \\( W_n \\):</b> Cycle with central vertex connected to all others</li>\n<li><b>Bipartite graph:</b> Vertices partitioned into two sets, edges only between sets</li>\n</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Handshake Lemma</h3>\nIf \\( G \\) is a graph with edge set \\( E \\) and vertex set \\( V \\), then:\n\\[ \\sum_{v \\in V} \\deg(v) = 2\\#E \\]\n<i>Proof:</i> Each edge contributes twice to the degree count."
                }
            ]
        },
        {
            title: "8. Graph Representations",
            id: "graph-representations",
            audioFile: "audio/week8_slide_08.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Computer Representation of Graphs</h3>\nSince computers can't naturally process pictures, we need structured representations."
                },
                {
                    type: "math-example",
                    text: "<h3>Adjacency Table</h3>\nA list showing which vertices are connected:\n<table border='1'>\n<tr><th>Node</th><th>Adjacent Nodes</th></tr>\n<tr><td>1</td><td>2, 4, 5</td></tr>\n<tr><td>2</td><td>1, 3, 4, 5</td></tr>\n<tr><td>3</td><td>2, 4</td></tr>\n<tr><td>4</td><td>1, 2, 3, 5</td></tr>\n<tr><td>5</td><td>1, 2, 4</td></tr>\n</table>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='adjacency-example.png' alt='Adjacency example graph' style='width: 30%;'><p class='image-caption'>Graph example for adjacency analysis</p></div>"
                },
                {
                    type: "math-example",
                    text: "<h3>Adjacency Matrix</h3>\nA square matrix where entry \\( (i,j) \\) represents connections from vertex \\( i \\) to vertex \\( j \\):\n\\[ A = \\begin{pmatrix}\n0 & 1 & 0 & 1 & 1 \\\\\n1 & 0 & 1 & 1 & 1 \\\\\n0 & 1 & 0 & 1 & 0 \\\\\n1 & 1 & 1 & 0 & 1 \\\\\n1 & 1 & 0 & 1 & 0\n\\end{pmatrix} \\]\nFor undirected graphs, the matrix is symmetric."
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='isomorphic.png' alt='Isomorphic graphs' style='width: 30%;'><p class='image-caption'>Two isomorphic graphs - same structure, different drawings</p></div>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Isomorphic Graphs</h3>\nTwo graphs are <b>isomorphic</b> if they carry the same connection information, even if drawn differently. They have the same adjacency table/matrix up to relabeling."
                }
            ]
        },
        {
    title: "9. Matrix Operations on Graphs",
    id: "matrix-operations-graphs",
    audioFile: "audio/week8_slide_09.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>Powers of Adjacency Matrices</h3>\nIf \\( A \\) is the adjacency matrix of a graph, then:\n<ul>\n<li>\\( A^n \\) gives the number of paths of length \\( n \\) between vertices</li>\n<li>The \\( (i,j) \\)-th entry of \\( A^n \\) is the number of paths of length \\( n \\) from vertex \\( i \\) to vertex \\( j \\)</li>\n</ul>"
        },
        {
            type: "math-example",
            text: "<h3>Example: Paths of Length 2</h3>\nGiven adjacency matrix \\( A \\), compute \\( A^2 \\):\n\\[ A^2 = \\begin{pmatrix}\n3 & 2 & 2 & 2 & 2 \\\\\n2 & 4 & 1 & 3 & 2 \\\\\n2 & 1 & 2 & 1 & 2 \\\\\n2 & 3 & 1 & 4 & 2 \\\\\n2 & 2 & 2 & 2 & 3\n\\end{pmatrix} \\]\nThe \\( (1,1) \\)-entry 3 means there are 3 paths of length 2 from vertex 1 to itself."
        },
        {
            type: "html-content",
            text: `
            <div class="two-column-image-grid">
                <div class="image-column">
                    <div class='image-container'><img src='length2path1.png' alt='Length 2 path example 1' style='width: 60%;'><p class='image-caption'>Path 1: First path of length 2</p></div>
                    <div class='image-container'><img src='length2path2.png' alt='Length 2 path example 2' style='width: 60%;'><p class='image-caption'>Path 2: Second path of length 2</p></div>
                    <div class='image-container'><img src='length2path3.png' alt='Length 2 path example 3' style='width: 60%;'><p class='image-caption'>Path 3: Third path of length 2</p></div>
                </div>
                <div class="image-column">
                    <div class='image-container'><img src='length3path1.png' alt='Length 3 path example 1' style='width: 60%;'><p class='image-caption'>Path 1: First path of length 3</p></div>
                    <div class='image-container'><img src='length3path2.png' alt='Length 3 path example 2' style='width: 60%;'><p class='image-caption'>Path 2: Second path of length 3</p></div>
                    <div class='image-container'><img src='length3path3.png' alt='Length 3 path example 3' style='width: 60%;'><p class='image-caption'>Path 3: Third path of length 3</p></div>
                    <div class='image-container'><img src='length3path4.png' alt='Length 3 path example 4' style='width: 60%;'><p class='image-caption'>Path 4: Fourth path of length 3</p></div>
                </div>
            </div>
            `
        },
        {
            type: "html-content",
            text: "<div class='image-container' style='text-align: center; margin-top: 20px;'><img src='backandforth.png' alt='Back and forth paths' style='width: 60%;'><p class='image-caption'>Paths that double back to the starting vertex</p></div>"
        },
        {
            type: "math-example",
            text: "<h3>Finding Triangles</h3>\nThe number of triangles in a graph is:\n\\[ \\text{# triangles} = \\frac{1}{6} \\operatorname{tr}(A^3) \\]\nwhere \\( \\operatorname{tr}(A^3) \\) is the sum of diagonal entries of \\( A^3 \\)."
        }
    ]
},
        {
    title: "10. Graph Connectivity Algorithms",
    id: "graph-connectivity-algorithms",
    audioFile: "audio/week8_slide_10.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>Checking Graph Connectivity</h3>\nA graph with \\( n \\) vertices and adjacency matrix \\( A \\) is connected if and only if:\n\\[ A + A^2 + A^3 + \\cdots + A^{n-1} \\]\nhas no zero entries."
        },
        {
            type: "paragraph",
            text: "However, this matrix approach is \\( O(n^4) \\) - too slow for large graphs!"
        },
        {
            type: "key-concept",
            text: "<h3>Efficient Connectivity Algorithm</h3>\nA much better \\( O(n) \\) algorithm:\n<ol>\n<li>Select a starting node and mark it</li>\n<li>Find an unmarked node adjacent to a marked node</li>\n<li>Mark this node and repeat step 2</li>\n<li>If all nodes get marked, graph is connected</li>\n<li>If no unmarked nodes adjacent to marked nodes remain, graph is disconnected</li>\n</ol>"
        },
        {
            type: "html-content",
            text: `
            <div class="two-column-image-grid">
                <div class="image-column">
                    <div class='image-container'><img src='reddot0.png' alt='Connectivity algorithm step 0' style='width: 60%;'><p class='image-caption'>Step 0: Starting with first marked node</p></div>
                    <div class='image-container'><img src='reddot1.png' alt='Connectivity algorithm step 1' style='width: 60%;'><p class='image-caption'>Step 1: First expansion of marked nodes</p></div>
                    <div class='image-container'><img src='reddot2.png' alt='Connectivity algorithm step 2' style='width: 60%;'><p class='image-caption'>Step 2: Second expansion of marked nodes</p></div>
                </div>
                <div class="image-column">
                    <div class='image-container'><img src='reddot3.png' alt='Connectivity algorithm step 3' style='width: 60%;'><p class='image-caption'>Step 3: Third expansion of marked nodes</p></div>
                    <div class='image-container'><img src='reddot4.png' alt='Connectivity algorithm step 4' style='width: 60%;'><p class='image-caption'>Step 4: Fourth expansion of marked nodes</p></div>
                    <div class='image-container'><img src='reddot5.png' alt='Connectivity algorithm step 5' style='width: 60%;'><p class='image-caption'>Step 5: All nodes marked - graph is connected</p></div>
                </div>
            </div>
            `
        },
        {
            type: "html-content",
            text: "<div class='image-container' style='text-align: center;'><center><img src='three-graph.png' alt='Three vertex graph example' style='width: 30%;'></center><p class='image-caption'>Simple three-vertex graph for connectivity analysis</p></div>"
        },
        {
            type: "math-example",
            text: "<h3>Runtime Comparison</h3>\nFor a graph with 100,000 vertices:\n<ul>\n<li><b>Matrix method (\\( O(n^4) \\)):</b> ~317 years</li>\n<li><b>Efficient algorithm (\\( O(n) \\)):</b> ~10 microseconds</li>\n</ul>"
        }
    ]
},
        {
    title: "11. Graph Robustness and Cutsets",
    id: "graph-robustness-cutsets",
    audioFile: "audio/week8_slide_11.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>Network Robustness</h3>\nThe \"robustness\" of a graph measures how easy it is to prevent communication between nodes by removing edges."
        },
        {
            type: "html-content",
            text: "<div class='image-container'><img src='treeweb.png' alt='Tree vs web network' style='width: 30%;'><p class='image-caption'>Comparison of tree (fragile) vs web (robust) network structures</p></div>"
        },
        {
            type: "math-example",
            text: "<h3>Trees: Not Robust</h3>\nTrees are efficient but fragile - removing any single edge disconnects the graph."
        },
        {
            type: "key-concept",
            text: "<h3>Cutset Definition</h3>\nA <b>cutset</b> \\( C \\subseteq E \\) is a subset of edges where:\n<ul>\n<li>Removing \\( C \\) disconnects the graph</li>\n<li>Removing any proper subset of \\( C \\) leaves the graph connected</li>\n</ul>"
        },
        {
            type: "html-content",
            text: `
            <div class="two-column-image-grid">
                <div class="image-column">
                    <div class='image-container'><img src='cutset0.png' alt='Original graph for cutset example' style='width: 60%;'><p class='image-caption'>Original graph before cutset removal</p></div>
                    <div class='image-container'><img src='cutset1.png' alt='Cutset example 1' style='width: 60%;'><p class='image-caption'>After removing first candidate cutset</p></div>
                </div>
                <div class="image-column">
                    <div class='image-container'><img src='cutset2.png' alt='Cutset example 2' style='width: 60%;'><p class='image-caption'>After removing smaller cutset</p></div>
                    <div class='image-container'><img src='cutset3.png' alt='Cutset example 3' style='width: 60%;'><p class='image-caption'>With minimal cutset of size 2</p></div>
                </div>
            </div>
            `
        },
        {
            type: "key-concept",
            text: "<h3>Edge Connectivity</h3>\nA graph is <b>\\( n \\)-edge connected</b> if its smallest cutset has \\( n \\) edges.\n<ul>\n<li>Trees are 1-edge connected</li>\n<li>More robust graphs have higher edge connectivity</li>\n</ul>"
        }
    ]
},
        {
            title: "12. Clustering in Graphs",
            id: "clustering-graphs",
            audioFile: "audio/week8_slide_12.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Clustering Coefficients</h3>\nMeasures how well nodes in a network cluster together."
                },
                {
                    type: "math-example",
                    text: "<h3>Global Clustering Coefficient</h3>\nFor a simple, undirected graph with adjacency matrix \\( A \\):\n\\[ C = \\frac{\\operatorname{tr}(A^3)}{\\sum_{i \\neq j} (A^2)_{ij}} \\]\nThis measures the proportion of paths of length 2 that form triangles."
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='triangles.png' alt='Triangles in graph' style='width: 70%;'><p class='image-caption'>Triangles found in the example graph</p></div>"
                },
                {
                    type: "math-example",
                    text: "<h3>Local Clustering Coefficient</h3>\nFor vertex \\( i \\):\n\\[ C_i = \\frac{\\text{number of triangles connected to node } i}{\\text{number of triples centered around node } i} \\]\nA <b>triple</b> is a set of two edges connected at vertex \\( i \\)."
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='three-wheel.png' alt='Three wheel graph' style='width: 20%;'><p class='image-caption'>Three-wheel graph for clustering analysis</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='three-wheel-triangles.png' alt='Triangles in three wheel' style='width: 70%;'><p class='image-caption'>Triangles connected to central vertex</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='three-wheel-triples.png' alt='Triples in three wheel' style='width: 70%;'><p class='image-caption'>Triples centered at the central vertex</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='three-wheel-1.png' alt='Modified wheel 1' style='width: 20%;'><p class='image-caption'>Wheel with one triangle removed</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='three-wheel-2.png' alt='Modified wheel 2' style='width: 20%;'><p class='image-caption'>Wheel with two triangles removed</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='three-wheel-3.png' alt='Modified wheel 3' style='width: 20%;'><p class='image-caption'>Wheel with all triangles removed</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='social-network.png' alt='Social network example' style='width: 30%;'><p class='image-caption'>Example social network for clustering analysis</p></div>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Applications</h3>\n<ul>\n<li><b>Social networks:</b> Finding communities and influencers</li>\n<li><b>Data mining:</b> Identifying clusters and patterns</li>\n<li><b>Spam detection:</b> Recognizing coordinated behavior</li>\n<li><b>Recommendation systems:</b> Suggesting connections</li>\n</ul>"
                }
            ]
        },
        {
            title: "13. Classical Graph Problems",
            id: "classical-graph-problems",
            audioFile: "audio/week8_slide_13.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Famous Graph Theory Problems</h3>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='four-color.png' alt='Four color theorem example' style='width: 50%;'><p class='image-caption'>Map coloring example for the Four Color Theorem</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='four-color-graph.png' alt='Four color graph representation' style='width: 70%;'><p class='image-caption'>Graph representation of map coloring problem</p></div>"
                },
                {
                    type: "math-example",
                    text: "<h3>Four Color Theorem</h3>\n<blockquote>Any map can be colored using at most 4 colors so that no adjacent regions share the same color.</blockquote>\nProven in 1976 by Appel and Haken using computer assistance to check 1834 cases."
                },
                {
                    type: "math-example",
                    text: "<h3>Hamiltonian Path Problem</h3>\n<blockquote>Does a graph have a cycle that visits every node exactly once?</blockquote>\nThis is an <b>open problem</b> - no efficient general solution is known."
                },
                {
                    type: "math-example",
                    text: "<h3>Traveling Salesman Problem</h3>\n<blockquote>What is the shortest path that visits each node at least once?</blockquote>\nAnother famously difficult problem with no known efficient solution."
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='planar.png' alt='Planar graph' style='width: 30%;'><p class='image-caption'>Example of a planar graph</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='nonplanar.png' alt='Non-planar graph' style='width: 30%;'><p class='image-caption'>Example of a non-planar graph</p></div>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='k33-k5.png' alt='K3,3 and K5 graphs' style='width: 60%;'><p class='image-caption'>K3,3 and K5 - the forbidden subgraphs for planarity</p></div>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Planar Graphs</h3>\nA graph is <b>planar</b> if it can be drawn without edges crossing. A graph is planar if and only if it does not contain \\( K_5 \\) or \\( K_{3,3} \\) as subgraphs."
                }
            ]
        },
        {
            title: "14. Summary and Key Takeaways",
            id: "summary-key-takeaways",
            audioFile: "audio/week8_slide_14.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Algorithms Summary</h3>\n<ul>\n<li>Algorithms must be precise, unambiguous, and guaranteed to terminate</li>\n<li>Time complexity analysis helps compare algorithm efficiency</li>\n<li>Big O notation describes asymptotic growth rates</li>\n<li>Exponential algorithms become impractical for large inputs</li>\n</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Graph Theory Summary</h3>\n<ul>\n<li>Graphs model networks and relationships</li>\n<li>Adjacency matrices provide computational representation</li>\n<li>Matrix powers count paths between vertices</li>\n<li>Efficient algorithms exist for connectivity checking</li>\n<li>Clustering coefficients measure network structure</li>\n<li>Many graph problems remain computationally challenging</li>\n</ul>"
                },
                {
                    type: "paragraph",
                    text: "Graph theory provides powerful tools for analyzing complex systems, from social networks to transportation systems to biological structures. The combination of mathematical theory and efficient algorithms makes this field fundamental to modern computer science."
                }
            ]
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}