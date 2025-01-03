import { FaInstagram, FaLinkedin, FaFacebook, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center justify-center pb-8">
            <h3 className="text-2xl font-bold mb-8">Kontakt</h3>

            <a
                href="mailto:imdahl@rheingold-salon.de"
                className="text-xl mb-4 flex items-center hover:text-gray-600 transition-colors duration-300"
            >
                <FaEnvelope className="mr-2" /> imdahl@rheingold-salon.de
            </a>
            <p className="text-xl mb-4 flex items-center"><FaPhone className="mr-2" /> 0221-86006-0</p>
            <a
                href="#"
                className="text-xl mb-4 flex items-center hover:text-gray-600 transition-colors duration-300">
                <FaMapMarkerAlt className="mr-2" />Hohe Straße 160-168, 50667 Köln
            </a>
            <div className="flex space-x-6">
                <a
                    href="https://de.linkedin.com/in/ines-imdahl"
                    className="text-2xl hover:scale-110 transition-transform duration-300"
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://www.instagram.com/ini_imsta/"
                    className="text-2xl hover:scale-110 transition-transform duration-300"
                    target="_blank"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.facebook.com/ines.imdahl/"
                    className="text-2xl hover:scale-110 transition-transform duration-300"
                    target="_blank"
                >
                    <FaFacebook />
                </a>
            </div>
            <a
                href="/impressum"
                className="text-xl mt-4 flex border-t-2 border-grey-200 items-center hover:text-gray-600 transition-colors duration-300"
            >
                Impressum
            </a>
        </section>
    );
}

export default Contact;