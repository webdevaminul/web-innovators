import { Link } from "react-router-dom";

const BeInstructor = () => {
  return (
    <div>
      {/* Breadcumb in here */}
      <div className="bg-black py-14">
        <h1 className="text-white md:text-5xl text-3xl md:mx-12 mx-5 px-4 font-bai font-semibold border-l-[3px] border-secondary ">
          Become a Teacher{" "}
        </h1>
      </div>
      <div className="breadcrumbs font-bai border-b border-gray-300 py-4 md:mx-12 mx-5 px-4">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Become a teacher</li>
        </ul>
      </div>

      {/* Main section in here */}
      <div>
        <div className="md:w-3/5 px-8 md:my-10 my-5 mx-auto">
          <h1 className="text-center font-semibold font-bai md:text-4xl text-2xl md:my-10">
            Apply as an Instructor in Learn Up{" "}
          </h1>
          <p>
            Online courses are getting popular really fast. This fact is not
            only an opportunity for the students but also an opportunity for
            teachers and professionals. Through online platform, teachers can
            get more reach and share their knowledge with the students of the
            world. Professionals can also take this opportunity to share their
            knowledge and expertise with others. GoEdu provides both groups with
            an online platform and all the necessary support to getting started
            with this trend and become successful.
          </p>
        </div>
      </div>

      {/* Process and guide line */}
      <div className="md:px-8 px-3 md:my-10 my-5">
        <h1 className="text-center font-semibold font-bai md:text-4xl text-2xl md:my-10 my-5 py-5">
          Process and Submission Guidelines{" "}
        </h1>

        <div>
          <h1 className="font-bai my-3">
            To apply as an instructor, follow the process below:
          </h1>

          <ol className="ml-5">
            <li className="font-bai text-text">
              {" "}
              1. Watch the video above to get an overall idea of the
              requirements{" "}
            </li>
            <li className="font-bai text-text">
              {" "}
              2. Prepare your course contents as per the requirements{" "}
            </li>
            <li className="font-bai text-text">
              {" "}
              3. Accumulate course title, short description, course
              requirements, course outline, lesson video contents, MCQ-based
              questions with options and answers, instructor profile, digital
              signature, and instructor photograph under a single Google Drive
              folder.{" "}
            </li>
            <li className="font-bai text-text">
              {" "}
              4. Make sure the drive folder is shared for public view.{" "}
            </li>
            <li className="font-bai text-text"> 5. Submit the form. </li>
          </ol>
        </div>

        <div className="mt-6 md:ml-3">
          <h1 className="font-bai font-bold text-3xl my-3">
            Submission Checklist:
          </h1>

          <ol className="ml-5">
            <li className="font-bai text-text">
              {" "}
              1. Watch the video above to get an overall idea of the
              requirements{" "}
            </li>
            <li className="font-bai text-text">
              {" "}
              2. Prepare your course contents as per the requirements{" "}
            </li>
            <li className="font-bai text-text">
              {" "}
              3. Accumulate course title, short description, course
              requirements, course outline, lesson video contents, MCQ-based
              questions with options and answers, instructor profile, digital
              signature, and instructor photograph under a single Google Drive
              folder.{" "}
            </li>
            <li className="font-bai text-text">
              {" "}
              4. Make sure the drive folder is shared for public view.{" "}
            </li>
            <li className="font-bai text-text"> 5. Submit the form. </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BeInstructor;
