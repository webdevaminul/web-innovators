import { useState } from "react";
import useBlogPost from "../../api/useBlogPost";
import { Link } from "react-router-dom";


const BlogPosts = () => {
  const { blogs, isLoading, refetch } = useBlogPost();

  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);

  const [selectedPost, setSelectedPost] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(blogs?.map((post) => post.category))];

  console.log("categoris", categories);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setPosts(allPosts);
    } else {
      const filteredPosts = allPosts?.filter(
        (post) => post.category === category
      );
      setPosts(filteredPosts);
    }
    setSelectedPost(null);
    setCurrentPage(1);
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <section className="py-6 sm:py-12 ">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
          <p className="font-serif text-sm">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {blogs?.map((article) => (
            <article key={article._id} className="flex flex-col ">
                <Link to={`/blog-details/${article._id}`} 
                  rel="noopener noreferrer"
                  aria-label={article.title}
                >
                  <img
                    alt={article.title}
                    className="object-cover w-full h-52"
                    src={article?.image}
                  />
                </Link>
              <div className="flex flex-col flex-1 p-6">
                <span
                  className="text-xs tracking-wider uppercase hover:underline cursor-pointer"
                >
                  {article.category}
                </span>
                <Link to={`/blog-details/${article._id}`}>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  {article.title}
                </h3>
                </Link>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                  <span>{article.date}</span>
                  <span>{article.views}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
