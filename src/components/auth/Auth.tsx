import {
	BrowserRouter as Router,
	Switch,
	Route,
	RouteComponentProps
} from "react-router-dom";

import { Login } from "./logIn/Login"
import { FormSignUp } from "./signUp/formSignUp/FormSignUp"

export const Auth = ({ match }: RouteComponentProps<{}>) => {
	return <main className="flexSpaceBetween">
		<Router>
			<FormSignUp match={ match } />
			<Switch>
				<Route path={ `${ match.url }login` } component={ Login } />
			</Switch>
		</Router>
	</main>
}