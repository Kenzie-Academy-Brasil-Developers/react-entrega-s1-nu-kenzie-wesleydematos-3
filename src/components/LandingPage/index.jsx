import "./style.css";
import nukenzie from "../img/nukenzie.png";
import illustration from "../img/illustration.svg";
import ButtonPinkMedium from "../ButtonPinkMedium";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="landingPage__content">
        <img src={nukenzie} alt="NuKenzie Logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <ButtonPinkMedium content="Iniciar" />
      </div>
      <img src={illustration} alt="Ilustração" />
    </div>
  );
};

export default LandingPage;
