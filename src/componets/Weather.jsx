import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Weather = () => {
  const [preloaderVisible, setPreloaderVisible] = React.useState(true);
  const [temp, setTemp] = React.useState();
  const [mainState, setMainState] = React.useState();
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  React.useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem(
          "place"
        )}&units=metric&apikey=${"024218cabd85ecb2f167a7c212191940"}`
      )
      .then((res) => {
        setMainState(res.data.weather[0].main);
        setTemp(res.data.main.temp.toString());
        if (res.status === 200) {
          setPreloaderVisible(false);
        }
      })
      .catch(function (error) {
        localStorage.removeItem("place");
        goBack();
      });
  }, []);

  const render = () => {
    return (
      <section className="output main">
        <div className="container">
          <h2 className="output__title ">
            In {localStorage.getItem("place")} now
          </h2>
          <div className="output__degrees-container">
            <span className="output__degrees-elips">°</span>
            <h2 className="output__degrees">{temp.slice(0, 2)}</h2>
            <p className="output__degrees-subtitle">{mainState}</p>
          </div>
          <Link to="/">
            <button className="output__back-btn btn" type="submit">
              Back
            </button>
          </Link>
        </div>
      </section>
    );
  };

  return (
    <>
      {preloaderVisible ? (
        <Logo className="logotype__img-preloader" />
      ) : (
        <>{render()}</>
      )}
    </>
  );
};

export default Weather;
