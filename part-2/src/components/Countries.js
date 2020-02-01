import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Details = ({ country }) => {
    if (Object.entries(country).length > 0) {
        return (
            <div>
                <h1>{country.name}</h1>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <h2>languages</h2>
                <ul>
                    {country.languages.map(language => <li key={language.name}>{language.name}</li>)}                                
                </ul>
                <div><img src={country.flag} alt={country.name} /></div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
};

const Weather = (props) => {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=29a84702848cdc5413d7d462c4a7fd6a&query=${props.name}`)
            .then(response => {
                const data = response.data;
                setWeather(data);
            });
    }, [props.name]);

    if (Object.entries(weather).length > 0) {
        return (
            <div className="weather">
                <h2>Weather in {weather.location.name}</h2>
                <p><b>temperature:</b> {weather.current.temperature} {weather.current.degree} Celcius</p>
                <p><img className="weather__icon" src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]} /></p>
                <p><b>wind:</b> {weather.current.wind_speed} KPH direction {weather.current.wind_dir}</p>
            </div>
        );  
    } else {
        return (
            <div></div>
        );  
    }    
};

const Countries = (props) => {
    if (!props.search) {
        return (<p>begin search</p>);
    }

    let list = props.countries.filter(country => country.name.toLowerCase().includes(props.search));

    if (list.length > 10) {
        return (<p>Too many matches, specify another filter</p>);
    } else if (list.length === 1) {
        return (
            <div>
                {list.map(country => {
                    return (
                        <div key={country.name}>
                            <Details country={country}/>
                            <Weather name={country.name} />
                        </div>
                    );
                })}
            </div>
        );
    } else if (list.length <= 10) {
        return (
            <div>
                {list.map(country => {
                    return (
                        <div key={country.name}>
                            <p>{country.name} <button onClick={() => props.handleClick(country)}>show</button></p>
                        </div>
                    );
                })}
                <Details country={props.selectedCountry} />
            </div>
        );
    }
};

export default Countries;