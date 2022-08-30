import React from "react";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="feedback pop-up-modal">
      <div className="pop-up">
        <span onClick={goBack} className="pop-up__cross">
          ✕
        </span>

        <h2 className="feedback__title h2">Feedback</h2>
        <ul className="feedback__items">
          <li className="feedback__item feedback__item_gg">
            <a href="#_"></a>
          </li>
          <li className="feedback__item feedback__item_tg">
            <a href="#_"></a>
          </li>
          <li className="feedback__item feedback__item_in">
            <a href="#_"></a>
          </li>
        </ul>

        <button onClick={goBack} className="pop-up__btn">
          Ok
        </button>
      </div>
    </section>
  );
};

export default Feed;
