import { useState } from "react";
import LlistatCiutats from "./LlistatCiutats";

function Autocompletar(){
    const [municipi, setMunicipi] = useState("");
    return (
        <div>
            <h3>Autocompletar</h3>
            <input type="text" onChange={(e) => setMunicipi(e.target.value)} value={municipi}></input>
            <LlistatCiutats nom={municipi}/>
        </div>
    )
}

export default Autocompletar;