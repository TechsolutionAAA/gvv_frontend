import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleLoading } from "../../actions/loadingActions";
import ErrorIcon from "@mui/icons-material/Error";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// load image assets
import PresaleImage from "../../assets/image/presale-gvv.png";
import PresaleOverviewImage from "../../assets/image/overview.png";
import PresaleVideo from "../../assets/image/video.png";

// load style
import "./presale.scss";
import { useTranslation } from "react-i18next";

const Presale1 = (props) => {
  const { t } = useTranslation();
  const [presaleCost, setPresaleCost] = useState(0.34);
  const [presaleCount, setPresaleCount] = useState(1);

  useEffect(() => {
    props.handleLoading(true);
    setTimeout(() => {
      props.handleLoading(false);
    }, 200);
  }, []);

  useEffect(() => {
    setPresaleCost(Number(Number(0.34 * Number(presaleCount)).toFixed(2)));
  }, [presaleCount]);

  const handleChangePresaleCount = (flag) => {
    setPresaleCount(
      flag ? presaleCount + 1 : presaleCount === 1 ? 1 : presaleCount - 1
    );
  };

  return (
    <div className="presale">
      <div className="container">
        <div className="section">
          <div className="presale-section">
            <div className="logo">
              <img src={PresaleImage} />
            </div>
            <div className="main">
              <h1 className="title">{t("Private Sales Round")} 1</h1>
              <p className="desc">{t("presale-description")}</p>
              <button type="button" className="presale-btn">
                $GVV 1 -
                <span className="yellow">
                  ${presaleCost} ( {t("presale-discount-1")} )
                </span>
              </button>
              <div className="count-section">
                <button
                  type="button"
                  className="count-btn"
                  onClick={() => handleChangePresaleCount(false)}
                >
                  -
                </button>
                <div className="count-res">
                  <input
                    type="number"
                    className="count-input"
                    value={presaleCount}
                    onChange={(e) =>
                      setPresaleCount(
                        Number(e.target.value) > 0 ? Number(e.target.value) : 1
                      )
                    }
                  />
                </div>
                <button
                  type="button"
                  className="count-btn"
                  onClick={() => handleChangePresaleCount(true)}
                >
                  +
                </button>
              </div>
              <button type="button" className="presale-buy-btn">
                {t("buy-sgvv")}
              </button>
            </div>
          </div>
          <div className="presale-overview">
            <div className="item">
              <img className="overview-image" src={PresaleOverviewImage} />
              <h2 className="title">{t("total supply")}</h2>
              <p className="content">$GVV 80,000,000</p>
            </div>
            <div className="item">
              <img className="overview-image" src={PresaleOverviewImage} />
              <h2 className="title">{t("listing date")}</h2>
              <p className="content">02 Feb 24</p>
            </div>
            <div className="item">
              <img className="overview-image" src={PresaleOverviewImage} />
              <h2 className="title">{t("total buys")}</h2>
              <p className="content">40,000</p>
            </div>
            <div className="item">
              <img className="overview-image" src={PresaleOverviewImage} />
              <h2 className="title">{t("unique buyers")}</h2>
              <p className="content">10,000</p>
            </div>
          </div>
          <div className="presale-video-view">
            <div className="guide-title">
              <ErrorIcon sx={{ color: "red" }} />
              <p className="title">{t("presale video guide")}</p>
            </div>
            <div className="video-section">
              <img className="presale-video" src={PresaleVideo} />
              <button type="button" className="presale-video-btn">
                <PlayArrowIcon sx={{ fontSize: 60 }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Presale1.propTypes = {
  handleLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps, { handleLoading })(Presale1);
