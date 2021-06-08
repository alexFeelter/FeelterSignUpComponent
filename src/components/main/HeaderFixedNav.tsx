import './home.css';

import { Bell } from "../../svgIcons/Bell" 
import { Help } from "../../svgIcons/Help" 
import { PersonalAcc } from '../../svgIcons/PersonalAcc';


export const HeaderFixedNav = () => {
	return <header className="homeHeader flexSpaceBetween">
		<a href="https://www.feelter.com/" target="_blank">
			<img src="/images/feelter.png" alt="Feelter" />
		</a>
		<div className="headerClientProps">
			<span>Feelter uninstalled</span>
			<a href="mywebsitename.com" className="iconContainer localOrg">
				<PersonalAcc fill="#AAAAAA" />
				mywebsitename.com
			</a>
			<div>
				<span>
					<Help fill="#AAAAAA" />
				</span>
				<span>
					<Bell fill="#AAAAAA" />
				</span>
				<a href="/">
					<img src="" alt="" />
				</a>
			</div>

		</div>
	</header>
}