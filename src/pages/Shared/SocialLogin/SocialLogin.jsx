import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='my-4 text-center'>
            <button className='btn'>
                <FaGoogle></FaGoogle>
                Continue With Google
            </button>
        </div>
    );
};

export default SocialLogin;