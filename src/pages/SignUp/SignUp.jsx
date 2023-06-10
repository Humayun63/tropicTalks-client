import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useAuth from '../../customHooks/useAuth';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { createUser, updateUser, isDarkMode } = useAuth()
    const navigate = useNavigate()
    const onSubmit = data => {

        if (data.password !== data.confirm) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password and Confirm password are not same!',
            })
            return
        }

        createUser(data.email, data.password)
            .then(() => {
                updateUser(data.name, data.photo)
                    .then(() => {
                        const loggedUser = { email: data.email, name: data.name }

                        fetch('https://tropic-talks-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(loggedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Register Success!',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    reset()
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `${error.message}`,
                        })
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
        <>
            <div className="hero my-16">
                <div className={`card  ${isDarkMode ? 'text-white bg-slate-500' : 'bg-green-300'} w-full p-4 shadow-2xl`}>
                    <div className="text-center px-8">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">
                            Join our language learning community and embark on an exciting journey of discovering new cultures and expanding your linguistic horizons! Sign up now to unlock a world of opportunities and gain access to high-quality language courses taught by experienced instructors. Whether you're a beginner or an advanced learner, our platform offers a wide range of classes tailored to suit your needs. Don't miss out on this chance to enhance your language skills and connect with a global network of language enthusiasts. Sign up today and let the adventure begin!
                        </p>
                    </div>
                    <form className="card-body text-black" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className={`${isDarkMode ? 'text-white' : 'label-text'}`}>Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="mt-1 text-red-500">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={`${isDarkMode ? 'text-white' : 'label-text'}`}>Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="mt-1 text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={`${isDarkMode ? 'text-white' : 'label-text'}`}>Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password", {
                                required: true, min: 6,
                                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{6,})/
                            })} />
                            {errors.password?.type === 'required' && <span className="mt-1 text-red-500">Password is required</span>}
                            {errors.password?.type === 'min' && <span className='text-red-400 mt-1'>Password should be min 6 characters</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-400 mt-1'>Password should have at least one lowercase, one uppercase, one special character and minimum 6 characters</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={`${isDarkMode ? 'text-white' : 'label-text'}`}>Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm password" className="input input-bordered" {...register("confirm", { required: true })} />
                            {errors.confirm && <span className="mt-1 text-red-500">Confirm Password is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={`${isDarkMode ? 'text-white' : 'label-text'}`}>PhotoURL</span>
                            </label>
                            <input type="text" placeholder="Your Photo URL" className="input input-bordered" {...register("photo", { required: true })} />
                            {errors.photo && <span className="mt-1 text-red-500">Photo URL is required</span>}
                        </div>
                        <div>
                            <label className="label">
                                <p className={`${isDarkMode && 'text-white'} label-text-alt`}>
                                    Already Have an Account?
                                    <Link to='/login' className='mx-1 font-bold link'>
                                        Login Here!
                                    </Link>
                                </p>

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="SignUp" className='btn' />
                        </div>
                    </form>
                    <hr />
                    <SocialLogin></SocialLogin>
                </div>

            </div>
        </>
    );
};

export default SignUp;