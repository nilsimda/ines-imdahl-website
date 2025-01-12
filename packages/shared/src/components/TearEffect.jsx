import React, { useEffect, useState } from 'react';

const TearEffect = ({ imageUrl, imageUrlSmall, children }) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxScroll = window.innerHeight * 0.3;
            setScrollProgress(Math.min(scrolled / maxScroll, 1));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-[-1]">
                <div
                    className="absolute inset-0 transition-transform duration-300"
                    style={{
                        clipPath: `polygon(0 0, 50% ${50 - scrollProgress * 25}%, 100% 0, 100% 100%, 50% ${50 + scrollProgress * 25}%, 0 100%)`,
                        transform: `scale(${1 + scrollProgress * 0.1})`
                    }}
                >
                    <img
                        src={imageUrlSmall}
                        srcSet={`${imageUrlSmall} 1x, ${imageUrl} 2x`}
                        alt="Background"
                        className="w-full h-full object-cover brightness-90"
                    />
                </div>
            </div>
            <div
                className="relative transition-opacity duration-500"
                style={{ opacity: scrollProgress > 0.5 ? 1 : 0 }}
            >
                {children}
            </div>
        </div>
    );
};

export default TearEffect;