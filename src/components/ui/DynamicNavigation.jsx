import React, { useEffect, useState } from 'react';
import { scrollToSection, scrollToTop } from '../../utils/scrollToSection';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import logoUrl from '../../assets/name.webp'

const DynamicNavigation = ({ isHomePage = true }) => {
    const [showNav, setShowNav] = useState(false);
    const [isNavLoaded, setIsNavLoaded] = useState(false);
    const [isScrolledPastLanding, setIsScrolledPastLanding] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNav(true);
            setIsNavLoaded(true);
        }, isHomePage ? 1000 : 0);

        const handleScroll = () => {
            if (isHomePage) {
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                setIsScrolledPastLanding(scrollPosition > windowHeight * 0.7);
            }
            else {
                setIsScrolledPastLanding(true);
            }
        };

        // Set initial scroll state
        if (!isHomePage) {
            setIsScrolledPastLanding(true);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isHomePage]);

    const handleLinkClick = (event, sectionId) => {
        event.preventDefault();
        if (location.pathname !== '/') {
            window.location.href = `/#${sectionId}`;
        } else {
            scrollToSection(sectionId);
        }
    };

    const navLinks = [
        { href: "#über-mich", id: "about", text: "Über mich" },
        { href: "#angebote", id: "offerings", text: "Angebote" },
        { href: "#blog", id: "blog", text: "Blog" },
        { href: "#bücher", id: "books", text: "Bücher" },
        { href: "#in-den-medien", id: "media_appearance", text: "In den Medien" },
        { href: "#veröffentlichungen", id: "publication", text: "Veröffentlichungen" },
        { href: "#kontakt", id: "contact", text: "Kontakt" }
    ];

    // Common link animation classes
    const linkAnimationClasses = "relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full after:ease-in-out hover:scale-105 transition duration-300 ease-in-out";

    // Desktop navigation classes
    const navClasses = isScrolledPastLanding
        ? "fixed top-0 left-0 right-0 bg-black bg-opacity-90 flex items-center h-16 transition-all duration-300 z-50 px-6"
        : "w-64 bg-transparent p-10 transition-all duration-300"; // Removed md:block to show on all screens

    const desktopLinkClasses = isScrolledPastLanding
        ? `block px-4 text-white text-sm ${linkAnimationClasses}`
        : `block py-3 text-2xl text-white ${linkAnimationClasses}`;

    const desktopListClasses = isScrolledPastLanding
        ? "hidden md:flex flex-row space-x-4 items-center flex-1 justify-end"
        : "block"; // Show on all screens when in sidebar mode

    const MobileMenuButton = () => (
        <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
        >
            {isMobileMenuOpen ? '' : <Menu size={24} />}
        </button>
    );


    return (
        <>
            <nav className={`${navClasses} ${isNavLoaded ? 'opacity-100' : 'opacity-0'}`}>
                {showNav && (
                    <>
                        {/* Logo section */}
                        {(isScrolledPastLanding || !isHomePage) && (
                            <a
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (location.pathname !== '/') {
                                        window.location.href = '/';
                                    } else {
                                        scrollToTop();
                                    }
                                }}
                                className="flex-shrink-0 mr-8 transform hover:scale-105 transition-transform duration-300 ease-in-out relative group"
                            >
                                <img
                                    src={logoUrl}  // Update with your logo path
                                    alt="Logo"
                                    className="h-8 w-auto"
                                />
                                {/* Logo hover effect - subtle glow */}
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-md"></div>
                            </a>
                        )}

                        {/* Navigation links */}
                        <ul className={desktopListClasses}>
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        onClick={(event) => handleLinkClick(event, link.id)}
                                        className={desktopLinkClasses}
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile menu button - only show when scrolled */}
                        {(isScrolledPastLanding || !isHomePage) &&
                            <MobileMenuButton />
                        }
                    </>
                )}
            </nav>
            {/* Only show mobile menu when scrolled past landing */}
            {(isScrolledPastLanding || !isHomePage) && <MobileMenu
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                linkAnimationClasses={linkAnimationClasses}
                handleLinkClick={handleLinkClick}
                navLinks={navLinks}
            />}
            {isMobileMenuOpen && (isScrolledPastLanding || !isHomePage) && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
        </>
    );
};

export default DynamicNavigation;