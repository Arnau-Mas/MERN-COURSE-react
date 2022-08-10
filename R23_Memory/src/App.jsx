import { useEffect, useRef, useState } from "react"
import ActiveContext from "./ActiveContext";
import { Card } from "./Card";

function App() {
  const [active, setActive] = useState([]);
  const [numbers, setNumber] = useState([])
  
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

  return (
    <ActiveContext.Provider value={{active, setActive}}>
    <div style={{display:"flex", width:"25rem", gap:"0.5rem", flexWrap:"wrap"}}>
      {
        numbers.map(number => <Card key={number} num={number} />)
      }
    </div>
    </ActiveContext.Provider>
  )
}

export default App
