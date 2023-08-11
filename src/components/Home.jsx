import { Link } from "react-router-dom";
import "./styles/home.css";
const Home = () => {
  return (
    <>
    {/* <audio loop = 'true' autoplay ='true'>
  <source src="/src/assets/sounds/pikapika.mp3" type="audio/mpeg" />
  </audio> */}
  
      <div className="home-content">
        <div className="home-menu">
          <img
            src="./src/assets/home-img/pokemon-logo.png"
            alt="Logo Pokemon"
            className="home-pkm-logo"
          />
          <Link to={"/pokemon"} className="poke-home-link">
            <div className="poke-home-header">
              <img
                src="./src/assets/home-img/pokedex-logo.png"
                alt="Pokedex" className="menu-button"
              />
            </div>

            <p className="elt1">POKEMON</p>
          </Link>
          <Link to={"/pokemon/fight"} className="poke-home-link">
            <div className="poke-home-header">
              <img
                 src="./src/assets/home-img/combat.png"
                alt="Fght" className="menu-button"
              />
            </div>
            <p className="elt1">POKEFIGHT</p>
          </Link>
          <Link className="poke-home-link">
            <div className="poke-list-header">
              <img
                 src="./src/assets/home-img/score-logo.png"
                alt="" className="menu-button"
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
