

import React, { useEffect, useState } from 'react';
import postsData from '../../../public/BlogPosts.json'; // Ensure the path is correct
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share';
import Heading from '../../utils/Heading';

const BlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [latestPosts, setLatestPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
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

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleBackClick = () => {
        setSelectedPost(null);
        setCurrentPage(1);
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
            <Heading heading={"Blog"} />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4"> {/* Updated grid layout */ }
                {/* Categories Section (Visible on Small and Medium Devices) */}
                <div className="col-span-full  lg:hidden relative z-10">
                    <div className="bg-gray-100 p-3 rounded-lg shadow-md"> {/* Reduced padding */}
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
                <div className="col-span-full md:col-span-4 lg:col-span-4 p-4"> {/* 80% width on large screens */}
                    {selectedPost ? (
                        <div className="bg-gray-100 mb-4 p-12 w-full rounded-lg shadow-md"> {/* Reduced padding and margin */}
                            <button className="text-violet-500 mb-2" onClick={handleBackClick}>
                                &lt; Back to Posts
                            </button>
                            <div
                                className="bg-no-repeat bg-cover  h-64 rounded-lg mb-2"
                                style={{
                                    backgroundImage: `url(${selectedPost.image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                }}
                            ></div>
                            <h1 className="text-3xl font-semibold mb-2 mt-2">{selectedPost.contentTitle}</h1>
                            <p className="flex-1 pt-1 mb-2">{selectedPost.contentDescription}</p>
                            <div className="flex items-center justify-between mb-2 pt-2">
                                <div className="flex space-x-2">
                                    <img src={selectedPost.userProfilePicture} alt={selectedPost.userName} className="w-5 h-5 rounded-full" />
                                    <span className="self-center text-sm">by {selectedPost.userName}</span>
                                </div>
                                <span className="text-xs">{new Date(selectedPost.date).toLocaleDateString()} - {selectedPost.time}</span>
                            </div>

                            {/* Social Share Section */}
                            <div className="flex space-x-4 mt-2 mb-2">
                                <FacebookShareButton url={window.location.href} quote={selectedPost.contentTitle}>
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>
                                <TwitterShareButton url={window.location.href} title={selectedPost.contentTitle}>
                                    <TwitterIcon size={32} round />
                                </TwitterShareButton>
                                <LinkedinShareButton url={window.location.href} title={selectedPost.contentTitle}>
                                    <LinkedinIcon size={32} round />
                                </LinkedinShareButton>
                            </div>
                        </div>
                    ) : (
                        currentPosts.map((post) => (
                            <div key={post.id} className="bg-gray-100 p-8 mb-4 rounded-lg shadow-md"> {/* Reduced padding and margin */}
                                <div
                                    className="bg-no-repeat bg-cover h-64 rounded-lg mb-2"
                                    style={{
                                        backgroundImage: `url(${post.image})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                    }}
                                ></div>
                                <span
                                    className="px-2 py-1 text-xs rounded-full bg-violet-400 text-gray-900 cursor-pointer"
                                    onClick={() => filterByCategory(post.category)}
                                >
                                    {post.category}
                                </span>
                                <h1 className="text-3xl font-semibold mt-2">{post.contentTitle}</h1>
                                <p className="flex-1 pt-1">{post.contentDescription.slice(0, 100)}...</p>
                                <button className="inline-flex items-center pt-2 pb-4 space-x-2 text-sm text-violet-500" onClick={() => handlePostClick(post)}>
                                    <span>Read more</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex space-x-2">
                                        <img src={post.userProfilePicture} alt={post.userName} className="w-5 h-5 rounded-full" />
                                        <span className="self-center text-sm">by {post.userName}</span>
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
    <div className="bg-gray-100 p-4 rounded-lg shadow-md ">
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
    <div className="bg-gray-100 p-4 lg:h-screen rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Latest Posts</h2>
        <ul className="space-y-2">
            {latestPosts.map((post) => (
                <li key={post.id} className="flex items-center space-x-2 p-2 cursor-pointer" onClick={() => handlePostClick(post)}>
                    <img src={post.image} alt={post.contentTitle} className="w-12 h-12 rounded-lg" />
                    <div>
                        <h3 className="text-sm font-semibold">{post.contentTitle}</h3>
                        <p className="text-xs">{new Date(post.date).toLocaleDateString()}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
</div>

            </div>

            {/* Pagination */}
            {!selectedPost && totalPages > 1 && (
                <div className="flex justify-center py-6">
                    <div className="inline-flex space-x-1">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-violet-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogPosts;

