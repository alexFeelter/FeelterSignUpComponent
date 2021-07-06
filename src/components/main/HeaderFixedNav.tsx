import { useState, useEffect, FC, ReactElement, Dispatch, SetStateAction } from 'react';

import { Bell } from "../../svgIcons/Bell" 
import { Help } from "../../svgIcons/Help" 
import { PersonalAcc } from '../../svgIcons/PersonalAcc';
import { ListAccSettings } from './ListAccSettings';

import './home.css';

export const HeaderFixedNav = ({ match }) => {

	const [showListAccSettings, setListAccSettings] = useState(false) 
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
				<span className="notification">
					<Bell fill="#AAAAAA" />
				</span>
				<button className="toggleAppSettings" onClick={() => setListAccSettings(!showListAccSettings)} >
					<img src="/clients_data/defaultProfPic.png" alt="" />
				</button>
				{ showListAccSettings && <ListAccSettings match={ match } /> }
			</div>
		</div>
	</header>
}