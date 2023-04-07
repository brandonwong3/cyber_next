import '../read/whatsnext.css';
import React, { useState } from 'react';

const ReadWhatsNextPage = () => {
	const [studentDropdownOpen, setStudentDropdownOpen] = useState(false);
	const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);


	return (
		<div className="read-whats-next-page">
			<div className="logo-background">
				<img
					src="https://cdn-icons-png.flaticon.com/512/108/108181.png"
					alt="Website Logo"
					className="background-logo"
				/>
			</div>
			<div className="read-whats-next-content">
				<div className="read-whats-next-page-header">
					<h1>What's Next...</h1>
				</div>

				<div className="read-whats-next-main-section">
					<div className="read-whats-next-resources-section">
						<h2>Resources</h2>
						<div className="read-whats-next-resources-dropdowns">
							<div className="read-whats-next-dropdown">
								<button
									className="student-dropdown-button"
									onClick={() => setStudentDropdownOpen(!studentDropdownOpen)}
								>
									<h3>For Students</h3>
									<span className="dropdown-arrow">&#x25BC;</span>
								</button>
								{studentDropdownOpen && (
									<>
										<h5>Interview Prep</h5>
										<ul>
											<li>
												<a href="https://www.simplilearn.com/tutorials/cyber-security-tutorial/cyber-security-interview-questions">
													Top 80+ Cybersecurity Interview Questions and Answers for 2023
												</a>
											</li>
										</ul>
										<h5>Top Certifications</h5>
										<ul>
											<li>
												<a href="https://www.infosecinstitute.com/skills/roles/penetration-tester/?utm_medium=PPC&utm_campaign=Google%20AdWords%20Branded&utm_source=GoogleAds&utm_keyword=&utm_content=554890325926&utm_term=&matchtype=&network=g&device=c&gclid=CjwKCAiArY2fBhB9EiwAWqHK6o1rYWDWxZ8ya85fZ9e7UAtH02ak9CoVcfRJJvvv04_WQV9cLHYKRBoC6t8QAvD_BwE">
													Infosec Institute Certified Penetration Tester (CPT)
												</a>
											</li>
											<li>
												<a href="https://www.giac.org/certifications/penetration-tester-gpen/">
													Global Information Assurance Certification (GIAC) Penetration Tester (GPEN)
												</a>
											</li>
											<li>
												<a href="https://www.offensive-security.com/courses/pen-200/?utm_campaign=Google-Ads_Brand_PPC_PWK_2020_Update_NAM&utm_medium=cpc&utm_source=google&utm_content=crid=593937234388&utm_term=kwd=oscp:cid-9248778671:kwd-314572348942:dev-c:mt-e&gclid=CjwKCAiA85efBhBbEiwAD7oLQGQBJ1PBNOM2RY_wROqoUb_0mTIxUIVDHpcrE2kXausS_C-IgiOiahoCx_oQAvD_BwE">
													Offensive Security OSCP Certification
												</a>
											</li>
										</ul>
									</>
								)}
							</div>
							<div className="read-whats-next-dropdown">
								<button
									className="student-dropdown-button"
									onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
								>
									<h3>For Business</h3>
									<span className="dropdown-arrow">&#x25BC;</span>
								</button>
								{businessDropdownOpen && (
									<ul>
										<li>
											<a href="https://www.forbes.com/advisor/business-insurance/cyber-liability-insurance/">
												Learn about Cyber Liability Insurance.
											</a>
										</li>
										<li>
											<a href="https://www.ftc.gov/business-guidance/blog/2019/12/free-vulnerability-scanning-your-business">
												Get a free vulnerability scan for your business.
											</a>
										</li>
									</ul>
								)}
							</div>
						</div>
					</div>

					<div className="read-whats-next-news-section">
						<h2>Recent News</h2>
						<div className="read-whats-next-news-items">
							<div className="read-whats-next-news-item">
								<img src="../images/wsj.png" alt="WSJ Cybersecurity News" />
								<div className="read-whats-next-news-item-details">
									<div className="read-whats-next-news-item-date">February 27, 2023</div>
									<div className="read-whats-next-news-item-title">Cybersecurity Threats on the Rise: How to Protect Your Business</div>
									<a href="https://www.wsj.com/pro/cybersecurity?mod=nav_top_subsection" className="read-whats-next-news-item-link">Read more</a>
								</div>
							</div>
							<div className="read-whats-next-news-item">
								<img src="../images/bbc.png" alt="BBC News" />
								<div className="read-whats-next-news-item-details">
									<div className="read-whats-next-news-item-date">February 26, 2023</div>
									<div className="read-whats-next-news-item-title">UK Businesses Facing Increased Cyber Threats, Warns National Cyber Security Centre</div>
									<a href="https://www.bbc.com/news/topics/cz4pr2gd85qt" className="read-whats-next-news-item-link">Read more</a>
								</div>
							</div>
							<div className="read-whats-next-news-item">
								<img src="../images/hackernews.png" alt="The Hacker News" />
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
		</div>
	);
};

export default ReadWhatsNextPage;