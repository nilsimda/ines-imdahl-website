import { FaPlay } from 'react-icons/fa'

export default function Embed({ content }) {

    function getEmbedUrl(url) {
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            const videoId = url.includes('youtu.be')
                ? url.split('/').pop()
                : url.split('v=')[1]?.split('&')[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        if (url.includes('vimeo.com')) {
            const videoId = url.split('/').pop();
            return `https://player.vimeo.com/video/${videoId}`;
        }
        return url; // Return original URL if no matching provider
    }

    return (
        <div className="relative pt-[56.25%] w-full rounded-t-lg overflow-hidden">
            {content.contentType !== 'media_appearance' ? (
                <img
                    src={content.imageUrl}
                    alt={`Inhalt mit Titel ${content.title} von Ines Imdahl`}
                    className="absolute inset-0 w-full h-full object-contain bg-gray-100"
                    loading="lazy"
                />
            ) : content.imageUrl ? (
                <a
                    href={content.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={content.imageUrl}
                        alt={`Video thumbnail for ${content.title}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                        <FaPlay className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                </a>
            ) :
                (
                    <iframe
                        src={getEmbedUrl(content.videoUrl)}
                        title={content.title}
                        className="absolute inset-0 w-full h-full"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                )
            }
        </div>
    );
}