import foto from "../assets/montserrat.jpg"
import { useContext } from "react"
import ComponentTraductor from "./ComponentTraductor"

export function Montserrat(){
    const Traductor = useContext(ComponentTraductor)
    return (
        <div>
            <h1>{Traductor.traduce("montserratTitle")}</h1>
            <p>{Traductor.traduce("montserratText")}</p>
            <img style={{width:"30rem", marginTop:"1rem"}} src={foto}/>
        </div>
    )
}