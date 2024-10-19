import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AiOutlineEye, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";
import DeleteConfirmationModal from "../../components/DeleteConfirmationModal/DeleteConfirmationModal";
import axiosInstance from "../../api/axiosInstance";
import useBlogPost from "../../api/useBlogPost";
import Loader from "../../utils/Loader";

const AdminBlogManage = () => {
  const status = "approved";
  const { blogs, isLoading, refetch } = useBlogPost();
  console.table("blogs", blogs);
  const [blogPosts, setBlogPosts] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  const navigate = useNavigate(); // Hook for navigation
  const baseUrl = axiosInstance.defaults.baseURL;

  const handleDelete = (id) => {
    setBlogToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/blog/deleteBlogPost/${blogToDelete}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setBlogPosts((prevPosts) =>
          prevPosts.filter((post) => post._id !== blogToDelete)
        );
        toast.success("Blog post deleted successfully."); // Show toast notification
      } else {
        const errorData = await response.json();
        toast(`Error: ${errorData.message}`); // Show toast with error
      }
    } catch (error) {
      console.error("Error deleting blog post:", error);
      toast.error("Failed to delete the blog post."); // Show toast notification
    } finally {
      setIsDeleteModalOpen(false);
      setBlogToDelete(null);
    }
  };

  // const handleApproval = async (id) => {
  //   try {
  //     const response = await fetch(`http://localhost:5000/blog/updateStatus/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ status: true }), // Set status to true
  //     });

  //     if (response.ok) {
  //       setBlogPosts((prevPosts) =>
  //         prevPosts.map((post) => (post._id === id ? { ...post, status: true } : post))
  //       );
  //       toast.success("Blog post approved successfully."); // Show toast notification
  //       // Navigate to blog creation page
  //     } else {
  //       const errorData = await response.json();
  //       console.log(errorData)
  //       toast.success(`Successfully approve this Blog post...`); // Show toast with error
  //       navigate("/admin-dashboard/blog-creation");
  //     }
  //   } catch (error) {
  //     console.error("Error approving blog post:", error);
  //     toast.error("Failed to approve the blog post."); // Show toast notification
  //   }
  // };

  const handleApproval = async (id) => {
    try {
      const res = await axiosInstance.put(`/blog/updateStatus/${id}`, {
        status,
      });
      console.log("res", res);
      // Check if the response is acknowledged
      if (res?.data?.result?.acknowledged) {
        toast.success(res?.data?.message);
        refetch();
      }
    } catch (err) {
      console.error(err);
      toast.error(`Failed to update status`);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-x-auto h-screen">
      {toast.visible && (
        <div className="fixed top-0 right-0 m-4 p-3 bg-green-500 text-white rounded shadow-lg">
          {toast.message}
        </div>
      )}
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Date & Time</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
            <th className="border border-gray-300 px-4 py-2">Approval</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((post) => (
            <tr key={post._id}>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  className="w-16 h-16 object-cover"
                  src={`${baseUrl}${post?.image}`}
                  alt={post.title}
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {" "}
                116 {post.title}{" "}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(post.date).toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {post.status}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <span className="flex items-center justify-center space-x-4">
                  <Link to={`/teacher-dashboard/blog/${post._id}`}>
                    <AiOutlineEye className="text-2xl text-blue-600" />
                  </Link>
                  <button onClick={() => handleDelete(post._id)}>
                    <AiOutlineDelete className="text-2xl text-red-600" />
                  </button>
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2 justify-center">
                {post.status === "approved" ? (
                  <AiOutlineCheck className="text-green-600 text-2xl" /> // Show approved icon
                ) : (
                  <button
                    onClick={() => handleApproval(post._id)}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <ToastContainer />
      </table>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default AdminBlogManage;
