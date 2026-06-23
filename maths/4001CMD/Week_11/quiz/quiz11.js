// This file contains the complete question data structure (allQuizData)
// for a Multiple-Select Quiz on Lecture 11: Hamming Codes and Bin Packing.
const quizTitle = 'Lecture 11 Quiz: Hamming Codes and Bin Packing';
const allQuizData = [
    {
        id: 1,
        question: 'Which statements correctly describe <strong>Hamming distance</strong>?<sup>1</sup>',
        options: [
            'It is the number of bit flips required to change one word into another.',
            'The Hamming distance of a code is the maximum distance between any two codewords.',
            'd(1001, 1011) equals 1.',
            'It measures the robustness of a code against corruption.',
            'It is only applicable to fixed-length decimal codes.',
            'd(Coraline, Caroline) equals 2.'
        ],
        correct: [0, 2, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. It represents the number of differing bits.</li><li><b>B:</b> Incorrect. It is the <i>minimum</i> distance over all distinct encoded letters.</li><li><b>C:</b> Correct. Only the third bit differs.</li><li><b>D:</b> Correct. A higher distance implies better error detection/correction.</li><li><b>E:</b> Incorrect. It applies to binary words and other strings.</li><li><b>F:</b> Correct. Two letters are swapped/changed.</li></ul>'
    },
    {
        id: 2,
        question: 'Which statements about <strong>error detection and correction theorems</strong> are correct?<sup>2</sup>',
        options: [
            'A code is k-error detecting if d_M ≥ k + 1.',
            'A code with Hamming distance 3 is 2-error correcting.',
            'A code is k-error correcting if d_M ≥ 2k + 1.',
            'Error correction requires less distance than error detection.',
            'A code with Hamming distance 3 is 2-error detecting.',
            'Maximum likelihood correction works best with a large number of errors.'
        ],
        correct: [0, 2, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. Minimum distance must exceed k.</li><li><b>B:</b> Incorrect. Distance 3 allows for 1-error correction (3 ≥ 2(1)+1).</li><li><b>C:</b> Correct. This is the theorem for error correction.</li><li><b>D:</b> Incorrect. Correction requires a larger Hamming distance (2k+1) than detection (k+1).</li><li><b>E:</b> Correct. 3 ≥ 2 + 1, so it detects up to 2 errors.</li><li><b>F:</b> Incorrect. It assumes the number of errors is small (less than half the distance).</li></ul>'
    },
    {
        id: 3,
        question: 'Which statements about <strong>Parity Bits</strong> are correct?<sup>3</sup>',
        options: [
            'Parity bits can correct single-bit errors.',
            'Even parity means the total Hamming weight including the parity bit is even.',
            'Parity checking was a popular strategy in the late 1940s.',
            'Odd parity means the code word must have an even number of 1s.',
            'Parity bits are capable of detecting single-bit errors.',
            'Parity bits require a large amount of extra data.'
        ],
        correct: [1, 2, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Parity can only detect, not correct.</li><li><b>B:</b> Correct. The sender adds a bit to make the total count of 1s even.</li><li><b>C:</b> Correct. It was the standard before Hamming codes.</li><li><b>D:</b> Incorrect. Odd parity means the Hamming weight must be odd.</li><li><b>E:</b> Correct. This is the primary function of a parity bit.</li><li><b>F:</b> Incorrect. It requires only one extra bit.</li></ul>'
    },
    {
        id: 4,
        question: 'Which statements about <strong>Richard Hamming and his code</strong> are correct?<sup>4</sup>',
        options: [
            'Hamming codes are Forward Error-correcting Codes (FEC).',
            'Hamming invented Huffman coding as well.',
            'Hamming codes use redundant bits to correct single-bit errors.',
            'Hamming realized error correction was necessary as computers advanced.',
            'Hamming codes can correct all multi-bit errors easily.',
            'Hamming bits are placed at the end of the code string.'
        ],
        correct: [0, 2, 3],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. It corrects errors upon receipt without retransmission.</li><li><b>B:</b> Incorrect. Huffman coding was covered in the previous lecture.</li><li><b>C:</b> Correct. Redundancy allows for identification of the error location.</li><li><b>D:</b> Correct. He foresaw the need for reliability in calculating machines.</li><li><b>E:</b> Incorrect. Basic Hamming codes correct single bit errors; multi-bit requires extensions.</li><li><b>F:</b> Incorrect. They are placed at powers of 2 positions.</li></ul>'
    },
    {
        id: 5,
        question: 'Which statements about <strong>calculating Hamming bit redundancy</strong> are correct?<sup>5</sup>',
        options: [
            'The number of redundant bits r must satisfy m + r ≤ 2^r - 1.',
            'For a 7-bit ASCII code, we need 3 redundant bits.',
            'For a 7-bit ASCII code, we need 4 redundant bits.',
            'The formula relates data bits m to redundant bits r.',
            'Redundant bits are only needed for the first 3 bits of data.',
            'r = 2 + floor(log2(m)) is an upper bound approximation.'
        ],
        correct: [0, 2, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. This is the inequality governing the number of needed bits.</li><li><b>B:</b> Incorrect. 7+3 > 2^3 - 1 (10 > 7), so 3 is not enough.</li><li><b>C:</b> Correct. 7+4 ≤ 2^4 - 1 (11 ≤ 15).</li><li><b>D:</b> Correct. It determines r based on message length m.</li><li><b>E:</b> Incorrect. They protect the whole word.</li><li><b>F:</b> Correct. This formula is derived from the inequality.</li></ul>'
    },
    {
        id: 6,
        question: 'Which statements about the <strong>positioning of Hamming bits</strong> are correct?<sup>6</sup>',
        options: [
            'Redundant bits are placed at positions 1, 2, 4, 8, etc.',
            'Redundant bits are placed at positions 3, 5, 6, 7.',
            'Position 1 covers all bits where the binary representation has a 1 in the least significant bit.',
            'The data bits are placed in the powers of 2 positions.',
            'Hamming bits work together to check the correctness of data bits.',
            'For ASCII, there are 11 total bits transmitted.'
        ],
        correct: [0, 2, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. They go in positions that are powers of 2.</li><li><b>B:</b> Incorrect. These are data bit positions in a 7-bit scenario.</li><li><b>C:</b> Correct. This is how the parity coverage is determined (e.g., 1, 3, 5, 7...).</li><li><b>D:</b> Incorrect. Redundant bits go there; data bits fill the rest.</li><li><b>E:</b> Correct. The sum of wrong positions tells us the corrupted bit.</li><li><b>F:</b> Correct. 7 data bits + 4 redundant bits = 11 total.</li></ul>'
    },
    {
        id: 7,
        question: 'Which statements about <strong>Calculating Hamming values</strong> are correct?<sup>7</sup>',
        options: [
            'The Hamming bit is a parity bit for a specific column in the Hamming table.',
            'If the column sum is even, the Hamming bit is 1.',
            'If the column sum is odd, the Hamming bit is 1.',
            'We use the binary decomposition of the position number to determine coverage.',
            'All Hamming bits are set to 1 initially.',
            'Bit 6 is covered by Hamming bits at positions 2 and 4.'
        ],
        correct: [0, 2, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. Each Hamming bit enforces parity for a specific set of bits.</li><li><b>B:</b> Incorrect. If sum is even, the bit is 0.</li><li><b>C:</b> Correct. Odd sum results in a 1 to enforce even parity.</li><li><b>D:</b> Correct. E.g., Bit 6 (110) contributes to 4 (100) and 2 (010).</li><li><b>E:</b> Incorrect. They are calculated based on data.</li><li><b>F:</b> Correct. 6 = 4 + 2.</li></ul>'
    },
    {
        id: 8,
        question: 'Which statements about <strong>Hamming Error Correction</strong> are correct?<sup>8</sup>',
        options: [
            'If all parity checks pass (sum is even), no single-bit error occurred.',
            'The sum of the positions of the incorrect Hamming bits gives the position of the error.',
            'If Hamming bits 1, 2, and 4 are wrong, bit 7 is corrupted.',
            'If only one Hamming bit is wrong, it must be a data bit error.',
            'It assumes at most one bit has been flipped.',
            'The receiver must request retransmission if an error is found.'
        ],
        correct: [0, 1, 2, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. The code is valid.</li><li><b>B:</b> Correct. This points directly to the corrupted index.</li><li><b>C:</b> Correct. 1 + 2 + 4 = 7.</li><li><b>D:</b> Incorrect. If only one check bit is wrong, that check bit itself is likely the error.</li><li><b>E:</b> Correct. The logic relies on single-bit corruption assumptions.</li><li><b>F:</b> Incorrect. The code is forward error-correcting; it fixes the bit locally.</li></ul>'
    },
    {
        id: 9,
        question: 'Which statements about <strong>Information Corruption</strong> are correct?<sup>9</sup>',
        options: [
            'Corruption can occur when saving data to a hard drive.',
            'A bit flip changes a 0 to a 1 or vice versa.',
            'Maximum likelihood detection assumes the corrupted code is "close" to the original.',
            'All corruption makes the code impossible to decode.',
            'Corruption only happens in network cables, not within computers.',
            'If a code is distance 3, we can distinguish valid codes from single-bit errors.'
        ],
        correct: [0, 1, 2, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. It occurs in transmission and storage.</li><li><b>B:</b> Correct. This is the definition of a bit flip.</li><li><b>C:</b> Correct. It looks for the nearest valid codeword.</li><li><b>D:</b> Incorrect. It might decode to the wrong valid word (e.g., Coraline vs Caroline).</li><li><b>E:</b> Incorrect. It happens within computers too.</li><li><b>F:</b> Correct. Distance 3 allows detection of 2 errors and correction of 1.</li></ul>'
    },
    {
        id: 10,
        question: 'Which statements about the <strong>Bin Packing Problem</strong> are correct?<sup>10</sup>',
        options: [
            'The goal is to minimize the number of bins (workers) used.',
            'A worker can perform multiple tasks simultaneously.',
            'It is an optimization problem.',
            'Each bin has a fixed capacity.',
            'Tasks can be split between two workers.',
            'The problem assumes tasks must be done in a specific pre-defined order.'
        ],
        correct: [0, 2, 3],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. "How many workers are needed?" implies minimization.</li><li><b>B:</b> Incorrect. Only one task at a time.</li><li><b>C:</b> Correct. We want the optimal (minimum) number of bins.</li><li><b>D:</b> Correct. Example: "Capacity of 15 hours".</li><li><b>E:</b> Incorrect. Each task only by one worker.</li><li><b>F:</b> Incorrect. We can permute the tasks to find better fits.</li></ul>'
    },
    {
        id: 11,
        question: 'Which statements about <strong>Bin Packing Complexity</strong> are correct?<sup>11</sup>',
        options: [
            'There is a known polynomial time optimal algorithm.',
            'The brute-force approach involves checking all permutations.',
            'For 11 tasks, there are over 39 million permutations.',
            'The brute-force complexity is O(n!).',
            'It is computationally tractable for large n.',
            'Sorting the items first always guarantees the optimal solution.'
        ],
        correct: [1, 2, 3],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. No polynomial optimal algorithm is known.</li><li><b>B:</b> Correct. Run through all permutations.</li><li><b>C:</b> Correct. 11! = 39,916,800.</li><li><b>D:</b> Correct. Factorial time complexity.</li><li><b>E:</b> Incorrect. It is "way too long" (intractable).</li><li><b>F:</b> Incorrect. It is a heuristic, not a guarantee.</li></ul>'
    },
    {
        id: 12,
        question: 'Which statements about <strong>Greedy Bin Packing</strong> are correct?<sup>12</sup>',
        options: [
            'It is a heuristic algorithm.',
            'It requires sorting items in increasing size.',
            'It packs each item into the first bin that fits.',
            'If no bin fits, a new bin is started.',
            'It always yields the optimal solution.',
            'It requires sorting items in decreasing size.'
        ],
        correct: [0, 2, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. It gives a good approximation.</li><li><b>B:</b> Incorrect. Decreasing size is the strategy.</li><li><b>C:</b> Correct. "First bin in the list that can accommodate it."</li><li><b>D:</b> Correct.</li><li><b>E:</b> Incorrect. It does not general give an optimal packing.</li><li><b>F:</b> Correct. "Sort the items in decreasing size."</li></ul>'
    },
    {
        id: 13,
        question: 'Which statements about <strong>Maximum Likelihood Error Correction</strong> are correct?<sup>13</sup>',
        options: [
            'It finds the code word with the shortest Hamming distance to the received word.',
            'It requires very little extra data.',
            'It assumes the number of errors is less than half the Hamming distance.',
            'It is also called minimum distance error correction.',
            'It is more efficient than Hamming codes for single bit errors.',
            'Increasing Hamming distance requires adding more data bits.'
        ],
        correct: [0, 2, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. Finds c_j with shortest distance to w.</li><li><b>B:</b> Incorrect. Requires a LOT of extra data.</li><li><b>C:</b> Correct. Assumes errors < 0.5 * d_M.</li><li><b>D:</b> Correct.</li><li><b>E:</b> Incorrect. Hamming codes are more efficient for single-bit errors.</li><li><b>F:</b> Correct. Extra data increases distance/robustness.</li></ul>'
    },
    {
        id: 14,
        question: 'Which statements about <strong>Hamming Weight</strong> are correct?<sup>14</sup>',
        options: [
            'It is the number of 0s in a code word.',
            'It is the number of 1s in a code word.',
            'The Hamming weight of 1001110 is 4.',
            'Even parity ensures the Hamming weight is even.',
            'Odd parity ensures the Hamming weight is odd.',
            'It is used to calculate the Hamming distance.'
        ],
        correct: [1, 2, 3, 4],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. It is the number of 1s.</li><li><b>B:</b> Correct.</li><li><b>C:</b> Correct. There are four 1s.</li><li><b>D:</b> Correct.</li><li><b>E:</b> Correct.</li><li><b>F:</b> Incorrect. Hamming distance is the difference between two words, weight is a property of one.</li></ul>'
    },
    {
        id: 15,
        question: 'Which statements about <strong>Practical Heuristic Algorithms</strong> are correct?<sup>15</sup>',
        options: [
            'They are used when optimal solutions are intractable.',
            'They guarantee the mathematically best result.',
            'They offer a trade-off between speed and optimality.',
            'Greedy bin packing is an example.',
            'They are never used in computer programming.',
            'They give a "pretty good" approximation.'
        ],
        correct: [0, 2, 3, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. Used for intractable problems.</li><li><b>B:</b> Incorrect. They do not generally give optimal packing.</li><li><b>C:</b> Correct. Finds a solution in a shorter amount of time.</li><li><b>D:</b> Correct. The greedy approach is a heuristic.</li><li><b>E:</b> Incorrect. Quite often used in programming.</li><li><b>F:</b> Correct.</li></ul>'
    },
    {
        id: 16,
        question: 'Which statements about <strong>Heaps and Binary Trees (Review)</strong> are correct?<sup>16</sup>',
        options: [
            'A binary tree is full if every node has 0 or 2 children.',
            'A heap is a complete binary tree.',
            'Heap sort has O(n^2) complexity.',
            'A min-heap decreases as you travel downward.',
            'A complete tree has the last level filled from left to right.',
            'Heap sort converts an array into a complete tree.'
        ],
        correct: [0, 1, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct.</li><li><b>B:</b> Correct.</li><li><b>C:</b> Incorrect. Heap sort is O(n log n).</li><li><b>D:</b> Incorrect. Min-heap increases downward; Max-heap decreases.</li><li><b>E:</b> Correct.</li><li><b>F:</b> Correct.</li></ul>'
    },
    {
        id: 17,
        question: 'Which statements about <strong>Code Robustness</strong> are correct?<sup>17</sup>',
        options: [
            'Hamming distance is a measure of robustness.',
            'Adding more data to encode letters generally increases error probability.',
            'Code 000000, 111111, 110010 has Hamming distance 3.',
            'Robustness is irrelevant in modern computing.',
            'Parity checking is more robust than Hamming codes.',
            'Defense networks require high data integrity.'
        ],
        correct: [0, 1, 2, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct.</li><li><b>B:</b> Correct. "The more data we use... the more errors are likely to occur."</li><li><b>C:</b> Correct. Minimum distance between these words is 3.</li><li><b>D:</b> Incorrect. Crucial for government/defense.</li><li><b>E:</b> Incorrect. Parity is less robust (only detects).</li><li><b>F:</b> Correct.</li></ul>'
    },
    {
        id: 18,
        question: 'Which statements about <strong>Fixed-Length Codes example</strong> (Slide 5) are correct?<sup>18</sup>',
        options: [
            'If a = 000000 and we receive 000000, no error occurred.',
            'If b = 111111 and we receive 111011, we can correct it to b.',
            'If the code cannot detect 3-bit errors, receiving 110010 (c) might be an error from a.',
            'Fixed-length codes cannot use parity bits.',
            'Correction is possible if we assume only 1 bit flipped.',
            'Decoding 111011 to 111111 is an example of maximum likelihood.'
        ],
        correct: [0, 1, 2, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. Matches exactly.</li><li><b>B:</b> Correct. One bit difference, maps to b.</li><li><b>C:</b> Correct. 110010 is 3 bits away from 000000.</li><li><b>D:</b> Incorrect. Parity can be used on any fixed-length code.</li><li><b>E:</b> Correct.</li><li><b>F:</b> Correct. Choosing the closest valid word.</li></ul>'
    },
    {
        id: 19,
        question: 'Which statements about <strong>Hamming Code Pros and Cons</strong> are correct?<sup>19</sup>',
        options: [
            'Hamming codes require no extra data.',
            'For 16-bit codes, we need 5 Hamming bits.',
            'Transmission errors happen more than 50% of the time.',
            'The extra cost is not always justified for general use.',
            'It is easy to implement.',
            'It can lead to wrong bits being "corrected" in multi-bit errors.'
        ],
        correct: [1, 3, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Incorrect. Requires redundant bits.</li><li><b>B:</b> Correct.</li><li><b>C:</b> Incorrect. Less than 1% usually.</li><li><b>D:</b> Correct. Cost/benefit analysis often limits use.</li><li><b>E:</b> Correct.</li><li><b>F:</b> Correct. Can cause further data corruption if >1 error.</li></ul>'
    },
    {
        id: 20,
        question: 'Which statements about <strong>Bit Corruption Examples</strong> are correct?<sup>20</sup>',
        options: [
            'If Hamming bits 1 and 8 are wrong, bit 9 is corrupted.',
            'If bit 9 is corrupted in the "bad" example, it changes to "bat".',
            'If Hamming bits are correct (all 0), the word is valid.',
            'If only the 4th Hamming bit is wrong, data bit 4 is corrupted.',
            'Bit 9 corruption means the error is in the 8th and 1st Hamming check positions.',
            '10010101110 is the correct Hamming code for E (1000101).'
        ],
        correct: [0, 1, 2, 4, 5],
        explanation: 'Rationale:<ul><li><b>A:</b> Correct. 8+1 = 9.</li><li><b>B:</b> Correct.</li><li><b>C:</b> Correct.</li><li><b>D:</b> Incorrect. If only Hamming bit 4 is wrong, the Hamming bit itself is corrupted.</li><li><b>E:</b> Correct. 9 = 8 + 1.</li><li><b>F:</b> Correct. As calculated in the lecture example.</li></ul>'
    }
];