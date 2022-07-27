import {useState} from 'react';

function Cuadrat(){
    const [actiu, setActiu] = useState(true);
    return (
        <div onClick={() => setActiu(!actiu)} style={{width:"100px", height:"100px", backgroundColor: actiu ? "red" : "green"}}>
        </div>
    )
}

export default Cuadrat;