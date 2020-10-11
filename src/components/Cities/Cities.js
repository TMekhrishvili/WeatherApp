import React, { useContext, useEffect } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import { Row, Col } from 'antd';

const Cities = ({ cities }) => {
    
    const { score, setScore, showTemp, setShowTemp, unit } = useContext(SettingsContext);

    const defaultStyle = { width: '200px', margin: '20px', cursor: 'pointer' };

    const getMaxTemp = () => {
        var temps = [];
        cities.map(value => (
            temps.push(value.temp)
        ));
        var max = Math.max(...temps);
        return max;
    }

    return (
        cities.length > 0 && (
            <div>
                <Row justify="center">
                    {cities.map((value, index) => {
                        const photo = `https://d13k13wj6adfdf.cloudfront.net/urban_areas/${value.city}.jpg`;
                        return (
                            <Col key={index} span={4}>
                                <img
                                    onClick={
                                        () => {                                            
                                            setShowTemp(true);
                                            value.temp === getMaxTemp() && setScore(score + 1);
                                        }
                                    }
                                    value={value.temp}
                                    style={showTemp ? (value.temp === getMaxTemp()) ? { ...defaultStyle, border: 'solid 3px green' } : { ...defaultStyle, border: 'solid 3px red' } : { ...defaultStyle }}
                                    src={photo}
                                    alt="city"
                                />
                                <h1 align="center">{value.city.charAt(0).toUpperCase() + value.city.slice(1)}<span style={{ fontSize: '0.7em' }}>{showTemp && ", " + value.temp}{showTemp && (unit === 1 ? " C" : " F")}</span></h1>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        )
    );
}

export default Cities