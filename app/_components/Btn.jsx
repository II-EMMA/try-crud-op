'use client';

import { addUser } from "@/utilis/actions/addUser";
import { getUsersData } from "@/utilis/actions/getUsersInfo";
import { useEffect, useState } from "react";

export default function Button() {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     const newData = await getUsersData();
//     setData(newData);
//   };

  const handeler = async () => {
    await addUser();
    // if (result) {
    //   fetchData();
    // } else {
    //  return
    // }
  };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     console.log("Updated Data:", data);
//   }, [data]); 

  return (
    <button onClick={handeler} className="border text-2xl cursor-pointer border-black py-5 px-10 flex justify-center items-center mt-4 rounded-full">
      Add Data
    </button>
  );
}