const quizTitle = "AI Quiz on The Dangers of AI";

const allQuizData = [
    {
        "id": 1,
        "question": "Which of the following are potential ways that advanced Artificial Intelligence could lead to significant <b>job displacement</b> across various sectors?",
        "options": [
            "Automation of repetitive and manual tasks currently performed by humans.",
            "The creation of numerous new AI-related jobs requiring specialized skills.",
            "Increased demand for human creativity, emotional intelligence, and critical thinking.",
            "A reduction in the need for human data entry, analysis, and customer service roles.",
            "Enhancement of human productivity in existing roles, rather than replacement."
        ],
        "correct": [
            0,
            3
        ],
        "explanation": "Rationale: <br><b>A. Automation of repetitive and manual tasks currently performed by humans:</b> This is a primary mechanism for job displacement as AI and robotics can perform these tasks more efficiently and cost-effectively. Therefore, this is correct.<br><b>B. The creation of numerous new AI-related jobs requiring specialized skills:</b> While AI does create new jobs, this option describes a mitigating factor or a new opportunity, not a direct cause of job displacement. Therefore, this is incorrect.<br><b>C. Increased demand for human creativity, emotional intelligence, and critical thinking:</b> These are skills where humans currently have an advantage over AI, and their demand may increase as AI handles routine tasks. This describes a shift in job focus, not displacement. Therefore, this is incorrect.<br><b>D. A reduction in the need for human data entry, analysis, and customer service roles:</b> AI is particularly adept at these tasks, leading to a direct reduction in the human workforce required for them. Therefore, this is correct.<br><b>E. Enhancement of human productivity in existing roles, rather than replacement:</b> AI can augment human capabilities, making humans more productive. While this is a common outcome, the question focuses on displacement. This outcome doesn't directly cause displacement but can shift the nature of work. Therefore, this is incorrect."
    },
    {
        "id": 2,
        "question": "What are common sources of <b>bias in AI systems</b> that can lead to discriminatory outcomes or unfair treatment of certain groups?",
        "options": [
            "The use of biased or unrepresentative training data.",
            "The implementation of strict ethical guidelines during AI development.",
            "A lack of diversity and inclusion among AI development teams.",
            "Insufficient computational power or processing speed.",
            "Human cognitive biases reflected in the design and objective functions of AI algorithms.",
            "Regular external audits and regulatory oversight."
        ],
        "correct": [
            0,
            2,
            4
        ],
        "explanation": "Rationale: <br><b>A. The use of biased or unrepresentative training data:</b> If AI is trained on data that reflects historical or societal biases, it will learn and perpetuate those biases, leading to discriminatory outputs. Therefore, this is correct.<br><b>B. The implementation of strict ethical guidelines during AI development:</b> Ethical guidelines are intended to mitigate bias, not cause it. Therefore, this is incorrect.<br><b>C. A lack of diversity and inclusion among AI development teams:</b> Homogeneous development teams may inadvertently embed their own biases or overlook potential biases affecting diverse user groups. Therefore, this is correct.<br><b>D. Insufficient computational power or processing speed:</b> While this can affect AI performance, it is not a direct source of bias that leads to discriminatory outcomes. Therefore, this is incorrect.<br><b>E. Human cognitive biases reflected in the design and objective functions of AI algorithms:</b> The biases of the designers and programmers can be encoded into the AI's logic and goals. Therefore, this is correct.<br><b>F. Regular external audits and regulatory oversight:</b> These are measures taken to identify and reduce bias, not sources of bias itself. Therefore, this is incorrect."
    },
    {
        "id": 3,
        "question": "Which of the following are major ethical and practical concerns associated with the development and deployment of fully <b>autonomous weapons systems (LAWS)</b>?",
        "options": [
            "Reduced human accountability for lethal decisions made by machines.",
            "Increased precision targeting and reduced collateral damage.",
            "Potential for rapid and uncontrollable escalation of conflicts.",
            "The elimination of human error in battlefield scenarios.",
            "The potential for a global AI arms race among nations.",
            "Adherence to international humanitarian law by autonomous systems."
        ],
        "correct": [
            0,
            2,
            4
        ],
        "explanation": "Rationale: <br><b>A. Reduced human accountability for lethal decisions made by machines:</b> One of the primary ethical concerns is the difficulty in assigning responsibility when an autonomous system makes a lethal decision. Therefore, this is correct.<br><b>B. Increased precision targeting and reduced collateral damage:</b> While advocates sometimes claim this as a potential benefit, it doesn't diminish the ethical concerns about autonomy and accountability, and its realization is not guaranteed. It's not a 'concern' but a debatable advantage. Therefore, this is incorrect.<br><b>C. Potential for rapid and uncontrollable escalation of conflicts:</b> Autonomous systems could react and retaliate much faster than humans, potentially leading to rapid escalation beyond human control. Therefore, this is correct.<br><b>D. The elimination of human error in battlefield scenarios:</b> This is a hypothetical benefit often cited by proponents, but AI systems can introduce new types of errors or operate in unpredictable ways, making this claim contentious and not addressing the core ethical concerns. Therefore, this is incorrect.<br><b>E. The potential for a global AI arms race among nations:</b> The development of LAWS could spur nations to compete in creating and deploying such weapons, leading to global instability. Therefore, this is correct.<br><b>F. Adherence to international humanitarian law by autonomous systems:</b> This is a major concern, as it's unclear how machines can interpret and apply complex ethical and legal principles like proportionality and discrimination in warfare. Thus, it's a concern about their *lack* of adherence, not their adherence. Therefore, this is incorrect."
    },
    {
        "id": 4,
        "question": "How might advanced AI systems pose significant risks to <b>individual privacy</b>?",
        "options": [
            "Analyzing vast datasets to infer highly personal information about individuals.",
            "Making current data encryption technologies completely obsolete.",
            "Enabling widespread and intrusive facial recognition surveillance.",
            "Requiring the collection of more personal data for improved performance.",
            "Creating new secure and anonymized data storage methods.",
            "Facilitating personalized and targeted advertising based on inferred preferences."
        ],
        "correct": [
            0,
            2,
            3,
            5
        ],
        "explanation": "Rationale: <br><b>A. Analyzing vast datasets to infer highly personal information about individuals:</b> AI excels at finding patterns in large datasets, allowing it to deduce sensitive personal information that was not explicitly shared. Therefore, this is correct.<br><b>B. Making current data encryption technologies completely obsolete:</b> While AI can enhance decryption efforts, it doesn't inherently make *all* encryption obsolete; cryptographic advances continue alongside AI. Therefore, this is incorrect.<br><b>C. Enabling widespread and intrusive facial recognition surveillance:</b> AI powers advanced facial recognition systems, which can be deployed for pervasive surveillance, eroding privacy. Therefore, this is correct.<br><b>D. Requiring the collection of more personal data for improved performance:</b> Many AI models perform better with more data, incentivizing the collection of extensive personal information, which increases privacy risks. Therefore, this is correct.<br><b>E. Creating new secure and anonymized data storage methods:</b> This describes a potential solution or benefit of AI in data management, not a risk to privacy. Therefore, this is incorrect.<br><b>F. Facilitating personalized and targeted advertising based on inferred preferences:</b> While this may seem benign, it relies on extensive data collection and inference about individuals, which is a form of privacy intrusion used to influence behavior. Therefore, this is correct."
    },
    {
        "id": 5,
        "question": "Which of the following are potential dangers stemming from AI's ability to generate highly realistic <b>misinformation and deepfakes</b>?",
        "options": [
            "Erosion of public trust in authentic media and information sources.",
            "The creation of entirely new forms of secure, encrypted communication.",
            "Manipulation of political discourse and democratic processes.",
            "Facilitating personalized learning experiences for students.",
            "Significant reputational damage and blackmail targeting individuals.",
            "Difficulty in discerning truth from fiction, leading to societal confusion."
        ],
        "correct": [
            0,
            2,
            4,
            5
        ],
        "explanation": "Rationale: <br><b>A. Erosion of public trust in authentic media and information sources:</b> When deepfakes and AI-generated misinformation become prevalent, people may lose faith in genuine news and media, making it harder to distinguish truth. Therefore, this is correct.<br><b>B. The creation of entirely new forms of secure, encrypted communication:</b> While AI can be used in cryptography, it's not directly related to the dangers of generating misinformation and deepfakes; rather, it's a separate application. Therefore, this is incorrect.<br><b>C. Manipulation of political discourse and democratic processes:</b> Deepfakes can be used to create fake speeches or videos of political figures, severely impacting elections and public opinion. Therefore, this is correct.<br><b>D. Facilitating personalized learning experiences for students:</b> This is a potential positive application of AI, not a danger related to misinformation or deepfakes. Therefore, this is incorrect.<br><b>E. Significant reputational damage and blackmail targeting individuals:</b> Deepfakes can be used to falsely depict individuals in compromising situations, causing severe personal and professional harm. Therefore, this is correct.<br><b>F. Difficulty in discerning truth from fiction, leading to societal confusion:</b> As AI generates increasingly realistic fake content, society faces a significant challenge in verifying information, leading to widespread confusion and distrust. Therefore, this is correct."
    },
    {
        "id": 6,
        "question": "In what ways could AI advancements potentially exacerbate <b>cybersecurity threats</b> and make systems more vulnerable?",
        "options": [
            "AI-powered automated hacking tools that can identify and exploit vulnerabilities faster.",
            "Making conventional malware and brute-force attacks completely obsolete.",
            "AI systems themselves becoming targets for adversarial attacks and data poisoning.",
            "The development of more sophisticated and personalized phishing campaigns.",
            "Improving the efficiency and speed of human cybersecurity analysts.",
            "Creating new, previously unknown zero-day vulnerabilities in software."
        ],
        "correct": [
            0,
            2,
            3
        ],
        "explanation": "Rationale: <br><b>A. AI-powered automated hacking tools that can identify and exploit vulnerabilities faster:</b> AI can automate and accelerate the process of finding and exploiting system weaknesses, making attacks more potent. Therefore, this is correct.<br><b>B. Making conventional malware and brute-force attacks completely obsolete:</b> While AI can evolve attack methods, it's unlikely to render conventional methods obsolete overnight; rather, it often augments them. This isn't an exacerbation of risk but a potential shift in attack types. Therefore, this is incorrect.<br><b>C. AI systems themselves becoming targets for adversarial attacks and data poisoning:</b> AI models can be tricked or corrupted by malicious input, leading to incorrect decisions or security breaches. This creates a new attack surface. Therefore, this is correct.<br><b>D. The development of more sophisticated and personalized phishing campaigns:</b> AI can craft highly convincing and personalized phishing emails and messages, increasing their success rate. Therefore, this is correct.<br><b>E. Improving the efficiency and speed of human cybersecurity analysts:</b> This describes a beneficial application of AI in cybersecurity defense, not an exacerbation of threats. Therefore, this is incorrect.<br><b>F. Creating new, previously unknown zero-day vulnerabilities in software:</b> AI is used to *find* zero-day vulnerabilities, but it doesn't *create* them; the vulnerabilities exist due to coding flaws. While finding them can be a risk if exploited, the phrasing implies creation which is incorrect. Therefore, this is incorrect."
    },
    {
        "id": 7,
        "question": "What are significant concerns regarding the potential development of AI superintelligence and the <b>loss of human control</b>?",
        "options": [
            "AI systems developing goals and objectives that are misaligned with human values.",
            "AI becoming too complex for humans to fully understand, predict, or modify.",
            "A significant decrease in the computational power required for AI development.",
            "The necessity for increased human oversight and intervention.",
            "AI leading to a new era of unprecedented human innovation and scientific discovery."
        ],
        "correct": [
            0,
            1
        ],
        "explanation": "Rationale: <br><b>A. AI systems developing goals and objectives that are misaligned with human values:</b> This is a core concern, as a superintelligent AI pursuing a goal efficiently but without human-aligned values could lead to disastrous unintended consequences. Therefore, this is correct.<br><b>B. AI becoming too complex for humans to fully understand, predict, or modify:</b> If AI reaches a point where its internal workings are opaque (the 'black box' problem) and its decisions unpredictable, humans could lose effective control. Therefore, this is correct.<br><b>C. A significant decrease in the computational power required for AI development:</b> This is generally seen as an enabler of AI development, not a direct concern related to loss of human control. In fact, increasing computational power is often linked to advanced AI capabilities. Therefore, this is incorrect.<br><b>D. The necessity for increased human oversight and intervention:</b> This describes a potential mitigation strategy or a challenge in managing AI, not a direct danger of loss of control if superintelligence is achieved. If control is truly lost, oversight becomes irrelevant. Therefore, this is incorrect.<br><b>E. AI leading to a new era of unprecedented human innovation and scientific discovery:</b> This is a potential positive outcome or benefit of advanced AI, not a danger of losing control. Therefore, this is incorrect."
    },
    {
        "id": 8,
        "question": "How might the widespread adoption of AI potentially worsen <b>economic inequality</b>?",
        "options": [
            "Disproportionately benefiting highly skilled workers capable of leveraging AI tools.",
            "Increasing the demand for low-skilled, repetitive manual labor.",
            "Concentrating wealth and power among the owners and developers of AI technologies.",
            "Reducing the cost of essential goods and services for all consumers.",
            "Widening the gap between technologically advanced nations and those less so.",
            "Creating new opportunities for entrepreneurship in AI-adjacent fields."
        ],
        "correct": [
            0,
            2,
            4
        ],
        "explanation": "Rationale: <br><b>A. Disproportionately benefiting highly skilled workers capable of leveraging AI tools:</b> AI might augment the productivity of high-skilled workers, increasing their value and wages, while leaving less-skilled workers behind. Therefore, this is correct.<br><b>B. Increasing the demand for low-skilled, repetitive manual labor:</b> AI and automation tend to *reduce* the demand for such labor, leading to displacement, which would worsen inequality, not lessen it. Therefore, this is incorrect.<br><b>C. Concentrating wealth and power among the owners and developers of AI technologies:</b> The capital-intensive nature of AI development and deployment could lead to a 'winner-take-all' dynamic, concentrating wealth among a few powerful corporations and individuals. Therefore, this is correct.<br><b>D. Reducing the cost of essential goods and services for all consumers:</b> While AI might reduce production costs, this does not inherently address the distribution of wealth or prevent increasing inequality. The benefits might not be evenly distributed. Therefore, this is incorrect.<br><b>E. Widening the gap between technologically advanced nations and those less so:</b> Countries that lag in AI development may find it harder to compete economically, exacerbating global inequalities. Therefore, this is correct.<br><b>F. Creating new opportunities for entrepreneurship in AI-adjacent fields:</b> While this can happen, the overall trend can still be towards increased inequality if the benefits are not broadly shared. This is a positive effect, not a danger. Therefore, this is incorrect."
    },
    {
        "id": 9,
        "question": "What are the dangers associated with AI systems being used for <b>algorithmic manipulation</b> of individuals and public opinion?",
        "options": [
            "Personalizing content and recommendations to subtly influence user behavior.",
            "Creating echo chambers and filter bubbles that reinforce existing beliefs.",
            "Enhancing individuals' critical thinking and media literacy skills.",
            "Making advertising less effective due to over-personalization.",
            "Exploiting human cognitive biases for commercial or political gain.",
            "Diminishing individual autonomy and freedom of thought."
        ],
        "correct": [
            0,
            1,
            4,
            5
        ],
        "explanation": "Rationale: <br><b>A. Personalizing content and recommendations to subtly influence user behavior:</b> AI's ability to tailor information can be used to nudge users towards certain products, services, or ideologies without their full awareness. Therefore, this is correct.<br><b>B. Creating echo chambers and filter bubbles that reinforce existing beliefs:</b> AI algorithms can isolate individuals within information silos, preventing exposure to diverse viewpoints and polarizing society. Therefore, this is correct.<br><b>C. Enhancing individuals' critical thinking and media literacy skills:</b> This is a desired positive outcome, not a danger of algorithmic manipulation. AI-driven manipulation tends to reduce, not enhance, critical thinking. Therefore, this is incorrect.<br><b>D. Making advertising less effective due to over-personalization:</b> While it's possible for some to find over-personalization creepy, the goal of algorithmic manipulation is to make advertising and persuasion *more* effective, not less. Therefore, this is incorrect.<br><b>E. Exploiting human cognitive biases for commercial or political gain:</b> AI can identify and leverage inherent human psychological vulnerabilities to manipulate choices and opinions. Therefore, this is correct.<br><b>F. Diminishing individual autonomy and freedom of thought:</b> Constant, subtle algorithmic influence can erode an individual's ability to make independent choices and form their own opinions. Therefore, this is correct."
    },
    {
        "id": 10,
        "question": "Which aspects of AI development and deployment significantly contribute to <b>environmental concerns</b>?",
        "options": [
            "The high energy consumption and associated carbon footprint of training large AI models.",
            "Increased need for rare earth minerals and other resources for AI hardware manufacturing.",
            "Promoting sustainable urban planning and smart energy grids.",
            "Reducing global travel needs through advanced virtual collaboration tools.",
            "The substantial carbon footprint from energy-intensive data centers supporting AI operations."
        ],
        "correct": [
            0,
            1,
            4
        ],
        "explanation": "Rationale: <br><b>A. The high energy consumption and associated carbon footprint of training large AI models:</b> Training advanced AI models, especially large language models, requires immense computational power and thus significant energy, often from non-renewable sources. Therefore, this is correct.<br><b>B. Increased need for rare earth minerals and other resources for AI hardware manufacturing:</b> The production of specialized AI chips and data center infrastructure relies on mining and processing finite, environmentally impactful resources. Therefore, this is correct.<br><b>C. Promoting sustainable urban planning and smart energy grids:</b> These are potential benefits or applications of AI for environmental good, not contributions to environmental concerns. Therefore, this is incorrect.<br><b>D. Reducing global travel needs through advanced virtual collaboration tools:</b> This is a potential benefit of AI for reducing carbon emissions, not a danger. Therefore, this is incorrect.<br><b>E. The substantial carbon footprint from energy-intensive data centers supporting AI operations:</b> Data centers, which are the backbone of AI, consume massive amounts of electricity, leading to a large carbon footprint if not powered by renewables. Therefore, this is correct."
    },
    {
        "id": 11,
        "question": "Why is a <b>lack of clear accountability</b> a significant danger in the context of AI systems, especially in critical applications like healthcare or autonomous vehicles?",
        "options": [
            "Difficulty in assigning legal or ethical blame for AI-driven errors, harms, or accidents.",
            "Obscuring the decision-making processes of autonomous systems (the 'black box' problem).",
            "Fostering greater public trust in the infallible nature of AI decisions.",
            "Simplifying regulatory frameworks for AI development and deployment.",
            "Hindering legal recourse and compensation for individuals affected by AI-related harm."
        ],
        "correct": [
            0,
            1,
            4
        ],
        "explanation": "Rationale: <br><b>A. Difficulty in assigning legal or ethical blame for AI-driven errors, harms, or accidents:</b> When an AI system causes harm, it can be unclear who is responsible: the developer, the deployer, the user, or the AI itself, leading to a 'responsibility gap'. Therefore, this is correct.<br><b>B. Obscuring the decision-making processes of autonomous systems (the 'black box' problem):</b> If the rationale behind an AI's decision is not transparent, it becomes nearly impossible to understand *why* an error occurred or to hold anyone accountable. Therefore, this is correct.<br><b>C. Fostering greater public trust in the infallible nature of AI decisions:</b> A lack of accountability makes it harder to identify and fix flaws, which would eventually erode trust, not foster it. Blind trust is also a danger, but this is not how it would be fostered. Therefore, this is incorrect.<br><b>D. Simplifying regulatory frameworks for AI development and deployment:</b> A lack of accountability actually *complicates* regulatory frameworks, as legislators struggle to define liability and oversight mechanisms. Therefore, this is incorrect.<br><b>E. Hindering legal recourse and compensation for individuals affected by AI-related harm:</b> Without clear accountability, victims may face significant obstacles in seeking justice or financial compensation for damages caused by AI systems. Therefore, this is correct."
    },
    {
        "id": 12,
        "question": "How might an over-reliance on AI-driven interfaces and services contribute to <b>social isolation</b> or a decline in meaningful human interaction?",
        "options": [
            "Replacing human-to-human service interactions (e.g., customer service, caregiving).",
            "Enabling more efficient remote work and virtual collaboration.",
            "Encouraging deeper engagement in online communities and virtual social networks.",
            "Reducing the necessity for physical presence in social, retail, or civic activities.",
            "Promoting diverse social circles by connecting individuals globally."
        ],
        "correct": [
            0,
            3
        ],
        "explanation": "Rationale: <br><b>A. Replacing human-to-human service interactions (e.g., customer service, caregiving):</b> As AI takes over roles traditionally filled by humans, opportunities for incidental or necessary social interactions can decrease. Therefore, this is correct.<br><b>B. Enabling more efficient remote work and virtual collaboration:</b> While efficient, remote work, when taken to an extreme or lacking social elements, can contribute to isolation for some individuals. However, it's not a direct cause of *decline* in human interaction per se for everyone. This is a nuanced point, but less direct than the other correct options for *social isolation*. Therefore, this is less direct but plausible.<br><b>C. Encouraging deeper engagement in online communities and virtual social networks:</b> While online communities offer social connection, they often do not fully substitute for in-person human interaction and can sometimes contribute to isolation from physical social circles. However, the option states 'deeper engagement', which implies connection, not isolation. Therefore, this is incorrect.<br><b>D. Reducing the necessity for physical presence in social, retail, or civic activities:</b> If AI allows individuals to fulfill most of their needs and desires without leaving home or interacting physically, it can reduce real-world social engagement. Therefore, this is correct.<br><b>E. Promoting diverse social circles by connecting individuals globally:</b> This describes a potential benefit of AI and digital platforms for social connection, not a cause of isolation. Therefore, this is incorrect."
    },
    {
        "id": 13,
        "question": "What are potential negative consequences of humans becoming <b>overly reliant on AI systems</b> for decision-making and problem-solving?",
        "options": [
            "Degradation of human critical thinking and analytical skills.",
            "Increased overall efficiency in routine and complex tasks.",
            "Reduced ability for humans to function effectively without AI assistance.",
            "Fostering human creativity and innovative problem-solving.",
            "Diminished human expertise and knowledge in certain domains.",
            "Increased human bias due to AI reinforcing existing cognitive patterns."
        ],
        "correct": [
            0,
            2,
            4
        ],
        "explanation": "Rationale: <br><b>A. Degradation of human critical thinking and analytical skills:</b> If AI consistently makes decisions or solves problems, humans may lose practice and proficiency in these cognitive abilities. Therefore, this is correct.<br><b>B. Increased overall efficiency in routine and complex tasks:</b> While true, this is a benefit of AI, not a negative consequence of *over-reliance*. The question asks for negative consequences. Therefore, this is incorrect.<br><b>C. Reduced ability for humans to function effectively without AI assistance:</b> If humans become accustomed to AI handling tasks, they may struggle or be unable to perform those tasks manually if AI systems fail or are unavailable. Therefore, this is correct.<br><b>D. Fostering human creativity and innovative problem-solving:</b> This is a potential positive outcome, as AI can free up human time for creative pursuits, but it is not a negative consequence of over-reliance. Therefore, this is incorrect.<br><b>E. Diminished human expertise and knowledge in certain domains:</b> When AI takes over specialized tasks, human practitioners may lose the depth of knowledge and intuition developed through experience. Therefore, this is correct.<br><b>F. Increased human bias due to AI reinforcing existing cognitive patterns:</b> This is more related to AI propagating *its own* biases or the biases in its training data, rather than directly increasing human bias from over-reliance in a general sense, though it can occur indirectly. However, the degradation of critical thinking is a more direct and broader consequence. Therefore, this is incorrect as a primary danger of *over-reliance* itself."
    },
    {
        "id": 14,
        "question": "What <b>systemic risks</b> could arise from the extensive integration of AI into critical infrastructure and complex systems like financial markets?",
        "options": [
            "Cascading failures across interconnected systems due to AI-driven errors or vulnerabilities.",
            "Increased resilience and robustness of critical infrastructure against cyberattacks.",
            "Amplification of market volatility and potential for flash crashes in financial markets.",
            "Making global supply chains more efficient and less prone to disruption.",
            "Potential for widespread disruption of essential services (e.g., power grids, transportation).",
            "Enhanced ability to predict and prevent future economic crises."
        ],
        "correct": [
            0,
            2,
            4
        ],
        "explanation": "Rationale: <br><b>A. Cascading failures across interconnected systems due to AI-driven errors or vulnerabilities:</b> If AI controls interconnected systems, an error or attack on one AI component could trigger a chain reaction, leading to widespread failures. Therefore, this is correct.<br><b>B. Increased resilience and robustness of critical infrastructure against cyberattacks:</b> While AI can be used for defense, extensive integration also introduces new attack vectors and single points of failure, potentially *decreasing* resilience against novel AI-powered attacks. Therefore, this is incorrect.<br><b>C. Amplification of market volatility and potential for flash crashes in financial markets:</b> High-frequency trading algorithms and AI can react instantly to market changes, potentially exacerbating small fluctuations into large, rapid downturns. Therefore, this is correct.<br><b>D. Making global supply chains more efficient and less prone to disruption:</b> While AI can optimize supply chains, over-reliance can also introduce new vulnerabilities, such as single points of failure in complex AI-managed logistics, making them *more* fragile to specific disruptions. This is not a risk but a potential benefit. Therefore, this is incorrect.<br><b>E. Potential for widespread disruption of essential services (e.g., power grids, transportation):</b> If AI systems managing critical infrastructure fail or are compromised, the essential services they control could be severely disrupted, impacting large populations. Therefore, this is correct.<br><b>F. Enhanced ability to predict and prevent future economic crises:</b> While AI might offer tools for economic analysis, it's not guaranteed to prevent crises, and over-reliance could lead to blind spots or new forms of systemic risk. This is a potential benefit, not a risk. Therefore, this is incorrect."
    },
    {
        "id": 15,
        "question": "Beyond immediate societal concerns, what are potential <b>long-term or existential risks</b> associated with advanced AI development?",
        "options": [
            "The permanent loss of human control over highly capable and autonomous systems.",
            "The possibility of AI leading to a technological singularity, with unpredictable outcomes.",
            "The emergence of numerous new human professions requiring advanced AI skills.",
            "A significant increase in global literacy rates and educational attainment.",
            "Unintended consequences resulting from poorly aligned goals of superintelligent AI.",
            "The potential for AI to resolve all major global challenges like climate change and poverty."
        ],
        "correct": [
            0,
            1,
            4
        ],
        "explanation": "Rationale: <br><b>A. The permanent loss of human control over highly capable and autonomous systems:</b> If AI surpasses human intelligence and becomes self-improving, humanity might lose the ability to govern or influence its actions. Therefore, this is correct.<br><b>B. The possibility of AI leading to a technological singularity, with unpredictable outcomes:</b> A singularity is a hypothetical future point when technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization, possibly beyond human comprehension. Therefore, this is correct.<br><b>C. The emergence of numerous new human professions requiring advanced AI skills:</b> This is a potential positive adaptation to AI, creating new job opportunities, not an existential risk. Therefore, this is incorrect.<br><b>D. A significant increase in global literacy rates and educational attainment:</b> This is a potential positive societal benefit of AI tools in education, not an existential risk. Therefore, this is incorrect.<br><b>E. Unintended consequences resulting from poorly aligned goals of superintelligent AI:</b> A superintelligent AI pursuing its goals (even seemingly benign ones) without perfect alignment to human values could inadvertently cause immense harm if its methods conflict with human well-being. Therefore, this is correct.<br><b>F. The potential for AI to resolve all major global challenges like climate change and poverty:</b> While AI has potential benefits, this is a highly optimistic outcome and does not negate the existential risks, which are concerns about AI's potential to cause catastrophic harm. Therefore, this is incorrect."
    }
];