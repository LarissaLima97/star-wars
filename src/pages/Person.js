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

const convertHeight = (height) => {
  const partialHeight =  height/100;
  const stringHeight = partialHeight.toString()
  const splitedHeight = stringHeight.split(".")
  
  return `${splitedHeight[0]} metro(s) e ${splitedHeight[1]} centímetros`
}


const Person = () => {
  return (
    <div>
      <h1>{character.name}</h1>
      <div className="character-info">
        <p><b>Data de nascimento:</b>{character.birth_year}</p>
        <p><b>Altura:</b> {convertHeight(character.height)} </p>
        <p><b>Aparece em:</b> {character.films.length} filmes </p>
      </div>
    </div>
  );
};

export default Person;
