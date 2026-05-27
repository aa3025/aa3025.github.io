// This file contains the complete question data structure (allQuizData)
// for a Multiple-Select Quiz on Lecture 10: Sorting Algorithms and Huffman Encoding.
const quizTitle = 'Lecture 10 Quiz: Sorting Algorithms and Huffman Encoding';
const allQuizData = [
    {
        id: 1,
        question: 'Which statements correctly describe <strong>Bubble Sort</strong>?<sup>1</sup>',
        options: [
            'It is generally faster than Quick Sort for large datasets.',
            'It repeatedly passes through the list, bubbling the largest element to the end.',
            'It has an average case time complexity of O(n log n).',
            'It is very simple to implement and requires little memory.',
            'It has a time complexity of O(n²) in all cases.',
            'It requires O(n) additional space for sorting.'
        ],
        correct: [1, 3, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Bubble sort is generally slower than Quick Sort.</li><li><b>B:</b> Correct. This describes the core mechanism of bubble sort.</li><li><b>C:</b> Incorrect. Bubble sort is always O(n²), not O(n log n).</li><li><b>D:</b> Correct. Simplicity and low memory usage are key advantages.</li><li><b>E:</b> Correct. Bubble sort always has O(n²) complexity regardless of input.</li><li><b>F:</b> Incorrect. Bubble sort requires only O(1) additional space.</li></ul>'
    },
    {
        id: 2,
        question: 'Which statements accurately describe <strong>Quick Sort</strong>?<sup>2</sup>',
        options: [
            'It guarantees O(n log n) performance for all inputs.',
            'It selects a pivot element and partitions the array around it.',
            'It always performs better than Heap Sort.',
            'Its worst-case time complexity is O(n²).',
            'It uses a divide-and-conquer strategy.',
            'Its average case time complexity is O(n log n).'
        ],
        correct: [1, 3, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Worst-case performance is O(n²).</li><li><b>B:</b> Correct. Partitioning around a pivot is the core operation.</li><li><b>C:</b> Incorrect. Heap Sort has guaranteed O(n log n) while Quick Sort can degrade.</li><li><b>D:</b> Correct. Worst case occurs with bad pivot selection.</li><li><b>E:</b> Correct. Quick sort divides the problem into smaller subproblems.</li><li><b>F:</b> Correct. Average case performance is efficient.</li></ul>'
    },
    {
        id: 3,
        question: 'Which statements correctly describe <strong>Heap Sort</strong>?<sup>3</sup>',
        options: [
            'It is not suitable for large datasets.',
            'It has guaranteed O(n log n) time complexity.',
            'It requires O(n) additional memory space.',
            'It is generally slower than Bubble Sort.',
            'It uses a binary heap data structure.',
            'It involves building a heap and repeatedly extracting the root.'
        ],
        correct: [1, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Heap sort works well for large datasets.</li><li><b>B:</b> Correct. Unlike Quick Sort, heap sort has guaranteed O(n log n) performance.</li><li><b>C:</b> Incorrect. Heap sort can be implemented in-place with O(1) additional space.</li><li><b>D:</b> Incorrect. Heap sort is generally much faster than bubble sort.</li><li><b>E:</b> Correct. Heap sort relies on the heap data structure.</li><li><b>F:</b> Correct. This is the core algorithm of heap sort.</li></ul>'
    },
    {
        id: 4,
        question: 'Which statements about <strong>binary trees</strong> are correct?<sup>4</sup>',
        options: [
            'A binary tree can have nodes with more than two children.',
            'A perfect binary tree is both full and complete.',
            'All complete binary trees are also perfect binary trees.',
            'A complete binary tree has every level filled except possibly the last.',
            'Any binary tree can be efficiently represented as an array.',
            'A full binary tree has each node with exactly zero or two children.'
        ],
        correct: [1, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. By definition, binary trees have at most two children per node.</li><li><b>B:</b> Correct. Perfect trees satisfy both conditions.</li><li><b>C:</b> Incorrect. Complete trees may not have all levels completely filled.</li><li><b>D:</b> Correct. This is the definition of a complete binary tree.</li><li><b>E:</b> Incorrect. Only complete binary trees can be efficiently represented as arrays.</li><li><b>F:</b> Correct. Full binary trees have this property.</li></ul>'
    },
    {
        id: 5,
        question: 'Which statements about <strong>heaps</strong> are correct?<sup>5</sup>',
        options: [
            'Extracting the minimum from a min-heap takes O(1) time.',
            'A max-heap has the largest element at the root.',
            'All heaps are balanced binary search trees.',
            'Building a heap from an array takes O(n log n) time.',
            'Heaps must be complete binary trees.',
            'A min-heap has the smallest element at the root.'
        ],
        correct: [1, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Extract-min takes O(log n) time due to heapify.</li><li><b>B:</b> Correct. Max-heap property ensures root is maximum.</li><li><b>C:</b> Incorrect. Heaps are not binary search trees.</li><li><b>D:</b> Incorrect. Building a heap can be done in O(n) time.</li><li><b>E:</b> Incorrect. Heaps are usually complete but not required to be.</li><li><b>F:</b> Correct. Min-heap property ensures root is minimum.</li></ul>'
    },
    {
        id: 6,
        question: 'Which statements about <strong>encoding and encryption</strong> are correct?<sup>6</sup>',
        options: [
            'Encryption is primarily used for compression.',
            'Morse code is an example of encoding.',
            'Encoding always requires a secret key.',
            'DNA represents biological encoding.',
            'All encoding schemes are also encryption methods.',
            'Encoding converts data into a different format using公开 rules.'
        ],
        correct: [1, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Encryption is for security, not compression.</li><li><b>B:</b> Correct. Morse code encodes letters as dots and dashes.</li><li><b>C:</b> Incorrect. Encoding does not require secret keys.</li><li><b>D:</b> Correct. DNA encodes genetic information.</li><li><b>E:</b> Incorrect. Encoding and encryption are distinct concepts.</li><li><b>F:</b> Correct. Encoding uses公开, standardized rules.</li></ul>'
    },
    {
        id: 7,
        question: 'Which statements about <strong>Huffman encoding</strong> are correct?<sup>7</sup>',
        options: [
            'It always produces fixed-length codes.',
            'More frequent symbols get shorter codes.',
            'The Huffman tree must be a complete binary tree.',
            'It uses a greedy algorithm approach.',
            'Huffman codes are not uniquely decodable.',
            'It produces an optimal prefix-free code.'
        ],
        correct: [1, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Huffman codes are variable-length.</li><li><b>B:</b> Correct. Frequency determines code length.</li><li><b>C:</b> Incorrect. Huffman trees are full but not necessarily complete.</li><li><b>D:</b> Correct. The algorithm makes locally optimal choices.</li><li><b>E:</b> Incorrect. Huffman codes are uniquely decodable.</li><li><b>F:</b> Correct. It produces the optimal prefix code for given frequencies.</li></ul>'
    },
    {
        id: 8,
        question: 'Which statements about <strong>prefix codes</strong> are correct?<sup>8</sup>',
        options: [
            'Prefix codes require more storage than non-prefix codes.',
            'Prefix codes are uniquely decodable.',
            'Morse code is a prefix code.',
            'Fixed-length codes are always prefix codes.',
            'All prefix codes have the same average length for given frequencies.',
            'No code word is a prefix of another code word.'
        ],
        correct: [1, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Prefix codes can be very efficient.</li><li><b>B:</b> Correct. They are always uniquely decodable.</li><li><b>C:</b> Incorrect. Morse code uses spaces, making it not strictly prefix.</li><li><b>D:</b> Correct. Fixed-length codes cannot be prefixes of each other.</li><li><b>E:</b> Incorrect. Different prefix codes can have different average lengths.</li><li><b>F:</b> Correct. This is the definition of prefix codes.</li></ul>'
    },
    {
        id: 9,
        question: 'Which statements about the <strong>Kraft-McMillan Inequality</strong> are correct?<sup>9</sup>',
        options: [
            'It states that all codes must have equal length code words.',
            'It applies only to binary codes.',
            '∑ 2^(-l_i) ≤ 1 for code word lengths l_i.',
            'It guarantees that a code with given lengths exists.',
            'It is used to prove Huffman optimality.',
            'It provides a necessary condition for prefix-free codes.'
        ],
        correct: [2, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. It applies to variable-length codes.</li><li><b>B:</b> Incorrect. It applies to codes over any alphabet size.</li><li><b>C:</b> Correct. This is the mathematical form of the inequality.</li><li><b>D:</b> Incorrect. It is necessary but not sufficient.</li><li><b>E:</b> Correct. It is used in proving Huffman optimality.</li><li><b>F:</b> Correct. It gives a necessary condition for prefix codes.</li></ul>'
    },
    {
        id: 10,
        question: 'Which statements about <strong>building Huffman trees</strong> are correct?<sup>10</sup>',
        options: [
            'Internal nodes contain actual symbols from the alphabet.',
            'The tree must be rebuilt if symbol frequencies change.',
            'Huffman trees are always perfectly balanced.',
            'Start by combining the two symbols with lowest frequencies.',
            'The tree is built from leaves up to the root.',
            'All symbols appear as leaves in the Huffman tree.'
        ],
        correct: [1, 3, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Internal nodes represent merged frequencies, not symbols.</li><li><b>B:</b> Correct. The tree depends on specific frequencies.</li><li><b>C:</b> Incorrect. Huffman trees are not necessarily balanced.</li><li><b>D:</b> Correct. This is the greedy step in Huffman algorithm.</li><li><b>E:</b> Correct. Construction is bottom-up from leaves.</li><li><b>F:</b> Correct. Symbols only appear at leaves in prefix codes.</li></ul>'
    },
    {
        id: 11,
        question: 'Which statements compare <strong>sorting algorithms</strong> correctly?<sup>11</sup>',
        options: [
            'All sorting algorithms are stable by default.',
            'Quick Sort has better average case than Bubble Sort.',
            'Bubble Sort is suitable for sorting linked lists.',
            'Heap Sort has guaranteed O(n log n) performance.',
            'Bubble Sort is O(n²) while Heap Sort is O(n log n).',
            'Quick Sort is always faster than Heap Sort.'
        ],
        correct: [1, 3, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Many algorithms like Quick Sort and Heap Sort are unstable.</li><li><b>B:</b> Correct. Quick Sort has better average performance.</li><li><b>C:</b> Incorrect. Bubble Sort is inefficient for linked lists.</li><li><b>D:</b> Correct. Heap Sort never degrades to O(n²).</li><li><b>E:</b> Correct. This is the fundamental complexity difference.</li><li><b>F:</b> Incorrect. Heap Sort can be faster in some scenarios.</li></ul>'
    },
    {
        id: 12,
        question: 'Which statements about <strong>alphabet and strings</strong> are correct?<sup>12</sup>',
        options: [
            'All languages over an alphabet are finite sets.',
            'The empty string ε has length 0.',
            'All subsets of A* are regular languages.',
            'A* represents all finite strings over alphabet A.',
            'Concatenation is a binary operation on strings.',
            'An alphabet is a finite set of symbols.'
        ],
        correct: [1, 3, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Languages can be infinite.</li><li><b>B:</b> Correct. Empty string has zero length.</li><li><b>C:</b> Incorrect. Many subsets are not regular.</li><li><b>D:</b> Correct. A* is the Kleene closure.</li><li><b>E:</b> Correct. Concatenation joins two strings.</li><li><b>F:</b> Correct. Alphabet is defined as a finite symbol set.</li></ul>'
    },
    {
        id: 13,
        question: 'Which statements about <strong>fixed-length vs variable-length codes</strong> are correct?<sup>13</sup>',
        options: [
            'Variable-length codes are always prefix-free.',
            'Fixed-length codes are easier to decode.',
            'All variable-length codes are more efficient than fixed-length codes.',
            'Huffman coding produces variable-length codes.',
            'Variable-length codes can be more space-efficient.',
            'RNA codons are fixed-length codes.'
        ],
        correct: [1, 3, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Variable-length codes may not be prefix-free.</li><li><b>B:</b> Correct. No ambiguity in fixed-length decoding.</li><li><b>C:</b> Incorrect. Efficiency depends on symbol frequencies.</li><li><b>D:</b> Correct. Huffman creates variable-length codes.</li><li><b>E:</b> Correct. Frequent symbols get shorter codes.</li><li><b>F:</b> Correct. RNA uses 3-nucleotide codons.</li></ul>'
    },
    {
        id: 14,
        question: 'Which statements about <strong>Huffman code applications and limitations</strong> are correct?<sup>14</sup>',
        options: [
            'Huffman coding can handle any data type.',
            'It requires known symbol frequencies beforehand.',
            'It works best when symbol frequencies are powers of 2.',
            'Huffman codes are error-correcting codes.',
            'It is used in JPEG image compression.',
            'It is sensitive to changes in symbol frequencies.'
        ],
        correct: [1, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Designed for discrete symbol sets.</li><li><b>B:</b> Correct. Frequencies must be known in advance.</li><li><b>C:</b> Incorrect. Works with any frequency distribution.</li><li><b>D:</b> Incorrect. Huffman is for compression, not error correction.</li><li><b>E:</b> Correct. JPEG uses Huffman coding in its compression.</li><li><b>F:</b> Correct. Tree must be rebuilt if frequencies change.</li></ul>'
    },
    {
        id: 15,
        question: 'Which statements about <strong>tree properties in algorithms</strong> are correct?<sup>15</sup>',
        options: [
            'All binary trees can be traversed in O(1) space.',
            'Huffman trees are full binary trees.',
            'All tree traversal algorithms have O(n) time complexity.',
            'Binary search trees maintain sorted order.',
            'Tree height affects search time in balanced trees.',
            'Heaps are usually complete binary trees.'
        ],
        correct: [1, 3, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Some traversals need O(h) space.</li><li><b>B:</b> Correct. Huffman trees have 0 or 2 children per internal node.</li><li><b>C:</b> Incorrect. Some traversals may have higher complexity.</li><li><b>D:</b> Correct. BSTs maintain ordering property.</li><li><b>E:</b> Correct. Height determines worst-case search time.</li><li><b>F:</b> Correct. Heaps are typically complete for efficiency.</li></ul>'
    },
    {
        id: 16,
        question: 'Which statements about <strong>algorithm complexity analysis</strong> are correct?<sup>16</sup>',
        options: [
            'All O(n log n) algorithms are faster than all O(n²) algorithms.',
            'Heap Sort has O(n log n) worst-case time complexity.',
            'All sorting algorithms have O(n²) worst-case complexity.',
            'Quick Sort has O(n log n) average case time complexity.',
            'Space complexity measures memory usage.',
            'Bubble Sort has O(n²) time and O(1) space complexity.'
        ],
        correct: [1, 3, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Constants matter for small n.</li><li><b>B:</b> Correct. Heap Sort never degrades.</li><li><b>C:</b> Incorrect. Many algorithms have better worst-case.</li><li><b>D:</b> Correct. Quick Sort average case is efficient.</li><li><b>E:</b> Correct. Space complexity measures memory requirements.</li><li><b>F:</b> Correct. Bubble Sort is O(n²) time, O(1) space.</li></ul>'
    },
    {
        id: 17,
        question: 'Which statements about <strong>data structure choices</strong> are correct?<sup>17</sup>',
        options: [
            'All data structures have O(1) access time.',
            'Queues use FIFO ordering.',
            'Linked lists are efficient for random access.',
            'Binary trees can represent hierarchical data.',
            'Stacks use LIFO ordering.',
            'Heaps are used in priority queue implementations.'
        ],
        correct: [1, 3, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Access times vary widely.</li><li><b>B:</b> Correct. Queues are First-In-First-Out.</li><li><b>C:</b> Incorrect. Linked lists have O(n) random access.</li><li><b>D:</b> Correct. Trees naturally represent hierarchies.</li><li><b>E:</b> Correct. Stacks are Last-In-First-Out.</li><li><b>F:</b> Correct. Heaps efficiently support priority queue operations.</li></ul>'
    },
    {
        id: 18,
        question: 'Which statements about <strong>coding theory concepts</strong> are correct?<sup>18</sup>',
        options: [
            'All optimal codes are prefix codes.',
            'Variable-length codes always save space.',
            'Huffman coding minimizes expected code length.',
            'Prefix codes allow instantaneous decoding.',
            'Compression ratio measures space savings.',
            'Kraft inequality is necessary for uniquely decodable codes.'
        ],
        correct: [2, 3, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Optimal codes exist that are not prefix.</li><li><b>B:</b> Incorrect. Not always - depends on distribution.</li><li><b>C:</b> Correct. Huffman achieves minimum expected length.</li><li><b>D:</b> Correct. Prefix codes enable immediate decoding.</li><li><b>E:</b> Correct. Compression ratio = original/compressed size.</li><li><b>F:</b> Correct. Kraft inequality is fundamental.</li></ul>'
    },
    {
        id: 19,
        question: 'Which statements about <strong>algorithm implementation details</strong> are correct?<sup>19</sup>',
        options: [
            'All algorithms can be implemented in O(1) space.',
            'Bubble sort can be optimized with early termination.',
            'All sorting algorithms are comparison-based.',
            'Tree traversals can be iterative or recursive.',
            'Huffman coding uses a greedy algorithm.',
            'Heap sort uses the heapify procedure.'
        ],
        correct: [1, 3, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Many algorithms need more space.</li><li><b>B:</b> Correct. Stop if no swaps in a pass.</li><li><b>C:</b> Incorrect. Some use other methods like counting.</li><li><b>D:</b> Correct. Both implementation styles exist.</li><li><b>E:</b> Correct. Huffman makes locally optimal choices.</li><li><b>F:</b> Correct. Heapify is core to heap operations.</li></ul>'
    },
    {
        id: 20,
        question: 'Which statements about <strong>practical considerations</strong> are correct?<sup>20</sup>',
        options: [
            'All sorting algorithms are stable.',
            'Heap sort is used when guaranteed O(n log n) is needed.',
            'All algorithms work equally well on all data types.',
            'Quick sort is often used in practice due to good average performance.',
            'Memory constraints may affect algorithm choice.',
            'Bubble sort is useful for educational purposes.'
        ],
        correct: [1, 3, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Many are unstable.</li><li><b>B:</b> Correct. Heap sort provides performance guarantees.</li><li><b>C:</b> Incorrect. Different algorithms suit different data.</li><li><b>D:</b> Correct. Quick sort is widely used in practice.</li><li><b>E:</b> Correct. Memory usage influences algorithm selection.</li><li><b>F:</b> Correct. Simple but inefficient - good for learning.</li></ul>'
    }
];