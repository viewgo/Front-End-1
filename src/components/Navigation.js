import React, { useState, useRef } from "react";
import DropDownButton from "./DropDownButton";
import DropDown from "./DropDown";
import { ClickOutside } from "./ClickOutside";

const Navigation = () => {
	const [ open, setOpen ] = useState(false);
	const node = useRef();
	ClickOutside(node, () => setOpen(false));
	return (
		<header className="main__header">
			<nav className="main__nav">
				<div ref={node}>
					<DropDownButton open={open} setOpen={setOpen} />
					<DropDown open={open} setOpen={setOpen} />
				</div>
				<div className="nav__items">
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">About Us</a>
						</li>
						<li>
							<a href="/">Sign Up</a>
						</li>
						<li>
							<a href="/">Log In</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
