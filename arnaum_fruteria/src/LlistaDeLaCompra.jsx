import { useState } from "react";
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
    function afegirProducte(producteAfegit){
        if(cistella.length>0){
            let cistellaArray = cistella.map(producte => {
                if(producte.id == producteAfegit.id){
                    console.log("matching de producte")
                    if(producte.quantitat){
                        return {...producte, quantitat:producte.quantitat+1}
                    }else{
                        return {...producte, quantitat:1}
                    }
                }else{
                    console.log("no matching")
                    return producte
                }
            })
            setCistella([...cistellaArray])
        }
        else{
            setCistella([producteAfegit])
        }
    }
    return (
        <div>
            <h1>Llista de la compra</h1>
            <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
                {productes.map(producte => <div key={producte.id} style={{display:"flex",alignItems:"center", justifyContent:"space-between", padding:"0 1rem", backgroundColor:"green", width:"15rem", height:"3rem", fontSize:"24px", color:"white"}}>{producte.nom}({producte.preu}€/u)<button onClick={() => afegirProducte(producte)}>Afegir</button></div>)}
            </div>
            <div>
                {cistella.map((producte =><div>{producte.nom}, {producte.quantitat}</div>))}
                <div>Total:</div>
            </div>
        </div>
    )
}