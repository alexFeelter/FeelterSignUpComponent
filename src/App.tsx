import './App.css';

import { Login } from "./components/logIn/Login"
import { FormSignUp } from "./components/signUp/formSection/formSignUp/FormSignUp"

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

const App = () => {
	return <main>
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

export default App;