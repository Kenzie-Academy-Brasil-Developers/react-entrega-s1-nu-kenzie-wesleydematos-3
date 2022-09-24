import "./style.css";
import nukenzie from "../img/nukenzie.png";
import illustration from "../img/illustration.svg";

const LandingPage = ({ setAuth, auth }) => {
  return (
    <div className="landingPage">
      <div className="landingPage__content">
        <img src={nukenzie} alt="NuKenzie Logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button
          type="button"
          className="buttonPinkMedium"
          onClick={() => setAuth(!auth)}
        >
          Iniciar
        </button>
      </div>
      <img src={illustration} alt="Ilustração" />
    </div>
  );
};

export default LandingPage;
