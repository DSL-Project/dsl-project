import React from 'react';
import { Outlet } from 'react-router-dom';
// import NavBar from "../NavBar/NavBar";
import Footer from '../Footer';
import Header from '../Header/Header';
import { useGlobalContext } from '../../appContext';

const SharedLayout = () => {
    const { openMenu } = useGlobalContext();
    return (
        <>
            {/* <NavBar /> */}
            <Header />
            {openMenu || <Outlet />}
            <Footer />
        </>
    );
};

export default SharedLayout;
