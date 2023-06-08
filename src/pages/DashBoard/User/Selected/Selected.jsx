import React from 'react';
import useSelected from '../../../../customHooks/useSelected';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../customHooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Selected = () => {
    const { myClass, refetch } = useSelected()
    const [axiosSecure] = useAxiosSecure()

    const total = myClass.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/select/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })
            }
        })
    }

    if (myClass.length === 0) {
        return <>
            <div className='flex items-center justify-center h-[90vh]'>
                <div>
                    <h2 className="text-xl text-center text-green-400">Please Select a class!</h2>
                    <Link to='/classes'>
                        <button className="btn">
                            Go To Classes
                        </button>
                    </Link>
                </div>
            </div>
        </>
    }

    return (
        <div>
            <div className='md:flex items-center justify-between space-y-2 my-6'>
                <h3 className='my-4 text-2xl font-medium'>Selected Items: {myClass.length}</h3>
                <p className='my-4 text-2xl font-medium'>Total Pay: ${total} </p>
                <Link to='/dashboard/user/payment'>
                    <button className="btn-sm btn bg-yellow-300">Pay</button>
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 shadow-2xl rounded-md">
                    <thead className="bg-green-500">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                Class Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                Instructor Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-green-200 divide-y divide-gray-200">
                        {myClass.map((classItem, index) => (
                            <tr key={classItem.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{index + 1}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{classItem.class_name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{classItem.instructor_details.instructor_name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">${classItem.price}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        className="px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
                                        onClick={() => handleDelete(classItem._id)}
                                    >
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Selected;