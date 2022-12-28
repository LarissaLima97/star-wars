import CardItem from "../components/CardItem";
import { Grid } from "@mui/material";
import "./Person.css"


const character =  {
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.dev/api/planets/1/",
  "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
  ],
  "species": [],
  "vehicles": [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/"
  ],
  "starships": [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.dev/api/people/1/"
}

const naves = [{
  "name": "X-wing",
  "model": "T-65 X-wing",
  "manufacturer": "Incom Corporation",
  "cost_in_credits": "149999",
  "length": "12.5",
  "max_atmosphering_speed": "1050",
  "crew": "1",
  "passengers": "0",
  "cargo_capacity": "110",
  "consumables": "1 week",
  "hyperdrive_rating": "1.0",
  "MGLT": "100",
  "starship_class": "Starfighter",
  "pilots": [
      "https://swapi.dev/api/people/1/",
      "https://swapi.dev/api/people/9/",
      "https://swapi.dev/api/people/18/",
      "https://swapi.dev/api/people/19/"
  ],
  "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/"
  ],
  "created": "2014-12-12T11:19:05.340000Z",
  "edited": "2014-12-20T21:23:49.886000Z",
  "url": "https://swapi.dev/api/starships/12/"
},
{
  "name": "Imperial shuttle",
  "model": "Lambda-class T-4a shuttle",
  "manufacturer": "Sienar Fleet Systems",
  "cost_in_credits": "240000",
  "length": "20",
  "max_atmosphering_speed": "850",
  "crew": "6",
  "passengers": "20",
  "cargo_capacity": "80000",
  "consumables": "2 months",
  "hyperdrive_rating": "1.0",
  "MGLT": "50",
  "starship_class": "Armed government transport",
  "pilots": [
      "https://swapi.dev/api/people/1/",
      "https://swapi.dev/api/people/13/",
      "https://swapi.dev/api/people/14/"
  ],
  "films": [
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/"
  ],
  "created": "2014-12-15T13:04:47.235000Z",
  "edited": "2014-12-20T21:23:49.900000Z",
  "url": "https://swapi.dev/api/starships/22/"
}
]

const convertHeight = (height) => {
  const partialHeight =  height/100;
  const stringHeight = partialHeight.toString()
  const splitedHeight = stringHeight.split(".")
  
  return `${splitedHeight[0]} metro(s) e ${splitedHeight[1]} centímetros`
}

const extractId = (url) => {
  const id = url.replace("https://swapi.dev/api/starships/", "").replace("/", "")
  return id 
}



const Person = () => {
  return (
    <div>
      <h1>{character.name}</h1>
      <section className="character-info">
        <p><b>Data de nascimento:</b>{character.birth_year}</p>
        <p><b>Altura:</b> {convertHeight(character.height)} </p>
        <p><b>Aparece em:</b> {character.films.length} filmes </p>
      </section>
      <div class="line">
        <hr></hr>
      </div>
      <section className="starship">
        <h2>Naves</h2>
        <Grid container spacing={2} >
            {naves.map(starship =>(
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
