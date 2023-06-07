import ReactMarkdown from "react-markdown";

const Banner = ({ title, info }) => {
	return (
		<section className="banner">
			<div className="wrapper">
				<div className="banner-container">
					<h1 className="banner-heading">{title}</h1>
					<ReactMarkdown className="banner-content medium-16" children={info} />
				</div>
			</div>
		</section>
	);
};

export default Banner;
