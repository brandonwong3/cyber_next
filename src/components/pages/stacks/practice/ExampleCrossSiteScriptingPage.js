import React from 'react';
import BaseTemplate from '../../../templates/BaseTemplate';
import { Link } from 'react-router-dom';

const ExampleCrossSiteScriptingPage = () => {
	return (
		<BaseTemplate>
		<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
			<h1>Example Cross-Site Scripting</h1>
		</div>
		<div className ="text-container">
			<p> Given a website with the following <strong>URL</strong>: https://website.com/status?message=Hello+World.</p>
			<p> It displays this on the page: </p>
		</div>
		<div className ="image-container">
			<img src="/../../../../images/XSS-link.png" alt="text display"></img>
		</div>
		<div className = "text-container">
			<p>Note how user input is directly put on the page with no sanitation, indicating a potential reflected cross-site scripting vulnerability. </p>
			<p><strong>An attacker can create a malicious link due to this lack of data processing:</strong></p>
		</div>
		<div className = "image-container">
			<img src="/../../../../images/bad-link.png" alt="example of malicious link"></img>
		</div>
		<div className ="text-container">
			<p> An attacker can add an alert(1) within the script tags and have a pop-up come up every time this link is visited and control the user’s session with the application.</p>
		</div>
		<div className="btn-container">
 				<Link to= "/practice/cross-site-scripting">
					 <button>Try It!</button>
				 </Link>
			</div>
		</BaseTemplate>
	);
}

export default ExampleCrossSiteScriptingPage;
