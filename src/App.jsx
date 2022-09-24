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
  const [transaction, setTransaction] = useState([]);

  return (
    <div className="App">
      {!auth ? (
        <LandingPage auth={auth} setAuth={setAuth} />
      ) : (
        <>
          <Header auth={auth} setAuth={setAuth} />

          <main>
            <div className="box_left">
              <Transactions />
              <Total totalValue={-700} />
            </div>
            <div className="box_right">
              <Summary />
              <ul>
                <Entries
                  valueTrans="3.000,00"
                  descriptionTrans="Salário - Setembro"
                />
                <Expenses
                  valueTrans="3.000,00"
                  descriptionTrans="Compras Mercado"
                />
              </ul>
            </div>
          </main>

          {/* 
          PARA QUANDO NÃO HOUVER LANÇAMENTOS
          
          <Header auth={auth} setAuth={setAuth} />

          <main>
            <div className="box_left">
              <Transactions />
            </div>
            <div className="box_right">
              <Summary />

              <h2>Você ainda não possui nenhum lançamento</h2>
              <img src={carregamento} alt="Carregando" />
              <img src={carregamento} alt="Carregando" />
              <img src={carregamento} alt="Carregando" />
            </div>
          </main> */}
        </>
      )}
    </div>
  );
}

export default App;
