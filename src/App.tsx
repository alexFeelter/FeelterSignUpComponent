import './App.css';

import { Main } from "./components/main/Main"
import { Auth } from "./components/auth/Auth"
import { ProductCategoriesSelection } from "./components/auth/signUp/ProductCategoriesSelection"

// import { keycloakPagesContext } from "keycloak-react-theming" 

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { keycloak_js } from 'keycloakify';

const App = () => {
	return <Router>
		<Switch>
			<Route exact path="/" component={ Auth } />
			<Route path="/product-categories" component={ ProductCategoriesSelection } />
			<Route path="/main" component={ Main } />
		</Switch>
	</Router>

	// <p>{ keycloakPagesContext === undefined } ? { "This served is not" } : { "served by keyklock: " + keycloakPagesContext.pageBasename} </p>
}

export default App;