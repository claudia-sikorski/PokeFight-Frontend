import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NitendoSwitch from "./components/NintendoSwitch";

function App() {
  // const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  console.log(pokemons && pokemons.allData);

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

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts =
    pokemons.allData && pokemons.allData.slice(firstPostIndex, lastPostIndex);

  console.log("current:", currentPosts);

  return (
    <>
      <NitendoSwitch pokemons={pokemons.allData} />
    </>
  );
}

export default App;
