import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supaBaseClient';
import Embed from '../ui/Embed';

function ContentDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            const { data, error } = await supabase
                .from('content')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching content:', error);
                navigate('/');
                return;
            }

            setContent(data);
            setLoading(false);
        };

        fetchContent();
    }, [id, navigate]);

    if (loading) {
        return <div className="text-center py-16">Lädt...</div>;
    }

    return (
        <article className="max-w-4xl mx-auto py-16 px-4">
            <button
                onClick={() => navigate(-1)}
                className="mb-8 text-gray-600 hover:text-gray-900"
            >
                ← Zurück
            </button>

            <h1 className="text-4xl font-bold mb-8">{content.title}</h1>

            <Embed content={content} />

            <div className="prose max-w-none mt-8">
                <p className="whitespace-pre-wrap text-gray-700">{content.text}</p>
            </div>

            <div className="mt-8 text-gray-500">
                {new Date(content.date).toLocaleDateString()}
            </div>
        </article>
    );
}

export default ContentDetail;