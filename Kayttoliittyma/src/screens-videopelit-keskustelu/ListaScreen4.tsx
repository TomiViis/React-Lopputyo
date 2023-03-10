import { Button, Stack, TextField } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lista from "../components/lista";
import { ThumbUp, ThumbDown, Height } from "@mui/icons-material";
import LuontiScreen4 from "./LuontiScreen4";

interface Viesti {
    id: string;
    otsikko: string;
    viesti: string;
    tila: string;
}

type Props = {
    viestiLista4: Viesti[];
    
}

/**
 * ListaScreen komponentti
 */
const ListaScreen: FC<Props> = ({
    viestiLista4
}) => {
    const navigoi = useNavigate();
    const [ tehtavalista, setViestiLista ] = useState<Viesti[]>([]);

    useEffect(() => {
        haeLista();
    }, [])

    /**
     * Hakee tehtävälistan palvelimelta
     */
    const haeLista = async () => {
        try {
            const response = await fetch("/foorumi4");
            const data = await response.json();
            console.log(data);
            setViestiLista(data);
        } catch (error: any) {
            console.error(error);
        }
    }

    /**
     * Käsittele poistonapin klikkaus
     * @param id id
     */
    const kasittelePoistoNappi = (id: string) => {
        navigoi(`/poista4/${id}`)
    }

    /**
     * Käsittele muokkausnapin klikkaus
     * @param id id
     */
    const kasitteleMuokkaaNappi = (id: string) => {
        navigoi(`/muokkaa4/${id}`)
    }

    /**
     * Käsittele Onko tehty-tekstin klikkaus
     * @param id id
     */
    const kasitteleOnkoTehty = (id: string) => {
        navigoi(`/tila4/${id}`)
    }

    return (
        <>
        <Stack  fontFamily={"Roboto"} display={"inline-block"} border={"5px solid black"} width={"960px"} marginTop={"2px"} style={{backgroundColor: "white"}} textAlign={"center"}>
            <h1>Tervetuloa videopelit keskustelu sivulle</h1>
            <Button style={{scale: "1.1", width: "200px", marginLeft: "50px", marginBottom: "10px", border: "4px solid black"}} variant="contained" onClick={() => navigoi("/kategoriat")}>Palaa takaisin</Button>
        </Stack>
            <Lista>
                { tehtavalista.map(asia => {
                    return (
                        
                        <Stack
                            key={ asia.id }
                            style={{padding: "20px", border: "3px solid black",  marginTop:"10px", marginLeft:"2px", width:"830px", backgroundColor:"wheat"}}
                        >
                            <ul>
                                <p style={{margin:1, color: "purple", fontSize: "25px", border: "3px solid black", backgroundColor: "white", width: "746px"}}>Viestin lähettäjä: { asia.id }</p>
                            </ul>
                            
                            <h1 style={{margin:5, border: "3px solid black", backgroundColor: "white"}}>{ asia.otsikko }</h1>
                            <textarea disabled style={{resize: "none", margin:5, backgroundColor: "white", opacity: 1, color: "black", fontSize: "35px", border: "3px solid black", height: "300px"}} >{ asia.viesti }</textarea>
                            
                            <Button variant="contained" color="error" style={{scale: "1", width: "500px", marginLeft: "164px", marginBottom:"4px", marginTop: "12px"}} onClick={ () => kasittelePoistoNappi(asia.id) }>Poista</Button>
                            
                            <Button variant="contained" color="secondary" style={{scale: "1", width: "500px", marginLeft: "164px"}} onClick={ () => kasitteleMuokkaaNappi(asia.id) }>Muokkaa</Button>{ asia.tila === "Älä tykkää" ?<ThumbDown
                                    style={{ color: "red", cursor: "pointer", scale: "3", marginTop: "15px", marginLeft: "40px", marginBottom: "10px" }}
                                    onClick={ () => kasitteleOnkoTehty(asia.id) } 
                                    
                            /> :
                                <ThumbUp 
                                
                                    style={{ color: "blue", cursor: "pointer", scale: "3", marginTop: "15px", marginLeft: "40px", marginBottom: "10px" }}
                                    onClick={ () => kasitteleOnkoTehty(asia.id) } ></ThumbUp>
                                
                            }
                        </Stack>
                    )
                }) }
                <Stack style={{padding: "20px", border: "3px solid black",  marginTop:"10px", marginLeft:"2px", width:"830px", backgroundColor:"wheat", marginBottom: "10px"}}>
                <LuontiScreen4 viestiLista4={[]} setViestiLista={function (lista: Viesti[]): void {} }/>
                </Stack>
               
            </Lista>
            
        </>
    )
}

export default ListaScreen;
