import { useState, useEffect, FC, ReactElement, Dispatch, SetStateAction } from 'react';
import {
	Switch,
	Route,
	Link,
	RouteComponentProps
} from "react-router-dom";

import { Recommendations } from "./Recommendations"
import { Dashboard } from "./Dashboard"

const fetchURL = "http://localhost:3000/db/homeDB.json"

export interface RecommendationsState {
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
	const [recoms, setRecommendations] = useState<RecommendationsState>({home: {recomendations: {}}} as RecommendationsState)
	const getData = () =>
		fetch(`${fetchURL}`)
			.then(res => res.json())
	useEffect(() => {
		getData().then(data => {
			setRecommendations(data)
		})
	}, [])

	return <main>
			<header className="homeSectionHeader">
				<Link to={ `${match.url}/recommendations` }>Recommendations</Link>
				<Link to={ `${match.url}/dashboard` }>Dashboard</Link>
			</header>
				<Switch>
				{ recoms.home.recomendations.welcome && 
					<Route 
						path={ `${match.url}/recommendations` } 
						render={ match => <Recommendations  url={ match.match.url } { ...recoms } isAuthed={ true } /> } 
					/> 
				}
				{ recoms.home.recomendations.welcome && 
					<Route 
						path={ `${match.url}/dashboard` }
						render={ props => <Dashboard  { ...recoms } isAuthed={ true } /> }  
					/> 
				}
				{ recoms.home.recomendations.welcome && 
					<Route 
						path={ `${match.url}/add-social` }
						render={ props => <Dashboard  { ...recoms } isAuthed={ true } /> }  
					/> 
				}
				</Switch>
	</main>
}