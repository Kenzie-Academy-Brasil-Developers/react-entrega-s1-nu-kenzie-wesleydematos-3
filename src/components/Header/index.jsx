import "./style.css";
import nukenzie from "../img/nukenziepreto.png";

const Header = ({ auth, setAuth }) => {
  return (
    <header>
      <img src={nukenzie} alt="Logo NuKenzie" />
      <button
        type="button"
        className="buttonGreySmall"
        onClick={() => setAuth(!auth)}
      >
        Início
      </button>
    </header>
  );
};

export default Header;
