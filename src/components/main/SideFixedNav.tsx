import {
	Link,
	RouteComponentProps
} from "react-router-dom";

import { Home } from "../../svgIcons/Home"
import { Content } from "../../svgIcons/Content"
import { DesignFeelter } from "../../svgIcons/DesignFeelter"
import { ProductCatalog } from "../../svgIcons/ProductCatalog";
import { Insights } from "../../svgIcons/Insights";


export const SideFixedNav = ({ match }: RouteComponentProps<{}>) => <nav className="sideFixedNav">
	<Link to={ `${ match.url }/home` } className="iconContainer" >
		<Home fill="#323B4B" /> Home
	</Link>
	<Link to={ `${ match.url }/feeds` } className="iconContainer" >
		<Content fill="#323B4B" /> Content Feeds
	</Link>
	<Link to={ `${ match.url }/design` } className="iconContainer" >
		<DesignFeelter fill="#323B4B" /> Design & Feelter
	</Link>
	<Link to={ `${ match.url }/catalog` } className="iconContainer" >
		<ProductCatalog fill="#323B4B" /> Product Catalog
	</Link>
	<Link to={ `${ match.url }/insights` } className="iconContainer" >
		<Insights fill="#323B4B" /> Product Catalog
	</Link>
</nav>