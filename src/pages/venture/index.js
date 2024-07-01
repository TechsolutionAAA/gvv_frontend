import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { handleLoading } from "../../actions/loadingActions";
import Description from "./Description";
import List from "./List";

// load assets
import "./venture.scss";

const index = (props) => {
  useEffect(() => {
    props.handleLoading(true);
    setTimeout(() => {
      props.handleLoading(false);
    }, 200);
  }, []);

  return (
    <div className="venture">
      <div className="container">
        <div className="section">
          <Routes>
            <Route path="/description" exact element={<Description />} />
            <Route path="/list" exact element={<List />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

index.propTypes = {
  handleLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps, { handleLoading })(index);
