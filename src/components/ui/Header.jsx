import React from 'react';

function Header({ logoImage }) {
    return (
        <header className="p-4 flex justify-center">
            <div className="max-w-lg"> {/* Container with maximum width */}
                <img
                    src={logoImage}
                    className="w-full" // Image takes full width of the container
                    alt="Logo von Ines Imdahl" // Add alt text for accessibility
                />
            </div>
        </header>
    );
}

export default Header;