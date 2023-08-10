import { useParams } from "react-router-dom";
import "./styles/PokeDex.css";
import iconPokedex from "../assets/pokedex-icon.png";
import { PokeTypes } from "./PokeTypes.jsx";

// import Normal from "../assets/types/normal.png";

const PokeDex = () => {
  // let { id } = useParams();
  let types = ["normal"];
  console.log(types);

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
          <h1>Ditto</h1>
          <p>No. 132</p>
        </div>

        <div className="pokemonType_Container">
          {types.map((type) => {
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
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
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
