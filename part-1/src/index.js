import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
	return (
		<button onClick={props.handleClick}>{props.text}</button>
	);
};

const getSum = (values) => {
	return values.good + values.neutral + values.bad;
}

const Statistics = (props) => {
	const sum = getSum(props);
	const average = (props.good - props.bad) / sum;
	const positive = (props.good / sum) * 100;

	if (sum > 0) {
		return (
			<table>
				<tbody>
					<Statistic text="good" value={props.good} />
					<Statistic text="neutral" value={props.neutral} />
					<Statistic text="bad" value={props.bad} />

					<Statistic text="all" value={sum} />
					<Statistic text="average" value={average} />
					<Statistic text="positive" value={positive + " %"} />
				</tbody>
			</table>
		);	
	} else {
		return(
			<p>No feedback given</p>
		);
	}
};

const Statistic = (props) => {
	return(
		<tr>
			<td>{props.text}</td>
			<td>{props.value}</td>
		</tr>
	);
};

const App = (props) => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h2>Give Feedback</h2>
			<Button text="good" handleClick={() => setGood(good + 1)}/>
			<Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
			<Button text="bad" handleClick={() => setBad(bad + 1)}/>

			<h3>Statistics</h3>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
