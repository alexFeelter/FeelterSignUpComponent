import React from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';

import { FeelterInput } from "../feelterInput/FeelterInput"
import './styleFormSignUp.css';

export interface IFormValues {
    email: string,
	password: string
}

export interface InputProps { 
    htmlFor: string,
    label: string,
    id: string,
    type: string,
    placeholder: string,
    register: UseFormRegister<IFormValues>
}

export const FormSignUp = props => {

	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm<IFormValues>();
	
	return <form>
		<FeelterInput id="fullName" htmlFor="fullName" type="text" placeholder="Enter your full name" label="Full Name**" register={ register } />
		<FeelterInput id="webDomain" htmlFor="webDomain" type="url" placeholder="Enter your web domain" label="Web Domain*" register={ register } />
		<h2>Product Categories</h2>
		<div>checkboxes</div>
		<FeelterInput id="webDomain" htmlFor="webDomain" type="email" placeholder="Enter your email" label="Company email *" register={ register } />
	</form>
}