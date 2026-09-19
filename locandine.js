/* ============================================================
   NOVITÀ & PROMOZIONI — Cal Resana Outdoor
   ------------------------------------------------------------
   Puoi aggiungere le locandine in due modi:

   • DAL PANNELLO (comodo): sul sito fai TRE CLIC sulla P.IVA in fondo
     alla pagina, inserisci la password e compila il modulo. Il pannello
     ti genera il testo aggiornato di QUESTO file, da incollare qui.

   • A MANO: copia un blocco { ... } qui sotto, incollalo in cima alla
     lista e compila i campi. Lascia "" quelli che non ti servono.

   Campi:
     img         -> nome del file immagine nella cartella locandine/
     badge       -> "Promo","Sconto","Nuovo","Attività","Evento" (o "")
     titolo      -> titolo
     testo       -> descrizione breve
     prezzo      -> es. "129 €"  ("" se non serve)
     prezzoPrima -> prezzo barrato, es. "159 €" ("" se non serve)
     data        -> es. "Sab 12 ottobre" ("" se non serve)
     link        -> pagina esterna per "Scopri di più" ("" se non serve)
     id          -> facoltativo, per il link diretto (auto dal titolo se "")
   ============================================================ */

/* Password del pannello locandine — CAMBIALA con una tua.
   Nota: in un sito statico la password è solo un filtro semplice,
   non una protezione forte. Serve solo a comporre il testo. */
window.ADMIN_PASS = "calresana2026";

window.NOVITA = [

  {
    img: "esempio-promo-giacca.jpg",
    badge: "Promo",
    titolo: "Giacca impermeabile Montecoppolo",
    testo: "Antipioggia e silenziosa, perfetta per l'appostamento.",
    prezzo: "129 €",
    prezzoPrima: "159 €",
    data: "",
    link: "https://montecoppolo.it/shop/it/16-abbigliamento",
    id: ""
  },

  {
    img: "esempio-corso.jpg",
    badge: "Attività",
    titolo: "Corso di taratura ottiche",
    testo: "Impara a tarare il tuo cannocchiale con i nostri tecnici.",
    prezzo: "",
    prezzoPrima: "",
    data: "Sab 12 ottobre",
    link: "",
    id: ""
  },

  {
    img: "esempio-visore.jpg",
    badge: "Nuovo",
    titolo: "Termocamera da osservazione",
    testo: "Nuovo arrivo in negozio: provala su appuntamento.",
    prezzo: "",
    prezzoPrima: "",
    data: "",
    link: "",
    id: ""
  }

];
