import "./Button.css";

const Button = ({ text }) => {
  return (
    <>
      <button className="home__cta">{text}</button>
    </>
  );
};

export default Button;
