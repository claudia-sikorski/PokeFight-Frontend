import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NitendoSwitch from "./components/NintendoSwitch";

function App() {
  // const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=150"
  );
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setpreviousUrl] = useState();

  // console.log(pokemons && pokemons.allData);

  useEffect(() => {
    axios.get(currentUrl).then((response) => {
      Promise.all(
        response.data.results.map((pokemon) => axios.get(pokemon.url))
      ).then(
        axios.spread((...allData) => {
          setPokemons({ allData });
        })
      );
    });
  }, [currentUrl]);

  return (
    <>
      <NitendoSwitch pokemons={pokemons.allData} />
    </>
  );
}

export default App;
