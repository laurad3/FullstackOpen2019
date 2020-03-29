import React from 'react';

const Person = props => {
    return (
        <p>{props.person.name} {props.person.number}<button onClick={() => props.handleDelete(props.person.id)}>delete</button></p>
    );  
};

const Persons = props => {
    const personsToShow = (props.search === '') ? props.persons : props.persons.filter(person => person.name.toLowerCase().includes(props.search.toLowerCase()));

    const rows = () => personsToShow.map(person => <Person key={person.name} person={person} handleDelete={props.handleDelete} />);

    return (
        <div>
            {rows()}
        </div>
    );
};

export default Persons;