import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import useAuth from '../customHooks/useAuth';

const Main = () => {
    const {isDarkMode} = useAuth()
    return (
        <>
            <div className={`w-full ${isDarkMode && 'bg-slate-300'}`}>
                <div className='container mx-auto'>
                    <div className='space-y-12'>
                        <Header></Header>
                        <div className='tropic-outlet'>
                            <Outlet></Outlet>
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;