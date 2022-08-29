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

  const preloader = () => {
    setTimeout(() => {
      setLogoVisible(false);
    }, 1000);
  };

  React.useEffect(preloader, []);

  return (
    <div className="main">
      {logoVisible ? (
        <Logo />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/lang" element={<Lang />} />
            <Route path="/about" element={<About />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
          <Navigatin />
        </>
      )}
    </div>
  );
}

export default App;
