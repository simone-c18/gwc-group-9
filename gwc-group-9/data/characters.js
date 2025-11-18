//character data structure

export const CHARACTERS = [

    //java
    {
        id: 'java',
        name: 'Java',
        bio: "cute sentence that describes java character",

        //paths to visual assets
        avatarPath: '/images/Java_default.png',
        spritePath: '/images/Java_hover.png',

        //link to story and quiz ("date")
        storyId: 'story-java',
        quizId: 'quiz-java',

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
        avatarPath: '/images/C_default.png',
        spritePath: '/images/C_default.png',

        //link to story and quiz ("date")
        storyId: 'story-c',
        quizId: 'quiz-c',

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
        avatarPath: '/images/Py_default.png',
        spritePath: '/images/Py_default.png',

        //link to story and quiz ("date")
        storyId: 'story-python',
        quizId: 'quiz-python',

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