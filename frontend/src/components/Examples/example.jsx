import React from "react";
import { useState, useEffect } from "react";
import '../../styles/app.css';

const NAMES = [
    "grendel",
    "ariel",
    "vattu",
    "percieval"
]

function getNames() {
    let objs = []
    for (let name of NAMES) {
        objs.push(<li>{name}</li>)
    }
    return objs;
}

function Example (props) {

    //fetches data from API
    console.log(props.children);

    const [name, setName] = useState("grendel");
    const [nameCount, setNameCount] = useState(1);

    const changeName = async () => {
        setName( NAMES[nameCount] );
        setNameCount( (nameCount + 1) % NAMES.length );
    }

    return (
        <div className={props.cls}>
            <p>the name is :  {name}</p>
            <ul>
                {//with function
                    getNames()
                }
            </ul>
            {
                props.showSelect !== true ? false : <select>{NAMES.map(person => <option>{person}</option>)}</select>
            }
            <button onClick={changeName} className="btn btn-blue">change name</button>
        </div>

    );
}

export default Example;