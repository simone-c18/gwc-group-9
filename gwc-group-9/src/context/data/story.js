export const CHARACTERS = {
    java: {
        name: 'Java',
        dialouges: [
           {
                text: "It's nice to meet you! I'm Java, and I'm really looking forward to our date today.",
           },

           {
                text:"I can't wait to see you at the ___ later!",
                options: [
                    { text: "I'm ready for our date!", next: 1 },
                    { text: "I think I need more time...", next: 2 }
                    ]
           },

        ]
    },

    c: {
        name: 'C',
        dialouges: [
            {
                text: "Hey there! I'm C. I'm excited to spend some time with you today.",
            },

            {
                text:"I can't wait to see you at the ___ later!",
                options: [
                    { text: "I'm ready for our date!", next: 1 },
                    { text: "I think I need more time...", next: 2 }
                ]
            },
        ]
    },

    python: {
        name: 'Python',
        dialouges: [
            {
                text: "Hi! I'm Python. I'm really looking forward to our date today.",
            },

            {
                text:"I can't wait to see you at the ___ later!",
                options: [
                    { text: "I'm ready for our date!", next: 1 },
                    { text: "I think I need more time...", next: 2 }
                ]
            },
        ]
    }
}

export function storyProgression(ichar = 'java') {
    let char = ichar;
    let index = 0;
    
    function getDialogue() {
        return CHARACTERS[char].dialouges[index];
    }

    function nextDialogue(optionIndex = null) {
        if (optionIndex !== null) {
            index = optionIndex;
        } else {
            index += 1;
        }
    }

    function switchCharacter(newChar) {
        char = newChar;
        index = 0;
    }

    return {
        getDialogue,
        nextDialogue,
        switchCharacter
    };
}
