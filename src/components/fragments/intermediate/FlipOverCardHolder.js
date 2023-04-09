import React from 'react';
import FlipOverCard from './FlipOverCard';
import '../../../style/flip-card-style.css';


const LESSON_DATA = [
	{
		question: 'What is SQL Injection?',
		answer: 'SQL injection is a vulnerability that can allow an attacker to interfere with the queries an application makes to the database and allow an attacker to view data that aren\'t authorized or traditionally able to view/retrieve. This is done by placing malicious SQL queries in the web page input. There is also the potential for an attacker to modify or delete the data, which can change the behavior or content of the application. Moreover, this vulnerability has the potential to allow an attacker to perform a denial of service attack or compromise the underlying server. SQL injection is detrimental to a business as an attacker can view sensitive data that may belong to other users of the application or any data being stored, such as passwords and credit card information. SQL injection has the potential to destroy your database and execute admin operations on the database.'
	},
	{
		question: 'Risk Analysis',
		answer: 'SQL injection is a severe vulnerability because of the damage it can do. It can result in sensitive data exposure such as passwords, credit card details, and personal information, and alter the data in the database or the entire database itself. An attacker can drop tables, add new data, impersonate as the database administrator, or even access the operating system and attack the internal network. Due to the extent of what can be stolen with SQL injection, it is considered a severe vulnerability.'
	}
];


const FlipOverCardHolder = ({data = LESSON_DATA}) => {

	const [index, setIndex] = React.useState(0);


	const handleNext = () => {
		if (index < data.length - 1) {
			setIndex(index + 1);
		}
	}

	const handlePrev = () => {
		if (index > 0) {
			setIndex(index - 1);
		}
	}

	return (
		<div className="flip-over-card-holder">
			<FlipOverCard question={data[index].question} answer={data[index].answer} />
			<div className="flex flex-row flex-shrink justify-center items-center align-center">
				<button className={"control-button"} onClick={handlePrev}>Prev</button>
				<div className={"w-10"} />
				<button className={"control-button"} onClick={handleNext}>Next</button>
			</div>
		</div>
	);

}

export default FlipOverCardHolder;
