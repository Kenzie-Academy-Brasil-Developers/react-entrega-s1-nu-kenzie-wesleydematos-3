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

    // if (id === "Todos") {
    //   setTransactions(transactions);
    //   console.log(transactions);
    // }
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
          id="Despesas"
        >
          Despesas
        </button>
      </div>
    </div>
  );
};

export default Summary;
