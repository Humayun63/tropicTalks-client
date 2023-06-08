import React from 'react';
import useClasses from '../../customHooks/useClasses';
import SingleCard from './SingleCard';


const Classes = () => {
    const { classes } = useClasses()
    // console.log(myClass)
    return (
        <>
            <h2 className="text-2xl text-center font-bold mb-6">All Classes</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    classes.map(item => (
                        <SingleCard
                            key={item._id}
                            item={item}
                        ></SingleCard>
                    ))
                }
            </div></>
    );
};

export default Classes;