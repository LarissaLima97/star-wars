import CardItem from "../components/CardItem";
import { Grid } from "@mui/material";
import "./Person.css"
import { getPerson, getStarShip} from "../services/api";
import { useState, useEffect } from "react";


const convertHeight = (height) => {
  const partialHeight =  height/100;
  const stringHeight = partialHeight.toString();
  const splitedHeight = stringHeight.split(".");
  
  return `${splitedHeight[0]} metro(s) e ${splitedHeight[1]} centímetros`;
}

const extractId = (url) => {
  return url.replace("https://swapi.dev/api/starships/", "").replace("/", "");
};

const extractIdFromPath = (url) => {
  return url.replace("/personagem/","");
};

const Person = (args) => {
  const[character, setCharacter] = useState({});
  const[starShipList, setStarShipList] = useState([]);
  let starShips = [];
  let starShipIds = [];

  const getPersonInfos = async (id) =>{
    const response = await getPerson(id);
    setCharacter(response);
  };

  const populateStarshipIds = () => {
    for (let i=0; i < character.starships?.length; i++){
      let id = extractId(character.starships[i]);
      starShipIds.push(id);
    }
    populateStarShipList();
  };
  
  const getStarShipInfo = async (id) => {
    const response = await getStarShip(id);
    return response;
  };

  const populateStarShipList = async () => {
    for (let i=0; i < starShipIds.length; i++){
      const starShip = await getStarShipInfo(starShipIds[i]);
      starShips.push(starShip);
    }
    setStarShipList(starShips);
  };
    
    useEffect(()=>{
      getPersonInfos(extractIdFromPath(args.location.pathname));
    },[args.location.pathname]);

    useEffect(()=>{
      populateStarshipIds()
    },[character]);

  return (
    <div>
      <h1>{character.name}</h1>
      <section className="character-info">
        <p><b>Data de nascimento:</b>{character.birth_year}</p>
        <p><b>Altura:</b> {convertHeight(character.height)} </p>
        <p><b>Aparece em:</b> {character.films?.length} filmes </p>
      </section>
      <div className="line">
        <hr></hr>
      </div>
      <section className="starship">
        <h2>Naves</h2>
        <Grid container spacing={2} >
            {starShipList.map(starship =>(
              <Grid item  xs={12} key={extractId(starship.url)}>
                <CardItem to={`/nave/${extractId(starship.url)}`} >{starship.name}</CardItem>
              </Grid>
            ))}
          </Grid>
      </section>
    </div>
  );
};

export default Person;
