import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

interface LomakeData {
    etunimi: string;
    sukunimi: string;
    puhelinnumero: number | null;
    sahkoposti: string;
    otsikko: string;
    viesti: string;
  }

interface Props {
    henkiloLista: LomakeData[];
}

const Taulu: React.FC<Props> = ({
    henkiloLista
}) => {

    const renderLista = () => {
        if(!henkiloLista) {
            return;
        }
        const henkilolista = henkiloLista.map(henkilo => {
            return (
                <TableRow
                    key={henkilo.etunimi}
                >
                    <TableCell>{ henkilo.etunimi }</TableCell>
                    <TableCell>{ henkilo.sukunimi }</TableCell>
                    <TableCell>{ henkilo.puhelinnumero }</TableCell>
                    <TableCell>{ henkilo.sahkoposti }</TableCell>
                    <TableCell>{ henkilo.otsikko}</TableCell>
                    <TableCell>{ henkilo.viesti }</TableCell>
                </TableRow>
            )
        })

        return henkilolista;
    }

    return (
        <TableContainer sx={{ backgroundColor: "lightblue" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Etunimi</TableCell>
                        <TableCell>Sukunimi</TableCell>
                        <TableCell>Puhelinnumero</TableCell>
                        <TableCell>Sähköposti</TableCell>
                        <TableCell>Otsikko</TableCell>
                        <TableCell>Viesti</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { renderLista() }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Taulu;