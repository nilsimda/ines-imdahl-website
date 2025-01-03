import React from 'react';
import { FaMagnifyingGlass, FaMicrophone, FaUserGroup, FaTv } from "react-icons/fa6";
import forschungImage from '../../assets/forschung.jpg'
import beratungImage from '../../assets/beratung.jpg'
import tvImage from '../../assets/tv.png'
import vortrImage from '../../assets/vorträge.jpg'

function Offerings() {
    const offerings = [
        {
            image: forschungImage,
            icon: <FaMagnifyingGlass className="w-6 h-6" />,
            title: "Forschung",
            description: (
                <>
                    Seit über 30 Jahren ist die psychologische Forschung mein Kerngebiet. Gemeinsam mit dem Team vom
                    <a href="https://www.rheingold-salon.de/" className="text-blue-600 hover:underline"> rheingold salon </a>
                    lege ich Menschen auf die Couch und befrage sie zu ihrem Erleben & Verhalten. Nichts ist vor uns sicher: Trends, Zielgruppen, Marken, Werbung, Produkte oder Verfassungsanalysen. Wenn Sie sich für  unserere Forschung interessieren, stehe ich ihnen jederzeit zur Verfügung.
                </>
            ),
        },
        {
            image: vortrImage,
            icon: <FaMicrophone className="w-6 h-6" />,
            title: "Vorträge",
            description: (
                <>
                    Unsere aktuellen Forschungsergebnisse bereite ich für diverse Key-Notes auf. Besonders häufig spreche ich über Mythen & Fakten rund um die Gen Z,  Gender- & Vereinbarkeitsthemen sowie Purpose & Sinn in Unternehmen. Gern bereite ich auch einen individuellen Vortrag für Ihr Unternehmen oder Ihre Veranstaltung vor.
                    Einfach <a href="mailto:example@example.com" className="text-blue-600 hover:underline">hier</a> anfragen.
                </>
            ),
        },
        {
            image: beratungImage,
            icon: <FaUserGroup className="w-6 h-6" />,
            title: "Beratung & Coaching",
            description: (
                <>
                    Marketing & Insight-Beratung gehört schon lange zu meinen Kompetenzen. Seit einigen wenigen Jahren & auf vielfache Anfragen hin,  biete ich auch persönliche Beratung für Führungsfrauen an, die sich weiter entwickeln wollen an. Grundlage hierfür ist meine Ausbildung zur analytischen Intensivberaterin. Hier habe ich nur sehr begrenzte Kapazitäten.
                    Einfach <a href="mailto:example@example.com" className="text-blue-600 hover:underline">hier</a> anfragen.
                </>
            ),
        },
        {
            image: tvImage,
            icon: <FaTv className="w-6 h-6" />,
            title: "TV & Medien Expertin",
            description: (
                <>
                    Als TV-Psychologin & Expertin für Verbraucherverhalten werde ich oft gebucht, um Trends, Hypes oder bestimmte Themen aus forscherischer bzw. psychologischer Sicht zu bewerten und einzuschätzen. 6 Jahre wurde das im WDR sogar als eigenes Sendeformat ausgestrahlt. Wenn Sie Fragen oder Interesse an diesen Themen haben, jederzeit.
                    Einfach <a href="mailto:example@example.com" className="text-blue-600 hover:underline">hier</a> anfragen.
                </>
            ),
        }
    ];

    return (
        <section id="offerings">
            <h3 className="text-2xl font-bold text-center mb-16">Angebote</h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {offerings.map((offering, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 bg-white h-full"
                    >
                        <div className="w-full aspect-[4/3] relative mb-6 rounded-t-lg overflow-hidden">
                            <img
                                src={offering.image}
                                alt={`Bild von Ines Imdahl zum Thema ${offering.title}`}
                                className="absolute inset-0 w-full h-full object-cover"
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