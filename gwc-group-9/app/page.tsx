// landing page
'use client'; 

import '../src/styles/page.css';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <div className="App">
      <header>Date Everything!</header>
      <main>
        <ul className="start-buttons">
          <li>
            <Link href="/select">
              <button className="start-button">Play</button>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <button className="start-button">Settings</button>
            </Link>
          </li>
          <li>
            <Link href="/credit">
              <button className="start-button">Credit</button>
            </Link>
          </li>
        </ul> 

        {/* Use state to conditionally render components */}
        {/* {showLanding ? <Landing /> : <SelectScreen />} */}
        {/* <button onClick={() => setShowLanding(prev => !prev)}>Toggle Screen</button> */}
      </main>
    </div>
  );
}