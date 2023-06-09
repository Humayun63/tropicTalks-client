import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import useAuth from '../../../customHooks/useAuth';

const PopularInstrcutors = () => {
    const [instructors, setInstructors] = useState([])
    const { isDarkMode } = useAuth()
    {/*
    ${isDarkMode ? 'bg-slate-500' : 'bg-green-300'}
*/}
    useEffect(() => {
        fetch('https://tropic-talks-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data.slice(0, 6)))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    instructors.map(instructor => (
                        <Slide key={instructor._id}>
                            <div className={`card  glass ${isDarkMode ? 'bg-slate-500 text-white' : 'bg-green-300'}`}>
                                <figure><img className='w-full h-56' src={instructor.photo} alt={instructor.class_name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{instructor.name}</h2>
                                    <p>Email: <span>{instructor.email}</span></p>
                                </div>
                            </div>
                        </Slide>
                    ))
                }
            </div>
        </>
    );
};

export default PopularInstrcutors;