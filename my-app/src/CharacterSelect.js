import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CharacterSelect.css';

const characters = [
    {
        id: 'C',
        name: 'C',
    },

    {
        id: 'Python',
        name: 'Python',
    },

    {
        id: 'Java',
        name: 'Java',
    },
];

const CharacterSelection = () => {
  const navigate = useNavigate();
    const handleSelect = (character) => {
    // Navigate to the character-specific story route
    navigate(`/story/${character.id}`, { state: { character } });
  };

  return (
    <div className="character-selection">
      <h2 className="selection-header">Choose your character</h2>
      <div className="character-grid">
        {characters.map((char) => (
          <div
            key={char.id}
            className="character-card"
            onClick={() => handleSelect(char)}
          >
            <img src={char.image} alt={char.name} className="character-image" />
            <div className="character-name">{char.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelection;