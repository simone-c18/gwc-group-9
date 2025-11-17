'use client';

import './results.css';
import { useRouter } from 'next/navigation';
import { useGame } from '../../context/GameContext';
import { getCharacterById } from '../../data/characters';

export default function ResultsPage() {
  const router = useRouter();
  const { selectedCharacter } = useGame() as { selectedCharacter: string | null };
  const character = selectedCharacter ? getCharacterById(selectedCharacter) : null;

  if (!character) {
    return (
      <div className="results-page">
        <p>No character data found.</p>
        <button onClick={() => router.push('/')}>Home</button>
      </div>
    );
  }

  return (
    <div className="results-page">
      <button className="back-button" onClick={() => router.push('/select')}>← Back</button>

      <div className="results-container">
        <h1 className="results-title">Conversation Complete!</h1>
        
        <div className="results-content">
          <div className="character-display">
            <img src={character.avatarPath} alt={character.name} className="character-sprite" />
          </div>

          <div className="results-box">
            <h2>You've finished talking with {character.name}!</h2>
            <p>Great job going through the conversation. You learned a lot about {character.name}!</p>
            
            <div className="results-buttons">
              <button className="results-btn primary" onClick={() => router.push('/select')}>
                Select Another Character
              </button>
              <button className="results-btn secondary" onClick={() => router.push('/')}>
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
