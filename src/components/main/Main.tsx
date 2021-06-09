import './home.css';
import {
	Switch,
	Route,
	RouteComponentProps
} from "react-router-dom";

import { HeaderFixedNav } from "./HeaderFixedNav"
import { SideFixedNav } from "./SideFixedNav"
import { HomeSectionHeader } from "./home/Home"
import { AddSocial } from "./home/AddSocial"

export const Main = ({ match }: RouteComponentProps<{}>) => <div>
	<HeaderFixedNav />
	<main>
		<SideFixedNav match={ match } />
		<Switch>
			<Route path={ `${ match.url }/home` } component={ HomeSectionHeader } />
			<Route path={ `${ match.url }/add-social` } component={ AddSocial } />
		</Switch>
	</main>
</div>