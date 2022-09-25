import "./style.css";
import ButtonPinkLarge from "../ButtonPinkLarge";
import { useState } from "react";

const Transactions = ({ transactions, setTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [typeValue, setTypeValue] = useState("Entrada");

  function handleSubmit(event) {
    event.preventDefault();

    setTransactions([...transactions, { description, value, typeValue }]);
    setDescription("");
    setValue("");
    setTypeValue("Entrada");
  }

  return (
    <form className="transactions" onSubmit={handleSubmit}>
      <label htmlFor="transDescription">Descrição</label>
      <input
        required
        value={description}
        type="text"
        placeholder="Digite sua descrição"
        id="transDescription"
        onChange={(event) => setDescription(event.target.value)}
      />
      <span>Ex: Compra de roupas</span>
      <div className="box">
        <div className="box__value">
          <label htmlFor="inputValue">Valor</label>
          <input
            required
            value={value}
            type="number"
            id="inputValue"
            onChange={(event) => setValue(event.target.value)}
          />
          <p>R$</p>
        </div>
        <div className="box__type">
          <label htmlFor="selectType">Tipo de Valor</label>
          <select
            value={typeValue}
            name="selectType"
            id="selectType"
            onChange={(event) => {
              setTypeValue(event.target.value);
            }}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <ButtonPinkLarge content="Inserir Transação" />
    </form>
  );
};

export default Transactions;
