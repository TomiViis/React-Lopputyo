import { Stack } from "@mui/material";

/**
 * Komponentin ominaisuudet
 */
interface Props {
    children: React.ReactNode;
}

/**
 * Lista komponentti
 */
const Lista: React.FC<Props> = ({ children }) => {
    return (
        <ul style={{ width: "920px", border: "5px solid black", margin: "0 auto", borderRadius: "20px", marginTop: "2px", backgroundColor: "white"}}>
            { children }
        </ul>
    )
}

export default Lista;