import CardItem from "../components/CardItem"
import { Grid } from "@mui/material"
import { getPerson, getStarShip} from "../services/api";
import "./Starship.css"
import { useState, useEffect } from "react";

// const nave = {
//   "name": "X-wing",
//   "model": "T-65 X-wing",
//   "manufacturer": "Incom Corporation",
//   "cost_in_credits": "149999",
//   "length": "12.5",
//   "max_atmosphering_speed": "1050",
//   "crew": "1",
//   "passengers": "0",
//   "cargo_capacity": "110",
//   "consumables": "1 week",
//   "hyperdrive_rating": "1.0",
//   "MGLT": "100",
//   "starship_class": "Starfighter",
//   "pilots": [
//       "https://swapi.dev/api/people/1/",
//       "https://swapi.dev/api/people/9/",
//       "https://swapi.dev/api/people/18/",
//       "https://swapi.dev/api/people/19/"
//   ],
//   "films": [
//       "https://swapi.dev/api/films/1/",
//       "https://swapi.dev/api/films/2/",
//       "https://swapi.dev/api/films/3/"
//   ],
//   "created": "2014-12-12T11:19:05.340000Z",
//   "edited": "2014-12-20T21:23:49.886000Z",
//   "url": "https://swapi.dev/api/starships/12/"
// }

// const pilots = [{
//   "name": "Luke Skywalker",
//   "height": "172",
//   "mass": "77",
//   "hair_color": "blond",
//   "skin_color": "fair",
//   "eye_color": "blue",
//   "birth_year": "19BBY",
//   "gender": "male",
//   "homeworld": "https://swapi.dev/api/planets/1/",
//   "films": [
//       "https://swapi.dev/api/films/1/",
//       "https://swapi.dev/api/films/2/",
//       "https://swapi.dev/api/films/3/",
//       "https://swapi.dev/api/films/6/"
//   ],
//   "species": [],
//   "vehicles": [
//       "https://swapi.dev/api/vehicles/14/",
//       "https://swapi.dev/api/vehicles/30/"
//   ],
//   "starships": [
//       "https://swapi.dev/api/starships/12/",
//       "https://swapi.dev/api/starships/22/"
//   ],
//   "created": "2014-12-09T13:50:51.644000Z",
//   "edited": "2014-12-20T21:17:56.891000Z",
//   "url": "https://swapi.dev/api/people/1/"
// },
// {
//   "name": "Biggs Darklighter",
//   "height": "183",
//   "mass": "84",
//   "hair_color": "black",
//   "skin_color": "light",
//   "eye_color": "brown",
//   "birth_year": "24BBY",
//   "gender": "male",
//   "homeworld": "https://swapi.dev/api/planets/1/",
//   "films": [
//       "https://swapi.dev/api/films/1/"
//   ],
//   "species": [],
//   "vehicles": [],
//   "starships": [
//       "https://swapi.dev/api/starships/12/"
//   ],
//   "created": "2014-12-10T15:59:50.509000Z",
//   "edited": "2014-12-20T21:17:50.323000Z",
//   "url": "https://swapi.dev/api/people/9/"
// },
// {
//   "name": "Wedge Antilles",
//   "height": "170",
//   "mass": "77",
//   "hair_color": "brown",
//   "skin_color": "fair",
//   "eye_color": "hazel",
//   "birth_year": "21BBY",
//   "gender": "male",
//   "homeworld": "https://swapi.dev/api/planets/22/",
//   "films": [
//       "https://swapi.dev/api/films/1/",
//       "https://swapi.dev/api/films/2/",
//       "https://swapi.dev/api/films/3/"
//   ],
//   "species": [],
//   "vehicles": [
//       "https://swapi.dev/api/vehicles/14/"
//   ],
//   "starships": [
//       "https://swapi.dev/api/starships/12/"
//   ],
//   "created": "2014-12-12T11:08:06.469000Z",
//   "edited": "2014-12-20T21:17:50.341000Z",
//   "url": "https://swapi.dev/api/people/18/"
// },
// {
//   "name": "Jek Tono Porkins",
//   "height": "180",
//   "mass": "110",
//   "hair_color": "brown",
//   "skin_color": "fair",
//   "eye_color": "blue",
//   "birth_year": "unknown",
//   "gender": "male",
//   "homeworld": "https://swapi.dev/api/planets/26/",
//   "films": [
//       "https://swapi.dev/api/films/1/"
//   ],
//   "species": [],
//   "vehicles": [],
//   "starships": [
//       "https://swapi.dev/api/starships/12/"
//   ],
//   "created": "2014-12-12T11:16:56.569000Z",
//   "edited": "2014-12-20T21:17:50.343000Z",
//   "url": "https://swapi.dev/api/people/19/"
// }
// ]
const convertHeight = (height) => {
  if(height === undefined){
    return "";
  }
  const stringHeight = height.toString()
  const splitedHeight = stringHeight.split(".")
  
  return `${splitedHeight[0]} metro(s) e ${splitedHeight[1]} centímetros`
}

const extractId = (url) => {
  return url.replace("https://swapi.dev/api/people/", "").replace("/", "")
}

const extractIdFromPath = (url) => {
  return url.replace("/nave/","");
};

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
      let id = extractId(starShip.pilots[i]);
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
    getStarShipInfo(extractIdFromPath(args.location.pathname));
  },[args.location.pathname]);

  useEffect(()=>{
    populatePilotsIds()
  },[starShip]);

  return (
    <div>
      <h1>{starShip.name}</h1>
      <section className="starship-info">
        <p><b>Tamanho:</b> {convertHeight(starShip?.length)} </p>
        <p><b>Fabricante:</b>{starShip.manufacturer}</p>
        <p><b>Modelo:</b>{starShip.model}</p>
        <p><b>Aparece em:</b> {starShip.films?.length} filmes </p>
      </section>
      <div className="line">
        <hr></hr>
      </div>
      <section className="starship">
        <h2>Pilotos</h2>
        <Grid container  >
            {pilotsList.map(pilot =>(
              <Grid item  xs={12} key={extractId(pilot.url)}>
                <CardItem to={`/personagem/${extractId(pilot.url)}`} >{pilot.name}</CardItem>
              </Grid>
            ))}
          </Grid>
      </section>
    </div>
  );
};

export default Startship;
