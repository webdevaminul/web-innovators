import { FaRegEye, FaRegPenToSquare } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";
import axiosInstance from "../../api/axiosInstance";
import { useEffect, useState } from "react";

const ManageCourse = () => {
  const [myCourse, setMyCourse] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/courses")
      .then((res) => {
        // console.log(res.data);
        setMyCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("course", myCourse);
  return (
    <div className="overflow-x-auto w-full px-2 py-5">
      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-bg/10">
              <th className="w-1/4 py-4 px-6 text-left text-text font-bold uppercase">
                Name
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-text font-bold uppercase">
                Category
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-text font-bold uppercase">
                Price
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-text font-bold uppercase">
                Students
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-text font-bold uppercase">
                Status
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-text font-bold uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-bg">
            {myCourse?.map((course) => (
              <tr key={course._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div>{course.title}</div>
                    </div>
                  </div>
                </td>
                <td className="border-b truncate">{course.category}</td>
                <td className="border-b"> price </td>
                <td className="border-b"> studens </td>
                <td className="border-b">
                  <select className="select select-bordered w-full p-1 focus:border-none">
                    <option defaultValue>Pending</option>
                    <option>Aproved</option>
                  </select>
                </td>
                <td className="py-4 px-6 border-b border-gray-200 flex gap-2">
                  <span className="text-text rounded-full text-xs">
                    <FaRegEye className="w-5 h-5" />
                  </span>
                  <span className="text-text rounded-full text-xs">
                    <FaRegPenToSquare className="w-5 h-5" />
                  </span>
                  <span className="text-text rounded-full text-xs">
                    <MdBlock className="w-5 h-5" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourse;
