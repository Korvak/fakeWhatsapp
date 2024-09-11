import React, { useState } from "react";

function Navbar(props) {

    const [click, setClick] = useState(0);
    const [txt, setTxt] = useState('');

    const setText = (event) => {

    };

    return (
        <nav className={` ${props.col} text-3xl ml-6 w-full`}>
            <p> clicked {click} </p>
            <input onChange={(event) => {setTxt(event.target.value);}} value={txt}></input>
            <button onClick={ (event) => {setClick(click + 1);}}>click me</button>
        </nav>
    );
    
}

export default Navbar;