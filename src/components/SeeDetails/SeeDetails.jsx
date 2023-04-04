import React from 'react';
import { useNavigate } from 'react-router-dom';

const SeeDetails = () => {
    const navigate = useNavigate();
    return (
        <div className='m-auto w-96'>
            <h2 className='text-purple-800 text-5xl font-bold py-10'>Welcome to Countries Zone</h2>
            <button className='border-purple-600 border-2 rounded-lg px-4 py-1 mt-2 block' onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default SeeDetails;