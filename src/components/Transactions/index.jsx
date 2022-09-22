import "./style.css";
import ButtonPinkLarge from "../ButtonPinkLarge";

const Transactions = () => {
  return (
    <form className="transactions">
      <label htmlFor="transDescription">Descrição</label>
      <input
        type="text"
        placeholder="Digite sua descrição"
        id="transDescription"
      />
      <span>Ex: Compra de roupas</span>
      <div className="box">
        <div className="box__value">
          <label htmlFor="inputValue">Valor</label>
          <input type="number" placeholder="R$" id="inputValue" />
        </div>
        <div className="box__type">
          <label htmlFor="selectType">Tipo de Valor</label>
          <select name="selectType" id="selectType">
            <option value="Entrada">Entrada</option>
            <option value="Despensa">Despensa</option>
          </select>
        </div>
      </div>
      <ButtonPinkLarge content="Inserir Transação" />
    </form>
  );
};

export default Transactions;
