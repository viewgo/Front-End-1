import React from "react";
import { bool } from "prop-types";
import styled from "styled-components";

const DropDown = ({ open,  setOpen, logOut}) => {
	const Drawer = styled.div`
		height: 100%;
		background: white;
		box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		width: 350px;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
	`;

	const Link = styled.nav`
		display: flex;
		flex-direction: column;
		margin-top: 100px;

		a {
			text-decoration: none;
			color: black;
			line-height: 2;
			font-size: 1.5rem;
			padding-left: 20px;
		}

		.three {
			margin-top: 80px;
		}
	`;
	return (
		<Drawer open={open}>
			<Link>
				<a href="/">
					<strong>Home</strong>
				</a>

				<a href="/">
					<strong>About Us</strong>
				</a>

				<a href="/mytours">
					<strong>My Tours</strong>
				</a>

				<a className="three" href="#" onClick={logOut}>
					<strong>Log Out</strong>
				</a>
			</Link>
		</Drawer>
	);
};

DropDown.propTypes = {
	open: bool.isRequired
};

export default DropDown;
