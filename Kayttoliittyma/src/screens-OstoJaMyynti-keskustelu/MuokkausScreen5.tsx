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
    viestiLista5: Viesti[];
    setViestiLista: (lista: Viesti[]) => void;
}

/**
 * MuokkausScreen komponentti
 */
const MuokkausScreen: FC<Props> = ({
    viestiLista5,
    setViestiLista
}) => {
    const navigoi = useNavigate()
    const { id } = useParams();
    // const muokattavaAsia = viestiLista.find(asia => asia.id === id);
    const [ muokattavaAsia, setMuokattavaAsia ] = useState<Viesti>()
    const [ uusiOtsikko, setUusiOtsikko ] = useState<string>("")
    const [ uusiViesti, setUusiViesti ] = useState<string>("")

    useEffect(() => {
        haeMuokattavaAsia();
    }, [])

    /**
     * Hakee poistettavan asian palvelimelta
     */
    const haeMuokattavaAsia = async () => {
        try {
            const response = await fetch(`/foorumi5/${id}`);
            const data = await response.json();

            setMuokattavaAsia(data);
        } catch (error: any) {
            console.error(error);
        }
    }

    const kasitteleMuokkaus = async (id: string) => {
        if(!uusiOtsikko || !muokattavaAsia) {
            return;
        }
        try {
            await fetch(`/foorumi5/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    otsikko: uusiOtsikko,
                    viesti: uusiViesti,
                    tila: muokattavaAsia.tila
                })
            });
            navigoi("/kategoriat/ostojamyynti");
        } catch (error) {
            console.log(error);
        }
    }
    
    /**
    * Muokkaa asiaa
    * Vanha tapa (props)
    */
    /*const kasitteleMuokkaus = (id: string) => {
        const uusiLista = viestiLista.map(asia => {
            if(asia.id === id && uusiOtsikko !== "") {
                asia.otsikko = uusiOtsikko;
            }

            return asia;
        })
        setViestiLista(uusiLista)
        alert("Muokkaus onnistui!");
        navigoi("/");
    }*/

    return (
        <Stack fontFamily={"Roboto"} style={{border: "5px solid blue", backgroundColor: "white", width: "960px", textAlign: "center", alignItems: "center"}}>
        
            <h1 >Muokkaa otsikkoa:</h1>
            <textarea style={{resize: "none", margin:5, backgroundColor: "white", color: "black", fontSize: "50px", border: "3px solid black", height: "60px", width: "800px"}} id="otsikko" defaultValue={ muokattavaAsia?.otsikko } onChange={ (event) => setUusiOtsikko(event.target.value) } />
            <br/>
            <h1>Muokkaa viestiä:</h1><br></br>
            <textarea style={{resize: "none", margin:5, backgroundColor: "white", opacity: 1, color: "black", fontSize: "35px", border: "3px solid black", height: "150px", width: "800px"}} id="viesti" defaultValue={ muokattavaAsia?.viesti } onChange={ (event) => setUusiViesti(event.target.value) } />
            
            <Button style={{scale: "1", width: "200px", marginLeft: "10px", marginBottom: "10px", border: "4px solid black", marginTop: "15px"}} variant="contained" color="success" onClick={() => id && kasitteleMuokkaus(id)}>Tallenna</Button>
            <Button  style={{scale: "1", width: "200px", marginLeft: "10px", marginBottom: "10px", border: "4px solid black"}} variant="contained" color="error" onClick={() => navigoi("/kategoriat/ostojamyynti")}>Peruuta</Button>
        
        </Stack>
    )
}

export default MuokkausScreen;