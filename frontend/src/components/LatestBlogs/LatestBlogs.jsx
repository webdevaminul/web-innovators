import React, { useEffect, useState } from "react";
import postsBlogs from "../../../public/BlogPosts.json";
import Title from "../../utils/Title";

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);

  //   getting 4 data for latest blogs sections
  useEffect(() => {
    const fetchData = async () => {
      const sortedBlogs = postsBlogs.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setBlogs(sortedBlogs);
      setLatestBlogs(sortedBlogs.slice(0, 4)); // Use sortedBlogs here
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <Title
        title={"Latest Blogs"}
        subTitle={
          "Grateful for the Trust of Teachers and Students, Empowering Every Step of Their Learning Journey."
        }
      />
      <div>
        <h1>{latestBlogs.length}</h1>
      </div>
    </div>
  );
};

export default LatestBlogs;
