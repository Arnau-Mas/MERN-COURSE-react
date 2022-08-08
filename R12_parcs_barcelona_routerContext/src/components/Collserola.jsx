import foto from "../assets/collserola.jpg"
import { useContext } from "react"
import ComponentTraductor from "./ComponentTraductor"

export function Collserola(){
    const Traductor = useContext(ComponentTraductor)
    return (
        <div>
            <h1>Collserola</h1>
            <p style={{marginTop:"1rem"}}>{Traductor.traduce("collserolaText")}</p>
            <img style={{width:"30rem", marginTop:"1rem"}} src={foto}/>
        </div>
    )
}