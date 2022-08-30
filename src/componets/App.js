import React from "react";
import Logo from "./Logo";
import Main from "./Main";
import Navigatin from "./Navigatin";
import Lang from "./Modals/Lang";
import Feed from "./Modals/Feed";
import About from "./Modals/About";
import Weather from "./Weather";
import { Routes, Route } from "react-router-dom";

import "./style.scss";
import "./null.scss";

function App() {
  const [logoVisible, setLogoVisible] = React.useState(true);
  const [place, setPlace] = React.useState("");

  const preloader = () => {
    setTimeout(() => {
      setLogoVisible(false);
    }, 1000);
  };

  React.useEffect(preloader, []);

  const onSubmitHandler = (value) => {
    setPlace(value);
  };

  return (
    <div className="main">
      {logoVisible ? (
        <Logo />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Main onSubmit={onSubmitHandler} />} />
            <Route path="/weather" element={<Weather place={place} />} />
            <Route path="/lang" element={<Lang />} />
            <Route path="/about" element={<About />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
          <Navigatin />
        </>
      )}
    </div>
  );
}

export default App;
