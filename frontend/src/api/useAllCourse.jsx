import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useAllCourse = () => {
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      // Pass sortOrder as a query parameter
      const res = await axiosInstance.get("/all/courses")
      const data = res?.data?.data;
      return data;
    },
  });
  return { courses, isLoading };
};

export default useAllCourse;