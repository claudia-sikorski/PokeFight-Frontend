import "./styles/home.css";
const Home = () => {
  return (
    <>
      <div className="home-content">
        <div className="exit-btn">
          <img src="./src/components/home-img/exit-button.png" alt="exit button" className="home-exit-img" />
        </div>
        <div className="home-menu">

        <img src="./src/components/home-img/pokemon-logo.png" alt="Logo Pokemon" className="home-pkm-logo" />
        
        <button className="home-pkm-btn btn-effect">

          <img src="./src/components/home-img/pokedex-logo.png" alt="" className="pokedex-btn" />
          <p className="elt1">POKEMON</p>

        </button>

        <button className="home-pkfight-btn btn-effect">

        <img src="./src/components/home-img/combat.png" alt="" className="pokedex-btn" />
          
          <p className="elt1">POKEFIGHT</p>
          
        </button>

        <button className="home-score-btn btn-effect">

        <img src="./src/components/home-img/score-logo.png" alt="" className="pokedex-btn" />
          
          <p className="elt1">HIGHSCORES</p>

        </button>
        

        </div>
      </div>

    </>
  );
};

export default Home;
