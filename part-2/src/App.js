import React, { useState, useEffect } from 'react';
// import Courses from './components/Courses';
// import Note from './components/Note';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
//import Search from './components/Search';
//import Countries from './components/Countries';
import './index.css';
//import noteService from './services/notes';
import personsService from './services/persons';
import Notification from './components/Notification';

const App = props => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');
    const [notification, setNotification] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();

        const userExists = persons.find(person => person.name === newName);
        
        if (userExists) {
            if (window.confirm(`${userExists.name} is already added to phonebook, replace the old number with a new one?`)) {
                updatePersonNumber(userExists.id, newNumber);
            }
        } else {
            const newPerson = {
                name: newName,
                number: newNumber,
                id: (persons.length + 1)
            };

            addNewPerson(newPerson);
        }

        setNewName('');
        setNewNumber('');
    };

    const updatePersonNumber = (id, number) => {
        const person = persons.find(person => person.id === id);
        const changedPerson = { ...person, number: number }

        personsService
        .update(id, changedPerson)
        .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson));
            setNotification({
                message: `Updated ${returnedPerson.name}`,
                success: true
            });

            clearNotification();
        })
        .catch(error => {
            setNotification({
                message: `Information of ${changedPerson.name} has already been removed from the server`, 
                success: false
            });

            clearNotification();
        });
    };

    const clearNotification = () => {
        setTimeout(() => {
            setNotification(null);
        }, 2000);
    };

    const addNewPerson = newPerson => {
        personsService
        .create(newPerson)
        .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson));
            setNotification({
                message: `Added ${returnedPerson.name}`, 
                success: true
            });

            clearNotification();
        })
        .catch(error => {
            setNotification({
                message: `Information of ${newPerson.name} has already been removed from the server`, 
                success: false
            });

            clearNotification();
        });
    };

    const handleDelete = id => {
        const person = persons.find(person => person.id === id);

        if (window.confirm(`Delete ${person.name}?`)) {
            personsService
            .remove(id)
            .then(response => {
                setPersons(persons.filter(person => person.id !== id));
                setNotification({
                    message: `Deleted ${person.name}`, 
                    success: true
                });

                clearNotification();
            })
            .catch(error => {
                setNotification({
                    message: `Information of ${person.name} has already been removed from the server`, 
                    success: false
                });

                clearNotification();
            });
        }
    };

    const handleName = event => {
        setNewName(event.target.value);
    };

    const handleNumber = event => {
        setNewNumber(event.target.value);
    };

    const handleSearch = event => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        personsService
        .getAll()
        .then(response => {
            setPersons(response);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <Notification notification={notification} />
            <div className="container">
                <h2>Phonebook</h2>
                <Filter search={search} handleSearch={handleSearch}  />
                <h3>Add a new</h3>
                <PersonForm handleSubmit={handleSubmit} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
                <h3>Numbers</h3>
                <Persons persons={persons} search={search} handleDelete={handleDelete} />
            </div>
        </div>
    );
};

export default App;
