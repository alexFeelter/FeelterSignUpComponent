import { Recommendations } from "./home/Recommendations"

import react from 'react';

import { RecommendationsState } from "./home/Home"

export const RecommendedNextAction = props => <div className="reccomAction">
        <div className="reccomActionHeader flexSpaceBetween">
            <h4>{ props.recomCapture }</h4>
            <button>X</button>
        </div>
        <p>{ props.recomDescription }</p>
        <div className="reccomActionFooter flexSpaceBetween">
            <span>{ props.durationAction }</span>
            <button>{ props.buttonLabel }</button>
        </div>
    </div>