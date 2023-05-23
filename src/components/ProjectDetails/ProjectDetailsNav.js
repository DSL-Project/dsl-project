import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const ProjectDetailsNav = ({ pathname, subNavLinks, projectCardInfo }) => {
	return (
		<nav className="pdnav-container">
			<div className="pd-nav">
				<div className="pd-path">
					<NavLink className="regular-14 pathItem1 pd-link" to={"/projects"}>
						{pathname.split("/")[1]}
					</NavLink>
					<span className="regular-14 pathItem2 pd-link">/</span>
					<span className="regular-14 pathItem3 pd-link ">
						{projectCardInfo?.title}
					</span>
				</div>
				<ul className="pd-main-menu">
					{subNavLinks.map((link, id) => {
						return (
							<li key={id} className="pd-menu-item">
								<NavHashLink
									to={link.url}
									state={projectCardInfo}
									className={({ isactive }) =>
										isactive
											? "regular-14 pd-link pd-active"
											: "regular-14 pd-link pd-inactive"
									}
								>
									{link.name}
								</NavHashLink>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default ProjectDetailsNav;
