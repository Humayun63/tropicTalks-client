import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstrcutors from '../PopularInstrcutors/PopularInstrcutors';
import ContactForm from '../ContactForm/ContactForm';
import { Fade } from 'react-awesome-reveal';
import useAuth from '../../../customHooks/useAuth';


const Home = () => {
    const {isDarkMode} = useAuth()
    {/*
    ${isDarkMode ? 'bg-slate-500' : 'bg-green-300'}
*/}
    return (
        <>
            <Helmet>
                <title>Home | TropicTalks</title>
            </Helmet>
            <main className='space-y-12'>
                <section className={`mx-2 pb-2 md:pt-4 rounded-md ${isDarkMode ? 'md:bg-slate-500' : 'md:bg-green-300'}`}>
                    <Slider></Slider>
                </section>
                <section>
                    <Fade delay={1e1} cascade damping={1e-1}>
                        <h2 className={`text-3xl font-medium text-center mb-6  py-4  ${isDarkMode ? 'text-white bg-slate-500' : 'bg-slate-200 text-green-500'}`}>Popular language classes</h2>
                    </Fade>
                    <PopularClasses></PopularClasses>
                </section>
                <section>
                    <Fade delay={1e1} cascade damping={1e-1}>
                        <h2 className={`text-3xl font-medium text-center mb-6  py-4  ${isDarkMode ? 'text-white bg-slate-500' : 'bg-slate-200 text-green-500'}`} >Popular Instructors</h2>
                    </Fade>
                    <PopularInstrcutors></PopularInstrcutors>
                </section>
                <section>
                    <ContactForm></ContactForm>
                </section>
            </main>
        </>
    );
};

export default Home;
