import React, { useState, useContext, useEffect } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import { Row, Col } from 'antd';

const Cities = ({ cities }) => {
    const { score, setScore } = useContext(SettingsContext);
    const { temp, setTemp } = useState(false);
    const image = { width: '200px', margin: '20px', cursor: 'pointer' };
    const handleClick = () => {
        setTemp(true);
    }

    return (
        <Row justify="center">
            {cities.map((value, index) => {
                const photo = `https://d13k13wj6adfdf.cloudfront.net/urban_areas/${value.city}.jpg`;
                return (
                    <Col key={index} span={4}>
                        <img onClick={handleClick} style={image} src={photo} alt="city" />
                        <h1 align="center">{value.city.charAt(0).toUpperCase() + value.city.slice(1)}</h1>
                        <h2 align="center">{value.temp}</h2>
                    </Col>
                );
            })}
        </Row>
    );
}

export default Cities