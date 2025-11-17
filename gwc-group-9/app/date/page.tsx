'use client';

import '../../src/styles/date.css';
import { useRouter } from 'next/navigation';
import { useGame } from '../../context/GameContext';
import { getCharacterById } from '../../data/characters';
import { useState } from 'react';
// import backArrow from '.../public/images/back_arrow.png' // Adjust the path as needed

export default function DatePage() {
  const router = useRouter();
  const { selectedCharacter } = useGame() as { selectedCharacter: string | null };
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  
  // Get the full character object from the ID
  const character = selectedCharacter ? getCharacterById(selectedCharacter) : null;
  
  // Handle case where no character is selected
  if (!character) {
    return (
      <div className="date-page">
        <p>No character selected. Please go back and choose a character.</p>
        <button onClick={() => router.push('/select')}>Back to Select</button>
      </div>
    );
  }

  // Check if we've finished all dialogue
  if (currentDialogueIndex >= character.dialogue.length) {
    return (
      <div className="date-page">
        <button className="back-button" onClick={() => router.push('/select')}>
        </button>        
        <div className="date-container">
          <div className="character-display">
            <img src={character.avatarPath} alt={character.name} className="character-sprite" />
          </div>
          <div className="dialogue-box">
            <div className="character-name">{character.name}</div>
            <div className="dialogue-text">Thank you for talking with me! That was nice!</div>
            <div className="dialogue-buttons">
              <button className="choice-button" onClick={() => router.push('/results')}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentDialogue = character.dialogue[currentDialogueIndex];

  const handleChoiceSelect = (choiceIndex: number) => {
    // Move to next dialogue or finish
    setCurrentDialogueIndex(currentDialogueIndex + 1);
  };

  return (
    <div className="date-page">
      <button className="back-button" onClick={() => router.push('/select')}>← Back</button>

      <div className="date-container">
        <div className="character-display">
          <img src={character.avatarPath} alt={character.name} className="character-sprite" />
        </div>

        <div className="dialogue-box">
          <div className="character-name">{character.name}</div>
          <div className="dialogue-text">{currentDialogue.text}</div>
          <div className="dialogue-buttons">
            {currentDialogue.choices.map((choice, index) => (
              <button 
                key={index}
                className="choice-button" 
                onClick={() => handleChoiceSelect(index)}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="dialogue-progress">
        {currentDialogueIndex + 1} / {character.dialogue.length}
      </div>
    </div>
  );
}
