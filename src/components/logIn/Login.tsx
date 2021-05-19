import React, { useState } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';

import { Link } from "react-router-dom";

import { FeelterInput } from "../signUp/formSection/feelterInput/FeelterInput"

import { IFormValues, InputProps } from "../signUp/formSection/formSignUp/FormSignUp"

import './login.css';
import "../signUp/formSection/formSignUp/styleFormSignUp.css"

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
			<h2 className="flexCenter">Login to Feelter</h2>
			<div className="svgOrgContainer">
				<div className="svgOrg gridSign1">
					<a href="#">
						<img src="./svgOrgs/googleOrg.svg" alt=""/>
					</a>
				</div>
				<div className="svgOrg gridSign2">
					<a href="#">
						<img src="./svgOrgs/wordpressOrg.svg" alt=""/>
					</a>
				</div>
				<div className="svgOrg gridSign3">
					<a href="#">
						<img src="./svgOrgs/facebookOrg.svg" alt=""/>
					</a>
				</div>
				<div className="svgOrg gridSign4"><a href="#">
					<img src="./svgOrgs/linkdinOrg.svg" alt=""/></a></div>
				<div className="svgOrg gridSign5">
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
			<div className="flexCenter haveAccSign">
				<span className="labelSign">Already have an account?</span>
				<Link to="/">Sign Up</Link>
			</div>
		</div>
		<div id="overlay"></div>
	</form>
}