import React from "react";

const Header = (props) => {
  console.log("Header Component has fired!");
  const { navigate } = props;
  return (
    <header>
      <div onClick={() => navigate("/")}>
        {/* LOGO GOES HERE */}
        <h1>Logo to my left</h1>
      </div>
      <nav>
        <a href="/" target="_blank" rel="noopener noreferrer">
          one
        </a>{" "}
        <a href="/" target="_blank" rel="noopener noreferrer">
          two
        </a>{" "}
        <a href="/" target="_blank" rel="noopener noreferrer">
          three
        </a>{" "}
        <a href="/" target="_blank" rel="noopener noreferrer">
          four
        </a>{" "}
      </nav>
    </header>
  );
};

export default Header;
