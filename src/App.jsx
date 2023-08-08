import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PokeList from "./components/PokeList";
import PokeDex from "./components/PokeDex";
import NitendoSwitch from "./components/NintendoSwitch";
import PokeFight from "./components/PokeFight";

function App() {
  return (
    <>
      <NitendoSwitch />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokeList />} />
        <Route path="/pokemon/:id" element={<PokeDex />} />
        <Route path="/pokemon/fight" element={<PokeFight />} />
      </Routes>
    </>
  );
}

export default App;
