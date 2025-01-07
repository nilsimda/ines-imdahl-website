import React from 'react';
import imageOne from '../../assets/image1.webp';
import imageTwo from '../../assets/image2.webp';
import courseImage from '../../assets/courseImage.webp'
import Timeline from '../ui/Timeline';
import { FaArrowAltCircleRight, FaEnvelopeOpenText } from 'react-icons/fa';


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
                </div>

                {/* Timeline section with enhanced styling */}
                <div className="space-y-6 pl-4 md:col-span-2 md:pl-16 order-4 md:order-3">
                    <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 inline-block">
                        Einige besondere Highlights in meinem Leben:
                    </h3>
                    <Timeline />
                </div>

                {/* Course image */}
                <div className="w-full transform transition-transform duration-300 hover:scale-105 order-5">
                    <img
                        src={courseImage}
                        alt="LinkedIn Kurs Vorschaubild"
                        className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        loading="lazy"
                    />
                </div>
                <div className="space-y-6 pl-4 md:col-span-2 md:pr-16 order-6">
                    <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 inline-block">
                        Mein LinkedIn Learning Kurs
                    </h3>
                    <div className="text-gray-600 space-y-4 leading-relaxed">
                        <p>
                            80 Prozent der Führungskräfte von Unternehmen glauben, die Bedürfnisse und Wünsche ihrer Kund:innen zu kennen – nur 8 Prozent der Kund:innen sehen das auch so. Gehören Sie nicht länger zu denjenigen, die Ihre Kund:innen nur glauben zu verstehen. Lernen Sie in meinem LinkedIn Learning-Audiokurs, wie Sie die Werkzeuge der Marktforschung nutzen, die richtigen Menschen für Ihr Unternehmen befragen und deren Antworten interpretieren, um Ihre Geschäftsstrategien auf die nächste Ebene zu heben.
                        </p>

                        <p>
                            Ich rüste Sie mit dem Wissen und den Fertigkeiten aus, um hinter die Fassade blicken zu können und die wahren Beweggründe und Meinungen Ihrer Kund:innen zu erkennen. Nicht immer sind diese so vernünftig oder offenkundig, wie es auf den ersten Blick scheint. Sammeln Sie daher nicht länger nur Daten, sondern lernen Sie, tiefe Einblicke zu gewinnen.

                        </p>
                        <p>
                            Sie sind bereit, mit mir die geheime Logik des Marktes zu entschlüsseln? Die Geheimnisse hinter dem Verhalten Ihrer Kund:innen zu lüften und Ihre Unternehmensentscheidungen an Ihren Kund:innen auszurichten? Dann nehmen Sie sich ein wenig Zeit und begleiten Sie mich für eine gute Stunde. Wenn Sie einen kostenlosen Link zum Premium-Kurs möchten, kann ich ihnen direkt über LinkedIn direkt diesen zukommen lassen. Schicken sie mir dort eine Nachricht.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <a
                                href="https://www.linkedin.com/learning/marktforschung-grundlagen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex gap-2 items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                <FaArrowAltCircleRight />
                                Zum Kurs
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ines-imdahl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex gap-2 items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                <FaEnvelopeOpenText />
                                Gratis Kurs-Link erhalten
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;