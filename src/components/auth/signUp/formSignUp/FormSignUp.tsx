import { useForm, UseFormRegister } from 'react-hook-form';

import {
	Link,
	RouteComponentProps
} from "react-router-dom";

import { FeelterInput } from "../feelterInput/FeelterInput"

import './styleFormSignUp.css';
import { AsideSection } from '../../../asideSection/AsideSection';
// import { ProductCategoriesSelection } from "../ProductCategoriesSelection"

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

export const FormSignUp = ({ match }: RouteComponentProps<{}>) => {

	console.log(match)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormValues>();
	return <>
		<form className="formContainer">
			<h2>Start 14 Days Free Trial</h2>
			<div>
				<h4>Sign up with:</h4>
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
					<div className="svgOrg gridSign4">
						<a href="#">
							<img src="/svgOrgs/linkdinOrg.svg" alt=""/>
						</a>
					</div>
					<div className="svgOrg gridSign5">
						<a href="#">
							<img src="/svgOrgs/twitterOrg.svg" alt=""/>
						</a>
					</div>
				</div>
			</div>
			<p className="orLine">or</p>
			<FeelterInput id="emailComp" htmlFor="emailComp" type="email" placeholder="Enter your email" label="Company email *" register={ register } />
			<FeelterInput id="pass" htmlFor="pass" type="password" placeholder="Create a password" label="Password (6+ characters) *" register={ register } />
			<input type="submit" value="Create Account" />
			<div className="haveAccSign">
				<span className="labelSign">Already have an account? </span>
				<Link to={ `${ match.url }login` }>Sign In</Link>
			</div>
		</form>
		<AsideSection />
	</>
}