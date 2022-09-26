import "./style.css";
import ButtonGreySmall from "../ButtonGreySmall";
import ButtonPinkSmall from "../ButtonPinkSmall";

const Summary = ({
  transactions,
  setTransactions,
  transactionsFiltred,
  setTransactionsFiltred,
}) => {
  function filterTransactions(event) {
    const id = event.target.id;
    const botao = event.target;
    const botaoRosa = document.querySelector(".buttonPinkSmall");

    const newTransactionFil = transactions.filter((element) => {
      return id == element.typeValue;
    });

    setTransactionsFiltred(newTransactionFil);
    console.log(transactionsFiltred);

    if (id === "Todos") {
      // setTransactions(transactions);
      if (botaoRosa !== id) {
        botaoRosa.classList.toggle("buttonPinkSmall");
        botaoRosa.classList.toggle("buttonGreySmall");
        botao.classList.toggle("buttonPinkSmall");
      }
    } else if (id === "Entrada") {
      if (botaoRosa !== id) {
        botaoRosa.classList.toggle("buttonPinkSmall");
        botaoRosa.classList.toggle("buttonGreySmall");
        botao.classList.toggle("buttonPinkSmall");
      }
    } else {
      if (botaoRosa !== id) {
        botaoRosa.classList.toggle("buttonPinkSmall");
        botaoRosa.classList.toggle("buttonGreySmall");
        botao.classList.toggle("buttonPinkSmall");
      }
    }
  }

  return (
    <div className="summary">
      <h2>Resumo financeiro</h2>
      <div className="summary__btns">
        <button
          type="button"
          className="buttonPinkSmall"
          onClick={(event) => filterTransactions(event)}
          id="Todos"
        >
          Todos
        </button>
        <button
          type="button"
          className="buttonGreySmall"
          onClick={(event) => filterTransactions(event)}
          id="Entrada"
        >
          Entradas
        </button>
        <button
          type="button"
          className="buttonGreySmall"
          onClick={(event) => filterTransactions(event)}
          id="Despesa"
        >
          Despesas
        </button>
      </div>
    </div>
  );
};

export default Summary;
