
import { X } from 'lucide-react';

export default function MobileMenu({ isMobileMenuOpen, setIsMobileMenuOpen, linkAnimationClasses, handleLinkClick, navLinks }) {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-95 transform transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <div className="flex justify-end p-4">
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white focus:outline-none"
                    aria-label="Close mobile menu"
                >
                    <X size={24} />
                </button>
            </div>
            <ul className="flex flex-col p-4">
                {navLinks.map((link) => (
                    <li key={link.id} className="mb-4">
                        <a
                            href={link.href}
                            onClick={(event) => handleLinkClick(event, link.id)}
                            className={`text-white text-xl block py-2 ${linkAnimationClasses}`}
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}