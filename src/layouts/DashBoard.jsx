import React from 'react';
import { FaBookReader, FaGraduationCap, FaHome, FaHouseUser, FaPlus, FaUsers, FaWallet } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png'
import useAdmin from '../customHooks/useAdmin';
import useInstructor from '../customHooks/useInstructor';

const DashBoard = () => {
    const { isAdmin } = useAdmin()
    const { isInstructor } = useInstructor()

    let routes;

    if (isAdmin) {
        routes = <>
            <li><NavLink to='/dashboard/home' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>
                <FaHouseUser></FaHouseUser>
                Dashboard Home
            </NavLink></li>
            <li><NavLink to='/dashboard/admin/manage-users' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>
                <FaUsers></FaUsers>
                Manage Users
            </NavLink></li>
            <li><NavLink to='/dashboard/admin/manage-classes' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>
                <FaGraduationCap></FaGraduationCap>
                Manage Classes
            </NavLink></li>

        </>
    } else if (isInstructor) {
        routes = <>
            <li><NavLink to='/dashboard/home' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>
                <FaHouseUser></FaHouseUser>
                Dashboard Home
            </NavLink></li>
            <li><NavLink to='/dashboard/instructor/add-class' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>
                <FaPlus></FaPlus>
                Add New Class
            </NavLink></li>
            <li><NavLink to='/dashboard/instructor/all-class' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>
                <FaGraduationCap></FaGraduationCap>
                My Classes
            </NavLink></li>
        </>
    } else {
        routes = <>
            <li><NavLink to='/dashboard/home' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>
                <FaHouseUser></FaHouseUser>
                Dashboard Home
            </NavLink></li>
            <li><NavLink to='/dashboard/user/selected' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>
                <FaBookReader></FaBookReader>
                Selected Courses
            </NavLink></li>
            <li><NavLink to='/dashboard/user/enrolled' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>
                <FaGraduationCap></FaGraduationCap>
                Enrolled Courses
            </NavLink></li>
            <li><NavLink to='/dashboard/user/payment-history' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>
                <FaWallet></FaWallet>
                Payment History
            </NavLink></li>
        </>
    }

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content m-4">

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>
                    <div>
                        <Outlet></Outlet>
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 h-full bg-green-200 text-base-content">

                        <Link to='/' className="font-bold normal-case text-3xl inline-flex items-center">
                            <img src={logo} className='w-12' alt="Logo" />
                            <p>
                                Tropic<span className="text-green-500">Talks</span>
                            </p>
                        </Link>

                        <div className="divider"></div>

                        {routes}

                        <div className="divider"></div>

                        <li><Link to='/' className='my-8 text-xl font-medium'>
                            <FaHome></FaHome>
                            TropicTalks Home
                        </Link></li>

                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashBoard;