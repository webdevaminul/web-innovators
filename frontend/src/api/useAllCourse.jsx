import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useAllCourse = ({ status } = { status: undefined }) => {
  const {
    data: courses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses", status],
    queryFn: async () => {
      const res = await axiosInstance.get("/all/courses", {
        params: { status },
      });
      const data = res?.data?.data;
      return data || [];
    },
  });

  return { courses, isLoading, refetch };
};

export default useAllCourse;
