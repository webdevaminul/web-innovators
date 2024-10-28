import { createContext, useState } from "react";
import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "../config";

export const TeacherContext = createContext(null)
const TeacherProvider = ({children}) => {
    const [courseLandingFormData, setCourseLandingFormData] = useState(
        courseLandingInitialFormData
      );
      const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(
        courseCurriculumInitialFormData
      );

    return <TeacherContext.Provider value={{
        courseLandingFormData,
        setCourseLandingFormData,
        courseCurriculumFormData,
        setCourseCurriculumFormData,
      }} >{children}</TeacherContext.Provider> ;
};

export default TeacherProvider;