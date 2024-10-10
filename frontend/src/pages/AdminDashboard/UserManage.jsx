import axiosInstance from "../../api/axiosInstance";
import { toast, ToastContainer } from "react-toastify";
import useAllUser from "../../api/useAllUser";

const UserManage = () => {
  const { users, isLoading, refetch } = useAllUser();

  console.log("users", users);

  const handleUpdateRole = (id) => {
    const status = "Aproved";
    const updateData = { status };
    axiosInstance
      .put(`/aproved/teaccher/${id}`, updateData)
      .then((res) => {
        console.log(res.data);
        if (res?.data.modifiedCount > 0) {
          toast.success(res.data.message);
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

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
                <button
                  className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 hover:bg-green-400 text-green-800"
                  onClick={() => handleUpdateRole(user._id)}
                >
                  {" "}
                  update{" "}
                </button>
              ) : (
                <span className="text-gray-400 cursor-not-allowed" >update</span>
              )}
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
