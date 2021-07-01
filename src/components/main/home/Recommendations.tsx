import { RecommendedNextAction } from "../RecommendedNextAction"

export interface RecommendationsData {
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

interface RecommendationsProps {
	data: RecommendationsData
}
export const Recommendations = (props: RecommendationsProps) => {
	const { data } = props
	return <section>
		<div>
			<h2>{ `${ data.welcome} Line,` }</h2>
			<p>{ data.welcomeDescription }</p>
			<div>
				<h4>{ data.capture }</h4>
				{ data.welcome && data.data.map(recom => 
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