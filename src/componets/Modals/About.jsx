import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="about pop-up-modal ">
      <div className="pop-up">
        <span onClick={goBack} className="pop-up__cross">
          ✕
        </span>
        <h2 className="about__title h2">About Me</h2>
        <p className="about__descript">
          HI! I'm a Front-End Developer and Web Designer
        </p>
        <button onClick={goBack} className="pop-up__btn">
          Ok
        </button>
      </div>
    </section>
  );
};

export default About;
