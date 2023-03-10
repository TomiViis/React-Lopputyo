import { Tehtava } from "../tyypit";
import path from "path"
import { v4 as uuid } from "uuid";
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

/**
 * Luokka, vastaa datan käsittelystä tietokannassa
 */

export default class TehtavalistaTietokantaModel5 {
    private tietokanta?: Database;

    // Alustetaan luokka
    constructor() {
        this.yhdistaTietokantaan();
    }

    /**
     * Hakee tehtävälistan tietokannasta
     * 
     * @returns tehtävälista
     */
    public haeTehtavalista = async () => {
        const tehtavat = await this.tietokanta?.all("SELECT * FROM foorumi5");
        console.log(tehtavat);
        return tehtavat;
    }

   /**
  * Luo uuden viestin keskusteluun
  * 
  * @param otsikko 
  * @param viesti
  * @returns uuden viestin
  */

public async luoTehtava(otsikko: string, viesti: string) {
    const uniikkiOtsikko = await this.tarkistaOnkoOtsikkoKonflikti(otsikko);
    if (!uniikkiOtsikko) {
        throw {
            statusKoodi: 409,
            virheViesti: `Tehtävälista sisältää jo otsikon nimellä ${otsikko}`
        }
    }

    const id = uuid();

    //Tunnilla uusi asia
    const lause = await this.tietokanta?.prepare(`
        INSERT INTO foorumi5 (id, otsikko, viesti, tila)
        VALUES (?, ?, ?, ?)
    `)

    await lause?.run(id, otsikko, viesti, 'Tykkää');



    /* await this.tietokanta?.exec(`
        INSERT INTO tehtavalista (
            id, otsikko, viesti, tila
        ) VALUES (
            '${id}', '${otsikko}', '${viesti}', 'Tekemättä'
        )
    `) */

    const luotuTehtava = await this.etsiTehtava(id)

    return luotuTehtava;
}

    /**
     * Poista viesti
     */
    
    public async poistaTehtava(id: string) {
        await this.etsiTehtava(id);

        //Tunnilla tehty uusi asia
        const lause = await this.tietokanta?.prepare(`
        DELETE FROM foorumi5
        WHERE id = ?

    `)

    await lause?.run(id)

    /*
    await this.tietokanta?.exec(`
        DELETE FROM tehtavalista WHERE id = '${id}'
    `) */
    }

    /**
     * Muokkaa viestiä
     */
    public async muokkaaTehtava(id: string, tehtava: Tehtava) {
        const loydettyTehtava = await this.etsiTehtava(id);
        const uniikkiOtsikko = await this.tarkistaOnkoOtsikkoKonflikti(tehtava.otsikko);

        if(!uniikkiOtsikko) {
            if (loydettyTehtava.otsikko !== tehtava.otsikko){
                throw {
                    statusCode: 409,
                    virheViesti: `Tehtävälista sisältää jo tehtävän nimellä ${tehtava.otsikko}`
                }
            }
        }

        //Tunnilla lisätty
        const lause = await this.tietokanta?.prepare(`
        UPDATE foorumi5
        SET otsikko = ?, tila = ?, viesti = ?
        WHERE id = ?
         `)

         await lause?.run(tehtava.otsikko, tehtava.tila, tehtava.viesti, id)

        //Tunnilla korvattu ylempänä
         /*
        await this.tietokanta?.exec(`
            UPDATE tehtavalista
            SET otsikko = '${tehtava.otsikko}', tila = '${tehtava.tila}', viesti = '${tehtava.viesti}'
            WHERE id = '${id}'
        `)*/

        const muokattuTehtava = this.etsiTehtava(id);
        return muokattuTehtava;
    }

    /**
     * Etsi yksittäisen viestin keskustelusta
     */
    public etsiTehtava = async (id: string) => {
        const loydettyTehtava = await this.tietokanta?.get(`SELECT * FROM foorumi5 WHERE id = ?`, id) // "${id} kysymysmerkin tilalle"

        if (!loydettyTehtava) {
            throw {
                statusKoodi: 400,
                virheViesti: `Viestiä id:llä ${id} ei löytynyt`
            }
        }

        return loydettyTehtava;
    }

    /**
    * Tarkistaa onko otsikko jo käytössä, palauttaa true, jos on
    * 
    * @param otsikko 
    * @returns true tai false
    */
    private tarkistaOnkoOtsikkoKonflikti = async (otsikko: string) => {
        const loytyykoTehtava = await this.tietokanta?.get(`SELECT * FROM foorumi5 WHERE otsikko = ?`, otsikko)

        return Boolean(!loytyykoTehtava);
    }

    /**
     * Avataan yhteys tietokantaan
     * Luo tietokantatiedoston samaan kansioon modelin kanssa jos sellaista ei vielä ole
     */
    private yhdistaTietokantaan = async () => {
        this.tietokanta = await open({
            filename: path.resolve(__dirname, "keskustelufoorumi.db"),
            driver: sqlite3.Database
        })

        await this.tietokanta.run(`
            CREATE TABLE IF NOT EXISTS foorumi5 (
                id TEXT PRIMARY KEY NOT NULL,
                otsikko TEXT NOT NULL UNIQUE,
                viesti TEXT NOT NULL UNIQUE,
                tila TEXT NOT NULL
            )
        `)

       
    }
}