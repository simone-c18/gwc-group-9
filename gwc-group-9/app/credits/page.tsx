//credits page
'use client'; 

import "./credits.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function App() {
   const router = useRouter();

  return (
     <div className="credits-page">

      <button className="back-button" onClick={() => router.push("/")}>
        <img src="/images/back_arrow.png" alt="Back" className="back-arrow" />
      </button>

      <div className="credits-container">

        <div className="credits-image-box">
          <img
            src="/images/team.jpg"     
            alt="Group Photo"
            className="credits-image"
          />
        </div>

        <div className="credits-text-box"></div>
          <h1 className="credits-title">Credits</h1>

          <div className="credits-list">
            <p className="section-title">Thank you to our lovely team:</p>
            
            <p>Lena Tran</p>
            <p>Abigail Loken</p>
            <p>Aishitha Saravanan</p>
            <p>Simone Chrastek</p>
            <br />

            <p className="section-title">All character art made by:</p>
            <p>Lena Tran</p>
            <br />

            <p className="section-title">Background Images by:</p>
            <p>Noraneko Games</p>

            <p className="section-title">Project Repository:</p>
            <p>
              <a 
                href="https://github.com/simone-c18/gwc-group-9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                https://github.com/simone-c18/gwc-group-9
              </a>
            </p>
        </div>
      </div>    
    </div>

  );
}