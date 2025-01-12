import React from 'react';
import { FaShoppingCart, FaCalendarAlt, FaBookOpen, FaEuroSign } from "react-icons/fa";

function Books({ books }) {
    return (
        <section id="books" className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h3 className="text-2xl font-bold text-center mb-16">
                    <span className="relative">
                        Meine Bücher
                    </span>
                </h3>

                <div className={`grid grid-cols-1 md:grid-cols-${books.length === 1 ? '1' : '2'} gap-8 ${books.length === 1 ? 'max-w-2xl mx-auto' : ''}`}>
                    {books.map((book, index) => (
                        <div key={index} className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden p-6">
                            <div className="relative group">
                                <div className="relative w-full max-w-xs mx-auto aspect-[2/3] mb-8 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-50"></div>
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