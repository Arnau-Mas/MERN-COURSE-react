import foto from "../assets/deltallobregat.jpg"
import { useContext } from "react"
import ComponentTraductor from "./ComponentTraductor"

export function DeltaLlobregat(){
    const Traductor = useContext(ComponentTraductor)
    return (
        <div>
            <h1>Delta del Llobregat</h1>
            <p style={{marginTop:"1rem"}}>{Traductor.traduce("deltaLlobregatText")}</p>
            <img style={{width:"30rem", marginTop:"1rem"}} src={foto}/>
        </div>
    )
}