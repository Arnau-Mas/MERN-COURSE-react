import "./NavBar.css"
import ComponentTraductor from "./ComponentTraductor";
import {Link} from "react-router-dom";
import { useContext } from "react";
export function NavBar(){
    const Traductor = useContext(ComponentTraductor);
    return (
        <nav>
            <ul>
                <li><Link to="/collserola">Collserola</Link></li>
                <li><Link to="/deltallobregat">Delta del Llobregat</Link></li>
                <li><Link to="/montserrat">Montserrat</Link></li>
                <li><Link to="/pantavallvidrera">{Traductor.traduce("pantaVallvidreraTitle")}</Link></li>
                <li><Link to="/parcgarraf">{Traductor.traduce("parcGarrafTitle")}</Link></li>
                <li><Link to="/parcmontseny">{Traductor.traduce("parcMontsenyTitle")}</Link></li>
                <li><Link to="/pedraforca">Pedraforca</Link></li>
                <li><Link to="/santllorenclamola">{Traductor.traduce("santLlorencLaMolaTitle")}</Link></li>
            </ul>
        </nav>
    )
}