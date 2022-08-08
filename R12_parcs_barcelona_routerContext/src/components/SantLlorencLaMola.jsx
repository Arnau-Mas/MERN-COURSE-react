import foto from "../assets/santllorenclamola.jpg"
import { useContext } from "react"
import ComponentTraductor from "./ComponentTraductor"

export function SantLlorencLaMola(){
    const Traductor = useContext(ComponentTraductor)
    return (
        <div>
            <h1>{Traductor.traduce("santLlorencLaMolaTitle")}</h1>
            <p style={{marginTop:"1rem"}}>{Traductor.traduce("santLlorencLaMolaText")}</p>
            <img style={{width:"30rem", marginTop:"1rem"}} src={foto}/>
        </div>
    )
}