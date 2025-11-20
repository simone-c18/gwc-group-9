'use client';

import './lesson.css';
import { useRouter } from 'next/navigation';
import { useGame } from '../../context/GameContext';
// Assuming getCharacterById now retrieves a character object 
// that includes a 'lessonTitle' and 'lessonContent' property.
import { getCharacterById } from '../../data/characters'; 

// Define the assumed structure of the character object (for reference)
// interface Character {
//   id: string;
//   name: string;
//   avatarPath: string;
//   lessonTitle: string; 
//   lessonContent: {
//     heading: string;
//     text: string;
//   }[]; 
// }

export default function LessonPage() {
  const router = useRouter();
  // 1. Get the currently selected character ID
  const { selectedCharacter } = useGame() as { selectedCharacter: string | null };
  
  // 2. Fetch the full character data
  const character = selectedCharacter ? getCharacterById(selectedCharacter) : null;

  // --- Navigation Handler ---
  const handleGoOnDate = () => {
    router.push('/date');
  };
  
  // --- Conditional Rendering for Missing Character Data ---
  if (!character) {
    return (
      <div className="lesson-page">
        <p>No character or lesson data found.</p>
        <button onClick={() => router.push('/select')}>Select Character</button>
      </div>
    );
  }
  
  // Destructure lesson properties from the fetched character object
  const { lessonTitle, lessonContent, name } = character;

  // --- Main Render: Lesson Page Layout with Character Content ---
  return (
    <div className="lesson-page">
      {/* Optional: Add a back button if navigating back to selection is desired */}
      {/* <button className="back-button" onClick={() => router.push('/select')}>
        <img src="/images/back_arrow.png" alt="Back" className="back-arrow" />
      </button> 
      */}

      {/* The large pink container */}
      <div className="lesson-container">
        
        {/* Lesson Title (e.g., "Variables" or a title based on the character) */}
        <h1 className="lesson-title">{lessonTitle || `Info about ${name}`}</h1>
        
        {/* Lesson Content Sections */}
        <div className="lesson-content-body">
          {/* Check if lessonContent exists and is an array before mapping */}
          {lessonContent && Array.isArray(lessonContent) ? (
            lessonContent.map((section, index) => (
              <div key={index} className="lesson-section">
                <h2 className="section-heading">{section.heading}</h2>
                
                {/* Process the text content for paragraphs/lines */}
                {section.text.split('\n').map((line, lineIndex) => (
                  <p key={lineIndex} className="section-text">
                    {/* Basic check for code examples or special formatting (can be expanded) */}
                    {line.trim().includes('=') || line.trim().startsWith('int') ? (
                       <span className="code-example">{line}</span>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </div>
            ))
          ) : (
             <p className="section-text">No detailed lesson content available for {name} yet.</p>
          )}
        </div>

      </div>

      {/* "Go on Date" Button at the bottom */}
      <button 
        className="go-on-date-btn" 
        onClick={handleGoOnDate}
      >
        Go on Date
      </button>
    </div>
  );
}