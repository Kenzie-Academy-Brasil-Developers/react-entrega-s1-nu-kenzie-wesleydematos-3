import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Summary from "./components/Summary";
import Total from "./components/Total";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="box_left">
          <Transactions />
          <Total totalValue={-700} />
        </div>
        <div className="box_right"></div>
        <Summary />
        {/* <LandingPage /> */}
      </main>
    </div>
  );
}

export default App;
