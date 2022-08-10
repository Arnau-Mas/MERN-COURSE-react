import { useContext } from "react"
import ActiveContext from "./ActiveContext"
export const Card = ({num}) => {
    console.log("nou render")
    let data = useContext(ActiveContext)
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
        console.log(data)
      }
  return (
    <div onClick={() => handleClick()} style={tarjeta}>{activeArray[num] ? "A" : ""}</div>
  )
}
