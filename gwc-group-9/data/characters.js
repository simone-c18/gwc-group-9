//character data structure

export const CHARACTERS = [

    //java
    {
        id: 'java',
        name: 'Java',
        bio: "cute sentence that describes java character",

        avatarPath: '/images/Default Java.png',
        spritePath: '/images/Java Smoling.png',

        correctSpritePath: '/images/Java_Bloosh.png',
        wrongSpritePath: '/images/Java_didnt_like_that_fucking_answer.png',


        backgroundPath: '/images/java_bg.png',
        storyId: 'story-java',
        quizId: 'quiz-java',

        lessonTitle: 'Java Fundamentals',
        lessonContent: [
            {
                heading: 'Classes',
                text: 'Java is an **Object-Oriented Programming (OOP)** language. Everything revolves around classes and objects. Classes are blueprints for creating objects.\n\nTo define a class, the keyword `class` is used.'
            },
            {
                heading: 'Variables in Java',
                text: 'Like many languages, Java uses basic data types: `int`, `char`, `double`, and `boolean`. All variables must be declared before they are used.\n\nint age = 25;\n\nThis creates an integer variable named `age` and sets its value.'
            }
        ],

        dialogue: [
            {
                text: "Hey! I'm Java, nice to meet you!",
                choices: ["That's cool!", "Tell me more", "Nice to meet you too"]
            },
            {
                text: "I'm used everywhere - from web apps to Android apps! I'm pretty versatile!",
                choices: ["Wow impressive!", "How do you do that?", "That sounds complicated"]
            },
            {
                text: "I've been around since 1995! So I've had plenty of time to get good at things!",
                choices: ["That's a long time", "You must be experienced", "Cool!"]
            }
        ],

        dateQuiz: [
            {
                question: "What type of programming paradigm is Java known for?",
                choices: ["Functional", "Object-Oriented", "Procedural"],
                correctIndex: 1
            },
            {
                question: "Which keyword is used to create a class in Java?",
                choices: ["define", "class", "object"],
                correctIndex: 1
            },
            {
                question: "Which data type stores decimal numbers?",
                choices: ["int", "boolean", "double"],
                correctIndex: 2
            },
            {
                question: "Which symbol ends statements in Java?",
                choices: [")", ";", "}"],
                correctIndex: 1
            },
            {
                question: "Which of these is not a valid variable name?",
                choices: ["2ndNum", "Money", "iNt"],
                correctIndex: 0
            }
        ]
    },

    //c
    {
        id: 'c',
        name: 'C',
        bio: "cute sentence that describes C character",

        avatarPath: '/images/C Neutral Face.png',
        spritePath: '/images/C Neutral Face.png',

        correctSpritePath: '/images/C smiling.png',
        wrongSpritePath: '/images/C didnt like that.png',


        backgroundPath: '/images/c_bg.png',
        storyId: 'story-c',
        quizId: 'quiz-c',

        lessonTitle: 'C: The Foundation',
        lessonContent: [
            {
                heading: 'Pointers',
                text: 'C is famous for Pointers, which are variables that store the memory address of another variable. They allow for powerful, low-level memory manipulation.'
            },
            {
                heading: 'Integers',
                text: 'An integer represents a whole-number value. For example, "7" or "12".\nTo declare an integer variable in C, the following syntax is used:\n\nint val = 3;\n\nThe keyword `int` is used followed by the variable name.'
            }
        ],

        dialogue: [
            {
                text: "It's nice to meet you, I'm C.",
                choices: ["Hi C!", "What are you known for?", "Nice to meet you"]
            },
            {
                text: "I'm one of the most fundamental programming languages. I'm used in operating systems and embedded systems!",
                choices: ["That's impressive", "Tell me more", "Wow!"]
            },
            {
                text: "Many modern languages were inspired by me. I'm basically the foundation of programming!",
                choices: ["No way!", "That's amazing", "I had no idea"]
            }
        ],

        dateQuiz: [
            {
                question: "What is C well known for?",
                choices: ["Pointers", "Classes", "Garbage collection"],
                correctIndex: 0
            },
            {
                question: "Which symbol is used to access a pointer's value?",
                choices: ["&", "*", "%"],
                correctIndex: 1
            },
            {
                question: "What keyword declares an integer?",
                choices: ["num", "int", "i32"],
                correctIndex: 1
            },
            {
                question: "What is a valid way of declaring an int?",
                choices: ["int 3 = three;", "int num = 2", "int val = 3;"],
                correctIndex: 2
            },
            {
                question: "Pointers are variables that...",
                choices: ["represent whole numbers", "Stores the memory address of another variable", "creates a class"],
                correctIndex: 1
            }
        ]
    },

    //python
    {
        id: 'python',
        name: 'Python',
        bio: "cute sentence that describes Python character",

        avatarPath: '/images/Python Neutral.png',
        spritePath: '/images/Python Smile.png',

        correctSpritePath: '/images/Python Bludh.png',
        wrongSpritePath: '/images/Python Unhappy.png',


        backgroundPath: '/images/python_bg.png',
        storyId: 'story-python',
        quizId: 'quiz-python',

        lessonTitle: 'Python: Readability and Power',
        lessonContent: [
            {
                heading: 'Indentation',
                text: 'Unlike C or Java, Python uses **indentation** (whitespace) to define code blocks (like loops and functions), rather than curly braces `{}`. This is what makes its syntax so clean!',
            },
            {
                heading: 'Dynamic Typing',
                text: 'Python uses **dynamic typing**. You don\'t need to declare the variable type when you create it. The type is determined automatically at runtime.\n\nmy_variable = "hello"\n\nThis automatically creates a string variable.',
            }
        ],

        dialogue: [
            {
                text: "Hello! I'm Python, a modern and friendly programming language.",
                choices: ["Hi Python!", "You seem cool", "Nice to meet you!"]
            },
            {
                text: "I'm known for being easy to read. My syntax is super clean and intuitive!",
                choices: ["That's awesome", "How easy?", "Tell me more"]
            },
            {
                text: "I'm used in AI, data science, web dev, and more!",
                choices: ["Impressive!", "No wonder you're popular", "That's cool!"]
            }
        ],

        dateQuiz: [
            {
                question: "Python uses what to define code blocks?",
                choices: ["Braces {}", "Indentation", "Semicolons"],
                correctIndex: 1
            },
            {
                question: "Which typing style does Python use?",
                choices: ["Static", "Hybrid", "Dynamic"],
                correctIndex: 2
            },
            {
                question: "What keyword creates a function in Python?",
                choices: ["def", "function", "fun"],
                correctIndex: 0
            },
            {
                question: "Python is commonly used for…",
                choices: ["Drivers", "Game Engines", "AI & Data Science"],
                correctIndex: 2
            },
            {
                question: "Which of these is a Python data type?",
                choices: ["int", "number", "digit"],
                correctIndex: 0
            }
        ]
    },

];

//function to find character data by id
export const getCharacterById = (id) => {
    return CHARACTERS.find(character => character.id === id);
};
