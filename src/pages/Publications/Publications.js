import React, { useEffect } from "react";
import { useGlobalContext } from "../../appContext";
import Banner from "../../components/Banner/Banner";
import Searchbar from "./Searchbar";
import { PUBLICATIONS } from "../../appConstants";
import PublicationCard from "./PublicationCard";
import LoadingState from "../../components/LoadingState/LoadingState";
import { useGlobalFilterContext } from "../../filterContext";

const Publications = () => {
	const { closeSubmenu, filteredPublications: response } =
		useGlobalFilterContext();

	const sortedResponse = response.sort(
		(a, b) => new Date(b.date) - new Date(a.date)
	);

	const {
		// response,
		publicationsBody,
		publicationsTitle,
		setQuery,
		isLoading,
	} = useGlobalContext();

	useEffect(() => {
		window.addEventListener("beforeunload", setQuery(PUBLICATIONS));
		return () => {
			window.removeEventListener("beforeunload", setQuery(PUBLICATIONS));
		};
	}, [setQuery]);

	if (isLoading) {
		return <LoadingState />;
	}
	if (response === undefined) {
		return null;
	}

	return (
		<main className="publication-main">
			<Banner title={publicationsTitle} info={publicationsBody} />

			<div className="wrapper pub-wrapper">
				<Searchbar />
				{sortedResponse.map((publication, id) => {
					return (
						<div className="single-content" key={id} onClick={closeSubmenu}>
							{publication.date !== undefined && (
								<h2 className="year">{publication.date.substring(0, 4)}</h2>
							)}
							<PublicationCard key={id} publication={publication} id={id} />
						</div>
					);
				})}
			</div>
		</main>
	);
};

export default Publications;
