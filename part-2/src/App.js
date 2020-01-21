import React, { useState } from 'react';
//import Courses from './components/Courses';
//import Note from './components/Note';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = (props) => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-1234567' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]);

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPerson = {
            name: newName,
            number: newNumber,
        };

        const userExists = persons.filter((person) => person.name === newName);

        (userExists.length === 1) ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(newPerson));
        
        setNewName('');
        setNewNumber('');
    };

    const handleName = (event) => {
        setNewName(event.target.value);
    };

    const handleNumber = (event) => {
        setNewNumber(event.target.value);
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter search={search} handleSearch={handleSearch}  />
            <h3>Add a new</h3>
            <PersonForm handleSubmit={handleSubmit} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
            <h3>Numbers</h3>
            <Persons persons={persons} search={search} />
        </div>
    );
};

export default App;
