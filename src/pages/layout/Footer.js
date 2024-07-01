import React from "react";
import { useTranslation } from "react-i18next";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import SickIcon from "@mui/icons-material/Sick";

// load image assets
import LogoImage from "../../assets/image/logo.png";

// load style
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="container">
        <div className="section">
          <div className="partner">
            <div className="logo">
              <img src={LogoImage} className="image" />
              <h2 className="title">GVV</h2>
            </div>
            <p className="sub-title">{t("partners")}</p>
            <div className="sub-menu">
              <div className="item">
                <a href="/golden">{t("Golden Valley Ventures")}</a>
              </div>
              <div className="item">
                <a href="/3dtv">{t("3DTV")}</a>
              </div>
              <div className="item">
                <a href="/">{t("Illuminates")}</a>
              </div>
              <div className="item">
                <a href="/">{t("Laure Media")}</a>
              </div>
            </div>
            <div className="background"></div>
          </div>
          <div className="intro">
            <div className="copyright">
              Copyright @ {new Date().getFullYear()} GVV.{" "}
              {t("All rights reserved")}.
            </div>
            <div className="social">
              <a href="https://discord.com" target="_blank">
                <FacebookIcon />
              </a>
              <a href="https://discord.com" target="_blank">
                <XIcon />
              </a>
              <a href="https://discord.com" target="_blank">
                <SickIcon />
              </a>
              <a href="https://discord.com" target="_blank">
                <YouTubeIcon />
              </a>
              <a href="https://discord.com" target="_blank">
                <TelegramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
