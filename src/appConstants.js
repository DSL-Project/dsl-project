//query parameters
const PEOPLE = "persons";
const PUBLICATIONS = "publications";
const PROJECTS = "projects";
// const MEDIA = 'media';
const STATIC_QUERY = "homepage";
const PROGRAMS = "programs";

const navConstants = [
	{
		id: 1,
		name: "projects",
		url: "/projects",
		queryString: PROJECTS,
	},
	{
		id: 2,
		name: "programs",
		url: "/programs",
		queryString: PROGRAMS,
	},
	{
		id: 3,
		name: "publications",
		url: "/publications",
		queryString: PUBLICATIONS,
	},
	{
		id: 4,
		name: "people",
		url: "/people",
		queryString: PEOPLE,
	},
	{
		id: 5,
		name: "contact",
		url: "/contact",
		queryString: STATIC_QUERY,
	},
];

export {
	navConstants,
	STATIC_QUERY,
	PUBLICATIONS,
	PROJECTS,
	PROGRAMS,
	PEOPLE,
};
