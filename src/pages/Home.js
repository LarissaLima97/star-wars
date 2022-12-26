import ButtonStep from "../components/ButtonStep";
import "./Home.css"

const Home = () => {
  return (
    <div> 
        <h1>Personagens Star Wars</h1>
        <div className="button-previous">
          <ButtonStep>Anterior</ButtonStep>
        </div>
        <div className="button-next">
          <ButtonStep>Próximo</ButtonStep>
        </div>
    </div>

  );
};

export default Home;
