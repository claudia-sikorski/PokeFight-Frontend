import "./styles/pokeTypes.css";

import Bug from "../../public/types/bug.png";
import Dark from "../../public/types/dark.png";
import Dragon from "../../public/types/dragon.png";
import Electric from "../../public/types/electric.png";
import Fairy from "../../public/types/fairy.png";
import Fighting from "../../public/types/fighting.png";
import Fire from "../../public/types/fire.png";
import Flying from "../../public/types/flying.png";
import Ghost from "../../public/types/ghost.png";
import Grass from "../../public/types/grass.png";
import Ground from "../../public/types/ground.png";
import Ice from "../../public/types/ice.png";
import Normal from "../../public/types/normal.png";
import Poison from "../../public/types/poison.png";
import Psychic from "../../public/types/psychic.png";
import Rock from "../../public/types/rock.png";
import Steel from "../../public/types/steel.png";
import Water from "../../public/types/water.png";

export const PokeTypes = ({ type }) => {
  if (type === "normal") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#a8a899" }}>
        <img src={Normal} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "bug") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#83ad25" }}>
        <img src={Bug} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "dark") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#463e3e" }}>
        <img src={Dark} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "dragon") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#4d64ab" }}>
        <img src={Dragon} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "electric") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#e5c600" }}>
        <img src={Electric} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "fairy") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#d480cf" }}>
        <img src={Fairy} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "fighting") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#a84c3d" }}>
        <img src={Fighting} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "fire") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#e53b19" }}>
        <img src={Fire} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "flying") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#87b5e5" }}>
        <img src={Flying} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "ghost") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#633c64" }}>
        <img src={Ghost} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "grass") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#58a951" }}>
        <img src={Grass} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "ground") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#956833" }}>
        <img src={Ground} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "ice") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#68baac" }}>
        <img src={Ice} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "poison") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#864ab8" }}>
        <img src={Poison} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "psychic") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#e55973" }}>
        <img src={Psychic} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "rock") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#a8995b" }}>
        <img src={Rock} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "steel") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#9999a8" }}>
        <img src={Steel} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else if (type === "water") {
    return (
      <div className="pokemonType" style={{ backgroundColor: "#278bcc" }}>
        <img src={Water} alt="PokemonType" />
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    );
  } else {
    return <p>This type does not exist.</p>;
  }
};

/* FARBCODES JE TYP:
bug (#83ad25) => DE: Käfer
dark (#463e3e) => DE: Unlicht
dragon (#4d64ab) => DE: Drache
electric (#e5c600) => DE: Elektro
fairy (#d480cf) => DE: Fee
fighting (#a84c3d) => DE: Kampf
fire (#e53b19) => DE: Feuer
flying (#87b5e5) => DE: Flug
ghost (#633c64) => DE: Geist
grass (#58a951) => DE: Pflanze
ground (#956833) => DE: Boden
ice (#68baac) => DE: Eis
normal (#a8a899) => DE: Normal 
poison (#864ab8) => DE: Gift
psychic (#e55973) => DE: Psycho
rock (#a8995b) => DE: Gestein
steel (#9999a8) => DE: Stahl
water (#278bcc) => DE: Wasser
*/
