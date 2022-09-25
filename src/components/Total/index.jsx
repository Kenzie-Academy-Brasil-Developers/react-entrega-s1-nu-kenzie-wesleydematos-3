import "./style.css";

const Total = ({ transactions }) => {
  const sum = transactions.reduce((acumulador, valorAtual) => {
    return valorAtual.typeValue === "Entrada"
      ? Number(acumulador + valorAtual.value)
      : Number(acumulador - valorAtual.value);
  }, 0);

  return (
    <div className="total">
      <div className="total_value__box">
        <h2>Valor total:</h2>
        <p>
          {sum.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};

export default Total;
