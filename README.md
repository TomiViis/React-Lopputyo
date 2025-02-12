React Keskustelufoorumi

React Keskustelufoorumi on keskustelufoorumisovellus, joka on toteutettu Reactilla (TypeScript) frontendissä ja Node.js:llä (Express) backendissä. Sovellus mahdollistaa käyttäjien välisen viestinnän ja keskustelujen hallinnan.
Projektin rakenne

React-keskustelufoorumi/
├── Kayttoliittyma/   # Frontend-kansio
└── Palvelin/         # Backend-kansio

Asennus ja käyttö

Seuraa näitä ohjeita käynnistääksesi projektin paikallisesti:

    Kloonaa repositorio:

git clone https://github.com/T0miV/React-keskustelufoorumi.git
cd React-keskustelufoorumi

Asenna riippuvuudet:

Frontend:

cd Kayttoliittyma
npm install

Backend:

cd ../Palvelin
npm install

Ympäristömuuttujat:

Luo .env-tiedosto Palvelin-kansioon ja lisää seuraava sisältö:

PORT=3005

Voit tarvittaessa muuttaa portin numeroa.

Käynnistä sovellus:

Backend:

cd Palvelin
npm start

Frontend:

Avaa uusi terminaali-ikkuna ja:

    cd Kayttoliittyma
    npm start

    Sovellus on käytettävissä osoitteessa http://localhost:3000.

Käytetyt teknologiat

    Frontend: React, TypeScript
    Backend: Node.js, Express

Lisenssi

Tämä projekti on lisensoitu MIT-lisenssillä.
