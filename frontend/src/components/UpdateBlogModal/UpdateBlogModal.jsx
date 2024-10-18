import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast

const UpdateBlogModal = ({ isOpen, onClose, blogData, onUpdate }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        image: '',
        date: '',
        name: '',
        email: '',
        time: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen && blogData) {
            setFormData(blogData);
        }
    }, [isOpen, blogData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/blog/updateBlogPost/${blogData._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const updatedPost = await response.json();
            onUpdate(updatedPost);
            toast.success("Blog post updated successfully!"); // Show success notification

            // Navigate to blog management page
            navigate('/teacher-dashboard/blog-Management'); // Navigate after update
            onClose();
        } else {
            toast.success("Blog post updated successfully!"); // Show error notification
            console.error('Failed to update the blog post');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded shadow-md w-full max-w-lg md:max-w-2xl lg:max-w-2xl mx-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Update Blog Post</h2>
                    <button onClick={onClose} className="focus:outline-none">
                        <AiOutlineClose className="text-xl" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            disabled
                            onChange={handleChange}
                            required
                            className="border border-gray-300 p-2 w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 p-2 w-full"
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlogModal;
