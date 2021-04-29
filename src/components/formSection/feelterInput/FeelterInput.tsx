import React from 'react';

import { InputProps, IFormValues } from "../formSignUp/FormSignUp"

export const FeelterInput = ({ htmlFor, label, id, type, placeholder, register }: InputProps) => {
    return <div className="fullNameInputCont">
        <label htmlFor={ htmlFor }>{ label }</label>
        <input id={ id } type={ type } placeholder={ placeholder }></input>
    </div>
}
// export const FeelterInput = ()  => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 	} = useForm();
// 	const onSubmit = (data) => console.log(data);
// 	return <form onSubmit={handleSubmit(onSubmit)}>
// 		<input {...register('firstName')} /> {/* register an input */}
// 		<input {...register('lastName', { required: true })} />
// 		{errors.lastName && <p>Last name is required.</p>}
// 		<input {...register('age', { pattern: /\d+/ })} />
// 		{errors.age && <p>Please enter number for age.</p>}
// 		<input type="submit" />
// 	</form>
// }