const CuadradoB = ({ talla, margen, grosor, color }) => (
    //en les funcions fletxa, al ser return implícit (que no escrius return), poses directament les () per agrupar el q no et cap en una línia. En el cas del component Main, allà sí que s'esta fent return perquè és una funció normal, no és fletxa.
    <div
        style={{
            height: talla,
            width: talla,
            margin: margen,
            border: `${grosor} solid black`,
            backgroundColor: color,
        }}
    ></div>
);

export default CuadradoB;