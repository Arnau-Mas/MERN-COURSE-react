import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { MapaEstacions } from './MapaEstacions';

export function BicingTable(){
    const [llista, setLlista] = useState([]);
    const [minBicis, setMinBicis] = useState(0);
    console.log(llista)
    useEffect(() => {
      fetch("https://api.citybik.es/v2/networks/bicing")
        .then(response => response.json())
        .then(data => setLlista(data.network.stations))
    }, [])
    
    return (
        <div className='container mt-4 mb-5'>  
            <input onChange={(e) => setMinBicis(e.target.value)} className='w-25' type="text" name="minBikes" id="minBikes" placeholder='Mínim de bicicletes disponibles' />
            <Table className='w-75 mt-3' size='sm' striped bordered hover>
            <thead>
            <tr>
                <th>Estación</th>
                <th>Bicis disponibles</th>
                <th>Slots vacíos</th>
                <th>Lat</th>
                <th>Long</th>
            </tr>
            </thead>
            <tbody>
                {llista.filter(estacio => estacio.free_bikes >= minBicis).map(estacio => (
                    <tr key={estacio.id}>
                        <td>{estacio.name}</td>
                        <td>{estacio.free_bikes}</td>
                        <td>{estacio.empty_slots}</td>
                        <td>{estacio.latitude}</td>
                        <td>{estacio.longitude}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <MapaEstacions data={llista.filter(estacio => estacio.free_bikes >= minBicis)}/>
      </div>
    )
}