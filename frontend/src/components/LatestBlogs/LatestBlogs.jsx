import React, { useEffect, useState } from "react";
import postsData from "../../../public/BlogPosts.json";
import Title from "../../utils/Title";

const LatestBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);

  //   getting 4 data for latest blogs sections
  useEffect(() => {
    const fetchData = async () => {
      const sortedPosts = postsData.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setPosts(sortedPosts);
      setLatestPosts(sortedPosts.slice(0, 4));
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
    </div>
  );
};

export default LatestBlogs;
