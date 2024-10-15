import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../api/axiosInstance";
import useAllUser from "../../api/useAllUser";
import Loader from "../../utils/Loader";

const UserManage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [status, setStatus] = useState("Pending");
  const { users, isLoading, refetch } = useAllUser(status);

  const handleUpdateRole = (id) => {
    const status = "Aproved";
    const userNewRole = "Teacher";
    const updateData = { status, userNewRole };
    axiosInstance
      .put(`/aproved/teacher/${id}`, updateData)
      .then((res) => {
        if (res?.data?.result?.acknowledged) {
          toast.success(res?.data?.message);
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const teacherState = (index) =>{
    setActiveTab(index)
    if (index === 1) {
      setStatus("Pending");
    } else if (index === 2) {
      setStatus("Aproved");
    }
  }
  
  const handleDeclineRole = () => {
    toast.warn("Not yet done");
  };
// console.log("status",status)
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
    <div className="p-8 mb-4 flex items-center gap-5 justify-start ">
        <ul className="flex items-center ">
          <li
            className={`${
              activeTab === 1 &&
              " !border-border !border-t !border-l !border-r !border-b-transparent rounded-tr rounded-tl"
            } px-6 py-2 !border-[#d1d1d1] border-b text-xl text-text transition duration-300 border-transparent cursor-pointer`}
            onClick={() => teacherState(1)}
          >
            Pending Request
          </li>
          <li
            className={`${
              activeTab === 2 &&
              " !border-border !border-t !border-l !border-r !border-b-transparent rounded-tr rounded-tl"
            } px-6 py-2 !border-border border-b text-xl text-text transition duration-300 cursor-pointer`}
            onClick={() => teacherState(2)}
          >
            Already Teacher
          </li>
        </ul>
      </div>
      
      {/* Teacher list here */}

    <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
      <thead className="bg-bg">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider"
          >
            Institute
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider"
          >
            Status
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider"
          >
            Role
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-bg divide-y divide-gray-200">
        {users?.map((user) => (
          <tr key={user._id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="flex items-center">
                <span className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.userPhoto}
                  />
                </span>
                <span className="ml-4">
                  <span className="text-sm flex flex-col font-medium text-gray-900">
                    {user.userName}
                  </span>
                  <span className="text-sm text-text">{user.userEmail}</span>
                </span>
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-text">
              Regional Paradigm Technician
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {user.status ? user.status : "student yet"}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-text">
              {user.userRole}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-text">
              {user.userEmail}
            </td>
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
              {user.status && user.status === "Pending" ? (
                <>
                  <button
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 hover:bg-green-400 text-green-800"
                    onClick={() => handleUpdateRole(user._id)}
                  >
                    {" "}
                    Accept{" "}
                  </button>

                  <button
                    className="ml-2 text-red-600 hover:text-red-900"
                    onClick={handleDeclineRole}
                  >
                    {" "}
                    Reject{" "}
                  </button>
                </>
              ) : user.status === "Aproved" ? (
                "Aproved"
              ) : (
                "Pending"
              )}
            </td>
          </tr>
        ))}
      </tbody>
      <ToastContainer />
    </table>
      </>
  );
};

export default UserManage;
