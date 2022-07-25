const Gato = ({ ancho, alto, nombre }) => (
    <div
        style={{
            border: "1px solid blue",
            width: ancho,
            height: alto,
        }}
    >
        <img
            style={{
                height: "85%",
                width: "100%",
                margin: 0,
                padding: 0,
            }}
            src="https://placekitten.com/200/130"
            alt=""
        />
        <p
            style={{
                margin: 0,
                padding: 0,
                textAlign: "center",
            }}
        >
            {nombre}
        </p>
    </div>
);

export default Gato;