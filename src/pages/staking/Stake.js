import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { handleLoading } from "../../actions/loadingActions";
import { useTranslation } from "react-i18next";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

// load assets
import AvatarImage from "../../assets/image/avatar.png";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        data: [45, 55], // 55% staked, 45% not staked
        backgroundColor: ["#FCD34D", "#1E40AF"], // Colors for the chart
        borderColor: ["#FCD34D", "#1E40AF"],
      },
    ],
    labels: ["staked", "unstaked"],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          title: (tooltipItem) => `${tooltipItem[0].raw}%`,
          label: function (tooltipItem) {
            return `${tooltipItem.label}`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

const Stake = (props) => {
  const { t } = useTranslation();

  useEffect(() => {
    props.handleLoading(true);
    setTimeout(() => {
      props.handleLoading(false);
    }, 200);
  }, []);

  return (
    <div className="staking-section">
      <div className="staking-block">
        <h2 className="title">{t("stake")} $GVV</h2>
        <p className="desc">{t("type stake amount")}</p>
        <div className="amount-section">
          <div className="amount-group">
            <div className="amount-icon">
              <AttachMoneyIcon />
            </div>
            <input
              type="number"
              className="amount-input"
              placeholder={t("You have")}
            />
          </div>
          <div className="amount-gvv">
            <select className="amount-select">
              <option value="0">0</option>
              <option value="1000">1000</option>
              <option value="10000">10000</option>
            </select>
            <p className="sub-text">$ GVV</p>
          </div>
        </div>
        <button type="button" className="staking-btn">
          {t("stake")} $GVV
        </button>
      </div>
      <div className="staking-percent">
        <div className="avatar-section">
          <div className="avatar-block">
            <img src={AvatarImage} alt="avatar" className="avatar-image" />
            <div className="avatar-sub-block">
              <p className="avatar-name">xxx@gmail.com</p>
              <p className="avatar-address">0xf2d4...6f91</p>
            </div>
          </div>
          <div className="line-chart-block">
            <DoughnutChart />
          </div>
        </div>
        <div className="percent-section">
          <div className="percent-item">
            <div className="round" style={{ backgroundColor: "#f9e727" }}></div>
            <p className="percent-text">45% Unstaked</p>
          </div>
          <div className="percent-item">
            <div className="round" style={{ backgroundColor: "#0f42f2" }}></div>
            <p className="percent-text">55% Staked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Stake.propTypes = {
  handleLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps, { handleLoading })(Stake);
