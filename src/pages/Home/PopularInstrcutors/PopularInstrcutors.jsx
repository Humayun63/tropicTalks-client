import React, { useEffect, useState } from 'react';

const PopularInstrcutors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data.slice(0,6)))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    instructors.map(instructor => (
                        <div key={instructor._id} className={`card  glass ${instructor.available_seats == 0 ? 'bg-red-400' : 'bg-green-300'}`}>
                            <figure><img className='w-full h-56' src={instructor.photo} alt={instructor.class_name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{instructor.name}</h2>
                                <p>Email: <span>{instructor.email}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default PopularInstrcutors;