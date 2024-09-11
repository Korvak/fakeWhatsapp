import React, { useState } from "react";
import Chats from "./chats";


import {MdMoreVert, MdAddBox } from 'react-icons/md';

const PREMADE_CHATS = [
    {
        name : "giorgio",
        members : ["giorgio", "luca"]
    },
    {
        name : "fabio",
        members : ["luca", "fabio", "matteo"]
    }
]


function ChatsPanel(props) {

    const [chats, setChats] = useState(PREMADE_CHATS);

    return (
        <div className="fwa_chatsPanel" >
            <div className="flex flex-initial border-solid border-2 h-8 w-64">
                <h3 className="w-48 ml-2 font-bold">Chats</h3>
                <button className="w-8">
                    <MdAddBox />
                </button>
                <button className="w-8">
                    <MdMoreVert />
                </button>
            </div>
            <Chats allowed={true}>
                {
                    chats.map(chat => <div>{chat.name}</div>)
                }
            </Chats>
        </div>
    );

}

export default ChatsPanel;