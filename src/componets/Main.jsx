import React from "react";
import { Link } from "react-router-dom";

const Main = ({ onSubmit }) => {
  const [value, setValue] = React.useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value.trim());
  };
  const onSubmitHandler = () => {
    onSubmit(value);
  };

  const warningAlert = () => {
    return alert("Warning: Invalid data");
  };

  return (
    <section className="main">
      <div className="container center">
        <h1 className="main__title h1">
          Find out the temperature in your city right now
        </h1>

        <div className="main__input">
          <input
            className="main__input"
            type="text"
            onChange={onChangeHandler}
            value={value}
            autoComplete="on"
          />
        </div>
        <Link to={value ? "/weather" : warningAlert}>
          <button
            className="main__submit btn"
            onClick={value ? onSubmitHandler : warningAlert}
            type="submit"
          >
            Check your weather now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Main;
