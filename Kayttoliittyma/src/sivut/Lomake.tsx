import { Button, FormControl, FormLabel, MenuItem, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { height } from '@mui/system';
import React, { FC } from 'react';

interface Props {
    kasitteleMuutos: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    kasitteleLomakkeenLahetys: (event: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * Lomakekomponentti
 */
const Lomake: FC<Props> = ({
    kasitteleMuutos,
    kasitteleLomakkeenLahetys
}) => {
    return (
        <Stack sx={{ backgroundColor: "whitesmoke", padding: 2 , border: "3px solid black"}}>
            <Typography variant="h6">Ota yhteyttä</Typography>
            <Stack>
                <form onSubmit={ kasitteleLomakkeenLahetys }>
                    <FormControl fullWidth>
                        
                        <TextField 
                            label="Etunimi"
                            name="etunimi"
                            defaultValue=""
                            onChange={ (event) => kasitteleMuutos(event) }
                            variant="outlined"
                            sx={{ marginBottom: "10px", marginTop: "20px" , width: "350px"}}
                        />
                        <TextField 
                            label="Sukunimi"
                            name="sukunimi"
                            defaultValue=""
                            onChange={ (event) => kasitteleMuutos(event) }
                            variant="outlined"
                            sx={{ marginBottom: "10px", width: "350px" }}
                        />
                        <TextField 
                            label="Puhelinnumero"
                            name="puhelinnumero"
                            defaultValue=""
                            onChange={ (event) => kasitteleMuutos(event) }
                            variant="outlined"
                            sx={{ marginBottom: "10px", width: "350px" }}
                        />

                        <TextField 
                            label="Sähköposti"
                            name="sahkoposti"
                            defaultValue=""
                            onChange={ (event) => kasitteleMuutos(event) }
                            variant="outlined"
                            sx={{ marginBottom: "10px", width: "350px" }}
                        />

                        <TextField 
                            label="Otsikko"
                            name="otsikko"
                            defaultValue=""
                            onChange={ (event) => kasitteleMuutos(event) }
                            variant="outlined"
                            sx={{ marginBottom: "10px", width: "350px" }}
                        />

                        <Stack >
                            
                        <h1 style={{fontFamily: "Roboto"}}>Viesti: </h1>
                        <textarea id="textarea" style={{resize: "none", margin:5, backgroundColor: "white", opacity: 1, color: "black" , fontSize: "35px", border: "3px solid black", height: "150px", width: "800px"}}
                          
                            name="viesti"
                            defaultValue=""
                            onChange={ (event) => kasitteleMuutos(event) }
                            
                            
                        />
                        </Stack>
                    </FormControl>

                    
                    <Button type="submit" variant="contained" color="primary" style={{marginTop: "30px", border: "3px solid black"}}>
                        
                        Lähetä
                    </Button>
                </form>
            </Stack>
        </Stack>
    );
}

export default Lomake;