import CardItem from "../components/CardItem"
import { Grid } from "@mui/material"
import { getPerson, getStarShip} from "../services/api";
import "./Starship.css"
import { useState, useEffect } from "react";
import { extractIdFromAPI, extractIdFromPath, convertHeightStarShip } from "../services/utils";
import HomeButton from "../components/HomeButton";

const Startship = (args) => {
  const[starShip, setStarShip] = useState({});
  const[pilotsList, setPilotsList] = useState([]);
  let pilotsIds = [];
  let pilots = []

  const getStarShipInfo = async (id) => {
    const response = await getStarShip(id);
    setStarShip(response)
  };

  const populatePilotsIds = () => {
    for (let i=0; i < starShip.pilots?.length; i++){
      let id = extractIdFromAPI(starShip.pilots[i],"people/");
      pilotsIds.push(id);
    }
    populatePilotsList();
  };

  const getPilotInfo = async (id) => {
    const response = await getPerson(id);
    return response;
  };

  const populatePilotsList = async () => {
    for (let i=0; i < pilotsIds.length; i++){
      const pilot = await getPilotInfo(pilotsIds[i]);
      pilots.push(pilot);
    }
    setPilotsList(pilots);
  };

  useEffect(()=>{
    getStarShipInfo(extractIdFromPath(args.location.pathname, "/nave/"));
  },[args.location.pathname]);

  useEffect(()=>{
    populatePilotsIds()
  },[starShip]);

  return (
    <div>
      <HomeButton></HomeButton>
      <h1>{starShip.name}</h1>
      <section className="starship-info">
        <p><b>Tamanho: </b> {convertHeightStarShip(starShip?.length)} </p>
        <p><b>Fabricante: </b>{starShip.manufacturer}</p>
        <p><b>Modelo: </b>{starShip.model}</p>
        <p><b>Aparece em: </b>{starShip.films?.length} filmes </p>
      </section>
      <div className="line">
        <hr></hr>
      </div>
      <section className="starship">
        <h2>Pilotos</h2>
        <Grid container  >
            {pilotsList.map(pilot =>(
              <Grid item  xs={12} key={extractIdFromAPI(pilot.url, "people/")}>
                <CardItem to={`/personagem/${extractIdFromAPI(pilot.url, "people/")}`} >{pilot.name}</CardItem>
              </Grid>
            ))}
          </Grid>
      </section>
    </div>
  );
};

export default Startship;
