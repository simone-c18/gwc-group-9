"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./select.css";
import { useGame } from "../../context/GameContext";

const characters = [
  { id: "c", name: "C", image: "/images/C Neutral Face.png", hoverImage: "/images/C smiling.png" },

  { id: "python", name: "Python", image: "/images/Python Neutral.png", hoverImage: "/images/Python Smile.png" },

  { id: "java", name: "Java", image: "/images/Default Java.png", hoverImage: "/images/Java Smoling.png" },
];

export default function CharacterSelection() {
  const router = useRouter();
  const { setSelectedCharacter } = useGame() as { setSelectedCharacter: (id: string) => void };
  const [hoveredChar, setHoveredChar] = useState<string | null>(null);

  const handleClick = (id: string) => {
    // set global selected character and navigate to date screen
    setSelectedCharacter(id);
    router.push("/convo");
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
