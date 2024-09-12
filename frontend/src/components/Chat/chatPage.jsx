import React from "react";
import { useEffect } from "react";
import {FaArrowLeft, FaVideo, FaLock, FaCamera, FaMicrophone} from 'react-icons/fa';
import {IoMdCall, IoMdCheckmark, IoMdAttach, IoMdSend} from 'react-icons/io';
import {HiDotsVertical} from 'react-icons/hi';
import {GrEmoji} from 'react-icons/gr';

function ChatPage ({
                        chats,
                        selectedChat,
                        setChats,
                        setSelectedChat,
                        setIsCameraOpen,
                        setIsCalling
                    })
   {
    const currentChat = chats.find(({ id }) => id === selectedChat);
    const className =
      "w-max max-w-[80%] py-1 px-1.5 rounded-lg shadow-md text-sm text-black flex  items-end";
  
    useEffect(() => {
      if (currentChat.unread) {
        setChats(
          chats.map((chat) => ({
            ...chat,
            unread: chat.id === selectedChat ? 0 : chat.unread
          }))
        );
      }
    }, []);
  
    const onSubmit = (e) => {
      e.preventDefault();
      const msg = e.target.msg.value;
      e.target.reset();
  
      setChats(
        chats.map((chat) => {
          if (chat.id === selectedChat) {
            return {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  text: msg,
                  me: true,
                  time: new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    seconds: false
                  })
                }
              ]
            };
          }
          return chat;
        })
      );
    };
  
    return (
      <main className="min-h-screen bg-cover bg-fixed bg-[url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)]">
        <header className="bg-primary-600 sticky top-0 flex items-center justify-center py-2.5 px-2 text-white gap-3 z-30">
          <FaArrowLeft
            className="text-xl"
            onClick={() => setSelectedChat(null)}
          />
          <img
            src={currentChat.image}
            className="rounded-full w-10 h-10 object-cover"
            alt=""
          />
  
          <div className="flex flex-col mr-auto">
            <h4 className="font-medium">{currentChat.name}</h4>
            <p className="text-xs text-white/80">online</p>
          </div>
  
          <FaVideo
            className="text-xl"
            onClick={() => setIsCalling({ ...currentChat, type: "video" })}
          />
          <IoMdCall
            className="text-xl mx-1"
            onClick={() => setIsCalling(currentChat)}
          />
          <HiDotsVertical className="text-xl mr-1" />
        </header>
  
        <section className="flex flex-col gap-3 p-2 relative pb-44">
          <p className="bg-amber-200 block w-11/12 mx-auto p-2.5 rounded-lg shadow-md text-center text-black/70 text-xs my-4">
            <FaLock className="inline" /> Messages and calls are end-to-end
            encrypted. No one outside of this chat, not even WhatsApp, can read or
            listen to them. Tap to learn more
          </p>
  
          {currentChat.messages.map(({ text, me, time }, i) => (
            <div
              key={i}
              className={`${
                me ? "bg-green-100 ml-auto" : "bg-white"
              } ${className} ${text.length < 25 ? "flex-row gap-2" : "flex-col"}`}
            >
              <p className="py-0.5 px-1.5">{text}</p>
  
              <p className="text-xs text-black/40">
                {time}
                {me && (
                  <IoMdCheckmark className="inline-block mx-1 text-lg text-sky-500" />
                )}
              </p>
            </div>
          ))}
        </section>
  
        <form
          onSubmit={onSubmit}
          className="fixed left-0 bottom-0 bg-red-500/0 p-2 pt-0.5 w-full flex gap-2 items-center group bg-[url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)]"
        >
          <div className="flex-grow flex items-center gap-3 bg-white border p-2 rounded-full text-black/50">
            <p>
              <GrEmoji className="text-2xl" />
            </p>
            <input
              name="msg"
              className="flex-grow outline-none text-black w-full"
              type="text"
              required
              placeholder="Type a message"
            />
            <p>
              <IoMdAttach className="group-valid:hidden text-2xl" />
            </p>
            <p>
              <FaCamera className="text-2xl" />
            </p>
          </div>
  
          <button type="submit" className="bg-primary p-3 rounded-full">
            <FaMicrophone className="group-valid:hidden text-xl text-white" />
            <IoMdSend className="group-invalid:hidden text-xl text-white" />
          </button>
        </form>
      </main>
    );
  };

export default ChatPage;