import { HiOutlineUsers } from "react-icons/hi2";
import { IoIosTrendingUp } from "react-icons/io";
import { AiOutlineDollar } from "react-icons/ai";
import { BsCheck2, BsThreeDotsVertical } from "react-icons/bs";
// import { useState } from "react";

const TeacherHome = () => {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        <div className="relative flex flex-col rounded-xl shadow-md border py-3">
          <div className="bg-clip-border mx-4 rounded-xl bg-black text-white shadow-blue-500/40 bg-bg absolute grid lg:h-12 lg:w-12 h-16 w-16 place-items-center">
            <AiOutlineDollar className="w-5 h-5" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-bai text-sm leading-normal font-normal text-text">
              Today s Money
            </p>
            <h4 className="block antialiased tracking-normal font-bai text-2xl font-semibold leading-snug text-text">
              $53k
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
          <div className="bg-clip-border mx-4 rounded-xl bg-black text-white absolute  grid h-16 w-16 place-items-center">
            <HiOutlineUsers className="w-5 h-5" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-bai text-sm leading-normal font-normal text-text">
              Today s Users
            </p>
            <h4 className="block antialiased tracking-normal font-bai text-2xl font-semibold leading-snug text-text">
              2,300
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
              New Clients
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
              Sales
            </p>
            <h4 className="block antialiased tracking-normal font-bai text-2xl font-semibold leading-snug text-text">
              $103,430
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
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="relative flex flex-col rounded-xl shadow-md xl:col-span-2">
          <div className="relative rounded-xl overflow-hidden bg-transparent shadow-none m-0 flex items-center justify-between p-6">
            <div>
              <h6 className="block antialiased tracking-normal font-bai text-base font-semibold leading-relaxed text-text mb-1">
                Projects
              </h6>
              <p className="antialiased font-bai text-sm leading-normal flex items-center gap-1 font-normal text-text">
                <BsCheck2 className="h-5 w-5" />
                <strong>30 done</strong> this month
              </p>
            </div>
            <button
              aria-expanded="false"
              aria-haspopup="menu"
              id=":r5:"
              className="relative middle none font-bai font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <BsThreeDotsVertical className="w-5 h-5" />
              </span>
            </button>
          </div>
          <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-bai text-[11px] font-medium uppercase text-text">
                      companies
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-bai text-[11px] font-medium uppercase text-text">
                      budget
                    </p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-bai text-[11px] font-medium uppercase text-text">
                      completion
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block antialiased font-bai text-sm leading-normal text-text font-bold">
                        Material XD Version
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-bai text-xs font-medium text-text">
                      $14,000
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
    </div>
  );
};

export default TeacherHome;
