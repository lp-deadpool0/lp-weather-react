import React from "react";
import { Link } from "react-router-dom";

const Lang = () => {
  return (
    <section id="_1" className="change-lang pop-up-modal hidden">
      <div className="change-lang__pop-up pop-up">
        <Link to="/">
          <span className="pop-up__cross">✕</span>
        </Link>
        <h2 className="change-lang__title h2">Change the language</h2>
        <div className="change-lang__lang-container">
          <p className="change-lang__lang change-lang__lang_enabled">English</p>
          <div className="change-lang__mid-line"></div>
          <p className="change-lang__lang">Russian</p>
        </div>

        <Link to="/">
          <button className="pop-up__btn">Ok</button>
        </Link>
      </div>
    </section>
  );
};

export default Lang;
