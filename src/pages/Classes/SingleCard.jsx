import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleCard = ({ item }) => {
    console.log(item)
    const { class_image, class_name, price, rating, available_seats, instructor_details } = item || {}
    return (
        <>
            <div className={`card  glass ${available_seats == 0 ? 'bg-red-400' : 'bg-green-300'}`}>
                <figure><img className='w-full h-36' src={class_image} alt={class_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{class_name}</h2>
                    <div>
                        <p className='text-lg my-1 font-medium'>Available Seats: <span className='font-normal'>{available_seats}</span></p>
                        <p className='text-lg my-1 font-medium'>Price: <span className='font-normal'> ${price}</span></p>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn" disabled={available_seats == 0}>Enroll Now!</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleCard;