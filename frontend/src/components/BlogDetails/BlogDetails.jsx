import { useParams } from "react-router-dom";
import useBlogPost from "../../api/useBlogPost";
import Loader from "../../utils/Loader";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog post ID from the URL
  const { blogs, isLoading } = useBlogPost();
  const foundBlog = blogs?.find((post) => post._id === id);


  if (isLoading) return <Loader />;

  if (!foundBlog) return <p>Blog post not found.</p>;

  return (
    <section className=" text-gray-100 h-screen">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
        >
          <img
            src="https://res.cloudinary.com/dzixtpptv/image/upload/v1730613842/LearnUp/course-images/image_1730613839112.png"
            alt={foundBlog.title}
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {foundBlog.title}
            </h3>
            <span className="text-xs text-gray-400">
              {new Date(foundBlog.date).toLocaleString()}
            </span>
            <p className="mt-4">{foundBlog.description}</p>
            <p className="mt-2">Category: {foundBlog.category}</p>
            <p className="mt-2">Posted by: {foundBlog.name}</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default BlogDetails;
