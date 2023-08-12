import { Link } from "react-router-dom";
import "./styles/home.css";
import { useState } from "react";
const Home = ({ playSong }) => {
  const [start, setStart] = useState(false);

  function showHome() {
    setStart(true);
    playSong();
  }

  return (
    <>
      <div className="home-content">
        <div className="home-menu">
          <img
            src="./src/assets/home-img/pokemon-logo.png"
            alt="Logo Pokemon"
            className="home-pkm-logo"
          />
          <div className="home-link-container">
            {!start && (
              <Link onClick={showHome} to={"/"} className="poke-home-link">
                <div className="poke-home-header">
                  <img
                    src="./src/assets/home-img/pokeball.png"
                    alt="Pokedex"
                    className="menu-button"
                  />
                </div>
                <p className="elt1">Start</p>
              </Link>
            )}
            {start && (
              <>
                <Link to={"/pokemon"} className="poke-home-link">
                  <div className="poke-home-header">
                    <img
                      src="./src/assets/home-img/icons8-pokedex-80.png"
                      alt="Pokedex"
                      className="menu-button"
                    />
                  </div>
                  <p className="elt1">POKEMON</p>
                </Link>
                <Link to={"/pokemon/fight"} className="poke-home-link">
                  <div className="poke-home-header">
                    <img
                      src="./src/assets/home-img/valor.png"
                      alt="Fght"
                      className="menu-button"
                    />
                  </div>
                  <p className="elt1">POKEFIGHT</p>
                </Link>
                <Link className="poke-home-link">
                  <div className="poke-list-header">
                    <img
                      src="./src/assets/home-img/icons8-hightscore-pokemon-96.png"
                      alt=""
                      className="menu-button"
                    />
                  </div>
                  <p className="elt1">HIGHSCORES</p>
                </Link>
                <h6>You can stop the song on - button</h6>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
