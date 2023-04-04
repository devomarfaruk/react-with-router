import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error)

    return (
        <div className='text-center mt-60' id="error-page">
            <h1 className='text-3xl text-purple-800 font-bold'>Oops!</h1>
            <p className='text-2xl py-2'>Sorry, an unexpected error has occurred.</p>
            <p className='text-2xl'>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;