import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useAvailableCourse = (
  sortOrder,
  page = 1,
  limit = 6,
  selectedCategory = null
) => {
  const { data = { data: [], totalPages: 0 }, isLoading ,refetch} = useQuery({
    queryKey: ["course", sortOrder, page, limit, selectedCategory],
    queryFn: async () => {
      // Pass sortOrder as a query parameter
      const res = await axiosInstance.get("/courses/available", {
        params: {
          sortOrder,
          page,
          limit,
          selectedCategory,
        },
      });
      const data = res?.data?.data;
      const totalPages = res?.data?.totalPages;
      return { data, totalPages };
    },
  });
  const { data: courses, totalPages } = data;
  return { courses, isLoading, totalPages,refetch };
};

export default useAvailableCourse;
