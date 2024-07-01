import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// import logo image
import LogoImage from "../../assets/image/logo.png";

// import style
import "./SignHeader.scss";

const SignHeader = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // set ref for menu
  const presaledropdownRef = useRef(null);
  const stakedropdownRef = useRef(null);
  const venturedropdownRef = useRef(null);

  // menu flag
  const [presaleMenuFlag, setPresaleMenuFalg] = useState(false);
  const [stakeMenuFlag, setStakeMenuFlag] = useState(false);
  const [ventureMenuFlag, setVentureMenuFlag] = useState(false);

  const handlePresaleMenuToggle = () => {
    setPresaleMenuFalg(!presaleMenuFlag);
  };

  const handleStakeMenuToggle = () => {
    setStakeMenuFlag(!stakeMenuFlag);
  };

  const handleVentureMenuToggle = () => {
    setVentureMenuFlag(!ventureMenuFlag);
  };

  const handleClickOutside = (event) => {
    if (
      presaledropdownRef.current &&
      !presaledropdownRef.current.contains(event.target)
    ) {
      setPresaleMenuFalg(false);
    }

    if (
      stakedropdownRef.current &&
      !stakedropdownRef.current.contains(event.target)
    ) {
      setStakeMenuFlag(false);
    }

    if (
      venturedropdownRef.current &&
      !venturedropdownRef.current.contains(event.target)
    ) {
      setVentureMenuFlag(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sign-header">
      <div className="container">
        <div className="section">
          <div className="logo">
            <img src={LogoImage} className="image" />
            <h2 className="title">GVV</h2>
            <button type="button" className="responsive-menu-btn">
              <MenuIcon />
            </button>
          </div>
          <div className="menu-bar">
            <div className="item">
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                {t("Home")}
              </Link>
            </div>
            <div className="item" ref={presaledropdownRef}>
              <button
                type="button"
                className={
                  location.pathname.includes("/presale") ? "active" : ""
                }
                onClick={handlePresaleMenuToggle}
              >
                {t("Sales Round")}{" "}
                <KeyboardArrowDownIcon
                  className={presaleMenuFlag ? "arrow-btn" : ""}
                />
              </button>

              {presaleMenuFlag && (
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link
                      to="/presale"
                      className={
                        location.pathname === "/presale" ? "active" : ""
                      }
                    >
                      {t("Presale")}
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/presale1"
                      className={
                        location.pathname === "/presale1" ? "active" : ""
                      }
                    >
                      {t("Presale")} 1
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/presale2"
                      className={
                        location.pathname === "/presale2" ? "active" : ""
                      }
                    >
                      {t("Presale")} 2
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="item" ref={stakedropdownRef}>
              <button
                type="button"
                className={
                  location.pathname.includes("/staking") ? "active" : ""
                }
                onClick={handleStakeMenuToggle}
              >
                {t("Sales Round")}{" "}
                <KeyboardArrowDownIcon
                  className={stakeMenuFlag ? "arrow-btn" : ""}
                />
              </button>
              {stakeMenuFlag && (
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link
                      to="/staking/withdraw"
                      className={
                        location.pathname === "/staking/withdraw"
                          ? "active"
                          : ""
                      }
                    >
                      {t("Withdraw")}
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/staking/stake"
                      className={
                        location.pathname === "/staking/stake" ? "active" : ""
                      }
                    >
                      {t("Stake")}
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="item" ref={venturedropdownRef}>
              <button
                type="button"
                className={
                  location.pathname.includes("/venture") ? "active" : ""
                }
                onClick={handleVentureMenuToggle}
              >
                {t("Our Ventures")}{" "}
                <KeyboardArrowDownIcon
                  className={ventureMenuFlag ? "arrow-btn" : ""}
                />
              </button>
              {ventureMenuFlag && (
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link
                      to="/venture/description"
                      className={
                        location.pathname === "/venture/description"
                          ? "active"
                          : ""
                      }
                    >
                      {t("Description")}
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/venture/list"
                      className={
                        location.pathname === "/venture/list" ? "active" : ""
                      }
                    >
                      {t("List")}
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="sign">
            <button type="button" className="sign-btn">
              {t("connect")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignHeader;
