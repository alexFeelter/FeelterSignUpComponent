import './home.css';

export const HeaderFixedNav = () => {
	return <header className="flexSpaceBetween">
		<a href="https://www.feelter.com/" target="_blank">
			<img src="/images/feelter.png" alt="Feelter" />
		</a>
		<div className="headerClientProps">
			<span>Feelter uninstalled</span>
			<a href="mywebsitename.com" className="iconContainer localOrg">
				<img src="/images/headerHomeIcons/loginIcon.svg" alt="" />
				mywebsitename.com
			</a>
			<div>
				<span>
					<img src="/images/headerHomeIcons/helpIcon.svg" alt="" />
				</span>
				<span>
					<img src="/images/headerHomeIcons/bellIcon.svg" alt="" />
				</span>
				<a href="/">
					<img src="" alt="" />
				</a>
			</div>
		</div>
	</header>
}