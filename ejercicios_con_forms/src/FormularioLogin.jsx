import { useState } from "react";
import Login from "./Login";

function FormularioLogin(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function changeName(e){
        setName(e.target.value);
    }

    function changePass(e){
        setPassword(e.target.value)
    }

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <h3>Formulari Login</h3>
            <label style={{width:"20%"}} htmlFor="user">Usuari</label>
            <input style={{width:"20%"}} onChange={changeName} value={name} id="user" type="text"></input>
            <label style={{width:"20%"}} htmlFor="pass">Contrassenya</label>
            <input style={{width:"20%"}} onChange={changePass} value={password} id="pass" type="password"></input>
            <Login user={name} pass={password} />
        </div>
    )
}

export default FormularioLogin;