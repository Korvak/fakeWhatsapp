import React from "react";

function Chats(props) {

    return (
        <div>
            <h3>Chats</h3>
            {props.chats.map(chat => <p>{chat.name}</p>)}
        </div>
    );
}

export default Chats;