import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { handleLangLoading } from "./actions/loadingActions";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// import pages
import Header from "./pages/layout/Header";
import SignHeader from "./pages/layout/SignHeader";
import Home from "./pages/Home";
import Presale from "./pages/presale/Presale";
import Presale1 from "./pages/presale/Presale1";
import Presale2 from "./pages/presale/Presale2";
import Staking from "./pages/staking";
import Venture from "./pages/venture";
import Footer from "./pages/layout/Footer";

const App = (props) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (props.loading.langLoading || props.loading.loading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [props.loading]);

  const changeLanguage = async (lng) => {
    props.handleLangLoading(true);
    await i18n.changeLanguage(lng);
    props.handleLangLoading(false);
  };

  return (
    <div>
      <Router>
        <Header changeLanguage={changeLanguage} />
        <SignHeader />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/presale" exact element={<Presale />} />
          <Route path="/presale1" exact element={<Presale1 />} />
          <Route path="/presale2" exact element={<Presale2 />} />
          <Route path="/staking/*" exact element={<Staking />} />
          <Route path="/venture/*" exact element={<Venture />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

App.propTypes = {
  handleLangLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps, { handleLangLoading })(App);
