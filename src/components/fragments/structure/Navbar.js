import React from 'react';
import { useAuth } from "../../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import logoutArrow from '../../../assets/images/logout-arrow.png';
// import searchGlass from '../../../assets/images/search.png'


const Navbar = () => {

	const { currentUser, logout } = useAuth();
	const history = useHistory();

	const handleLogout = React.useCallback(async () => {
		await logout();
		history.push("/");
	}, [history, logout]);


	return (

		<nav className="navbar navbar-expand-sm navbar-light bg-pastel-green w-full flex flex-grow flex-row">
			<div className="container-fluid w-full flex flex-grow flex-row justify-between">
				<div className={"flex flex-row justify-start items-center"}>
					<img alt={"Navbar Brand"} src={"https://cdn-icons-png.flaticon.com/512/108/108181.png"} height={20} width={20} className={"w-10 h-10 mr-1"} />
					<Link to={"/"} className="navbar-brand text-white font-bold font-italic"><u>PenSec</u></Link>
				</div>

				<div className={"navbar-nav"}>
					<NavDropdownSection />
					{
						(currentUser && Object.keys(currentUser).length > 0) ?
						<img onClick={async () => await handleLogout()} alt={"Logout button"} src={logoutArrow} height={20} width={20} className={"cursor-hover ml-1"} /> :
                        <Link to={"/login"} className="nav-link active text-white font-italic mr-2" aria-current="page">Log In</Link>
					}
				</div>


			</div>
		</nav>
	)
}


const NavDropdownSection = () => {

	return (
		<>
			{/*	READ */}
			<div className="mr-2" id="read-dropdown">
				<ul className="navbar-nav">
					<li className="nav-item dropdown">
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a className="nav-link dropdown-toggle nav-link active text-white font-italic" id="read-dropdown-menu-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Read
						</a>
						<ul className="dropdown-menu" aria-labelledby="read-dropdown-menu-link">
							<li><Link className="dropdown-item" to={"/read/for-business"}>For Business</Link></li>
							<li><Link className="dropdown-item" to={"/read/for-students"}>For Students</Link></li>
							<li><Link className="dropdown-item" to={"/read/whats-next"}>What's Next</Link></li>
						</ul>
					</li>
				</ul>
			</div>

			{/* LEARN */}
			<Link className={"nav-link active text-white font-italic mr-2"} to={"/learn"}>Learn</Link>

			{/*	PRACTICE */}
			<div className="mr-2" id="practice-dropdown">
				<ul className="navbar-nav">
					<li className="nav-item dropdown">
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a className="nav-link dropdown-toggle nav-link active text-white font-italic" id="practice-dropdown-menu-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Practice
						</a>
						<ul className="dropdown-menu dr-right-override" aria-labelledby="practice-dropdown-menu-link">
							<li><Link className="dropdown-item" to={"/practice/sql-injection"}>SQL Injection</Link></li>
							<li><Link className="dropdown-item" to={"/practice/cross-site-scripting"}>Cross-Site Scripting</Link></li>
							<li><Link className="dropdown-item" to={"/practice/broken-auth"}>Broken Auth</Link></li>
						</ul>
					</li>
				</ul>
			</div>

		</>
	)

}


export default Navbar;

// OLD NAVBAR CODE
// <div className="navbar-nav">
// 					{
// 						(currentUser && Object.keys(currentUser).length > 0) ? (
// 							<div className={"flex flex-row flex-shrink justify-end items-center"}>
// 								<Link to={"/about-us"} className="nav-link active text-white font-italic mr-2" aria-current="page">About Us</Link>
// 								<Link to={"/our-services"} className="nav-link active text-white font-italic mr-2" aria-current="page">Our Services</Link>
// 								<img onClick={async () => await handleLogout()} alt={"Logout button"} src={logoutArrow} height={20} width={20} className={"cursor-hover ml-1"} />
// 							</div>
// 						): (
// 							<div className={"flex flex-row flex-shrink justify-end items-center"}>
// 								<Link to={"/about-us"} className="nav-link active text-white font-italic mr-2" aria-current="page">About Us</Link>
// 								<Link to={"/our-services"} className="nav-link active text-white font-italic mr-2" aria-current="page">Our Services</Link>
// 								<Link to={"/login"} className="nav-link active text-white font-italic mr-2" aria-current="page">Log In</Link>
// 								<Link to={"/search"} className="nav-link active text-white font-italic flex flex-row justify-end items-center" aria-current="page">
// 									Search
// 									<span className={"w-2 flex flex-row"} />
// 									<img onClick={() => window.location.assign('/search')} alt={"Logout button"} src={searchGlass} height={16} width={16} className={"cursor-hover ml-2"} />
// 								</Link>
// 							</div>
// 						)
// 					}
// 				</div>
