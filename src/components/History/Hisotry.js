import React, { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import './history.css';
import { Row, Col, Divider } from 'antd';
const image = { width: '200px', padding: '20px' };

const History = () => {

    const { history } = useContext(SettingsContext);

    return (
        <>
            <Divider style={{marginLeft: '20px', paddingRight: '20px'}} orientation="center"><h2>History</h2></Divider>
            {history.map((cities, i) => (
                <div key={i}>
                    <h3 style={{marginLeft: '20px'}}>Step {i+1}</h3>
                    <Row justify="center">
                        {cities.map((city, index) => {
                            const photo = `https://d13k13wj6adfdf.cloudfront.net/urban_areas/${city}.jpg`;
                            return (
                                <Col key={index} span={4}>
                                    <img style={image} src={photo} alt="city" />
                                    <h1 align="center">{city.charAt(0).toUpperCase() + city.slice(1)}</h1>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            ))}
        </>
    );
}

export default History