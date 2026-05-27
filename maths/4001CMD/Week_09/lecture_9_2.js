/**
 * Data structure for Week 9 Lecture Notes - Graph Traversal Algorithms (Part 2)
 * Content based on the uploaded LaTeX slides for Week 9 Part 2
 */
const lectureData = {
    courseName: "4001CMD - Mathematics for Computing Professionals",
    lectureTitle: "Week 9: Graph Traversal Algorithms (Part 2): Graph Searching Algorithms",
    
    sections: [
        {
            title: "1. Introduction to Graph Searching",
            id: "intro-graph-searching",
            audioFile: "audio/week9_part2_slide_01.wav",
            content: [
                {
                    type: "paragraph",
                    text: "Dijkstra's algorithm and the traveling salesman problem involve a procedure called <em>graph searching:</em> a way to navigate a graph to search for information (a specific node, an optimal path, etc.)."
                },
                {
                    type: "key-concept",
                    text: "<h3>Two Main Searching Strategies</h3>"
                },
                {
                    type: "math-example",
                    text: "<ul>" +
                          "<li><b>Breadth-first:</b> In each step, explore the nodes adjacent to <em>all of the nodes you've already explored</em> (you travel widely from your initial node, casting a wide net, but you take time to get far away from your node).<ul><li>Dijkstra's algorithm is breadth-first.</li></ul></li>" +
                          "<li><b>Depth-first:</b> Travel down a single path in a graph as far as you can go before hitting a dead-end/loop, at which point you backtrack until you can find a new path.<ul><li>Solving a maze is depth-first.</li></ul></li>" +
                          "</ul>"
                },
                {
                    type: "paragraph",
                    text: "To begin, we're going to look at graph searching with the simplest graph we can: trees."
                }
            ]
        },
        {
            title: "2. Tree Terminology",
            id: "tree-terminology",
            audioFile: "audio/week9_part2_slide_02.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Key Tree Terminology</h3>"
                },
                {
                    type: "math-example",
                    text: "<ul>" +
                          "<li>A <b>tree</b> is a connected, undirected graph with no cycles.</li>" +
                          "<li>If we distinguish one vertex as a root, we get a <b>rooted tree</b>.</li>" +
                          "<li>A <b>parent node</b> (a.k.a. mother or father node) is a node of its neighbor one level up.</li>" +
                          "<li>A <b>child</b> (a.k.a. daughter, son) is a node of its neighbor one level down.</li>" +
                          "<li>A <b>root</b> is a node without parents in a rooted tree.</li>" +
                          "<li>A <b>leaf</b> is a node without children (degree 1).</li>" +
                          "<li>A tree where every parent has at most two children is a <b>binary tree</b>.</li>" +
                          "<li>The <b>height</b> of a tree is the depth of the deepest node.</li>" +
                          "</ul>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/rootedtree.png' alt='Example of a rooted tree' style='width: 40%;'><p class='image-caption'>An example of a rooted tree, showing the root, parents, children, and leaves.</p></div>"
                }
            ]
        },
        {
            title: "3. Graph Traversing",
            id: "graph-traversing",
            audioFile: "audio/week9_part2_slide_03.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>What is Graph Traversal?</h3>"
                },
                {
                    type: "paragraph",
                    text: "Many problems in computer science are about searching graphs, a.k.a., <b>traversing</b> graphs (meaning visiting each node exactly once)."
                },
                {
                    type: "paragraph",
                    text: "Traversing a graph (esp. a tree) means systematically going through the nodes so that each node gets visited exactly once."
                },
                {
                    type: "math-example",
                    text: "<ul>" +
                          "<li><b>Breadth-First Search (BFS):</b> Traverse by levels of children, grandchildren, level by level.</li>" +
                          "<li><b>Depth-First Search (DFS):</b> Traverse by subtree, going through left subtree, then working over to the right.</li>" +
                          "</ul>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/breadthanddepth.png' alt='Breadth-first vs Depth-first search' style='width: 70%;'><p class='image-caption'>Visual comparison of Breadth-First (wide) vs. Depth-First (deep) traversal.</p></div>"
                }
            ]
        },
        {
            title: "4. Breadth-First Search (BFS)",
            id: "bfs-algorithm",
            audioFile: "audio/week9_part2_slide_04.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Breadth-First Search (BFS)</h3>"
                },
                {
                    type: "paragraph",
                    text: "For breadth-first searches, you go <em>wide</em> before you go <em>deep:</em> traverse the tree row by row, starting with the root:"
                },
                {
                    type: "math-example",
                    text: "<p style='font-family: monospace; text-align: center; font-size: 1.1em; line-height: 1.6;'>" +
                          "<b>A</b> (Root) $\\to$ <br>" +
                          "<b>B $\\to$ C</b> (Level 1) $\\to$ <br>" +
                          "<b>D $\\to$ E $\\to$ F $\\to$ G</b> (Level 2) $\\to$ <br>" +
                          "<b>H $\\to$ I $\\to$ J $\\to$ K</b> (Level 3)" +
                          "</p>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/breadthfirst.png' alt='BFS traversal order' style='width: 40%;'><p class='image-caption'>BFS traverses level by level: A, then B-C, then D-G, then H-K.</p></div>"
                }
            ]
        },
        {
            title: "5. Data Structures: Queues and Stacks",
            id: "queues-and-stacks",
            audioFile: "audio/week9_part2_slide_05.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Programming Graph Searches</h3>"
                },
                {
                    type: "paragraph",
                    text: "To program a graph search, the decision procedure for which vertices to look at is encoded in a data structure: either a <em>queue</em>, or a <em>stack</em>."
                },
                {
                    type: "paragraph",
                    text: "<b>Queues</b> and <b>stacks</b> are data structures given by a list of data (e.g., which vertex to visit?) to be sequentially read and removed."
                },
                {
                    type: "math-example",
                    text: "<h4>Basic Operations</h4><ul><li>Add data to one end (enqueue/push)</li><li>Read and remove data from an end (dequeue/pop)</li></ul><p>But which end does the data get removed from?</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Queues (First-In, First-Out)</h3>"
                },
                {
                    type: "paragraph",
                    text: "In a <b>queue</b>, the data is read in the order it was received (from the <em>beginning</em> of the queue). This is <b>FIFO</b> (First-In, First-Out)."
                },
                {
                    type: "math-example",
                    text: "<h4>Queue Example (FIFO)</h4><pre style='font-family: monospace; background: #f4f4f4; padding: 10px; border-radius: 5px; color: #333;'>" +
                          "Queue: {B}     Read: {}\n" +
                          "  -> Queue: {B,F}   Read: {}\n" +
                          "  -> Queue: {B,F,A} Read: {}\n" +
                          "  -> Queue: {F,A}   Read: {B}  (B is dequeued from front)\n" +
                          "  -> Queue: {A}     Read: {B,F} (F is dequeued from front)" +
                          "</pre>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Stacks (Last-In, First-Out)</h3>"
                },
                {
                    type: "paragraph",
                    text: "In a <b>stack</b>, the data is read in the reverse order (from the <em>end</em> of the stack). This is <b>LIFO</b> (Last-In, First-Out)."
                },
                {
                    type: "math-example",
                    text: "<h4>Stack Example (LIFO)</h4><pre style='font-family: monospace; background: #f4f4f4; padding: 10px; border-radius: 5px; color: #333;'>" +
                          "Stack: [B]     Read: {}\n" +
                          "  -> Stack: [B, F]  Read: {}\n" +
                          "  -> Stack: [B, F, A] Read: {}\n" +
                          "  -> Stack: [B, F]  Read: {A}  (A is popped from end)\n" +
                          "  -> Stack: [B]     Read: {A, F} (F is popped from end)" +
                          "</pre>"
                }
            ]
        },
        
{
    title: "6. BFS Algorithm & Pseudocode",
    id: "bfs-pseudocode",
    audioFile: "audio/week9_part2_slide_06.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>BFS Algorithm Steps</h3>"
        },
        {
            type: "math-example",
            text: "<h4>Algorithm Steps (using a Queue)</h4>" +
                  "<ol>" +
                  "<li><b>Initialize:</b> Add root to the queue and mark as visited</li>" +
                  "<li>While queue is not empty:" +
                  "<ol style='margin-top: 5px; margin-bottom: 5px;' type='a'>" +
                  "<li>Dequeue front vertex</li>" +
                  "<li>Process vertex</li>" +
                  "<li>Enqueue all unvisited neighbors</li>" +
                  "<li>Mark neighbors as visited</li>" +
                  "</ol>" +
                  "</li>" +
                  "</ol>"
        },
        {
            type: "key-concept",
            text: "<h3>BFS Python Implementation</h3>"
        },
        {
            type: "math-example",
            text: "<pre style='font-family: monospace; background: #f4f4f4; padding: 15px; border-radius: 5px; line-height: 1.4; white-space: pre-wrap; color: #333;'>from collections import deque\n\ndef bfs(graph, start):\n    # Initialize queue and visited set\n    queue = deque([start])\n    visited = set([start])\n    \n    while queue:\n        # Dequeue front vertex\n        current = queue.popleft()\n        print(f\"Visiting: {current}\")  # Process vertex\n        \n        # Enqueue all unvisited neighbors\n        for neighbor in graph[current]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)</pre>"
        },
        {
            type: "paragraph",
            text: "<b>Example Usage:</b>"
        },
        {
            type: "math-example",
            text: "<pre style='font-family: monospace; background: #f4f4f4; padding: 15px; border-radius: 5px; line-height: 1.4; white-space: pre-wrap; color: #333;'># Graph represented as adjacency list\ngraph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'D', 'E'],\n    'C': ['A', 'F'],\n    'D': ['B'],\n    'E': ['B', 'F'],\n    'F': ['C', 'E']\n}\n\nbfs(graph, 'A')\n# Output: Visiting: A, Visiting: B, Visiting: C, Visiting: D, Visiting: E, Visiting: F</pre>"
        }
    ]
},
        {
            title: "7. Depth-First Search (DFS)",
            id: "dfs-algorithm",
            audioFile: "audio/week9_part2_slide_07.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Depth-First Search (DFS)</h3>"
                },
                {
                    type: "paragraph",
                    text: "Traverse one branch of a tree until we get to a leaf, then back towards the root of the tree."
                },
                {
                    type: "math-example",
                    text: "<h4>Recursive Options at Each Node</h4>" +
                          "<ul>" +
                          "<li>Read the data of the node</li>" +
                          "<li>Read the data to the left</li>" +
                          "<li>Read the data to the right</li>" +
                          "</ul>"
                },
                {
                    type: "paragraph",
                    text: "Usually nodes are checked recursively in this kind of algorithm, i.e., using a base case value (usually a leaf), and reducing/layering the problem to get to the base case."
                }
            ]
        },
        {
    title: "8. DFS Algorithm & Pseudocode",
    id: "dfs-pseudocode",
    audioFile: "audio/week9_part2_slide_08.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>DFS Algorithm Steps</h3>"
        },
        {
            type: "math-example",
            text: "<h4>Algorithm Steps (using a Stack)</h4>" +
                  "<ol>" +
                  "<li><b>Initialize:</b> Push start vertex to stack</li>" +
                  "<li>While stack is not empty:" +
                  "<ol style='margin-top: 5px; margin-bottom: 5px;' type='a'>" +
                  "<li>Pop top vertex</li>" +
                  "<li>If not visited, mark visited and process</li>" +
                  "<li>Push all unvisited neighbors to stack</li>" +
                  "</ol>" +
                  "</li>" +
                  "</ol>"
        },
        {
            type: "key-concept",
            text: "<h3>DFS Python Implementation (Iterative)</h3>"
        },
        {
            type: "math-example",
            text: "<pre style='font-family: monospace; background: #f4f4f4; padding: 15px; border-radius: 5px; line-height: 1.4; white-space: pre-wrap; color: #333;'>def dfs_iterative(graph, start):\n    # Initialize stack and visited set\n    stack = [start]\n    visited = set()\n    \n    while stack:\n        # Pop top vertex\n        current = stack.pop()\n        \n        # If not visited, process and mark visited\n        if current not in visited:\n            visited.add(current)\n            print(f\"Visiting: {current}\")  # Process vertex\n            \n            # Push all unvisited neighbors to stack\n            # Reverse to maintain left-to-right order (optional)\n            for neighbor in reversed(graph[current]):\n                if neighbor not in visited:\n                    stack.append(neighbor)</pre>"
        },
        {
            type: "key-concept",
            text: "<h3>DFS Python Implementation (Recursive)</h3>"
        },
        {
            type: "math-example",
            text: "<pre style='font-family: monospace; background: #f4f4f4; padding: 15px; border-radius: 5px; line-height: 1.4; white-space: pre-wrap; color: #333;'>def dfs_recursive(graph, current, visited=None):\n    if visited is None:\n        visited = set()\n    \n    # Mark current node as visited and process\n    visited.add(current)\n    print(f\"Visiting: {current}\")\n    \n    # Recursively visit all unvisited neighbors\n    for neighbor in graph[current]:\n        if neighbor not in visited:\n            dfs_recursive(graph, neighbor, visited)\n    \n    return visited</pre>"
        },
        {
            type: "paragraph",
            text: "<b>Example Usage:</b>"
        },
        {
            type: "math-example",
            text: "<pre style='font-family: monospace; background: #f4f4f4; padding: 15px; border-radius: 5px; line-height: 1.4; white-space: pre-wrap; color: #333;'># Same graph structure\ngraph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'D', 'E'],\n    'C': ['A', 'F'],\n    'D': ['B'],\n    'E': ['B', 'F'],\n    'F': ['C', 'E']\n}\n\nprint(\"Iterative DFS:\")\ndfs_iterative(graph, 'A')\n# Output: Visiting: A, Visiting: B, Visiting: D, Visiting: E, Visiting: F, Visiting: C\n\nprint(\"\\nRecursive DFS:\")\ndfs_recursive(graph, 'A')\n# Output: Visiting: A, Visiting: B, Visiting: D, Visiting: E, Visiting: F, Visiting: C</pre>"
        }
    ]
},
        {
            title: "9. DFS: Preorder Traversal",
            id: "dfs-preorder",
            audioFile: "audio/week9_part2_slide_09.wav",
            content: [
                {
                    type: "paragraph",
                    text: "There are three main ways to do a depth-first search: inorder, preorder, and postorder."
                },
                {
                    type: "key-concept",
                    text: "<h3>Preorder Traversal (Root, Left, Right)</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>The data of the node is read, then the left node/subtree (recursively, as far as it can go), then the right data/subtree (as far as it can go).</p>" +
                          "<p style='font-family: monospace; font-size: 1.1em; line-height: 1.6;'>" +
                          "<b>Order:</b> $\\underbrace{A}_{\\text{Root}} \\to \\underbrace{B \\to D \\to H \\to I \\to E \\to J}_{\\text{Left subtree}}\\to \\underbrace{C \\to F \\to G \\to K}_{\\text{Right subtree}}$" +
                          "</p>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/dfs-tree.png' alt='DFS tree' style='width: 40%;'><p class='image-caption'><b>Preorder:</b> A, B, D, H, I, E, J, C, F, G, K</p></div>"
                }
            ]
        },
        {
            title: "10. DFS: Inorder Traversal",
            id: "dfs-inorder",
            audioFile: "audio/week9_part2_slide_10.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Inorder Traversal (Left, Root, Right)</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>The data of the leftmost subtree is read first (as far as it can go), then the root of the subtree, then the right subtree of the root (as far as it can go).</p>" +
                          "<p style='font-family: monospace; font-size: 1.1em; line-height: 1.6;'>" +
                          "<b>Order:</b> $\\underbrace{H \\to D \\to I \\to B \\to J \\to E}_{\\text{Left subtree}} \\to \\underbrace{A}_{\\text{Root}} \\to \\underbrace{F \\to C \\to K \\to G}_{\\text{Right subtree}}$" +
                          "</p>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/dfs-tree.png' alt='DFS tree' style='width: 40%;'><p class='image-caption'><b>Inorder:</b> H, D, I, B, J, E, A, F, C, K, G</p></div>"
                }
            ]
        },
        {
            title: "11. DFS: Postorder Traversal",
            id: "dfs-postorder",
            audioFile: "audio/week9_part2_slide_11.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Postorder Traversal (Left, Right, Root)</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>The left node is read first (as far as it can go), then the right node (as far as it can go), then the node's data.</p>" +
                          "<p style='font-family: monospace; font-size: 1.1em; line-height: 1.6;'>" +
                          "<b>Order:</b> $\\underbrace{H \\to I \\to D \\to J \\to E \\to B}_{\\text{Left subtree}} \\to \\underbrace{F \\to K \\to G \\to C}_{\\text{Right subtree}} \\to \\underbrace{A}_{\\text{Root}}$" +
                          "</p>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/dfs-tree.png' alt='DFS tree' style='width: 40%;'><p class='image-caption'><b>Postorder:</b> H, I, D, J, E, B, F, K, G, C, A</p></div>"
                }
            ]
        },
        {
            title: "12. Complexity Analysis",
            id: "complexity-analysis",
            audioFile: "audio/week9_part2_slide_12.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Time & Space Complexity</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>BFS Complexity</h4>" +
                          "<ul>" +
                          "<li><b>Time Complexity:</b> $O(V + E)$ where V = vertices, E = edges</li>" +
                          "<li><b>Space Complexity:</b> $O(V)$ for queue and visited set</li>" +
                          "<li>Visits each vertex and edge exactly once</li>" +
                          "</ul>"
                },
                {
                    type: "math-example",
                    text: "<h4>DFS Complexity</h4>" +
                          "<ul>" +
                          "<li><b>Time Complexity:</b> $O(V + E)$ same as BFS</li>" +
                          "<li><b>Space Complexity:</b> $O(V)$ for stack in worst case</li>" +
                          "<li>Memory depends on graph depth rather than breadth</li>" +
                          "</ul>"
                },
                {
                    type: "paragraph",
                    text: "Both algorithms have the same time complexity but differ in space usage based on graph structure."
                }
            ]
        },
        {
            title: "13. BFS Algorithm in Action (Rooted Tree)",
            id: "bfs-example-tree",
            audioFile: "audio/week9_part2_slide_13.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>BFS Algorithm (Rooted Tree)</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Algorithm Steps (using a Queue)</h4>" +
                          "<ol>" +
                          "<li><b>Initialize:</b> Add root to the queue.</li>" +
                          "<li>Visit vertex at the beginning of queue.</li>" +
                          "<li>Add children of vertex to queue.</li>" +
                          "<li>Repeat steps 1 and 2 until all leaves are reached.</li>" +
                          "</ol>"
                },
                {
                    type: "html-content",
                    text: `
<div class="interactive-example">
    <h4><a href="bfs_tree_example.html" target="_blank">Interactive BFS (Tree) Demonstration</a></h4>
    <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin: 20px 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <iframe src="bfs_tree_example.html" 
                width="100%" 
                height="1000"
                style="border: none; display: block;"
                title="BFS Algorithm Interactive Visualization (Rooted Tree)">
        </iframe>
    </div>
    <div style="text-align: center; margin-top: 10px;">
        <small style="color: #666;">
            💡 <strong>Tip:</strong> This animation shows the state of the Queue and the Visited list at each step.
        </small>
    </div>
</div>
    `
                }
            ]
        },
        {
            title: "14. BFS Algorithm in Action (General Graph)",
            id: "bfs-example-graph",
            audioFile: "audio/week9_part2_slide_14.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>BFS Algorithm (General Graph)</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Algorithm Steps (using a Queue)</h4>" +
                          "<ol>" +
                          "<li><b>Initialize:</b> Add a vertex to queue.</li>" +
                          "<li>Visit vertex at beginning of queue.</li>" +
                          "<li>Add adjacent <b>unvisited</b> vertices to queue.</li>" +
                          "<li>Repeat steps 1 and 2 until all vertices are visited.</li>" +
                          "</ol>"
                },
                {
                    type: "html-content",
                    text: `
<div class="interactive-example">
    <h4><a href="bfs_graph_example.html" target="_blank">Interactive BFS (General Graph) Demonstration</a></h4>
    <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin: 20px 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <iframe src="bfs_graph_example.html" 
                width="100%" 
                height="1000"
                style="border: none; display: block;"
                title="BFS Algorithm Interactive Visualization (General Graph)">
        </iframe>
    </div>
    <div style="text-align: center; margin-top: 10px;">
        <small style="color: #666;">
            💡 <strong>Tip:</strong> Note how the algorithm visits nodes in 'layers' based on distance from the start node (B).
        </small>
    </div>
</div>
    `
                },
                {
                    type: "key-concept",
                    text: "<h3>BFS: A Closer Look at Layers</h3>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/bfs_graph_final.png' alt='Final BFS layers' style='width: 50%;'><p class='image-caption'>Final visited graph. Visited: {B, F, A, G, C, E, H, D}</p></div>"
                },
                {
                    type: "math-example",
                    text: "<h4>Layers from Start Node (B)</h4>" +
                          "<p>Each set of colored nodes are the same number of steps away from the initial node B:</p>" +
                          "<ul>" +
                          "<li style='color: #D9534F;'><b>Layer 0:</b> B</li>" +
                          "<li style='color: #428BCA;'><b>Layer 1:</b> A, F</li>" +
                          "<li style='color: #5CB85C;'><b>Layer 2:</b> E, C, G</li>" +
                          "<li style='color: #9B59B6;'><b>Layer 3:</b> D, H</li>" +
                          "</ul>" +
                          "<p><b>Key Insight:</b> This is how a breadth-first search works: searching layer by layer away from the initial (root) node.</p>"
                }
            ]
        },
        {
            title: "15. DFS Algorithm in Action (Rooted Tree)",
            id: "dfs-example-tree",
            audioFile: "audio/week9_part2_slide_15.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>DFS Algorithm (Rooted Tree)</h3>"
                },
                {
                    type: "paragraph",
                    text: "Depth-first search algorithm: Nodes are <em>stacked</em> (LIFO), not <em>queued</em> (FIFO)."
                },
                {
                    type: "math-example",
                    text: "<h4>Algorithm Steps (using a Stack)</h4>" +
                          "<ol>" +
                          "<li><b>Initialize:</b> Add a vertex to stack.</li>" +
                          "<li>Visit vertex at top of stack.</li>" +
                          "<li>Add an adjacent unvisited vertex to the stack.</li>" +
                          "<li>Repeat until there are no adjacent unvisited vertices.</li>" +
                          "<li>Remove vertices from stack (backtrack) until we get to a vertex with an adjacent unvisited vertex.</li>" +
                          "<li>Add the new vertex to the stack, and repeat from step 1.</li>" +
                          "<li>Repeat step 4 until stack is empty.</li>" +
                          "</ol>"
                },
                {
                    type: "html-content",
                    text: `
<div class="interactive-example">
    <h4><a href="dfs_tree_example.html" target="_blank">Interactive DFS (Tree) Demonstration</a></h4>
    <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin: 20px 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <iframe src="dfs_tree_example.html" 
                width="100%" 
                height="1000"
                style="border: none; display: block;"
                title="DFS Algorithm Interactive Visualization (Rooted Tree)">
        </iframe>
    </div>
    <div style="text-align: center; margin-top: 10px;">
        <small style="color: #666;">
            💡 <strong>Tip:</strong> Watch how the Stack grows as the algorithm goes 'deep' and shrinks as it 'backtracks'.
        </small>
    </div>
</div>
    `
                }
            ]
        },
        {
            title: "16. DFS Algorithm in Action (General Graph)",
            id: "dfs-example-graph",
            audioFile: "audio/week9_part2_slide_16.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>DFS Algorithm (General Graph)</h3>"
                },
                {
                    type: "paragraph",
                    text: "Depth-first search algorithm: Nodes are <em>stacked</em>, not <em>queued</em>."
                },
                {
                    type: "math-example",
                    text: "<h4>Algorithm Steps (using a Stack)</h4>" +
                          "<ol>" +
                          "<li><b>Initialize:</b> Add a vertex to stack.</li>" +
                          "<li>Visit vertex at top of stack.</li>" +
                          "<li>Add an adjacent unvisited vertex to the stack.</li>" +
                          "<li>Repeat steps 2, 3 until there are no adjacent unvisited vertices.</li>" +
                          "<li>Remove vertices from stack (backtrack) until we get to a vertex with an adjacent unvisited vertex.</li>" +
                          "<li>Add this vertex to the stack, and go back to step 1.</li>" +
                          "<li>Repeat step 4 until all vertices are visited and the stack is empty.</li>" +
                          "</ol>"
                },
                {
                    type: "html-content",
                    text: `
<div class="interactive-example">
    <h4><a href="dfs_graph_example.html" target="_blank">Interactive DFS (General Graph) Demonstration</a></h4>
    <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin: 20px 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <iframe src="dfs_graph_example.html" 
                width="100%" 
                height="1000"
                style="border: none; display: block;"
                title="DFS Algorithm Interactive Visualization (General Graph)">
        </iframe>
    </div>
    <div style="text-align: center; margin-top: 10px;">
        <small style="color: #666;">
            💡 <strong>Tip:</strong> The final visited order depends heavily on which adjacent node is chosen first.
        </small>
    </div>
</div>
    `
                }
            ]
        },
        
{
            title: "17. DFS: A Closer Look",
            id: "dfs-closer-look",
            audioFile: "audio/week9_part2_slide_17.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>DFS: A Closer Look</h3>"
                },
                {
                    type: "paragraph",
                    text: "A depth-first search works by systematically looking at <em>every possible path</em> from an initial (root) node, for as long as that path can go. It digs <b>deep</b>, not wide (unlike breadth-first searches)."
                },
                {
                    type: "html-content",
                    text: "<div class='multi-image-container'>" +
                          "<div class='image-column' style='display: grid; place-items: center;'>" +
                          "<img src='figures/dfs_path_1.png' alt='DFS Path 1' style='width: 50%;'>" +
                          "<p class='image-caption'>Path 1: A $\\to$ B $\\to$ E</p>" +
                          "</div>" +
                          "<div class='image-column' style='display: grid; place-items: center;'>" +
                          "<img src='figures/dfs_path_2.png' alt='DFS Path 2' style='width: 50%;'>" +
                          "<p class='image-caption'>Path 2: A $\\to$ B $\\to$ D $\\to$ F $\\to$ G$\\to$ C</p>" +
                          "</div>" +
                          "</div>"
                }
            ]
        },

        {
            title: "18. Real-World Applications",
            id: "real-world-applications",
            audioFile: "audio/week9_part2_slide_18.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Where These Algorithms Are Used</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>BFS Applications</h4>" +
                          "<ul>" +
                          "<li><b>Web Crawling:</b> Search engines discover pages layer by layer</li>" +
                          "<li><b>Social Networks:</b> Find shortest connection path between people</li>" +
                          "<li><b>Network Broadcasting:</b> Send data to all nodes with minimum hops</li>" +
                          "<li><b>GPS Navigation:</b> Find shortest route in unweighted graphs</li>" +
                          "</ul>"
                },
                {
                    type: "math-example",
                    text: "<h4>DFS Applications</h4>" +
                          "<ul>" +
                          "<li><b>Maze Solving:</b> Explore paths until finding exit</li>" +
                          "<li><b>Dependency Resolution:</b> Package managers resolve dependencies</li>" +
                          "<li><b>Cycle Detection:</b> Find cycles in directed graphs</li>" +
                          "<li><b>Topological Sorting:</b> Schedule tasks with dependencies</li>" +
                          "</ul>"
                }
            ]
        },
        {
            title: "19. Implementation Considerations & Pitfalls",
            id: "implementation-pitfalls",
            audioFile: "audio/week9_part2_slide_19.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Practical Implementation Tips</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Common Implementation Choices</h4>" +
                          "<ul>" +
                          "<li><b>DFS Recursive:</b> Simpler code but limited by stack size</li>" +
                          "<li><b>DFS Iterative:</b> More control, avoids stack overflow</li>" +
                          "<li><b>Visited Tracking:</b> Use sets for O(1) lookups</li>" +
                          "<li><b>Graph Representation:</b> Adjacency lists vs matrices</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Common Pitfalls to Avoid</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Implementation Mistakes</h4>" +
                          "<ul>" +
                          "<li><b>Forgetting visited set:</b> Infinite loops in cyclic graphs</li>" +
                          "<li><b>Wrong data structure:</b> Using stack for BFS or queue for DFS</li>" +
                          "<li><b>Order matters:</b> DFS visit order affects path found</li>" +
                          "<li><b>Memory leaks:</b> Not cleaning up data structures</li>" +
                          "</ul>"
                }
            ]
        },
        {
            title: "20. Summary and Key Takeaways",
            id: "summary-part2",
            audioFile: "audio/week9_part2_slide_20.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Summary: What We Learned in Part 2</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Graph Searching Strategies</h4>" +
                          "<ul>" +
                          "<li><b>Graph Traversal:</b> Systematically visiting each node in a graph exactly once.</li>" +
                          "<li><b>Tree Terminology:</b> Defined roots, parents, children, leaves, and binary trees.</li>" +
                          "</ul>"
                },
                {
                    type: "math-example",
                    text: "<h4>Breadth-First Search (BFS)</h4>" +
                          "<ul>" +
                          "<li><b>Strategy:</b> Explores 'wide' by visiting all neighbors at the current level before moving deeper.</li>" +
                          "<li><b>Data Structure:</b> Implemented using a <b>Queue</b> (First-In, First-Out).</li>" +
                          "<li><b>Result:</b> Finds the shortest path in terms of number of edges.</li>" +
                          "<li><b>Complexity:</b> $O(V + E)$ time and $O(V)$ space</li>" +
                          "</ul>"
                },
                {
                    type: "math-example",
                    text: "<h4>Depth-First Search (DFS)</h4>" +
                          "<ul>" +
                          "<li><b>Strategy:</b> Explores 'deep' by following a single path as far as possible before backtracking.</li>" +
                          "<li><b>Data Structure:</b> Implemented using a <b>Stack</b> (Last-In, First-Out).</li>" +
                          "<li><b>Variants:</b> Preorder (Root, Left, Right), Inorder (Left, Root, Right), and Postorder (Left, Right, Root).</li>" +
                          "<li><b>Complexity:</b> $O(V + E)$ time and $O(V)$ space</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>When to Use Each Search</h3>"
                },
                {
                    type: "math-example",
                    text: "<div class='comparison-table'>" +
                          "<table border='1'>" +
                          "<tr><th>Algorithm</th><th>Use When...</th><th>Data Structure</th><th>Key Feature</th></tr>" +
                          "<tr><td><b>BFS</b></td><td>Finding the shortest path (in edges)</td><td>Queue (FIFO)</td><td>Explores level by level</td></tr>" +
                          "<tr><td><b>DFS</b></td><td>Checking connectivity, finding a path, or traversing a maze</td><td>Stack (LIFO)</td><td>Explores one path fully</td></tr>" +
                          "</table></div>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Looking Ahead</h3>"
                },
                {
                    type: "paragraph",
                    text: "Next week, we will continue our exploration of binary trees, looking into their use in sorting algorithms and data encoding applications."
                }
            ]
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}
