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
      //visualizzo tutto l'array

      setFemaleActors(answer);
    });
  };

  useEffect(fetchData, []);

  // MILESTONE 2 Prepariamo una card per ciascun attore/attrice, mostrandone le seguenti informazioni nome
  /*nome
anno nascita 1
nazionalità 2
biografia 3
immagine 4
riconoscimenti 5
immagine*/ 6;

  return (
    <>
      (
      {femaleActors.map((actress) => {
        const {
          id,
          name,
          biography,
          birth_year,
          death_year,
          image,
          nationality,
        } = actress;

        return (
          <div key={id} className="card col-5">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">nome</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">anno nascita</li>
              <li className="list-group-item">nazionalità</li>
              <li className="list-group-item">biografia</li>
              <li className="list-group-item">riconoscimenti</li>
            </ul>
          </div>
        );
      })}
      )
    </>
  );
}

export default Main;
