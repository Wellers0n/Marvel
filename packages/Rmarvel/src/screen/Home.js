import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { Offset, Fetching } from "./../actions/index";
import { connect } from "react-redux";

const Home = ({ stateOffset, increment, history, fetching, stateFetch }) => {
  useEffect(() => {
    console.log("useEffetc");
    fetching();
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    console.log("scroll");
    const lastScrollY = window.scrollY;
    const lastScrollMaxY = window.scrollMaxY;
    if (lastScrollY === lastScrollMaxY) {
      fetching();
      console.log("request fetch");
    }
  };

  return (
    <div id="nice">
      {stateFetch.data.map((item, index) => {
        return <div key={index}>nome: {item.name}</div>;
      })}
      {stateFetch && <div>Loading...</div>}
    </div>
  );
};

const mapStateToProps = state => ({
  stateOffset: state.offset.offset,
  stateFetch: state.fetching
});

const mapDispatchToProps = dispatch => {
  return {
    increment: bindActionCreators(Offset, dispatch),
    fetching: bindActionCreators(Fetching, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
