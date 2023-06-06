import React from "react";
import { Link } from "react-router-dom";
import { TbExternalLink as ExternalLink } from "react-icons/tb";

const PublicationCard = ({ publication, id }) => {
	const { publicationType, title, authors, projects, url } = publication;

	return (
		<section className="single-publication">
			{/* rendering publication  */}
			<div className="publication">
				<div className="meta-container">
					{(publicationType !== undefined || publicationType !== "") && (
						<div className="meta">
							{/* publication type */}
							{publicationType !== undefined && (
								<p
									className={`${
										publicationType === "journal article"
											? "publication-type journal bold-caps"
											: "publication-type popular bold-caps"
									}`}
								>
									{publicationType}
								</p>
							)}
						</div>
					)}

					{/* journal heading */}
					<div className="journal-heading-container">
						<h3 className="journal-heading semi-18 ">
							{title}
							{/* if url for article is present only then render */}
							{url && (
								<div className="link-container">
									<a
										href={url}
										className="heading-url regular-caps"
										target="_blank"
										rel="noreferrer"
									>
										Link
										<span className="regular-caps svg-container">
											<ExternalLink />
										</span>
									</a>
								</div>
							)}
						</h3>
					</div>
				</div>
			</div>
			{/* rendering authors */}
			{authors !== undefined && authors.length > 0 && (
				<div className="authors-container">
					<div className="authors">
						<h4 className="regular-16 auth-heading">
							{authors.length >= 2 ? "authors" : "author"}
						</h4>
						{authors && (
							<ul className="authors-list">
								{/* if length of author is > 1, then each array item concat with comma */}
								{authors.map((author, id) => {
									const { slug, name } = author.fields;

									return (
										<li key={id} className="authors-list-item">
											<Link
												to={`/people/staff/${slug}`}
												className="author-link medium-16"
											>
												{id < authors.length - 1 ? `${name},` : name}
											</Link>
										</li>
									);
								})}
							</ul>
						)}
					</div>
				</div>
			)}

			{/* rendering featured projects */}
			{projects && projects.length > 0 && (
				<div className="featured-projects-container">
					<div className="featured-projects">
						<h4 className="regular-16 featured-projects-heading">
							{projects.length > 1
								? "affiliated Projects"
								: "affiliated Project"}
						</h4>

						{/* projects list */}
						<ol className="project-list">
							{projects.map((project, id) => {
								const { subtitle, title, slug } = project.fields;
								return (
									
										<li key={id} className="project medium-16">
											<Link
												to={`/projects/${slug}`}
												className="proj-link"
												title={title}
											>
												{title}: {subtitle}
											</Link>
											{/* dot will s how up if length of subtitle length is greater than 10 letters*/}
										</li>
									
								);
							})}
						</ol>
					</div>
				</div>
			)}
		</section>
	);
};

export default PublicationCard;
