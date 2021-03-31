import React, { Fragment } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Ditto
          <small>({t("appDescription")})</small>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto"></ul>
          <div className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    i18n.changeLanguage("en");
                  }}
                >
                  (en)
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    i18n.changeLanguage("fr");
                  }}
                >
                  (fr)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

NavBar.propTypes = {};

export default NavBar;
