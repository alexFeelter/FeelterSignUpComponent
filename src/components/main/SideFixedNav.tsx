import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	RouteComponentProps
} from "react-router-dom";

export const SideFixedNav = ({ match }: RouteComponentProps<{}>) => <nav className="sideFixedNav">
			<Link to={ `/main/home` } className="iconContainer" >
				<img src="/images/headerNavIcons/homeIcon.svg" alt="Home"/> Home
			</Link>
			<Link to={ `/main/feeds` } className="iconContainer" >
				<img src="/images/headerNavIcons/contentIcon.svg" alt="Content Feeds"/> Content Feeds
			</Link>
			<Link to={ `/main/design` } className="iconContainer" >
				<img src="/images/headerNavIcons/designFeelterIcon.svg" alt="Design & Feelter"/> Design & Feelter
			</Link>
			<Link to={ `/main/catalog` } className="iconContainer" >
				<img src="/images/headerNavIcons/prodCatalog.svg" alt="Product Catalog"/> Product Catalog
			</Link>
			<Link to={ `/main/insights` } className="iconContainer" >
				<img src="/images/headerNavIcons/insightsIcon.svg" alt="Insights"/> Insights
			</Link>
	</nav>