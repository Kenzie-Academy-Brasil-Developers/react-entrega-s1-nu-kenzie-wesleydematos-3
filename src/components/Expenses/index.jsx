import "./style.css";
import trash from "../img/trash.png";

const Expenses = ({
  valueTrans,
  descriptionTrans,
  transactions,
  setTransactions,
  index,
}) => {
  function removeNumber(event) {
    const id = event.target.id;

    const newTransactions = transactions.filter((element, index) => {
      if (index != id) {
        return element;
      }
    });

    setTransactions(newTransactions);
  }

  return (
    <li className="expenses">
      <div className="div__red"></div>
      <div className="div__data__out">
        <div>
          <h2>{descriptionTrans}</h2>
          <div>
            <p>{valueTrans}</p>
            <img
              id={index}
              src={trash}
              alt="lixeira"
              onClick={(event) => removeNumber(event)}
            />
          </div>
        </div>
        <p>Despesa</p>
      </div>
    </li>
  );
};

export default Expenses;
