import React from 'react';
import './CharacterSelection.css';

const characters = [
  {
    id: 'C',
    name: 'C',
    image: 'https://picsum.photos/200/300?random=1',
  },
  {
    id: 'Python',
    name: 'Python',
    image: 'https://picsum.photos/200/300?random=2',
  },
  {
    id: 'Java',
    name: 'Java',
    image: 'https://picsum.photos/200/300?random=3',
  },
];

function App() {
  const handleClick = (charName) => {
    alert(`You clicked on ${charName}`);
  };

  return (
    <div className="character-selection">
      {/* Just use the h1 tag directly */}
      <h1 className="selection-header">Choose Your Language~</h1>

      <div className="character-grid">
        {characters.map((char) => (
          <div
            key={char.id}
            className="character-card"
            onClick={() => handleClick(char.name)}
          >
            <img src={char.image} alt={char.name} className="character-image" />
            <div className="character-name">{char.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;