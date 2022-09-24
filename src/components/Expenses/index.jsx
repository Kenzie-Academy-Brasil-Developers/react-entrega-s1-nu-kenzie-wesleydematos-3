import "./style.css";
import trash from "../img/trash.png";

const Expenses = ({ valueTrans, descriptionTrans }) => {
  return (
    <li className="expenses">
      <div className="div__red"></div>
      <div className="div__data__out">
        <div>
          <h2>{descriptionTrans}</h2>
          <div>
            <p>{valueTrans}</p>
            <img src={trash} alt="lixeira" />
          </div>
        </div>
        <p>Despesa</p>
      </div>
    </li>
  );
};

export default Expenses;
