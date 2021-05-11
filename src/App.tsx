import './App.css';

import { Login } from "./components/logIn/Login"
import { FormSignUp } from "./components/signUp/formSection/formSignUp/FormSignUp"

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
	useLocation,
	useParams
  } from "react-router-dom";

import { FormSection } from "./components/signUp/formSection/FormSection"
import { AsideSection } from "./components/asideSection/AsideSection"

const App = () => {
	return <main>

		<Router>
			<FormSignUp />
			{/* <FormSection />
			<AsideSection /> */}
			
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</Router>
	</main>
}

export default App;