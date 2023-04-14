import React from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../templates/BaseTemplate';
import FlipOverCardHolder from '../../../fragments/intermediate/FlipOverCardHolder';


const LESSON_DATA = [
	{
		question: 'What is SQL Injection?',
		answer: '<p>SQL injection is a vulnerability that can allow an attacker to interfere with the queries an application makes to the database and allow an attacker to view data that aren\'t authorized or traditionally able to view/retrieve. This is done by placing malicious SQL queries in the web page input. There is also the potential for an attacker to modify or delete the data, which can change the behavior or content of the application. Moreover, this vulnerability has the potential to allow an attacker to perform a denial of service attack or compromise the underlying server. SQL injection is detrimental to a business as an attacker can view sensitive data that may belong to other users of the application or any data being stored, such as passwords and credit card information. SQL injection has the potential to destroy your database and execute admin operations on the database.</p>'
	},
	{
		question: 'Risk Analysis',
		answer: '<p>SQL injection is a severe vulnerability because of the damage it can do. It can result in sensitive data exposure such as passwords, credit card details, and personal information, and alter the data in the database or the entire database itself. An attacker can drop tables, add new data, impersonate as the database administrator, or even access the operating system and attack the internal network. Due to the extent of what can be stolen with SQL injection, it is considered a severe vulnerability.</p>'
	},
	{
		question: 'How to Prevent Against SQL Injection:',
		answer: '<p>To remediate against SQL injection, it is important to use parameterized SQL queries and prepared statements so that way the database can distinguish what is code and what is data, regardless of the user input. With prepared statements, it ensures that an attacker cannot change the intent of a query, even if SQL commands are inserted. </p>',
	},
];


const ReadingSQLInjectionPage = () => {
	return (
		<BaseTemplate>
		<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
			<div className="page-title">
				<h1>SQL Injection</h1>
			</div>
			</div>

			<FlipOverCardHolder data={LESSON_DATA}/>

			<div className="btn-container">
 				<Link to= "/practice/sql-injection">
					 <button>See an Example!</button>
				 </Link>
			</div>
		</BaseTemplate>
	);
}

export default ReadingSQLInjectionPage;
