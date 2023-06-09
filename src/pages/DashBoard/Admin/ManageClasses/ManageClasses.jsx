import React, { useState } from 'react';
import useAllClass from '../../../../customHooks/useAllClass';
import useAxiosSecure from '../../../../customHooks/useAxiosSecure';

const ManageClasses = () => {
    const { allClass, refetch } = useAllClass()
    const [axiosSecure] = useAxiosSecure()
    const [selectedId, setSelectedId] = useState(null)
    const [error, setError] = useState(false)

    const handleStatus = (status, id) => {
        axiosSecure.patch(`/all-class/${id}`, { status: status })
            .then(res => {
                refetch()
                console.log(res.data)
            })
    }

    const handleOpenModal = (id) => {
        setError(false)
        setSelectedId(id);
        window.my_modal_3.showModal();
    };

    const handleFeedback = event => {
        event.preventDefault()
        const feedback = event.target.feedback.value;

        if (feedback === '') {
            setError(true)
            return
        }


        axiosSecure.patch(`/all-class/${selectedId}`, { feedback: feedback })
            .then(res => {
                refetch()
                console.log(res.data)
                window.my_modal_3.close()
                event.target.reset()
            })
    }

    return (
        <div>
            <h2 className='text-2xl text-center font-medium'>Manage class: {allClass.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    allClass.map(item => (
                        <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
                            <div className="mb-4">
                                <img src={item.class_image} alt="Class Image" className="w-full h-auto mb-2" />
                                <p className="text-lg font-semibold">{item.class_name}</p>
                                <p className="text-sm text-gray-500">Instructor: {item.instructor_details.instructor_name}</p>
                                <p className="text-sm text-gray-500">Instructor Email: {item.instructor_details.instructor_email}</p>
                                <p className="text-sm text-gray-500">Available Seats: {item.available_seats}</p>
                                <p className="text-sm text-gray-500">Price: {item.price}</p>
                                <p className="text-sm text-gray-500">Status: {item.status}</p>
                            </div>
                            <div className="flex justify-around items-center">
                                <button className="btn-xs btn-success btn rounded-md" disabled={item.status !== 'pending'} onClick={() => handleStatus('approved', item._id)}>Approve</button>
                                <button className="btn-xs btn btn-error rounded-md" disabled={item.status !== 'pending'} onClick={() => handleStatus('denied', item._id)}>Denied</button>
                                <button onClick={() => handleOpenModal(item._id)} className="btn-xs btn-info btn rounded-md ">Send Feedback</button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Modal for feedback */}
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box" onSubmit={handleFeedback}>
                    <h3 className="font-bold text-lg">Send Feedback!</h3>
                    <div>
                        <textarea name='feedback' className="w-full my-2 textarea textarea-ghost" placeholder="Feedback"></textarea>
                        {error && <p className='text-red-500 my-1'>Can't be empty!</p>}
                        <input type="submit" value="Send" className='btn' />
                    </div>
                    <p className='mt-2'><small>Press Esc to exit!</small></p>
                </form>
            </dialog>

        </div>
    );
};

export default ManageClasses;