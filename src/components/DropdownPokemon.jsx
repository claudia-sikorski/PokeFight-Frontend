import "./styles/dropdown.css";
import Select from "react-select";

const PokemonDropdown = ({ pokemons }) => {
  return (
    <>
      <div className="dropdown_select">
      {pokemons && 
        <Select
          options={pokemons.map((pokemon) => {
            return { value: pokemon.data.name, label: pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1) };
          })}
        />}
      </div>
    </>
  );
};

export default PokemonDropdown;
