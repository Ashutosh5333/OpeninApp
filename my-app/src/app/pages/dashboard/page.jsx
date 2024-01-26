import Image from "next/image";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import Sidebar from "../../components/Sidebar";
import MobileNavbar from "@/app/components/MobileNavbar";
import { BrosweFile } from "@/app/components/BrosweFile";

const page = () => {
  return (
    <div className="Box-container  w-[100%] m-auto flex justify-between">
      <div
        className="SideBar-container  hidden sm:block  py-2 px-2 w-[20%] 
     min-h-screen fixed bg-[#FFFFFF] m-auto shadow-md text-[#9A9AA9] h-screen lg:px-4 "
      >
        <Sidebar />
      </div>
      <MobileNavbar />

      <div className="Admin-container sm:ml-[20%]  border-pink-700 w-[95%] sm:w-[80%]  m-auto  min-h-screen">
        <div
          className="RightSide-Container mt-[15%] sm:mt-0
         border-black w-full px-4 mx-auto    p-2"
        >
          <div
            className="flex justify-between w-[100%] sm::w-[80%] mx-auto m-auto  relative top-[10%]
           sm:top-0 px-4 py-8  border-red-500 mb-2"
          >
            <div className="flex items-center ">
              <span className="material-icons text-2xl font-semibold mr-2 ">
                {" "}
                Upload CSV{" "}
              </span>
            </div>

            <div className="flex  justify-between gap-5  items-center">
              <span className="material-icons hidden sm:block mr-2">
                <IoMdNotificationsOutline className="text-[1.5rem]" />
              </span>
              <span className="material-icons hidden sm:block">
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                  <img
                    src="https://bit.ly/dan-abramov"
                    alt="dan"
                    className="rounded-full"
                  />
                </div>
              </span>
            </div>
          </div>

          <BrosweFile />
        </div>
      </div>
    </div>
  );
};

export default page;
