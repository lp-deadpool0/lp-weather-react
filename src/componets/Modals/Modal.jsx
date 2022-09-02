import React from "react";
import { useNavigate } from "react-router-dom";

const Feed = (props) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="feedback pop-up-modal">
      <div className="pop-up">
        <span onClick={goBack} className="pop-up__cross">
          ✕
        </span>

        {props.children}

        <button onClick={goBack} className="pop-up__btn">
          Ok
        </button>
      </div>
    </section>
  );
};

export default Feed;
