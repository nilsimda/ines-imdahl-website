import React from 'react';

function BackgroundImage({ imageUrl, imageUrlSmall }) {
    return (
        <>
            <img
                src={imageUrlSmall}
                className="absolute brightness-90 inset-0 object-cover h-full w-full z-[-3]"
                srcSet={`${imageUrlSmall} 1x, ${imageUrl} 2x`}
                alt="Background Image of Ines Imdahl"
                loading="eager"
                fetchpriority="high"
                decoding="async"
            />
            <div
                className="fixed inset-0 z-[-2] bg-gradient-to-r from-pink-500/10 to-pink-300/10 mix-blend-overlay"
            />
        </>
    );
}

export default BackgroundImage;