import {
	Link,
	RouteComponentProps
} from "react-router-dom";

import { Home } from "../../svgIcons/Home"
import { Content } from "../../svgIcons/Content"
import { DesignFeelter } from "../../svgIcons/DesignFeelter"
import { ProductCatalog } from "../../svgIcons/ProductCatalog";
import { Insights } from "../../svgIcons/Insights";

import { matchActiveUrl } from "../../services/RouterService"

export const SideFixedNav = ({ match }: RouteComponentProps<{}>, props) => <nav className="sideFixedNav">
	<Link to={ `${ match.url }/home/recommendations` } className={ "iconContainer " + (matchActiveUrl(`${match.url}/home`) ? 'active' : '') } >
		<Home fill="" /> Home
	</Link>
	<Link to={ `${ match.url }/feeds` } className={ "iconContainer " + (matchActiveUrl(`${match.url}/feeds`) ? 'active' : '') } >
		<Content fill="" /> Content Feeds
	</Link>
	<Link to={ `${ match.url }/design` } className={ "iconContainer " + (matchActiveUrl(`${match.url}/design`) ? 'active' : '') } >
		<DesignFeelter fill="" /> Design & Feelter
	</Link>
	<Link to={ `${ match.url }/catalog` } className={ "iconContainer " + (matchActiveUrl(`${match.url}/catalog`) ? 'active' : '') } >
		<ProductCatalog fill="" /> Product Catalog
	</Link>
	<Link to={ `${ match.url }/insights` } className={ "iconContainer " + (matchActiveUrl(`${match.url}/insights`) ? 'active' : '') } >
		<Insights fill="" /> Insights
	</Link>
</nav>