// This file contains the complete question data structure (allQuizData)
// for a demo Multiple-Select Quiz on World Geography.
const quizTitle = "Geography MSQ Quiz Demo: World Features";
const allQuizData = [
    {
        id: 1,
        question: 'Which of the following continents are crossed by the <strong>Equator (0<sup>o</sup> Latitude)</strong>?',
        options: [
            'Europe',
            'South America',
            'Asia',
            'Australia',
            'Africa'
        ],
        correct: [1, 2, 4],
        explanation: 'Rationale:\n- <b>A:</b> Europe is entirely north of the Equator.\n- <b>B:</b> The Equator crosses Brazil, Ecuador, and Colombia.\n- <b>C:</b> The Equator crosses Indonesia.\n- <b>D:</b> Australia is entirely south of the Equator.\n- <b>E:</b> The Equator crosses several African nations, including Gabon, Congo, and Kenya.'
    },
    {
        id: 2,
        question: 'Select the great mountain ranges that primarily run along a <strong>Pacific Ocean coastline or oceanic trench</strong>, often associated with subduction zones.',
        options: [
            'The Andes',
            'The Rockies',
            'The Urals',
            'The Appalachians'
        ],
        correct: [0, 1],
        explanation: 'Rationale:\n- <b>A:</b> The <b>Andes</b> run along the western edge of South America, parallel to the Peru-Chile Trench.\n- <b>B:</b> The <b>Rockies</b> run down the western part of North America and are part of the Cordillera system related to the North American plate boundary.\n- <b>C/D:</b> The Urals (Russia) and the Appalachians (Eastern US) are ancient, interior mountain ranges.'
    },
    {
        id: 3,
        question: 'Consider the following cities. Select all that are the <strong>national capital</strong> of their respective countries.',
        options: [
            'New York City (USA)',
            'Ottawa (Canada)',
            'Sydney (Australia)',
            'BrasÃ­lia (Brazil)',
            'Auckland (New Zealand)'
        ],
        correct: [1, 3],
        explanation: 'Rationale:\n- <b>A:</b> Washington D.C. is the capital of the USA.\n- <b>B:</b> <b>Ottawa</b> is the capital of Canada.\n- <b>C:</b> Canberra is the capital of Australia.\n- <b>D:</b> <b>BrasÃ­lia</b> is the capital of Brazil.\n- <b>E:</b> Wellington is the capital of New Zealand.'
    },
    {
        id: 4,
        question: 'Locations near the <strong>Equator</strong> are generally characterized by which climatic or daylight conditions? (Assume sea-level conditions.)',
        options: [
            'Large variations in seasonal temperatures.',
            'Relatively constant 12-hour daylight periods year-round.',
            'High annual precipitation due to the Intertropical Convergence Zone (ITCZ).',
            'Consistently low humidity.'
        ],
        correct: [1, 2],
        explanation: 'Rationale:\n- <b>A:</b> Equator-proximal regions have <b>low</b> seasonal temperature variation.\n- <b>B:</b> Correct. Day and night are nearly equal in length.\n- <b>C:</b> Correct. The ITCZ often brings high rainfall.\n- <b>D:</b> Incorrect. High temperatures and high precipitation often lead to high humidity.'
    },
    {
        id: 5,
        question: 'Which of these major rivers flow directly or indirectly into the <strong>Atlantic Ocean</strong>?',
        options: [
            'The Amazon River',
            'The Mississippi River',
            'The Yangtze River',
            'The Congo River'
        ],
        correct: [0, 1, 3],
        explanation: 'Rationale:\n- <b>A:</b> The <b>Amazon</b> flows into the Atlantic Ocean on the eastern coast of South America.\n- <b>B:</b> The <b>Mississippi</b> flows into the Gulf of Mexico, which is part of the Atlantic Ocean.\n- <b>C:</b> The Yangtze River flows into the East China Sea, part of the Pacific Ocean.\n- <b>D:</b> The <b>Congo</b> flows into the Atlantic Ocean on the western coast of Africa.'
    },
    {
        id: 6,
        question: 'Which phenomena are typically associated with a <strong>Transform Plate Boundary</strong> (where two tectonic plates slide horizontally past one another)?',
        options: [
            'Volcanic mountain chains (Volcanic Arcs)',
            'Deep oceanic trenches',
            'Shallow, frequent earthquakes',
            'Formation of major fault lines (e.g., San Andreas)'
        ],
        correct: [2, 3],
        explanation: 'Rationale:\n- <b>A/B:</b> These are characteristic of convergent (subduction) boundaries.\n- <b>C:</b> Correct. The shear stress causes numerous shallow earthquakes.\n- <b>D:</b> Correct. Transform boundaries create large, continuous fault systems.'
    },
    {
        id: 7,
        question: 'Which of the following environmental or geographic factors often lead to <strong>low population density</strong> in a region?',
        options: [
            'Presence of abundant fresh water sources.',
            'Arid climate and desertification.',
            'High altitude and mountainous terrain.',
            'Location near a navigable sea-level river.'
        ],
        correct: [1, 2],
        explanation: 'Rationale:\n- <b>A/D:</b> These factors encourage settlement and high population density.\n- <b>B:</b> Correct. Lack of water makes habitation difficult.\n- <b>C:</b> Correct. Extreme weather, lack of oxygen, and steep terrain limit settlement and agriculture.'
    },
    {
        id: 8,
        question: 'Which of the following island nations or regions are located entirely within the <strong>Mediterranean Sea</strong>?',
        options: [
            'Iceland',
            'Madagascar',
            'Cyprus',
            'Malta',
            'Cuba'
        ],
        correct: [2, 3],
        explanation: 'Rationale:\n- <b>A:</b> Iceland is in the North Atlantic.\n- <b>B:</b> Madagascar is in the Indian Ocean.\n- <b>C:</b> <b>Cyprus</b> is located in the eastern Mediterranean.\n- <b>D:</b> <b>Malta</b> is an archipelago in the central Mediterranean.\n- <b>E:</b> Cuba is in the Caribbean Sea (Atlantic).'
    },
    {
        id: 9,
        question: 'The vast <strong>Gobi Desert</strong> in Central Asia primarily spans across which two major countries?',
        options: [
            'Kazakhstan',
            'China',
            'India',
            'Mongolia'
        ],
        correct: [1, 3],
        explanation: 'Rationale:\n- <b>B:</b> Correct. The Gobi Desert covers significant portions of <b>China</b> (Inner Mongolia).\n- <b>D:</b> Correct. It also covers the southern parts of <b>Mongolia</b>.\n- <b>A:</b> The Kyzylkum and Karakum deserts are located further west in Central Asia (Uzbekistan, Turkmenistan, Kazakhstan).'
    },
    {
        id: 10,
        question: 'Select the countries that are located <strong>entirely within the Southern Hemisphere</strong>.',
        options: [
            'Nigeria',
            'Chile',
            'Australia',
            'Indonesia'
        ],
        correct: [1, 2],
        explanation: 'Rationale:\n- <b>A:</b> Nigeria is in the Northern Hemisphere.\n- <b>B:</b> <b>Chile</b> is entirely in the Southern Hemisphere.\n- <b>C:</b> <b>Australia</b> is entirely in the Southern Hemisphere.\n- <b>D:</b> Indonesia is crossed by the Equator and spans both hemispheres.'
    },
    {
        id: 11,
        question: 'What are the key drawbacks or distortions of the <strong>Mercator Projection</strong> map, traditionally used for nautical navigation?',
        options: [
            'It inaccurately represents coastlines as straight lines.',
            'It greatly distorts the land area of regions near the <strong>poles</strong>.',
            'It does not accurately represent true distances.',
            'It causes all great-circle routes to appear curved on the map.'
        ],
        correct: [1, 2],
        explanation: 'Rationale:\n- <b>A:</b> Coastlines remain accurate.\n- <b>B:</b> Correct. Landmasses like Greenland and Antarctica appear much larger than they are relative to areas near the Equator.\n- <b>C:</b> Correct. Scale varies significantly across the map, making distance calculations inaccurate.\n- <b>D:</b> Incorrect. A major feature of the Mercator Projection is that great-circle routes (shortest distance) appear *curved*, but it represents lines of constant compass bearing (rhumb lines) as *straight*.'
    },
    {
        id: 12,
        question: 'What term(s) are commonly used to describe the point where a river or stream flows into a <strong>larger body of water</strong> (like a sea, ocean, or lake)?',
        options: [
            'River Mouth',
            'Source',
            'Delta',
            'Estuary'
        ],
        correct: [0, 2, 3],
        explanation: 'Rationale:\n- <b>A:</b> Correct. The generic term is the <b>River Mouth</b>.\n- <b>B:</b> The Source is where the river begins.\n- <b>C:</b> Correct. A <b>Delta</b> forms when sediment is deposited at the mouth.\n- <b>D:</b> Correct. An <b>Estuary</b> is a tidal mouth of a river where the tide meets the stream.'
    },
    {
        id: 13,
        question: 'Which of the following major tectonic plates <strong>directly border</strong> the North American Plate?',
        options: [
            'Antarctic Plate',
            'Pacific Plate',
            'Cocos Plate',
            'African Plate'
        ],
        correct: [1, 2],
        explanation: 'Rationale:\n- <b>A:</b> The Antarctic Plate is far to the south.\n- <b>B:</b> Correct. The <b>Pacific Plate</b> forms a major border along the west coast (California, Alaska).\n- <b>C:</b> Correct. The <b>Cocos Plate</b> subducts beneath the North American Plate along the Central American trench.\n- <b>D:</b> The African Plate is separated by the Eurasian Plate and the Mid-Atlantic Ridge.'
    },
    {
        id: 14,
        question: 'Which of the five <strong>Great Lakes of North America</strong> share a border with Canada?',
        options: [
            'Lake Superior',
            'Lake Michigan',
            'Lake Huron',
            'Lake Erie',
            'Lake Ontario'
        ],
        correct: [0, 2, 3, 4],
        explanation: 'Rationale: All Great Lakes share a border with Canada except for Lake Michigan.\n- <b>A, C, D, E:</b> Correct.\n- <b>B:</b> Lake Michigan is the only one located entirely within the United States.'
    },
    {
        id: 15,
        question: 'The <b>Tropic of Cancer</b> is located at approximately 23.5<sup>o</sup> North. Which statements are true about this parallel of latitude?',
        options: [
            'It marks the northernmost latitude where the sun can be <strong>directly overhead</strong> (at the June Solstice).',
            'It is one of the five major circles of latitude used for climate classification.',
            'It runs through the center of Australia.',
            'Its position is fixed and never changes relative to the Equator.'
        ],
        correct: [0, 1],
        explanation: 'Rationale:\n- <b>A:</b> Correct. The Tropic of Cancer is defined by the sun\'s overhead position on the summer solstice.\n- <b>B:</b> Correct. The five circles are the Arctic Circle, Tropic of Cancer, Equator, Tropic of Capricorn, and Antarctic Circle.\n- <b>C:</b> Incorrect. It runs through North America, Africa, and Asia, but not Australia (which is crossed by the Tropic of Capricorn).\n- <b>D:</b> Incorrect. The tilt of the Earth, which determines the tropic\'s position, changes slightly over long geological periods.'
    }
];
