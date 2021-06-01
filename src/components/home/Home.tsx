import './home.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	RouteComponentProps
} from "react-router-dom";

import { HeaderFixedNav } from "./HeaderFixedNav"
import { SideFixedNav } from "./SideFixedNav"
import { HomeSectionHeader } from "./HomeSection"

export const Home = ({ match }: RouteComponentProps<{}>) => {
	return <div>
	<Router>
		<HeaderFixedNav />
		<main>
			<SideFixedNav />
			<Switch>
				<Route path={ `${match.url}/main` } component={ HomeSectionHeader } />
			</Switch>
		</main>
	</Router>
</div>
}