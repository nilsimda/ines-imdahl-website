import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
function Contact({ email, socialLinks }) {
    return (
        <section id="contact" className="flex flex-col items-center justify-center pb-8">
            <h3 className="text-2xl font-bold mb-8">Kontakt</h3>

            <a
                href={`mailto:${email}`}
                className="text-xl mb-4 flex items-center hover:text-gray-600 transition-colors duration-300"
            >
                <FaEnvelope className="mr-2" /> {email}
            </a>
            <p className="text-xl mb-4 flex items-center"><FaPhone className="mr-2" /> 0221-86006-0</p>
            <a
                href="https://maps.app.goo.gl/g3fxG6YiKFzm4CFE8"
                target="_blank"
                className="text-xl mb-4 flex items-center hover:text-gray-600 transition-colors duration-300">
                <FaMapMarkerAlt className="mr-2" />Hohe Straße 160-168, 50667 Köln
            </a>
            <div className="flex space-x-6">
                {socialLinks.map(({ label, href, icon: Icon, ariaLabel }) => (
                    <a
                        key={label}
                        aria-label={ariaLabel}
                        href={href}
                        className="text-2xl hover:scale-110 transition-transform duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon />
                    </a>
                ))}
            </div>
            <a
                href="/impressum"
                className="text-xl mt-10 flex border-t-2 border-grey-200 items-center hover:text-gray-600 transition-colors duration-300"
            >
                Impressum
            </a>
        </section>
    );
}

export default Contact;