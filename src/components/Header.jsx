import React from 'react';

function Header({ logoImage }) {
    return (
        <header className="p-4">
            <img
                src={logoImage}
                className='h-40'
            ></img>
        </header>
    );
}

export default Header;