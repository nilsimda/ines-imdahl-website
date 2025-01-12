import React from 'react';
import imageOne from '../assets/image1.jpg';
import imageTwo from '../assets/image2.jpg';
import { Timeline } from '@monorepo/shared/components';


function About() {
    return (
        <section id="about" className="py-16 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-32 items-center">
                {/* First image with hover effect and rounded corners */}
                <div className="w-full transform transition-transform duration-300 hover:scale-105 order-1">
                    <img
                        src={imageOne}
                        alt="Bild von Ines Imdahl"
                        className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        loading="lazy"
                    />
                    <p className='text-xs text-gray-400'>Foto: Karin Tiller</p>
                </div>

                {/* Main text content with improved typography and spacing */}
                <div className="space-y-6 pl-4 md:col-span-2 md:pr-16 order-2">
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

                {/* Second image - appears before timeline on mobile, after on desktop */}
                <div className="w-full transform transition-transform duration-300 hover:scale-105 order-3 md:order-4">
                    <img
                        src={imageTwo}
                        alt="Ines Imdahl lacht"
                        className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        loading='lazy'
                    />
                    <p className='text-xs text-gray-400'>Foto: Karin Tiller</p>
                </div>

                {/* Timeline section with enhanced styling */}
                <div className="space-y-6 pl-4 md:col-span-2 md:pl-16 order-4 md:order-3">
                    <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 inline-block">
                        Einige besondere Highlights in meinem Leben:
                    </h3>
                    <Timeline />
                </div>

            </div>
        </section>
    );
}

export default About;