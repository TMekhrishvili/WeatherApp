import React, { useState, useContext, useEffect } from 'react';
import './home.css';
import { SettingsContext } from '../../context/SettingsContext';
import { Layout, Button, Divider } from 'antd';
import Cities from '../Cities';

const { Content } = Layout;

const Home = () => {
    useEffect(() => {
        setCitiesAndTemperature([]);
        getTemperature();
    }, [])
    const [cities, setCities] = useState([]);
    const [citiesAndTemperature, setCitiesAndTemperature] = useState([]);
    const { difficulty, history, setHistory } = useContext(SettingsContext);

    const nextStep = () => {
        setHistory([...history, cities]);
    }

    const getTemperature = () => {
        const citiesArray = ["mumbai", "rome", "milan", "tbilisi", "baku", "cologne", "vienna", "prague", "dubai", "new-york", "paris", "berlin", "barcelona", "madrid"];
        const shuffled = citiesArray.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, difficulty);
        selected.map( city => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=15111268423bd37aca3f9c5d5b9d86f0`;
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setCitiesAndTemperature([...citiesAndTemperature, { city: city, temp: data.main && data.main.temp }]);
                });
        });
        setCities(selected);
    }

    return (
        citiesAndTemperature.length > 0 && (
            <Layout>
                <Content>
                    <Divider orientation="center">Guess the temperature</Divider>
                    <Cities cities={citiesAndTemperature} />
                    <Button onClick={nextStep} type="primary" style={{ display: 'block', margin: '30px', alignContent: 'right' }}>Continue</Button >
                </Content>
            </Layout>
        )
    );
}

export default Home