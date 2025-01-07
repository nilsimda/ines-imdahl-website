import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
        if (!hasAcceptedCookies) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black opacity-95 text-white p-4 shadow-lg">
            <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm">
                    Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern.
                    Durch Klicken auf "Akzeptieren" stimmen Sie der Verwendung von Cookies zu.
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={acceptCookies}
                        className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                        Akzeptieren
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;