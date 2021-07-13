import { useForm, UseFormRegister } from 'react-hook-form';

// import { FeelterInput } from "./auth/signUp/feelterInput/FeelterInput"

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

export const ProductCategoriesSelection = props => {

	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm<IFormValues>();

	  return <section className="prodCategory formContainer">
		<div>
			<header className="flexCenter">
				<a href="https://www.feelter.com/" target="_blank"><img src="../../public/images/feelter.png" alt="Feelter" /></a>
				<h2>Welcome to Feelter!</h2>
			</header>
			<form action="">
				<div className="updPersInfoInputs">
					<input type="text" id="fullName" name="fullName" placeholder="Enter your full name" />
					<label htmlFor="fullName">Full Name**</label>
				</div>
				<div className="updPersInfoInputs">
					<input type="url" id="webDomain" name="webDomain" placeholder="Enter your web domain" />
					<label htmlFor="webDomain">Web Domain*</label>
				</div>
				<h4>Product Categories</h4>
				<div className="productCategorCheckboxes">
					<div className="checkboxCont">
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
				</div>
				<input type="submit" className="custSubmit" value="Let’s go!" />
			</form>
		</div>
	</section>
}