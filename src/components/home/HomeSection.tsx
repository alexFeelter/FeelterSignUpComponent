 import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	RouteComponentProps
} from "react-router-dom";

import { HomeRecommendations } from "./HomeRecommendations"
import { Dashboard } from "./Dashboard"

export const HomeSectionHeader = ({ match }): RouteComponentProps<{}> => {
	return <main>
		<Router>
			<header className="homeSectionHeader">
				<Link to={ `${match.url}/recommendations` }>Recommendations</Link>
				<Link to={ `${match.url}/dashboard` }>Dashboard</Link>
			</header>
				<Switch>
					<Route path={ `${match.url}/recommendations` } component={ HomeRecommendations } />
				</Switch>
				<Switch>
					<Route path={ `${match.url}/dashboard` } component={ Dashboard } />
				</Switch>
		</Router>
	</main>
}