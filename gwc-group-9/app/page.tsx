// landing page
'use client'; // <-- Necessary if you are using client-side hooks like useState

import '../src/styles/page.css';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import Landing from '../pages/Landing'; // Adjust import paths as needed
// import SelectScreen from '../pages/SelectScreen'; // Adjust import paths as needed

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <div className="App">
      <header>Date Everything!</header>
      <main>
        <ul className="start-buttons">
          <Link href="/select">
            <li><button className="start-button">Play</button></li>
          </Link>
          <Link href="/settings">
            <li><button className="start-button">Settings</button></li>
          </Link>
          <Link href="/credit">
            <li><button className="start-button">Credit</button></li>
          </Link>
        </ul> 

        {/* Use state to conditionally render components */}
        {/* {showLanding ? <Landing /> : <SelectScreen />} */}
        {/* <button onClick={() => setShowLanding(prev => !prev)}>Toggle Screen</button> */}
      </main>
      
        
      
    </div>
  );
}