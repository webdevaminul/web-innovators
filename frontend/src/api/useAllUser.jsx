import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useAllUser = () => {
    const { data: users = [], isLoading ,refetch} = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
          const res = await axiosInstance.get("/get/users");
          return res?.data.data ;
        },
      });
    
      return { users, isLoading ,refetch};
};

export default useAllUser;