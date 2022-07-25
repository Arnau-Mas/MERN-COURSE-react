import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from '@fortawesome/free-solid-svg-icons';

const Mosca = ({ color, talla, margen }) => (
    <div
        style={{
            height: talla,
            width: talla,
            color: color,
            position: "absolute",
            top: margen,
            right: margen,
            display: "flex",
            justifyContent: "flex-end",
        }}
    >
        <FontAwesomeIcon icon={faBug} />
    </div>
);

export default Mosca;