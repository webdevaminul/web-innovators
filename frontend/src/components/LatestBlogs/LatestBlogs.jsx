import React, { useEffect, useState } from "react";
import postsBlogs from "../../../public/BlogPosts.json"; // Import the JSON data for blogs
import Title from "../../utils/Title"; // Import the reusable Title component
import { Link } from "react-router-dom";

// Define category-to-color mapping
const categoryColors = {
  Language: "bg-blue-500 text-white",
  Design: "bg-pink-500 text-white",
  Development: "bg-green-500 text-white",
  Marketing: "bg-yellow-500 text-black",
  Photography: "bg-purple-500 text-white",
  Business: "bg-gray-500 text-white",
  Fitness: "bg-red-500 text-white",
  Videography: "bg-indigo-500 text-white",
};

const LatestBlogs = () => {
  const [latestBlogs, setLatestBlogs] = useState([]); // State to store the latest blogs

  // Fetch and sort the latest blogs when the component mounts
  useEffect(() => {
    const fetchData = () => {
      const sortedBlogs = postsBlogs.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setLatestBlogs(sortedBlogs.slice(0, 2)); // Extract the top 2 latest blogs
    };

    fetchData();
  }, []);

  return (
    <section className="p-2 md:p-4 lg:p-5">
      {/* Section title and subtitle */}
      <Title
        title="Latest Blogs"
        subTitle="Grateful for the Trust of Teachers and Students, Empowering Every Step of Their Learning Journey."
      />

      <div className="grid grid-cols-2 gap-4">
        {latestBlogs.length === 0 ? (
          <p className="text-center text-3xl py-10 col-span-2">
            No blogs available at the moment
          </p>
        ) : (
          latestBlogs.map((blog, index) => (
            <Link
              to=""
              key={index}
              className="overflow-hidden bg-backgroundShadeOne border border-borderDark rounded-2xl col-span-2 sm:col-span-1 group"
            >
              {/* Blog cover image */}
              <img
                className="object-cover w-full h-64 object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                src={blog.image || "https://via.placeholder.com/500"}
                alt={blog.title || "Blog cover image"}
                loading="lazy"
              />

              <div className="p-4 lg:p-6 flex flex-col gap-2 sm:gap-3 md:gap-4">
                {/* Blog category with dynamic background color */}
                <span
                  className={`text-xs font-medium uppercase px-2 py-1 rounded-full w-fit ${
                    categoryColors[blog.category] || "bg-gray-300 text-black"
                  }`}
                >
                  {blog.category || "Uncategorized"}
                </span>

                {/* Blog title */}
                <h2 className="text-xl font-semibold">
                  {blog.title || "Blog Title"}
                </h2>

                {/* Blog description */}
                <p className="text-sm">
                  {blog.description || "No description available."}
                </p>

                {/* Blog author and date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="object-cover h-8 w-8 sm:h-9 sm:w-9 rounded-full"
                      src={blog.authorImage || "https://via.placeholder.com/48"}
                      alt={blog.author || "Author avatar"}
                    />
                    <p className="mx-2 font-semibold text-textPrimary">
                      {blog.author || "Writer Name"}
                    </p>
                  </div>

                  <span className="mx-1 text-xs text-textPrimary">
                    {new Date(blog.date).toLocaleDateString() || "Unknown date"}
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default LatestBlogs;
