import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supaBaseClient'

const SecretDashboard = () => {
    const [activeTab, setActiveTab] = useState('blog');
    const [isAdding, setIsAdding] = useState(false);
    const [blogPosts, setBlogPosts] = useState([]);
    const [mediaAppearances, setMediaAppearances] = useState([]);
    const [loading, setLoading] = useState(true);

    const [newBlogPost, setNewBlogPost] = useState({
        imageUrl: '',
        title: '',
        blog_text: '',
        date: '',
    });

    const [newAppearance, setNewAppearance] = useState({
        title: '',
        outlet: '',
        date: '',
        url: '',
        description: ''
    });

    useEffect(() => {
        fetchContent();
        setupRealtime();
    }, []);

    const setupRealtime = () => {
        // Blog subscription
        const blogSubscription = supabase
            .channel('blog_changes')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'blog' },
                (payload) => {
                    if (payload.eventType === 'INSERT') {
                        setBlogPosts(current => [...current, payload.new]);
                    } else if (payload.eventType === 'DELETE') {
                        setBlogPosts(current =>
                            current.filter(item => item.id !== payload.old.id)
                        );
                    }
                }
            )
            .subscribe();

        // Media appearances subscription
        const mediaSubscription = supabase
            .channel('media_changes')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'media_appearances' },
                (payload) => {
                    if (payload.eventType === 'INSERT') {
                        setMediaAppearances(current => [...current, payload.new]);
                    } else if (payload.eventType === 'DELETE') {
                        setMediaAppearances(current =>
                            current.filter(item => item.id !== payload.old.id)
                        );
                    }
                }
            )
            .subscribe();

        return () => {
            blogSubscription.unsubscribe();
            mediaSubscription.unsubscribe();
        };
    };

    const fetchContent = async () => {
        setLoading(true);
        try {
            // Fetch blog posts
            const { data: blogData, error: blogError } = await supabase
                .from('blog')
                .select('*')
                .order('date', { ascending: false });

            if (blogError) throw blogError;
            setBlogPosts(blogData);

            // Fetch media appearances
            const { data: mediaData, error: mediaError } = await supabase
                .from('media_appearances')
                .select('*')
                .order('date', { ascending: false });

            if (mediaError) throw mediaError;
            setMediaAppearances(mediaData);
        } catch (error) {
            console.error('Error fetching content:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddBlogPost = async (e) => {
        e.preventDefault();
        try {
            const { error } = await supabase
                .from('blog')
                .insert([{
                    ...newBlogPost,
                }]);

            if (error) throw error;

            setNewBlogPost({
                title: '',
                content: '',
                published_date: '',
                slug: '',
                excerpt: ''
            });
            setIsAdding(false);
        } catch (error) {
            console.error('Error adding blog post:', error);
        }
    };

    const handleAddAppearance = async (e) => {
        e.preventDefault();
        try {
            const { error } = await supabase
                .from('media_appearances')
                .insert([newAppearance]);

            if (error) throw error;

            setNewAppearance({
                title: '',
                outlet: '',
                date: '',
                url: '',
                description: ''
            });
            setIsAdding(false);
        } catch (error) {
            console.error('Error adding appearance:', error);
        }
    };

    const handleDelete = async (id, type) => {
        try {
            const { error } = await supabase
                .from(type === 'blog' ? 'blog' : 'media_appearances')
                .delete()
                .eq('id', id);

            if (error) throw error;
        } catch (error) {
            console.error('Error deleting content:', error);
        }
    };

    if (loading) {
        return <div className="flex justify-center p-8">Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Tab Navigation */}
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
                    Media Appearances
                </button>
            </div>

            {/* Add Content Button */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                    {activeTab === 'blog' ? 'Blog Posts' : 'Media Appearances'}
                </h2>
                <button
                    onClick={() => setIsAdding(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add {activeTab === 'blog' ? 'Blog Post' : 'Media Appearance'}
                </button>
            </div>

            {/* Add Forms */}
            {isAdding && activeTab === 'blog' && (
                <form onSubmit={handleAddBlogPost} className="mb-8 space-y-4 p-6 border rounded-lg bg-white shadow-sm">
                    <input
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="Titel"
                        value={newBlogPost.title}
                        onChange={(e) => setNewBlogPost({ ...newBlogPost, title: e.target.value })}
                        required
                    />
                    <textarea
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="Inhalt"
                        value={newBlogPost.content}
                        onChange={(e) => setNewBlogPost({ ...newBlogPost, content: e.target.value })}
                        rows={10}
                        required
                    />
                    <input
                        type="date"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={newBlogPost.date}
                        onChange={(e) => setNewBlogPost({ ...newBlogPost, date: e.target.value })}
                        required
                    />
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => setIsAdding(false)}
                            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Add Blog Post
                        </button>
                    </div>
                </form>
            )}

            {isAdding && activeTab === 'media' && (
                <form onSubmit={handleAddAppearance} className="mb-8 space-y-4 p-6 border rounded-lg bg-white shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            className="w-full px-4 py-2 border rounded-lg"
                            placeholder="Title"
                            value={newAppearance.title}
                            onChange={(e) => setNewAppearance({ ...newAppearance, title: e.target.value })}
                            required
                        />
                        <input
                            className="w-full px-4 py-2 border rounded-lg"
                            placeholder="Outlet"
                            value={newAppearance.outlet}
                            onChange={(e) => setNewAppearance({ ...newAppearance, outlet: e.target.value })}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="date"
                            className="w-full px-4 py-2 border rounded-lg"
                            value={newAppearance.date}
                            onChange={(e) => setNewAppearance({ ...newAppearance, date: e.target.value })}
                            required
                        />
                        <input
                            type="url"
                            className="w-full px-4 py-2 border rounded-lg"
                            placeholder="URL (optional)"
                            value={newAppearance.url}
                            onChange={(e) => setNewAppearance({ ...newAppearance, url: e.target.value })}
                        />
                    </div>
                    <textarea
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="Description (optional)"
                        value={newAppearance.description}
                        onChange={(e) => setNewAppearance({ ...newAppearance, description: e.target.value })}
                        rows={3}
                    />
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => setIsAdding(false)}
                            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Add Media Appearance
                        </button>
                    </div>
                </form>
            )}

            {/* Content Lists */}
            <div className="space-y-4">
                {activeTab === 'blog' && blogPosts.map((post) => (
                    <div key={post.id} className="p-6 border rounded-lg bg-white shadow-sm flex justify-between items-start">
                        <div className="space-y-2">
                            <h3 className="font-semibold">{post.title}</h3>
                            <div className="text-sm text-gray-500">
                                {new Date(post.published_date).toLocaleDateString()}
                            </div>
                            {post.excerpt && (
                                <p className="text-gray-600">{post.excerpt}</p>
                            )}
                        </div>
                        <button
                            onClick={() => handleDelete(post.id, 'blog')}
                            className="text-gray-400 hover:text-red-500"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}

                {activeTab === 'media' && mediaAppearances.map((appearance) => (
                    <div key={appearance.id} className="p-6 border rounded-lg bg-white shadow-sm flex justify-between items-start">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{appearance.title}</h3>
                                <span className="text-gray-500">•</span>
                                <span className="text-gray-500">{appearance.outlet}</span>
                            </div>
                            <div className="text-sm text-gray-500">
                                {new Date(appearance.date).toLocaleDateString()}
                            </div>
                            {appearance.description && (
                                <p className="text-gray-600">{appearance.description}</p>
                            )}
                            {appearance.url && (
                                <a
                                    href={appearance.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline inline-flex items-center gap-1"
                                >
                                    View Article
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            )}
                        </div>
                        <button
                            onClick={() => handleDelete(appearance.id, 'media')}
                            className="text-gray-400 hover:text-red-500"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecretDashboard;