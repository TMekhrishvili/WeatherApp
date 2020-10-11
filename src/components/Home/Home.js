import React, { useState, useContext, useEffect } from 'react';
import './home.css';
import { SettingsContext } from '../../context/SettingsContext';
import { Layout, Button, Divider } from 'antd';
import Cities from '../Cities';

const { Content } = Layout;

const Home = () => {
    useEffect(() => {
        getTemperature();
    }, [])
    const [cities, setCities] = useState([]);
    const [citiesAndTemperature, setCitiesAndTemperature] = useState([]);
    const { score, difficulty, history, setHistory, setShowTemp } = useContext(SettingsContext);

    const nextStep = () => {
        setHistory([...history, cities]);
        getTemperature();
        setShowTemp(false);
    }

    const getCities = async () => {
        const citiesArray = ["mumbai", "rome", "milan", "tbilisi", "baku", "cologne", "vienna", "prague", "dubai", "paris", "berlin", "barcelona", "madrid"];
        const shuffled = citiesArray.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, difficulty);
        return selected;
    }


    const getCitiesAndTemperature = async (response) => {
        let temporary = [];
        response.map(async (city) => {

            var rand = Math.floor(Math.random() * Math.floor(500));
            temporary.push({ city: city, temp: rand });

            // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=15111268423bd37aca3f9c5d5b9d86f0`;
            // fetch(url)
            //     .then((res) => res.json())
            //     .then((data) => {
            //         temporary.push({ city: city, temp: data.main && data.main.temp });
            //     })
        });
        return temporary;
    }

    const getTemperature = async () => {
        getCities().then((selected) => {
            getCitiesAndTemperature(selected)
                .then((response) => {
                    setCitiesAndTemperature(response);
                    setCities(selected);
                })
        })
    }

    return (
        citiesAndTemperature.length > 0 && (
            < Layout >
                {score}
                <Content>
                    <Divider orientation="center">Guess the temperature</Divider>
                    <Cities cities={citiesAndTemperature} />
                    <Button onClick={nextStep} type="primary" style={{ display: 'block', margin: '30px', alignContent: 'right' }}>Continue</Button >
                </Content>
            </Layout >
        )
    );
}

export default Home