"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./select.css";
import { useGame } from "../../context/GameContext";

const characters = [
  { id: "c", name: "C", image: "/images/C_default.png", hoverImage: "/images/C_hover.png" },
  { id: "python", name: "Python", image: "/images/Py_default.png", hoverImage: "/images/Py_hover.png" },
  { id: "java", name: "Java", image: "/images/Java_default.png", hoverImage: "/images/Java_hover.png" },
];

export default function CharacterSelection() {
  const router = useRouter();
  const { setSelectedCharacter } = useGame() as { setSelectedCharacter: (id: string) => void };
  const [hoveredChar, setHoveredChar] = useState<string | null>(null);

  const handleClick = (id: string) => {
    // set global selected character and navigate to date screen
    setSelectedCharacter(id);
    router.push("/date");
  };

  return (
    <div className="character-selection">
      <h1 className="selection-header">Choose Your Language~</h1>

      <button className="back-button" onClick={() => router.push("/")}>
        <img src="/images/back_arrow.png" alt="Back" className="back-arrow" />
      </button>

      <div className="character-grid">
        {characters.map((char) => (
          <div
            key={char.id}
            className="character-card"
            onClick={() => handleClick(char.id)}
            onMouseEnter={() => setHoveredChar(char.id)}
            onMouseLeave={() => setHoveredChar(null)}
          >
            <img
              src={hoveredChar === char.id ? char.hoverImage : char.image}
              alt={char.name}
              className="character-image"
            />
            <div className="character-name">{char.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


// // Character select page
// 'use client';

// import '../../src/styles/page.css';
// import { CHARACTERS } from '../../data/characters';
// import { useRouter } from 'next/navigation';
// import { useGame } from '../../context/GameContext';

// export default function SelectPage() {
//   const router = useRouter();
//   const { setSelectedCharacter } = useGame() as { setSelectedCharacter: (id: string) => void };

//   function handleSelect(id: string) {
//     setSelectedCharacter(id);
//     router.push('/date');
//   }

//   return (
//     <div className="App">
//       <header>Select Your Character</header>
//       <main>
//         <div className="character-grid" style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem'}}>
//           {CHARACTERS.map((c) => (
//             <div key={c.id} onClick={() => handleSelect(c.id)} style={{cursor: 'pointer', textAlign: 'center'}}>
//               <img src={c.avatarPath || '/images/JavaBasic.png'} alt={c.name} style={{width: 180, height: 180, objectFit: 'contain', borderRadius: 12, boxShadow: '0 4px 8px rgba(0,0,0,0.3)'}} />
//               <div style={{marginTop: 8, color: 'white', fontWeight: 700, textShadow: '1px 1px 2px black'}}>{c.name}</div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }
