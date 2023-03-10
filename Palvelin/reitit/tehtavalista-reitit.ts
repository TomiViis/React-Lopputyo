import express, { Router, Request, Response } from "express";
// import TehtavalistaTiedostoModel from "../model/tiedosto"; //Käytä tätä jos haluat tallentaa datan tiedostoon
import TehtavalistaTietokantaModel from "../model/tietokanta";

/**
 * Alustetaan reititin
 */
export const reititin: Router = express.Router();

/**
 * Konstruktoidaan Tehtavalista-luokan instanssi
 */
const tehtavalistaTietokantaModel = new TehtavalistaTietokantaModel();

// Demo/esimerkki-luokka tiedostoon tallentamista varten
// const tehtavalistaTiedostoModel = new TehtavalistaTiedostoModel();

/**
 * Juuripolku palauttaa tehtävän listan asiat
 */
reititin.get("/", async (request: Request, response: Response) => {
    try {
        const tehtavalista = await tehtavalistaTietokantaModel.haeTehtavalista();

        return response.status(200).json(tehtavalista);
    } catch (error: any) {
        return response.json(error);
    }
});

/**
 * Juuripolku palauttaa yhden tehtävän
 */
reititin.get("/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const tehtava = await tehtavalistaTietokantaModel.etsiTehtava(id);

        return response.status(200).json(tehtava);
    } catch (error: any) {
        return response.json(error);
    }
});

/**
 * Tämä polku käsittelee POST-pyynnöt eli uuden tehtävän lisäämisen
 */
reititin.post("/", async (request: Request, response: Response) => {
    try {
        const { otsikko } = request.body;
        const { viesti } = request.body;

        if(!otsikko) {
            throw {
                statusKoodi: 400,
                virheViesti: "Puuttuu ominaisuus: otsikko"
            }
        }

        const luotuTehtavalista = await tehtavalistaTietokantaModel.luoTehtava(otsikko, viesti);

        return response.status(201).json(luotuTehtavalista);

    } catch (error: any) {
        return response.status(error.statusKoodi).json(error);
    }
});

/**
 * Tämä polku käsittelee DELETE-pyynnöt eli tehtävän poistamisen
 */
reititin.delete("/:id", async (request: Request, response: Response) => {
    try {

        const { id } = request.params;

        await tehtavalistaTietokantaModel.poistaTehtava(id);

        return response.status(204).json();

    } catch (error: any) {
        return response.json(error);
    }
});

/**
 * Tämä polku käsittelee PUT-pyynnöt eli tehtävän muokkaamisen
 */
reititin.put("/:id", async (request: Request, response: Response) => {
    try {

        const { id } = request.params;
        const { otsikko, tila } = request.body;

        if(!otsikko || tila === undefined) {
            throw {
                statusKoodi: 400,
                virheViesti: "Virheellinen sisältö"
            }
        }

        const muokattuTehtava = await tehtavalistaTietokantaModel.muokkaaTehtava(id, request.body);

        return response.status(200).json(muokattuTehtava);

    } catch (error: any) {
        return response.status(error.statusKoodi).json(error);
    }
});