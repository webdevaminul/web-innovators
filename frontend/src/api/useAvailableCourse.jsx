import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useAvailableCourse = (sortOrder, page = 1, limit = 6) => {
  console.log('5', page, limit)
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["course", sortOrder, page, limit],
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
      console.log("avai", res.data);
      return data;
    },
  });
  return { courses, isLoading };
};

export default useAvailableCourse;
