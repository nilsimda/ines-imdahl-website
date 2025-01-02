import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supaBaseClient';
import ContentForm from '../ui/ContentForm';

//TODO: UPDATE?

const SecretDashboard = () => {
    const [activeTab, setActiveTab] = useState('blog');
    const [isAdding, setIsAdding] = useState(false);
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pendingDeletion, setPendingDeletion] = useState(null);

    const initialContentState = {
        title: '',
        text: '', // Fixed: changed from 'text' to 'content' to match usage
        date: '',
        imageUrl: '',
        videoUrl: '',
        contentType: ''
    };

    const [newContent, setNewContent] = useState(initialContentState);

    useEffect(() => {
        fetchContent();
        const subscription = setupRealtime();
        return () => subscription(); // Clean up subscription on unmount
    }, []);

    const setupRealtime = () => {
        const subscription = supabase
            .channel('content_changes')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'content' },
                (payload) => {
                    if (payload.eventType === 'INSERT') {
                        setContents(current => [...current, payload.new]);
                    } else if (payload.eventType === 'DELETE') {
                        setContents(current =>
                            current.filter(item => item.id !== payload.old.id)
                        );
                    }
                }
            )
            .subscribe();

        return () => subscription.unsubscribe();
    };

    const fetchContent = async () => {
        try {
            const { data, error } = await supabase
                .from('content')
                .select('*')
                .order('date', { ascending: false });

            if (error) throw error;
            setContents(data || []);
        } catch (error) {
            console.error('Error fetching content:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddContent = async (e) => {
        e.preventDefault();
        try {
            const { error } = await supabase
                .from('content')
                .insert([{
                    ...newContent,
                    contentType: activeTab // Ensure contentType is set based on active tab
                }]);

            if (error) throw error;
            setNewContent(initialContentState);
            setIsAdding(false);
        } catch (error) {
            console.error('Error adding content:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const { error } = await supabase
                .from('content')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setPendingDeletion(null); // Clear pending deletion after success
        } catch (error) {
            console.error('Error deleting content:', error);
        }
    };

    if (loading) {
        return <div className="flex justify-center p-8">Lädt...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex mb-6 border-b">
                <button
                    className={`px-4 py-2 ${activeTab === 'blog' ? 'border-b-2 border-blue-500' : ''}`}
                    onClick={() => setActiveTab('blog')}
                >
                    Blog Posts
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 'media' ? 'border-b-2 border-blue-500' : ''}`}
                    onClick={() => setActiveTab('media')}
                >
                    In den Medien Posts
                </button>
            </div>

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                    {activeTab === 'blog' ? 'Blog Posts' : 'In den Medien Posts'}
                </h2>
                <button
                    onClick={() => setIsAdding(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    {activeTab === 'blog' ? 'Blog Post' : 'In den Medien Post'} hinzufügen
                </button>
            </div>

            {isAdding && (
                <ContentForm
                    handleAddContent={handleAddContent}
                    setContent={setNewContent}
                    newContent={newContent}
                    setIsAdding={setIsAdding}
                    contentType={activeTab}
                />
            )}

            <div className="space-y-4">
                {contents
                    .filter(content => content.contentType === activeTab)
                    .map(content => (
                        <div key={content.id} className="p-6 border rounded-lg bg-white shadow-sm flex justify-between items-start">
                            <div className="space-y-2">
                                <h3 className="font-semibold">{content.title}</h3>
                                <div className="text-sm text-gray-500">
                                    {new Date(content.date).toLocaleDateString()}
                                </div>
                            </div>
                            <button
                                onClick={() => setPendingDeletion(content)}
                                className="text-gray-400 hover:text-red-500"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ))}
            </div>

            {/* Confirmation Modal */}
            {pendingDeletion && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                        <h3 className="text-lg font-semibold mb-4">Löschen bestätigen</h3>
                        <p className="mb-6">Möchten Sie "{pendingDeletion.title}" wirklich löschen?</p>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setPendingDeletion(null)}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                            >
                                Abbrechen
                            </button>
                            <button
                                onClick={() => handleDelete(pendingDeletion.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Löschen
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SecretDashboard;