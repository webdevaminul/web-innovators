import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useAvailableCourse = (sortOrder, page = 1, limit = 6,selectedCategory = null) => {
  console.log('5', page, limit)
  const { data = { data: [], totalPages: 0 }, isLoading } = useQuery({
    queryKey: ["course", sortOrder, page, limit,selectedCategory],
    queryFn: async () => {
      // Pass sortOrder as a query parameter
      const res = await axiosInstance.get("/courses/available", {
        params: {
          sortOrder,
          page,
          limit,
        },
      });
      const data = res?.data?.data;
      const totalPages = res?.data?.totalPages;
      console.log("avai", res.data);
      return {data, totalPages};
    },
  });
  const { data: courses, totalPages } = data;
  return { courses, isLoading,totalPages};
};

export default useAvailableCourse;
