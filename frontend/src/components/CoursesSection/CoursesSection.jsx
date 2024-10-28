import Title from "../../utils/Title";

import CoursesDiv from "./CoursesDiv";

const CoursesSection = () => {
  return (
    <section className="p-2 md:p-4 lg:p-5">
      <Title
        title={"Latest Courses"}
        subTitle={"Explore the newest courses and stay ahead with the latest trends"}
      />
      <CoursesDiv />
    </section>
  );
};

export default CoursesSection;
