import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
	const course = 'Half Stack application development';

	return (
		<h1>{course}</h1>
	);
};

const Part = (props) => {
	return (
		<p>{props.part} {props.exercise}</p>
	);
};

const Content = (props) => {
	const part1 = 'Fundamentals of React';
	const part2 = 'Using props to pass data';
	const part3 = 'State of a component';

	return (
		<div>
			<Part part={part1} exercise={props.exercises1} />
			<Part part={part2} exercise={props.exercises2} />
			<Part part={part3} exercise={props.exercises3} />
		</div>
	);
};

const Total = (props) => {
	return (
		<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
	);
};

const App = () => {
	const exercises1 = 10;
	const exercises2 = 7;
	const exercises3 = 14;

	return (
		<div>
			<Header />
			<Content exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
			<Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
		</div>
	)
};

ReactDOM.render(<App />, document.getElementById('root'));
