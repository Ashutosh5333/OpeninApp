import Image from "next/image";
import React from "react";
import {
  IoMdNotificationsOutline,
} from "react-icons/io";
import Sidebar from "../../components/Sidebar";
import MobileNavbar from "@/app/components/MobileNavbar";
import {BrosweFile} from "@/app/components/BrosweFile"


const page = () => {
  return (

      <div
        className="flex  w-[100%] justify-between gap-5
       m-auto border-red-600 h-screen "
      >
        <Sidebar />

        <MobileNavbar />

        <div
          className="RightSide-Container
         border-black w-full px-4 mx-auto    p-2"
        >
          <div
            className="flex justify-between w-[100%] sm::w-[80%] mx-auto m-auto  relative top-[10%]
           sm:top-0 px-4 py-8  border-red-500 mb-2"
          >
            <div className="flex items-center ">
              <span className="material-icons text-2xl font-semibold mr-2">
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

          <BrosweFile/>
            
        </div>
      </div>

  );
};

export default page;
