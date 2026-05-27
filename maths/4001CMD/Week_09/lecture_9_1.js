/**
 * Data structure for Week 9 Lecture Notes - Graph Traversal Algorithms (Part 1)
 * Content based on the uploaded LaTeX slides for Week 9 Part 1
 */
const lectureData = {
    courseName: "4001CMD - Mathematics for Computing Professionals",
    lectureTitle: "Week 9: Graph Traversal Algorithms (Part 1): Spanning Trees and Greedy Algorithms",
    
    sections: [
        {
            title: "1. Recap: Graph Connectivity and Matrix Powers",
            id: "recap-graph-connectivity",
            audioFile: "audio/week9_part1_slide_01.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>What We Learned Last Week</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Key Formulas and Algorithms</h4><ul>" +
                          "<li><b>Matrix Powers:</b> If $A$ is adjacency matrix, then $A^k$ gives number of paths of length $k$ between vertices</li>" +
                          "<li><b>Connectivity Check:</b> Graph is connected if $A + A^2 + \\cdots + A^{n-1}$ has no zero entries (but $O(n^4)$ - too slow!)</li>" +
                          "<li><b>Efficient Algorithm:</b> Marking nodes method - $O(n)$ complexity</li>" +
                          "<li><b>Triangles:</b> Number of triangles = $\\frac{1}{6} \\mathrm{tr}(A^3)$</li>" +
                          "<li><b>Clustering:</b> Global coefficient $C = \\frac{\\mathrm{tr}(A^3)}{\\sum_{i \\neq j}(A^2)_{ij}}$</li>" +
                          "</ul>"
                },
                {
                    type: "paragraph",
                    text: "<b>Why This Matters:</b> These concepts form the foundation for understanding how to navigate and analyze complex networks efficiently."
                }
            ]
        },
        {
            title: "2. Introduction to Spanning Trees",
            id: "introduction-spanning-trees",
            audioFile: "audio/week9_part1_slide_02.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>What is a Spanning Tree?</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Formal Definition</h4>" +
                          "<p>A <b>spanning tree</b> of a connected graph $G$ is a subgraph that:</p>" +
                          "<ul>" +
                          "<li>Contains all vertices of $G$</li>" +
                          "<li>Is connected (you can reach any vertex from any other)</li>" +
                          "<li>Has no cycles (it's a tree)</li>" +
                          "<li>Has exactly $n-1$ edges for $n$ vertices</li>" +
                          "</ul>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/reddot0.png' alt='Original graph' style='width: 40%;'><p class='image-caption'>Original connected graph - notice it has cycles and extra edges</p></div>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Why Spanning Trees Matter</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Real-World Applications</h4>" +
                          "<ul>" +
                          "<li><b>Network Design:</b> Most economical way to connect computers in a network</li>" +
                          "<li><b>Transportation:</b> Minimum roads needed to connect cities</li>" +
                          "<li><b>Electrical Grids:</b> Least expensive power line layout</li>" +
                          "<li><b>Broadcast Networks:</b> Efficient information distribution</li>" +
                          "</ul>" +
                          "<p><b>Trade-off:</b> Spanning trees are efficient but fragile - removing one edge disconnects the network!</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Key Questions We'll Answer</h3>"
                },
                {
                    type: "math-example",
                    text: "<ol>" +
                          "<li><b>How to find any spanning tree?</b> (We'll extend our connectivity algorithm)</li>" +
                          "<li><b>How to find the minimal spanning tree?</b> (When edges have weights/costs)</li>" +
                          "<li><b>How to find shortest paths?</b> (Dijkstra's algorithm - next lecture)</li>" +
                          "</ol>"
                }
            ]
        },
        {
            title: "3. Building Spanning Trees from Connectivity Algorithm",
            id: "building-spanning-trees",
            audioFile: "audio/week9_part1_slide_03.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Extending Our Connectivity Algorithm</h3>"
                },
                {
                    type: "paragraph",
                    text: "Remember our efficient $O(n)$ connectivity algorithm? We can modify it slightly to actually build a spanning tree!"
                },
                {
                    type: "math-example",
                    text: "<h4>Modified Algorithm for Spanning Trees</h4>" +
                          "<ol>" +
                          "<li>Start with any vertex, mark it and add to tree</li>" +
                          "<li>Find an unmarked vertex connected to a marked vertex</li>" +
                          "<li><b>Record the edge</b> that connects them</li>" +
                          "<li>Mark the new vertex and add it to tree</li>" +
                          "<li>Repeat until all vertices are marked</li>" +
                          "</ol>" +
                          "<p><b>Key Insight:</b> By recording which edges we use to connect new vertices, we automatically build a spanning tree!</p>"
                },
                {
                    type: "html-content",
                    text: "<div class='multi-image-container'>" +
                          "<div class='image-column'>" +
                          "<img src='figures/reddot1.png' alt='Step 1' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 1: Start with vertex 1</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/reddot2.png' alt='Step 2' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 2: Add vertex 2 via edge (1,2)</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/reddot3.png' alt='Step 3' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 3: Add vertex 3 via edge (2,3)</p>" +
                          "</div>" +
                          "</div>"
                },
                {
                    type: "html-content",
                    text: "<div class='multi-image-container'>" +
                          "<div class='image-column'>" +
                          "<img src='figures/reddot4.png' alt='Step 4' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 4: Add vertex 4 via edge (3,4)</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/reddot5.png' alt='Step 5' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 5: Add vertex 5 via edge (4,5)</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/rededge5.png' alt='Final tree' style='width: 95%;'>" +
                          "<p class='image-caption'>Final spanning tree</p>" +
                          "</div>" +
                          "</div>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Why This Always Gives a Tree</h3>"
                },
                {
                    type: "math-example",
                    text: "<ul>" +
                          "<li><b>No cycles:</b> We only add vertices that aren't already in the tree</li>" +
                          "<li><b>Connected:</b> Every vertex is reachable from the start</li>" +
                          "<li><b>$n-1$ edges:</b> We add exactly one edge per new vertex (except the first)</li>" +
                          "<li><b>Minimal connectivity:</b> Removing any edge would disconnect the graph</li>" +
                          "</ul>"
                }
            ]
        },
        {
            title: "4. Multiple Spanning Trees and Weighted Graphs",
            id: "multiple-spanning-trees",
            audioFile: "audio/week9_part1_slide_04.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Different Choices, Different Trees</h3>"
                },
                {
                    type: "paragraph",
                    text: "The spanning tree we get depends on the order in which we choose vertices. A graph can have many different spanning trees!"
                },
                {
                    type: "html-content",
                    text: "<div class='multi-image-container'>" +
                          "<div class='image-column'>" +
                          "<img src='figures/rededge5.png' alt='Red spanning tree' style='width: 95%;'>" +
                          "<p class='image-caption'>Red tree: Weight = $4+1+2+5 = 12$</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/blueedge5.png' alt='Blue spanning tree' style='width: 95%;'>" +
                          "<p class='image-caption'>Blue tree: Weight = $3+2+1+5 = 11$</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/greenedge5.png' alt='Green spanning tree' style='width: 95%;'>" +
                          "<p class='image-caption'>Green tree: Weight = $4+3+4+2 = 13$</p>" +
                          "</div>" +
                          "</div>"
                },
                {
                    type: "key-concept",
                    text: "<h3>The Minimal Spanning Tree Problem</h3>"
                },
                {
                    type: "paragraph",
                    text: "In real applications, edges often have weights representing cost, distance, or time. We want the spanning tree with the smallest total weight."
                },
                {
                    type: "math-example",
                    text: "<h4>Formal Problem Statement</h4>" +
                          "<p>Given: A connected, undirected graph $G = (V, E)$ with weight function $w: E \\to \\mathbb{R}$</p>" +
                          "<p>Find: A spanning tree $T$ that minimizes $\\sum_{e \\in T} w(e)$</p>" +
                          "<p><b>Challenge:</b> How do we efficiently find this minimal spanning tree?</p>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/weighted.png' alt='Weighted graph' style='width: 40%;'><p class='image-caption'>Our challenge: Find the minimal spanning tree for this weighted graph</p></div>"
                }
            ]
        },
        {
            title: "5. Kruskal's Algorithm: Building from Lightest Edges",
            id: "kruskals-algorithm",
            audioFile: "audio/week9_part1_slide_05.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Kruskal's Algorithm - A Greedy Approach</h3>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='figures/kruskal.png' alt='Joseph Kruskal' style='width: 30%; float: right; margin-left: 20px;'><p class='image-caption'>Joseph Bernard Kruskal, Jr (1928-2010)</p></div>"
                },
                {
                    type: "paragraph",
                    text: "Developed by Joseph Kruskal in 1956, this algorithm takes a straightforward approach: always pick the cheapest available edge that doesn't create a cycle."
                },
                {
                    type: "math-example",
                    text: "<h4>Kruskal's Algorithm Steps</h4>" +
"<ol>" +
"<li><b>Sort</b> all edges by weight in non-decreasing order</li>" +
"<li>Initialize an empty tree $T$</li>" +
"<li>For each edge in sorted order:" +
"<ol type='a'>" +
"<li>If adding the edge to $T$ doesn't create a cycle, add it</li>" +
"<li>Otherwise, skip it</li>" +
"</ol>" +
"</li>" +
"<li>Stop when $T$ has $n-1$ edges</li>" +
"</ol>"                },
                {
                    type: "key-concept",
                    text: "<h3>Step-by-Step Example</h3>"
                },
                {
                    type: "html-content",
                    text: "<div class='multi-image-container'>" +
                          "<div class='image-column'>" +
                          "<img src='figures/krus1.png' alt='Kruskal step 1' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 1: Add edge (2,3) weight 1</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/krus2.png' alt='Kruskal step 2' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 2: Add edge (2,5) weight 1</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/krus3.png' alt='Kruskal step 3' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 3: Add edge (2,4) weight 2</p>" +
                          "</div>" +
                          "</div>"
                },
                {
                    type: "html-content",
                    text: "<div class='multi-image-container'>" +
                          "<div class='image-column'>" +
                          "<img src='figures/krus4.png' alt='Kruskal step 4' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 4: Skip (3,4) - would create cycle</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/krus4.png' alt='Kruskal step 5' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 5: Add edge (1,4) weight 3</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/krus4.png' alt='Kruskal complete' style='width: 95%;'>" +
                          "<p class='image-caption'>Complete! Total weight = $1+1+2+3 = 7$</p>" +
                          "</div>" +
                          "</div>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Why Kruskal's Algorithm Works</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>The Greedy Choice Property</h4>" +
                          "<p>The algorithm always picks the globally optimal solution because:</p>" +
                          "<ul>" +
                          "<li>At each step, we choose the cheapest edge that doesn't create a cycle</li>" +
                          "<li>This local optimal choice leads to the global optimum</li>" +
                          "<li>We never regret our choices later</li>" +
                          "</ul>" +
                          "<p><b>Key Insight:</b> The minimal spanning tree must contain the cheapest edges whenever possible!</p>"
                }
            ]
        },
        {
            title: "6. Prim-Jarník Algorithm: Growing from a Seed",
            id: "prim-jarnik-algorithm",
            audioFile: "audio/week9_part1_slide_06.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Another Approach: Prim-Jarník Algorithm</h3>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container'><img src='figures/primjarnik.png' alt='Prim and Jarník' style='width: 40%; float: right; margin-left: 20px;'><p class='image-caption'>Robert C. Prim (right) and Vojtěch Jarník (left)</p></div>"
                },
                {
                    type: "paragraph",
                    text: "Discovered independently by Robert Prim (1957) and Vojtěch Jarník (1930), this algorithm grows the tree from a starting vertex, always adding the cheapest edge connected to the growing tree."
                },
                {
                    type: "math-example",
                    text: "<h4>Prim-Jarník Algorithm Steps</h4>" +
                          "<ol>" +
                          "<li>Start with any vertex as the initial tree</li>" +
                          "<li>While tree doesn't include all vertices:" +
                          "<ul>" +
                          "<li>Find the cheapest edge connecting a vertex in the tree to a vertex outside</li>" +
                          "<li>Add this edge and the new vertex to the tree</li>" +
                          "</ul>" +
                          "</li>" +
                          "<li>Stop when all vertices are included</li>" +
                          "</ol>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Step-by-Step Example</h3>"
                },
                {
                    type: "html-content",
                    text: "<div class='multi-image-container'>" +
                          "<div class='image-column'>" +
                          "<img src='figures/prim1.png' alt='Prim step 1' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 1: Start with vertex 4</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/prim2.png' alt='Prim step 2' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 2: Add edge (2,4) weight 2</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/prim3.png' alt='Prim step 3' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 3: Add edge (2,5) weight 1</p>" +
                          "</div>" +
                          "</div>"
                },
                {
                    type: "html-content",
                    text: "<div class='multi-image-container'>" +
                          "<div class='image-column'>" +
                          "<img src='figures/prim4.png' alt='Prim step 4' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 4: Add edge (2,3) weight 1</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/prim5.png' alt='Prim step 5' style='width: 95%;'>" +
                          "<p class='image-caption'>Step 5: Add edge (1,4) weight 3</p>" +
                          "</div>" +
                          "<div class='image-column'>" +
                          "<img src='figures/prim5.png' alt='Prim complete' style='width: 95%;'>" +
                          "<p class='image-caption'>Complete! Total weight = $2+1+1+3 = 7$</p>" +
                          "</div>" +
                          "</div>"
                }
            ]
        },
        


{
    title: "7. Dijkstra's Algorithm: Finding Shortest Paths",
    id: "dijkstra-algorithm",
    audioFile: "audio/week9_part1_slide_07.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>Dijkstra's Algorithm for Shortest Paths</h3>"
        },
        {
            type: "html-content",
            text: "<div class='image-container'><img src='figures/dijkstra.png' alt='Edsger Dijkstra' style='width: 30%; float: right; margin-left: 20px;'><p class='image-caption'>Edsger W. Dijkstra (1930-2002)</p></div>"
        },
        {
            type: "paragraph",
            text: "While spanning trees connect all vertices minimally, we often need to find the shortest path between two specific points. This is where Dijkstra's algorithm comes in!"
        },
        {
            type: "math-example",
            text: "<h4>Problem Statement</h4>" +
                  "<p>Given a weighted graph (directed or undirected), find the shortest path from vertex $A$ to vertex $Z$.</p>" +
                  "<p><b>Applications:</b> GPS navigation, network routing, game AI pathfinding, transportation planning</p>"
        },
        {
            type: "key-concept",
            text: "<h3>Dijkstra's Algorithm Step-by-Step Example</h3>"
        },
        {
            type: "paragraph",
            text: "Let's find the shortest path from A to Z in this network:"
        },
        
{
    type: "html-content",
    text: `
<div class="interactive-example">
    <h4><a href="dijkstra_example1.html" target="_blank">Interactive Dijkstra's Algorithm Demonstration 2</a></h4>
    <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin: 20px 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <iframe src="dijkstra_example1.html" 
                width="100%" 
                height="920"
                style="border: none; display: block;"
                title="Dijkstra's Algorithm Interactive Visualization 2">
        </iframe>
    </div>
    <div style="text-align: center; margin-top: 10px;">
        <small style="color: #666;">
            💡 <strong>Tip:</strong> Use the Forward/Backward buttons to step through the algorithm
        </small>
    </div>
</div>
    `
},

{
            type: "key-concept",
            text: "<h3>Retracing the Shortest Path</h3>"
        },
        {
            type: "paragraph",
            text: "Once Dijkstra's algorithm completes, we have the shortest distance to each node, but we also need to reconstruct the actual path from the start node to the target node."
        },
        {
            type: "math-example",
            text: "<h4>How to Retrace the Path</h4>" +
                  "<p>The labels we stored during the algorithm contain both the distance and the <em>predecessor node</em>:</p>" +
                  "<ul>" +
                  "<li><b>Format:</b> <code>distance_predecessor</code> (e.g., <code>5_C</code> means distance 5, came from node C)</li>" +
                  "<li><b>Process:</b> Start from the target node and follow predecessors backward to the start</li>" +
                  "<li><b>Result:</b> Reverse the backward path to get the forward shortest path</li>" +
                  "</ul>"
        },
        {
            type: "html-content",
            text: `
<div class="path-retracing-example" style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h4 style="margin-top: 0;">Example: Retracing A → Z Path</h4>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start;">
        <div>
            <h5>Final Node Labels:</h5>
            <div style="background: white; padding: 15px; border-radius: 6px; font-family: monospace;">
                <div>A: <span style="color: green;">0</span> <em>(start)</em></div>
                <div>B: <span style="color: blue;">2_A</span> <em>(from A)</em></div>
                <div>C: <span style="color: blue;">4_B</span> <em>(from B)</em></div>
                <div>D: <span style="color: blue;">4_F</span> <em>(from F)</em></div>
                <div>E: <span style="color: blue;">6_B</span> <em>(from B)</em></div>
                <div>F: <span style="color: blue;">1_A</span> <em>(from A)</em></div>
                <div>G: <span style="color: blue;">6_F</span> <em>(from F)</em></div>
                <div>Z: <span style="color: red;">5_C</span> <em>(from C)</em></div>
            </div>
        </div>
        
        <div>
            <h5>Retracing Steps:</h5>
            <div style="background: white; padding: 15px; border-radius: 6px;">
                <ol style="margin: 0; padding-left: 20px;">
                    <li>Start at <strong>Z: 5_C</strong> → came from <strong>C</strong></li>
                    <li>Go to <strong>C: 4_B</strong> → came from <strong>B</strong></li>
                    <li>Go to <strong>B: 2_A</strong> → came from <strong>A</strong></li>
                    <li>Reached <strong>A</strong> (start node)</li>
                </ol>
                <div style="margin-top: 15px; padding: 10px; background: #e0f2fe; border-radius: 4px;">
                    <strong>Backward path:</strong> Z ← C ← B ← A<br>
                    <strong>Forward path:</strong> A → B → C → Z
                </div>
            </div>
        </div>
    </div>
</div>
            `
        },
        {
            type: "key-concept",
            text: "<h3>Why This Backtracking Works</h3>"
        },
        {
            type: "math-example",
            text: "<h4>Optimal Substructure Property</h4>" +
                  "<p>The shortest path from A to Z must consist of shortest paths between intermediate nodes:</p>" +
                  "<ul>" +
                  "<li>If A→B→C→Z is the shortest path from A to Z, then:</li>" +
                  "<li>A→B must be the shortest path from A to B</li>" +
                  "<li>B→C must be the shortest path from B to C</li>" +
                  "<li>C→Z must be the shortest path from C to Z</li>" +
                  "</ul>" +
                  "<p><b>Key Insight:</b> By storing predecessors, we capture the optimal substructure of the shortest path!</p>"
        },
        {
            type: "html-content",
            text: `
<div class="algorithm-pseudocode" style="background: #1e293b; color: #e2e8f0; padding: 20px; border-radius: 8px; margin: 20px 0; font-family: monospace;">
    <h4 style="color: white; margin-top: 0;">Pseudocode: Path Reconstruction</h4>
    <pre style="margin: 0; white-space: pre-wrap;">
function reconstructPath(predecessors, target):
    path = []
    current = target
    
    while current ≠ null:
        path.append(current)
        current = predecessors[current]
    
    return reverse(path)

# Example usage:
predecessors = {'B': 'A', 'C': 'B', 'Z': 'C', ...}
shortest_path = reconstructPath(predecessors, 'Z')
# Result: ['A', 'B', 'C', 'Z']
    </pre>
</div>
            `
        },
        {
            type: "key-concept",
            text: "<h3>Practical Implementation Notes</h3>"
        },
        {
            type: "math-example",
            text: "<h4>Storage Efficiency</h4>" +
                  "<ul>" +
                  "<li><b>Memory:</b> We only need to store one predecessor per node</li>" +
                  "<li><b>Time:</b> Path reconstruction is O(p) where p is path length</li>" +
                  "<li><b>Flexibility:</b> Can find shortest paths to all nodes, not just one target</li>" +
                  "</ul>" +
                  "<p><b>Real-world use:</b> GPS navigation systems store these predecessor pointers to quickly recalculate routes when you take a wrong turn!</p>"
        },








{
    type: "html-content",
    text: `
<div class="interactive-example">
    <h4><a href="dijkstra_example2.html" target="_blank">Interactive Dijkstra's Algorithm Demonstration 2</a></h4>
    <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin: 20px 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <iframe src="dijkstra_example2.html" 
                width="100%" 
                height="920"
                style="border: none; display: block;"
                title="Dijkstra's Algorithm Interactive Visualization 2">
        </iframe>
    </div>
    <div style="text-align: center; margin-top: 10px;">
        <small style="color: #666;">
            💡 <strong>Tip:</strong> Use the Forward/Backward buttons to step through the algorithm
        </small>
    </div>
</div>
    `
},


        {
            type: "key-concept",
            text: "<h3>Why Dijkstra's Algorithm Works</h3>"
        },
        {
            type: "math-example",
            text: "<h4>The Greedy Choice Property</h4>" +
                  "<p>Dijkstra's algorithm is <b>greedy</b> because:</p>" +
                  "<ul>" +
                  "<li>At each step, it explores the vertex with the smallest <em>known</em> distance</li>" +
                  "<li>This local optimal choice leads to the global optimum for shortest paths</li>" +
                  "<li>Once a vertex is visited, its shortest distance is finalized</li>" +
                  "</ul>" +
                  "<p><b>Key Insight:</b> The shortest path to any vertex must go through vertices that are closer to the start!</p>"
        },
        {
            type: "key-concept",
            text: "<h3>Algorithm Complexity and Limitations</h3>"
        },
        {
            type: "math-example",
            text: "<h4>Time Complexity</h4>" +
                  "<ul>" +
                  "<li><b>Basic implementation:</b> $O(|V|^2)$ where $|V|$ is number of vertices</li>" +
                  "<li><b>With priority queue:</b> $O(|E| + |V|\\log|V|)$ where $|E|$ is number of edges</li>" +
                  "<li>Much faster than checking all possible paths!</li>" +
                  "</ul>"
        },
        {
            type: "math-example",
            text: "<h4>Important Limitations</h4>" +
                  "<ul>" +
                  "<li><b>No negative weights:</b> Algorithm fails if edges have negative weights</li>" +
                  "<li><b>Not always optimal time:</b> May explore unnecessary paths before finding the direct route</li>" +
                  "<li><b>Static weights:</b> Doesn't account for weights that change over time</li>" +
                  "</ul>" +
                  "<p><b>Alternative:</b> Bellman-Ford algorithm handles negative weights but is slower</p>"
        }
    ]
},








{
    title: "8. Summary and Key Takeaways",
    id: "summary",
    audioFile: "audio/week9_part1_slide_08.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>Summary: What We Learned Today</h3>"
        },
        {
            type: "math-example",
            text: "<h4>Graph Traversal Algorithms</h4>" +
                  "<ul>" +
                  "<li><b>Spanning trees</b> provide minimal connectivity for networks</li>" +
                  "<li>We can build spanning trees by extending our connectivity algorithm</li>" +
                  "<li>For weighted graphs, we want the <b>minimal spanning tree</b> with smallest total weight</li>" +
                  "</ul>"
        },
        {
            type: "math-example",
            text: "<h4>Minimal Spanning Tree Algorithms</h4>" +
                  "<ul>" +
                  "<li><b>Kruskal's algorithm:</b> Builds from sorted edges, best for sparse graphs</li>" +
                  "<li><b>Prim's algorithm:</b> Grows from starting vertex, best for dense graphs</li>" +
                  "<li>Both are <b>greedy algorithms</b> that work perfectly for MST problems</li>" +
                  "</ul>"
        },
        {
            type: "math-example",
            text: "<h4>Shortest Path Algorithm</h4>" +
                  "<ul>" +
                  "<li><b>Dijkstra's algorithm:</b> Finds shortest path between two specific vertices</li>" +
                  "<li>Also a <b>greedy algorithm</b> that explores closest vertices first</li>" +
                  "<li>Works by maintaining and updating <em>established distances</em></li>" +
                  "<li>Applications: GPS navigation, network routing, pathfinding</li>" +
                  "</ul>"
        },
        {
            type: "key-concept",
            text: "<h3>When to Use Each Algorithm</h3>"
        },
        {
            type: "math-example",
            text: "<div class='comparison-table'>" +
                  "<table border='1'>" +
                  "<tr><th>Algorithm</th><th>Use When...</th><th>Complexity</th><th>Key Feature</th></tr>" +
                  "<tr><td><b>Kruskal</b></td><td>Graph is sparse ($E \\ll V^2$)</td><td>$O(E\\log E)$</td><td>Sorts edges first</td></tr>" +
                  "<tr><td><b>Prim</b></td><td>Graph is dense ($E \\approx V^2$)</td><td>$O(V^2)$</td><td>Grows from vertex</td></tr>" +
                  "<tr><td><b>Dijkstra</b></td><td>Need shortest path A→Z</td><td>$O(E + V\\log V)$</td><td>Updates distances</td></tr>" +
                  "</table></div>"
        },
        {
            type: "key-concept",
            text: "<h3>Looking Ahead</h3>"
        },
        {
    type: "math-example",
    text: "<h4>Part 2 Preview: Graph Searching Algorithms</h4>" +
          "<ul>" +
          "<li><b>Graph Searching Strategies:</b> Breadth-first vs depth-first approaches</li>" +
          "<li><b>Tree Terminology:</b> Rooted trees, parent/child nodes, leaves, binary trees</li>" +
          "<li><b>Graph Traversal:</b> Systematic methods using BFS and DFS</li>" +
          "<li><b>Breadth-First Search (BFS):</b> Level-by-level traversal using queues</li>" +
          "<li><b>Depth-First Search (DFS):</b> Path exploration using stacks with preorder/inorder/postorder variants</li>" +
          "<li><b>Data Structures:</b> How queues and stacks implement graph searches</li>" +
          "<li><b>Step-by-Step Examples:</b> Detailed walkthroughs of BFS and DFS algorithms</li>" +
          "</ul>" +
          "<p><b>Practice:</b> Try implementing BFS and DFS on different tree and graph structures to understand their traversal patterns!</p>"
}
    ]
}




        
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}