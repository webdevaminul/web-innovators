
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";


const useEnrolledCourse = () => {
    const {
        data: enrolledCourses = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["enrolledCourse"],
        queryFn: async () => {
            const res = await axiosInstance.get("/enrolled/courses");
            return res?.data?.result;
        },
    });

    return { enrolledCourses, isLoading, refetch };
};

export default useEnrolledCourse;