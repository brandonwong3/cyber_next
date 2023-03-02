import React from 'react';
import BaseTemplate from '../../../templates/BaseTemplate';
import { Link } from 'react-router-dom';

const PracticeBrokenAuthPage = () => {
	return (
		<BaseTemplate>
		<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
			<h1>Example Broken Authentication</h1>
		</div>
		<div className ="text-container">
			<p> Someone may want to test login security by attempting to bypass authentication (username, password login) by exploiting a cookie. </p>
			<p> Using an application security software tester like <a href="https://portswigger.net/burp">Burp Suite</a> can help us search for exploitable vulnerabilities. </p>
			<p> Intercept the Request with proxy tools such as Burp suite and analyze the backend details. While intercepting the request, one will see something like this: </p>
		</div>
		<div className="img-container">
			<img src="/../../../../images/brokenauth.jpg" alt="Intercepting request"></img>
		</div>
		<div className ="text-container">
			<p>Since the Cookie “UserId” has been sent to us by the server so it can be modified to check the profiles of other users by manipulating the cookie. We will try to brute force the USERID cookie and will check for the response.</p>
		</div>
		<div className="img-container">
			<img src="/../../../../images/response.png" alt="Cookie User ID Response"></img>
		</div>
		<div className="text-container">
			<p>After the Bruteforcing the USERID cookie, we will see the response, which will be showing OK (200) code, it means that this particular combination work for the user id.</p>
		</div>
		<div className="img-container">
			<img src= "../../../../../images/ok-response.png" alt="OK Response Code">
			</img>
		</div>
		<div className ="text-container">
			<p>We can see that there are so many requests that all are having OK status, and when we clicked on Request no 441, we saw that the user id brute force was 10411. Its username is AndyPaul, and its default password was “PASSWORD.” Hence in this way, we can extract an ample number of User Accounts if the Broken Authentication Vulnerability exists in the Web Application.</p>
		</div>
		<div className="btn-container">
 				<Link to= "/practice/broken-auth">
					 <button>Try It!</button>
				 </Link>
			</div>
		</BaseTemplate>
	);
}

export default PracticeBrokenAuthPage;
