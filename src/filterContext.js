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
    const [filters, setFilters] = useState({
        authors: '',
        pubType: '',
        year: '',
        text: '',
    });

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

    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFilters({ ...filters, [name]: value });
        console.log('click x button: ', e, 'name: ', name);
    };

    const clearFilters = () => {
        setFilters({ authors: '', pubType: '', year: '', text: '' });
    };

    const filterPub = () => {};

    useEffect(() => {
        loadPublications();
    }, [publicationsData, sort]);

    useEffect(() => {
        filterPub();
        sortPublications();
    }, [sort, publicationsData, filters]);

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
                filters,
                updateFilters,
                clearFilters,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useGlobalFilterContext = () => {
    return useContext(FilterContext);
};
