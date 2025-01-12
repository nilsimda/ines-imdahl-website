import React from 'react';


function Offerings({ offerings, name }) {

    return (
        <section id="offerings">
            <h3 className="text-2xl font-bold text-center mb-16">Angebote</h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {offerings.map((offering, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-6 rounded-lg shadow-lg hover:cursor-pointer hover:shadow-xl hover:scale-105 transition duration-300 bg-white h-full"
                        onClick={() => window.open(offering.link, '_blank')}
                    >
                        <div className="w-full aspect-[4/3] relative rounded-t-lg overflow-hidden mb-6">
                            <img
                                src={offering.image}
                                alt={`Bild von ${name} zum Thema ${offering.title}`}
                                className="absolute inset-0 w-full h-full object-cover"
                                load="lazy"
                            />
                        </div>
                        <div className="mb-6 text-gray-700">
                            {offering.icon}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">
                            {offering.title}
                        </h3>
                        <p className="text-gray-600 text-left">
                            {offering.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Offerings;