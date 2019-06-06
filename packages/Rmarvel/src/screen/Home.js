import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { Offset, Fetching } from "./../actions/index";
import { connect } from "react-redux";
import Card from "./../components/Card";

const Home = ({ history, fetching, stateFetch }) => {
  // useEffect
  useEffect(() => {
    console.log("useEffetc");
    fetching();
    window.addEventListener("scroll", handleScroll);
  }, []);

  // scroll infinity
  const handleScroll = () => {
    console.log("scroll");
    const lastScrollY = window.scrollY;
    const lastScrollMaxY = window.scrollMaxY;
    const location = window.location.pathname;
    console.log(location);
    if (lastScrollY === lastScrollMaxY && location === "/") {
      fetching();
      console.log("request fetch");
    }
  };
  // render
  return (
    <div id="nice">
      {stateFetch.data.map((item, index) => {
        return <Card key={index} history={history} item={item} />;
      })}
      {stateFetch && <div>Loading...</div>}
    </div>
  );
};

const mapStateToProps = state => ({
  stateFetch: state.fetching
});

const mapDispatchToProps = dispatch => {
  return {
    fetching: bindActionCreators(Fetching, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
