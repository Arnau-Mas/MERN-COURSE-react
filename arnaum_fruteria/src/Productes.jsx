function Productes({productes, cistella, afegirCistella}) {
    let productStyle = {display:"flex", flexDirection:"column", gap:"1rem"}
    function afegirProducte(producteAfegit){
        
        if(!cistella.some(producte => producte.nom === producteAfegit.nom)){
            return afegirCistella([...cistella, {...producteAfegit, quantitat:1}])
        }
        
        let cistellaArray = cistella.map(producte => {
            if(producte.id === producteAfegit.id){
                    return {...producte, quantitat:producte.quantitat+1}
            }
            return producte
        })
    
        afegirCistella([...cistellaArray])
    }

  return (
    <div style={productStyle}>
        {productes.map(producte => 
            <div key={producte.id} style={{display:"flex",alignItems:"center", justifyContent:"space-between", padding:"0 1rem", backgroundColor:"#5CB01F", width:"15rem", height:"3rem", fontSize:"24px", color:"white"}}>
                <p>{producte.nom}({producte.preu}€/u)</p>
                <button onClick={() => afegirProducte(producte)}>Afegir</button>
            </div>)}
    </div>
  )
}

export default Productes