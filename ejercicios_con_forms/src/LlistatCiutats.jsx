import CIUTATS from "./ciutats.json";

function LlistatCiutats({nom}){
    if(nom){
        let nomInicial = [...nom];
        nomInicial[0] = nomInicial[0].toUpperCase();
        nomInicial = nomInicial.join("");
        let ciutatsFiltrades = CIUTATS.filter(ciutat => ciutat.municipi.startsWith(nomInicial))
        return (
            <ul>
                {ciutatsFiltrades.map(ciutat => <li key={ciutat.municipi}>{ciutat.municipi}</li> )}
            </ul>
        )
    }
    return (
        <ul>
            {CIUTATS.map(ciutat => <li key={ciutat.municipi}>{ciutat.municipi}</li> )}
        </ul>
    )
}

export default LlistatCiutats;