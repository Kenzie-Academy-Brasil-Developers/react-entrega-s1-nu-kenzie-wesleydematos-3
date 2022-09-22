import "./style.css";

const ButtonGreySmall = ({ content }) => {
  return (
    <button type="button" className="buttonGreySmall">
      {content}
    </button>
  );
};

export default ButtonGreySmall;
