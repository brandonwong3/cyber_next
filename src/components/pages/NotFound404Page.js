import React from "react";
import BaseTemplate from '../templates/BaseTemplate';


const NotFound404Page = () => {
	return (
		<BaseTemplate>
			<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"}>
				<h1 className={"mt-10"}>404 Page Not Found</h1>
				<p>We're sorry, cannot find page. Please try another page.</p>
			</div>
		</BaseTemplate>
	);
}

export default NotFound404Page;
