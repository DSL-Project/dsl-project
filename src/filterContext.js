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
    const [ctr, setCtr] = useState(0);
    const [filters, setFilters] = useState({
        pubType: '',
        authors: '',
        year: '',
        text: '',
    });

    const resetCtr = () => {
        setCtr(0);
    };

    const decreaseCtr = () => {
        setCtr(ctr - 1);
    };

    const increaseCtr = () => {
        setCtr(ctr + 1);
    };

    const updateCtr = useCallback(
        (n) => {
            // setCtr(ctr + n);
            setCtr((ov) => {
                return ov + n;
            });
        },
        [ctr]
    );

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

    const updateSort = (e) => {
        const value = e.target.value;
        setSort(value);
    };

    const sortPublications = useCallback(() => {
        // this is inplace sorting, we wont get new array.
        // const allPublications = publications;
        let allPublications;
        if (filteredPublications.length === 0) {
            allPublications = publications;
        } else {
            allPublications = filteredPublications;
        }
        // let tempPublications = [...allPublications];
        // let tempPublications = [...publications];
        let tempPublications = [...filteredPublications];

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

        // this if condition will remove the fiter tags one by one
        // if (e.target.value === '') {
        //     decreaseCtr();
        // }

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
        // const allPublications = publications;
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
            tempPublications = tempPublications.filter((pub) => {
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

        // authors dropdown
        if (authors !== '') {
            tempPublications = tempPublications.filter((pub) => {
                return pub.authors.map((p) => p.fields.name).includes(authors);
            });
        }

        // ** update the filtered publication state
        setFilteredPublications(tempPublications);
    }, [filters, publications]);

    useEffect(() => {
        loadPublications();
    }, [publicationsData, loadPublications]);

    useEffect(() => {
        // sortPublications();
        filterPub();
        setSort('');
    }, [filters, filterPub]);

    useEffect(() => {
        sortPublications();
    }, [sort, sortPublications]);

    return (
        <FilterContext.Provider
            value={{
                isSubmenuOpen,
                openSubmenu,
                closeSubmenu,
                toggleSubmenu,
                filters,
                updateFilters,
                clearFilters,
                publications,
                filteredPublications,
                sort,
                updateSort,
                updateCtr,
                ctr,
                resetCtr,
                decreaseCtr,
                increaseCtr,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useGlobalFilterContext = () => {
    return useContext(FilterContext);
};
