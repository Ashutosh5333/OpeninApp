"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Papa from "papaparse";
import { FiUpload } from "react-icons/fi";
import toast, { Toaster } from 'react-hot-toast';
import "./a.css";


export const BrosweFile = () => {
  const fileInputRef = useRef("");
  const fileInputRef1 = useRef("");
  const [parsedData, setParsedData] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [tableRows, setTableRows] = useState([]);
  const [clickUpload, setClickUpload] = useState(false);
  const [values, setValues] = useState([]);
  const [selectedArray, setSelectedArray] = useState([]);

  const handleSelectChange = (index, selectedValue) => {
    const newSelectedArray = [...selectedArray];

    if (!newSelectedArray[index]) {
      newSelectedArray[index] = [];
    }

    if (!newSelectedArray[index].includes(selectedValue)) {
      newSelectedArray[index].push(selectedValue);
      setSelectedArray(newSelectedArray);
    }
  };

  const handleRemoveOption = (index, selectedValueToRemove) => {
    const newSelectedArray = [...selectedArray];

    newSelectedArray[index] = newSelectedArray[index].filter(
      (value) => value !== selectedValueToRemove
    );

    setSelectedArray(newSelectedArray);
  };

  const changeHandler = (event) => {
    const selectedFile = event.target.files[0];

    setSelectedFileName(selectedFile.name);

    Papa.parse(selectedFile, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        setParsedData(results.data);
        setTableRows(rowsArray[0]);
        setValues(valuesArray);
      },
    });
  };

  const handlermoveseleted = () => {
    setSelectedFileName("");
    setSelectedArray([]);
    setValues([]);
    setTableRows([]);
    setClickUpload(false);

    if (fileInputRef1.current) {
      fileInputRef1.current.value = "";
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = () => {
     toast.success("Uploaded File.......")
     setTimeout(()=>{
       setClickUpload(true);
     },1000)
  };

  return (
    <>
      <div className="Browser-continer relative top-[15%] sm:top-16 w-[90%] sm:w-[60%] m-auto text-center">
        <div className="container-box px-2 py-2 flex flex-col sm:flex-row sm:justify-between border-pink-800">
          <div className="w-[100%] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4 border-green-700">
            <div
              className={`border-2 ${" border-dashed border-[#EBEBEB]"} py-10 mt-5 bg-[#FFFFFF] rounded-lg w-[100%]`}
            >
              <label className="border-green-700">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv"
                  name="file"
                  onChange={changeHandler}
                  className="border border-grey text-sm hidden rounded py-4 px-2 w-[100%] "
                  multiple
                />
                <div className="w-[60%] border-red-700 m-auto flex items-center justify-center">
                  <Image
                    src={"/assets/Excel.svg"}
                    alt="imagelogo"
                    width={50}
                    height={50}
                    className="m-auto"
                  />
                </div>
              </label>

              {selectedFileName && (
                <p className="mt-2 text-[#707070] text-sm text-center">
                  {selectedFileName}
                </p>
              )}

              {selectedFileName && (
                <p
                  onClick={handlermoveseleted}
                  className="mt-2 cursor-pointer text-red-500 text-sm text-center"
                >
                  remove
                </p>
              )}

              <label>
                <input
                  ref={fileInputRef1}
                  type="file"
                  accept=".csv"
                  name="file"
                  onChange={changeHandler}
                  className="border border-grey text-sm hidden rounded py-4 px-2 w-[100%] "
                  multiple
                />
                {selectedFileName ? (
                  ""
                ) : (
                  <p className="mt-5 text-[#707070] text-sm text-center">
                    {" "}
                    Drop Your excel sheet here or{" "}
                    <span className="text-[#605BFF]"> browse </span>
                  </p>
                )}
              </label>
            </div>

            <button
              onClick={handleUpload}
              className={` ${
                selectedFileName
                  ? "bg-[#605BFF]"
                  : "bg-[#605BFF] opacity-60 cursor-not-allowed"
              }  py-2 w-[100%] rounded mt-5 flex items-center 
                  justify-center gap-5 text-sm text-[#FFFFFF]
                m-auto `}
            >
              <span>
                <FiUpload />{" "}
              </span>{" "}
              Upload
            </button>
          </div>
        </div>
      </div>

      <div className="relative sm:top-40 overflow-x-auto">
        <h2 className="text-2xl py-6 px-2 font-semibold"> Uploads </h2>
        {clickUpload && (
          <table className="w-full text-left border-separate border-spacing-x-0 border-spacing-y-[15px]
           px-4 py-2 rounded-lg bg-[#F5F5F5] border-red-600">
            <thead>
              <tr>
                {tableRows.map((rows, index) => (
                  <th
                    key={index}
                    className="border-gray-400 capitalize text-center text-sm py-2 px-2 sm:text-base"
                  >
                    { index == 0 ? "Sl No." : rows}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className=" bg-[#F5F5F5] border-green-600 ">
              {values.map((subarray, index) => (
                <tr
                  key={index}
                  className="bg-[rgb(255,255,255)]  relative mb-4  text-left text-sm font-Figtree text-[#000000] w-[90%] m-auto
               border-2 border-red-500 rounded-2xl px-8 py-3 shadow-lg"
                >
                  {subarray.slice(0, 3).map((value, subIndex) => (
                    <td key={subIndex} className="py-2 px-8  border-green-400">

                        {
                          subIndex == 1 ?  <div className="py-4 border-yellow-500 text-blue-700 underline">
                            <a href={`https://${value}`}>{value}</a>
                          </div>
                   :
                      
                        <div className="py-4 border-yellow-500">{value}</div>
                      }
                    </td>
                  ))}

                  <td className="border-gray-400 py-2">
                    <select
                      onChange={(e) =>
                        handleSelectChange(index, e.target.value)
                      }
                      value={""}
                      className="w-full py-2 border rounded px-4 border-gray-600"
                    >
                      <option value="" disabled hidden>
                        Select tags
                      </option>
                      {subarray[3].split(",").map((value, subIndex) => (
                        <option
                          key={subIndex}
                          value={value}
                          className="border-2 border-red-600 rounded-lg"
                        >
                          {value}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td className="border-red-400 bg-[#FFFFFF] py-2 text-center">
                    {selectedArray[index] &&
                      selectedArray[index].map((value, subIndex) => (
                        <div
                          key={subIndex}
                          className="inline-block bg-[#605BFF] px-2 py-1 gap-5 m-2 rounded-lg mx-1"
                        >
                          <span className="text-white">{value}</span>
                          <button
                            onClick={() =>
                              handleRemoveOption(index, value)
                            }
                            className="ml-1 text-white px-2 rounded-full cursor-pointer"
                          >
                            X
                          </button>
                        </div>
                      ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Toaster/>
    </>
  );
};
