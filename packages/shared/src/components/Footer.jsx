import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-transparent p-4 text-white">
            <div className="flex justify-end items-center px-5">
                <div className="flex space-x-4">
                    <a href="https://de.linkedin.com/in/ines-imdahl" aria-label="LinkedIn Profil von Ines Imdahl" className="text-white-400 hover:scale-105 transition duration-300 ease-in-out">
                        <FaLinkedin size="2em" />
                    </a>
                    <a href="https://www.instagram.com/ini_imsta/" aria-label="Instagram Profil von Ines Imdahl" className="text-white-400 hover:scale-105 transition duration-300 ease-in-out">
                        <FaInstagram size="2em" />
                    </a>
                    <a href="https://www.facebook.com/ines.imdahl/" aria-label="Facebook Profil von Ines Imdahl" className="text-white-400 hover:scale-105 transition duration-300 ease-in-out">
                        <FaFacebook size="2em" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;