/*This context calls getStatic method from 'useContentful' hook.
getStatic method fetch 'static' field from contentful
 */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { STATIC_QUERY, PROJECTS, PUBLICATIONS } from './appConstants';
import useContentful from './hooks/useContenful';

const AppContext = createContext();
const AppProvider = ({ children }) => {
    const { getCmsResponse } = useContentful();

    // ** response state updates everytime user clicks on navbar links **
    const [response, setResponse] = useState([]);

    // ** query state updates everytime user clicks on navbar links **
    const [query, setQuery] = useState(STATIC_QUERY);

    // ** banner populate during initial app loads ONLY , only once **
    const [bannerContent, setBannerContent] = useState({});

    // side bar menu state
    const [openMenu, setOpenMenu] = useState(false);

    // tablet view is turned true, when app goes below or equal to 835px
    const [tabletView, setTabletView] = useState(false);
    const [mobileView, setMobileView] = useState(false);

    // author slug
    const [authorSlug, setAuthorSlug] = useState('');

    //projects by author
    const [authorProjects, setAuthorProjects] = useState([]);

    //publications by author
    const [authorPublications, setAuthorPublications] = useState([]);

    // home page data
    const [homepageData, setHomepageData] = useState([]);

    const cmsQuery = React.useCallback(() => {
        if (query) {
            getCmsResponse(query).then((response) => {
                setResponse(response);
            });
        } else {
            setResponse([]);
        }
    }, [query, getCmsResponse]);

    const setBannerState = React.useCallback(() => {
        // this function set the banner state on app loads

        // (1)query cms for static field
        getCmsResponse(STATIC_QUERY).then((response) => {
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
        });
    }, []);

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

            // STEP 3 : get titles and subtitles
            const filter = ['title', 'subtitle'];
            const finalData = dataArray.map((targetObj) => {
                const filteredObject = Object.keys(targetObj)
                    .filter((key) => filter.includes(key))
                    .reduce((cur, key) => {
                        return Object.assign(cur, { [key]: targetObj[key] });
                    }, {});
                return filteredObject;
            });

            // set author projects state
            setAuthorProjects(finalData);
        });
    };

    const getPublicationsByAuthSlug = (authSlug) => {
        getCmsResponse(PUBLICATIONS).then((response) => {
            // STEP1: filter the publications that has any authors
            const arrayWithAuthors = response.filter((resp) => resp?.authors);

            //STEP 2: filter the publication  wrt user's author slug
            arrayWithAuthors.map((response) => {
                const publicationsResponse = response.authors.map((author) => {
                    if (author.fields.slug === authSlug) {
                        return response;
                    } else {
                        return null;
                    }
                });
                setAuthorPublications(publicationsResponse);

                return publicationsResponse;
            });
        });
    };

    const getHomeData = () => {
        getCmsResponse(STATIC_QUERY).then((response) => {
            if (response) {
                setHomepageData(response);
            } else {
                setHomepageData('no data');
            }
        });
    };
    useEffect(() => {
        getPublicationsByAuthSlug(authorSlug);
        getProjectsByAuthSlug(authorSlug);
        setBannerState();
        cmsQuery();
        getHomeData();
    }, [authorSlug, query, setBannerState]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <AppContext.Provider
            value={{
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
