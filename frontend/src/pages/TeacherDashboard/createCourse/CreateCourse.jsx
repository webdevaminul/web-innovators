import CourseCurricullum from "../../../components/TeacherOwnCourse/CourseCurricullum";
import CourseLandingPage from "../../../components/TeacherOwnCourse/CourseLandingPage";
import CourseSettings from "../../../components/TeacherOwnCourse/CourseSettings";

const CreateCourse = () => {
  return (
    <div className="border border-slate-400 rounded-lg px-3">
      <div className="container mx-auto p-4">
        <div className="flex justify-between">
          <h1 className="text-3xl font-extrabold mb-5">Create a new course</h1>
          <button className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
            SUBMIT
          </button>
        </div>
      </div>

      {/* here tabs */}

      <div role="tablist" className="tabs tabs-lifted mt-10">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Curricullum"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <CourseCurricullum />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Landing page"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <CourseLandingPage />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Settings"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <CourseSettings />
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
