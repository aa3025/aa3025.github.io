const lectureData = {
    "courseName": "4001CMD - Mathematics for Computing Professionals",
    "lectureTitle": "Week 2: Symbolic Logic 2, Rules of Inference",
    "sections": [
        {
            "title": "1. Truth Values",
            "id": "slide-1",
            "audioFile": "audio/slide_00.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "In mathematics, statements can be True or False."
                },
                {
                    "type": "html-content",
                    "text": "<div class='table-wrapper'><table class='pascal-table w-full mb-4'><tr><th class='font-bold bg-gray-100'>Statement</th><td>20 is a multiple of 3</td><td>20 is not a multiple of 3</td></tr><tr><th class='font-bold bg-gray-100'>Truth value</th><td>False</td><td>True</td></tr></table></div>"
                },
                {
                    "type": "key-concept",
                    "text": "<h3>Truth Value</h3>A <b>truth value</b> is an object in mathematics&mdash;like a set, or a number. It can either be <b>T</b> or <b>F</b>."
                },
                {
                    "type": "paragraph",
                    "text": "<b>Discussion Point:</b> <i>\"Imagine setting a rule in a computer program that says 'only proceed if the user is over 18'. The computer doesn't care about the person, it only cares if the statement 'age > 18' evaluates to True. We can boil all complex logic down into these simple True and False building blocks.\"</i>"
                },
                {
                    "type": "key-concept",
                    "text": "<h3>Symbolic logic</h3><i>Symbolic logic</i> is the area of mathematics that <i>computes the truth values of abstract statements</i> &mdash; not just mathematical ones!"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Example</h3>If I am a vegetarian, I will not eat chicken tonight. <br>But I will eat chicken tonight. Therefore I am not a vegetarian."
                }
            ]
        },
        {
            "title": "2. Logical Operations",
            "id": "slide-2",
            "audioFile": "audio/slide_01.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "There are three basic operations: <b>not</b> (\\( \\neg \\)), <b>and</b> (\\( \\wedge \\)), and <b>or</b> (\\( \\vee \\))."
                },
                {
                    "type": "key-concept",
                    "text": "<div class='flex justify-between items-center'><span>\\( \\neg p \\)</span><span class='font-bold'>(not)</span></div><div class='mt-2'><b>The statement \\( p \\) is not true.</b></div>"
                },
                {
                    "type": "key-concept",
                    "text": "<div class='flex justify-between items-center'><span>\\( p \\land q \\)</span><span class='font-bold'>(and)</span></div><div class='mt-2'><b>Both statements \\( p \\) and \\( q \\) are true.</b></div>"
                },
                {
                    "type": "key-concept",
                    "text": "<div class='flex justify-between items-center'><span>\\( p \\lor q \\)</span><span class='font-bold'>(or)</span></div><div class='mt-2'><b>At least one of \\( p \\) or \\( q \\) is true, or both are true.</b></div>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Example</h3>\\( p \\) is \"I have a cat\" and \\( q \\) is \"I have houseplants\". It may be the case that \\( p \\lor q \\) is true, and also that both \\( p \\) and \\( q \\) are true. (...they won't both be true for long...)"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"When we use 'or' in english, we often mean 'exclusive or' (e.g. 'You can have cake OR ice cream'). But in mathematical logic, evaluating 'A or B' allows for BOTH to be true simultaneously. This distinction is critical to remember for programming and circuitry.\"</i>"
                }
            ]
        },
        {
            "title": "3. Truth Tables",
            "id": "slide-3",
            "audioFile": "audio/slide_02.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>With sets, we used Venn diagrams to see if a statement is true or false.</li><li>In symbolic logic, we use <b>truth tables.</b></li></ul>"
                },
                {
                    "type": "html-content",
                    "text": "<div class='flex flex-wrap gap-4 justify-center items-start mt-4'><div class='table-wrapper flex-1 min-w-[200px] text-center'><h4 class='font-bold text-center mb-2'>Truth table for \\( \\neg \\)</h4><table class='pascal-table mx-auto'><tr><th>\\( p \\)</th><th>\\( \\neg p \\)</th></tr><tr><td>T</td><td>F</td></tr><tr><td>F</td><td>T</td></tr></table></div><div class='table-wrapper flex-1 min-w-[200px] text-center'><h4 class='font-bold text-center mb-2'>Truth table for \\( \\land \\)</h4><table class='pascal-table mx-auto'><tr><th>\\( p \\)</th><th>\\( q \\)</th><th>\\( p \\land q \\)</th></tr><tr><td>F</td><td>F</td><td>F</td></tr><tr><td>F</td><td>T</td><td>F</td></tr><tr><td>T</td><td>F</td><td>F</td></tr><tr><td>T</td><td>T</td><td>T</td></tr></table></div><div class='table-wrapper flex-1 min-w-[200px] text-center'><h4 class='font-bold text-center mb-2'>Truth table for \\( \\lor \\)</h4><table class='pascal-table mx-auto'><tr><th>\\( p \\)</th><th>\\( q \\)</th><th>\\( p \\lor q \\)</th></tr><tr><td>F</td><td>F</td><td>F</td></tr><tr><td>F</td><td>T</td><td>T</td></tr><tr><td>T</td><td>F</td><td>T</td></tr><tr><td>T</td><td>T</td><td>T</td></tr></table></div></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 mt-4'><li>These tables tell us the truth value of the statement (last column) for different combinations of inputs \\( p \\) and \\( q \\).</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"Truth tables are the ultimate brute-force method. Notice how the number of rows scales; if we have 2 variables, we have 4 rows. If we had 3, we'd have 8. It's exactly 2 to the power of N variables. When proving something is a tautology, if the entire final column is T, we have undeniably proven the point.\"</i>"
                }
            ]
        },
        {
            "title": "4. The implication (conditional statement)",
            "id": "slide-4",
            "audioFile": "audio/slide_03.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<b>Exercise:</b> Construct a truth table for the statement \\( (\\neg p) \\lor q \\)."
                },
                {
                    "type": "html-content",
                    "text": "<div class='flex flex-wrap gap-4 justify-center items-start my-4'><div class='table-wrapper flex-1 min-w-[250px] text-center'><h4 class='font-bold text-center mb-2'>Solution:</h4><table class='pascal-table mx-auto'><tr><th>\\( p \\)</th><th>\\( q \\)</th><th>\\( \\neg p \\)</th><th>\\( (\\neg p) \\lor q \\)</th></tr><tr><td>T</td><td>T</td><td>F</td><td>T</td></tr><tr><td>T</td><td>F</td><td>F</td><td>F</td></tr><tr><td>F</td><td>T</td><td>T</td><td>T</td></tr><tr><td>F</td><td>F</td><td>T</td><td>T</td></tr></table></div><div class='table-wrapper flex-1 min-w-[200px] text-center'><h4 class='font-bold text-center mb-2'>Truth table for \\( \\Rightarrow \\):</h4><table class='pascal-table mx-auto'><tr><th>\\( p \\)</th><th>\\( q \\)</th><th>\\( p \\Rightarrow q \\)</th></tr><tr><td>T</td><td>T</td><td>T</td></tr><tr><td>T</td><td>F</td><td>F</td></tr><tr><td>F</td><td>T</td><td>T</td></tr><tr><td>F</td><td>F</td><td>T</td></tr></table></div></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5'><li>The operator \\( \\Rightarrow \\) (also \\( \\rightarrow \\)) represents implication: the statement \\( p \\Rightarrow q \\) means \"if \\( p \\), then \\( q \\)\".</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"A lot of students find the 'F implies F is True' part confusing. The way to think about it is a broken promise: If I say 'If it rains, I will bring an umbrella', the only way to prove me a liar is if it rains (T) and I don't bring the umbrella (F). If it doesn't rain (F), whether I brought the umbrella or not doesn't break the promise. So the implication itself holds True.\"</i>"
                }
            ]
        },
        {
            "title": "5. Another way to think of implication",
            "id": "slide-5",
            "audioFile": "audio/slide_04.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>Consider the following sentence: <div class='text-center italic my-2'>\"I'm not vegetarian, or I'll order from the vegetarian menu.\"</div></li><li>Note that both of these statements might be true at the same time.</li><li>Say \\( p \\) is the statement \"I'm a vegetarian\", and \\( q \\) is the statement \"I'll order from the vegetarian menu\". Then the above sentence can be expressed as: \\[ (\\neg p) \\lor q \\]</li><li>If you know that \\( p \\) is true, and that \\( (\\neg p) \\lor q \\) is true (i.e., either \\( p \\) is false, or \\( q \\) is true), then \\( q \\) must necessarily be true&mdash;in other words, \\( p \\) implies \\( q \\).</li><li>So if \\( p \\) is true, then <b>both \\( p \\Rightarrow q \\) and \\( (\\neg p) \\lor q \\) have the same truth value.</b></li><li>What if \\( p \\) is false? Well, <b>then \\( (\\neg p) \\lor q \\) is true&mdash;<em>regardless of the truth value of \\( q \\)</em>.</b></li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><b>Discussion Point:</b> <i>\"Take a moment to let that sink in. P implies Q is perfectly interchangeable with Not-P or Q. This is an incredibly powerful algebraic translation because it lets us strip away arrow operators and replace them with standard AND/OR operators when simplifying statements or modifying hardware components.\"</i>"
                }
            ]
        },
        {
            "title": "6. Truth table of implication",
            "id": "slide-6",
            "audioFile": "audio/slide_05.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "For this reason, we declare that <span class='border border-gray-400 p-1 mx-1 font-bold'>\\( p \\Rightarrow q \\) and \\( (\\neg p) \\lor q \\) are <em>logically equivalent</em></span>."
                },
                {
                    "type": "html-content",
                    "text": "<div class='table-wrapper flex justify-center my-4'><div class='text-center'><h4 class='font-bold mb-2'>Truth tables for \\( \\Rightarrow \\) and \\( (\\neg p) \\lor q \\):</h4><table class='pascal-table mx-auto'><tr><th>\\( p \\)</th><th>\\( q \\)</th><th>\\( p \\Rightarrow q \\)</th><th>\\( (\\neg p) \\lor q \\)</th></tr><tr><td>T</td><td>T</td><td>T</td><td>T</td></tr><tr><td>T</td><td>F</td><td>F</td><td>F</td></tr><tr><td>F</td><td>T</td><td>T</td><td>T</td></tr><tr><td>F</td><td>F</td><td>T</td><td>T</td></tr></table></div></div>"
                },
                {
                    "type": "paragraph",
                    "text": "Another argument (though perhaps less convincing) is that if \\( p \\) is false, then we cannot disprove that \\( p \\Rightarrow q \\) is true."
                },
                {
                    "type": "paragraph",
                    "text": "<b>Discussion Point:</b> <i>\"The phrase 'logically equivalent' is essentially the 'equals' sign of boolean logic. In algebra, if you see 2+2, you can safely write 4. If you see P implies Q, you can cross it out and write Not-P or Q. They will forever and always evaluate identically.\"</i>"
                }
            ]
        },
        {
            "title": "7. Converse statements",
            "id": "slide-7",
            "audioFile": "audio/slide_06.wav",
            "content": [
                {
                    "type": "key-concept",
                    "text": "<h3>Converse</h3>A converse statement is a proposition formed by <b>interchanging the hypothesis and conclusion</b> of a conditional statement."
                },
                {
                    "type": "math-example",
                    "text": "<h3>Conditional statement</h3>\"If it is raining (hypothesis \\( P \\)), then the ground is wet (conclusion \\( Q \\))\", i.e. \\[ P \\Rightarrow Q \\]"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Converse</h3>\"If the ground is wet, then it is raining\", i.e. \\[ Q \\Rightarrow P \\]"
                },
                {
                    "type": "paragraph",
                    "text": "Is this always true? <b>Of course not!</b>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"You might see people making this mistake constantly in the real world\u2014especially on the news. Someone might correctly state that 'if it's raining, the ground is wet'. But then someone else sees wet ground, and concludes 'it must have rained!' This is technically a fallacy because someone could have just spilled a bucket of water or used a sprinkler! Reversing the arrow breaks the absolute logic.\"</i>"
                }
            ]
        },
        {
            "title": "8. Converse statements (continued)",
            "id": "slide-8",
            "audioFile": "audio/slide_07.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>In general, <span class='border border-gray-400 p-1 mx-1 font-bold'><em>the statement \\( p \\Rightarrow q \\) does not imply the converse \\( q \\Rightarrow p \\)</em></span>. <br>This is a VERY FAMOUS AND COMMON MISTAKE (called <a href=\"https://en.wikipedia.org/wiki/Affirming_the_consequent\" target=\"_blank\" style=\"text-decoration: underline;\">fallacy of \"affirming the consequent\")</a>.</li><li><b>Example.</b> Consider the following statement:<div class='text-center italic my-2'>If \\( n \\) is a multiple of 12, then \\( n \\) is a multiple of 4.</div></li><li>Is the statement true or false? What about its converse?</li></ul>"
                },
                {
                    "type": "key-concept",
                    "text": "<h3>Solution</h3>The converse is:<ul class='list-disc pl-5 space-y-1 mt-2'><li>If \\( n \\) is a multiple of 4, then \\( n \\) is a multiple of 12.</li><li>The original statement is true, since 12 itself is a multiple of 4. But the converse is false: \\( n=8 \\) is a counterexample.</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<b>Discussion Point:</b> <i>\"Counterexamples are our best tool for proving statements false. You only need one single specific instance where the statement fails to collapse an entire universal claim! By identifying n=8, we conclusively proved the converse is invalid.\"</i>"
                }
            ]
        },
        {
            "title": "9. If and only if (iff, \\( \\iff \\))",
            "id": "slide-9",
            "audioFile": "audio/slide_08.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>The operation \\( \\iff \\) means that <em>either both statements are true, or both statements are false.</em><br>a.k.a. \"biconditional\", or \"necessary and sufficient\" condition.</li></ul>"
                },
                {
                    "type": "html-content",
                    "text": "<div class='table-wrapper flex justify-center my-4'><div class='text-center'><h4 class='font-bold mb-2'>Truth table of \\( \\iff \\):</h4><table class='pascal-table mx-auto'><tr><th>\\( p \\)</th><th>\\( q \\)</th><th>\\( p \\iff q \\)</th></tr><tr><td>T</td><td>T</td><td>T</td></tr><tr><td>T</td><td>F</td><td>F</td></tr><tr><td>F</td><td>T</td><td>F</td></tr><tr><td>F</td><td>F</td><td>T</td></tr></table></div></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"When we see the biconditional logical operator, think of it as equality. It only outputs True if both sides match exactly in their truth values. If they agree (either both True OR both False), it holds. If they disagree, it evaluates to False. A great real world example: You can access the VIP room if AND ONLY IF you are carrying a VIP pass. Having the pass guarantees entry. Getting in guarantees you must have had the pass.\"</i>"
                }
            ]
        },
        {
            "title": "10. Proving statements with iff (\\( \\iff \\))",
            "id": "slide-10",
            "audioFile": "audio/slide_09.wav",
            "content": [
                {
                    "type": "html-content",
                    "text": "<div class='table-wrapper flex justify-center my-4 text-center'><div class='inline-block w-full overflow-x-auto'><h4 class='font-bold mb-2'>Example. Consider the following truth table:</h4><table class='pascal-table mx-auto w-full max-w-2xl'><tr><th>\\( p \\)</th><th>\\( q \\)</th><th>\\( p \\Rightarrow q \\)</th><th>\\( q \\Rightarrow p \\)</th><th>\\( p \\iff q \\)</th><th>\\( (p \\Rightarrow q) \\land (q \\Rightarrow p) \\)</th></tr><tr><td>T</td><td>T</td><td>T</td><td>T</td><td>T</td><td>T</td></tr><tr><td>T</td><td>F</td><td>F</td><td>T</td><td>F</td><td>F</td></tr><tr><td>F</td><td>T</td><td>T</td><td>F</td><td>F</td><td>F</td></tr><tr><td>F</td><td>F</td><td>T</td><td>T</td><td>T</td><td>T</td></tr></table></div></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>Notice: <span class='border border-gray-400 p-1 mx-1 font-bold'>\\( p \\iff q \\) is logically equivalent to \\( (p \\Rightarrow q) \\land (q \\Rightarrow p) \\).</span></li><li>This means, <em><b>to prove \\( p \\iff q \\), you need to prove both \\( p \\Rightarrow q \\) and \\( q \\Rightarrow p \\)</b></em>.</li><li>In other words: for \\( p \\iff q \\) be TRUE, both implication \\( p \\Rightarrow q \\) AND its converse \\( q \\Rightarrow p \\) must be TRUE.</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"This slide is the roadmap for virtually all mathematical proofs involving 'if and only if'. The moment you step into an exam and are asked to prove a biconditional, you automatically split your work into two halves. You assume the left and prove the right, then you flip it assuming the right to prove the left.\"</i>"
                }
            ]
        },
        {
            "title": "11. Example: A theorem with iff",
            "id": "slide-11",
            "audioFile": "audio/slide_10.wav",
            "content": [
                {
                    "type": "key-concept",
                    "text": "<h3>Theorem</h3>A natural number \\( n \\) is a multiple of 12 <b>if and only if</b> \\( n \\) is a multiple of both 3 and 4."
                },
                {
                    "type": "paragraph",
                    "text": "<b>Proof.</b><ul class='list-disc pl-5 space-y-2'><li>(\\( \\Rightarrow \\)) If \\( n \\) is a multiple of 12, then \\( n = 12k \\) for some \\( k \\in \\mathbb{N} \\).</li><li>This means \\( n = 3(4k) \\) and \\( n = 4(3k) \\). So \\( n \\) is a multiple of both 3 and 4.</li><li>(\\( \\Leftarrow \\)) If \\( n \\) is a multiple of both 3 and 4, then \\( n = 3k \\) and \\( n = 4\\ell \\) for \\( k,\\ell \\in \\mathbb{N} \\). So \\( 3k = 4\\ell \\), so \\( k \\) is a multiple of 4.</li><li>This means \\( k = 4p \\), so \\( n = 3k = 3(4p) = 12p \\), so \\( n \\) is a multiple of 12. &blacksquare;</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"Notice how distinct that proof structure is? Each direction has its own assumptions. We didn't cut corners. It may look tedious at first to redefine the variables from n=12k to checking n=3k and n=4l, but rigorously working back tracking variables is why we prevent logical leaps.\"</i>"
                }
            ]
        },
        {
            "title": "12. The Contrapositive",
            "id": "slide-12",
            "audioFile": "audio/slide_11.wav",
            "content": [
                {
                    "type": "key-concept",
                    "text": "<h3>Contrapositive</h3>The <b>statement \\( \\neg q \\Rightarrow \\neg p \\) is the <em>contrapositive</em> of \\( p \\Rightarrow q \\)</b>."
                },
                {
                    "type": "math-example",
                    "text": "<b>Statement 1:</b> \"If I'm vegetarian, I'll order from the vegetarian menu.\" \\( p \\Rightarrow q \\)"
                },
                {
                    "type": "paragraph",
                    "text": "But say <b>I <em>don't</em> order from the vegetarian menu</b>. What can you conclude? &mdash; <b>I'm not vegetarian!</b>"
                },
                {
                    "type": "math-example",
                    "text": "<b>Statement 2:</b> \"If I don't order from the vegetarian menu, I'm not vegetarian.\" \\( \\neg q \\Rightarrow \\neg p \\)"
                },
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>These two statements say the exact same thing!</li><li>Unlike the converse (\\( q \\Rightarrow p \\), which is usually false), <b>the contrapositive \\( \\neg q \\Rightarrow \\neg p \\) is <em>always true</em> if \\( p \\Rightarrow q \\) is true.</b></li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"Contrapositives are an absolute lifesaver. Often, in a proof, you'll be blocked because trying to push P to reach Q algebraically results in a chaotic mess of symbols. But shifting strategies! By instead denying Q and showing it breaks P, the algebra suddenly gets crisp! We exploit this constantly in computer science proofs.\"</i>"
                }
            ]
        },
        {
            "title": "13. The Contrapositive Truth Table",
            "id": "slide-13",
            "audioFile": "audio/slide_12.wav",
            "content": [
                {
                    "type": "html-content",
                    "text": "<div class='table-wrapper flex justify-center my-4'><div class='text-center'><h4 class='font-bold mb-2'>Contrapositive truth table</h4><table class='pascal-table mx-auto'><tr><th>\\( p \\)</th><th>\\( q \\)</th><th>\\( \\neg p \\)</th><th>\\( \\neg q \\)</th><th>\\( p \\Rightarrow q \\)</th><th>\\( \\neg q \\Rightarrow \\neg p \\)</th></tr><tr><td>T</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td></tr><tr><td>T</td><td>F</td><td>F</td><td>T</td><td>F</td><td>F</td></tr><tr><td>F</td><td>T</td><td>T</td><td>F</td><td>T</td><td>T</td></tr><tr><td>F</td><td>F</td><td>T</td><td>T</td><td>T</td><td>T</td></tr></table></div></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5'><li>It follows that: <div class='text-center my-4'><span class='border-2 border-gray-800 p-2 font-bold'>\\( (p \\Rightarrow q) \\iff (\\neg q \\Rightarrow \\neg p) \\)</span></div></li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"So when we assert they are the same thing, let's look at the final two columns of the truth table. Because every row matches, we have irrefutable proof. You can essentially substitute one for another without changing the absolute truth.\"</i>"
                }
            ]
        },
        {
            "title": "14. Example: Contrapositive proof",
            "id": "slide-14",
            "audioFile": "audio/slide_13.wav",
            "content": [
                {
                    "type": "math-example",
                    "text": "The number 3 is prime, and \\( 3+1 = 4 \\) is a perfect square. Show that there are no other prime numbers \\( n \\) such that \\( n+1 \\) is a perfect square."
                },
                {
                    "type": "paragraph",
                    "text": "<b>Proof.</b><ul class='list-disc pl-5 space-y-2'><li>Another way to phrase this is, \"<b>if \\( n \\) is a prime number other than 3, then \\( n+1 \\) is not a perfect square</b>.\"</li><li>Suppose that \\( n+1 \\) <em>is</em> a perfect square and \\( n \\neq 3 \\). Then, \\( n+1= k^2 \\) for some \\( k \\in \\mathbb{N} \\).</li><li>Then \\( n = k^2 - 1 = (k+1)(k-1) \\).</li><li>We know \\( k \\neq 0 \\), since then \\( n = -1 \\), and we know \\( k \\neq 2 \\), since then \\( n+1 = 4 \\), or \\( n=3 \\), and we are excluding that (we already know it works for \\( n=3 \\)).</li><li>It follows that \\( (k+1) \\) and \\( (k-1) \\) are <b class='text-blue-600 underline'><a href='https://math.answers.com/natural-sciences/What_are_non-trivial_factors' target='_blank'>nontrivial factors</a></b> of \\( n \\) (meaning neither are equal to 1 and neither are equal to \\( n \\)). So \\( n \\) is not prime.</li><li>By the contrapositive, if \\( n \\) is a prime number other than 3, then \\( n+1 \\) is not a perfect square. &blacksquare;</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"Let's break down why we didn't just try to prove this directly. Trying to definitively state that every other prime indefinitely doesn't result in a perfect square directly is extremely hard. But defining what a perfect square acts like algebraically is easy: it acts like k-squared. We assumed it was, proved the resulting factors caused it to be non-prime, effectively breaking the initial assumption! Hence, proven via contrapositive.\"</i>"
                }
            ]
        },
        {
            "title": "15. Contradiction",
            "id": "slide-15",
            "audioFile": "audio/slide_14.wav",
            "content": [
                {
                    "type": "key-concept",
                    "text": "<h3>Contradiction</h3>A <b>Contradiction</b> occurs when we get a statement \\( r \\), such that <b>\\( r \\) is true</b> and <b>its negation \\( \\neg r \\) is also true</b>."
                },
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>Earlier, we proved the following: <b>Theorem:</b> 20 is not a multiple of 3.</li><li>The way we proved this was:<ul class='list-circle pl-5'><li>Assume 20 <em>is</em> a multiple of 3. Then \\( 20 = 3n \\) for some natural number \\( n \\).</li><li>Since \\( 3 \\times 7 = 21 \\), this number \\( n \\) must be between 1 and 6.</li><li>No number \\( n \\) between 1 and 6 gives 20.</li></ul></li><li>The first and second statements imply the following statement: <div class='text-center italic my-2'>There is an \\( n \\in \\{1,2,3,4,5,6\\} \\) such that \\( 3n = 20 \\).</div></li><li>Let's call this statement \\( r \\).</li><li>The second and third statements, however, imply: <div class='text-center italic my-2'>There is no \\( n \\in \\{1,2,3,4,5,6\\} \\) such that \\( 3n = 20 \\).</div></li><li>This is \\( \\neg r \\).</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"So we run into a scenario where we've formally derived that R exists, and R doesn't exist. This is the logic collapsing under its own weight. We call that 'Proof by contradiction'. Since our logical steps are flawless, the only reason the system collapsed must be that our original assumption was inherently flawed.\"</i>"
                }
            ]
        },
        {
            "title": "16. Contradiction (Formal)",
            "id": "slide-16",
            "audioFile": "audio/slide_15.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>So, if \\( p \\) is the statement \"20 is not a multiple of 3\", let \\( q \\) be statement \"an integer \\( n \\) such that \\( 20=3n \\)\" does not exist.</li><li>We assumed \\( \\neg p \\) (i.e. \"20 <em><b>is</b></em> a multiple of 3\"). We concluded \\( r \\land \\neg r \\).</li><li>But \\( r \\land \\neg r \\) is clearly false, no matter what \\( r \\) is! This is a <em><b>contradiction</b></em>.</li><li>So we showed that \\( (p \\land \\neg q) \\Rightarrow (r \\land \\neg r) \\). Since \\( r \\land \\neg r \\) is false, \\( p \\land \\neg q \\) is false, or \\( (\\neg p) \\lor q \\) is true, or \\( p \\Rightarrow q \\).</li><li>We might formalize this in the following way:<div class='text-center my-4 font-mono w-48 mx-auto'>\\( (p \\land \\neg q) \\Rightarrow (r \\land \\neg r) \\)<br>\\( \\neg(r \\land \\neg r) \\)<br><hr class='border-gray-500'>\\( \\therefore\\neg(p \\land \\neg q) \\)<br>\\( \\therefore (\\neg p) \\lor q \\)<br><hr class='border-gray-500'>\\( \\therefore p \\Rightarrow q \\)</div></li><li>The symbol \\( \\therefore \\) means \"therefore\", and signals that the statement follows from the preceding statement and possibly statements before it.</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"I like to view those derivations line by line. The 'therefore' symbol is formally bridging the gap telling us 'based absolutely on what we just derived above'. When tracing this formally, you see exactly how the assumption that P was false forces the entire structure down to zero. That zero forces the implication to hold true.\"</i>"
                }
            ]
        },
        {
            "title": "17. Rules of Inference",
            "id": "slide-17",
            "audioFile": "audio/slide_16.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Simple arguments can be used as building blocks to construct more complicated valid arguments. Certain simple arguments that have been established as valid are very important in terms of their usage. These arguments are called <b>Rules of Inference</b>."
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"These rules are basically shortcuts. Just like you don't continually re-prove that 1+1=2 every time you do math, you don't need to write a full truth table every time you see Modus Tollens. We memorize these templates so we can scale our complexity without dragging down logic checking.\"</i>"
                }
            ]
        },
        {
            "title": "18. Modus tollens",
            "id": "slide-18",
            "audioFile": "audio/slide_17.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>Breaking down the previous argument, let's look at how each line of reasoning went: <div class='text-center my-4 font-mono w-48 mx-auto'>\\( (p \\land \\neg q) \\Rightarrow (r \\land \\neg r) \\)<br>\\( \\neg(r \\land \\neg r) \\)<br><hr class='border-gray-500'>\\( \\therefore\\neg(p \\land \\neg q) \\)</div></li><li>Let's say that \\( P \\) is the statement \\( p \\land \\neg q \\), and \\( Q \\) is the statement \\( r \\land \\neg r \\). Then the above deduction becomes: <div class='text-center my-4 font-mono w-32 mx-auto'>\\( P \\Rightarrow Q \\)<br>\\( \\neg Q \\)<br><hr class='border-gray-500'>\\( \\therefore\\neg P \\)</div></li><li>This rule of inference is known as <em><b>modus tollens</b></em>.</li><li>Note the similarity between this rule of inference and the contrapositive: \\[ (P \\Rightarrow Q) \\iff (\\neg Q \\Rightarrow \\neg P) \\]</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"Modus Tollens translates directly from Latin meaning 'the way that denies by denying'. It's identical to the logic embedded in the contrapositive. We have the rule, 'If P happens, Q must happen'. If Q DID NOT happen, then absolutely certain, P could not have happened. That forms the core trick for debugging. 'If database works, site loads.' If site doesn't load? Database definitely broke.\"</i>"
                }
            ]
        },
        {
            "title": "19. Modus ponens",
            "id": "slide-19",
            "audioFile": "audio/slide_18.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>Closely related is the rule of inference known as <b>modus ponens</b>:<div class='text-center my-4 font-mono w-32 mx-auto'>\\( P \\Rightarrow Q \\)<br>\\( P \\)<br><hr class='border-gray-500'>\\( \\therefore Q \\)</div></li><li>Both <em>modus ponens</em> and <em>modus tollens</em> can be applied to <em>any statements</em>. Not just statements involving numbers and sets!<ul class='list-circle pl-5 mt-2'><li>If I were vegetarian, I'd order from the vegetarian menu. I'm vegetarian, so I'll order from the vegetarian menu. (<em>Modus ponens</em>)</li><li>If I were vegetarian, I'd order from the vegetarian menu. I'm not ordering from the vegetarian menu, so I'm not vegetarian. (<em>Modus tollens</em>)</li></ul></li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"While Modus Tollens was the 'way that denies', Modus Ponens is the 'way that affirms'. If it rains, the ground gets wet. It is raining. Ergo, ground is wet. This is straightforward execution. If an IF statement in code evaluates to true, run the inner block. Basic, sequential affirmation.\"</i>"
                }
            ]
        },
        {
            "title": "20. Ponens vs. Tollens",
            "id": "slide-20",
            "audioFile": "audio/slide_19.wav",
            "content": [
                {
                    "type": "html-content",
                    "text": "<div class='flex flex-wrap gap-8 justify-center my-4'>\n    <div class='bg-blue-50 p-6 rounded-lg text-center shadow-sm w-64'>\n        <h3 class='text-lg font-bold text-blue-800 mb-4'>Modus <b>Ponens</b></h3>\n        <div class='font-mono mb-4 text-right inline-block mx-auto'>\n            \\( P \\Rightarrow Q \\)<br>\n            \\( P \\)<br>\n            <hr class='border-gray-500'>\n            \\( \\therefore Q \\)\n        </div>\n        <p class='text-sm mt-4'>result is <b>affirmation of conclusion</b></p>\n    </div>\n    <div class='bg-blue-50 p-6 rounded-lg text-center shadow-sm w-64'>\n        <h3 class='text-lg font-bold text-blue-800 mb-4'>Modus <b>Tollens</b></h3>\n        <div class='font-mono mb-4 text-right inline-block mx-auto'>\n            \\( P \\Rightarrow Q \\)<br>\n            \\( \\neg Q \\)<br>\n            <hr class='border-gray-500'>\n            \\( \\therefore\\neg P \\)\n        </div>\n        <p class='text-sm mt-4'>result is <b>denial of hypothesis</b></p>\n    </div>\n</div>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"It's very common to mistake these for their fallacious counterparts. Remember: You cannot affirm the conclusion directly, and you cannot deny the hypothesis directly. Affirming the hypothesis (Ponens) and Denying the conclusion (Tollens) are the only valid legal moves.\"</i>"
                }
            ]
        },
        {
            "title": "21. Other rules of inference",
            "id": "slide-21",
            "audioFile": "audio/slide_20.wav",
            "content": [
                {
                    "type": "html-content",
                    "text": "<div class='overflow-x-auto'><table class='w-full text-left border-collapse'><tbody>\n<tr class='border-b'><td class='py-3 font-bold'>Addition</td><td class='py-3 px-4 text-center font-mono'>\\( P \\)<br><hr class='border-gray-400'>\\( \\therefore P \\lor Q \\)</td><td class='py-3 px-4 text-sm'>if P is true, then P or Q must be true.</td></tr>\n<tr class='border-b'><td class='py-3 font-bold'>Conjunction</td><td class='py-3 px-4 text-center font-mono'>\\( P \\)<br>\\( Q \\)<br><hr class='border-gray-400'>\\( \\therefore P \\land Q \\)</td><td class='py-3 px-4 text-sm'>if P is true, and Q is true, then the logical conjunction of the two propositions \\( P\\land Q \\) is true.</td></tr>\n<tr class='border-b'><td class='py-3 font-bold'>Simplification</td><td class='py-3 px-4 text-center font-mono flex gap-4 justify-center'><div>\\( P \\land Q \\)<br><hr class='border-gray-400'>\\( \\therefore P \\)</div><div>\\( P \\land Q \\)<br><hr class='border-gray-400'>\\( \\therefore Q \\)</div></td><td class='py-3 px-4 text-sm'>if the conjunction P and Q is true, then P is true, and Q is true.</td></tr>\n<tr class='border-b'><td class='py-3 font-bold'>Disjunctive syllogism</td><td class='py-3 px-4 text-center font-mono'>\\( P \\lor Q \\)<br>\\( \\neg P \\)<br><hr class='border-gray-400'>\\( \\therefore Q \\)</td><td class='py-3 px-4 text-sm'>I will choose soup or I will choose salad.<br>I will not choose soup.<br>Therefore, I will choose salad.</td></tr>\n<tr class='border-b'><td class='py-3 font-bold'>Hypothetical syllogism</td><td class='py-3 px-4 text-center font-mono'>\\( P \\Rightarrow Q \\)<br>\\( Q \\Rightarrow R \\)<br><hr class='border-gray-400'>\\( \\therefore P \\Rightarrow R \\)</td><td class='py-3 px-4 text-sm'>If I do not wake up, then I cannot go to work.<br>If I cannot go to work, then I will not get paid.<br>Therefore, if I do not wake up, then I will not get paid.</td></tr>\n</tbody></table></div>\n<div class='text-sm italic mt-4'>and there are more of those... See e.g. <a href=\"https://en.wikipedia.org/wiki/List_of_rules_of_inference\" target=\"_blank\" class=\"text-blue-600 underline\">Wikipedia &rightarrow; List of rules of inference</a></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"Each of these forms a mini-tool in our logical toolkit. Think of hypothetical syllogism strictly like chaining variables. P goes to Q. Q goes to R. Therefore P goes to R. It sets up dominoes that perfectly knock one another down dynamically.\"</i>"
                }
            ]
        },
        {
            "title": "22. De Morgan's Laws",
            "id": "slide-22",
            "audioFile": "audio/slide_21.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>Let's look at the second inference in our contradiction argument: <div class='text-center my-2 font-mono'>\\( \\neg(p \\land \\neg q) \\)<br>\\( \\therefore (\\neg p) \\lor q \\)</div></li><li>Giving these statements some new names, let's call \\( P \\) the statement \\( p \\) and \\( Q \\) the statement \\( \\neg q \\), so we get: <div class='text-center my-2 font-mono'>\\( \\neg(P \\land Q) \\)<br>\\( \\therefore (\\neg P) \\lor (\\neg Q) \\)</div>(note \\( \\neg Q \\) means \\( \\neg \\neg q \\), or \"not not \\( q \\)\", which is \\( q \\)).</li><li>This is one of <em>de Morgan's laws</em>. The other one is: <div class='text-center my-2 font-mono'>\\( \\neg(P \\lor Q) \\)<br>\\( \\therefore (\\neg P) \\land (\\neg Q) \\)</div></li><li>These can also be written as logical equivalences: <div class='text-center my-4 font-mono font-bold text-lg p-2 border inline-block mx-auto w-full'>\\[ \\neg(P \\land Q) \\iff (\\neg P) \\lor (\\neg Q) \\]<br>\\[ \\neg(P \\lor Q) \\iff (\\neg P) \\land (\\neg Q) \\]</div></li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"A great way to verbally remember De Morgan's Law is 'Distribute the NOT, and flip the sign'. Just like multiplying a negative out in algebra, you push the NOT into the variables, and turn your ANDs into ORs, and your ORs into ANDs. This is incredibly practical avoiding tricky, long negations when writing SQL queries or conditional logic.\"</i>"
                }
            ]
        },
        {
            "title": "23. Algebraic properties",
            "id": "slide-23",
            "audioFile": "audio/slide_22.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-4'><li>Commutativity: \\[ P \\lor Q \\iff Q \\lor P \\qquad P \\land Q \\iff Q \\land P \\]</li><li>Associativity: \\[ P \\lor (Q \\lor R) \\iff (P \\lor Q) \\lor R \\qquad P \\land (Q \\land R) \\iff (P \\land Q) \\land R \\]</li><li>de Morgan's Laws: \\[ \\neg (P \\lor Q) \\iff (\\neg P) \\land (\\neg Q) \\qquad \\neg(P \\land Q) \\iff (\\neg P) \\lor(\\neg Q) \\]</li><li>Negation: \\[ P \\iff \\neg\\neg P \\qquad P \\lor \\neg P \\textrm{ is TRUE} \\qquad P \\land \\neg P \\textrm{ is FALSE} \\]</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"This slide proves that boolean algebra plays by nearly exact same rules as the normal algebra you learned in middle school! Understanding we can move parentheses around due to associativity means we're not constantly locked into the initial layout of the variables. We have liberty to reorganize for simplification.\"</i>"
                }
            ]
        },
        {
            "title": "24. Example: Proof Based on Inference",
            "id": "slide-24",
            "audioFile": "audio/slide_23.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Construct a proof to show that the following argument is valid: <br><br><span class='italic'>If the programming team is happy, or the specification is clear, then the program will be written under budget. If the program is written under budget, the boss will rejoice. The boss will not rejoice. Therefore, the specification is not clear.</span>"
                },
                {
                    "type": "key-concept",
                    "text": "<h3>Solution</h3><ul class='list-disc pl-5 space-y-2'><li>Let \\( P \\) be the statement \"The programming team is happy\", \\( S \\) be the statement \"The specification is clear\", \\( B \\) be the statement \"The program will be written under budget\", and \\( R \\) be the statement \"The boss will rejoice.\"</li><li>We are told: <ol class='list-decimal pl-5 space-y-1 mt-2'><li>\\( (P \\lor S) \\Rightarrow B \\)</li><li>\\( B \\Rightarrow R \\)</li><li>\\( \\neg R \\)</li></ol></li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"Notice the conversion here. We translated a large, messy English paragraph into a clean set of mathematical assumptions. This exact process allows us to abstract the problem and rely entirely on computation to give us an answer without getting lost in the grammar!\"</i>"
                }
            ]
        },
        {
            "title": "25. Example: Proof Based on Inference (Solution)",
            "id": "slide-25",
            "audioFile": "audio/slide_24.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li><b>Solution.</b> Let \\( P \\) be the statement \"The programming team is happy\", \\( S \\) be the statement \"The specification is clear\", \\( B \\) be the statement \"The program will be written under budget\", and \\( R \\) be the statement \"The boss will rejoice.\"</li><li>A syllogistic argument based on inference could look like this:</li></ul>"
                },
                {
                    "type": "math-example",
                    "text": "<div class='overflow-x-auto'><table class='mx-auto font-mono'>\n<tr><td class='pr-8 text-right'>1. \\( (P \\lor S) \\Rightarrow B \\)</td><td class='text-gray-600'>(Assumption 1)</td></tr>\n<tr><td class='pr-8 text-right'>2. \\( B \\Rightarrow R \\)</td><td class='text-gray-600'>(Assumption 2)</td></tr>\n<tr><td class='pr-8 text-right'>3. \\( \\neg R \\)</td><td class='text-gray-600'>(Assumption 3)</td></tr>\n<tr><td class='pr-8 text-right'>4. \\( \\neg B \\)</td><td class='text-gray-600'>(Modus tollens, steps 2 and 3)</td></tr>\n<tr><td class='pr-8 text-right'>5. \\( \\neg(P \\lor S) \\)</td><td class='text-gray-600'>(Modus tollens, steps 1 and 4)</td></tr>\n<tr><td class='pr-8 text-right'>6. \\( (\\neg P) \\land (\\neg S) \\)</td><td class='text-gray-600'>(de Morgan's Laws, step 5)</td></tr>\n<tr><td class='pr-8 text-right'>7. \\( (\\neg S) \\land (\\neg P) \\)</td><td class='text-gray-600'>(Commutativity, step 6)</td></tr>\n<tr><td class='pr-8 text-right'>8. \\( \\neg S \\)</td><td class='text-gray-600'>(Simplification, step 7)</td></tr>\n</table></div><div class='text-right mt-2 font-bold'>&blacksquare;</div>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"Just like that! By applying our standard inference rules sequentially, we easily cascade backwards. The boss not rejoicing forces the break of the budget, which breaks the initial 'or' statement, meaning neither hypothesis could be true! Therefore, the specifications were definitely not clear.\"</i>"
                }
            ]
        },
        {
            "title": "26. Symbolic logic and set theory",
            "id": "slide-26",
            "audioFile": "audio/slide_25.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>Symbolic logic and set theory are two languages describing the same thing: replace \"statements\" with \"sets\", and the operations \\( \\neg \\), \\( \\land \\), \\( \\lor \\), and \\( \\Rightarrow \\) with \\( ^c \\), \\( \\cap \\), \\( \\cup \\), and \\( \\subseteq \\) and you have the same statements. (Recall that \\( x \\in A^c \\) means \\( x \\not\\in A \\).)</li><li>Indeed, say \\( A \\) and \\( B \\) are sets, \\( p \\) is the statement \\( x \\in A \\), and \\( q \\) is the statement \\( x \\in B \\).</li></ul>"
                },
                {
                    "type": "key-concept",
                    "text": "<h3>Symbolic logic and sets</h3>\\[ \\begin{align*} x \\in A^c \\quad &\\iff \\quad \\neg p \\\\ x \\in A \\cap B \\quad &\\iff \\quad p \\land q \\\\ x \\in A \\cup B \\quad &\\iff \\quad p \\lor q \\\\ A \\subseteq B \\quad & \\iff \\quad p \\Rightarrow q \\end{align*} \\]"
                },
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 mt-4'><li>Indeed, \\( A \\subseteq B \\) means if \\( x \\in A \\), then \\( x \\in B \\), or \\( p \\Rightarrow q \\).</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"It's completely amazing that we can draw Ven diagrams and translate them absolutely perfectly into abstract boolean symbols. Set theory intersections are logical ANDs. Unions are ORs. Subsets are pure Implications. We frequently toggle between the two domains depending on which tool makes the proof easier!\"</i>"
                }
            ]
        },
        {
            "title": "27. Computer circuitry",
            "id": "slide-27",
            "audioFile": "audio/slide_26.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>The data in a computer is stored in \"bits\", or 0s and 1s.</li><li>A \"bit\" is actually a <em>voltage:</em> an electrical signal, or a lack of an electrical signal. <ul class='list-circle pl-5 mt-2'><li>0: No signal. The voltage is \"off\" (usually between 0 and 0.8 V in computers).</li><li>1: Signal. The voltage is \"on\" (usually between 3 and 5 V in computers).</li></ul></li><li>Computer circuitry is built up of components that receive information input in the form of voltage&mdash;its presence (1), or its absence (0)&mdash;and process that input into information output (again a voltage, either 1 or 0).</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"So we've been talking all abstractly until this exact point. This is where software logic literally becomes physical engineering hardware. A boolean TRUE is 5 Volts sent across a copper wire. FALSE is essentially 0 volts. Billions of components deciding whether to continue letting current through or blocking it defines the entire digital revolution.\"</i>"
                }
            ]
        },
        {
            "title": "28. The AND gate",
            "id": "slide-28",
            "audioFile": "audio/slide_27.wav",
            "content": [
                {
                    "type": "html-content",
                    "text": "<div class='flex justify-center items-center gap-8 my-8'><img src='figures/andcirc.png' alt='AND circuit schematic' style='width: 40%;'><img src='figures/andgate.png' alt='AND logic gate symbol' style='width: 45%;'></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<b>Discussion Point:</b> <i>\"This component shape\u2014with the flat back and round front\u2014is standardized universally in Computer Science to mean an AND gate. Both inputs A and B must push a high-signal. Without both present simultaneously, nothing comes out of the front.\"</i>"
                }
            ]
        },
        {
            "title": "29. The truth table of the AND gate",
            "id": "slide-29",
            "audioFile": "audio/slide_28.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>The AND gate's truth table tells us the <em>output of the gate given its input.</em></li><li>In other words, the truth table gives us <em>all possible outputs given all possible inputs.</em></li></ul>"
                },
                {
                    "type": "html-content",
                    "text": "<div class='text-center my-4'><img src='figures/andgate1.png' alt='AND logic gate text' class='mx-auto mb-4' style='width: 44%;'></div><div class='flex flex-wrap gap-8 justify-center items-start'><div class='table-wrapper min-w-[200px] text-center'><table class='pascal-table mx-auto'><tr><th>A</th><th>B</th><th>A AND B</th></tr><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td></tr></table></div><div class='table-wrapper min-w-[200px] text-center'><table class='pascal-table mx-auto'><tr><th>\\( p \\)</th><th>\\( q \\)</th><th>\\( p \\land q \\)</th></tr><tr><td>T</td><td>T</td><td>T</td></tr><tr><td>T</td><td>F</td><td>F</td></tr><tr><td>F</td><td>T</td><td>F</td></tr><tr><td>F</td><td>F</td><td>F</td></tr></table></div></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 mt-4'><li>Notice that in a certain sense, the truth tables for the AND gate and for the logical operator \\( \\land \\) are <em>equivalent</em>.</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"We represent this computationally physically by literally mapping our Truth Tables values T and F into hardware voltages 1 and 0. Notice the layout hasn't changed. The logic drives the hardware design intrinsically.\"</i>"
                }
            ]
        },
        {
            "title": "30. The NOT gate",
            "id": "slide-30",
            "audioFile": "audio/slide_29.wav",
            "content": [
                {
                    "type": "html-content",
                    "text": "<div class='flex justify-center items-center gap-8 my-4'><img src='figures/notcirc.png' alt='NOT circuit schematic' style='width: 45%;'><img src='figures/notgate.png' alt='NOT logic gate symbol' style='width: 40%;'></div>"
                },
                {
                    "type": "html-content",
                    "text": "<div class='table-wrapper flex justify-center mt-8'><table class='pascal-table mx-auto'><tr><th>\\( p \\)</th><th>\\( \\neg p \\)</th></tr><tr><td>F</td><td>T</td></tr><tr><td>T</td><td>F</td></tr></table></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<b>Discussion Point:</b> <i>\"The little circle attached to the triangle points out the negation\u2014often called an inverter. If passing 1 (High Voltage), the gate spits out 0. If zero, it spits out High Voltage. The little circle at the output will pop up on other gates as well when we combine them.\"</i>"
                }
            ]
        },
        {
            "title": "31. The OR gate",
            "id": "slide-31",
            "audioFile": "audio/slide_30.wav",
            "content": [
                {
                    "type": "html-content",
                    "text": "<div class='flex justify-center items-center gap-8 my-4'><img src='figures/orcirc.png' alt='OR circuit schematic' style='width: 40%;'><img src='figures/orgate.png' alt='OR logic gate symbol' style='width: 45%;'></div>"
                },
                {
                    "type": "html-content",
                    "text": "<div class='table-wrapper flex justify-center mt-8'><table class='pascal-table mx-auto'><tr><th>\\( q \\)</th><th>\\( p \\)</th><th>\\( p \\lor q \\)</th></tr><tr><td>F</td><td>F</td><td>F</td></tr><tr><td>F</td><td>T</td><td>T</td></tr><tr><td>T</td><td>F</td><td>T</td></tr><tr><td>T</td><td>T</td><td>T</td></tr></table></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"The curved back characterizes our standard OR gate. We can see that the second it sees higher energy (1) present at any of its input terminals, it triggers energy transmission continuously on the output.\"</i>"
                }
            ]
        },
        {
            "title": "32. Logic circuits",
            "id": "slide-32",
            "audioFile": "audio/slide_31.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5 space-y-2'><li>Combinations of these logic gates can be linked together to form <em>logic circuits</em>, which allow for the processing of more sophisticated logical deductions.</li><li><b>Example</b>: What is the output of this logic circuit, and what is its truth table?</li></ul>"
                },
                {
                    "type": "html-content",
                    "text": "<div class='text-center my-6'><img src='figures/athenbcirc.png' alt='A implies B logic circuit' class='mx-auto' style='width: 50%;'></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<ul class='list-disc pl-5'><li>The output is \\( (\\neg A) \\lor B \\).</li></ul>"
                },
                {
                    "type": "html-content",
                    "text": "<div class='table-wrapper flex justify-center mt-4'><table class='pascal-table mx-auto'><tr><th>\\( A \\)</th><th>\\( B \\)</th><th>\\( \\neg A \\)</th><th>\\( (\\neg A) \\lor B \\)</th><th>\\( A \\Rightarrow B \\)</th></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr></table></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"Wait, look at that final output. We took an inverter (NOT A) and pumped it into an OR gate along with normal variable B. The truth table matches the EXACT behavior of our Implication algebra (A implies B). Hardware implementation of P implies Q is just connecting a NOT to an OR!\"</i>"
                }
            ]
        },
        {
            "title": "33. XOR (A \\( \\oplus \\) B - \"but not both\")",
            "id": "slide-33",
            "audioFile": "audio/slide_32.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "<b>Problem.</b> Create a logical statement that agrees with the following truth table, and a logic circuit that will produce this output:"
                },
                {
                    "type": "html-content",
                    "text": "<div class='table-wrapper flex justify-center my-4'><table class='pascal-table mx-auto'><tr><th>A</th><th>B</th><th>OUT</th></tr><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td></tr></table></div>"
                },
                {
                    "type": "math-example",
                    "text": "<b>Statement:</b> \\[ (A \\lor B) \\land \\neg(A \\land B) \\]"
                },
                {
                    "type": "html-content",
                    "text": "<b>Logic gate:</b><div class='text-center mt-4'><img src='figures/xorcirc.png' alt='XOR logic gate circuit' class='mx-auto' style='width: 50%;'></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"Here is where we formally solve the 'Cake or Ice cream' issue! The Exclusive OR (XOR). They both can't be zero, and they both can't be one. Since it's such a common requirement conceptually, we gave it its own logic symbol entirely with that double-curved backing.\"</i>"
                }
            ]
        },
        {
            "title": "34. XNOR (\\( \\neg(A \\oplus B) \\))",
            "id": "slide-34",
            "audioFile": "audio/slide_33.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "What do we get when we put a NOT gate at the output of the previous circuit?"
                },
                {
                    "type": "html-content",
                    "text": "<div class='text-center my-6'><img src='figures/xnorcirc.png' alt='XNOR logic gate circuit' class='mx-auto mb-6' style='width: 50%;'><div class='table-wrapper flex justify-center'><table class='pascal-table mx-auto'><tr><th>A</th><th>B</th><th>OUT</th><th>A \\( \\Leftrightarrow \\) B</th></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td></tr></table></div></div>"
                },
                {
                    "type": "paragraph",
                    "text": "The circuit is called XNOR. It gives the truth value of \\( \\iff \\): \\[ (A \\iff B) \\quad \\text{is equivalent to} \\quad \\neg((A \\lor B) \\land \\neg(A \\land B)) \\]"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"And when we negate the XOR, mapping it out reveals our old friend: the Biconditional (Logical Equivalency). This hardware gate allows our circuit perfectly to check if two digital inputs perfectly match! This is the backbone of checking passwords equality for example!\"</i>"
                }
            ]
        },
        {
            "title": "35. One more example",
            "id": "slide-35",
            "audioFile": "audio/slide_34.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Can the following logic gate be simplified?"
                },
                {
                    "type": "html-content",
                    "text": "<div class='flex items-center justify-center gap-8 my-4 w-full'><div class='flex-1 text-right'><img src='figures/demorgancirc1.png' alt='De Morgans circuit 1' class='ml-auto' style='max-width: 250px;'></div><div class='flex-1'>\\[ (\\neg A) \\lor (\\neg B) \\]</div></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<em>Yes!!</em> We can simplify it with de Morgan's laws!"
                },
                {
                    "type": "html-content",
                    "text": "<div class='flex items-center justify-center gap-8 my-4 w-full'><div class='flex-1 text-right'><img src='figures/demorgancirc2.png' alt='De Morgans circuit 2' class='ml-auto' style='max-width: 250px;'></div><div class='flex-1'>\\[ \\neg(A \\land B) \\]</div></div>"
                },
                {
                    "type": "html-content",
                    "text": "<div class='table-wrapper flex justify-center mt-6'><table class='pascal-table mx-auto'><tr><th>\\( A \\)</th><th>\\( B \\)</th><th>\\( \\neg A \\lor \\neg B \\)</th><th>\\( \\neg(A \\land B) \\)</th></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td></tr></table></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"Notice how we just saved money! Instead of using hardware resources building two distinct NOT gates and connecting them to one OR gate, we mathematically mapped that it behaves perfectly identical to a single AND gate connected to a NOT gate (a NAND gate). Doing this millions of times scales to billion-dollar savings globally.\"</i>"
                }
            ]
        },
        {
            "title": "36. Summary",
            "id": "slide-36",
            "audioFile": "audio/slide_35.wav",
            "content": [
                {
                    "type": "key-concept",
                    "text": "<h3>So why do symbolic logic?</h3><ul class='list-disc pl-5 space-y-2 mt-2'><li>Symbolic logic helps us analyze logic circuits.</li><li>Equivalent statements in symbolic logic correspond to logic circuits with identical outputs.</li><li>Can use symbolic logic to <em>simplify</em> logic circuits, or tell if two logic circuits are <em>equivalent</em>.</li><li>Can also use symbolic logic to <em>build logic circuits</em>, especially if you have multiple lines of input. (Once you get good at it, symbolic logic is fantastic for handling several logical inputs systematically.)</li></ul>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"Ultimately, understanding the algebra behind logical expressions means you're building software and hardware that is faster, cheaper, and inherently less prone to failures due to sheer simplification. That's true power.\"</i>"
                }
            ]
        },
        {
            "title": "37. Week 2 Quiz",
            "id": "slide-37",
            "audioFile": "audio/slide_36.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "You've completed the lecture for Week 2. Let's test your understanding of Symbolic Logic and Rules of Inference."
                },
                {
                    "type": "html-content",
                    "text": "<div class='text-center my-8'><a href='quiz/quiz_02.html' target='_blank' class='inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded shadow-lg transition-transform transform hover:scale-105'>Take the Week 2 Quiz</a></div>"
                },
                {
                    "type": "paragraph",
                    "text": "<br><hr><b>Discussion Point:</b> <i>\"This quiz will cover truth tables, logical equivalences, and rules of inference. Remember taking these steps formally and carefully; mathematical logic leaves no room for guessing! Good luck!\"</i>"
                }
            ]
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}
