import React from "react";
import { Link } from "react-router-dom";
const ProjectCard = ({ projectCardInfo }) => {
	const {
		title,
		subtitle,
		slug,
		status,
		startDate: date,
		tags,
		about
	} = projectCardInfo;

	return (
		<Link className="project-link" to={`/projects/${slug}`}>
			<article className="project-card">
				<h2 className="medium-16 project-card-heading">{title}</h2>
				<h3 className="bold-18 project-card-subheading">{subtitle}</h3>
				<p className="regular-16 project-card-intro">
					{/* Click To Read More... */}
					{about?.content[0]?.content[0]?.value || null}
					{/* {about?.content[0]?.content[0]?.value.substring(0, 50)+'...  Click to read more' || null} */}
				</p>

				{/* <div className="project-card-metadata">
					<div className="status">
						<div className="current-status"> */}

							{/* active button paragraph*/}
							{/* <p className="semi-14 status-label">{`${
								status === "complete" ? "complete" : "active"
							}`}</p> */}

							{/* rendering svg */}
							{/* <div className="status-icon"> */}
								{/* insert dynamic svgs here */}
								{/* {status !== "complete" ? (
									<div className="flashing">
										<div className="snippet" data-title="dot-flashing">
											<div className="stage">
												<div className="dot-flashing"></div>
											</div>
										</div>
									</div>
								) : (
									<div className="singleDot"></div>
								)}
							</div>
						</div> */}
						{/* rendering date */}
						{/* {date !== undefined && (
							<div className="semi-14 timeline">
								{date.substring(0, 4)}-Present
							</div>
						)}
					</div> */}
					{/* rendering tags */}
					{/* {tags && (
						<ul className="categories">
							<li className="semi-14" id="hash">
								#
							</li>
							{tags.map((tag, id) => {
								return (
									<li className="semi-14 category" key={id}>
										{tag}
									</li>
								);
							})}
						</ul>
					)} */}
				{/* </div> */}
			</article>
		</Link>
	);
};

export default ProjectCard;
