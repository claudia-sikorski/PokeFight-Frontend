import { Link } from "react-router-dom";
import "./styles/home.css";
const Home = () => {
  return (
    <>
      <div className="home-content">
        <div className="exit-btn">
          <img src="./src/assets/home-img/exit-button.png" alt="exit button" className="home-exit-img" />
        </div>
        <div className="home-menu">
          <img
            src="./src/components/home-img/pokemon-logo.png"
            alt="Logo Pokemon"
            className="home-pkm-logo"
          />
          <Link to={"/pokemon"} className="poke-home-link">
            <div className="poke-list-header">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`}
                alt=""
              />
            </div>

            <p className="elt1">Pokemon</p>
          </Link>
          <Link to={"/pokemon/fight"} className="poke-home-link">
            <div className="poke-list-header">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`}
                alt=""
              />
            </div>
            <p className="elt1">POKEFIGHT</p>
          </Link>
          <Link className="poke-home-link">
            <div className="poke-list-header">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`}
                alt=""
              />
            </div>
            <p className="elt1">HIGHSCORES</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
