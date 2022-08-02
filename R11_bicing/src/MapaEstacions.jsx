import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'


export function MapaEstacions({data}){
    console.log("***********++++")
    return (
        <MapContainer style={{height:"350px", width:"75%"}} center={[41.39, 2.17]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map(estacio => (
            <Marker key={estacio.name} position={[estacio.latitude, estacio.longitude]}>
            <Popup>
                {estacio.name}
            </Popup>
        </Marker>
        ))}
        </MapContainer>
    )
}