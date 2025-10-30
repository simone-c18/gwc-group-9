import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import CharacterSelection from "./app/CharacterSelection";
import Lesson from "./Pages/Lesson";
import Quiz from "./Pages/Quiz";
import Credits from "./Pages/Credits";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/Landing" element={< Landing/>} />
        <Route path="/CharacterSelection" element={< CharacterSelection/>} />
        <Route path="/Lesson" element={< Lesson/>} />
        <Route path="/Quiz" element={< Quiz/>} />
        <Route path="/Credits" element={< Credits/>} />
      </Routes>
    </div>
  );
}
