import { Button, Stack } from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";



const Navigointi: FC = () => {
  const navigoi = useNavigate();

  return (

    <Stack direction="row" justifyContent="space-evenly"  sx={{marginTop: 0.2, backgroundColor: "white"}} alignItems="center" textAlign={"center"} height={"50px"} border={ "5px solid blue"} width={"960px"}  color={"black"}>


        <Button style={{scale: "1.1", width: "200px", border: "3px solid black"}} variant="contained"color="success"onClick={() => navigoi("/")}>Etusivu</Button>
        <Button style={{scale: "1.1", width: "200px", border: "3px solid black"}} variant="contained" onClick={() => navigoi("/kategoriat")}>kategoriat</Button>
        <Button style={{scale: "1.1", width: "200px", border: "3px solid black"}} variant="contained"color="error"onClick={() => navigoi("/yhteydenotto")}>Yhteydenotto</Button>

    </Stack>
  );
};

export default Navigointi;