import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = props => {
    const [score, setScore] = useState(0);
    const [unit, setUnit] = useState("celsius");
    const [difficulty, setDifficulty] = useState("easy");
    const [history, setHistory] = useState({});

    return <SettingsContext.Provider
        value={{
            score,
            setScore,
            unit,
            setUnit,
            difficulty,
            setDifficulty,
            history,
            setHistory
        }}>
        {props.children}
    </SettingsContext.Provider>;
}