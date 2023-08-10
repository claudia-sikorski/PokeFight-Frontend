import "./styles/nitendoSwitch.css";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import PokeList from "../components/PokeList";
import PokeDex from "../components/PokeDex";
import PokeFight from "../components/PokeFight";

const NitendoSwitch = ({ pokemons }) => {
  return (
    <>
      <div className="switch">
        <div className="body">
          <div className="volume"></div>
          <div className="screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/pokemon"
                element={<PokeList pokemons={pokemons} />}
              />
              <Route path="/pokemon/:id" element={<PokeDex />} />
              <Route path="/pokemon/fight" element={<PokeFight pokemons={pokemons}/>} />
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
          <div className="select"></div>
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
          <div className="start"></div>
          <div className="home"></div>
          <div className="shoulder r"></div>
        </div>
      </div>
    </>
  );
};



export default NitendoSwitch;
