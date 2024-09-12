import React from "react";
import { useState } from "react";
import {IoMdClose, IoMdFlash, IoMdFlashOff } from "react-icons/io";
import {MdPhotoSizeSelectActual } from 'react-icons/md';
import {HiOutlineRefresh} from 'react-icons/hi';

function CameraPage ({ setIsCameraOpen }) {
    const [flashlighOn, setFlashlighOn] = useState(false);
  
    return (
      <section className="bg-black text-white min-h-screen">
        <div className="flex justify-between px-6 pt-6">
          <IoMdClose
            className="text-2xl"
            onClick={() => setIsCameraOpen(false)}
          />
  
          {flashlighOn ? (
            <IoMdFlash
              className="text-2xl"
              onClick={() => setFlashlighOn(false)}
            />
          ) : (
            <IoMdFlashOff
              className="text-2xl"
              onClick={() => setFlashlighOn(true)}
            />
          )}
  
          <div className="flex items-center px-6 justify-between fixed w-full left-0 bottom-12">
            <MdPhotoSizeSelectActual className="text-2xl" />
            <div className="bg-white rounded-full h-16 w-16 relative">
              <div className="bg-black absolute rounded-full inset-1">
                <div className="bg-white absolute rounded-full inset-2"></div>
              </div>
            </div>
            <HiOutlineRefresh className="text-2xl" />
          </div>
        </div>
      </section>
    );
  };
  
export default CameraPage;