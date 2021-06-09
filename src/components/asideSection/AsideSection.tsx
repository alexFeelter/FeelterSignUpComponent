import React from 'react';
import './styleAsideSection.css';

import { ReasonCoosenFeelterCarousel } from "./reasonCoosenFeelterCarousel/ReasonCoosenFeelterCarousel"

import feelter from "./images/feelter.png"
import feelterAdvantage from "./images/feelterAdvantage.png"

export const AsideSection = () => {
	return <aside>
		<div></div>
		<header>
			<a href="https://www.feelter.com/" target="_blank" rel="noreferrer"><img src={ feelter } alt="Feelter" /></a>
		</header>
		<main className="flexSpaceBetween">
			<h2>Why Choose Feelter?</h2>
			<div className="carouselContaner">
				<ReasonCoosenFeelterCarousel />
			</div>
			<div className="feelterAdvantageCont">
				<h2>The Advantages of Feelter</h2>
				<img src={ feelterAdvantage } alt="feelterAdvantage" className="feelterAdvantage" />
			</div>
		</main>
	</aside>
}