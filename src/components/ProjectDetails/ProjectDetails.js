import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProjectDetailsNav from "./ProjectDetailsNav";
import ProjectDetailsLeft from "./ProjectDetailsLeft";
import ProjectDetailsRight from "./ProjectDetailsRight";
import { useGlobalContext } from "../../appContext";

const ProjectDetails = () => {
	const { projectsData } = useGlobalContext();
	const { pathname } = useLocation();
	const slugFromLocation = pathname.split("/")[2];
	const [projectCardInfo, setProjectCardInfo] = useState({});

	const generateSubNavLinks = (projectCard) => {
		/**This function generates the sub navigation items dynamically.
		 *  * important to note that response has no 'partners' and 'fundings' property yet.
		 */
		const { slug } = projectCard;
		const targetObj = projectCard;
		const filterItems = ["publications", "media", "team"];
		const linksArray = filterItems.map((item) => {
			const filteredObject = Object.keys(targetObj)
				.filter((key) => key.includes(item))
				.reduce((cur, key) => {
					return Object.assign(cur, {
						name: key,
						url: `/projects/${slug}#${key}`,
					});
				}, {});
			return filteredObject;
		});
		return linksArray;
	};
	const subNavLinks = generateSubNavLinks(projectCardInfo).filter(
		(item) => item.name !== undefined
	);

	useEffect(() => {
		const filteredProject = projectsData.filter(
			(project) => project.slug === slugFromLocation
		);
		setProjectCardInfo(filteredProject?.[0] || {});
	}, [pathname]);

	const { status } = projectCardInfo;
	const newStatus = status === undefined ? "active" : status;
	const RightPaneData = { projectCardInfo, subNavLinks, newStatus };
	const LeftPaneData = { projectCardInfo, newStatus };
	const NavData = { pathname, subNavLinks, projectCardInfo };

	return (
		<main className="pd-main">
			{/* navigation */}
			<ProjectDetailsNav {...NavData} />
			{/* left pane */}
			<section className="project-details">
				<section className="pd-leftpane">
					<ProjectDetailsLeft {...LeftPaneData} />
				</section>

				{/* right pane */}
				<section className="pd-rightpane">
					<ProjectDetailsRight {...RightPaneData} />
				</section>
			</section>
		</main>
	);
};

export default ProjectDetails;
