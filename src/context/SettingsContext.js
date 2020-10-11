import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = props => {
    const [score, setScore] = useState(0);
    const [unit, setUnit] = useState(1);
    const [difficulty, setDifficulty] = useState(2);
    const [history, setHistory] = useState([]);
    const [showTemp, setShowTemp] = useState(false);

    return <SettingsContext.Provider
        value={{
            score,
            setScore,
            unit,
            setUnit,
            difficulty,
            setDifficulty,
            history,
            setHistory,
            showTemp,
            setShowTemp
        }}>
        {props.children}
    </SettingsContext.Provider>;
}