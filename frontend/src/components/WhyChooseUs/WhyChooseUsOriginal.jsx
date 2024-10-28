import React from "react";
import Title from "../../utils/Title";
import notificationImg from "../../assets/notification.png";
import demoImg from "../../assets/demo.png";
import examImg from "../../assets/exam-results (1).png";
import resultImg from "../../assets/result.png";
import progressImg from "../../assets/progress-chart.png";
import managementImg from "../../assets/course-management.png";

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto px-10 md:px-8 lg:px-6">
      <Title
        title={"Why Choose Us ?"}
        subTitle={
          "Streamlined course management with real-time updates, easy exam handling, and progress tracking for both teachers and students."
        }
      />
      {/* titles under div */}
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {/* real time notification */}
        <div className="bg-accentOne py-4 border border-border px-9 relative rounded-3xl">
          <div className="p-2 absolute -left-7 -top-7 bg-gray-400 rounded-full">
            <img className="w-[50px] rounded-full" src={notificationImg} alt="" />
          </div>
          <h1 className="text-lg font-medium font-bai">Real-Time Notification:-</h1>
          <p className="font-bai">
            Stay updated with instant notifications for class schedules, assignment deadlines,
            grades, and more. Both teachers and students receive important alerts in real-time,
            ensuring no one misses a beat.
          </p>
        </div>
        {/* free demo classes */}
        <div className="bg-accentOne py-4 border border-border px-9 relative rounded-3xl">
          <div className="p-2 absolute -left-7 -top-7 bg-gray-400 rounded-full">
            <img className="w-[50px] rounded-full" src={demoImg} alt="" />
          </div>
          <h1 className="text-lg font-medium font-bai">Free demo Class:-</h1>
          <p>
            Experience our platform with a free demo class! Get a firsthand look at how easy it is
            to manage and participate in courses before committing to a full enrollment.
          </p>
        </div>
        {/* Exam */}
        <div className="bg-accentOne py-4 border border-border px-9 relative rounded-3xl">
          <div className="p-2 absolute -left-7 -top-7 bg-gray-400 rounded-full">
            <img className="w-[50px] rounded-full" src={examImg} alt="" />
          </div>
          <h1 className="text-lg font-medium font-bai">Exam:-</h1>
          <p>
            Conduct and take exams seamlessly. Our platform provides teachers with easy exam setup
            options and students with a smooth, stress-free test-taking experience.
          </p>
        </div>
        {/* Result */}
        <div className="bg-accentOne py-4 border border-border px-9 relative rounded-3xl">
          <div className="p-2 absolute -left-7 -top-7 bg-gray-400 rounded-full">
            <img className="w-[50px] rounded-full" src={resultImg} alt="" />
          </div>
          <h1 className="text-lg font-medium font-bai">Result:-</h1>
          <p>
            Get instant access to exam results. Teachers can quickly publish results, and students
            can view their performance right away with full transparency.
          </p>
        </div>
        {/* Progress tracking */}
        <div className="bg-accentOne py-4 border border-border px-9 relative rounded-3xl">
          <div className="p-2 absolute -left-7 -top-7 bg-gray-400 rounded-full">
            <img className="w-[50px] rounded-full" src={progressImg} alt="" />
          </div>
          <h1 className="text-lg font-medium font-bai">Progress Tracking:-</h1>
          <p>
            Monitor your academic journey! Teachers can track student progress, while students can
            review their learning milestones and achievements with easy-to-read progress reports.
          </p>
        </div>
        {/* course management */}
        <div className="bg-accentOne py-4 border border-border px-9 relative rounded-3xl">
          <div className="p-2 absolute -left-7 -top-7 bg-gray-400 rounded-full">
            <img className="w-[50px] rounded-full" src={managementImg} alt="" />
          </div>
          <h1 className="text-lg font-medium font-bai">Course Management:-</h1>
          <p>
            Organize, manage, and update courses effortlessly. Our intuitive tools allow teachers to
            create and share content, while students can easily enroll, access materials, and keep
            up with coursework.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
