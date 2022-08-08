import foto from "../assets/pedraforca.jpg"
import { useContext } from "react"
import ComponentTraductor from "./ComponentTraductor"

export function Pedraforca(){
    const Traductor = useContext(ComponentTraductor)
    return (
        <div>
            <h1>El Pedraforca</h1>
            <p style={{marginTop:"1rem"}}>{Traductor.traduce("pedraforcaText")}</p>
            <img style={{width:"30rem", marginTop:"1rem"}} src={foto}/>
        </div>
    )
}