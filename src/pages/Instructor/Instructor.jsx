import React, { useEffect, useState } from 'react';
const Instructor = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table bg-green-200">
                    <thead>
                        <tr>
                            <th className='text-2xl'>
                                #
                            </th>
                            <th className='text-2xl'>Image</th>
                            <th className='text-2xl'>Name</th>
                            <th className='text-2xl'>Email Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructors.map((instructor, index) => (
                                <tr key={instructor._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>

                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={instructor?.photo} alt="Instructor Image" />
                                            </div>
                                        </div>

                                    </td>
                                    <td>
                                        {
                                            instructor?.name
                                        }
                                    </td>
                                    <td>
                                        {
                                            instructor?.email
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Instructor;