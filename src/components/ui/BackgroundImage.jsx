import React from 'react';

function BackgroundImage({ imageUrl, imageUrlSmall }) {
    return (
        <>
            <div
                className="absolute brightness-90 inset-0 bg-cover bg-center z-[-3]"
                style={{
                    backgroundImage: `image-set(
                    url(${imageUrlSmall}) 1x,
                    url(${imageUrl}) 2x 
                )`,
                }}
            />
            <div
                className="fixed inset-0 z-[-2] bg-gradient-to-r from-pink-500/10 to-pink-300/10 mix-blend-overlay"
            />
        </>
    );
}

export default BackgroundImage;