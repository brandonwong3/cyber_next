import React from "react";
import BaseTemplate from '../templates/BaseTemplate';
import '../pages/LearnPage.css';


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
      				<div class="learn-item-title">SQL Injection</div>
    				</div>
    				<div class="dropdown-menu">
							<ul>
								<li>Read</li>
								<li>Example</li>
								<li>Practice</li>
							</ul>
    				</div>
  				</div>
				</div>

				<div className="learn-item">
				{/* <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AF9A/production/_126860436_gettyimages-1317962553.jpg" alt="BBC News" /> */}
				<div className="learn-item-details">
					<div className="learn-item-title">Reflected Cross-Site-Scripting</div>
				</div>
				</div>

				<div className="learn-item">
				{/* <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AF9A/production/_126860436_gettyimages-1317962553.jpg" alt="BBC News" /> */}
				<div className="learn-item-details">
					<div className="learn-item-title">Broken Authentication</div>
				</div>
				</div>

				<div className="learn-item">
				{/* <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AF9A/production/_126860436_gettyimages-1317962553.jpg" alt="BBC News" /> */}
				<div className="learn-item-details">
					<div className="learn-item-title">Cross Site Request Forgery</div>
				</div>
				</div>

				<div className="learn-item">
				{/* <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AF9A/production/_126860436_gettyimages-1317962553.jpg" alt="BBC News" /> */}
				<div className="learn-item-details">
					<div className="learn-item-title">Server Side Request Forgery</div>
				</div>
				</div>

				<div className="learn-item">
				{/* <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AF9A/production/_126860436_gettyimages-1317962553.jpg" alt="BBC News" /> */}
				<div className="learn-item-details">
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
