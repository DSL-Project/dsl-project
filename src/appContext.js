/*This context calls getStatic method from 'useContentful' hook.
getStatic method fetch 'static' field from contentful
 */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { STATIC_QUERY } from './appConstants';
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

    useEffect(() => {
        // querying cms each time user click on nav links
        cmsQuery();
    }, [query]);

    useEffect(() => {
        // set banner state on app loads
        setBannerState();
    }, [setBannerState]);

    return (
        <AppContext.Provider value={{ response, setQuery, ...bannerContent }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
