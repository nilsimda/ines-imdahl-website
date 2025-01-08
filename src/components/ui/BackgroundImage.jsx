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
            />
            <div
                className="fixed inset-0 z-[-2] bg-gradient-to-r from-pink-500/10 to-pink-300/10 mix-blend-overlay"
            />
            <div className="absolute bottom-0 left-0 py-2 px-10 text-gray-700 text-xs z-10">
                Foto: Karin Tiller
            </div>
        </>
    );
}

export default BackgroundImage;