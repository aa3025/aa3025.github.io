/**
 * Data structure for Week 11 Lecture Notes - Hamming Codes
 * Content based on the uploaded PDF slides for Week 11
 */
const lectureData = {
    courseName: "4001CMD - Mathematics for Computing Professionals",
    lectureTitle: "Week 11: Hamming Codes - Error Detection and Correction",
    
    sections: [
        {
            title: "1. The Information Corruption Problem",
            id: "corruption-problem",
            audioFile: "audio/week11_slide_01.wav",
            content: [
                {
                    type: "paragraph",
                    text: "In digital communication and data storage, information corruption is an inevitable reality. Whether transmitting data between computers over networks or saving files to storage devices, bits can spontaneously flip from 0 to 1 or vice versa due to various factors including electrical interference, hardware failures, cosmic radiation, or thermal noise."
                },
                {
                    type: "key-concept",
                    text: "<h3>Real-World Scenarios</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Common Corruption Sources</h4>" +
                          "<ul>" +
                          "<li><b>Network Transmission:</b> Packet loss, signal degradation, electromagnetic interference</li>" +
                          "<li><b>Storage Media:</b> Hard drive sector errors, SSD cell degradation, optical disc scratches</li>" +
                          "<li><b>Memory:</b> RAM bit flips, cache corruption</li>" +
                          "<li><b>Wireless Communication:</b> Signal attenuation, multipath interference, noise</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Fundamental Challenges</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Detection vs Correction</h4>" +
                          "<ul>" +
                          "<li><b>Error Detection:</b> Determining that corruption has occurred</li>" +
                          "<li><b>Error Correction:</b> Reconstructing the original data</li>" +
                          "<li><b>False Positives:</b> When corrupted data accidentally forms valid codes</li>" +
                          "<li><b>Example:</b> Receiving 'CORALINE' when 'CAROLINE' was sent - both are valid English names</li>" +
                          "</ul>"
                },
                {
                    type: "math-example",
                    text: "<h4>The 'Close Enough' Principle</h4>" +
                          "<p>Error correction relies on the mathematical concept that if a corrupted code is sufficiently 'close' to the original uncorrupted code, we can make an educated guess about the intended message. This requires:</p>" +
                          "<ul>" +
                          "<li>A precise definition of 'distance' between codes</li>" +
                          "<li>Sufficient spacing between valid code words</li>" +
                          "<li>Redundancy to enable reconstruction</li>" +
                          "</ul>"
                }
            ]
        },
        {
            title: "2. Fixed-Length Code Example and Analysis",
            id: "fixed-length-example",
            audioFile: "audio/week11_slide_02.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>6-bit Fixed-Length Encoding System</h3>"
                },
                {
                    type: "math-example",
                    text: "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Symbol</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Binary Code</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Analysis</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>a</td><td style='padding: 8px; border: 1px solid #333;'>000000</td><td style='padding: 8px; border: 1px solid #333;'>All zeros</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>b</td><td style='padding: 8px; border: 1px solid #333;'>111111</td><td style='padding: 8px; border: 1px solid #333;'>All ones</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>c</td><td style='padding: 8px; border: 1px solid #333;'>110010</td><td style='padding: 8px; border: 1px solid #333;'>Mixed pattern</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>d</td><td style='padding: 8px; border: 1px solid #333;'>100101</td><td style='padding: 8px; border: 1px solid #333;'>Mixed pattern</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>e</td><td style='padding: 8px; border: 1px solid #333;'>011100</td><td style='padding: 8px; border: 1px solid #333;'>Mixed pattern</td></tr>" +
                          "</table>"
                },
                {
                    type: "math-example",
                    text: "<h4>Error Detection and Correction in Action</h4>" +
                          "<p><b>Received Corrupted Message:</b> 111011 000000 101101 001100</p>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Received</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Status</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Correction</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Decoded</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>111011</td><td style='padding: 8px; border: 1px solid #333;'>Invalid</td><td style='padding: 8px; border: 1px solid #333;'>111111 (1-bit flip)</td><td style='padding: 8px; border: 1px solid #333;'>b</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>000000</td><td style='padding: 8px; border: 1px solid #333;'>Valid</td><td style='padding: 8px; border: 1px solid #333;'>No change</td><td style='padding: 8px; border: 1px solid #333;'>a</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>101101</td><td style='padding: 8px; border: 1px solid #333;'>Invalid</td><td style='padding: 8px; border: 1px solid #333;'>100101 (1-bit flip)</td><td style='padding: 8px; border: 1px solid #333;'>d</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>001100</td><td style='padding: 8px; border: 1px solid #333;'>Invalid</td><td style='padding: 8px; border: 1px solid #333;'>011100 (1-bit flip)</td><td style='padding: 8px; border: 1px solid #333;'>e</td></tr>" +
                          "</table>" +
                          "<p><b>Assumption:</b> Maximum of one bit flip per code word</p>" +
                          "<p><b>Result:</b> Complete message recovery - 'b a d e'</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Why This Works</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>The code is designed so that each valid code word is sufficiently different from all others. When a single bit flips, the resulting invalid code is closer to its intended original than to any other valid code word. This enables unambiguous correction.</p>" +
                          "<p><b>Key Insight:</b> The minimum distance between any two code words determines the error correction capability.</p>"
                }
            ]
        },
        {
            title: "3. Error Detection Limits and Ambiguity",
            id: "error-limits",
            audioFile: "audio/week11_slide_03.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>When Error Correction Fails</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Problem Case: Received 110001</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Possible Original</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Distance</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Bits Changed</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>110010 (c)</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>Bit 5: 1→0</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>100101 (d)</td><td style='padding: 8px; border: 1px solid #333;'>2</td><td style='padding: 8px; border: 1px solid #333;'>Bits 2,5: 1→0, 0→1</td></tr>" +
                          "</table>" +
                          "<p><b>Ambiguity:</b> Cannot determine if this was 'c' with one error or 'd' with two errors</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Code Capability Analysis</h3>"
                },
                {
                    type: "math-example",
                    text: "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Error Scenario</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Capability</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Explanation</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>3-bit errors</td><td style='padding: 8px; border: 1px solid #333;'>Cannot detect</td><td style='padding: 8px; border: 1px solid #333;'>Might produce another valid code word</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>2-bit errors</td><td style='padding: 8px; border: 1px solid #333;'>Detect but not correct</td><td style='padding: 8px; border: 1px solid #333;'>Know error occurred but ambiguous correction</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>1-bit errors</td><td style='padding: 8px; border: 1px solid #333;'>Detect and correct</td><td style='padding: 8px; border: 1px solid #333;'>Unambiguous nearest valid code</td></tr>" +
                          "</table>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Mathematical Foundation</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>The limitations arise from the <b>minimum Hamming distance</b> of the code. For this 6-bit code:</p>" +
                          "<ul>" +
                          "<li>Minimum distance = 3 bits</li>" +
                          "<li>Detection capability: d-1 = 2 errors</li>" +
                          "<li>Correction capability: floor((d-1)/2) = 1 error</li>" +
                          "</ul>" +
                          "<p>This follows from the sphere-packing bound in coding theory.</p>"
                }
            ]
        },
        {
            title: "4. Hamming Distance Fundamentals",
            id: "hamming-distance",
            audioFile: "audio/week11_slide_04.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Formal Definitions</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Error Detection and Correction Capabilities</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Term</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Definition</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Mathematical Condition</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>k-error detecting</td><td style='padding: 8px; border: 1px solid #333;'>Can detect up to k bit-flips</td><td style='padding: 8px; border: 1px solid #333;'>d<sub>M</sub>(c) ≥ k + 1</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>k-error correcting</td><td style='padding: 8px; border: 1px solid #333;'>Can detect and correct up to k bit-flips</td><td style='padding: 8px; border: 1px solid #333;'>d<sub>M</sub>(c) ≥ 2k + 1</td></tr>" +
                          "</table>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Hamming Distance Definition</h3>"
                },
                {
                    type: "math-example",
                    text: "<p><b>Formal Definition:</b> For two binary strings w₁ and w₂ of equal length, the Hamming distance d(w₁, w₂) is the number of positions where the corresponding symbols differ.</p>" +
                          "<p>$$d(w_1, w_2) = \\sum_{i=1}^{n} [w_1[i] \\neq w_2[i]]$$</p>" +
                          "<p>where [condition] is 1 if true, 0 if false (Iverson bracket notation)</p>"
                },
                {
                    type: "math-example",
                    text: "<h4>Detailed Examples</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Strings</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Position-by-Position</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Distance</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Coraline vs Caroline</td><td style='padding: 8px; border: 1px solid #333;'>C o r a l i n e<br>C a r o l i n e</td><td style='padding: 8px; border: 1px solid #333;'>2 (positions 2,4)</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>235156235595 vs 235956735565</td><td style='padding: 8px; border: 1px solid #333;'>Compare digit by digit</td><td style='padding: 8px; border: 1px solid #333;'>3 differences</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>1001 vs 1011</td><td style='padding: 8px; border: 1px solid #333;'>1 0 0 1<br>1 0 1 1</td><td style='padding: 8px; border: 1px solid #333;'>1 (position 3)</td></tr>" +
                          "</table>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Geometric Interpretation</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>Think of binary strings as points in an n-dimensional space. The Hamming distance represents the 'distance' between these points when you can only move along the axes (changing one bit at a time).</p>" +
                          "<p><b>Visualization:</b> In 3-bit space, 000 and 111 are opposite corners of a cube, distance 3 apart.</p>"
                }
            ]
        },
        {
            title: "5. Code Hamming Distance and Robustness",
            id: "code-hamming-distance",
            audioFile: "audio/week11_slide_05.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Hamming Distance of a Code</h3>"
                },
                {
                    type: "math-example",
                    text: "<p><b>Definition:</b> For an encoding function c: A → {0,1}*, the minimum Hamming distance d<sub>M</sub>(c) is:</p>" +
                          "<p>$$d_M(c) = \\min\\{d(c(a_i), c(a_j)) \\mid a_i, a_j \\in A, a_i \\neq a_j\\}$$</p>" +
                          "<p>This represents the smallest distance between any two distinct code words in the code.</p>"
                },
                {
                    type: "math-example",
                    text: "<h4>Our Example Code Analysis</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Pair</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Codes</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Distance</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Calculation</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>a-b</td><td style='padding: 8px; border: 1px solid #333;'>000000 vs 111111</td><td style='padding: 8px; border: 1px solid #333;'>6</td><td style='padding: 8px; border: 1px solid #333;'>All bits differ</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>a-c</td><td style='padding: 8px; border: 1px solid #333;'>000000 vs 110010</td><td style='padding: 8px; border: 1px solid #333;'>3</td><td style='padding: 8px; border: 1px solid #333;'>Bits 1,2,5 differ</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>c-d</td><td style='padding: 8px; border: 1px solid #333;'>110010 vs 100101</td><td style='padding: 8px; border: 1px solid #333;'>3</td><td style='padding: 8px; border: 1px solid #333;'>Bits 2,4,6 differ</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>d-e</td><td style='padding: 8px; border: 1px solid #333;'>100101 vs 011100</td><td style='padding: 8px; border: 1px solid #333;'>5</td><td style='padding: 8px; border: 1px solid #333;'>Bits 1,2,3,5,6 differ</td></tr>" +
                          "</table>" +
                          "<p><b>Minimum Distance:</b> d<sub>M</sub>(c) = 3 (achieved by multiple pairs)</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Robustness Interpretation</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>The minimum Hamming distance directly measures code robustness:</p>" +
                          "<ul>" +
                          "<li><b>Distance 1:</b> No error detection - single bit flip creates another valid code</li>" +
                          "<li><b>Distance 2:</b> Can detect single errors but not correct them</li>" +
                          "<li><b>Distance 3:</b> Can detect 2 errors and correct 1 error</li>" +
                          "<li><b>Distance d:</b> Can detect d-1 errors and correct floor((d-1)/2) errors</li>" +
                          "</ul>" +
                          "<p><b>Our Code:</b> With d<sub>M</sub> = 3, we have 2-error detection and 1-error correction capability.</p>"
                }
            ]
        },
        {
            title: "6. Error Detection and Correction Theorems",
            id: "error-theorems",
            audioFile: "audio/week11_slide_06.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Fundamental Theorems of Error Control</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Theorem 1: Error Detection Capability</h4>" +
                          "<p>A code with minimum Hamming distance d can detect up to d-1 errors.</p>" +
                          "<p><b>Proof Sketch:</b> If fewer than d errors occur, the received word cannot equal another valid code word, so we know an error occurred.</p>" +
                          "<p><b>Example:</b> Our code with d=3 can detect 2-bit errors.</p>"
                },
                {
                    type: "math-example",
                    text: "<h4>Theorem 2: Error Correction Capability</h4>" +
                          "<p>A code with minimum Hamming distance d can correct up to floor((d-1)/2) errors.</p>" +
                          "<p><b>Proof Sketch:</b> With t errors or fewer, the received word is closer to the intended code word than to any other valid code word.</p>" +
                          "<p><b>Example:</b> Our code with d=3 can correct 1-bit errors (floor((3-1)/2) = 1).</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Geometric Interpretation</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>Imagine each code word as the center of a sphere with radius equal to the correction capability. These spheres don't overlap, ensuring unambiguous correction.</p>" +
                          "<ul>" +
                          "<li><b>Detection Radius:</b> d-1 (spheres can touch but not overlap)</li>" +
                          "<li><b>Correction Radius:</b> floor((d-1)/2) (spheres are separated)</li>" +
                          "<li><b>Our Code:</b> Radius = 1, so spheres of radius 1 around each code word don't touch</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Maximum Likelihood Decoding</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>When we receive a corrupted word w, we find the valid code word c that minimizes d(w, c). This is the most likely intended message.</p>" +
                          "<p><b>Mathematical Foundation:</b> Assuming independent bit errors with probability p < 0.5, the code word with smallest Hamming distance to the received word has the highest probability of being the original.</p>" +
                          "<p><b>Limitation:</b> Requires computing distances to all valid code words, which becomes impractical for large codes.</p>"
                }
            ]
        },
        {
            title: "7. Parity Bit Error Detection",
            id: "parity-bits",
            audioFile: "audio/week11_slide_07.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>The Parity Bit Strategy</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Basic Concepts and Definitions</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Term</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Definition</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Mathematical Expression</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Hamming Weight</td><td style='padding: 8px; border: 1px solid #333;'>Number of 1s in a code word</td><td style='padding: 8px; border: 1px solid #333;'>w(c) = ∑ c[i]</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Even Parity</td><td style='padding: 8px; border: 1px solid #333;'>Total number of 1s is even</td><td style='padding: 8px; border: 1px solid #333;'>w(c) ≡ 0 (mod 2)</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Odd Parity</td><td style='padding: 8px; border: 1px solid #333;'>Total number of 1s is odd</td><td style='padding: 8px; border: 1px solid #333;'>w(c) ≡ 1 (mod 2)</td></tr>" +
                          "</table>"
                },
                {
                    type: "math-example",
                    text: "<h4>Transmission Protocol</h4>" +
                          "<ol>" +
                          "<li><b>Sender:</b> Count 1s in the data word</li>" +
                          "<li><b>Sender:</b> Add parity bit to make total 1s even (for even parity systems)</li>" +
                          "<li><b>Transmit:</b> Data word + parity bit</li>" +
                          "<li><b>Receiver:</b> Count total 1s in received word</li>" +
                          "<li><b>Receiver:</b> If count is odd → error detected</li>" +
                          "</ol>"
                },
                {
                    type: "math-example",
                    text: "<h4>ASCII Transmission Examples</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Character</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>ASCII (7-bit)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Weight</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Even Parity</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Odd Parity</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>C</td><td style='padding: 8px; border: 1px solid #333;'>1000011</td><td style='padding: 8px; border: 1px solid #333;'>3 (odd)</td><td style='padding: 8px; border: 1px solid #333;'>1000011<strong>1</strong></td><td style='padding: 8px; border: 1px solid #333;'>1000011<strong>0</strong></td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>N</td><td style='padding: 8px; border: 1px solid #333;'>1001110</td><td style='padding: 8px; border: 1px solid #333;'>4 (even)</td><td style='padding: 8px; border: 1px solid #333;'>1001110<strong>0</strong></td><td style='padding: 8px; border: 1px solid #333;'>1001110<strong>1</strong></td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>A</td><td style='padding: 8px; border: 1px solid #333;'>1000001</td><td style='padding: 8px; border: 1px solid #333;'>2 (even)</td><td style='padding: 8px; border: 1px solid #333;'>1000001<strong>0</strong></td><td style='padding: 8px; border: 1px solid #333;'>1000001<strong>1</strong></td></tr>" +
                          "</table>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Mathematical Properties</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>Parity checking creates a code with minimum Hamming distance 2:</p>" +
                          "<ul>" +
                          "<li>Single-bit errors change parity → detected</li>" +
                          "<li>Two-bit errors preserve parity → undetected</li>" +
                          "<li>Three-bit errors change parity → detected</li>" +
                          "<li>Any odd number of errors → detected</li>" +
                          "<li>Any even number of errors → undetected</li>" +
                          "</ul>" +
                          "<p><b>Formally:</b> d<sub>M</sub> = 2, so it's 1-error detecting but not error-correcting.</p>"
                }
            ]
        },
        {
            title: "8. Parity Check Limitations and Scenarios",
            id: "parity-limitations",
            audioFile: "audio/week11_slide_08.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Reception Scenarios Analysis</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Transmitting 'C' with Even Parity: 10000111</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Received</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>1s Count</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Parity</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Interpretation</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Decoded</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>10000111</td><td style='padding: 8px; border: 1px solid #333;'>4 (even)</td><td style='padding: 8px; border: 1px solid #333;'>Correct</td><td style='padding: 8px; border: 1px solid #333;'>No error</td><td style='padding: 8px; border: 1px solid #333;'>C (1000011)</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>11000111</td><td style='padding: 8px; border: 1px solid #333;'>5 (odd)</td><td style='padding: 8px; border: 1px solid #333;'>Wrong</td><td style='padding: 8px; border: 1px solid #333;'>Error detected</td><td style='padding: 8px; border: 1px solid #333;'>Request retransmission</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>11100111</td><td style='padding: 8px; border: 1px solid #333;'>6 (even)</td><td style='padding: 8px; border: 1px solid #333;'>Correct</td><td style='padding: 8px; border: 1px solid #333;'>No error detected</td><td style='padding: 8px; border: 1px solid #333;'>Wrong! (1110011)</td></tr>" +
                          "</table>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Critical Analysis of Limitations</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Advantages of Parity Checking</h4>" +
                          "<ul>" +
                          "<li><b>Minimal Overhead:</b> Only one extra bit regardless of data length</li>" +
                          "<li><b>Simple Implementation:</b> Easy to implement in hardware with XOR gates</li>" +
                          "<li><b>Effective for Single Errors:</b> Catches all single-bit flips</li>" +
                          "<li><b>Low Computational Cost:</b> Fast to compute and verify</li>" +
                          "</ul>"
                },
                {
                    type: "math-example",
                    text: "<h4>Severe Disadvantages</h4>" +
                          "<ul>" +
                          "<li><b>No Error Correction:</b> Can only detect errors, not fix them</li>" +
                          "<li><b>Even Error Blindness:</b> Even number of bit flips go undetected</li>" +
                          "<li><b>Limited Detection:</b> Cannot identify which bit was corrupted</li>" +
                          "<li><b>False Confidence:</b> May indicate 'no error' when multiple errors occurred</li>" +
                          "<li><b>Example Failure:</b> Two bit flips can change 'C' to a different valid character while maintaining correct parity</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Mathematical Failure Analysis</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>The parity check fails because it only provides one bit of redundancy information. From information theory:</p>" +
                          "<ul>" +
                          "<li><b>Redundancy:</b> 1 bit for n-bit message</li>" +
                          "<li><b>Detection Capability:</b> Can distinguish 2<sup>1</sup> = 2 states (error/no error)</li>" +
                          "<li><b>Correction Requirement:</b> Need enough states to identify error location</li>" +
                          "<li><b>For n-bit correction:</b> Need at least log₂(n+1) redundancy bits</li>" +
                          "</ul>" +
                          "<p>This limitation motivated the development of more sophisticated codes like Hamming codes.</p>"
                }
            ]
        },
        {
            title: "9. Hamming Code: Historical Context and Motivation",
            id: "hamming-intro",
            audioFile: "audio/week11_slide_09.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Richard Wesley Hamming (1915-1998)</h3>"
                },
                {
                    type: "paragraph",
                    text: "Richard Hamming was an American mathematician and computer scientist working at Bell Labs in the 1940s. Frustrated with the limitations of parity checking, which could only detect errors but not correct them, he recognized that as computers became more complex and data transmission more critical, automatic error correction would become essential."
                },
                {
                    type: "math-example",
                    text: "<h4>Historical Context</h4>" +
                          "<ul>" +
                          "<li><b>1940s Computing:</b> Early computers used simple parity checking</li>" +
                          "<li><b>Bell Labs:</b> Hamming worked on early computing systems</li>" +
                          "<li><b>Frustration:</b> Weekend computations would fail due to undetected/corrected errors</li>" +
                          "<li><b>Innovation:</b> Developed the first practical error-correcting code in 1950</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Hamming Code Design Goals</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Key Design Principles</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Feature</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Description</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Advantage</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Forward Error Correction</td><td style='padding: 8px; border: 1px solid #333;'>Receiver can correct errors without retransmission</td><td style='padding: 8px; border: 1px solid #333;'>Faster than request-repeat protocols</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Strategic Redundancy</td><td style='padding: 8px; border: 1px solid #333;'>Parity bits check overlapping sets of data bits</td><td style='padding: 8px; border: 1px solid #333;'>Enables error localization</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Single-bit Correction</td><td style='padding: 8px; border: 1px solid #333;'>Can correct any single-bit error</td><td style='padding: 8px; border: 1px solid #333;'>Handles most common error scenario</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Double-bit Detection</td><td style='padding: 8px; border: 1px solid #333;'>Can detect (but not correct) two-bit errors</td><td style='padding: 8px; border: 1px solid #333;'>Prevents incorrect correction of multiple errors</td></tr>" +
                          "</table>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Comparison with Other Methods</h3>"
                },
                {
                    type: "math-example",
                    text: "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Method</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Redundancy</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Detection</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Correction</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Complexity</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Simple Parity</td><td style='padding: 8px; border: 1px solid #333;'>1 bit</td><td style='padding: 8px; border: 1px solid #333;'>Single-bit</td><td style='padding: 8px; border: 1px solid #333;'>None</td><td style='padding: 8px; border: 1px solid #333;'>Very Low</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Maximum Likelihood</td><td style='padding: 8px; border: 1px solid #333;'>High</td><td style='padding: 8px; border: 1px solid #333;'>Multiple bits</td><td style='padding: 8px; border: 1px solid #333;'>Multiple bits</td><td style='padding: 8px; border: 1px solid #333;'>Very High</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Hamming Code</td><td style='padding: 8px; border: 1px solid #333;'>Moderate</td><td style='padding: 8px; border: 1px solid #333;'>Double-bit</td><td style='padding: 8px; border: 1px solid #333;'>Single-bit</td><td style='padding: 8px; border: 1px solid #333;'>Low</td></tr>" +
                          "</table>" +
                          "<p><b>Key Insight:</b> Hamming code provides an optimal balance between redundancy and capability for single-error scenarios.</p>"
                }
            ]
        },
        {
            title: "10. Hamming Code Implementation: Three-Step Process",
            id: "hamming-implementation",
            audioFile: "audio/week11_slide_10.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Systematic Implementation Approach</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Step 1: Calculate Number of Redundant Bits</h4>" +
                          "<p>For m data bits, we need r redundant bits satisfying:</p>" +
                          "<p>$$m + r \\leq 2^r - 1$$</p>" +
                          "<p><b>Explanation:</b> The redundant bits must be enough to encode all possible error positions (including 'no error').</p>" +
                          "<p><b>ASCII Example:</b> m = 7 data bits</p>" +
                          "<p>7 + r ≤ 2<sup>r</sup> - 1</p>" +
                          "<p>Try r = 3: 7 + 3 = 10, 2<sup>3</sup> - 1 = 7 → 10 ≤ 7? <strong>No</strong></p>" +
                          "<p>Try r = 4: 7 + 4 = 11, 2<sup>4</sup> - 1 = 15 → 11 ≤ 15? <strong>Yes</strong></p>" +
                          "<p><b>Result:</b> r = 4 redundant bits needed</p>"
                },
                {
                    type: "math-example",
                    text: "<h4>General Formula</h4>" +
                          "<p>For m data bits, minimum r satisfies:</p>" +
                          "<p>$$r = \\lceil \\log_2(m + r + 1) \\rceil$$</p>" +
                          "<p>Approximately: r ≈ 2 + ⌊log₂m⌋</p>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Data Bits (m)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Redundant Bits (r)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Total Bits</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Efficiency</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>4</td><td style='padding: 8px; border: 1px solid #333;'>3</td><td style='padding: 8px; border: 1px solid #333;'>7</td><td style='padding: 8px; border: 1px solid #333;'>57%</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>7 (ASCII)</td><td style='padding: 8px; border: 1px solid #333;'>4</td><td style='padding: 8px; border: 1px solid #333;'>11</td><td style='padding: 8px; border: 1px solid #333;'>64%</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>16</td><td style='padding: 8px; border: 1px solid #333;'>5</td><td style='padding: 8px; border: 1px solid #333;'>21</td><td style='padding: 8px; border: 1px solid #333;'>76%</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>32</td><td style='padding: 8px; border: 1px solid #333;'>6</td><td style='padding: 8px; border: 1px solid #333;'>38</td><td style='padding: 8px; border: 1px solid #333;'>84%</td></tr>" +
                          "</table>"
                },
                {
                    type: "math-example",
                    text: "<h4>Step 2: Position Redundant Bits</h4>" +
                          "<p>Redundant bits are placed at positions that are powers of 2:</p>" +
                          "<p>Positions: 1, 2, 4, 8, 16, 32, ...</p>" +
                          "<p><b>ASCII Example:</b> Total 11 bits = 7 data + 4 redundant</p>" +
                          "<p>Redundant bits at positions: 1, 2, 4, 8</p>" +
                          "<p>Data bits at positions: 3, 5, 6, 7, 9, 10, 11</p>" +
                          "<p><b>Bit Position Mapping:</b> 1(H) 2(H) 3(D) 4(H) 5(D) 6(D) 7(D) 8(H) 9(D) 10(D) 11(D)</p>"
                },
                {
                    type: "math-example",
                    text: "<h4>Step 3: Calculate Redundant Bit Values</h4>" +
                          "<p>Each redundant bit checks a specific set of data bits:</p>" +
                          "<ul>" +
                          "<li><b>Bit 1 (2⁰):</b> Checks all positions where bit 0 = 1 in binary (1,3,5,7,9,11,...)</li>" +
                          "<li><b>Bit 2 (2¹):</b> Checks all positions where bit 1 = 1 in binary (2,3,6,7,10,11,...)</li>" +
                          "<li><b>Bit 4 (2²):</b> Checks all positions where bit 2 = 1 in binary (4,5,6,7,12,13,14,15,...)</li>" +
                          "<li><b>Bit 8 (2³):</b> Checks all positions where bit 3 = 1 in binary (8,9,10,11,12,13,14,15,...)</li>" +
                          "</ul>" +
                          "<p><b>Key Insight:</b> Each data bit is checked by multiple redundant bits, creating a unique 'signature' for each position.</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Error Localization Principle</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>If certain redundant bits report errors, their positions sum to the corrupted data bit position:</p>" +
                          "<p><b>Example:</b> If bits 4 and 2 are wrong → error at position 4 + 2 = 6</p>" +
                          "<p><b>Why this works:</b> Each data bit position has a unique binary representation, and the redundant bits that check it correspond to the 1-bits in that representation.</p>" +
                          "<p><b>Position 6:</b> Binary 0110 → checked by bits 4 and 2 (positions with 1s)</p>" +
                          "<p><b>Position 11:</b> Binary 1011 → checked by bits 8, 2, and 1</p>"
                }
            ]
        },
        
                {
    title: "11. Hamming Bit Calculation: Detailed Example",
    id: "hamming-calculation",
    audioFile: "audio/week11_slide_11.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>Hamming Table Method for ASCII Letter E</h3>"
        },
        {
            type: "math-example",
            text: "<h4>Step 1: Prepare the Data (Positions from Right to Left)</h4>" +
                  "<p><b>ASCII for 'E':</b> 1000101 (7 bits)</p>" +
                  "<p><b>Position mapping (right to left):</b></p>" +
                  "<p>Position: 11 10 9 8 7 6 5 4 3 2 1</p>" +
                  "<p>Type:     D7 D6 D5 P8 D4 D3 D2 P4 D1 P2 P1</p>" +
                  "<p><b>Initial placement of data bits:</b> (yellow Hamming bits yet to be calculated)</p>" +

"<center><table border='0' style='margin-left: 10px; border-collapse: collapse; border: 0 solid #333; font-size: 12px; vertical-align: middle;'>" +
"<tr style='border: 0 solid #333; height: 16px;'>" +
"<td> bits positions </td><td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>11</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>10</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>9</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>8</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>7</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>6</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>5</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>4</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>3</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>2</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>1</td>" +
"</tr>" +
"<tr style='border: 1px solid #333; height: 16px; background-color: #f9f9f9;'>" +
"<td> Data bits</td><td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #fffacd;'>_</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #fffacd;'>_</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #fffacd;'>_</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #fffacd;'>_</td>" +
"</tr>" +
"</table></center>" +

                  "<p>Here <b>Data bits:</b> Position 3=1, 5=0, 6=1, 7=0, 9=0, 10=0, 11=1</p>"
        },
{
    type: "math-example",
    text: "<h4>Step 2: Create Hamming Table Structure</h4>" +
          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Data bit</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2³ (8)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2² (4)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2¹ (2)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2⁰ (1)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Data Value</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Explanation</th></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>3</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>3 = 2+1 → bits 2,1 check this</td></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>5</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>5 = 4+1 → bits 4,1 check this</td></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>6</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>6 = 4+2 → bits 4,2 check this</td></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>7</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>7 = 4+2+1 → bits 4,2,1 check this</td></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>9</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>9 = 8+1 → bits 8,1 check this</td></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>10</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>10 = 8+2 → bits 8,2 check this</td></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>11</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>11 = 8+2+1 → bits 8,2,1 check this</td></tr>" +
          "<tr style='border: 1px solid #333; background-color: #e6f3ff;'><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>Parity Sum</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>3</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>2</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>Count of 1s in each column</td></tr>" +
          "<tr style='border: 1px solid #333; background-color: #e6f3ff;'><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>Hamming Bit</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>Set to make parity even</td></tr>" +
          "</table>"
},
        {
            type: "math-example",
            text: "<h4>Step 3: Calculate Hamming Bits</h4>" +
                  "<p>For each Hamming column, count the number of 1s and set Hamming bit to make parity sum even:</p>" +
                  "<ul>" +
                  "<li><b>Column 2³ (8):</b> Positions 9,10,11 = 0,0,1 → one 1 (odd) → Hamming bit = 1</li>" +
                  "<li><b>Column 2² (4):</b> Positions 5,6,7 = 0,1,0 → one 1 (odd) → Hamming bit = 1</li>" +
                  "<li><b>Column 2¹ (2):</b> Positions 3,6,7,9,10,11 = 1,1,0,0,0,1 → three 1s (odd) → Hamming bit = 1</li>" +
                  "<li><b>Column 2⁰ (1):</b> Positions 3,5,7,9,11 = 1,0,0,0,1 → two 1s (even) → Hamming bit = 0</li>" +
                  "</ul>" +
                  "<p><b>Result:</b> Hamming bits = 1110 (positions 8,4,2,1)</p>"
        },
        {
            type: "math-example",
            text: "<h4>Final Hamming Code</h4>" +
                  "<p><b>Complete transmission:</b> 1 0 0 1 0 1 0 1 1 1 0</p>" +
                  "<p><b>Breakdown (right to left):</b> " + 

"<table border='1' style='display: inline-block;margin: 0 auto; border-collapse: collapse; border: 1px solid #333; font-size: 12px;'>" +
"<tr style='border: 1px solid #333; height: 16px;'>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 10px;'>11</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 10px;'>10</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 10px;'>9</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 10px;'>8</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 10px;'>7</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 10px;'>6</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 10px;'>5</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 10px;'>4</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 10px;'>3</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 10px;'>2</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 10px;'>1</td>" +
"</tr>" +
"<tr style='border: 1px solid #333; height: 16px;'>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center;font-size: 12pt;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center;font-size: 12pt;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center;font-size: 12pt;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center;font-size: 12pt;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center;font-size: 12pt;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center;font-size: 12pt;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center;font-size: 12pt;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center;font-size: 12pt;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center;font-size: 12pt;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center;font-size: 12pt;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center;font-size: 12pt;'>0</td></tr></table></p>" +
 "<div style='clear: both;'></div><br>" +
"<p><b>Verification:</b> This code has minimum Hamming distance 3, providing single-error correction and double-error detection.</p>"
        }
    ]
},

          {
    title: "12. Error Correction with Hamming Code: Detailed Walkthrough",
    id: "hamming-correction",
    audioFile: "audio/week11_slide_12.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>Single-Bit Error Correction Process</h3>"
        },
{
    type: "math-example",
    text: "<h4>Scenario: Bit 6 Corrupted During Transmission</h4>" +
          "<p><b>Original Hamming code for 'E':</b> 1 0 0 1 0 1 0 1 1 1 0</p>" +

"<center><table border='0' style='margin-left: 10px; border-collapse: collapse; border: 0 solid #333; font-size: 12px; vertical-align: middle;'>" +
"<tr style='border: 0 solid #333; height: 16px;'>" +
"<td> bits positions </td><td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>11</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>10</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>9</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>8</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>7</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>6</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>5</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>4</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>3</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>2</td>" +
"<td style='padding: 2px; border: 0 solid #333; text-align: center; font-size: 10px;'>1</td>" +
"</tr>" +
"<tr style='border: 1px solid #333; height: 16px; background-color: #f9f9f9;'>" +
"<td> Transmitted</td><td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #fffacd;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #fffacd;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #fffacd;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #fffacd;'>0</td>" +
"</tr>" +
"<tr style='border: 1px solid #333; height: 16px; background-color: #fff0f0;'>" +
"<td> Received (corrupted)</td><td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #fffacd;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff; color: red; font-weight: bold;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>0</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #fffacd;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #e6f3ff;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #fffacd;'>1</td>" +
"<td style='padding: 2px; border: 1px solid #333; text-align: center; font-size: 12pt; background-color: #fffacd;'>0</td>" +
"</tr>" +
"</table></center>" +

          "<p><b>Error:</b> Position 6 changed from 1 to 0</p>"
},
        {
    type: "math-example",
    text: "<h4>Step 1: Receiver Builds Hamming Table from Received Data</h4>" +
          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Data bit</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2³ (8)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2² (4)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2¹ (2)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2⁰ (1)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Received Value</th></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>3</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>5</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>6</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>7</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>9</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>10</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>11</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td></tr>" +
          "<tr style='border: 1px solid #333; background-color: #e6f3ff;'><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>Parity Count</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>2</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>2</td><td style='padding: 8px; border: 1px solid #333;'></td></tr>" +
          "<tr style='border: 1px solid #333; background-color: #e6f3ff;'><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>Calculated Hamming</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td></tr>" +
          "<tr style='border: 1px solid #333; background-color: #fff0e6;'><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>Received Hamming</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td></tr>" +
          "</table>" +
          "<p><b>Calculations:</b></p>" +
          "<ul>" +
          "<li><b>Bit 8 (2³):</b> Positions 9,10,11 = 0,0,1 → one 1 (odd) → Hamming = 1</li>" +
          "<li><b>Bit 4 (2²):</b> Positions 5,6,7 = 0,0,0 → zero 1s (even) → Hamming = 0</li>" +
          "<li><b>Bit 2 (2¹):</b> Positions 3,6,7,9,10,11 = 1,0,0,0,0,1 → two 1s (even) → Hamming = 0</li>" +
          "<li><b>Bit 1 (2⁰):</b> Positions 3,5,7,9,11 = 1,0,0,0,1 → two 1s (even) → Hamming = 0</li>" +
          "</ul>"
},
        {
            type: "math-example",
            text: "<h4>Step 2: Identify Discrepancies</h4>" +
                  "<p>Compare calculated Hamming bits with received Hamming bits:</p>" +
                  "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                  "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Hamming Bit</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Position</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Calculated</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Received</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Error</th></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>2³</td><td style='padding: 8px; border: 1px solid #333;'>8</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>No</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>2²</td><td style='padding: 8px; border: 1px solid #333;'>4</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'><strong>Yes</strong></td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>2¹</td><td style='padding: 8px; border: 1px solid #333;'>2</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'><strong>Yes</strong></td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>2⁰</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>No</td></tr>" +
                  "</table>" +
                  "<p><b>Error Pattern:</b> Bits 4 and 2 are incorrect</p>"
        },
        {
            type: "math-example",
            text: "<h4>Step 3: Locate and Correct the Error</h4>" +
                  "<p><b>Error Position Calculation:</b> Sum of incorrect Hamming bit positions</p>" +
                  "<p>4 + 2 = 6</p>" +
                  "<p><b>Conclusion:</b> Data bit at position 6 was corrupted</p>" +
                  "<p><b>Correction:</b> Flip bit 6 from 0 back to 1</p>" +
                  "<p><b>Corrected Message:</b> 1 0 0 1 0 1 0 1 1 1 0 → ASCII 'E' (1000101)</p>" +
                  "<p><b>Verification:</b> Position 6 = binary 0110 → checked by bits 4 and 2 ✓</p>"
        }
    ]
},
{
    title: "13. Comprehensive Hamming Code Examples",
    id: "hamming-examples",
    audioFile: "audio/week11_slide_13.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>Three-Word Message Analysis: </h3>"
        },
        {
            type: "math-example",
            text: "<h4>Received Hamming-Encoded Message</h4>" +
                  "<p><b>Three words received (Hamming bits underlined):</b></p>" +
                  "<p>110<u>0</u>001<u>1</u>0<u>00</u> &nbsp; 110<u>0</u>000<u>1</u>1<u>10</u> &nbsp; 110<u>1</u>010<u>1</u>0<u>10</u></p>" +
                  "<p><b>Apparent ASCII decoding:</b> 1100010 1100001 1100100 → 'b a d'</p>" +
                  "<p><b>Question:</b> Is this correct, or are there errors to correct?</p>"
        },
        {
            type: "math-example",
            text: "<h4>First Word Analysis: 11000011000</h4>" +
                  "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                  "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Data bit</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2³ (8)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2² (4)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2¹ (2)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2⁰ (1)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Code word</th></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>3</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>5</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>6</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>7</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>9</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>10</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>11</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td></tr>" +
                  "<tr style='border: 1px solid #333; background-color: #e6f3ff;'><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>Hamming</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td></tr>" +
                  "<tr style='border: 1px solid #333; background-color: #fff0e6;'><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>Check</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td></tr>" +
                  "</table>" +
                  "<p><b>Analysis:</b> Hamming bits match expected values</p>" +
                  "<p><b>Conclusion:</b> No errors in first word</p>" +
                  "<p><b>Data:</b> 1100010 (ASCII 'b')</p>"
        },
        {
            type: "math-example",
            text: "<h4>Second Word Analysis: 11000001110</h4>" +
                  "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                  "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Data bit</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2³ (8)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2² (4)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2¹ (2)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2⁰ (1)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Code word</th></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>3</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>5</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>6</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>7</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>9</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>10</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>11</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td></tr>" +
                  "<tr style='border: 1px solid #333; background-color: #e6f3ff;'><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>Hamming</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td></tr>" +
                  "<tr style='border: 1px solid #333; background-color: #fff0e6;'><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>Check</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td></tr>" +
                  "</table>" +
                  "<p><b>Error Pattern:</b> Only bit 4 (2²) is incorrect</p>" +
                  "<p><b>Interpretation:</b> When only one Hamming bit is wrong, it means that Hamming bit itself was corrupted</p>" +
                  "<p><b>Correction:</b> Extract data directly without flipping any data bits</p>" +
                  "<p><b>Corrected Data:</b> 1100001 (ASCII 'a')</p>"
        },
        {
            type: "math-example",
            text: "<h4>Third Word Analysis: 11010101010</h4>" +
                  "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                  "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Data bit</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2³ (8)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2² (4)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2¹ (2)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>2⁰ (1)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Code word</th></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>3</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>5</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>6</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>7</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>9</td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>0</td><td style='padding: 8px; border: 1px solid #333;'>0</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>10</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>11</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>1</td></tr>" +
                  "<tr style='border: 1px solid #333; background-color: #e6f3ff;'><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>Hamming</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333;'></td></tr>" +
                  "<tr style='border: 1px solid #333; background-color: #fff0e6;'><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>Check</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>1</td><td style='padding: 8px; border: 1px solid #333; font-weight: bold;'>0</td><td style='padding: 8px; border: 1px solid #333;'></td></tr>" +
                  "</table>" +
                  "<p><b>Error Pattern:</b> Bits 8 (2³) and 1 (2⁰) are incorrect</p>" +
                  "<p><b>Error Position:</b> 8 + 1 = 9</p>" +
                  "<p><b>Correction:</b> Flip bit 9 from 0 to 1</p>" +
                  "<p><b>Corrected Data:</b> 1110100 (ASCII 't')</p>" +
                  "<p><b>Final Corrected Message:</b> 'b a t' (changed from 'b a d')</p>"
        },
        {
            type: "key-concept",
            text: "<h3>Key Learning from This Example</h3>"
        },
        {
            type: "math-example",
            text: "<ul>" +
                  "<li><b>Single Hamming bit error:</b> The redundancy bit itself was corrupted - extract data directly</li>" +
                  "<li><b>Multiple Hamming bit errors:</b> Data bit at the sum of those positions was corrupted - flip that data bit</li>" +
                  "<li><b>No errors:</b> All Hamming bits match expected values</li>" +
                  "<li><b>Practical impact:</b> Error correction changed 'bad' to 'bat', demonstrating real-world importance</li>" +
                  "</ul>"
        }
    ]
},
{
    title: "14. Hamming Code: Pros, Cons, and Applications",
    id: "hamming-pros-cons",
    audioFile: "audio/week11_slide_14.wav",
    content: [
        {
            type: "key-concept",
            text: "<h3>Hamming Code Efficiency Analysis</h3>"
        },
        {
            type: "math-example",
            text: "<h4>Redundancy Requirements</h4>" +
                  "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                  "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Data Bits (m)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Redundant Bits (r)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Total Bits</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Efficiency</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Overhead</th></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>4</td><td style='padding: 8px; border: 1px solid #333;'>3</td><td style='padding: 8px; border: 1px solid #333;'>7</td><td style='padding: 8px; border: 1px solid #333;'>57%</td><td style='padding: 8px; border: 1px solid #333;'>43%</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>7 (ASCII)</td><td style='padding: 8px; border: 1px solid #333;'>4</td><td style='padding: 8px; border: 1px solid #333;'>11</td><td style='padding: 8px; border: 1px solid #333;'>64%</td><td style='padding: 8px; border: 1px solid #333;'>36%</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>16</td><td style='padding: 8px; border: 1px solid #333;'>5</td><td style='padding: 8px; border: 1px solid #333;'>21</td><td style='padding: 8px; border: 1px solid #333;'>76%</td><td style='padding: 8px; border: 1px solid #333;'>24%</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>32</td><td style='padding: 8px; border: 1px solid #333;'>6</td><td style='padding: 8px; border: 1px solid #333;'>38</td><td style='padding: 8px; border: 1px solid #333;'>84%</td><td style='padding: 8px; border: 1px solid #333;'>16%</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>64</td><td style='padding: 8px; border: 1px solid #333;'>7</td><td style='padding: 8px; border: 1px solid #333;'>71</td><td style='padding: 8px; border: 1px solid #333;'>90%</td><td style='padding: 8px; border: 1px solid #333;'>10%</td></tr>" +
                  "</table>"
        },
        {
            type: "key-concept",
            text: "<h3>Error Correction Capabilities</h3>"
        },
        {
            type: "math-example",
            text: "<h4>Hamming Code Performance</h4>" +
                  "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                  "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Error Type</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Detection</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Correction</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Notes</th></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Single-bit error</td><td style='padding: 8px; border: 1px solid #333;'>Yes</td><td style='padding: 8px; border: 1px solid #333;'>Yes</td><td style='padding: 8px; border: 1px solid #333;'>Primary strength</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Double-bit error</td><td style='padding: 8px; border: 1px solid #333;'>Yes</td><td style='padding: 8px; border: 1px solid #333;'>No</td><td style='padding: 8px; border: 1px solid #333;'>Can detect but not correct</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Triple-bit error</td><td style='padding: 8px; border: 1px solid #333;'>No</td><td style='padding: 8px; border: 1px solid #333;'>No</td><td style='padding: 8px; border: 1px solid #333;'>May cause mis-correction</td></tr>" +
                  "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Burst errors</td><td style='padding: 8px; border: 1px solid #333;'>Limited</td><td style='padding: 8px; border: 1px solid #333;'>Limited</td><td style='padding: 8px; border: 1px solid #333;'>Depends on error pattern</td></tr>" +
                  "</table>"
        }
    ]
},
                {
            title: "15. Summary and Key Takeaways",
            id: "hamming-summary",
            audioFile: "audio/week11_slide_15.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Lecture Overview</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>From Problem to Solution</h4>" +
                          "<p>We began with the fundamental challenge of information corruption in digital systems and progressed through increasingly sophisticated error control strategies:</p>" +
                          "<ul>" +
                          "<li><b>Problem:</b> Bit errors during transmission/storage are inevitable</li>" +
                          "<li><b>Detection:</b> Simple parity bits can detect single errors</li>" +
                          "<li><b>Correction:</b> Hamming codes provide automatic single-error correction</li>" +
                          "<li><b>Efficiency:</b> Mathematical optimization of redundancy vs. capability</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Core Mathematical Concepts</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Fundamental Definitions</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Concept</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Definition</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Significance</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Hamming Distance</td><td style='padding: 8px; border: 1px solid #333;'>Number of differing bits between codes</td><td style='padding: 8px; border: 1px solid #333;'>Measures code robustness</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Minimum Distance</td><td style='padding: 8px; border: 1px solid #333;'>Smallest distance between any two valid codes</td><td style='padding: 8px; border: 1px solid #333;'>Determines error correction capability</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Parity Checking</td><td style='padding: 8px; border: 1px solid #333;'>Even/odd count of 1s in data</td><td style='padding: 8px; border: 1px solid #333;'>Basic error detection mechanism</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Redundancy Bits</td><td style='padding: 8px; border: 1px solid #333;'>Extra bits added for error control</td><td style='padding: 8px; border: 1px solid #333;'>Enable detection and correction</td></tr>" +
                          "</table>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Hamming Code Implementation</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Three-Step Process</h4>" +
                          "<ol>" +
                          "<li><b>Calculate Redundancy:</b> m + r ≤ 2ʳ - 1 (for m data bits, r redundancy bits)</li>" +
                          "<li><b>Position Bits:</b> Redundancy at powers of 2 (1, 2, 4, 8...), data in remaining positions</li>" +
                          "<li><b>Calculate Values:</b> Each redundancy bit covers specific data bits based on binary position</li>" +
                          "</ol>" +
                          "<p><b>Key Insight:</b> The sum of incorrect redundancy bit positions identifies the error location.</p>"
                },
                {
                    type: "math-example",
                    text: "<h4>Error Correction Capabilities</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Minimum Distance</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Detection</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Correction</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Example</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>2</td><td style='padding: 8px; border: 1px solid #333;'>1 error</td><td style='padding: 8px; border: 1px solid #333;'>None</td><td style='padding: 8px; border: 1px solid #333;'>Simple parity</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>3</td><td style='padding: 8px; border: 1px solid #333;'>2 errors</td><td style='padding: 8px; border: 1px solid #333;'>1 error</td><td style='padding: 8px; border: 1px solid #333;'>Hamming code</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>4</td><td style='padding: 8px; border: 1px solid #333;'>3 errors</td><td style='padding: 8px; border: 1px solid #333;'>1 error</td><td style='padding: 8px; border: 1px solid #333;'>Extended Hamming</td></tr>" +
                          "</table>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Practical Applications and Limitations</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Where Hamming Codes Excel</h4>" +
                          "<ul>" +
                          "<li><b>ECC Memory:</b> Correcting single-bit errors in RAM</li>" +
                          "<li><b>Storage Systems:</b> Protecting critical data sectors</li>" +
                          "<li><b>Embedded Systems:</b> Simple, hardware-friendly implementation</li>" +
                          "<li><b>Educational Tool:</b> Perfect introduction to coding theory</li>" +
                          "</ul>" +
                          "<h4>Inherent Limitations</h4>" +
                          "<ul>" +
                          "<li><b>Single Errors Only:</b> Cannot correct multiple bit errors</li>" +
                          "<li><b>Burst Error Vulnerability:</b> Adjacent errors overwhelm the code</li>" +
                          "<li><b>Overhead:</b> Significant redundancy for small blocks</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Historical and Theoretical Significance</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Richard Hamming's Legacy</h4>" +
                          "<p>Hamming's 1950 invention represented a breakthrough in reliable computing:</p>" +
                          "<ul>" +
                          "<li><b>First Practical ECC:</b> Demonstrated automatic error correction was feasible</li>" +
                          "<li><b>Mathematical Foundation:</b> Established principles for modern coding theory</li>" +
                          "<li><b>Hardware Implementation:</b> Showed complex math could be implemented simply</li>" +
                          "<li><b>Inspiration:</b> Paved the way for Reed-Solomon, LDPC, and turbo codes</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Looking Forward</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Beyond Hamming Codes</h4>" +
                          "<p>While Hamming codes remain important, modern systems often use more advanced techniques:</p>" +
                          "<ul>" +
                          "<li><b>Reed-Solomon Codes:</b> Handle burst errors and multiple errors</li>" +
                          "<li><b>LDPC Codes:</b> Near-optimal performance for large data blocks</li>" +
                          "<li><b>Turbo Codes:</b> Iterative decoding for exceptional performance</li>" +
                          "<li><b>Quantum Error Correction:</b> Emerging field for quantum computing</li>" +
                          "</ul>" +
                          "<p><b>Fundamental Principle:</b> All modern error correction builds upon the mathematical foundations established by Hamming codes.</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Final Thoughts</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>Hamming codes represent an elegant solution to a fundamental problem in computing and communications. They demonstrate how mathematical insight can transform unreliable systems into robust ones. While technology has advanced, the principles of redundancy, distance metrics, and systematic encoding remain central to all error correction systems.</p>" +
                          "<p><b>Key Achievement:</b> Hamming showed that we can trade transmission efficiency for reliability, enabling modern computing and communications systems to function reliably in imperfect environments.</p>"
                }
            ]
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}