//character data structure

export const CHARACTERS = [

    //java
    {
        id: 'java',
        name: 'Java',
        bio: "A cute professor who sees the world with stars in their eyes",

        //paths to visual assets
        avatarPath: '..', //add path
        spritePath: '..',

        //link to story and quiz ("date")
        storyId: 'story-java',
        quizId: 'quiz-java',
    },

    //c
    {
        id: 'c',
        name: 'C',
        bio: "cute sentence that describes java character",

        //paths to visual assets
        avatarPath: '..', //add path
        spritePath: '..',

        //link to story and quiz ("date")
        storyId: 'story-c',
        quizId: 'quiz-c',
    },

    //python
    {
        id: 'python',
        name: 'Python',
        bio: "cute sentence that describes java character",

        //paths to visual assets
        avatarPath: '..', //add path
        spritePath: '..',

        //link to story and quiz ("date")
        storyId: 'story-python',
        quizId: 'quiz-python',
    },


];

//function to find character data by id
export const getCharacterById = (id) => {
    return CHARACTERS.find(character => character.id === id);
};

