import "./style.css";
import trash from "../img/trash.png";

const Entries = ({ valueTrans, descriptionTrans }) => {
  return (
    <li className="entries">
      <div className="div__green"></div>
      <div className="div__data__in">
        <div>
          <h2>{descriptionTrans}</h2>
          <div>
            <p>{valueTrans}</p>
            <img src={trash} alt="lixeira" />
          </div>
        </div>
        <p>Entrada</p>
      </div>
    </li>
  );
};

export default Entries;
