import { ThumbDown } from "@mui/icons-material";
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
    viestiLista2: Viesti[];
    setViestiLista: (lista: Viesti[]) => void;
}

/**
 * TilaScreen komponentti
 */
const TilaScreen: FC<Props> = ({
    viestiLista2,
    setViestiLista
}) => {
    const navigoi = useNavigate()
    const { id } = useParams();
    const [ uusiTila, setUusiTila ] = useState<string>("Tekemättä")
    const [ muokattavaAsia, setMuokattavaAsia ] = useState<Viesti>()

    useEffect(() => {
        haeMuokattavaAsia();
    }, [])

    const haeMuokattavaAsia = async () => {
        try {
            const response = await fetch(`/foorumi2/${id}`);
            const data = await response.json();

            setMuokattavaAsia(data);
        } catch (error: any) {
            console.error(error);
        }
    }

    const kasitteleTilanMuutos = async (id: string) => {
        if(!muokattavaAsia) {
            return;
        }
        try {
            await fetch(`/foorumi2/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    otsikko: muokattavaAsia.otsikko,
                    viesti: muokattavaAsia.viesti,
                    tila: uusiTila
                })
            });
            navigoi("/kategoriat/tietokoneet");
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <Stack style={{border: "5px solid black", backgroundColor: "white", width: "960px", textAlign: "center", alignItems: "center"}}>
            <Button style={{color: "red", border: "4px solid black", marginTop: "10px", width: "200px", fontSize:"18px"}} onClick={() => setUusiTila("Älä tykkää")}disabled={muokattavaAsia?.tila === "Älä tykkää"}>  <ThumbDown ></ThumbDown>Älä tykkää</Button >
            <Button style={{color: "blue", border: "4px solid black", marginTop: "10px", width: "200px", fontSize:"18px"}} onClick={() => setUusiTila("Tykkää")}disabled={muokattavaAsia?.tila === "Tykkää"}>  <ThumbDown ></ThumbDown>Tykkää</Button >
            <Button style={{width: "300px", marginLeft: "10px", marginBottom: "10px", border: "4px solid black", marginTop: "10px"}} variant="contained" color="success" onClick={() =>  id && kasitteleTilanMuutos(id)}>Tallenna</Button>
            <Button style={{width: "300px", marginLeft: "10px", marginBottom: "10px", border: "4px solid black"}} variant="contained" color="error" onClick={() => navigoi("/kategoriat/tietokoneet")}>Peruuta</Button>
        </Stack>
    )
}


export default TilaScreen;