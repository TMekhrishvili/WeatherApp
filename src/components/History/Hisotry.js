import React, { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import './history.css';

const History = () => {
    const { history } = useContext(SettingsContext);

    return (
        <div style={{ height: '800px' }}>
            <h2 align="center">History</h2>
        </div>
    );
}

export default History