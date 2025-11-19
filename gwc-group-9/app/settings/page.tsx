"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import "./settings.css";

export default function Page() {
    const router = useRouter();

  return (
    <div className="settings-page">
        <button className="back-button" onClick={() => router.push("/")}>
            <img src="/images/back_arrow.png" alt="Back" className="back-arrow" />
        </button>

        <div className="coming-soon-container">
            <h1 className="coming-soon-title">Coming Soon...</h1>
            <p className="coming-soon-sub">This page is under construction 🚧</p>
        </div>
        
    </div>
    );
}