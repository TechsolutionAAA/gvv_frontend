import React from "react";
import { useTranslation } from "react-i18next";

// import style file
import "./Header.scss";

const Header = (props) => {
  const { t, i18n } = useTranslation();

  // Get the current language
  const currentLanguage = i18n.language;

  const handleChangeLanguage = (e) => {
    props.changeLanguage(e.target.value);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="section">
          <p className="title">
            {t(
              "$GVV serves a multiple purpose as a digital asset and equity share"
            )}
          </p>
          <select
            className="language-menu"
            onChange={handleChangeLanguage}
            value={currentLanguage}
          >
            <option value="en">ENG</option>
            <option value="es">SPAN</option>
            <option value="fr">FRA</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
