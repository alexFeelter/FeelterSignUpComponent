import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	RouteComponentProps
} from "react-router-dom";

export const SideFixedNav = () => {
	return <nav className="sideFixedNav">
		<Route>
			<Link to={ "/home" } className="iconContainer" >
				<img src="/images/headerNavIcons/homeIcon.svg" alt="Home"/> Home
			</Link>
			<Link to={ "/feeds" } className="iconContainer" >
				<img src="/images/headerNavIcons/contentIcon.svg" alt="Content Feeds"/> Content Feeds
			</Link>
			<Link to={ "/design" } className="iconContainer" >
				<img src="/images/headerNavIcons/designFeelterIcon.svg" alt="Design & Feelter"/> Design & Feelter
			</Link>
			<Link to={ "/catalog" } className="iconContainer" >
				<img src="/images/headerNavIcons/prodCatalog.svg" alt="Product Catalog"/> Product Catalog
			</Link>
			<Link to={ "/insights" } className="iconContainer" >
				<img src="/images/headerNavIcons/insightsIcon.svg" alt="Insights"/> Insights
			</Link>
		</Route>
		{/* <p className="iconContainer"><img src="/images/headerNavIcons/homeIcon.svg" alt="Home"/> Home</p>
		<p className="iconContainer"><img src="/images/headerNavIcons/contentIcon.svg" alt="Content Feeds"/> Content Feeds</p>
		<p className="iconContainer"><img src="/images/headerNavIcons/designFeelterIcon.svg" alt="Design & Feelter"/> Design & Feelter</p>
		<p className="iconContainer"><img src="/images/headerNavIcons/prodCatalog.svg" alt="Product Catalog"/> Product Catalog</p>
		<p className="iconContainer"><img src="/images/headerNavIcons/insightsIcon.svg" alt="Insights"/> Insights</p> */}
	</nav>
}