import "./styles/nitendoSwitch.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import PokeList from "../components/PokeList";
import PokeDex from "../components/PokeDex";
import PokeFight from "../components/PokeFight";
import { useState } from "react";

const NitendoSwitch = ({
  pokemons,
  pokemonsPagination,
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const [audio, setAudio] = useState(
    new Audio("src/assets/sounds/Pokemon_Theme_Song.mp3")
  );

  function playSong() {
    if (audio) {
      audio.play();
    }
  }

  function pauseSong() {
    audio.pause();
  }

  return (
    <>
      <div className="switch">
        <div className="body">
          <div className="volume"></div>
          <div className="screen">
            <Routes>
              <Route path="/" element={<Home playSong={playSong} />} />
              <Route
                path="/pokemon"
                element={
                  <PokeList
                    pokemons={pokemonsPagination}
                    totalPosts={totalPosts}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                }
              />
              <Route path="/pokemon/:id" element={<PokeDex />} />
              <Route
                path="/pokemon/fight"
                element={<PokeFight pokemons={pokemons} />}
              />
            </Routes>
          </div>
        </div>

        <div className="joy-con left">
          <div className="button-group">
            <div className="button arrow up"></div>
            <div className="button arrow right"></div>
            <div className="button arrow down"></div>
            <div className="button arrow left"></div>
          </div>

          <div className="stick"></div>
          <Link onClick={pauseSong}>
            <div className="select"></div>
          </Link>
          <div className="capture"></div>
          <div className="shoulder l"></div>
        </div>

        <div className="joy-con right">
          <div className="button-group">
            <div className="button letter" data-letter="X"></div>
            <div className="button letter" data-letter="A"></div>
            <div className="button letter" data-letter="B"></div>
            <div className="button letter" data-letter="Y"></div>
          </div>

          <div className="stick"></div>
          <Link onClick={playSong}>
            <div className="start"></div>
          </Link>
          <Link to={"/"}>
            <div className="home"></div>
          </Link>
          <div className="shoulder r"></div>
        </div>
      </div>
    </>
  );
};

export default NitendoSwitch;
