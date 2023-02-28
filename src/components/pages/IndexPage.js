import React from "react";
import BaseTemplate from '../templates/BaseTemplate';


const IndexPage = () => {
	return (
		<BaseTemplate>
			<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
				<h1>Welcome to PenSec!</h1>
				<p>An educational and informative website for small businesses and students
					to learn more about penetration testing. With easy to follow guided demos and
					resources on the different areas of pen testing to better secure your business, PenSec
					has guidance for everyone!</p>
			</div>
			<div className="teaser">
				<div className="contents">
					<div className="title row">
						<h2>Learn About:</h2>
					</div>
					<div className="container">
						<div className="box-container">
							<div className="box">
								<img className='icon' src='https://static.thenounproject.com/png/589389-200.png' alt='security in business' />
							</div>
							<p className="caption">Securing Your Business</p>
						</div>
						<div className="box-container">
							<div className="box">
							<img className='icon' src='https://d33wubrfki0l68.cloudfront.net/f5f8ace2056c06f0467ee81a47ed8546a1f2c308/bb881/static/penetration_testing_secora-7844f476d65cdd635467a6fc43fcef01.png' alt='computer with bug magnified' />
								</div>
							<p className="caption">What Pen Testing Is</p>
						</div>
						<div className="box-container">
							<div className="box">
								<img className='icon' src='https://hackno.net/wp-content/uploads/2021/11/Black-Box-Penetration-Testing.webp' alt='computer with bug magnified' />
							</div>
							<p className="caption">Common Vulnerabilities</p>
						</div>
					</div>
				</div>
			</div>
		</BaseTemplate>

	);
}

export default IndexPage;
