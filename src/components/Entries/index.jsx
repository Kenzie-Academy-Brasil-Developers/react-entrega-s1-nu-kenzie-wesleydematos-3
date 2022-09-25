import "./style.css";
import trash from "../img/trash.png";

const Entries = ({
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
    <li className="entries">
      <div className="div__green"></div>
      <div className="div__data__in">
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
        <p>Entrada</p>
      </div>
    </li>
  );
};

export default Entries;
