"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./CharacterSelection.css";

const characters = [
  {
    id: "C",
    name: "C",
    image: "/Assets/C bitch face.png",
    hoverImage: "/Assets/C.png",
  },
  {
    id: "Python",
    name: "Python",
    image: "/Assets/Python.png",
    hoverImage: "/Assets/python smole.png",
  },
  {
    id: "Java",
    name: "Java",
    image: "/Assets/JavaBasic.png",
    hoverImage: "/Assets/Java smole.png" // Fixed typo: was "Assests"
  },
];

export default function CharacterSelection() {
  const router = useRouter();
  const [hoveredChar, setHoveredChar] = useState<string | null>(null);

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="character-selection">
      <h1 className="selection-header">Choose Your Language~</h1>

      <div className="character-grid">
        {characters.map((char) => (
          <div
            key={char.id}
            className="character-card"
            onClick={() => handleClick(char.name)}
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