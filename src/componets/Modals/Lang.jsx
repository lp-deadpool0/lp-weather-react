import React from "react";
import { useNavigate } from "react-router-dom";

const Lang = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section id="_1" className="change-lang pop-up-modal hidden">
      <div className="change-lang__pop-up pop-up">
        <span onClick={goBack} className="pop-up__cross">
          ✕
        </span>

        <h2 className="change-lang__title h2">Change the language</h2>
        <div className="change-lang__lang-container">
          <p className="change-lang__lang change-lang__lang_enabled">English</p>
          <div className="change-lang__mid-line"></div>
          <p className="change-lang__lang">Russian</p>
        </div>

        <button onClick={goBack} className="pop-up__btn">
          Ok
        </button>
      </div>
    </section>
  );
};

export default Lang;
