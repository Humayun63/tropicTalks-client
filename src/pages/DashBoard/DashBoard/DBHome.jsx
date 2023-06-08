import React from 'react';
import useAuth from '../../../customHooks/useAuth';

const DBHome = () => {
    const {user} = useAuth()
    console.log("object");
    return (
        <div className='flex items-center justify-center h-[90vh]'>
            <h2 className='text-3xl uppercase text-center text-green-500'>Welcome, {user?.displayName}</h2>
        </div>
    );
};

export default DBHome;