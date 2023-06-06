import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            Error Page is here
        </div>
    );
};

export default ErrorPage;