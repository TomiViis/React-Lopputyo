import { Button } from "@mui/material";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

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
 * LuontiScreen komponentti
 */
const LuontiScreen: FC<Props> = ({
    viestiLista2,
    setViestiLista
}) => {
    const navigoi = useNavigate()
    const [ uusiOtsikko, setUusiOtsikko ] = useState<string>("")
    const [ uusiViesti, setUusiViesti ] = useState<string>("")
    
    /**
    * Luo asia
    */
    /*const kasitteleLuonti = () => {
        if (!uusiOtsikko) {
            return;
        }
        const onDuplikaatti = todoLista.find(asia => asia.otsikko === uusiOtsikko);
        if (onDuplikaatti) {
            alert("Yritä keksiä uniikki otsikko.");
        } else {
            const uusiLista = [...todoLista];
            const uusiAsia: Viesti = {id: uuid(), otsikko: uusiOtsikko, tila: "Tekemättä"}
            uusiLista.push(uusiAsia);
            setViestiLista(uusiLista)
            alert("Uuden asian lisäys onnistui!")
            navigoi("/");
        }
    }*/

    const kasitteleLuonti = async () => {
        if (!uusiOtsikko || !uusiViesti) {
            return;
        }
    
        try {
            await fetch("/foorumi2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ otsikko: uusiOtsikko, viesti: uusiViesti })
                
            });
    
            navigoi("/kategoriat/tietokoneet");
        } catch (error: any) {
            console.log("Virhe luotaessa uutta asiaa")
        }
    }

    return (
        <div>
            <label style={{fontSize: "30px", fontFamily: "Roboto"}} htmlFor="otsikko">Otsikko:</label><br></br>
            <input style={{width: "600px", border: "2px solid black", height: "30px", fontSize: "25px", fontFamily: "Roboto"}} id="otsikko" onChange={ (event) => setUusiOtsikko(event.target.value) } />
            <br/>
            <br/>
            <label style={{fontSize: "25px", fontFamily: "Roboto"}} htmlFor="viesti">Viesti:</label><br></br>
            <textarea style={{resize: "none" , margin:5, backgroundColor: "white", opacity: 1, color: "black", fontSize: "25px", width: "800px", height: "150px", border: "3px solid black", fontFamily: "Roboto"}} id="viesti" onChange={ (event) => setUusiViesti(event.target.value) } />
            
            
            <br/>
            <br/>
            <Button style={{scale: "1", width: "200px", marginLeft: "10px", marginBottom: "10px", border: "4px solid black"}} variant="contained" onClick={ async ()=>{ await kasitteleLuonti();  window.location.reload();} }>Lähetä viesti</Button>
            
        </div>
    )
}

export default LuontiScreen;