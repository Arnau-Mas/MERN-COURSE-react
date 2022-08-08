import foto from "../assets/parcmontseny.jpg"
import { useContext } from "react"
import ComponentTraductor from "./ComponentTraductor"

export function ParcMontseny(){
    const Traductor = useContext(ComponentTraductor)
    return (
        <div>
            <h1>{Traductor.traduce("parcMontsenyTitle")}</h1>
            <p style={{marginTop:"1rem"}}>{Traductor.traduce("parcMontsenyText")}</p>
            <img style={{width:"30rem", marginTop:"1rem"}} src={foto}/>
        </div>
    )
}