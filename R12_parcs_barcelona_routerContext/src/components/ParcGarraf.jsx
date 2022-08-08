import foto from "../assets/parcgarraf.jpg"
import { useContext } from "react"
import ComponentTraductor from "./ComponentTraductor"

export function ParcGarraf(){
    const Traductor = useContext(ComponentTraductor)
    return (
        <div>
            <h1>{Traductor.traduce("parcGarrafTitle")}</h1>
            <p style={{marginTop:"1rem"}}>{Traductor.traduce("parcGarrafText")}</p>
            <img style={{width:"30rem", marginTop:"1rem"}} src={foto}/>
        </div>
    )
}