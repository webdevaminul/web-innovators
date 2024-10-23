import { useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../api/axiosInstance";

const CreateCourse = () => {
  const [category, setCategory] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const { user } = useSelector((state) => state.authUsers);
  const [loading, setLoading] = useState(false)
  const name = user.userInfo.userName;
  const email = user.userInfo.userEmail;

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    setLoading(true)
    
    // FormData object to handle file and other data
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const oldPrice = form.oldPrice.value;
    const detailsCourse = form.textarea.value;
    const status = "pending";
    const file = e.target.image.files[0];
    const videoFile = e.target.video.files[0];

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("oldPrice", oldPrice);
    formData.append("status", status);
    formData.append("category", category);
    formData.append("detailsCourse", detailsCourse);

    if (file) {
      formData.append("image", file);
    }
    if (videoFile) {
      formData.append("video", videoFile);
    }

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file upload
        },
      };

      const response = await axiosInstance.post(
        "course/create",
        formData,
        config
      );

      if (response?.data?.courseId) {
        toast.success(response.data.message);
        setLoading(false)
        e.target.reset()
      }
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

        {/* title and category */}
        <div className="md:flex gap-4 my-4">
          <input
            required
            type="text"
            name="title"
            className="mt-1 block md:w-1/2 w-full rounded-md border border-slate-300 bg-backgroundPrimary px-3 py-2 placeholder-placeholder shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Your course title"
          />

          <select
            name="select"
            id="select"
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block md:w-1/2 w-full rounded-md border border-slate-300 bg-backgroundPrimary px-3 text-text py-2 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          >
            <option className="font-semibold text-text">Please Select</option>
            <option className="font-semibold text-text">Language</option>
            <option className="font-semibold text-text">Marketing</option>
            <option className="font-semibold text-text">Photography</option>
            <option className="font-semibold text-text">Business</option>
            <option className="font-semibold text-text">Videography</option>
            <option className="font-semibold text-text">Design</option>
            <option className="font-semibold text-text">Fitness</option>
            <option className="font-semibold text-text">Development</option>
          </select>
        </div>

        <div className="md:my-6 md:flex gap-4">
          <input
            type="number"
            name="price"
            className="mt-1 block md:w-1/2 w-full rounded-md border border-slate-300 bg-backgroundPrimary px-3 py-2 placeholder-placeholder shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Your course discount price"
          />
          <input
            type="number"
            name="oldPrice"
            className="mt-1 block md:w-1/2 w-full rounded-md border border-slate-300 bg-backgroundPrimary px-3 py-2 placeholder-placeholder shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Your course regular price"
          />
        </div>
        <div className="md:my-6 relative">
          <label className="form-control text-text">
            Course cover picture
            <input
              required
              onChange={handleFileChange}
              type="file"
              accept="image/*"
              name="image"
              className="border-2 border-border "
            />
          </label>

          <div className="absolute bottom-0 right-0 ">
            <div className="text-left">
              {previewUrl === "" ? (
                "image preview"
              ) : (
                <img
                  className="w-20 border rounded-sm"
                  src={previewUrl}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        
        <div>
          <label className="block font-medium">Upload Videos (one video for now)</label>
          <input
            type="file"
            name="video"
            accept="video/*"
          />
        </div>

        <div>
          <textarea
            name="textarea"
            id="text"
            cols={10}
            rows={10}
            className="mb-10 mt-5 w-full resize-none rounded-md border border-slate-300 p-5 text-text bg-backgroundPrimary placeholder-placeholder "
            placeholder="Details about this..."
          />
        </div>
        <div className="text-center">
          <button
          disabled={loading}
            type="submit"
            className={`cursor-pointer rounded-lg px-8 py-5 text-sm font-semibold text-white ${loading ? 'bg-gray-400 !cursor-not-allowed' : 'bg-blue-700'}`}
          >
            {loading ? "loading..." : "Submit"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateCourse;
