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

    // const setAuthorById = useCallback(
    //     (id) => {
    //         console.log('UTHORS: ', authors);
    //         console.log('id: ', id);
    //         const filteredAuthor = authors.filter((author) => author.id === id);
    //         setAuthor(filteredAuthor[0]);

    //         console.log('filtered author: ', filteredAuthor);
    //         console.log('author updated: ', author);
    //     },
    //     [authors, author]
    // );

    const getAuthors = useCallback(async () => {
        const authors = await getCmsResponse();

        setAuthors(authors);
    }, []);

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
