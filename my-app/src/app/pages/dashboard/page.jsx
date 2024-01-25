import Image from "next/image";
import React from "react";
import { AiFillSchedule } from "react-icons/ai";
import { FaFileUpload } from "react-icons/fa";
import {
  IoIosNotifications,
  IoMdNotificationsOutline,
  IoMdSettings,
} from "react-icons/io";
import Sidebar from "../../components/Sidebar";
import MobileNavbar from "@/app/components/MobileNavbar";
import { FiUpload } from "react-icons/fi";
import {BrosweFile} from "@/app/components/BrosweFile"

const page = () => {
  return (
    <>
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

          {/* UPLOAD CSV DATA IMPUT  */}


          {/* <div
            className="Browser-continer  relative top-[15%] sm:top-20
            w-[90%] sm:w-[50%] m-auto text-center"
          >
            <div className="Overview-container-box px-2  flex flex-col sm:flex-row sm:justify-between    border-pink-800">
              <div className=" w-[100%] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4 border-green-700">
                <div
                  className={`border-2 ${" border-dashed border-[#EBEBEB]"} py-8 mt-5 bg-[#FFFFFF]  rounded-lg   w-[100%]`}
                >
                  <label className=" border-green-700">
                    <input
                      type="file"
                      placeholder="overview images"
                      className="border border-grey text-sm
                          hidden
                          rounded py-2 px-2 w-[100%] "
                      multiple
                    />

                    <div
                      className="w-[60%]  border-red-700 m-auto
                                 flex items-center justify-center"
                    >
                      <Image
                        src={"/assets/Excel.png"}
                        alt="imagelogo"
                        width={50}
                        height={50}
                        className="m-auto"
                      />
                    </div>
                    <p className=" mt-10 text-[#707070] text-sm text-center">
                      {" "}
                      Drop Your excel sheet here or{" "}
                      <span className="text-[#605BFF]"> browse </span>
                    </p>
                  </label>
                </div>

                <button
                  className="bg-[#605BFF] py-2 w-[100%] rounded mt-5 flex items-center 
                  justify-center gap-5 text-sm text-[#FFFFFF]
                m-auto"
                >
                  <span>
                    <FiUpload />{" "}
                  </span>{" "}
                  Upload
                </button>
              </div>
            </div>
          </div> */}

          {/* <BrosweFile/> */}



        </div>
      </div>
    </>
  );
};

export default page;
