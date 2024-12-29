import React, { useState } from 'react';
import { scrollToSection } from '../utils/scrollToSection';

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleLinkClick = (event, sectionId) => {
        event.preventDefault();
        scrollToSection(sectionId);
    };

    return (
        <aside className="w-64 bg-transparent p-10 text-white">
            <nav>
                <ul>
                    <li>
                        <a href="#über-mich" onClick={event => handleLinkClick(event, "about")} className="block py-3 text-2xl hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:bg-white hover:after:w-full after:ease-in-out transition duration-300 ease-in-out">
                            Über mich
                        </a>
                    </li>
                    <li>
                        <a href="#angebote" onClick={event => handleLinkClick(event, "offerings")} className="block py-3 text-2xl hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:bg-white hover:after:w-full after:ease-in-out transition duration-300 ease-in-out">
                            Angebote
                        </a>
                    </li>
                    <li>
                        <a href="#bücher" onClick={event => handleLinkClick(event, "books")} className="block py-3 text-2xl hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:bg-white hover:after:w-full after:ease-in-out transition duration-300 ease-in-out">
                            Bücher
                        </a>
                    </li>
                    <li>
                        <a href="#blog" onClick={event => handleLinkClick(event, "blog")} className="block py-3 text-2xl hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:bg-white hover:after:w-full after:ease-in-out transition duration-300 ease-in-out">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#in-den-medien" onClick={event => handleLinkClick(event, "media")} className="block py-3 text-2xl hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:bg-white hover:after:w-full after:ease-in-out transition duration-300 ease-in-out">
                            In den Medien
                        </a>
                    </li>
                    <li>
                        <a href="#kontakt" onClick={event => handleLinkClick(event, "contact")} className="block py-3 text-2xl hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:bg-white hover:after:w-full after:ease-in-out transition duration-300 ease-in-out">
                            Kontakt
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;