import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import useAuth from '../../../customHooks/useAuth';

const Header = () => {
    const {  user, logOut } = useAuth()
    console.log(user)
    console.log(user)
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully logout!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })
    }

    const menuItems = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>Home</NavLink></li>
        <li><NavLink to='/instructors' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>Instructors</NavLink></li>
        <li><NavLink to='/classes' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>Classes</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to='dashboard' className={({ isActive }) => isActive ? 'tropic-active' : 'tropic-default'}>Dashboard</NavLink></li>
                <li>
                    <img src={user.photoURL} alt="User Photo" className='w-16 rounded-full border' title={user?.displayName} />
                </li>
            </>
        }
    </>
    return (
        <>
            <div className="navbar bg-green-300 rounded-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="font-bold normal-case text-3xl inline-flex items-center">
                        <img src={logo} className='w-12' alt="Logo" />
                        <p>
                            Tropic<span className="text-green-500">Talks</span>
                        </p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <button className="btn" onClick={handleLogout}>LogOut</button>
                            </> :
                            <>
                                <Link to='/login'>
                                    <button className='btn border-0'>Login</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default Header;