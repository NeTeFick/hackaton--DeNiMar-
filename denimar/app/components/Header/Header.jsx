import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo" src="/public/img/css.png" alt="logo" />
        <p className="logo-text">CSSCHAN</p>
      </div>
      <form className="search-container" id="searchForm">
        <button type="submit" id="searchBtn" className="search-button">
          <img className="lupa" src="/public/img/serch.png" alt="" />
        </button>
        <input
          type="text"
          id="query"
          className="search-input"
          placeholder="найди своего друга"
          aria-label="найди своего друга"
        />
      </form>
      <button className="lenguage-batton">
        <img className="lenguage" src="/public/img/russhia.png" alt="" />
      </button>
    </header>
  );
};

export default Header;
