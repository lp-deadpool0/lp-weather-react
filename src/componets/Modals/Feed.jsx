import React from "react";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <section className="feedback pop-up-modal">
      <div className="pop-up">
        <Link to="/">
          <span className="pop-up__cross">✕</span>
        </Link>
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

        <Link to="/">
          <button className="pop-up__btn">Ok</button>
        </Link>
      </div>
    </section>
  );
};

export default Feed;
