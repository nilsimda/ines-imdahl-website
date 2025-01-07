import { createContext, useContext, useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Create a context for cookie consent
export const CookieConsentContext = createContext({
    cookiesAccepted: false,
    acceptCookies: () => { },
});

// Provider component to manage cookie consent state
export const CookieConsentProvider = ({ children }) => {
    const [cookiesAccepted, setCookiesAccepted] = useState(false);

    useEffect(() => {
        // Check initial consent on mount
        const hasAccepted = localStorage.getItem('cookiesAccepted') === 'true';
        setCookiesAccepted(hasAccepted);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setCookiesAccepted(true);
    };

    return (
        <CookieConsentContext.Provider value={{ cookiesAccepted, acceptCookies }}>
            {children}
            {/* Only render analytics when cookies are accepted */}
            {cookiesAccepted && (
                <>
                    <SpeedInsights />
                    <Analytics />
                </>
            )}
        </CookieConsentContext.Provider>
    );
};

// Custom hook to use cookie consent
export const useCookieConsent = () => useContext(CookieConsentContext);

// Modified CookieBanner component
const CookieBanner = () => {
    const { cookiesAccepted, acceptCookies } = useCookieConsent();

    if (cookiesAccepted) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black opacity-95 text-white p-4 shadow-lg z-50">
            <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm">
                    Wir verwenden Cookies, um Ihr Browsererlebnis zu verbessern und diese Website zu optimieren.
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