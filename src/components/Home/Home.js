import React, { useState, useContext, useEffect } from 'react';
import './home.css';
import { SettingsContext } from '../../context/SettingsContext';
import { Layout, Button, Divider } from 'antd';
import Cities from '../Cities';

const { Content } = Layout;

const Home = () => {
    //const [cities, setCities] = useState([]);
    const { difficulty, history, setHistory } = useContext(SettingsContext);
    
    const tmp = () => {
        //setHistory([...history, cities])
    }
    const getCities = () => {
        const citiesArray = ["mumbai", "rome", "milan", "tbilisi", "baku", "cologne", "vienna", "prague", "dubai", "athens", "new-york", "paris", "berlin", "barcelona", "madrid"];
        const shuffled = citiesArray.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, difficulty);
        return selected;
    }

    const getTemperature = () => {
        const citiesArray = getCities();
        const citiesAndTemp = [];
        citiesArray.map(city => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=15111268423bd37aca3f9c5d5b9d86f0`;
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    citiesAndTemp.push({ city: city, temp: data.main.temp });
                });
        });
        return citiesAndTemp;
    }

    return (
        <Layout>
            <Content>
                <Divider orientation="center">Guess the temperature</Divider>
                <Cities cities={getTemperature()} />
                <Button onClick={tmp} type="primary" style={{ display: 'block', margin: '30px', alignContent: 'right' }}>Continue</Button >
            </Content>
        </Layout>
    );
}

export default Home