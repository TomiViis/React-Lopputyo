import { Box, Container, Stack, Typography } from "@mui/material";
import { FC, useState, useEffect } from "react";
import Footer from "./Footer";
import Clock from "react-clock"
import 'react-clock/dist/Clock.css'


const Etusivu: FC = () => {

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);




  return (
    <Container


        sx={{
          backgroundColor: "lightblue",
          paddingRight: 1.5,
          paddingLeft: 1.5,
          marginTop: "20px",
          border: "3px solid blue",
          width: "960px"
        }}

      >

        <Stack>
          <Box sx={{ marginTop: "10px" }}>
            <Stack textAlign={"center"}>
              <Typography variant="h3" style={{ fontFamily: "Roboto", color: "black", fontSize: "50px", textDecoration: "underline", border:"5px solid blue",  height: "100px", backgroundColor: "white"}}>Etusivu</Typography>
            </Stack>

            <Stack fontFamily={"Roboto"} style={{border: "5px solid blue", marginTop: "2px" , backgroundColor: "white", marginBottom: "2px", width: "896px", height: "700px", fontSize: "40px"}}>
              <p style={{marginLeft: "10px"}}>Tervetuloa anonyymille keskustelufoorumille, jossa voit vapaasti keskustella eri aiheista.</p>
              <Stack alignItems={"center"}>
              <Clock size={"500px"} renderNumbers={true} value={value} />

              </Stack>

            </Stack>



          </Box>
        </Stack>

      <Footer/>
    </Container>

  );
}

export default Etusivu;