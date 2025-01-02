import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { supabase } from '../../utils/supaBaseClient';

function MediaAppearances() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [mediaAppearances, setMediaAppearances] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMediaAppearances = async () => {
            setIsLoading(true);
            const { data, error } = await supabase.from('content').select().eq('contentType', 'media_appearance');
            if (error) {
                console.error(error);
                setError(error);
            }
            else setMediaAppearances(data);
            setIsLoading(false);
        };

        fetchMediaAppearances();
    }, []);

    const handleCardClick = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    if (isLoading) {
        return <div className="text-center py-16">Lädt...</div>;
    }

    if (error) {
        return <div className="text-center py-16 text-red-600">{error.error}</div>;
    }

    return (
        <section id="media" className="py-16 px-4">
            <h1 className="text-4xl font-bold text-center mb-16">In den Medien</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {mediaAppearances.map((item) => (
                    <motion.div
                        key={item.id}
                        className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleCardClick(item)}
                    >
                        <div className="aspect-video mb-4">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.date}</p>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm">
                            {item.type}
                        </span>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="bg-white rounded-lg max-w-2xl w-full p-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                                <button
                                    onClick={closeModal}
                                    className="p-1 hover:bg-gray-100 rounded-full"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <img
                                src={selectedItem.imageUrl}
                                alt={selectedItem.title}
                                className="w-full h-64 object-cover rounded mb-4"
                            />
                            <p className="text-gray-700 mb-4">{selectedItem.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">{selectedItem.date}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default MediaAppearances;