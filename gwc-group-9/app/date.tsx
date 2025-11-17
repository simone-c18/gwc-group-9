'use client';

import '../src/styles/date.css';
import { useRouter } from 'next/navigation';
import { useGame } from '../context/GameContext';
import { getCharacterById } from '../data/characters';

export default function DatePage() {
  const router = useRouter();
  const { selectedCharacter } = useGame() as { selectedCharacter: string | null };
  
  // Get the full character object from the ID
  const character = selectedCharacter ? getCharacterById(selectedCharacter) : null;
  
  // Handle case where no character is selected (shouldn't happen if routing works)
  if (!character) {
    return (
      <div className="date-page">
        <p>No character selected. Please go back and choose a character.</p>
        <button onClick={() => router.push('/select')}>Back to Select</button>
      </div>
    );
  }

  return (
    <div className="date-page">
      <button className="back-button" onClick={() => router.push('/select')}>← Back</button>

      <div className="date-container">
        <div className="character-display">
          <img src={character.avatarPath} alt={character.name} className="character-sprite" />
        </div>

        <div className="dialogue-box">
          <div className="character-name">{character.name}</div>
          <div className="dialogue-text">{character.bio}</div>
          <div className="dialogue-buttons">
            <button className="choice-button">Answer Choice 1</button>
            <button className="choice-button">Answer Choice 2</button>
            <button className="choice-button">Answer Choice 3</button>
            <button className="choice-button">Answer Choice 4</button>
          </div>
        </div>
      </div>
    </div>
  );
}