import express, { Express } from "express"
import { haeSovelluksenPortti } from "./config";
import path from "path";
import { reititin as systemReitit } from "./reitit/system-reitit";
import { reititin as tehtavalistaReitit } from "./reitit/tehtavalista-reitit";
import { reititin as tehtavalistaReitit2 } from "./reitit/tehtavalista-reitit2";
import { reititin as tehtavalistaReitit3 } from "./reitit/tehtavalista-reitit3";
import { reititin as tehtavalistaReitit4} from "./reitit/tehtavalista-reitit4";
import { reititin as tehtavalistaReitit5} from "./reitit/tehtavalista-reitit5";


/**
 * Alustetaan Express-sovellus
 */
const palvelin: Express = express();


/**
 * Määritetään palvelin käyttämään "static"-kansiota, kun ollaan sovelluksen juuressa ("/").
 */
palvelin.use("/", express.static(path.join(__dirname,"static")));

/**
 * Määritellään Express-palvelin käsittelemään JSON-dataa.
 * Esimerkiksi hyväksymään kutsujen sisältö (request body) JSON-muodossa.
 */
palvelin.use(express.json());

/**
 * Esimerkki get-metodista, palvelin palauttaa vastauksen "Heippa Maailma" kun selaimella navigoidaan polkuun
 * "/heippa"
 */
palvelin.get("/heippa", (req, res) => {
    res.send("Heippa Maailma");
});

/**
 * Alustetaan käytettävät polut/reitit
 */
palvelin.use("/system", systemReitit);
palvelin.use("/foorumi1", tehtavalistaReitit);
palvelin.use("/foorumi2", tehtavalistaReitit2);
palvelin.use("/foorumi3", tehtavalistaReitit3);
palvelin.use("/foorumi4", tehtavalistaReitit4);
palvelin.use("/foorumi5", tehtavalistaReitit5);

/**
 * Määritetään palvelin kuuntelemaan määriteltyä porttia
 * Tämän jälkeen palvelin on valmis vastaanottamaan kutsuja (get, post, put jne..)
 */
palvelin.listen(haeSovelluksenPortti(), () => {
    console.log(`Palvelin kuuntelee porttia: ${haeSovelluksenPortti()}`)
});