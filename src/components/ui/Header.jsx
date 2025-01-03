import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

function Header({ logoImage }) {
    return (
        <header className="p-4 flex justify-center">
            <div className="max-w-lg"> {/* Container with maximum width */}
                <img
                    src={logoImage}
                    className="w-full" // Image takes full width of the container
                    alt="Logo von Ines Imdahl" // Add alt text for accessibility
                />
                <div className='text-white pl-5 text-lg'>
                    <Typewriter words={["Diplom Psychologin", "Speakerin", "Marktforscherin"]} loop={0} cursor={true} />
                </div>
            </div>
        </header>
    );
}

export default Header;