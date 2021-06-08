export const DahboardStatus = (props) => {
	 return <div>
	<h4>My Widgets</h4>
	<div>
		<p>{ props.home.dashboards&& props.home.dashboards.statuses.map(status => status.capture) }</p>
		<div className="widgetsBar"></div>
	</div>
	<div>
		<button>view All</button>
		<input type="button" value="View all" />
	</div>
</div>
}