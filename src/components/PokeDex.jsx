// Imports
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

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
  const [moves, setMoves] = useState([]);

  let nextPokemon = number + 1;
  const previousPokemon = number - 1;

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      // setPokeData(response.data);
      setName(response.data.name);
      setNumber(response.data.id);
      setTypes(response.data.types.map((type) => type.type.name));
      setHeight(response.data.height / 10);
      setWeight(response.data.weight / 10);
      setMoves(response.data.moves.map((move) => move.move.name));
    });
  }, [id]);

  console.log(moves);

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
        <div className="pokeDex_Attacks">
          <p id="attack_Header">Learned Attacks</p>
          <p className="attack">
            {moves[Math.floor(Math.random() * moves.length)]}
          </p>
          <p className="attack">
            {moves[Math.floor(Math.random() * moves.length)]}
          </p>
          <p className="attack">
            {moves[Math.floor(Math.random() * moves.length)]}
          </p>
          <p className="attack">
            {moves[Math.floor(Math.random() * moves.length)]}
          </p>
        </div>
        <div className="pokeDex_Footer">
          <Link
            to={`/pokemon/${previousPokemon}`}
            className={number < 2 ? "disabled_Link" : "pokeDex_Footer_Btn"}
          >
            <div id={number < 2 ? "disabled_Btn" : "Btn"}>
              <FontAwesomeIcon
                icon={faAngleDoubleLeft}
                style={{ color: "#ffffff" }}
              />
            </div>
            <p>Previous</p>
          </Link>
          <Link
            to={`/pokemon/${nextPokemon}`}
            className={number > 150 ? "disabled_Link" : "pokeDex_Footer_Btn"}
          >
            <div id={number > 150 ? "disabled_Btn" : "Btn"}>
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                style={{ color: "#ffffff" }}
              />
            </div>
            <p>Next</p>
          </Link>
          <Link to={"/pokemon"} className="pokeDex_Footer_Btn">
            <div id="Btn">B</div>
            <p>Exit</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PokeDex;
