import React from 'react';
import './styleFormSignUp.css';

import { FeelterInput } from "../feelterInput/FeelterInput"

export const FormSignUp = props => {
	
	return <form>
		<FeelterInput id="fullName" htmlFor="fullName" type="text" placeholder="Enter your full name" label="Full Name**"/>
		<FeelterInput id="webDomain" htmlFor="webDomain" type="url" placeholder="Enter your web domain" label="Web Domain*" />
	</form>
}