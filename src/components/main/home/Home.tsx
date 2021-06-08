import { useState, useEffect, FC, ReactElement, Dispatch, SetStateAction } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	RouteComponentProps
} from "react-router-dom";

import { HomeRecommendations } from "./Recommendations"
import { Dashboard } from "./Dashboard"

const fetchURL = "http://localhost:3000/homeDB.json"

export interface HomeRecommendationsState {
	home: {
		recomendations: {
			welcome: string,
			welcomeDescription: string,
			capture: string,
			data: {
				capture: string,
				captureDescription: string,
				durationAction?: string,
				buttonLabel: string
			}[]
		}
	}
}

export const HomeSectionHeader = ({ match }): RouteComponentProps<{}> => {
	const [homeRecommendations, setHomeRecommendations] = useState<HomeRecommendationsState>({home: {recomendations: {}}} as HomeRecommendationsState)
	const getData = () =>
		fetch(`${fetchURL}`)
			.then(res => res.json())
	useEffect(() => {
		getData().then(data => {
			setHomeRecommendations(data)
		})
	}, [])

	return <main>
		<Router>
			<header className="homeSectionHeader">
				<Link to={ `${match.url}/recommendations` }>Recommendations</Link>
				<Link to={ `${match.url}/dashboard` }>Dashboard</Link>
			</header>
				<Switch>
				{ homeRecommendations.home.recomendations.welcome && 
					<Route 
						path={ `${match.url}/recommendations` } 
						render={ match => <HomeRecommendations  url={ match.match.url } { ...homeRecommendations } isAuthed={ true } /> } 
					/> 
				}
				{ homeRecommendations.home.recomendations.welcome && 
					<Route 
						path={ `${match.url}/dashboard` }
						render={ props => <Dashboard  { ...homeRecommendations } isAuthed={ true } /> }  
					/> 
				}
				{ homeRecommendations.home.recomendations.welcome && 
					<Route 
						path={ `${match.url}/add-social` }
						render={ props => <Dashboard  { ...homeRecommendations } isAuthed={ true } /> }  
					/> 
				}
				</Switch>
		</Router>
	</main>
}