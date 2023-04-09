import React from "react";
import BaseTemplate from '../templates/BaseTemplate';
import FlipOverCardHolder from '../fragments/intermediate/FlipOverCardHolder';


const TestPage = () => {
	return (
		<BaseTemplate>
			<div className={'force-absolute-center'}>
				<FlipOverCardHolder />
			</div>
		</BaseTemplate>
	);
}

export default TestPage;
