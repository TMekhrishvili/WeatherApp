import React, { useContext } from 'react';
import { Select } from 'antd';
import { SettingsContext } from '../../context/SettingsContext';
const { Option } = Select;

const Difficulty = () => {
    const { difficulty, setDifficulty } = useContext(SettingsContext);

    const handleChange = value => {
        setDifficulty(value);
    }

    return (
        <div className="difficulty">
            <Select defaultValue={difficulty} value={difficulty} style={{ width: '170px', marginLeft: '15px', marginTop: '20px' }} onChange={handleChange}>
                <Option value="easy">Easy</Option>
                <Option value="medium">Medium</Option>
                <Option value="hard">Hard</Option>
            </Select>
        </div>
    );
}

export default Difficulty