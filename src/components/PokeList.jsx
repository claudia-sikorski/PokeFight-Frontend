import "./styles/pokeList.css";

const PokeList = ({ pokemons }) => {
  if (pokemons) {
    console.log("pokeList:", pokemons);
  }

  return (
    <>
      <h1>Hallo PokeList</h1>
      {pokemons &&
        pokemons.map((pokemon) => {
          return (
            <div className="poke-list-container" key={pokemon.data.name}>
              <li>
                PokeID: {pokemon.data.base_experience} Pokemon:{" "}
                {pokemon.data.name}
              </li>
            </div>
          );
        })}
    </>
  );
};

export default PokeList;
