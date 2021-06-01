import { useState, useEffect, FC, ReactElement, Dispatch, SetStateAction } from 'react';

import { RecommendedNextAction } from "./RecommendedNextAction"

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

export const HomeRecommendations = (): ReactElement => {
	const [homeRecommendations, setHomeRecommendations] = useState<HomeRecommendationsState>({home: {recomendations: {}}} as HomeRecommendationsState)
	const getData = () =>
		fetch(`${fetchURL}`)
			.then(res => res.json())
	useEffect(() => {
		getData().then(data => {
			setHomeRecommendations(data)
		})
	}, [])
	return <section>
		<h2>{ `${ homeRecommendations.home.recomendations.welcome} Line,` }</h2>
		<p>{ homeRecommendations.home.recomendations.welcomeDescription }</p>
		<div>
			<h3>{ homeRecommendations.home.recomendations.capture }</h3>
			{ homeRecommendations.home.recomendations.welcome && homeRecommendations.home.recomendations.data.map(recom => 
			<RecommendedNextAction 
				recomCapture={ recom.capture } 
				recomDescription={ recom.captureDescription }
				durationAction={ recom.durationAction }
				buttonLabel={ recom.buttonLabel }
			/>) }
		</div>
	</section>
}