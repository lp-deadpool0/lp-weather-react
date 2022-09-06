import React from "react";
import Logo from "./Logo";
import Main from "./Main";
import Navigatin from "./Navigatin";
import Weather from "./Weather";
import Modal from "./Modals/Modal";
import { Routes, Route } from "react-router-dom";

import "./style.scss";
import "./null.scss";

function App() {
  const [logoVisible, setLogoVisible] = React.useState(true);
  // const start = () => play();

  const preloader = () => {
    setTimeout(() => {
      setLogoVisible(false);
    }, 1000);
  };

  React.useEffect(() => {
    preloader();
  }, []);

  const onSubmitHandler = (value) => {
    localStorage.setItem("place", value.trim());
  };

  return (
    <div className="main">
      {logoVisible ? (
        <Logo />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Main onSubmit={onSubmitHandler} />} />
            <Route path="/weather" element={<Weather />} />
            <Route
              path="/lang"
              element={
                <Modal>
                  <h2 className="change-lang__title h2">Change the language</h2>
                  <div className="change-lang__lang-container">
                    <p className="change-lang__lang change-lang__lang_enabled">
                      English
                    </p>
                    <div className="change-lang__mid-line"></div>
                    <p className="change-lang__lang">Russian</p>
                  </div>
                </Modal>
              }
            />
            <Route
              path="/about"
              element={
                <Modal>
                  <h2 className="about__title h2">About Me</h2>
                  <p className="about__descript">
                    HI! I'm a Front-End Developer and Web Designer
                  </p>
                </Modal>
              }
            />
            <Route
              path="/feed"
              element={
                <Modal>
                  <h2 className="feedback__title h2">Feedback</h2>

                  <ul className="feedback__items">
                    <li className="feedback__item feedback__item_gg">
                      <a
                        href="mailto:lpdead4@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </li>
                    <li className="feedback__item feedback__item_tg">
                      <a
                        href="https://t.me/lp_deadpool"
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </li>
                    <li className="feedback__item feedback__item_in">
                      <a
                        href="https://vk.com/app8089300"
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </li>
                  </ul>
                </Modal>
              }
            />
          </Routes>
          <Navigatin />
        </>
      )}
    </div>
  );
}

export default App;
