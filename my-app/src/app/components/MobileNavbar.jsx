"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillSchedule } from "react-icons/ai";
import { FaFileUpload } from "react-icons/fa";
import {
  IoIosNotifications,
  IoMdNotificationsOutline,
  IoMdSettings,
} from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { SiInvoiceninja } from "react-icons/si";
import { SlCalender } from "react-icons/sl";

const MobileNavbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="fixed z-10 block sm:hidden w-full py-2 px-4   border-red-700 bg-[#ffffff] ">
      
      <div className="flex  border-black items-center gap-10 justify-between">
        <div className="flex gap-5 py-2 items-center ">
          <button className="text-2xl" onClick={toggleDrawer}>
            &#9776;
          </button>
          <Image src={"/assets/Logocompany.png"} width={80}
                   height={30} alt="logo"/>
        </div>
        <div className="flex items-center">
          <button className="mr-4">
                <IoMdNotificationsOutline className="text-[1.5rem]" />
               
          </button>
          <button>
          
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <img src="https://bit.ly/dan-abramov" alt="dan" className="rounded-full"/>
        </div>
        
          </button>
        </div>
      </div>


      {isDrawerOpen && (
        <div className="top-0 left-0 h-auto 
        fixed inset-0
        w-full bg-gray-800 bg-opacity-75 z-50  space-y-3  overflow-y-scroll  scrollbar">
          <div className=" border-black h-screen ">

            <div className="h-screen  rounded-r-3xl border-green-700 px-6 py-4 bg-[#FFFFFF] shadow-md text-[#9A9AA9] p-2">
              <div className="px-4  flex justify-between border-t-red-600 py-4 mb-2">
                <Image
                  src={"/assets/Logocompany.png"}
                  alt="Logo"
                  width={100}
                  height={30}
                  className="mr-2 inline"
                />
                <button className="text-black" onClick={toggleDrawer}>
                  &#10006;
                </button>
              </div>

              <div className=" flex flex-col justify-center px-1 py-4 border-red-600">
                <div className="flex items-center gap-2 py-2 mb-6">
                  <span className="material-icons mr-2">
                    <RxDashboard className="text-[1.3rem]" />
                  </span>

                  <span className="text-sm font-medium font-Nunito">
                    Dashboard{" "}
                  </span>
                </div>

                <div className="flex items-center gap-2 py-2 mb-6">
                  <span className="material-icons mr-2">
                    <FaFileUpload className="text-[1.3rem]" />
                  </span>

                  <span className="text-sm font-medium">Upload </span>
                </div>

                <div className="flex items-center gap-2 py-2 mb-6">
                  <span className="material-icons mr-2">
                    <SiInvoiceninja className="text-[1.3rem]" />
                  </span>

                  <span className="text-sm font-medium">Invoice </span>
                </div>

                <div className="flex items-center gap-2 py-2 mb-6">
                  <span className="material-icons mr-2">
                    <AiFillSchedule className="text-[1.3rem]" />
                  </span>

                  <span className="text-sm font-medium">Schedule </span>
                </div>

                <div className="flex items-center gap-2 py-2 mb-6">
                  <span className="material-icons mr-2">
                    <SlCalender className="text-[1.3rem]" />
                  </span>

                  <span className="text-sm font-medium">Calender </span>
                </div>

                <div className="flex items-center gap-2 py-2 mb-6">
                  <span className="material-icons mr-2">
                    <IoIosNotifications className="text-[1.4rem]" />
                  </span>

                  <span className="text-sm font-medium">Notification </span>
                </div>
                <div className="flex items-center gap-2 py-2 mb-6">
                  <span className="material-icons mr-2">
                    <IoMdSettings className="text-[1.3rem]" />
                  </span>
                  <span className="text-sm font-medium">Settings </span>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      )}
      
    </div>
  );
};

export default MobileNavbar;