import './App.css';

import { Main } from "./components/main/Main"
import { ProductCategoriesSelection } from "./components/ProductCategoriesSelection"

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";

const App = () => {
	return <Router>
		<Switch>
			<Route exact path="/"><Redirect to="/main/home/recommendations"/></Route>
			<Route path="/product-categories" component={ ProductCategoriesSelection } />
			<Route path="/main" component={ Main } />
		</Switch>
	</Router>
}

export default App;