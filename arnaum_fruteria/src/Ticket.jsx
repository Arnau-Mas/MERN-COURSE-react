export function Ticket({cistella, setCistella}){
    function treureProducte(producteTreure){
        let index = cistella.indexOf(producte => producte.nom === producteTreure.nom);
        let cistellaArray = [...cistella];
        cistellaArray.splice(index);
        setCistella(cistellaArray);
    }
    return (
        <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
        {cistella.map((producte =>
            <div key={producte.id} style={{backgroundColor:"green", display:"flex", gap:"1rem", color:"white", justifyContent:"space-between", padding:"0rem 1rem"}}>
                <div>
                <p>{producte.nom} </p>
                <p>{producte.quantitat}u x {producte.preu}€/u = {(producte.quantitat*producte.preu).toFixed(2)}€</p>
                </div>
                <div style={{marginTop:"1rem"}}>
                <button onClick={() => treureProducte(producte)}>Treure</button>
                </div>
            </div>))}
        <p style={{border:"1px solid black", padding:"1rem"}}>Total: {cistella.reduce((prev, curr) => prev+(curr.preu*curr.quantitat), 0).toFixed(2)} €</p>
    </div>
    )
}