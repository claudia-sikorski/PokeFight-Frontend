// Imports
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./styles/PokeDex.css";
import iconPokedex from "../assets/pokedex-icon.png";

import { PokeTypes } from "./PokeTypes.jsx";

// PokeDex Component
const PokeDex = () => {
  let { id } = useParams();

  // const [pokeData, setPokeData] = useState({});
  const [name, setName] = useState("");
  const [number, setNumber] = useState(null);
  const [types, setTypes] = useState([]);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      // setPokeData(response.data);
      setName(response.data.name);
      setNumber(response.data.id);
      setTypes(response.data.types.map((type) => type.type.name));
      setHeight(response.data.height / 10);
      setWeight(response.data.weight / 10);
    });
  }, [id]);

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
          {types.map((type) => {
            // console.log(type);
            return <PokeTypes key={type} type={type} />;
          })}
        </div>
        <div className="pokeDexImage">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${number}.png`}
            alt="pokemon"
          />
        </div>
        <div className="pokeDexDetails">
          <p>Height</p>
          <p>{`${height} m`}</p>
          <p>Weight</p>
          <p>{`${weight} kg`}</p>
        </div>
        <div className="pokeDexAttacks"></div>
        <div className="pokeDex_Footer">
          <Link to={"/pokemon"} className="pokeDex_Footer_ExitBtn">
            <div id="exitBtn">B</div>
            <p>Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PokeDex;
