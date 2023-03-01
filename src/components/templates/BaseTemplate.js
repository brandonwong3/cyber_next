import React from 'react';



const BaseTemplate = ({children, props}) => {
	return (
		<div className={"flex flex-1 flex-grow container-fluid"} {...props}>

			{children}
		</div>
	);
}

export default BaseTemplate;
