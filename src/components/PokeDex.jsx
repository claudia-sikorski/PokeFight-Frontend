import { useParams } from "react-router-dom";
import "./styles/PokeDex.css";
import Image from "../assets/types/Typ_Normal.png";

const PokeDex = () => {
  let { id } = useParams();

  // Source: https://pokeapi.co/api/v2/pokemon/:id

  // Pokemon Name: pokemon.moves.name
  // Pokemon ID: pokemon.held_items.id
  // Pokemon Types: https://pokeapi.co/api/v2/type/
  //Pokemon Image: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/:id.png

  return (
    <>
      <div className="pokeDex_Background"></div>
      <div className="pokeDex_Container">
        <div className="pokeDex_Header"></div>
        <div className="pokemonName">
          <h1>Ditto</h1>
          <p>No. 132</p>
        </div>
        <div className="pokemonType">
          <div className="pokemonType_Normal">
            <img src={Image} alt="type" />
          </div>
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
