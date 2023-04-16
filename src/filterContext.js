import {
    createContext,
    useState,
    useContext,
    useEffect,
    useCallback,
} from 'react';
import { useGlobalContext } from './appContext';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const { publicationsData } = useGlobalContext();
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [publications, setPublications] = useState([]);
    const [filteredPublications, setFilteredPublications] =
        useState(publicationsData);
    const [sort, setSort] = useState('');

    const openSubmenu = () => {
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    const loadPublications = useCallback(() => {
        setPublications([...publicationsData]);
        setFilteredPublications([...publicationsData]);
    }, [publicationsData, sort]);

    const updateSort = (e) => {
        // const name = e.target.name;
        const value = e.target.value;
        setSort(value);
    };

    const sortPublications = useCallback(() => {
        // this is inplace sorting, we wont get new array.
        let tempPublications = [...publicationsData];

        if (sort === 'yearL') {
            tempPublications = tempPublications.sort((a, b) => {
                const aDate = parseInt(a.date.split('-')[0]);
                const bDate = parseInt(b.date.split('-')[0]);

                return aDate - bDate;
            });
        }
        if (sort === 'yearH') {
            tempPublications = tempPublications.sort((a, b) => {
                const aDate = parseInt(a.date.split('-')[0]);
                const bDate = parseInt(b.date.split('-')[0]);

                return bDate - aDate;
            });
        }
        setFilteredPublications(tempPublications);
    }, [publicationsData, sort]);

    useEffect(() => {
        loadPublications();
    }, [publicationsData, sort]);

    useEffect(() => {
        sortPublications();
    }, [sort, publicationsData]);

    return (
        <FilterContext.Provider
            value={{
                isSubmenuOpen,
                openSubmenu,
                closeSubmenu,
                toggleSubmenu,
                publications,
                filteredPublications,
                updateSort,
                sort,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useGlobalFilterContext = () => {
    return useContext(FilterContext);
};
