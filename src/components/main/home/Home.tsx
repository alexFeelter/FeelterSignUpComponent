import { useState, useEffect, FC, ReactElement, Dispatch, SetStateAction } from 'react';
import {
	Switch,
	Route,
	Link,
	RouteComponentProps
} from "react-router-dom";

import { Recommendations, RecommendationsData } from "./Recommendations"
import { Dashboard } from "./Dashboard"
import { matchActiveUrl } from "../../../services/RouterService"

const fetchURL = "http://localhost:5000/home"

interface HomeState {
	recommendations: RecommendationsData,
	// dashboard: RecommendationsData,
}

type HomeAPI = HomeState

export const HomeSectionHeader = ({ match }): RouteComponentProps<{}> => {
	const [recommendationsData, setRecommendationsData] = useState<HomeState['recommendations']>({} as RecommendationsData)
	const [dashboardData, setDashboardData] = useState<HomeState>({recommendations: {} as RecommendationsData})
	// fetch(`${fetchURL}`)
	// 	.then(res => res.json())
	// 	.then((data: HomeAPI) => {
	// 		setRecommendations(data.recommendations)
	// 	})

		
	const getData = () =>
		fetch(`${fetchURL}`)
			.then(res => res.json())
	useEffect(() => {
		getData().then((data: HomeAPI) => {
			console.log(data)
			setRecommendationsData(data.recommendations)
		})
	}, [])

	return <main>
		<header className="homeSectionHeader">
			<Link className={ "navTabLink " + (matchActiveUrl(`${match.url}/recommendations`) ? 'active' : '') } to={ `${match.url}/recommendations` }>Recommendations</Link>
			<Link className={ "navTabLink " } to={ `${match.url}/dashboard` }>Dashboard</Link>
		</header>
		<Switch>
			{ recommendationsData.welcome && 
				<Route 
					path={ `${match.url}/recommendations` } 
					render={ () => <Recommendations data={ recommendationsData } /> } 
				/> 
			}
			{ recommendationsData.welcome && 
				<Route 
					path={ `${match.url}/dashboard` }
					render={ () => <Dashboard  data={ recommendationsData } /> }  
				/> 
			}
		</Switch>
	</main>
}