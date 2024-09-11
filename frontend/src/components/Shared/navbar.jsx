import React from "react";
import '../../styles/app.css';

//icons
import { MdMoreVert, MdPerson, MdPhotoCamera, MdSearch } from "react-icons/md";

//components

function Navbar (props) {

    return (
        <nav className="w-full h-18 bg-green-500 text-white">
            <div className="flex flex-initial h-8 mb-2">
                <h3 className="text-2xl font-bold ml-2 mt-1 w-11/12">WhatsApp</h3>
                <div className="w-1/12 flex flex-1 mt-2 mb-2">
                    <button className="w-1/3 text-2xl">
                        <MdPhotoCamera />
                    </button>
                    <button className="w-1/3 text-2xl">
                        <MdSearch />
                    </button>   
                    <button className="w-1/3 text-2xl">
                        <MdMoreVert /> 
                    </button>
                </div>
            </div>
            <div className="flex flex-1 h-10">
                <button className="text-3xl w-1/6 text-center hover:bg-green-400">
                    <MdPerson className="w-10 text-center"/>
                </button>
                <button className="text-2xl w-2/6 hover:bg-green-400">Chats</button>
                <button className="text-2xl w-2/6 hover:bg-green-400">Updates</button>
                <button className="text-2xl w-2/6 hover:bg-green-400">Calls</button>
            </div>
        </nav>
    );
}

export default Navbar;