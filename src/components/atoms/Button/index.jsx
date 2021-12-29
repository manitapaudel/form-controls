import Style from "./button.module.scss";

const Button = ({ type = "button", children }) => {
  return (
    <button className={Style.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
