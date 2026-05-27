/**
 * Data structure for Week 1.1 Lecture Notes - Sets, Propositions and Basic Logic
 * Content based on the provided LaTeX source for Week 1.1
 */
const lectureData = {
    courseName: "4001CMD - Mathematical Skills for Computing Professionals",
    lectureTitle: "Week 1.1: Sets, Propositions and Basic Logic",

    sections: [
        {
            title: "1. Introduction to Sets",
            id: "introduction-to-sets",
            audioFile: "audio_1/slide_01.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>What is a Set?</h3>\nA <b>set</b> is a collection of things (numbers, words, symbols, poems, anything). Sets can be <b>finite</b> or <b>infinite</b>."
                },
                {
                    type: "paragraph",
                    text: "Set theory is the foundation of modern mathematics. Sets are fundamental building blocks used to describe collections of objects, providing a formal way to structure and organise data. Many concepts in computer science, from data structures to databases, are built upon the principles of set theory."
                },
                {
                    type: "math-example",
                    text: "<h3>Examples of Sets</h3>\n<ul>\n<li><b>Finite sets:</b> \\( A = \\{1, 2, 5\\} \\), \\( B = \\{\\text{John}, \\text{Paul}, \\text{George}, \\text{Ringo}\\} \\), \\( X = \\{a, b, c\\} \\)</li>\n<li><b>Infinite set:</b> \\( Y = \\{n : n \\text{ is a multiple of } 11\\} \\)</li>\n</ul>\n<p>The symbol \":\" or \"|\" reads as \"such that\".</p>"
                }
            ]
        },
        {
            title: "2. Set Notation",
            id: "set-notation",
            audioFile: "audio_1/slide_02.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Roster Notation vs Set-Builder Notation</h3>\n<ul>\n<li><b>Roster notation:</b> \\( A = \\{1, 2, 5\\} \\) (listing elements)</li>\n<li><b>Set-builder notation:</b> \\( Y = \\{n : n \\text{ is a multiple of } 11\\} \\) (describing property)</li>\n</ul>"
                },
                {
                    type: "paragraph",
                    text: "A set is always denoted with braces \\( \\{ \\ldots \\} \\) and usually given a name like \\( A, B, X, Y \\). A finite set is written as a list separated by commas. An infinite set cannot be listed, so we describe the members with a general pattern."
                },
                {
                    type: "math-example",
                    text: "<h3>Reading Set-Builder Notation</h3>\n\\( Y = \\{n \\,|\\, n \\text{ is a multiple of } 11\\} \\) is read as: \"Y is the set of all numbers n such that n is a multiple of 11.\""
                }
            ]
        },
        {
            title: "3. Elements of Sets",
            id: "elements-of-sets",
            audioFile: "audio_1/slide_03.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Element Notation</h3>\nObjects in a set are called <b>elements</b> or <b>members</b>.\n<ul>\n<li>\\( \\in \\) means \"is an element of\"</li>\n<li>\\( \\notin \\) means \"is not an element of\"</li>\n</ul>"
                },
                {
                    type: "math-example",
                    text: "<h3>Examples</h3>\nFor \\( A = \\{1,2,5\\} \\):\n<ul>\n<li>\\( 2 \\in A \\) (2 is an element of A)</li>\n<li>\\( 23 \\notin \\{n : n \\text{ is a multiple of } 11\\} \\)</li>\n</ul>"
                }
            ]
        },
        {
            title: "4. Sets of Numbers",
            id: "sets-of-numbers",
            audioFile: "audio_1/slide_04.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Special Number Sets</h3>\n<ul>\n<li>\\( \\mathbb{N} = \\{1,2,3,4,\\ldots\\} \\): Natural numbers</li>\n<li>\\( \\mathbb{Z} = \\{\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots\\} \\): Integers</li>\n<li>\\( \\mathbb{Q} = \\left\\{ r : r = \\frac{p}{q}, p,q \\in \\mathbb{Z} \\right\\} \\): Rational numbers</li>\n<li>\\( \\mathbb{R} \\): Real numbers (all rational and irrational numbers)</li>\n</ul>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Using Number Sets in Set-Builder Notation</h3>\n\\( Y = \\{n \\in \\mathbb{N} : n \\text{ is a multiple of } 11\\} \\) is read as: \"Y is the set of all natural numbers n such that n is a multiple of 11.\""
                }
            ]
        },
        {
            title: "5. Subsets",
            id: "subsets",
            audioFile: "audio_1/slide_05.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Definition of Subset</h3>\nIf every element of \\( A \\) is an element of \\( B \\), then \\( A \\) is a <b>subset</b> of \\( B \\), written \\( A \\subseteq B \\).\n\n<p>Every set is a subset of itself: \\( A \\subseteq A \\).</p>"
                },
                {
                    type: "math-example",
                    text: "<h3>Examples</h3>\n<ul>\n<li>\\( \\{14, 49, 77\\} \\subseteq \\{n \\in \\mathbb{N} : n \\text{ is a multiple of } 7\\} \\)</li>\n<li>\\( \\mathbb{N} \\subseteq \\mathbb{Z} \\) (every natural number is an integer)</li>\n</ul>"
                },
                {
                    type: "key-concept",
                    text: "<h3>Subsets vs Elements</h3>\n<ul>\n<li>\\( 2 \\in \\mathbb{N} \\) (2 is an element)</li>\n<li>\\( \\{2,4,6,\\ldots\\} \\subseteq \\mathbb{N} \\) (set of evens is a subset)</li>\n<li>\\( \\{2\\} \\subseteq \\mathbb{N} \\) (a set containing 2 is a subset)</li>\n<li><span style='color:red;'>\\( \\{2\\} \\in \\mathbb{N} \\) is INCORRECT</span> (a set cannot be an element of a number set)</li>\n</ul>"
                }
            ]
        },
        {
            title: "6. Equal Sets",
            id: "equal-sets",
            audioFile: "audio_1/slide_06.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>When Are Sets Equal?</h3>\n\\( A = B \\) if and only if \\( A \\subseteq B \\) and \\( B \\subseteq A \\)."
                },
                {
                    type: "paragraph",
                    text: "A <b>proper subset</b> is a subset that is not equal to the main set (e.g., \\( \\mathbb{N} \\) is a proper subset of \\( \\mathbb{Z} \\))."
                },
                {
                    type: "math-example",
                    text: "<h3>Proof Example: Equal Sets</h3>\nLet \\( C = \\{n \\in \\mathbb{N} : n \\text{ is a multiple of } 6\\} \\) and \\( D = \\{n \\in \\mathbb{N} : n \\text{ is a multiple of } 3 \\text{ and a multiple of } 2\\} \\).\n\n<p><b>Proof that \\( C = D \\):</b></p>\n<ul>\n<li>If \\( n \\in C \\), then \\( n = 6k \\), so \\( n = 3(2k) \\) and \\( n = 2(3k) \\) ⇒ \\( n \\in D \\) ⇒ \\( C \\subseteq D \\)</li>\n<li>If \\( n \\in D \\), then \\( n = 2k \\) and \\( n = 3r \\), so \\( 2k = 3r \\) ⇒ \\( r \\) is even ⇒ \\( r = 2p \\) ⇒ \\( n = 3(2p) = 6p \\) ⇒ \\( n \\in C \\) ⇒ \\( D \\subseteq C \\)</li>\n</ul>\nTherefore \\( C = D \\). \\( \\square \\)"
                }
            ]
        },
        {
            title: "7. The Empty Set",
            id: "empty-set",
            audioFile: "audio_1/slide_07.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>The Empty Set \\( \\emptyset \\)</h3>\nThe empty set \\( \\emptyset = \\{\\} \\) is the set that contains nothing. It is a subset of every set:\n\\[ \\emptyset \\subseteq A \\quad \\text{for every set } A \\]"
                },
                {
                    type: "paragraph",
                    text: "Think of it like carrying books in a bag: the set of books in your bag could be empty. The empty set is surprisingly useful in abstract set theory."
                }
            ]
        },
        {
            title: "8. Union, Intersection, Difference, Symmetric Difference",
            id: "set-operations",
            audioFile: "audio_1/slide_08.mp3",
            content: [
                {
                    type: "key-concept",
                    text: "<h3>Set Operations Summary</h3>\n<table border='1' style='width:100%; border-collapse: collapse;'>\n<th style='padding: 8px; text-align: left;'>Operation</th><th style='padding: 8px; text-align: left;'>Notation</th><th style='padding: 8px; text-align: left;'>Definition</th>\n<tr><td style='padding: 8px;'><b>Union</b></td><td style='padding: 8px;'>\\( A \\cup B \\)</td><td style='padding: 8px;'>\\( \\{x \\mid x \\in A \\text{ or } x \\in B\\} \\)</td></tr>\n<tr><td style='padding: 8px;'><b>Intersection</b></td><td style='padding: 8px;'>\\( A \\cap B \\)</td><td style='padding: 8px;'>\\( \\{x \\mid x \\in A \\text{ and } x \\in B\\} \\)</td></tr>\n<tr><td style='padding: 8px;'><b>Complement</b></td><td style='padding: 8px;'>\\( A^c \\) or \\( \\bar{A} \\)</td><td style='padding: 8px;'>\\( \\{x \\mid x \\in U \\text{ and } x \\notin A\\} \\) (relative to universal set \\( U \\))</td></tr>\n<tr><td style='padding: 8px;'><b>Difference</b></td><td style='padding: 8px;'>\\( A \\setminus B \\)</td><td style='padding: 8px;'>\\( \\{x \\mid x \\in A \\text{ and } x \\notin B\\} \\)</td></tr>\n<tr><td style='padding: 8px;'><b>Symmetric Difference</b></td><td style='padding: 8px;'>\\( A \\triangle B \\)</td><td style='padding: 8px;'>\\( \\{x \\mid (x \\in A \\text{ and } x \\notin B) \\text{ or } (x \\notin A \\text{ and } x \\in B)\\} \\)</td></tr>\n</table>"
                },
                {
                    "type": "html-content",
                    "text": "<div class='image-container'><center><img src='figures/venn.png' alt='Venn diagram example' style='width: 50%;'><p class='image-caption'>Venn diagram showing the uppercase glyphs shared by the Greek (upper left), Latin (upper right), and Russian Cyrillic (bottom) alphabets</p></center></div>"
                },
                {
                    "type": "html-content",
                    "text": "<div class='image-container' style='text-align: center;'>\n<p><b>Set Operations in Venn Diagrams:</b></p>\n<div style='display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;'>\n<div><img src='figures/intersection.png' alt='Intersection' style='width: 150px;'><br>Intersection \\( A \\cap B \\)</div>\n<div><img src='figures/union.png' alt='Union' style='width: 150px;'><br>Union \\( A \\cup B \\)</div>\n<div><img src='figures/difference.png' alt='Difference' style='width: 150px;'><br>Difference \\( A \\setminus B \\)</div>\n<div><img src='figures/symmdiff.png' alt='Symmetric Difference' style='width: 150px;'><br>Symmetric Difference \\( A \\triangle B \\)</div>\n</div>\n</div>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Example</h3>\nFor \\( A = \\{2,4,6,8,10,12\\} \\) and \\( B = \\{3,6,9,12,15\\} \\):\n<ul>\n<li>\\( A \\cap B = \\{6,12\\} \\)</li>\n<li>\\( A \\cup B = \\{2,3,4,6,8,9,10,12,15\\} \\)</li>\n<li>\\( A \\setminus B = \\{2,4,8,10\\} \\)</li>\n<li>\\( A \\triangle B = \\{2,3,4,8,9,10,15\\} \\)</li>\n</ul>"
                }
            ]
        },
        {
            title: "9. Venn Diagrams and Disjoint Sets",
            id: "venn-diagrams",
            audioFile: "audio_1/slide_09.mp3",
            content: [
                {
                    "type": "key-concept",
                    "text": "<h3>Venn Diagrams</h3>\nA <b>Venn diagram</b> is a diagram that shows the logical relation between sets, popularized by John Venn (1834–1923)."
                },
                {
                    "type": "key-concept",
                    "text": "<h3>Disjoint Sets</h3>\nIf \\( A \\) and \\( B \\) have no elements in common, then \\( A \\cap B = \\emptyset \\). We say \\( A \\) and \\( B \\) are <b>disjoint</b>."
                },
                {
                    "type": "html-content",
                    "text": "<div class='image-container' style='text-align: center;'><img src='figures/venn-disj.png' alt='Disjoint sets Venn diagram' style='width: 200px;'><p class='image-caption'>Disjoint sets: \\( A \\cap B = \\emptyset \\)</p></div>"
                }
            ]
        },
        {
            "title": "10. Properties of Union and Intersection",
            "id": "properties-union-intersection",
            audioFile: "audio_1/slide_10.mp3",
            content: [
                {
                    "type": "key-concept",
                    "text": "<h3>Properties of \\( \\cup \\) and \\( \\cap \\)</h3>\n<ul>\n<li><b>Subset-Intersection Property (Absorption Law):</b> If \\( A \\subseteq B \\), then \\( A \\cap B = A \\)</li>\n<li><b>Commutative (Intersection):</b> \\( A \\cap B = B \\cap A \\)</li>\n<li><b>Commutative (Union):</b> \\( A \\cup B = B \\cup A \\)</li>\n<li><b>Associative (Union):</b> \\( A \\cup (B \\cup C) = (A \\cup B) \\cup C \\)</li>\n<li><b>Associative (Intersection):</b> \\( A \\cap (B \\cap C) = (A \\cap B) \\cap C \\)</li>\n</ul>"
                },
                {
                    "type": "html-content",
                    "text": "<div class='image-container' style='text-align: center;'>\n<h4>Visual Examples:</h4>\n<div style='display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;'>\n<div><img src='figures/subset-intersection.jpeg' alt='Subset-Intersection Property' style='width: 150px;'><br>Subset-Intersection: \\( A \\subseteq B \\Rightarrow A \\cap B = A \\)</div>\n<div><img src='figures/commutative-intersection.jpeg' alt='Commutative Intersection' style='width: 300px;'><br>Commutative: \\( A \\cap B = B \\cap A \\)</div>\n<div><img src='figures/commutative-union.jpeg' alt='Commutative Union' style='width: 300px;'><br>Commutative: \\( A \\cup B = B \\cup A \\)</div>\n<div><img src='figures/associative-union.jpeg' alt='Associative Union' style='width: 200px;'><br>Associative: \\( A \\cup (B \\cup C) = (A \\cup B) \\cup C \\)</div>\n<div><img src='figures/associative-intersection.jpeg' alt='Associative Intersection' style='width: 300px;'><br>Associative: \\( A \\cap (B \\cap C) = (A \\cap B) \\cap C \\)</div>\n</div>\n</div>"
                },
                {
                    "type": "math-example",
                    "text": "<h3>Counterexample to a False Statement</h3>\nIs \\( A \\cup (B \\cap C) = C \\cup (B \\cap A) \\) true for all sets?\n\n<p><b>No.</b> Counterexample: Let \\( A = \\{a\\}, B = \\{b\\}, C = \\{c\\} \\).</p>\n<p>Then \\( B \\cap C = \\emptyset \\) and \\( B \\cap A = \\emptyset \\).</p>\n<p>Left side: \\( A \\cup \\emptyset = \\{a\\} \\)</p>\n<p>Right side: \\( C \\cup \\emptyset = \\{c\\} \\)</p>\n<p>Since \\( \\{a\\} \\neq \\{c\\} \\), the statement is false.</p>"
                },
                {
                    "type": "html-content",
                    "text": "<div class='image-container' style='text-align: center;'><center><img src='figures/venn-trips.png' alt='Triple Venn diagram' style='width: 400px;'></center><p class='image-caption'>Venn diagram for three sets \\( A, B, C \\)</p></div>"
                }
            ]
        },
        {
            "title": "11. Summary: Set Theory",
            "id": "summary-set-theory",
            "audioFile": "audio_1/slide_11.mp3",
            "content": [
                {
                    "type": "key-concept",
                    "text": "<h3>Key Takeaways</h3>\n<ul>\n<li>A set is a (finite or infinite) collection</li>\n<li>Elements: \\( x \\in A \\) means \"x is an element of A\"</li>\n<li>A <b>subset</b> is a collection contained in a larger set (may be empty or the whole set)</li>\n<li>Two sets are equal if \\( A \\subseteq B \\) and \\( B \\subseteq A \\)</li>\n<li><b>Union \\( A \\cup B \\):</b> elements in A OR B (or both)</li>\n<li><b>Intersection \\( A \\cap B \\):</b> elements in both A AND B</li>\n<li>Disjoint sets: \\( A \\cap B = \\emptyset \\)</li>\n<li>Venn diagrams help visualize set relationships</li>\n</ul>"
                }
            ]
        }
    ]
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}