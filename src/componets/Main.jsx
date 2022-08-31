import React from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import errorAudio from "./../audio/error.mp3";

const Main = ({ onSubmit }) => {
  const [value, setValue] = React.useState("");
  const [warningClass, setWarningClass] = React.useState("");
  const [warningMessage, setWarningMessage] = React.useState("");
  const [play] = useSound(errorAudio, { volume: 3 });

  const onChangeHandler = (e) => {
    setWarningClass("");
    setWarningMessage("");
    setValue(e.target.value);
  };
  const onSubmitHandler = () => {
    localStorage.removeItem("place");
    onSubmit(value);
  };

  const warningDataAlert = () => {
    // alert("Warning: Invalid data");
    setWarningClass("main__input-warning");
    setWarningMessage("Warning: Invalid data");
    play();
  };

  return (
    <section className="main">
      <div className="container center">
        <h1 className="main__title h1">
          Find out the temperature in your city right now
        </h1>

        <div className={"main__input " + warningClass}>
          <input
            className="main__input"
            type="text"
            onChange={onChangeHandler}
            value={value}
            placeholder={warningMessage}
          />
        </div>
        <Link to={value ? "/weather" : warningDataAlert}>
          <button
            className="main__submit btn"
            onClick={value ? onSubmitHandler : warningDataAlert}
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
