{/*import { FaShoppingCart } from "react-icons/fa";
import book1Cover from "../../assets/werbung_couch.jpg";
import book2Cover from "../../assets/frauen_buch.jpg";

function Books() {
    const books = [
        {
            coverImage: book1Cover,
            description: "Wirklich gute Werbung, will nicht nur ‚verkaufen‘, sie umwirbt uns als Menschen und nimmt uns in unseren Empfindungen ernst. Und sie versucht uns und unser Seelenleben zu ‚unterhalten‘. Anders formuliert zu ‚füttern‘ mit Botschaften und Aussagen, die uns Spaß machen. Werbung kann durchaus eine moderne Form des Märchenerzählens sein. Sicher tischt sie uns auch ‚Märchen‘ auf, aber sie kann unsere Werte und Sehnsüchte bebildern. Sie hält unsere Geschichten und Mythen lebendig, die sich früher die Menschen erzählt haben.",
            releaseYear: "2015",
            pages: 232,
            price: "7.99€",
            buyLink: "https://www.amazon.de/Werbung-auf-Couch-M%C3%A4rchen-braucht/dp/3451329670"
        },
        {
            coverImage: book2Cover,
            description: "Frauen denken, fühlen und handeln anders als Männer. Anhand von einer eigens zum Thema aufgelegten Studie zeigen Janine Steeger und Ines Imdahl, wie das weibliche Prinzip die Welt retten kann. Sie erklären, warum die weiblichen Eigenschaften eine zwingende Ergänzung zum Männlichen sind, um die großen Aufgaben der Zukunft, wie die Klimakrise, Flucht und Migration oder Chancengerechtigkeit zu lösen. Inklusive einer weiblich-dominierten Utopie als Ausblick!",
            releaseYear: "2022",
            pages: 220,
            price: "20.00€",
            buyLink: "https://www.amazon.de/Warum-Frauen-Welt-retten-werden/dp/3831206058"
        }
    ];

    return (
        <section id="books" className="min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Meine Bücher</h1>

                <div className="grid md:grid-cols-2 gap-44 px-4">
                    {books.map((book, index) => (
                        <div key={index} className="flex flex-col items-center h-full">
                            <div className="relative w-full max-w-xs aspect-[2/3] mb-6">
                                <img
                                    src={book.coverImage}
                                    alt={`Cover of ${book.title}`}
                                    className="absolute inset-0 w-full h-full object-contain hover:scale-105 transition duration-300"
                                />
                            </div>

                            <div className="flex flex-col items-center flex-grow">
                                <p className="text-gray-600 text-left mb-4">
                                    {book.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                                    <span>{book.releaseYear}</span>
                                    <span>•</span>
                                    <span>{book.pages} Seiten</span>
                                    <span>•</span>
                                    <span>{book.price}</span>
                                </div>

                                <div className="flex justify-center">
                                    <a href={book.buyLink} target="_blank" className="flex items-center gap-2 hover:scale-105 transition duration-300 ease-in-out">
                                        <FaShoppingCart className="w-4 h-4" />
                                        Bestellen
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Books;*/}

import React from 'react';
import { FaShoppingCart, FaCalendarAlt, FaBookOpen, FaEuroSign } from "react-icons/fa";
import book1Cover from "../../assets/werbung_couch.jpg";
import book2Cover from "../../assets/frauen_buch.jpg";

function Books() {
    const books = [
        {
            title: "Werbung auf der Couch",
            coverImage: book1Cover,
            description: "Wirklich gute Werbung, will nicht nur ‚verkaufen', sie umwirbt uns als Menschen und nimmt uns in unseren Empfindungen ernst. Und sie versucht uns und unser Seelenleben zu ‚unterhalten'. Anders formuliert zu ‚füttern' mit Botschaften und Aussagen, die uns Spaß machen. Werbung kann durchaus eine moderne Form des Märchenerzählens sein. Sicher tischt sie uns auch ‚Märchen' auf, aber sie kann unsere Werte und Sehnsüchte bebildern. Sie hält unsere Geschichten und Mythen lebendig, die sich früher die Menschen erzählt haben.",
            releaseYear: "2015",
            pages: 232,
            price: "7.99",
            buyLink: "https://www.amazon.de/Werbung-auf-Couch-M%C3%A4rchen-braucht/dp/3451329670"
        },
        {
            title: "Warum Frauen die Welt retten werden",
            coverImage: book2Cover,
            description: "Frauen denken, fühlen und handeln anders als Männer. Anhand von einer eigens zum Thema aufgelegten Studie zeigen Janine Steeger und Ines Imdahl, wie das weibliche Prinzip die Welt retten kann. Sie erklären, warum die weiblichen Eigenschaften eine zwingende Ergänzung zum Männlichen sind, um die großen Aufgaben der Zukunft, wie die Klimakrise, Flucht und Migration oder Chancengerechtigkeit zu lösen. Inklusive einer weiblich-dominierten Utopie als Ausblick!",
            releaseYear: "2022",
            pages: 220,
            price: "20.00",
            buyLink: "https://www.amazon.de/Warum-Frauen-Welt-retten-werden/dp/3831206058"
        }
    ];

    return (
        <section id="books" className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h3 className="text-2xl font-bold text-center mb-16">
                    <span className="relative">
                        Meine Bücher
                    </span>
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                    {books.map((book, index) => (
                        <div key={index} className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden p-6">
                            <div className="relative group">
                                {/* Book cover container with rounded corners and shadow */}
                                <div className="relative w-full max-w-xs mx-auto aspect-[2/3] mb-8 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                    {/* Soft gradient overlay for better edge blending */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-50"></div>
                                    {/* Book cover image */}
                                    <img
                                        src={book.coverImage}
                                        alt={`Cover von ${book.title}, ein Buch von Ines Imdahl`}
                                        className="absolute inset-0 w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            <div className="flex-grow">
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {book.description}
                                </p>
                            </div>

                            <div className="mt-6 border-t border-gray-100 pt-6">
                                <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-gray-500">
                                    <span className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-gray-400" />
                                        {book.releaseYear}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <FaBookOpen className="text-gray-400" />
                                        {book.pages} Seiten
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <FaEuroSign className="text-gray-400" />
                                        {book.price}
                                    </span>
                                </div>

                                <div className="flex justify-center">
                                    <a
                                        href={book.buyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
                                    >
                                        <FaShoppingCart className="w-4 h-4" />
                                        Jetzt bestellen
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Books;