import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";

const CreateCourse = () => {
const [category,setCategory] = useState('');

  const handleCreateCourse = (e) => {
    e.preventDefault();
    const value = e.target;
    const name = value.name.value;
    const email = value.email.value;
    const detailsCourse = value.textarea.value;
    console.log("paici",name, email,detailsCourse, category);
    const courseData = {name, email, detailsCourse, category}

// Sending POST request with Axios
axiosInstance.post("/api/create/course", courseData)
  .then(response => {
    console.log("Course Created Successfully:", response.data);
  })
  .catch(error => {
    console.error("Error Creating Course:", error);
  });

  };
  return (
    <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
      <div className="mt-10 text-center font-bold text-text">Upload Course</div>
      <div className="mt-3 text-center text-4xl text-text font-bold">
        Share your experiene for student
      </div>
      <form onSubmit={handleCreateCourse} className="p-8">
        <div className="flex gap-4">
          <input
            type="Name"
            name="name"
            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-bg px-3 py-4 placeholder-placeholder shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Full Name *"
          />
          <input
            type="email"
            name="email"
            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-bg px-3 py-4 placeholder-placeholder shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Email *"
          />
        </div>
        <div className="my-6 flex gap-4">
          <select
            name="select"
            id="select"
            onChange={(e)=>setCategory(e.target.value)}
            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-bg px-3 text-text py-4 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          >
            <option className="font-semibold text-text">Please Select</option>
            <option className="font-semibold text-text">Freelancing</option>
            <option className="font-semibold text-text">Web Design</option>
          </select>

          <label className="form-control text-text w-1/2 block">
            <input
              type="file"
              className="file-input file-input-bordered w-full"
            />
          </label>
        </div>
        <div>
          <textarea
            name="textarea"
            id="text"
            cols={30}
            rows={10}
            className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 text-text bg-bg placeholder-placeholder "
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
    </div>
  );
};

export default CreateCourse;
