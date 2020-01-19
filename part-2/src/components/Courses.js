import React from 'react';

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

const Courses = (props) => {
    const courses = () => props.courses.map(course => <Course key={course.id} course={course} />);

    return (
        <div>
            {courses()}
        </div>
    );
};

export default Courses;