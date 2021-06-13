// import class=useForm RlognFormContainereact, { useState } from 'react';
import axios from "axios";
import querystring from "querystring";

import { useForm } from 'react-hook-form';

import { Link } from "react-router-dom";

import { FeelterInput } from "../signUp/feelterInput/FeelterInput"
import { IFormValues } from "../signUp/formSignUp/FormSignUp"

import './login.css';
import "../signUp/formSignUp/styleFormSignUp.css"

export const Login = () => {

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.target)

		const formData = { 
			client_id: 'yair-alex',
			grant_type: "passwordal",
			username: 'test@test.com',
			password: '7390' 
		}

		axios.post(
			'http://localhost:8989/auth/realms/AlexTestRealm/protocol/openid-connect/token', 
			querystring.stringify(formData), {
				headers: {
				  "Content-Type": "application/x-www-form-urlencoded"
				}
			}).then(response => console.log(response));
	}

	// const [isOverlayShown, setOverlow] = useState(false)

	// const toogleOverflow = () => {
	// 	setOverlow(!isOverlayShown)
	// }

	const {
		register,
		// handleSubmit,
		// formState: { errors },
	  } = useForm<IFormValues>();

	return <div className="loginFormContainer">
		<div className="loginPage">
			<h2 className="flexCenter">Login to Feelter</h2>
			<div className="svgOrgContainer">
				<div className="svgOrg gridSign1">
					<a href="#">
						<img src="/svgOrgs/googleOrg.svg" alt=""/>
					</a>
				</div>
				<div className="svgOrg gridSign2">
					<a href="#">
						<img src="/svgOrgs/wordpressOrg.svg" alt=""/>
					</a>
				</div>
				<div className="svgOrg gridSign3">
					<a href="#">
						<img src="/svgOrgs/facebookOrg.svg" alt=""/>
					</a>
				</div>
				<div className="svgOrg gridSign4"><a href="#">
					<img src="/svgOrgs/linkdinOrg.svg" alt=""/></a></div>
				<div className="svgOrg gridSign5">
					<a href="#">
						<img src="/svgOrgs/twitterOrg.svg" alt=""/>
					</a>
				</div>
			</div>
			<p className="orLine">or</p>
			<form onSubmit={ handleSubmit } >
				<FeelterInput id="emailCompLogin" htmlFor="emailCompLogin" type="email" name="emailCompLogin" placeholder="Enter your email" label="Email" register={ register } />
				<FeelterInput id="passLogin" htmlFor="passLogin" type="password" name="passLogin" placeholder="Enter your password" label="Password" register={ register } />
				<div className="flexSpaceBetween">
					<div className="checkboxCont">
						<input type="checkbox" id="rememberMe" name="fruit-1" value={ "Remember me" } />
						<label htmlFor="rememberMe">{ "Remember me" }</label>
					</div>
					<span className="errorStyle">Forgot Password?</span>
				</div>
				<input type="submit" value="Create Account" />
			</form>
			<div className="flexCenter haveAccSign">
				<span className="labelSign">Already have an account?</span>
				<Link to="/">Sign Up</Link>
			</div>
		</div>
		<div className="overlay"></div>
	</div>
}