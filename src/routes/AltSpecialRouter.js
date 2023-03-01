import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {useAuth} from "../context/AuthContext";


/**
 * @name AltSpecialRouter
 * This is a special router that can be used to protect routes.
 * By default, the route is protected, meaning authentication is required.
 * If the route is not protected, then the user does not need to be logged in.
 * If the route is protected, then the user must be logged in, or else they will be redirected to the login page.
 * @param {boolean} isAuthorizationRequired - If true, then the user must be logged in to view the route. Default is true.
 * @param {string} path - The path of the route. Always starts with a forward slash.
 * @param {boolean} isAuthenticated - If true, then the user is logged in. Default is false.
 * @param component - The component to render when the route is matched.
 * @param props - The props passed to the Route component.
 * @returns {JSX.Element}
 * @constructor - This is a functional component.
 */
const AltSpecialRouter = ({isAuthorizationRequired = true, path, component, props}) => {

	const {currentUser} = useAuth();

	const isAuthenticated = React.useMemo(() => {
		return currentUser && Object.keys(currentUser).length > 0;
	}, [currentUser]);

	return (
		(isAuthenticated || !isAuthorizationRequired) ? (
			<Route component={component} path={path} {...props} />
		) : (
			<Redirect to={"/login"} />
		)
	)

}

export default AltSpecialRouter;
