'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillSchedule } from "react-icons/ai";
import { FaFileUpload } from "react-icons/fa";
import {
  IoIosNotifications,
  IoMdSettings,
} from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { SiInvoiceninja } from "react-icons/si";
import { SlCalender } from "react-icons/sl";


const Sidebar = () => {
   const router = useRouter()

    const handleHome = () =>{
       router.push("/")
    }

  return (
    <>
     <div 
      onClick={handleHome}
     className="px-6 py-4 mb-2">
       
          <Image
            src={"/assets/Logocompany.png"}
            alt="Logo"
            width={100}
            height={30}
            className="mr-2 inline"
            />
         
        </div>

        <div className=" flex flex-col justify-center px-4 py-4 border-red-600">
          <div className="flex items-center gap-2 py-2 mb-6">
            <span className="material-icons mr-2">
              <RxDashboard className="text-[1.3rem]" />
            </span>

            <span className="text-sm font-medium font-Nunito">Dashboard </span>
          </div>

          <div className="flex items-center gap-2 py-2 mb-6">
            <span className="material-icons mr-2">
              <FaFileUpload className="text-[1.3rem] text-[#605BFF]" />
            </span>

            <span className="text-sm text-[#605BFF] font-medium">Upload </span>
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
      
    </>
  );
};

export default Sidebar;

