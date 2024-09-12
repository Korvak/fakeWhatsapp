import React from "react";
import { useState } from "react";

import {MdMessage, MdCall, MdVideocam, MdInfoOutline } from 'react-icons/md';
 
function ChatsTab ({ chats, setSelectedChat, setIsCalling })  {
    const [selectedProfile, setSelectedProfile] = useState(false);
  
    return (
      <>
        {selectedProfile && (
          <div
            className=" min-h-screen w-full backdrop-blur-sm bg-black/50 fixed top-0 z-20"
            onClick={() => setSelectedProfile(false)}
          >
            <div
              className="w-3/4 mx-auto mt-[15vh] max-w-screen-sm relative"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <h2 className="absolute top-0 text-white bg-black/25 w-full p-2">
                {selectedProfile.name}
              </h2>
              <img
                src={selectedProfile.image}
                className="aspect-square object-cover" alt=""
              />
              <div className="flex px-4 py-3 justify-between bg-white text-primary text-2xl">
                <MdMessage onClick={() => setSelectedChat(selectedProfile.id)} />
                <MdCall onClick={() => setIsCalling(selectedProfile)} />
                <MdVideocam
                  onClick={() =>
                    setIsCalling({ ...selectedProfile, type: "video" })
                  }
                />
                <MdInfoOutline />
              </div>
            </div>
          </div>
        )}
  
        <section className="">
          {chats.map((chat) => (
            <div
              className="grid grid-cols-[3rem_1fr] items-center gap-3 px-5 py-4 hover:bg-gray-200"
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
            >
              <img
                className="rounded-full bg-gray-800 w-12 h-12 object-cover" alt=""
                src={chat.image}
                onClick={(e) => {
                  setSelectedProfile(chat);
                  e.stopPropagation();
                }}
              />
              <div>
                <h4 className="text-gray-800 font-medium text-base flex justify-between">
                  <span>{chat.name}</span>
  
                  <span
                    className={`text-xs ${
                      chat.unread ? "text-green-500" : "text-black/50"
                    }`}
                  >
                    {chat.messages[chat.messages.length - 1].time}
                  </span>
                </h4>
  
                <p className="text-sm text-black/60 flex justify-between">
                  <span className="line-clamp-1  w-[95%]">
                    {chat.messages[chat.messages.length - 1].text}
                  </span>
                  {chat.unread > 0 && (
                    <span className="bg-green-500 text-white text-xs w-5 h-5 rounded-full inline-flex pt-0.5 items-center justify-center">
                      {chat.unread}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
  
          <div className="fixed bottom-6 right-5 bg-primary p-4 rounded-2xl">
            <MdMessage className="text-2xl text-white" />
          </div>
        </section>
      </>
    );
  };

export default ChatsTab;