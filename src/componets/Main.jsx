import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Main = () => {
  React.useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${"Дербент"}&units=metric&apikey=${"024218cabd85ecb2f167a7c212191940"}`
      )
      .then((res) => {
        console.log(res.data.weather[0].main);
        console.log(res.data.main.temp);
      });
  }, []);

  return (
    <section className="main">
      <div className="container center">
        <h1 className="main__title h1">
          Find out the temperature in your city right now
        </h1>

        <div className="main__input">
          <input className="main__input" type="text" />
        </div>
        <Link to="/weather">
          <button className="main__submit btn" type="submit">
            Check your weather now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Main;
