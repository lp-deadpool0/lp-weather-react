import React from "react";

function Logo({ className }) {
  return (
    <div className={"logotype__img"}>
      <img
        className={className && className}
        src="img/logo.svg"
        alt="logotype"
      />
    </div>
  );
}

export default Logo;
