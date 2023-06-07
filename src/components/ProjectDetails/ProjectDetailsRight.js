import React from "react";
import { TbExternalLink as ExternalLink } from "react-icons/tb";
import { HashLink } from "react-router-hash-link";

const ProjectDetailsRight = ({ projectCardInfo, subNavLinks }) => {
	const { startDate: date, url } = projectCardInfo;

	const displayOrder = { team: 1, publications: 2, media: 3 };
	subNavLinks.sort((a, b) => {
		return displayOrder[a.name] - displayOrder[b.name];
	});

	return (
		<aside className="right-pane">
			{/* associated projects to this person */}
			<div className="top-container">
				<div className="status-container">
					<div className="status-subcontainer">
						<p className="bold-16 status">Project dates</p>

						{date !== undefined && (
							<p className="medium-16 year">{date.substring(0, 4)}-present</p>
						)}
					</div>

					{url !== undefined && (
						<a
							className="medium-14 site-btn"
							href={url}
							target="_blank"
							rel="noreferrer"
						>
							visit the site
							<span className="site-icon">
								<ExternalLink />
							</span>
						</a>
					)}
				</div>
			</div>
			<div className="underline" />

			<div className="bottom-container">
				<ul className="pd-nav">
					{subNavLinks.map((link, id) => {
						return (
							<HashLink
								key={id}
								smooth
								to={link.url}
								className="semi-14 pd-nav-item"
								state={projectCardInfo}
							>
								{link.name}
							</HashLink>
						);
					})}
				</ul>
			</div>
		</aside>
	);
};

export default ProjectDetailsRight;