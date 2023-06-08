import React from 'react';

const SingleClass = ({ item }) => {
    const { class_image, class_name, price, rating, enrolled, available_seats, instructor_details, status } = item || {}

    return (
        <>
            <div className={`card  glass ${available_seats == 0 ? 'bg-red-400' : 'bg-green-300'}`}>
                <figure><img className='w-full h-36' src={class_image} alt={class_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{class_name}</h2>
                    <div>
                        <p className='text-lg my-1 font-medium'>Instructor Name: <span className='font-normal'>{instructor_details.instructor_name}</span></p>
                        <p className='text-lg my-1 font-medium'>Available Seats: <span className='font-normal'>{available_seats}</span></p>
                        <p className='text-lg my-1 font-medium'>Price: <span className='font-normal'> ${price}</span></p>
                        <p className='text-lg my-1 font-medium'>Enrolled Students: <span className='font-normal'> {enrolled}</span></p>
                        <p className='text-lg my-1 font-medium'>Status: <span className='font-normal'> {status}</span></p>
                        <p className='text-lg my-1 font-medium'>Status: <span className='font-normal'> {instructor_details.instructor_email}</span></p>
                        {
                            item?.feedback &&
                            <p className='text-lg my-1 font-medium'>Feedback: <span className='font-normal text-red-400'> {item.feedback}</span></p>
                        }
                    </div>
                    <div className="card-actions mt-4">
                        <button className="btn">Update</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleClass;