import React from 'react';
import './styleAsideSection.css';

import { ReasonCoosenFeelterCarousel } from "./reasonCoosenFeelterCarousel/ReasonCoosenFeelterCarousel"

import feelter from "./images/feelter.png"
import feelterAdvantage from "./images/feelterAdvantage.png"

export const AsideSection = () => {
	return <aside>
		<header>
			<a href="https://www.feelter.com/" target="_blank"><img src={ feelter } alt="feelter"></img></a>
		</header>
		<main>
			<h2>Why Choose Feelter?</h2>
			<div className="carouselContaner">
				<ReasonCoosenFeelterCarousel />
			</div>
			<div className="feelterAdvantageCont">
				<h2>The Advantages of Feelter</h2>
				<img className="feelterAdvantage" src={ feelterAdvantage } alt="feelterAdvantage" />
			</div>
		</main>
	</aside>
}