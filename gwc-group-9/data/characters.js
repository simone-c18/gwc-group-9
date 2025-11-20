//character data structure

export const CHARACTERS = [

    //java
    {
        id: 'java',
        name: 'Java',
        bio: "cute sentence that describes java character",

        //paths to visual assets
        avatarPath: '/images/Default Java.png',
        spritePath: '/images/Java Smoling.png',

        //link to story and quiz ("date")
        backgroundPath: '/images/java_bg.png',
        storyId: 'story-java',
        quizId: 'quiz-java',

        // New Lesson Page Content
        lessonTitle: 'Java Fundamentals',
        lessonContent: [
            {
                heading: 'Classes',
                text: 'Java is an **Object-Oriented Programming (OOP)** language. Everything revolves around classes and objects. Classes are blueprints for creating objects.\n\nTo define a class, the keyword `class` is used.',
            },
            {
                heading: 'Variables in Java',
                text: 'Like many languages, Java uses basic data types: `int`, `char`, `double`, and `boolean`. All variables must be declared before they are used.\n\nint age = 25;\n\nThis creates an integer variable named `age` and sets its value.',
            }
        ],

        //dialogue sequence
        dialogue: [
            {
                text: "Hey! I'm Java, nice to meet you!",
                choices: ["That's cool!", "Tell me more", "Nice to meet you too"]
            },
            {
                text: "I'm used everywhere - from web apps to Android apps. I'm pretty versatile!",
                choices: ["Wow impressive!", "How do you do that?", "That sounds complicated"]
            },
            {
                text: "I've been around since 1995, so I've had plenty of time to get good at things!",
                choices: ["That's a long time", "You must be experienced", "Cool!"]
            }
        ]
    },

    //c
    {
        id: 'c',
        name: 'C',
        bio: "cute sentence that describes C character",

        //paths to visual assets
        avatarPath: '/images/C Neutral Face.png',
        spritePath: '/images/C Neutral Face.png',


        //backgorund image
        backgroundPath: '/images/c_bg.png',
        //link to story and quiz ("date")
        storyId: 'story-c',
        quizId: 'quiz-c',
        
        // New Lesson Page Content
        lessonTitle: 'C: The Foundation',
        lessonContent: [
            {
                heading: 'Pointers',
                text: 'C is famous for Pointers, which are variables that store the memory address of another variable. They allow for powerful, low-level memory manipulation.',
            },
            {
                heading: 'Integers',
                text: 'An integer represents a whole-number value. For example, "7" or "12."\nTo declare an integer variable in C, the following syntax is used:\n\nint val = 3;\n\nThe keyword \'int\' is used followed by the variable name.',
            }
        ],


        //dialogue sequence
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
        ]
    },

    //python
    {
        id: 'python',
        name: 'Python',
        bio: "cute sentence that describes Python character",

        //paths to visual assets
        avatarPath: '/images/Python Neutral.png',
        spritePath: '/images/Python Smile.png',

        //backgorund image
          backgroundPath: '/images/python_bg.png',

        //link to story and quiz ("date")
        storyId: 'story-python',
        quizId: 'quiz-python',
        
        // New Lesson Page Content
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


        //dialogue sequence
        dialogue: [
            {
                text: "Hello! I'm Python, a modern and friendly programming language.",
                choices: ["Hi Python!", "You seem cool", "Nice to meet you!"]
            },
            {
                text: "I'm known for being easy to read and learn. My syntax is super clean and intuitive!",
                choices: ["That's awesome", "How easy?", "Tell me more"]
            },
            {
                text: "I'm used in data science, AI, web development, and more. I'm super popular right now!",
                choices: ["Impressive!", "No wonder you're popular", "That's cool!"]
            }
        ]
    },


];

//function to find character data by id
export const getCharacterById = (id) => {
    return CHARACTERS.find(character => character.id === id);
};