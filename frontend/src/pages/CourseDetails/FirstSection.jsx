import React from "react";
import { VideoCard } from "./VideoCard";

const FirstSection = ({ singleCourse }) => {
  return (
    <div className="md:flex md:items-center justify-between gap-7">
      {/* course heading and description here  */}
      <div className="lg:w-3/5">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          {singleCourse.title}
        </h1>
        <p className="text-sm">
          তোমরা যারা এইচএসসি ২০২৬ পরীক্ষায় বিজ্ঞান, ব্যবসায় শিক্ষা কিংবা
          মানবিক বিভাগ থেকে অংশ নিচ্ছো, তোমাদের নিশ্চয়ই বিভাগীয় বিষয়ের বাইরের
          পাঁচটি বিষয়ের একটি পূর্ণাঙ্গ প্রস্তুতি প্রয়োজন? কেননা বিভাগীয়
          বিষয়গুলোতে জোর দিতে দিতে আমরা অনেক সময় এসব গুরুত্বপুর্ণ বিষয়ের কথা
          ভুলে বসে থাকি। তাই, তোমাদের কথা চিন্তা করেই টেন মিনিট স্কুল নিয়ে
          এসেছে এইচএসসি পরীক্ষার বাংলা ও ইংরেজি উভয় পত্রের এবং আইসিটিসহ মোট
          পাঁচটি বিষয়ের উপর একটি পূর্ণাঙ্গ কোর্স “HSC 2026 Online Batch (BEI)”।
        </p>
        <div className="mt-2">
          <div className="flex items-center gap-3">
            <h1 className="font-bold font-bai text-xl text-secondary">৳5850</h1>
            <del className="font-medium font-bai text-xl">৳7500</del>
          </div>
          <button className="bg-secondary font-bai rounded-lg font-semibold text-lg mt-3 py-2 px-3 md:hidden">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Right side video and short details card for mid to large device */}
      <div className="lg:w-2/5 w-[330px] hidden md:block">
        <div className="w-full">
          <VideoCard />
        </div>
        <button className="bg-secondary font-bai rounded-lg font-semibold text-lg mt-3 py-2 px-3 w-full">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default FirstSection;
