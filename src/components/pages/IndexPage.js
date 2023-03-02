import React from "react";
import { Link } from "react-router-dom";
import BaseTemplate from '../templates/BaseTemplate';

const IndexPage = () => {
	return (
		<BaseTemplate>
			<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
				<div className='homeDescr'>
					<h1>Welcome to PenSec!</h1>
					<p>An educational and informative website for small businesses and students
						to learn more about penetration testing. With easy to follow guided demos and
						resources on the different areas of pen testing to better secure your business, PenSec
						has guidance for everyone!</p>
				</div>
			</div>

			{/* Learn About Container  */}

			<div className='learn-container'>
				<h2 className='container-heading'>Learn About:</h2>
				<div className="container">
					<div className="box-container">
						<div className="box">
							<Link to="/read/for-business">
								<img className='icon' src='https://static.thenounproject.com/png/589389-200.png' alt='security in business' />
							</Link>

						</div>
						<p className="caption">Securing Your Business</p>
					</div>
					<div className="box-container">
						<div className="box">
							<Link to="/read/for-students">
								<img className='icon' src='https://d33wubrfki0l68.cloudfront.net/f5f8ace2056c06f0467ee81a47ed8546a1f2c308/bb881/static/penetration_testing_secora-7844f476d65cdd635467a6fc43fcef01.png' alt='lock in a box with lines coming out.' />
							</Link>
						</div>
						<p className="caption">What Pen Testing Is</p>
					</div>
					<div className="box-container">
						<div className="box">
							<Link to="/learn">
								<img className='icon' src='https://hackno.net/wp-content/uploads/2021/11/Black-Box-Penetration-Testing.webp' alt='computer with bug magnified' />
							</Link>
						</div>
						<p className="caption">Common Vulnerabilities</p>
					</div>
				</div>
			</div>

			{/* Statistics Container */}
			<h2 className='stats-heading'>Why PenSec?</h2>
			<div className="stats-container" style={{ display: 'flex' }}>
				<div className='stats-box' style={{ flex: 1 }}>
					<span>43%</span>
					<p>of cyber attacks target small businesses.</p>
					<p>- Symantec </p>
				</div>
				<div className='stats-box' style={{ flex: 1 }}>
					<span>$9.4 Million</span>
					<p>was the average cost of a data breach in the US in 2022.</p>
					<p>- IBM Data</p>
				</div>
				<div className='stats-box' style={{ flex: 1 }}>
					<span>33%</span>
					<p>expected cybersecurity job market growth.</p>
					<p>- Bureau of Labor Statistics</p>
				</div>
			</div>

			{/* About Section */}
			<h2 className='about-heading'>Meet the Team:</h2>
			<div className='about-main-container'>
				<div className="about-container">
					<div className="about-box">
						<img src="../images/Anokhi.jpg" alt="Team Member Anokhi Shah" />
						<p>Anokhi Shah</p>
					</div>
				</div>
				<div className="about-container">
					<div className="about-box">
						<img src="../images/Bandhna.jpg" alt="Team Member Bandhna Bedi" />
						<p>Bandhna Bedi</p>
					</div>
				</div>
				<div className="about-container">
					<div className="about-box">
						<img src="../images/Tyrell.jpg" alt="Team Member Tyrell Garza" />
						<p>Tyrell Garza</p>
					</div>
				</div>
				<div className="about-container">
					<div className="about-box">
						<img src="../images/Ishita.jpg" alt="Team Member Ishita Saxena" />
						<p>Ishita Saxena</p>
					</div>
				</div>
				<div className="about-container">
					<div className="about-box">
						<img src="../images/Brandon.jpg" alt="Team Member Brandon Wong" />
						<p>Brandon Wong</p>
					</div>
				</div>
			</div>

			{/* Button on Bottom Page (Login/Signup) */}
			<div className="button-container">
				<Link to="/Login">
					<button>Get Started! Signup or Login Today →</button>
				</Link>
			</div>

		</BaseTemplate>

	);
}

export default IndexPage;
