const lectureData = {
    lectureTitle: "Lecture 10.1: Advanced Sorting Algorithms & Analysis",
    courseName: "4001CMD Mathematics for Computing Professionals",
    sections: [
        {
            id: "section-1",
            title: "1. Introduction to Sorting Algorithms",
            audioFile: "audio/week10_part1_slide_01.wav",
            content: [
                { 
                    type: "paragraph", 
                    text: "Sorting algorithms represent one of the most fundamental and well-studied problems in computer science. These algorithms organize data according to a specific ordering relation, typically numerical or lexicographical order." 
                },
                { 
                    type: "key-concept", 
                    text: "<h3>Why Study Sorting Algorithms?</h3><ul><li>They provide excellent examples for complexity analysis</li><li>Understanding sorting helps with algorithm design patterns</li><li>Many other algorithms rely on sorted data as a preprocessing step</li><li>They demonstrate trade-offs between time and space complexity</li></ul>" 
                },
                { 
                    type: "math-example", 
                    text: "Formal definition: Given a sequence $A = [a_1, a_2, ..., a_n]$ and a total order relation $\\leq$, produce a permutation $A' = [a'_1, a'_2, ..., a'_n]$ such that $a'_1 \\leq a'_2 \\leq ... \\leq a'_n$" 
                }
            ]
        },
        {
            id: "section-2",
            title: "2. Mathematical Foundations of Sorting",
            audioFile: "audio/week10_part1_slide_02.wav",
            content: [
                { 
                    type: "paragraph", 
                    text: "To properly analyze sorting algorithms, we need to understand the mathematical limits and theoretical foundations that govern their performance." 
                },
                { 
                    type: "math-example", 
                    text: "For $n$ distinct elements, there are exactly $n!$ possible permutations. A comparison-based sorting algorithm must distinguish between all $n!$ possible orderings." 
                },
                { 
                    type: "math-example", 
                    text: "Information-theoretic lower bound: Since each comparison gives at most 1 bit of information, we need at least $\\log_2(n!)$ comparisons in the worst case." 
                },
                { 
                    type: "math-example", 
                    text: "Using Stirling's approximation: $\\log_2(n!) = \\log_2(\\sqrt{2\\pi n}(\\frac{n}{e})^n) + O(\\frac{1}{n}) = n\\log_2 n - n\\log_2 e + O(\\log n)$" 
                },
                { 
                    type: "paragraph", 
                    text: "This proves that any comparison-based sorting algorithm requires $\\Omega(n \\log n)$ comparisons in the worst case." 
                }
            ]
        },
{
    id: "section-3",
    title: "3. Bubble Sort: Basic Theory and Operation",
    audioFile: "audio/week10_part1_slide_03.wav",
    content: [
        { 
            type: "paragraph", 
            text: "Bubble Sort is one of the simplest sorting algorithms to understand and implement. It works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order." 
        },
        { 
            type: "paragraph", 
            text: "<div class='pseudocode'><div class='pseudocode-header'>Python: Bubble Sort</div><pre><code>def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]</code></pre></div>" 
        },
        { 
            type: "paragraph", 
            text: "<strong>Step-by-step example with array [5, 2, 8, 1, 9]:</strong><br>Pass 1: Compare 5 and 2 → swap → [2, 5, 8, 1, 9]<br>Compare 5 and 8 → no swap → [2, 5, 8, 1, 9]<br>Compare 8 and 1 → swap → [2, 5, 1, 8, 9]<br>Compare 8 and 9 → no swap → [2, 5, 1, 8, 9]<br><br>Largest element (9) is now in correct position." 
        },
        { 
            type: "math-example", 
            text: "Total comparisons: $\\sum_{i=1}^{n-1} i = \\frac{n(n-1)}{2} = O(n^2)$<br>Best case (already sorted): $O(n)$ comparisons with optimized version" 
        }
    ]
},
        {
            id: "section-4",
            title: "4. Bubble Sort: Interactive Visualization",
            audioFile: "audio/week10_part1_slide_04.wav",
            content: [
                { 
                    type: "paragraph", 
                    text: "The interactive demonstration below allows you to observe Bubble Sort in action. Watch how elements gradually 'bubble up' to their correct positions through successive passes." 
                },
                { 
                    type: "paragraph", 
                    text: `<iframe src="https://aa3025.github.io/sorting/bubblesort.html" width="100%" height="1000px" style="border: 1px solid #e2e8f0; border-radius: 0.5rem;" title="Bubble Sort Interactive Demo"></iframe>` 
                },
                { 
                    type: "key-concept", 
                    text: "<h3>Key Observations</h3><ul><li>After each complete pass, the largest unsorted element moves to its final position</li><li>The algorithm requires multiple passes through the entire array</li><li>You can see why it's called 'Bubble Sort' - larger elements bubble to the top</li><li>The algorithm is stable (equal elements maintain their relative order)</li></ul>" 
                }
            ]
        },
        {
            id: "section-5",
            title: "5. Quick Sort: Divide and Conquer Foundation",
            audioFile: "audio/week10_part1_slide_05.wav",
            content: [
                { 
                    type: "paragraph", 
                    text: "Quick Sort is a highly efficient, divide-and-conquer sorting algorithm that works by selecting a 'pivot' element and partitioning the array around it." 
                },
                { 
                    type: "key-concept", 
                    text: "<h3>Core Quick Sort Strategy</h3><ol><li><strong>Choose</strong> a pivot element from the array</li><li><strong>Partition</strong> the array so that all elements less than the pivot come before it, and all elements greater come after it</li><li><strong>Recursively</strong> apply the same process to the sub-arrays</li></ol>" 
                },
                { 
                    type: "math-example", 
                    text: "Mathematical formulation:<br>$\\text{QuickSort}(A, p, r) = \\text{QuickSort}(A, p, q-1) + A[q] + \\text{QuickSort}(A, q+1, r)$<br>where $q$ is the final position of the pivot after partitioning" 
                }
            ]
        },
{
    id: "section-6",
    title: "6. Quick Sort: Partitioning Process Explained",
    audioFile: "audio/week10_part1_slide_06.wav",
    content: [
        { 
            type: "paragraph", 
            text: "The partitioning step is the heart of Quick Sort. Let's examine the Lomuto partition scheme in detail:" 
        },
        { 
            type: "paragraph", 
            text: "<div class='pseudocode'><div class='pseudocode-header'>Python: Lomuto Partition</div><pre><code>def partition(arr, low, high):\n    pivot = arr[high]  # choose last element as pivot\n    i = low - 1\n    \n    for j in range(low, high):\n        if arr[j] <= pivot:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n    \n    arr[i + 1], arr[high] = arr[high], arr[i + 1]\n    return i + 1</code></pre></div>" 
        },
        { 
            type: "paragraph", 
            text: "<div class='pseudocode'><div class='pseudocode-header'>Python: Quick Sort</div><pre><code>def quick_sort(arr, low, high):\n    if low < high:\n        pi = partition(arr, low, high)\n        quick_sort(arr, low, pi - 1)\n        quick_sort(arr, pi + 1, high)</code></pre></div>" 
        },
        { 
            type: "paragraph", 
            text: "<strong>Detailed Example: Partition array [10, 80, 30, 90, 40, 50, 70] with pivot = 70</strong><br><br>Initial state:<br>Array: [10, 80, 30, 90, 40, 50, 70]<br>i = -1, j = 0, pivot = 70<br><br>Step-by-step execution:" 
        },
        { 
            type: "math-example", 
            text: "<strong>Step 1 (j=0):</strong> A[0] = 10 ≤ 70<br>→ i becomes 0<br>→ swap A[0] with A[0] (no change)<br>Array: [10, 80, 30, 90, 40, 50, 70]<br>i = 0, j = 1" 
        },
        { 
            type: "math-example", 
            text: "<strong>Step 2 (j=1):</strong> A[1] = 80 > 70<br>→ no swap, i remains 0<br>Array: [10, 80, 30, 90, 40, 50, 70]<br>i = 0, j = 2" 
        },
        { 
            type: "math-example", 
            text: "<strong>Step 3 (j=2):</strong> A[2] = 30 ≤ 70<br>→ i becomes 1<br>→ swap A[1] and A[2]<br>Array: [10, 30, 80, 90, 40, 50, 70]<br>i = 1, j = 3" 
        },
        { 
            type: "math-example", 
            text: "<strong>Step 4 (j=3):</strong> A[3] = 90 > 70<br>→ no swap, i remains 1<br>Array: [10, 30, 80, 90, 40, 50, 70]<br>i = 1, j = 4" 
        },
        { 
            type: "math-example", 
            text: "<strong>Step 5 (j=4):</strong> A[4] = 40 ≤ 70<br>→ i becomes 2<br>→ swap A[2] and A[4]<br>Array: [10, 30, 40, 90, 80, 50, 70]<br>i = 2, j = 5" 
        },
        { 
            type: "math-example", 
            text: "<strong>Step 6 (j=5):</strong> A[5] = 50 ≤ 70<br>→ i becomes 3<br>→ swap A[3] and A[5]<br>Array: [10, 30, 40, 50, 80, 90, 70]<br>i = 3, j = 6 (loop ends)" 
        },
        { 
            type: "math-example", 
            text: "<strong>Final Step:</strong> swap A[i+1] and A[high] (swap A[4] and A[6])<br>Array: [10, 30, 40, 50, 70, 90, 80]<br>Return pivot index = 4" 
        },
        { 
            type: "key-concept", 
            text: "<h3>Partition Result</h3><p>Left partition [10, 30, 40, 50]: all elements ≤ pivot (70)<br>Pivot at position 4: value 70<br>Right partition [90, 80]: all elements > pivot (70)</p>" 
        }
    ]
},
{
    id: "section-7",
    title: "7. Quick Sort: Pivot Selection Strategies",
    audioFile: "audio/week10_part1_slide_07.wav",
    content: [
        { 
            type: "paragraph", 
            text: "The choice of pivot significantly impacts Quick Sort's performance. Different pivot selection strategies offer various trade-offs:" 
        },
        { 
            type: "key-concept", 
            text: "<h3>Pivot Selection Methods</h3><ul><li><strong>Last element</strong>: Simple but vulnerable to worst-case on sorted arrays</li><li><strong>First element</strong>: Same issues as last element selection</li><li><strong>Random element</strong>: Excellent expected performance, $O(n \\log n)$ with high probability</li><li><strong>Median-of-three</strong>: Choose median of first, middle, and last elements - good balance</li><li><strong>Median-of-medians</strong>: Guarantees $O(n \\log n)$ worst-case but with higher constant factors</li></ul>" 
        },
        { 
            type: "paragraph", 
            text: "<div class='pseudocode'><div class='pseudocode-header'>Python: Median-of-Three Pivot Selection</div><pre><code>def median_of_three(arr, low, high):\n    mid = (low + high) // 2\n    \n    # Sort low, mid, high\n    if arr[low] > arr[mid]:\n        arr[low], arr[mid] = arr[mid], arr[low]\n    if arr[low] > arr[high]:\n        arr[low], arr[high] = arr[high], arr[low]\n    if arr[mid] > arr[high]:\n        arr[mid], arr[high] = arr[high], arr[mid]\n    \n    return mid  # return median index</code></pre></div>" 
        },
        { 
            type: "math-example", 
            text: "Probability analysis for random pivot:<br>Probability of 25-75% split or better: $\\frac{1}{2}$<br>Expected recursion depth: $O(\\log n)$<br>Expected total work: $O(n \\log n)$" 
        }
    ]
},
        {
            id: "section-8",
            title: "8. Quick Sort: Interactive Demonstration",
            audioFile: "audio/week10_part1_slide_08.wav",
            content: [
                { 
                    type: "paragraph", 
                    text: "This interactive visualization demonstrates Quick Sort's divide-and-conquer approach. Observe how the partitioning step recursively breaks the problem into smaller subproblems." 
                },
                { 
                    type: "paragraph", 
                    text: `<iframe src="https://aa3025.github.io/sorting/quicksort.html" width="100%" height="1000px" style="border: 1px solid #e2e8f0; border-radius: 0.5rem;" title="Quick Sort Interactive Demo"></iframe>` 
                },
                { 
                    type: "key-concept", 
                    text: "<h3>Observations to Make</h3><ul><li>Watch how the pivot selection affects the balance of partitions</li><li>Notice the recursive nature - large problems become smaller ones</li><li>Observe that elements are moved to their final positions during partitioning</li><li>See how the algorithm handles different input distributions</li></ul>" 
                }
            ]
        },
        {
            id: "section-9",
            title: "9. Heap Sort: Binary Heap Data Structure",
            audioFile: "audio/week10_part1_slide_09.wav",
            content: [
                { 
                    type: "paragraph", 
                    text: "Heap Sort relies on the binary heap data structure, which provides efficient access to the maximum (or minimum) element while maintaining the heap property." 
                },
                { 
                    type: "key-concept", 
                    text: "<h3>Binary Heap Properties</h3><ul><li><strong>Complete Binary Tree</strong>: All levels are completely filled except possibly the last level, which is filled from left to right</li><li><strong>Heap Property</strong>: For max-heap, each node is greater than or equal to its children: $A[parent(i)] \\geq A[i]$</li><li><strong>Array Representation</strong>: Efficient storage without pointers</li></ul>" 
                },
                { 
                    type: "math-example", 
                    text: "Array indexing formulas:<br>Parent of node $i$: $\\lfloor \\frac{i-1}{2} \\rfloor$<br>Left child of node $i$: $2i + 1$<br>Right child of node $i$: $2i + 2$<br>Height of heap with $n$ nodes: $\\lfloor \\log_2 n \\rfloor$" 
                }
            ]
        },
        {
    id: "section-10",
    title: "10. Heap Sort: Algorithm Steps and Heapify Operation",
    audioFile: "audio/week10_part1_slide_10.wav",
    content: [
        { 
            type: "paragraph", 
            text: "Heap Sort consists of two main phases: building a max-heap from the unsorted array, and repeatedly extracting the maximum element." 
        },
        { 
            type: "paragraph", 
            text: "<div class='pseudocode'><div class='pseudocode-header'>Python: Heap Sort</div><pre><code>def heap_sort(arr):\n    n = len(arr)\n    \n    # Build max heap\n    for i in range(n // 2 - 1, -1, -1):\n        heapify(arr, n, i)\n    \n    # Extract elements one by one\n    for i in range(n - 1, 0, -1):\n        arr[i], arr[0] = arr[0], arr[i]  # Move max to end\n        heapify(arr, i, 0)  # Restore heap property</code></pre></div>" 
        },
        { 
            type: "paragraph", 
            text: "<div class='pseudocode'><div class='pseudocode-header'>Python: Heapify Operation</div><pre><code>def heapify(arr, n, i):\n    largest = i  # Initialize largest as root\n    left = 2 * i + 1\n    right = 2 * i + 2\n    \n    # Check if left child exists and is greater than root\n    if left < n and arr[left] > arr[largest]:\n        largest = left\n    \n    # Check if right child exists and is greater than largest\n    if right < n and arr[right] > arr[largest]:\n        largest = right\n    \n    # Change root if needed\n    if largest != i:\n        arr[i], arr[largest] = arr[largest], arr[i]\n        heapify(arr, n, largest)  # Recursively heapify affected subtree</code></pre></div>" 
        },
        { 
            type: "paragraph", 
            text: "The heapify operation ensures the heap property is maintained by 'sinking' a node down to its proper position." 
        }
    ]
},
        {
            id: "section-11",
            title: "11. Heap Sort: Interactive Visualization",
            audioFile: "audio/week10_part1_slide_11.wav",
            content: [
                { 
                    type: "paragraph", 
                    text: "This interactive demonstration shows how Heap Sort builds and maintains the heap structure while efficiently extracting elements in sorted order." 
                },
                { 
                    type: "paragraph", 
                    text: `<iframe src="https://aa3025.github.io/sorting/heapsort.html" width="100%" height="1525px" style="border: 1px solid #e2e8f0; border-radius: 0.5rem;" title="Heap Sort Interactive Demo"></iframe>` 
                },
                { 
                    type: "key-concept", 
                    text: "<h3>Key Observations</h3><ul><li>Watch how the max-heap is built from the bottom up</li><li>Observe the heapify operation maintaining the heap property</li><li>Notice how the maximum element is repeatedly moved to the end</li><li>See the in-place nature of the algorithm - no extra storage needed</li></ul>" 
                }
            ]
        },
        {
            id: "section-12",
            title: "12. Time Complexity Analysis: Detailed Comparison",
            audioFile: "audio/week10_part1_slide_12.wav",
            content: [
                { 
                    type: "paragraph", 
                    text: "A comprehensive comparison of time complexity reveals the strengths and weaknesses of each algorithm across different scenarios." 
                },
                { 
                    type: "paragraph", 
                    text: `<div class="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Algorithm</th>
                                    <th>Best Case</th>
                                    <th>Average Case</th>
                                    <th>Worst Case</th>
                                    <th>Derivation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Bubble Sort</strong></td>
                                    <td>$O(n)$</td>
                                    <td>$O(n^2)$</td>
                                    <td>$O(n^2)$</td>
                                    <td>$\\sum_{i=1}^{n-1} i = \\frac{n(n-1)}{2}$</td>
                                </tr>
                                <tr>
                                    <td><strong>Quick Sort</strong></td>
                                    <td>$O(n \\log n)$</td>
                                    <td>$O(n \\log n)$</td>
                                    <td>$O(n^2)$</td>
                                    <td>$T(n) = 2T(n/2) + O(n)$</td>
                                </tr>
                                <tr>
                                    <td><strong>Heap Sort</strong></td>
                                    <td>$O(n \\log n)$</td>
                                    <td>$O(n \\log n)$</td>
                                    <td>$O(n \\log n)$</td>
                                    <td>Build heap: $O(n)$<br>n extractions: $n \\times O(\\log n)$</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>` 
                },
                { 
                    type: "math-example", 
                    text: "Quick Sort average-case analysis using recurrence:<br>$T(n) = \\frac{1}{n} \\sum_{i=0}^{n-1} [T(i) + T(n-i-1)] + O(n)$<br>This solves to $T(n) = O(n \\log n)$" 
                }
            ]
        },
        {
            id: "section-13",
            title: "13. Space Complexity and Stability Analysis",
            audioFile: "audio/week10_part1_slide_13.wav",
            content: [
                { 
                    type: "paragraph", 
                    text: "Beyond time complexity, we must consider memory usage and stability properties for practical algorithm selection." 
                },
                { 
                    type: "paragraph", 
                    text: `<div class="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Algorithm</th>
                                    <th>Space Complexity</th>
                                    <th>Stable</th>
                                    <th>In-Place</th>
                                    <th>Adaptive</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Bubble Sort</strong></td>
                                    <td>$O(1)$</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td><strong>Quick Sort</strong></td>
                                    <td>$O(\\log n)$ worst<br>$O(n)$ worst-case*</td>
                                    <td>Typically No</td>
                                    <td>Yes</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td><strong>Heap Sort</strong></td>
                                    <td>$O(1)$</td>
                                    <td>No</td>
                                    <td>Yes</td>
                                    <td>No</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>` 
                },
                { 
                    type: "key-concept", 
                    text: "<h3>Important Definitions</h3><ul><li><strong>Stable</strong>: Equal elements maintain their relative order</li><li><strong>In-Place</strong>: Requires only $O(1)$ extra space beyond the input</li><li><strong>Adaptive</strong>: Performs better on partially sorted inputs</li><li><strong>Recursive</strong>: Uses recursion (affects stack space)</li></ul>" 
                }
            ]
        },
        {
            id: "section-14",
            title: "14. Practical Applications and Real-World Usage",
            audioFile: "audio/week10_part1_slide_14.wav",
            content: [
                { 
                    type: "paragraph", 
                    text: "Understanding when to apply each algorithm requires considering real-world constraints and data characteristics." 
                },
                { 
                    type: "key-concept", 
                    text: "<h3>Algorithm Selection Guidelines</h3><ul><li><strong>Bubble Sort</strong>: Educational purposes, very small datasets (n < 10), when code simplicity is paramount</li><li><strong>Quick Sort</strong>: General-purpose sorting, large random datasets, when average-case performance matters most</li><li><strong>Heap Sort</strong>: Real-time systems, embedded systems, when worst-case guarantees are required, priority queue implementations</li></ul>" 
                },
                { 
                    type: "paragraph", 
                    text: "<strong>Real-World Examples:</strong><br>- C++ STL: Introsort (Quick Sort + Heap Sort hybrid)<br>- Java: Arrays.sort() uses Dual-Pivot Quick Sort for primitives, Timsort for objects<br>- Python: Timsort (hybrid of Merge Sort and Insertion Sort)<br>- Linux kernel: Often uses Heap Sort for its predictable performance" 
                },
                { 
                    type: "math-example", 
                    text: "Cache performance considerations:<br>Quick Sort has good cache locality<br>Heap Sort has poor cache performance due to non-sequential memory access<br>This can make Quick Sort 2-3x faster in practice despite similar asymptotic complexity" 
                }
            ]
        },
{
    id: "section-15",
    title: "15. Advanced Topics and Future Directions",
    audioFile: "audio/week10_part1_slide_15.wav",
    content: [
        { 
            type: "paragraph", 
            text: "Modern sorting research continues to develop new algorithms and optimizations that build upon these fundamental approaches." 
        },
        { 
            type: "key-concept", 
            text: "<h3>Hybrid Algorithms</h3><ul><li><strong>Introsort</strong>: Starts with Quick Sort, switches to Heap Sort if recursion depth becomes too large, guaranteeing $O(n \\log n)$ worst-case</li><li><strong>Timsort</strong>: Hybrid of Merge Sort and Insertion Sort, optimized for real-world data that often contains ordered subsequences</li><li><strong>Pattern-defeating Quick Sort</strong>: Modern Quick Sort variant with multiple pivot selection strategies</li></ul>" 
        },
        { 
            type: "paragraph", 
            text: "<div class='pseudocode'><div class='pseudocode-header'>Python: Introsort Outline</div><pre><code>def introsort(arr, depth_limit=None):\n    if depth_limit is None:\n        depth_limit = 2 * (len(arr).bit_length())\n    \n    n = len(arr)\n    \n    if n <= 16:\n        insertion_sort(arr)  # Use insertion sort for small arrays\n    elif depth_limit == 0:\n        heap_sort(arr)       # Switch to heap sort for deep recursion\n    else:\n        pivot = median_of_three(arr, 0, n - 1)\n        q = partition(arr, 0, n - 1)\n        introsort(arr[:q], depth_limit - 1)\n        introsort(arr[q + 1:], depth_limit - 1)</code></pre></div>" 
        },
        { 
            type: "paragraph", 
            text: "<div class='pseudocode'><div class='pseudocode-header'>Python: Insertion Sort (for small arrays)</div><pre><code>def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key</code></pre></div>" 
        },
        { 
            type: "math-example", 
            text: "Parallel sorting algorithms:<br>Parallel Merge Sort: $O(\\frac{n}{p} \\log n + n)$ with $p$ processors<br>Sample Sort: Parallel version of Bucket Sort<br>Bitonic Sort: $O(\\log^2 n)$ parallel time, suitable for hardware implementation" 
        },
        { 
            type: "paragraph", 
            text: "<strong>Key Research Areas:</strong><br>- External sorting (data too large for memory)<br>- Parallel and distributed sorting<br>- Adaptive sorting algorithms<br>- Cache-oblivious algorithms<br>- Sorting networks and hardware implementations" 
        },
        { 
            type: "key-concept", 
            text: "<h3>Conclusion</h3><p>The study of sorting algorithms provides deep insights into algorithm design, complexity analysis, and the trade-offs between different computational resources. These fundamental algorithms continue to evolve and find new applications in modern computing systems.</p>" 
        }
    ]
}
    ]
};