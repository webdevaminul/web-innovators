import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useAllUser = () => {
    const { data: users = [], isLoading ,refetch} = useQuery({
        queryKey: ["newMobile"],
        queryFn: async () => {
          const res = await axiosInstance.get("/all-user");
          return res?.data ;
        },
      });
    
      return { users, isLoading ,refetch};
};

export default useAllUser;