import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CardActress from "./CardActress";
import CardActor from "./CardActor";
//importo axios e useState e useEffect

/* MILESTONE 1
 Al caricamento dell'applicazione, recuperiamo la lista degli attori e delle attrici dalle API e stampiamoli in console.
 Lista di Attrici: [https://lanciweb.github.io/demo/api/actresses/) scelgo di iniziare con la lista attrici
*/

function Main() {
  // creo la variabile globale per visulaizzare il contenuto della chiamata API
  const [femaleActors, setFemaleActors] = useState([]);
  // creo un altra variabile per l'array degli attori
  const [maleActors, setmaleActors] = useState([]);

  const linkActress = "https://lanciweb.github.io/demo/api/actresses/";

  //preparo la funzione
  const fetchDataActress = () => {
    axios.get(linkActress).then((resp) => {
      const answer = resp.data;
      console.log(answer);
      //visualizzo tutto l'array

      setFemaleActors(answer);
    });
  };

  const linkActor = "https://lanciweb.github.io/demo/api/actors/";

  //preparo la funzione
  const fetchDataActor = () => {
    axios.get(linkActor).then((resp) => {
      const answerMale = resp.data;
      console.log(answerMale);
      //visualizzo tutto l'array

      setmaleActors(answerMale);
    });
  };

  useEffect(fetchDataActress, []);
  useEffect(fetchDataActor, []);

  // MILESTONE 2 Prepariamo una card per ciascun attore/attrice, mostrandone le seguenti informazioni nome

  // per il bonus ho preferito creare due Card una per gli attori e una per le attrici
  return (
    <>
      <div className="container">
        <div className="text-center my-5">
          <h2 className="mb-4 text-danger border-bottom border-danger pb-2">
            🌹 Attrici
          </h2>
        </div>
        <div className="row d-flex">
          {femaleActors.map((actress) => {
            return <CardActress actress={actress} />;
          })}
        </div>
        <div className="row d-flex">
          <div className="text-center my-5">
            <h2 className="mt-5 mb-4 text-primary border-bottom border-primary pb-2">
              🎭 Attori
            </h2>
          </div>
          {maleActors.map((actor) => {
            return <CardActor actor={actor} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
