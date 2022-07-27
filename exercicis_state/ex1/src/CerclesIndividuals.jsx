
import {useState} from 'react'

function Cercles(){
    const [taronges, setTaronges] = useState([]);
    
    function canviColor(number){
        let index = taronges.indexOf(number);
        if(index==-1){
            setTaronges([...taronges, number]);
        }else{
            setTaronges(taronges.filter(taronja => taronja!==number));
        }
    }
    let cercle = {
        height: "100px",
        width: "100px",
        borderRadius: "50%",
    }
    return (
        <div style={{display:"flex", gap:"1rem"}}>
            <div onClick={() => canviColor(1)} style={{...cercle, backgroundColor: taronges.includes(1) ? "orange" : "grey"}}></div>
            <div onClick={() => canviColor(2)} style={{...cercle,  backgroundColor: taronges.includes(2) ? "orange" : "grey"}}></div>
            <div onClick={() => canviColor(3)}  style={{...cercle,  backgroundColor: taronges.includes(3) ? "orange" : "grey"}}></div>
            <div onClick={() => canviColor(4)}  style={{...cercle,  backgroundColor: taronges.includes(4) ? "orange" : "grey"}}></div>
            <div onClick={() => canviColor(5)}  style={{...cercle,  backgroundColor: taronges.includes(5) ? "orange" : "grey"}}></div>
        </div>
    )
}

export default Cercles;