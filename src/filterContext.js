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
    const [filteredPublications, setFilteredPublications] = useState([]);
    // const [filteredPublications, setFilteredPublications] =
    //     useState(publicationsData);
    const [sort, setSort] = useState('');
    const [filters, setFilters] = useState({
        pubType: '',
        authors: '',
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
    }, [publicationsData]);

    const updateSort = useCallback(
        (e) => {
            // const name = e.target.name;
            const value = e.target.value;
            setSort(value);
            console.log('VALUE: ', sort);
        },
        [sort]
    );

    const sortPublications = useCallback(() => {
        // this is inplace sorting, we wont get new array.
        const allPublications = publications;
        // const allPublications = filteredPublications;
        let tempPublications = [...allPublications];

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
    }, [publications, sort]);

    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (value === undefined) {
            value = '';
        }
        setFilters({ ...filters, [name]: value });
    };

    const clearFilters = () => {
        setFilters({ authors: '', pubType: '', year: '', text: '' });
    };

    const filterPub = useCallback(() => {
        // (1) get all the publications from state
        const allPublications = publications;

        // (2) get all the filters from state
        const { authors, pubType, year, text } = filters;

        //(3) make a fresh copy of all the publications before filtering
        let tempPublications = [...allPublications];

        // (4) start filtering
        // if search string is anything, but empty string then start filtering the title
        if (text) {
            tempPublications = tempPublications.filter((pub) => {
                return pub.title.toLowerCase().startsWith(text);
            });
        }

        // filtering pub type dropdown
        if (pubType !== '') {
            console.log('pub type: ', pubType);
            tempPublications = tempPublications.filter((pub) => {
                console.log('PUB: ', pub.publicationType);
                return (
                    pub.publicationType.toLowerCase() === pubType.toLowerCase()
                );
            });
        }

        // filtering year type dropdown
        if (year !== '') {
            tempPublications = tempPublications.filter((pub) => {
                return pub.date.split('-')[0] === year;
            });
        }

        // --------------------------
        console.log('ALL PUBLICATIONS: ', allPublications);
        console.log(
            `ALL FILTERS: \nauthors: ${authors}\npubType: ${pubType}\nyear: ${year}\ntext: ${text}`
        );

        console.log('TEMP PUB: ', tempPublications);
        // ** update the filtered publication state
        setFilteredPublications(tempPublications);
    }, [filters, publications]);

    useEffect(() => {
        loadPublications();
    }, [publicationsData, sort, loadPublications]);

    useEffect(() => {
        // sortPublications();
        filterPub();
    }, [sort, publicationsData, filters, filterPub, sortPublications]);
    useEffect(() => {
        sortPublications();
    }, [sort, sortPublications]);

    // console.log('PUBLICATIONS: ', publications);
    console.log('FILTERED PUBLICATIONS: ', filteredPublications);
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
