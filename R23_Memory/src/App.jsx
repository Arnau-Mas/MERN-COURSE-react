import { useEffect, useRef, useState } from "react"
import ActiveContext from "./ActiveContext";
import { Card } from "./Card";

function App() {
  const [active, setActive] = useState([]);
  const [numbers, setNumber] = useState([])
  const [twoNumbers, setTwoNumbers] = useState([])
  
  useEffect(() => {
    let activeArray= [];
    let numbersArray = [];
    for(let i = 0; i<20; i++){
    activeArray[i] = false;
    numbersArray[i] = i;
    }
    setActive(activeArray)
    setNumber(numbersArray)
  }, [])

  useEffect(() => {
    if(twoNumbers.length===2){
      if(twoNumbers[0] === twoNumbers[1]){
        console.log("encertat")
      }
    }
  })

  return (
    <ActiveContext.Provider value={{active, setActive, twoNumbers, setTwoNumbers}}>
    <div style={{display:"flex", width:"25rem", gap:"0.5rem", flexWrap:"wrap"}}>
      {
        numbers.map(number => <Card key={number} num={number} />)
      }
    </div>
    </ActiveContext.Provider>
  )
}

export default App
