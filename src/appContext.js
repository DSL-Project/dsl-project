/*This context calls getStatic method from 'useContentful' hook.
getStatic method fetch 'static' field from contentful
 */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { STATIC_QUERY } from './appConstants';
import useContentful from './hooks/useContenful';

const AppContext = createContext();
const AppProvider = ({ children }) => {
    const { getCmsResponse } = useContentful();

    const [response, setResponse] = useState([]);
    const [query, setQuery] = useState(STATIC_QUERY);
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

    const filterBannerContents = (response) => {
        // this function filters content from response for banner on each page.
        const filter1 = 'projectsTitle';
        const filter2 = 'projectsBody';
        const filter3 = 'trainingTitle';
        const filter4 = 'trainingBody';
        const filter5 = 'publicationsTitle';
        const filter6 = 'publicationsBody';
        const filter7 = 'peopleTitle';
        const filter8 = 'peopleBody';
        const targetObj = response;

        const filteredObject = Object.keys(targetObj)
            .filter(
                (key) =>
                    key === filter1 ||
                    key === filter2 ||
                    key === filter3 ||
                    key === filter4 ||
                    key === filter5 ||
                    key === filter6 ||
                    key === filter7 ||
                    key === filter8
            )
            .reduce((cur, key) => {
                return Object.assign(cur, { [key]: targetObj[key] });
            }, {});

        return filteredObject;
    };

    useEffect(() => {
        cmsQuery();
    }, [query]);

    useEffect(() => {
        // update banner content
        getCmsResponse(STATIC_QUERY).then((response) => {
            setBannerContent(response);

            //updating banner state
            const bannerObject = filterBannerContents(response[0]);
            setBannerContent(bannerObject);
        });
    }, []);

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
