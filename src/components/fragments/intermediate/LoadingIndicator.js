import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import {ThreeDots} from 'react-loader-spinner';

const LoadingIndicator = (props) => {
	const { promiseInProgress } = usePromiseTracker();
	return (
		promiseInProgress &&
		<div
			style={{
				width: "100%",
				height: "100",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<ThreeDots props={props} color="#2BAD60" radius={"50"} />
		</div>
	);
}

export default LoadingIndicator;
