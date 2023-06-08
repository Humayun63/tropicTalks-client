import React from 'react';
import useEnrolled from '../../../../customHooks/useEnrolled';

const Enrolled = () => {
    const { enrolledClass } = useEnrolled()
    console.log(enrolledClass)
    return (
        <div>
            <div>
                <h1 className='text-3xl text-center text-green-500 font-bold my-8'>Your Enrolled Courses</h1>
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
                            
                        </tr>
                    </thead>
                    <tbody className="bg-green-200 divide-y divide-gray-200">
                        {enrolledClass.map((classItem, index) => (
                            <tr key={classItem._id}>
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
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Enrolled;