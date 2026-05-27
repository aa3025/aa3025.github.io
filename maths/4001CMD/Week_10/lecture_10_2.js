/**
 * Data structure for Week 10 Lecture Notes - Huffman Encoding (Part 2)
 * Content based on the uploaded PDF slides for Week 10 Part 2
 */
const lectureData = {
    courseName: "4001CMD - Mathematics for Computing Professionals",
    lectureTitle: "Week 10: Sorting Algorithms and Huffman Encoding (Part 2): Huffman Encoding",
    
    sections: [
        {
            title: "1. Introduction to Encoding",
            id: "intro-encoding",
            audioFile: "audio/week10_part2_slide_01.wav",
            content: [
                {
                    type: "paragraph",
                    text: "Encoding converts data into a new format for efficient storage and transmission. Unlike encryption which hides meaning, encoding transforms data according to specific rules. This process is fundamental in computing for data compression, transmission efficiency, and information representation."
                },
                {
                    type: "key-concept",
                    text: "<h3>Encoding vs. Encryption</h3>"
                },
                {
                    type: "math-example",
                    text: "<ul>" +
                          "<li><b>Encrypt:</b> From Greek 'kryptos' - to hide meaning (security-focused)</li>" +
                          "<li><b>Encode:</b> From Latin 'codex' - to convert to new symbols (efficiency-focused)</li>" +
                          "<li><b>Key Difference:</b> Encryption requires a key for decoding, while encoding follows predetermined rules</li>" +
                          "</ul>"
                },
                {
                    type: "math-example",
                    text: "<h4>Real-world Examples</h4>" +
                          "<ul>" +
                          "<li><b>DNA:</b> 4-bit code (A,C,T,G) for building proteins - nature's encoding system</li>" +
                          "<li><b>Morse Code:</b> Dots and dashes for letters - variable-length encoding</li>" +
                          "<li><b>Binary:</b> 0s and 1s for digital data - fundamental computing encoding</li>" +
                          "<li><b>ASCII/Unicode:</b> Character encoding standards for text representation</li>" +
                          "</ul>"
                }
            ]
        },
        {
            title: "2. Formal Definitions",
            id: "formal-definitions",
            audioFile: "audio/week10_part2_slide_02.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Mathematical Foundation</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Key Concepts</h4>" +
                          "<ul>" +
                          "<li><b>Alphabet (A):</b> Finite set of symbols {0,1}, {A,C,T,G}, etc.</li>" +
                          "<li><b>String/Word:</b> Sequence of symbols from alphabet</li>" +
                          "<li><b>Empty String (ε):</b> String with no symbols, length 0</li>" +
                          "<li><b>Kleene Star (A*):</b> Set of all finite strings over A, including ε</li>" +
                          "<li><b>Language:</b> Any subset L ⊆ A* of strings</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Formal Encoding Definition</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>An <b>encoding</b> is an injective function:</p>" +
                          "<p>$$c: X \\to A^*$$</p>" +
                          "<p>where X is the set of messages and A is the alphabet</p>" +
                          "<p><b>Properties:</b> Injective (one-to-one) ensures unique decodability</p>"
                },
                {
                    type: "math-example",
                    text: "<h4>Examples</h4>" +
                          "<ul>" +
                          "<li><b>Binary:</b> c: ℕ → {0,1}*, c(4) = 100</li>" +
                          "<li><b>Unary:</b> c: ℕ → {1}*, c(4) = 1111</li>" +
                          "<li><b>Graph Encoding:</b> Adjacency matrices to strings</li>" +
                          "<li><b>Morse Code:</b> c: {A,B,...,Z} → {•,-,$}*</li>" +
                          "</ul>"
                }
            ]
        },
        {
            title: "3. Fixed-Length vs Variable-Length Codes",
            id: "code-types",
            audioFile: "audio/week10_part2_slide_03.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Fixed-Length Codes</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Characteristics</h4>" +
                          "<ul>" +
                          "<li>Every symbol encoded with same number of bits</li>" +
                          "<li><b>Examples:</b> ASCII (7/8 bits), RNA codons (3 nucleotides), Binary-coded decimal</li>" +
                          "<li><b>Advantage:</b> Easy to decode, predictable length</li>" +
                          "<li><b>Disadvantage:</b> Inefficient for common symbols, wasted space</li>" +
                          "<li><b>Mathematical Property:</b> All codewords have equal length ℓ</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Variable-Length Codes</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Characteristics</h4>" +
                          "<ul>" +
                          "<li>Common symbols get shorter codes, rare symbols get longer codes</li>" +
                          "<li><b>Examples:</b> Morse code, Huffman coding, Lempel-Ziv-Welch</li>" +
                          "<li><b>Advantage:</b> More space-efficient, adapts to symbol frequency</li>" +
                          "<li><b>Disadvantage:</b> Can be ambiguous, requires careful design</li>" +
                          "<li><b>Goal:</b> Minimize expected code length</li>" +
                          "</ul>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/morse_code_chart.png' alt='Morse Code Chart' style='width: 60%;'><p class='image-caption'>Morse code: Common letters (E, T) have shorter codes, demonstrating frequency-based encoding</p></div>"
                }
            ]
        },
        {
            title: "4. The Ambiguity Problem",
            id: "ambiguity-problem",
            audioFile: "audio/week10_part2_slide_04.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Code Ambiguity Example</h3>"
                },
                {
                    type: "paragraph",
                    text: "Consider encoding letters with probabilities. A poorly designed variable-length code can create decoding ambiguity:"
                },
                {
                    type: "math-example",
                    text: "<table border='1' style='margin: 0 auto;'>" +
                          "<tr><th>Letter</th><th>a</th><th>d</th><th>e</th><th>t</th></tr>" +
                          "<tr><td>Probability</td><td>0.1</td><td>0.1</td><td>0.5</td><td>0.3</td></tr>" +
                          "</table>"
                },
                {
                    type: "math-example",
                    text: "<h4>Bad Encoding Example</h4>" +
                          "<p><b>Problematic Code:</b> e: 0, t: 1, a: 00, d: 01</p>" +
                          "<p>Message '010010' could be decoded as:</p>" +
                          "<ul>" +
                          "<li>0 1 0 0 1 0 → e t e t e? (Invalid - last symbol incomplete)</li>" +
                          "<li>0 1 00 1 0 → e t a t e? (Invalid - last symbol incomplete)</li>" +
                          "<li>01 00 1 0 → d a t e ✓ (Valid decoding)</li>" +
                          "<li>0 1 0 01 0 → e t e d e? (Multiple valid interpretations!)</li>" +
                          "</ul>" +
                          "<p><b>Problem:</b> Multiple valid decodings due to prefix violation!</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Average Length Calculation</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>Expected code length formula:</p>" +
                          "<p>$$\\bar{\\ell} = \\sum P(\\text{symbol}) \\times |\\text{code}(\\text{symbol})|$$</p>" +
                          "<p>For problematic encoding: 0.1×2 + 0.1×2 + 0.5×1 + 0.3×1 = 1.7</p>" +
                          "<p><b>Observation:</b> Efficient (low average length) but ambiguous - unacceptable for reliable communication!</p>"
                }
            ]
        },
        {
            title: "5. Prefix Codes and Instantaneous Decoding",
            id: "prefix-codes",
            audioFile: "audio/week10_part2_slide_05.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Prefix Codes</h3>"
                },
                {
                    type: "paragraph",
                    text: "A prefix code (or prefix-free code) is a code system where no codeword is a prefix of another codeword. This property guarantees instantaneous decoding without look-ahead."
                },
                {
                    type: "math-example",
                    text: "<h4>Prefix Code Example</h4>" +
                          "<p><b>Valid Prefix Code:</b> e: 00, a: 01, d: 10, t: 11</p>" +
                          "<p><b>Properties:</b></p>" +
                          "<ul>" +
                          "<li>No codeword starts with another codeword</li>" +
                          "<li>Can decode as you receive bits - no need to buffer</li>" +
                          "<li>Immediate recognition of symbol boundaries</li>" +
                          "<li>Guarantees unique decodability</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Tree Representation</h3>"
                },
                {
                    type: "paragraph",
                    text: "Prefix codes can be represented as binary trees where all symbols are at leaves. This tree structure naturally enforces the prefix-free property."
                },
                {
                    type: "html-content",
                    text: "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/prefix_code_tree.png' alt='Prefix Code Tree' style='width: 50%;'><p class='image-caption'>Binary tree representation of prefix code: symbols only at leaves ensures prefix-free property</p></div>"
                },
                {
                    type: "math-example",
                    text: "<h4>Key Insight</h4>" +
                          "<p>For instantaneous decoding, symbols <b>must be at leaves</b> and the tree must be <b>full</b> (every non-leaf node has exactly two children).</p>" +
                          "<p><b>Tree Properties:</b></p>" +
                          "<ul>" +
                          "<li>Leaves = symbols to encode</li>" +
                          "<li>Internal nodes = decision points</li>" +
                          "<li>Path from root to leaf = codeword</li>" +
                          "</ul>"
                }
            ]
        },
        {
            title: "6. Kraft-McMillan Inequality",
            id: "kraft-mcmillan",
            audioFile: "audio/week10_part2_slide_06.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Fundamental Theorem</h3>"
                },
                {
                    type: "math-example",
                    text: "<p><b>Kraft-McMillan Inequality:</b> For codeword lengths l₁, l₂, ..., lₙ:</p>" +
                          "<p>$$\\sum_{i=1}^n 2^{-l_i} \\leq 1$$</p>" +
                          "<p>This inequality is <b>necessary and sufficient</b> for the existence of a prefix code with these lengths.</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Important Implication</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>If there exists a uniquely decodable code with lengths l₁,...,lₙ, then there exists an instantaneous (prefix) code with the same lengths.</p>" +
                          "<p><b>Conclusion:</b> We never need to sacrifice instantaneous decoding for efficiency! Theoretically, we can always achieve both.</p>"
                },
                {
                    type: "math-example",
                    text: "<h4>Example Verification</h4>" +
                          "<p>For lengths 1, 2, 3, 3:</p>" +
                          "<p>$$2^{-1} + 2^{-2} + 2^{-3} + 2^{-3} = 0.5 + 0.25 + 0.125 + 0.125 = 1$$</p>" +
                          "<p>✓ Satisfies Kraft-McMillan - prefix code exists with these lengths</p>" +
                          "<p><b>Counterexample:</b> Lengths 1, 1, 2: 0.5 + 0.5 + 0.25 = 1.25 > 1 → No prefix code possible</p>"
                }
            ]
        },
        {
            title: "7. Introduction to Huffman Coding",
            id: "huffman-intro",
            audioFile: "audio/week10_part2_slide_07.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Huffman Coding</h3>"
                },
                {
                    type: "paragraph",
                    text: "Huffman coding is an optimal prefix coding algorithm that minimizes the expected code length. Developed by David Huffman in 1952 as a graduate student, it remains one of the most important compression algorithms."
                },
                {
                    type: "math-example",
                    text: "<h4>Key Principle</h4>" +
                          "<ul>" +
                          "<li>High-frequency symbols get shorter codes</li>" +
                          "<li>Low-frequency symbols get longer codes</li>" +
                          "<li>Produces optimal prefix code for given probabilities</li>" +
                          "<li>Uses greedy algorithm approach - always makes locally optimal choice</li>" +
                          "<li>Guarantees minimal expected code length</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Huffman Tree Properties</h3>"
                },
                {
                    type: "math-example",
                    text: "<ul>" +
                          "<li><b>Full binary tree:</b> Every internal node has exactly 2 children</li>" +
                          "<li><b>Leaves are symbols:</b> All data at leaves for prefix property</li>" +
                          "<li><b>Optimal structure:</b> Minimizes weighted path length ∑pᵢlᵢ</li>" +
                          "<li><b>Greedy construction:</b> Always merge smallest frequencies first</li>" +
                          "<li><b>Complete representation:</b> Tree fully defines the code</li>" +
                          "</ul>"
                }
            ]
        },
        {
            title: "8. Huffman Algorithm Steps",
            id: "huffman-algorithm",
            audioFile: "audio/week10_part2_slide_08.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Huffman Coding Algorithm</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Step-by-Step Process</h4>" +
                          "<ol>" +
                          "<li>Create leaf node for each symbol with its frequency/probability</li>" +
                          "<li>While more than one node in priority queue:" +
                          "<ol type='a'>" +
                          "<li>Remove two nodes with smallest frequencies</li>" +
                          "<li>Create new internal node with these as children</li>" +
                          "<li>Frequency = sum of children's frequencies</li>" +
                          "<li>Add new node back to queue</li>" +
                          "</ol>" +
                          "</li>" +
                          "<li>Remaining node is root of Huffman tree</li>" +
                          "<li>Assign codes: left branch=0, right branch=1 (convention)</li>" +
                          "<li>Traverse from root to leaves to get codewords</li>" +
                          "</ol>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Python Implementation</h3>"
                },
                {
                    type: "math-example",
                    text: "<pre style='font-family: monospace; background: #f4f4f4; padding: 15px; border-radius: 5px; line-height: 1.4; white-space: pre-wrap; color: #333;'>import heapq\n\ndef huffman_coding(frequencies):\n    \"\"\"Build Huffman tree and return symbol-to-code mapping\"\"\"\n    # Create min-heap with [frequency, [symbol, code]] pairs\n    heap = [[weight, [symbol, \"\"]] for symbol, weight in frequencies.items()]\n    heapq.heapify(heap)\n    \n    # Build tree by repeatedly combining two smallest nodes\n    while len(heap) > 1:\n        # Pop two smallest frequency nodes\n        lo = heapq.heappop(heap)\n        hi = heapq.heappop(heap)\n        \n        # Prefix '0' to all codes in left subtree\n        for pair in lo[1:]:\n            pair[1] = '0' + pair[1]\n        # Prefix '1' to all codes in right subtree  \n        for pair in hi[1:]:\n            pair[1] = '1' + pair[1]\n        \n        # Push merged node back to heap\n        heapq.heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])\n    \n    # Return sorted list of [symbol, code] pairs\n    return sorted(heapq.heappop(heap)[1:], key=lambda p: (len(p[-1]), p))</pre>"
                }
            ]
        },
        

        {
            title: "9. Huffman Coding Example",
            id: "huffman-example",
            audioFile: "audio/week10_part2_slide_09.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Detailed Example</h3>"
                },
                {
                    type: "paragraph",
                    text: "Let's build a Huffman code step by step for letters with given probabilities:"
                },
                {
                    type: "math-example",
                    text: "<table border='1' style='margin: 0 auto; border-collapse: collapse;'>" +
                          "<tr><th style='padding: 8px;'>Letter</th><th style='padding: 8px;'>a</th><th style='padding: 8px;'>d</th><th style='padding: 8px;'>e</th><th style='padding: 8px;'>t</th></tr>" +
                          "<tr><td style='padding: 8px;'><b>Probability</b></td><td style='padding: 8px;'>0.1</td><td style='padding: 8px;'>0.1</td><td style='padding: 8px;'>0.5</td><td style='padding: 8px;'>0.3</td></tr>" +
                          "<tr><td style='padding: 8px;'><b>Frequency</b></td><td style='padding: 8px;'>10%</td><td style='padding: 8px;'>10%</td><td style='padding: 8px;'>50%</td><td style='padding: 8px;'>30%</td></tr>" +
                          "</table>"
                },
                {
                    type: "math-example",
                    text: "<h4>Step-by-Step Tree Construction</h4>" +
                          "<pre class='pseudocode'>" +
                          "Step 1: Initial nodes (sorted by frequency)\n" +
                          "a:0.1  d:0.1  t:0.3  e:0.5\n" +
                          "   ↑     ↑\n" +
                          " smallest two\n" +
                          "\n" +
                          "Step 2: Merge a + d → Node1(0.2)\n" +
                          "Node1(0.2)  t:0.3  e:0.5\n" +
                          "    ↑        ↑\n" +
                          " smallest two\n" +
                          "\n" +
                          "Step 3: Merge Node1 + t → Node2(0.5)\n" +
                          "Node2(0.5)  e:0.5\n" +
                          "    ↑        ↑\n" +
                          " smallest two\n" +
                          "\n" +
                          "Step 4: Merge Node2 + e → Root(1.0)\n" +
                          "Root(1.0)\n" +
                          "</pre>"
                },
                {
                    type: "math-example",
                    text: "<h4>Final Tree Structure and Navigation</h4>" +
                          "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/huffman_tree.png' alt='Huffman Tree Structure' style='width: 30%;'><p class='image-caption'>Huffman tree structure showing probabilities and symbol placement</p></div>" +
                          "<p><b>Tree Construction Process:</b></p>" +
                          "<ul>" +
                          "<li><b>Step 1:</b> Start with leaf nodes for each symbol: a(0.1), d(0.1), t(0.3), e(0.5)</li>" +
                          "<li><b>Step 2:</b> Merge two smallest (a and d) → Node1 with combined probability 0.2</li>" +
                          "<li><b>Step 3:</b> Merge next smallest (Node1 and t) → Node2 with combined probability 0.5</li>" +
                          "<li><b>Step 4:</b> Merge remaining (Node2 and e) → Root with probability 1.0</li>" +
                          "</ul>" +
                          "<p><b>Navigating the Tree for Encoding:</b></p>" +
                          "<ul>" +
                          "<li>Start at root, follow path to target symbol</li>" +
                          "<li>Record 0 for left branches, 1 for right branches</li>" +
                          "<li><b>Example:</b> To encode 'a': Root→0→Node2→0→Node1→0→a = '000'</li>" +
                          "<li><b>Example:</b> To encode 'e': Root→1→e = '1'</li>" +
                          "</ul>" +
                          "<p><b>Navigating for Decoding:</b></p>" +
                          "<ul>" +
                          "<li>Start at root, read bits one by one</li>" +
                          "<li>Follow 0 to left child, 1 to right child</li>" +
                          "<li>When reaching a leaf, output that symbol and return to root</li>" +
                          "<li><b>Example:</b> Decode '01001': 0→Node2→1→t (output 't'), 0→Node2→0→Node1→1→d (output 'd') = 'td'</li>" +
                          "</ul>"
                },
                {
                    type: "math-example",
                    text: "<h4>Resulting Huffman Codes</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse;'>" +
                          "<tr><th style='padding: 8px;'>Symbol</th><th style='padding: 8px;'>Code</th><th style='padding: 8px;'>Length</th><th style='padding: 8px;'>Probability</th><th style='padding: 8px;'>Contribution</th></tr>" +
                          "<tr><td style='padding: 8px;'>e</td><td style='padding: 8px;'>1</td><td style='padding: 8px;'>1</td><td style='padding: 8px;'>0.5</td><td style='padding: 8px;'>0.5 × 1 = 0.5</td></tr>" +
                          "<tr><td style='padding: 8px;'>t</td><td style='padding: 8px;'>01</td><td style='padding: 8px;'>2</td><td style='padding: 8px;'>0.3</td><td style='padding: 8px;'>0.3 × 2 = 0.6</td></tr>" +
                          "<tr><td style='padding: 8px;'>a</td><td style='padding: 8px;'>000</td><td style='padding: 8px;'>3</td><td style='padding: 8px;'>0.1</td><td style='padding: 8px;'>0.1 × 3 = 0.3</td></tr>" +
                          "<tr><td style='padding: 8px;'>d</td><td style='padding: 8px;'>001</td><td style='padding: 8px;'>3</td><td style='padding: 8px;'>0.1</td><td style='padding: 8px;'>0.1 × 3 = 0.3</td></tr>" +
                          "<tr><td style='padding: 8px;'><b>Total</b></td><td style='padding: 8px;'></td><td style='padding: 8px;'></td><td style='padding: 8px;'>1.0</td><td style='padding: 8px;'><b>1.7 bits/symbol</b></td></tr>" +
                          "</table>"
                },
                {
                    type: "math-example",
                    text: "<h4>Average Length Calculation</h4>" +
                          "<p>$$\\bar{\\ell} = (0.5 \\times 1) + (0.3 \\times 2) + (0.1 \\times 3) + (0.1 \\times 3) = 1.7$$ bits/symbol</p>" +
                          "<p><b>Efficiency:</b> This is optimal - no other prefix code can achieve lower expected length for these probabilities.</p>" +
                          "<h4>Information Theory: Entropy</h4>" +
                          "<p><b>Shannon Entropy Formula:</b></p>" +
                          "<p>$$H(X) = -\\sum_{i=1}^{n} p_i \\log_2 p_i$$</p>" +
                          "<p><b>Calculation for our example:</b></p>" +
                          "<p>$$H = -(0.5 \\log_2 0.5 + 0.3 \\log_2 0.3 + 0.1 \\log_2 0.1 + 0.1 \\log_2 0.1)$$</p>" +
                          "<p>$$H = -(0.5 \\times (-1) + 0.3 \\times (-1.737) + 0.1 \\times (-3.322) + 0.1 \\times (-3.322))$$</p>" +
                          "<p>$$H = -(-0.5 - 0.521 - 0.332 - 0.332) = 1.685$$ bits/symbol</p>" +
                          "<p><b>Interpretation:</b></p>" +
                          "<ul>" +
                          "<li><b>Entropy (1.685 bits):</b> Theoretical minimum average bits needed to represent each symbol</li>" +
                          "<li><b>Huffman Code (1.7 bits):</b> Actual average bits used by our optimal code</li>" +
                          "<li><b>Efficiency:</b> Huffman code achieves 1.7/1.685 ≈ 99.1% of theoretical limit</li>" +
                          "</ul>" +
                          "<p><b>Key Insight:</b> Entropy represents the fundamental information content, while Huffman coding provides a practical implementation that approaches this theoretical limit.</p>"
                }
            ]
        },

{
            title: "10. Optimality Proof",
            id: "optimality-proof",
            audioFile: "audio/week10_part2_slide_10.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Why Huffman Coding is Optimal</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Key Observations</h4>" +
                          "<ul>" +
                          "<li><b>Greedy Choice Property:</b> Always merging smallest frequencies is optimal</li>" +
                          "<li><b>Optimal Substructure:</b> Optimal solution contains optimal solutions to subproblems</li>" +
                          "<li><b>Two Lowest Frequencies:</b> Must be siblings in optimal tree (deepest leaves)</li>" +
                          "<li><b>Exchange Argument:</b> Any optimal code can be transformed to Huffman code without increasing cost</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Formal Proof Sketch</h3>"
                },
                {
                    type: "math-example",
                    text: "<ol>" +
                          "<li>In any optimal prefix code, the two least frequent symbols have the longest codewords</li>" +
                          "<li>These two symbols are siblings in the optimal tree (can be swapped if not)</li>" +
                          "<li>Merging them and solving the smaller problem preserves optimality</li>" +
                          "<li>By induction, Huffman algorithm produces optimal code</li>" +
                          "<li>Base case: Trivial for 2 symbols</li>" +
                          "<li>Inductive step: Assuming optimal for n-1 symbols, proves for n symbols</li>" +
                          "</ol>"
                },
                {
                    type: "math-example",
                    text: "<h4>Expected Length</h4>" +
                          "<p>For Huffman code with probabilities pᵢ and lengths lᵢ:</p>" +
                          "<p>$$L = \\sum p_i l_i$$ is minimized</p>" +
                          "<p>No other prefix code can have smaller expected length</p>" +
                          "<p><b>Information Theory:</b> Huffman code approaches Shannon entropy limit</p>"
                }
            ]
        },
        {
            title: "11. Frequency vs Probability",
            id: "frequency-vs-probability",
            audioFile: "audio/week10_part2_slide_11.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Working with Frequencies</h3>"
                },
                {
                    type: "paragraph",
                    text: "Huffman coding can work with either probabilities or raw frequencies. The algorithm and optimality remain the same since frequencies can be normalized to probabilities."
                },
                {
                    type: "math-example",
                    text: "<h4>Example with Frequencies</h4>" +
                          "<p>Letters: a:7, e:17, i:5, n:3, o:6, t:9</p>" +
                          "<p>Total: 47 characters</p>" +
                          "<h4>Huffman Tree Construction</h4>" +
                          "<p>1. Merge n(3) + i(5) → 8</p>" +
                          "<p>2. Merge o(6) + a(7) → 13</p>" +
                          "<p>3. Merge t(9) + [n,i](8) → 17</p>" +
                          "<p>4. Merge [o,a](13) + [t,n,i](17) → 30</p>" +
                          "<p>5. Merge e(17) + [o,a,t,n,i](30) → 47</p>"
                },
                {
                    type: "math-example",
                    text: "<h4>Resulting Codes</h4>" +
                          "<p>e: 0, t: 111, o: 100, a: 101, i: 1101, n: 1100</p>" +
                          "<p><b>Average length:</b> (17×1 + 9×3 + 6×3 + 7×3 + 5×4 + 3×4)/47 ≈ 2.45 bits/character</p>" +
                          "<p><b>Normalized:</b> Same as using probabilities (7/47, 17/47, etc.)</p>"
                }
            ]
        },
          {
            title: "12. Implementation Variations",
            id: "implementation-variations",
            audioFile: "audio/week10_part2_slide_12.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Tree Construction Choices</h3>"
                },
                {
                    type: "paragraph",
                    text: "Small variations in implementation can produce different but equally optimal Huffman codes. All valid Huffman codes for the same frequencies have the same expected length."
                },
                {
                    type: "math-example",
                    text: "<h4>Branch Assignment</h4>" +
                          "<ul>" +
                          "<li>Left branch = 0, Right branch = 1 (conventional)</li>" +
                          "<li>Or vice versa: Left = 1, Right = 0 (equally valid)</li>" +
                          "<li>Same code lengths, different actual codes</li>" +
                          "<li>All produce identical compression performance</li>" +
                          "</ul>"
                },
                {
                    type: "math-example",
                    text: "<h4>Equal Frequency Handling</h4>" +
                          "<ul>" +
                          "<li>When frequencies are equal, choice of which to merge first is arbitrary</li>" +
                          "<li>All choices produce optimal codes with same expected length</li>" +
                          "<li>Convention: put smaller probability on left, or alphabetical order</li>" +
                          "<li>Different choices lead to different tree shapes but same efficiency</li>" +
                          "</ul>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/two_huffman_trees.png' alt='Two Different Huffman Trees' style='width: 60%;'><p class='image-caption'>Two different but equally optimal Huffman trees for the same symbol probabilities</p></div>"
                }
            ]
        },,
        {
            title: "13. Real-World Applications",
            id: "real-world-applications",
            audioFile: "audio/week10_part2_slide_13.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Where Huffman Coding is Used</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Data Compression</h4>" +
                          "<ul>" +
                          "<li><b>ZIP/GZIP:</b> DEFLATE algorithm uses Huffman coding for literal/length and distance codes</li>" +
                          "<li><b>JPEG:</b> Huffman codes for AC/DC coefficients in lossy compression</li>" +
                          "<li><b>MP3:</b> Huffman coding of frequency data after MDCT transform</li>" +
                          "<li><b>PNG:</b> Optional Huffman compression in DEFLATE format</li>" +
                          "<li><b>PDF:</b> Huffman coding in various filters</li>" +
                          "</ul>"
                },
                {
                    type: "math-example",
                    text: "<h4>Communication Systems</h4>" +
                          "<ul>" +
                          "<li><b>Fax Machines:</b> Modified Huffman coding for black/white run lengths</li>" +
                          "<li><b>Text Compression:</b> Efficient storage of documents and databases</li>" +
                          "<li><b>Database Systems:</b> Column compression in modern databases</li>" +
                          "<li><b>Network Protocols:</b> Header compression in various protocols</li>" +
                          "</ul>"
                },
                {
                    type: "html-content",
                    text: "<div class='image-container' style='display: grid; place-items: center;'><img src='figures/huffman_applications.png' alt='Huffman Applications' style='width: 60%;'><p class='image-caption'>Huffman coding in various file formats and protocols - ubiquitous in modern computing</p></div>"
                }
            ]
        },
        {
            title: "14. Limitations and Extensions",
            id: "limitations-extensions",
            audioFile: "audio/week10_part2_slide_14.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Huffman Coding Limitations</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Key Drawbacks</h4>" +
                          "<ul>" +
                          "<li><b>Static Dictionary:</b> Requires known symbol frequencies in advance</li>" +
                          "<li><b>Not Adaptive:</b> Doesn't adapt to changing data statistics</li>" +
                          "<li><b>Error Sensitivity:</b> Single bit error can corrupt entire message</li>" +
                          "<li><b>Overhead:</b> Need to transmit code dictionary with compressed data</li>" +
                          "<li><b>Integer Codewords:</b> Limited to integer bit lengths, can't achieve entropy exactly</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Extensions and Improvements</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Adaptive Huffman Coding</h4>" +
                          "<ul>" +
                          "<li>Builds tree dynamically as data is processed</li>" +
                          "<li>No need for pre-known frequencies</li>" +
                          "<li>More complex but more flexible</li>" +
                          "<li>Used in some real-time compression systems</li>" +
                          "</ul>" +
                          "<h4>Arithmetic Coding</h4>" +
                          "<ul>" +
                          "<li>Can achieve better compression than Huffman</li>" +
                          "<li>Encodes entire message as single number between 0 and 1</li>" +
                          "<li>More computationally intensive</li>" +
                          "<li>Can achieve entropy limit more closely</li>" +
                          "</ul>" +
                          "<h4>Lempel-Ziv variants (LZ77, LZ78)</h4>" +
                          "<ul>" +
                          "<li>Dictionary-based compression</li>" +
                          "<li>Often combined with Huffman coding in practice</li>" +
                          "</ul>"
                }
            ]
        },
        {
            title: "15. Heaps vs Huffman Trees",
            id: "heaps-vs-huffman",
            audioFile: "audio/week10_part2_slide_15.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Comparing Tree Applications</h3>"
                },
                {
                    type: "math-example",
                    text: "<div class='comparison-table'>" +
                          "<table border='1'>" +
                          "<tr><th>Aspect</th><th>Heaps</th><th>Huffman Trees</th></tr>" +
                          "<tr><td><b>Purpose</b></td><td>Data organization for sorting and priority queues</td><td>Decision procedure for encoding/decoding</td></tr>" +
                          "<tr><td><b>Structure</b></td><td>Complete binary tree</td><td>Full binary tree</td></tr>" +
                          "<tr><td><b>Data Location</b></td><td>All nodes contain data</td><td>Data only at leaves</td></tr>" +
                          "<tr><td><b>Ordering</b></td><td>Heap property (parent ≥ children for max-heap)</td><td>Frequency-based structure</td></tr>" +
                          "<tr><td><b>Construction</b></td><td>Bottom-up heapify</td><td>Greedy merging of smallest frequencies</td></tr>" +
                          "<tr><td><b>Application</b></td><td>Heap Sort, priority queues</td><td>Data compression, encoding</td></tr>" +
                          "<tr><td><b>Key Operation</b></td><td>Extract-min/max, insert</td><td>Encode, decode</td></tr>" +
                          "</table></div>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Key Insights</h3>"
                },
                {
                    type: "math-example",
                    text: "<ul>" +
                          "<li>Both use binary trees but for different purposes and with different constraints</li>" +
                          "<li>Heap Sort organizes data for efficient retrieval and sorting</li>" +
                          "<li>Huffman coding creates optimal prefix codes for compression</li>" +
                          "<li>Both demonstrate the power of tree structures in algorithms</li>" +
                          "<li>Huffman construction uses a priority queue (often implemented as a heap)</li>" +
                          "</ul>"
                }
            ]
        },
        {
            title: "16. Part 2 Summary",
            id: "summary-part2",
            audioFile: "audio/week10_part2_slide_16.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Key Takeaways</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Encoding Fundamentals</h4>" +
                          "<ul>" +
                          "<li><b>Encoding vs Encryption:</b> Efficiency vs security purposes</li>" +
                          "<li><b>Fixed vs Variable Length:</b> Simplicity vs efficiency trade-off</li>" +
                          "<li><b>Prefix Codes:</b> Enable instantaneous decoding without ambiguity</li>" +
                          "<li><b>Kraft-McMillan:</b> Fundamental limit for prefix codes existence</li>" +
                          "<li><b>Tree Representation:</b> Natural way to visualize and construct prefix codes</li>" +
                          "</ul>"
                },
                {
                    type: "math-example",
                    text: "<h4>Huffman Coding</h4>" +
                          "<ul>" +
                          "<li><b>Optimal Prefix Code:</b> Minimizes expected code length</li>" +
                          "<li><b>Greedy Algorithm:</b> Always merge smallest frequencies first</li>" +
                          "<li><b>Tree Construction:</b> Full binary tree with symbols at leaves</li>" +
                          "<li><b>Real Applications:</b> ZIP, JPEG, MP3 compression and many more</li>" +
                          "<li><b>Optimality Proof:</b> Based on greedy choice and optimal substructure</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Course Integration</h3>"
                },
                {
                    type: "paragraph",
                    text: "This lecture connects sorting algorithms (Part 1) with data compression (Part 2), showing how fundamental data structures like trees are versatile tools across different computing domains. Huffman coding demonstrates practical application of greedy algorithms and information theory."
                },
                {
                    type: "math-example",
                    text: "<h4>Looking Forward</h4>" +
                          "<p>Next, we'll explore error detection and correction codes - how to create codes that can automatically detect and fix transmission errors, building on the encoding foundations established here.</p>" +
                          "<p><b>Preview:</b> Parity bits, Hamming codes, Reed-Solomon codes for reliable data transmission.</p>"
                }
            ]
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}