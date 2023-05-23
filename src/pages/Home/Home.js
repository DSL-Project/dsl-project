import React from "react";
import Announcement from "./Announcement";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import ProjectsCarousel from "./ProjectsCarousel";
import { useGlobalContext } from "../../appContext";
import defaultImg from "../../assets/defaultImg.jpg";
import LoadingState from "../../components/LoadingState/LoadingState";
import { NavHashLink as Link } from "react-router-hash-link";

function Home() {
	const handleSubmit = () => {
		window.open("https://buttondown.email/digitalsocietylab", "popupwindow");
	};
	const { homepageData, isLoading } = useGlobalContext();

	if (!homepageData || homepageData.length === 0) {
		return <LoadingState />;
	}
	const homeStatic = homepageData[0];

	if (isLoading) {
		return <LoadingState />;
	}

	return (
		<div className="home">
			<Announcement />
			<div className="home-wrapper">
				<div className="welcome-container">
					<h1 id="home">
						{homeStatic?.hometitle ?? `Welcome to the Digital Society Lab`}
					</h1>
					<div className="regular-16">
						{homeStatic.homebody.content.map((outerItem, outerIndex) => (
							<div key={outerIndex}>
								{outerItem.content.map((innerItem, innerIndex) => (
									<div key={innerIndex}>
										<p className="description">{innerItem.value}</p>
										{innerIndex !== outerItem.content.length - 1 && (
											<div key={`line-break-${innerIndex}`}>
												<br />
											</div>
										)}
									</div>
								))}
							</div>
						))}
					</div>
				</div>

				<div className="recent-projects">
					<Link
						to="#projectsCarousel"
						smooth={true}
						// duration={500}
						className="bold-18"
					>
						See recent projects
					</Link>

					<Link to="#projectsCarousel" smooth={true} className="down-arrow">
						<AiOutlineArrowDown className="svg-arrow" />
					</Link>
				</div>

				<div className="carousel-con">
					<ProjectsCarousel />
				</div>
			</div>

			<div className="home-wrapper">
				<div className="funding-container">
					<h2>
						{homeStatic?.homeFundersText ?? `Made possible with funding from:`}
					</h2>

					<div className="funding-logos">
						{homeStatic?.homeFunders?.map((funder) => (
							<div key={funder.sys.id} className="funder-logo">
								<a
									href={`https:${funder.fields.description}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={`https:${funder.fields.file.url}`}
										alt={funder.fields.title}
									/>
								</a>
							</div>
						)) ?? (
							<div className="funder-logo">
								<img
									src={defaultImg}
									alt="a map indicating digital society lab location"
								/>
							</div>
						)}
					</div>
				</div>

				<div className="home-contact">
					<div className="home-address">
						<div className="home-name">
							<div className="bold-18">{homeStatic.hometitle.slice(15)}</div>

							<div className="media-container">
								<a
									href="https://twitter.com/DigSocietyLab"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Follow us on Twitter"
								>
									<FaTwitter aria-hidden="true" />
									<span className="sr-only">Follow us on Twitter</span>
								</a>
								<a
									href="https://www.facebook.com/DigSocietyLab"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Follow us on Facebook"
								>
									<FaFacebookF aria-hidden="true" />
									<span className="sr-only">Follow us on Facebook</span>
								</a>
							</div>
						</div>
						<div className="street-address bold-18">
							<p>{homeStatic.streetAddress}</p>
							<p>{homeStatic.city}</p>
							<p>
								<span>{homeStatic.province}</span>&nbsp;
								<span>{homeStatic.postcode}</span>
							</p>
						</div>
						<div className="contact-methods bold-16">
							<div>Phone</div>
							<div>{homeStatic.phoneNumber}</div>
							<div>Email</div>
							<div>
								<a href="mailto: webmaster@digitalsocietylab.org">
									{homeStatic.email}
								</a>
							</div>
						</div>
					</div>
					<div className="stay-updated">
						<h2>Stay updated with the Digital Society Lab</h2>
						<form
							action="https://buttondown.email/api/emails/embed-subsribe/digitalsocietylab"
							method="post"
							target="popupwindow"
							onSubmit={handleSubmit}
						>
							<input
								id="sign-up"
								type="email"
								name="email"
								placeholder="email@address.com"
								className="regular-14"
							/>
							<input type="hidden" name="tag" value="placeholder-signup" />
							<input type="hidden" value="1" name="embed" />

							<label sr-only="true" htmlFor="sign-up" />
							<button className="regular-14">SIGN UP</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
