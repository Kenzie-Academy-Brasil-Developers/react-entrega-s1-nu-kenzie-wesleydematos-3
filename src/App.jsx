import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="App">
      <Header />
      <Transactions />
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
