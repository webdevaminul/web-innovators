import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useAllTeacher = (params = "") => {
    const { data: teachers = [], isLoading ,refetch} = useQuery({
        queryKey: ["teacher", params],
        queryFn: async () => {
          const res = await axiosInstance.get(`/get/teacher?status=${params}`);
          return res?.data?.data || [ ] ;
        },
      });
    
      return { teachers, isLoading ,refetch};
};

export default useAllTeacher;