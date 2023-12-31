import React from 'react';
import useUsers from '../../../../customHooks/useUsers';
import Swal from 'sweetalert2';
import { FaUserAlt } from 'react-icons/fa';


const ManageUsers = () => {
    const { users, refetch } = useUsers()


    const handleRole = (user, role) => {
        fetch(`https://tropic-talks-server.vercel.app/users/${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify({role: role})
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} is ${role} now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => console.log(error))

    
    }

    return (
        <>
            <div>
                <h3 className='my-4 text-2xl font-medium'>Total Users: {users.length}</h3>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 shadow-2xl rounded-md">
                        <thead className="bg-green-500">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                    User Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                    User Email
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-green-200 divide-y divide-gray-200">
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{index + 1}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{user.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{user.email}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{ 
                                            user?.role ? user.role : 
                                            <FaUserAlt></FaUserAlt>
                                        }</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button disabled={user?.role === 'admin'} className="text-center mb-2 btn btn-xs" onClick={() => handleRole(user, 'admin')}>Make Admin</button>
                                        <br />
                                        <button disabled={user?.role === 'instructor'} onClick={() => handleRole(user, 'instructor')} className="btn btn-xs">Make Instructor</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageUsers;