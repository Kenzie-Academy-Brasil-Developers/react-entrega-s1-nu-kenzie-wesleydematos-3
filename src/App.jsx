import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Summary from "./components/Summary";
import Total from "./components/Total";
import Transactions from "./components/Transactions";
import carregamento from "./components/img/NoCard.png";

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Header />
      <main>
        <div className="box_left">
          <Transactions />
          {/* se houver lancamentos <Total totalValue={-700} /> */}
        </div>
        <div className="box_right">
          <Summary />
          <h2>Você ainda não possui nenhum lançamento</h2>
          <img src={carregamento} alt="Carregando" />
          <img src={carregamento} alt="Carregando" />
          <img src={carregamento} alt="Carregando" />
          {/* se  houver lancamentos */}
        </div>
      </main>
    </div>
  );
}

export default App;
