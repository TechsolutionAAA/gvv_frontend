import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleLoading } from "../../actions/loadingActions";
import { useTranslation } from "react-i18next";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";

// icons
import FilterListIcon from "@mui/icons-material/FilterList";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// load assets
import SliderImage1 from "../../assets/image/slider1.jpg";
import SliderImage2 from "../../assets/image/slider2.jpg";
import SliderImage3 from "../../assets/image/slider3.jpg";

const List = (props) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("venture");

  useEffect(() => {
    props.handleLoading(true);
    setTimeout(() => {
      props.handleLoading(false);
    }, 200);
  }, []);

  return (
    <div className="list-section">
      <h2 className="list-title">{t("$GVV Backend Ventures")}</h2>
      <div className="filter-section">
        <div className="filter-btn-group">
          <button
            type="button"
            className={
              filter === "venture" ? "filter-btn active" : "filter-btn"
            }
            onClick={() => setFilter("venture")}
          >
            All Ventures
          </button>
          <button
            type="button"
            className={filter === "saas" ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter("saas")}
          >
            Saas
          </button>
          <button
            type="button"
            className={
              filter === "entertainment" ? "filter-btn active" : "filter-btn"
            }
            onClick={() => setFilter("entertainment")}
          >
            Entertainment
          </button>
          <button
            type="button"
            className={filter === "retail" ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter("retail")}
          >
            Retail
          </button>
        </div>
        <div className="filter-group">
          <button type="button" className="filter-btn">
            <FilterListIcon />
          </button>
          <button type="button" className="filter-btn">
            <DeveloperBoardIcon />
          </button>
          <select className="filter-select">
            <option value="ventures">Our ventures</option>
            <option value="ventures">Our ventures</option>
            <option value="ventures">Our ventures</option>
            <option value="ventures">Our ventures</option>
          </select>
        </div>
      </div>
      <div className="slider-section">
        <div className="slider-main">
          <div className="slider-item">
            <img src={SliderImage1} className="slider-image" />
            <h3 className="slider-title">Viral Interactive</h3>
            <p className="slider-sub-title">Category - Saas</p>
            <p className="slider-content">
              Viral Interactive is a software as a service platform that offers
              the services of social media account management. Viral Interactive
              offers services in the orders of Viral AI , Viral TV and VIral
              Collaborative
            </p>
          </div>
          <div className="slider-item">
            <img src={SliderImage2} className="slider-image" />
            <h3 className="slider-title">3DTV ( The Web3 TV )</h3>
            <p className="slider-sub-title">Category - Entertainment</p>
            <p className="slider-content">
              3DTV is a web3 comic and movie franchise. A platform built for
              content creators and digital entertainment fans to share value.
            </p>
          </div>
          <div className="slider-item">
            <img src={SliderImage3} className="slider-image" />
            <h3 className="slider-title">XXXXxxxxxx</h3>
            <p className="slider-sub-title">Category - xxxx</p>
            <p className="slider-content">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </div>
        </div>
        <div className="pagination">
          <Pagination
            count={10}
            sx={{
              "& .MuiPaginationItem-root": {
                // Default text color
                backgroundColor: "#2d3b28",
                color: "#fff",
                "&:hover": {
                  // Text color on hover
                  color: "#000",
                  // Background color on hover
                  backgroundColor: "#cbfb45",
                },
              },
              "& .Mui-selected": {
                // Text color for selected item
                color: "#000 !important",
                // Background color for selected item
                backgroundColor: "#cbfb45 !important",
              },
            }}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  handleLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps, { handleLoading })(List);
