import React from "react";
import { useState } from "react";
import { IoIosSearch, IoIosPeople } from 'react-icons/io';
import { IoCameraOutline } from 'react-icons/io5';
import {HiDotsVertical} from 'react-icons/hi';


function Header ({ selectedTab, setSelectedTab, setIsCameraOpen }) {
    const tabs = ["Chats", "Updates", "Calls"];
  
    const [openMenu, setOpenMenu] = useState(false);
  
    const Menu = () => (
      <div
        className="absolute top-12 right-4 rounded-xl text-sm bg-white text-black/90 z-10 flex flex-col gap-4 p-6 shadow-xl border"
        onClick={() => setOpenMenu(false)}
      >
        {[
          "New group",
          "New broadcast",
          "Linked Devices",
          "Starred messages",
          "Payments",
          "Settings"
        ].map((item) => (
          <p>{item}</p>
        ))}
      </div>
    );
  
    return (
      <header className="bg-primary text-white sticky top-0">
        <div className="flex items-center gap-4 p-4 relative">
          <h2 className="text-xl font-normal mr-auto">WhatsApp</h2>
  
          <IoCameraOutline
            className="text-2xl"
            onClick={() => setIsCameraOpen(true)}
          />
          <IoIosSearch className="text-2xl" />
          <HiDotsVertical
            className="text-2xl"
            onClick={() => setOpenMenu((p) => !p)}
          />
  
          {openMenu && <Menu />}
        </div>
  
        <nav className="grid grid-cols-[1fr_2fr_2fr_2fr] text-center">
          <p
            onClick={() => setSelectedTab("community")}
            className={`flex justify-center font-medium py-1.5 border-b-4 hover:bg-black/10 ${
              selectedTab === "community"
                ? "border-white"
                : "border-transparent text-white/70"
            }`}
          >
            <IoIosPeople className="text-2xl" />
          </p>
  
          {tabs.map((tab) => (
            <p
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`flex justify-center font-medium py-1.5 border-b-4 hover:bg-black/10 ${
                selectedTab === tab
                  ? "border-white"
                  : "border-transparent text-white/70"
              }`}
            >
              {tab}
            </p>
          ))}
        </nav>
      </header>
    );
  };

export default Header;