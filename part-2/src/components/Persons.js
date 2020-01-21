import React from 'react';

const Person = (props) => {
    return (
        <p>{props.person.name} {props.person.number}</p>
    );  
};

const Persons = (props) => {
    const personsToShow = (props.search === '') ? props.persons : props.persons.filter((person) => person.name.toLowerCase().includes(props.search.toLowerCase()));

    const rows = () => personsToShow.map((person) => <Person key={person.name} person={person} />);

    return (
        <div>
            {rows()}
        </div>
    );
};

export default Persons;