import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";
import Logo from "../wanderlust_logo.png";

const Header = () => {
	const HeaderContent = styled.div`
		width: 100%;

		.MainLogo {
			margin-top: 15px;
			display: flex;
			justify-content: center;
		}
	`;
	return (
		<HeaderContent>
			<Navigation />
			<div className="MainLogo">
				<img src={Logo} alt="Main Logo" />
			</div>
		</HeaderContent>
	);
};

export default Header;
