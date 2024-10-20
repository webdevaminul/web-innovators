import { useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../api/axiosInstance";

const CreateCourse = () => {
  const [category, setCategory] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const { user } = useSelector((state) => state.authUsers);
  const name = user.userInfo.userName;
  const email = user.userInfo.userEmail;

  const handleCreateCourse = async (e) => {
    e.preventDefault();

    // FormData object to handle file and other data
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const file = form.coverPicture.files[0]; // File input
    const detailsCourse = form.textarea.value;
    const status = "pending";

    const formData = new FormData();
    const courseData = {
      name,
      email,
      title,
      price,
      status,
      category,
      detailsCourse,
    };
    formData.append("coverPicture", file);

    // Append the serialized course data (as a string)
    formData.append("courseData", JSON.stringify(courseData));

    try {
      // Sending POST request with Axios
      axiosInstance
        .post("/create/course", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file upload
          },
        })
        .then((response) => {
          if (response.data.courseId) {
            toast.success(response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error Creating Course:", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // Handle image file selection and generate preview URL
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Generate a preview URL
    const previewURL = URL.createObjectURL(file);
    setPreviewUrl(previewURL);
  };

  return (
    <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
      <div className="mt-10 text-center font-bold text-text">Upload Course</div>
      <div className="mt-3 text-center text-4xl text-text font-bold">
        Share your experiene for student
      </div>
      <form onSubmit={handleCreateCourse} className="p-8">
        {/* name email */}
        <div className="md:flex gap-4">
          <input
            readOnly
            className="mt-1 block md:w-1/2 w-full rounded-md border border-slate-300 bg-backgroundPrimary px-3 py-4 placeholder-placeholder shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder={name}
          />
          <input
            readOnly
            className="mt-1 block md:w-1/2 w-full rounded-md border border-slate-300 bg-backgroundPrimary px-3 py-4 placeholder-placeholder shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder={email}
          />
        </div>

        {/* title and video */}
        <div className="md:flex gap-4 my-4">
          <input
            required
            type="text"
            name="title"
            className="mt-1 block md:w-1/2 w-full rounded-md border border-slate-300 bg-backgroundPrimary px-3 py-2 placeholder-placeholder shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Your course title"
          />
          <input
            type="number"
            name="price"
            className="mt-1 block md:w-1/2 w-full rounded-md border border-slate-300 bg-backgroundPrimary px-3 py-2 placeholder-placeholder shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Your course price"
          />
        </div>

        <div className="md:my-6 md:flex gap-4 relative">
          <select
            name="select"
            id="select"
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block md:w-1/2 w-full rounded-md border border-slate-300 bg-backgroundPrimary px-3 text-text py-2 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          >
            <option className="font-semibold text-text">Please Select</option>
            <option className="font-semibold text-text">Freelancing</option>
            <option className="font-semibold text-text">Web Design</option>
          </select>

          <label className="form-control text-text">
            Course cover picture
            <input
              required
              onChange={handleFileChange}
              type="file"
              accept="image/*"
              name="coverPicture"
              className="border-2 border-border"
            />
          </label>

          <div className="absolute bottom-0 right-0 ">
            <div className="text-left">
              {previewUrl === "" ? (
                "image preview"
              ) : (
                <img className="w-20 border rounded-sm" src={previewUrl} alt="" />
              )}
            </div>
          </div>
        </div>
        <div>
          <textarea
            name="textarea"
            id="text"
            cols={30}
            rows={10}
            className="mb-10 mt-5 h-40 w-full resize-none rounded-md border border-slate-300 p-5 text-text bg-backgroundPrimary placeholder-placeholder "
            placeholder="Details about this..."
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateCourse;
