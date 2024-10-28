import { useContext } from "react";
import { TeacherContext } from "../../context/TeacherContext";
import FormControls from "../CommonForm/FormControls";
import { courseLandingPageFormControls } from "../../config";

const CourseLandingPage = () => {
    const { courseLandingFormData, setCourseLandingFormData } =
    useContext(TeacherContext);
    return (
        <div className="bg-bg shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Course Landing Page</h2>
        </div>
        <div className="p-4">
          <FormControls
            formControls={courseLandingPageFormControls}
            formData={courseLandingFormData}
            setFormData={setCourseLandingFormData}
          />
        </div>
      </div>
    );
};

export default CourseLandingPage;