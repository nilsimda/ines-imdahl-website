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
                            Guten Tag lieber Besucher, mein Name ist Jens Lönneker. Ich bin Tiefenpsychologe und mit Leib und Seele ein Forscher.
                        </p>
                        <p>
                            Mein Forschungsschwerpunkt ist die Wechselwirkung zwischen konkreten Alltagsgeschehnissen und den übergreifenden kulturellen Entwicklungen in der Gesellschaft. Wie entwickelt sich vor diesem Hintergrund das Bild und die Wahrnehmung von Medien, Produkten, Werbung oder aber auch von Teilen der Gesellschaft wie der Landwirtschaft?
                        </p>
                        <p>
                            Eigentlich wollte ich einmal ein Wirtschaftsstudium starten. Meine ersten Berufs-Erfahrungen bei verschiedenen Banken haben mich dann aber in die Arme der Psychologie getrieben. Die Art und Weise, wie Geld angelegt wurde oder auch wie die Kollegen miteinander umgingen, hatte aus meiner Sicht mehr mit Psychologie als mit rationalen wirtschaftlichen Erwägungen zu tun.
                        </p>
                        <p>
                            Mein großartiger psychologischer Lehrmeister Wilhelm Salber hat es mir dann mit seinem Team ermöglicht, diese beruflichen Erfahrungen konzeptionell in dem bis heute einzigartigen Konzept der Morphologischen Psychologie aufzugreifen und weiterzuentwickeln.
                        </p>
                        <p>
                            Mit der Gründung einer eigenen Forschungsagentur – heute ist es der rheingold salon - wurde ein Traum war. Die Aufträge ermöglichten in einem nicht für möglich gehaltenen Maße, alltagspsychologischen Studien zu betreiben. Gerne schreibe und veröffentliche ich darüber oder halte Vorträge.
                        </p>
                        <p>
                            Ines Imdahl ist privat wie beruflich die fantastische Frau, durch die mein Leben noch mehr Liebe, Tiefe und Spirit bekommt. Meine Kinder sind dabei ein permanenter Quell von Inspirationen und Herausforderungen.
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