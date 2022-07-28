import { useState } from "react";

function Bola({pass, valor, funcio}){

    const [actiu, setActiu] = useState(false)
    
    function actualitzaPass(){
        let password = [...pass];

        if(password[valor]==0){
            password[valor]=1;
            setActiu(true)
            funcio([...password])
        }else{
            password[valor]=0;
            setActiu(false)
            funcio([...password])
        }
    }

    return (
        <div onClick={actualitzaPass} style={{
            height:"100px",
            width:"100px",
            backgroundColor: actiu ? "orange" : "grey",
            borderRadius:"50%"
        }}></div>
    )
}

export default Bola;