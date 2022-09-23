import "./style.css";

const Total = ({ totalValue }) => {
  return (
    <div className="total">
      <div className="total_value__box">
        <h2>Valor total:</h2>
        <p>R${totalValue}</p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};

export default Total;
