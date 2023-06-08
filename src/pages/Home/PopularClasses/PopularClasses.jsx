import React from 'react';
import usePopular from '../../../customHooks/usePopular';
import SingleCard from '../../Classes/SingleCard';
import { Rating } from '@smastrom/react-rating';

const PopularClasses = () => {
    const { classes } = usePopular()
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    classes.map(item => (
                        <div key={item._id} className={`card  glass ${item.available_seats == 0 ? 'bg-red-400' : 'bg-green-300'}`}>
                            <figure><img className='w-full h-36' src={item.class_image} alt={item.class_name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.class_name}</h2>
                                <div>
                                    <p className='text-lg my-1 font-medium'>Instructor Name: <span className='font-normal'>{item.instructor_details.instructor_name}</span></p>
                                    <p className='text-lg my-1 font-medium'>Available Seats: <span className='font-normal'>{item.available_seats}</span></p>
                                    <p className='text-lg my-1 font-medium'>Price: <span className='font-normal'> ${item.price}</span></p>
                                    <p className='text-lg my-1 font-medium'>Enrolled Students: <span className='font-normal'> {item.enrolled}</span></p>
                                    <Rating
                                        style={{ maxWidth: 120 }}
                                        value={item.rating}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default PopularClasses;