'use client';

import React from 'react';
// The CSS file is already imported here, ready for your styles!
import "./results.css";

// --- Placeholder for Game Context and Data (To resolve compilation errors) ---
// In a real application, you would remove this and use your actual imports.

// Mock Character Data (Must be defined here to make the file runnable)
const MOCK_CHARACTERS = [
  { id: 'java', name: 'Java', avatarPath: '/images/Java_Bloosh.png' },
  { id: 'c', name: 'C', avatarPath: '/images/C_default.png' },
  { id: 'python', name: 'Python', avatarPath: '/images/Py_default.png' },
];

const getCharacterById = (id: string) => {
    return MOCK_CHARACTERS.find(character => character.id === id);
};

// Mock Context Hook (Assumes default values for a successful compile)
interface GameContextType {
  selectedCharacter: string | null;
  correctAnswers: number | null; 
  totalQuestions: number | null;
  resetGameState: () => void; 
}

const useGame = (): GameContextType => {
  // Use 'java' as a default selected character for testing the results screen
  return {
    selectedCharacter: 'java', 
    correctAnswers: 4, // Example score
    totalQuestions: 5, // Example total
    resetGameState: () => console.log('Game state reset'),
  };
};
// --- End of Placeholder Definitions ---


export default function DateResultsPage() {
  
  // Use the mock hook/context for local execution
  const { selectedCharacter, correctAnswers, totalQuestions, resetGameState } = 
    useGame();
    
  const character = selectedCharacter ? getCharacterById(selectedCharacter) : null;

  // Set default values 
  const finalScore = correctAnswers ?? 0;
  const total = totalQuestions ?? 5; 
  const characterName = character ? character.name : "Your Date";

  // --- Navigation Handlers (Using window.location.href instead of useRouter) ---
  const handleNavigateHome = () => {
    if (resetGameState) {
      resetGameState(); 
    }
    window.location.href = '/'; // Navigates to the home page
  };

  const handleSelectNewCharacter = () => {
    window.location.href = '/select'; // Navigates to the select page
  };

  // Determine the congratulatory message based on the score
  const scorePercentage = (finalScore / total) * 100;
  let resultMessage = "You did great!";
  let scoreClass = "score-green"; // New class for score color

  if (scorePercentage < 40) {
    resultMessage = "A good effort! Time to study some more code.";
    scoreClass = "score-red";
  } else if (finalScore === 0) {
    resultMessage = "Oh no! It looks like you missed everything. Maybe try a different character next time?";
    scoreClass = "score-red";
  } else if (scorePercentage < 75) {
    resultMessage = "Solid performance! You two clearly have chemistry.";
    scoreClass = "score-yellow";
  } else {
    resultMessage = "Perfect match! You scored maximum compatibility.";
    scoreClass = "score-pink-dark";
  }

  return (
    // Replaced Tailwind with 'results-page-container' class and kept background inline style
    <div className="results-page-container" 
         style={{ backgroundImage: "url('/images/street_bg.png')" }}>
      
      {/* Replaced Tailwind with 'results-box' class and kept inline styles from original */}
      <div className="results-box"
           style={{ backgroundColor: '#ffc0cb', border: '4px solid #ff69b4' }}>

        {/* Replaced Tailwind with 'results-title' class and kept inline styles from original */}
        <h1 className="results-title"
            style={{ fontFamily: 'Dokdo, cursive', color: '#ff69b4', textShadow: '2px 2px #fff', WebkitTextStroke: '1px #333' }}>
          Date Complete!
        </h1>

        {/* Replaced Tailwind with 'score-card' class */}
        <div className="score-card">
          
          {/* Replaced Tailwind with 'score-card-message' class */}
          <p className="score-card-message">
            Congratulations! You just finished your date with <span className="character-name">{characterName}</span>.
          </p>

          {/* Score Display - Replaced Tailwind with 'score-display' class */}
          <div className="score-display">
            <p className="score-label">Your Compatibility Score:</p>
            {/* Dynamic class for color is now applied using the 'score-value' and dynamic 'scoreClass' */}
            <span className={`score-value ${scoreClass}`}
                  style={{ fontFamily: 'Dokdo, cursive', WebkitTextStroke: '2px #333' }}>
              {finalScore} / {total}
            </span>
            <p className="result-message">{resultMessage}</p>
          </div>

          {/* Character Image (if available) - Replaced Tailwind with 'character-avatar-container' and 'character-avatar' classes */}
          {character && (
            <div className="character-avatar-container">
              <img 
                src={character.avatarPath} 
                alt={characterName} 
                className="character-avatar"
              />
            </div>
          )}
        </div>
        
        {/* Action Buttons - Replaced Tailwind with 'action-buttons-container' class */}
        <div className="action-buttons-container">
          <button 
            onClick={handleSelectNewCharacter}
            className="select-new-character-button"
            style={{ fontFamily: 'Dokdo, cursive' }}
          >
            Select New Character
          </button>
          
          <button 
            onClick={handleNavigateHome}
            className="go-home-button"
            style={{ fontFamily: 'Dokdo, cursive' }}
          >
            Go Home
          </button>
        </div>

      </div>
    </div>
  );
}