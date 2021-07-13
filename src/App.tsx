import { useState, useEffect } from 'react';

import './App.css';

import { Main } from "./components/main/Main"
import { ProductCategoriesSelection } from "./components/ProductCategoriesSelection"

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";

import { integrityChecking } from "./services/RouterService"

export interface ClientParts {
	fullName: string, 
	domain: string, 
	categories: string[] 
} 

const fetchURL = "http://localhost:2000/client_data"

const App = () => {
	const [clientData, setClientData] = useState({} as ClientParts)
	const [isLoading, setLoading] = useState(false)
	const [shouldCompleteRegistration, setCompleteRegistration] = useState(false)
	const getData = () =>
	fetch(`${fetchURL}`)
		.then(res => res.json())
		useEffect(() => {
			getData().then(data => {
				setLoading(false)
				integrityChecking(data) ? setClientData(data) : setCompleteRegistration(true)
			})
		}, [])
	return isLoading ? 
		<p>Loading</p>
		: <Router>
			<Switch>
				<Route exact path="/"><Redirect to="/main/home/recommendations" /></Route>
				<Route path="/product-categories" component={ ProductCategoriesSelection } />
				<Route path="/main" component={ ({ match }) =>
					shouldCompleteRegistration 
					? <Redirect to="/product-categories" /> 
					: <Main match={ match } />
				} />
			</Switch>
		</Router>
}

export default App;