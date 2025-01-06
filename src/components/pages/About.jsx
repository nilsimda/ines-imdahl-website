import React from 'react';
import imageOne from '../../assets/image1.webp';
import imageTwo from '../../assets/image2.webp';

function About() {
    return (
        <section id="about" className="py-16 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-32 items-center">
                {/* First image with hover effect and rounded corners */}
                <div className="w-full transform transition-transform duration-300 hover:scale-105">
                    <img
                        src={imageOne}
                        alt="Bild von Ines Imdahl"
                        className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        loading="lazy"
                    />
                </div>

                {/* Main text content with improved typography and spacing */}
                <div className="space-y-6 pl-4 md:col-span-2 md:pr-16">
                    <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 inline-block">
                        Über mich
                    </h3>
                    <div className="text-gray-600 space-y-4 leading-relaxed">
                        <p>
                            Mein Name ist Ines Imdahl, ich bin Diplom-Psychologin mit einem besonderen Schwerpunkt Tiefenpsychologie. Genau: der morphologischen Psychologie. Schon immer hat mich interessiert, warum die Menschen tun, was sie tun & warum sie sich mit vernünftigen Argumenten selten überzeugen lassen.
                            Sie rauchen, obwohl sie voll aufgeklärt sind über die gesundheitsschädlichen folgen. Sie essen Billigfleisch, obwohl sie gegen Massentierhaltung sind.
                        </p>
                        <p>
                            Meine Fragen nach dem „Warum“ habe ich zum Beruf gemacht: ich erforsche gemeinsam mit meinem Team aus dem rheingold salon den Alltag der Menschen, das Verhalten, das Erleben rund um Produkte, Marken, aber auch Trends. Das tue ich die meiste Zeit.
                        </p>
                        <p>
                            Aber ich schreibe auch gern, das tue ich auf LinkedIn, hier im Blog, in meinen Büchern und in vielen, vielen Veröffentlichungen zu den unterschiedlichsten Themen. Immer mit der psychologischen Brille auf. In den letzten Jahren sind es oft Frauenthemen zur Gendergerechtigkeit, die mich antreiben & schreiben lassen. Ein Grund: ich sollte (lieber) ein Junge werden & habe wohl mein Leben lang dafür gekämpft, dass dem Weiblichen gleichviel Wert beigemessen wird.
                        </p>
                        <p>
                            Manchmal werde ich auch gefragt, ob ich beraten mag, Menschen oder gar ganze Unternehmen. Oder TV-Sender möchten, dass ich aus der Forschung heraus erkläre, warum Menschen manche Dinge tun oder wie es ihnen zum Beispiel in Krisen geht.
                        </p>
                        <p>
                            Meine 4 Kinder fordern mich dabei immer wieder heraus – und helfen mir neugierig und offen für alle Fragestellungen zu bleiben.
                        </p>
                    </div>
                </div>

                {/* Second image with matching hover effect */}
                <div className="w-full order-none md:order-last transform transition-transform duration-300 hover:scale-105">
                    <img
                        src={imageTwo}
                        alt="Ines Imdahl lacht"
                        className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        loading='lazy'
                    />
                </div>

                {/* Timeline section with enhanced styling */}
                <div className="space-y-6 pl-4 md:col-span-2 md:pl-16">
                    <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 inline-block">
                        Einige besondere Highlights in meinem Leben:
                    </h3>
                    <div className="border-l-2 border-gray-300 pl-8 space-y-8">
                        {/* Timeline items with enhanced visual elements */}
                        {[
                            "Studium der Psychologie an der Universität zu Köln",
                            "Hochzeit mit meiner großen Liebe Jens Lönneker",
                            "2000, 2004, 2007, 2009 Geburten unserer vier fantastischen Kinder",
                            "2011 Gründung des rheingold salon als psychologische Forschungsagentur",
                            "2016 & 2022 Erscheinen meiner Bücher",
                            "2022 gewählt zu den 40 over 40 Germanys most inspiring women",
                            "2024 gewählt zur LinkedIn TopVoice (und immer häufiger nennt man mich LinkedIn Influencerin)"
                        ].map((item, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-300 rounded-full group-hover:bg-gray-400 transition-colors duration-300"></div>
                                <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-300 bg-opacity-50 rounded-full animate-ping"></div>
                                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;