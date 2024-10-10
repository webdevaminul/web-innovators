import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { toast, ToastContainer } from "react-toastify";

const UserManage = () => {
  const [alluser, setAlluser] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/all-user")
      .then((res) => {
        // console.log(res.data);
        setAlluser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdateRole = () => {
    toast.warn("There has noting bro");    
    const status = "Pending" ;
    const updateData ={status}
    axiosInstance.put(`/be/instructor/id`,updateData)
    .then(res=>{
      console.log(res)
      if(res.data.status === 200 ){
        toast.success(res.data.message)
      }
    })
    .catch(err=>{
      console.log(err)
    })
  };

  return (
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
        {alluser?.map((user) => (
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
               {user.status ? user.status : "student yet" } 
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-text">
              {user.userRole}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-text">
              {user.userEmail}
            </td>
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
              <button
                onClick={handleUpdateRole}
                className="text-indigo-600 hover:text-indigo-900"
              >
                Update
              </button>
              <button
                onClick={handleUpdateRole}
                className="ml-2 text-red-600 hover:text-red-900"
              >
                Decline
              </button>
            </td>
          </tr>
        ))}
        {/* More rows... */}
      </tbody>
      <ToastContainer />
    </table>
  );
};

export default UserManage;
