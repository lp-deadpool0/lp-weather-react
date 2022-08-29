import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about pop-up-modal ">
      <div className="pop-up">
        <Link to="/">
          <span className="pop-up__cross">✕</span>
        </Link>
        <h2 className="about__title h2">About Me</h2>
        <p className="about__descript">
          HI! I'm a Front-End Developer and Web Designer
        </p>

        <Link to="/">
          <button className="pop-up__btn">Ok</button>
        </Link>
      </div>
    </section>
  );
};

export default About;
