import { Box, Container, FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import React, { FC } from 'react';
import Footer from "./Footer";
import Lomake from "./Lomake";
import Taulu from "./YhteydenottoTaulu";

interface LomakeData {
  etunimi: string;
  sukunimi: string;
  puhelinnumero: number | null;
  sahkoposti: string;
  otsikko: string;
  viesti: string;
}

const Yhteydenotto: FC = () => {
  const [ naytaLomake, setNaytaLomake ] = React.useState(true);
  const [ henkiloLista, setHenkilolista ] = React.useState<LomakeData[]>([])
  const [ lomakeData, setLomakeData ] = React.useState<LomakeData>({

    etunimi: "",
    sukunimi: "",
    puhelinnumero: null,
    sahkoposti: "",
    otsikko: "",
    viesti: ""
  });

  const kasitteleNaytaLomakeMuutos = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNaytaLomake(event.target.checked)
  }

  const kasitteleMuutos = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setLomakeData({ ...lomakeData, [name]: value });
  }

  const kasitteleLomakkeenLahetys = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!lomakeData) {
      return;
    }

    let uusiHenkilo = {
      etunimi: lomakeData.etunimi,
      sukunimi: lomakeData.sukunimi,
      puhelinnumero: lomakeData.puhelinnumero,
      sahkoposti: lomakeData.sahkoposti,
      otsikko: lomakeData.otsikko,
      viesti: lomakeData.viesti
    }

    setHenkilolista([ ...henkiloLista, uusiHenkilo ]);
    setNaytaLomake(false);
  }

  const renderVipu = () => {
    return (
      <FormControlLabel style={{border: "4px solid blue", marginLeft: "4px", width: "180px", backgroundColor: "white"}}
        control= {
          <Switch style={{color: "white", scale: "1.2"}}
            checked={ naytaLomake }
            onChange={ kasitteleNaytaLomakeMuutos }
          />
        }
        label={ "Näytä lähetetyt lomakkeet" }
      />
    )
  }

  
  return (
    
    
    <Container
    
      
        sx={{
          backgroundColor: "lightblue",
          paddingRight: 1.5,
          paddingLeft: 1.5,
          marginTop: "20px",
          border: "3px solid blue"
        }}
        
      >
        <Typography variant='h3' style={{textDecoration: "underline", marginBottom: "10px", textAlign: "center", border: "5px solid blue", marginTop: "10px",  height: "100px", background: "white"}} >Yhteydenotto</Typography>
         { renderVipu() }
        
        <Stack sx={{ backgroundColor: "white", minHeight: "600px", border: "3px solid blue", marginTop: "10px" }}>
          <Box sx={{ padding: 2 }}>
            
           
            { naytaLomake === true
            ? <Lomake kasitteleMuutos={ kasitteleMuutos } kasitteleLomakkeenLahetys={ kasitteleLomakkeenLahetys } /> 
            : <Taulu henkiloLista={ henkiloLista }/> }
            
           
          </Box>
         
       
      </Stack>
      <Footer/>
    </Container>
  );
}

export default Yhteydenotto;
