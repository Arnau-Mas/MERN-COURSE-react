import { useState } from "react";

function TresNums(){

    const [tresNums, setTresNums] = useState([
        {
            id:1,
            num: Math.floor ( Math.random() * 50 )
        }, 
        {
            id:2,
            num: Math.floor ( Math.random() * 50 )
        }, 
        {
            id:3,
            num: Math.floor ( Math.random() * 50 )
        }])

    let cercle = {
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        backgroundColor:"aquamarine",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"2rem"
    }

    function calculaTresNum(){
        setTresNums(tresNums.map(tresN => ({id:tresN.id, num:Math.floor ( Math.random() * 50 )})))
    }

   return (
    <div style={{display:"flex"}}>
        {tresNums.map(tresNum => <div key={tresNum.id} style={cercle}>{tresNum.num}</div>)}
        <button onClick={calculaTresNum}>Calcula</button>
    </div>
   )
}

export default TresNums;