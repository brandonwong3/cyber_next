import React from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../templates/BaseTemplate';

const ReadingBrokenAuthPage = () => {
	return (
		<BaseTemplate>
		<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
			<div className="page-title">
				<h1>Broken Authentication</h1>
			</div>
			</div>
			<div className="broken-auth-desc">
				<h2>What is Broken Authentication?</h2>
				<p>
				Broken authentication is a term that refers to vulnerabilities involving attackers impersonating users. Broken authentication refers to weaknesses in two areas: <em>session management</em> and <em>credential management</em>.</p>
				<p>
					<h3>Types of Broken Authentication Attacks:</h3>
					<li><strong>Credential stuffing</strong>- A hacker uses stolen usernames and passwords from one web application to access user accounts at other web applications.</li>
					<li><strong> Session Hijacking</strong>- Hackers using stolen session IDs to gain unauthorized access to a system and impersonate the user. These kinds of attacks can occur through vectors such as phishing attacks, public wi-fi sniffing, or malware. </li>
					<li><strong> Password Spraying</strong>- A type of brute force attack (an attacker submitting many passwords or passphrases with the hope of eventually guessing correctly). Attackers use lists of the most common and weak passwords. This method often pays off considering how often “password”, “123456”, and common strings that are likely used as passwords. </li>
				</p>
			</div>
			<div className="risk-desc">
				<h2>Risk Analysis:</h2>
				<p>Risk levels associated with Broken Authentications attack can range from moderate to critical, depending on both the motives of the attacker and information/credentials linked to the attack. Occurrences of broken authentication attacks have led to: stealing critical business data, selling identity theft, personal user data, sending fraudulent calls or emails, creating malicious software programs for disrupting networks, cyberterrorism, and cyberstalking.</p>
			</div>
			<div className="prevention-desc">
				<h2>How to Prevent Broken Authentication:</h2>
				<p>
					<li> Set strong, unique passwords (try not to use the same password for multiple web apps) </li>
					<li> Multi-factor authentication </li>
					<li> Enable passkeys, a new category of digital credentials for users to login without the use of complex passwords </li>
					<li> Avoid showing Session IDs in URLs </li>
					<li> Be mindful of session length (log out of web applications to minimize vulnerability of sessions hijacking)</li>
				</p>
			</div>
			<div className="btn-container">
 				<Link to= "/practice/broken-auth">
					 <button>See an Example!</button>
				 </Link>
			</div>
		</BaseTemplate>
	);
}

export default ReadingBrokenAuthPage;
