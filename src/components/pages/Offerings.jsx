import React from 'react';
import { FaMagnifyingGlass, FaMicrophone, FaUserGroup, FaTv } from "react-icons/fa6";
import forschungImage from '../../assets/forschung.jpg'
import beratungImage from '../../assets/beratung.jpg'
import tvImage from '../../assets/tv.png'
import vortrImage from '../../assets/vorträge.jpg'
import { useNavigate } from 'react-router-dom';

function Offerings() {
    const navigate = useNavigate();
    const offerings = [
        {
            image: forschungImage,
            icon: <FaMagnifyingGlass className="w-6 h-6" />,
            title: "Forschung",
            link: "https://www.rheingold-salon.de/",
            description: (
                <>
                    Seit über 30 Jahren ist die psychologische Forschung mein Kerngebiet. Gemeinsam mit dem Team vom rheingold-salon
                    lege ich Menschen auf die Couch und befrage sie zu ihrem Erleben & Verhalten. Nichts ist vor uns sicher: Trends, Zielgruppen, Marken, Werbung, Produkte oder Verfassungsanalysen. Wenn Sie sich für  unserere Forschung interessieren, stehe ich ihnen jederzeit zur Verfügung.
                </>
            ),
        },
        {
            image: vortrImage,
            icon: <FaMicrophone className="w-6 h-6" />,
            title: "Vorträge",
            link: "mailto:imdahl@rheingold-salon.de?subject=Vorträge",
            description: (
                <>
                    Unsere aktuellen Forschungsergebnisse bereite ich für diverse Key-Notes auf. Besonders häufig spreche ich über Mythen & Fakten rund um die Gen Z,  Gender- & Vereinbarkeitsthemen sowie Purpose & Sinn in Unternehmen. Gern bereite ich auch einen individuellen Vortrag für Ihr Unternehmen oder Ihre Veranstaltung vor.
                </>
            ),
        },
        {
            image: beratungImage,
            icon: <FaUserGroup className="w-6 h-6" />,
            title: "Beratung & Coaching",
            link: "mailto:imdahl@rheingold-salon.de?subject=Beratung%20%26%20Coaching",
            description: (
                <>
                    Marketing & Insight-Beratung gehört schon lange zu meinen Kompetenzen. Seit einigen wenigen Jahren & auf vielfache Anfragen hin,  biete ich auch persönliche Beratung für Führungsfrauen an, die sich weiter entwickeln wollen an. Grundlage hierfür ist meine Ausbildung zur analytischen Intensivberaterin. Hier habe ich nur sehr begrenzte Kapazitäten.
                </>
            ),
        },
        {
            image: tvImage,
            icon: <FaTv className="w-6 h-6" />,
            title: "TV & Medien Expertin",
            link: "mailto:imdahl@rheingold-salon.de?subject=TV%20%26%20Medien%20Expertin",
            description: (
                <>
                    Als TV-Psychologin & Expertin für Verbraucherverhalten werde ich oft gebucht, um Trends, Hypes oder bestimmte Themen aus forscherischer bzw. psychologischer Sicht zu bewerten und einzuschätzen. 6 Jahre wurde das im WDR sogar als eigenes Sendeformat ausgestrahlt. Wenn Sie Fragen oder Interesse an diesen Themen haben, jederzeit.
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
                        className="flex flex-col items-center p-6 rounded-lg shadow-lg hover:cursor-pointer hover:shadow-xl hover:scale-105 transition duration-300 bg-white h-full"
                        onClick={() => window.open(offering.link, '_blank')}
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