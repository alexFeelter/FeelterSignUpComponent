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
	const [isLoading, setLoading] = useState(true)
	const [shouldCompleteRegistration, setCompleteRegistration] = useState(false)
	const getData = () =>
	fetch(`${fetchURL}`)
		.then(res => res.json())
		useEffect(() => {
			getData().then(data => {
				console.log(data)
				setLoading(false)

				if (integrityChecking(data)) {
					setClientData(data)
				} else {
					console.log("asd")
					setCompleteRegistration(true)
				}
				
			})
		}, [])
	return isLoading ? 
		<p>Loading</p>
		: <Router>
			<Switch>
				<Route exact path="/"><Redirect to="/main/home/recommendations" /></Route>
				<Route path="/product-categories" component={ ProductCategoriesSelection } />
				<Route path="/main" component={ () =>
					shouldCompleteRegistration 
					? console.log('Redirect') as undefined || <Redirect to="/product-categories" /> 
					: console.log('Main') as undefined || <Main />
				} />
			</Switch>
		</Router>
}

export default App;