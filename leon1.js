// This file contains the complete question data structure (allQuizData)
//  Quiz Data for the Information Security Life Cycle (25 Questions)
// Quiz Data for the Information Security Life Cycle (25 Questions)
const quizTitle = "Advanced Security Life Cycle (SLC) Quiz: Variable Multiple-Select (25 Questions)";
const allQuizData = [
    // ------------------------------------------------------------------
    // 1. Life Cycle Structure
    // ------------------------------------------------------------------
    {
        id: 1,
        question: 'The Information Security Life Cycle (SLC) described in the lecture is a six-step process. Which phases directly follow a step involving either "Analysis" or "Design"?',
        options: [
            'Security Planning',
            'Security Implementation',
            'Security Review',
            'Continual Security'
        ],
        correct: [1, 2], // 2 correct
        explanation: 'Rationale: Security Implementation (B) follows Design, and Security Review (C) follows Implementation (which follows Design). Planning (A) is first, and Continual Security (D) is last.'
    },
    {
        id: 2,
        question: 'What is the most fundamental goal of the entire Information Security Life Cycle (SLC)?',
        options: [
            'To ensure the highest level of encryption for all data.',
            'To achieve Confidentiality, Integrity, and Availability (CIA) for an information asset.',
            'To reduce the total cost of security ownership over time.',
            'To implement Non-Repudiation for all user transactions.'
        ],
        correct: [1], // 1 correct
        explanation: 'Rationale: The lecture states the security life cycle describes all the steps necessary to achieve **Confidentiality, Integrity, and Availability (CIA)** for a given information asset. This is the overarching goal.'
    },
    {
        id: 3,
        question: 'Which of the following phases of the SLC are categorized as governance and management activities that occur at the *beginning* of the process?',
        options: [
            'Security Planning',
            'Security Analysis',
            'Security Design',
            'Security Review'
        ],
        correct: [0, 1], // 2 correct
        explanation: 'Rationale: **Security Planning** (A) and **Security Analysis** (B) define the scope, policy, and requirements before any physical design or implementation takes place.'
    },
    {
        id: 4,
        question: 'The **Continual Security** process requires that the system be monitored to identify which specific changes that necessitate corrective actions?',
        options: [
            'Changes in the physical location of the asset.',
            'Changes in the asset\'s security risks.',
            'Changes in the cost of IT hardware.',
            'Changes in the threat environment.'
        ],
        correct: [1, 3], // 2 correct
        explanation: 'Rationale: Continual Security monitors for changes in the **threat environment** (D) and changes in the asset\'s **security risks** (B). Corrective actions are taken to restore the asset\'s accepted security state.'
    },
    // ------------------------------------------------------------------
    // 2. Planning and Analysis (Identify)
    // ------------------------------------------------------------------
    {
        id: 5,
        question: 'Which steps are necessary for **Security Planning** (the first phase) and serve to define the project\'s direction and constraints?',
        options: [
            'Asset definition',
            'Security policy',
            'Security scope',
            'Security countermeasures'
        ],
        correct: [0, 1, 2], // 3 correct
        explanation: 'Rationale: Planning involves **Asset definition**, defining the **Security policy**, defining Security objectives, and defining the **Security scope**. Security countermeasures (D) are defined in the Design phase.'
    },
    {
        id: 6,
        question: 'The two approaches used in the initial **identification of information assets** for a security project are:',
        options: [
            'Top-down approach',
            'Problem-based approach',
            'Objective-based approach',
            'Reactive-based approach'
        ],
        correct: [1, 2], // 2 correct
        explanation: 'Rationale: The two approaches for asset identification are the **Problem-based approach** (B) and the **Objective-based approach** (C). Top-down (A) is a generic management style, and Reactive-based (D) is not a defined approach in the lecture.'
    },
    {
        id: 7,
        question: 'The purpose of a **limited Preliminary Impact Analysis** within the Planning phase is to:',
        options: [
            'Determine the exact monetary loss of a security breach.',
            'Indicate the level of impact the asset has on the organization\'s business mission.',
            'Guide the final definition of the security scope.',
            'Identify all technical vulnerabilities.'
        ],
        correct: [1, 2], // 2 correct
        explanation: 'Rationale: The Preliminary Impact Analysis **indicates the level of impact** (B) the asset has on the mission, which is then used to **guide the definition of the security scope** (C) and constraints.'
    },
    {
        id: 8,
        question: 'The **Security Analysis** phase is where the asset\'s security is studied to define its security requirements. This study acquires information on which of the following areas?',
        options: [
            'Current threats',
            'Current security controls',
            'Asset vulnerabilities and their exposure',
            'Detailed design of new security mechanisms'
        ],
        correct: [0, 1, 2], // 3 correct
        explanation: 'Rationale: Analysis acquires information on **current threats**, **current security controls**, and **asset vulnerabilities and their exposure**. The detailed design of new mechanisms (D) is the output of the next phase (Design).'
    },
    // ------------------------------------------------------------------
    // 3. Design and Implementation (Protect)
    // ------------------------------------------------------------------
    {
        id: 9,
        question: 'The **Security Design** phase requires a detailed risk assessment to establish which of the following?',
        options: [
            'The security mechanisms (e.g., encryption, access control).',
            'The asset\'s security policy.',
            'A feasible risk-driven security program.',
            'The security architecture blueprint.'
        ],
        correct: [0, 2, 3], // 3 correct
        explanation: 'Rationale: The Design phase defines the **security mechanisms**, establishes the **risk-driven security program**, and creates the **security architecture blueprint**. The Security Policy (B) is defined in the Planning phase.'
    },
    {
        id: 10,
        question: 'The **Security Implementation** phase involves translating the design into a working program. Key activities in this phase include:',
        options: [
            'Developing final operational and backup procedures.',
            'Acquiring and installing new hardware and software.',
            'Defining the security objectives.',
            'Testing the implementation of the security mechanisms.'
        ],
        correct: [0, 1, 3], // 3 correct
        explanation: 'Rationale: Implementation activities are practical and involve **developing procedures**, **acquiring/installing components**, and **testing the implemented mechanisms**. Defining objectives (C) is a Planning activity.'
    },
    {
        id: 11,
        question: 'Which of the following principles from Saltzer and Schroeder are specifically aimed at **simplifying** the security system to minimize flaws and ease review?',
        options: [
            'Fail-safe Defaults',
            'Open Design',
            'Economy of Mechanism',
            'Psychological Acceptability'
        ],
        correct: [2], // 1 correct
        explanation: 'Rationale: **Economy of Mechanism** (C) is the principle that explicitly advocates for keeping the design as simple and small as possible to minimize flaws and simplify analysis.'
    },
    {
        id: 12,
        question: 'The principle of **Complete Mediation** mandates that **all** accesses to objects be checked for authority. This requires checking at which points?',
        options: [
            'Only on initial resource request.',
            'During every access attempt.',
            'During initialization and shutdown.',
            'Whenever a password is changed.'
        ],
        correct: [1, 2], // 2 correct
        explanation: 'Rationale: Complete Mediation requires checking for authority **during every access attempt** (B) and throughout the system lifecycle, including **initialization and shutdown** (A). Checking only on initial request (C) creates a bypass vulnerability.'
    },
    {
        id: 13,
        question: 'The design principle of **Fail-Safe Defaults** is permission-based. This implies the default security posture is:',
        options: [
            'Allow access to all authenticated users.',
            'Denial of access.',
            'Explicitly based on exclusion.',
            'Lack of access.'
        ],
        correct: [1, 3], // 2 correct
        explanation: 'Rationale: Fail-Safe Defaults means the protection scheme identifies conditions under which access is permitted. Therefore, the default situation is a **lack of access** (D) or **denial of access** (B).'
    },
    // ------------------------------------------------------------------
    // 4. Review and Continual Security (Detect, Respond, Recover)
    // ------------------------------------------------------------------
    {
        id: 14,
        question: 'The **Security Review** phase formally consists of which of the following processes?',
        options: [
            'Certification',
            'Accreditation',
            'Authorization',
            'Design'
        ],
        correct: [0, 1, 2], // 3 correct
        explanation: 'Rationale: The Security Review process is defined as the **certification**, **accreditation**, and **authorization** of the security program. Design (D) is an earlier phase.'
    },
    {
        id: 15,
        question: '**Certification** of a security program primarily focuses on which aspect?',
        options: [
            'Formal management acceptance of the risk.',
            'Technical evaluation of the security mechanisms.',
            'Verifying the program is compliant with established policy.',
            'Auditing the system for operational security flaws.'
        ],
        correct: [1, 3], // 2 correct
        explanation: 'Rationale: **Certification** is the technical review, which involves **technical evaluation of mechanisms** (B) and **auditing for security flaws** (D). Management acceptance (A) is part of Accreditation.'
    },
    {
        id: 16,
        question: '**Accreditation** is the process where upper management formally accepts the risk and allows the security program to operate. This process ensures:',
        options: [
            'The system meets its established Recovery Time Objective (RTO).',
            'Compliance with legal and organizational security policies.',
            'Formal acceptance of the system\'s security posture.',
            'All technical flaws have been patched.'
        ],
        correct: [1, 2], // 2 correct
        explanation: 'Rationale: Accreditation is the formal sign-off where management **formally accepts the security posture** (C) and confirms **compliance with policies** (B). RTO (A) is a goal related to recovery, and patching (D) is a technical function of Implementation/Continual Security.'
    },
    {
        id: 17,
        question: 'What is the "accepted state" of the information asset that **Continual Security** seeks to maintain and restore when risks change?',
        options: [
            'The state prescribed in its security policy.',
            'The state that provides the highest speed and performance.',
            'The state before the initial security project began.',
            'The state certified by the Security Review phase.'
        ],
        correct: [0], // 1 correct
        explanation: 'Rationale: When risks change, corrective actions are taken to restore the security of the asset to its accepted state, **as prescribed in its security policy** (A).'
    },
    // ------------------------------------------------------------------
    // 5. Security Objectives (CIAAN)
    // ------------------------------------------------------------------
    {
        id: 18,
        question: 'Which of the following Security Star objectives are concerned with preventing unauthorized changes to information?',
        options: [
            'Confidentiality',
            'Integrity',
            'Availability',
            'Non-Repudiation'
        ],
        correct: [1], // 1 correct
        explanation: 'Rationale: **Integrity** (B) is the objective concerned with safeguarding the accuracy and completeness of information and methods of processing, thereby preventing unauthorized or accidental modification.'
    },
    {
        id: 19,
        question: 'Ensuring data is only disclosed to authorized entities is the core concern of which security objective(s)?',
        options: [
            'Confidentiality',
            'Integrity',
            'Authentication',
            'Authorization'
        ],
        correct: [0, 3], // 2 correct
        explanation: 'Rationale: **Confidentiality** (A) prevents unauthorized disclosure. **Authorization** (D) is the mechanism that defines *which* entities are authorized to access the data.'
    },
    {
        id: 20,
        question: 'Which Security Star objectives are part of the AAA (Authentication, Authorization, Accounting) framework and are used to verify the identity and permissions of a subject?',
        options: [
            'Confidentiality',
            'Authentication',
            'Authorization',
            'Non-Repudiation'
        ],
        correct: [1, 2], // 2 correct
        explanation: 'Rationale: The AAA framework includes **Authentication** (verifying identity) and **Authorization** (verifying permissions). Non-Repudiation (D) is related but focuses on proof of action.'
    },
    // ------------------------------------------------------------------
    // 6. Security Principles
    // ------------------------------------------------------------------
    {
        id: 21,
        question: 'The principle of **Least Privilege** limits damage by granting users only the necessary permissions. Which security design principles are most effective in complementing this limitation?',
        options: [
            'Open Design',
            'Least Common Mechanism',
            'Separation of Privilege',
            'Psychological Acceptability'
        ],
        correct: [1, 2], // 2 correct
        explanation: 'Rationale: **Least Common Mechanism** (B) limits shared resources, restricting the spread of damage. **Separation of Privilege** (C) limits power by requiring multiple conditions for sensitive actions. Open Design (A) and Psychological Acceptability (D) are about transparency and usability, respectively.'
    },
    {
        id: 22,
        question: 'According to the **Open Design** principle, the security of a mechanism should rely on which of the following?',
        options: [
            'The secrecy of the proprietary software.',
            'The difficulty of reverse-engineering the code.',
            'The secrecy of the cryptographic keys or passwords.',
            'The ease with which it can be reviewed and tested by experts.'
        ],
        correct: [2, 3], // 2 correct
        explanation: 'Rationale: Open Design, rooted in Kerckhoffs\'s principle, states that security must depend on the **secrecy of the keys/passwords** (C). Making the design public also allows for **easier review and testing** (D).'
    },
    {
        id: 23,
        question: 'The principle of **Least Common Mechanism** is a design goal that seeks to minimize which risk factors?',
        options: [
            'The cost of hardware components.',
            'The potential for a flaw in one mechanism to compromise multiple users.',
            'The number of shared resources.',
            'The difficulty of understanding the code.'
        ],
        correct: [1, 2], // 2 correct
        explanation: 'Rationale: This principle minimizes the number of **shared mechanisms/resources** (C), thereby limiting the risk that a vulnerability in one common mechanism will be exploited to **compromise multiple users** (B).'
    },
    {
        id: 24,
        question: 'The principle of **Psychological Acceptability** ensures that users will routinely and automatically apply protection mechanisms correctly. This is achieved by designing interfaces that are:',
        options: [
            'Intuitive and easy to use.',
            'Not burdensome to the user\'s workflow.',
            'Highly visible to remind users of security risks.',
            'Required by mandatory corporate policy.'
        ],
        correct: [0, 1], // 2 correct
        explanation: 'Rationale: Psychological Acceptability requires the human interface to be designed for **ease of use** (A) and to **not make the resource more difficult to access** (B). If mechanisms are burdensome, users will bypass them.'
    },
    {
        id: 25,
        question: 'In addition to the eight main principles from Saltzer and Schroeder, the lecture mentions two other concepts for evaluating or improving protection designs. These include:',
        options: [
            'Work Factor',
            'Economy of Scale',
            'Compromise Recording',
            'Complete Mediation'
        ],
        correct: [0, 2], // 2 correct
        explanation: 'Rationale: The final page mentions comparing attacker resources with the **Work Factor** (A) required to defeat the system and the strategy of **Compromise Recording** (C). Complete Mediation (D) is one of the eight main principles.'
    }
];
