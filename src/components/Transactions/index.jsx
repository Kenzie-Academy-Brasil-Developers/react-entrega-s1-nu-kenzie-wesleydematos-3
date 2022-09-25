import "./style.css";
import ButtonPinkLarge from "../ButtonPinkLarge";
import { useState } from "react";

const Transactions = () => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(description, value, typeValue);
  }

  return (
    <form className="transactions" onSubmit={handleSubmit}>
      <label htmlFor="transDescription">Descrição</label>
      <input
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
            type="number"
            id="inputValue"
            onChange={(event) => setValue(event.target.value)}
          />
          <p>R$</p>
        </div>
        <div className="box__type">
          <label htmlFor="selectType">Tipo de Valor</label>
          <select
            name="selectType"
            id="selectType"
            onChange={(event) => setTypeValue(event.target.value)}
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
