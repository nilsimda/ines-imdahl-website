import React, { useState } from 'react';

export const OfferingsCard = ({ offering, name, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasLongContent = offering.hasLongContent;

    const handleClick = (e) => {
        if (hasLongContent) {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
        } else {
            window.open(offering.link, '_blank');
        }
    };

    return (
        <div
            className={`flex flex-col items-center p-6 rounded-lg shadow-lg transition duration-300 bg-white h-full ${!hasLongContent && 'hover:cursor-pointer hover:shadow-xl hover:scale-105'
                }`}
            onClick={handleClick}
        >
            {offering.image && (
                <div className="w-full aspect-[4/3] relative rounded-t-lg overflow-hidden mb-6">
                    <img
                        src={offering.image}
                        alt={`Bild von ${name} zum Thema ${offering.title}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            )}
            <div className="mb-6 text-gray-700">{offering.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{offering.title}</h3>

            <div className={`text-gray-600 text-left ${hasLongContent && !isExpanded ? 'relative' : ''}`}>
                {hasLongContent && !isExpanded ? (
                    <>
                        <div className="max-h-48 overflow-hidden">
                            {offering.description}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
                        <button
                            className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 w-full text-center"
                            onClick={handleClick}
                        >
                            Mehr anzeigen
                        </button>
                    </>
                ) : (
                    <>
                        {offering.description}
                        {hasLongContent && (
                            <button
                                className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 w-full text-center"
                                onClick={handleClick}
                            >
                                Weniger anzeigen
                            </button>
                        )}
                    </>
                )}
            </div>

        </div>
    );
};
