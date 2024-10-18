import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import UpdateBlogModal from "../../components/UpdateBlogModal/UpdateBlogModal";
import DeleteConfirmationModal from "../../components/DeleteConfirmationModal/DeleteConfirmationModal"; // Import the delete modal

const BlogPostTable = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for delete confirmation modal
  const [blogToDelete, setBlogToDelete] = useState(null); // State for the blog post to delete
  const { user } = useSelector((state) => state.authUsers);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await fetch("http://localhost:5000/blog/allBlogPosts");
      const data = await response.json();
      setBlogPosts(data);
    };

    fetchBlogPosts();
  }, []);

  const handleDelete = (id) => {
    setBlogToDelete(id); // Set the blog ID to delete
    setIsDeleteModalOpen(true); // Open the delete confirmation modal
  };

  const confirmDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/blog/deleteBlogPost/${blogToDelete}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Remove the deleted post from the state
        setBlogPosts((prevPosts) => prevPosts.filter((post) => post._id !== blogToDelete));
        alert("Blog post deleted successfully.");
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error deleting blog post:", error);
      alert("Failed to delete the blog post.");
    } finally {
      setIsDeleteModalOpen(false); // Close the delete modal
      setBlogToDelete(null); // Reset the blog ID to delete
    }
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleUpdate = (updatedPost) => {
    setBlogPosts((prevPosts) =>
      prevPosts.map((post) => (post._id === updatedPost._id ? updatedPost : post))
    );
  };

  return (
    <div className="overflow-x-auto h-screen">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Date & Time</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogPosts
            .filter(post => post.status === 'false' && post.email === user?.userInfo?.userEmail)
            .map((post) => (
              <tr key={post._id}>
                <td className="border border-gray-300 px-4 py-2">
                  <img src={post.image} alt={post.title} className="w-16 h-16 object-cover" />
                </td>
                <td className="border border-gray-300 px-4 py-2">{post.title}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(post.date).toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex items-center justify-center space-x-4">
                    <Link to={`/teacher-dashboard/blog/${post._id}`}>
                      <AiOutlineEye className="text-2xl text-blue-600" />
                    </Link>
                    <button onClick={() => handleEdit(post)}>
                      <AiOutlineEdit className="text-2xl text-green-600" />
                    </button>
                    <button onClick={() => handleDelete(post._id)}>
                      <AiOutlineDelete className="text-2xl text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <UpdateBlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        blogData={selectedBlog}
        onUpdate={handleUpdate}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default BlogPostTable;
