import React from "react";

import {MdCall} from 'react-icons/md';
import {IoMdLink} from 'react-icons/io';
import {FaArrowLeft, FaVideo, FaPhone} from 'react-icons/fa';


function CallsTab ({ callLogs, setIsCalling })  {
    return (
      <div className=" py-5">
        <header className="grid grid-cols-[3rem_1fr] items-center gap-3 px-5">
          <div className="bg-primary  w-12 h-12 rounded-full flex items-center justify-center">
            <IoMdLink className="text-2xl text-white" />
          </div>
  
          <div>
            <h2 className="text-base font-medium text-black/80">
              Create call link
            </h2>
            <p className="text-sm text-black/50 font-medium">
              Share a link for your WhatsApp call
            </p>
          </div>
        </header>
  
        <section className="mt-6">
          {callLogs.map((call, i) => (
            <div
              className="grid grid-cols-[3rem_1fr_1.5rem] items-center px-5 gap-3 py-3 hover:bg-gray-200"
              key={i}
            >
              <img
                className="rounded-full bg-gray-800 w-12 h-12 object-cover"
                src={call.image} alt=""
              />
  
              <div>
                <p className="text-gray-800 text-base">{call.name}</p>
                <p className={`text-xs text-black/60 w-[95%] line-clamp-1`}>
                  <FaArrowLeft
                    className={`inline mr-1 text-green-600 ${
                      call.outgoing ? "rotate-[135deg]" : "rotate-[315deg]"
                    }`}
                  />
                  {call.time}
                </p>
              </div>
  
              <div
                onClick={() => {
                  setIsCalling(call);
                }}
              >
                {call.type === "video" ? (
                  <FaVideo className="text-lg text-primary" />
                ) : (
                  <FaPhone className="rotate-90 text-lg text-primary" />
                )}
              </div>
            </div>
          ))}
        </section>
  
        <div className="fixed bottom-6 right-5 bg-primary p-4 rounded-2xl">
          <MdCall className="text-2xl text-white" />
        </div>
      </div>
    );
  };

export default CallsTab;