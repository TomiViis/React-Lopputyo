import { Button, Stack } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Viesti {
    id: string;
    otsikko: string;
    viesti: string;
    tila: string;
}

type Props = {
    viestiLista4: Viesti[];
    setViestiLista: (lista: Viesti[]) => void;
}

/**
 * PoistoScreen komponentti
 */
const PoistoScreen: FC<Props> = ({
    viestiLista4,
    setViestiLista
}) => {
    const navigoi = useNavigate();
    const { id } = useParams();
    const [ poistettavaAsia, setPoistettavaAsia ] = useState<Viesti>();

    // const poistettavaAsia = todoLista.find(asia => asia.id === id); Vanha propseihin perustuva tapa

    useEffect(() => {
        haePoistettavaAsia();
    }, [])

    /**
     * Hakee poistettavan asian palvelimelta
     */
    const haePoistettavaAsia = async () => {
        try {
            const response = await fetch(`/foorumi4/${id}`);
            const data = await response.json();

            setPoistettavaAsia(data);
        } catch (error: any) {
            console.error(error);
        }
    }

    /**
   * Poistaa asian listalta
   * Vanha tapa
   */
    /*const kasittelePoisto = (id: string) => {
        const uusiLista = todoLista.filter(asia => asia.id !== id);

        setViestiLista(uusiLista);
        alert("Poisto onnistui!")
        navigoi("/");
    }*/

    const kasittelePoisto = async (id: string) => {
        try {
            await fetch(`/foorumi4/${id}`, {
                method: "DELETE"
            })
            navigoi("/kategoriat/videopelit");
        } catch (error) {
            console.log(JSON.stringify(error));
        }
    }

    return (
        <>
            <Stack style={{border: "5px solid black", backgroundColor: "white", width: "960px", textAlign: "center", alignItems: "center"}}>
            <h1>Poistetaanko viesti otsikolla {poistettavaAsia && poistettavaAsia.otsikko} ?</h1>
            <Button style={{scale: "1", width: "200px", marginLeft: "10px", marginBottom: "10px", border: "4px solid black"}} variant="contained" color="success" onClick={() => id && kasittelePoisto(id)}>Poistetaan vaan</Button>
            <Button style={{scale: "1", width: "200px", marginLeft: "10px", marginBottom: "10px", border: "4px solid black"}} variant="contained" color="error" onClick={() => navigoi("/kategoriat/videopelit")}>Peruuta</Button>
        </Stack>
        </>
    )
}

export default PoistoScreen;