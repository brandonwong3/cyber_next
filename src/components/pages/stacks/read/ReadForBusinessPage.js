import React from 'react';
import '../read/businesspage.css';

const ReadForBusinessPage = () => {
	return (
		<div className="business-container">
			<h1 className="business-title">Fortify Your Business</h1>

			<div className="business-content">
				<div className="business-section">
					<div className="business-dropdowns-container">

						<div className="business-dropdown blue-rectangle">
							<button className="business-dropdown-button">How to Implement Cybersecurity</button>
							<div className="business-dropdown-content">
								<ul className="business-ul">
									<li className="business-li">
										<strong>Cyber Insurance:</strong> This resource can be effective by
										serving means of transferring cyber risk away from the business to
										the insurance company and therefore mitigating loss - data breach
										coverage vs general cyber liability insurance.
									</li>
									<li className="business-li">
										<a href="https://www.nist.gov/itl/smallbusinesscyber/planning-guides/nist-cybersecurity-framework">
											The NIST Cybersecurity Framework 
										</a>
										&nbsp;provides standards that will guide businesses of all sizes to understand and treat the majority of cyber risks, establishing a foundation to assess risks unique to your enterprise. .
									</li>
									<li className="business-li">
										<strong>Offsite Back-ups</strong> A good business continuity plan includes keeping back ups of data separate from main network (cloud or different physical location).
									</li>
									<li className="business-li">
										<strong>Technology Solutions:</strong> installing firewalls, anti-virus, anti-spyware, patching management.
									</li>
									<li className="business-li">
										<strong>Business procedural polices: </strong> Changing password every 90 days, using two factor-authentication (2FA), annual cyber security training.
									</li>
									<li className="business-li">
										<strong>Additional Laws & Regulations: </strong> complying with California Consumer Privacy Act (CCPA) and General Data Protection Regulation (GDPR).
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="business-dropdown blue-rectangle">
						<button className="business-dropdown-button">Reasons to Implement Cybersecurity</button>
						<div className="business-dropdown-content">
							<ul className="business-ul">
								<li className="business-li">
									<strong>Increased vulnerability: </strong>
									<a href="https://www.fcc.gov/communications-business-opportunities/cybersecurity-small-businesses">
											Small Businesses
										</a> are often seen as easier targets for cyberattacks because they tend to have fewer resources and less technical expertise.
								</li>
								<li className="business-li">
								<strong>Data breach consequences:</strong> 
								<a href="https://www.ibm.com/security/digital-assets/cost-data-breach-report/#/">
											Data breaches
										</a> can lead to financial losses, damage to reputation, and loss of customer trust, which can be particularly devastating for small businesses.								</li>
								<li className="business-li">
								<strong>Regulatory compliance:</strong> Small businesses are subject to the same legal and 
								<a href="https://www.ftc.gov/tips-advice/business-center/guidance/protecting-personal-information-guide-business">
											regulatory
										</a> requirements related to privacy and data protection as larger companies. Inadequate security measures can result in non-compliance, leading to fines and penalties.</li>
								<li className="business-li">
								<strong>Supply chain attacks:</strong> Small businesses can be used as an entry point for cybercriminals to gain access to larger companies through supply chain attacks. Ensuring your business has robust cybersecurity measures in place can help prevent such attacks and protect your partners.								</li>
								<li className="business-li">
								<strong>Business continuity:</strong> Cyberattacks can lead to downtime and disrupt business operations. Implementing cybersecurity measures can help maintain business continuity and ensure that you can recover quickly from any incidents.								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="video-section">
                    <div className="business-video-container blue-rectangle">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/kGPCUvZZ6FM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h2 className="video-title">Cybersecurity for Small Business</h2>
                    </div>
                </div>

			</div>


			<div className="business-image gray-box">
				<img className="business-img" src="../images/business_stat.png" alt="business security stats" />
			</div>
		</div>
	);
};


export default ReadForBusinessPage;