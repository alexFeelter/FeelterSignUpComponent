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
import { AccSettings } from './AccSettings';

export const Main = ({ match }: RouteComponentProps<{}>) => <div>
	<HeaderFixedNav match={ match } />
	<main>
		<SideFixedNav match={ match } />
		<Switch>
			<Route path={ `${ match.url }/home` } component={ HomeSectionHeader } />
			<Route path={ `${ match.url }/add-social` } component={ AddSocial } />
			<Route path={ `${ match.url }/account-settings` } component={ AccSettings } />
		</Switch>
	</main>
</div>