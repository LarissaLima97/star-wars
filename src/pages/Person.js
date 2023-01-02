import CardItem from "../components/CardItem";
import { Grid } from "@mui/material";
import "./Person.css"
import { getPerson, getStarShip} from "../services/api";
import { useState, useEffect } from "react";
import { extractIdFromAPI, extractIdFromPath, convertHeightPerson } from "../services/utils";
import HomeButton from "../components/HomeButton";

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
      let id = extractIdFromAPI(character.starships[i], "starships/");
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
      getPersonInfos(extractIdFromPath(args.location.pathname, "/personagem/"));
    },[args.location.pathname]);

    useEffect(()=>{
      populateStarshipIds()
    },[character]);

  return (
    <div>
      <HomeButton></HomeButton>
      <h1>{character.name}</h1>
      <section className="character-info">
        <p><b>Data de nascimento: </b>{character.birth_year}</p>
        <p><b>Altura: </b>{convertHeightPerson(character.height)} </p>
        <p><b>Aparece em: </b>{character.films?.length} filmes </p>
      </section>
      <div className="line">
        <hr></hr>
      </div>
      <section className="starship">
        <h2>Naves</h2>
        <Grid container spacing={2} >
            {starShipList.map(starship =>(
              <Grid item  xs={12} key={extractIdFromAPI(starship.url,"starships/")}>
                <CardItem to={`/nave/${extractIdFromAPI(starship.url,"starships/")}`} >{starship.name}</CardItem>
              </Grid>
            ))}
          </Grid>
      </section>
    </div>
  );
};

export default Person;
