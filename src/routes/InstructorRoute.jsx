import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../customHooks/useAuth';
import useInstructor from '../customHooks/useInstructor';


const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation()

    if (loading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isInstructor) {
        return children
    }
    return <Navigate to='/' state={{from: location}}></Navigate>
};

export default InstructorRoute;