import "./style.css";
import nukenzie from "../img/nukenziepreto.png";
import ButtonGreySmall from "../ButtonGreySmall";

const Header = () => {
  return (
    <header>
      <img src={nukenzie} alt="Logo NuKenzie" />
      <ButtonGreySmall content="Início" />
    </header>
  );
};

export default Header;
