import { useState } from "react"

export function Sorteo(){
    const [bolas, setBolas] = useState([12,22]);
    const [novaBola, setNovaBola] = useState("");
    function afegirBola(){
        if(novaBola){
            setBolas([...bolas, novaBola].sort((a,b) => {
                if(a<b){
                    return -1;
                }
                if(a>b){
                    return 1
                }
                if(a===b){
                    return 0;
                }
            }));
            setNovaBola("");
        }
        
    }
    return (
        <div style={{marginTop:"1rem", width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div>
                <input style={{backgroundColor:"white", height:"2rem", fontSize:"24px", border:"1px solid black", borderRadius:"0.2rem"}} onChange={(e) => setNovaBola(e.target.value)} type="number" name="inputBola" id="inputBola" value={novaBola} placeholder="Introdueix un número" />
                <button style={{height:"2.3rem", width:"10rem", fontSize:"24px", border:"1px solid black", borderRadius:"0.2rem"}} onClick={afegirBola}>Afegir</button>
            </div>
            <div style={{display:"flex", marginTop:"1rem", gap:"1rem"}}>
                {bolas.map(bola => <div key={bola} style={{fontSize:"50px", width:"50px", height:"50px", backgroundColor:"red", borderRadius:"50%", color:"white", display:"flex", justifyContent:"center", alignItems:"center", padding:"2rem"}}>{bola}</div>)}
            </div>
        </div>
    )
}