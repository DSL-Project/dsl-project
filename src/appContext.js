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

    useEffect(() => {
        cmsQuery();
    }, [query]);

    useEffect(() => {
        // only to update banner content, this will run only once in
        getCmsResponse(STATIC_QUERY).then((response) => {
            setBannerContent(response);
        });
    }, []);

    return (
        <AppContext.Provider value={{ response, setQuery, bannerContent }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
