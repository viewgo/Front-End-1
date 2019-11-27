import React from "react";
import { bool, func } from "prop-types";
import "./Button.css";

const DropDownButton = ({ open, setOpen }) => {
	return (
		<div>
			<button className="button" open={open} onClick={() => setOpen(!open)}>
				<div className="button__line" />
				<div className="button__line" />
				<div className="button__line" />
			</button>
		</div>
	);
};

DropDownButton.propTypes = {
	open: bool.isRequired,
	setOpen: func.isRequired
};

export default DropDownButton;
