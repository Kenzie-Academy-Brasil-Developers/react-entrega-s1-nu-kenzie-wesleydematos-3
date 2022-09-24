import "./style.css";

const ButtonPinkMedium = ({ content, setAuth, auth }) => {
  return (
    <button
      type="button"
      className="buttonPinkMedium"
      onClick={() => setAuth(!auth)}
    >
      {content}
    </button>
  );
};

export default ButtonPinkMedium;
