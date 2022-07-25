const BolaBingo = ({talla, margen, fondo, color, num}) => (
    <div
        style={{
            height: talla,
            width: talla,
            backgroundColor: fondo,
            margin: margen,
            color:color,
            borderRadius: "50%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}>
        <p>{num}</p>
    </div>
)

export default BolaBingo;