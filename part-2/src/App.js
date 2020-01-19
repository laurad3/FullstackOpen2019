import React from 'react';
//import Note from './components/Note';

const Header = (props) => {
    return (
        <h1>{props.name}</h1>
    );
};

const Part = (props) => {
    return (
        <p>{props.name}: {props.exercises}</p>
    );
};

const Content = (props) => {
    const rows = () => props.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />);

    return (
        <div>
            {rows()}
        </div>
    );
};

const Total = (props) => {
    const exercises = props.parts.map(part => part.exercises);
    const total = exercises.reduce((s, p) => s + p);

    return (
        <b>total of {total} exercises</b>
    );
};

const Course = (props) => {
    return(
        <div>
            <Header name={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </div>
    );
};

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    };

    return (
        <div>
            <Course course={course} />
        </div>
    );
};

export default App;
