import React from "react";

function Chats(props) {

    return (
        <div>
            {props.allowed ? props.children : <></>}
        </div>
    );
}

export default Chats;