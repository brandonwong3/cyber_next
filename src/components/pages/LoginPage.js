import React from 'react';
import {Link, Redirect} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import BaseTemplate from '../templates/BaseTemplate';
import person from '../../assets/images/person.png';
import lock from '../../assets/images/lock.png';


const LoginPage = () => {

	const {currentUser, signInWithUsernameAndPassword} = useAuth();

	// const [email, setEmail] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	const [error, setError] = React.useState("");

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();

			await signInWithUsernameAndPassword(username, password);

		} catch (error) {
			setError(error.message);
		}
	};

	React.useEffect(() => {
		window.addEventListener("unhandledrejection", function(promiseRejectionEvent) {
			setError(promiseRejectionEvent.reason.message);
		});
	}, [])

	if (currentUser && Object.keys(currentUser).length > 0) {
		return <Redirect to={"/home"} />;
	}

	return (
		<BaseTemplate>

			<div className={"flex flex-1 flex-grow justify-center items-center align-center"}>
				<div className={"flex rounded-lg bg-md-gray p-4 auth-form"}>

					<h1 className={"text-center mb-4"}>Sign In</h1>

					{
						error && <div className={"alert flex flex-row flex-shrink alert-danger text-center align-self-center mx-auto"} role={'alert'}>{error}</div>
					}

					<form className={"mx-auto flex justify-center flex-grow flex-1 align-center"} onSubmit={event => handleSubmit(event)}>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text remove-bootstrap-inline-text-input-icon-styling" id="basic-addon1"><img src={person} alt={"User Icon"} height={24} width={24} /></span>
							</div>
							<input type="text" value={username} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(event) => setUsername(event.target.value)} />
						</div>


						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text remove-bootstrap-inline-text-input-icon-styling" id="basic-addon1"><img src={lock} alt={"Lock Icon"} height={24} width={24} /></span>
							</div>
							<input type="password" value={password} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={(event) => setPassword(event.target.value)} />
						</div>

									<button type="submit" className="btn btn-primary btn-sm mt-2 ">Submit</button>

					</form>

					<Link className="mx-auto mt-4 remove-text-decoration text-center text-black text-sm" to={"/signup"}>Don't have an account? Sign Up</Link>
					<Link className="mx-auto mt-2 remove-text-decoration text-center text-black text-sm" to={"/forgot-password"}>Forgot Password?</Link>

				</div>
			</div>

		</BaseTemplate>
	);
}

export default LoginPage;
