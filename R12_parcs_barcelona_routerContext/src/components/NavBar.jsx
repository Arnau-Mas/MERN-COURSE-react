import "./NavBar.css"
import {Link} from "react-router-dom";
export function NavBar(){
    return (
        <nav>
            <ul>
                <li><Link to="/collserola">Collserola</Link></li>
                <li><Link to="/deltallobregat">Delta del Llobregat</Link></li>
                <li><Link to="/montserrat">Montserrat</Link></li>
                <li><Link to="/pantavallvidrera">Pantà de Vallvidrera</Link></li>
                <li><Link to="/parcgarraf">Parc del Garraf</Link></li>
                <li><Link to="/parcmontseny">Parc Natural del Montseny</Link></li>
                <li><Link to="/pedraforca">Pedraforca</Link></li>
                <li><Link to="/santllorenclamola">Sant Llorenç i La Mola</Link></li>
            </ul>
        </nav>
    )
}