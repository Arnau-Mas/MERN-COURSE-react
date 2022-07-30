import { useState } from "react";
import LlistatCiutats from "./LlistatCiutats";

function Autocompletar(){
    const [municipi, setMunicipi] = useState("");
    const [active, setActive] = useState(false);
    return (
        <div>
            <h3>Autocompletar</h3>
            <input type="text" onChange={(e) => setMunicipi(e.target.value)} value={municipi}></input>
            <button style={{backgroundColor:"orange", marginLeft:"1rem", padding:"0.6rem"}} onClick={() => setActive(!active)}>⬍ {active ? "Ocultar llista" : "Mostrar llista"}</button>
            {active && <LlistatCiutats nom={municipi} />}
        </div>
    )
}

export default Autocompletar;