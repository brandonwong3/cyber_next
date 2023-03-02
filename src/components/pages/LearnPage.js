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
				<div className="learn-item">
				<div className="learn-item-details">
					{/* <div className="read-whats-next-news-item-date">February 27, 2023</div> */}
					<div className="learn-item-title">SQL Injection</div>
					{/* <a href="https://www.wsj.com/pro/cybersecurity?mod=nav_top_subsection" className="read-whats-next-news-item-link">Read more</a> */}
				</div>
				</div>
				<div className="learn-item">
				{/* <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AF9A/production/_126860436_gettyimages-1317962553.jpg" alt="BBC News" /> */}
				<div className="learn-item-details">
					{/* <div className="read-whats-next-news-item-date">February 26, 2023</div> */}
					<div className="learn-item-title">Reflected Cross-Site-Scripting</div>
					{/* <a href="https://www.bbc.com/news/topics/cz4pr2gd85qt" className="read-whats-next-news-item-link">Read more</a> */}
				</div>
				</div>
				<div className="learn-item">
				<div className="learn-item-details">
					{/* <div className="read-whats-next-news-item-date">February 25, 2023</div> */}
					<div className="learn-item-title">Broken Authentication</div>
					{/* <a href="https://thehackernews.com/2023/02/ransomware-attack-hits-us-energy-company.html" className="news-item-link">Read more</a> */}
				</div>
				</div>
				<div className="learn-item">
				<div className="learn-item-details">
					{/* <div className="read-whats-next-news-item-date">February 25, 2023</div> */}
					<div className="learn-item-title">Cross Site Request Forgery</div>
					{/* <a href="https://thehackernews.com/2023/02/ransomware-attack-hits-us-energy-company.html" className="news-item-link">Read more</a> */}
				</div>
				</div>
				<div className="learn-item">
				<div className="learn-item-details">
					{/* <div className="read-whats-next-news-item-date">February 25, 2023</div> */}
					<div className="learn-item-title">Server Side Request Forgery</div>
					{/* <a href="https://thehackernews.com/2023/02/ransomware-attack-hits-us-energy-company.html" className="news-item-link">Read more</a> */}
				</div>
				</div>
				<div className="learn-item">
				<div className="learn-item-details">
					{/* <div className="read-whats-next-news-item-date">February 25, 2023</div> */}
					<div className="learn-item-title">Clickjacking</div>
					{/* <a href="https://thehackernews.com/2023/02/ransomware-attack-hits-us-energy-company.html" className="news-item-link">Read more</a> */}
				</div>
				</div>
			</div>
			</div>
			</div>
		</BaseTemplate>
	);
}

export default LearnPage;
