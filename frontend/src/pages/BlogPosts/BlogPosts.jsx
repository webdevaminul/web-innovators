import { useEffect, useState } from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share';
import axiosInstance from '../../api/axiosInstance';

const BlogPosts = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [posts, setPosts] = useState([]);
    const [latestPosts, setLatestPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const fetchPosts = async () => {
        // const baseUrl = axiosInstance.defaults.baseURL;
        try {
            const response = await axiosInstance.get(`/blog/allBlogPosts`);
            if (!response.ok) throw new Error("Error fetching posts: " + response.statusText);
            const data = response.data
            console.log('data',data)
            // const data = await response.json();
            setAllPosts(data);
            setPosts(data);
            setLatestPosts(data.slice(0, 5));
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const categories = ['All', ...new Set(allPosts.map(post => post.category))];

    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setPosts(allPosts);
        } else {
            const filteredPosts = allPosts.filter(post => post.category === category);
            setPosts(filteredPosts);
        }
        setSelectedPost(null);
        setCurrentPage(1);
    };

    const handleCategoryChange = (event) => {
        filterByCategory(event.target.value);
    };

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleBackClick = () => {
        setSelectedPost(null);
        setCurrentPage(1);
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const truncateTitle = (title, wordLimit) => {
        const words = title.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : title;
    };

    return (
        <div className="bg-white text-gray-800 min-h-screen overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4">
                {/* Categories Section (Visible on Small and Medium Devices) */}
                <div className="col-span-full lg:hidden relative z-10 mb-4">
                    <div className="bg-gray-100 p-3 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Categories</h2>
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="border border-gray-300 rounded-lg p-2 w-full max-w-xs appearance-none bg-white text-gray-800 focus:outline-none focus:ring focus:ring-violet-400"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Blog Posts Section */}
                <div className="col-span-full md:col-span-4 lg:col-span-4 p-4">
                    {selectedPost ? (
                        <div className="bg-gray-100 mb-4 p-8 rounded-lg shadow-md">
                            <button className="text-violet-500 mb-2" onClick={handleBackClick}>
                                &lt; Back to Posts
                            </button>
                            <div
                                className="bg-no-repeat bg-cover h-64 rounded-lg mb-2"
                                style={{
                                    backgroundImage: `url(${selectedPost.image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                }}
                            ></div>
                            <h1 className="text-3xl font-semibold mb-2 mt-2">{selectedPost.title}</h1>
                            <p className="flex-1 pt-1 mb-2">{selectedPost.description}</p>
                            <div className="flex items-center justify-between mb-2 pt-2">
                                <div className="flex space-x-2">
                                    <img src={selectedPost.photo} alt={selectedPost.name} className="w-5 h-5 rounded-full" />
                                    <span className="self-center text-sm">by {selectedPost.name}</span>
                                </div>
                                <span className="text-xs">{new Date(selectedPost.date).toLocaleDateString()} - {selectedPost.time}</span>
                            </div>

                            {/* Social Share Section */}
                            <div className="flex space-x-4 mt-2 mb-2">
                                <FacebookShareButton url={window.location.href} quote={selectedPost.title}>
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>
                                <TwitterShareButton url={window.location.href} title={selectedPost.title}>
                                    <TwitterIcon size={32} round />
                                </TwitterShareButton>
                                <LinkedinShareButton url={window.location.href} title={selectedPost.title}>
                                    <LinkedinIcon size={32} round />
                                </LinkedinShareButton>
                            </div>
                        </div>
                    ) : (
                        currentPosts.map((post) => (
                            <div key={post._id} className="bg-gray-100 p-4 mb-4 rounded-lg shadow-md">
                                <div
                                    className="bg-no-repeat bg-cover h-64 rounded-lg mb-2"
                                   
                                >
                                    <img src={post.image} alt="" className='w-full h-3/4 bg-transparent' />
                                </div>
                                <span
                                    className="px-2 py-1 text-xs rounded-full bg-violet-400 text-gray-900 cursor-pointer"
                                    onClick={() => filterByCategory(post.category)}
                                >
                                    {post.category}
                                </span>
                                <h1 className="text-2xl font-semibold mt-2">{post.title}</h1>
                                <p className="flex-1 pt-1">{post.description.slice(0, 100)}...</p>
                                <button className="inline-flex items-center pt-2 pb-4 space-x-2 text-sm text-violet-500" onClick={() => handlePostClick(post)}>
                                    <span>Read more</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex space-x-2">
                                        <img src={post.photo} alt={post.name} className="w-5 h-5 rounded-full" />
                                        <span className="self-center text-sm">by {post.name}</span>
                                    </div>
                                    <span className="text-xs">{new Date(post.date).toLocaleDateString()} - {post.time}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Right Sidebar (Visible on Medium and Large Devices) */}
                <div className="hidden lg:flex lg:col-span-1 p-4 flex-col space-y-4 lg:static lg:fixed lg:right-0 lg:top-16 lg:max-h-screen lg:overflow-y-auto">
                    {/* Categories Section */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Categories</h2>
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="border border-gray-300 rounded-lg p-2 w-full appearance-none bg-white text-gray-800 focus:outline-none focus:ring focus:ring-violet-400"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Latest Posts Section */}
                    {/* Latest Posts Section */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Latest Posts</h2>
                        {latestPosts.map((post) => (
                            <div key={post._id} className="flex mb-2">
                                <img src={`http://localhost:5000/${post.image}`} alt={post.title} className="w-16 h-16 rounded-lg mr-2" />
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-sm font-semibold">{truncateTitle(post.title, 3)}</h3>
                                    <p className="text-xs">{new Date(post.date).toLocaleDateString()}</p>
                                    <button
                                        className="mt-1 text-violet-500 text-xs font-bold"
                                        onClick={() => handlePostClick(post)}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4 p-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 mx-1 rounded-lg ${currentPage === index + 1 ? 'bg-violet-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogPosts;
