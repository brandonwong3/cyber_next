import React from 'react';
import BaseTemplate from '../templates/BaseTemplate';
import {Link, Redirect} from 'react-router-dom';
import {useAuth} from "../../context/AuthContext";
import person from "../../assets/images/person.png";
import lock from "../../assets/images/lock.png";
import envelope from "../../assets/images/envelope.png";

const SignupPage = () => {

	const {signup, currentUser} = useAuth();

	const [email, setEmail] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");

	const [error, setError] = React.useState("");

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			setError("");

			// Make sure the passwords match
			if (password !== confirmPassword) {
				setError("Passwords do not match");
				return;
			}

			if (password.length < 6) {
				setError("Password must be at least 6 characters");
				return;
			}

			// Check if email is valid
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
				setError("Email is not valid");
				return;
			}

			// Check if username contains any spaces or special characters
			if (!/^[a-zA-Z0-9]+$/.test(username)) {
				setError("Username must only contain letters and numbers");
				return;
			}

			if (username.length < 6) {
				setError("Username must be at least 6 characters");
				return;
			}

			await signup(email, username, password);
		} catch (error) {
			setError(error.message);
		}
	}

	if (currentUser && Object.keys(currentUser).length > 0) {
		return <Redirect to={"/home"} />;
	}


	return (
		<BaseTemplate>

			<div className={"flex flex-1 flex-grow justify-center items-center align-center"}>
				<div className={"flex rounded-lg bg-md-gray p-4 auth-form"}>

					<h1 className={"text-center mb-4"}>Sign Up</h1>

					{
						error && <div className={"alert flex flex-row alert-danger text-center align-self-center mx-auto flex-shrink"} role={'alert'}>{error}</div>
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
								<span className="input-group-text remove-bootstrap-inline-text-input-icon-styling" id="basic-addon1"><img src={envelope} alt={"Envelope Icon"} height={24} width={24} /></span>
							</div>
							<input type="text" value={email} className="form-control" placeholder="Email Address" aria-label="Email" aria-describedby="basic-addon1" onChange={(event) => setEmail(event.target.value)} />
						</div>

						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text remove-bootstrap-inline-text-input-icon-styling" id="basic-addon1"><img src={lock} alt={"Lock Icon"} height={24} width={24} /></span>
							</div>
							<input type="password" value={password} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={(event) => setPassword(event.target.value)} />
						</div>


						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text remove-bootstrap-inline-text-input-icon-styling" id="basic-addon1"><img src={lock} alt={"Lock Icon"} height={24} width={24} /></span>
							</div>
							<input type="password" value={confirmPassword} className="form-control" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="basic-addon1" onChange={(event) => setConfirmPassword(event.target.value)} />
						</div>
							<small id="passwordHelpBlock" className="form-text text-muted flex-wrap text-xxs">
								Your password must be at least 6 characters long.
								{/*, <br/>contain a mix of lowercase and uppercase letters,<br/> at least one number,<br/> and at least one special character.*/}
							</small>

									<button type="submit" className="btn btn-primary btn-sm mt-2 ">Submit</button>
					</form>


							<Link className="mx-auto mt-4 remove-text-decoration text-center text-black text-sm" to={"/login"}>Already have an account? Sign In</Link>

				</div>
			</div>
		</BaseTemplate>
	)
}

export default SignupPage;
