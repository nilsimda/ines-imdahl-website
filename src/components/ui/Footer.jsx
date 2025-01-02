import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-transparent p-4 text-white">
            <div className="flex justify-between items-center px-5">
                <p className="text-white m-0 hidden md:inline">
                    Diplom Psychologin | Speakerin | Researcherin
                </p>
                <div className="flex space-x-4">
                    <a href="https://de.linkedin.com/in/ines-imdahl" className="text-white-400 hover:scale-105 transition duration-300 ease-in-out">
                        <FaLinkedin size="2em" />
                    </a>
                    <a href="https://www.instagram.com/ini_imsta/" className="text-white-400 hover:scale-105 transition duration-300 ease-in-out">
                        <FaInstagram size="2em" />
                    </a>
                    <a href="https://www.facebook.com/ines.imdahl/" className="text-white-400 hover:scale-105 transition duration-300 ease-in-out">
                        <FaFacebook size="2em" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;