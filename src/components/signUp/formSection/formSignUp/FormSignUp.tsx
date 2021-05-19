import React, { useState } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';

import { BrowserRouter as Router, Link } from "react-router-dom";

import { FeelterInput } from "../feelterInput/FeelterInput"

import './styleFormSignUp.css';
import { AsideSection } from '../../../asideSection/AsideSection';

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

export const FormSignUp = () => {

	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm<IFormValues>();
	
	return <>
		<form className="formContainer">
			<h2>Start 14 Days Free Trial</h2>
			<div>
				<h3>Sign up with:</h3>
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
					<div className="svgOrg gridSign4">
						<a href="#">
							<img src="./svgOrgs/linkdinOrg.svg" alt=""/>
						</a>
					</div>
					<div className="svgOrg gridSign5">
						<a href="#">
							<img src="./svgOrgs/twitterOrg.svg" alt=""/>
						</a>
					</div>
				</div>
			</div>
			<p className="orLine">or</p>
			{/* <FeelterInput id="fullName" htmlFor="fullName" type="text" placeholder="Enter your full name" label="Full Name**" register={ register } />
			<FeelterInput id="webDomain" htmlFor="webDomain" type="url" placeholder="Enter your web domain" label="Web Domain*" register={ register } /> */}
			
			
			{/* <h3>Product Categories</h3>
			<div className="productCategorCheckboxes"> */}
				{/* <FeelterInput id="healthBeautyCheck" htmlFor="healthBeautyCheck" type="checkbox" placeholder="Enter your email" label={"Health & Beauty"} register={ register } />	
				<FeelterInput id="autoCheck" htmlFor="autoCheck" type="checkbox" placeholder="Enter your email" label="Auto" register={ register } />	
				<FeelterInput id="electronicsCheck" htmlFor="electronicsCheck" type="checkbox" placeholder="Electronics" label="Company email *" register={ register } />	
				<FeelterInput id="HomeAppliancesCheck" htmlFor="HomeAppliancesCheck" type="checkbox" placeholder="Home Appliances" label="Company email *" register={ register } />	
				<FeelterInput id="sportsOutdoorCheck" htmlFor="sportsOutdoorCheck" type="checkbox" placeholder="Enter your email" label={"Sports & Outdoors"} register={ register } />	 */}
				{/* <div className="checkboxCont">
					<input type="checkbox" id="healthBeautyCheck" name="fruit-1" value={ "Health & Beauty" } />
					<label htmlFor="healthBeautyCheck">{ "Health & Beauty" }</label>
				</div>
				<div className="checkboxCont">
					<input type="checkbox" id="autoCheck" name="fruit-2" value="Auto" />
					<label htmlFor="autoCheck">Auto</label>
				</div>
				<div className="checkboxCont">
					<input type="checkbox" id="electronicsCheck" name="fruit-3" value="Electronics" />
					<label htmlFor="electronicsCheck">Electronics</label>
				</div>
				<div className="checkboxCont">
					<input type="checkbox" id="sportsOutdoorCheck" name="fruit-4" value="Home Appliances" />
					<label htmlFor="sportsOutdoorCheck">Home Appliances</label>
				</div>
				<div className="checkboxCont">
					<input type="checkbox" id="HomeAppliancesCheck" name="fruit-4" value={ "Sports & Outdoors" } />
					<label htmlFor="HomeAppliancesCheck">{ "Sports & Outdoors" }</label>
				</div>
			</div> */}


			<FeelterInput id="emailComp" htmlFor="emailComp" type="email" placeholder="Enter your email" label="Company email *" register={ register } />
			<FeelterInput id="pass" htmlFor="pass" type="password" placeholder="Create a password" label="Password (6+ characters) *" register={ register } />
			<input type="submit" value="Create Account" />
			<div className="haveAccSign">
				<span className="labelSign">Already have an account? </span>
				<Link to="/login">Sign In</Link>
			</div>
		</form>
		<AsideSection />
	</>
}