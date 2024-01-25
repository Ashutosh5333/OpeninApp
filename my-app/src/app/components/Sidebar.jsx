import Image from "next/image";
import React from "react";
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

const Sidebar = () => {

  return (
    <>
    {/* <div className="  ">  */}
      <div className="w-[20%]  hidden sm:block px-6 py-6 bg-[#FFFFFF] shadow-md text-[#9A9AA9] p-2">
        <div className="px-4 py-4 mb-2">
          <Image
            src={"/assets/Logocompany.png"}
            alt="Logo"
            width={100}
            height={30}
            className="mr-2 inline"
          />
        </div>

        <div className=" flex flex-col justify-center px-1 py-4 border-red-600">
          <div className="flex items-center gap-2 py-2 mb-6">
            <span className="material-icons mr-2">
              <RxDashboard className="text-[1.3rem]" />
            </span>

            <span className="text-sm font-medium font-Nunito">Dashboard </span>
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
      {/* </div> */}
    </>
  );
};

export default Sidebar;
{/* <div className="fixed w-[20%] overflow-y-auto"> 
<div className="w-[20%]  hidden sm:block px-6 py-6 bg-[#FFFFFF] shadow-md text-[#9A9AA9] p-2">
  <div className="px-4 py-4 mb-2">
    <Image
      src={"/assets/Logocompany.png"}
      alt="Logo"
      width={100}
      height={30}
      className="mr-2 inline"
    />
  </div>

  <div className=" flex flex-col justify-center px-1 py-4 border-red-600">
    <div className="flex items-center gap-2 py-2 mb-6">
      <span className="material-icons mr-2">
        <RxDashboard className="text-[1.3rem]" />
      </span>

      <span className="text-sm font-medium font-Nunito">Dashboard </span>
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
</div> */}
