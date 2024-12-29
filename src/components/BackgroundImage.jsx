import React from 'react';

function BackgroundImage({ imageUrl }) {
    return (
        <div
            className="absolute inset-0 bg-cover bg-center z-[-1]" // Cover the entire area, send to back
            style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
    );
}

export default BackgroundImage;