const quizTitle = "AI Quiz on The dangers of AI";

const allQuizData = [
    {
        "id": 1,
        "question": "Which of the following are potential dangers associated with the widespread adoption of Artificial Intelligence?",
        "options": [
            "Job displacement due to automation.",
            "Algorithmic bias leading to discrimination.",
            "Enhanced data privacy for individuals.",
            "The development of autonomous weapons systems."
        ],
        "correct": [
            0,
            1,
            3
        ],
        "explanation": "Rationale: <br><b>A</b> is correct. AI and automation can perform tasks traditionally done by humans, leading to job displacement in various sectors.<br><b>B</b> is correct. If AI systems are trained on biased data or designed with inherent biases, they can perpetuate and even amplify discrimination against certain groups.<br><b>C</b> is incorrect. AI often requires and processes vast amounts of data, which can increase risks to data privacy rather than enhance it.<br><b>D</b> is correct. The development of AI-powered autonomous weapons systems raises significant ethical, moral, and security concerns regarding human control, accountability, and the potential for unintended escalation."
    },
    {
        "id": 2,
        "question": "How can advanced AI systems pose a threat to information integrity and public discourse?",
        "options": [
            "Generating hyper-realistic deepfakes to spread false narratives.",
            "Creating personalized echo chambers that reinforce existing biases.",
            "Improving the accuracy of fact-checking algorithms.",
            "Automating the production of propaganda at scale."
        ],
        "correct": [
            0,
            1,
            3
        ],
        "explanation": "Rationale: <br><b>A</b> is correct. AI can be used to create highly convincing fake audio, video, and images (deepfakes) that can be used to spread misinformation and manipulate public opinion.<br><b>B</b> is correct. AI algorithms in social media and content platforms can personalize content delivery in ways that isolate users within bubbles of information confirming their existing beliefs, limiting exposure to diverse perspectives and hindering critical thinking.<br><b>C</b> is incorrect. While AI can be used to improve fact-checking, this option describes a beneficial application, not a danger posed by AI.<br><b>D</b> is correct. AI's ability to generate human-like text and media quickly and efficiently allows for the automated, large-scale production and dissemination of propaganda, making it difficult to discern truth from falsehood."
    },
    {
        "id": 3,
        "question": "What are the primary reasons why AI systems can perpetuate or even amplify existing societal biases?",
        "options": [
            "AI training data often reflects historical human biases and societal inequities.",
            "AI developers intentionally encode biases into algorithms.",
            "A lack of diverse perspectives in AI development teams.",
            "AI systems are inherently objective and immune to bias."
        ],
        "correct": [
            0,
            2
        ],
        "explanation": "Rationale: <br><b>A</b> is correct. AI models learn from the data they are fed. If this data is skewed or reflects historical human prejudices and societal inequalities (e.g., disproportionate representation, historical discrimination), the AI will learn and perpetuate these biases.<br><b>B</b> is generally incorrect. While malicious actors could intentionally introduce bias, the vast majority of AI bias is unintentional, arising from the data and design choices rather than deliberate encoding by developers.<br><b>C</b> is correct. A lack of diversity in AI development teams (e.g., in terms of gender, ethnicity, background) can lead to 'blind spots' where potential biases or discriminatory impacts on certain user groups are overlooked or not considered during design and testing.<br><b>D</b> is incorrect. AI systems are not inherently objective. Their objectivity is entirely dependent on the data they are trained on and the algorithms they execute, both of which can contain human-introduced biases."
    },
    {
        "id": 4,
        "question": "Which of the following are concerns regarding the increasing autonomy of AI systems, particularly in critical applications?",
        "options": [
            "Loss of human control over decision-making processes.",
            "Difficulty in assigning accountability for AI-driven errors or harm.",
            "Increased transparency in complex decision pathways.",
            "Potential for unintended emergent behaviors in complex AI."
        ],
        "correct": [
            0,
            1,
            3
        ],
        "explanation": "Rationale: <br><b>A</b> is correct. As AI systems become more autonomous, there is a risk of ceding significant control over critical decisions to machines, potentially leading to situations where human intervention is difficult or impossible.<br><b>B</b> is correct. When autonomous AI systems make errors or cause harm, it can be challenging to determine who is legally, ethically, or morally responsible among developers, operators, users, or the AI itself.<br><b>C</b> is incorrect. Many advanced AI systems, particularly deep learning models, are often 'black boxes,' meaning their decision-making processes are opaque and difficult for humans to understand or interpret, thus decreasing transparency rather than increasing it.<br><b>D</b> is correct. Complex AI systems, especially those that learn and adapt, can exhibit behaviors that were not explicitly programmed or anticipated by their creators, leading to unpredictable and potentially harmful outcomes."
    },
    {
        "id": 5,
        "question": "In what ways can AI technology contribute to the erosion of individual privacy and increase surveillance risks?",
        "options": [
            "Advanced facial recognition used for mass monitoring.",
            "Collection and analysis of vast amounts of personal data without explicit consent.",
            "Development of privacy-preserving machine learning techniques.",
            "Predicting personal behaviors and beliefs based on digital footprints."
        ],
        "correct": [
            0,
            1,
            3
        ],
        "explanation": "Rationale: <br><b>A</b> is correct. AI-powered facial recognition technology enables widespread, automated identification and tracking of individuals in public and private spaces, leading to concerns about mass surveillance.<br><b>B</b> is correct. AI systems thrive on data. The widespread deployment of AI often involves the collection, processing, and analysis of enormous quantities of personal data, sometimes without individuals' full awareness or explicit consent, creating significant privacy risks.<br><b>C</b> is incorrect. This option describes a beneficial application of AI that aims to mitigate privacy risks, not contribute to their erosion. Privacy-preserving AI is a field focused on making AI more privacy-friendly.<br><b>D</b> is correct. AI can analyze digital footprints (e.g., online activity, location data, purchase history) to infer and predict highly personal attributes, behaviors, preferences, and even beliefs, raising concerns about predictive policing, targeted manipulation, and a lack of autonomy."
    }
];
