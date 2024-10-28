
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdQuiz, MdAssignmentAdd } from "react-icons/md";

const SecondSection = () => {
  return (
    <div className="mt-8">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-10">
        What&apos;s included in this course ???
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        {/* Classes */}
        <div className="bg-accentOne border border-border px-8 py-6 relative rounded-3xl text-center">
          <HiOutlineVideoCamera className="mx-auto text-6xl text-secondary"></HiOutlineVideoCamera>

          <h1 className="text-lg font-medium font-bai mb-2">
            225+ videos across 15 modules
          </h1>
          <p className="font-bai text-sm">
            The course is structured into 15 modules and over 225 videos for
            step-by-step learning, with documentation provided for thorough
            understanding.
          </p>
        </div>
        {/* Quiz */}
        <div className="bg-accentOne border border-border px-8 py-6 relative rounded-3xl text-center">
          <MdQuiz className="mx-auto text-6xl text-secondary"></MdQuiz>

          <h1 className="text-lg font-medium font-bai mb-2">100+ quizzes</h1>
          <p className="font-bai text-sm">
            To ensure you can assess your progress as you learn, each video will
            be followed by a quiz with explanations and answers.
          </p>
        </div>
        {/* Exams */}
        <div className="bg-accentOne border border-border px-8 py-6 relative rounded-3xl text-center">
          <MdAssignmentAdd className="mx-auto text-6xl text-secondary"></MdAssignmentAdd>

          <h1 className="text-lg font-medium font-bai mb-2">9 assignments</h1>
          <p className="font-bai text-sm">
            At the end of each module, there will be assignments that you will
            complete on your own. The solutions to the assignments will be
            shared on GitHub after the course, so you can practice on your own.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
