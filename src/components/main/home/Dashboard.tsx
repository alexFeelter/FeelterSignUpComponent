import React from "react";

import { DahboardStatus } from "./DahboardStatus"

export const Dashboard = (props) => {
	return <main>
		<div className="headContent">
			<DahboardStatus />
			<DahboardStatus />
			<DahboardStatus />
			<DahboardStatus />
		</div>
	</main>
}