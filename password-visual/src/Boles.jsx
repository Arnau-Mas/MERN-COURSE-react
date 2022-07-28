import { useState } from "react";
import Bola from "./Bola";

function Boles(){
    const password = [1,1,0,0,1];
    let [inputPass, setinputPass] = useState([0,0,0,0,0]);
    return (
        <div style={{
            display:"flex",
            gap:"1rem"
        }}>
            <Bola valor={0} funcio={setinputPass} pass={inputPass} />
            <Bola valor={1} funcio={setinputPass} pass={inputPass} />
            <Bola valor={2} funcio={setinputPass} pass={inputPass} />
            <Bola valor={3} funcio={setinputPass} pass={inputPass} />
            <Bola valor={4} funcio={setinputPass} pass={inputPass} />
            {JSON.stringify(inputPass)===JSON.stringify(password) ? <p>Has encertat!</p> : <p></p>}
        </div>
    )
}

export default Boles;