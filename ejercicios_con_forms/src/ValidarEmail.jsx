import { useState } from "react";

function ValidarEmail(){

    const [mail, setMail] = useState("");
    let rgx= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return (
        <div>
            <h3>Validar Email</h3>
            <input style={{border: mail.match(rgx) ? "1px solid green" : "1px solid red", outline:"none"}} type="mail" onChange={(e) => setMail(e.target.value)} value={mail} />
        </div>
    )
}

export default ValidarEmail;