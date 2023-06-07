import React from "react";
import { useGlobalContext } from "../../appContext";
import { Link } from "react-router-dom";
// import { printMonthYear } from "../../utils";

const RightPane = () => {
	const { authorProjects, authorPublications } = useGlobalContext();

	console.log(authorPublications)

	return (
		<aside className="right-panes">
			{/* associated projects to this person */}
			<div className="projects-container container">
				<h3 className="bold-16 heading">affiliated projects</h3>
				<ul className="project-list list">
					{authorProjects.map((project, id) => {
						const { subtitle, slug: projectSlug, title } = project;
						return (
							<li key={id} className="list-item">
								<Link
									to={`/projects/${projectSlug}`}
									className="medium-16 project"
								>
									{title && (
										<span>
											{title}
											{subtitle ? `: ${subtitle}` : ""}
										</span>
									)}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="underline" />
			{/* publications of this person */}
			<div className="publications-container container">
				<h3 className="bold-16 heading">publications </h3>
				<ul className="publication-list list">
					{authorPublications.map((article, id) => {
						const title = article?.title || null;
						// const date = article?.date || null;

						return (
							<li key={id} className="list-item">
								{title !== null && (
									<div className="publication-container">
										<p className="medium-16 publication">{title}</p>
									</div>
								)}

								{/* {date !== null && (
									<div className="date-container">
										<p className="medium-16 publication-on ">
											<time
												dateTime={date}
												className="medium-16 publication-date"
											>
												Published {printMonthYear(date)}
											</time>
										</p>
									</div>
								)} */}
							</li>
						);
					})}
				</ul>
			</div>
		</aside>
	);
};

export default RightPane;
