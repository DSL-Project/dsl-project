import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
} from 'react';
import useContentful from './hooks/useContenful';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [authors, setAuthors] = useState([]);
    const [author, setAuthor] = useState({});
    const { getCmsResponse } = useContentful();

    const setAuthorById = (id) => {
        const filteredAuthor = authors.filter((author) => author.id === id);
        setAuthor(...filteredAuthor);
    };

    const getAuthors = useCallback(async () => {
        const authors = await getCmsResponse();

        setAuthors(authors);
    }, []);

    // getCmsResponse

    useEffect(() => {
        getAuthors();
    }, [getAuthors]);
    return (
        <AppContext.Provider value={{ authors, author, setAuthorById }}>
            {children}
        </AppContext.Provider>
    );
};

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext };
