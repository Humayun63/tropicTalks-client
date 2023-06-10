import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useForm } from "react-hook-form";
import useAuth from '../../customHooks/useAuth';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { emailSignIn, isDarkMode } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [isShow, setIsShow] = useState(false)

    const from = location.state?.from?.pathname || '/'

    const onSubmit = data => {
        emailSignIn(data.email, data.password)
            .then(() => {
                toast.success('Login Success!')
                navigate(from, { replace: true })
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
            <div className="hero my-4">
                <div className={`card  w-full p-4 shadow-2xl ${isDarkMode ? 'bg-slate-500 text-white' : 'bg-green-300'}`}>
                    <div className="text-center px-8">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Welcome back! Log in to your language learning account to continue your language journey. Access your personalized dashboard, track your progress, and connect with fellow language learners from around the world. Let's continue your language learning adventure together. Log in now!
                        </p>
                    </div>
                    <form className="card-body text-black" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className={`${isDarkMode ? 'text-white' : 'label-text'}`}>Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="mt-1 text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={`${isDarkMode ? 'text-white' : 'label-text'}`}>Password</span>
                            </label>
                            <input type={isShow ? 'text' : 'password'} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />

                            <label className=" cursor-pointer  flex w-36 items-center gap-4 mt-4">

                                <input type="checkbox" checked={isShow}  onChange={()=> setIsShow(!isShow)} className="checkbox" />
                                <span className={`${isDarkMode ? 'text-white label-text' : 'label-text'}`}>{
                                    isShow ? 'Hide Password' : 'Show Password'
                                }</span>
                            </label>

                            {errors.password && <span className="mt-1 text-red-500">Password is required</span>}
                        </div>
                        <div>
                            <label className="label">
                                <p className={`${isDarkMode && "text-white"} label-text-alt`}>
                                    New to TropicTalks?
                                    <Link to='/signup' className='mx-1 link font-bold'>
                                        SignUp Here!
                                    </Link>
                                </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className='btn' />
                        </div>
                    </form>
                    <hr />
                    <SocialLogin></SocialLogin>
                </div>

            </div>
        </>
    );
};

export default Login;