import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NitendoSwitch from "./components/NintendoSwitch";
import Home from "./components/Home";
import PokeList from "./components/PokeList";
import PokeDex from "./components/PokeDex";
import PokeFight from "./components/PokeFight";

function App() {
  // const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
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
      <NitendoSwitch />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pokemon"
          element={<PokeList pokemons={pokemons.allData} />}
        />
        <Route path="/pokemon/:id" element={<PokeDex />} />
        <Route path="/pokemon/fight" element={<PokeFight />} />
      </Routes>
    </>
  );
}

export default App;
