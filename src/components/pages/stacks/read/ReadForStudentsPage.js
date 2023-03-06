import React from 'react';
import '../read/ReadStudents.css';


const ReadForStudentsPage = () => {
	return (
		<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
			<h1>All About Penetration Testing</h1>

			<div className="pen-testing-descr">
				<h2>What is Penetration Testing?</h2>
				<p>Penetration testing is a cybersecurity technique that organizations can
					use to identify vulnerabilities and evaluate the security of their organization.
					Penetration testing is known as a form of ethical hacking where testers conduct a simulated
					attack to test their servers, networks, applications, etc. to find any potential weaknesses.
					A common analogy that is used to describe pen testing is seeing if you can break into your own
					house to detect flaws in your security.</p>
			</div>
			<div className="specializations">
				<h2>Different Specializations of Penetration Testing</h2>
				<ul>
					<li>Network Penetration Testing</li>
					<li>Physical Penetration Testing</li>
					<li>Web Application Penetration Testing</li>
					<li>Wireless Network Penetration Testing</li>
				</ul>
			</div>
			<div className="benefits">
				<h2>Benefits of Penetration Testing</h2>
				<img src='../images/pentest-benefits.jpg'
				alt='circular diagram with 7 benefits of pen testing'/>
			</div>
		</div>

	);
}

export default ReadForStudentsPage;
