import { useState } from "react";

function TresNums(){

    const [tresNums, setTresNums] = useState([])

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

    }

   return (
    <div style={{display:"flex"}}>
        <div style={cercle}>{tresNums[1]}</div>
        <div style={cercle}>{tresNums[2]}</div>
        <div style={cercle}>{tresNums[3]}</div>
        <button onClick={calculaTresNum}>Calcula</button>
    </div>
   )
}

export default TresNums;