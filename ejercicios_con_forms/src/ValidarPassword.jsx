import { useState } from "react";
import ValidarPasswordMessage from "./ValidarPasswordMessage";

function ValidarPassword(){

    const [user, setUser] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    return (
        <div style={{display:"flex", flexDirection:"column", width:"20%"}}>
            <h3>Validar password</h3>
            <label htmlFor="user2">User</label>
            <input id="user2" onChange={(e) => setUser(e.target.value)} type="text"></input>
            <label htmlFor="pass12">Password</label>
            <input htmlFor="pass12" onChange={(e) => setPass1(e.target.value)} type="password"></input>
            <label htmlFor="pass22">Repeat password</label>
            <input id="pass22" onChange={(e) => setPass2(e.target.value)} type="password"></input>
            <ValidarPasswordMessage nom={user} pass1={pass1} pass2={pass2} />
        </div>
    )
}

export default ValidarPassword;