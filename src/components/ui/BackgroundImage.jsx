import React from 'react';
import ParticleBackground from './ParticleBackground';

function BackgroundImage({ imageUrl }) {
    return (
        <>
            <div
                className="absolute inset-0 bg-cover bg-center z-[-3]"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    filter: 'brightness(0.9)' // Slightly dim the background image
                }}
            />
            <div
                className="fixed inset-0 z-[-2] bg-gradient-to-r from-pink-500/10 to-pink-300/10"
                style={{ mixBlendMode: 'overlay' }}
            />
            <ParticleBackground />
        </>
    );
}

export default BackgroundImage;