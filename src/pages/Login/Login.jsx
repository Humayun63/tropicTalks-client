import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    return (
        <>
            <div className="hero my-4">
                <div className="card  bg-green-300 w-full p-4 shadow-2xl">
                    <div className="text-center px-8">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                        Welcome back! Log in to your language learning account to continue your language journey. Access your personalized dashboard, track your progress, and connect with fellow language learners from around the world. Let's continue your language learning adventure together. Log in now!
                        </p>
                    </div>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className="label-text-alt">
                                    New to TropicTalks? 
                                    <Link to='/signup' className='mx-1 link'>
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