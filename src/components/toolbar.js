import React from "react";
import "./toolbar.module.css";
import { NavLink } from "react-router-dom";

const toolbar = () => {
	return (
		<div className="Toolbar">
			<h3>- Routing Project - </h3>
			<nav>
				<ul>
					<li>
						<NavLink to='/courses'>Courses</NavLink>
					</li>
					<li>
						<NavLink to='/users'>Users</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default toolbar;
