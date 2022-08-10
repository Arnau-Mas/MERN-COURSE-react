import { useContext, useState, useEffect } from "react"
import ActiveContext from "./ActiveContext"
export const Card = ({num}) => {
    let data = useContext(ActiveContext);
    const [active, setActive] = useState(false)
    let activeArray = data.active;
    let tarjeta = {
        backgroundColor:"purple",
        width:"4rem",
        height:"4rem",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        fontSize:"2rem"
      }    
      function handleClick(){
        let newActiveArray = data.active;
        newActiveArray[num] = true;
        data.setActive(newActiveArray)
        setActive(!active);
        data.setTwoNumbers([...data.twoNumbers, num])
        console.log(data)
      }
      useEffect(() => {
        activeArray = data.active;
      }, [active])
      
  return (
    <div onClick={() => handleClick()} style={tarjeta}>{activeArray[num] ? "A" : ""}</div>
  )
}
