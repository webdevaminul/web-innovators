import { HiOutlineUsers } from "react-icons/hi2";
import { IoIosTrendingUp } from "react-icons/io";
import TeacherOwnCourse from "../../components/TeacherOwnCourse/TeacherOwnCourse";
// import { useState } from "react";

const TeacherHome = () => {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        <div className="relative flex flex-col rounded-xl shadow-md border py-3">
          <div className="bg-clip-border mx-4 rounded-xl bg-black text-white absolute grid h-16 w-16 place-items-center">
            <HiOutlineUsers className="w-5 h-5" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-bai text-sm leading-normal font-normal text-text">
              Teachers
            </p>
            <h4 className="block antialiased tracking-normal font-bai text-2xl font-semibold leading-snug text-text">
              54,332
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-bai text-base leading-relaxed font-normal text-text">
              <strong className="text-green-500">+55%</strong>&nbsp;than last
              week
            </p>
          </div>
        </div>
        <div className="relative flex flex-col rounded-xl shadow-md border py-3">
          <div className="bg-clip-border mx-4 rounded-xl bg-black text-white absolute grid h-16 w-16 place-items-center">
            <HiOutlineUsers className="w-5 h-5" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-bai text-sm leading-normal font-normal text-text">
              Students
            </p>
            <h4 className="block antialiased tracking-normal font-bai text-2xl font-semibold leading-snug text-text">
              23,300
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-bai text-base leading-relaxed font-normal text-text">
              <strong className="text-green-500">+3%</strong>&nbsp;than last
              month
            </p>
          </div>
        </div>
        <div className="relative flex flex-col rounded-xl shadow-md border py-3">
          <div className="bg-clip-border mx-4 rounded-xl bg-black text-white absolute  grid h-16 w-16 place-items-center">
            <HiOutlineUsers className="w-5 h-5" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-bai text-sm leading-normal font-normal text-text">
              New Students
            </p>
            <h4 className="block antialiased tracking-normal font-bai text-2xl font-semibold leading-snug text-text">
              3,462
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-bai text-base leading-relaxed font-normal text-text">
              <strong className="text-red-500">-2%</strong>&nbsp;than yesterday
            </p>
          </div>
        </div>
        <div className="relative flex flex-col rounded-xl shadow-md border py-3">
          <div className="bg-clip-border mx-4 rounded-xl bg-black text-white absolute  grid h-16 w-16 place-items-center">
            <IoIosTrendingUp className="w-5 h-5" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-bai text-sm leading-normal font-normal text-text">
              Total Students
            </p>
            <h4 className="block antialiased tracking-normal font-bai text-2xl font-semibold leading-snug text-text">
              103,430
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-bai text-base leading-relaxed font-normal text-text">
              <strong className="text-green-500">+5%</strong>&nbsp;than
              yesterday
            </p>
          </div>
        </div>
      </div>

      {/* Project */}

      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="relative flex flex-col rounded-xl shadow-md xl:col-span-2">
          <div>
            <div className="p-6">
              <h6 className="block antialiased tracking-normal font-bai text-base font-semibold leading-relaxed text-text mb-1">
                Popular Courses
              </h6>
            </div>
            <TeacherOwnCourse />

            <div className="p-6">
              <h6 className="block antialiased tracking-normal font-bai text-base font-semibold leading-relaxed text-text mb-1">
                Assignment
              </h6>
            </div>
            <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p className="block antialiased font-bai text-[11px] font-medium uppercase text-text">
                        Subject
                      </p>
                    </th>
                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p className="block antialiased font-bai text-[11px] font-medium uppercase text-text">
                        All students
                      </p>
                    </th>
                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p className="block antialiased font-bai text-[11px] font-medium uppercase text-text">
                        Exam Students
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="flex items-center gap-4">
                        <p className="block antialiased font-bai text-sm leading-normal text-text font-bold">
                          Mathematics
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <p className="block antialiased font-bai text-xs font-medium text-text">
                        14,000
                      </p>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="w-10/12">
                        <p className="antialiased font-bai mb-1 block text-xs font-medium text-text">
                          60%
                        </p>
                        <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-bai text-xs font-medium h-1">
                          <div
                            className="flex justify-center items-center h-full bg-bg from-blue-600 to-blue-400 text-white"
                            style={{ width: "60%" }}
                          /> 
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <h1>here calendar</h1>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
