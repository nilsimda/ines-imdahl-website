import About from './pages/About.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Books, Contact, Content, ContentDetail, LandingPage, Impressum, Offerings } from '@monorepo/shared/pages';
import { CookieBanner } from '@monorepo/shared/components';
import { FaLinkedin, FaMagnifyingGlass, FaMicrophone, FaUserGroup } from 'react-icons/fa6'

import backgroundImage from './assets/background.webp'
import backgroundImageSmall from './assets/background_800.webp'
import logoImage from './assets/logo.webp'
import logoImageSmall from './assets/logo_300.webp'
import book1Cover from './assets/book1.webp'
import beratungImage from './assets/beratung.avif'
import vortragImage from './assets/vortrag.avif'
import forschungImage from './assets/forschung.avif'

function App() {
    const offerings = [
        {
            image: forschungImage,
            icon: <FaMagnifyingGlass className="w-6 h-6" />,
            title: "Forschung",
            link: "https://www.rheingold-salon.de/",
            description: (
                <>
                    Seit über 30 Jahren ist die tiefenpsychologische Forschung und Coaching mein Kerngebiet. Gemeinsam mit dem Team vom rheingold-salon lege ich Menschen „auf die Couch“ und befrage sie zu ihrem Erleben & Verhalten: Trends, Zielgruppen, Marken, Werbung, Produkte oder Verfassungsanalysen. Wo gewünscht unterstütze ich dabei, die gewonnenen Erkenntnisse nutzbar zu machen und umzusetzen.
                </>
            ),
        },
        {
            image: vortragImage,
            icon: <FaMicrophone className="w-6 h-6" />,
            title: "Vorträge",
            link: "mailto:loenneker@rheingold-salon.de?subject=Vorträge",
            description: (
                <>
                    Unsere aktuellen Forschungsergebnisse bereite ich für Vorträge und Key-Notes auf. Meine Schwerpunkte sind psychologische Entwicklungen auf den Feldern: Medien / Digitalisierung - Ernährung / Landwirtschaft – Politik und Zeitgeist. Gerne erarbeite ich auch individuelle Vorträge für Ihr Unternehmen oder Ihre Veranstaltungen.
                </>
            ),
        },
        {
            image: beratungImage,
            icon: <FaUserGroup className="w-6 h-6" />,
            title: "Beratung & Coaching",
            link: "mailto:loenneker@rheingold-salon.de?subject=Beratung%20%26%20Coaching",
            description: (
                <>
                    Medien- und Marketing- Beratung gehören schon lange zu meinen Kompetenzen. Im Fokus stehen dabei vor allem die Entwicklung von neuen Formaten / Neuprodukten / Relaunches wie etwa bei neuen Social-Media-Konzepten bis zur Digitalisierung und Neugestaltung des Thermomix. Ein weiterer Schwerpunkt ist die Transformation von Forschungsergebnissen für die Öffentlichkeitsarbeit und öffentliche Meinungsbildung.
                </>
            ),
        },
        /*{
            image: authorImage,
            icon: <FaBookOpen className="w-6 h-6" />,
            title: "Autor & Publikationen",
            link: "mailto:loenneker@rheingold-salon.de?subject=TV%20%26%20Medien%20Expertin",
            hasLongContent: true,
            description: (
                <>
                    Die Erkenntnisse aus der Forschung bilden die Basis für meine Veröffentlichungen in Monographien, Handbüchern und eigenen Büchern.
                    <ul className="mt-2 space-y-2 list-disc list-inside">
                        <li>Grüne, H., & Lönneker, J. (1993). Zum Mehrwert von Tiefeninterviews in der Marktforschung. In Fitzek, H. & Schulte, A. (Hrsg.), <i>Wirklichkeit und Wahrnehmung: Beiträge zur psychologischen Morphologie</i> (S. 1–18). Berlin: Sigma.</li>
                        <li>Lönneker, J. (1996). <i>Jugendkultur und Mediennutzung: Eine qualitativ-morphologische Untersuchung.</i></li>
                        <li>Lönneker, J. (2004). Das Ende der Zielgruppen? In Lohmann, H. & Wehkamp, K.-H. <i>Vision Gesundheit</i> (S. 110-114). WIKOM Verlag.</li>
                        <li>Lönneker, J., Imdahl, I. (2005). Neue Wirkungsmuster in der Printwerbung. In Dierks, S. & Hallemann, M. <i>Die Bild-Sprache der Werbung – und wie sie wirkt</i> (S. 123-167). planung & analyse.</li>
                        <li>Lönneker, J. (2007). Morphologie: Die Wirkung von Qualitäten. In Naderer, G., & Balzer, E. (Hrsg.), <i>Qualitative Marktforschung in Theorie und Praxis</i> (S. 75-102). Gabler.</li>
                        <li>Lönneker, J. (2008). Neue Produkte schneller am Markt: Vorsprung durch Innovationslabors. <i>Marketing Review St. Gallen, 25(3)</i>, 40–45.</li>
                        <li>Lönneker, J. (2009). Verfassungen motivieren die Medienwahl. <i>Media Spectrum, 1(2)</i>, 34–38.</li>
                        <li>Lönneker, J. (2009). Die Verknappung der Zeit. In <i>Berliner Debatte Initial</i> (S. 4-9). Kulturverlag Kadmos.</li>
                        <li>Lönneker, J. (2011). Morphologie. In Bruhn, M. (Hrsg.), <i>Handbuch Kommunikationscontrolling</i> (S. 101–120). Wiesbaden: Gabler.</li>
                        <li>Lönneker, J. (2015). Explorative, qualitative Verfahren zur Messung der Kommunikationswirkung. In Bruhn, M. & Kirchgeorg, M. (Hrsg.), <i>Handbuch Kommunikation</i> (S. 1–20). Wiesbaden: Springer Gabler.</li>
                        <li>Lönneker, J. (2020). Was bewegt uns an Celebrities? In Schimansky, A. & Shamsey, O. (Hrsg.), <i>Die Macht der Meinungsführer</i> (S. 43-55). Frankfurter Allgemeine Buch.</li>
                        <li>Lönneker, J. (2022). Die Gewährleistungsmarke aus Sicht der Gesellschaft zur Erforschung des Markenwesens e. V. In Boltz, H., et al. (Hrsg.), <i>Marke, Nachhaltigkeit und Verbraucherpolitik</i> (S. 115-124). Nomos Verlag.</li>
                        <li>Lönneker, J., Berghorn, H.-H. (2024). Mit Mut und Selbstbewusstsein die Wagenburg verlassen. In Robers, (Hrsg.), <i>Agrarland Deutschland</i> (S. 99-108). Aschendorff Verlag.</li>
                    </ul>
                </>
            ),
        }*/
    ];

    const books = [
        {
            title: "Zukunftsbauer",
            coverImage: book1Cover,
            description: "Die Bundesregierung stellt die Bürger auf eine Zeitenwende und den größten Umbruch seit 100 Jahren ein. Wie kommen wir jedoch in eine gut gestaltete Zukunft, wenn Misstrauen und Fake News immer wieder die öffentliche Diskussion gegenüber allen Veränderungen und Neuerungen prägen? Und wie lässt sich in der heutigen Zeit wieder mehr Vertrauen in der öffentlichen Meinungsbildung erreichen? Diesen Fragen gehen die Autoren Jens Lönneker, Marco Diefenbach und Lukas Struwe von der Markt- und Medienforschungsagentur rheingold salon in ihrem Buch „Zukunfts-Bauer – Über die Analyse und Gestaltung des öffentlichen Vertrauens“ am Beispiel der Landwirtschaft nach.",
            releaseYear: "2022",
            pages: 108,
            price: "20.00",
            buyLink: "https://shop.profi.de/zukunfts-bauer_004838.html"
        }
    ];
    const socialLinks = [
        {
            label: 'LinkedIn',
            href: 'https://de.linkedin.com/in/jens-lönneker',
            icon: FaLinkedin,
            ariaLabel: 'LinkedIn Profil von Jens Lönneker'
        },
    ];
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <LandingPage
                            backgroundImage={backgroundImage}
                            backgroundImageSmall={backgroundImageSmall}
                            logoImage={logoImage}
                            logoImageSmall={logoImageSmall}
                            words={["Diplom Psychologe", "Marktforscher", "Gründer"]}
                            gradientFrom="teal-500"
                            gradientTo="teal-300"
                            altName="Jens Lönneker"
                            fotoCredit="Karin Tiller"
                            socialLinks={socialLinks}
                        />
                        <div className="mt-40"></div>
                        <About />
                        <div className="mt-40"></div>
                        <Offerings offerings={offerings} name="Jens Lönneker" />
                        <div className="mt-40"></div>
                        <Content contentType="blog" />
                        <div className="mt-40"></div>
                        <Books books={books} />
                        <div className="mt-40"></div>
                        <Content contentType="media_appearance" />
                        <div className="mt-40"></div>
                        <Content contentType="publication" />
                        <div className="mt-40"></div>
                        <Contact email="loenneker@rheingold-salon.de" socialLinks={socialLinks} />
                    </>
                } />
                <Route path="/content/:id" element={<ContentDetail logoUrl={logoImageSmall} />} />
                <Route path="/impressum" element={<Impressum name="Jens Lönneker" email="loenneker@rheingold-salon.de" logoUrl={logoImageSmall} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <CookieBanner />
        </>
    );
}

export default App;
