import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'

function Header({ logoImage, logoImageSmall }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showTypewriter, setShowTypewriter] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        // Start the typewriter after a delay that matches the logo animation duration
        if (isLoaded) {
            const timer = setTimeout(() => {
                setShowTypewriter(true);
            }, 1000); // 1000ms delay to match the logo animation

            return () => clearTimeout(timer); // Clean up the timer
        }
    }, [isLoaded]);

    return (
        <header className="p-4 flex justify-center">
            <div className="max-w-lg">
                {" "}
                {/* Container with maximum width */}
                <img
                    src={logoImage}
                    srcSet={`${logoImageSmall} 300w, ${logoImage} 500w`}
                    className={`w-full transition-all duration-1000 ease-in-out ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`} // Image takes full width of the container and applies animation classes
                    alt="Logo von Ines Imdahl" // Add alt text for accessibility
                    loading='eager'
                    fetchpriority="high"
                />
                <div className="text-white pl-5 text-lg">
                    {showTypewriter && <Typewriter
                        words={["Diplom Psychologin", "Speakerin", "Marktforscherin"]}
                        loop={0}
                        cursor={true}
                    />}
                </div>
            </div>
        </header>
    );
}

export default Header;