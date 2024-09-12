import React from "react";


import { FaCamera } from "react-icons/fa";
import { IoMdAdd } from 'react-icons/io';


function UpdatesTab ({ status, setIsCameraOpen, setSelectedStatus }) {
    return (
      <div className="px-4 py-2">
        <header>
          <h2 className="text-lg font-medium my-4">Status</h2>
          <div
            className="grid grid-cols-[3.5rem_1fr] items-center gap-3"
            onClick={() => setIsCameraOpen(true)}
          >
            <img
              className="rounded-full bg-gray-600 w-12 h-12"
              src={"https://github.com/devXprite.png"} alt=""
            />
            <div>
              <h4 className="text-gray-800 font-medium">My Status</h4>
              <p className="text-sm text-black/50 flex justify-between">
                Tap to add status update
              </p>
            </div>
          </div>
        </header>
        <section className="mt-6">
          <h4 className="text-black/50 font-medium text-sm my-4">
            Recent Updates
          </h4>
  
          <div className="flex flex-col gap-5">
            {status.map((state) => (
              <div
                className="grid grid-cols-[3.25rem_1fr] items-center gap-3"
                key={state.id}
                onClick={() => setSelectedStatus(state)}
              >
                <img
                  className="rounded-full w-[3.25rem] h-[3.25rem] border-2 border-primary-500 p-[1px] object-cover"
                  src={state.image} alt=""
                />
                <div>
                  <h4 className="text-gray-800 font-medium">{state.name}</h4>
                  <p className="text-sm text-black/50 flex justify-between ">
                    {state.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <hr className="mt-6" />
  
        <section className="mt-6">
          <h2 className="text-lg font-medium mb-2 flex items-center justify-between">
            <span>Channels</span>
            <IoMdAdd className="text-xl" />
          </h2>
          <p className="text-black/50 text-sm">
            Stay updated on topic that matters to you. Find channels to follow
            below.
          </p>
  
          <button className="mt-6 bg-primary font-medium text-sm text-white py-2  px-5 rounded-full">
            Explore More
          </button>
        </section>
  
        <div
          className="fixed bottom-6 right-5 bg-primary p-4 rounded-2xl"
          onClick={() => setIsCameraOpen(true)}
        >
          <FaCamera className="text-2xl text-white" />
        </div>
      </div>
    );
  };

export default UpdatesTab;