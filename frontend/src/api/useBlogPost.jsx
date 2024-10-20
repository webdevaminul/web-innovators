import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useBlogPost = () => {
  const {
    data: blogs = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await axiosInstance.get("/blog/allBlogPosts");
      return res?.data.data;
    },
  });

  return { blogs, isLoading, refetch };
};

export default useBlogPost;
