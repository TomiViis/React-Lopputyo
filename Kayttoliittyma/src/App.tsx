import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";


import EtusivuScreen from "./sivut/EtusivuScreen";
import Header from "./sivut/Header";
import KategoriatScreen from "./sivut/KategoriatScreen";
import Navigointi from "./sivut/Navigointi";
import YhteydenottoScreen from "./sivut/YhteydenottoScreen";

import ListaScreen from "./screens-yleinen-keskustelu/ListaScreen";
import LuontiScreen from "./screens-yleinen-keskustelu/LuontiScreen";
import MuokkausScreen from "./screens-yleinen-keskustelu/MuokkausScreen";
import PoistoScreen from "./screens-yleinen-keskustelu/PoistoScreen";
import TilaScreen from "./screens-yleinen-keskustelu/TilaScreen";


import ListaScreen2 from "./screens-tietokoneet-keskustelu/ListaScreen2";
import LuontiScreen2 from "./screens-tietokoneet-keskustelu/LuontiScreen2";
import MuokkausScreen2 from "./screens-tietokoneet-keskustelu/MuokkausScreen2";
import PoistoScreen2 from "./screens-tietokoneet-keskustelu/PoistoScreen2";
import TilaScreen2 from "./screens-tietokoneet-keskustelu/TilaScreen2";

import ListaScreen3 from "./screens-autot-keskustelu/ListaScreen3";
import LuontiScreen3 from "./screens-autot-keskustelu/LuontiScreen3";
import MuokkausScreen3 from "./screens-autot-keskustelu/MuokkausScreen3";
import PoistoScreen3 from "./screens-autot-keskustelu/PoistoScreen3";
import TilaScreen3 from "./screens-autot-keskustelu/TilaScreen3";

import LuontiScreen4 from "./screens-videopelit-keskustelu/LuontiScreen4";
import ListaScreen4 from "./screens-videopelit-keskustelu/ListaScreen4";
import MuokkausScreen4 from "./screens-videopelit-keskustelu/MuokkausScreen4";
import TilaScreen4 from "./screens-videopelit-keskustelu/TilaScreen4";
import PoistoScreen4 from "./screens-videopelit-keskustelu/PoistoScreen4";

import ListaScreen5 from "./screens-OstoJaMyynti-keskustelu/ListaScreen5";
import MuokkausScreen5 from "./screens-OstoJaMyynti-keskustelu/MuokkausScreen5";
import PoistoScreen5 from "./screens-OstoJaMyynti-keskustelu/PoistoScreen5";
import TilaScreen5 from "./screens-OstoJaMyynti-keskustelu/TilaScreen5";
import LuontiScreen5 from "./screens-OstoJaMyynti-keskustelu/LuontiScreen5";


/**
 * TodoAsian tyypitys, olio sisältää vain näitä ominaisuuksia.
 * Uusia olioita luodessa kaikki tyypissa kuvatut ominaisuudet tulee määritellä.
 * Poikkeuksen tekisi sellainen ominaisuus, mikä on valinnainen (esim: tila?: string määrittelee tila-ominaisuuden valinnaiseksi ominaisuudeksi)
 */
interface TodoAsia {
  id: string;
  otsikko: string;
  viesti: string;
  tila: string;
}


/**
 * App komponentti
 * App-komponentti toimii sovelluksen "juurena", josta navigoidaan käyttäjä haluttuihin polkuihin sovelluksen sisällä.
 */
const App: FC = () => {
  const [viestiLista1, setViestiLista1] = useState<TodoAsia[]>([]);
  const [viestiLista2, setViestiLista2] = useState<TodoAsia[]>([]);
  const [viestiLista3, setViestiLista3] = useState<TodoAsia[]>([]);
  const [viestiLista4, setViestiLista4] = useState<TodoAsia[]>([]);
  const [viestiLista5, setViestiLista5] = useState<TodoAsia[]>([]);

/**
* BrowserRouter-komponentti "wrappaa" muut komponenti, eli sen ominaisuudet ovat käytössä kaikissa sen sisälle kirjotetuissa komponenteissa.
* Route määrittelee yhden polun ja elementin mikä siinä polussa esitetään. Elementti voi olla kokonainen näkymä tai yksittäinen komponentti.
* Komponentteihin välitetään tietoa "propseina". Propsina voidaan välittää myös metodeja.
*/

  return (
    <div>
      <BrowserRouter >
      <Header/>
      <Navigointi></Navigointi>
      
          <Routes>
            
            <Route path="/" element={<EtusivuScreen />} />
            <Route path="/yhteydenotto" element={<YhteydenottoScreen />} />
            <Route path="/kategoriat"element={<KategoriatScreen />}/>

            <Route path="/kategoriat/yleinen"element={<ListaScreen viestiLista1={viestiLista1} />}/>
            <Route path="/uusi"element={<LuontiScreen viestiLista1={viestiLista1}setViestiLista={setViestiLista1}/>}/>
            <Route path="/muokkaa/:id"element={<MuokkausScreen viestiLista1={viestiLista1}setViestiLista={setViestiLista1}/>}/>
            <Route path="/poista/:id"element={<PoistoScreen viestiLista1={viestiLista1}setViestiLista={setViestiLista1}/>}/>
            <Route path="/tila/:id"element={<TilaScreen viestiLista1={viestiLista1}setViestiLista={setViestiLista1}/>}/>

            <Route path="/kategoriat/tietokoneet"element={<ListaScreen2 viestiLista2={viestiLista2} />}/>
            <Route path="/uusi2"element={<LuontiScreen2 viestiLista2={viestiLista2}setViestiLista={setViestiLista2}/>}/>
            <Route path="/muokkaa2/:id"element={<MuokkausScreen2 viestiLista2={viestiLista2}setViestiLista={setViestiLista2}/>}/>
            <Route path="/poista2/:id"element={<PoistoScreen2 viestiLista2={viestiLista2}setViestiLista={setViestiLista2}/>}/>
            <Route path="/tila2/:id"element={<TilaScreen2 viestiLista2={viestiLista2}setViestiLista={setViestiLista2}/>}/>

            <Route path="/kategoriat/autot"element={<ListaScreen3 viestiLista3={viestiLista3} />}/>
            <Route path="/uusi3"element={<LuontiScreen3 viestiLista3={viestiLista3}setViestiLista={setViestiLista3}/>}/>
            <Route path="/muokkaa3/:id"element={<MuokkausScreen3 viestiLista3={viestiLista3}setViestiLista={setViestiLista3}/>}/>
            <Route path="/poista3/:id"element={<PoistoScreen3 viestiLista3={viestiLista3}setViestiLista={setViestiLista3}/>}/>
            <Route path="/tila3/:id"element={<TilaScreen3 viestiLista3={viestiLista3}setViestiLista={setViestiLista3}/>}/>

            <Route path="/kategoriat/videopelit"element={<ListaScreen4 viestiLista4={viestiLista4} />}/>
            <Route path="/uusi4"element={<LuontiScreen4 viestiLista4={viestiLista4}setViestiLista={setViestiLista4}/>}/>
            <Route path="/muokkaa4/:id"element={<MuokkausScreen4 viestiLista4={viestiLista4}setViestiLista={setViestiLista4}/>}/>
            <Route path="/poista4/:id"element={<PoistoScreen4 viestiLista4={viestiLista4}setViestiLista={setViestiLista4}/>}/>
            <Route path="/tila4/:id"element={<TilaScreen4 viestiLista4={viestiLista4}setViestiLista={setViestiLista4}/>}/>

            <Route path="/kategoriat/ostojamyynti"element={<ListaScreen5 viestiLista5={viestiLista5} />}/>
            <Route path="/uusi5"element={<LuontiScreen5 viestiLista5={viestiLista5}setViestiLista={setViestiLista5}/>}/>
            <Route path="/muokkaa5/:id"element={<MuokkausScreen5 viestiLista5={viestiLista5}setViestiLista={setViestiLista5}/>}/>
            <Route path="/poista5/:id"element={<PoistoScreen5 viestiLista5={viestiLista5}setViestiLista={setViestiLista5}/>}/>
            <Route path="/tila5/:id"element={<TilaScreen5 viestiLista5={viestiLista5}setViestiLista={setViestiLista5}/>}/>
          </Routes>
        
      </BrowserRouter>
    </div>
  );
};

export default App;