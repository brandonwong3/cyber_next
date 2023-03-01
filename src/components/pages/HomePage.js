import React from 'react';
import {useAuth} from "../../context/AuthContext";

const HomePage = () => {

	const {currentUser} = useAuth();

	return (
		<div className={"container"}>
			<h1>Home Page</h1>
			<p>{currentUser['email']}</p>
		</div>
	);
}

export default HomePage;
