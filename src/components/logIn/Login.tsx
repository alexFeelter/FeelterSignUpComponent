import React, { useState } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';

import { FeelterInput } from "../signUp/formSection/feelterInput/FeelterInput"

import { IFormValues, InputProps } from "../signUp/formSection/formSignUp/FormSignUp"

import './login.css';

export const Login = () => {

	const [isOverlayShown, setOverlow] = useState(false)

	const toogleOverflow = () => {
		setOverlow(!isOverlayShown)
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm<IFormValues>();

	return <form>
		<div className="loginPage">
			<h3 className="flexCenter">Login to Feelter</h3>
			<div className="svgOrgContainer">
				<div className="svgOrg">
					<a href="#">
						<img src="./svgOrgs/googleOrg.svg" alt=""/>
					</a>
				</div>
				<div className="svgOrg">
					<a href="#">
						<img src="./svgOrgs/wordpressOrg.svg" alt=""/>
					</a>
				</div>
				<div className="svgOrg">
					<a href="#">
						<img src="./svgOrgs/facebookOrg.svg" alt=""/>
					</a>
				</div>
				<div className="svgOrg"><a href="#">
					<img src="./svgOrgs/linkdinOrg.svg" alt=""/></a></div>
				<div className="svgOrg">
					<a href="#">
						<img src="./svgOrgs/twitterOrg.svg" alt=""/>
					</a>
				</div>
			</div>
			<FeelterInput id="emailCompLogin" htmlFor="emailCompLogin" type="email" placeholder="Enter your email" label="Email" register={ register } />
			<FeelterInput id="passLogin" htmlFor="passLogin" type="password" placeholder="Enter your password" label="Password" register={ register } />
			<div className="flexSpaceBetween">
				<div className="checkboxCont">
					<input type="checkbox" id="rememberMe" name="fruit-1" value={ "Remember me" } />
					<label htmlFor="rememberMe">{ "Remember me" }</label>
				</div>
				<span className="errorStyle">Forgot Password?</span>
			</div>
			<input type="submit" value="Create Account" />
			<div className="flexSpaceBetween">
				<span>Already have an account? </span>
				<span onClick={ toogleOverflow }>Sign Up</span>
			</div>
		</div>
		<div id="overlay"></div>
	</form>
}