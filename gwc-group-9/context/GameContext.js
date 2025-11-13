// Client-side game context to store global game state
'use client';

import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext(null);

export default function GameProvider({ children }) {
	const [selectedCharacter, setSelectedCharacter] = useState(null);

	return (
		<GameContext.Provider value={{ selectedCharacter, setSelectedCharacter }}>
			{children}
		</GameContext.Provider>
	);
}

export function useGame() {
	const ctx = useContext(GameContext);
	if (!ctx) throw new Error('useGame must be used within GameProvider');
	return ctx;
}
