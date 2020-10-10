import React, { useContext } from 'react';
import './home.css';
import { SettingsContext } from '../../context/SettingsContext';
import { Layout, Button, Row, Col, Divider } from 'antd';

const { Content } = Layout;

const image = { width: '200px', margin: '20px', cursor: 'pointer' };
const cities = ["mumbai", "tbilisi", "baku"];

const Home = () => {

    const { history, setHistory } = useContext(SettingsContext);
    const handleClick = () => {
        setHistory([...history, cities]);
    }

    return (
        <Layout>
            <Content>
                <Divider orientation="center">Guess the temperature</Divider>
                <Row justify="center">
                    {cities.map((city, index) => {
                        const photo = `https://d13k13wj6adfdf.cloudfront.net/urban_areas/${city}.jpg`;
                        return (
                            <Col key={index} span={4}>
                                <img onClick={handleClick} style={image} src={photo} alt="city" />
                                <h1 align="center">{city.charAt(0).toUpperCase() + city.slice(1)}</h1>
                            </Col>
                        );
                    })}
                </Row>
                <Button type="primary" style={{ display: 'block', margin: '30px', alignContent: 'right' }}>Continue</Button >
            </Content>
        </Layout>
    );
}

export default Home