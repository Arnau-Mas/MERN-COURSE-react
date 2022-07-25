
const Marco = ({src, borde, color, fondo}) => (
    <div>
        <img src={src} 
        style = {{
            padding:borde,
            backgroundColor:fondo,
            border:`3px solid ${color}`,
        }} />
    </div>
)

export default Marco;