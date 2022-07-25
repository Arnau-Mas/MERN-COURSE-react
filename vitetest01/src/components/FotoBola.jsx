const FotoBola = ({src, radio}) => (
    <div>
        <img
            style={{
                borderRadius:radio
            }}
            src={src}
            alt=""
        />
    </div>
)

export default FotoBola;