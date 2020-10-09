import React, { useContext } from 'react';
import { Select } from 'antd';
import { SettingsContext } from '../../context/SettingsContext';
const { Option } = Select;

const Unit = () => {

    const { unit, setUnit } = useContext(SettingsContext);

    const handleChange = value => {
        setUnit(value);
    }

    return (
        <div className="unit">
            <Select defaultValue={unit} style={{ width: '170px', margin: '15px' }} onChange={handleChange}>
                <Option value="celsius">Celsius</Option>
                <Option value="fahrenheit">Fahrenheit</Option>
            </Select>
        </div>
    );
}

export default Unit