import React from "react";
import { Link } from "react-router-dom";
import BaseTemplate from '../templates/BaseTemplate';


const IndexPage = () => {
	return (
		<BaseTemplate>
			<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
				<div className='homeAbout'>
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
			<div style={{ display: 'flex' }}>
				<div style={{ flex: 1 }}>
					<img src="path/to/image1.jpg" alt="Image 1" />
					<p>Caption 1</p>
				</div>
				<div style={{ flex: 1 }}>
					<img src="path/to/image2.jpg" alt="Image 2" />
					<p>Caption 2</p>
				</div>
				<div style={{ flex: 1 }}>
					<span>3</span>
					<p>Caption 3</p>
				</div>
			</div>

		</BaseTemplate>

	);
}

export default IndexPage;
