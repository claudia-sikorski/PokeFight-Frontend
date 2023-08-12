// Imports
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./styles/PokeDex.css";
import iconPokedex from "../assets/pokedex-icon.png";

import { PokeTypes } from "./PokeTypes.jsx";

// PokeDex Component
const PokeDex = () => {
  let { id } = useParams();

  const [pokeData, setPokeData] = useState({});
  console.log(pokeData);

  const [name, setName] = useState("");
  const [number, setNumber] = useState(null);
  const [types, setTypes] = useState([]);
  console.log(types);

  let pokeTypes = ["normal"];

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      setPokeData(response.data);
      setName(response.data.name);
      setNumber(response.data.id);
      // response.data.types.map((type) => {
      //   return setTypes(type.name);
      // }); FOR Loop?
    });
  }, [id, setPokeData]);

  // console.log(pokeData);

  return (
    <>
      <div className="pokeDex_Background"></div>
      <div className="pokeDex_Container">
        <div className="pokeDex_Header">
          <div className="pokeDex_HeaderLeft">
            <img src={iconPokedex} alt="Pokedex Icon" id="pokedex_Icon" />
            <p>Pokédex</p>
          </div>
          <div className="pokeDex_HeaderRight"></div>
        </div>
        <div className="pokemonName">
          <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
          <p>{`No. ${number}`}</p>
        </div>

        <div className="pokemonType_Container">
          {pokeTypes.map((type) => {
            // console.log(type);
            return <PokeTypes key={type} type={type} />;
          })}

          {/* <div className="pokemonType" style={{ backgroundColor: "#a8a899" }}>
            <img src={Normal} alt="PokemonType" />
            <p>Normal</p>
          </div> */}
        </div>

        <div className="pokeDexImage">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${number}.png`}
            alt="pokemon"
          />
        </div>
        <div className="pokeDexDetails"></div>
        <div className="pokeDexAttacks"></div>
        <div className="pokeDex_Footer"></div>
      </div>
    </>
  );
};

export default PokeDex;

// Source: https://pokeapi.co/api/v2/pokemon/:id

// Pokemon Name: pokemon.moves.name
// Pokemon ID: pokemon.held_items.id
// Pokemon Types: https://pokeapi.co/api/v2/type/
// Pokemon Image: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/:id.png
// Pokemon Height in m -> if height.length <2 return .join (0 am Anfang) + zusammenfügen + join("."): pokemon.game_indices.height
// Pokemon Weight in kg -> for-loop + return .join('.'): pokemon.types.weight
