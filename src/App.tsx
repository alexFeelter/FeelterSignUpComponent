import './App.css';

import { Home } from "./components/home/Home"
import { Auth } from "./components/auth/Auth"

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

const App = () => {
	return <Router>
			<Switch>
				<Route path="/home" component={ Home } />
				<Route path="/" component={ Auth } />
			</Switch>
		</Router>
}

export default App;