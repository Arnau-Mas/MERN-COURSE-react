import { useContext } from "react"
import ComponentTraductor from "./ComponentTraductor"

export function Home(){
    const Traductor = useContext(ComponentTraductor)
    return (
        <div style={{width:"50rem", display:"flex", flexDirection:"column", gap:"2rem"}}>
            <h1>{Traductor.traduce("homeTitle")}</h1>
            <p>{Traductor.traduce("homeText")}</p>
        </div>
    )
}