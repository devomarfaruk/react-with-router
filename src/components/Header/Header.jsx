import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-purple-200 py-4 px-28 flex items-center justify-between'>
            <div className='space-x-6 font-bold'>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT US</Link>
                <Link to="/countries">COUNTRIES</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
            <div>
                <h1 className='text-2xl text-pink-800 font-bold'> Dev. </h1>
            </div>
        </nav>
    );
};

export default Header;