import React, { useContext } from 'react';
import './home.css';
import { SettingsContext } from '../../context/SettingsContext';


const Home = () => {
    const { history, setHistory } = useContext(SettingsContext);
    return (
        <>
            <button>Continue</button>
        </>
    );
}

export default Home