import React from "react";
import BaseTemplate from '../templates/BaseTemplate';
import '../pages/LearnPage.css';
import { Link } from 'react-router-dom';

const LearnPage = () => {
	return (
		<BaseTemplate>
			<div className="learn-page">
				<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
					<h1>Learn Page</h1>
				</div>

				<div className="learn-section">
					<div className="learn-all-items">

						{/* <div className="learn-item"> */}
						{/* <div className="learn-item-details"> */}
						{/* <div className="read-whats-next-news-item-date">February 27, 2023</div> */}
						{/* <div className="learn-item-title">SQL Injection</div> */}
						{/* <a href="https://www.wsj.com/pro/cybersecurity?mod=nav_top_subsection" className="read-whats-next-news-item-link">Read more</a> */}
						{/* </div> */}
						{/* </div> */}

						<div class="learn-item">
							<div class="dropdown">
								<div class="learn-item-details">
									<img className='icon' src='https://cdn3.iconfinder.com/data/icons/biticon-cyber-security-line/32/SQL_injection_cyber-512.png' alt='syringe going into a server icon' />
									<div class="learn-item-title">SQL Injection</div>
								</div>
								<div class="dropdown-menu">
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
							{/* <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AF9A/production/_126860436_gettyimages-1317962553.jpg" alt="BBC News" /> */}
							<div className="learn-item-details">
							<img className='icon' src='https://3.bp.blogspot.com/-tzo0D1DYtkY/WuAQIW5kXII/AAAAAAAAK-Y/pTzMO08VVjEAeyh4gS9yQIISpN3Jb0BCwCLcBGAs/s1600/xss.png' alt='website with a red bug between 2 script tags' />
								<div className="learn-item-title">Reflected Cross-Site-Scripting</div>
							</div>
						</div>

						<div className="learn-item">
							{/* <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AF9A/production/_126860436_gettyimages-1317962553.jpg" alt="BBC News" /> */}
							<div className="learn-item-details">
							<img className='icon' src='https://cdn-icons-png.flaticon.com/512/3729/3729050.png' alt='lock that has broken shackle' />
								<div className="learn-item-title">Broken Authentication</div>
							</div>
						</div>

						<div className="learn-item">
							{/* <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AF9A/production/_126860436_gettyimages-1317962553.jpg" alt="BBC News" /> */}
							<div className="learn-item-details">
							<img className='icon' src='https://bounty.github.com/images/badges/A8-1.png' alt='shield with a disguise face.' />
								<div className="learn-item-title">Cross Site Request Forgery</div>
							</div>
						</div>

						<div className="learn-item">
							{/* <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AF9A/production/_126860436_gettyimages-1317962553.jpg" alt="BBC News" /> */}
							<div className="learn-item-details">
							<img className='icon' src='https://owasp.org/Top10/assets/TOP_10_Icons_Final_SSRF.png' alt='man with an official guard hat and arrows pointing at him and past him' />
								<div className="learn-item-title">Server Side Request Forgery</div>
							</div>
						</div>

						<div className="learn-item">
							{/* <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AF9A/production/_126860436_gettyimages-1317962553.jpg" alt="BBC News" /> */}
							<div className="learn-item-details">
							<img className='icon' src='https://www.clickcease.com/blog/wp-content/uploads/2020/09/Untitled-design.png' alt='slightly transparent website with mouse over it and a skull in the background.' />
								<div className="learn-item-title">Clickjacking</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</BaseTemplate>
	);

}


export default LearnPage;

// const learnItem = document.querySelector('.learn-item');
// learnItem.addEventListener('click', function() {
// 	learnItem.classList.add("dropdown");
// 	toAdd = document.createElement("div");
// 	toAdd.classList.add("dropdown-menu");
// 	list = document.createElement("ul");
// 	item1 = document.createElement("li");
// 	item1.text = "Read";
// 	list.appendChild(item1);
// 	toAdd.appendChild(list);
// 	learnItem.appendChild(toAdd);
// });
