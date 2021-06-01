import './home.css';

import { BellIcon } from "../../Icons/BellIcon" 

import img from "./icons/facebookOrg.svg"

export const HeaderFixedNav = () => {
	return <header className="homeHeader flexSpaceBetween">
		<a href="https://www.feelter.com/" target="_blank">
			<img src="/images/feelter.png" alt="Feelter" />
		</a>
		<div className="headerClientProps">
			<span>Feelter uninstalled</span>
			<a href="mywebsitename.com" className="iconContainer localOrg">
				<img src="/images/headerHomeIcons/loginIcon.svg" alt="" />
				mywebsitename.com
			</a>
			<div>
				<span>
					<img src="/images/headerHomeIcons/helpIcon.svg" alt="" />
				</span>
				<span>
					<img src={ img } alt="" />
				</span>
				<a href="/">
					<img src="" alt="" />
				</a>
			</div>
		</div>
	</header>
}