import CIUTATS from "./ciutats.json";

function LlistatCiutats({nom = ""}){
        let ciutatsFiltrades = CIUTATS.filter(ciutat => ciutat.municipi.toUpperCase().startsWith(nom.toUpperCase()))
        return (
            <ul>
                {ciutatsFiltrades.map(ciutat => <li key={ciutat.municipi}>{ciutat.municipi}</li> )}
            </ul>
        )
    }

export default LlistatCiutats;