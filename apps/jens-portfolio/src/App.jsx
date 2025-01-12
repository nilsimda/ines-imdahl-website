import React from 'react';
import About from './pages/About.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Books, Contact, Content, ContentDetail, LandingPage, Impressum, Offerings } from '@monorepo/shared/pages';
import { CookieBanner } from '@monorepo/shared/components';
import { FaLinkedin, FaMagnifyingGlass, FaMicrophone, FaUserGroup, FaTv } from 'react-icons/fa6'

import backgroundImage from './assets/background.webp'
import backgroundImageSmall from './assets/background_800.webp'
import logoImage from './assets/logo.webp'
import logoImageSmall from './assets/logo_300.webp'
import book1Cover from './assets/book1.webp'

function App() {
  const offerings = [
    {
      image: null,
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
      image: null,
      icon: <FaMicrophone className="w-6 h-6" />,
      title: "Vorträge",
      link: "mailto:loenneker@rheingold-salon.de?subject=Vorträge",
      description: (
        <>
          Unsere aktuellen Forschungsergebnisse bereite ich für diverse Key-Notes auf. Besonders häufig spreche ich über Mythen & Fakten rund um die Gen Z,  Gender- & Vereinbarkeitsthemen sowie Purpose & Sinn in Unternehmen. Gern bereite ich auch einen individuellen Vortrag für Ihr Unternehmen oder Ihre Veranstaltung vor.
        </>
      ),
    },
    {
      image: null,
      icon: <FaUserGroup className="w-6 h-6" />,
      title: "Beratung & Coaching",
      link: "mailto:loenneker@rheingold-salon.de?subject=Beratung%20%26%20Coaching",
      description: (
        <>
          Marketing & Insight-Beratung gehört schon lange zu meinen Kompetenzen. Seit einigen wenigen Jahren & auf vielfache Anfragen hin,  biete ich auch persönliche Beratung für Führungsfrauen an, die sich weiter entwickeln wollen an. Grundlage hierfür ist meine Ausbildung zur analytischen Intensivberaterin. Hier habe ich nur sehr begrenzte Kapazitäten.
        </>
      ),
    },
    {
      image: null,
      icon: <FaTv className="w-6 h-6" />,
      title: "TV & Medien Expertin",
      link: "mailto:loenneker@rheingold-salon.de?subject=TV%20%26%20Medien%20Expertin",
      description: (
        <>
          Als TV-Psychologin & Expertin für Verbraucherverhalten werde ich oft gebucht, um Trends, Hypes oder bestimmte Themen aus forscherischer bzw. psychologischer Sicht zu bewerten und einzuschätzen. 6 Jahre wurde das im WDR sogar als eigenes Sendeformat ausgestrahlt. Wenn Sie Fragen oder Interesse an diesen Themen haben, jederzeit.
        </>
      ),
    }
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