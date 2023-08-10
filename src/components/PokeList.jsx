import "./styles/pokeList.css";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const PokeList = ({
  pokemons,
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  // if (pokemons) {
  //   console.log("pokeList:", pokemons);
  // }

  return (
    <>
      <div className="pokeList_Background"></div>
      <div className="poke-list-container">
        {pokemons &&
          pokemons.map((pokemon) => {
            const pokeName =
              pokemon.data.name.charAt(0).toUpperCase() +
              pokemon.data.name.slice(1);
            return (
              <>
                <Link
                  key={pokemon.data.name}
                  className="poke-list-link"
                  to={`/pokemon/${pokemon.data.id}`}
                >
                  <div className="poke-list-header">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        pokemon.data.id && pokemon.data.id
                      }.png`}
                      alt=""
                    />
                  </div>
                  <p>{pokeName}</p>
                </Link>
              </>
            );
          })}
      </div>
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default PokeList;
