import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <>
            <div className='space-y-12'>
                <Header></Header>
                <div className='tropic-outlet'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Main;