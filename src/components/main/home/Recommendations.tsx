import { useState, useEffect, FC, ReactElement, Dispatch, SetStateAction } from 'react';

import { RecommendedNextAction } from "../RecommendedNextAction"

import { RecommendationsState } from "./Home"

export const Recommendations = props => {
	console.log("props ", props)
	return <section>
		<div>
		<h2>{ `${ props.home.recomendations.welcome} Line,` }</h2>
		<p>{ props.home.recomendations.welcomeDescription }</p>
		<div>
			<h4>{ props.home.recomendations.capture }</h4>
			{ props.home.recomendations.welcome && props.home.recomendations.data.map(recom => 
			<RecommendedNextAction 
				recomCapture={ recom.capture }
				recomDescription={ recom.captureDescription }
				durationAction={ recom.durationAction }
				buttonLabel={ recom.buttonLabel }
			/>) }
		</div>
		</div>
	</section>
}