import React from 'react';
import './styleFormSection.css';

import { FormSignUp } from "./formSignUp/FormSignUp"


export const FormSection = (props) => {
	return <div className="formContainer">
		<h2>Start 14 Days Free Trial</h2>
		<FormSignUp />
	</div>
}