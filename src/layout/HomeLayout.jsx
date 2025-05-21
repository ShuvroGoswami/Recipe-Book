import React from 'react';
import Header from '../Component/Header';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;