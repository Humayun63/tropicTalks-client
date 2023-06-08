import React, { useEffect, useState } from 'react';
import useAuth from '../../../../customHooks/useAuth';
import useAxiosSecure from '../../../../customHooks/useAxiosSecure';
import SingleClass from './SingleClass';

const AllClass = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [classes, setClasses] = useState([])

    useEffect(() => {
        axiosSecure(`/instructor/class?email=${user.email}`)
            .then(res => {
                setClasses(res.data)
            })
    }, [user])

    return (
        <div>
            <h2 className='text-xl text-center my-8'>Your All Classes. Total ${classes.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    classes.map(item =>(
                        <SingleClass
                            key={item._id}
                            item={item}
                        ></SingleClass>
                    ))
                }
            </div>
        </div>
    );
};

export default AllClass;