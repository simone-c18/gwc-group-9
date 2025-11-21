'use client';

import './date.css';
import { useRouter } from 'next/navigation';
import { useGame } from '../../context/GameContext';
import { getCharacterById } from '../../data/characters';
import { useState } from 'react';

export default function DatePage() {
  const router = useRouter();
  const { selectedCharacter } = useGame() as { selectedCharacter: string | null };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showReaction, setShowReaction] = useState(false);
  const [reactionCorrect, setReactionCorrect] = useState<boolean | null>(null);

  const character = selectedCharacter ? getCharacterById(selectedCharacter) : null;

  if (!character) {
    return (
      <div className="date-page">
        <p>No character selected. Please go back and choose a character.</p>
        <button onClick={() => router.push('/select')}>Back to Select</button>
      </div>
    );
  }

  const quiz = character.dateQuiz;

  if (currentIndex >= quiz.length) {
    return (
      <div className="date-page">
        <button className="back-button" onClick={() => router.push("/")}>
          <img src="/images/back_arrow.png" alt="Back" className="back-arrow" />
        </button>

        <div className="date-container">
          <div className="character-display">
            <img src={character.spritePath} alt={character.name} className="character-sprite" />
          </div>

          <div className="dialogue-box">
            <div className="dialogue-text">Thanks for hanging out with me! Let's see how you did!</div>
            <div className="dialogue-buttons">
              <button className="choice-button" onClick={() => router.push('/results')}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz[currentIndex];

  const handleChoiceSelect = (index: number) => {
    const isCorrect = index === currentQuestion.correctIndex;

    setReactionCorrect(isCorrect);
    setShowReaction(true);

    setTimeout(() => {
      setShowReaction(false);
      setReactionCorrect(null);
      setCurrentIndex((prev) => prev + 1);
    }, 1300);
  };

// shows da reaction of character depending on answer
  if (showReaction && reactionCorrect !== null) {
    return (
      <div className="date-page">
        <button className="back-button" onClick={() => router.push("/select")}>
          <img src="/images/back_arrow.png" alt="Back" className="back-arrow" />
        </button>

        <div className="date-container">

          <div className={`character-display ${reactionCorrect ? 'hearts-animation' : 'shake-animation'}`}>
            <img
              src={
                reactionCorrect
                  ? character.correctSpritePath
                  : character.wrongSpritePath
              }
              alt="reaction"
              className="character-sprite"
            />
          </div>

          <div className="dialogue-box">
            <div className="dialogue-text">
              {reactionCorrect
                ? "Great job! I'm glad to see you understood what I taught you <3"
                : "Ehhhh~ that wasn’t quite it… It's okay though!!"}
            </div>
          </div>

        </div>
      </div>
    );
  }

// questions
  return (
    <div className="date-page">
      <button className="back-button" onClick={() => router.push("/select")}>
        <img src="/images/back_arrow.png" alt="Back" className="back-arrow" />
      </button>

      <div className="date-container">
        <div className="character-display">
          <img src={character.spritePath} alt="sprite" className="character-sprite" />
        </div>

        <div className="dialogue-box">
          <div className="dialogue-text">{currentQuestion.question}</div>

          <div className="dialogue-buttons">
            {currentQuestion.choices.map((choice, i) => (
              <button
                key={i}
                className="choice-button"
                onClick={() => handleChoiceSelect(i)}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
