import React from "react";
import Slider from "react-slick";

import pic from "../images/carousel/pic1.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './reasonCoosenFeelterCarousel.css';

export const ReasonCoosenFeelterCarousel = () => {

	const Arrow = props => {
		console.log(props)
		let className = props.type === "next" ? "nextArrow" : "prevArrow";
		className += " arrow";
		const char = props.type === "next" ? "🡪" : "🡨";
		return <input type="button" className={ className } onClick={ props.onClick } value={ char } />
	}

	const settings = {
		dots: false,
		speed: 500,
		arrows: true,
		nextArrow: <Arrow type="next" />,
		prevArrow: <Arrow type="prev" />,
		infinite: false
	};
	return <Slider {...settings} >
		<div className="carouselProd">
			<img className="carouselProdPic" src={ pic } width="72px" height="72px" />
			<div className="carouselProdTextCont">
				<h4>Bogdan Krivenchenko</h4>
				<p className="carouselProdPosition">eCommerce Owner1</p>
				<p>Feelter has helped my ecommerce business to grow</p>
			</div>
		</div>
		<div className="carouselProd" style={{ display: "flex", alignItems: "center" }}>
			<img className="carouselProdPic" src={ pic } width="72px" height="72px" />
			<div className="carouselProdTextCont">
				<h4>Bogdan Krivenchenko</h4>
				<p className="carouselProdPosition">eCommerce Owner2</p>
				<p>Feelter has helped my ecommerce business to grow</p>
			</div>
		</div>
		<div className="carouselProd" style={{ display: "flex", alignItems: "center" }}>
			<img className="carouselProdPic" src={ pic } width="72px" height="72px" />
			<div className="carouselProdTextCont">
				<h4>Bogdan Krivenchenko</h4>
				<p className="carouselProdPosition">eCommerce Owner3</p>
				<p>Feelter has helped my ecommerce business to grow</p>
			</div>
		</div>
		<div className="carouselProd" style={{ display: "flex", alignItems: "center" }}>
			<img className="carouselProdPic" src={ pic } width="72px" height="72px" />
			<div className="carouselProdTextCont">
				<h4>Bogdan Krivenchenko</h4>
				<p className="carouselProdPosition">eCommerce Owner4</p>
				<p>Feelter has helped my ecommerce business to grow</p>
			</div>
		</div>
		<div className="carouselProd" style={{ display: "flex", alignItems: "center" }}>
			<img className="carouselProdPic" src={ pic } width="72px" height="72px" />
			<div className="carouselProdTextCont">
				<h4>Bogdan Krivenchenko</h4>
				<p className="carouselProdPosition">eCommerce Owner5</p>
				<p>Feelter has helped my ecommerce business to grow</p>
			</div>
		</div>
		<div className="carouselProd" style={{ display: "flex", alignItems: "center" }}>
			<img className="carouselProdPic" src={ pic } width="72px" height="72px" />
			<div className="carouselProdTextCont">
				<h4>Bogdan Krivenchenko</h4>
				<p className="carouselProdPosition">eCommerce Owner6</p>
				<p>Feelter has helped my ecommerce business to grow</p>
			</div>
		</div>
		<div className="carouselProd" style={{ display: "flex", alignItems: "center" }}>
			<img className="carouselProdPic" src={ pic } width="72px" height="72px" />
			<div className="carouselProdTextCont">
				<h4>Bogdan Krivenchenko</h4>
				<p className="carouselProdPosition">eCommerce Owner7</p>
				<p>Feelter has helped my ecommerce business to grow</p>
			</div>
		</div>
		<div className="carouselProd" style={{ display: "flex", alignItems: "center" }}>
			<img className="carouselProdPic" src={ pic } width="72px" height="72px" />
			<div className="carouselProdTextCont">
				<h4>Bogdan Krivenchenko</h4>
				<p className="carouselProdPosition">eCommerce Owner8</p>
				<p>Feelter has helped my ecommerce business to grow</p>
			</div>
		</div>
		<div className="carouselProd" style={{ display: "flex", alignItems: "center" }}>
			<img className="carouselProdPic" src={ pic } width="72px" height="72px" />
			<div className="carouselProdTextCont">
				<h4>Bogdan Krivenchenko</h4>
				<p className="carouselProdPosition">eCommerce Owner9</p>
				<p>Feelter has helped my ecommerce business to grow</p>
			</div>
		</div>
		<div className="carouselProd" style={{ display: "flex", alignItems: "center" }}>
			<img className="carouselProdPic" src={ pic } width="72px" height="72px" />
			<div className="carouselProdTextCont">
				<h4>Bogdan Krivenchenko</h4>
				<p className="carouselProdPosition">eCommerce Owner10</p>
				<p>Feelter has helped my ecommerce business to grow</p>
			</div>
		</div>
				<div className="carouselProd" style={{ display: "flex", alignItems: "center" }}>
			<img className="carouselProdPic" src={ pic } width="72px" height="72px" />
			<div className="carouselProdTextCont">
				<h4>Bogdan Krivenchenko</h4>
				<p className="carouselProdPosition">eCommerce Owner11</p>
				<p>Feelter has helped my ecommerce business to grow</p>
			</div>
		</div>
	</Slider>
}