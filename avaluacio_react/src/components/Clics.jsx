import { useState } from "react"

export function Clics(){
    const [contador, setContador] = useState(0);
    return (
        <div style={{marginTop:"2rem", width:"100%", display:"flex", justifyContent:"center"}}>
            <button style={{width:"10rem", height:"2rem", fontSize:"24px", border:"1px solid black", borderRadius:"0.2rem"}} onClick={() => setContador(prev => prev+1)}>{contador} Clicks!</button>
        </div>
    )
}