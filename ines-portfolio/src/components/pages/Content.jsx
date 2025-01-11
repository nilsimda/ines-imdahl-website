import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supaBaseClient';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Embed from '../ui/Embed';

//TODO: fix heights accross pages

function Content({ contentType }) {
    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [isChangingPage, setIsChangingPage] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const getPostsPerPage = () => {
        if (windowWidth < 768) return 1; // Mobile
        return 3;
    };

    const postsPerPage = getPostsPerPage();

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        fetchBlogs();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const fetchBlogs = async () => {
        try {
            const { data, error } = await supabase
                .from('content')
                .select('*')
                .eq('contentType', contentType)
                .eq('user_id', 'a3a32e0a-4884-4224-98a0-26f9210aff3c')
                .order('date', { ascending: false });

            if (error) throw error;
            setBlogs(data || []);
        } catch (error) {
            console.error('Error fetching content:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = async (pageNumber) => {
        setIsChangingPage(true);
        setTimeout(() => {
            setCurrentPage(pageNumber);
            setTimeout(() => {
                setIsChangingPage(false);
            }, 50);
        }, 300);
    };

    const handleCardClick = (blog) => {
        navigate(`/content/${blog.id}`);
    };

    const getPageNumbers = () => {
        if (totalPages <= 7) {
            // If 7 or fewer pages, display all
            return [...Array(totalPages)].map((_, i) => i + 1);
        }

        // If more than 7 pages, use an ellipsis
        const pages = [];
        if (currentPage <= 4) {
            // If near the beginning, show first 5, then ellipsis, then last
            for (let i = 1; i <= 5; i++) {
                pages.push(i);
            }
            pages.push('...');
            pages.push(totalPages);
        } else if (currentPage >= totalPages - 3) {
            // If near the end, show first, then ellipsis, then last 5
            pages.push(1);
            pages.push('...');
            for (let i = totalPages - 4; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // If in the middle, show first, ellipsis, current - 1, current, current + 1, ellipsis, last
            pages.push(1);
            pages.push('...');
            pages.push(currentPage - 1);
            pages.push(currentPage);
            pages.push(currentPage + 1);
            pages.push('...');
            pages.push(totalPages);
        }
        return pages;
    };


    if (loading) {
        return <div className="text-center py-16">Lädt...</div>;
    }

    return (
        <section id={contentType}>
            <h3 className="text-2xl font-bold text-center mb-8">
                {contentType === 'blog' ? 'Blog' :
                    contentType === 'publication' ? 'Veröffentlichungen' : 'In den Medien'}
            </h3>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-12 relative">
                <input
                    type="text"
                    placeholder="Nach Beiträgen suchen..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Blog Posts */}
            <div className="max-w-7xl mx-auto">
                {filteredBlogs.length === 0 ? (
                    <div className="text-center text-gray-600 py-8">
                        Keine Beiträge gefunden.
                    </div>
                ) : (
                    <div className="relative">
                        <div
                            className={`flex flex-wrap justify-center gap-6 transition-opacity duration-300 ${isChangingPage ? 'opacity-0' : 'opacity-100'
                                }`}
                        >
                            {currentPosts.map((blog) => (
                                <div
                                    key={blog.id}
                                    onClick={() => handleCardClick(blog)}
                                    className={`w-full md:w-[calc(33.333%-1rem)] min-w-[300px] max-w-[400px] bg-white rounded-lg shadow-lg flex-shrink-0 hover:shadow-xl hover:scale-105 hover:cursor-pointer transition-all duration-300 flex flex-col transform ${isChangingPage ? 'translate-y-4' : 'translate-y-0'
                                        }`}
                                >
                                    <Embed content={blog} />
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-semibold mb-2">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                            {blog.text}
                                        </p>
                                        <div className="text-sm text-gray-500">
                                            {new Date(blog.date).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-12 gap-2">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors duration-300"
                        >
                            <FaChevronLeft className="text-gray-600" />
                        </button>

                        {getPageNumbers().map((pageNumber, index) => (
                            <button
                                key={index}
                                onClick={() => pageNumber !== '...' && paginate(pageNumber)}
                                disabled={pageNumber === '...'}
                                className={`w-8 h-8 rounded-lg transition-all duration-300 ${currentPage === index + 1
                                    ? 'bg-gray-900 text-white'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        ))}

                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors duration-300"
                        >
                            <FaChevronRight className="text-gray-600" />
                        </button>
                    </div>
                )}
            </div>
        </section >
    );
}

export default Content;