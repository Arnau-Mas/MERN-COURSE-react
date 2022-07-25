const Capital = ({ nom }) => (
    <div>
        <p style={{ fontSize: "200px", margin: 0, padding: 0 }}>
            {nom[0]}
        </p>
        <p style={{ fontSize: "30px", margin: 0, padding: 0 }}>
            {nom}
        </p>
    </div>
);

export default Capital;