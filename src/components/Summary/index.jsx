import "./style.css";
import ButtonGreySmall from "../ButtonGreySmall";
import ButtonPinkSmall from "../ButtonPinkSmall";

const Summary = () => {
  return (
    <div className="summary">
      <h2>Resumo financeiro</h2>
      <div className="summary__btns">
        <ButtonPinkSmall content="Todos" />
        <ButtonGreySmall content="Entradas" />
        <ButtonGreySmall content="Despesas" />
      </div>
    </div>
  );
};

export default Summary;
