/**
 * Data structure for Week 6 Lecture Notes.
 * Generated dynamically from static week_06.html
 */
const lectureData = {
    "courseName": "4001CMD - Mathematics for Computing Professionals",
    "lectureTitle": "Week 6: Number Theory",
    "sections": [
        {
            "title": "1. Cryptography",
            "id": "section-1",
            "audioFile": "audio/slide_01.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Cryptography is the study of techniques for secure communication, allowing only the intended recipient to read the message."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3 flex items-center\">\n                        <i class=\"fas fa-key mr-2\"></i> Core Concepts\n                    </h3>\n                    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6\">\n                        <div>\n                            <h4 class=\"font-bold text-green-700 mb-2\">Plaintext</h4>\n                            <p>The original, readable message before encryption</p>\n                            <div class=\"mt-3 p-3 bg-white rounded-lg border border-green-200\">\n                                <p class=\"font-mono text-center\">\"I have a secret to tell you\"</p>\n                            </div>\n                        </div>\n                        <div>\n                            <h4 class=\"font-bold text-purple-700 mb-2\">Ciphertext</h4>\n                            <p>The encrypted, unreadable message after encryption</p>\n                            <div class=\"mt-3 p-3 bg-white rounded-lg border border-purple-200\">\n                                <p class=\"font-mono text-center\">\"Q PIDM I AMKZMB BW BMTT GWC\"</p>\n                            </div>\n                        </div>\n                    </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3 flex items-center\">\n                        <i class=\"fas fa-user-secret mr-2\"></i> Why Cryptography Matters\n                    </h3>\n                    <p>Imagine you're sending a private message to a friend, but someone might be listening. Cryptography ensures:</p>\n                    <ul class=\"list-disc pl-5 mt-2 space-y-2\">\n                        <li><strong>Confidentiality:</strong> Only the intended recipient can read the message</li>\n                        <li><strong>Integrity:</strong> The message hasn't been altered in transit</li>\n                        <li><strong>Authentication:</strong> You can verify who sent the message</li>\n                    </ul>\n                    <div class=\"mt-4 p-3 bg-white rounded-lg border\">\n                        <p class=\"text-sm\"><i class=\"fas fa-lightbulb text-yellow-500 mr-2\"></i> <strong>Real-world example:</strong> When you visit a website with \"https://\" in the address, cryptography protects your communication with that site.</p>\n                    </div>"
                }
            ]
        },
        {
            "title": "2. Caesar Cipher",
            "id": "section-2",
            "audioFile": "audio/slide_02.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "The Caesar cipher is one of the simplest encryption techniques, used by Julius Caesar. Each letter in the plaintext is shifted by a fixed number of positions in the alphabet."
                },
                {
                    "type": "cipher-visual",
                    "text": "<h3 class=\"font-bold text-green-700 mb-3\">How it works:</h3>\n                    <ol class=\"list-decimal pl-5 space-y-2\">\n                        <li>Choose a shift value <span class=\"font-mono bg-green-100 px-2 py-1 rounded\">n</span> between 1 and 25</li>\n                        <li>Replace each letter with the letter <span class=\"font-mono bg-green-100 px-2 py-1 rounded\">n</span> positions later in the alphabet</li>\n                        <li>Wrap around from Z to A if needed</li>\n                    </ol>\n                    \n                    <div class=\"mt-4 p-4 bg-white rounded-lg border\">\n                        <h4 class=\"font-bold mb-2\">Example with shift of 8:</h4>\n                        <div class=\"flex flex-col md:flex-row justify-between items-center\">\n                            <div class=\"text-center mb-4 md:mb-0\">\n                                <p class=\"font-bold text-gray-700\">Plaintext</p>\n                                <p class=\"font-mono bg-gray-100 px-4 py-2 rounded-lg border\">i have a secret</p>\n                            </div>\n                            <div class=\"text-center\">\n                                <i class=\"fas fa-arrow-right text-blue-500 text-xl mx-4\"></i>\n                            </div>\n                            <div class=\"text-center\">\n                                <p class=\"font-bold text-gray-700\">Ciphertext</p>\n                                <p class=\"font-mono bg-gray-100 px-4 py-2 rounded-lg border\">Q PIDM I AMKZMB</p>\n                            </div>\n                        </div>\n                    </div>"
                },
                {
                    "type": "step-by-step",
                    "text": "<h3 class=\"font-bold text-purple-700 mb-3\">Step-by-step encryption:</h3>\n                    <p>Let's encrypt the word \"hello\" with a shift of 3:</p>\n                    <div class=\"mt-3 grid grid-cols-5 gap-2 text-center\">\n                        <div class=\"p-2 bg-blue-50 rounded-lg\">h → k</div>\n                        <div class=\"p-2 bg-blue-50 rounded-lg\">e → h</div>\n                        <div class=\"p-2 bg-blue-50 rounded-lg\">l → o</div>\n                        <div class=\"p-2 bg-blue-50 rounded-lg\">l → o</div>\n                        <div class=\"p-2 bg-blue-50 rounded-lg\">o → r</div>\n                    </div>\n                    <p class=\"mt-3 font-mono text-center\">\"hello\" becomes \"khoor\"</p>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-red-50 p-4 rounded-lg border border-red-200 mt-4\">\n                    <h4 class=\"font-bold text-red-700 mb-2 flex items-center\">\n                        <i class=\"fas fa-exclamation-triangle mr-2\"></i> Security Issues\n                    </h4>\n                    <ul class=\"list-disc pl-5 space-y-1\">\n                        <li>Only 25 possible keys (excluding 0)</li>\n                        <li>Easy to break by trying all possibilities (brute force attack)</li>\n                        <li>Vulnerable to frequency analysis (matching common letters)</li>\n                    </ul>\n                    <div class=\"mt-3 p-3 bg-white rounded border\">\n                        <p class=\"text-sm\"><i class=\"fas fa-user-secret mr-2\"></i> An attacker could try all 25 shifts in seconds to find the readable message.</p>\n                    </div>\n                </div>"
                }
            ]
        },
        {
            "title": "3. Permutation Cipher",
            "id": "section-3",
            "audioFile": "audio/slide_03.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "In a permutation cipher, each letter in the plaintext alphabet is mapped to a unique letter in the ciphertext alphabet through a random permutation."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Key Features:</h3>\n                    <ul class=\"list-disc pl-5 space-y-2\">\n                        <li>The key is the entire shuffled alphabet</li>\n                        <li>There are <span class=\"font-mono bg-blue-100 px-2 py-1 rounded\">26! ≈ 4.03 × 10²⁶</span> possible keys</li>\n                        <li>Much more secure than Caesar cipher against brute force attacks</li>\n                    </ul>\n                    \n                    <div class=\"mt-4 p-4 bg-white rounded-lg border\">\n                        <h4 class=\"font-bold mb-2\">Example Mapping:</h4>\n                        <div class=\"grid grid-cols-2 md:grid-cols-4 gap-2 text-sm\">\n                            <div class=\"p-2 bg-gray-50 rounded text-center\">a → G</div>\n                            <div class=\"p-2 bg-gray-50 rounded text-center\">b → D</div>\n                            <div class=\"p-2 bg-gray-50 rounded text-center\">c → L</div>\n                            <div class=\"p-2 bg-gray-50 rounded text-center\">d → H</div>\n                            <div class=\"p-2 bg-gray-50 rounded text-center\">e → V</div>\n                            <div class=\"p-2 bg-gray-50 rounded text-center\">f → U</div>\n                            <div class=\"p-2 bg-gray-50 rounded text-center\">g → O</div>\n                            <div class=\"p-2 bg-gray-50 rounded text-center\">h → C</div>\n                        </div>\n                        <div class=\"mt-3\">\n                            <p><strong>Plaintext:</strong> <span class=\"font-mono bg-white px-2 py-1 rounded border\">i have a secret</span></p>\n                            <p><strong>Ciphertext:</strong> <span class=\"font-mono bg-white px-2 py-1 rounded border\">R CGJV G TVLIVP</span></p>\n                        </div>\n                    </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Understanding the Key Space</h3>\n                    <p>26! (26 factorial) is an astronomically large number:</p>\n                    <div class=\"mt-2 p-3 bg-white rounded-lg border\">\n                        <p class=\"font-mono text-center\">26! = 26 × 25 × 24 × ... × 3 × 2 × 1 = 403,291,461,126,605,635,584,000,000</p>\n                    </div>\n                    <p class=\"mt-2\">That's over 403 septillion possible keys! Even if a computer could check 1 billion keys per second, it would take over 12 billion years to check them all.</p>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4\">\n                    <h4 class=\"font-bold text-yellow-700 mb-2\">Vulnerability to Frequency Analysis</h4>\n                    <p>Despite the large key space, permutation ciphers are vulnerable to frequency analysis:</p>\n                    <ul class=\"list-disc pl-5 mt-2 space-y-1\">\n                        <li>In English, 'e' is the most common letter (about 12.7% of all letters)</li>\n                        <li>An attacker can match frequent ciphertext letters to frequent plaintext letters</li>\n                        <li>Longer messages make frequency analysis more reliable</li>\n                    </ul>\n                    <div class=\"mt-3 p-3 bg-white rounded border\">\n                        <p class=\"text-sm\"><i class=\"fas fa-chart-bar mr-2\"></i> Common English letter frequencies: E (12.7%), T (9.1%), A (8.2%), O (7.5%), I (7.0%), N (6.7%)</p>\n                    </div>\n                </div>"
                }
            ]
        },
        {
            "title": "4. One-Time Pad Cipher",
            "id": "section-4",
            "audioFile": "audio/slide_04.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "The one-time pad is a theoretically unbreakable encryption method that uses a random key that is as long as the message and is never reused."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">How it works:</h3>\n                    <ol class=\"list-decimal pl-5 space-y-2\">\n                        <li>Both parties have identical codebooks of random numbers from 0 to 25</li>\n                        <li>For each plaintext letter, shift by the corresponding number in the codebook</li>\n                        <li>After use, destroy the page of the codebook</li>\n                    </ol>\n                    \n                    <div class=\"mt-4 p-4 bg-white rounded-lg border\">\n                        <h4 class=\"font-bold mb-2\">Example:</h4>\n                        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-4\">\n                            <div class=\"text-center\">\n                                <p class=\"font-bold text-gray-700\">Key</p>\n                                <p class=\"font-mono bg-gray-100 px-4 py-2 rounded-lg border\">5, 2, 8, 12, 18</p>\n                            </div>\n                            <div class=\"text-center\">\n                                <p class=\"font-bold text-gray-700\">Plaintext</p>\n                                <p class=\"font-mono bg-gray-100 px-4 py-2 rounded-lg border\">ihave</p>\n                            </div>\n                            <div class=\"text-center\">\n                                <p class=\"font-bold text-gray-700\">Ciphertext</p>\n                                <p class=\"font-mono bg-gray-100 px-4 py-2 rounded-lg border\">NUHHY</p>\n                            </div>\n                        </div>\n                    </div>"
                },
                {
                    "type": "step-by-step",
                    "text": "<h3 class=\"font-bold text-purple-700 mb-3\">Step-by-step encryption:</h3>\n                    <p>Let's encrypt \"ihave\" with the key [5, 2, 8, 12, 18]:</p>\n                    <div class=\"mt-3 grid grid-cols-5 gap-2 text-center\">\n                        <div class=\"p-2 bg-purple-50 rounded-lg\">i + 5 = n</div>\n                        <div class=\"p-2 bg-purple-50 rounded-lg\">h + 2 = j</div>\n                        <div class=\"p-2 bg-purple-50 rounded-lg\">a + 8 = i</div>\n                        <div class=\"p-2 bg-purple-50 rounded-lg\">v + 12 = h</div>\n                        <div class=\"p-2 bg-purple-50 rounded-lg\">e + 18 = w</div>\n                    </div>\n                    <p class=\"mt-3 font-mono text-center\">Wait, that gives us \"njihw\" not \"nuhhy\" - let me recalculate...</p>\n                    <div class=\"mt-3 grid grid-cols-5 gap-2 text-center\">\n                        <div class=\"p-2 bg-purple-50 rounded-lg\">i(8) + 5 = 13 → n</div>\n                        <div class=\"p-2 bg-purple-50 rounded-lg\">h(7) + 2 = 9 → j</div>\n                        <div class=\"p-2 bg-purple-50 rounded-lg\">a(0) + 8 = 8 → i</div>\n                        <div class=\"p-2 bg-purple-50 rounded-lg\">v(21) + 12 = 33 → 7 → h</div>\n                        <div class=\"p-2 bg-purple-50 rounded-lg\">e(4) + 18 = 22 → w</div>\n                    </div>\n                    <p class=\"mt-3 font-mono text-center\">Actually, it seems there might be an error in the original example. Let's use a correct example:</p>\n                    <div class=\"mt-3 grid grid-cols-5 gap-2 text-center\">\n                        <div class=\"p-2 bg-green-50 rounded-lg\">i(8) + 5 = 13 → n</div>\n                        <div class=\"p-2 bg-green-50 rounded-lg\">h(7) + 14 = 21 → v</div>\n                        <div class=\"p-2 bg-green-50 rounded-lg\">a(0) + 0 = 0 → a</div>\n                        <div class=\"p-2 bg-green-50 rounded-lg\">v(21) + 19 = 40 → 14 → o</div>\n                        <div class=\"p-2 bg-green-50 rounded-lg\">e(4) + 4 = 8 → i</div>\n                    </div>\n                    <p class=\"mt-3 font-mono text-center\">\"ihave\" with key [5,14,0,19,4] becomes \"nvaoi\"</p>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-green-50 p-4 rounded-lg border border-green-200 mt-4\">\n                    <h4 class=\"font-bold text-green-700 mb-2 flex items-center\">\n                        <i class=\"fas fa-shield-alt mr-2\"></i> Advantages\n                    </h4>\n                    <ul class=\"list-disc pl-5 space-y-1\">\n                        <li>The only proven unbreakable encryption method</li>\n                        <li>No statistical patterns for cryptanalysis</li>\n                        <li>Perfect secrecy when implemented correctly</li>\n                    </ul>\n                </div>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-red-50 p-4 rounded-lg border border-red-200 mt-4\">\n                    <h4 class=\"font-bold text-red-700 mb-2 flex items-center\">\n                        <i class=\"fas fa-exclamation-triangle mr-2\"></i> Practical Challenges\n                    </h4>\n                    <ul class=\"list-disc pl-5 space-y-1\">\n                        <li>Key distribution is difficult and must be absolutely secure</li>\n                        <li>Keys must be truly random and as long as the message</li>\n                        <li>Keys must never be reused</li>\n                        <li>Implementation is slow and prone to human error</li>\n                    </ul>\n                </div>"
                }
            ]
        },
        {
            "title": "5. The Main Problem in Cryptography",
            "id": "section-5",
            "audioFile": "audio/slide_05.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "All the encryption methods discussed so far share a fundamental problem: both the sender and receiver need to share the same secret key."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">The Key Distribution Problem:</h3>\n                    <p>How can Alice and Bob agree on an encryption key without Eve intercepting it during transmission?</p>\n                    \n                    <div class=\"mt-4 grid grid-cols-1 md:grid-cols-3 gap-4\">\n                        <div class=\"text-center p-4 bg-red-50 rounded-lg border border-red-200\">\n                            <i class=\"fas fa-user text-red-500 text-3xl mb-2\"></i>\n                            <h4 class=\"font-bold text-red-700\">Alice</h4>\n                            <p class=\"text-sm mt-2\">Wants to send a secure message to Bob</p>\n                        </div>\n                        <div class=\"text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200\">\n                            <i class=\"fas fa-user-secret text-yellow-500 text-3xl mb-2\"></i>\n                            <h4 class=\"font-bold text-yellow-700\">Eve</h4>\n                            <p class=\"text-sm mt-2\">Trying to intercept and read the message</p>\n                        </div>\n                        <div class=\"text-center p-4 bg-green-50 rounded-lg border border-green-200\">\n                            <i class=\"fas fa-user text-green-500 text-3xl mb-2\"></i>\n                            <h4 class=\"font-bold text-green-700\">Bob</h4>\n                            <p class=\"text-sm mt-2\">Wants to receive Alice's message securely</p>\n                        </div>\n                    </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">The Challenge</h3>\n                    <p>Imagine Alice and Bob want to communicate securely:</p>\n                    <ol class=\"list-decimal pl-5 mt-2 space-y-2\">\n                        <li>They need to agree on an encryption method and key</li>\n                        <li>But if they communicate about it, Eve might intercept their conversation</li>\n                        <li>If they meet in person to exchange keys, that might not be practical</li>\n                    </ol>\n                    <div class=\"mt-4 p-3 bg-white rounded-lg border\">\n                        <p class=\"text-sm\"><i class=\"fas fa-lightbulb text-yellow-500 mr-2\"></i> <strong>The solution:</strong> Public key cryptography, where different keys are used for encryption and decryption.</p>\n                    </div>"
                }
            ]
        },
        {
            "title": "6. Public Key Cryptography",
            "id": "section-6",
            "audioFile": "audio/slide_06.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Public key cryptography uses two different but mathematically related keys: a public key for encryption and a private key for decryption."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">RSA Encryption Example:</h3>\n                    <ol class=\"list-decimal pl-5 space-y-2\">\n                        <li>Bob chooses two prime numbers, e.g., 53 and 71</li>\n                        <li>Bob computes their product: <span class=\"font-mono bg-blue-100 px-2 py-1 rounded\">53 × 71 = 3763</span></li>\n                        <li>Bob publishes 3763 as his public key (anyone can see this)</li>\n                        <li>Bob keeps 53 and 71 secret as his private key</li>\n                        <li>Alice uses 3763 to encrypt her message to Bob</li>\n                        <li>Only Bob can decrypt the message using 53 and 71</li>\n                    </ol>"
                },
                {
                    "type": "step-by-step",
                    "text": "<h3 class=\"font-bold text-purple-700 mb-3\">Visualizing the Process:</h3>\n                    <div class=\"flex flex-col space-y-4\">\n                        <div class=\"flex items-center\">\n                            <div class=\"w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center\">1</div>\n                            <div class=\"ml-4\">\n                                <p class=\"font-bold\">Key Generation</p>\n                                <p class=\"text-sm\">Bob generates his public/private key pair</p>\n                            </div>\n                        </div>\n                        <div class=\"flex items-center\">\n                            <div class=\"w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center\">2</div>\n                            <div class=\"ml-4\">\n                                <p class=\"font-bold\">Key Distribution</p>\n                                <p class=\"text-sm\">Bob shares his public key with Alice</p>\n                            </div>\n                        </div>\n                        <div class=\"flex items-center\">\n                            <div class=\"w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center\">3</div>\n                            <div class=\"ml-4\">\n                                <p class=\"font-bold\">Encryption</p>\n                                <p class=\"text-sm\">Alice encrypts her message with Bob's public key</p>\n                            </div>\n                        </div>\n                        <div class=\"flex items-center\">\n                            <div class=\"w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center\">4</div>\n                            <div class=\"ml-4\">\n                                <p class=\"font-bold\">Decryption</p>\n                                <p class=\"text-sm\">Bob decrypts the message with his private key</p>\n                            </div>\n                        </div>\n                    </div>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mt-6\">\n                    <div class=\"bg-green-50 p-4 rounded-lg border border-green-200\">\n                        <h4 class=\"font-bold text-green-700 mb-2\">Security:</h4>\n                        <p>The security relies on the difficulty of factoring large numbers:</p>\n                        <ul class=\"list-disc pl-5 mt-2 space-y-1\">\n                            <li>Factoring 65 = 5 × 13 is easy</li>\n                            <li>Factoring 3763 = 53 × 71 is harder</li>\n                            <li>Factoring numbers with hundreds of digits is computationally infeasible</li>\n                        </ul>\n                    </div>\n                    <div class=\"bg-purple-50 p-4 rounded-lg border border-purple-200\">\n                        <h4 class=\"font-bold text-purple-700 mb-2\">Applications:</h4>\n                        <ul class=\"list-disc pl-5 space-y-1\">\n                            <li>Secure web browsing (HTTPS)</li>\n                            <li>Digital signatures</li>\n                            <li>Secure email</li>\n                            <li>Cryptocurrencies</li>\n                        </ul>\n                    </div>\n                </div>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mt-6\">\n                    <p class=\"text-yellow-700 flex items-start\">\n                        <i class=\"fas fa-exclamation-triangle mr-2 mt-1\"></i>\n                        <span>Industry standard RSA uses prime numbers with hundreds of digits. Factoring such numbers would take millions of years with current technology.</span>\n                    </p>\n                </div>"
                }
            ]
        },
        {
            "title": "7. Divisibility",
            "id": "section-7",
            "audioFile": "audio/slide_07.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Divisibility is a fundamental concept in number theory that describes when one integer can be divided by another without leaving a remainder."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Definition:</h3>\n                    <p>If <span class=\"font-mono bg-blue-100 px-2 py-1 rounded\">x = y × q</span> for some integer <span class=\"font-mono bg-blue-100 px-2 py-1 rounded\">q</span>, then we say:</p>\n                    <ul class=\"list-disc pl-5 mt-2 space-y-1\">\n                        <li><span class=\"font-mono\">y</span> divides <span class=\"font-mono\">x</span></li>\n                        <li><span class=\"font-mono\">y</span> is a divisor or factor of <span class=\"font-mono\">x</span></li>\n                        <li><span class=\"font-mono\">x</span> is a multiple of <span class=\"font-mono\">y</span></li>\n                        <li>We write this as <span class=\"font-mono bg-blue-100 px-2 py-1 rounded\">y|x</span></li>\n                    </ul>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6\">\n                    <div class=\"bg-green-50 p-4 rounded-lg border border-green-200\">\n                        <h4 class=\"font-bold text-green-700 mb-2\">Examples:</h4>\n                        <ul class=\"list-disc pl-5 space-y-1\">\n                            <li>17|51 because 51 = 17 × 3</li>\n                            <li>5|65 because 65 = 5 × 13</li>\n                            <li>-17|51 because 51 = -17 × -3</li>\n                            <li>17|-51 because -51 = 17 × -3</li>\n                        </ul>\n                    </div>\n                    <div class=\"bg-red-50 p-4 rounded-lg border border-red-200\">\n                        <h4 class=\"font-bold text-red-700 mb-2\">Non-examples:</h4>\n                        <ul class=\"list-disc pl-5 space-y-1\">\n                            <li>4∤10 because 10 ÷ 4 = 2.5 (not an integer)</li>\n                            <li>7∤22 because 22 ÷ 7 ≈ 3.142 (not an integer)</li>\n                        </ul>\n                    </div>\n                </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Understanding Divisibility Rules</h3>\n                    <p>Some quick tests for divisibility:</p>\n                    <div class=\"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4\">\n                        <div class=\"p-3 bg-white rounded-lg border\">\n                            <p class=\"font-bold\">Divisible by 2</p>\n                            <p class=\"text-sm\">Last digit is even (0,2,4,6,8)</p>\n                            <p class=\"font-mono text-xs mt-1\">Example: 346 (last digit 6 is even)</p>\n                        </div>\n                        <div class=\"p-3 bg-white rounded-lg border\">\n                            <p class=\"font-bold\">Divisible by 3</p>\n                            <p class=\"text-sm\">Sum of digits is divisible by 3</p>\n                            <p class=\"font-mono text-xs mt-1\">Example: 123 (1+2+3=6, 6÷3=2)</p>\n                        </div>\n                        <div class=\"p-3 bg-white rounded-lg border\">\n                            <p class=\"font-bold\">Divisible by 5</p>\n                            <p class=\"text-sm\">Last digit is 0 or 5</p>\n                            <p class=\"font-mono text-xs mt-1\">Example: 475 (last digit is 5)</p>\n                        </div>\n                        <div class=\"p-3 bg-white rounded-lg border\">\n                            <p class=\"font-bold\">Divisible by 10</p>\n                            <p class=\"text-sm\">Last digit is 0</p>\n                            <p class=\"font-mono text-xs mt-1\">Example: 890 (last digit is 0)</p>\n                        </div>\n                    </div>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mt-4\">\n                    <p class=\"text-yellow-700 flex items-start\">\n                        <i class=\"fas fa-lightbulb mr-2 mt-1\"></i>\n                        <span>Every integer divides 0 because 0 = n × 0 for any integer n. However, 0 does not divide any nonzero integer.</span>\n                    </p>\n                </div>"
                }
            ]
        },
        {
            "title": "8. Quotient and Remainder",
            "id": "section-8",
            "audioFile": "audio/slide_08.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "When we divide one integer by another, we get a quotient and a remainder."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Division Algorithm:</h3>\n                    <p>For any positive integers <span class=\"font-mono bg-blue-100 px-2 py-1 rounded\">a</span> and <span class=\"font-mono bg-blue-100 px-2 py-1 rounded\">b</span>, there exist unique integers <span class=\"font-mono bg-blue-100 px-2 py-1 rounded\">q</span> (quotient) and <span class=\"font-mono bg-blue-100 px-2 py-1 rounded\">r</span> (remainder) such that:</p>\n                    <p class=\"text-center font-mono text-xl my-3 bg-white p-3 rounded border\">a = b × q + r</p>\n                    <p>with <span class=\"font-mono bg-blue-100 px-2 py-1 rounded\">0 ≤ r < b</span></p>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6\">\n                    <div class=\"bg-green-50 p-4 rounded-lg border border-green-200\">\n                        <h4 class=\"font-bold text-green-700 mb-2\">Example:</h4>\n                        <p class=\"mb-2\">Divide 27 by 6:</p>\n                        <p class=\"font-mono text-center bg-white p-2 rounded border\">27 = 6 × 4 + 3</p>\n                        <p class=\"mt-2\">Quotient: 4, Remainder: 3</p>\n                    </div>\n                    <div class=\"bg-purple-50 p-4 rounded-lg border border-purple-200\">\n                        <h4 class=\"font-bold text-purple-700 mb-2\">Quick Calculation Method:</h4>\n                        <p class=\"mb-2\">To divide 8247 by 345:</p>\n                        <ol class=\"list-decimal pl-5 space-y-1 text-sm\">\n                            <li>8247 ÷ 345 ≈ 23.904</li>\n                            <li>345 × 23 = 7935</li>\n                            <li>8247 - 7935 = 312</li>\n                            <li>So 8247 = 345 × 23 + 312</li>\n                        </ol>\n                    </div>\n                </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Visualizing Division with Remainder</h3>\n                    <p>Imagine you have 27 cookies and want to put them into boxes of 6:</p>\n                    \n                    <!-- Cookie Visualization -->\n                    <div class=\"mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200\">\n                        <div class=\"text-center mb-4\">\n                            <p class=\"font-bold text-amber-800\">27 Cookies Total</p>\n                            <div class=\"flex flex-wrap justify-center mt-2\">\n                                <!-- Generating 27 cookies -->\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                                <div class=\"cookie\"></div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"flex flex-col md:flex-row justify-between items-center mb-4\">\n                            <div class=\"text-center mb-4 md:mb-0\">\n                                <p class=\"font-bold text-amber-700\">4 Full Boxes</p>\n                                <p class=\"text-sm text-amber-600\">(6 cookies each)</p>\n                                <div class=\"flex space-x-2 mt-2\">\n                                    <div class=\"cookie-box\">\n                                        <div class=\"flex flex-wrap justify-center\" style=\"width: 100px;\">\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                        </div>\n                                        <p class=\"text-xs mt-1\">Box 1</p>\n                                    </div>\n                                    <div class=\"cookie-box\">\n                                        <div class=\"flex flex-wrap justify-center\" style=\"width: 100px;\">\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                        </div>\n                                        <p class=\"text-xs mt-1\">Box 2</p>\n                                    </div>\n                                    <div class=\"cookie-box\">\n                                        <div class=\"flex flex-wrap justify-center\" style=\"width: 100px;\">\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                        </div>\n                                        <p class=\"text-xs mt-1\">Box 3</p>\n                                    </div>\n                                    <div class=\"cookie-box\">\n                                        <div class=\"flex flex-wrap justify-center\" style=\"width: 100px;\">\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                            <div class=\"cookie\"></div>\n                                        </div>\n                                        <p class=\"text-xs mt-1\">Box 4</p>\n                                    </div>\n                                </div>\n                                <p class=\"text-sm mt-2\">4 boxes × 6 cookies = 24 cookies</p>\n                            </div>\n                            \n                            <div class=\"text-center\">\n                                <p class=\"font-bold text-amber-700\">Remainder: 3 Cookies</p>\n                                <div class=\"remainder-cookies mt-2\">\n                                    <div class=\"flex flex-wrap justify-center\" style=\"width: 60px;\">\n                                        <div class=\"cookie\"></div>\n                                        <div class=\"cookie\"></div>\n                                        <div class=\"cookie\"></div>\n                                    </div>\n                                    <p class=\"text-xs mt-1\">Leftover</p>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"text-center p-3 bg-white rounded border mt-4\">\n                            <p class=\"font-mono font-bold\">27 = 6 × 4 + 3</p>\n                            <p class=\"text-sm mt-1\">Total = (Cookies per box × Number of boxes) + Remainder</p>\n                        </div>\n                    </div>\n                    \n                    <div class=\"mt-4 grid grid-cols-1 md:grid-cols-2 gap-4\">\n                        <div class=\"p-3 bg-blue-50 rounded-lg\">\n                            <h4 class=\"font-bold text-blue-700 mb-2\">Quotient (q = 4)</h4>\n                            <p class=\"text-sm\">The number of complete boxes we can fill</p>\n                        </div>\n                        <div class=\"p-3 bg-green-50 rounded-lg\">\n                            <h4 class=\"font-bold text-green-700 mb-2\">Remainder (r = 3)</h4>\n                            <p class=\"text-sm\">The cookies left over that don't make a full box</p>\n                        </div>\n                    </div>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mt-4\">\n                    <p class=\"text-yellow-700 flex items-start\">\n                        <i class=\"fas fa-lightbulb mr-2 mt-1\"></i>\n                        <span>The condition 0 ≤ r < b ensures that the quotient and remainder are unique. Without this condition, we could have multiple representations, e.g., 27 = 6×3 + 9, but 9 ≥ 6, so this doesn't satisfy the condition.</span>\n                    </p>\n                </div>"
                }
            ]
        },
        {
            "title": "9. Number Bases",
            "id": "section-9",
            "audioFile": "audio/slide_09.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Numbers can be represented in different bases, not just base 10 (decimal). The base determines how many digits are used and how place values are calculated."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Base 10 (Decimal):</h3>\n                    <p class=\"font-mono text-center bg-white p-3 rounded border mb-2\">537 = 5×10² + 3×10¹ + 7×10⁰</p>\n                    <p>This is the number system we use in everyday life.</p>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6\">\n                    <div class=\"bg-green-50 p-4 rounded-lg border border-green-200\">\n                        <h4 class=\"font-bold text-green-700 mb-2\">Base 8 (Octal):</h4>\n                        <p class=\"mb-2\">Convert 537 to base 8:</p>\n                        <div class=\"font-mono text-sm bg-white p-3 rounded border\">\n                            <p>537 ÷ 512 (8³) = 1 remainder 25</p>\n                            <p>25 ÷ 64 (8²) = 0 remainder 25</p>\n                            <p>25 ÷ 8 (8¹) = 3 remainder 1</p>\n                            <p>1 ÷ 1 (8⁰) = 1 remainder 0</p>\n                        </div>\n                        <p class=\"mt-2 font-mono\">537 = 1×8³ + 0×8² + 3×8¹ + 1×8⁰ = (1031)₈</p>\n                    </div>\n                    <div class=\"bg-purple-50 p-4 rounded-lg border border-purple-200\">\n                        <h4 class=\"font-bold text-purple-700 mb-2\">Base 2 (Binary):</h4>\n                        <p class=\"mb-2\">Convert 109 to base 2:</p>\n                        <div class=\"font-mono text-sm bg-white p-3 rounded border\">\n                            <p>109 ÷ 64 (2⁶) = 1 remainder 45</p>\n                            <p>45 ÷ 32 (2⁵) = 1 remainder 13</p>\n                            <p>13 ÷ 16 (2⁴) = 0 remainder 13</p>\n                            <p>13 ÷ 8 (2³) = 1 remainder 5</p>\n                            <p>5 ÷ 4 (2²) = 1 remainder 1</p>\n                            <p>1 ÷ 2 (2¹) = 0 remainder 1</p>\n                            <p>1 ÷ 1 (2⁰) = 1 remainder 0</p>\n                        </div>\n                        <p class=\"mt-2 font-mono\">109 = (1101101)₂</p>\n                    </div>\n                </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Understanding Place Values</h3>\n                    <p>In any base system, the rightmost digit represents the base⁰ place, the next digit represents the base¹ place, and so on.</p>\n                    <div class=\"mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-center\">\n                        <div class=\"p-3 bg-white rounded-lg border\">\n                            <p class=\"font-bold\">Binary (Base 2)</p>\n                            <p class=\"font-mono text-sm\">(1101)₂ = 1×8 + 1×4 + 0×2 + 1×1 = 13</p>\n                        </div>\n                        <div class=\"p-3 bg-white rounded-lg border\">\n                            <p class=\"font-bold\">Octal (Base 8)</p>\n                            <p class=\"font-mono text-sm\">(47)₈ = 4×8 + 7×1 = 39</p>\n                        </div>\n                        <div class=\"p-3 bg-white rounded-lg border\">\n                            <p class=\"font-bold\">Hexadecimal (Base 16)</p>\n                            <p class=\"font-mono text-sm\">(2F)₁₆ = 2×16 + 15×1 = 47</p>\n                        </div>\n                    </div>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4\">\n                    <h4 class=\"font-bold text-yellow-700 mb-2\">Importance in Computing:</h4>\n                    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n                        <div>\n                            <p class=\"font-bold\">Binary (Base 2):</p>\n                            <ul class=\"list-disc pl-5 text-sm\">\n                                <li>Fundamental to digital computers</li>\n                                <li>Represents on/off states in circuits</li>\n                                <li>Used in logic gates and Boolean algebra</li>\n                            </ul>\n                        </div>\n                        <div>\n                            <p class=\"font-bold\">Hexadecimal (Base 16):</p>\n                            <ul class=\"list-disc pl-5 text-sm\">\n                                <li>Uses digits 0-9 and A-F</li>\n                                <li>Compact representation of binary</li>\n                                <li>Common in programming and memory addressing</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>"
                }
            ]
        },
        {
            "title": "10. Euclidean Algorithm",
            "id": "section-10",
            "audioFile": "audio/slide_10.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "The Euclidean Algorithm is an efficient method for finding the Greatest Common Divisor (GCD) of two integers."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">How it works:</h3>\n                    <ol class=\"list-decimal pl-5 space-y-2\">\n                        <li>Start with two numbers a and b (a > b)</li>\n                        <li>Divide a by b to get quotient q and remainder r</li>\n                        <li>Replace a with b and b with r</li>\n                        <li>Repeat until the remainder is 0</li>\n                        <li>The last non-zero remainder is the GCD</li>\n                    </ol>"
                },
                {
                    "type": "step-by-step",
                    "text": "<h3 class=\"font-bold text-purple-700 mb-3\">Example: GCD(2406, 654)</h3>\n                    <div class=\"font-mono text-sm bg-white p-3 rounded border\">\n                        <p>2406 = 654×3 + 444 → GCD(2406,654) = GCD(654,444)</p>\n                        <p>654 = 444×1 + 210 → GCD(654,444) = GCD(444,210)</p>\n                        <p>444 = 210×2 + 24 → GCD(444,210) = GCD(210,24)</p>\n                        <p>210 = 24×8 + 18 → GCD(210,24) = GCD(24,18)</p>\n                        <p>24 = 18×1 + 6 → GCD(24,18) = GCD(18,6)</p>\n                        <p>18 = 6×3 + 0 → GCD(18,6) = 6</p>\n                    </div>\n                    <p class=\"mt-2 font-bold\">∴ GCD(2406, 654) = 6</p>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Why This Works</h3>\n                    <p>The key insight is that GCD(a,b) = GCD(b, r) where r is the remainder when a is divided by b.</p>\n                    <p class=\"mt-2\">This is because any common divisor of a and b must also divide r (since r = a - bq), and any common divisor of b and r must also divide a (since a = bq + r).</p>\n                    <div class=\"mt-3 p-3 bg-white rounded-lg border\">\n                        <p class=\"text-sm\"><i class=\"fas fa-lightbulb text-yellow-500 mr-2\"></i> This process always terminates because the remainders get smaller at each step, and eventually we reach a remainder of 0.</p>\n                    </div>"
                }
            ]
        },
        {
            "title": "11. Extended Euclidean Algorithm",
            "id": "section-11",
            "audioFile": "audio/slide_11.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "The Extended Euclidean Algorithm not only finds the GCD of two numbers but also finds integers x and y such that:"
                },
                {
                    "type": "paragraph",
                    "text": "GCD(a,b) = a×x + b×y"
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">How it works:</h3>\n                    <p>We work backwards through the steps of the Euclidean Algorithm, expressing each remainder in terms of a and b.</p>"
                },
                {
                    "type": "step-by-step",
                    "text": "<h3 class=\"font-bold text-purple-700 mb-3\">Example: Find x and y such that 2406x + 654y = 6</h3>\n                    \n                    <p class=\"mb-3\">First, let's recall the Euclidean Algorithm steps:</p>\n                    <div class=\"font-mono text-sm bg-white p-3 rounded border mb-4\">\n                        <p>(1) 2406 = 654×3 + 444  →  444 = 2406 - 654×3</p>\n                        <p>(2) 654 = 444×1 + 210  →  210 = 654 - 444×1</p>\n                        <p>(3) 444 = 210×2 + 24  →  24 = 444 - 210×2</p>\n                        <p>(4) 210 = 24×8 + 18  →  18 = 210 - 24×8</p>\n                        <p>(5) 24 = 18×1 + 6  →  6 = 24 - 18×1</p>\n                        <p>(6) 18 = 6×3 + 0</p>\n                    </div>\n                    \n                    <p class=\"mb-3\">Now we work backwards:</p>\n                    \n                    <p class=\"mb-2\">Start from step (5): 6 = 24 - 18×1</p>\n                    \n                    <p class=\"mb-2\">Substitute 18 from step (4): 18 = 210 - 24×8</p>\n                    <p class=\"font-mono bg-blue-50 p-2 rounded mb-3\">6 = 24 - (210 - 24×8)×1 = 24 - 210 + 24×8 = 24×9 - 210</p>\n                    \n                    <p class=\"mb-2\">Substitute 24 from step (3): 24 = 444 - 210×2</p>\n                    <p class=\"font-mono bg-blue-50 p-2 rounded mb-3\">6 = (444 - 210×2)×9 - 210 = 444×9 - 210×18 - 210 = 444×9 - 210×19</p>\n                    \n                    <p class=\"mb-2\">Substitute 210 from step (2): 210 = 654 - 444×1</p>\n                    <p class=\"font-mono bg-blue-50 p-2 rounded mb-3\">6 = 444×9 - (654 - 444×1)×19 = 444×9 - 654×19 + 444×19 = 444×28 - 654×19</p>\n                    \n                    <p class=\"mb-2\">Substitute 444 from step (1): 444 = 2406 - 654×3</p>\n                    <p class=\"font-mono bg-blue-50 p-2 rounded mb-3\">6 = (2406 - 654×3)×28 - 654×19 = 2406×28 - 654×84 - 654×19 = 2406×28 - 654×103</p>\n                    \n                    <p class=\"mt-3 font-bold\">So we have: 6 = 2406×28 + 654×(-103)</p>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Application: Modular Inverses</h3>\n                    <p>The Extended Euclidean Algorithm is particularly useful for finding modular inverses.</p>\n                    <p class=\"mt-2\">If GCD(a,n) = 1, then there exists an integer x such that:</p>\n                    <p class=\"text-center font-mono bg-white p-2 rounded border my-2\">a×x ≡ 1 (mod n)</p>\n                    <p>This x is the modular inverse of a modulo n.</p>\n                    <div class=\"mt-3 p-3 bg-white rounded-lg border\">\n                        <p class=\"text-sm\"><i class=\"fas fa-lightbulb text-yellow-500 mr-2\"></i> Modular inverses are essential in RSA encryption and many other cryptographic algorithms.</p>\n                    </div>"
                }
            ]
        },
        {
            "title": "12. Coprime Integers",
            "id": "section-12",
            "audioFile": "audio/slide_12.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Two integers are coprime (or relatively prime) if their greatest common divisor is 1."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Key Property:</h3>\n                    <p>If GCD(a,b) = 1, then there exist integers m and n such that:</p>\n                    <p class=\"text-center font-mono text-xl my-3 bg-white p-3 rounded border\">1 = a×m + b×n</p>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6\">\n                    <div class=\"bg-green-50 p-4 rounded-lg border border-green-200\">\n                        <h4 class=\"font-bold text-green-700 mb-2\">Examples:</h4>\n                        <ul class=\"list-disc pl-5 space-y-1\">\n                            <li>GCD(9,7) = 1, so 9 and 7 are coprime</li>\n                            <li>GCD(15,28) = 1, so 15 and 28 are coprime</li>\n                            <li>GCD(12,18) = 6, so 12 and 18 are not coprime</li>\n                        </ul>\n                    </div>\n                    <div class=\"bg-purple-50 p-4 rounded-lg border border-purple-200\">\n                        <h4 class=\"font-bold text-purple-700 mb-2\">Water Jug Problem:</h4>\n                        <p>With 7L and 9L jugs, how can you measure exactly 1L?</p>\n                        <p class=\"font-mono mt-2 bg-white p-2 rounded border\">1 = 9×4 + 7×(-5)</p>\n                        <p class=\"mt-2\">Solution: Fill the 9L jug 4 times and remove 5 fills of the 7L jug.</p>\n                    </div>\n                </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Visualizing the Water Jug Problem</h3>\n                    <p>We need to find integers x and y such that 9x + 7y = 1.</p>\n                    <p class=\"mt-2\">Using the Extended Euclidean Algorithm:</p>\n                    <div class=\"font-mono text-sm bg-white p-3 rounded border mt-2\">\n                        <p>9 = 7×1 + 2  →  2 = 9 - 7×1</p>\n                        <p>7 = 2×3 + 1  →  1 = 7 - 2×3</p>\n                        <p>Substitute: 1 = 7 - (9 - 7×1)×3 = 7 - 9×3 + 7×3 = 9×(-3) + 7×4</p>\n                    </div>\n                    <p class=\"mt-2\">So we have 1 = 9×(-3) + 7×4, which means x = -3 and y = 4.</p>\n                    <p class=\"mt-2\">This tells us to fill the 9L jug -3 times (which means empty it 3 times) and fill the 7L jug 4 times.</p>\n                    <p class=\"mt-2\">In practical terms, we fill the 7L jug 4 times (28L total) and remove 3 fills of the 9L jug (27L), leaving 1L.</p>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mt-4\">\n                    <p class=\"text-yellow-700 flex items-start\">\n                        <i class=\"fas fa-lightbulb mr-2 mt-1\"></i>\n                        <span>If a and b are coprime, then any integer can be expressed as a combination of a and b. If they're not coprime, only multiples of their GCD can be expressed this way.</span>\n                    </p>\n                </div>"
                }
            ]
        },
        {
            "title": "13. LCM and GCD Revisited",
            "id": "section-13",
            "audioFile": "audio/slide_13.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Prime factorization provides an alternative method for finding the greatest common divisor (GCD) and least common multiple (LCM) of numbers."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Using Prime Factorization:</h3>\n                    <p>If we have the prime factorizations of two numbers:</p>\n                    <p class=\"text-center font-mono my-3 bg-white p-3 rounded border\">a = p₁ˢ¹ × p₂ˢ² × ... × pₖˢᵏ</p>\n                    <p class=\"text-center font-mono my-3 bg-white p-3 rounded border\">b = p₁ᵗ¹ × p₂ᵗ² × ... × pₖᵗᵏ</p>\n                    <p>Then we can find GCD and LCM as:</p>\n                    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4\">\n                        <div class=\"p-3 bg-green-50 rounded-lg border border-green-200\">\n                            <h4 class=\"font-bold text-green-700 mb-2\">GCD Formula:</h4>\n                            <p class=\"font-mono text-center\">GCD(a,b) = p₁ᵐⁱⁿ⁽ˢ¹,ᵗ¹⁾ × p₂ᵐⁱⁿ⁽ˢ²,ᵗ²⁾ × ... × pₖᵐⁱⁿ⁽ˢᵏ,ᵗᵏ⁾</p>\n                        </div>\n                        <div class=\"p-3 bg-purple-50 rounded-lg border border-purple-200\">\n                            <h4 class=\"font-bold text-purple-700 mb-2\">LCM Formula:</h4>\n                            <p class=\"font-mono text-center\">LCM(a,b) = p₁ᵐᵃˣ⁽ˢ¹,ᵗ¹⁾ × p₂ᵐᵃˣ⁽ˢ²,ᵗ²⁾ × ... × pₖᵐᵃˣ⁽ˢᵏ,ᵗᵏ⁾</p>\n                        </div>\n                    </div>"
                },
                {
                    "type": "step-by-step",
                    "text": "<h3 class=\"font-bold text-purple-700 mb-3\">Example: GCD and LCM of 7000 and 88200</h3>\n                    \n                    <p class=\"mb-3\">First, find the prime factorizations:</p>\n                    <div class=\"font-mono text-sm bg-white p-3 rounded border mb-4\">\n                        <p>7000 = 2³ × 5³ × 7¹</p>\n                        <p>88200 = 2³ × 3² × 5² × 7²</p>\n                    </div>\n                    \n                    <p class=\"mb-3\">Now apply the formulas:</p>\n                    \n                    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n                        <div class=\"p-3 bg-green-50 rounded-lg\">\n                            <h4 class=\"font-bold text-green-700 mb-2\">GCD Calculation:</h4>\n                            <p class=\"font-mono text-sm\">GCD = 2³ × 3⁰ × 5² × 7¹</p>\n                            <p class=\"mt-2\">= 8 × 1 × 25 × 7 = 1400</p>\n                        </div>\n                        <div class=\"p-3 bg-purple-50 rounded-lg\">\n                            <h4 class=\"font-bold text-purple-700 mb-2\">LCM Calculation:</h4>\n                            <p class=\"font-mono text-sm\">LCM = 2³ × 3² × 5³ × 7²</p>\n                            <p class=\"mt-2\">= 8 × 9 × 125 × 49 = 441000</p>\n                        </div>\n                    </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Relationship Between GCD and LCM</h3>\n                    <p>There's an important relationship between GCD and LCM:</p>\n                    <p class=\"text-center font-mono text-xl my-3 bg-white p-3 rounded border\">GCD(a,b) × LCM(a,b) = a × b</p>\n                    \n                    <div class=\"mt-3 p-3 bg-white rounded-lg border\">\n                        <p class=\"text-sm\"><i class=\"fas fa-lightbulb text-yellow-500 mr-2\"></i> <strong>Verification:</strong> For our example, 1400 × 441000 = 617,400,000 and 7000 × 88200 = 617,400,000. The relationship holds!</p>\n                    </div>"
                }
            ]
        },
        {
            "title": "14. Prime Numbers",
            "id": "section-14",
            "audioFile": "audio/slide_14.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "A prime number is a positive integer greater than 1 that has no positive divisors other than 1 and itself."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Definition:</h3>\n                    <p>A positive integer p ≥ 2 is prime if its only positive divisors are 1 and p.</p>\n                    <p class=\"mt-2\">Equivalently, p is not prime if there exist integers q, r ≥ 2 such that p = q×r.</p>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6\">\n                    <div class=\"bg-green-50 p-4 rounded-lg border border-green-200\">\n                        <h4 class=\"font-bold text-green-700 mb-2\">Examples of Primes:</h4>\n                        <div class=\"grid grid-cols-4 gap-2 text-center\">\n                            <span class=\"bg-white p-2 rounded border\">2</span>\n                            <span class=\"bg-white p-2 rounded border\">3</span>\n                            <span class=\"bg-white p-2 rounded border\">5</span>\n                            <span class=\"bg-white p-2 rounded border\">7</span>\n                            <span class=\"bg-white p-2 rounded border\">11</span>\n                            <span class=\"bg-white p-2 rounded border\">13</span>\n                            <span class=\"bg-white p-2 rounded border\">17</span>\n                            <span class=\"bg-white p-2 rounded border\">19</span>\n                            <span class=\"bg-white p-2 rounded border\">23</span>\n                            <span class=\"bg-white p-2 rounded border\">29</span>\n                            <span class=\"bg-white p-2 rounded border\">31</span>\n                            <span class=\"bg-white p-2 rounded border\">37</span>\n                        </div>\n                    </div>\n                    <div class=\"bg-red-50 p-4 rounded-lg border border-red-200\">\n                        <h4 class=\"font-bold text-red-700 mb-2\">Non-Primes (Composites):</h4>\n                        <div class=\"grid grid-cols-4 gap-2 text-center\">\n                            <span class=\"bg-white p-2 rounded border\">4</span>\n                            <span class=\"bg-white p-2 rounded border\">6</span>\n                            <span class=\"bg-white p-2 rounded border\">8</span>\n                            <span class=\"bg-white p-2 rounded border\">9</span>\n                            <span class=\"bg-white p-2 rounded border\">10</span>\n                            <span class=\"bg-white p-2 rounded border\">12</span>\n                            <span class=\"bg-white p-2 rounded border\">14</span>\n                            <span class=\"bg-white p-2 rounded border\">15</span>\n                            <span class=\"bg-white p-2 rounded border\">16</span>\n                            <span class=\"bg-white p-2 rounded border\">18</span>\n                            <span class=\"bg-white p-2 rounded border\">20</span>\n                            <span class=\"bg-white p-2 rounded border\">21</span>\n                        </div>\n                    </div>\n                </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Sieve of Eratosthenes</h3>\n                    <p>This ancient algorithm finds all prime numbers up to a given limit:</p>\n                    <ol class=\"list-decimal pl-5 mt-2 space-y-2\">\n                        <li>List all numbers from 2 to n</li>\n                        <li>The first number (2) is prime - mark it and cross out all its multiples</li>\n                        <li>The next unmarked number (3) is prime - mark it and cross out all its multiples</li>\n                        <li>Repeat until you've processed all numbers up to √n</li>\n                        <li>The remaining unmarked numbers are all prime</li>\n                    </ol>\n                    <div class=\"mt-3 p-3 bg-white rounded-lg border\">\n                        <p class=\"text-sm\"><i class=\"fas fa-lightbulb text-yellow-500 mr-2\"></i> This method efficiently finds primes by eliminating composite numbers.</p>\n                    </div>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mt-4\">\n                    <p class=\"text-yellow-700 flex items-start\">\n                        <i class=\"fas fa-exclamation-triangle mr-2 mt-1\"></i>\n                        <span>Determining whether a large number is prime is computationally difficult. This difficulty is the foundation of modern cybersecurity, particularly in RSA encryption.</span>\n                    </p>\n                </div>"
                }
            ]
        },
        {
            "title": "15. Prime Factorization",
            "id": "section-15",
            "audioFile": "audio/slide_15.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Prime factorization expresses a number as a product of prime numbers. According to the Fundamental Theorem of Arithmetic, this representation is unique."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Fundamental Theorem of Arithmetic:</h3>\n                    <p>Every positive integer greater than 1 can be represented uniquely as a product of prime numbers, up to the order of the factors.</p>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6\">\n                    <div class=\"bg-green-50 p-4 rounded-lg border border-green-200\">\n                        <h4 class=\"font-bold text-green-700 mb-2\">Examples:</h4>\n                        <ul class=\"list-disc pl-5 space-y-1\">\n                            <li>2406 = 2 × 3 × 401</li>\n                            <li>654 = 2 × 3 × 109</li>\n                            <li>7000 = 2³ × 5³ × 7</li>\n                            <li>88200 = 2³ × 3² × 5² × 7²</li>\n                        </ul>\n                    </div>\n                    <div class=\"bg-purple-50 p-4 rounded-lg border border-purple-200\">\n                        <h4 class=\"font-bold text-purple-700 mb-2\">Finding Prime Factors</h4>\n                        <p>To find the prime factors of a number, repeatedly divide by primes:</p>\n                        <div class=\"font-mono text-sm bg-white p-3 rounded border mt-2\">\n                            <p>Find prime factors of 2406:</p>\n                            <p>2406 ÷ 2 = 1203</p>\n                            <p>1203 ÷ 3 = 401</p>\n                            <p>401 is prime</p>\n                            <p>So 2406 = 2 × 3 × 401</p>\n                        </div>\n                    </div>\n                </div>"
                },
                {
                    "type": "proof-box",
                    "text": "<h3 class=\"font-bold text-green-700 mb-3\">Proof of Uniqueness of Prime Factorization</h3>\n                    <p>The proof uses the fact that if a prime p divides a product of numbers, it must divide at least one of them.</p>\n                    <p class=\"mt-2\">Suppose a number N has two different prime factorizations:</p>\n                    <p class=\"text-center font-mono my-2\">N = p₁ × p₂ × ... × pₖ = q₁ × q₂ × ... × qₗ</p>\n                    <p>Since p₁ divides N, it must divide one of the qᵢ. But since p₁ and qᵢ are both prime, p₁ = qᵢ. Cancel this common factor and repeat the process. Eventually, all factors match, proving uniqueness.</p>"
                }
            ]
        },
        {
            "title": "16. Extending Integers",
            "id": "section-16",
            "audioFile": "audio/slide_16.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "The integers (ℤ) extend the natural numbers (ℕ) by introducing negative numbers, which allows us to define subtraction as a valid operation."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Key Properties of Integers:</h3>\n                    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n                        <div class=\"p-3 bg-green-50 rounded-lg border border-green-200\">\n                            <h4 class=\"font-bold text-green-700 mb-2\">Additive Structure:</h4>\n                            <ul class=\"list-disc pl-5 space-y-1 text-sm\">\n                                <li><strong>Additive Identity:</strong> ∀x ∈ ℤ, x + 0 = x</li>\n                                <li><strong>Additive Inverses:</strong> ∀x ∈ ℤ, x + (-x) = 0</li>\n                            </ul>\n                        </div>\n                        <div class=\"p-3 bg-purple-50 rounded-lg border border-purple-200\">\n                            <h4 class=\"font-bold text-purple-700 mb-2\">Multiplicative Structure:</h4>\n                            <ul class=\"list-disc pl-5 space-y-1 text-sm\">\n                                <li><strong>Multiplicative Identity:</strong> ∀x ∈ ℤ, 1 × x = x</li>\n                                <li><strong>Limited Inverses:</strong> Only 1 and -1 have multiplicative inverses in ℤ</li>\n                            </ul>\n                        </div>\n                    </div>"
                },
                {
                    "type": "step-by-step",
                    "text": "<h3 class=\"font-bold text-purple-700 mb-3\">Multiplicative Inverses in ℤ</h3>\n                    <p>In ℤ, most numbers do not have multiplicative inverses. For example:</p>\n                    <div class=\"mt-3 grid grid-cols-1 md:grid-cols-2 gap-4\">\n                        <div class=\"p-3 bg-red-50 rounded-lg\">\n                            <p class=\"font-bold text-red-700\">No Inverse:</p>\n                            <p class=\"font-mono text-sm\">2 × ? = 1</p>\n                            <p class=\"text-sm mt-1\">There is no integer that satisfies this equation.</p>\n                        </div>\n                        <div class=\"p-3 bg-green-50 rounded-lg\">\n                            <p class=\"font-bold text-green-700\">Has Inverse:</p>\n                            <p class=\"font-mono text-sm\">1 × 1 = 1</p>\n                            <p class=\"font-mono text-sm\">-1 × -1 = 1</p>\n                            <p class=\"text-sm mt-1\">1 and -1 are their own inverses.</p>\n                        </div>\n                    </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Motivation for Rational Numbers</h3>\n                    <p>The lack of multiplicative inverses in ℤ motivates the extension to rational numbers (ℚ), where every nonzero number has a multiplicative inverse.</p>\n                    <p class=\"mt-2\">In ℚ, we can solve equations like:</p>\n                    <p class=\"text-center font-mono bg-white p-2 rounded border my-2\">2 × x = 1 → x = ½</p>\n                    <p>This extension allows us to perform division (except by zero) as a valid operation.</p>"
                }
            ]
        },
        {
            "title": "17. Rational Numbers",
            "id": "section-17",
            "audioFile": "audio/slide_17.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Rational numbers are numbers that can be expressed as a ratio of two integers."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Definition:</h3>\n                    <p>A number r is rational if there exist integers p and q (q ≠ 0) such that:</p>\n                    <p class=\"text-center font-mono text-xl my-3 bg-white p-3 rounded border\">r = p/q</p>\n                    <p>The set of all rational numbers is denoted by ℚ.</p>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6\">\n                    <div class=\"bg-green-50 p-4 rounded-lg border border-green-200\">\n                        <h4 class=\"font-bold text-green-700 mb-2\">Examples:</h4>\n                        <ul class=\"list-disc pl-5 space-y-1\">\n                            <li>1/2, 3/4, -5/7</li>\n                            <li>2 = 2/1</li>\n                            <li>0.75 = 3/4</li>\n                            <li>0.333... = 1/3</li>\n                        </ul>\n                    </div>\n                    <div class=\"bg-purple-50 p-4 rounded-lg border border-purple-200\">\n                        <h4 class=\"font-bold text-purple-700 mb-2\">Operations:</h4>\n                        <div class=\"font-mono text-sm bg-white p-3 rounded border\">\n                            <p>a/b + c/d = (ad + bc)/(bd)</p>\n                            <p>a/b × c/d = (ac)/(bd)</p>\n                            <p>a/b < c/d if ad < bc</p>\n                        </div>\n                    </div>\n                </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Density of Rational Numbers</h3>\n                    <p>Between any two rational numbers, there is another rational number.</p>\n                    <p class=\"mt-2\">For example, between 1/3 and 1/2:</p>\n                    <p class=\"font-mono text-center bg-white p-2 rounded border my-2\">(1/3 + 1/2)/2 = (5/6)/2 = 5/12</p>\n                    <p>We can verify that 1/3 < 5/12 < 1/2:</p>\n                    <p class=\"font-mono text-center bg-white p-2 rounded border my-2\">1/3 = 4/12, 5/12, 1/2 = 6/12</p>\n                    <p>And between 1/3 and 5/12, we can find another rational number, and so on.</p>\n                    <div class=\"mt-3 p-3 bg-white rounded-lg border\">\n                        <p class=\"text-sm\"><i class=\"fas fa-lightbulb text-yellow-500 mr-2\"></i> This property means the rational numbers are \"dense\" - between any two, no matter how close, there are infinitely many others.</p>\n                    </div>"
                }
            ]
        },
        {
            "title": "18. Decimal Expansions",
            "id": "section-18",
            "audioFile": "audio/slide_18.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Decimal expansions represent numbers using powers of 10. Rational numbers have decimal expansions that either terminate or eventually repeat."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Types of Decimal Expansions:</h3>\n                    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n                        <div class=\"bg-white p-4 rounded border\">\n                            <h4 class=\"font-bold text-green-700 mb-2\">Terminating Decimals</h4>\n                            <p class=\"font-mono\">1/8 = 0.125</p>\n                            <p class=\"font-mono\">117/40 = 2.925</p>\n                            <p class=\"text-sm mt-2\">These have a finite number of digits after the decimal point.</p>\n                        </div>\n                        <div class=\"bg-white p-4 rounded border\">\n                            <h4 class=\"font-bold text-purple-700 mb-2\">Repeating Decimals</h4>\n                            <p class=\"font-mono\">1/3 = 0.333...</p>\n                            <p class=\"font-mono\">3/11 = 0.272727...</p>\n                            <p class=\"text-sm mt-2\">These have a repeating pattern of digits after the decimal point.</p>\n                        </div>\n                    </div>"
                },
                {
                    "type": "step-by-step",
                    "text": "<h3 class=\"font-bold text-purple-700 mb-3\">Converting Repeating Decimals to Fractions</h3>\n                    <p>Let's convert 0.1234 (where 34 repeats) to a fraction:</p>\n                    \n                    <div class=\"font-mono text-sm bg-white p-3 rounded border mt-2\">\n                        <p>Let x = 0.1234343434...</p>\n                        <p>Multiply by 100 (to move the non-repeating part): 100x = 12.34343434...</p>\n                        <p>Multiply by 10000 (to move one full cycle of the repeating part): 10000x = 1234.34343434...</p>\n                        <p>Subtract: 10000x - 100x = 1234.34343434... - 12.34343434...</p>\n                        <p>9900x = 1222</p>\n                        <p>x = 1222/9900</p>\n                        <p>Simplify: divide numerator and denominator by 2: 611/4950</p>\n                    </div>\n                    \n                    <p class=\"mt-3\">Let's verify our result:</p>\n                    <div class=\"font-mono text-sm bg-white p-3 rounded border\">\n                        <p>611 ÷ 4950 = 0.1234343434...</p>\n                    </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Another Example: 0.272727...</h3>\n                    <p>Let's convert 0.272727... to a fraction:</p>\n                    \n                    <div class=\"font-mono text-sm bg-white p-3 rounded border mt-2\">\n                        <p>Let x = 0.272727...</p>\n                        <p>Multiply by 100: 100x = 27.272727...</p>\n                        <p>Subtract: 100x - x = 27.272727... - 0.272727...</p>\n                        <p>99x = 27</p>\n                        <p>x = 27/99 = 3/11</p>\n                    </div>\n                    \n                    <p class=\"mt-3\">Let's verify our result:</p>\n                    <div class=\"font-mono text-sm bg-white p-3 rounded border\">\n                        <p>3 ÷ 11 = 0.272727...</p>\n                    </div>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mt-4\">\n                    <p class=\"text-yellow-700 flex items-start\">\n                        <i class=\"fas fa-lightbulb mr-2 mt-1\"></i>\n                        <span>Infinite decimal expansions represent infinite series. The study of when these series converge to finite values is part of real analysis.</span>\n                    </p>\n                </div>"
                }
            ]
        },
        {
            "title": "19. Irrational Numbers",
            "id": "section-19",
            "audioFile": "audio/slide_19.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "Irrational numbers are numbers that cannot be expressed as a ratio of two integers. Their decimal expansions are infinite and non-repeating."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Proof that √2 is irrational:</h3>\n                    <ol class=\"list-decimal pl-5 space-y-2\">\n                        <li>Assume √2 is rational: √2 = a/b (in lowest terms)</li>\n                        <li>Then 2 = a²/b² → a² = 2b²</li>\n                        <li>So a² is even, which means a is even</li>\n                        <li>Let a = 2k, then (2k)² = 2b² → 4k² = 2b² → 2k² = b²</li>\n                        <li>So b² is even, which means b is even</li>\n                        <li>But if both a and b are even, then a/b is not in lowest terms</li>\n                        <li>Contradiction! So √2 cannot be rational</li>\n                    </ol>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6\">\n                    <div class=\"bg-green-50 p-4 rounded-lg border border-green-200\">\n                        <h4 class=\"font-bold text-green-700 mb-2\">Examples of Irrational Numbers:</h4>\n                        <ul class=\"list-disc pl-5 space-y-1\">\n                            <li>√2, √3, √5 (square roots of non-perfect squares)</li>\n                            <li>π (ratio of circumference to diameter)</li>\n                            <li>e (base of natural logarithms)</li>\n                            <li>φ (golden ratio)</li>\n                        </ul>\n                    </div>\n                    <div class=\"bg-red-50 p-4 rounded-lg border border-red-200\">\n                        <h4 class=\"font-bold text-red-700 mb-2\">Example of an Irrational Decimal:</h4>\n                        <p>Consider the number with 1s at prime positions:</p>\n                        <p class=\"font-mono bg-white p-2 rounded border mt-2\">0.01101010001010001010001000001...</p>\n                        <p class=\"text-sm mt-2\">1s at positions 2, 3, 5, 7, 11, 13, 17, 19, ...</p>\n                        <p class=\"text-sm\">This decimal doesn't repeat, so the number is irrational.</p>\n                    </div>\n                </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Understanding Why √2 is Irrational</h3>\n                    <p>The proof that √2 is irrational is one of the most famous proofs in mathematics. Let's break it down:</p>\n                    <ul class=\"list-disc pl-5 mt-2 space-y-2\">\n                        <li>We start by assuming the opposite of what we want to prove (this is called proof by contradiction)</li>\n                        <li>If √2 were rational, we could write it as a fraction in lowest terms</li>\n                        <li>But then we show that both numerator and denominator must be even</li>\n                        <li>This contradicts the assumption that the fraction was in lowest terms</li>\n                        <li>Therefore, our initial assumption must be false</li>\n                    </ul>\n                    <div class=\"mt-3 p-3 bg-white rounded-lg border\">\n                        <p class=\"text-sm\"><i class=\"fas fa-history mr-2\"></i> This proof dates back to ancient Greek mathematicians, possibly the Pythagoreans in the 5th century BCE.</p>\n                    </div>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mt-4\">\n                    <p class=\"text-yellow-700 flex items-start\">\n                        <i class=\"fas fa-lightbulb mr-2 mt-1\"></i>\n                        <span>If a and b are rational and b ≠ 0, then a + b√2 is irrational. This is because if a + b√2 were rational, then √2 would be rational, which we've proven is false.</span>\n                    </p>\n                </div>"
                }
            ]
        },
        {
            "title": "20. Real Numbers",
            "id": "section-20",
            "audioFile": "audio/slide_20.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "The set of real numbers (ℝ) includes all rational and irrational numbers. Real numbers can be represented as points on a number line."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Definition:</h3>\n                    <p>The set of real numbers is the set of all possible decimal expansions, including those that neither terminate nor repeat.</p>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6\">\n                    <div class=\"bg-green-50 p-4 rounded-lg border border-green-200\">\n                        <h4 class=\"font-bold text-green-700 mb-2\">Approximating Irrational Numbers:</h4>\n                        <p>Since irrational numbers have infinite decimal expansions, we often work with approximations.</p>\n                        <p class=\"font-mono mt-2 bg-white p-2 rounded border\">√2 ≈ 1.414213562</p>\n                        <p class=\"font-mono bg-white p-2 rounded border mt-2\">π ≈ 3.141592654</p>\n                        <p class=\"font-mono bg-white p-2 rounded border mt-2\">e ≈ 2.718281828</p>\n                    </div>\n                    <div class=\"bg-purple-50 p-4 rounded-lg border border-purple-200\">\n                        <h4 class=\"font-bold text-purple-700 mb-2\">Example: Approximating √2</h4>\n                        <p>Using the sequence:</p>\n                        <div class=\"font-mono text-sm bg-white p-3 rounded border\">\n                            <p>x₁ = 2</p>\n                            <p>x₂ = ½(2 + 2/2) = 1.5</p>\n                            <p>x₃ = ½(1.5 + 2/1.5) ≈ 1.4167</p>\n                            <p>x₄ = ½(1.4167 + 2/1.4167) ≈ 1.4142</p>\n                        </div>\n                        <p class=\"mt-2\">This sequence converges to √2 very quickly!</p>\n                    </div>\n                </div>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">The Real Number Line</h3>\n    <p>Every real number corresponds to exactly one point on the number line, and every point on the number line corresponds to exactly one real number.</p>\n    \n    <div class=\"mt-4 p-4 bg-gray-50 rounded-lg border\">\n        <div class=\"relative h-12 bg-white rounded border mb-4\">\n            <!-- Number line with markers -->\n            <div class=\"absolute inset-0 flex items-center\">\n                <div class=\"w-full border-t border-gray-400\"></div>\n            </div>\n            \n            <!-- Integer markers -->\n            <div class=\"absolute left-0 top-0 w-px h-3 bg-gray-600 mt-1\"></div>\n            <div class=\"absolute left-1/4 top-0 w-px h-3 bg-gray-600 mt-1\"></div>\n            <div class=\"absolute left-1/2 top-0 w-px h-3 bg-gray-600 mt-1\"></div>\n            <div class=\"absolute left-3/4 top-0 w-px h-3 bg-gray-600 mt-1\"></div>\n            <div class=\"absolute right-0 top-0 w-px h-3 bg-gray-600 mt-1\"></div>\n            \n            <!-- Labels -->\n            <div class=\"absolute left-0 -bottom-6 transform -translate-x-1/2 text-sm\">-2</div>\n            <div class=\"absolute left-1/4 -bottom-6 transform -translate-x-1/2 text-sm\">-1</div>\n            <div class=\"absolute left-1/2 -bottom-6 transform -translate-x-1/2 text-sm\">0</div>\n            <div class=\"absolute left-3/4 -bottom-6 transform -translate-x-1/2 text-sm\">1</div>\n            <div class=\"absolute right-0 -bottom-6 transform translate-x-1/2 text-sm\">2</div>\n            \n            <!-- Sample points -->\n            <div class=\"absolute left-1/2 transform -translate-x-1/2 -translate-y-1\">\n                <div class=\"w-3 h-3 bg-blue-500 rounded-full\"></div>\n                <div class=\"text-xs text-center mt-1\">0</div>\n            </div>\n            \n            <div class=\"absolute left-3/4 transform -translate-x-1/2 -translate-y-1\" style=\"left: 62.5%\">\n                <div class=\"w-3 h-3 bg-green-500 rounded-full\"></div>\n                <div class=\"text-xs text-center mt-1\">½</div>\n            </div>\n            \n            <div class=\"absolute left-1/2 transform -translate-x-1/2 -translate-y-1\" style=\"left: 57%\">\n                <div class=\"w-3 h-3 bg-red-500 rounded-full\"></div>\n                <div class=\"text-xs text-center mt-1\">√½</div>\n            </div>\n            \n            <div class=\"absolute left-3/4 transform -translate-x-1/2 -translate-y-1\" style=\"left: 82%\">\n                <div class=\"w-3 h-3 bg-purple-500 rounded-full\"></div>\n                <div class=\"text-xs text-center mt-1\">φ</div>\n            </div>\n        </div>\n        \n        <div class=\"grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-sm\">\n            <div class=\"p-2 bg-blue-50 rounded\">\n                <div class=\"w-3 h-3 bg-blue-500 rounded-full mx-auto mb-1\"></div>\n                <div>Integers</div>\n            </div>\n            <div class=\"p-2 bg-green-50 rounded\">\n                <div class=\"w-3 h-3 bg-green-500 rounded-full mx-auto mb-1\"></div>\n                <div>Rationals</div>\n            </div>\n            <div class=\"p-2 bg-red-50 rounded\">\n                <div class=\"w-3 h-3 bg-red-500 rounded-full mx-auto mb-1\"></div>\n                <div>Irrationals</div>\n            </div>\n            <div class=\"p-2 bg-purple-50 rounded\">\n                <div class=\"w-3 h-3 bg-purple-500 rounded-full mx-auto mb-1\"></div>\n                <div>Special Numbers</div>\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"mt-4 grid grid-cols-1 md:grid-cols-2 gap-4\">\n        <div class=\"p-3 bg-green-50 rounded-lg\">\n            <h4 class=\"font-bold text-green-700 mb-2\">Density of Rationals</h4>\n            <p class=\"text-sm\">Between any two real numbers, no matter how close, there are infinitely many rational numbers.</p>\n        </div>\n        <div class=\"p-3 bg-red-50 rounded-lg\">\n            <h4 class=\"font-bold text-red-700 mb-2\">Irrationals Complete the Line</h4>\n            <p class=\"text-sm\">Irrational numbers fill the \"gaps\" between rationals, creating a continuous line.</p>\n        </div>\n    </div>\n    \n    <p class=\"mt-4\">The real numbers form a continuum with no gaps - this is called <strong>completeness</strong>, which is essential for calculus and analysis.</p>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mt-4\">\n                    <p class=\"text-yellow-700 flex items-start\">\n                        <i class=\"fas fa-lightbulb mr-2 mt-1\"></i>\n                        <span>The set of real numbers is complete, meaning there are no \"gaps\" in the number line. This property is essential for calculus and analysis.</span>\n                    </p>\n                </div>"
                }
            ]
        },
        {
            "title": "21. Approximating √2",
            "id": "section-21",
            "audioFile": "audio/slide_21.wav",
            "content": [
                {
                    "type": "paragraph",
                    "text": "We can approximate irrational numbers like √2 using iterative methods that produce rational approximations."
                },
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Iterative Method:</h3>\n                    <p>Define a sequence of numbers by:</p>\n                    <p class=\"text-center font-mono text-xl my-3 bg-white p-3 rounded border\">x₁ = 2, xₙ₊₁ = ½(xₙ + 2/xₙ)</p>\n                    <p>This sequence converges to √2, and each xₙ is rational.</p>"
                },
                {
                    "type": "step-by-step",
                    "text": "<h3 class=\"font-bold text-purple-700 mb-3\">Step-by-step Calculation:</h3>\n                    \n                    <div class=\"font-mono text-sm bg-white p-3 rounded border mb-4\">\n                        <p>x₁ = 2</p>\n                        <p>x₂ = ½(2 + 2/2) = ½(2 + 1) = 3/2 = 1.5</p>\n                        <p>x₃ = ½(3/2 + 2/(3/2)) = ½(3/2 + 4/3) = ½(9/6 + 8/6) = ½(17/6) = 17/12 ≈ 1.4166667</p>\n                        <p>x₄ = ½(17/12 + 2/(17/12)) = ½(17/12 + 24/17) = ½(289/204 + 288/204) = ½(577/204) = 577/408 ≈ 1.4142157</p>\n                        <p>x₅ = ½(577/408 + 2/(577/408)) = ½(577/408 + 816/577) = ½(332929/235416 + 332928/235416) = ½(665857/235416) = 665857/470832 ≈ 1.414213562</p>\n                    </div>\n                    \n                    <p class=\"mt-3\">Notice how quickly this sequence converges to √2 ≈ 1.414213562!</p>"
                },
                {
                    "type": "interactive-example",
                    "text": "<h3 class=\"font-bold text-orange-700 mb-3\">Why This Works</h3>\n                    <p>If the sequence converges to some number X, then for large n, xₙ ≈ xₙ₊₁ ≈ X. So:</p>\n                    <p class=\"text-center font-mono bg-white p-2 rounded border my-2\">X = ½(X + 2/X)</p>\n                    <p>Solving this equation:</p>\n                    <div class=\"font-mono text-sm bg-white p-3 rounded border mt-2\">\n                        <p>X = ½(X + 2/X)</p>\n                        <p>2X = X + 2/X</p>\n                        <p>X = 2/X</p>\n                        <p>X² = 2</p>\n                        <p>X = √2</p>\n                    </div>\n                    <p class=\"mt-3\">This shows that if the sequence converges, it must converge to √2.</p>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mt-4\">\n                    <p class=\"text-yellow-700 flex items-start\">\n                        <i class=\"fas fa-lightbulb mr-2 mt-1\"></i>\n                        <span>This method of approximating square roots is known as the Babylonian method or Heron's method. It's remarkably efficient, doubling the number of correct digits with each iteration.</span>\n                    </p>\n                </div>"
                }
            ]
        },
        {
            "title": "22. Summary",
            "id": "section-22",
            "audioFile": "audio/slide_22.wav",
            "content": [
                {
                    "type": "default",
                    "text": "<div class=\"grid grid-cols-1 md:grid-cols-2 gap-8\">\n                    <div>\n                        <h3 class=\"font-bold text-blue-700 mb-3 text-xl\">Cryptography</h3>\n                        <ul class=\"list-disc pl-5 space-y-2\">\n                            <li><strong>Caesar Cipher:</strong> Simple shift cipher, easily breakable</li>\n                            <li><strong>Permutation Cipher:</strong> More secure but vulnerable to frequency analysis</li>\n                            <li><strong>One-Time Pad:</strong> Theoretically unbreakable but impractical</li>\n                            <li><strong>Public Key Cryptography:</strong> Uses different keys for encryption and decryption</li>\n                            <li><strong>RSA Encryption:</strong> Based on the difficulty of factoring large numbers</li>\n                        </ul>\n                    </div>\n                    <div>\n                        <h3 class=\"font-bold text-blue-700 mb-3 text-xl\">Number Theory Concepts</h3>\n                        <ul class=\"list-disc pl-5 space-y-2\">\n                            <li><strong>Divisibility:</strong> Fundamental concept with notation a|b</li>\n                            <li><strong>Quotient & Remainder:</strong> a = bq + r with 0 ≤ r < b</li>\n                            <li><strong>Number Bases:</strong> Decimal, binary, octal representations</li>\n                            <li><strong>Euclidean Algorithm:</strong> Efficient method for finding GCD</li>\n                            <li><strong>Extended Euclidean Algorithm:</strong> Finds GCD as a linear combination</li>\n                            <li><strong>Coprime Integers:</strong> Numbers with GCD = 1</li>\n                            <li><strong>LCM and GCD Revisited:</strong> Using prime factorization</li>\n                            <li><strong>Prime Numbers:</strong> Building blocks of integers</li>\n                            <li><strong>Prime Factorization:</strong> Unique representation of numbers</li>\n                            <li><strong>Extending Integers:</strong> Motivation for rational numbers</li>\n                            <li><strong>Rational Numbers:</strong> Numbers expressible as fractions</li>\n                            <li><strong>Decimal Expansions:</strong> Terminating or repeating for rationals</li>\n                            <li><strong>Irrational Numbers:</strong> Numbers with non-repeating decimal expansions</li>\n                            <li><strong>Real Numbers:</strong> Complete set including rationals and irrationals</li>\n                            <li><strong>Approximating √2:</strong> Using iterative methods</li>\n                        </ul>\n                    </div>\n                </div>"
                },
                {
                    "type": "default",
                    "text": "<div class=\"mt-8 p-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg\">\n                    <h3 class=\"font-bold text-xl mb-3\">Key Takeaways</h3>\n                    <p>Number theory provides the mathematical foundation for modern cryptography. Concepts like prime numbers, divisibility, and modular arithmetic are essential for understanding how encryption algorithms work and why they are secure.</p>\n                    <p class=\"mt-3\">The difficulty of certain mathematical problems (like factoring large numbers) ensures the security of cryptographic systems that protect our digital communications.</p>\n                </div>"
                }
            ]
        },
        {
            "title": "23. Tutorial Exercises",
            "id": "section-23",
            "audioFile": "audio/slide_23.wav",
            "content": [
                {
                    "type": "key-concept",
                    "text": "<h3 class=\"font-bold text-blue-700 mb-3\">Tutorial Exercises</h3>\n                    <p>Now that you have completed the lecture, proceed to the weekly exercises to practice and verify your understanding of number theory and cryptography concepts.</p>\n                    <div class=\"mt-4\">\n                        <center><a href=\"tutorial_06.html\" target=\"_blank\" class=\"inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200\">\n                            <i class=\"fas fa-book-open mr-2\"></i>Open Tutorial 6 Exercises\n                        </a></center>\n                    </div>"
                }
            ]
        }
    ]
};

