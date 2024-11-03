// deleteItem.js
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import axiosInstance from "../api/axiosInstance";

export const handleDeleteItem = async (route, id, refetch) => {
  try {
    console.log("route here",route);
    console.log("id here",id);
    // Show confirmation alert before deletion
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    // If user confirms, proceed with deletion
    if (result.isConfirmed) {
      const res = await axiosInstance.delete(`${route}/${id}`);

      // Handle success response from the backend
      if (res.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: res.data.message,
          icon: "success",
        });

        toast.success(res.data.message || "Item deleted successfully!");

        // Refetch data to update list
        if (refetch) refetch();
      }
    }
  } catch (error) {
    toast.error("Failed to delete item: " + error.message);
  }
};
