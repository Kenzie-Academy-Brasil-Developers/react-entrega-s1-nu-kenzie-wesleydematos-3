import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Summary from "./components/Summary";
import Total from "./components/Total";
import Transactions from "./components/Transactions";
import carregamento from "./components/img/NoCard.png";
import { useState } from "react";
import Expenses from "./components/Expenses";
import Entries from "./components/Entries";

function App() {
  const [auth, setAuth] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [transactionsFiltred, setTransactionsFiltred] = useState([]);

  if (!auth) {
    return <LandingPage auth={auth} setAuth={setAuth} />;
  }

  return (
    <div className="App">
      <Header auth={auth} setAuth={setAuth} />

      {!transactions.length && (
        <main>
          <div className="box_left">
            <Transactions
              transactions={transactions}
              setTransactions={setTransactions}
            />
          </div>
          <div className="box_right">
            <Summary />

            <h2>Você ainda não possui nenhum lançamento</h2>
            <img src={carregamento} alt="Carregando" />
            <img src={carregamento} alt="Carregando" />
            <img src={carregamento} alt="Carregando" />
          </div>
        </main>
      )}

      {transactions.length && (
        <main>
          <div className="box_left">
            <Transactions
              transactions={transactions}
              setTransactions={setTransactions}
            />
            <Total transactions={transactions} />
          </div>
          <div className="box_right">
            <Summary
              transactions={transactions}
              transactionsFiltred={transactionsFiltred}
              setTransactionsFiltred={setTransactionsFiltred}
            />

            <ul>
              {!transactionsFiltred.length &&
                transactions.map((transaction, index) => {
                  return transaction.typeValue === "Entrada" ? (
                    <Entries
                      valueTrans={`R$ ${transaction.value}`}
                      descriptionTrans={transaction.description}
                      key={index}
                      transactions={transactions}
                      setTransactions={setTransactions}
                      index={index}
                    />
                  ) : (
                    <Expenses
                      valueTrans={`R$ ${transaction.value}`}
                      descriptionTrans={transaction.description}
                      key={index}
                      transactions={transactions}
                      setTransactions={setTransactions}
                      index={index}
                    />
                  );
                })}

              {transactionsFiltred.length &&
                transactionsFiltred.map((transaction, index) => {
                  return transaction.typeValue === "Entrada" ? (
                    <Entries
                      valueTrans={`R$ ${transaction.value}`}
                      descriptionTrans={transaction.description}
                      key={index}
                      transactions={transactionsFiltred}
                      setTransactions={setTransactionsFiltred}
                      index={index}
                    />
                  ) : (
                    <Expenses
                      valueTrans={`R$ ${transaction.value}`}
                      descriptionTrans={transaction.description}
                      key={index}
                      transactions={transactionsFiltred}
                      setTransactions={setTransactionsFiltred}
                      index={index}
                    />
                  );
                })}
            </ul>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
