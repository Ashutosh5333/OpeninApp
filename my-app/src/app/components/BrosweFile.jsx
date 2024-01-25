"use client";
import Image from "next/image";
import React, { useState } from "react";
import Papa from "papaparse";
import { FiUpload } from "react-icons/fi";

export const BrosweFile = () => {
  const [parsedData, setParsedData] = useState([]);

  // State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  // State to store the values
  const [values, setValues] = useState([]);

  // State to store the selected values for each row
  const [selectedArray, setSelectedArray] = useState([]);

  const handleSelectChange = (index, selectedValue) => {
    const newSelectedArray = [...selectedArray];

    // If the row index doesn't exist in selectedArray, create a new array for it
    if (!newSelectedArray[index]) {
      newSelectedArray[index] = [];
    }

    newSelectedArray[index].push(selectedValue);
    setSelectedArray(newSelectedArray);
  };

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  console.log("parse", parsedData);

  return (
    <>
      <div
        className="Browser-continer border-2  relative top-[15%] sm:top-20
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
                  accept=".csv"
                  name="file"
                  onChange={changeHandler}
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
      </div>

      {/*  */}

      <table className="w-full mt-20 border  bg-[#FFFFFF] border-red-600">
        <thead>
          <tr>
            {tableRows.map((rows, index) => (
              <th key={index} className=" border-gray-400 py-2 px-4">
                {rows} +
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="border-2 bg-[#ffffff] border-green-600 px-4 py-2">
          {values.map((subarray, index) => (
            <tr
              key={index}
              className="bg-gray-200 gap-10 mt-5 rounded-lg border border-red-600 px-4 py-4 shadow-lg"
            >
              {subarray.slice(0, 3).map((value, subIndex) => (
                <td key={subIndex} className="py-2 border-green-400">
                  <div className="py-4 border-yellow-500">{value}-</div>
                </td>
              ))}
              <td className="border-gray-400 py-2">
                <select
                  onChange={(e) => handleSelectChange(index, e.target.value)}
                  className="w-full py-4 px-4 border-red-600"
                >
                  {subarray[3].split(",").map((value, subIndex) => (
                    <option key={subIndex} value={value}>
                      {value} 999
                    </option>
                  ))}
                </select>
              </td>
              {/* Display selected values from the selectedArray */}
              <td className="border-gray-400 py-2">
                {selectedArray[index] &&
                  selectedArray[index].map((value, subIndex) => (
                    <button
                      key={subIndex}
                      className="bg-red-500 text-white py-1 px-2 mr-2 rounded-lg"
                    >
                      {value}
                    </button>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
// <tbody className="border-2 bg-[#ffffff] border-green-600 px-4 py-2 ">
// {values.map((subarray, index) => (
//     <tr key={index} className="bg-gray-200 shadow-lg mt-5
//     rounded-lg border border-red-600  px-4 ">
//       {subarray.slice(0, 3).map((value, subIndex) => (
//           <td key={subIndex} className="py-2  border-green-400">
//             <div className=" bg-[#ffffff] py-4 border-yellow-500">
//           {value}-
//                  </div>
//         </td>
//       ))}
//       {/* {subarray.slice(0, 3).map((value, subIndex) => (
//         <td key={subIndex} className="py-2  border-green-400">
//           {value}-
//         </td>
//       ))} */}

//       <td className=" border-gray-400 py-2">
//         <select
//           onChange={(e) => handleSelectChange(index, e.target.value)}
//           className="w-full  py-4 px-4  border-red-600"
//         >
//           {subarray[3].split(",").map((value, subIndex) => (
//             <option key={subIndex} value={value}>
//               {/* <div className="bg-[#ffffff]"> */}
//               {value} 999
//               {/* </div> */}
//             </option>
//           ))}
//         </select>
//       </td>

//       {/* Display selected values from the selectedArray */}
//       <td className="border-gray-400 py-2">
//         {selectedArray[index] &&
//           selectedArray[index].map((value, subIndex) => (
//             <button
//               key={subIndex}
//               className="bg-red-500 text-white py-1 px-2 mr-2 rounded-lg"
//             >
//               {value}
//             </button>
//           ))}
//       </td>
//     </tr>
//   ))}

//           </tbody>
