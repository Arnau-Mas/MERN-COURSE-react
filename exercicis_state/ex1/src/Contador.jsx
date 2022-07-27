import {useState} from 'react';

function Contador(){
    const [contador, setContador] = useState(0);
    function increase(){
        if(contador<=9){
            setContador(contador+1);
        }
        console.log("increaseando")
    }

    function decrease(){
        if(contador>=1){
            setContador(contador-1);
        }
    }
    return (
        <div style={{display:"flex"}}>
            <button style={{padding:"0rem 1rem"}} onClick={decrease}>-</button>
            <p style={{fontSize:"2rem"}}>{contador}</p>
            <button style={{padding:"0rem 1rem"}} onClick={increase}>+</button>
        </div>
    )
}

export default Contador;