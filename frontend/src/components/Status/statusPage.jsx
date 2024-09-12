import React from "react";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from 'react-icons/io';
import {FaArrowLeft} from 'react-icons/fa';

import setIsCameraOpen from "../Camera/cameraUtils";


function StatusPage ({ status, setSelectedStatus }) {
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setSelectedStatus(null);
            clearInterval(interval);
            return 0;
          }
  
          return prev + 2;
        });
      }, 100);
  
      return () => clearInterval(interval);
    }, []);
    
    return (
      <section className="bg-black text-white min-h-screen flex items-center justify-center relative">
        <div
          className="absolute top-0 left-0 bg-white/75 rounded-full h-1 transition-all ease-linear z-50"
          style={{ width: `${progress}%` }}
        ></div>
  
        <div className="flex gap-3 items-center py-3 px-2 top-0 fixed left-0 w-full bg-black/50">
          <FaArrowLeft
            className="text-xl"
            onClick={() => setSelectedStatus(null)}
          />
  
          <div
            className="grid grid-cols-[2.75rem_1fr] items-center gap-3"
            onClick={() => setIsCameraOpen(true)}
          >
            <img className="rounded-full bg-gray-600 w-11 h-11 object-cover" src={status.image} alt={"status img"} />
            <div>
              <h4 className="font-medium">{status.name}</h4>
              <p className="text-sm text-white/70 flex justify-between">
                {status.time}
              </p>
            </div>
          </div>
        </div>
  
        <img src={status.status} className="block w-full" alt={"status name"} />
  
        <div className="fixed bg-black/0 text-white/90 w-full bottom-0 left-0 py-4 text-center ">
          <IoIosArrowUp className="text-3xl mx-auto animate-bounce" />
          <p className="text-sm">Reply</p>
        </div>
      </section>
    );
};

export default StatusPage;