import React from "react";
import { useState, useEffect } from "react";
import '../../styles/app.css';

const NAMES = [
    "grendel",
    "ariel",
    "vattu",
    "percieval"
]


function Navbar (props) {
    const [name, setName] = useState("grendel");
    const [nameCount, setNameCount] = useState(1);

    const changeName = async () => {
        setName( NAMES[nameCount] );
        setNameCount( (nameCount + 1) % NAMES.length );
    }

    return (
        <div className={props.cls}>
            <p>the name is :  {name}</p>
            <button onClick={changeName} className="btn btn-blue">change name</button>
        </div>

    );
}

export default Navbar;