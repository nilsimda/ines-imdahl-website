export default function Timeline() {
    return (
        <div className="border-l-2 border-gray-300 pl-8 space-y-8">
            {/* Timeline items with enhanced visual elements */}
            {[
                "Studium der Psychologie an der Universität zu Köln",
                "Hochzeit mit meiner großen Liebe Jens Lönneker: 1999",
                "Geburten unserer vier fantastischen Kinder: 2000, 2004, 2007 & 2009",
                "Gründung des rheingold salon als psychologische Forschungsagentur",
                "Handelsblattkolumnistin für den Werberat",
                "Mein erstes Buch „Werbung auf der Couch“, 2016",
                "Mein zweites Buch „Warum Frauen die Welt retten werden“, 2022",
                "40 over 40 Germanys most inspiring women: 2022",
                "LinkedIn TopVoice & wohl sowas wie LinkedIn Influenceri, 2024",
                "LinkedIn Learning Trainerin zum Thema Marktforschung DACH, 2024",
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