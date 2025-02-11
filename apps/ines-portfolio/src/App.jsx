import { Routes, Route, Navigate } from 'react-router-dom';
import { FaMagnifyingGlass, FaMicrophone, FaUserGroup, FaTv, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa6";

import About from './pages/About';
import { Books, Contact, Content, ContentDetail, LandingPage, Impressum, Offerings } from '@monorepo/shared/pages';
import { CookieBanner } from '@monorepo/shared/components';

import imageUrl from './assets/pink.webp';
import imageUrlSmall from './assets/pink_800.webp';
import logoImage from './assets/logo.png';
import logoImageSmall from './assets/logo.png'
import book1Cover from "./assets/werbung_couch.webp";
import book2Cover from "./assets/frauen_buch.webp";
import forschungImage from './assets/forschung.webp';
import beratungImage from './assets/beratung.webp';
import tvImage from './assets/tv.webp';
import vortrImage from './assets/vorträge.webp'

function App() {
    const words = ["Diplom Psychologin", "Speakerin", "Marktforscherin", "Gründerin"]
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
            title: "TV & Medien Experte",
            link: "mailto:imdahl@rheingold-salon.de?subject=TV%20%26%20Medien%20Expertin",
            description: (
                <>
                    Als TV-Psychologe & Experte für Verbraucherverhalten werde ich oft gebucht, um Trends, Hypes oder bestimmte Themen aus forscherischer bzw. psychologischer Sicht zu bewerten und einzuschätzen. 6 Jahre wurde das im WDR sogar als eigenes Sendeformat ausgestrahlt. Wenn Sie Fragen oder Interesse an diesen Themen haben, jederzeit.
                </>
            ),
        }
    ];
    const books = [
        {
            title: "Werbung auf der Couch",
            coverImage: book1Cover,
            description: "Wirklich gute Werbung, will nicht nur ‚verkaufen', sie umwirbt uns als Menschen und nimmt uns in unseren Empfindungen ernst. Und sie versucht uns und unser Seelenleben zu ‚unterhalten'. Anders formuliert zu ‚füttern' mit Botschaften und Aussagen, die uns Spaß machen. Werbung kann durchaus eine moderne Form des Märchenerzählens sein. Sicher tischt sie uns auch ‚Märchen' auf, aber sie kann unsere Werte und Sehnsüchte bebildern. Sie hält unsere Geschichten und Mythen lebendig, die sich früher die Menschen erzählt haben.",
            releaseYear: "2016",
            pages: 232,
            price: "7.99",
            buyLink: "https://www.amazon.de/Werbung-auf-Couch-M%C3%A4rchen-braucht/dp/3451329670"
        },
        {
            title: "Warum Frauen die Welt retten werden",
            coverImage: book2Cover,
            description: "Frauen denken, fühlen und handeln anders als Männer. Anhand von einer eigens zum Thema aufgelegten Studie zeigen Janine Steeger und Ines Imdahl, wie das weibliche Prinzip die Welt retten kann. Sie erklären, warum die weiblichen Eigenschaften eine zwingende Ergänzung zum Männlichen sind, um die großen Aufgaben der Zukunft, wie die Klimakrise, Flucht und Migration oder Chancengerechtigkeit zu lösen. Inklusive einer weiblich-dominierten Utopie als Ausblick!",
            releaseYear: "2022",
            pages: 220,
            price: "20.00",
            buyLink: "https://www.amazon.de/Warum-Frauen-Welt-retten-werden/dp/3831206058"
        }
    ];
    const socialLinks = [
        {
            label: 'LinkedIn',
            href: 'https://de.linkedin.com/in/ines-imdahl',
            icon: FaLinkedin,
            ariaLabel: 'LinkedIn Profil von Ines Imdahl'
        },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/ini_imsta/',
            icon: FaInstagram,
            ariaLabel: 'Instagram Profil von Ines Imdahl'
        },
        {
            label: 'Facebook',
            href: 'https://www.facebook.com/ines.imdahl/',
            icon: FaFacebook,
            ariaLabel: 'Facebook Profil von Ines Imdahl'
        }
    ];
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <LandingPage
                            backgroundImage={imageUrl}
                            backgroundImageSmall={imageUrlSmall}
                            logoImage={logoImage}
                            logoImageSmall={logoImageSmall}
                            words={words}
                            gradientFrom="pink-500"
                            gradientTo="pink-300"
                            altName="Ines Imdahl"
                            fotoCredit="Karin Tiller"
                            socialLinks={socialLinks}
                        />
                        <div className="mt-40"></div>
                        <About />
                        <div className="mt-40"></div>
                        <Offerings offerings={offerings} name="Ines Imdahl" />
                        <div className="mt-40"></div>
                        <Content contentType="blog" />
                        <div className="mt-40"></div>
                        <Books books={books} />
                        <div className="mt-40"></div>
                        <Content contentType="media_appearance" />
                        <div className="mt-40"></div>
                        <Content contentType="publication" />
                        <div className="mt-40"></div>
                        <Contact email="imdahl@rheingold-salon.de" socialLinks={socialLinks} />
                    </>
                } />
                <Route path="/content/:id" element={<ContentDetail logoUrl={logoImageSmall} />} />
                <Route path="/impressum" element={<Impressum name="Ines Imdahl" email="imdahl@rheingold-salon.de" logoUrl={logoImageSmall} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <CookieBanner />
        </>
    );
}

export default App;
