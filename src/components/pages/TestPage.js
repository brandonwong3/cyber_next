import React from "react";
import BaseTemplate from '../templates/BaseTemplate';
import lock from '../../assets/images/lock.png';
import person from '../../assets/images/person.png';


const TestPage = () => {
	return (
		<BaseTemplate>
			<div className={"mx-auto flex justify-center flex-grow flex-1 align-center"} id={"test-page"}>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text remove-bootstrap-inline-text-input-icon-styling" id="basic-addon1"><img src={person} alt={"User Icon"} height={24} width={24} /></span>
					</div>
					<input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
				</div>

				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
						<div className="input-group-append">
							<span className="input-group-text" id="basic-addon2">@example.com</span>
						</div>
				</div>

				<label htmlFor="basic-url">Your vanity URL</label>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
					</div>
					<input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text">$</span>
					</div>
					<input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
						<div className="input-group-append">
							<span className="input-group-text">.00</span>
						</div>
				</div>

				<div className="input-group">
					<div className="input-group-prepend">
						<span className="input-group-text">With textarea</span>
					</div>
					<textarea className="form-control" aria-label="With textarea"></textarea>
				</div>
			</div>
		</BaseTemplate>
	);
}

export default TestPage;
