import React from "react";
import BaseTemplate from '../templates/BaseTemplate';


const DemoPage = () => {
	return (
		<BaseTemplate>
			<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
				<h1>Demo Page</h1>
				<p>Hello world</p>
			</div>
		</BaseTemplate>
	);
}

export default DemoPage;
