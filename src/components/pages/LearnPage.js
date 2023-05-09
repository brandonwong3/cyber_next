import React from "react";
import BaseTemplate from '../templates/BaseTemplate';
import '../pages/LearnPage.css';
import { Link } from 'react-router-dom';

const LearnPage = () => {
	return (
		<BaseTemplate>
			<div className="learn-page">
				<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
					<h1>Learn All About Vulnerabilities</h1>
				</div>

				<div className="learn-section">
					<div className="learn-all-items">
						<div className="learn-item">
							<div className="dropdown">
								<div className="learn-item-details">
									<img className='icon' src='https://cdn3.iconfinder.com/data/icons/biticon-cyber-security-line/32/SQL_injection_cyber-512.png' alt='syringe going into a server icon' />
									<div className="learn-item-title">SQL Injection</div>
								</div>
								<div className="dropdown-menu">
									<ul>
										<Link to="/practice/reading-sql-injection">
											<li>Read</li>
										</Link>
										<Link to="/practice/sql-injection">
											<li>Example</li>
										</Link>
										<Link to="/quiz/sql-injection">
											<li>Practice</li>
										</Link>
									</ul>
								</div>
							</div>
						</div>

						<div className="learn-item">
						<div className = "dropdown">
							<div className="learn-item-details">
							<img className='icon' src='https://3.bp.blogspot.com/-tzo0D1DYtkY/WuAQIW5kXII/AAAAAAAAK-Y/pTzMO08VVjEAeyh4gS9yQIISpN3Jb0BCwCLcBGAs/s1600/xss.png' alt='website with a red bug between 2 script tags' />
								<div className="learn-item-title">Reflected Cross-Site-Scripting</div>
							</div>
							<div className="dropdown-menu">
									<ul>
										<Link to="/practice/reading-cross-site-scripting">
											<li>Read</li>
										</Link>
										<Link to="/practice/cross-site-scripting">
											<li>Example</li>
										</Link>
										<Link to="/quiz/cross-site-scripting">
											<li>Practice</li>
										</Link>
									</ul>
								</div>
							</div>
						</div>

						<div className="learn-item">
						<div className = "dropdown">
							<div className="learn-item-details">
							<img className='icon' src='https://cdn-icons-png.flaticon.com/512/3729/3729050.png' alt='lock that has broken shackle' />
								<div className="learn-item-title">Broken Authentication</div>
							</div>
							<div className="dropdown-menu">
									<ul>
										<Link to="/practice/reading-broken-auth">
											<li>Read</li>
										</Link>
										<Link to="/practice/broken-auth">
											<li>Example</li>
										</Link>
										<Link to="/quiz/authentication">
											<li>Practice</li>
										</Link>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</BaseTemplate>
	);

}
export default LearnPage;
