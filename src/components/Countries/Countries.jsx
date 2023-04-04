import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countries = useLoaderData();
    // console.log(countries)
    return (
        <div>
            <h2 className='text-4xl text-center text-purple-800 font-bold py-5'>All Countries : {countries.length}</h2>
            <div className='grid grid-cols-3 gap-10 mt-10'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;