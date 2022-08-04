import { useState } from "react";
import Productes from "./Productes";
import { Ticket } from "./Ticket";
const productes = [
    {
        "id" : 1,
        "nom" : "Plàtan",
        "preu" : 0.5
    },
    {
        "id" : 2,
        "nom" : "Poma",
        "preu": 0.8
    },
    {
        "id" : 3,
        "nom" : "Pinya",
        "preu": 5
    },
    {
        "id" : 4,
        "nom" : "Meló",
        "preu": 6
    },
];
export function LlistaDeLaCompra(){
    const [cistella, setCistella] = useState([]);

    return (
        <div>
            <h1>Llista de la compra</h1>
            <div style={{display:"flex", gap:"2rem"}}>
                <Productes productes={productes} cistella={cistella} afegirCistella={setCistella} />
                <Ticket cistella={cistella} setCistella={setCistella}/>
            </div>
        </div>
    )
}