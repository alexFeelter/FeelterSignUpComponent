import { useState, useEffect, FC, ReactElement, Dispatch, SetStateAction } from 'react';

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

import { integrityChecking } from "../../services/RouterService"

const fetchURL = "http://localhost:9000/main"

export interface MainData {
	main: [],
	feelter_installation: {
		is_installed: string,
		installed_label: string,
		not_installed_label: string
	},
	website: {
		logo: string
		url: string
	},
	account: {
		full_name: string,
		email: string,
		logo: string
	},
	sections: {
		home: {
			is_visible: boolean,
			label: string
		},
		design: {
			is_visible: boolean,
			label: string
		},
		prod_catalog: {
			is_visible: boolean,
			label: string
		},
		insights: {
			is_visible: boolean,
			label: string
		}	
	},
	account_option_labels: {
		account_settings: string,
		store_settings: string,
		logout: string
	},
	account_settings_labels: {
		tabs: {
			profile: string,
			plan: string,
			social: string
		},
		profile_pic: string,
		todo_label: string,
		todo_description: string,
		upload_picture: string,
		form: string,
		input_name: string,
		input_email: string,
		input_org: string,
		input_options_name: string
	},
	industries: [
		{ value: string, label: string },
		{ value: string, label: string },
		{ value: string, label: string },
		{ value: string, label: string },
		{ value: string, label: string },
		{ value: string, label: string },
		{ value: string, label: string }
	],
	data: string
}

type MainAPI = MainData

export const Main = ({ match }: RouteComponentProps<{}>) => {
	const [mainData, setMainData] = useState({})

	const getData = () =>
	fetch(`${fetchURL}`)
		.then(res => res.json())
		useEffect(() => {
			getData().then(data => {
				setMainData(data)
			})
		}, [])
	
	return <div>
		<HeaderFixedNav match={ match } />
		{ mainData && <main>
			<SideFixedNav props={ mainData } match={ match } />
			<Switch>
				<Route path={ `${ match.url }/home` } component={ HomeSectionHeader } />
				<Route path={ `${ match.url }/add-social` } component={ AddSocial } />
				{/* <Route path={ `${ match.url }/account-settings` } component={ AccSettings } /> */}
				<Route 
					path={ `${ match.url }/account-settings` }
					render={ () => <AccSettings data={ mainData } match={ match } /> }  
				/>
			</Switch>
		</main> }
	</div>
}