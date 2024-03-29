import React from 'react';
import BaseTemplate from '../../../templates/BaseTemplate';
import { Link } from 'react-router-dom';
import {NoAnimationFlipOverCardHolder} from '../../../fragments/intermediate/ExampleCard';


const LESSON = [
	{
		question: () => <div>
			<p> Consider an application that sells products from various different categories. When a user selects a category, such as Clothing, the browser requests the following <strong>URL</strong>:</p>
			<p>https://shopping-website.com/products?category=Clothing</p>
		</div>,
		answer: () => <div>
			<p><em><strong>In the Database, this request is seen as a SQL query request to retrieve details related to Clothing:</strong></em></p>
			<p>SELECT * FROM products WHERE category = ‘Clothing’ AND inStock = 1 </p>
		</div>
	},
	{
		question: () => <div>
			<p><strong>This query asked the database to return:</strong></p>
			<li><u>all details</u> (*) from the <u>products</u> table where the <u>category</u> is Clothing and inStock is 1.</li>
				<li>the <u>inStock=1</u> restriction hides products that aren’t inStock</li>
		</div>,
		answer: () => <div>
			<p><strong>The application doesn’t have any defense mechanisms so an attacker can create a malicious payload:</strong></p>
			<p>https://shopping-website.com/products?category=Clothing’--</p>
			<p><strong>This results in the query:</strong></p>
			<p>SELECT * FROM products WHERE category = ‘Clothing’--' AND inStock = 1</p>
			<li>because -- is a comment in SQL, so it removes the inStock=1 restriction in the query.</li>
		</div>
	},
	{
		question: () => <div>
			<p>An attacker can also return information they don’t know about like so:</p>
			<p>https://shopping-website.com/products?category=Clothing’+OR+1=1--</p>
		</div>,
		answer: () => <div>
				<p><strong>This results in the query:</strong></p>
			<p>SELECT * FROM products WHERE category = ‘Clothing’ OR 1=1--' AND inStock = 1</p>
			<li>because 1=1 is always true, all items will be returned by the query.</li>
		</div>
	},
	{
		question: () => <div className="flex justify-center items-center">
 				<Link to="/quiz/sql-injection" className={"flex flex-shrink mx-auto"}>
					 <button className={"small-button"}>Try It!</button>
				 </Link>
			</div>,
		answer: () => <div className="flex justify-center items-center">
			<p>Reference: Portswigger</p>
		</div>
	}
];

const PracticeSQLInjectionPage= () => {
	return (
		<BaseTemplate>
		<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
			<h1> SQL Injection Example</h1>
		</div>

			<NoAnimationFlipOverCardHolder data={LESSON} />

		</BaseTemplate>
	);
}

export default PracticeSQLInjectionPage;
