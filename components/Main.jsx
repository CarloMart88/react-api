import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
//importo axios e useState e useEffect

/* MILESTONE 1
 Al caricamento dell'applicazione, recuperiamo la lista degli attori e delle attrici dalle API e stampiamoli in console.
 Lista di Attrici: [https://lanciweb.github.io/demo/api/actresses/) scelgo di iniziare con la lista attrici
*/

function Main() {
  // creo la variabile globale per visulaizzare il contenuto della chiamata API
  const [femaleActors, setFemaleActors] = useState([]);

  const link = "https://lanciweb.github.io/demo/api/actresses/";

  //preparo la funzione
  const fetchData = () => {
    axios.get(link).then((resp) => {
      const answer = resp.data;
      console.log(answer);

      setFemaleActors(answer);
    });
  };

  useEffect(fetchData, []);

  return (
    <div>
      <h1>ok eccoci</h1>
    </div>
  );
}

export default Main;
