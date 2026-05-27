/**
 * Data structure for Week 11 Lecture Notes - Part 2: Bin Packing Algorithms
 * Content based on the uploaded LaTeX slides for Week 11 Part 2
 */
const lectureData = {
    courseName: "4001CMD - Mathematics for Computing Professionals",
    lectureTitle: "Week 11: Bin Packing Algorithms - Optimization and Heuristics",
    
    sections: [
        {
            title: "1. Introduction to Bin Packing Problem",
            id: "bin-packing-intro",
            audioFile: "audio/week11_part2_slide_01.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>The Bin Packing Problem</h3>"
                },
                {
                    type: "paragraph",
                    text: "Bin packing is a classic optimization problem in computer science and operations research. The goal is to pack items of different sizes into the smallest number of fixed-size containers (bins) possible. This problem has numerous real-world applications in logistics, resource allocation, and computing systems."
                },
                {
                    type: "math-example",
                    text: "<h4>Real-World Applications</h4>" +
                          "<ul>" +
                          "<li><b>Logistics:</b> Packing boxes into shipping containers</li>" +
                          "<li><b>Computing:</b> Allocating memory blocks or disk storage</li>" +
                          "<li><b>Manufacturing:</b> Scheduling tasks on machines with time constraints</li>" +
                          "<li><b>Networking:</b> Packet scheduling in data transmission</li>" +
                          "<li><b>Resource Management:</b> Allocating CPU time to processes</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Problem Formulation</h3>"
                },
                {
                    type: "math-example",
                    text: "<p><b>Given:</b></p>" +
                          "<ul>" +
                          "<li>A set of items, each with a specific size or weight</li>" +
                          "<li>Bins of fixed capacity C</li>" +
                          "</ul>" +
                          "<p><b>Objective:</b> Pack all items into the minimum number of bins</p>" +
                          "<p><b>Constraints:</b></p>" +
                          "<ul>" +
                          "<li>Each item must be assigned to exactly one bin</li>" +
                          "<li>The sum of item sizes in any bin cannot exceed the bin capacity C</li>" +
                          "</ul>"
                }
            ]
        },
        {
            title: "2. Factory Scheduling Example",
            id: "factory-example",
            audioFile: "audio/week11_part2_slide_02.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Factory Worker Scheduling Problem</h3>"
                },
                {
                    type: "paragraph",
                    text: "A factory needs to complete a job within 15 hours. The job consists of multiple tasks with different durations, and each worker can handle any number of tasks but can only work on one task at a time. Each task requires exactly one worker."
                },
                {
                    type: "math-example",
                    text: "<h4>Task Duration Table</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Activity</th><td style='padding: 8px; border: 1px solid #333; text-align: center;'>A</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>B</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>C</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>D</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>E</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>F</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>G</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>H</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>I</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>J</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>K</td></tr>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Duration (hours)</th><td style='padding: 8px; border: 1px solid #333; text-align: center;'>8</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>7</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>4</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>9</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>6</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>9</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>5</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>5</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>6</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>7</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>8</td></tr>" +
                          "</table>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Problem Mapping to Bin Packing</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>In this scenario:</p>" +
                          "<ul>" +
                          "<li><b>Bins:</b> Workers</li>" +
                          "<li><b>Bin Capacity:</b> 15 hours per worker</li>" +
                          "<li><b>Items:</b> Tasks/activities</li>" +
                          "<li><b>Item Sizes:</b> Task durations</li>" +
                          "</ul>" +
                          "<p><b>Objective:</b> Assign tasks to workers such that no worker exceeds 15 hours, using the minimum number of workers.</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Initial Strategy: Brute Force</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>One approach is to try all possible permutations of tasks and assign them sequentially to workers:</p>" +
                          "<ul>" +
                          "<li>Process tasks in given order</li>" +
                          "<li>Assign to current worker until adding the next task would exceed capacity</li>" +
                          "<li>Then move to next worker</li>" +
                          "<li>Repeat until all tasks are assigned</li>" +
                          "</ul>" +
                          "<p><b>Complexity:</b> For n tasks, there are n! permutations to check</p>"
                }
            ]
        },
        {
            title: "3. First Attempt: Sequential Assignment",
            id: "sequential-assignment",
            audioFile: "audio/week11_part2_slide_03.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Sequential Assignment in Original Order</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Assignment Process (A, B, C, D, E, F, G, H, I, J, K)</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Worker</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Tasks Assigned</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Total Hours</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Analysis</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>A(8), B(7)</td><td style='padding: 8px; border: 1px solid #333;'>15</td><td style='padding: 8px; border: 1px solid #333;'>Adding C(4) would exceed 15</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>2</td><td style='padding: 8px; border: 1px solid #333;'>C(4), D(9)</td><td style='padding: 8px; border: 1px solid #333;'>13</td><td style='padding: 8px; border: 1px solid #333;'>Adding E(6) would exceed 15</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>3</td><td style='padding: 8px; border: 1px solid #333;'>E(6), F(9)</td><td style='padding: 8px; border: 1px solid #333;'>15</td><td style='padding: 8px; border: 1px solid #333;'>Adding G(5) would exceed 15</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>4</td><td style='padding: 8px; border: 1px solid #333;'>G(5), H(5)</td><td style='padding: 8px; border: 1px solid #333;'>10</td><td style='padding: 8px; border: 1px solid #333;'>Adding I(6) would exceed 15</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>5</td><td style='padding: 8px; border: 1px solid #333;'>I(6), J(7)</td><td style='padding: 8px; border: 1px solid #333;'>13</td><td style='padding: 8px; border: 1px solid #333;'>Adding K(8) would exceed 15</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>6</td><td style='padding: 8px; border: 1px solid #333;'>K(8)</td><td style='padding: 8px; border: 1px solid #333;'>8</td><td style='padding: 8px; border: 1px solid #333;'>Only task remaining</td></tr>" +
                          "</table>" +
                          "<p><b>Result:</b> 6 workers required</p>" +
                          "<p><b>Efficiency:</b> Total capacity = 6 × 15 = 90 hours, used = 74 hours, utilization = 82.2%</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Analysis of First Attempt</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>The sequential assignment in the original order leads to inefficient packing because:</p>" +
                          "<ul>" +
                          "<li>Large tasks are mixed with small tasks arbitrarily</li>" +
                          "<li>No consideration of optimal task combinations</li>" +
                          "<li>Workers end up with leftover capacity that cannot be filled</li>" +
                          "<li>Last worker is significantly underutilized</li>" +
                          "</ul>" +
                          "<p><b>Observation:</b> The order of tasks significantly impacts the packing efficiency.</p>"
                }
            ]
        },
        {
            title: "4. Improved Approach: Task Reordering",
            id: "task-reordering",
            audioFile: "audio/week11_part2_slide_04.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Optimizing Through Permutation</h3>"
                },
                {
                    type: "paragraph",
                    text: "By reordering the tasks, we can potentially find a more efficient assignment that uses fewer workers. Let's try a different ordering of the same tasks."
                },
                {
                    type: "math-example",
                    text: "<h4>New Task Ordering</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Activity</th><td style='padding: 8px; border: 1px solid #333; text-align: center;'>C</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>G</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>H</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>A</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>B</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>D</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>E</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>F</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>I</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>J</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>K</td></tr>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Duration</th><td style='padding: 8px; border: 1px solid #333; text-align: center;'>4</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>5</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>5</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>8</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>7</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>9</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>6</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>9</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>6</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>7</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>8</td></tr>" +
                          "</table>"
                },
                {
                    type: "math-example",
                    text: "<h4>Improved Assignment Process</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Worker</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Tasks Assigned</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Total Hours</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Analysis</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>C(4), G(5), H(5)</td><td style='padding: 8px; border: 1px solid #333;'>14</td><td style='padding: 8px; border: 1px solid #333;'>Adding A(8) would exceed 15</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>2</td><td style='padding: 8px; border: 1px solid #333;'>A(8), B(7)</td><td style='padding: 8px; border: 1px solid #333;'>15</td><td style='padding: 8px; border: 1px solid #333;'>Perfect fit</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>3</td><td style='padding: 8px; border: 1px solid #333;'>D(9), E(6)</td><td style='padding: 8px; border: 1px solid #333;'>15</td><td style='padding: 8px; border: 1px solid #333;'>Perfect fit</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>4</td><td style='padding: 8px; border: 1px solid #333;'>F(9), I(6)</td><td style='padding: 8px; border: 1px solid #333;'>15</td><td style='padding: 8px; border: 1px solid #333;'>Perfect fit</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>5</td><td style='padding: 8px; border: 1px solid #333;'>J(7), K(8)</td><td style='padding: 8px; border: 1px solid #333;'>15</td><td style='padding: 8px; border: 1px solid #333;'>Perfect fit</td></tr>" +
                          "</table>" +
                          "<p><b>Result:</b> 5 workers required (improvement from 6)</p>" +
                          "<p><b>Efficiency:</b> Total capacity = 5 × 15 = 75 hours, used = 74 hours, utilization = 98.7%</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Brute Force Limitations</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>While trying different permutations can find better solutions, this approach has severe limitations:</p>" +
                          "<ul>" +
                          "<li><b>Computational Complexity:</b> For n = 11 tasks, there are 11! = 39,916,800 permutations</li>" +
                          "<li><b>Exponential Growth:</b> For n = 20 tasks, there are 2.4 × 10¹⁸ permutations</li>" +
                          "<li><b>Intractable:</b> Even for moderate n, checking all permutations is computationally infeasible</li>" +
                          "<li><b>Time Complexity:</b> O(n!) - factorial time, among the worst complexity classes</li>" +
                          "</ul>" +
                          "<p><b>Conclusion:</b> We need more efficient approaches for practical problems.</p>"
                }
            ]
        },
        {
            title: "5. Heuristic Approach: Greedy Algorithm",
            id: "greedy-algorithm",
            audioFile: "audio/week11_part2_slide_05.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Greedy Approximation Algorithm</h3>"
                },
                {
                    type: "paragraph",
                    text: "Since finding the optimal solution is computationally intractable for large problems, we use heuristic algorithms that provide good (though not necessarily optimal) solutions in reasonable time."
                },
                {
                    type: "math-example",
                    text: "<h4>First-Fit Decreasing (FFD) Algorithm</h4>" +
                          "<p><b>Steps:</b></p>" +
                          "<ol>" +
                          "<li>Sort all items in decreasing order of size</li>" +
                          "<li>For each item in sorted order:</li>" +
                          "<ul>" +
                          "<li>Pack it into the first bin that can accommodate it</li>" +
                          "<li>If no existing bin can fit it, open a new bin</li>" +
                          "</ul>" +
                          "<li>Continue until all items are packed</li>" +
                          "</ol>" +
                          "<p><b>Rationale:</b> Packing larger items first leaves smaller items to fill gaps, potentially improving utilization.</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Algorithm Properties</h3>"
                },
                {
                    type: "math-example",
                    text: "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Aspect</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Description</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Advantage</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Time Complexity</td><td style='padding: 8px; border: 1px solid #333;'>O(n log n) for sorting + O(n²) for packing</td><td style='padding: 8px; border: 1px solid #333;'>Much faster than O(n!)</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Solution Quality</td><td style='padding: 8px; border: 1px solid #333;'>Within 11/9 of optimal + 6/9 bins</td><td style='padding: 8px; border: 1px solid #333;'>Theoretical guarantee</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Practical Performance</td><td style='padding: 8px; border: 1px solid #333;'>Typically within 2% of optimal</td><td style='padding: 8px; border: 1px solid #333;'>Excellent for most applications</td></tr>" +
                          "</table>"
                }
            ]
        },
        {
            title: "6. Greedy Algorithm in Action",
            id: "greedy-in-action",
            audioFile: "audio/week11_part2_slide_06.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Applying First-Fit Decreasing to Factory Problem</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Step 1: Sort Tasks by Duration (Descending)</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Activity</th><td style='padding: 8px; border: 1px solid #333; text-align: center;'>D</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>F</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>A</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>K</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>B</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>J</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>E</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>I</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>G</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>H</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>C</td></tr>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Duration</th><td style='padding: 8px; border: 1px solid #333; text-align: center;'>9</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>9</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>8</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>8</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>7</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>7</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>6</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>6</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>5</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>5</td><td style='padding: 8px; border: 1px solid #333; text-align: center;'>4</td></tr>" +
                          "</table>"
                },
                {
                    type: "math-example",
                    text: "<h4>Step 2: Greedy Assignment Process</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Task</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Duration</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Assignment Decision</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Worker</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>D</td><td style='padding: 8px; border: 1px solid #333;'>9</td><td style='padding: 8px; border: 1px solid #333;'>New worker needed</td><td style='padding: 8px; border: 1px solid #333;'>Worker 1</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>F</td><td style='padding: 8px; border: 1px solid #333;'>9</td><td style='padding: 8px; border: 1px solid #333;'>Worker 1: 9+9=18 > 15, new worker</td><td style='padding: 8px; border: 1px solid #333;'>Worker 2</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>A</td><td style='padding: 8px; border: 1px solid #333;'>8</td><td style='padding: 8px; border: 1px solid #333;'>Workers 1,2: 8+9=17>15, new worker</td><td style='padding: 8px; border: 1px solid #333;'>Worker 3</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>K</td><td style='padding: 8px; border: 1px solid #333;'>8</td><td style='padding: 8px; border: 1px solid #333;'>Workers 1-3: 8+9=17>15, new worker</td><td style='padding: 8px; border: 1px solid #333;'>Worker 4</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>B</td><td style='padding: 8px; border: 1px solid #333;'>7</td><td style='padding: 8px; border: 1px solid #333;'>Workers 1,2: 7+9=16>15, Worker 3: 7+8=15 ✓</td><td style='padding: 8px; border: 1px solid #333;'>Worker 3</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>J</td><td style='padding: 8px; border: 1px solid #333;'>7</td><td style='padding: 8px; border: 1px solid #333;'>Workers 1-3: 7+9=16>15, Worker 4: 7+8=15 ✓</td><td style='padding: 8px; border: 1px solid #333;'>Worker 4</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>E</td><td style='padding: 8px; border: 1px solid #333;'>6</td><td style='padding: 8px; border: 1px solid #333;'>Worker 1: 6+9=15 ✓</td><td style='padding: 8px; border: 1px solid #333;'>Worker 1</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>I</td><td style='padding: 8px; border: 1px solid #333;'>6</td><td style='padding: 8px; border: 1px solid #333;'>Worker 2: 6+9=15 ✓</td><td style='padding: 8px; border: 1px solid #333;'>Worker 2</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>G</td><td style='padding: 8px; border: 1px solid #333;'>5</td><td style='padding: 8px; border: 1px solid #333;'>Workers 1-4: all >15, new worker</td><td style='padding: 8px; border: 1px solid #333;'>Worker 5</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>H</td><td style='padding: 8px; border: 1px solid #333;'>5</td><td style='padding: 8px; border: 1px solid #333;'>Worker 5: 5+5=10</td><td style='padding: 8px; border: 1px solid #333;'>Worker 5</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>C</td><td style='padding: 8px; border: 1px solid #333;'>4</td><td style='padding: 8px; border: 1px solid #333;'>Worker 5: 10+4=14</td><td style='padding: 8px; border: 1px solid #333;'>Worker 5</td></tr>" +
                          "</table>"
                },
                {
                    type: "math-example",
                    text: "<h4>Final Assignment</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Worker</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Tasks</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Total Hours</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Utilization</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>1</td><td style='padding: 8px; border: 1px solid #333;'>D(9), E(6)</td><td style='padding: 8px; border: 1px solid #333;'>15</td><td style='padding: 8px; border: 1px solid #333;'>100%</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>2</td><td style='padding: 8px; border: 1px solid #333;'>F(9), I(6)</td><td style='padding: 8px; border: 1px solid #333;'>15</td><td style='padding: 8px; border: 1px solid #333;'>100%</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>3</td><td style='padding: 8px; border: 1px solid #333;'>A(8), B(7)</td><td style='padding: 8px; border: 1px solid #333;'>15</td><td style='padding: 8px; border: 1px solid #333;'>100%</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>4</td><td style='padding: 8px; border: 1px solid #333;'>K(8), J(7)</td><td style='padding: 8px; border: 1px solid #333;'>15</td><td style='padding: 8px; border: 1px solid #333;'>100%</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>5</td><td style='padding: 8px; border: 1px solid #333;'>G(5), H(5), C(4)</td><td style='padding: 8px; border: 1px solid #333;'>14</td><td style='padding: 8px; border: 1px solid #333;'>93.3%</td></tr>" +
                          "</table>" +
                          "<p><b>Result:</b> 5 workers required (matches our best manual solution)</p>" +
                          "<p><b>Overall Efficiency:</b> 74/75 = 98.7% utilization</p>"
                }
            ]
        },
        {
            title: "7. Understanding Heuristic Algorithms",
            id: "heuristic-understanding",
            audioFile: "audio/week11_part2_slide_07.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>What are Heuristic Algorithms?</h3>"
                },
                {
                    type: "paragraph",
                    text: "Heuristic algorithms are problem-solving approaches that use practical methods to find good solutions quickly, without guaranteeing optimality. They're essential for tackling NP-hard problems where finding exact solutions is computationally infeasible."
                },
                {
                    type: "math-example",
                    text: "<h4>Characteristics of Heuristic Algorithms</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Feature</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Description</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Benefit</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Speed</td><td style='padding: 8px; border: 1px solid #333;'>Polynomial time complexity</td><td style='padding: 8px; border: 1px solid #333;'>Practical for large problems</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Approximation</td><td style='padding: 8px; border: 1px solid #333;'>Good but not necessarily optimal solutions</td><td style='padding: 8px; border: 1px solid #333;'>Balance between quality and time</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Simplicity</td><td style='padding: 8px; border: 1px solid #333;'>Easy to understand and implement</td><td style='padding: 8px; border: 1px solid #333;'>Wide applicability</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Robustness</td><td style='padding: 8px; border: 1px solid #333;'>Work well across problem instances</td><td style='padding: 8px; border: 1px solid #333;'>Reliable performance</td></tr>" +
                          "</table>"
                },
                {
                    type: "key-concept",
                    text: "<h3>When to Use Heuristics</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Appropriate Scenarios for Heuristic Approaches</h4>" +
                          "<ul>" +
                          "<li><b>NP-hard Problems:</b> When optimal solutions are computationally infeasible</li>" +
                          "<li><b>Large Problem Instances:</b> Where exact algorithms take too long</li>" +
                          "<li><b>Real-time Applications:</b> When quick decisions are needed</li>" +
                          "<li><b>Good-Enough Solutions:</b> When near-optimal is acceptable</li>" +
                          "<li><b>Resource Constraints:</b> Limited computational power or memory</li>" +
                          "</ul>" +
                          "<h4>Limitations to Consider</h4>" +
                          "<ul>" +
                          "<li><b>No Optimality Guarantee:</b> Might miss the best solution</li>" +
                          "<li><b>Problem-Specific:</b> Heuristics that work for one problem may not work for another</li>" +
                          "<li><b>Performance Variability:</b> Solution quality can vary across instances</li>" +
                          "<li><b>Parameter Tuning:</b> May require careful adjustment for best results</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Common Bin Packing Heuristics</h3>"
                },
                {
                    type: "math-example",
                    text: "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Algorithm</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Description</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Worst-case Ratio</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>First-Fit (FF)</td><td style='padding: 8px; border: 1px solid #333;'>Pack each item in first bin that fits</td><td style='padding: 8px; border: 1px solid #333;'>1.7 × OPT</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Best-Fit (BF)</td><td style='padding: 8px; border: 1px solid #333;'>Pack each item in bin with least remaining space</td><td style='padding: 8px; border: 1px solid #333;'>1.7 × OPT</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>First-Fit Decreasing (FFD)</td><td style='padding: 8px; border: 1px solid #333;'>Sort items decreasing, then apply First-Fit</td><td style='padding: 8px; border: 1px solid #333;'>11/9 × OPT + 6/9</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Best-Fit Decreasing (BFD)</td><td style='padding: 8px; border: 1px solid #333;'>Sort items decreasing, then apply Best-Fit</td><td style='padding: 8px; border: 1px solid #333;'>11/9 × OPT + 6/9</td></tr>" +
                          "</table>" +
                          "<p><b>Note:</b> OPT represents the optimal number of bins. The worst-case ratios provide theoretical guarantees on how far from optimal the heuristic can be.</p>"
                }
            ]
        },
        {
            title: "8. Computational Complexity Perspective",
            id: "complexity-perspective",
            audioFile: "audio/week11_part2_slide_08.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Bin Packing Complexity</h3>"
                },
                {
                    type: "paragraph",
                    text: "The bin packing problem is classified as NP-hard, which means there is no known polynomial-time algorithm that can solve all instances optimally (unless P = NP). This theoretical limitation motivates the use of heuristic approaches."
                },
                {
                    type: "math-example",
                    text: "<h4>Complexity Classes Comparison</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Problem Type</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Time Complexity</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Example</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Practical Implication</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>P (Polynomial)</td><td style='padding: 8px; border: 1px solid #333;'>O(nᵏ) for some k</td><td style='padding: 8px; border: 1px solid #333;'>Sorting, shortest path</td><td style='padding: 8px; border: 1px solid #333;'>Efficiently solvable</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>NP-hard</td><td style='padding: 8px; border: 1px solid #333;'>No known polynomial solution</td><td style='padding: 8px; border: 1px solid #333;'>Bin packing, traveling salesman</td><td style='padding: 8px; border: 1px solid #333;'>Heuristics needed</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Factorial</td><td style='padding: 8px; border: 1px solid #333;'>O(n!)</td><td style='padding: 8px; border: 1px solid #333;'>Brute force permutation</td><td style='padding: 8px; border: 1px solid #333;'>Intractable for n > 20</td></tr>" +
                          "</table>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Practical Implications</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Problem Size vs. Computation Time</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Number of Items</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Brute Force (n!)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Heuristic (n²)</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Practicality</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>10</td><td style='padding: 8px; border: 1px solid #333;'>3.6 million ops</td><td style='padding: 8px; border: 1px solid #333;'>100 ops</td><td style='padding: 8px; border: 1px solid #333;'>Both feasible</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>20</td><td style='padding: 8px; border: 1px solid #333;'>2.4 × 10¹⁸ ops</td><td style='padding: 8px; border: 1px solid #333;'>400 ops</td><td style='padding: 8px; border: 1px solid #333;'>Only heuristic feasible</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>50</td><td style='padding: 8px; border: 1px solid #333;'>3.0 × 10⁶⁴ ops</td><td style='padding: 8px; border: 1px solid #333;'>2,500 ops</td><td style='padding: 8px; border: 1px solid #333;'>Only heuristic feasible</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>100</td><td style='padding: 8px; border: 1px solid #333;'>9.3 × 10¹⁵⁷ ops</td><td style='padding: 8px; border: 1px solid #333;'>10,000 ops</td><td style='padding: 8px; border: 1px solid #333;'>Only heuristic feasible</td></tr>" +
                          "</table>" +
                          "<p><b>Note:</b> Assuming 1 billion operations per second, 20! would take over 77 years to compute, while 20² would take microseconds.</p>"
                },
                {
                    type: "key-concept",
                    text: "<h3>The P vs NP Problem</h3>"
                },
                {
                    type: "math-example",
                    text: "<p>The fundamental question in computer science: Can every problem whose solution can be verified quickly also be solved quickly?</p>" +
                          "<ul>" +
                          "<li><b>P:</b> Problems solvable in polynomial time</li>" +
                          "<li><b>NP:</b> Problems whose solutions can be verified in polynomial time</li>" +
                          "<li><b>NP-hard:</b> Problems at least as hard as the hardest problems in NP</li>" +
                          "<li><b>NP-complete:</b> Problems that are both NP and NP-hard</li>" +
                          "</ul>" +
                          "<p><b>Current Status:</b> Whether P = NP remains one of the most famous unsolved problems in mathematics and computer science, with a $1 million prize offered for its solution.</p>"
                }
            ]
        },
        {
            title: "9. Advanced Bin Packing Variants",
            id: "advanced-variants",
            audioFile: "audio/week11_part2_slide_09.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Extensions and Variations</h3>"
                },
                {
                    type: "paragraph",
                    text: "The basic bin packing problem has several important variants that model different real-world scenarios. Understanding these variants helps in selecting the appropriate algorithm for specific applications."
                },
                {
                    type: "math-example",
                    text: "<h4>Common Bin Packing Variants</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Variant</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Description</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Applications</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>2D Bin Packing</td><td style='padding: 8px; border: 1px solid #333;'>Pack rectangles into minimum number of fixed-size bins</td><td style='padding: 8px; border: 1px solid #333;'>Stock cutting, texture packing</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>3D Bin Packing</td><td style='padding: 8px; border: 1px solid #333;'>Pack boxes into containers</td><td style='padding: 8px; border: 1px solid #333;'>Shipping, warehouse storage</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Variable Bin Size</td><td style='padding: 8px; border: 1px solid #333;'>Bins have different capacities</td><td style='padding: 8px; border: 1px solid #333;'>Memory allocation, cloud computing</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Online Bin Packing</td><td style='padding: 8px; border: 1px solid #333;'>Items arrive sequentially</td><td style='padding: 8px; border: 1px solid #333;'>Real-time scheduling, networking</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Bin Packing with Conflicts</td><td style='padding: 8px; border: 1px solid #333;'>Certain items cannot be packed together</td><td style='padding: 8px; border: 1px solid #333;'>Task scheduling with dependencies</td></tr>" +
                          "</table>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Online vs Offline Bin Packing</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Key Differences</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Aspect</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Offline</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Online</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Information</td><td style='padding: 8px; border: 1px solid #333;'>All items known in advance</td><td style='padding: 8px; border: 1px solid #333;'>Items arrive one by one</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Sorting</td><td style='padding: 8px; border: 1px solid #333;'>Can sort items first</td><td style='padding: 8px; border: 1px solid #333;'>No pre-sorting possible</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Performance</td><td style='padding: 8px; border: 1px solid #333;'>Better solutions possible</td><td style='padding: 8px; border: 1px solid #333;'>Worse competitive ratio</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Applications</td><td style='padding: 8px; border: 1px solid #333;'>Planning, batch processing</td><td style='padding: 8px; border: 1px solid #333;'>Real-time systems</td></tr>" +
                          "</table>" +
                          "<p><b>Competitive Ratio:</b> Online algorithms typically have worse performance guarantees than offline algorithms. For example, the best possible competitive ratio for online bin packing is approximately 1.54, while FFD has a ratio of 11/9 ≈ 1.22.</p>"
                }
            ]
        },
        {
            title: "10. Summary and Key Insights",
            id: "bin-packing-summary",
            audioFile: "audio/week11_part2_slide_10.wav",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Key Takeaways</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Problem Understanding</h4>" +
                          "<ul>" +
                          "<li><b>Bin Packing:</b> Fundamental optimization problem with wide applications</li>" +
                          "<li><b>NP-hard:</b> No efficient optimal algorithm exists (unless P = NP)</li>" +
                          "<li><b>Practical Approach:</b> Use heuristic algorithms for good solutions</li>" +
                          "<li><b>Trade-off:</b> Balance between solution quality and computation time</li>" +
                          "</ul>"
                },
                {
                    type: "math-example",
                    text: "<h4>Algorithmic Strategies</h4>" +
                          "<table border='1' style='margin: 0 auto; border-collapse: collapse; border: 2px solid #333;'>" +
                          "<tr style='border: 1px solid #333;'><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Method</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Complexity</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>Quality</th><th style='padding: 8px; border: 1px solid #333; background-color: #f0f0f0;'>When to Use</th></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Brute Force</td><td style='padding: 8px; border: 1px solid #333;'>O(n!)</td><td style='padding: 8px; border: 1px solid #333;'>Optimal</td><td style='padding: 8px; border: 1px solid #333;'>Small n (≤ 15)</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>First-Fit Decreasing</td><td style='padding: 8px; border: 1px solid #333;'>O(n log n + n²)</td><td style='padding: 8px; border: 1px solid #333;'>Near-optimal</td><td style='padding: 8px; border: 1px solid #333;'>Most practical cases</td></tr>" +
                          "<tr style='border: 1px solid #333;'><td style='padding: 8px; border: 1px solid #333;'>Online Algorithms</td><td style='padding: 8px; border: 1px solid #333;'>O(n)</td><td style='padding: 8px; border: 1px solid #333;'>Good enough</td><td style='padding: 8px; border: 1px solid #333;'>Real-time applications</td></tr>" +
                          "</table>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Practical Recommendations</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Choosing the Right Approach</h4>" +
                          "<ul>" +
                          "<li><b>Small Problems (n ≤ 15):</b> Consider brute force or exact methods</li>" +
                          "<li><b>Medium to Large Problems:</b> Use First-Fit Decreasing or Best-Fit Decreasing</li>" +
                          "<li><b>Real-time Requirements:</b> Use online algorithms like Next-Fit or First-Fit</li>" +
                          "<li><b>Critical Applications:</b> Consider hybrid approaches or commercial solvers</li>" +
                          "</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Broader Implications</h3>"
                },
                {
                    type: "math-example",
                    text: "<h4>Beyond Bin Packing</h4>" +
                          "<p>The principles learned from bin packing apply to many optimization problems:</p>" +
                          "<ul>" +
                          "<li><b>Heuristic Design:</b> The art of creating effective approximation algorithms</li>" +
                          "<li><b>Complexity Awareness:</b> Understanding computational limits</li>" +
                          "<li><b>Practical Optimization:</b> Balancing ideal solutions with real-world constraints</li>" +
                          "<li><b>Algorithm Selection:</b> Choosing the right tool for each problem</li>" +
                          "</ul>" +
                          "<p><b>Final Insight:</b> In computer science and mathematics, we often face problems where perfect solutions are impossible or impractical. The skill lies in finding the best possible solution within given constraints, whether those constraints are computational, temporal, or resource-based.</p>"
                }
            ]
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureDataPart2;
}