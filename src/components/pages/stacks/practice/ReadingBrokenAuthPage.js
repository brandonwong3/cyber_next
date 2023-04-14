import React from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../templates/BaseTemplate';
import FlipOverCardHolder from '../../../fragments/intermediate/FlipOverCardHolder';


const LESSON_DATA = [
	{
		question: 'What is Broken Authentication?',
		answer: 'Broken authentication is a term that refers to vulnerabilities involving attackers impersonating users. Broken authentication refers to weaknesses in two areas: session management and credential management.'
	},
	{
		question: 'Types of Broken Authentication Attacks:',
		answer: '&#8226; Credential stuffing - A hacker uses stolen usernames and passwords from one web application to access user accounts at other web applications.<br/> ' +
		'&#8226; Session Hijacking- Hackers using stolen session IDs to gain unauthorized access to a system and impersonate the user. These kinds of attacks can occur through vectors such as phishing attacks, public wi-fi sniffing, or malware. <br/> ' +
		'&#8226; Password Spraying- A type of brute force attack (an attacker submitting many passwords or passphrases with the hope of eventually guessing correctly). Attackers use lists of the most common and weak passwords. This method often pays off considering how often “password”, “123456”, and common strings that are likely used as passwords.'
	},
	{
		question: 'Risk Analysis',
		answer: 'Risk levels associated with Broken Authentications attack can range from moderate to critical, depending on both the motives of the attacker and information/credentials linked to the attack. Occurrences of broken authentication attacks have led to: stealing critical business data, selling identity theft, personal user data, sending fraudulent calls or emails, creating malicious software programs for disrupting networks, cyberterrorism, and cyberstalking.'
	},
	{
		question: 'How to Prevent Broken Authentication Attacks',
		answer: '&#8226; Set strong, unique passwords (try not to use the same password for multiple web apps)<br/> ' +
		'&#8226; Multi-Factor Authentication<br/>' +
		'&#8226; Enable passkeys, a new category of digital credentials for users to login without the use of complex passwords<br/> ' +
		'&#8226; Avoid showing Session IDs in URLs<br/> ' +
		'&#8226; Be mindful of session length (log out of web applications to minimize vulnerability of sessions hijacking)'
	}
]


const ReadingBrokenAuthPage = () => {
	return (
		<BaseTemplate>
		<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
			<div className="page-title">
				<h1>Broken Authentication</h1>
			</div>
			</div>
			<FlipOverCardHolder data={LESSON_DATA}/>
			<div className="btn-container">
 				<Link to= "/practice/broken-auth">
					 <button>See an Example!</button>
				 </Link>
			</div>
		</BaseTemplate>
	);
}

export default ReadingBrokenAuthPage;
