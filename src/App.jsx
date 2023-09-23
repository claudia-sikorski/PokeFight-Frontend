import "./App.css";
import { useState, useEffect, useRef } from "react";
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

  // const audio = useRef(new Audio("src/assets/sounds/Pokemon_Theme_Song.mp3"));

  // function playSong() {
  //   if (audio) {
  //     audio.current.play();
  //   }
  // }

  // function pauseSong() {
  //   audio.current.pause();
  // }

  console.log("test");

  return (
    <>
      <NitendoSwitch
        pokemons={pokemons.allData}
        pokemonsPagination={currentPosts}
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        // playSong={playSong}
        // pauseSong={pauseSong}
      />
    </>
  );
}

export default App;
