import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NitendoSwitch from "./components/NintendoSwitch";

function App() {
  // const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts =
    pokemons.allData && pokemons.allData.slice(firstPostIndex, lastPostIndex);

  const totalPosts = pokemons.allData && pokemons.allData.length;

  return (
    <>
      <NitendoSwitch
        pokemons={pokemons.allData}
        pokemonsPagination={currentPosts}
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default App;
