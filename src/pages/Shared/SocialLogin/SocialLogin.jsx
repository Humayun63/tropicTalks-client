import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAuth from '../../../customHooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn, user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((data) => {
                console.log(data)
                const loggedUser = {
                    email: data?.user?.email,
                    name: data?.user?.displayName
                }
                fetch('https://tropic-talks-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Welcome ${user?.displayName ? user?.displayName : ''}`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true })

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

    return (
        <div className='my-4 text-center'>
            <button className='btn' onClick={handleGoogleSignIn}>
                <FaGoogle></FaGoogle>
                Continue With Google
            </button>
        </div>
    );
};

export default SocialLogin;