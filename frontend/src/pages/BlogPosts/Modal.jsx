import React from 'react';

const Modal = ({ isOpen, onClose, post }) => {
    if (!isOpen || !post) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-4 text-justify">{post.contentTitle}</h2>
                <div
                    className="bg-no-repeat bg-cover h-64 rounded-lg mb-4"
                    style={{
                        backgroundImage: `url(${post.image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                ></div>
                <p className="mb-4 text-justify">{post.contentDescription}</p>
                <div className="flex items-center justify-between">
                    <span className="text-sm">by {post.userName}</span>
                    <span className="text-xs">{new Date(post.date).toLocaleDateString()} - {post.time}</span>
                </div>
                <button className="mt-4 text-violet-500" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
