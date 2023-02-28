import React from 'react';
import '../read/whatsnext.css';

const ReadWhatsNextPage = () => {
	
	return (
	  <div className="read-whats-next-page">
		<div className="read-whats-next-page-header">
		  <h1>What's Next...</h1>
		</div>
  
		<div className="read-whats-next-main-section">
		  <div className="read-whats-next-resources-section">
			<h2>Resources</h2>
			<div className="read-whats-next-resources-dropdowns">
			  <div className="read-whats-next-dropdown">
				<h3>For Students</h3>
				<ul>
				  <li>
					<a href="#">
					  Top 80+ Cybersecurity Interview Questions and Answers for 2023
					</a>
				  </li>
				</ul>
			  </div>
			  <div className="read-whats-next-dropdown">
				<h3>For Business</h3>
				<ul>
				  <li>
					<a href="#">
					  Learn about Cyber Liability Insurance, here
					</a>
				  </li>
				</ul>
			  </div>
			</div>
		  </div>
  
		  <div className="read-whats-next-news-section">
			<h2>Recent News</h2>
			<div className="read-whats-next-news-items">
			  <div className="read-whats-next-news-item">
				<img src="https://www.wsj.com/paid-content/cybersecurity/images/cybersecurity_header_img.jpg" alt="WSJ Cybersecurity News" />
				<div className="read-whats-next-news-item-details">
				  <div className="read-whats-next-news-item-date">February 27, 2023</div>
				  <div className="read-whats-next-news-item-title">Cybersecurity Threats on the Rise: How to Protect Your Business</div>
				  <a href="https://www.wsj.com/pro/cybersecurity?mod=nav_top_subsection" className="read-whats-next-news-item-link">Read more</a>
				</div>
			  </div>
			  <div className="read-whats-next-news-item">
				<img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AF9A/production/_126860436_gettyimages-1317962553.jpg" alt="BBC News" />
				<div className="read-whats-next-news-item-details">
				  <div className="read-whats-next-news-item-date">February 26, 2023</div>
				  <div className="read-whats-next-news-item-title">UK Businesses Facing Increased Cyber Threats, Warns National Cyber Security Centre</div>
				  <a href="https://www.bbc.com/news/topics/cz4pr2gd85qt" className="read-whats-next-news-item-link">Read more</a>
				</div>
			  </div>
			  <div className="read-whats-next-news-item">
				<img src="https://www.thehackernews.com/images/-6HRRpV4L4o/YgoyVZdKlsI/AAAAAAAAfNU/LYJlVtLsElonYclWtJvA0snxgno-EWy9gCLcBGAsYHQ/s0/THN%2Blogo.png" alt="The Hacker News" />
				<div className="read-whats-next-news-item-details">
				  <div className="read-whats-next-news-item-date">February 25, 2023</div>
				  <div className="read-whats-next-news-item-title">Ransomware Attack Hits US Energy Company, Shuts Down Pipeline</div>
				  <a href="https://thehackernews.com/2023/02/ransomware-attack-hits-us-energy-company.html" className="news-item-link">Read more</a>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
  };

  export default ReadWhatsNextPage;