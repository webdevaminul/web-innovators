import React, { useEffect, useState } from 'react';
import postsData from '../../../public/BlogPosts.json'; // Ensure the path is correct
import { FaRegStar } from 'react-icons/fa'; // Example icon from react-icons
import Modal from './Modal'; // Import the Modal component
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share';

const BlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [latestPosts, setLatestPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(postsData.map(post => post.category))];

    useEffect(() => {
        const fetchData = async () => {
            const sortedPosts = postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
            setPosts(sortedPosts);
            setLatestPosts(sortedPosts.slice(0, 5));
        };

        fetchData();
    }, []);

    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setPosts(postsData);
        } else {
            const filteredPosts = postsData.filter(post => post.category === category);
            const sortedFilteredPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
            setPosts(sortedFilteredPosts);
        }
        setSelectedPost(null);
        setCurrentPage(1);
    };

    const handleCategoryChange = (event) => {
        filterByCategory(event.target.value);
    };

    const handleLatestPostClick = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    // Calculate current posts to display
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Pagination Logic
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="bg-white text-gray-800 min-h-screen overflow-hidden">
            <div className="container mx-auto grid grid-cols-12 gap-6 p-6">

                {/* Categories Section (Visible on Small and Medium Devices) */}
                <div className="col-span-full lg:hidden relative z-10">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Categories</h2>
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="border border-gray-300 rounded-lg p-2 w-full max-w-xs appearance-none bg-white text-gray-800 focus:outline-none focus:ring focus:ring-violet-400"
                            style={{ zIndex: 20 }} // Ensure dropdown appears above other elements
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
                <div className="col-span-full lg:col-span-8 lg:mr-4">
                    {(selectedPost ? [selectedPost] : currentPosts).map((post) => (
                        <div key={post.id} className="bg-gray-100 p-6 mb-6 rounded-lg shadow-md">
                            <div
                                className="bg-no-repeat bg-cover h-64 rounded-lg mb-4"
                                style={{
                                    backgroundImage: `url(${post.image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                }}
                            ></div>
                            <div>
                                <span
                                    className="px-2 py-1 text-xs rounded-full bg-violet-400 text-gray-900 cursor-pointer"
                                    onClick={() => filterByCategory(post.category)}
                                >
                                    {post.category}
                                </span>
                                <h1 className="text-3xl font-semibold mt-2">{post.contentTitle}</h1>
                                <p className="flex-1 pt-2">{post.contentDescription.slice(0, 100)}...</p>
                                <a href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-violet-500" onClick={() => handleLatestPostClick(post)}>
                                    <span>Read more</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex space-x-2">
                                        <img src={post.userProfilePicture} alt={post.userName} className="w-5 h-5 rounded-full" />
                                        <span className="self-center text-sm">by {post.userName}</span>
                                    </div>
                                    <span className="text-xs">{new Date(post.date).toLocaleDateString()} - {post.time}</span>
                                </div>
                            </div>

                            {/* Social Share Section */}
                            <div className="flex space-x-4 mt-4">
                                <FacebookShareButton url={window.location.href} quote={post.contentTitle}>
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>
                                <TwitterShareButton url={window.location.href} title={post.contentTitle}>
                                    <TwitterIcon size={32} round />
                                </TwitterShareButton>
                                <LinkedinShareButton url={window.location.href} title={post.contentTitle}>
                                    <LinkedinIcon size={32} round />
                                </LinkedinShareButton>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Latest Posts Section (Visible on Small and Medium Devices) */}
                <div className="col-span-full lg:hidden">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
                        {latestPosts.map((latestPost) => (
                            <div key={latestPost.id} className="mb-4" onClick={() => handleLatestPostClick(latestPost)}>
                                <h3 className="text-lg font-semibold">{latestPost.contentTitle}</h3>
                                <span className="text-xs text-gray-600">{latestPost.date}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Categories and Latest Posts Section (Right Side for Large Devices) */}
                <div className="hidden lg:flex lg:col-span-4 lg:fixed lg:right-0 lg:top-16 lg:max-h-screen lg:overflow-y-auto flex-col space-y-4">
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
                    <div className="bg-gray-100 h-screen p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
                        {latestPosts.map((latestPost) => (
                            <div key={latestPost.id} className="mb-4" onClick={() => handleLatestPostClick(latestPost)}>
                                <h3 className="text-lg font-semibold">{latestPost.contentTitle}</h3>
                                <span className="text-xs text-gray-600">{latestPost.date}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Pagination Section */}
            <div className="flex justify-center mt-8 pb-8">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`mx-1 px-4 py-2 rounded-lg ${currentPage === i + 1 ? 'bg-violet-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            {/* Modal for Selected Post */}
            {isModalOpen && (
                <Modal post={selectedPost} onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
};

export default BlogPosts;
