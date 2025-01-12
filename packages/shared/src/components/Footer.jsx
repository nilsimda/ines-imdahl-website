import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer({ socialLinks }) {
    return (
        <footer className="bg-transparent p-4 text-white">
            <div className="flex justify-end items-center px-5">
                <div className="flex space-x-4">
                    {socialLinks.map(({ label, href, icon: Icon, ariaLabel }) => (
                        <a
                            key={label}
                            aria-label={ariaLabel}
                            className="text-white-400 hover:scale-105 transition duration-300 ease-in-out"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon size="2em" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;