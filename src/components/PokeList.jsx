import "./styles/pokeList.css";
import { Link } from "react-router-dom";

const PokeList = ({ pokemons }) => {
  // if (pokemons) {
  //   console.log("pokeList:", pokemons);
  // }

  return (
    <>
      <div className="poke-list-container">
        {pokemons &&
          pokemons.map((pokemon) => {
            const pokeName =
              pokemon.data.name.charAt(0).toUpperCase() +
              pokemon.data.name.slice(1);
            return (
              <Link
                key={pokemon.data.name}
                className="poke-list-link"
                to={`/pokemon/${pokemon.data.id}`}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pokemon.data.id && pokemon.data.id
                  }.png`}
                  alt=""
                />
                <p>{pokeName}</p>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default PokeList;
