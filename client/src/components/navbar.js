import React from 'react';

const Navbar = ({brand1, brand2}) => {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <a href='#!' className='navbar-brand'>{brand1}</a>   
            </div>
            <div>
v                <a href='#!' className='navbar-brand'>{brand2}</a>   
            </div>
            <div>
v                <a href='#!' className='navbar-brand'>hola</a>   
            </div>
        </nav>
    );
}

export default Navbar;