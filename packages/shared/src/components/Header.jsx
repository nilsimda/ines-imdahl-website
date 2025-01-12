import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'

function Header({ logoImage, logoImageSmall, words }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showTypewriter, setShowTypewriter] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            const timer = setTimeout(() => {
                setShowTypewriter(true);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isLoaded]);

    return (
        <header className="p-4">
            <div className="container mx-auto">
                <div className="px-5 flex flex-col items-start">
                    <div className="h-16 md:h-24"> {/* Fixed width and height container */}
                        <img
                            src={logoImage}
                            srcSet={`${logoImageSmall} 300w, ${logoImage} 500w`}
                            className={`w-full h-full object-fill transition-all duration-1000 ease-in-out ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                }`}
                            alt="Logo von Ines Imdahl"
                            loading='eager'
                            fetchpriority="high"
                        />
                    </div>
                    <div className="px-1 text-white text-lg mt-4">
                        {showTypewriter && <Typewriter
                            words={words}
                            loop={0}
                            cursor={true}
                        />}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;