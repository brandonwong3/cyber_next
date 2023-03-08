import React from 'react';
import '../read/businesspage.css';

const ReadForBusinessPage = () => {
	return (
		<div className="business-container">
			<h1 className="business-title">Fortify Your Business</h1>

			<div className="business-content">
				<div className="Implement-quadrant1">
					<div className="business-dropdown">
						<button tabindex="0" className="business-dropdown-button">How to Implement Cybersecurity</button>
						<div tabindex="0" className="business-dropdown-content">
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
									provides standards that will guide businesses of all sizes to understand and treat the majority of cyber risks, establishing a foundation to assess risks unique to your enterprise. .
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
					<div className="business-dropdown">
						<button className="business-dropdown-button">Reasons to Implement Cybersecurity</button>
						<div className="business-dropdown-content">
							<ul className="business-ul">
								<li className="business-li">
									<strong>With fewer resources and less technical expertise,</strong>{" "}
									small businesses are seen as easier targets for cyberattacks.
								</li>
								<li className="business-li">
									“There are two types of companies, those who have been hacked and those who do not know they have been targeted yet” - Cisco CEO John Chambers
								</li>
								<li className="business-li">
									A small enterprise -cyber event can cascade against their relatively smaller technology architecture before they conjure an adequate response.								</li>
								<li className="business-li">
									Small businesses are subject to the same legal and regulatory requirements related to privacy/data protection. Inadequate security means non-compliance, leading to the company being vulnerable to penalties.
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="video-quadrant2">
					<h5 className="business-h2">Cybersecurity for Small Business</h5>
					<div className="business-video-container">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/kGPCUvZZ6FM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
				</div>

				<div className="stats-quadrant4">
					<div className="business-image">
						<img className="business-img" src="../images/business_stat.png" alt="business security stats" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReadForBusinessPage;