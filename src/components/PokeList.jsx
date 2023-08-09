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
            <li key={pokemon.data.name}>
              PokeID: {pokemon.data.id} Pokemon: {pokemon.data.name}
            </li>
          );
        })}
    </>
  );
};

export default PokeList;
