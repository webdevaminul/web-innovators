import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useAllUser = (params = "") => {
    const { data: users = [], isLoading ,refetch} = useQuery({
        queryKey: ["user", params],
        queryFn: async () => {
          const res = await axiosInstance.get(`/get/teacher?status=${params}`);
          return res?.data.data ;
        },
      });
    
      return { users, isLoading ,refetch};
};

export default useAllUser;