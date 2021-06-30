import './App.css';

import { Main } from "./components/main/Main"
// import { Auth } from "./components/auth/Auth"
import { ProductCategoriesSelection } from "./components/auth/signUp/ProductCategoriesSelection"

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

const App = () => {
	return <Router>
		<Switch>
			{/* <Route exact path="/" component={ Auth } /> */}
			<Route path="/product-categories" component={ ProductCategoriesSelection } />
			<Route path="/main" component={ Main } />
		</Switch>
	</Router>
}

export default App;