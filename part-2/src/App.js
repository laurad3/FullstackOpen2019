import React, { useState, useEffect } from 'react';
// import Courses from './components/Courses';
// import Note from './components/Note';
// import Persons from './components/Persons';
// import PersonForm from './components/PersonForm';
// import Filter from './components/Filter';
import Search from './components/Search';
import Countries from './components/Countries';
import axios from 'axios';
import './index.css';

const App = (props) => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCountry, setSelectedCountry] = useState({});

    const handleSearch = (event) => {
        const value = event.target.value;

        setSearch(value);

        if (Object.entries(selectedCountry).length > 0) {
            setSelectedCountry({});
        }
    };

    const handleClick = (country) => {
        setSelectedCountry(country);
    };

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                const data = response.data;
                setCountries(data);
            });
    }, []);

    return (
        <div>
            <Search value={search} onChange={handleSearch} />
            <Countries countries={countries} search={search} handleClick={handleClick} selectedCountry={selectedCountry} />
        </div>
    );
};

export default App;
