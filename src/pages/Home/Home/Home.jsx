import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | TropicTalks</title>
            </Helmet>
            <main className='space-y-12'>
                <section className='mx-2 md:bg-green-200 pb-2 md:pt-4 rounded-md'>
                    <Slider></Slider>
                </section>
                <section>
                    <h2 className='text-3xl text-green-500 font-medium text-center mb-6'>Popular language classes</h2>
                    <PopularClasses></PopularClasses>   
                </section>
            </main>
        </>
    );
};

export default Home;
