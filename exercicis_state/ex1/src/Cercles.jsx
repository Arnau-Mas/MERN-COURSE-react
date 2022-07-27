
import {useState} from 'react'

function Cercles(){
    const [actiu, setActiu] = useState(false);
    let cercle = {
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        backgroundColor: actiu ? "red" : "grey"
    }
    return (
        <div style={{display:"flex", gap:"1rem"}}>
            <div style={cercle}></div>
            <div style={cercle}></div>
            <div style={cercle}></div>
            <div style={cercle}></div>
            <div style={cercle}></div>
            <button onClick={() => setActiu(true)}>Posar vermell</button>
            <button onClick={() => setActiu(false)}>Treure vermell</button>
        </div>
    )
}

export default Cercles;