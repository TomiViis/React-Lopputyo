import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate} from "react-router-dom";
import kuva from 'D:\React-Lopputyo\Kayttoliittyma\public\kuvat\kuva1.jpg'
import { border, margin, width } from "@mui/system";
import Footer from "./Footer";


const Kategoriat: FC = () => {

  const navigoi = useNavigate();

  

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
        
        <Stack  >
          <Box sx={{ marginTop: "10px" }}>

            <Stack textAlign={"center"}>
            <Typography variant="h3" style={{ fontFamily: "Roboto", color: "black", fontSize: "50px", textDecoration: "underline", border:"5px solid blue",  height: "100px", backgroundColor: "white"}}>Kategoriat</Typography>
            </Stack>
            
           <Stack fontFamily={"Roboto"} style={{border: "5px solid blue", marginTop: "2px" , backgroundColor: "white", marginBottom: "2px", width: "896px"}}>

            <Stack marginLeft={"20px"} fontFamily={"Roboto"} display={"inline-block"} border={"5px solid blue"} width={"844px"} marginTop={"10px"} style={{backgroundColor: "white"}}>
            <h1 style={{marginLeft: "10px", textDecoration: "underline"}}>Yleinen keskustelu</h1>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/forum-icon.png" width={70} height={70} alt="React Image" style={{marginLeft: "10px"}}/>
            <Button style={{scale: "1.1", width: "200px", marginLeft: "50px", marginBottom: "50px", border: "4px solid black"}} variant="contained" onClick={() => navigoi("/kategoriat/yleinen")}>Yleinen keskustelu</Button>
            </Stack>

          
            <Stack marginLeft={"20px"} fontFamily={"Roboto"} display={"inline-block"} border={"5px solid blue"} width={"844px"} marginTop={"10px"} style={{backgroundColor: "white"}}>
            <h1 style={{marginLeft: "10px", textDecoration: "underline"}}>Osto ja myynti keskustelu</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTn6shFdq2m66QdeFw7-ZooysOLNqm-XrKeHyLo1Cza9B1p0aUtIq99W2FV1ciGvyJFMQ&usqp=CAU" width={70} height={70} alt="React Image" style={{marginLeft: "10px"}} />
            <Button style={{scale: "1.1", width: "200px", marginLeft: "50px", marginBottom: "50px", border: "4px solid black"}} variant="contained" onClick={() => navigoi("/kategoriat/ostojamyynti")}>Osto ja myynti</Button>
            </Stack>

            <Stack marginLeft={"20px"} fontFamily={"Roboto"} display={"inline-block"} border={"5px solid blue"} width={"844px"} marginTop={"10px"} style={{backgroundColor: "white"}}>
            <h1 style={{marginLeft: "10px", textDecoration: "underline"}}>Tietokoneet</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStA4pcTMHtXI0QU88KXBZaRtKUUGiecCOGpXfBibq1b_3AD66Opa-zvubRJNMJUbG9rro&usqp=CAU" width={70} height={70} alt="React Image" style={{marginLeft: "10px"}} />
            <Button style={{scale: "1.1", width: "200px", marginLeft: "50px", marginBottom: "50px", border: "4px solid black"}} variant="contained" onClick={() => navigoi("/kategoriat/tietokoneet")}>Tietokoneet</Button>
            </Stack>
            
            <Stack marginLeft={"20px"} fontFamily={"Roboto"} display={"inline-block"} border={"5px solid blue"} width={"844px"} marginTop={"10px"} style={{backgroundColor: "white"}}>
            <h1 style={{marginLeft: "10px", textDecoration: "underline"}}>Autot</h1>
            <img src="https://howtodrawforkids.com/wp-content/uploads/2022/01/how-to-draw-a-cartoon-car.jpg" width={70} height={70} alt="React Image" style={{marginLeft: "10px"}} />
            <Button style={{scale: "1.1", width: "200px", marginLeft: "50px", marginBottom: "50px", border: "4px solid black"}} variant="contained" onClick={() => navigoi("/kategoriat/autot")}>Autot</Button>
            </Stack>

            <Stack marginLeft={"20px"} fontFamily={"Roboto"} display={"inline-block"} border={"5px solid blue"} width={"844px"} marginTop={"10px"} marginBottom={"10px"} style={{backgroundColor: "white"}}>
            <h1 style={{marginLeft: "10px", textDecoration: "underline"}}>Videopelit</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNVNfywdawK-40-np0Hh4LE3KgQ2BJ85ZxUTAMnnKBmFIqua51c9T8poHeTtMd_8UazA&usqp=CAU" width={70} height={70} alt="React Image" style={{marginLeft: "10px"}} />
            <Button style={{scale: "1.1", width: "200px", marginLeft: "50px", marginBottom: "50px", border: "4px solid black"}} variant="contained" onClick={() => navigoi("/kategoriat/videopelit")}>Videopelit</Button>
            </Stack>

           </Stack>
            
            
          </Box>
        
      </Stack>
      <Footer/>
    </Container>
  );
}

export default Kategoriat;
