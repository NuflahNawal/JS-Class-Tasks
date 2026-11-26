var quiz = [
    {
        question: "Q1: When you hear a funny song and then catch yourself humming it all afternoon without trying, what is that catchy tune called?",
        opt1: "A) Earworm",
        opt2: "B) Daydream",
        opt3: "C) Déjà vu",
        opt4: "D) Echo chamber",
        ans: "A) Earworm"
    },
    {
        question: "Q2: In computer architecture, which memory type is volatile and typically stores data currently being used by the CPU?",
        opt1: "A) SSD",
        opt2: "B) ROM",
        opt3: "D) RAM",
        opt4: "D) Flash drive",
        ans: "D) RAM"
    },
    {
        question: "Q3: What does a while loop do if its controlling condition evaluates to false before the first iteration?",
        opt1: "A) Runs once and stops",
        opt2: "B) Skips the loop body completely",
        opt3: "C) Throws a syntax error",
        opt4: "D) Runs infinitely",
        ans: "B) Skips the loop body completely"
    },
    {
        question: "Q4: In statistics, which measure of central tendency is least affected by extreme outliers in a skewed dataset?",
        opt1: "A) Mean",
        opt2: "B) Mode",
        opt3: "C) Median",
        opt4: "D) Range",
        ans: "C) Median"
    },
    {
        question: "Q5: What is the value of log_{10}(1000)$?",
        opt1: "A) 2",
        opt2: "B) 3",
        opt3: "C) 10",
        opt4: "D) 100",
        ans: "B) 3"
    },
    {
        question: "Q6: Which word is closest in meaning to ephemeral?",
        opt1: "A) Permanent",
        opt2: "B) Short-lived",
        opt3: "C) Loud",
        opt4: "D) Complex",
        ans: "B) Short-lived"
    },
    {
        question: "Q7: Which pillar of Islam is directly connected to purifying wealth and helping those in need?",
        opt1: "A) Sawm",
        opt2: "B) Zakat",
        opt3: "C) Hajj",
        opt4: "D) Shahada",
        ans: "B) Zakat"
    },
    {
        question: "Q8: What is $15 + 27$?",
        opt1: "A) 32",
        opt2: "B) 52",
        opt3: "C) 42",
        opt4: "D) 38",
        ans: "C) 42"
    },
    {
        question: "Q9: Which word means 'very happy and full of joy'?",
        opt1: "A) Elated",
        opt2: "B) Reluctant",
        opt3: "C) Cautious",
        opt4: "D) Gloomy",
        ans: "A) Elated"
    },
    {
        question: "Q10: If two events $A$ and $B$ are independent, what is $P(A \\cap B)$ equal to?",
        opt1: "A) P(A) + P(B)",
        opt2: "B) P(A) - P(B)",
        opt3: "C) P(A) x P(B)",
        opt4: "D) P(A) / P(B)",
        ans: "C) P(A) x P(B)"
    }
    // {
    //     question: "Q11: Which sentence uses the semicolon correctly?",
    //     opt1: "A) She studied late; because the exam was tomorrow.",
    //     opt2: "B) She studied late; however, she felt confident.",
    //     opt3: "C) She studied late; and she felt confident.",
    //     opt4: "D) She studied late; for the exam.",
    //     ans: "B) She studied late; however, she felt confident."
    // },
    // {
    //     question: "Q12: In Islamic history, which event marks the beginning of the Hijri (Islamic) calendar?",
    //     opt1: "A) Battle of Badr",
    //     opt2: "B) Conquest of Makkah",
    //     opt3: "C) Migration (Hijrah) to Madinah",
    //     opt4: "D) Treaty of Hudaybiyyah",
    //     ans: "C) Migration (Hijrah) to Madinah"
    // },
    // {
    //     question: "Q13: According to cognitive load theory, why can overloading working memory hinder learning?",
    //     opt1: "A) Long-term memory erases old facts",
    //     opt2: "B) Limited processing capacity makes integrating new information harder",
    //     opt3: "C) Sensory memory blocks visual cues",
    //     opt4: "D) Attention shifts automatically to rewards",
    //     ans: "B) Limited processing capacity makes integrating new information harder"
    // },
    // {
    //     question: "Q14: What happens when a variable is declared inside a function with local scope?",
    //     opt1: "A) It can be modified anywhere in the entire program",
    //     opt2: "B) It is only accessible within that function",
    //     opt3: "C) It automatically saves to permanent disk storage",
    //     opt4: "D) It overrides every global variable with the same name",
    //     ans: "B) It is only accessible within that function"
    // },
    // {
    //     question: "Q15: What does a break statement typically do inside a loop?",
    //     opt1: "A) Restarts the loop from the first item",
    //     opt2: "B) Exits the loop immediately",
    //     opt3: "C) Pauses the program for one second",
    //     opt4: "D) Skips only the current iteration and continues",
    //     ans: "B) Exits the loop immediately"
    // },
    // {
    //     question: "Q16: Which planet in our solar system has the shortest day, completing a full rotation in about 10 hours?",
    //     opt1: "A) Mars",
    //     opt2: "B) Jupiter",
    //     opt3: "C) Venus",
    //     opt4: "D) Mercury",
    //     ans: "B) Jupiter"
    // },
    // {
    //     question: "Q17: Why does Venus have a hotter surface than Mercury despite being farther from the Sun?",
    //     opt1: "A) Its core generates nuclear fusion heat",
    //     opt2: "B) A thick carbon dioxide atmosphere traps heat via a strong greenhouse effect",
    //     opt3: "C) It has two moons that reflect extra sunlight",
    //     opt4: "D) Its orbit brings it inside the Sun's corona every year",
    //     ans: "B) A thick carbon dioxide atmosphere traps heat via a strong greenhouse effect"
    // },
    // {
    //     question: "Q18: Which type of blood vessel carries blood away from the heart under relatively high pressure?",
    //     opt1: "A) Vein",
    //     opt2: "B) Artery",
    //     opt3: "C) Capillary",
    //     opt4: "D) Venule",
    //     ans: "B) Artery"
    // },
    // {
    //     question: "Q19: Which river flows through the most countries in the world?",
    //     opt1: "A) Amazon River",
    //     opt2: "B) Danube River",
    //     opt3: "C) Nile River",
    //     opt4: "D) Yangtze River",
    //     ans: "B) Danube River"
    // },
    // {
    //     question: "Q20: Which continent has the largest land area on Earth?",
    //     opt1: "A) Africa",
    //     opt2: "B) North America",
    //     opt3: "C) Asia",
    //     opt4: "D) Antarctica",
    //     ans: "C) Asia"
    // },
    // {
    //     question: "Q21: What do the Olympic rings represent?",
    //     opt1: "A) The five oceans of the world",
    //     opt2: "B) The inhabited continents participating in the Games",
    //     opt3: "C) Five medals awarded in every sport",
    //     opt4: "D) Five centuries of ancient games",
    //     ans: "B) The inhabited continents participating in the Games"
    // }
];

var index = 0
var score = 0

console.log(quiz);
