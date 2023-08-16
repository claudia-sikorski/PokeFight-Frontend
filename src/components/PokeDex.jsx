// Imports
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./styles/PokeDex.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faGlobe,
  faInfoCircle,
  faExplosion,
} from "@fortawesome/free-solid-svg-icons";
import iconPokedex from "../assets/pokedex-icon.png";
import iconHeight from "../assets/icon-height.png";
import iconWeight from "../assets/icon-weight.png";
import { PokeTypes } from "./PokeTypes.jsx";

// PokeDex Component
const PokeDex = () => {
  let { id } = useParams();

  const [name, setName] = useState("");
  const [number, setNumber] = useState(null);
  const [types, setTypes] = useState([]);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [moves, setMoves] = useState([]);
  const [hp, setHp] = useState(null);
  const [attack, setAttack] = useState(null);
  const [defense, setDefense] = useState(null);
  const [speed, setSpeed] = useState(null);

  const nextPokemon = number + 1;
  const previousPokemon = number - 1;

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      setName(response.data.name);
      setNumber(response.data.id);
      setTypes(response.data.types.map((type) => type.type.name));
      setHeight(response.data.height / 10);
      setWeight(response.data.weight / 10);
      setMoves(response.data.moves.map((move) => move.move.name));
      setHp(response.data.stats[0].base_stat);
      setAttack(response.data.stats[1].base_stat);
      setDefense(response.data.stats[2].base_stat);
      setSpeed(response.data.stats[5].base_stat);
    });
  }, [id]);

  return (
    <>
      <div className="pokeDex_Background"></div>
      <div className="pokeDex_Container">
        <div className="pokeDex_Header">
          <div className="pokeDex_HeaderLeft">
            <img src={iconPokedex} alt="Pokedex Icon" id="pokedex_Icon" />
            <p>Pokédex</p>
          </div>
          <div className="pokeDex_HeaderRight"></div>
        </div>
        <div className="pokemonName">
          <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
          <p>{`No. ${number}`}</p>
        </div>
        <div className="pokemonType_Container">
          {types.map((type) => {
            return <PokeTypes key={type} type={type} />;
          })}
        </div>
        <div className="pokeDexImage">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${number}.png`}
            alt="pokemon"
          />
        </div>
        <div className="pokeDexDetails">
          <Tabs>
            <TabList>
              <Tab>
                <FontAwesomeIcon className="Tab_Icons" icon={faInfoCircle} />
              </Tab>
              <Tab>
                <FontAwesomeIcon className="Tab_Icons" icon={faGlobe} />
              </Tab>
              <Tab>
                <FontAwesomeIcon className="Tab_Icons" icon={faExplosion} />
              </Tab>
            </TabList>

            <TabPanel className="Panel_DetailsWrapper">
              <div className="Panel_Details">
                <img
                  src={iconHeight}
                  alt="Icon Height"
                  className="Panel_Details_Image"
                />
                <div className="Panel_Details_Text">
                  <p>Height</p>
                  <p>{`${height} m`}</p>
                </div>
              </div>
              <div className="Panel_Details">
                <img
                  src={iconWeight}
                  alt="Icon Weight"
                  className="Panel_Details_Image"
                />
                <div className="Panel_Details_Text">
                  <p>Weight</p>
                  <p>{`${weight} kg`}</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="Panel_Stats">
              <p id="stats_Header">Stats</p>
              <div className="Panel_Stats_Wrapper">
                <div className="Panel_Stats_Info1">
                  <p>HP</p>
                  <p>Attack</p>
                  <p>Defense</p>
                  <p>Speed</p>
                </div>
                <div className="Panel_Stats_Info2">
                  <p>{hp}</p>
                  <p>{attack}</p>
                  <p>{defense}</p>
                  <p>{speed}</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="Panel_LearnedAttacks">
              <p id="attack_Header">Learned Attacks</p>
              <div className="ListedAttacks">
                <p className="attack">
                  {moves[Math.floor(Math.random() * moves.length)]}
                </p>
                <p className="attack">
                  {moves[Math.floor(Math.random() * moves.length)]}
                </p>
                <p className="attack">
                  {moves[Math.floor(Math.random() * moves.length)]}
                </p>
                <p className="attack">
                  {moves[Math.floor(Math.random() * moves.length)]}
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className="pokeDex_Footer">
          <Link
            to={`/pokemon/${previousPokemon}`}
            className={number < 2 ? "disabled_Link" : "pokeDex_Footer_Btn"}
          >
            <div id={number < 2 ? "disabled_Btn" : "Btn"}>
              <FontAwesomeIcon
                icon={faAngleDoubleLeft}
                style={{ color: "#ffffff" }}
              />
            </div>
            <p>Previous</p>
          </Link>
          <Link
            to={`/pokemon/${nextPokemon}`}
            className={number > 150 ? "disabled_Link" : "pokeDex_Footer_Btn"}
          >
            <div id={number > 150 ? "disabled_Btn" : "Btn"}>
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                style={{ color: "#ffffff" }}
              />
            </div>
            <p>Next</p>
          </Link>
          <Link to={"/pokemon"} className="pokeDex_Footer_Btn">
            <div id="Btn">B</div>
            <p>Exit</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PokeDex;
