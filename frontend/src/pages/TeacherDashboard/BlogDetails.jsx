import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams(); // Get the blog post ID from the URL
    const [blogPost, setBlogPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const response = await fetch(`http://localhost:5000/blog/allBlogPosts/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch blog post");
                }
                const data = await response.json();
                setBlogPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPost();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    if (!blogPost) return <p>Blog post not found.</p>;

    return (
        <section className=" text-gray-100 h-screen">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                    <img src={blogPost.image || "default-image-url.jpg"} alt={blogPost.title} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogPost.title}</h3>
                        <span className="text-xs text-gray-400">{new Date(blogPost.date).toLocaleString()}</span>
                        <p className="mt-4">{blogPost.description}</p>
                        <p className="mt-2">Category: {blogPost.category}</p>
                        <p className="mt-2">Posted by: {blogPost.name}</p>
                    </div>
                </a>
                
            </div>
        </section>
    );
};

export default BlogDetails;
