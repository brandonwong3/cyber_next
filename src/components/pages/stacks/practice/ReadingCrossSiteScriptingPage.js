import React from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../templates/BaseTemplate';
import FlipOverCardHolder from '../../../fragments/intermediate/FlipOverCardHolder';


const LESSON_DATA = [
	{
		question: 'What is Reflected Cross-Site Scripting?',
		answer: 'Reflected cross-site scripting can occur when malicious data in an HTTP request is reflected off of a web application to the victim\'s browser in an unsafe way. In other words, a malicious link is sent to a victim, and when the victim\'s browser loads or if the victim clicks on something loaded by the web application, an XSS request is sent and reflected back to the victim. Reflected XSS occurs when user input and requests are not sanitized properly and thoroughly so that an attacker can modify and manipulate how the web application functions and activate malicious code and scripts. Reflected XSS is dangerous because an attacker can view and modify information the user can perform, perform actions that the user can perform, and can potentially initiate potential malicious attacks by spoofing as the victim user. Moreover, an attacker can prompt the user to download malicious content, steal credentials/cookie values/sensitive data, and redirect the user to another website, all of which breach basic security principles of confidentiality, integrity, and availability, a giant threat to the web application and the security of the users.'
	},
	{
		question: 'Risk Analysis',
		answer: 'The risk associated with cross-site scripting varies widely based on the information stored on the website. If the website stores sensitive personal information, there is a greater risk with this vulnerability being present. If a malicious user is able to elevate its privileges, the risk level increases to a critical vulnerability with drastic impacts to the application and data stored in it.'
	},
	{
		question: 'How to Prevent Reflected Cross-Site Scripting',
		answer: 'As a general, never insert untrusted data anywhere, but if you must, HTML escape the data before putting it into the HTML element content. Moreover, encode data on output and use appropriate HTTP response headers so that browsers interpret data as text and not code.'
	}
]


const ReadingCrossSiteScriptingPage = () => {
	return (
		<BaseTemplate>
		<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
			<div className="page-title">
				<h1>Cross-Site Scripting</h1>
			</div>
			</div>
			<FlipOverCardHolder data={LESSON_DATA}/>
			<div className="btn-container">
 				<Link to= "/practice/cross-site-scripting">
					 <button>See an Example!</button>
				 </Link>
			</div>
		</BaseTemplate>
	);
}

export default ReadingCrossSiteScriptingPage;
