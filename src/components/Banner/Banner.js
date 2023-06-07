import ReactMarkdown from "react-markdown";

const Banner = ({ title, info }) => {
	return (
		<section className="banner">
			<div className="wrapper">
				<div className="banner-container">
					<h1 className="banner-heading">{title}</h1>
					<p className="banner-content medium-16"><ReactMarkdown>{info}</ReactMarkdown></p>
				</div>
			</div>
		</section>
	);
};

export default Banner;
