import { AppBar, Box, Stack, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    children?: JSX.Element;
}
const Header: FC<Props> = ({ children }) => {

    var [date,setDate] = useState(new Date());

  useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }

  });
    const navigoi = useNavigate();
    return (
    <>
        <Stack sx={{marginTop: 2}} alignItems="center" textAlign={"center"} height={"150px"} border={ "5px solid blue"} borderRadius={"20px"} width={"960px"}>
            <AppBar position="static">
                <Box onClick={() => navigoi("/")} sx={{backgroundColor: "green", height:"139px" , padding: "5px"}}>

                    <Typography variant="h2" style={{ fontFamily: "Roboto", color: "white", fontSize: "90px" }}>Keskustelufoorumi</Typography>
                    <p style={{textAlign: "right", fontSize: "17px"}}> Tänään on : {date.toLocaleDateString()}</p>

                </Box>

            </AppBar>

        </Stack>
    { children }
    </>
    );

}

export default Header