import React, { useEffect, useState } from 'react';
import postsData from '../../../public/BlogPosts.json'; // Ensure the path is correct
import { FaRegStar } from 'react-icons/fa'; // Example icon from react-icons
import Modal from './Modal'; // Import the Modal component

const BlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [latestPosts, setLatestPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

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
        <div className="bg-white text-gray-800 min-h-screen">
            <div className="container mx-auto grid grid-cols-12 gap-6 p-6">
                {/* Categories Section (Visible on Small and Medium Devices) */}
                <div className="col-span-full lg:col-span-4 flex flex-col space-y-6 lg:hidden">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Categories</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {categories.map((category) => (
                                <span
                                    key={category}
                                    className="flex items-center px-3 py-2 mb-2 text-sm rounded-full bg-violet-400 text-gray-900 cursor-pointer transform transition duration-200 hover:bg-violet-500 hover:scale-105 shadow-md"
                                    onClick={() => filterByCategory(category)}
                                >
                                    <FaRegStar className="mr-2" />
                                    {category}
                                </span>
                            ))}
                        </div>
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
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="col-span-full flex flex-col  my-4">
                    <div className="flex flex-wrap  justify-start mb-2">
                        <button
                            className="mx-1 mb-1 px-4 py-2 bg-violet-500 text-white rounded-lg"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <div className="flex items-center space-x-1 mb-1">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    className={`mx-1 px-3 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-violet-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-violet-400 hover:text-white'}`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            className="mx-1 mb-1 px-4 py-2 bg-violet-500 text-white rounded-lg"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                    
                </div>

                {/* Latest Posts Section (Only visible on Small and Medium Devices) */}
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
                        <div className="grid grid-cols-2 gap-2">
                            {categories.map((category) => (
                                <span
                                    key={category}
                                    className="flex items-center px-3 py-2 mb-2 text-sm rounded-full bg-violet-400 text-gray-900 cursor-pointer transform transition duration-200 hover:bg-violet-500 hover:scale-105 shadow-md"
                                    onClick={() => filterByCategory(category)}
                                >
                                    <FaRegStar className="mr-2" />
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Latest Posts Section */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
                        {latestPosts.map((latestPost) => (
                            <div key={latestPost.id} className="mb-0" onClick={() => handleLatestPostClick(latestPost)}>
                                <h3 className="text-lg font-semibold">{latestPost.contentTitle}</h3>
                                <span className="text-xs text-gray-600">{latestPost.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for displaying the full post */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} post={selectedPost} />
        </div>
    );
};

export default BlogPosts;
