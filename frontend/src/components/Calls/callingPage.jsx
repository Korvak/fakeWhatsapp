import React from "react";
import { useEffect } from "react";

import { FaLock, FaPhone, FaVolumeUp, FaVideo, FaMicrophone } from "react-icons/fa";


function CallingPage ({ isCalling: callingData, setIsCalling, setCallLogs })  {
    useEffect(() => {
      setCallLogs((prev) => [
        {
          ...callingData,
          outgoing: true,
          time: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
          })
        },
        ...prev
      ]);
    }, []);
  
    return (
      <section
        className={`text-center min-h-screen ${
          callingData.type === "video"
            ? "bg-black"
            : "bg-cover bg-[url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)]"
        } `}
      >
        <header
          className={`p-5 text-white ${
            callingData.type === "video" ? "bg-black" : "bg-primary"
          }`}
        >
          <p className="text-white/75 text-sm">
            {" "}
            <FaLock className="inline" /> <span>End to End encrypted</span>{" "}
          </p>
  
          <img
            src={callingData.image} alt=""
            className="rounded-full w-20 h-20 block mx-auto object-cover mt-6"
          />
          <h3 className="mt-2 text-2xl">{callingData.name}</h3>
          <h4 className="text-white/90 animate-pulse">Ringing...</h4>
        </header>
  
        <div
          className="fixed bottom-28 left-1/2 -translate-x-1/2 rounded-full bg-red-500 p-5 text-xl"
          onClick={() => setIsCalling(false)}
        >
          <FaPhone className="rotate-90 text-white/90" />
        </div>
  
        <div
          className={`fixed bottom-0 left-0 w-full py-8 px-10 flex justify-between items-center text-white/90 text-2xl ${
            callingData.type === "video" ? "bg-black" : "bg-primary"
          }`}
        >
          <FaVolumeUp />
          <FaVideo />
          <FaMicrophone />
        </div>
      </section>
    );
  };

export default CallingPage;