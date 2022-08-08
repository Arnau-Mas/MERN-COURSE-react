import foto from "../assets/pantavallvidrera.jpg"
import { useContext } from "react"
import ComponentTraductor from "./ComponentTraductor"

export function PantaVallvidrera(){
    const Traductor = useContext(ComponentTraductor)
    return (
        <div>
            <h1>{Traductor.traduce("pantaVallvidreraTitle")}</h1>
            <p>{Traductor.traduce("pantaVallvidreraText")}</p>
            <img style={{width:"30rem", marginTop:"1rem"}} src={foto}/>
        </div>
    )
}