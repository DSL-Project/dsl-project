import { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const openSubmenu = () => {
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    return (
        <FilterContext.Provider
            value={{ isSubmenuOpen, openSubmenu, closeSubmenu, toggleSubmenu }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useGlobalFilterContext = () => {
    return useContext(FilterContext);
};
