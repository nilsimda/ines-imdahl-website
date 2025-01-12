export default function Timeline({ content }) {
    return (
        <div className="border-l-2 border-gray-300 pl-8 space-y-8">
            {/* Timeline items with enhanced visual elements */}
            {content.map((item, index) => (
                <div key={index} className="relative group">
                    <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-300 rounded-full group-hover:bg-gray-400 transition-colors duration-300"></div>
                    <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-300 bg-opacity-50 rounded-full animate-ping"></div>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{item}</p>
                </div>
            ))}
        </div>
    );
}