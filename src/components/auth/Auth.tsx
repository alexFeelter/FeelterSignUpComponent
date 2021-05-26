import React, { useState } from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import { Login } from "./logIn/Login"
import { FormSignUp } from "./signUp/formSection/formSignUp/FormSignUp"

export const Auth = () => {
	return <main className="flexSpaceBetween">
		<Router>
			<FormSignUp />
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</Router>
	</main>
}