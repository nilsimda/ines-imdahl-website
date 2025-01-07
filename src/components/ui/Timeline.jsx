export default function Timeline() {
    return (
        <div className="border-l-2 border-gray-300 pl-8 space-y-8">
            {/* Timeline items with enhanced visual elements */}
            {[
                "Studium der Psychologie an der Universität zu Köln",
                "Hochzeit mit meiner großen Liebe Jens Lönneker",
                "2000, 2004, 2007, 2009 Geburten unserer vier fantastischen Kinder",
                "2011 Gründung des rheingold salon als psychologische Forschungsagentur",
                "2016 & 2022 Erscheinen meiner Bücher",
                "2022 gewählt zu den 40 over 40 Germanys most inspiring women",
                "2024 gewählt zur LinkedIn TopVoice (und immer häufiger nennt man mich LinkedIn Influencerin)"
            ].map((item, index) => (
                <div key={index} className="relative group">
                    <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-300 rounded-full group-hover:bg-gray-400 transition-colors duration-300"></div>
                    <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-300 bg-opacity-50 rounded-full animate-ping"></div>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{item}</p>
                </div>
            ))}
        </div>
    );
}