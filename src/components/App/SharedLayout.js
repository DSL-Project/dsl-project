import React from 'react';
import { Outlet } from 'react-router-dom';
// import NavBar from "../NavBar/NavBar";
import Footer from '../Footer';
import Header from '../Header/Header';

const SharedLayout = () => {
    return (
        <>
            <Header />
            {/* <NavBar /> */}
            <Outlet />
            <Footer />
        </>
    );
};

export default SharedLayout;
