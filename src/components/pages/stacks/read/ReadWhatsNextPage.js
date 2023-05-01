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
					<h1>What's Next?</h1>
				</div>
				<p className="page-description">
					Wondering what's next on your cybersecurity journey? Explore resources below to continue your cybersecurity journey as either a student or a small business. You may also revisit and stay up to date with recent cyber news and developments.
				</p>


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
										<div className="dropdown-content">
											<h5><strong>Learn the Fundamentals</strong></h5>
											<li> <u>Cybersecurity Basics</u> - A free&nbsp;
												<a href="https://www.cybrary.it/course/introduction-to-it-and-cybersecurity/?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=5080772077&hsa_cam=11832322279&hsa_grp=115112475356&hsa_ad=641419668121&hsa_src=g&hsa_tgt=dsa-864242010164&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&url=https://ad.atdmt.com/s/go;adv=11067245340923;ec=11067246325064;c.a=11832322279;s.a=google;p.a=11832322279;as.a=115112475356;qpb=1;?bidkw=defaultkeyword&dvc=c&h=https://www.cybrary.it/course/introduction-to-it-and-cybersecurity/&gclid=CjwKCAjwo7iiBhAEEiwAsIxQET4pRgQg5zO-eolqVZy16nE4xVHlZCnDzfGXiDXlVlnDMhVeq3T-CxoCLmAQAvD_BwE">
													course
												</a> that covers the fundamentals of cybersecurity.
											</li>
											<li><u>Codecademy's Learn Cybersecurity</u> - Learn cybersecurity&nbsp;
												<a href="https://www.codecademy.com/learn/introduction-to-cybersecurity">
													principles
												</a>  and practices with this interactive course.
											</li>
											<li><u>Coursera's Cybersecurity Specialization </u>- A series of courses covering various cybersecurity&nbsp;
												<a href="https://www.coursera.org/specializations/cyber-security">
												topics 
												</a> from the University of Maryland.
											</li>
											<li><u>National Initiative for Cybersecurity Careers and Studies (NICCS)</u>-  A comprehensive cybersecurity education and training&nbsp;
												<a href="https://niccs.cisa.gov/">
													resource
												</a>.
											</li>
											<h5><strong>Interview Prep</strong></h5>
											<ul>
												<li> Top 80+ Cybersecurity Interview Questions and Answers for&nbsp;
													<a href="https://www.simplilearn.com/tutorials/cyber-security-tutorial/cyber-security-interview-questions">
														2023
													</a>
												</li>
												<li><u>CyberSeek Pathway </u> - A&nbsp;
													<a href="https://www.cyberseek.org/pathway.html">
													tool
													</a>  to help you navigate and plan your cybersecurity career.
												</li>
											</ul>
											<h5><strong>Top Certifications</strong></h5>
											<ul>
											<li><u>ISC² CISSP Certification </u> - A widely respected&nbsp;
													<a href="https://www.isc2.org/Certifications/CISSP">
													certification
													</a>  for cybersecurity professionals with managerial roles.
												</li>
												<li> Infosec Institute Certified Penetration Tester
													<a href="https://www.infosecinstitute.com/skills/roles/penetration-tester/?utm_medium=PPC&utm_campaign=Google%20AdWords%20Branded&utm_source=GoogleAds&utm_keyword=&utm_content=554890325926&utm_term=&matchtype=&network=g&device=c&gclid=CjwKCAiArY2fBhB9EiwAWqHK6o1rYWDWxZ8ya85fZ9e7UAtH02ak9CoVcfRJJvvv04_WQV9cLHYKRBoC6t8QAvD_BwE">
														(CPT)
													</a>
												</li>
												<li> Global Information Assurance Certification
													<a href="https://www.giac.org/certifications/penetration-tester-gpen/">
														(GIAC) Penetration Tester (GPEN)
													</a>
												</li>
												<li> Offensive Security OSCP&nbsp;
													<a href="https://www.offensive-security.com/courses/pen-200/?utm_campaign=Google-Ads_Brand_PPC_PWK_2020_Update_NAM&utm_medium=cpc&utm_source=google&utm_content=crid=593937234388&utm_term=kwd=oscp:cid-9248778671:kwd-314572348942:dev-c:mt-e&gclid=CjwKCAiA85efBhBbEiwAD7oLQGQBJ1PBNOM2RY_wROqoUb_0mTIxUIVDHpcrE2kXausS_C-IgiOiahoCx_oQAvD_BwE">
														Certification
													</a>
												</li>
												<li><u>EdX's Cybersecurity Fundamentals</u> - A professional&nbsp;
													<a href="https://www.edx.org/course/cybersecurity-fundamentals">
													certificate
													</a> program covering the core concepts of cybersecurity.
												</li>
												<li><u>CompTIA Security+ Certification</u> - A globally recognized&nbsp;
													<a href="https://www.comptia.org/certifications/security">
													certification
													</a> for cybersecurity professionals.
												</li>
											</ul>
										</div>
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
									<>
									<div className="dropdown-content">
										<ul>
										<li><u>SANS Institute's Security Awareness Training</u> - Training&nbsp;
													<a href="https://www.sans.org/security-awareness-training/">
													materials
													</a> to help businesses educate their employees on cybersecurity best practices.
												</li>
												<li><u>Microsoft's Security Guidance for Small Businesses</u> - Security resources and&nbsp;
													<a href="https://www.microsoft.com/en-us/store/b/microsoft-small-business?activetab=pivot:what%27strendingtab">
													tools
													</a>  from Microsoft tailored for small businesses.
												</li>
											<li>	Learn about Cyber Liability&nbsp;
												<a href="https://www.forbes.com/advisor/business-insurance/cyber-liability-insurance/">
													Insurance.
												</a>
											</li>
											<li> Get a free vulnerability&nbsp;
												<a href="https://www.ftc.gov/business-guidance/blog/2019/12/free-vulnerability-scanning-your-business">
													scan
												</a> for your business.
											</li>
											<li><u>Small Business Cybersecurity Corner (NIST)</u> - Resources and&nbsp;
													<a href="https://www.nist.gov/itl/smallbusinesscyber">
													guidelines 
													</a> from NIST specifically for small businesses.
												</li>
												<li><u>Global Cyber Alliance (GCA) Cybersecurity Toolkit for Small Business</u> - A free&nbsp;
													<a href="https://gcatoolkit.org/smallbusiness/">
													toolkit 
													</a>  providing practical tools and guidance for small businesses.
												</li>

										</ul>
									</div>
									</>
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
									<a href="https://thehackernews.com/" className="news-item-link">Read more</a>
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