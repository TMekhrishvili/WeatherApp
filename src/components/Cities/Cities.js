import React, { useState, useContext, useEffect } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import { Row, Col } from 'antd';

const Cities = ({ cities }) => {
    useEffect(() => {
        getMaxTemp();
    }, [])
    const { score, setScore, showTemp, setShowTemp } = useContext(SettingsContext);
    const [max, setMax] = useState(0);

    //სწორია თუ არასწორი
    const check = true ? { width: '200px', margin: '20px', cursor: 'pointer', alignContent: 'center', border: 'solid 3px green' } : { width: '200px', margin: '20px', cursor: 'pointer', alignContent: 'center', border: 'solid 3px red' };
    const image = showTemp ? { check } : { width: '200px', margin: '20px', cursor: 'pointer' };

    const getMaxTemp = () => {
        var temps = [];
        cities.map(value => (
            temps.push(value.temp)
        ));
        var max = Math.max(...temps);
        setMax(max);
    }
    const handleClick = (e) => {
        console.log(e.target.value);
        setScore(score + 1);
        setShowTemp(true);
    }

    return (
        cities.length > 0 && (
            <div>
                <Row justify="center">
                    {cities.map((value, index) => {
                        const photo = `https://d13k13wj6adfdf.cloudfront.net/urban_areas/${value.city}.jpg`;
                        return (
                            <Col key={index} span={4}>
                                <img onClick={handleClick} value={value.temp} style={{ width: '200px', margin: '20px', cursor: 'pointer' }} src={photo} alt="city" />
                                <h1 align="center">{value.city.charAt(0).toUpperCase() + value.city.slice(1)} {showTemp && value.temp}</h1>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        )
    );
}

export default Cities