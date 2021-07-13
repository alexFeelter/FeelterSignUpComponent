import { useState } from 'react';
import { Link } from "react-router-dom";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { matchActiveUrl } from "../../services/RouterService"

export const AccSettings = ({ match, data }) => {
	const [uploadImage, setUploadImage] = useState(null)
	
	const handleChange = event => {
		setUploadImage(URL.createObjectURL(event.target.files[0])) 
	}

	const options = data.industries
	const defaultOption = options[0];

	return <div className="accSettings">
		<h2>Account settings</h2>
		<section>
			<nav className="settingsTabContainer">
				<Link className={ "navTabLink " + (matchActiveUrl(`${ match.url }/profile`) ? 'active' : '') } to={ `${match.url}/profile` }>Profile settings</Link>
			</nav>
			<form className="accSettingsForm">
				<div>
					<h3>Profile picture</h3>
					<div className="changePicContainer">
						<img src={ uploadImage ? uploadImage : '/clients_data/defaultProfPic.png' } alt="" />
						<div className="changePicLabelAction">
							<h5>Upload your picture</h5>
							<p>The picture must be at least 300 pixels wide and high.</p>
							<label htmlFor="imageUpload" className="custSubmit">
								<input type="file" onChange={ handleChange } id="imageUpload" accept="image/*" hidden />
								Change picture</label>
						</div>
					</div>
				</div>
				<div>
					<h3>Personal info</h3>
					<div className="updPersInfoInputs">
						<input type="text" id="persInfName" placeholder="" />
						<label htmlFor="persInfName">Full Name</label>
					</div>
					<div className="updPersInfoInputs">
						<input type="email" id="persInfEmail" placeholder="" />
						<label htmlFor="persInfName">Email</label>
					</div>
					<div className="updPersInfoInputs">
						<input type="text" id="persInfOrg" placeholder="Organization" disabled />
						<label htmlFor="persInfName">Organization</label>
					</div>
					<div className="updPersInfoInputs">
						<Dropdown options={options} value={defaultOption} placeholder="Select an option" />
					</div>
				</div>
				<input type="submit" className="custSubmit" value="Update" />
			</form>
		</section>
	</div>
}