import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

export function BicingTable(){
    const [llista, setLlista] = useState([]);
    console.log(llista)
    useEffect(() => {
      fetch("https://api.citybik.es/v2/networks/bicing")
        .then(response => response.json())
        .then(data => setLlista(data.network.stations))
    }, [])
    
    return (
        <Table className='w-75 mx-auto mt-5' size='sm' striped bordered hover>
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
            {llista.map(estacio => (
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
    )
}