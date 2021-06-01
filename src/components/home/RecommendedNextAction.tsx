import { HomeRecommendations } from "./HomeRecommendations"

import react from 'react';

import { HomeRecommendationsState } from "./HomeRecommendations"

export const RecommendedNextAction = props => <div className="reccomAction">
        <div className="reccomActionHeader flexSpaceBetween">
            <h3>{ props.recomCapture }</h3>
            <button>X</button>
        </div>
        <p>{ props.recomDescription }</p>
        <div className="reccomActionFooter flexSpaceBetween">
            <span>{ props.durationAction }</span>
            <button>{ props.buttonLabel }</button>
        </div>
    </div>