import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Country = ({ country }) => {
    const { population, region, name, flags
    } = country
    const navigate = useNavigate();
    return (
        <div className='text-center px-28'>
            <img src={flags.png} alt="" />
            <h2 className='text-xl font-bold'>{name.common}</h2>
            <p>Region is: {region}</p>
            <p>Population is: {population}</p>
            <Link to="/detail"><button className='border-purple-600 border-2 rounded-lg px-4 py-1 mt-2'>Details</button></Link>
        </div>
    );
};

export default Country;