/*This context calls getStatic method from 'useContentful' hook.
getStatic method fetch 'static' field from contentful
 */
import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
} from 'react';
import { STATIC_QUERY, PROJECTS, PUBLICATIONS, PEOPLE } from './appConstants';
import useContentful from './hooks/useContenful';

const AppContext = createContext();
const AppProvider = ({ children }) => {
    const { getCmsResponse } = useContentful();

    // loading state
    const [isLoading, setIsLoading] = useState(false);

    // ** response state updates everytime user clicks on navbar links **
    const [response, setResponse] = useState([]);

    // ** query state updates everytime user clicks on navbar links **
    const [query, setQuery] = useState('');

    // ** banner populate during initial app loads ONLY , only once **
    const [bannerContent, setBannerContent] = useState({});

    // side bar menu state
    const [openMenu, setOpenMenu] = useState(false);

    // tablet view will turn to true, when app goes below or equal to 835px
    const [tabletView, setTabletView] = useState(false);

    // mobile view will turn to true, when app goes below or equal to 375px
    const [mobileView, setMobileView] = useState(false);

    // author slug
    const [authorSlug, setAuthorSlug] = useState('');

    //projects by author
    const [authorProjects, setAuthorProjects] = useState([]);

    //publications by author
    const [authorPublications, setAuthorPublications] = useState([]);

    // home page data
    const [homepageData, setHomepageData] = useState([]);

    // project data for project carousel
    const [projectsData, setProjectsData] = useState([]);

    // people data for project carousel
    const [peopleData, setPeopleData] = useState([]);

    // publications data
    const [publicationsData, setPublicationsData] = useState([]);

    const cmsQuery = useCallback(
        async (queryName) => {
            setIsLoading(true);
            try {
                const response = await getCmsResponse(queryName);
                setResponse(response);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(true);
            }
            setIsLoading(false);
        },
        [query]
    );

    const handleResize = () => {
        setTabletView(false);
        setMobileView(false);
        if (window.innerWidth < 837) {
            setTabletView(true);
        }
        if (window.innerWidth < 375) {
            setMobileView(true);
        }
    };

    const getProjectsByAuthSlug = (authSlug) => {
        // quering projects: get All projects
        getCmsResponse(PROJECTS).then((response) => {
            // STEP 1: filter the array that has author slugs
            const arrayWithAuthSlugs = response.filter(
                (resp) => resp?.team?.[0]?.fields.slug
            );

            //STEP 2: filter the authors slug wrt user's request
            const dataArray = arrayWithAuthSlugs.filter(
                (response) => response.team[0].fields.slug === authSlug
            );

            setAuthorProjects(dataArray);
        });
    };

    const getPublicationsByAuthSlug = (authSlug) => {

        getCmsResponse(PUBLICATIONS).then((response) => {

            const arrayWithAuthors = response.filter((resp) => resp?.authors);
				
						const matchingItems = arrayWithAuthors.filter((item) =>
							item.authors.some((author) => author.fields.slug === authSlug)
						);

						setAuthorPublications(matchingItems);

						return matchingItems;
        });
    };

    const getBannerContent = (response) => {
        const targetObj = response[0];

        //(2) filter the response, and return new object
        const filterItems = [
            'projectsTitle',
            'projectsBody',
            'trainingTitle',
            'trainingBody',
            'publicationsTitle',
            'publicationsBody',
            'peopleTitle',
            'peopleBody',
        ];
        const filteredObject = Object.keys(targetObj)
            .filter((key) => filterItems.includes(key))
            .reduce((cur, key) => {
                return Object.assign(cur, { [key]: targetObj[key] });
            }, {});

        //(3) set the banner state
        setBannerContent(filteredObject);
    };

    const getHomeData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await getCmsResponse(STATIC_QUERY);

            setHomepageData(response);
            getBannerContent(response);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(true);
        }
        setIsLoading(false);
    }, []);

    const getProjectsData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await getCmsResponse(PROJECTS);
            setProjectsData(response);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(true);
        }
        setIsLoading(false);
    }, []);
    const getPeopleData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await getCmsResponse(PEOPLE);
            setPeopleData(response);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(true);
        }
        setIsLoading(false);
    }, []);
    const getPublicationsData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await getCmsResponse(PUBLICATIONS);
            setPublicationsData(response);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(true);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        getProjectsData();
        getPeopleData();
        getPublicationsData();
        getHomeData();
    }, [getProjectsData, getPeopleData, getPublicationsData, getHomeData]);

    useEffect(() => {
        cmsQuery(query);
        getProjectsByAuthSlug(authorSlug);
        getPublicationsByAuthSlug(authorSlug);
    }, [authorSlug, query]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
    return (
        <AppContext.Provider
            value={{
                isLoading,
                response,
                setQuery,
                tabletView,
                mobileView,
                setAuthorSlug,
                authorProjects,
                authorPublications,
                openMenu,
                setOpenMenu,
                homepageData,
                projectsData,
                peopleData,
                publicationsData,
                ...bannerContent,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };

// const data = [
// 	{
// 		authors:[
// 			{
// 				fields: {
// 					name: 'Mark',
// 					slug: 'mark-pickup'
// 				}
// 			},
// 			{
// 				fields: {
// 					name: 'colin',
// 					slug: 'colin-damelio'
// 				}
// 			}
// 		],
// 		title: "Pickup, Mark, Dominik Stecula, and Clifton van der Linden. Who Shares Covid-19 Conspiracies Online? Survey Evidence from 5 Countries.",​
// 		url: "https://journalqd.org/article/view/3514"
// 	}
// ]