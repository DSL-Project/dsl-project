//query parameters
const PEOPLE = 'persons';
const PUBLICATIONS = 'publications';
const PROJECTS = 'projects';
// const MEDIA = 'media';
const STATIC_QUERY = 'homepage';
const TRAININGS = 'training';

const navConstants = [
    {
        id: 1,
        name: 'projects',
        url: '/projects',
        queryString: PROJECTS,
    },
    {
        id: 2,
        name: 'programs',
        url: '/training',
        queryString: TRAININGS,
    },
    {
        id: 3,
        name: 'people',
        url: '/people',
        queryString: PEOPLE,
    },
    {
        id: 4,
        name: 'publications',
        url: '/publications',
        queryString: PUBLICATIONS,
    },
    {
        id: 5,
        name: 'contact',
        url: '/contact',
        queryString: STATIC_QUERY,
    },
];

export {
    navConstants,
    STATIC_QUERY,
    PUBLICATIONS,
    PROJECTS,
    TRAININGS,
    PEOPLE,
};
