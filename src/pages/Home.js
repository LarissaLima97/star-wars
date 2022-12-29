import { getPeopleList } from "../services/api";
import ButtonStep from "../components/ButtonStep";
import Grid from '@mui/material/Grid';
import CardItem from "../components/CardItem";
import { useState, useEffect } from "react";
import "./Home.css"

const extractId = (url) => {
  return url.replace("https://swapi.dev/api/people/", "").replace("/", "");
}

const extractPageNumber = (url) => {
    if(url === null || url === undefined){
        return null
    }
    return url.replace("https://swapi.dev/api/people/?page=", "")
}

const Home = () => {
    const [peopleList, setPeopleList] = useState([]);
    const [pagePrevious, setPagePrevious] = useState();
    const [pageNext, setPageNext] = useState();
    const [isDisabledBtnPrevious, setIsDisableBtnPrevious] = useState(true);
    const [isDisabledBtnNext, setIsDisableBtnNext] = useState(true);

    const handleDisabledPrev = (page) => {
        if(page === null){
            setIsDisableBtnPrevious(true);
        }
        else{
            setIsDisableBtnPrevious(false);
        }
    }

    const handleDisabledNext = (page) => {
        if(page === null){
            setIsDisableBtnNext(true);
        }
        else{
            setIsDisableBtnNext(false);
        }
    }

    const getInfos = async (page) =>{
        const res = await getPeopleList(page)
        setPeopleList(res.results)
        setPagePrevious(extractPageNumber(res.previous))
        setPageNext(extractPageNumber(res.next))
        handleDisabledPrev(res.previous)
        handleDisabledNext(res.next)
    };

    useEffect(()=>{
        getInfos(1)
    },[])

  return (
    <div> 
        <h1>Personagens Star Wars</h1>
        <Grid container spacing={2} >
          {peopleList.map(character =>(
            <Grid item key={extractId(character.url)}>
              <CardItem to={`personagem/${extractId(character.url)}`}>{character.name}</CardItem>
            </Grid>
          ))}
        </Grid>
        <div className="button-previous">
          <ButtonStep onClick={() => getInfos(pagePrevious)} disabled={isDisabledBtnPrevious}>Anterior</ButtonStep>
        </div>
        <div className="button-next">
          <ButtonStep onClick={() => getInfos(pageNext)} disabled={isDisabledBtnNext}>Próximo</ButtonStep>
        </div>
    </div>
  );
};

export default Home;
